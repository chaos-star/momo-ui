import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Button,
  Card,
  Form,
  Grid,
  Input,
  Message,
  Radio,
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
  SystemLogoType,
  normalizeSystemProfile,
  svgElementToDataUrl,
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

const LOGO_TYPE_SVG: SystemLogoType = '1';
const LOGO_TYPE_IMAGE: SystemLogoType = '2';
const FORM_ID = 'system-config-form';
const FORM_INPUT_ID_SUFFIX = '_input';
const TEXTAREA_MIRROR_ID = `${FORM_ID}-textarea-autosize-mirror`;

function getFormControlId(field: string) {
  const normalizedField = field.replace(/[\[\.]/g, '_').replace(/]/g, '');
  return `${FORM_ID}-${normalizedField}${FORM_INPUT_ID_SUFFIX}`;
}

function getLocaleField(
  field: 'systemName' | 'companyName' | 'systemDescription',
  lang: SystemLanguage
) {
  return `${field}.${lang}`;
}

function patchTextareaMirrorAttributes() {
  if (typeof document === 'undefined') {
    return;
  }

  document
    .querySelectorAll<HTMLTextAreaElement>('body > textarea')
    .forEach((node) => {
      const style = window.getComputedStyle(node);

      if (
        style.position === 'absolute' &&
        style.visibility === 'hidden' &&
        style.zIndex === '-100'
      ) {
        node.id = TEXTAREA_MIRROR_ID;
        node.name = TEXTAREA_MIRROR_ID;
      }
    });
}

const TEXT: Record<
  SystemLanguage,
  {
    pageTitle: string;
    pageDescription: string;
    refresh: string;
    save: string;
    brandInfo: string;
    languageLabels: Record<SystemLanguage, string>;
    systemName: string;
    companyName: string;
    systemDescription: string;
    systemNameRequired: string;
    companyNameRequired: string;
    systemDescriptionRequired: string;
    systemNamePlaceholder: string;
    companyNamePlaceholder: string;
    logoUpload: string;
    logoType: string;
    svgPath: string;
    image: string;
    logoSvgElement: string;
    logoSvgExtra: string;
    logoSvgRequired: string;
    logoSvgInvalid: string;
    logoSvgPlaceholder: string;
    svgPreview: string;
    noSvgPreview: string;
    uploadTipTooltip: string;
    uploadTip: string;
    logoPath: string;
    logoPathRequired: string;
    logoPathPlaceholder: string;
    copy: string;
    noLogoUrl: string;
    logoUrlCopied: string;
    logoUploadSuccess: string;
    saveSuccess: string;
  }
