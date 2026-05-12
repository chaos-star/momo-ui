import React from 'react';
import {
  Badge,
  Button,
  Message,
  Space,
  Typography,
} from '@arco-design/web-react';
import { IconCopy } from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import copy from 'copy-to-clipboard';
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
        return (
          <Space size={4} className={styles.secretRow}>
            <Text ellipsis style={{ maxWidth: 132 }}>
              {secret}
            </Text>
            <Button
              type="text"
              size="mini"
              icon={<IconCopy />}
              onClick={() => {
                copy(secret);
                Message.success(t['tenantSearch.msg.copied']);
              }}
            />
          </Space>
        );
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
      title: t['tenantSearch.columns.createdAt'],
      dataIndex: 'createdAt',
      width: 168,
      render: (v: number) => formatEpochMs(v),
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
      width: 220,
      fixed: 'right',
      headerCellStyle: { paddingLeft: '15px' },
      render: (_, record) => (
        <Space className={styles.operations}>
          <Button
            type="text"
            size="small"
            onClick={() => callbacks.onView(record)}
          >
            {t['tenantSearch.columns.operations.view']}
          </Button>
          <Button
            type="text"
            size="small"
            disabled={record.status === 2}
            onClick={() => callbacks.onEdit(record)}
          >
            {t['tenantSearch.columns.operations.edit']}
          </Button>
          <Button
            type="text"
            size="small"
            status="danger"
            disabled={record.status === 2}
            onClick={() => callbacks.onDelete(record)}
          >
            {t['tenantSearch.columns.operations.delete']}
          </Button>
        </Space>
      ),
    },
  ];
}
