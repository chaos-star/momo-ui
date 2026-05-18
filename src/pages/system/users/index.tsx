import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Drawer,
  Form,
  Input,
  Message,
  Modal,
  Select,
  Space,
  Table,
  Tree,
  Typography,
} from '@arco-design/web-react';
import { IconPlus, IconRefresh } from '@arco-design/web-react/icon';
import { readCachedAuthContext } from '@/api/auth';
import { getTenantCodeFromPathname } from '@/utils/tenant';
import type { FieldPolicyMap } from '@/utils/accessControl';
import {
  expandCheckedWithAutoGrant,
  filterCheckablePermissionKeys,
  getFieldPolicy,
  isFieldReadonly,
} from '@/utils/accessControl';
import { fetchPermissionGrantTree } from '@/api/access-role';
import {
  createUser,
  deleteUser,
  fetchRoleOptions,
  fetchUserDeptTree,
  fetchUserDetail,
  fetchUserGrantedPermissionIds,
  fetchUserRoles,
  fetchUserPage,
  saveUserDepts,
  saveUserPermissions,
  saveUserRoles,
  updateUser,
  updateUserStatus,
  UserRecord,
  RoleRecord,
  DeptRecord,
  PermissionNode,
} from '@/api/access-user';
import SearchForm, { UserSearchValues } from './form';
import { getColumns } from './constants';
import styles from './style/index.module.less';

const { Title } = Typography;

type Mode = 'create' | 'edit';

function toTreeData(nodes: (DeptRecord | PermissionNode)[] = []) {
  return nodes.map((item) => {
    const perm = item as PermissionNode;
    const dept = item as DeptRecord;
    return {
      key: String(perm.permissionId || item.id),
      title: `${
        perm.permissionName ||
        perm.objectName ||
        dept.deptName ||
        perm.permissionCode ||
        String(item.id)
      }${perm.nodeType ? `（${perm.nodeType}）` : ''}${
        perm.autoGrant === 1 ? ' [自动]' : ''
      }`,
      disableCheckbox:
        perm.checkable === false ||
        perm.nodeType === 'CATALOG' ||
        perm.nodeType === 'GROUP' ||
        (!perm.permissionId && !dept.deptName),
      children: toTreeData(item.children || []),
    };
  });
}

