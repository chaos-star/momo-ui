import React, { useEffect, useMemo, useState } from 'react';
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
  ApiEndpointRecord,
  ApiGroupRecord,
  createApi,
  deleteApi,
  fetchApiGroupOptions,
  fetchApiPage,
  updateApi,
} from '@/api/access-permission';
import { formatTime } from '@/utils/accessControl';
import styles from '../permissions/style/index.module.less';

const { Title } = Typography;

export default function ApiManagePage() {
  const [form] = Form.useForm();
  const [data, setData] = useState<ApiEndpointRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<ApiEndpointRecord | null>(null);
  const [apiGroups, setApiGroups] = useState<ApiGroupRecord[]>([]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    void fetchApiPage({
      page: current,
      pageSize,
      apiCode: keyword || undefined,
      apiName: keyword || undefined,
    })
      .then((res) => {
        if (!canceled) {
          setData(res.list || []);
          setTotal(res.total || 0);
        }
      })
      .finally(() => !canceled && setLoading(false));
    return () => {
      canceled = true;
    };
  }, [current, pageSize, keyword, tick]);

  useEffect(() => {
    let canceled = false;
    void fetchApiGroupOptions().then((res) => {
      if (!canceled) {
        setApiGroups(res?.list || []);
      }
    });
    return () => {
      canceled = true;
    };
  }, [tick]);

  const groupNameMap = useMemo(
    () =>
      apiGroups.reduce<Record<string, string>>((map, item) => {
        if (item.groupCode) {
          map[item.groupCode] = item.groupName || item.groupCode;
        }
        return map;
      }, {}),
    [apiGroups]
  );

  const groupOptions = useMemo(
    () =>
      apiGroups.map((item) => ({
        label: item.groupName
          ? `${item.groupName} (${item.groupCode})`
          : item.groupCode,
        value: item.groupCode,
      })),
    [apiGroups]
  );

  const columns = useMemo<ColumnProps<ApiEndpointRecord>[]>(
    () => [
      { title: 'ID', dataIndex: 'id', width: 80 },
      { title: 'API 编码', dataIndex: 'apiCode', width: 220 },
      { title: 'API 名称', dataIndex: 'apiName', width: 180 },
      {
        title: '分组',
        dataIndex: 'apiGroup',
        width: 160,
        render: (v) => (v ? groupNameMap[v] || v : '-'),
      },
      { title: '方法', dataIndex: 'httpMethod', width: 100 },
      { title: '路径', dataIndex: 'pathPattern', width: 260 },
      { title: '匹配', dataIndex: 'matchType', width: 100 },
      {
        title: '匿名',
        dataIndex: 'anonymous',
        width: 90,
        render: (v) => (v === 1 ? '是' : '否'),
      },
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
              onClick={() => {
                setSelected(record);
                form.setFieldsValue(record);
                setVisible(true);
              }}
            >
              编辑
            </Button>
            <Button
              type="text"
              status="danger"
              size="small"
              icon={<IconDelete />}
              onClick={() =>
                Modal.confirm({
                  title: '删除 API',
                  content: `确认删除 ${record.apiCode}？`,
                  onOk: async () => {
                    await deleteApi(record.id);
                    Message.success('API 已删除');
                    setTick((x) => x + 1);
                  },
                })
              }
            >
              删除
            </Button>
          </Space>
        ),
      },
    ],
    [form, groupNameMap]
  );

  const submit = async () => {
    const values = await form.validate();
    if (selected) {
      await updateApi({ ...values, id: selected.id });
      Message.success('API 已更新');
    } else {
      await createApi(values);
      Message.success('API 已新增');
    }
    setVisible(false);
    setTick((x) => x + 1);
  };

  return (
    <Card>
      <Title heading={6}>API 权限管理</Title>
      <div className={styles['search-row']}>
        <Input.Search
          allowClear
          placeholder="搜索 API 编码或名称"
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
        <Button
          type="primary"
          icon={<IconPlus />}
          onClick={() => {
            setSelected(null);
            form.resetFields();
            form.setFieldsValue({
              httpMethod: 'GET',
              matchType: 'EXACT',
              anonymous: 2,
              activeStatus: 1,
            });
            setVisible(true);
          }}
        >
          新增 API
        </Button>
      </div>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        data={data}
        scroll={{ x: 1400 }}
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
        title={selected ? '编辑 API' : '新增 API'}
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
          <Form.Item
            label="API 编码"
            field="apiCode"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="API 名称"
            field="apiName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="API 分组" field="apiGroup">
            <Select
              allowClear
              showSearch
              options={groupOptions}
              filterOption={(inputValue, option) =>
                String(option.props.value)
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()) ||
                String(option.props.children)
                  .toLowerCase()
                  .includes(inputValue.toLowerCase())
              }
            />
          </Form.Item>
          <Form.Item label="请求方法" field="httpMethod">
            <Select
              options={['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].map((v) => ({
                label: v,
                value: v,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="路径匹配"
            field="pathPattern"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="匹配类型" field="matchType">
            <Select
              options={[
                { label: '精确', value: 'EXACT' },
                { label: '前缀', value: 'PREFIX' },
                { label: '正则', value: 'REGEX' },
              ]}
            />
          </Form.Item>
          <Form.Item label="匿名访问" field="anonymous">
            <Select
              options={[
                { label: '否', value: 2 },
                { label: '是', value: 1 },
              ]}
            />
          </Form.Item>
          <Form.Item label="描述" field="description">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}
