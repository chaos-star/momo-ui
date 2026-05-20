import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Button,
  Card,
  Descriptions,
  Form,
  Input,
  Message,
  Modal,
  Radio,
  Select,
  Space,
  Table,
  Badge,
  Typography,
  PaginationProps,
  Alert,
} from '@arco-design/web-react';
import PermissionWrapper from '@/components/PermissionWrapper';
import {
  IconDelete,
  IconEdit,
  IconLock,
  IconPlus,
  IconRefresh,
  IconSearch,
  IconUnlock,
} from '@arco-design/web-react/icon';
import useLocale from '@/utils/useLocale';
import {
  createTenant,
  createTenantPermissionPackage,
  deleteTenant,
  deleteTenantPermissionPackage,
  fetchTenantPage,
  fetchTenantPermissionPackagePage,
  TenantPermissionPackageRecord,
  updateTenant,
  updateTenantActiveStatus,
  updateTenantPermissionPackage,
  updateTenantPermissionPackageActiveStatus,
  TenantRecord,
} from '@/api/tenant';
import {
  fetchPermissionBoundaryPackageOptions,
  PermissionBoundaryPackageRecord,
} from '@/api/permission-boundary-package';
import SearchForm from './form';
import type { TenantSearchValues } from './form';
import ArcoSelectInputIds, {
  arcoSelectPrimaryInputId,
} from './ArcoSelectInputIds';
import { useArcoPaginationFieldIds } from './useArcoPaginationFieldIds';
import locale from './locale';
import styles from './style/index.module.less';
import { getColumns } from './constants';
import {
  parseEncryptionKey,
  tenantTypeToBusinessType,
  businessTypeLabel,
  activeStatusLabel,
  dataStatusLabel,
  formatEpochMs,
} from './utils';

const { Title } = Typography;

const TIMEZONES = [
  'Asia/Shanghai',
  'Asia/Hong_Kong',
  'Asia/Singapore',
  'Asia/Tokyo',
  'UTC',
  'Europe/London',
  'Europe/Berlin',
  'America/New_York',
  'America/Los_Angeles',
];

const MODAL_CREATE_ZONE_BASE = 'tenant-modal-create-tenantZone';
const MODAL_CREATE_ZONE_LABEL_ID = `${MODAL_CREATE_ZONE_BASE}-field-label`;
const MODAL_EDIT_ZONE_BASE = 'tenant-modal-edit-tenantZone';
const MODAL_EDIT_ZONE_LABEL_ID = `${MODAL_EDIT_ZONE_BASE}-field-label`;

function toListParams(
  formParams: TenantSearchValues,
  current: number,
  pageSize: number
) {
  return {
    page: current,
    pageSize,
    tenantName: formParams.tenantName?.trim() || undefined,
    tenantCode: formParams.tenantCode?.trim() || undefined,
    businessType:
      formParams.businessType === 0 || formParams.businessType == null
        ? undefined
        : formParams.businessType,
    status:
      formParams.status === 0 || formParams.status == null
        ? undefined
        : formParams.status,
  };
}

function toBoundaryListParams(
  tenantId: number,
  params: { id?: string; permissionName?: string },
  current: number,
  pageSize: number
) {
  const idText = params.id?.trim();
  return {
    tenantId,
    page: current,
    pageSize,
    id: idText && /^\d+$/.test(idText) ? Number(idText) : undefined,
    permissionName: params.permissionName?.trim() || undefined,
  };
}

