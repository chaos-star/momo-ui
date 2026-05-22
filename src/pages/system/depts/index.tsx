import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Badge,
  Button,
  Card,
  Descriptions,
  Empty,
  Form,
  Input,
  Message,
  Modal,
  Select,
  Space,
  Table,
  Tree,
  TreeSelect,
  Typography,
} from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconLock,
  IconMenuUnfold,
  IconPlayArrow,
  IconPlus,
  IconRefresh,
  IconSafe,
  IconStop,
  IconUnlock,
} from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import {
  createDept,
  deleteDept,
  DeptRecord,
  DeptRoleRecord,
  fetchDeptRoles,
  fetchDeptTree,
  fetchRolePageForDept,
  moveDept,
  RoleRecord,
  saveDeptRoles,
  toggleDeptActiveStatus,
  updateDept,
  updateDeptRoleActiveStatus,
} from '@/api/access-dept';
import { formatTime } from '@/utils/accessControl';
import styles from './style/index.module.less';

const { Text, Title } = Typography;
const ROOT_PARENT_ID = 0;

function findDept(nodes: DeptRecord[] = [], id?: number): DeptRecord | null {
  for (const item of nodes) {
    if (item.id === id) return item;
    const child = findDept(item.children || [], id);
    if (child) return child;
  }
  return null;
}

function findFirstDept(nodes: DeptRecord[] = []): DeptRecord | null {
  for (const item of nodes) {
    if (item.id) return item;
    const child = findFirstDept(item.children || []);
    if (child) return child;
  }
  return null;
}

function getDescendantIds(node?: DeptRecord | null) {
  const ids = new Set<number>();
  const walk = (children: DeptRecord[] = []) => {
    children.forEach((child) => {
      ids.add(child.id);
      walk(child.children || []);
    });
  };
  walk(node?.children || []);
  return ids;
}

function toParentTreeData(
  nodes: DeptRecord[] = [],
  disabledIds = new Set<number>()
) {
  return [
    {
      key: String(ROOT_PARENT_ID),
      value: String(ROOT_PARENT_ID),
      title: '根部门',
      children: undefined,
    },
    ...nodes.map((item) => ({
      key: String(item.id),
      value: String(item.id),
      title: `${item.deptName || item.deptCode || item.id}${
        item.deptCode ? `（${item.deptCode}）` : ''
      }`,
      disabled: disabledIds.has(item.id),
      children: toParentTreeData(item.children || [], disabledIds).slice(1),
    })),
  ];
}

function normalizeParentId(parentId?: number | string | null) {
  const value = Number(parentId ?? ROOT_PARENT_ID);
  return Number.isFinite(value) ? value : ROOT_PARENT_ID;
}

function getParentFieldValue(parentId?: number | null) {
  return String(parentId ?? ROOT_PARENT_ID);
}

function getDeptNameWithId(record?: DeptRecord | null) {
  if (!record) return '';
  return `${record.deptName || record.deptCode || record.id}（ID：${
    record.id
  }）`;
}

function getParentDeptDisplay(nodes: DeptRecord[], parentId?: number | null) {
  const normalizedParentId = normalizeParentId(parentId);
  if (normalizedParentId === ROOT_PARENT_ID)
    return `根部门（ID：${ROOT_PARENT_ID}）`;
  const parent = findDept(nodes, normalizedParentId);
  return parent
    ? getDeptNameWithId(parent)
    : `未找到父部门（ID：${normalizedParentId}）`;
}

function getRoleDisplayName(role: RoleRecord) {
  return `${role.roleName || role.roleCode || role.id}${
    role.roleCode ? `（${role.roleCode}）` : ''
  }`;
}

function getDeptSort(record?: DeptRecord | null) {
  const value = record as
    | (DeptRecord & { deptSort?: number })
    | null
    | undefined;
  return value?.deptSort ?? value?.sortOrder ?? 0;
}

function renderActiveStatus(value?: number) {
  if (value === 1) return <Badge status="success" text="启用" />;
  if (value === 2) return <Badge status="error" text="停用" />;
  return <Badge status="default" text="未知" />;
}

