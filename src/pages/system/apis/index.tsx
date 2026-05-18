import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Button,
  Card,
  Form,
  Grid,
  Input,
  Message,
  Modal,
  Select,
  Space,
  Table,
  Tooltip,
  Typography,
  PaginationProps,
} from '@arco-design/web-react';
import {
  IconDelete,
  IconEdit,
  IconPlus,
  IconRefresh,
  IconSearch,
} from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import {
  ApiEndpointRecord,
  ApiGroupRecord,
  createApi,
  deleteApi,
  fetchApiGroupOptions,
  fetchApiPage,
  updateApi,
} from '@/api/access-permission';
import { formatTime } from '@/utils/accessControl';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import styles from '../tenants/style/index.module.less';
import apiStyles from './style/index.module.less';

const { Title, Text } = Typography;
const { Row, Col } = Grid;

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
const MATCH_TYPES = ['EXACT', 'PREFIX', 'REGEX'];
const API_CODE_PREFIX_ROOT = 'api';
const ACCESS_LEVEL_PUBLIC = 1;
const ACCESS_LEVEL_LOGIN_ONLY = 2;
const ACCESS_LEVEL_PERMISSION = 3;

type ApiSearchValues = {
  apiCode?: string;
  apiName?: string;
  apiGroup?: string;
  httpMethod?: string;
  pathPattern?: string;
  matchType?: string;
  accessLevel?: number;
};

type ApiModalValues = ApiEndpointRecord & {
  apiCodeSuffix?: string;
};

const SEARCH_FORM_INITIAL_VALUES: ApiSearchValues = {
  apiCode: '',
  apiName: '',
  apiGroup: undefined,
  httpMethod: undefined,
  pathPattern: '',
  matchType: undefined,
  accessLevel: undefined,
};

function renderAccessLevelLabel(
  value: number | undefined,
  labels: Record<number, string>
) {
  if (value == null) {
    return '-';
  }
  return labels[value] || String(value);
}

function apiCodePrefix(groupCode?: string) {
  return groupCode ? `${API_CODE_PREFIX_ROOT}:${groupCode}:` : '';
}

function splitApiCodeSuffix(apiCode?: string, groupCode?: string) {
  const prefix = apiCodePrefix(groupCode);
  if (!apiCode) {
    return '';
  }
  return prefix && apiCode.startsWith(prefix)
    ? apiCode.slice(prefix.length)
    : apiCode;
}

function renderEllipsisText(value?: string) {
  if (!value) {
    return '-';
  }
  return (
    <Tooltip content={value} position="top">
      <Text className={apiStyles['ellipsis-text']} ellipsis>
        {value}
      </Text>
    </Tooltip>
  );
}

