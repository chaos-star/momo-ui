import React, { useEffect, useMemo, useState } from 'react';
import {
  Button,
  Card,
  Form,
  Grid,
  Input,
  Message,
  Modal,
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
  ApiGroupRecord,
  createApiGroup,
  deleteApiGroup,
  fetchApiGroupPage,
  updateApiGroup,
} from '@/api/access-permission';
import { formatTime } from '@/utils/accessControl';
import styles from '../tenants/style/index.module.less';

const { Title, Text } = Typography;
const { Row, Col } = Grid;

type ApiGroupSearchValues = {
  groupCode?: string;
  groupName?: string;
};

const SEARCH_FORM_INITIAL_VALUES: ApiGroupSearchValues = {
  groupCode: '',
  groupName: '',
};

function toListParams(
  formParams: ApiGroupSearchValues,
  current: number,
  pageSize: number
) {
  const keyword = [formParams.groupCode, formParams.groupName]
    .map((item) => item?.trim())
    .filter(Boolean)
    .join(' ');

  return {
    page: current,
    pageSize,
    keyword: keyword || undefined,
  };
}

function SearchForm(props: {
  onSearch: (values: ApiGroupSearchValues) => void;
}) {
  const [searchForm] = Form.useForm();

  const handleSubmit = () => {
    props.onSearch(searchForm.getFieldsValue() as ApiGroupSearchValues);
  };

  const handleReset = () => {
    searchForm.resetFields();
    props.onSearch({ ...SEARCH_FORM_INITIAL_VALUES });
  };

  return (
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
          <Col span={8}>
            <Form.Item label="分组编码" field="groupCode">
              <Input allowClear placeholder="请输入分组编码" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="分组名称" field="groupName">
              <Input allowClear placeholder="请输入分组名称" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={styles['right-button']}>
        <Button type="primary" icon={<IconSearch />} onClick={handleSubmit}>
          查询
        </Button>
        <Button icon={<IconRefresh />} onClick={handleReset}>
          重置
        </Button>
      </div>
    </div>
  );
}

export default function ApiGroupManagePage() {
  const [form] = Form.useForm();
  const [data, setData] = useState<ApiGroupRecord[]>([]);
  const [loading, setLoading] = useState(false);
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
  const [formParams, setFormParams] = useState<ApiGroupSearchValues>({});
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<ApiGroupRecord | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    void fetchApiGroupPage(toListParams(formParams, listCurrent, listPageSize))
      .then((res) => {
        if (!canceled) {
          setData(res.list || []);
          setListTotal(res.total || 0);
        }
      })
      .finally(() => !canceled && setLoading(false));
    return () => {
      canceled = true;
    };
  }, [listCurrent, listPageSize, formParams, tick]);

  const handleSearch = (params: ApiGroupSearchValues) => {
    setListCurrent(1);
    setFormParams(params);
  };

  const onChangeTable = (pag: PaginationProps) => {
    setListCurrent((value) => pag.current ?? value);
    setListPageSize((value) =>
      pag.pageSize != null ? Number(pag.pageSize) : value
    );
  };

  const columns = useMemo<ColumnProps<ApiGroupRecord>[]>(
    () => [
      { title: 'ID', dataIndex: 'id', width: 72 },
      {
        title: '分组编码',
        dataIndex: 'groupCode',
        width: 220,
        render: (value: string) =>
          value ? <Text copyable>{value}</Text> : '—',
      },
      { title: '分组名称', dataIndex: 'groupName', width: 180 },
      {
        title: '描述',
        dataIndex: 'description',
        width: 280,
        ellipsis: true,
        render: (value: string) => value || '—',
      },
      {
        title: '最后操作人',
        dataIndex: 'operatorUsername',
        width: 120,
        ellipsis: true,
        render: (value: string) => value?.trim() || '—',
      },
      {
        title: '创建时间',
        dataIndex: 'createdAt',
        width: 168,
        render: formatTime,
      },
      {
        title: '更新时间',
        dataIndex: 'updatedAt',
        width: 168,
        render: formatTime,
      },
      {
        title: '操作',
        dataIndex: 'operations',
        width: 160,
        fixed: 'right',
        headerCellStyle: { paddingLeft: '12px' },
        render: (_, record) => (
          <Space className={styles.operations} size={10} wrap>
            <Button
              type="text"
              size="small"
              icon={<IconEdit />}
              onClick={() => {
                setSelected(record);
                form.setFieldsValue(record);
                setVisible(true);
              }}
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
                  title: '删除 API 分组',
                  content: `确认删除 ${record.groupCode}？`,
                  onOk: async () => {
                    await deleteApiGroup(record.id);
                    Message.success('API 分组已删除');
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
    [form]
  );

  const submit = async () => {
    const values = await form.validate();
    if (selected) {
      await updateApiGroup({ ...values, id: selected.id });
      Message.success('API 分组已更新');
    } else {
      await createApiGroup(values);
      Message.success('API 分组已新增');
    }
    setVisible(false);
    setTick((x) => x + 1);
  };

  return (
    <Card>
      <Title heading={6}>API 分组管理</Title>
      <SearchForm onSearch={handleSearch} />
      <div className={styles['button-group']}>
        <Space>
          <Button
            type="primary"
            icon={<IconPlus />}
            onClick={() => {
              setSelected(null);
              form.resetFields();
              setVisible(true);
            }}
          >
            新增分组
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
        scroll={{ x: 1100 }}
        pagination={pagination}
        onChange={onChangeTable}
      />
      <Modal
        title={selected ? '编辑 API 分组' : '新增 API 分组'}
        visible={visible}
        onOk={submit}
        onCancel={() => setVisible(false)}
        unmountOnExit
      >
        <Form
          form={form}
          layout="horizontal"
          labelAlign="left"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          <Form.Item
            label="分组编码"
            field="groupCode"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="分组名称"
            field="groupName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="描述" field="description">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}
