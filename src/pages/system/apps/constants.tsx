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
              {t['appSearch.columns.operations.view']}
            </Button>
            <Button
              type="text"
              size="small"
              icon={<IconEdit />}
              disabled={deleted}
              onClick={() => callbacks.onEdit(record)}
            >
              {t['appSearch.columns.operations.edit']}
            </Button>
            {showEnable ? (
              <Button
                type="text"
                size="small"
                icon={<IconUnlock />}
                disabled={!canToggleActive}
                onClick={() => callbacks.onEnable(record)}
              >
                {t['appSearch.columns.operations.enable']}
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
                {t['appSearch.columns.operations.disable']}
              </Button>
            ) : null}
            <Button
              type="text"
              size="small"
              status="danger"
              icon={<IconDelete />}
              disabled={deleted}
              onClick={() => callbacks.onDelete(record)}
            >
              {t['appSearch.columns.operations.delete']}
            </Button>
          </Space>
        );
      },
    },
  ];
}
