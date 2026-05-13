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
  createPolicy,
  createPolicyBinding,
  deletePolicy,
  deletePolicyBinding,
  fetchPolicyBindingPage,
  fetchPolicyPage,
  PolicyBindingRecord,
  PolicyRecord,
  updatePolicy,
  updatePolicyBinding,
} from '@/api/access-policy';
import { formatTime } from '@/utils/accessControl';
import styles from '../data-scopes/style/index.module.less';

const { Title } = Typography;

export default function PolicyManagePage() {
  const [form] = Form.useForm();
  const [bindingForm] = Form.useForm();
  const [keyword, setKeyword] = useState('');
  const [policyLoading, setPolicyLoading] = useState(false);
  const [bindingLoading, setBindingLoading] = useState(false);
  const [policies, setPolicies] = useState<PolicyRecord[]>([]);
  const [bindings, setBindings] = useState<PolicyBindingRecord[]>([]);
  const [policyTotal, setPolicyTotal] = useState(0);
  const [bindingTotal, setBindingTotal] = useState(0);
  const [policyPage, setPolicyPage] = useState(1);
  const [bindingPage, setBindingPage] = useState(1);
  const [policyVisible, setPolicyVisible] = useState(false);
  const [bindingVisible, setBindingVisible] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyRecord | null>(
    null
  );
  const [selectedBinding, setSelectedBinding] =
    useState<PolicyBindingRecord | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let canceled = false;
    setPolicyLoading(true);
    void fetchPolicyPage({
      page: policyPage,
      pageSize: 10,
      keyword: keyword || undefined,
    })
      .then((res) => {
        if (!canceled) {
          setPolicies(res.list || []);
          setPolicyTotal(res.total || 0);
        }
      })
      .finally(() => !canceled && setPolicyLoading(false));
    return () => {
      canceled = true;
    };
  }, [policyPage, keyword, tick]);

  useEffect(() => {
    let canceled = false;
    setBindingLoading(true);
    void fetchPolicyBindingPage({
      page: bindingPage,
      pageSize: 10,
      keyword: keyword || undefined,
    })
      .then((res) => {
        if (!canceled) {
          setBindings(res.list || []);
          setBindingTotal(res.total || 0);
        }
      })
      .finally(() => !canceled && setBindingLoading(false));
    return () => {
      canceled = true;
    };
  }, [bindingPage, keyword, tick]);

  const openPolicy = (record?: PolicyRecord) => {
    setSelectedPolicy(record || null);
    form.resetFields();
    form.setFieldsValue(
      record || {
        policyType: 'ABAC',
        effect: 'ALLOW',
        priority: 100,
        activeStatus: 1,
      }
    );
    setPolicyVisible(true);
  };

  const openBinding = (record?: PolicyBindingRecord) => {
    setSelectedBinding(record || null);
    bindingForm.resetFields();
    bindingForm.setFieldsValue(
      record || {
        subjectType: 'ROLE',
        effect: 'ALLOW',
        priority: 100,
        activeStatus: 1,
      }
    );
    setBindingVisible(true);
  };

  const submitPolicy = async () => {
    const values = await form.validate();
    selectedPolicy
      ? await updatePolicy({ ...values, id: selectedPolicy.id })
      : await createPolicy(values);
    Message.success(selectedPolicy ? '策略已更新' : '策略已新增');
    setPolicyVisible(false);
    setTick((x) => x + 1);
  };

  const submitBinding = async () => {
    const values = await bindingForm.validate();
    selectedBinding
      ? await updatePolicyBinding({ ...values, id: selectedBinding.id })
      : await createPolicyBinding(values);
    Message.success(selectedBinding ? '绑定已更新' : '绑定已新增');
    setBindingVisible(false);
    setTick((x) => x + 1);
  };

  const removePolicy = (record: PolicyRecord) =>
    Modal.confirm({
      title: '删除 ABAC 策略',
      content: `确认删除 ${record.policyCode}？绑定主体将无法继续命中该策略。`,
      onOk: async () => {
        await deletePolicy(record.id);
        Message.success('策略已删除');
        setTick((x) => x + 1);
      },
    });

  const removeBinding = (record: PolicyBindingRecord) =>
    Modal.confirm({
      title: '删除策略绑定',
      content: `确认删除主体 ${record.subjectType}:${record.subjectId} 的策略绑定？`,
      onOk: async () => {
        await deletePolicyBinding(record.id);
        Message.success('绑定已删除');
        setTick((x) => x + 1);
      },
    });

  const policyColumns: ColumnProps<PolicyRecord>[] = [
    { title: '策略编码', dataIndex: 'policyCode', width: 200 },
    { title: '策略名称', dataIndex: 'policyName', width: 180 },
    {
      title: '类型',
      dataIndex: 'policyType',
      width: 110,
      render: (v) => <Tag color="arcoblue">{v || 'ABAC'}</Tag>,
    },
    {
      title: '效果',
      dataIndex: 'effect',
      width: 100,
      render: (v) => (
        <Tag color={v === 'DENY' ? 'red' : 'green'}>{v || 'ALLOW'}</Tag>
      ),
    },
    { title: '条件表达式', dataIndex: 'conditionExpr', ellipsis: true },
    { title: '优先级', dataIndex: 'priority', width: 100 },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      width: 170,
      render: formatTime,
    },
    {
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
            onClick={() => openPolicy(record)}
          >
            编辑
          </Button>
          <Button
            type="text"
            status="danger"
            size="small"
            icon={<IconDelete />}
            onClick={() => removePolicy(record)}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const bindingColumns: ColumnProps<PolicyBindingRecord>[] = [
    { title: '主体类型', dataIndex: 'subjectType', width: 120 },
    { title: '主体 ID', dataIndex: 'subjectId', width: 100 },
    { title: '策略编码', dataIndex: 'policyCode', width: 200 },
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
    { title: '描述', dataIndex: 'description', ellipsis: true },
    {
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
            onClick={() => openBinding(record)}
          >
            编辑
          </Button>
          <Button
            type="text"
            status="danger"
            size="small"
            icon={<IconDelete />}
            onClick={() => removeBinding(record)}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Card>
      <Title heading={6}>ABAC 策略管理</Title>
      <div className={styles['search-row']}>
        <Input.Search
          allowClear
          placeholder="搜索策略编码、名称或主体"
          onSearch={(v) => {
            setPolicyPage(1);
            setBindingPage(1);
            setKeyword(v);
          }}
        />
        <Button icon={<IconRefresh />} onClick={() => setTick((x) => x + 1)}>
          刷新
        </Button>
      </div>
      <div className={styles['button-group']}>
        <Space>
          <Button
            type="primary"
            icon={<IconPlus />}
            onClick={() => openPolicy()}
          >
            新增策略
          </Button>
          <Button icon={<IconPlus />} onClick={() => openBinding()}>
            新增绑定
          </Button>
        </Space>
      </div>
      <Table
        rowKey="id"
        loading={policyLoading}
        columns={policyColumns}
        data={policies}
        scroll={{ x: 1250 }}
        pagination={{
          current: policyPage,
          pageSize: 10,
          total: policyTotal,
          showTotal: true,
        }}
        onChange={(p) => setPolicyPage(p.current || 1)}
      />
      <div className={styles['section-title']}>策略绑定</div>
      <Table
        rowKey="id"
        loading={bindingLoading}
        columns={bindingColumns}
        data={bindings}
        scroll={{ x: 1100 }}
        pagination={{
          current: bindingPage,
          pageSize: 10,
          total: bindingTotal,
          showTotal: true,
        }}
        onChange={(p) => setBindingPage(p.current || 1)}
      />
      <Modal
        title={selectedPolicy ? '编辑 ABAC 策略' : '新增 ABAC 策略'}
        visible={policyVisible}
        onOk={submitPolicy}
        onCancel={() => setPolicyVisible(false)}
        unmountOnExit
      >
        <Form
          form={form}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
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
          <Form.Item label="策略类型" field="policyType">
            <Select
              options={[
                { label: 'ABAC', value: 'ABAC' },
                { label: '时间策略', value: 'TIME' },
                { label: '环境策略', value: 'ENV' },
              ]}
            />
          </Form.Item>
          <Form.Item label="效果" field="effect">
            <Select
              options={[
                { label: '允许', value: 'ALLOW' },
                { label: '拒绝', value: 'DENY' },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="条件表达式"
            field="conditionExpr"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              rows={5}
              placeholder="例如：user.deptId == resource.deptId && env.ip in trustedIps"
            />
          </Form.Item>
          <Form.Item label="优先级" field="priority">
            <Input />
          </Form.Item>
          <Form.Item label="描述" field="description">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title={selectedBinding ? '编辑策略绑定' : '新增策略绑定'}
        visible={bindingVisible}
        onOk={submitBinding}
        onCancel={() => setBindingVisible(false)}
        unmountOnExit
      >
        <Form
          form={bindingForm}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
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
