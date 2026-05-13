import React, { useContext } from 'react';
import { Button, Form, Grid, Input } from '@arco-design/web-react';
import { IconRefresh, IconSearch } from '@arco-design/web-react/icon';
import { GlobalContext } from '@/context';
import styles from './style/index.module.less';

const { Row, Col } = Grid;

export type UserSearchValues = {
  username?: string;
  userId?: number;
};

function SearchForm(props: { onSearch: (values: UserSearchValues) => void }) {
  const { lang } = useContext(GlobalContext);
  const [form] = Form.useForm();
  const colSpan = lang === 'zh-CN' ? 8 : 12;

  const submit = () =>
    props.onSearch(form.getFieldsValue() as UserSearchValues);
  const reset = () => {
    form.resetFields();
    props.onSearch({});
  };

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
            <Form.Item label="用户名" field="username">
              <Input allowClear placeholder="请输入用户名" />
            </Form.Item>
          </Col>
          <Col span={colSpan}>
            <Form.Item label="用户 ID" field="userId">
              <Input allowClear placeholder="请输入用户 ID" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={styles['right-button']}>
        <Button type="primary" icon={<IconSearch />} onClick={submit}>
          查询
        </Button>
        <Button icon={<IconRefresh />} onClick={reset}>
          重置
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
