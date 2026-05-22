import React from 'react';
import {
  Badge,
  Button,
  Dropdown,
  Menu,
  Space,
  Tooltip,
  Typography,
} from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconLock,
  IconMore,
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

type RoleActionItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  danger?: boolean;
  visible?: boolean;
  onClick: () => void;
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
      width: 260,
      fixed: 'right',
      render: (_, record) => {
        const isEnabled = record.activeStatus === 1;
        const actionItems: RoleActionItem[] = [
          {
            key: 'edit',
            label: '编辑',
            icon: <IconEdit />,
            onClick: () => callbacks.onEdit(record),
          },
          {
            key: 'toggleActiveStatus',
            label: isEnabled ? '停用' : '启用',
            icon: isEnabled ? <IconLock /> : <IconUnlock />,
            onClick: () => callbacks.onToggleActiveStatus(record),
          },
          {
            key: 'grant',
            label: '授权',
            icon: <IconSafe />,
            onClick: () => callbacks.onGrant(record),
          },
          {
            key: 'delete',
            label: '删除',
            icon: <IconDelete />,
            danger: true,
            onClick: () => callbacks.onDelete(record),
          },
        ];
        const actions = actionItems.filter((item) => item.visible !== false);
        const primaryActions =
          actions.length > 4 ? actions.slice(0, 3) : actions;
        const moreActions = actions.length > 4 ? actions.slice(3) : [];
        const moreMenu = moreActions.length ? (
          <Menu
            onClickMenuItem={(key) => {
              moreActions.find((item) => item.key === key)?.onClick();
            }}
          >
            {moreActions.map((item) => (
              <Menu.Item
                key={item.key}
                className={item.danger ? styles['danger-menu-item'] : undefined}
              >
                {item.icon}
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        ) : null;

        return (
          <Space className={styles.operations} size={10} wrap>
            {primaryActions.map((item) => (
              <Button
                key={item.key}
                type="text"
                size="small"
                icon={item.icon}
                status={item.danger ? 'danger' : undefined}
                onClick={item.onClick}
              >
                {item.label}
              </Button>
            ))}
            {moreMenu ? (
              <Dropdown droplist={moreMenu} position="br">
                <Button type="text" size="small" icon={<IconMore />}>
                  更多
                </Button>
              </Dropdown>
            ) : null}
          </Space>
        );
      },
    },
  ];
}
