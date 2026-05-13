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
  Select,
  Space,
  Table,
  Typography,
  PaginationProps,
} from '@arco-design/web-react';
import PermissionWrapper from '@/components/PermissionWrapper';
import { IconPlus } from '@arco-design/web-react/icon';
import { useSelector } from 'react-redux';
import authentication from '@/utils/authentication';
import useLocale from '@/utils/useLocale';
import type { DefaultTenant } from '@/api/user';
import type { GlobalState } from '@/store';
import {
  AppRecord,
  createApp,
  deleteApp,
  fetchAppPage,
  fetchTenantOptionsForPlatform,
  TenantOption,
  updateApp,
  updateAppActiveStatus,
} from '@/api/app';
import SearchForm from './form';
import type { AppSearchValues } from './form';
import ArcoSelectInputIds, {
  arcoSelectPrimaryInputId,
} from '../tenants/ArcoSelectInputIds';
import { useArcoPaginationFieldIds } from '../tenants/useArcoPaginationFieldIds';
import locale from './locale';
import styles from '../tenants/style/index.module.less';
import { getColumns } from './constants';
import {
  activeStatusLabel,
  dataStatusLabel,
  formatEpochMs,
  osTypeLabel,
} from './utils';

const { Title } = Typography;

const MODAL_CREATE_TENANT_BASE = 'app-modal-create-tenantId';
const MODAL_CREATE_TENANT_LABEL_ID = `${MODAL_CREATE_TENANT_BASE}-field-label`;
const MODAL_CREATE_OS_BASE = 'app-modal-create-osType';
const MODAL_CREATE_OS_LABEL_ID = `${MODAL_CREATE_OS_BASE}-field-label`;
const MODAL_EDIT_TENANT_BASE = 'app-modal-edit-tenantId';
const MODAL_EDIT_TENANT_LABEL_ID = `${MODAL_EDIT_TENANT_BASE}-field-label`;
const MODAL_EDIT_OS_BASE = 'app-modal-edit-osType';
const MODAL_EDIT_OS_LABEL_ID = `${MODAL_EDIT_OS_BASE}-field-label`;

function toListParams(
  formParams: AppSearchValues,
  current: number,
  pageSize: number,
  showTenantFilter: boolean
) {
  return {
    page: current,
    pageSize,
    tenantId:
      showTenantFilter && formParams.tenantId != null && formParams.tenantId > 0
        ? formParams.tenantId
        : undefined,
    appCode: formParams.appCode?.trim() || undefined,
    pkgName: formParams.pkgName?.trim() || undefined,
    osType: formParams.osType?.trim() || undefined,
    activeStatus:
      formParams.activeStatus === 0 || formParams.activeStatus == null
        ? undefined
        : formParams.activeStatus,
    status:
      formParams.status === 0 || formParams.status == null
        ? undefined
        : formParams.status,
  };
}

function isPlatformTenant(defaultTenant: unknown): boolean {
  const t = (defaultTenant as DefaultTenant | undefined)?.tenantType;
  return (t || '').toUpperCase() === 'PLATFORM';
}

