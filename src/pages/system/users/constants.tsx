import React from 'react';
import { Badge, Button, Space, Tag, Typography } from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconLock,
  IconSafe,
  IconUnlock,
  IconUserGroup,
} from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import type { UserRecord } from '@/api/access-user';
import {
  FieldPolicyMap,
  getFieldPolicy,
  isFieldHidden,
  isFieldSortable,
  maskValue,
  statusText,
  formatTime,
} from '@/utils/accessControl';
import styles from './style/index.module.less';

const { Text } = Typography;

export type UserCallbacks = {
  onEdit: (record: UserRecord) => void;
  onDelete: (record: UserRecord) => void;
  onStatus: (record: UserRecord, activeStatus: number) => void;
  onRoles: (record: UserRecord) => void;
  onDepts: (record: UserRecord) => void;
  onPermissions: (record: UserRecord) => void;
};

function statusBadge(value?: number) {
  const text = statusText(value);
  if (value === 1) return <Badge status="success" text={text} />;
  if (value === 2 || value === 4) return <Badge status="error" text={text} />;
  if (value === 3) return <Badge status="warning" text={text} />;
  return <Badge status="default" text={text} />;
}

export function getColumns(
  callbacks: UserCallbacks,
  fieldPolicies?: FieldPolicyMap
): ColumnProps<UserRecord>[] {
  const emailPolicy = getFieldPolicy(
    fieldPolicies,
    'system.users.list',
    'email'
  );
  const mobilePolicy = getFieldPolicy(
    fieldPolicies,
    'system.users.list',
    'mobile'
  );
  const columns: ColumnProps<UserRecord>[] = [
    { title: 'ID', dataIndex: 'id', width: 80 },
    {
      title: '用户名',
      dataIndex: 'username',
      width: 140,
      render: (v) => <Text copyable>{v}</Text>,
    },
    {
      title: '姓名',
      dataIndex: 'realname',
      width: 120,
      render: (v) => v || '—',
    },
  ];

  if (!isFieldHidden(mobilePolicy)) {
    columns.push({
      title: '手机号',
      dataIndex: 'mobile',
      width: 130,
      sorter: isFieldSortable(mobilePolicy),
      render: (v) => maskValue(v, mobilePolicy),
    });
  }
  if (!isFieldHidden(emailPolicy)) {
    columns.push({
      title: '邮箱',
      dataIndex: 'email',
      width: 190,
      sorter: isFieldSortable(emailPolicy),
      render: (v) => maskValue(v, emailPolicy),
    });
  }

  columns.push(
    {
      title: '状态',
      dataIndex: 'activeStatus',
      width: 100,
      render: statusBadge,
    },
    {
      title: '角色',
      dataIndex: 'user_roles',
      width: 180,
      render: (_, record) => (
        <div className={styles['tag-list']}>
          {(record.user_roles || []).map((r) => (
            <Tag key={r.roleId}>{r.roleName}</Tag>
          ))}
        </div>
      ),
    },
    {
      title: '部门',
      dataIndex: 'user_depts',
      width: 180,
      render: (_, record) => (
        <div className={styles['tag-list']}>
          {(record.user_depts || []).map((d) => (
            <Tag key={d.deptId}>{d.deptName}</Tag>
          ))}
        </div>
      ),
    },
    { title: '最近登录', dataIndex: 'loginAt', width: 170, render: formatTime },
    {
      title: '操作',
      dataIndex: 'operations',
      width: 360,
      fixed: 'right',
      render: (_, record) => (
        <Space className={styles.operations} size={8} wrap>
          <Button
            type="text"
            size="small"
            icon={<IconEdit />}
            onClick={() => callbacks.onEdit(record)}
          >
            编辑
          </Button>
          <Button
            type="text"
            size="small"
            icon={<IconUserGroup />}
            onClick={() => callbacks.onRoles(record)}
          >
            角色
          </Button>
          <Button
            type="text"
            size="small"
            icon={<IconSafe />}
            onClick={() => callbacks.onDepts(record)}
          >
            部门
          </Button>
          <Button
            type="text"
            size="small"
            icon={<IconSafe />}
            onClick={() => callbacks.onPermissions(record)}
          >
            授权
          </Button>
          {record.activeStatus === 1 ? (
            <Button
              type="text"
              size="small"
              icon={<IconLock />}
              onClick={() => callbacks.onStatus(record, 2)}
            >
              禁用
            </Button>
          ) : (
            <Button
              type="text"
              size="small"
              icon={<IconUnlock />}
              onClick={() => callbacks.onStatus(record, 1)}
            >
              启用
            </Button>
          )}
          <Button
            type="text"
            status="danger"
            size="small"
            icon={<IconDelete />}
            onClick={() => callbacks.onDelete(record)}
          >
            删除
          </Button>
        </Space>
      ),
    }
  );
  return columns;
}
