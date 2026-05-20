import React from 'react';
import { Button, Space, Tag, Typography } from '@arco-design/web-react';
import { IconDelete, IconEdit, IconSafe } from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import type { RoleRecord } from '@/api/access-role';
import { formatTime } from '@/utils/accessControl';
import styles from './style/index.module.less';

const { Text } = Typography;

const ROLE_TYPE_LABELS: Record<string, string> = {
  PLATFORM_INTERNAL: '平台内部',
  PLATFORM_BUSINESS: '平台业务',
  TENANT_CUSTOM: '租户自定义',
};

const ASSIGN_SCOPE_LABELS: Record<string, string> = {
  PLATFORM_ONLY: '仅平台',
  TENANT_ONLY: '仅本租户',
  CROSS_TENANT: '可跨租户',
};

export type RoleCallbacks = {
  onEdit: (record: RoleRecord) => void;
  onDelete: (record: RoleRecord) => void;
  onGrant: (record: RoleRecord) => void;
};

function renderRoleType(value?: string) {
  const normalized = value || 'TENANT_CUSTOM';
  const color =
    normalized === 'PLATFORM_INTERNAL'
      ? 'red'
      : normalized === 'PLATFORM_BUSINESS'
      ? 'arcoblue'
      : 'green';
  return <Tag color={color}>{ROLE_TYPE_LABELS[normalized] || normalized}</Tag>;
}

function renderAssignScope(value?: string) {
  const normalized = value || 'TENANT_ONLY';
  const color =
    normalized === 'CROSS_TENANT'
      ? 'purple'
      : normalized === 'PLATFORM_ONLY'
      ? 'orange'
      : 'gray';
  return (
    <Tag color={color}>{ASSIGN_SCOPE_LABELS[normalized] || normalized}</Tag>
  );
}

export function getColumns(
  callbacks: RoleCallbacks
): ColumnProps<RoleRecord>[] {
  return [
    { title: 'ID', dataIndex: 'id', width: 80 },
    { title: '角色名称', dataIndex: 'roleName', width: 160 },
    {
      title: '角色编码',
      dataIndex: 'roleCode',
      width: 180,
      render: (v) => <Text copyable>{v}</Text>,
    },
    {
      title: '类型',
      dataIndex: 'roleType',
      width: 130,
      render: renderRoleType,
    },
    {
      title: '分配范围',
      dataIndex: 'assignScope',
      width: 130,
      render: renderAssignScope,
    },
    {
      title: '描述',
      dataIndex: 'description',
      ellipsis: true,
      width: 220,
      render: (v) => v || '—',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      width: 170,
      render: formatTime,
    },
    {
      title: '操作',
      dataIndex: 'operations',
      width: 230,
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
            icon={<IconSafe />}
            onClick={() => callbacks.onGrant(record)}
          >
            授权
          </Button>
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
    },
  ];
}
