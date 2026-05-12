import React, { useContext } from 'react';
import { Form, Input, Select, Button, Grid } from '@arco-design/web-react';
import { GlobalContext } from '@/context';
import useLocale from '@/utils/useLocale';
import { IconRefresh, IconSearch } from '@arco-design/web-react/icon';
import locale from './locale';
import styles from './style/index.module.less';

const { Row, Col } = Grid;
const { useForm } = Form;

export type TenantSearchValues = {
  tenantName?: string;
  tenantCode?: string;
  businessType?: number;
  status?: number;
};

function SearchForm(props: { onSearch: (values: TenantSearchValues) => void }) {
  const { lang } = useContext(GlobalContext);
  const t = useLocale(locale);
  const [form] = useForm();

  const handleSubmit = () => {
    const values = form.getFieldsValue() as TenantSearchValues;
    props.onSearch(values);
  };

  const handleReset = () => {
    form.resetFields();
    props.onSearch({});
  };

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
            <Form.Item
              label={t['tenantSearch.columns.tenantName']}
              field="tenantName"
            >
              <Input
                placeholder={t['tenantSearch.form.tenantName.placeholder']}
                allowClear
              />
            </Form.Item>
          </Col>
          <Col span={colSpan}>
            <Form.Item
              label={t['tenantSearch.columns.tenantCode']}
              field="tenantCode"
            >
              <Input
                allowClear
                placeholder={t['tenantSearch.form.tenantCode.placeholder']}
              />
            </Form.Item>
          </Col>
          <Col span={colSpan}>
            <Form.Item label={t['tenantSearch.columns.businessType']}>
              <Form.Item field="businessType" noStyle>
                <Select
                  placeholder={t['tenantSearch.form.all.placeholder']}
                  allowClear
                  options={[
                    {
                      label: t['tenantSearch.businessType.system'],
                      value: 1,
                    },
                    {
                      label: t['tenantSearch.businessType.ops'],
                      value: 2,
                    },
                  ]}
                />
              </Form.Item>
            </Form.Item>
          </Col>
          <Col span={colSpan}>
            <Form.Item label={t['tenantSearch.columns.tenantStatus']}>
              <Form.Item field="status" noStyle>
                <Select
                  placeholder={t['tenantSearch.form.status.placeholder']}
                  allowClear
                  options={[
                    {
                      label: t['tenantSearch.dataStatus.normal'],
                      value: 1,
                    },
                    {
                      label: t['tenantSearch.dataStatus.deleted'],
                      value: 2,
                    },
                  ]}
                />
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={styles['right-button']}>
        <Button type="primary" icon={<IconSearch />} onClick={handleSubmit}>
          {t['tenantSearch.form.search']}
        </Button>
        <Button icon={<IconRefresh />} onClick={handleReset}>
          {t['tenantSearch.form.reset']}
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
