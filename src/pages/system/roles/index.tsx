import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Card,
  Drawer,
  Form,
  Input,
  Message,
  Modal,
  Space,
  Table,
  Tree,
  Typography,
} from '@arco-design/web-react';
import { IconPlus, IconRefresh } from '@arco-design/web-react/icon';
import {
  createRole,
  deleteRole,
  fetchRoleDetail,
  fetchRolePage,
  RoleRecord,
  saveRolePermissions,
  updateRole,
} from '@/api/access-role';
import { flattenPermissionIds } from '@/utils/accessControl';
import type { PermissionNode } from '@/api/access-control';
import SearchForm, { RoleSearchValues } from './form';
import { getColumns } from './constants';
import styles from './style/index.module.less';

const { Title } = Typography;

type Mode = 'create' | 'edit';

function toTreeData(nodes: PermissionNode[] = []) {
  return nodes.map((item) => ({
    key: String(item.permissionId || item.id),
    title: `${
      item.permissionName || item.objectName || item.permissionCode || item.id
    }${item.objectType ? `（${item.objectType}）` : ''}`,
    children: toTreeData(item.children || []),
  }));
}

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
  const [permissionTree, setPermissionTree] = useState<PermissionNode[]>([]);
  const [checkedPermissions, setCheckedPermissions] = useState<string[]>([]);

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

  const openGrant = async (record: RoleRecord) => {
    setSelected(record);
    const detail = await fetchRoleDetail(record.id);
    const tree = detail.permissionTree || [];
    setPermissionTree(tree);
    setCheckedPermissions(
      flattenPermissionIds(
        tree.filter((node) => !!node.rolePermissionConfig)
      ).map(String)
    );
    setGrantVisible(true);
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

      <Drawer
        title={`角色授权：${selected?.roleName || ''}`}
        visible={grantVisible}
        width={680}
        onOk={async () => {
          if (selected) {
            await saveRolePermissions({
              roleId: selected.id,
              permissionIds: checkedPermissions.map(Number),
            });
            Message.success('权限已保存');
            setGrantVisible(false);
          }
        }}
        onCancel={() => setGrantVisible(false)}
      >
        <div className={styles['tree-card']}>
          <Tree
            checkable
            checkedKeys={checkedPermissions}
            onCheck={(keys) => setCheckedPermissions(keys as string[])}
            treeData={toTreeData(permissionTree)}
          />
        </div>
      </Drawer>
    </Card>
  );
}