export default function DeptManagePage() {
  const [deptForm] = Form.useForm();
  const [moveForm] = Form.useForm();
  const [tree, setTree] = useState<DeptRecord[]>([]);
  const [selectedId, setSelectedId] = useState<number>();
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);
  const [moveVisible, setMoveVisible] = useState(false);
  const [movingDept, setMovingDept] = useState<DeptRecord | null>(null);
  const [rolesVisible, setRolesVisible] = useState(false);
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [roleOptions, setRoleOptions] = useState<RoleRecord[]>([]);
  const [deptRoles, setDeptRoles] = useState<DeptRoleRecord[]>([]);
  const [checkedRoles, setCheckedRoles] = useState<number[]>([]);
  const [rolesLoading, setRolesLoading] = useState(false);

  const selected = useMemo(
    () => findDept(tree, selectedId),
    [tree, selectedId]
  );
  const disabledParentIds = useMemo(() => {
    const ids = getDescendantIds(mode === 'edit' ? selected : null);
    if (mode === 'edit' && selected?.id) {
      ids.add(selected.id);
    }
    return ids;
  }, [mode, selected]);
  const disabledMoveParentIds = useMemo(() => {
    const ids = getDescendantIds(movingDept);
    if (movingDept?.id) {
      ids.add(movingDept.id);
      ids.add(normalizeParentId(movingDept.parentId));
    }
    return ids;
  }, [movingDept]);
  const parentTreeData = useMemo(
    () => toParentTreeData(tree, disabledParentIds),
    [tree, disabledParentIds]
  );
  const moveParentTreeData = useMemo(
    () => toParentTreeData(tree, disabledMoveParentIds),
    [tree, disabledMoveParentIds]
  );
  const selectedDeptRoleIds = useMemo(
    () => new Set(deptRoles.map((role) => Number(role.roleId || role.id))),
    [deptRoles]
  );
  const availableRoleOptions = useMemo(
    () =>
      roleOptions.filter((role) => !selectedDeptRoleIds.has(Number(role.id))),
    [roleOptions, selectedDeptRoleIds]
  );

  const loadTree = useCallback(async (autoSelectFirst = false) => {
    const data = await fetchDeptTree();
    const nextTree = data || [];
    setTree(nextTree);
    if (autoSelectFirst) {
      const firstDept = findFirstDept(nextTree);
      setSelectedId(firstDept?.id);
      setExpandedKeys(firstDept ? [String(firstDept.id)] : []);
    }
  }, []);

  const loadDeptRoles = useCallback(async (deptId?: number) => {
    if (!deptId) {
      setDeptRoles([]);
      return;
    }
    setRolesLoading(true);
    try {
      const roles = await fetchDeptRoles(deptId);
      setDeptRoles(roles || []);
    } finally {
      setRolesLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadTree(true);
  }, [loadTree]);

  useEffect(() => {
    void loadDeptRoles(selectedId);
  }, [loadDeptRoles, selectedId]);

  const openCreate = () => {
    setMode('create');
    deptForm.resetFields();
    deptForm.setFieldsValue({
      parentId: getParentFieldValue(selectedId),
      deptName: '',
      deptSort: 0,
    });
    setVisible(true);
  };

  const openEdit = (record = selected) => {
    if (!record) return;
    setSelectedId(record.id);
    setMode('edit');
    deptForm.resetFields();
    deptForm.setFieldsValue({
      ...record,
      parentId: getParentFieldValue(record.parentId),
      deptSort: getDeptSort(record),
      activeStatus: undefined,
    });
    setVisible(true);
  };

  const openMoveDept = (record: DeptRecord) => {
    setSelectedId(record.id);
    setMovingDept(record);
    moveForm.resetFields();
    moveForm.setFieldsValue({
      targetParentId: getParentFieldValue(record.parentId),
    });
    setMoveVisible(true);
  };

  const updateDeptActiveStatus = (record: DeptRecord) => {
    const isDisabled = record.activeStatus === 2;
    const hasChildren = Boolean(record.children?.length);
    const actionText = isDisabled ? '启用' : '停用';
    Modal.confirm({
      title: `${actionText}部门`,
      content: isDisabled
        ? `确认启用部门 ${
            record.deptName || record.deptCode
          }？启用时仅启用当前部门。`
        : `确认停用部门 ${record.deptName || record.deptCode}？${
            hasChildren ? '该部门下的所有子部门也会被停用。' : ''
          }`,
      onOk: async () => {
        await toggleDeptActiveStatus(record.id, isDisabled ? 1 : 2);
        Message.success(`部门已${actionText}`);
        await loadTree();
      },
    });
  };

  const submitMoveDept = async () => {
    if (!movingDept) return;
    const values = await moveForm.validate();
    const targetParentId = normalizeParentId(values.targetParentId);
    if (targetParentId === normalizeParentId(movingDept.parentId)) {
      Message.warning('请选择不同的目标位置');
      return;
    }
    await moveDept({ id: movingDept.id, targetParentId });
    Message.success('部门已移动');
    setMoveVisible(false);
    setMovingDept(null);
    await loadTree();
  };

  const submit = async () => {
    const values = await deptForm.validate();
    const parentId = normalizeParentId(values.parentId);
    const payload = {
      ...values,
      parentId,
      deptName: String(values.deptName || '').trim(),
      deptSort: Number(values.deptSort ?? 0),
    };
    delete payload.sortOrder;

    if (mode === 'create') {
      await createDept({ ...payload, activeStatus: 2 });
      Message.success('部门已新增');
    } else if (selected) {
      await updateDept({
        id: selected.id,
        deptName: payload.deptName,
        deptSort: payload.deptSort,
      });
      if (parentId !== normalizeParentId(selected.parentId)) {
        await moveDept({ id: selected.id, targetParentId: parentId });
      }
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
    setDeptRoles(ownRoles || []);
    setCheckedRoles([]);
    setRolesVisible(true);
  };

  const updateDeptRoleStatus = useCallback(
    (record: DeptRoleRecord) => {
      const isEnabled = record.activeStatus === 1;
      const actionText = isEnabled ? '停用' : '启用';
      Modal.confirm({
        title: `${actionText}角色绑定`,
        content: `确认${actionText}角色绑定 ${
          record.roleName || record.roleId
        }？`,
        onOk: async () => {
          await updateDeptRoleActiveStatus({
            id: record.id,
            activeStatus: isEnabled ? 2 : 1,
          });
          Message.success(`角色绑定已${actionText}`);
          await loadDeptRoles(selectedId);
        },
      });
    },
    [loadDeptRoles, selectedId]
  );

  const deleteDeptRole = useCallback(
    (record: DeptRoleRecord) => {
      if (!selected) return;
      Modal.confirm({
        title: '删除角色绑定',
        content: `确认删除角色绑定 ${record.roleName || record.roleId}？`,
        onOk: async () => {
          const nextRoleIds = deptRoles
            .map((item) => Number(item.roleId))
            .filter((roleId) => roleId && roleId !== Number(record.roleId));
          await saveDeptRoles({ deptId: selected.id, roleIds: nextRoleIds });
          Message.success('角色绑定已删除');
          await loadDeptRoles(selected.id);
        },
      });
    },
    [deptRoles, loadDeptRoles, selected]
  );

  const renderTreeTitle = (item: DeptRecord) => {
    const isDisabled = item.activeStatus === 2;

    return (
      <div
        className={`${styles['tree-node-title']} ${
          isDisabled ? styles['tree-node-disabled'] : ''
        }`}
      >
        <div className={styles['tree-node-content']}>
          <span className={styles['tree-node-name']}>
            {item.deptName || item.deptCode || String(item.id)}
          </span>
          {renderActiveStatus(item.activeStatus)}
        </div>
        <div
          className={styles['tree-node-actions']}
          onClick={(event) => event.stopPropagation()}
        >
          <Button
            type="text"
            size="mini"
            icon={<IconMenuUnfold />}
            onClick={() => openMoveDept(item)}
          >
            移动
          </Button>
          <Button
            type="text"
            size="mini"
            className={!isDisabled ? styles['stop-dept-button'] : undefined}
            status={isDisabled ? 'success' : undefined}
            icon={isDisabled ? <IconPlayArrow /> : <IconStop />}
            onClick={() => updateDeptActiveStatus(item)}
          >
            {isDisabled ? '启用' : '停用'}
          </Button>
          <Button
            type="text"
            size="mini"
            icon={<IconEdit />}
            onClick={() => openEdit(item)}
          >
            编辑
          </Button>
          <Button
            type="text"
            size="mini"
            status="danger"
            icon={<IconDelete />}
            onClick={() =>
              Modal.confirm({
                title: '删除部门',
                content: `确认删除部门 ${item.deptName || item.deptCode}？`,
                onOk: async () => {
                  await deleteDept(item.id);
                  Message.success('部门已删除');
                  if (selectedId === item.id) {
                    setSelectedId(undefined);
                  }
                  await loadTree();
                },
              })
            }
          >
            删除
          </Button>
        </div>
      </div>
    );
  };

  const toTreeData = (nodes: DeptRecord[] = []) =>
    nodes.map((item) => ({
      key: String(item.id),
      value: item.id,
      title: renderTreeTitle(item),
      children: toTreeData(item.children || []),
    }));

  const roleColumns = useMemo<ColumnProps<DeptRoleRecord>[]>(
    () => [
      {
        title: '角色名称',
        dataIndex: 'roleName',
        width: 150,
        render: (value, record) => value || `角色ID：${record.roleId}`,
      },
      {
        title: '角色编码',
        dataIndex: 'roleCode',
        width: 280,
        render: (value) => (value ? <Text copyable>{value}</Text> : '—'),
      },
      {
        title: '启用状态',
        dataIndex: 'activeStatus',
        width: 100,
        render: renderActiveStatus,
      },
      {
        title: '操作人',
        dataIndex: 'operatorUsername',
        width: 120,
        render: (value, record) => value || record.operator || '—',
      },
      {
        title: '更新时间',
        dataIndex: 'updatedAt',
        width: 180,
        render: formatTime,
      },
      {
        title: '操作',
        dataIndex: 'operations',
        width: 180,
        fixed: 'right',
        render: (_, record) => {
          const isEnabled = record.activeStatus === 1;
          const actionText = isEnabled ? '停用' : '启用';
          return (
            <Space className={styles.operations} size={10} wrap>
              <Button
                type="text"
                size="small"
                icon={isEnabled ? <IconLock /> : <IconUnlock />}
                onClick={() => updateDeptRoleStatus(record)}
              >
                {actionText}
              </Button>
              <Button
                type="text"
                status="danger"
                size="small"
                icon={<IconDelete />}
                onClick={() => deleteDeptRole(record)}
              >
                删除
              </Button>
            </Space>
          );
        },
      },
    ],
    [deleteDeptRole, updateDeptRoleStatus]
  );

  return (
    <Card>
      <Title heading={6}>部门管理</Title>
      <div className={styles['button-group']}>
        <Space>
          <Button type="primary" icon={<IconPlus />} onClick={openCreate}>
            新增部门
          </Button>
        </Space>
        <Button icon={<IconRefresh />} onClick={() => loadTree()}>
          刷新
        </Button>
      </div>

      <div className={styles['page-layout']}>
        <div className={styles['tree-panel']}>
          <Tree
            blockNode
            treeData={toTreeData(tree)}
            selectedKeys={selectedId ? [String(selectedId)] : []}
            expandedKeys={expandedKeys}
            onExpand={(keys) => setExpandedKeys(keys.map(String))}
            onSelect={(keys) =>
              setSelectedId(keys[0] ? Number(keys[0]) : undefined)
            }
          />
        </div>
        <div className={styles['detail-panel']}>
          <Card title="部门详情">
            {selected ? (
              <div className={styles['dept-card-content']}>
                <div className={styles['dept-header']}>
                  <div className={styles['dept-title-wrap']}>
                    <div className={styles['dept-title-row']}>
                      <div className={styles['dept-title']}>
                        {selected.deptName || '-'}
                      </div>
                      {renderActiveStatus(selected.activeStatus)}
                    </div>
                    <div className={styles['dept-code-row']}>
                      {selected.deptCode ? (
                        <Text className={styles['dept-code']} copyable>
                          {selected.deptCode}
                        </Text>
                      ) : (
                        <span className={styles['dept-code']}>-</span>
                      )}
                    </div>
                  </div>
                </div>
                <Descriptions
                  className={styles['dept-descriptions']}
                  column={2}
                  data={[
                    { label: '部门 ID', value: selected.id },
                    {
                      label: '父部门',
                      value: getParentDeptDisplay(tree, selected.parentId),
                    },
                    { label: '部门类型', value: selected.deptType || '—' },
                    { label: '排序', value: getDeptSort(selected) },
                    { label: '部门路径', value: selected.deptPath || '—' },
                  ]}
                />
              </div>
            ) : (
              <Empty description="请选择左侧部门节点" />
            )}
          </Card>

          <Card title="角色列表" className={styles['role-card']}>
            <div className={styles['role-toolbar']}>
              <Button
                type="primary"
                disabled={!selected}
                icon={<IconSafe />}
                onClick={openRoles}
              >
                绑定角色
              </Button>
            </div>
            <Table
              rowKey="id"
              border
              loading={rolesLoading}
              columns={roleColumns}
              data={deptRoles}
              pagination={false}
              scroll={{ x: 950 }}
            />
          </Card>
        </div>
      </div>

      <Modal
        title={mode === 'create' ? '新增部门' : '编辑部门'}
        visible={visible}
        onOk={submit}
        onCancel={() => setVisible(false)}
        unmountOnExit
        style={{ width: 560 }}
      >
        <Form
          form={deptForm}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          <Form.Item
            label="父部门"
            field="parentId"
            rules={[{ required: true, message: '请选择父部门' }]}
          >
            <TreeSelect
              treeData={parentTreeData}
              placeholder="请选择父部门"
              allowClear={false}
            />
          </Form.Item>
          <Form.Item
            label="部门名称"
            field="deptName"
            rules={[{ required: true, message: '请输入部门名称' }]}
          >
            <Input placeholder="请输入部门名称" />
          </Form.Item>
          <Form.Item label="排序" field="deptSort">
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="移动部门"
        visible={moveVisible}
        onOk={submitMoveDept}
        onCancel={() => {
          setMoveVisible(false);
          setMovingDept(null);
        }}
        unmountOnExit
        style={{ width: 560 }}
      >
        <Form
          form={moveForm}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          <Form.Item label="当前部门">
            <Input
              value={movingDept?.deptName || movingDept?.deptCode || ''}
              disabled
            />
          </Form.Item>
          <Form.Item
            label="目标位置"
            field="targetParentId"
            rules={[{ required: true, message: '请选择目标位置' }]}
          >
            <TreeSelect
              treeData={moveParentTreeData}
              placeholder="请选择目标位置"
              allowClear={false}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={`部门绑定角色：${selected?.deptName || ''}`}
        visible={rolesVisible}
        onOk={async () => {
          if (!selected) return;
          if (!checkedRoles.length) {
            Message.warning('请选择要绑定的角色');
            return false;
          }
          await saveDeptRoles({
            deptId: selected.id,
            roleIds: [...selectedDeptRoleIds, ...checkedRoles],
          });
          Message.success('部门角色已保存');
          setRolesVisible(false);
          await loadDeptRoles(selected.id);
        }}
        onCancel={() => setRolesVisible(false)}
        unmountOnExit
        style={{ width: 560 }}
      >
        <div className={styles['role-bind-select']}>
          <Select
            mode="multiple"
            value={checkedRoles}
            placeholder="请选择要绑定的角色"
            allowClear
            showSearch
            onChange={(value) => setCheckedRoles(value as number[])}
          >
            {availableRoleOptions.map((role) => (
              <Select.Option key={role.id} value={role.id}>
                {getRoleDisplayName(role)}
              </Select.Option>
            ))}
          </Select>
        </div>
      </Modal>
    </Card>
  );
}
