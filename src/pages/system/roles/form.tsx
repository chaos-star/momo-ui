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
};

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
                options={[
                  { label: '平台角色', value: 'PLATFORM' },
                  { label: '租户角色', value: 'TENANT' },
                  { label: '自定义角色', value: 'CUSTOM' },
                ]}
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
