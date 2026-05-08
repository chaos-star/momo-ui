/* eslint-disable react/react-in-jsx-scope */
import {
  Form,
  Input,
  Checkbox,
  Link,
  Button,
  Space,
} from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';
import { IconLock, IconUser, IconSafe } from '@arco-design/web-react/icon';
import { useEffect, useRef, useState } from 'react';
import useStorage from '@/utils/useStorage';
import useLocale from '@/utils/useLocale';
import { ACCESS_TOKEN_KEY, ORGANIZATION_KEY } from '@/api/request';
import { getCaptcha } from '@/api/system';
import { login as userLogin, LoginParams, LoginResult } from '@/api/user';
import { getAuthContextResource } from '@/api/auth';
import { USER_PROFILE_KEY } from '@/utils/tenant';
import locale from './locale';
import styles from './style/index.module.less';

export default function LoginForm() {
  const formRef = useRef<FormInstance>();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [captchaKey, setCaptchaKey] = useState('');
  const [captchaImage, setCaptchaImage] = useState('');
  const [loginParams, setLoginParams, removeLoginParams] =
    useStorage('loginParams');

  const t = useLocale(locale);

  const [rememberPassword, setRememberPassword] = useState(!!loginParams);

  function loadCaptcha() {
    setCaptchaLoading(true);
    getCaptcha()
      .then((captcha) => {
        setCaptchaKey(captcha.captchaKey);
        setCaptchaImage(captcha.captchaImage);
        formRef.current?.setFieldValue('captchaCode', '');
      })
      .finally(() => {
        setCaptchaLoading(false);
      });
  }

  async function afterLoginSuccess(params: LoginParams, result: LoginResult) {
    const tenantCode = result.defaultTenant?.tenantCode;

    if (!tenantCode) {
      window.location.href = '/403';
      return;
    }

    if (rememberPassword) {
      setLoginParams(JSON.stringify({ account: params.account }));
    } else {
      removeLoginParams();
    }

    localStorage.setItem(ACCESS_TOKEN_KEY, result.accessToken);
    localStorage.setItem(ORGANIZATION_KEY, tenantCode);
    localStorage.setItem(
      USER_PROFILE_KEY,
      JSON.stringify(result.profile || {})
    );
    localStorage.setItem('userStatus', 'login');

    const resource = await getAuthContextResource(tenantCode);
    localStorage.setItem(
      USER_PROFILE_KEY,
      JSON.stringify(resource.profile || result.profile || {})
    );
    const firstMenu = resource.menus?.[0];
    const defaultPath =
      firstMenu?.children?.[0]?.routerPath ||
      firstMenu?.children?.[0]?.resourcePath ||
      firstMenu?.routerPath ||
      firstMenu?.resourcePath ||
      '/dashboard/workplace';
    window.location.href = `/${tenantCode}/${defaultPath.replace(/^\/+/, '')}`;
  }

  function login(params: LoginParams) {
    setErrorMessage('');
    setLoading(true);

    userLogin({
      ...params,
      captchaKey,
    })
      .then((result) => {
        return afterLoginSuccess(params, result);
      })
      .catch((error) => {
        setErrorMessage(
          error?.message ||
            error?.response?.data?.message ||
            t['login.form.login.errMsg']
        );
        loadCaptcha();
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onSubmitClick() {
    formRef.current.validate().then((values) => {
      login(values);
    });
  }

  useEffect(() => {
    loadCaptcha();
  }, []);

  // 读取 localStorage，设置初始值
  useEffect(() => {
    const rememberPassword = !!loginParams;
    setRememberPassword(rememberPassword);
    if (formRef.current && rememberPassword) {
      const parseParams = JSON.parse(loginParams);
      formRef.current.setFieldsValue(parseParams);
    }
  }, [loginParams]);

  return (
    <div className={styles['login-form-wrapper']}>
      <div className={styles['login-form-title']}>{t['login.form.title']}</div>
      <div className={styles['login-form-sub-title']}>
        {t['login.form.title']}
      </div>
      <div className={styles['login-form-error-msg']}>{errorMessage}</div>
      <Form
        className={styles['login-form']}
        layout="vertical"
        ref={formRef}
        initialValues={{ account: 'operator', password: 'Aa123!@#' }}
      >
        <Form.Item
          field="account"
          rules={[{ required: true, message: t['login.form.userName.errMsg'] }]}
        >
          <Input
            prefix={<IconUser />}
            placeholder={t['login.form.userName.placeholder']}
            onPressEnter={onSubmitClick}
          />
        </Form.Item>
        <Form.Item
          field="password"
          rules={[{ required: true, message: t['login.form.password.errMsg'] }]}
        >
          <Input.Password
            prefix={<IconLock />}
            placeholder={t['login.form.password.placeholder']}
            onPressEnter={onSubmitClick}
          />
        </Form.Item>
        <Form.Item>
          <div className={styles['login-form-captcha-row']}>
            <Form.Item
              field="captchaCode"
              rules={[
                { required: true, message: t['login.form.captcha.errMsg'] },
              ]}
              noStyle
            >
              <Input
                className={styles['login-form-captcha-input']}
                prefix={<IconSafe />}
                maxLength={5}
                placeholder={t['login.form.captcha.placeholder']}
                onPressEnter={onSubmitClick}
              />
            </Form.Item>
            <Button
              type="text"
              loading={captchaLoading}
              className={styles['login-form-captcha-btn']}
              onClick={loadCaptcha}
            >
              {captchaImage ? (
                <img
                  className={styles['login-form-captcha-image']}
                  src={captchaImage}
                  alt="captcha"
                />
              ) : (
                t['login.form.captcha.refresh']
              )}
            </Button>
          </div>
        </Form.Item>
        <Space size={16} direction="vertical">
          <div className={styles['login-form-password-actions']}>
            <Checkbox checked={rememberPassword} onChange={setRememberPassword}>
              {t['login.form.rememberPassword']}
            </Checkbox>
            <Link>{t['login.form.forgetPassword']}</Link>
          </div>
          <Button type="primary" long onClick={onSubmitClick} loading={loading}>
            {t['login.form.login']}
          </Button>
          <Button
            type="text"
            long
            className={styles['login-form-register-btn']}
          >
            {t['login.form.register']}
          </Button>
        </Space>
      </Form>
    </div>
  );
}
