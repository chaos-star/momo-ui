import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import {
  Button,
  Card,
  Form,
  Grid,
  Input,
  Message,
  Space,
  Spin,
  Tooltip,
  Typography,
  Upload,
} from '@arco-design/web-react';
import type {
  RequestOptions,
  UploadInstance,
  UploadItem,
} from '@arco-design/web-react/es/Upload/interface';
import {
  IconEdit,
  IconEye,
  IconQuestionCircle,
  IconRefresh,
  IconSave,
} from '@arco-design/web-react/icon';
import copy from 'copy-to-clipboard';
import { GlobalContext } from '@/context';
import {
  getManageSystemConfig,
  updateManageSystemConfig,
  uploadSystemImage,
} from '@/api/system';
import {
  DEFAULT_SYSTEM_PROFILE,
  SystemConfigJson,
  SystemConfigProfile,
  SystemLanguage,
  normalizeSystemProfile,
  writeSystemProfile,
} from '@/utils/systemConfig';
import styles from './style/index.module.less';

const { Row, Col } = Grid;
const { TextArea } = Input;

const LANGUAGES: { key: SystemLanguage; label: string }[] = [
  { key: 'zh-CN', label: '中文' },
  { key: 'en-US', label: 'English' },
  { key: 'es-ES', label: 'Español' },
];

type FormValues = {
  logoPath?: string;
  systemName?: Partial<Record<SystemLanguage, string>>;
  companyName?: Partial<Record<SystemLanguage, string>>;
  systemDescription?: Partial<Record<SystemLanguage, string>>;
};

type LogoUploadResult = {
  objectPath?: string;
  url?: string;
  data?: {
    objectPath?: string;
    url?: string;
  };
};

function normalizeLogoUploadResult(result: LogoUploadResult) {
  return result.data || result;
}

function profileToFormValues(profile: SystemConfigProfile): FormValues {
  const normalized = normalizeSystemProfile(profile);
  return {
    logoPath: normalized.config.logoPath || '',
    systemName: { ...normalized.config.systemName },
    companyName: { ...normalized.config.companyName },
    systemDescription: { ...normalized.config.systemDescription },
  };
}

function valuesToConfig(values: FormValues): SystemConfigJson {
  return {
    logoPath: values.logoPath || '',
    systemName: {
      ...DEFAULT_SYSTEM_PROFILE.config.systemName,
      ...values.systemName,
    },
    companyName: {
      ...DEFAULT_SYSTEM_PROFILE.config.companyName,
      ...values.companyName,
    },
    systemDescription: {
      ...DEFAULT_SYSTEM_PROFILE.config.systemDescription,
      ...values.systemDescription,
    },
  };
}

function joinUrl(baseUrl?: string, objectPath?: string) {
  if (!objectPath) {
    return '';
  }
  if (objectPath.startsWith('http://') || objectPath.startsWith('https://')) {
    return objectPath;
  }
  if (!baseUrl) {
    return objectPath;
  }
  return `${baseUrl.replace(/\/$/, '')}/${objectPath.replace(/^\//, '')}`;
}

