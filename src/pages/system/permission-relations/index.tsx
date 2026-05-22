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
  createPermissionRelation,
  deletePermissionRelation,
  fetchPermissionOptions,
  fetchPermissionRelationList,
  PermissionOptionRecord,
  PermissionRelationRecord,
  updatePermissionRelation,
} from '@/api/access-permission';
import styles from '../tenants/style/index.module.less';
import pageStyles from './style/index.module.less';

const { Title, Text } = Typography;
const { Row, Col } = Grid;

const childGroupOptions = [
  { label: 'API', value: 'API' },
  { label: '页面元素', value: 'ELEMENT' },
];

const autoGrantOptions = [
  { label: '勾选父权限时自动授权', value: 1 },
  { label: '需手动勾选子权限', value: 2 },
];

type RelationSearchValues = {
  parentPermissionId?: number;
  childGroup?: string;
};

const SEARCH_FORM_INITIAL_VALUES: RelationSearchValues = {
  parentPermissionId: undefined,
  childGroup: undefined,
};

function toPermissionOptions(items: PermissionOptionRecord[] = []) {
  return items.map((item) => ({
    label: `${item.permissionName || item.permissionCode} (${
      item.permissionCode
    })`,
    value: item.id,
  }));
}

function filterPermissionOption(
  input: string,
  option: { props?: { children?: React.ReactNode } }
) {
  const text = String(option?.props?.children ?? '');
  return text.toLowerCase().includes(input.toLowerCase());
}

