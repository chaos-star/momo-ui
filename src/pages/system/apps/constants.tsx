import React from 'react';
import {
  Badge,
  Button,
  Dropdown,
  Menu,
  Space,
  Typography,
} from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconEye,
  IconLock,
  IconMore,
  IconUnlock,
} from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import type { AppRecord } from '@/api/app';
import { activeStatusLabel, formatEpochMs, osTypeLabel } from './utils';
import styles from '../tenants/style/index.module.less';

const { Text } = Typography;

export type AppColumnCallbacks = {
  onView: (record: AppRecord) => void;
  onEdit: (record: AppRecord) => void;
  onEnable: (record: AppRecord) => void;
  onDisable: (record: AppRecord) => void;
  onDelete: (record: AppRecord) => void;
};

type AppActionItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
  visible?: boolean;
  onClick: () => void;
};

export function getColumns(
  t: Record<string, string>,
  callbacks: AppColumnCallbacks
): ColumnProps<AppRecord>[] {
  return [
    {
      title: t['appSearch.columns.id'],
      dataIndex: 'id',
      width: 80,
    },
    {
      title: t['appSearch.columns.appCode'],
      dataIndex: 'appCode',
      width: 180,
      render: (value: string) => <Text copyable>{value}</Text>,
    },
    {
      title: t['appSearch.columns.tenant'],
      dataIndex: 'tenantName',
      width: 140,
      ellipsis: true,
      render: (_: unknown, record: AppRecord) =>
        record.tenantName?.trim() || '—',
    },
    {
      title: t['appSearch.columns.pkgName'],
      dataIndex: 'pkgName',
      width: 200,
      ellipsis: true,
      render: (value: string) =>
        value ? <Text copyable={{ text: value }}>{value}</Text> : '—',
    },
    {
      title: t['appSearch.columns.osType'],
      dataIndex: 'osType',
      width: 88,
      render: (v: string) => osTypeLabel(t, v),
    },
    {
      title: t['appSearch.columns.activeStatus'],
      dataIndex: 'activeStatus',
      width: 100,
      render: (v: number) => {
        const text = activeStatusLabel(t, v);
        if (v === 1) {
          return <Badge status="success" text={text} />;
        }
        if (v === 2) {
          return <Badge status="error" text={text} />;
        }
        return <Badge status="default" text={text} />;
      },
    },
    {
      title: t['appSearch.columns.operator'],
      dataIndex: 'operatorUsername',
      width: 120,
      ellipsis: true,
      render: (_: unknown, record: AppRecord) =>
        record.operatorUsername?.trim() || '—',
    },
    {
      title: t['appSearch.columns.updatedAt'],
      dataIndex: 'updatedAt',
      width: 168,
      render: (v: number) => formatEpochMs(v),
    },
    {
      title: t['appSearch.columns.operations'],
      dataIndex: 'operations',
      width: 260,
      fixed: 'right' as const,
      headerCellStyle: { paddingLeft: '12px' },
      render: (_: unknown, record: AppRecord) => {
        const deleted = record.status === 2;
        const canToggleActive = !deleted;
        const actionItems: AppActionItem[] = [
          {
            key: 'view',
            label: t['appSearch.columns.operations.view'],
            icon: <IconEye />,
            onClick: () => callbacks.onView(record),
          },
          {
            key: 'edit',
            label: t['appSearch.columns.operations.edit'],
            icon: <IconEdit />,
            disabled: deleted,
            onClick: () => callbacks.onEdit(record),
          },
          {
            key: 'enable',
            label: t['appSearch.columns.operations.enable'],
            icon: <IconUnlock />,
            disabled: !canToggleActive,
            visible: record.activeStatus !== 1,
            onClick: () => callbacks.onEnable(record),
          },
          {
            key: 'disable',
            label: t['appSearch.columns.operations.disable'],
            icon: <IconLock />,
            disabled: !canToggleActive,
            visible: record.activeStatus === 1,
            onClick: () => callbacks.onDisable(record),
          },
          {
            key: 'delete',
            label: t['appSearch.columns.operations.delete'],
            icon: <IconDelete />,
            danger: true,
            disabled: deleted,
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
              const action = moreActions.find((item) => item.key === key);
              if (!action?.disabled) {
                action?.onClick();
              }
            }}
          >
            {moreActions.map((item) => (
              <Menu.Item
                key={item.key}
                disabled={item.disabled}
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
                disabled={item.disabled}
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
