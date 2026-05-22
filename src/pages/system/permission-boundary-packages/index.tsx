import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Button,
  Card,
  Message,
  Modal,
  PaginationProps,
  Space,
  Table,
  Typography,
} from '@arco-design/web-react';
import { IconPlus, IconRefresh } from '@arco-design/web-react/icon';
import PermissionWrapper from '@/components/PermissionWrapper';
import {
  createPermissionBoundaryPackage,
  deletePermissionBoundaryPackage,
  fetchPermissionBoundaryPackagePage,
  PermissionBoundaryPackageRecord,
  updatePermissionBoundaryPackage,
  updatePermissionBoundaryPackageActiveStatus,
} from '@/api/permission-boundary-package';
import SearchForm from './form';
import type { PermissionBoundaryPackageSearchValues } from './form';
import PermissionPackageModal, {
  PackageModalValues,
} from './PermissionPackageModal';
import PermissionPackageGrantDrawer from './PermissionPackageGrantDrawer';
import { getColumns } from './constants';
import styles from '../tenants/style/index.module.less';
import packageStyles from './style/index.module.less';

const { Title, Text } = Typography;

function toListParams(
  formParams: PermissionBoundaryPackageSearchValues,
  current: number,
  pageSize: number
) {
  return {
    page: current,
    pageSize,
    id: formParams.id?.trim() || undefined,
    packageCode: formParams.packageCode?.trim() || undefined,
    packageName: formParams.packageName?.trim() || undefined,
    activeStatus: formParams.activeStatus || undefined,
  };
}

export default function PermissionBoundaryPackagePage() {
  const [data, setData] = useState<PermissionBoundaryPackageRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [formParams, setFormParams] =
    useState<PermissionBoundaryPackageSearchValues>({});
  const [tick, setTick] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [editing, setEditing] =
    useState<PermissionBoundaryPackageRecord | null>(null);
  const [grantRecord, setGrantRecord] =
    useState<PermissionBoundaryPackageRecord | null>(null);

  const pagination = useMemo<PaginationProps>(
    () => ({
      current,
      pageSize,
      total,
      showTotal: true,
      sizeCanChange: true,
      pageSizeChangeResetCurrent: true,
      showJumper: true,
      pageSizeOptions: [10, 20, 50, 100],
    }),
    [current, pageSize, total]
  );

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    void fetchPermissionBoundaryPackagePage(
      toListParams(formParams, current, pageSize)
    )
      .then((res) => {
        if (canceled) return;
        setData(res.list || []);
        setTotal(res.total || 0);
      })
      .finally(() => !canceled && setLoading(false));
    return () => {
      canceled = true;
    };
  }, [current, pageSize, formParams, tick]);

  const bumpList = useCallback(() => setTick((x) => x + 1), []);

  const handleSubmit = async (values: PackageModalValues) => {
    const payload = {
      id: values.id,
      packageName: values.packageName.trim(),
      description: values.description?.trim() || '',
    };
    if (editing) {
      await updatePermissionBoundaryPackage({ ...payload, id: editing.id });
      Message.success('权限包已更新');
    } else {
      await createPermissionBoundaryPackage(payload);
      Message.success('权限包已创建');
    }
    setModalVisible(false);
    setEditing(null);
    bumpList();
  };

  const callbacks = useMemo(
    () => ({
      onEdit: (record: PermissionBoundaryPackageRecord) => {
        setEditing(record);
        setModalVisible(true);
      },
      onGrant: (record: PermissionBoundaryPackageRecord) =>
        setGrantRecord(record),
      onEnable: (record: PermissionBoundaryPackageRecord) => {
        Modal.confirm({
          title: '确认启用权限包？',
          content: `启用后，绑定 ${record.packageName} 的租户将重新获得该边界能力。`,
          onOk: async () => {
            await updatePermissionBoundaryPackageActiveStatus({
              id: record.id,
              activeStatus: 1,
            });
            Message.success('权限包已启用');
            bumpList();
          },
        });
      },
      onDisable: (record: PermissionBoundaryPackageRecord) => {
        Modal.confirm({
          title: '确认停用权限包？',
          content: `停用会影响 ${
            record.tenantCount ?? 0
          } 个已绑定租户的有效权限边界。`,
          onOk: async () => {
            await updatePermissionBoundaryPackageActiveStatus({
              id: record.id,
              activeStatus: 2,
            });
            Message.success('权限包已停用');
            bumpList();
          },
        });
      },
      onDelete: (record: PermissionBoundaryPackageRecord) => {
        Modal.confirm({
          title: '确认删除权限包？',
          content: `删除 ${record.packageName} 后，将同时解绑 ${
            record.tenantCount ?? 0
          } 个已绑定租户的权限包，可能影响相关用户正常使用，请谨慎操作。`,
          onOk: async () => {
            await deletePermissionBoundaryPackage(record.id);
            Message.success('权限包已删除');
            bumpList();
          },
        });
      },
    }),
    [bumpList]
  );

  const columns = useMemo(() => getColumns(callbacks), [callbacks]);

  return (
    <Card>
      <Title heading={6}>权限边界包管理</Title>
      <Text type="secondary" className={packageStyles['package-tip']}>
        平台侧集中维护权限包，普通租户绑定后自动形成租户有效权限边界。
      </Text>
      <SearchForm
        onSearch={(values) => {
          setCurrent(1);
          setFormParams(values);
        }}
      />
      <PermissionWrapper
        requiredPermissions={[
          { resource: 'system:permission-boundary-package:access' },
        ]}
      >
        <div className={styles['button-group']}>
          <Space>
            <Button
              type="primary"
              icon={<IconPlus />}
              onClick={() => {
                setEditing(null);
                setModalVisible(true);
              }}
            >
              新增权限包
            </Button>
          </Space>
          <Button icon={<IconRefresh />} onClick={() => bumpList()}>
            刷新
          </Button>
        </div>
      </PermissionWrapper>
      <Table
        rowKey="id"
        loading={loading}
        pagination={pagination}
        columns={columns}
        data={data}
        border
        scroll={{ x: 1100 }}
        onChange={(pag) => {
          setCurrent((c) => pag.current ?? c);
          setPageSize((s) => (pag.pageSize != null ? Number(pag.pageSize) : s));
        }}
      />
      <PermissionPackageModal
        visible={modalVisible}
        record={editing}
        onCancel={() => {
          setModalVisible(false);
          setEditing(null);
        }}
        onSubmit={handleSubmit}
      />
      <PermissionPackageGrantDrawer
        visible={!!grantRecord}
        record={grantRecord}
        onClose={() => setGrantRecord(null)}
        onSaved={bumpList}
      />
    </Card>
  );
}