export default function TenantManagePage() {
  const t = useLocale(locale);
  const [createForm] = Form.useForm();
  const [editForm] = Form.useForm();

  const [data, setData] = useState<TenantRecord[]>([]);
  const [listCurrent, setListCurrent] = useState(1);
  const [listPageSize, setListPageSize] = useState(10);
  const [listTotal, setListTotal] = useState(0);
  const pagination = useMemo<PaginationProps>(
    () => ({
      sizeCanChange: true,
      showTotal: true,
      pageSize: listPageSize,
      current: listCurrent,
      total: listTotal,
      pageSizeChangeResetCurrent: true,
      showJumper: true,
      pageSizeOptions: [10, 20, 50, 100],
    }),
    [listCurrent, listPageSize, listTotal]
  );
  const [loading, setLoading] = useState(true);
  const [formParams, setFormParams] = useState<TenantSearchValues>({});
  const [listTick, setListTick] = useState(0);

  const [createVisible, setCreateVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [viewRecord, setViewRecord] = useState<TenantRecord | null>(null);
  const [editInitialSecret, setEditInitialSecret] = useState('');
  const [editTenantCode, setEditTenantCode] = useState('');
  const [boundaryVisible, setBoundaryVisible] = useState(false);
  const [boundaryRecord, setBoundaryRecord] = useState<TenantRecord | null>(
    null
  );
  const [boundaryLoading, setBoundaryLoading] = useState(false);
  const [boundaryData, setBoundaryData] = useState<
    TenantPermissionPackageRecord[]
  >([]);
  const [boundaryCurrent, setBoundaryCurrent] = useState(1);
  const [boundaryPageSize, setBoundaryPageSize] = useState(10);
  const [boundaryTotal, setBoundaryTotal] = useState(0);
  const [boundaryFormParams, setBoundaryFormParams] = useState<{
    id?: string;
    permissionName?: string;
  }>({});
  const [boundaryTick, setBoundaryTick] = useState(0);
  const [boundaryManageVisible, setBoundaryManageVisible] = useState(false);
  const [boundaryEditing, setBoundaryEditing] =
    useState<TenantPermissionPackageRecord | null>(null);
  const [boundaryManageForm] = Form.useForm();
  const [boundarySearchForm] = Form.useForm();
  const [boundaryPackageOptions, setBoundaryPackageOptions] = useState<
    { value: number; label: string }[]
  >([]);

  const tableBlockRef = useRef<HTMLDivElement>(null);
  useArcoPaginationFieldIds(
    tableBlockRef,
    'tenant-list-pagination',
    listCurrent,
    listPageSize,
    listTotal,
    loading
  );

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    void fetchTenantPage(toListParams(formParams, listCurrent, listPageSize))
      .then((res) => {
        if (canceled) {
          return;
        }
        setData(res.list || []);
        setListTotal(res.total ?? 0);
      })
      .finally(() => {
        if (!canceled) {
          setLoading(false);
        }
      });
    return () => {
      canceled = true;
    };
  }, [listCurrent, listPageSize, formParams, listTick]);

  const bumpList = useCallback(() => setListTick((x) => x + 1), []);

  const openBoundary = useCallback(
    async (record: TenantRecord) => {
      setBoundaryRecord(record);
      setBoundaryVisible(true);
      setBoundaryCurrent(1);
      setBoundaryFormParams({});
      boundarySearchForm.resetFields();
      setBoundaryLoading(true);
      try {
        const packages = await fetchPermissionBoundaryPackageOptions();
        setBoundaryPackageOptions(
          (packages || []).map((item: PermissionBoundaryPackageRecord) => ({
            value: item.id,
            label: `${item.packageName || item.packageCode} (${
              item.packageCode
            })`,
          }))
        );
      } finally {
        setBoundaryLoading(false);
      }
    },
    [boundarySearchForm]
  );

  useEffect(() => {
    if (!boundaryVisible || !boundaryRecord) {
      return undefined;
    }
    let canceled = false;
    setBoundaryLoading(true);
    void fetchTenantPermissionPackagePage(
      toBoundaryListParams(
        boundaryRecord.id,
        boundaryFormParams,
        boundaryCurrent,
        boundaryPageSize
      )
    )
      .then((res) => {
        if (canceled) {
          return;
        }
        setBoundaryData(res.list || []);
        setBoundaryTotal(res.total ?? 0);
      })
      .finally(() => {
        if (!canceled) {
          setBoundaryLoading(false);
        }
      });
    return () => {
      canceled = true;
    };
  }, [
    boundaryVisible,
    boundaryRecord,
    boundaryFormParams,
    boundaryCurrent,
    boundaryPageSize,
    boundaryTick,
  ]);

  const boundaryPagination = useMemo<PaginationProps>(
    () => ({
      sizeCanChange: true,
      showTotal: true,
      current: boundaryCurrent,
      pageSize: boundaryPageSize,
      total: boundaryTotal,
      pageSizeChangeResetCurrent: true,
      showJumper: true,
      pageSizeOptions: [10, 20, 50, 100],
    }),
    [boundaryCurrent, boundaryPageSize, boundaryTotal]
  );

  const boundaryColumns = useMemo(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
        width: 90,
      },
      {
        title: '权限名称',
        dataIndex: 'permissionName',
        width: 200,
        render: (value: string, record: TenantPermissionPackageRecord) =>
          value || record.permissionCode || '—',
      },
      {
        title: '状态',
        dataIndex: 'activeStatus',
        width: 110,
        render: (value: number) => (
          <Badge
            status={value === 1 ? 'success' : 'default'}
            text={value === 1 ? '启动' : '停用'}
          />
        ),
      },
      {
        title: '最后操作人',
        dataIndex: 'operatorUsername',
        width: 130,
        render: (value: string) => value?.trim() || '—',
      },
      {
        title: '更新时间',
        dataIndex: 'updatedAt',
        width: 168,
        render: (value: number) => formatEpochMs(value),
      },
      {
        title: '操作',
        dataIndex: 'operations',
        width: 250,
        fixed: 'right' as const,
        render: (_: unknown, record: TenantPermissionPackageRecord) => (
          <Space className={styles.operations} size={10} wrap>
            <Button
              type="text"
              size="small"
              icon={<IconEdit />}
              onClick={() => {
                setBoundaryEditing(record);
                boundaryManageForm.setFieldsValue({
                  packageId: record.packageId,
                });
                setBoundaryManageVisible(true);
              }}
            >
              编辑
            </Button>
            {record.activeStatus === 1 ? (
              <Button
                type="text"
                size="small"
                icon={<IconLock />}
                onClick={async () => {
                  await updateTenantPermissionPackageActiveStatus({
                    id: record.id,
                    activeStatus: 2,
                  });
                  Message.success('停用成功');
                  setBoundaryTick((x) => x + 1);
                }}
              >
                停用
              </Button>
            ) : (
              <Button
                type="text"
                size="small"
                icon={<IconUnlock />}
                onClick={async () => {
                  await updateTenantPermissionPackageActiveStatus({
                    id: record.id,
                    activeStatus: 1,
                  });
                  Message.success('启动成功');
                  setBoundaryTick((x) => x + 1);
                }}
              >
                启动
              </Button>
            )}
            <Button
              type="text"
              size="small"
              icon={<IconDelete />}
              status="danger"
              onClick={() => {
                Modal.confirm({
                  title: '确认删除',
                  content: '删除后该租户将不再关联此权限边界，是否继续？',
                  onOk: async () => {
                    await deleteTenantPermissionPackage(record.id);
                    Message.success('删除成功');
                    setBoundaryTick((x) => x + 1);
                  },
                });
              }}
            >
              删除
            </Button>
          </Space>
        ),
      },
    ],
    [boundaryManageForm]
  );
  const handleSearch = (params: TenantSearchValues) => {
    setListCurrent(1);
    setFormParams(params);
  };

  const onChangeTable = (pag: PaginationProps) => {
    setListCurrent((c) => pag.current ?? c);
    setListPageSize((s) => (pag.pageSize != null ? Number(pag.pageSize) : s));
  };

  const tableCallback = useMemo(
    () => ({
      onView: (record: TenantRecord) => setViewRecord(record),
      onEdit: (record: TenantRecord) => {
        const sec = parseEncryptionKey(record.config);
        setEditInitialSecret(sec);
        setEditTenantCode(record.tenantCode);
        editForm.setFieldsValue({
          id: record.id,
          tenantName: record.tenantName,
          businessType: tenantTypeToBusinessType(record.tenantType),
          tenantZone: record.tenantZone,
          eventSecret: sec,
        });
        setEditVisible(true);
      },
      onBoundary: openBoundary,
      onDelete: (record: TenantRecord) => {
        Modal.confirm({
          title: t['tenantSearch.confirm.deleteTitle'],
          content: t['tenantSearch.confirm.deleteContent'],
          onOk: async () => {
            await deleteTenant(record.id);
            Message.success(t['tenantSearch.msg.deleteOk']);
            bumpList();
          },
        });
      },
      onEnable: (record: TenantRecord) => {
        Modal.confirm({
          title: t['tenantSearch.confirm.enableTitle'],
          content: t['tenantSearch.confirm.enableContent'],
          onOk: async () => {
            await updateTenantActiveStatus({ id: record.id, activeStatus: 1 });
            Message.success(t['tenantSearch.msg.activeStatusOk']);
            bumpList();
          },
        });
      },
      onDisable: (record: TenantRecord) => {
        Modal.confirm({
          title: t['tenantSearch.confirm.disableTitle'],
          content: t['tenantSearch.confirm.disableContent'],
          onOk: async () => {
            await updateTenantActiveStatus({ id: record.id, activeStatus: 2 });
            Message.success(t['tenantSearch.msg.activeStatusOk']);
            bumpList();
          },
        });
      },
    }),
    [editForm, t, bumpList, openBoundary]
  );

  const columns = useMemo(
    () => getColumns(t, tableCallback),
    [t, tableCallback]
  );

  const viewSecret = viewRecord ? parseEncryptionKey(viewRecord.config) : '';

  return (
    <Card>
      <Title heading={6}>{t['tenantSearch.title']}</Title>
      <SearchForm onSearch={handleSearch} />
      <PermissionWrapper
        requiredPermissions={[{ resource: 'system:tenant:access' }]}
      >
        <div className={styles['button-group']}>
          <Space>
            <Button
              type="primary"
              icon={<IconPlus />}
              onClick={() => {
                createForm.resetFields();
                createForm.setFieldsValue({
                  businessType: 2,
                  tenantZone: 'Asia/Shanghai',
                });
                setCreateVisible(true);
              }}
            >
              {t['tenantSearch.operations.add']}
            </Button>
          </Space>
          <Button icon={<IconRefresh />} onClick={() => bumpList()}>
            {t['tenantSearch.refresh']}
          </Button>
        </div>
      </PermissionWrapper>

      <div ref={tableBlockRef}>
        <Table
          rowKey="id"
          loading={loading}
          onChange={onChangeTable}
          pagination={pagination}
          columns={columns}
          data={data}
          border
          scroll={{ x: 1598 }}
        />
      </div>

      <Modal
        title={t['tenantSearch.modal.createTitle']}
        visible={createVisible}
        onCancel={() => setCreateVisible(false)}
        onOk={async () => {
          try {
            const v = await createForm.validate();
            await createTenant({
              tenantName: v.tenantName.trim(),
              tenantCode: v.tenantCode.trim().toLowerCase(),
              businessType: v.businessType,
              tenantZone: v.tenantZone,
              eventSecret: v.eventSecret?.trim() || undefined,
              expireAt: v.expireAt ?? 0,
            });
            Message.success(t['tenantSearch.msg.createOk']);
            setCreateVisible(false);
            bumpList();
          } catch {
            /* validate or request */
          }
        }}
        unmountOnExit
        style={{ width: 560 }}
      >
        <Form
          form={createForm}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          className={styles['search-form']}
        >
          <Form.Item
            label={t['tenantSearch.columns.tenantName']}
            field="tenantName"
            rules={[
              {
                required: true,
                message: t['tenantSearch.validation.required'],
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t['tenantSearch.columns.tenantCode']}
            field="tenantCode"
            rules={[
              {
                required: true,
                message: t['tenantSearch.validation.required'],
              },
              {
                match: /^[a-z0-9][a-z0-9_-]{1,62}$/,
                message: t['tenantSearch.validation.tenantCode'],
              },
            ]}
          >
            <Input placeholder="demo2" />
          </Form.Item>
          <Form.Item
            label={t['tenantSearch.columns.businessType']}
            field="businessType"
            rules={[
              {
                required: true,
                message: t['tenantSearch.validation.required'],
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>{t['tenantSearch.businessType.system']}</Radio>
              <Radio value={2}>{t['tenantSearch.businessType.ops']}</Radio>
            </Radio.Group>
          </Form.Item>
          <div className={styles.formLikeField}>
            <label
              id={MODAL_CREATE_ZONE_LABEL_ID}
              className={styles.formLikeFieldLabel}
              htmlFor={arcoSelectPrimaryInputId(MODAL_CREATE_ZONE_BASE)}
            >
              {t['tenantSearch.columns.tenantZone']}
            </label>
            <div className={styles.formLikeFieldControl}>
              <Form.Item
                field="tenantZone"
                rules={[
                  {
                    required: true,
                    message: t['tenantSearch.validation.required'],
                  },
                ]}
                noStyle
              >
                <ArcoSelectInputIds
                  baseId={MODAL_CREATE_ZONE_BASE}
                  ariaLabelledBy={MODAL_CREATE_ZONE_LABEL_ID}
                >
                  <Select allowCreate placeholder="IANA">
                    {TIMEZONES.map((z) => (
                      <Select.Option key={z} value={z}>
                        {z}
                      </Select.Option>
                    ))}
                  </Select>
                </ArcoSelectInputIds>
              </Form.Item>
            </div>
          </div>
          <Form.Item
            label="encryption_key"
            field="eventSecret"
            rules={[
              {
                validator: (v, cb) => {
                  if (!v || !String(v).trim()) {
                    return cb();
                  }
                  if (String(v).trim().length !== 16) {
                    return cb(t['tenantSearch.validation.encryptionLen']);
                  }
                  return cb();
                },
              },
            ]}
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={t['tenantSearch.modal.editTitle']}
        visible={editVisible}
        onCancel={() => {
          setEditVisible(false);
          setEditInitialSecret('');
          setEditTenantCode('');
        }}
        onOk={async () => {
          try {
            const v = await editForm.validate();
            const nextSecret =
              v.eventSecret != null ? String(v.eventSecret).trim() : '';
            const payload: Parameters<typeof updateTenant>[0] = {
              id: v.id,
              tenantName: v.tenantName?.trim(),
              businessType: v.businessType,
              tenantZone: v.tenantZone,
            };
            if (nextSecret !== (editInitialSecret || '').trim()) {
              payload.eventSecret = nextSecret;
            }
            await updateTenant(payload);
            Message.success(t['tenantSearch.msg.saveOk']);
            setEditVisible(false);
            setEditInitialSecret('');
            setEditTenantCode('');
            bumpList();
          } catch {
            /* */
          }
        }}
        unmountOnExit
        style={{ width: 560 }}
      >
        <Form
          form={editForm}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          className={styles['search-form']}
        >
          <Form.Item field="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item label={t['tenantSearch.columns.tenantCode']}>
            <Typography.Text type="secondary">{editTenantCode}</Typography.Text>
          </Form.Item>
          <Form.Item
            label={t['tenantSearch.columns.tenantName']}
            field="tenantName"
            rules={[
              {
                required: true,
                message: t['tenantSearch.validation.required'],
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t['tenantSearch.columns.businessType']}
            field="businessType"
            rules={[
              {
                required: true,
                message: t['tenantSearch.validation.required'],
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>{t['tenantSearch.businessType.system']}</Radio>
              <Radio value={2}>{t['tenantSearch.businessType.ops']}</Radio>
            </Radio.Group>
          </Form.Item>
          <div className={styles.formLikeField}>
            <label
              id={MODAL_EDIT_ZONE_LABEL_ID}
              className={styles.formLikeFieldLabel}
              htmlFor={arcoSelectPrimaryInputId(MODAL_EDIT_ZONE_BASE)}
            >
              {t['tenantSearch.columns.tenantZone']}
            </label>
            <div className={styles.formLikeFieldControl}>
              <Form.Item
                field="tenantZone"
                rules={[
                  {
                    required: true,
                    message: t['tenantSearch.validation.required'],
                  },
                ]}
                noStyle
              >
                <ArcoSelectInputIds
                  baseId={MODAL_EDIT_ZONE_BASE}
                  ariaLabelledBy={MODAL_EDIT_ZONE_LABEL_ID}
                >
                  <Select allowCreate>
                    {TIMEZONES.map((z) => (
                      <Select.Option key={z} value={z}>
                        {z}
                      </Select.Option>
                    ))}
                  </Select>
                </ArcoSelectInputIds>
              </Form.Item>
            </div>
          </div>
          <Form.Item
            label="encryption_key"
            field="eventSecret"
            rules={[
              {
                validator: (v, cb) => {
                  if (v == null || !String(v).trim()) {
                    return cb();
                  }
                  if (String(v).trim().length !== 16) {
                    return cb(t['tenantSearch.validation.encryptionLen']);
                  }
                  return cb();
                },
              },
            ]}
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={`授权：${boundaryRecord?.tenantName || ''}`}
        visible={boundaryVisible}
        footer={null}
        onCancel={() => {
          setBoundaryVisible(false);
          setBoundaryRecord(null);
          setBoundaryData([]);
          setBoundaryFormParams({});
          setBoundaryCurrent(1);
          setBoundaryManageVisible(false);
          setBoundaryEditing(null);
          boundarySearchForm.resetFields();
        }}
        unmountOnExit
        style={{ width: 980 }}
      >
        {tenantTypeToBusinessType(boundaryRecord?.tenantType || '') === 1 ? (
          <Alert
            type="info"
            content="平台租户管理员天然拥有全部启用权限，无需配置租户权限边界；平台租户普通成员仍需通过角色、用户或部门角色授权获得权限。"
          />
        ) : (
          <Space direction="vertical" size={16} style={{ width: '100%' }}>
            <Alert
              type="warning"
              content="新增授权默认不启用；普通租户管理员自动拥有已启用边界内全部权限，普通成员不会超出该边界。"
            />
            <div className={styles['search-form-wrapper']}>
              <Form
                form={boundarySearchForm}
                className={styles['search-form']}
                labelAlign="left"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 19 }}
              >
                <div className={styles.boundarySearchGrid}>
                  <Form.Item label="ID" field="id">
                    <Input placeholder="精准查询" allowClear />
                  </Form.Item>
                  <Form.Item label="权限名称" field="permissionName">
                    <Input placeholder="模糊查询" allowClear />
                  </Form.Item>
                </div>
              </Form>
              <div className={styles['right-button']}>
                <Button
                  type="primary"
                  icon={<IconSearch />}
                  onClick={async () => {
                    const values = await boundarySearchForm.validate();
                    setBoundaryCurrent(1);
                    setBoundaryFormParams(values);
                  }}
                >
                  查询
                </Button>
                <Button
                  icon={<IconRefresh />}
                  onClick={() => {
                    boundarySearchForm.resetFields();
                    setBoundaryCurrent(1);
                    setBoundaryFormParams({});
                  }}
                >
                  重置
                </Button>
              </div>
            </div>
            <div className={styles['button-group']}>
              <Space>
                <Button
                  type="primary"
                  icon={<IconPlus />}
                  onClick={() => {
                    setBoundaryEditing(null);
                    boundaryManageForm.resetFields();
                    setBoundaryManageVisible(true);
                  }}
                >
                  新增
                </Button>
              </Space>
              <Button
                icon={<IconRefresh />}
                onClick={() => setBoundaryTick((x) => x + 1)}
              >
                刷新
              </Button>
            </div>
            <Table
              rowKey="id"
              loading={boundaryLoading}
              data={boundaryData}
              columns={boundaryColumns}
              pagination={boundaryPagination}
              onChange={(pag) => {
                setBoundaryCurrent((c) => pag.current ?? c);
                setBoundaryPageSize((s) =>
                  pag.pageSize != null ? Number(pag.pageSize) : s
                );
              }}
              border
              scroll={{ x: 898 }}
            />
          </Space>
        )}
      </Modal>

      <Modal
        title={boundaryEditing ? '编辑授权' : '新增授权'}
        visible={boundaryManageVisible}
        onCancel={() => {
          setBoundaryManageVisible(false);
          setBoundaryEditing(null);
          boundaryManageForm.resetFields();
        }}
        onOk={async () => {
          if (!boundaryRecord) {
            return;
          }
          try {
            const values = await boundaryManageForm.validate();
            if (boundaryEditing) {
              await updateTenantPermissionPackage({
                id: boundaryEditing.id,
                tenantId: boundaryRecord.id,
                packageId: values.packageId,
              });
              Message.success('保存成功');
            } else {
              await createTenantPermissionPackage({
                tenantId: boundaryRecord.id,
                packageId: values.packageId,
              });
              Message.success('新增成功');
            }
            setBoundaryManageVisible(false);
            setBoundaryEditing(null);
            boundaryManageForm.resetFields();
            setBoundaryTick((x) => x + 1);
          } catch {
            /* validate or request */
          }
        }}
        unmountOnExit
        style={{ width: 560 }}
      >
        <Form
          form={boundaryManageForm}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          className={styles['search-form']}
        >
          {!boundaryEditing && (
            <Form.Item label="状态">
              <Badge status="default" text="停用" />
            </Form.Item>
          )}
          <div className={styles.formLikeField}>
            <label className={styles.formLikeFieldLabel}>权限边界</label>
            <div className={styles.formLikeFieldControl}>
              <Form.Item
                field="packageId"
                rules={[
                  {
                    required: true,
                    message: t['tenantSearch.validation.required'],
                  },
                ]}
                noStyle
              >
                <Select
                  placeholder="请选择权限边界"
                  showSearch
                  allowClear
                  options={boundaryPackageOptions}
                  filterOption={(inputValue, option) =>
                    String(option.extra?.label || '')
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  }
                />
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>

      <Modal
        title={t['tenantSearch.modal.viewTitle']}
        visible={!!viewRecord}
        footer={null}
        onCancel={() => setViewRecord(null)}
        unmountOnExit
        style={{ width: 560 }}
        className={styles['tenant-view-modal']}
      >
        {viewRecord ? (
          <Descriptions
            className={styles['tenant-view-descriptions']}
            column={1}
            layout="horizontal"
            colon=":"
            labelStyle={{
              textAlign: 'right',
              width: 152,
              minWidth: 152,
              paddingRight: 12,
              color: 'var(--color-text-2)',
              verticalAlign: 'top',
            }}
            valueStyle={{
              color: 'var(--color-text-1)',
              wordBreak: 'break-word',
              verticalAlign: 'top',
            }}
            data={[
              {
                label: t['tenantSearch.columns.tenantName'],
                value: viewRecord.tenantName,
              },
              {
                label: t['tenantSearch.columns.tenantCode'],
                value: (
                  <Typography.Text copyable>
                    {viewRecord.tenantCode}
                  </Typography.Text>
                ),
              },
              {
                label: t['tenantSearch.columns.businessType'],
                value: businessTypeLabel(
                  t,
                  tenantTypeToBusinessType(viewRecord.tenantType)
                ),
              },
              {
                label: t['tenantSearch.columns.tenantZone'],
                value: viewRecord.tenantZone,
              },
              {
                label: t['tenantSearch.columns.eventSecret'],
                value: (
                  <Typography.Text copyable={Boolean(viewSecret)}>
                    {viewSecret || '—'}
                  </Typography.Text>
                ),
              },
              {
                label: t['tenantSearch.columns.enableStatus'],
                value: activeStatusLabel(t, viewRecord.activeStatus),
              },
              {
                label: t['tenantSearch.columns.tenantStatus'],
                value: dataStatusLabel(t, viewRecord.status),
              },
              {
                label: t['tenantSearch.columns.lastOperator'],
                value: viewRecord.operatorUsername?.trim() || '—',
              },
              {
                label: t['tenantSearch.columns.createdAt'],
                value: formatEpochMs(viewRecord.createdAt),
              },
              {
                label: t['tenantSearch.columns.updatedAt'],
                value: formatEpochMs(viewRecord.updatedAt),
              },
            ]}
          />
        ) : null}
      </Modal>
    </Card>
  );
}