export default function ApiManagePage() {
  const t = useLocale(locale);
  const [searchForm] = Form.useForm();
  const [modalForm] = Form.useForm();
  const [data, setData] = useState<ApiEndpointRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [formParams, setFormParams] = useState<ApiSearchValues>({});
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<ApiEndpointRecord | null>(null);
  const [apiGroups, setApiGroups] = useState<ApiGroupRecord[]>([]);
  const [selectedApiGroup, setSelectedApiGroup] = useState<string>();
  const [tick, setTick] = useState(0);

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

  const groupNameMap = useMemo(
    () =>
      apiGroups.reduce<Record<string, string>>((map, item) => {
        if (item.groupCode) {
          map[item.groupCode] = item.groupName || item.groupCode;
        }
        return map;
      }, {}),
    [apiGroups]
  );

  const groupOptions = useMemo(
    () =>
      apiGroups.map((item) => ({
        label: item.groupName
          ? `${item.groupName} (${item.groupCode})`
          : item.groupCode,
        value: item.groupCode,
      })),
    [apiGroups]
  );

  const matchTypeOptions = useMemo(
    () =>
      MATCH_TYPES.map((value) => ({
        label: t[`apiSearch.matchType.${value}`] || value,
        value,
      })),
    [t]
  );

  const accessLevelLabels = useMemo(
    () => ({
      [ACCESS_LEVEL_PUBLIC]: t['apiSearch.accessLevel.public'],
      [ACCESS_LEVEL_LOGIN_ONLY]: t['apiSearch.accessLevel.loginOnly'],
      [ACCESS_LEVEL_PERMISSION]: t['apiSearch.accessLevel.permission'],
    }),
    [t]
  );

  const accessLevelOptions = useMemo(
    () => [
      { label: t['apiSearch.accessLevel.public'], value: ACCESS_LEVEL_PUBLIC },
      {
        label: t['apiSearch.accessLevel.loginOnly'],
        value: ACCESS_LEVEL_LOGIN_ONLY,
      },
      {
        label: t['apiSearch.accessLevel.permission'],
        value: ACCESS_LEVEL_PERMISSION,
      },
    ],
    [t]
  );

  const httpMethodOptions = useMemo(
    () => HTTP_METHODS.map((value) => ({ label: value, value })),
    []
  );

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    void fetchApiPage({
      page: current,
      pageSize,
      apiCode: formParams.apiCode?.trim() || undefined,
      apiName: formParams.apiName?.trim() || undefined,
      apiGroup: formParams.apiGroup || undefined,
      httpMethod: formParams.httpMethod || undefined,
      pathPattern: formParams.pathPattern?.trim() || undefined,
      matchType: formParams.matchType || undefined,
      accessLevel: formParams.accessLevel,
    })
      .then((res) => {
        if (!canceled) {
          setData(res.list || []);
          setTotal(res.total || 0);
        }
      })
      .finally(() => !canceled && setLoading(false));
    return () => {
      canceled = true;
    };
  }, [current, pageSize, formParams, tick]);

  useEffect(() => {
    let canceled = false;
    void fetchApiGroupOptions().then((res) => {
      if (!canceled) {
        setApiGroups(res?.list || []);
      }
    });
    return () => {
      canceled = true;
    };
  }, [tick]);

  const openCreateModal = () => {
    setSelected(null);
    setSelectedApiGroup(undefined);
    modalForm.resetFields();
    modalForm.setFieldsValue({
      httpMethod: 'GET',
      matchType: 'EXACT',
      accessLevel: ACCESS_LEVEL_PERMISSION,
      activeStatus: 1,
    });
    setVisible(true);
  };

  const openEditModal = useCallback(
    (record: ApiEndpointRecord) => {
      const apiGroup = record.apiGroup;
      setSelected(record);
      setSelectedApiGroup(apiGroup);
      modalForm.setFieldsValue({
        ...record,
        apiCodeSuffix: splitApiCodeSuffix(record.apiCode, apiGroup),
      });
      setVisible(true);
    },
    [modalForm]
  );

  const columns = useMemo<ColumnProps<ApiEndpointRecord>[]>(
    () => [
      { title: t['apiSearch.columns.id'], dataIndex: 'id', width: 80 },
      {
        title: t['apiSearch.columns.apiName'],
        dataIndex: 'apiName',
        width: 180,
        render: renderEllipsisText,
      },
      {
        title: t['apiSearch.columns.apiCode'],
        dataIndex: 'apiCode',
        width: 240,
        render: renderEllipsisText,
      },
      {
        title: t['apiSearch.columns.apiGroup'],
        dataIndex: 'apiGroup',
        width: 120,
        render: (value) =>
          renderEllipsisText(value ? groupNameMap[value] || value : ''),
      },
      {
        title: t['apiSearch.columns.httpMethod'],
        dataIndex: 'httpMethod',
        width: 110,
      },
      {
        title: t['apiSearch.columns.pathPattern'],
        dataIndex: 'pathPattern',
        width: 280,
        render: renderEllipsisText,
      },
      {
        title: t['apiSearch.columns.matchType'],
        dataIndex: 'matchType',
        width: 120,
        render: (value) => t[`apiSearch.matchType.${value}`] || value || '-',
      },
      {
        title: t['apiSearch.columns.accessLevel'],
        dataIndex: 'accessLevel',
        width: 130,
        render: (value) => renderAccessLevelLabel(value, accessLevelLabels),
      },
      {
        title: t['apiSearch.columns.updatedAt'],
        dataIndex: 'updatedAt',
        width: 170,
        render: formatTime,
      },
      {
        title: t['apiSearch.columns.operations'],
        dataIndex: 'operations',
        width: 160,
        fixed: 'right',
        render: (_, record) => (
          <Space className={styles.operations}>
            <Button
              type="text"
              size="small"
              icon={<IconEdit />}
              onClick={() => openEditModal(record)}
            >
              {t['apiSearch.operations.edit']}
            </Button>
            <Button
              type="text"
              status="danger"
              size="small"
              icon={<IconDelete />}
              onClick={() =>
                Modal.confirm({
                  title: t['apiSearch.confirm.deleteTitle'],
                  content: t['apiSearch.confirm.deleteContent'],
                  onOk: async () => {
                    await deleteApi(record.id);
                    Message.success(t['apiSearch.msg.deleteOk']);
                    setTick((x) => x + 1);
                  },
                })
              }
            >
              {t['apiSearch.operations.delete']}
            </Button>
          </Space>
        ),
      },
    ],
    [accessLevelLabels, groupNameMap, openEditModal, t]
  );

  const handleSearch = () => {
    setCurrent(1);
    setFormParams(searchForm.getFieldsValue() as ApiSearchValues);
  };

  const handleReset = () => {
    searchForm.resetFields();
    setCurrent(1);
    setFormParams({ ...SEARCH_FORM_INITIAL_VALUES });
  };

  const handleApiGroupChange = (value: string) => {
    setSelectedApiGroup(value);
    modalForm.setFieldValue('apiGroup', value);
  };

  const submit = async () => {
    const values = (await modalForm.validate()) as ApiModalValues;
    const apiCode = `${apiCodePrefix(values.apiGroup)}${String(
      values.apiCodeSuffix || ''
    ).trim()}`;
    const payload = {
      ...values,
      apiCode,
    };
    delete payload.apiCodeSuffix;
    if (selected) {
      await updateApi({ ...payload, id: selected.id });
      Message.success(t['apiSearch.msg.saveOk']);
    } else {
      await createApi(payload);
      Message.success(t['apiSearch.msg.createOk']);
    }
    setVisible(false);
    setTick((x) => x + 1);
  };

  const onChangeTable = (p: PaginationProps) => {
    setCurrent(p.current || 1);
    setPageSize(p.pageSize || 10);
  };

  return (
    <Card>
      <Title heading={6}>{t['apiSearch.title']}</Title>
      <div className={styles['search-form-wrapper']}>
        <Form
          form={searchForm}
          initialValues={SEARCH_FORM_INITIAL_VALUES}
          className={apiStyles['search-form']}
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label={t['apiSearch.columns.apiCode']} field="apiCode">
                <Input
                  allowClear
                  placeholder={t['apiSearch.placeholder.apiCodeSuffix']}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={t['apiSearch.columns.apiName']} field="apiName">
                <Input
                  allowClear
                  placeholder={t['apiSearch.placeholder.apiName']}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={t['apiSearch.columns.apiGroup']}
                field="apiGroup"
              >
                <Select
                  allowClear
                  showSearch
                  options={groupOptions}
                  placeholder={t['apiSearch.placeholder.apiGroup']}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={t['apiSearch.columns.httpMethod']}
                field="httpMethod"
              >
                <Select
                  allowClear
                  options={httpMethodOptions}
                  placeholder={t['apiSearch.placeholder.httpMethod']}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={t['apiSearch.columns.pathPattern']}
                field="pathPattern"
              >
                <Input
                  allowClear
                  placeholder={t['apiSearch.placeholder.pathPattern']}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={t['apiSearch.columns.matchType']}
                field="matchType"
              >
                <Select
                  allowClear
                  options={matchTypeOptions}
                  placeholder={t['apiSearch.placeholder.matchType']}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={t['apiSearch.columns.accessLevel']}
                field="accessLevel"
              >
                <Select
                  allowClear
                  options={accessLevelOptions}
                  placeholder={t['apiSearch.placeholder.accessLevel']}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div className={styles['right-button']}>
          <Button type="primary" icon={<IconSearch />} onClick={handleSearch}>
            {t['apiSearch.form.search']}
          </Button>
          <Button icon={<IconRefresh />} onClick={handleReset}>
            {t['apiSearch.form.reset']}
          </Button>
        </div>
      </div>
      <div className={styles['button-group']}>
        <Space>
          <Button type="primary" icon={<IconPlus />} onClick={openCreateModal}>
            {t['apiSearch.operations.add']}
          </Button>
        </Space>
        <Button icon={<IconRefresh />} onClick={() => setTick((x) => x + 1)}>
          {t['apiSearch.operations.refresh']}
        </Button>
      </div>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        data={data}
        border
        pagination={pagination}
        onChange={onChangeTable}
      />
      <Modal
        title={
          selected
            ? t['apiSearch.modal.editTitle']
            : t['apiSearch.modal.createTitle']
        }
        visible={visible}
        onOk={submit}
        onCancel={() => setVisible(false)}
        unmountOnExit
        className={apiStyles['api-modal']}
        style={{ width: 880 }}
      >
        <Form
          form={modalForm}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          className={`${styles['search-form']} ${apiStyles['modal-form']}`}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label={t['apiSearch.columns.apiGroup']}
                field="apiGroup"
                rules={[
                  {
                    required: true,
                    message: t['apiSearch.validation.required'],
                  },
                ]}
              >
                <Select
                  allowClear
                  showSearch
                  options={groupOptions}
                  placeholder={t['apiSearch.placeholder.apiGroup']}
                  onChange={handleApiGroupChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t['apiSearch.columns.apiCode']}
                field="apiCodeSuffix"
                rules={[
                  {
                    required: true,
                    message: t['apiSearch.validation.required'],
                  },
                ]}
              >
                <Input
                  disabled={!selectedApiGroup}
                  addBefore={apiCodePrefix(selectedApiGroup)}
                  placeholder={
                    selectedApiGroup
                      ? t['apiSearch.placeholder.apiCodeSuffix']
                      : t['apiSearch.placeholder.apiCode']
                  }
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t['apiSearch.columns.apiName']}
                field="apiName"
                rules={[
                  {
                    required: true,
                    message: t['apiSearch.validation.required'],
                  },
                ]}
              >
                <Input placeholder={t['apiSearch.placeholder.apiName']} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t['apiSearch.columns.httpMethod']}
                field="httpMethod"
              >
                <Select options={httpMethodOptions} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t['apiSearch.columns.pathPattern']}
                field="pathPattern"
                rules={[
                  {
                    required: true,
                    message: t['apiSearch.validation.required'],
                  },
                ]}
              >
                <Input placeholder={t['apiSearch.placeholder.pathPattern']} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t['apiSearch.columns.matchType']}
                field="matchType"
              >
                <Select options={matchTypeOptions} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={t['apiSearch.columns.accessLevel']}
                field="accessLevel"
              >
                <Select options={accessLevelOptions} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label={t['apiSearch.field.description']}
                field="description"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                className={apiStyles['description-item']}
              >
                <Input.TextArea
                  rows={3}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </Card>
  );
}
