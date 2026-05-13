import React, { useMemo, useState } from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  Message,
  Space,
  Table,
  Tag,
  Typography,
} from '@arco-design/web-react';
import { IconRefresh, IconSafe, IconSearch } from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import { getAuthContext, AuthContextResult } from '@/api/auth';
import {
  fetchPermissionSources,
  PermissionSimulationResult,
  PermissionSourceRecord,
  simulateApiPermission,
} from '@/api/access-diagnosis';
import { formatTime } from '@/utils/accessControl';
import styles from './style/index.module.less';

const { Title, Text } = Typography;

export default function AuthDiagnosisPage() {
  const [sourceForm] = Form.useForm();
  const [simulateForm] = Form.useForm();
  const [context, setContext] = useState<AuthContextResult | null>(null);
  const [sources, setSources] = useState<PermissionSourceRecord[]>([]);
  const [simulation, setSimulation] =
    useState<PermissionSimulationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [sourceLoading, setSourceLoading] = useState(false);
  const [simulateLoading, setSimulateLoading] = useState(false);

  const metrics = useMemo(
    () => [
      { label: '菜单数量', value: context?.menus?.length || 0 },
      { label: '权限码数量', value: context?.permissions?.length || 0 },
      {
        label: '字段策略 API',
        value: Object.keys(context?.fieldPolicies || {}).length,
      },
    ],
    [context]
  );

  const loadContext = async () => {
    setLoading(true);
    try {
      const res = await getAuthContext();
      setContext(res);
      Message.success('权限上下文已刷新');
    } finally {
      setLoading(false);
    }
  };

  const querySources = async () => {
    const values = await sourceForm.validate();
    setSourceLoading(true);
    try {
      const res = await fetchPermissionSources(values);
      setSources(res || []);
    } finally {
      setSourceLoading(false);
    }
  };

  const runSimulation = async () => {
    const values = await simulateForm.validate();
    setSimulateLoading(true);
    try {
      const res = await simulateApiPermission(values);
      setSimulation(res);
    } finally {
      setSimulateLoading(false);
    }
  };

  const sourceColumns: ColumnProps<PermissionSourceRecord>[] = [
    { title: '权限码', dataIndex: 'permissionCode', width: 220 },
    { title: '权限名称', dataIndex: 'permissionName', width: 160 },
    {
      title: '来源类型',
      dataIndex: 'sourceType',
      width: 120,
      render: (v) => <Tag color="arcoblue">{v || '-'}</Tag>,
    },
    { title: '来源 ID', dataIndex: 'sourceId', width: 100 },
    { title: '来源名称', dataIndex: 'sourceName', width: 180 },
    { title: '授权类型', dataIndex: 'grantType', width: 120 },
    {
      title: '过期时间',
      dataIndex: 'expireAt',
      width: 170,
      render: formatTime,
    },
  ];

  return (
    <Card>
      <Title heading={6}>权限诊断</Title>
      <div className={styles.toolbar}>
        <Button
          type="primary"
          icon={<IconRefresh />}
          loading={loading}
          onClick={loadContext}
        >
          刷新当前上下文
        </Button>
        <Text type="secondary">
          诊断当前用户菜单、权限码、字段策略，并模拟 API 访问结论。
        </Text>
      </div>
      <div className={styles['metric-row']}>
        {metrics.map((item) => (
          <div className={styles.metric} key={item.label}>
            <div className={styles['metric-label']}>{item.label}</div>
            <div className={styles['metric-value']}>{item.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.grid}>
        <Card className={styles['card-block']} title="权限来源查询">
          <Form form={sourceForm} layout="inline">
            <Form.Item field="userId" label="用户 ID">
              <Input placeholder="例如 2" />
            </Form.Item>
            <Form.Item field="tenantId" label="租户 ID">
              <Input />
            </Form.Item>
            <Form.Item field="permissionCode" label="权限码">
              <Input placeholder="system:user:list" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                icon={<IconSearch />}
                loading={sourceLoading}
                onClick={querySources}
              >
                查询来源
              </Button>
            </Form.Item>
          </Form>
          <Table
            rowKey={(record, index) =>
              `${record.permissionCode}-${record.sourceType}-${record.sourceId}-${index}`
            }
            style={{ marginTop: 16 }}
            loading={sourceLoading}
            columns={sourceColumns}
            data={sources}
            pagination={false}
            scroll={{ x: 1050 }}
          />
        </Card>
        <Card className={styles['card-block']} title="API 权限模拟">
          <Form
            form={simulateForm}
            layout="horizontal"
            labelAlign="left"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            initialValues={{ httpMethod: 'GET' }}
          >
            <Form.Item
              field="userId"
              label="用户 ID"
              rules={[{ required: true }]}
            >
              <Input placeholder="例如 2" />
            </Form.Item>
            <Form.Item field="tenantId" label="租户 ID">
              <Input />
            </Form.Item>
            <Form.Item
              field="requestPath"
              label="请求路径"
              rules={[{ required: true }]}
            >
              <Input placeholder="/api/system/users/list" />
            </Form.Item>
            <Form.Item
              field="httpMethod"
              label="请求方法"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Button
              type="primary"
              icon={<IconSafe />}
              loading={simulateLoading}
              onClick={runSimulation}
            >
              开始模拟
            </Button>
          </Form>
          {simulation && (
            <div className={styles.result}>
              <Space direction="vertical">
                <Tag color={simulation.allowed ? 'green' : 'red'}>
                  {simulation.allowed ? '允许访问' : '拒绝访问'}
                </Tag>
                <Text>API：{simulation.apiCode || '-'}</Text>
                <Text>权限码：{simulation.permissionCode || '-'}</Text>
                <Text>原因：{simulation.reason || '-'}</Text>
              </Space>
            </div>
          )}
        </Card>
      </div>
      <Card title="当前字段策略快照" style={{ marginTop: 16 }}>
        <pre className={styles.code}>
          {JSON.stringify(context?.fieldPolicies || {}, null, 2)}
        </pre>
      </Card>
    </Card>
  );
}
