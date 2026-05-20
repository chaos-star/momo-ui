import React, { useContext } from 'react';
import { Button, Form, Grid, Input, Select } from '@arco-design/web-react';
import { IconRefresh, IconSearch } from '@arco-design/web-react/icon';
import { GlobalContext } from '@/context';
import styles from './style/index.module.less';

const { Row, Col } = Grid;

export type RoleSearchValues = {
  roleCode?: string;
  roleName?: string;
  roleType?: string;
  assignScope?: string;
};

export const ROLE_TYPE_OPTIONS = [
  { label: '平台内部角色', value: 'PLATFORM_INTERNAL' },
  { label: '平台业务角色', value: 'PLATFORM_BUSINESS' },
  { label: '租户自定义角色', value: 'TENANT_CUSTOM' },
];

export const ASSIGN_SCOPE_OPTIONS = [
  { label: '仅平台租户', value: 'PLATFORM_ONLY' },
  { label: '仅本租户', value: 'TENANT_ONLY' },
  { label: '可跨租户', value: 'CROSS_TENANT' },
];

function SearchForm(props: { onSearch: (values: RoleSearchValues) => void }) {
  const { lang } = useContext(GlobalContext);
  const [form] = Form.useForm();
  const colSpan = lang === 'zh-CN' ? 8 : 12;

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
          <Col span={colSpan}>
            <Form.Item label="角色编码" field="roleCode">
              <Input allowClear placeholder="请输入角色编码" />
            </Form.Item>
          </Col>
          <Col span={colSpan}>
            <Form.Item label="角色名称" field="roleName">
              <Input allowClear placeholder="请输入角色名称" />
            </Form.Item>
          </Col>
          <Col span={colSpan}>
            <Form.Item label="角色类型" field="roleType">
              <Select
                allowClear
                placeholder="全部"
                options={ROLE_TYPE_OPTIONS}
              />
            </Form.Item>
          </Col>
          <Col span={colSpan}>
            <Form.Item label="分配范围" field="assignScope">
              <Select
                allowClear
                placeholder="全部"
                options={ASSIGN_SCOPE_OPTIONS}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={styles['right-button']}>
        <Button
          type="primary"
          icon={<IconSearch />}
          onClick={() =>
            props.onSearch(form.getFieldsValue() as RoleSearchValues)
          }
        >
          查询
        </Button>
        <Button
          icon={<IconRefresh />}
          onClick={() => {
            form.resetFields();
            props.onSearch({});
          }}
        >
          重置
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
