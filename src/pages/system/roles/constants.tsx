import React from 'react';
import { Button, Space, Tag, Typography } from '@arco-design/web-react';
import { IconDelete, IconEdit, IconSafe } from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import type { RoleRecord } from '@/api/access-role';
import { formatTime } from '@/utils/accessControl';
import styles from './style/index.module.less';

const { Text } = Typography;

export type RoleCallbacks = {
  onEdit: (record: RoleRecord) => void;
  onDelete: (record: RoleRecord) => void;
  onGrant: (record: RoleRecord) => void;
};

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
      width: 120,
      render: (v) => <Tag>{v || 'CUSTOM'}</Tag>,
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