export default function UserManagePage() {
  const [form] = Form.useForm();
  const [data, setData] = useState<UserRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState<UserSearchValues>({});
  const [tick, setTick] = useState(0);
  const [mode, setMode] = useState<Mode>('create');
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<UserRecord | null>(null);
  const [rolesVisible, setRolesVisible] = useState(false);
  const [deptsVisible, setDeptsVisible] = useState(false);
  const [permissionsVisible, setPermissionsVisible] = useState(false);
  const [roleOptions, setRoleOptions] = useState<RoleRecord[]>([]);
  const [checkedRoles, setCheckedRoles] = useState<number[]>([]);
  const [deptTree, setDeptTree] = useState<DeptRecord[]>([]);
  const [checkedDepts, setCheckedDepts] = useState<string[]>([]);
  const [permissionTree, setPermissionTree] = useState<PermissionNode[]>([]);
  const [checkedPermissions, setCheckedPermissions] = useState<string[]>([]);

  const tenantCode = getTenantCodeFromPathname();
  const fieldPolicies = useMemo(
    () =>
      tenantCode
        ? (readCachedAuthContext(tenantCode)?.fieldPolicies as FieldPolicyMap)
        : undefined,
    [tenantCode]
  );

  const reload = useCallback(() => setTick((x) => x + 1), []);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    void fetchUserPage({ page: current, pageSize, ...search })
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
    form.setFieldsValue({ activeStatus: 1 });
    setVisible(true);
  };

  const openEdit = async (record: UserRecord) => {
    setMode('edit');
    setSelected(record);
    const detail = await fetchUserDetail(record.id);
    form.setFieldsValue({ ...detail, password: undefined });
    setVisible(true);
  };

  const submitUser = async () => {
    const values = await form.validate();
    if (mode === 'create') {
      await createUser(values);
      Message.success('用户已新增');
    } else if (selected) {
      await updateUser({ ...values, id: selected.id });
      Message.success('用户已更新');
    }
    setVisible(false);
    reload();
  };

  const openRoles = async (record: UserRecord) => {
    setSelected(record);
    const [options, ownRoles] = await Promise.all([
      fetchRoleOptions(),
      fetchUserRoles(record.id),
    ]);
    setRoleOptions(options.list || []);
    setCheckedRoles(
      (ownRoles || [])
        .map((item) => Number(item.roleId || item.id))
        .filter(Boolean)
    );
    setRolesVisible(true);
  };

  const openDepts = async (record: UserRecord) => {
    setSelected(record);
    setDeptTree(await fetchUserDeptTree());
    setCheckedDepts(
      (record.user_depts || []).map((item) => String(item.deptId))
    );
    setDeptsVisible(true);
  };

  const openPermissions = async (record: UserRecord) => {
    setSelected(record);
    const [grantTree, grantedIds] = await Promise.all([
      fetchPermissionGrantTree(),
      fetchUserGrantedPermissionIds(record.id),
    ]);
    setPermissionTree(grantTree || []);
    setCheckedPermissions((grantedIds || []).map(String));
    setPermissionsVisible(true);
  };

  const handlePermissionCheck = (keys: string[]) => {
    const expanded = expandCheckedWithAutoGrant(
      permissionTree,
      keys as string[]
    );
    setCheckedPermissions(expanded);
  };

  const columns = getColumns(
    {
      onEdit: openEdit,
      onRoles: openRoles,
      onDepts: openDepts,
      onPermissions: openPermissions,
      onDelete: (record) =>
        Modal.confirm({
          title: '删除用户',
          content: `确认删除用户 ${record.username}？`,
          onOk: async () => {
            await deleteUser(record.id);
            Message.success('用户已删除');
            reload();
          },
        }),
      onStatus: (record, activeStatus) =>
        Modal.confirm({
          title: '状态变更',
          content: `确认${activeStatus === 1 ? '启用' : '禁用'}用户 ${
            record.username
          }？`,
          onOk: async () => {
            await updateUserStatus({ id: record.id, activeStatus });
            Message.success('状态已更新');
            reload();
          },
        }),
    },
    fieldPolicies
  );

  const emailPolicy = getFieldPolicy(
    fieldPolicies,
    'system.users.manage',
    'email'
  );
  const mobilePolicy = getFieldPolicy(
    fieldPolicies,
    'system.users.manage',
    'mobile'
  );

  return (
    <Card>
      <Title heading={6}>用户管理</Title>
      <SearchForm
        onSearch={(values) => {
          setCurrent(1);
          setSearch(values);
        }}
      />
      <div className={styles['button-group']}>
        <Space>
          <Button type="primary" icon={<IconPlus />} onClick={openCreate}>
            新增用户
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
        scroll={{ x: 1500 }}
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
        title={mode === 'create' ? '新增用户' : '编辑用户'}
        visible={visible}
        onOk={submitUser}
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
          {mode === 'create' && (
            <Form.Item
              label="用户名"
              field="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          )}
          {mode === 'create' && (
            <Form.Item
              label="密码"
              field="password"
              rules={[{ required: true }]}
            >
              <Input.Password />
            </Form.Item>
          )}
          <Form.Item
            label="邮箱"
            field="email"
            rules={[{ required: mode === 'create' }]}
          >
            <Input disabled={isFieldReadonly(emailPolicy)} />
          </Form.Item>
          <Form.Item label="手机号" field="mobile">
            <Input disabled={isFieldReadonly(mobilePolicy)} />
          </Form.Item>
          <Form.Item label="真实姓名" field="realname">
            <Input />
          </Form.Item>
          <Form.Item label="昵称" field="nickname">
            <Input />
          </Form.Item>
          <Form.Item label="状态" field="activeStatus">
            <Select
              options={[
                { label: '启用', value: 1 },
                { label: '禁用', value: 2 },
                { label: '过期', value: 3 },
                { label: '锁定', value: 4 },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Drawer
        title={`分配角色：${selected?.username || ''}`}
        visible={rolesVisible}
        width={520}
        onOk={async () => {
          if (selected) {
            await saveUserRoles({ userId: selected.id, roleIds: checkedRoles });
            Message.success('角色已保存');
            setRolesVisible(false);
            reload();
          }
        }}
        onCancel={() => setRolesVisible(false)}
      >
        <Checkbox.Group
          value={checkedRoles}
          onChange={(v) => setCheckedRoles(v as number[])}
        >
          <Space direction="vertical">
            {roleOptions.map((role) => (
              <Checkbox key={role.id} value={role.id}>
                {role.roleName}（{role.roleCode}）
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      </Drawer>

      <Drawer
        title={`分配部门：${selected?.username || ''}`}
        visible={deptsVisible}
        width={520}
        onOk={async () => {
          if (selected) {
            await saveUserDepts({
              userId: selected.id,
              deptIds: checkedDepts.map(Number),
            });
            Message.success('部门已保存');
            setDeptsVisible(false);
            reload();
          }
        }}
        onCancel={() => setDeptsVisible(false)}
      >
        <div className={styles['tree-card']}>
          <Tree
            checkable
            checkedKeys={checkedDepts}
            onCheck={(keys) => setCheckedDepts(keys as string[])}
            treeData={toTreeData(deptTree)}
          />
        </div>
      </Drawer>

      <Drawer
        title={`用户直接授权：${selected?.username || ''}`}
        visible={permissionsVisible}
        width={640}
        onOk={async () => {
          if (selected) {
            await saveUserPermissions({
              userId: selected.id,
              permissionIds: filterCheckablePermissionKeys(
                permissionTree,
                checkedPermissions
              ).map(Number),
            });
            Message.success('直接授权已保存');
            setPermissionsVisible(false);
          }
        }}
        onCancel={() => setPermissionsVisible(false)}
      >
        <div className={styles['tree-card']}>
          <Tree
            checkable
            checkedKeys={checkedPermissions}
            onCheck={handlePermissionCheck}
            treeData={toTreeData(permissionTree)}
          />
        </div>
      </Drawer>
    </Card>
  );
}