export default function PermissionRelationPage() {
  const [searchForm] = Form.useForm();
  const [modalForm] = Form.useForm();
  const [data, setData] = useState<PermissionRelationRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [formParams, setFormParams] = useState<RelationSearchValues>({});
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<PermissionRelationRecord | null>(
    null
  );
  const [menuPermissionOptions, setMenuPermissionOptions] = useState<
    { label: string; value: number }[]
  >([]);
  const [apiPermissionOptions, setApiPermissionOptions] = useState<
    { label: string; value: number }[]
  >([]);
  const [elementPermissionOptions, setElementPermissionOptions] = useState<
    { label: string; value: number }[]
  >([]);
  const childGroup = Form.useWatch('childGroup', modalForm);
  const [tick, setTick] = useState(0);

  const reload = useCallback(() => setTick((x) => x + 1), []);

  const loadPermissionOptions = useCallback(async () => {
    const [menuPerms, apiPerms, elementPerms] = await Promise.all([
      fetchPermissionOptions({ objectType: 'MENU', permissionType: 'MENU' }),
      fetchPermissionOptions({ objectType: 'API', permissionType: 'API' }),
      fetchPermissionOptions({ objectType: 'ELEMENT' }),
    ]);
    setMenuPermissionOptions(toPermissionOptions(menuPerms));
    setApiPermissionOptions(toPermissionOptions(apiPerms));
    setElementPermissionOptions(toPermissionOptions(elementPerms));
  }, []);

  const childSelectOptions = useMemo(() => {
    if (childGroup === 'ELEMENT') {
      return elementPermissionOptions;
    }
    if (childGroup === 'API') {
      return apiPermissionOptions;
    }
    return [...apiPermissionOptions, ...elementPermissionOptions];
  }, [childGroup, apiPermissionOptions, elementPermissionOptions]);

  const pagination = useMemo<PaginationProps>(
    () => ({
      showTotal: true,
      sizeCanChange: true,
      pageSizeChangeResetCurrent: true,
      showJumper: true,
      pageSizeOptions: [10, 20, 50, 100],
      defaultPageSize: 10,
    }),
    []
  );

  useEffect(() => {
    void loadPermissionOptions();
  }, [loadPermissionOptions]);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    const params: Record<string, unknown> = {};
    if (formParams.parentPermissionId != null) {
      params.parentPermissionId = formParams.parentPermissionId;
    }
    if (formParams.childGroup) {
      params.childGroup = formParams.childGroup;
    }
    void fetchPermissionRelationList(params)
      .then((list) => !canceled && setData(list || []))
      .finally(() => !canceled && setLoading(false));
    return () => {
      canceled = true;
    };
  }, [formParams, tick]);

  const openCreateModal = () => {
    setSelected(null);
    modalForm.resetFields();
    modalForm.setFieldsValue({
      relationType: 'CHILD',
      childGroup: 'API',
      autoGrant: 2,
      sortOrder: 100,
      activeStatus: 1,
    });
    setVisible(true);
  };

  const openEditModal = useCallback(
    (record: PermissionRelationRecord) => {
      setSelected(record);
      modalForm.setFieldsValue(record);
      setVisible(true);
    },
    [modalForm]
  );

  const columns = useMemo<ColumnProps<PermissionRelationRecord>[]>(
    () => [
      { title: 'ID', dataIndex: 'id', width: 70 },
      {
        title: '父权限（菜单）',
        width: 220,
        render: (_, record) =>
          `${record.parentPermissionName || '-'} (${
            record.parentPermissionCode || record.parentPermissionId
          })`,
      },
      {
        title: '子权限',
        width: 220,
        render: (_, record) =>
          `${record.childPermissionName || '-'} (${
            record.childPermissionCode || record.childPermissionId
          })`,
      },
      { title: '分组', dataIndex: 'childGroup', width: 90 },
      {
        title: '自动授权',
        dataIndex: 'autoGrant',
        width: 110,
        render: (v) => (v === 1 ? '自动' : '手动'),
      },
      { title: '排序', dataIndex: 'sortOrder', width: 70 },
      {
        title: '操作',
        width: 140,
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
                  title: '删除关系',
                  content: '确认删除该权限附属关系？',
                  onOk: async () => {
                    await deletePermissionRelation(record.id);
                    Message.success('已删除');
                    reload();
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
    [openEditModal, reload]
  );

  const handleSearch = () => {
    setFormParams(searchForm.getFieldsValue() as RelationSearchValues);
  };

  const handleReset = () => {
    searchForm.resetFields();
    setFormParams({ ...SEARCH_FORM_INITIAL_VALUES });
  };

  const submit = async () => {
    const values = await modalForm.validate();
    if (selected?.id) {
      await updatePermissionRelation({ ...values, id: selected.id });
      Message.success('已更新');
    } else {
      await createPermissionRelation(values);
      Message.success('已创建');
    }
    setVisible(false);
    setSelected(null);
    reload();
  };

  return (
    <Card>
      <Title heading={6}>权限关系管理</Title>
      <Text type="secondary" className={pageStyles.tip}>
        在此声明某菜单是否需要附属权限：配置父菜单与
        API/页面元素子权限的关系，以及角色授权时是否自动带出（auto_grant）。
        某菜单未配置任何关系时，表示仅需菜单权限本身，不需要其他
        API/元素权限。API/菜单管理仅维护资源与权限点，不配置关系。
      </Text>
      <div className={styles['search-form-wrapper']}>
        <Form
          form={searchForm}
          initialValues={SEARCH_FORM_INITIAL_VALUES}
          className={styles['search-form']}
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          <Row gutter={24}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <div className={styles.formLikeField}>
                <label className={styles.formLikeFieldLabel}>父权限</label>
                <div className={styles.formLikeFieldControl}>
                  <Form.Item field="parentPermissionId" noStyle>
                    <Select
                      showSearch
                      allowClear
                      options={menuPermissionOptions}
                      placeholder="全部"
                      filterOption={filterPermissionOption}
                    />
                  </Form.Item>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <div className={styles.formLikeField}>
                <label className={styles.formLikeFieldLabel}>子分组</label>
                <div className={styles.formLikeFieldControl}>
                  <Form.Item field="childGroup" noStyle>
                    <Select
                      allowClear
                      options={childGroupOptions}
                      placeholder="全部"
                    />
                  </Form.Item>
                </div>
              </div>
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
            新增关系
          </Button>
        </Space>
        <Button icon={<IconRefresh />} onClick={reload}>
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
      />
      <Modal
        title={selected ? '编辑权限关系' : '新增权限关系'}
        visible={visible}
        onOk={submit}
        onCancel={() => setVisible(false)}
        unmountOnExit
        style={{ width: 'min(560px, calc(100vw - 32px))' }}
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
            label="父权限"
            field="parentPermissionId"
            rules={[{ required: true, message: '请选择父权限' }]}
          >
            <Select
              showSearch
              allowClear
              options={menuPermissionOptions}
              placeholder="选择菜单类权限"
              filterOption={filterPermissionOption}
            />
          </Form.Item>
          <Form.Item
            label="子权限分组"
            field="childGroup"
            rules={[{ required: true }]}
          >
            <Select
              options={childGroupOptions}
              onChange={(value) => {
                modalForm.setFieldValue('childGroup', value);
                modalForm.setFieldValue('childPermissionId', undefined);
              }}
            />
          </Form.Item>
          <Form.Item
            label="子权限"
            field="childPermissionId"
            rules={[{ required: true, message: '请选择子权限' }]}
          >
            <Select
              showSearch
              allowClear
              options={childSelectOptions}
              placeholder="选择 API 或元素权限"
            />
          </Form.Item>
          <Form.Item
            label="自动授权"
            field="autoGrant"
            rules={[{ required: true }]}
            extra="设为「自动」时，角色勾选菜单将自动勾选该子权限并写入授权结果"
          >
            <Select options={autoGrantOptions} />
          </Form.Item>
          <Form.Item label="排序" field="sortOrder">
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}
