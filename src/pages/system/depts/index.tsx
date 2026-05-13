import React, { useEffect, useMemo, useState } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Descriptions,
  Form,
  Input,
  Message,
  Modal,
  Select,
  Space,
  Tree,
  Typography,
} from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconPlus,
  IconRefresh,
  IconSafe,
} from '@arco-design/web-react/icon';
import {
  createDept,
  deleteDept,
  DeptRecord,
  fetchDeptRoles,
  fetchDeptTree,
  fetchRolePageForDept,
  RoleRecord,
  saveDeptRoles,
  updateDept,
} from '@/api/access-dept';
import styles from './style/index.module.less';

const { Title } = Typography;

function toTreeData(nodes: DeptRecord[] = []) {
  return nodes.map((item) => ({
    key: String(item.id),
    title: item.deptName || item.deptCode || String(item.id),
    children: toTreeData(item.children || []),
  }));
}

function findDept(nodes: DeptRecord[] = [], id?: number): DeptRecord | null {
  for (const item of nodes) {
    if (item.id === id) return item;
    const child = findDept(item.children || [], id);
    if (child) return child;
  }
  return null;
}

export default function DeptManagePage() {
  const [form] = Form.useForm();
  const [tree, setTree] = useState<DeptRecord[]>([]);
  const [selectedId, setSelectedId] = useState<number>();
  const [visible, setVisible] = useState(false);
  const [rolesVisible, setRolesVisible] = useState(false);
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [roleOptions, setRoleOptions] = useState<RoleRecord[]>([]);
  const [checkedRoles, setCheckedRoles] = useState<number[]>([]);

  const selected = useMemo(
    () => findDept(tree, selectedId),
    [tree, selectedId]
  );

  const loadTree = async () => {
    const data = await fetchDeptTree();
    setTree(data || []);
  };

  useEffect(() => {
    void loadTree();
  }, []);

  const openCreate = () => {
    setMode('create');
    form.resetFields();
    form.setFieldsValue({ parentId: selectedId || 0, activeStatus: 1 });
    setVisible(true);
  };

  const openEdit = () => {
    if (!selected) return;
    setMode('edit');
    form.setFieldsValue(selected);
    setVisible(true);
  };

  const submit = async () => {
    const values = await form.validate();
    if (mode === 'create') {
      await createDept(values);
      Message.success('部门已新增');
    } else if (selected) {
      await updateDept({ ...values, id: selected.id });
      Message.success('部门已更新');
    }
    setVisible(false);
    await loadTree();
  };

  const openRoles = async () => {
    if (!selected) return;
    const [roles, ownRoles] = await Promise.all([
      fetchRolePageForDept(),
      fetchDeptRoles(selected.id),
    ]);
    setRoleOptions(roles.list || []);
    setCheckedRoles(
      (ownRoles || [])
        .map((item) => Number(item.roleId || item.id))
        .filter(Boolean)
    );
    setRolesVisible(true);
  };

  return (
    <Card>
      <Title heading={6}>部门管理</Title>
      <div className={styles['button-group']}>
        <Space>
          <Button type="primary" icon={<IconPlus />} onClick={openCreate}>
            新增部门
          </Button>
          <Button disabled={!selected} icon={<IconEdit />} onClick={openEdit}>
            编辑部门
          </Button>
          <Button disabled={!selected} icon={<IconSafe />} onClick={openRoles}>
            绑定角色
          </Button>
          <Button
            disabled={!selected}
            status="danger"
            icon={<IconDelete />}
            onClick={() =>
              selected &&
              Modal.confirm({
                title: '删除部门',
                content: `确认删除部门 ${selected.deptName}？`,
                onOk: async () => {
                  await deleteDept(selected.id);
                  Message.success('部门已删除');
                  setSelectedId(undefined);
                  await loadTree();
                },
              })
            }
          >
            删除部门
          </Button>
        </Space>
        <Button icon={<IconRefresh />} onClick={loadTree}>
          刷新
        </Button>
      </div>
      <div className={styles['page-layout']}>
        <div className={styles['tree-panel']}>
          <Tree
            treeData={toTreeData(tree)}
            selectedKeys={selectedId ? [String(selectedId)] : []}
            onSelect={(keys) => setSelectedId(Number(keys[0]))}
          />
        </div>
        <div className={styles['detail-panel']}>
          <Descriptions
            column={1}
            title="部门详情"
            data={
              selected
                ? [
                    { label: '部门 ID', value: selected.id },
                    { label: '部门名称', value: selected.deptName || '—' },
                    { label: '部门编码', value: selected.deptCode || '—' },
                    { label: '父部门', value: selected.parentId || 0 },
                    {
                      label: '状态',
                      value: selected.activeStatus === 1 ? '启用' : '禁用',
                    },
                  ]
                : [{ label: '提示', value: '请选择左侧部门节点' }]
            }
          />
        </div>
      </div>

      <Modal
        title={mode === 'create' ? '新增部门' : '编辑部门'}
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
          <Form.Item label="父部门 ID" field="parentId">
            <Input />
          </Form.Item>
          <Form.Item
            label="部门名称"
            field="deptName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="部门类型" field="deptType">
            <Input />
          </Form.Item>
          <Form.Item label="排序" field="sortOrder">
            <Input />
          </Form.Item>
          <Form.Item label="状态" field="activeStatus">
            <Select
              options={[
                { label: '启用', value: 1 },
                { label: '禁用', value: 2 },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={`部门绑定角色：${selected?.deptName || ''}`}
        visible={rolesVisible}
        onOk={async () => {
          if (selected) {
            await saveDeptRoles({ deptId: selected.id, roleIds: checkedRoles });
            Message.success('部门角色已保存');
            setRolesVisible(false);
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
      </Modal>
    </Card>
  );
}