> = {
  'zh-CN': {
    pageTitle: '系统设置',
    pageDescription:
      '统一维护登录页、导航栏、页脚展示的系统名称、公司名称、描述与 Logo。',
    refresh: '刷新',
    save: '保存设置',
    brandInfo: '多语言品牌信息',
    languageLabels: {
      'zh-CN': '中文',
      'en-US': '英文',
      'es-ES': '西语',
    },
    systemName: '系统名称',
    companyName: '公司名称',
    systemDescription: '系统描述',
    systemNameRequired: '请输入系统名称',
    companyNameRequired: '请输入公司名称',
    systemDescriptionRequired: '请输入系统描述',
    systemNamePlaceholder: '请输入系统名称',
    companyNamePlaceholder: '请输入公司名称',
    logoUpload: 'Logo 上传',
    logoType: 'Logo 形式',
    svgPath: 'SVG 路径',
    image: '图片',
    logoSvgElement: 'Logo SVGElement',
    logoSvgExtra:
      '填写完整 <svg>...</svg> 内容后，将用于系统 Logo 与 Favicon。',
    logoSvgRequired: '请输入 Logo SVGElement',
    logoSvgInvalid: '请输入合法的 SVGElement',
    logoSvgPlaceholder:
      '请输入完整 SVGElement，例如 <svg viewBox="0 0 32 32">...</svg>',
    svgPreview: 'SVG 预览',
    noSvgPreview: '暂无 SVG 预览',
    uploadTipTooltip: '支持 PNG、JPG、WebP、SVG 格式',
    uploadTip: '支持 PNG / JPG / WebP / SVG，建议使用透明背景 Logo',
    logoPath: 'Logo 地址',
    logoPathRequired: '请上传 Logo 图片',
    logoPathPlaceholder: '上传后自动写入 system/ 目录地址',
    copy: '复制',
    noLogoUrl: '暂无可复制的 Logo 地址',
    logoUrlCopied: 'Logo 地址已复制',
    logoUploadSuccess: 'Logo 上传成功',
    saveSuccess: '系统设置保存成功',
  },
  'en-US': {
    pageTitle: 'System Settings',
    pageDescription:
      'Manage the system name, company name, description, and Logo shown on the login page, navigation bar, and footer.',
    refresh: 'Refresh',
    save: 'Save settings',
    brandInfo: 'Multilingual brand information',
    languageLabels: {
      'zh-CN': 'Chinese',
      'en-US': 'English',
      'es-ES': 'Spanish',
    },
    systemName: 'System name',
    companyName: 'Company name',
    systemDescription: 'System description',
    systemNameRequired: 'Please enter the system name',
    companyNameRequired: 'Please enter the company name',
    systemDescriptionRequired: 'Please enter the system description',
    systemNamePlaceholder: 'Please enter the system name',
    companyNamePlaceholder: 'Please enter the company name',
    logoUpload: 'Logo upload',
    logoType: 'Logo type',
    svgPath: 'SVG path',
    image: 'Image',
    logoSvgElement: 'Logo SVGElement',
    logoSvgExtra:
      'Enter the full <svg>...</svg> content for the system Logo and Favicon.',
    logoSvgRequired: 'Please enter Logo SVGElement',
    logoSvgInvalid: 'Please enter a valid SVGElement',
    logoSvgPlaceholder:
      'Enter a complete SVGElement, for example <svg viewBox="0 0 32 32">...</svg>',
    svgPreview: 'SVG preview',
    noSvgPreview: 'No SVG preview',
    uploadTipTooltip: 'PNG, JPG, WebP, and SVG are supported',
    uploadTip:
      'PNG / JPG / WebP / SVG are supported. A transparent background Logo is recommended.',
    logoPath: 'Logo path',
    logoPathRequired: 'Please upload a Logo image',
    logoPathPlaceholder:
      'The system/ path will be filled in automatically after upload',
    copy: 'Copy',
    noLogoUrl: 'No Logo URL to copy',
    logoUrlCopied: 'Logo URL copied',
    logoUploadSuccess: 'Logo uploaded successfully',
    saveSuccess: 'System settings saved successfully',
  },
  'es-ES': {
    pageTitle: 'Configuración del sistema',
    pageDescription:
      'Administra el nombre del sistema, la empresa, la descripción y el Logo que se muestran en la página de inicio de sesión, la barra de navegación y el pie de página.',
    refresh: 'Actualizar',
    save: 'Guardar configuración',
    brandInfo: 'Información de marca multilingüe',
    languageLabels: {
      'zh-CN': 'Chino',
      'en-US': 'Inglés',
      'es-ES': 'Español',
    },
    systemName: 'Nombre del sistema',
    companyName: 'Nombre de la empresa',
    systemDescription: 'Descripción del sistema',
    systemNameRequired: 'Introduce el nombre del sistema',
    companyNameRequired: 'Introduce el nombre de la empresa',
    systemDescriptionRequired: 'Introduce la descripción del sistema',
    systemNamePlaceholder: 'Introduce el nombre del sistema',
    companyNamePlaceholder: 'Introduce el nombre de la empresa',
    logoUpload: 'Subida de Logo',
    logoType: 'Tipo de Logo',
    svgPath: 'Ruta SVG',
    image: 'Imagen',
    logoSvgElement: 'Logo SVGElement',
    logoSvgExtra:
      'Introduce el contenido completo <svg>...</svg> para el Logo del sistema y el Favicon.',
    logoSvgRequired: 'Introduce el Logo SVGElement',
    logoSvgInvalid: 'Introduce un SVGElement válido',
    logoSvgPlaceholder:
      'Introduce un SVGElement completo, por ejemplo <svg viewBox="0 0 32 32">...</svg>',
    svgPreview: 'Vista previa SVG',
    noSvgPreview: 'Sin vista previa SVG',
    uploadTipTooltip: 'Se admiten PNG, JPG, WebP y SVG',
    uploadTip:
      'Se admiten PNG / JPG / WebP / SVG. Se recomienda un Logo con fondo transparente.',
    logoPath: 'Ruta del Logo',
    logoPathRequired: 'Sube una imagen de Logo',
    logoPathPlaceholder:
      'La ruta system/ se completará automáticamente después de la subida',
    copy: 'Copiar',
    noLogoUrl: 'No hay URL de Logo para copiar',
    logoUrlCopied: 'URL de Logo copiada',
    logoUploadSuccess: 'Logo subido correctamente',
    saveSuccess: 'Configuración del sistema guardada correctamente',
  },
};

function getCurrentLang(lang?: string): SystemLanguage {
  return LANGUAGES.some((item) => item.key === lang)
    ? (lang as SystemLanguage)
    : 'zh-CN';
}

