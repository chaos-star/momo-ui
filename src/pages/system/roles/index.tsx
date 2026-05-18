import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  Message,
  Modal,
  Space,
  Table,
  Typography,
} from '@arco-design/web-react';
import { IconPlus, IconRefresh } from '@arco-design/web-react/icon';
import {
  createRole,
  deleteRole,
  fetchRolePage,
  RoleRecord,
  updateRole,
} from '@/api/access-role';
import SearchForm, { RoleSearchValues } from './form';
import { getColumns } from './constants';
import RoleGrantDrawer from './RoleGrantDrawer';
import styles from './style/index.module.less';

const { Title } = Typography;

type Mode = 'create' | 'edit';

export default function RoleManagePage() {
  const [form] = Form.useForm();
  const [data, setData] = useState<RoleRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState<RoleSearchValues>({});
  const [tick, setTick] = useState(0);
  const [mode, setMode] = useState<Mode>('create');
  const [visible, setVisible] = useState(false);
  const [grantVisible, setGrantVisible] = useState(false);
  const [selected, setSelected] = useState<RoleRecord | null>(null);

  const reload = useCallback(() => setTick((x) => x + 1), []);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    void fetchRolePage({ page: current, pageSize, ...search })
      .then((res) => {
        if (canceled) return;
        setData(res.list || []);
        setTotal(res.total || 0);
      })
      .finally(() => !canceled && setLoading(false));
    return () => {
      canceled = true;
    };
  }, [current, pageSize, search, tick]);

  const openCreate = () => {
    setMode('create');
    setSelected(null);
    form.resetFields();
    setVisible(true);
  };

  const openEdit = (record: RoleRecord) => {
    setMode('edit');
    setSelected(record);
    form.setFieldsValue(record);
    setVisible(true);
  };

  const openGrant = (record: RoleRecord) => {
    setSelected(record);
    setGrantVisible(true);
  };

  const submitRole = async () => {
    const values = await form.validate();
    if (mode === 'create') {
      await createRole(values);
      Message.success('角色已新增');
    } else if (selected) {
      await updateRole({ ...values, id: selected.id });
      Message.success('角色已更新');
    }
    setVisible(false);
    reload();
  };

  const columns = getColumns({
    onEdit: openEdit,
    onGrant: openGrant,
    onDelete: (record) =>
      Modal.confirm({
        title: '删除角色',
        content: `确认删除角色 ${record.roleName}？`,
        onOk: async () => {
          await deleteRole(record.id);
          Message.success('角色已删除');
          reload();
        },
      }),
  });

  return (
    <Card>
      <Title heading={6}>角色管理</Title>
      <SearchForm
        onSearch={(values) => {
          setCurrent(1);
          setSearch(values);
        }}
      />
      <div className={styles['button-group']}>
        <Space>
          <Button type="primary" icon={<IconPlus />} onClick={openCreate}>
            新增角色
          </Button>
        </Space>
        <Button icon={<IconRefresh />} onClick={reload}>
          刷新
        </Button>
      </div>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        data={data}
        scroll={{ x: 1000 }}
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
        title={mode === 'create' ? '新增角色' : '编辑角色'}
        visible={visible}
        onOk={submitRole}
        onCancel={() => setVisible(false)}
        unmountOnExit
        style={{ width: 560 }}
      >
        <Form
          form={form}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          <Form.Item
            label="角色名称"
            field="roleName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="角色描述" field="description">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>

      <RoleGrantDrawer
        role={selected}
        visible={grantVisible}
        onClose={() => setGrantVisible(false)}
      />
    </Card>
  );
}
