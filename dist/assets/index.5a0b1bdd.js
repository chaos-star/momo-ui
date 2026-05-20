var me = Object.defineProperty,
  ye = Object.defineProperties;
var he = Object.getOwnPropertyDescriptors;
var X = Object.getOwnPropertySymbols;
var Fe = Object.prototype.hasOwnProperty,
  fe = Object.prototype.propertyIsEnumerable;
var Y = (e, o, s) =>
    o in e
      ? me(e, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[o] = s),
  c = (e, o) => {
    for (var s in o || (o = {})) Fe.call(o, s) && Y(e, s, o[s]);
    if (X) for (var s of X(o)) fe.call(o, s) && Y(e, s, o[s]);
    return e;
  },
  T = (e, o) => ye(e, he(o));
import {
  ag as m,
  r as g,
  a as r,
  h as ve,
  j as a,
  T as L,
  S as Ee,
  B,
  $ as Se,
  b1 as Pe,
  av as H,
  ah as N,
  aL as w,
  F as Q,
  b2 as Ce,
  aQ as xe,
  aV as Le,
  P as Ne,
  b3 as _e,
  aI as De,
  M as v,
  y as be,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css              */ import {
  G as Te,
  n as E,
  D as _,
  d as Be,
  e as we,
  w as I,
  f as Ie,
  h as Ge,
} from './index.2cec1040.js';
const Re = '_wrapper_18foi_1',
  Ue = '_header_18foi_5',
  Ve = '_title_18foi_16',
  qe = '_card_18foi_20';
var u = {
  wrapper: Re,
  header: Ue,
  title: Ve,
  card: qe,
  'lang-block': '_lang-block_18foi_25',
  'lang-title': '_lang-title_18foi_35',
  'logo-upload-block': '_logo-upload-block_18foi_41',
  'logo-upload-main': '_logo-upload-main_18foi_51',
  'logo-upload-actions': '_logo-upload-actions_18foi_58',
  'logo-icon-button': '_logo-icon-button_18foi_64',
  'logo-reselect-icon': '_logo-reselect-icon_18foi_71',
  'logo-upload-tip': '_logo-upload-tip_18foi_74',
  'logo-empty': '_logo-empty_18foi_92',
  'logo-path-row': '_logo-path-row_18foi_105',
  'logo-path-input': '_logo-path-input_18foi_111',
  'logo-path-copy-button': '_logo-path-copy-button_18foi_116',
  'svg-preview-block': '_svg-preview-block_18foi_121',
  'svg-preview-box': '_svg-preview-box_18foi_128',
};
const { Row: Z, Col: S } = De,
  { TextArea: ee } = N,
  oe = [
    { key: 'zh-CN', label: '\u4E2D\u6587' },
    { key: 'en-US', label: 'English' },
    { key: 'es-ES', label: 'Espa\xF1ol' },
  ],
  ae = '1',
  p = '2',
  Ae = 500,
  ke = Ae * 1024,
  G = 'system-config-form',
  ze = '_input',
  le = `${G}-textarea-autosize-mirror`;
function F(e) {
  const o = e.replace(/[\[\.]/g, '_').replace(/]/g, '');
  return `${G}-${o}${ze}`;
}
function R(e, o) {
  return `${e}.${o}`;
}
function Me() {
  typeof document != 'undefined' &&
    document.querySelectorAll('body > textarea').forEach((e) => {
      const o = window.getComputedStyle(e);
      o.position === 'absolute' &&
        o.visibility === 'hidden' &&
        o.zIndex === '-100' &&
        ((e.id = le), (e.name = le));
    });
}
const Oe = {
  'zh-CN': {
    pageTitle: '\u7CFB\u7EDF\u8BBE\u7F6E',
    pageDescription:
      '\u7EDF\u4E00\u7EF4\u62A4\u767B\u5F55\u9875\u3001\u5BFC\u822A\u680F\u3001\u9875\u811A\u5C55\u793A\u7684\u7CFB\u7EDF\u540D\u79F0\u3001\u516C\u53F8\u540D\u79F0\u3001\u63CF\u8FF0\u4E0E Logo\u3002',
    refresh: '\u5237\u65B0',
    save: '\u4FDD\u5B58\u8BBE\u7F6E',
    brandInfo: '\u591A\u8BED\u8A00\u54C1\u724C\u4FE1\u606F',
    languageLabels: {
      'zh-CN': '\u4E2D\u6587',
      'en-US': '\u82F1\u6587',
      'es-ES': '\u897F\u8BED',
    },
    systemName: '\u7CFB\u7EDF\u540D\u79F0',
    companyName: '\u516C\u53F8\u540D\u79F0',
    systemDescription: '\u7CFB\u7EDF\u63CF\u8FF0',
    systemNameRequired: '\u8BF7\u8F93\u5165\u7CFB\u7EDF\u540D\u79F0',
    companyNameRequired: '\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0',
    systemDescriptionRequired: '\u8BF7\u8F93\u5165\u7CFB\u7EDF\u63CF\u8FF0',
    systemNamePlaceholder: '\u8BF7\u8F93\u5165\u7CFB\u7EDF\u540D\u79F0',
    companyNamePlaceholder: '\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0',
    logoUpload: 'Logo \u4E0A\u4F20',
    logoType: 'Logo \u5F62\u5F0F',
    svgPath: 'SVG \u8DEF\u5F84',
    image: '\u56FE\u7247',
    logoSvgElement: 'Logo SVGElement',
    logoSvgExtra:
      '\u586B\u5199\u5B8C\u6574 <svg>...</svg> \u5185\u5BB9\u540E\uFF0C\u5C06\u7528\u4E8E\u7CFB\u7EDF Logo \u4E0E Favicon\u3002',
    logoSvgRequired: '\u8BF7\u8F93\u5165 Logo SVGElement',
    logoSvgInvalid: '\u8BF7\u8F93\u5165\u5408\u6CD5\u7684 SVGElement',
    logoSvgPlaceholder:
      '\u8BF7\u8F93\u5165\u5B8C\u6574 SVGElement\uFF0C\u4F8B\u5982 <svg viewBox="0 0 32 32">...</svg>',
    svgPreview: 'SVG \u9884\u89C8',
    noSvgPreview: '\u6682\u65E0 SVG \u9884\u89C8',
    uploadTipTooltip:
      '\u652F\u6301 PNG\u3001JPG\u3001WebP\u3001SVG \u683C\u5F0F\uFF0C\u6700\u5927 500KB',
    uploadTip:
      '\u652F\u6301 PNG / JPG / WebP / SVG\uFF0C\u6700\u5927 500KB\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u900F\u660E\u80CC\u666F Logo',
    logoPath: 'Logo \u5730\u5740',
    logoPathRequired: '\u8BF7\u4E0A\u4F20 Logo \u56FE\u7247',
    logoPathPlaceholder:
      '\u4E0A\u4F20\u540E\u81EA\u52A8\u5199\u5165 system/ \u76EE\u5F55\u5730\u5740',
    copy: '\u590D\u5236',
    noLogoUrl: '\u6682\u65E0\u53EF\u590D\u5236\u7684 Logo \u5730\u5740',
    logoUrlCopied: 'Logo \u5730\u5740\u5DF2\u590D\u5236',
    logoUploadSuccess: 'Logo \u4E0A\u4F20\u6210\u529F',
    logoSizeExceeded:
      'Logo \u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500KB',
    saveSuccess: '\u7CFB\u7EDF\u8BBE\u7F6E\u4FDD\u5B58\u6210\u529F',
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
    logoSizeExceeded: 'Logo image size cannot exceed 500KB',
    saveSuccess: 'System settings saved successfully',
  },
  'es-ES': {
    pageTitle: 'Configuraci\xF3n del sistema',
    pageDescription:
      'Administra el nombre del sistema, la empresa, la descripci\xF3n y el Logo que se muestran en la p\xE1gina de inicio de sesi\xF3n, la barra de navegaci\xF3n y el pie de p\xE1gina.',
    refresh: 'Actualizar',
    save: 'Guardar configuraci\xF3n',
    brandInfo: 'Informaci\xF3n de marca multiling\xFCe',
    languageLabels: {
      'zh-CN': 'Chino',
      'en-US': 'Ingl\xE9s',
      'es-ES': 'Espa\xF1ol',
    },
    systemName: 'Nombre del sistema',
    companyName: 'Nombre de la empresa',
    systemDescription: 'Descripci\xF3n del sistema',
    systemNameRequired: 'Introduce el nombre del sistema',
    companyNameRequired: 'Introduce el nombre de la empresa',
    systemDescriptionRequired: 'Introduce la descripci\xF3n del sistema',
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
    logoSvgInvalid: 'Introduce un SVGElement v\xE1lido',
    logoSvgPlaceholder:
      'Introduce un SVGElement completo, por ejemplo <svg viewBox="0 0 32 32">...</svg>',
    svgPreview: 'Vista previa SVG',
    noSvgPreview: 'Sin vista previa SVG',
    uploadTipTooltip: 'Se admiten PNG, JPG, WebP y SVG. M\xE1ximo 500KB',
    uploadTip:
      'Se admiten PNG / JPG / WebP / SVG. M\xE1ximo 500KB. Se recomienda un Logo con fondo transparente.',
    logoPath: 'Ruta del Logo',
    logoPathRequired: 'Sube una imagen de Logo',
    logoPathPlaceholder:
      'La ruta system/ se completar\xE1 autom\xE1ticamente despu\xE9s de la subida',
    copy: 'Copiar',
    noLogoUrl: 'No hay URL de Logo para copiar',
    logoUrlCopied: 'URL de Logo copiada',
    logoUploadSuccess: 'Logo subido correctamente',
    logoSizeExceeded: 'La imagen del Logo no puede superar los 500KB',
    saveSuccess: 'Configuraci\xF3n del sistema guardada correctamente',
  },
};
function $e(e) {
  return oe.some((o) => o.key === e) ? e : 'zh-CN';
}
function je(e) {
  return e.data || e;
}
function U(e) {
  const o = E(e);
  return {
    logoType: o.config.logoType || p,
    logoPath: o.config.logoPath || '',
    logoSvgElement: o.config.logoSvgElement || '',
    systemName: c({}, o.config.systemName),
    companyName: c({}, o.config.companyName),
    systemDescription: c({}, o.config.systemDescription),
  };
}
function te(e) {
  return {
    logoType: e.logoType || p,
    logoPath: e.logoPath || '',
    logoSvgElement: e.logoSvgElement || '',
    systemName: c(c({}, _.config.systemName), e.systemName),
    companyName: c(c({}, _.config.companyName), e.companyName),
    systemDescription: c(
      c({}, _.config.systemDescription),
      e.systemDescription
    ),
  };
}
function Ke(e) {
  return (o) => {
    const s = (o == null ? void 0 : o.trim()) || '';
    if (!s) return e.logoSvgRequired;
    if (typeof DOMParser == 'undefined') return !0;
    const h = new DOMParser().parseFromString(s, 'image/svg+xml');
    return h.querySelector('parsererror') ||
      h.documentElement.nodeName.toLowerCase() !== 'svg'
      ? e.logoSvgInvalid
      : !0;
  };
}
function We(e, o) {
  return o
    ? o.startsWith('http://') || o.startsWith('https://') || !e
      ? o
      : `${e.replace(/\/$/, '')}/${o.replace(/^\//, '')}`
    : '';
}
function Ze() {
  const [e] = m.useForm(),
    {
      lang: o,
      setSystemProfile: s,
      refreshSystemProfile: h,
    } = g.exports.useContext(Te),
    ne = $e(o),
    l = Oe[ne],
    [y, D] = g.exports.useState(() => E(_)),
    [V, q] = g.exports.useState(!1),
    [se, A] = g.exports.useState(!1),
    [k, z] = g.exports.useState(!1),
    [f, P] = g.exports.useState(p),
    [C, x] = g.exports.useState(''),
    M = g.exports.useRef(null),
    O = g.exports.useRef(null),
    b = y.logoUrl,
    $ = We(y.obsCloudBase, y.config.logoPath),
    ie = g.exports.useMemo(
      () =>
        b
          ? [
              {
                uid: 'system-logo',
                name: y.config.logoPath || 'system-logo',
                status: k ? 'uploading' : 'done',
                url: b,
              },
            ]
          : [],
      [b, y.config.logoPath, k]
    ),
    j = C ? Be(C) : '',
    K = async () => {
      q(!0);
      try {
        const t = E(await we()),
          n = U(t);
        D(t),
          P(n.logoType || p),
          x(n.logoSvgElement || ''),
          e.setFieldsValue(n),
          s == null || s(t),
          I(t);
      } finally {
        q(!1);
      }
    };
  g.exports.useEffect(() => {
    K();
  }, []),
    g.exports.useLayoutEffect(() => {
      Me();
    }, [f, C]),
    g.exports.useLayoutEffect(() => {
      var i, d;
      const t =
          (d = (i = M.current) == null ? void 0 : i.getRootDOMNode) == null
            ? void 0
            : d.call(i),
        n = t == null ? void 0 : t.querySelector('input[type="file"]');
      !n || ((n.id = F('logoUpload')), (n.name = 'logoUpload'));
    }, [f]);
  const ue = (t) => {
      P(t), e.setFieldValue('logoType', t);
      const n = e.getFieldValue('logoSvgElement');
      x(typeof n == 'string' ? n : '');
    },
    W = (t) => (t.size > ke ? (v.warning(l.logoSizeExceeded), !1) : !0),
    J = async (t) => {
      z(!0);
      try {
        const n = je(await Ge('logo', t)),
          i = E(
            T(c({}, y), {
              config: T(c({}, te(e.getFieldsValue())), {
                logoType: p,
                logoPath: n.objectPath || '',
              }),
              logoUrl: n.url || '',
            })
          );
        return (
          e.setFieldValue('logoType', p),
          e.setFieldValue('logoPath', n.objectPath || ''),
          P(p),
          D(i),
          s == null || s(i),
          I(i),
          v.success(l.logoUploadSuccess),
          n
        );
      } finally {
        z(!1);
      }
    },
    re = async ({ file: t, onSuccess: n, onError: i }) => {
      try {
        const d = await J(t);
        n(d);
      } catch (d) {
        i(d);
      }
    },
    ge = async (t) => {
      var i;
      const n = (i = t.target.files) == null ? void 0 : i[0];
      (t.target.value = ''), !(!n || !W(n)) && (await J(n));
    },
    ce = () => {
      if (!$) {
        v.warning(l.noLogoUrl);
        return;
      }
      be($), v.success(l.logoUrlCopied);
    },
    de = (t) => {
      var n;
      t.stopPropagation(), (n = O.current) == null || n.click();
    },
    pe = async () => {
      const t = await e.validate();
      A(!0);
      try {
        const n = E(await Ie(te(t))),
          i = U(n);
        D(n),
          P(i.logoType || p),
          x(i.logoSvgElement || ''),
          e.setFieldsValue(i),
          s == null || s(n),
          I(n),
          h == null || h(),
          v.success('\u7CFB\u7EDF\u914D\u7F6E\u4FDD\u5B58\u6210\u529F');
      } finally {
        A(!1);
      }
    };
  return r(ve, {
    loading: V,
    className: u.wrapper,
    children: [
      r('div', {
        className: u.header,
        children: [
          r('div', {
            children: [
              a(L.Title, {
                heading: 5,
                className: u.title,
                children: l.pageTitle,
              }),
              a(L.Text, { type: 'secondary', children: l.pageDescription }),
            ],
          }),
          r(Ee, {
            children: [
              a(B, {
                icon: a(Se, {}),
                onClick: K,
                loading: V,
                children: l.refresh,
              }),
              a(B, {
                type: 'primary',
                icon: a(Pe, {}),
                onClick: pe,
                loading: se,
                children: l.save,
              }),
            ],
          }),
        ],
      }),
      a(m, {
        id: G,
        form: e,
        layout: 'vertical',
        initialValues: U(y),
        children: r(Z, {
          gutter: 20,
          children: [
            a(S, {
              span: 16,
              children: a(H, {
                title: l.brandInfo,
                bordered: !1,
                className: u.card,
                children: oe.map((t) => {
                  const n = R('systemName', t.key),
                    i = R('companyName', t.key),
                    d = R('systemDescription', t.key);
                  return r(
                    'div',
                    {
                      className: u.langBlock,
                      children: [
                        a('div', {
                          className: u.langTitle,
                          children: l.languageLabels[t.key],
                        }),
                        r(Z, {
                          gutter: 16,
                          children: [
                            a(S, {
                              span: 12,
                              children: a(m.Item, {
                                label: l.systemName,
                                field: n,
                                rules: [
                                  {
                                    required: !0,
                                    message: l.systemNameRequired,
                                  },
                                ],
                                children: a(N, {
                                  id: F(n),
                                  name: n,
                                  placeholder: l.systemNamePlaceholder,
                                }),
                              }),
                            }),
                            a(S, {
                              span: 12,
                              children: a(m.Item, {
                                label: l.companyName,
                                field: i,
                                rules: [
                                  {
                                    required: !0,
                                    message: l.companyNameRequired,
                                  },
                                ],
                                children: a(N, {
                                  id: F(i),
                                  name: i,
                                  placeholder: l.companyNamePlaceholder,
                                }),
                              }),
                            }),
                            a(S, {
                              span: 24,
                              children: a(m.Item, {
                                label: l.systemDescription,
                                field: d,
                                rules: [
                                  {
                                    required: !0,
                                    message: l.systemDescriptionRequired,
                                  },
                                ],
                                children: a(ee, { id: F(d), name: d, rows: 2 }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    t.key
                  );
                }),
              }),
            }),
            a(S, {
              span: 8,
              children: r(H, {
                title: l.logoUpload,
                bordered: !1,
                className: u.card,
                children: [
                  r(m.Item, {
                    label: l.logoType,
                    field: 'logoType',
                    children: [
                      r(w.Group, {
                        name: 'logoType',
                        type: 'button',
                        value: f,
                        onChange: ue,
                        children: [
                          a(w, { value: ae, children: l.svgPath }),
                          a(w, { value: p, children: l.image }),
                        ],
                      }),
                      a('input', {
                        id: F('logoType'),
                        name: 'logoType',
                        type: 'text',
                        value: f,
                        readOnly: !0,
                        tabIndex: -1,
                        'aria-hidden': 'true',
                        style: {
                          position: 'absolute',
                          left: '-9999px',
                          width: 1,
                          height: 1,
                          opacity: 0,
                          pointerEvents: 'none',
                        },
                      }),
                    ],
                  }),
                  f === ae
                    ? r(Q, {
                        children: [
                          a(m.Item, {
                            label: l.logoSvgElement,
                            field: 'logoSvgElement',
                            extra: l.logoSvgExtra,
                            rules: [
                              { required: !0, message: l.logoSvgRequired },
                              { validator: Ke(l) },
                            ],
                            children: a(ee, {
                              id: F('logoSvgElement'),
                              name: 'logoSvgElement',
                              value: C,
                              rows: 4,
                              placeholder: l.logoSvgPlaceholder,
                              onChange: (t) => {
                                x(t), e.setFieldValue('logoSvgElement', t);
                              },
                            }),
                          }),
                          r('div', {
                            className: u.svgPreviewBlock,
                            children: [
                              a(L.Text, {
                                type: 'secondary',
                                children: l.svgPreview,
                              }),
                              a('div', {
                                className: u.svgPreviewBox,
                                children: j
                                  ? a('img', { src: j, alt: l.svgPreview })
                                  : a('span', { children: l.noSvgPreview }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : r(Q, {
                        children: [
                          r('div', {
                            className: `system-config-logo-upload ${u.logoUploadBlock}`,
                            children: [
                              r('div', {
                                className: u.logoUploadMain,
                                children: [
                                  a(Ce, {
                                    ref: M,
                                    fileList: ie,
                                    listType: 'picture-card',
                                    imagePreview: !0,
                                    accept:
                                      'image/png,image/jpeg,image/jpg,image/webp,image/svg+xml',
                                    beforeUpload: W,
                                    customRequest: re,
                                    limit: 1,
                                    showUploadList: {
                                      previewIcon: r('span', {
                                        className: u.logoUploadActions,
                                        style: {
                                          position: 'absolute',
                                          inset: 0,
                                          display: 'grid',
                                          gridTemplateColumns: '1fr 1fr',
                                          width: '100%',
                                          height: '100%',
                                          lineHeight: 'normal',
                                        },
                                        children: [
                                          a('span', {
                                            className: u.logoIconButton,
                                            style: {
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '100%',
                                              height: '100%',
                                            },
                                            onClick: de,
                                            children: a(xe, {
                                              className: u.logoReselectIcon,
                                            }),
                                          }),
                                          a('span', {
                                            className: u.logoIconButton,
                                            style: {
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '100%',
                                              height: '100%',
                                            },
                                            children: a(Le, {}),
                                          }),
                                        ],
                                      }),
                                      removeIcon: null,
                                    },
                                    onRemove: () => !1,
                                  }),
                                  a('input', {
                                    ref: O,
                                    type: 'file',
                                    accept:
                                      'image/png,image/jpeg,image/jpg,image/webp,image/svg+xml',
                                    style: { display: 'none' },
                                    onChange: ge,
                                  }),
                                ],
                              }),
                              a(Ne, {
                                content: l.uploadTipTooltip,
                                children: r(L.Text, {
                                  className: u.logoUploadTip,
                                  style: { fontSize: 10, lineHeight: '16px' },
                                  children: [
                                    a(_e, { style: { fontSize: 12 } }),
                                    l.uploadTip,
                                  ],
                                }),
                              }),
                            ],
                          }),
                          a(m.Item, {
                            label: l.logoPath,
                            field: 'logoPath',
                            rules: [
                              { required: !0, message: l.logoPathRequired },
                            ],
                            children: a(N, {
                              className: u.logoPathInput,
                              name: 'logoPath',
                              placeholder: l.logoPathPlaceholder,
                              readOnly: !0,
                              style: { width: '100%' },
                              addAfter: a(B, {
                                className: u.logoPathCopyButton,
                                type: 'text',
                                size: 'small',
                                onClick: ce,
                                style: { whiteSpace: 'nowrap' },
                                children: l.copy,
                              }),
                            }),
                          }),
                        ],
                      }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { Ze as default };
