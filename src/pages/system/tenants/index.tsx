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
  Typography,
  PaginationProps,
} from '@arco-design/web-react';
import PermissionWrapper from '@/components/PermissionWrapper';
import { IconPlus, IconRefresh } from '@arco-design/web-react/icon';
import useLocale from '@/utils/useLocale';
import {
  createTenant,
  deleteTenant,
  fetchTenantPage,
  TenantRecord,
  updateTenant,
  updateTenantActiveStatus,
} from '@/api/tenant';
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
    [editForm, t, bumpList]
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
                  activeStatus: 1,
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
              activeStatus: v.activeStatus ?? 1,
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
          <Form.Item
            label={t['tenantSearch.columns.enableStatus']}
            field="activeStatus"
            initialValue={1}
          >
            <Radio.Group>
              <Radio value={1}>{t['tenantSearch.activeStatus.enabled']}</Radio>
              <Radio value={2}>{t['tenantSearch.activeStatus.disabled']}</Radio>
              <Radio value={3}>{t['tenantSearch.activeStatus.expired']}</Radio>
            </Radio.Group>
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
