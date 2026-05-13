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
  createPermission,
  deletePermission,
  fetchPermissionPage,
  PermissionRecord,
  updatePermission,
} from '@/api/access-permission';
import { formatTime } from '@/utils/accessControl';
import styles from './style/index.module.less';

const { Title } = Typography;

export default function PermissionManagePage() {
  const [form] = Form.useForm();
  const [data, setData] = useState<PermissionRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<PermissionRecord | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    void fetchPermissionPage({
      page: current,
      pageSize,
      permissionCode: keyword || undefined,
      permissionName: keyword || undefined,
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

  const columns = useMemo<ColumnProps<PermissionRecord>[]>(
    () => [
      { title: 'ID', dataIndex: 'id', width: 80 },
      { title: '权限编码', dataIndex: 'permissionCode', width: 220 },
      { title: '权限名称', dataIndex: 'permissionName', width: 180 },
      { title: '类型', dataIndex: 'permissionType', width: 120 },
      { title: '对象类型', dataIndex: 'objectType', width: 120 },
      { title: '对象 ID', dataIndex: 'objectId', width: 100 },
      { title: '描述', dataIndex: 'description', ellipsis: true },
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
                  title: '删除权限点',
                  content: `确认删除 ${record.permissionCode}？`,
                  onOk: async () => {
                    await deletePermission(record.id);
                    Message.success('权限点已删除');
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
    [form]
  );

  const submit = async () => {
    const values = await form.validate();
    if (selected) {
      await updatePermission({ ...values, id: selected.id });
      Message.success('权限点已更新');
    } else {
      await createPermission(values);
      Message.success('权限点已新增');
    }
    setVisible(false);
    setTick((x) => x + 1);
  };

  return (
    <Card>
      <Title heading={6}>权限点管理</Title>
      <div className={styles['search-row']}>
        <Input.Search
          allowClear
          placeholder="搜索权限编码或名称"
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
            form.setFieldsValue({ activeStatus: 1 });
            setVisible(true);
          }}
        >
          新增权限点
        </Button>
      </div>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        data={data}
        scroll={{ x: 1200 }}
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
        title={selected ? '编辑权限点' : '新增权限点'}
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
            label="权限编码"
            field="permissionCode"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="权限名称"
            field="permissionName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="权限类型" field="permissionType">
            <Select
              options={[
                { label: '菜单', value: 'MENU' },
                { label: 'API', value: 'API' },
                { label: '全局', value: 'GLOBAL' },
              ]}
            />
          </Form.Item>
          <Form.Item label="对象类型" field="objectType">
            <Select
              options={[
                { label: 'MENU', value: 'MENU' },
                { label: 'API', value: 'API' },
                { label: 'GLOBAL', value: 'GLOBAL' },
              ]}
            />
          </Form.Item>
          <Form.Item label="对象 ID" field="objectId">
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
