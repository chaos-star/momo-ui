import React from 'react';
import { Button, Dropdown, Menu, Space, Tag } from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconLock,
  IconMore,
  IconSettings,
  IconUnlock,
} from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import type { PermissionBoundaryPackageRecord } from '@/api/permission-boundary-package';
import { formatEpochMs } from '../tenants/utils';
import styles from '../tenants/style/index.module.less';

export type PackageTableCallbacks = {
  onEdit: (record: PermissionBoundaryPackageRecord) => void;
  onGrant: (record: PermissionBoundaryPackageRecord) => void;
  onEnable: (record: PermissionBoundaryPackageRecord) => void;
  onDisable: (record: PermissionBoundaryPackageRecord) => void;
  onDelete: (record: PermissionBoundaryPackageRecord) => void;
};

type PackageActionItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  danger?: boolean;
  visible?: boolean;
  onClick: () => void;
};

function activeTag(value?: number) {
  return value === 1 ? (
    <Tag color="green">启用</Tag>
  ) : (
    <Tag color="red">停用</Tag>
  );
}

export function getColumns(
  callbacks: PackageTableCallbacks
): ColumnProps<PermissionBoundaryPackageRecord>[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 72,
    },
    {
      title: '权限包编码',
      dataIndex: 'packageCode',
      width: 170,
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '权限包名称',
      dataIndex: 'packageName',
      width: 150,
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '权限数量',
      dataIndex: 'permissionCount',
      width: 92,
      render: (value) => value ?? 0,
    },
    {
      title: '绑定数',
      dataIndex: 'tenantCount',
      width: 88,
      render: (value) => value ?? 0,
    },
    {
      title: '启动状态',
      dataIndex: 'activeStatus',
      width: 96,
      render: activeTag,
    },
    {
      title: '描述',
      dataIndex: 'description',
      width: 200,
      ellipsis: true,
      tooltip: true,
    },
    {
      title: '最后操作人',
      dataIndex: 'operatorUsername',
      width: 120,
      ellipsis: true,
      tooltip: true,
      render: (_, record) => record.operatorUsername?.trim() || '—',
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      width: 160,
      render: (value) => formatEpochMs(value),
    },
    {
      title: '操作',
      dataIndex: 'operations',
      width: 260,
      fixed: 'right',
      render: (_, record) => {
        const isEnabled = record.activeStatus === 1;
        const actionItems: PackageActionItem[] = [
          {
            key: 'edit',
            label: '编辑',
            icon: <IconEdit />,
            onClick: () => callbacks.onEdit(record),
          },
          {
            key: 'grant',
            label: '授权',
            icon: <IconSettings />,
            onClick: () => callbacks.onGrant(record),
          },
          {
            key: 'toggleActiveStatus',
            label: isEnabled ? '停用' : '启用',
            icon: isEnabled ? <IconLock /> : <IconUnlock />,
            onClick: () => {
              if (isEnabled) {
                callbacks.onDisable(record);
              } else {
                callbacks.onEnable(record);
              }
            },
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
                size="small"
                type="text"
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