type LocaleText = typeof TEXT[SystemLanguage];

type FormValues = {
  logoType?: SystemLogoType;
  logoPath?: string;
  logoSvgElement?: string;
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
    logoType: normalized.config.logoType || LOGO_TYPE_IMAGE,
    logoPath: normalized.config.logoPath || '',
    logoSvgElement: normalized.config.logoSvgElement || '',
    systemName: { ...normalized.config.systemName },
    companyName: { ...normalized.config.companyName },
    systemDescription: { ...normalized.config.systemDescription },
  };
}

function valuesToConfig(values: FormValues): SystemConfigJson {
  const logoType = values.logoType || LOGO_TYPE_IMAGE;

  return {
    logoType,
    logoPath: values.logoPath || '',
    logoSvgElement: values.logoSvgElement || '',
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

function validateSvgElement(text: LocaleText) {
  return (value?: string) => {
    const svgElement = value?.trim() || '';
    if (!svgElement) {
      return text.logoSvgRequired;
    }
    if (typeof DOMParser === 'undefined') {
      return true;
    }
    const doc = new DOMParser().parseFromString(svgElement, 'image/svg+xml');
    if (
      doc.querySelector('parsererror') ||
      doc.documentElement.nodeName.toLowerCase() !== 'svg'
    ) {
      return text.logoSvgInvalid;
    }
    return true;
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
  const currentLang = getCurrentLang(lang);
  const text = TEXT[currentLang];
  const [profile, setProfile] = useState<SystemConfigProfile>(() =>
    normalizeSystemProfile(DEFAULT_SYSTEM_PROFILE)
  );
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [logoType, setLogoType] = useState<SystemLogoType>(LOGO_TYPE_IMAGE);
  const [svgPreview, setSvgPreview] = useState('');
  const uploadRef = useRef<
    UploadInstance & { getRootDOMNode?: () => HTMLElement | null }
  >(null);

  const currentLogoUrl = profile.logoUrl;
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

  const svgPreviewUrl = svgPreview ? svgElementToDataUrl(svgPreview) : '';

  const loadConfig = async () => {
    setLoading(true);
    try {
      const result = normalizeSystemProfile(await getManageSystemConfig());
      const formValues = profileToFormValues(result);
      setProfile(result);
      setLogoType(formValues.logoType || LOGO_TYPE_IMAGE);
      setSvgPreview(formValues.logoSvgElement || '');
      form.setFieldsValue(formValues);
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

  useLayoutEffect(() => {
    patchTextareaMirrorAttributes();
  }, [logoType, svgPreview]);

  useLayoutEffect(() => {
    const uploadRoot = uploadRef.current?.getRootDOMNode?.();
    const uploadInput =
      uploadRoot?.querySelector<HTMLInputElement>('input[type="file"]');

    if (!uploadInput) {
      return;
    }

    uploadInput.id = getFormControlId('logoUpload');
    uploadInput.name = 'logoUpload';
  }, [logoType]);

  const handleLogoTypeChange = (value: SystemLogoType) => {
    setLogoType(value);
    form.setFieldValue('logoType', value);
    const logoSvgElement = form.getFieldValue('logoSvgElement') || '';
    setSvgPreview(logoSvgElement);
  };

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
          logoType: LOGO_TYPE_IMAGE,
          logoPath: uploadResult.objectPath || '',
        },
        logoUrl: uploadResult.url || '',
      });
      form.setFieldValue('logoType', LOGO_TYPE_IMAGE);
      form.setFieldValue('logoPath', uploadResult.objectPath || '');
      setLogoType(LOGO_TYPE_IMAGE);
      setProfile(nextProfile);
      setSystemProfile?.(nextProfile);
      writeSystemProfile(nextProfile);
      onSuccess(uploadResult);
      Message.success(text.logoUploadSuccess);
    } catch (error) {
      onError(error as object);
    } finally {
      setUploading(false);
    }
  };

  const handleCopyLogoUrl = () => {
    if (!logoFullUrl) {
      Message.warning(text.noLogoUrl);
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
      const formValues = profileToFormValues(result);
      setProfile(result);
      setLogoType(formValues.logoType || LOGO_TYPE_IMAGE);
      setSvgPreview(formValues.logoSvgElement || '');
      form.setFieldsValue(formValues);
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
            {text.pageTitle}
          </Typography.Title>
          <Typography.Text type="secondary">
            {text.pageDescription}
          </Typography.Text>
        </div>
        <Space>
          <Button icon={<IconRefresh />} onClick={loadConfig} loading={loading}>
            {text.refresh}
          </Button>
          <Button
            type="primary"
            icon={<IconSave />}
            onClick={handleSave}
            loading={saving}
          >
            {text.save}
          </Button>
        </Space>
      </div>

      <Form
        id={FORM_ID}
        form={form}
        layout="vertical"
        initialValues={profileToFormValues(profile)}
      >
        <Row gutter={20}>
          <Col span={16}>
            <Card
              title={text.brandInfo}
              bordered={false}
              className={styles.card}
            >
              {LANGUAGES.map((item) => {
                const systemNameField = getLocaleField('systemName', item.key);
                const companyNameField = getLocaleField(
                  'companyName',
                  item.key
                );
                const systemDescriptionField = getLocaleField(
                  'systemDescription',
                  item.key
                );

                return (
                  <div className={styles.langBlock} key={item.key}>
                    <div className={styles.langTitle}>
                      {text.languageLabels[item.key]}
                    </div>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          label={text.systemName}
                          field={systemNameField}
                          rules={[
                            {
                              required: true,
                              message: text.systemNameRequired,
                            },
                          ]}
                        >
                          <Input
                            id={getFormControlId(systemNameField)}
                            name={systemNameField}
                            placeholder={text.systemNamePlaceholder}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label={text.companyName}
                          field={companyNameField}
                          rules={[
                            {
                              required: true,
                              message: text.companyNameRequired,
                            },
                          ]}
                        >
                          <Input
                            id={getFormControlId(companyNameField)}
                            name={companyNameField}
                            placeholder={text.companyNamePlaceholder}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label={text.systemDescription}
                          field={systemDescriptionField}
                          rules={[
                            {
                              required: true,
                              message: text.systemDescriptionRequired,
                            },
                          ]}
                        >
                          <TextArea
                            id={getFormControlId(systemDescriptionField)}
                            name={systemDescriptionField}
                            autoSize={{ minRows: 2, maxRows: 4 }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title={text.logoUpload}
              bordered={false}
              className={styles.card}
            >
              <Form.Item label={text.logoType} field="logoType">
                <Radio.Group
                  name="logoType"
                  type="button"
                  value={logoType}
                  onChange={handleLogoTypeChange}
                >
                  <Radio value={LOGO_TYPE_SVG}>{text.svgPath}</Radio>
                  <Radio value={LOGO_TYPE_IMAGE}>{text.image}</Radio>
                </Radio.Group>
                <input
                  id={getFormControlId('logoType')}
                  name="logoType"
                  type="text"
                  value={logoType}
                  readOnly
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: 1,
                    height: 1,
                    opacity: 0,
                    pointerEvents: 'none',
                  }}
                />
              </Form.Item>

              {logoType === LOGO_TYPE_SVG ? (
                <>
                  <Form.Item
                    label={text.logoSvgElement}
                    field="logoSvgElement"
                    extra={text.logoSvgExtra}
                    rules={[
                      { required: true, message: text.logoSvgRequired },
                      { validator: validateSvgElement(text) },
                    ]}
                  >
                    <TextArea
                      id={getFormControlId('logoSvgElement')}
                      name="logoSvgElement"
                      value={svgPreview}
                      autoSize={{ minRows: 4, maxRows: 8 }}
                      placeholder={text.logoSvgPlaceholder}
                      onChange={(value) => {
                        setSvgPreview(value);
                        form.setFieldValue('logoSvgElement', value);
                      }}
                    />
                  </Form.Item>
                  <div className={styles.svgPreviewBlock}>
                    <Typography.Text type="secondary">
                      {text.svgPreview}
                    </Typography.Text>
                    <div className={styles.svgPreviewBox}>
                      {svgPreviewUrl ? (
                        <img src={svgPreviewUrl} alt={text.svgPreview} />
                      ) : (
                        <span>{text.noSvgPreview}</span>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
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
                    <Tooltip content={text.uploadTipTooltip}>
                      <Typography.Text
                        className={styles.logoUploadTip}
                        style={{ fontSize: 10, lineHeight: '16px' }}
                      >
                        <IconQuestionCircle style={{ fontSize: 12 }} />
                        {text.uploadTip}
                      </Typography.Text>
                    </Tooltip>
                  </div>
                  <Form.Item
                    label={text.logoPath}
                    field="logoPath"
                    rules={[{ required: true, message: text.logoPathRequired }]}
                  >
                    <Input
                      id={getFormControlId('logoPath')}
                      name="logoPath"
                      placeholder={text.logoPathPlaceholder}
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
                          {text.copy}
                        </Button>
                      }
                    />
                  </Form.Item>
                </>
              )}
            </Card>
          </Col>
        </Row>
      </Form>
    </Spin>
  );
}

export default SystemConfigPage;
