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
  createDataObject,
  createDataScope,
  createDataScopeBinding,
  DataObjectRecord,
  DataScopeBindingRecord,
  DataScopeRecord,
  deleteDataObject,
  deleteDataScope,
  deleteDataScopeBinding,
  fetchDataObjectPage,
  fetchDataScopeBindingPage,
  fetchDataScopePage,
  updateDataObject,
  updateDataScope,
  updateDataScopeBinding,
} from '@/api/access-policy';
import { formatTime } from '@/utils/accessControl';
import styles from './style/index.module.less';

const { Title } = Typography;
const { TabPane } = Tabs;

type ManageType = 'object' | 'scope' | 'binding';
type ManageRecord = DataObjectRecord | DataScopeRecord | DataScopeBindingRecord;

const subjectOptions = [
  { label: '用户', value: 'USER' },
  { label: '角色', value: 'ROLE' },
  { label: '部门', value: 'DEPT' },
];

export default function DataScopeManagePage() {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState<ManageType>('object');
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [objects, setObjects] = useState<DataObjectRecord[]>([]);
  const [scopes, setScopes] = useState<DataScopeRecord[]>([]);
  const [bindings, setBindings] = useState<DataScopeBindingRecord[]>([]);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<ManageRecord | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    const params = { page: current, pageSize, keyword: keyword || undefined };
    const request =
      activeTab === 'object'
        ? fetchDataObjectPage(params)
        : activeTab === 'scope'
        ? fetchDataScopePage(params)
        : fetchDataScopeBindingPage(params);
    void request
      .then((res) => {
        if (canceled) return;
        if (activeTab === 'object')
          setObjects((res.list || []) as DataObjectRecord[]);
        if (activeTab === 'scope')
          setScopes((res.list || []) as DataScopeRecord[]);
        if (activeTab === 'binding')
          setBindings((res.list || []) as DataScopeBindingRecord[]);
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
      effect: 'ALLOW',
      priority: 100,
      scopeType: 'SELF',
      subjectType: 'ROLE',
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
      content: `删除后会影响相关授权判断，确认继续？`,
      onOk: async () => {
        if (activeTab === 'object') await deleteDataObject(record.id);
        if (activeTab === 'scope') await deleteDataScope(record.id);
        if (activeTab === 'binding') await deleteDataScopeBinding(record.id);
        Message.success('删除成功');
        setTick((x) => x + 1);
      },
    });

  const submit = async () => {
    const values = await form.validate();
    if (activeTab === 'object') {
      selected
        ? await updateDataObject({ ...values, id: selected.id })
        : await createDataObject(values);
    }
    if (activeTab === 'scope') {
      selected
        ? await updateDataScope({ ...values, id: selected.id })
        : await createDataScope(values);
    }
    if (activeTab === 'binding') {
      selected
        ? await updateDataScopeBinding({ ...values, id: selected.id })
        : await createDataScopeBinding(values);
    }
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

  const columns: ColumnProps<ManageRecord>[] =
    (() => {
      if (activeTab === 'object')
        return [
          { title: '对象编码', dataIndex: 'objectCode', width: 180 },
          { title: '对象名称', dataIndex: 'objectName', width: 180 },
          { title: '表名', dataIndex: 'tableName', width: 180 },
          { title: '归属字段', dataIndex: 'ownerField', width: 140 },
          { title: '租户字段', dataIndex: 'tenantField', width: 140 },
          { title: '部门字段', dataIndex: 'deptField', width: 140 },
          { title: '描述', dataIndex: 'description', ellipsis: true },
          {
            title: '更新时间',
            dataIndex: 'updatedAt',
            width: 170,
            render: formatTime,
          },
          operationColumn,
        ];
      if (activeTab === 'scope')
        return [
          { title: '范围编码', dataIndex: 'scopeCode', width: 180 },
          { title: '范围名称', dataIndex: 'scopeName', width: 180 },
          {
            title: '范围类型',
            dataIndex: 'scopeType',
            width: 120,
            render: (v) => <Tag color="arcoblue">{v || '-'}</Tag>,
          },
          { title: '条件表达式', dataIndex: 'conditionExpr', ellipsis: true },
          { title: '优先级', dataIndex: 'priority', width: 100 },
          {
            title: '更新时间',
            dataIndex: 'updatedAt',
            width: 170,
            render: formatTime,
          },
          operationColumn,
        ];
      return [
        { title: '主体类型', dataIndex: 'subjectType', width: 120 },
        { title: '主体 ID', dataIndex: 'subjectId', width: 100 },
        { title: '数据对象', dataIndex: 'objectCode', width: 180 },
        { title: '范围编码', dataIndex: 'scopeCode', width: 180 },
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
        { title: '优先级', dataIndex: 'priority', width: 100 },
        operationColumn,
      ];
    },
    [activeTab, operationColumn]);

  const data =
    activeTab === 'object'
      ? objects
      : activeTab === 'scope'
      ? scopes
      : bindings;

  return (
    <Card>
      <Title heading={6}>数据权限管理</Title>
      <Tabs
        activeTab={activeTab}
        onChange={(key) => {
          setActiveTab(key as ManageType);
          setCurrent(1);
          setKeyword('');
        }}
      >
        <TabPane key="object" title="数据对象" />
        <TabPane key="scope" title="数据范围" />
        <TabPane key="binding" title="授权绑定" />
      </Tabs>
      <div className={styles['search-row']}>
        <Input.Search
          allowClear
          placeholder="搜索编码、名称或主体"
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
          {activeTab === 'object'
            ? '数据对象'
            : activeTab === 'scope'
            ? '数据范围'
            : '授权绑定'}
        </Button>
      </div>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        data={data}
        scroll={{ x: 1300 }}
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
          {activeTab === 'object' && (
            <>
              <Form.Item
                label="对象编码"
                field="objectCode"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="对象名称"
                field="objectName"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="表名" field="tableName">
                <Input />
              </Form.Item>
              <Form.Item label="归属字段" field="ownerField">
                <Input />
              </Form.Item>
              <Form.Item label="租户字段" field="tenantField">
                <Input />
              </Form.Item>
              <Form.Item label="部门字段" field="deptField">
                <Input />
              </Form.Item>
            </>
          )}
          {activeTab === 'scope' && (
            <>
              <Form.Item
                label="范围编码"
                field="scopeCode"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="范围名称"
                field="scopeName"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="范围类型" field="scopeType">
                <Select
                  options={[
                    { label: '本人', value: 'SELF' },
                    { label: '本部门', value: 'DEPT' },
                    { label: '本部门及下级', value: 'DEPT_AND_CHILDREN' },
                    { label: '全部', value: 'ALL' },
                    { label: '自定义', value: 'CUSTOM' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="条件表达式" field="conditionExpr">
                <Input.TextArea rows={4} />
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
                <Select options={subjectOptions} />
              </Form.Item>
              <Form.Item
                label="主体 ID"
                field="subjectId"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="数据对象编码"
                field="objectCode"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="范围编码"
                field="scopeCode"
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