function SystemConfigPage() {
  const [form] = Form.useForm<FormValues>();
  const { lang, setSystemProfile, refreshSystemProfile } =
    useContext(GlobalContext);
  const [profile, setProfile] = useState<SystemConfigProfile>(() =>
    normalizeSystemProfile(DEFAULT_SYSTEM_PROFILE)
  );
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const uploadRef = useRef<
    UploadInstance & { getRootDOMNode?: () => HTMLElement | null }
  >(null);

  const currentLogoUrl = profile.logoUrl;
  const currentLang = lang || 'zh-CN';
  const logoFullUrl = joinUrl(profile.obsCloudBase, profile.config.logoPath);
  const logoFileList = useMemo<UploadItem[]>(
    () =>
      currentLogoUrl
        ? [
            {
              uid: 'system-logo',
              name: profile.config.logoPath || 'system-logo',
              status: uploading ? 'uploading' : 'done',
              url: currentLogoUrl,
            },
          ]
        : [],
    [currentLogoUrl, profile.config.logoPath, uploading]
  );

  const previewConfig = useMemo(
    () => valuesToConfig(form.getFieldsValue() as FormValues),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [profile, uploading, saving]
  );

  const loadConfig = async () => {
    setLoading(true);
    try {
      const result = normalizeSystemProfile(await getManageSystemConfig());
      setProfile(result);
      form.setFieldsValue(profileToFormValues(result));
      setSystemProfile?.(result);
      writeSystemProfile(result);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUploadLogo = async ({
    file,
    onSuccess,
    onError,
  }: RequestOptions) => {
    setUploading(true);
    try {
      const uploadResult = normalizeLogoUploadResult(
        await uploadSystemImage('logo', file)
      );
      const nextProfile = normalizeSystemProfile({
        ...profile,
        config: {
          ...valuesToConfig(form.getFieldsValue() as FormValues),
          logoPath: uploadResult.objectPath || '',
        },
        logoUrl: uploadResult.url || '',
      });
      form.setFieldValue('logoPath', uploadResult.objectPath || '');
      setProfile(nextProfile);
      onSuccess(uploadResult);
      Message.success('Logo 上传成功');
    } catch (error) {
      onError(error as object);
    } finally {
      setUploading(false);
    }
  };

  const handleCopyLogoUrl = () => {
    if (!logoFullUrl) {
      Message.warning('暂无可复制的 Logo 地址');
      return;
    }
    copy(logoFullUrl);
    Message.success('Logo 地址已复制');
  };

  const handleReselectLogo = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const uploadRoot = uploadRef.current?.getRootDOMNode?.();
    uploadRoot?.querySelector<HTMLInputElement>('input[type="file"]')?.click();
  };

  const handleSave = async () => {
    const values = await form.validate();
    setSaving(true);
    try {
      const result = normalizeSystemProfile(
        await updateManageSystemConfig(valuesToConfig(values))
      );
      setProfile(result);
      form.setFieldsValue(profileToFormValues(result));
      setSystemProfile?.(result);
      writeSystemProfile(result);
      refreshSystemProfile?.();
      Message.success('系统配置保存成功');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Spin loading={loading} className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <Typography.Title heading={5} className={styles.title}>
            系统配置
          </Typography.Title>
          <Typography.Text type="secondary">
            统一维护登录页、导航栏、页脚展示的系统名称、公司名称、描述与 Logo。
          </Typography.Text>
        </div>
        <Space>
          <Button icon={<IconRefresh />} onClick={loadConfig} loading={loading}>
            刷新
          </Button>
          <Button
            type="primary"
            icon={<IconSave />}
            onClick={handleSave}
            loading={saving}
          >
            保存配置
          </Button>
        </Space>
      </div>

      <Form
        form={form}
        layout="vertical"
        initialValues={profileToFormValues(profile)}
      >
        <Row gutter={20}>
          <Col span={16}>
            <Card
              title="多语言品牌信息"
              bordered={false}
              className={styles.card}
            >
              {LANGUAGES.map((item) => (
                <div className={styles.langBlock} key={item.key}>
                  <div className={styles.langTitle}>{item.label}</div>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="系统名称"
                        field={`systemName.${item.key}`}
                        rules={[{ required: true, message: '请输入系统名称' }]}
                      >
                        <Input placeholder="请输入系统名称" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="公司名称"
                        field={`companyName.${item.key}`}
                        rules={[{ required: true, message: '请输入公司名称' }]}
                      >
                        <Input placeholder="请输入公司名称" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="系统描述"
                        field={`systemDescription.${item.key}`}
                        rules={[{ required: true, message: '请输入系统描述' }]}
                      >
                        <TextArea autoSize={{ minRows: 2, maxRows: 4 }} />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              ))}
            </Card>
          </Col>

          <Col span={8}>
            <Card title="Logo 上传" bordered={false} className={styles.card}>
              <div
                className={`system-config-logo-upload ${styles.logoUploadBlock}`}
              >
                <div className={styles.logoUploadMain}>
                  <Upload
                    ref={uploadRef}
                    fileList={logoFileList}
                    listType="picture-card"
                    imagePreview
                    accept="image/png,image/jpeg,image/jpg,image/webp,image/svg+xml"
                    customRequest={handleUploadLogo}
                    limit={1}
                    showUploadList={{
                      previewIcon: (
                        <span
                          className={styles.logoUploadActions}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            width: '100%',
                            height: '100%',
                            lineHeight: 'normal',
                          }}
                        >
                          <span
                            className={styles.logoIconButton}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                            }}
                            onClick={handleReselectLogo}
                          >
                            <IconEdit className={styles.logoReselectIcon} />
                          </span>
                          <span
                            className={styles.logoIconButton}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '100%',
                              height: '100%',
                            }}
                          >
                            <IconEye />
                          </span>
                        </span>
                      ),
                      removeIcon: null,
                    }}
                    onRemove={() => false}
                  />
                </div>
                <Tooltip content="支持 PNG、JPG、WebP、SVG 格式">
                  <Typography.Text
                    className={styles.logoUploadTip}
                    style={{ fontSize: 10, lineHeight: '16px' }}
                  >
                    <IconQuestionCircle style={{ fontSize: 12 }} />
                    支持 PNG / JPG / WebP / SVG，建议使用透明背景 Logo
                  </Typography.Text>
                </Tooltip>
              </div>
              <Form.Item label="Logo 地址" field="logoPath">
                <Input
                  placeholder="上传后自动写入 system/ 目录地址"
                  readOnly
                  afterStyle={{
                    marginLeft: 8,
                    padding: 0,
                    border: 0,
                    background: 'transparent',
                  }}
                  addAfter={
                    <Button
                      type="text"
                      size="small"
                      onClick={handleCopyLogoUrl}
                    >
                      复制
                    </Button>
                  }
                />
              </Form.Item>
            </Card>

            <Card title="当前语言预览" bordered={false} className={styles.card}>
              <div className={styles.previewItem}>
                <span>语言</span>
                <strong>{currentLang}</strong>
              </div>
              <div className={styles.previewItem}>
                <span>系统名称</span>
                <strong>{previewConfig.systemName?.[currentLang]}</strong>
              </div>
              <div className={styles.previewItem}>
                <span>公司名称</span>
                <strong>{previewConfig.companyName?.[currentLang]}</strong>
              </div>
              <pre className={styles.jsonPreview}>
                {JSON.stringify(previewConfig, null, 2)}
              </pre>
            </Card>
          </Col>
        </Row>
      </Form>
    </Spin>
  );
}

export default SystemConfigPage;
