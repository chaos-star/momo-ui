import React from 'react';
import { Button, Space, Tag } from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconSettings,
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
      width: 210,
      fixed: 'right',
      render: (_, record) => (
        <Space className={styles.operations} size={4}>
          <Button
            size="small"
            type="text"
            icon={<IconEdit />}
            onClick={() => callbacks.onEdit(record)}
          >
            编辑
          </Button>
          <Button
            size="small"
            type="text"
            icon={<IconSettings />}
            onClick={() => callbacks.onGrant(record)}
          >
            授权
          </Button>
          {record.activeStatus === 1 ? (
            <Button
              size="small"
              type="text"
              onClick={() => callbacks.onDisable(record)}
            >
              停用
            </Button>
          ) : (
            <Button
              size="small"
              type="text"
              onClick={() => callbacks.onEnable(record)}
            >
              启用
            </Button>
          )}
          <Button
            size="small"
            status="danger"
            type="text"
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
