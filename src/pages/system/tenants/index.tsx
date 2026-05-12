import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Button,
  Card,
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
import { IconCopy, IconPlus, IconRefresh } from '@arco-design/web-react/icon';
import copy from 'copy-to-clipboard';
import useLocale from '@/utils/useLocale';
import {
  createTenant,
  deleteTenant,
  fetchTenantPage,
  TenantRecord,
  updateTenant,
} from '@/api/tenant';
import SearchForm from './form';
import type { TenantSearchValues } from './form';
import locale from './locale';
import styles from './style/index.module.less';
import { getColumns } from './constants';
import {
  parseEncryptionKey,
  tenantTypeToBusinessType,
  businessTypeLabel,
  activeStatusLabel,
  dataStatusLabel,
  formatConfigPreview,
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
          activeStatus: record.activeStatus,
          eventSecret: sec,
          expireAt: record.expireAt,
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

      <Table
        rowKey="id"
        loading={loading}
        onChange={onChangeTable}
        pagination={pagination}
        columns={columns}
        data={data}
        border
        scroll={{ x: 1680 }}
      />

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
          <Form.Item label={t['tenantSearch.columns.tenantZone']}>
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
              <Select allowCreate placeholder="IANA">
                {TIMEZONES.map((z) => (
                  <Select.Option key={z} value={z}>
                    {z}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form.Item>
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
              activeStatus: v.activeStatus,
              expireAt: v.expireAt,
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
          <Form.Item label={t['tenantSearch.columns.tenantZone']}>
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
              <Select allowCreate>
                {TIMEZONES.map((z) => (
                  <Select.Option key={z} value={z}>
                    {z}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form.Item>
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
          <Form.Item
            label={t['tenantSearch.columns.enableStatus']}
            field="activeStatus"
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
        title={t['tenantSearch.modal.viewTitle']}
        visible={!!viewRecord}
        footer={null}
        onCancel={() => setViewRecord(null)}
        unmountOnExit
        style={{ width: 600 }}
      >
        {viewRecord && (
          <Form
            layout="horizontal"
            labelAlign="left"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            className={styles['search-form']}
          >
            <Form.Item label={t['tenantSearch.columns.tenantName']}>
              <Typography.Text>{viewRecord.tenantName}</Typography.Text>
            </Form.Item>
            <Form.Item label={t['tenantSearch.columns.tenantCode']}>
              <Typography.Text copyable>
                {viewRecord.tenantCode}
              </Typography.Text>
            </Form.Item>
            <Form.Item label={t['tenantSearch.columns.businessType']}>
              <Typography.Text>
                {businessTypeLabel(
                  t,
                  tenantTypeToBusinessType(viewRecord.tenantType)
                )}
              </Typography.Text>
            </Form.Item>
            <Form.Item label={t['tenantSearch.columns.tenantZone']}>
              <Typography.Text>{viewRecord.tenantZone}</Typography.Text>
            </Form.Item>
            <Form.Item label={t['tenantSearch.columns.enableStatus']}>
              <Typography.Text>
                {activeStatusLabel(t, viewRecord.activeStatus)}
              </Typography.Text>
            </Form.Item>
            <Form.Item label={t['tenantSearch.columns.tenantStatus']}>
              <Typography.Text>
                {dataStatusLabel(t, viewRecord.status)}
              </Typography.Text>
            </Form.Item>
            <Form.Item label={t['tenantSearch.columns.lastOperator']}>
              <Typography.Text>
                {viewRecord.operatorUsername?.trim() || '—'}
              </Typography.Text>
            </Form.Item>
            <Form.Item label="encryption_key">
              <div className={styles.secretRow}>
                <Typography.Text>{viewSecret || '—'}</Typography.Text>
                {viewSecret ? (
                  <Button
                    type="text"
                    size="mini"
                    icon={<IconCopy />}
                    onClick={() => {
                      copy(viewSecret);
                      Message.success(t['tenantSearch.msg.copied']);
                    }}
                  />
                ) : null}
              </div>
            </Form.Item>
            <Form.Item label="config">
              <Typography.Text style={{ wordBreak: 'break-all' }}>
                {formatConfigPreview(viewRecord)}
              </Typography.Text>
            </Form.Item>
            <Form.Item label="expireAt">
              <Typography.Text>{String(viewRecord.expireAt)}</Typography.Text>
            </Form.Item>
            <Form.Item label={t['tenantSearch.columns.createdAt']}>
              <Typography.Text>
                {formatEpochMs(viewRecord.createdAt)}
              </Typography.Text>
            </Form.Item>
            <Form.Item label={t['tenantSearch.columns.updatedAt']}>
              <Typography.Text>
                {formatEpochMs(viewRecord.updatedAt)}
              </Typography.Text>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </Card>
  );
}