export default function AppManagePage() {
  const t = useLocale(locale);
  const userInfo = useSelector((state: GlobalState) => state.userInfo);
  const isPlatform = useMemo(
    () => isPlatformTenant(userInfo?.defaultTenant),
    [userInfo?.defaultTenant]
  );
  const showTenantFilter = useMemo(
    () =>
      isPlatform &&
      authentication(
        { requiredPermissions: [{ resource: 'system:tenant:access' }] },
        userInfo?.permissions || {}
      ),
    [isPlatform, userInfo?.permissions]
  );
  const canPlatformCreateApp = !isPlatform || showTenantFilter;

  const [createForm] = Form.useForm();
  const [editForm] = Form.useForm();

  const [data, setData] = useState<AppRecord[]>([]);
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
  const [formParams, setFormParams] = useState<AppSearchValues>({});
  const [listTick, setListTick] = useState(0);

  const [tenantOptions, setTenantOptions] = useState<TenantOption[]>([]);
  const [createVisible, setCreateVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [viewRecord, setViewRecord] = useState<AppRecord | null>(null);
  const editSourceRef = useRef<AppRecord | null>(null);

  const tableBlockRef = useRef<HTMLDivElement>(null);
  useArcoPaginationFieldIds(
    tableBlockRef,
    'app-list-pagination',
    listCurrent,
    listPageSize,
    listTotal,
    loading
  );

  useEffect(() => {
    if (!showTenantFilter) {
      setTenantOptions([]);
      return;
    }
    let canceled = false;
    void fetchTenantOptionsForPlatform()
      .then((list) => {
        if (!canceled) {
          setTenantOptions(list || []);
        }
      })
      .catch(() => {
        if (!canceled) {
          setTenantOptions([]);
        }
      });
    return () => {
      canceled = true;
    };
  }, [showTenantFilter]);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    void fetchAppPage(
      toListParams(formParams, listCurrent, listPageSize, showTenantFilter)
    )
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
  }, [listCurrent, listPageSize, formParams, listTick, showTenantFilter]);

  const bumpList = useCallback(() => setListTick((x) => x + 1), []);

  const handleSearch = (params: AppSearchValues) => {
    setListCurrent(1);
    setFormParams(params);
  };

  const onChangeTable = (pag: PaginationProps) => {
    setListCurrent((c) => pag.current ?? c);
    setListPageSize((s) => (pag.pageSize != null ? Number(pag.pageSize) : s));
  };

  const tableCallback = useMemo(
    () => ({
      onView: (record: AppRecord) => setViewRecord(record),
      onEdit: (record: AppRecord) => {
        editSourceRef.current = record;
        editForm.setFieldsValue({
          id: record.id,
          tenantId: record.tenantId,
          appCode: record.appCode,
          pkgName: record.pkgName,
          osType: record.osType,
          sendApiKey: record.apiKey,
          partnerId: record.partnerId,
          partnerSecret: record.partnerSecret,
        });
        setEditVisible(true);
      },
      onDelete: (record: AppRecord) => {
        Modal.confirm({
          title: t['appSearch.confirm.deleteTitle'],
          content: t['appSearch.confirm.deleteContent'],
          onOk: async () => {
            await deleteApp(record.id);
            Message.success(t['appSearch.msg.deleteOk']);
            bumpList();
          },
        });
      },
      onEnable: (record: AppRecord) => {
        Modal.confirm({
          title: t['appSearch.confirm.enableTitle'],
          content: t['appSearch.confirm.enableContent'],
          onOk: async () => {
            await updateAppActiveStatus({ id: record.id, activeStatus: 1 });
            Message.success(t['appSearch.msg.activeStatusOk']);
            bumpList();
          },
        });
      },
      onDisable: (record: AppRecord) => {
        Modal.confirm({
          title: t['appSearch.confirm.disableTitle'],
          content: t['appSearch.confirm.disableContent'],
          onOk: async () => {
            await updateAppActiveStatus({ id: record.id, activeStatus: 2 });
            Message.success(t['appSearch.msg.activeStatusOk']);
            bumpList();
          },
        });
      },
    }),
    [editForm, t, bumpList]
  );

  const columns = useMemo(
    () => getColumns(t, tableCallback),
    [t, tableCallback]
  );

  const tenantSelectOptions = useMemo(
    () =>
      tenantOptions.map((x) => ({
        label: `${x.tenantName} (${x.tenantCode})`,
        value: x.id,
      })),
    [tenantOptions]
  );

  const submitCreate = async () => {
    if (isPlatform && !showTenantFilter) {
      return;
    }
    try {
      const v = await createForm.validate();
      await createApp({
        tenantId: showTenantFilter ? v.tenantId : undefined,
        appCode: v.appCode.trim(),
        pkgName: v.pkgName.trim(),
        osType: v.osType,
        sendApiKey: v.sendApiKey?.trim() || undefined,
        partnerId: v.partnerId?.trim() || undefined,
        partnerSecret: v.partnerSecret || undefined,
      });
      Message.success(t['appSearch.msg.createOk']);
      setCreateVisible(false);
      bumpList();
    } catch {
      /* validate */
    }
  };

  const submitEdit = async () => {
    try {
      const v = await editForm.validate();
      const tenantIdForSubmit = showTenantFilter
        ? v.tenantId
        : isPlatform
        ? editSourceRef.current?.tenantId
        : undefined;
      await updateApp({
        id: v.id,
        tenantId: tenantIdForSubmit,
        appCode: v.appCode.trim(),
        pkgName: v.pkgName.trim(),
        osType: v.osType,
        activeStatus: editSourceRef.current?.activeStatus ?? 1,
        sendApiKey: v.sendApiKey?.trim() || undefined,
        partnerId: v.partnerId?.trim() || undefined,
        partnerSecret: v.partnerSecret || undefined,
      });
      Message.success(t['appSearch.msg.saveOk']);
      setEditVisible(false);
      bumpList();
    } catch {
      /* validate */
    }
  };

  return (
    <Card>
      <Title heading={6}>{t['appSearch.title']}</Title>
      <SearchForm
        onSearch={handleSearch}
        showTenantFilter={showTenantFilter}
        tenantOptions={tenantOptions}
      />
      <PermissionWrapper
        requiredPermissions={[{ resource: 'system:app:access' }]}
      >
        <div className={styles['button-group']}>
          <Space>
            <Button
              type="primary"
              icon={<IconPlus />}
              disabled={!canPlatformCreateApp}
              onClick={() => {
                if (!canPlatformCreateApp) {
                  return;
                }
                createForm.resetFields();
                createForm.setFieldsValue({
                  osType: 'android',
                });
                setCreateVisible(true);
              }}
            >
              {t['appSearch.operations.add']}
            </Button>
          </Space>
        </div>
      </PermissionWrapper>
      <div ref={tableBlockRef}>
        <Table
          rowKey="id"
          loading={loading}
          columns={columns}
          data={data}
          pagination={pagination}
          onChange={onChangeTable}
          scroll={{ x: 1220 }}
        />
      </div>

      <Modal
        title={t['appSearch.modal.createTitle']}
        visible={createVisible}
        onOk={submitCreate}
        onCancel={() => setCreateVisible(false)}
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
          {showTenantFilter ? (
            <div className={styles.formLikeField}>
              <label
                id={MODAL_CREATE_TENANT_LABEL_ID}
                className={styles.formLikeFieldLabel}
                htmlFor={arcoSelectPrimaryInputId(MODAL_CREATE_TENANT_BASE)}
              >
                {t['appSearch.columns.tenant']}
              </label>
              <div className={styles.formLikeFieldControl}>
                <Form.Item
                  field="tenantId"
                  rules={[
                    {
                      required: true,
                      message: t['appSearch.validation.required'],
                    },
                  ]}
                  noStyle
                >
                  <ArcoSelectInputIds
                    baseId={MODAL_CREATE_TENANT_BASE}
                    ariaLabelledBy={MODAL_CREATE_TENANT_LABEL_ID}
                  >
                    <Select
                      placeholder={t['appSearch.form.tenant.placeholder']}
                      options={tenantSelectOptions}
                    />
                  </ArcoSelectInputIds>
                </Form.Item>
              </div>
            </div>
          ) : null}
          <Form.Item
            label={t['appSearch.columns.appCode']}
            field="appCode"
            rules={[
              {
                required: true,
                message: t['appSearch.validation.required'],
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t['appSearch.columns.pkgName']}
            field="pkgName"
            rules={[
              {
                required: true,
                message: t['appSearch.validation.required'],
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div className={styles.formLikeField}>
            <label
              id={MODAL_CREATE_OS_LABEL_ID}
              className={styles.formLikeFieldLabel}
              htmlFor={arcoSelectPrimaryInputId(MODAL_CREATE_OS_BASE)}
            >
              {t['appSearch.columns.osType']}
            </label>
            <div className={styles.formLikeFieldControl}>
              <Form.Item
                field="osType"
                rules={[
                  {
                    required: true,
                    message: t['appSearch.validation.required'],
                  },
                ]}
                noStyle
              >
                <ArcoSelectInputIds
                  baseId={MODAL_CREATE_OS_BASE}
                  ariaLabelledBy={MODAL_CREATE_OS_LABEL_ID}
                >
                  <Select
                    options={[
                      { label: t['appSearch.os.android'], value: 'android' },
                      { label: t['appSearch.os.ios'], value: 'ios' },
                    ]}
                  />
                </ArcoSelectInputIds>
              </Form.Item>
            </div>
          </div>
          <Form.Item label={t['appSearch.field.sendApiKey']} field="sendApiKey">
            <Input.Password autoComplete="new-password" />
          </Form.Item>
          <Form.Item label={t['appSearch.field.partnerId']} field="partnerId">
            <Input />
          </Form.Item>
          <Form.Item
            label={t['appSearch.field.partnerSecret']}
            field="partnerSecret"
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={t['appSearch.modal.editTitle']}
        visible={editVisible}
        onOk={submitEdit}
        onCancel={() => setEditVisible(false)}
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
          {showTenantFilter ? (
            <div className={styles.formLikeField}>
              <label
                id={MODAL_EDIT_TENANT_LABEL_ID}
                className={styles.formLikeFieldLabel}
                htmlFor={arcoSelectPrimaryInputId(MODAL_EDIT_TENANT_BASE)}
              >
                {t['appSearch.columns.tenant']}
              </label>
              <div className={styles.formLikeFieldControl}>
                <Form.Item
                  field="tenantId"
                  rules={[
                    {
                      required: true,
                      message: t['appSearch.validation.required'],
                    },
                  ]}
                  noStyle
                >
                  <ArcoSelectInputIds
                    baseId={MODAL_EDIT_TENANT_BASE}
                    ariaLabelledBy={MODAL_EDIT_TENANT_LABEL_ID}
                  >
                    <Select options={tenantSelectOptions} />
                  </ArcoSelectInputIds>
                </Form.Item>
              </div>
            </div>
          ) : null}
          <Form.Item
            label={t['appSearch.columns.appCode']}
            field="appCode"
            rules={[
              {
                required: true,
                message: t['appSearch.validation.required'],
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t['appSearch.columns.pkgName']}
            field="pkgName"
            rules={[
              {
                required: true,
                message: t['appSearch.validation.required'],
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div className={styles.formLikeField}>
            <label
              id={MODAL_EDIT_OS_LABEL_ID}
              className={styles.formLikeFieldLabel}
              htmlFor={arcoSelectPrimaryInputId(MODAL_EDIT_OS_BASE)}
            >
              {t['appSearch.columns.osType']}
            </label>
            <div className={styles.formLikeFieldControl}>
              <Form.Item
                field="osType"
                rules={[
                  {
                    required: true,
                    message: t['appSearch.validation.required'],
                  },
                ]}
                noStyle
              >
                <ArcoSelectInputIds
                  baseId={MODAL_EDIT_OS_BASE}
                  ariaLabelledBy={MODAL_EDIT_OS_LABEL_ID}
                >
                  <Select
                    options={[
                      { label: t['appSearch.os.android'], value: 'android' },
                      { label: t['appSearch.os.ios'], value: 'ios' },
                    ]}
                  />
                </ArcoSelectInputIds>
              </Form.Item>
            </div>
          </div>
          <Form.Item label={t['appSearch.field.sendApiKey']} field="sendApiKey">
            <Input.Password autoComplete="new-password" />
          </Form.Item>
          <Form.Item label={t['appSearch.field.partnerId']} field="partnerId">
            <Input />
          </Form.Item>
          <Form.Item
            label={t['appSearch.field.partnerSecret']}
            field="partnerSecret"
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={t['appSearch.modal.viewTitle']}
        visible={!!viewRecord}
        footer={null}
        onCancel={() => setViewRecord(null)}
        unmountOnExit
        className={styles['tenant-view-modal']}
        style={{ width: 640 }}
      >
        {viewRecord ? (
          <Descriptions
            column={1}
            className={styles['tenant-view-descriptions']}
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
                label: t['appSearch.view.tenantName'],
                value: viewRecord.tenantName || '—',
              },
              {
                label: t['appSearch.columns.appCode'],
                value: viewRecord.appCode ? (
                  <Typography.Text copyable>
                    {viewRecord.appCode}
                  </Typography.Text>
                ) : (
                  '—'
                ),
              },
              {
                label: t['appSearch.columns.pkgName'],
                value: viewRecord.pkgName ? (
                  <Typography.Text copyable>
                    {viewRecord.pkgName}
                  </Typography.Text>
                ) : (
                  '—'
                ),
              },
              {
                label: t['appSearch.columns.osType'],
                value: osTypeLabel(t, viewRecord.osType),
              },
              {
                label: t['appSearch.field.partnerId'],
                value: viewRecord.partnerId ? (
                  <Typography.Text copyable>
                    {viewRecord.partnerId}
                  </Typography.Text>
                ) : (
                  '—'
                ),
              },
              {
                label: t['appSearch.field.partnerSecret'],
                value: viewRecord.partnerSecret ? (
                  <Typography.Text copyable>
                    {viewRecord.partnerSecret}
                  </Typography.Text>
                ) : (
                  '—'
                ),
              },
              {
                label: t['appSearch.field.sendApiKey'],
                value: viewRecord.apiKey ? (
                  <Typography.Text copyable>
                    {viewRecord.apiKey}
                  </Typography.Text>
                ) : (
                  '—'
                ),
              },
              {
                label: t['appSearch.columns.activeStatus'],
                value: activeStatusLabel(t, viewRecord.activeStatus),
              },
              {
                label: t['appSearch.columns.status'],
                value: dataStatusLabel(t, viewRecord.status),
              },
              {
                label: t['appSearch.columns.operator'],
                value: viewRecord.operatorUsername || '—',
              },
              {
                label: t['appSearch.view.createdAt'],
                value: formatEpochMs(viewRecord.createdAt),
              },
              {
                label: t['appSearch.columns.updatedAt'],
                value: formatEpochMs(viewRecord.updatedAt),
              },
            ]}
          />
        ) : null}
      </Modal>
    </Card>
  );
}
