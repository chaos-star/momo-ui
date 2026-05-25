import React, { useEffect, useMemo, useState } from 'react';
import {
  Button,
  Card,
  Form,
  Grid,
  Input,
  Select,
  Table,
  Tooltip,
  Typography,
  PaginationProps,
} from '@arco-design/web-react';
import { IconRefresh, IconSearch } from '@arco-design/web-react/icon';
import type { ColumnProps } from '@arco-design/web-react/es/Table';
import { fetchPermissionPage, PermissionRecord } from '@/api/access-permission';
import { formatTime } from '@/utils/accessControl';
import styles from '../tenants/style/index.module.less';
import pageStyles from './style/index.module.less';

const { Title } = Typography;
const { Row, Col } = Grid;

type PermissionSearchValues = {
  permissionCode?: string;
  permissionName?: string;
  permissionType?: string;
  objectType?: string;
};

const SEARCH_FORM_INITIAL_VALUES: PermissionSearchValues = {
  permissionCode: '',
  permissionName: '',
  permissionType: undefined,
  objectType: undefined,
};

const PERMISSION_TYPE_OPTIONS = [
  { label: '菜单', value: 'MENU' },
  { label: 'API', value: 'API' },
  { label: '页面', value: 'PAGE' },
];

const OBJECT_TYPE_OPTIONS = [
  { label: '菜单', value: 'MENU' },
  { label: 'API', value: 'API' },
  { label: '按钮', value: 'BUTTON' },
  { label: '表单', value: 'FORM' },
  { label: '标签页', value: 'TAB' },
];

function renderPermissionCode(value?: string) {
  if (!value) {
    return '-';
  }
  return (
    <Tooltip content={value} position="top">
      <span className={pageStyles['permission-code-ellipsis']}>{value}</span>
    </Tooltip>
  );
}

export default function PermissionManagePage() {
  const [searchForm] = Form.useForm();
  const [data, setData] = useState<PermissionRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [formParams, setFormParams] = useState<PermissionSearchValues>({});
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

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    void fetchPermissionPage({
      page: current,
      pageSize,
      permissionCode: formParams.permissionCode?.trim() || undefined,
      permissionName: formParams.permissionName?.trim() || undefined,
      permissionType: formParams.permissionType || undefined,
      objectType: formParams.objectType || undefined,
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

  const columns = useMemo<ColumnProps<PermissionRecord>[]>(
    () => [
      { title: 'ID', dataIndex: 'id', width: 80 },
      {
        title: '权限编码',
        dataIndex: 'permissionCode',
        width: 220,
        render: renderPermissionCode,
      },
      { title: '权限名称', dataIndex: 'permissionName', width: 180 },
      { title: '类型', dataIndex: 'permissionType', width: 120 },
      { title: '对象类型', dataIndex: 'objectType', width: 120 },
      { title: '对象 ID', dataIndex: 'objectId', width: 100 },
      { title: '描述', dataIndex: 'description', ellipsis: true },
      {
        title: '操作人',
        dataIndex: 'operatorUsername',
        width: 120,
        render: (value, record) => value || record.operator || '—',
      },
      {
        title: '更新时间',
        dataIndex: 'updatedAt',
        width: 170,
        render: formatTime,
      },
    ],
    []
  );

  const handleSearch = () => {
    setCurrent(1);
    setFormParams(searchForm.getFieldsValue() as PermissionSearchValues);
  };

  const handleReset = () => {
    searchForm.resetFields();
    setCurrent(1);
    setFormParams({ ...SEARCH_FORM_INITIAL_VALUES });
  };

  const onChangeTable = (p: PaginationProps) => {
    setCurrent(p.current || 1);
    setPageSize(p.pageSize || 10);
  };

  return (
    <Card>
      <Title heading={6}>权限点管理</Title>
      <div className={styles['search-form-wrapper']}>
        <Form
          form={searchForm}
          initialValues={SEARCH_FORM_INITIAL_VALUES}
          className={pageStyles['search-form']}
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          <Row gutter={24}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item label="权限编码" field="permissionCode">
                <Input allowClear placeholder="请输入权限编码" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item label="权限名称" field="permissionName">
                <Input allowClear placeholder="请输入权限名称" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item label="权限类型" field="permissionType">
                <Select
                  allowClear
                  options={PERMISSION_TYPE_OPTIONS}
                  placeholder="全部"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item label="对象类型" field="objectType">
                <Select
                  allowClear
                  options={OBJECT_TYPE_OPTIONS}
                  placeholder="全部"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div className={styles['right-button']}>
          <Button type="primary" icon={<IconSearch />} onClick={handleSearch}>
            查询
          </Button>
          <Button icon={<IconRefresh />} onClick={handleReset}>
            重置
          </Button>
        </div>
      </div>
      <div className={styles['button-group']}>
        <span />
        <Button icon={<IconRefresh />} onClick={() => setTick((x) => x + 1)}>
          刷新
        </Button>
      </div>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        data={data}
        border
        scroll={{ x: 1200 }}
        pagination={pagination}
        onChange={onChangeTable}
      />
    </Card>
  );
}
