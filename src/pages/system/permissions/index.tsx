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
  createPermission,
  deletePermission,
  fetchPermissionPage,
  PermissionRecord,
  updatePermission,
} from '@/api/access-permission';
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
  { label: '全局', value: 'GLOBAL' },
];

const OBJECT_TYPE_OPTIONS = [
  { label: 'MENU', value: 'MENU' },
  { label: 'API', value: 'API' },
  { label: 'GLOBAL', value: 'GLOBAL' },
];

export default function PermissionManagePage() {
  const [searchForm] = Form.useForm();
  const [modalForm] = Form.useForm();
  const [data, setData] = useState<PermissionRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [formParams, setFormParams] = useState<PermissionSearchValues>({});
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<PermissionRecord | null>(null);
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

  const openCreateModal = () => {
    setSelected(null);
    modalForm.resetFields();
    modalForm.setFieldsValue({ activeStatus: 1 });
    setVisible(true);
  };

  const openEditModal = useCallback(
    (record: PermissionRecord) => {
      setSelected(record);
      modalForm.setFieldsValue(record);
      setVisible(true);
    },
    [modalForm]
  );

  const columns = useMemo<ColumnProps<PermissionRecord>[]>(
    () => [
      { title: 'ID', dataIndex: 'id', width: 80 },
      { title: '权限编码', dataIndex: 'permissionCode', width: 220 },
      { title: '权限名称', dataIndex: 'permissionName', width: 180 },
      { title: '类型', dataIndex: 'permissionType', width: 120 },
      { title: '对象类型', dataIndex: 'objectType', width: 120 },
      { title: '对象 ID', dataIndex: 'objectId', width: 100 },
      { title: '描述', dataIndex: 'description', ellipsis: true },
      {
        title: '更新时间',
        dataIndex: 'updatedAt',
        width: 170,
        render: formatTime,
      },
      {
        title: '操作',
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
              编辑
            </Button>
            <Button
              type="text"
              status="danger"
              size="small"
              icon={<IconDelete />}
              onClick={() =>
                Modal.confirm({
                  title: '删除权限点',
                  content: `确认删除 ${record.permissionCode}？`,
                  onOk: async () => {
                    await deletePermission(record.id);
                    Message.success('权限点已删除');
                    setTick((x) => x + 1);
                  },
                })
              }
            >
              删除
            </Button>
          </Space>
        ),
      },
    ],
    [openEditModal]
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

  const submit = async () => {
    const values = await modalForm.validate();
    if (selected) {
      await updatePermission({ ...values, id: selected.id });
      Message.success('权限点已更新');
    } else {
      await createPermission(values);
      Message.success('权限点已新增');
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
            <Col span={8}>
              <Form.Item label="权限编码" field="permissionCode">
                <Input allowClear placeholder="请输入权限编码" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="权限名称" field="permissionName">
                <Input allowClear placeholder="请输入权限名称" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="权限类型" field="permissionType">
                <Select
                  allowClear
                  options={PERMISSION_TYPE_OPTIONS}
                  placeholder="全部"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
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
        <Space>
          <Button type="primary" icon={<IconPlus />} onClick={openCreateModal}>
            新增权限点
          </Button>
        </Space>
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
      <Modal
        title={selected ? '编辑权限点' : '新增权限点'}
        visible={visible}
        onOk={submit}
        onCancel={() => setVisible(false)}
        unmountOnExit
        style={{ width: 560 }}
      >
        <Form
          form={modalForm}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          className={styles['search-form']}
        >
          <Form.Item
            label="权限编码"
            field="permissionCode"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="权限名称"
            field="permissionName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="权限类型" field="permissionType">
            <Select options={PERMISSION_TYPE_OPTIONS} />
          </Form.Item>
          <Form.Item label="对象类型" field="objectType">
            <Select options={OBJECT_TYPE_OPTIONS} />
          </Form.Item>
          <Form.Item label="对象 ID" field="objectId">
            <Input />
          </Form.Item>
          <Form.Item label="描述" field="description">
            <Input.TextArea rows={3} autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}
