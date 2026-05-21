import React from 'react';
import {
  Badge,
  Button,
  Space,
  Tooltip,
  Typography,
} from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconLock,
  IconSafe,
  IconUnlock,
} from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import type { RoleRecord } from '@/api/access-role';
import { formatTime } from '@/utils/accessControl';
import styles from './style/index.module.less';

const { Text } = Typography;

const renderEllipsisWithTooltip = (value?: string) => {
  const text = value || '—';
  return (
    <Tooltip content={text} disabled={!value}>
      <Text className={styles['table-cell-ellipsis']}>{text}</Text>
    </Tooltip>
  );
};

const renderActiveStatus = (value?: number) => {
  if (value === 1) {
    return <Badge status="success" text="启用" />;
  }
  if (value === 2) {
    return <Badge status="error" text="停用" />;
  }
  return <Badge status="default" text="未知" />;
};

export type RoleCallbacks = {
  onEdit: (record: RoleRecord) => void;
  onToggleActiveStatus: (record: RoleRecord) => void;
  onDelete: (record: RoleRecord) => void;
  onGrant: (record: RoleRecord) => void;
};

export function getColumns(
  callbacks: RoleCallbacks
): ColumnProps<RoleRecord>[] {
  return [
    { title: 'ID', dataIndex: 'id', width: 80 },
    {
      title: '角色名称',
      dataIndex: 'roleName',
      width: 160,
      render: renderEllipsisWithTooltip,
    },
    {
      title: '角色编码',
      dataIndex: 'roleCode',
      width: 280,
      render: (v) => <Text copyable>{v}</Text>,
    },
    {
      title: '启用状态',
      dataIndex: 'activeStatus',
      width: 100,
      render: renderActiveStatus,
    },
    {
      title: '描述',
      dataIndex: 'description',
      width: 280,
      render: renderEllipsisWithTooltip,
    },
    {
      title: '操作人',
      dataIndex: 'operatorUsername',
      width: 120,
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
      width: 290,
      fixed: 'right',
      render: (_, record) => {
        const isEnabled = record.activeStatus === 1;
        return (
          <Space className={styles.operations} size={10} wrap>
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
              icon={isEnabled ? <IconLock /> : <IconUnlock />}
              onClick={() => callbacks.onToggleActiveStatus(record)}
            >
              {isEnabled ? '停用' : '启用'}
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
        );
      },
    },
  ];
}
