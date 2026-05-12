import React, { useContext } from 'react';
import { Form, Input, Select, Button, Grid } from '@arco-design/web-react';
import { GlobalContext } from '@/context';
import useLocale from '@/utils/useLocale';
import { IconRefresh, IconSearch } from '@arco-design/web-react/icon';
import locale from './locale';
import ArcoSelectInputIds, {
  arcoSelectPrimaryInputId,
} from './ArcoSelectInputIds';
import styles from './style/index.module.less';

const { Row, Col } = Grid;
const { useForm } = Form;

const SEARCH_BUSINESS_TYPE_BASE = 'tenant-search-businessType';
const SEARCH_STATUS_BASE = 'tenant-search-status';
const SEARCH_BUSINESS_TYPE_LABEL_ID = `${SEARCH_BUSINESS_TYPE_BASE}-field-label`;
const SEARCH_STATUS_LABEL_ID = `${SEARCH_STATUS_BASE}-field-label`;

export type TenantSearchValues = {
  tenantName?: string;
  tenantCode?: string;
  businessType?: number;
  status?: number;
};

/** 与接口「无条件」一致：空串经 toListParams 会变成 undefined */
const SEARCH_FORM_INITIAL_VALUES: TenantSearchValues = {
  tenantName: '',
  tenantCode: '',
  businessType: undefined,
  status: undefined,
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
    props.onSearch({ ...SEARCH_FORM_INITIAL_VALUES });
  };

  const colSpan = lang === 'zh-CN' ? 8 : 12;

  return (
    <div className={styles['search-form-wrapper']}>
      <Form
        form={form}
        initialValues={SEARCH_FORM_INITIAL_VALUES}
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
            <div className={styles.formLikeField}>
              <label
                id={SEARCH_BUSINESS_TYPE_LABEL_ID}
                className={styles.formLikeFieldLabel}
                htmlFor={arcoSelectPrimaryInputId(SEARCH_BUSINESS_TYPE_BASE)}
              >
                {t['tenantSearch.columns.businessType']}
              </label>
              <div className={styles.formLikeFieldControl}>
                <Form.Item field="businessType" noStyle>
                  <ArcoSelectInputIds
                    baseId={SEARCH_BUSINESS_TYPE_BASE}
                    ariaLabelledBy={SEARCH_BUSINESS_TYPE_LABEL_ID}
                  >
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
                  </ArcoSelectInputIds>
                </Form.Item>
              </div>
            </div>
          </Col>
          <Col span={colSpan}>
            <div className={styles.formLikeField}>
              <label
                id={SEARCH_STATUS_LABEL_ID}
                className={styles.formLikeFieldLabel}
                htmlFor={arcoSelectPrimaryInputId(SEARCH_STATUS_BASE)}
              >
                {t['tenantSearch.columns.tenantStatus']}
              </label>
              <div className={styles.formLikeFieldControl}>
                <Form.Item field="status" noStyle>
                  <ArcoSelectInputIds
                    baseId={SEARCH_STATUS_BASE}
                    ariaLabelledBy={SEARCH_STATUS_LABEL_ID}
                  >
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
                  </ArcoSelectInputIds>
                </Form.Item>
              </div>
            </div>
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
