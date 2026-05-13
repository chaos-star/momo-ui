import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  Message,
  Modal,
  Select,
  Space,
  Table,
  Tabs,
  Tag,
  Typography,
} from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconPlus,
  IconRefresh,
} from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import {
  createDataField,
  createFieldPolicy,
  createFieldPolicyBinding,
  DataFieldRecord,
  deleteDataField,
  deleteFieldPolicy,
  deleteFieldPolicyBinding,
  fetchDataFieldPage,
  fetchFieldPolicyBindingPage,
  fetchFieldPolicyPage,
  FieldPolicyBindingRecord,
  FieldPolicyRecord,
  updateDataField,
  updateFieldPolicy,
  updateFieldPolicyBinding,
} from '@/api/access-policy';
import { formatTime } from '@/utils/accessControl';
import styles from '../data-scopes/style/index.module.less';

const { Title } = Typography;
const { TabPane } = Tabs;

type ManageType = 'field' | 'policy' | 'binding';
type ManageRecord =
  | DataFieldRecord
  | FieldPolicyRecord
  | FieldPolicyBindingRecord;

export default function FieldPolicyManagePage() {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState<ManageType>('field');
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [fields, setFields] = useState<DataFieldRecord[]>([]);
  const [policies, setPolicies] = useState<FieldPolicyRecord[]>([]);
  const [bindings, setBindings] = useState<FieldPolicyBindingRecord[]>([]);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<ManageRecord | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    const params = { page: current, pageSize, keyword: keyword || undefined };
    const request =
      activeTab === 'field'
        ? fetchDataFieldPage(params)
        : activeTab === 'policy'
        ? fetchFieldPolicyPage(params)
        : fetchFieldPolicyBindingPage(params);
    void request
      .then((res) => {
        if (canceled) return;
        if (activeTab === 'field')
          setFields((res.list || []) as DataFieldRecord[]);
        if (activeTab === 'policy')
          setPolicies((res.list || []) as FieldPolicyRecord[]);
        if (activeTab === 'binding')
          setBindings((res.list || []) as FieldPolicyBindingRecord[]);
        setTotal(res.total || 0);
      })
      .finally(() => !canceled && setLoading(false));
    return () => {
      canceled = true;
    };
  }, [activeTab, current, pageSize, keyword, tick]);

  const openCreate = () => {
    setSelected(null);
    form.resetFields();
    form.setFieldsValue({
      activeStatus: 1,
      effect: 'MASK',
      displayEffect: 'MASK',
      searchEffect: 'ALLOW',
      sortEffect: 'ALLOW',
      editEffect: 'ALLOW',
      exportEffect: 'ALLOW',
      maskType: 'MOBILE',
      subjectType: 'ROLE',
      priority: 100,
    });
    setVisible(true);
  };

  const openEdit = (record: ManageRecord) => {
    setSelected(record);
    form.setFieldsValue(record);
    setVisible(true);
  };

  const removeRecord = (record: ManageRecord) =>
    Modal.confirm({
      title: '确认删除',
      content:
        '删除字段权限配置后会影响字段展示、搜索、导出和编辑控制，确认继续？',
      onOk: async () => {
        if (activeTab === 'field') await deleteDataField(record.id);
        if (activeTab === 'policy') await deleteFieldPolicy(record.id);
        if (activeTab === 'binding') await deleteFieldPolicyBinding(record.id);
        Message.success('删除成功');
        setTick((x) => x + 1);
      },
    });

  const submit = async () => {
    const values = await form.validate();
    if (activeTab === 'field')
      selected
        ? await updateDataField({ ...values, id: selected.id })
        : await createDataField(values);
    if (activeTab === 'policy')
      selected
        ? await updateFieldPolicy({ ...values, id: selected.id })
        : await createFieldPolicy(values);
    if (activeTab === 'binding')
      selected
        ? await updateFieldPolicyBinding({ ...values, id: selected.id })
        : await createFieldPolicyBinding(values);
    Message.success(selected ? '更新成功' : '新增成功');
    setVisible(false);
    setTick((x) => x + 1);
  };

  const operationColumn: ColumnProps<ManageRecord> = {
    title: '操作',
    dataIndex: 'operations',
    width: 160,
    fixed: 'right',
    render: (_, record) => (
      <Space className={styles.operations}>
        <Button
          type="text"
          size="small"
          icon={<IconEdit />}
          onClick={() => openEdit(record)}
        >
          编辑
        </Button>
        <Button
          type="text"
          status="danger"
          size="small"
          icon={<IconDelete />}
          onClick={() => removeRecord(record)}
        >
          删除
        </Button>
      </Space>
    ),
  };

  const columns: ColumnProps<ManageRecord>[] = (() => {
    if (activeTab === 'field')
      return [
        { title: '字段编码', dataIndex: 'fieldCode', width: 180 },
        { title: '字段名称', dataIndex: 'fieldName', width: 160 },
        { title: '字段路径', dataIndex: 'fieldPath', width: 220 },
        { title: '字段类型', dataIndex: 'fieldType', width: 120 },
        {
          title: '敏感',
          dataIndex: 'sensitive',
          width: 90,
          render: (v) => (v === 1 ? <Tag color="red">是</Tag> : <Tag>否</Tag>),
        },
        { title: '描述', dataIndex: 'description', ellipsis: true },
        {
          title: '更新时间',
          dataIndex: 'updatedAt',
          width: 170,
          render: formatTime,
        },
        operationColumn,
      ];
    if (activeTab === 'policy')
      return [
        { title: '策略编码', dataIndex: 'policyCode', width: 190 },
        { title: '策略名称', dataIndex: 'policyName', width: 160 },
        { title: '展示', dataIndex: 'displayEffect', width: 100 },
        { title: '搜索', dataIndex: 'searchEffect', width: 100 },
        { title: '排序', dataIndex: 'sortEffect', width: 100 },
        { title: '编辑', dataIndex: 'editEffect', width: 100 },
        { title: '导出', dataIndex: 'exportEffect', width: 100 },
        { title: '脱敏', dataIndex: 'maskType', width: 120 },
        { title: '优先级', dataIndex: 'priority', width: 100 },
        operationColumn,
      ];
    return [
      { title: '主体类型', dataIndex: 'subjectType', width: 120 },
      { title: '主体 ID', dataIndex: 'subjectId', width: 100 },
      { title: 'API 编码', dataIndex: 'apiCode', width: 200 },
      { title: '字段编码', dataIndex: 'fieldCode', width: 180 },
      { title: '策略编码', dataIndex: 'policyCode', width: 190 },
      {
        title: '效果',
        dataIndex: 'effect',
        width: 100,
        render: (v) => (
          <Tag color={v === 'DENY' ? 'red' : 'green'}>{v || 'ALLOW'}</Tag>
        ),
      },
      {
        title: '过期时间',
        dataIndex: 'expireAt',
        width: 170,
        render: formatTime,
      },
      operationColumn,
    ];
  })();

  const data =
    activeTab === 'field'
      ? fields
      : activeTab === 'policy'
      ? policies
      : bindings;

  return (
    <Card>
      <Title heading={6}>字段权限管理</Title>
      <Tabs
        activeTab={activeTab}
        onChange={(key) => {
          setActiveTab(key as ManageType);
          setCurrent(1);
          setKeyword('');
        }}
      >
        <TabPane key="field" title="数据字段" />
        <TabPane key="policy" title="字段策略" />
        <TabPane key="binding" title="策略绑定" />
      </Tabs>
      <div className={styles['search-row']}>
        <Input.Search
          allowClear
          placeholder="搜索字段、策略或 API 编码"
          onSearch={(v) => {
            setCurrent(1);
            setKeyword(v);
          }}
        />
        <Button icon={<IconRefresh />} onClick={() => setTick((x) => x + 1)}>
          刷新
        </Button>
      </div>
      <div className={styles['button-group']}>
        <Button type="primary" icon={<IconPlus />} onClick={openCreate}>
          新增
          {activeTab === 'field'
            ? '数据字段'
            : activeTab === 'policy'
            ? '字段策略'
            : '策略绑定'}
        </Button>
      </div>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        data={data}
        scroll={{ x: 1450 }}
        pagination={{
          current,
          pageSize,
          total,
          showTotal: true,
          sizeCanChange: true,
        }}
        onChange={(p) => {
          setCurrent(p.current || 1);
          setPageSize(p.pageSize || 10);
        }}
      />
      <Modal
        title={selected ? '编辑配置' : '新增配置'}
        visible={visible}
        onOk={submit}
        onCancel={() => setVisible(false)}
        unmountOnExit
      >
        <Form
          form={form}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          {activeTab === 'field' && (
            <>
              <Form.Item label="数据对象 ID" field="dataObjectId">
                <Input />
              </Form.Item>
              <Form.Item
                label="字段编码"
                field="fieldCode"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="字段名称"
                field="fieldName"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="字段路径" field="fieldPath">
                <Input />
              </Form.Item>
              <Form.Item label="字段类型" field="fieldType">
                <Input />
              </Form.Item>
              <Form.Item label="是否敏感" field="sensitive">
                <Select
                  options={[
                    { label: '否', value: 2 },
                    { label: '是', value: 1 },
                  ]}
                />
              </Form.Item>
            </>
          )}
          {activeTab === 'policy' && (
            <>
              <Form.Item
                label="策略编码"
                field="policyCode"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="策略名称"
                field="policyName"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="展示策略" field="displayEffect">
                <Select
                  options={[
                    { label: '允许', value: 'ALLOW' },
                    { label: '隐藏', value: 'HIDE' },
                    { label: '脱敏', value: 'MASK' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="搜索策略" field="searchEffect">
                <Select
                  options={[
                    { label: '允许', value: 'ALLOW' },
                    { label: '禁止', value: 'DENY' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="排序策略" field="sortEffect">
                <Select
                  options={[
                    { label: '允许', value: 'ALLOW' },
                    { label: '禁止', value: 'DENY' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="编辑策略" field="editEffect">
                <Select
                  options={[
                    { label: '允许', value: 'ALLOW' },
                    { label: '只读', value: 'READONLY' },
                    { label: '禁止', value: 'DENY' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="导出策略" field="exportEffect">
                <Select
                  options={[
                    { label: '允许', value: 'ALLOW' },
                    { label: '禁止', value: 'DENY' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="脱敏类型" field="maskType">
                <Select
                  options={[
                    { label: '手机号', value: 'MOBILE' },
                    { label: '邮箱', value: 'EMAIL' },
                    { label: '身份证', value: 'ID_CARD' },
                    { label: '自定义', value: 'CUSTOM' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="条件表达式" field="conditionExpr">
                <Input.TextArea rows={3} />
              </Form.Item>
            </>
          )}
          {activeTab === 'binding' && (
            <>
              <Form.Item
                label="主体类型"
                field="subjectType"
                rules={[{ required: true }]}
              >
                <Select
                  options={[
                    { label: '用户', value: 'USER' },
                    { label: '角色', value: 'ROLE' },
                    { label: '部门', value: 'DEPT' },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="主体 ID"
                field="subjectId"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="API 编码"
                field="apiCode"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="字段编码"
                field="fieldCode"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="策略编码"
                field="policyCode"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="效果" field="effect">
                <Select
                  options={[
                    { label: '允许', value: 'ALLOW' },
                    { label: '拒绝', value: 'DENY' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="过期时间戳" field="expireAt">
                <Input />
              </Form.Item>
            </>
          )}
          <Form.Item label="优先级" field="priority">
            <Input />
          </Form.Item>
          <Form.Item label="描述" field="description">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}
