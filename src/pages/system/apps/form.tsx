import React, { useContext } from 'react';
import { Form, Input, Select, Button, Grid } from '@arco-design/web-react';
import { GlobalContext } from '@/context';
import useLocale from '@/utils/useLocale';
import { IconRefresh, IconSearch } from '@arco-design/web-react/icon';
import type { TenantOption } from '@/api/app';
import locale from './locale';
import ArcoSelectInputIds, {
  arcoSelectPrimaryInputId,
} from '../tenants/ArcoSelectInputIds';
import styles from '../tenants/style/index.module.less';

const { Row, Col } = Grid;
const { useForm } = Form;

export type AppSearchValues = {
  tenantId?: number;
  appCode?: string;
  pkgName?: string;
  osType?: string;
  activeStatus?: number;
  status?: number;
};

const SEARCH_FORM_INITIAL_VALUES: AppSearchValues = {
  tenantId: undefined,
  appCode: '',
  pkgName: '',
  osType: undefined,
  activeStatus: undefined,
  status: undefined,
};

const SEARCH_OS_BASE = 'app-search-osType';
const SEARCH_ACTIVE_BASE = 'app-search-activeStatus';
const SEARCH_STATUS_BASE = 'app-search-status';
const SEARCH_TENANT_BASE = 'app-search-tenantId';

function SearchForm(props: {
  onSearch: (values: AppSearchValues) => void;
  showTenantFilter: boolean;
  tenantOptions: TenantOption[];
}) {
  const { lang } = useContext(GlobalContext);
  const t = useLocale(locale);
  const [form] = useForm();

  const handleSubmit = () => {
    const values = form.getFieldsValue() as AppSearchValues;
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
          {props.showTenantFilter ? (
            <Col xs={24} sm={24} md={12} lg={colSpan}>
              <div className={styles.formLikeField}>
                <label
                  id={`${SEARCH_TENANT_BASE}-label`}
                  className={styles.formLikeFieldLabel}
                  htmlFor={arcoSelectPrimaryInputId(SEARCH_TENANT_BASE)}
                >
                  {t['appSearch.columns.tenant']}
                </label>
                <div className={styles.formLikeFieldControl}>
                  <Form.Item field="tenantId" noStyle>
                    <ArcoSelectInputIds
                      baseId={SEARCH_TENANT_BASE}
                      ariaLabelledBy={`${SEARCH_TENANT_BASE}-label`}
                    >
                      <Select
                        placeholder={t['appSearch.form.tenant.placeholder']}
                        allowClear
                        options={props.tenantOptions.map((x) => ({
                          label: `${x.tenantName} (${x.tenantCode})`,
                          value: x.id,
                        }))}
                      />
                    </ArcoSelectInputIds>
                  </Form.Item>
                </div>
              </div>
            </Col>
          ) : null}
          <Col xs={24} sm={24} md={12} lg={colSpan}>
            <Form.Item label={t['appSearch.columns.appCode']} field="appCode">
              <Input
                allowClear
                placeholder={t['appSearch.form.appCode.placeholder']}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={colSpan}>
            <Form.Item label={t['appSearch.columns.pkgName']} field="pkgName">
              <Input
                allowClear
                placeholder={t['appSearch.form.pkgName.placeholder']}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={colSpan}>
            <div className={styles.formLikeField}>
              <label
                id={`${SEARCH_OS_BASE}-label`}
                className={styles.formLikeFieldLabel}
                htmlFor={arcoSelectPrimaryInputId(SEARCH_OS_BASE)}
              >
                {t['appSearch.columns.osType']}
              </label>
              <div className={styles.formLikeFieldControl}>
                <Form.Item field="osType" noStyle>
                  <ArcoSelectInputIds
                    baseId={SEARCH_OS_BASE}
                    ariaLabelledBy={`${SEARCH_OS_BASE}-label`}
                  >
                    <Select
                      placeholder={t['appSearch.form.os.placeholder']}
                      allowClear
                      options={[
                        { label: t['appSearch.os.android'], value: 'android' },
                        { label: t['appSearch.os.ios'], value: 'ios' },
                      ]}
                    />
                  </ArcoSelectInputIds>
                </Form.Item>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={colSpan}>
            <div className={styles.formLikeField}>
              <label
                id={`${SEARCH_ACTIVE_BASE}-label`}
                className={styles.formLikeFieldLabel}
                htmlFor={arcoSelectPrimaryInputId(SEARCH_ACTIVE_BASE)}
              >
                {t['appSearch.columns.activeStatus']}
              </label>
              <div className={styles.formLikeFieldControl}>
                <Form.Item field="activeStatus" noStyle>
                  <ArcoSelectInputIds
                    baseId={SEARCH_ACTIVE_BASE}
                    ariaLabelledBy={`${SEARCH_ACTIVE_BASE}-label`}
                  >
                    <Select
                      placeholder={t['appSearch.form.activeStatus.placeholder']}
                      allowClear
                      options={[
                        {
                          label: t['appSearch.activeStatus.enabled'],
                          value: 1,
                        },
                        {
                          label: t['appSearch.activeStatus.disabled'],
                          value: 2,
                        },
                      ]}
                    />
                  </ArcoSelectInputIds>
                </Form.Item>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={colSpan}>
            <div className={styles.formLikeField}>
              <label
                id={`${SEARCH_STATUS_BASE}-label`}
                className={styles.formLikeFieldLabel}
                htmlFor={arcoSelectPrimaryInputId(SEARCH_STATUS_BASE)}
              >
                {t['appSearch.columns.status']}
              </label>
              <div className={styles.formLikeFieldControl}>
                <Form.Item field="status" noStyle>
                  <ArcoSelectInputIds
                    baseId={SEARCH_STATUS_BASE}
                    ariaLabelledBy={`${SEARCH_STATUS_BASE}-label`}
                  >
                    <Select
                      placeholder={t['appSearch.form.status.placeholder']}
                      allowClear
                      options={[
                        {
                          label: t['appSearch.dataStatus.normal'],
                          value: 1,
                        },
                        {
                          label: t['appSearch.dataStatus.deleted'],
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
          {t['appSearch.form.search']}
        </Button>
        <Button icon={<IconRefresh />} onClick={handleReset}>
          {t['appSearch.form.reset']}
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
