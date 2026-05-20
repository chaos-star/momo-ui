import React from 'react';
import {
  Button,
  Form,
  Grid,
  Input,
  Select,
  Space,
} from '@arco-design/web-react';
import { IconRefresh, IconSearch } from '@arco-design/web-react/icon';
import styles from '../tenants/style/index.module.less';

const { Row, Col } = Grid;

export type PermissionBoundaryPackageSearchValues = {
  packageCode?: string;
  packageName?: string;
  activeStatus?: number;
};

type Props = {
  onSearch: (values: PermissionBoundaryPackageSearchValues) => void;
};

export default function SearchForm({ onSearch }: Props) {
  const [form] = Form.useForm();

  return (
    <div className={styles['search-form-wrapper']}>
      <Form
        form={form}
        className={styles['search-form']}
        labelAlign="left"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="权限包编码" field="packageCode">
              <Input allowClear placeholder="如 DEFAULT_TENANT_PACKAGE" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="权限包名称" field="packageName">
              <Input allowClear placeholder="如 默认租户权限包" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <div className={styles.formLikeField}>
              <label className={styles.formLikeFieldLabel}>启用状态</label>
              <div className={styles.formLikeFieldControl}>
                <Form.Item field="activeStatus" noStyle>
                  <Select allowClear placeholder="全部">
                    <Select.Option value={1}>启用</Select.Option>
                    <Select.Option value={2}>停用</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
      <div className={styles['right-button']}>
        <Space direction="vertical">
          <Button
            type="primary"
            icon={<IconSearch />}
            onClick={() => onSearch(form.getFieldsValue())}
          >
            查询
          </Button>
          <Button
            icon={<IconRefresh />}
            onClick={() => {
              form.resetFields();
              onSearch({});
            }}
          >
            重置
          </Button>
        </Space>
      </div>
    </div>
  );
}
