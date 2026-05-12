import React from 'react';
import { Badge, Button, Space, Typography } from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconEye,
  IconLock,
  IconUnlock,
} from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import type { TenantRecord } from '@/api/tenant';
import {
  businessTypeLabel,
  dataStatusLabel,
  formatEpochMs,
  parseEncryptionKey,
  tenantTypeToBusinessType,
} from './utils';
import styles from './style/index.module.less';

const { Text } = Typography;

export type TenantColumnCallbacks = {
  onView: (record: TenantRecord) => void;
  onEdit: (record: TenantRecord) => void;
  onDelete: (record: TenantRecord) => void;
  onEnable: (record: TenantRecord) => void;
  onDisable: (record: TenantRecord) => void;
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
      width: 140,
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
      dataIndex: 'status',
      width: 100,
      render: (v: number) => {
        if (v === 2) {
          return <Badge status="error" text={dataStatusLabel(t, v)} />;
        }
        return <Badge status="success" text={dataStatusLabel(t, v)} />;
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
      width: 306,
      fixed: 'right',
      headerCellStyle: { paddingLeft: '12px' },
      render: (_, record) => {
        const deleted = record.status === 2;
        const canToggleActive = !deleted;
        const showEnable = record.activeStatus !== 1;
        const showDisable = record.activeStatus === 1;
        return (
          <Space className={styles.operations} size={10} wrap>
            <Button
              type="text"
              size="small"
              icon={<IconEye />}
              onClick={() => callbacks.onView(record)}
            >
              {t['tenantSearch.columns.operations.view']}
            </Button>
            <Button
              type="text"
              size="small"
              icon={<IconEdit />}
              disabled={deleted}
              onClick={() => callbacks.onEdit(record)}
            >
              {t['tenantSearch.columns.operations.edit']}
            </Button>
            {showEnable ? (
              <Button
                type="text"
                size="small"
                icon={<IconUnlock />}
                disabled={!canToggleActive}
                onClick={() => callbacks.onEnable(record)}
              >
                {t['tenantSearch.columns.operations.enable']}
              </Button>
            ) : null}
            {showDisable ? (
              <Button
                type="text"
                size="small"
                icon={<IconLock />}
                disabled={!canToggleActive}
                onClick={() => callbacks.onDisable(record)}
              >
                {t['tenantSearch.columns.operations.disable']}
              </Button>
            ) : null}
            <Button
              type="text"
              size="small"
              icon={<IconDelete />}
              status="danger"
              disabled={deleted}
              onClick={() => callbacks.onDelete(record)}
            >
              {t['tenantSearch.columns.operations.delete']}
            </Button>
          </Space>
        );
      },
    },
  ];
}
