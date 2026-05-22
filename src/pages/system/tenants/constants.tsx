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
  IconEye,
  IconSafe,
  IconLock,
  IconMore,
  IconUnlock,
} from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import type { TenantRecord } from '@/api/tenant';
import {
  activeStatusLabel,
  businessTypeLabel,
  formatEpochMs,
  parseEncryptionKey,
  tenantTypeToBusinessType,
} from './utils';
import styles from './style/index.module.less';

const { Text } = Typography;

export type TenantColumnCallbacks = {
  onView: (record: TenantRecord) => void;
  onEdit: (record: TenantRecord) => void;
  onBoundary: (record: TenantRecord) => void;
  onDelete: (record: TenantRecord) => void;
  onEnable: (record: TenantRecord) => void;
  onDisable: (record: TenantRecord) => void;
};

type TenantActionItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
  visible?: boolean;
  onClick: () => void;
};

export function getColumns(
  t: Record<string, string>,
  callbacks: TenantColumnCallbacks
): ColumnProps<TenantRecord>[] {
  return [
    {
      title: t['tenantSearch.columns.id'],
      dataIndex: 'id',
      width: 72,
    },
    {
      title: t['tenantSearch.columns.tenantName'],
      dataIndex: 'tenantName',
      width: 160,
    },
    {
      title: t['tenantSearch.columns.tenantCode'],
      dataIndex: 'tenantCode',
      width: 150,
      render: (value: string) => <Text copyable>{value}</Text>,
    },
    {
      title: t['tenantSearch.columns.businessType'],
      dataIndex: 'tenantType',
      width: 100,
      render: (_, record) =>
        businessTypeLabel(t, tenantTypeToBusinessType(record.tenantType)),
    },
    {
      title: t['tenantSearch.columns.tenantZone'],
      dataIndex: 'tenantZone',
      width: 160,
      render: (value: string) => {
        const text = value || '—';
        return (
          <Tooltip content={text} disabled={!value}>
            <div className={styles.tableCellEllipsis}>{text}</div>
          </Tooltip>
        );
      },
    },
    {
      title: t['tenantSearch.columns.eventSecret'],
      dataIndex: 'config',
      width: 200,
      render: (_: unknown, record: TenantRecord) => {
        const secret = parseEncryptionKey(record.config);
        if (!secret) {
          return '—';
        }
        return <Text copyable>{secret}</Text>;
      },
    },
    {
      title: t['tenantSearch.columns.tenantStatus'],
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
        if (v === 3) {
          return <Badge status="warning" text={text} />;
        }
        return <Badge status="default" text={text} />;
      },
    },
    {
      title: t['tenantSearch.columns.lastOperator'],
      dataIndex: 'operatorUsername',
      width: 120,
      ellipsis: true,
      render: (_: unknown, record: TenantRecord) => {
        const name = record.operatorUsername?.trim();
        if (name) {
          return name;
        }
        return '—';
      },
    },
    {
      title: t['tenantSearch.columns.updatedAt'],
      dataIndex: 'updatedAt',
      width: 168,
      render: (v: number) => formatEpochMs(v),
    },
    {
      title: t['tenantSearch.columns.operations'],
      dataIndex: 'operations',
      width: 260,
      fixed: 'right',
      headerCellStyle: { paddingLeft: '12px' },
      render: (_, record) => {
        const deleted = record.status === 2;
        const platformTenant =
          tenantTypeToBusinessType(record.tenantType) === 'PLATFORM';
        const canToggleActive = !deleted;
        const canOpenBoundary = !deleted && !platformTenant;
        const actionItems: TenantActionItem[] = [
          {
            key: 'view',
            label: t['tenantSearch.columns.operations.view'],
            icon: <IconEye />,
            onClick: () => callbacks.onView(record),
          },
          {
            key: 'edit',
            label: t['tenantSearch.columns.operations.edit'],
            icon: <IconEdit />,
            disabled: deleted,
            onClick: () => callbacks.onEdit(record),
          },
          {
            key: 'boundary',
            label: t['tenantSearch.columns.operations.boundary'],
            icon: <IconSafe />,
            disabled: !canOpenBoundary,
            onClick: () => callbacks.onBoundary(record),
          },
          {
            key: 'enable',
            label: t['tenantSearch.columns.operations.enable'],
            icon: <IconUnlock />,
            disabled: !canToggleActive,
            visible: record.activeStatus !== 1,
            onClick: () => callbacks.onEnable(record),
          },
          {
            key: 'disable',
            label: t['tenantSearch.columns.operations.disable'],
            icon: <IconLock />,
            disabled: !canToggleActive,
            visible: record.activeStatus === 1,
            onClick: () => callbacks.onDisable(record),
          },
          {
            key: 'delete',
            label: t['tenantSearch.columns.operations.delete'],
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
