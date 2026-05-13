var de = Object.defineProperty,
  pe = Object.defineProperties;
var Ne = Object.getOwnPropertyDescriptors;
var X = Object.getOwnPropertySymbols;
var fe = Object.prototype.hasOwnProperty,
  he = Object.prototype.propertyIsEnumerable;
var H = (l, s, n) =>
    s in l
      ? de(l, s, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (l[s] = n),
  c = (l, s) => {
    for (var n in s || (s = {})) fe.call(s, n) && H(l, n, s[n]);
    if (X) for (var n of X(s)) he.call(s, n) && H(l, n, s[n]);
    return l;
  },
  _ = (l, s) => pe(l, Ne(s));
import {
  ae as p,
  r as m,
  j as e,
  f as xe,
  T as D,
  S as ve,
  B as j,
  Z as Ee,
  b0 as ye,
  at as Y,
  af as V,
  aK as T,
  b1 as be,
  aP as Fe,
  aT as Se,
  N as De,
  b2 as Ve,
  aH as Pe,
  M as v,
  x as Ce,
} from './vendor.3ac9a823.js';
/* empty css               */ /* empty css              */ import {
  G as Le,
  n as E,
  D as P,
  d as _e,
  e as je,
  w,
  f as Te,
  h as we,
} from './index.2a9369a5.js';
const Be = '_wrapper_18foi_1',
  Ie = '_header_18foi_5',
  Re = '_title_18foi_16',
  Ge = '_card_18foi_20';
var u = {
    wrapper: Be,
    header: Ie,
    title: Re,
    card: Ge,
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
  },
  o =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/setting/index.tsx';
const { Row: Z, Col: y } = Pe,
  { TextArea: Q } = V,
  ee = [
    { key: 'zh-CN', label: '\u4E2D\u6587' },
    { key: 'en-US', label: 'English' },
    { key: 'es-ES', label: 'Espa\xF1ol' },
  ],
  oe = '1',
  d = '2',
  Ue = 500,
  qe = Ue * 1024,
  B = 'system-config-form',
  Ae = '_input',
  le = `${B}-textarea-autosize-mirror`;
function h(l) {
  const s = l.replace(/[\[\.]/g, '_').replace(/]/g, '');
  return `${B}-${s}${Ae}`;
}
function I(l, s) {
  return `${l}.${s}`;
}
function ke() {
  typeof document != 'undefined' &&
    document.querySelectorAll('body > textarea').forEach((l) => {
      const s = window.getComputedStyle(l);
      s.position === 'absolute' &&
        s.visibility === 'hidden' &&
        s.zIndex === '-100' &&
        ((l.id = le), (l.name = le));
    });
}
const ze = {
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
function Me(l) {
  return ee.some((s) => s.key === l) ? l : 'zh-CN';
}
function Oe(l) {
  return l.data || l;
}
function R(l) {
  const s = E(l);
  return {
    logoType: s.config.logoType || d,
    logoPath: s.config.logoPath || '',
    logoSvgElement: s.config.logoSvgElement || '',
    systemName: c({}, s.config.systemName),
    companyName: c({}, s.config.companyName),
    systemDescription: c({}, s.config.systemDescription),
  };
}
function se(l) {
  return {
    logoType: l.logoType || d,
    logoPath: l.logoPath || '',
    logoSvgElement: l.logoSvgElement || '',
    systemName: c(c({}, P.config.systemName), l.systemName),
    companyName: c(c({}, P.config.companyName), l.companyName),
    systemDescription: c(
      c({}, P.config.systemDescription),
      l.systemDescription
    ),
  };
}
function $e(l) {
  return (s) => {
    const n = (s == null ? void 0 : s.trim()) || '';
    if (!n) return l.logoSvgRequired;
    if (typeof DOMParser == 'undefined') return !0;
    const f = new DOMParser().parseFromString(n, 'image/svg+xml');
    return f.querySelector('parsererror') ||
      f.documentElement.nodeName.toLowerCase() !== 'svg'
      ? l.logoSvgInvalid
      : !0;
  };
}
function Ke(l, s) {
  return s
    ? s.startsWith('http://') || s.startsWith('https://') || !l
      ? s
      : `${l.replace(/\/$/, '')}/${s.replace(/^\//, '')}`
    : '';
}
function Ze() {
  const [l] = p.useForm(),
    {
      lang: s,
      setSystemProfile: n,
      refreshSystemProfile: f,
    } = m.exports.useContext(Le),
    te = Me(s),
    t = ze[te],
    [N, C] = m.exports.useState(() => E(P)),
    [G, U] = m.exports.useState(!1),
    [ae, q] = m.exports.useState(!1),
    [A, k] = m.exports.useState(!1),
    [x, b] = m.exports.useState(d),
    [F, S] = m.exports.useState(''),
    z = m.exports.useRef(null),
    M = m.exports.useRef(null),
    L = N.logoUrl,
    O = Ke(N.obsCloudBase, N.config.logoPath),
    ie = m.exports.useMemo(
      () =>
        L
          ? [
              {
                uid: 'system-logo',
                name: N.config.logoPath || 'system-logo',
                status: A ? 'uploading' : 'done',
                url: L,
              },
            ]
          : [],
      [L, N.config.logoPath, A]
    ),
    $ = F ? _e(F) : '',
    K = async () => {
      U(!0);
      try {
        const a = E(await je()),
          i = R(a);
        C(a),
          b(i.logoType || d),
          S(i.logoSvgElement || ''),
          l.setFieldsValue(i),
          n == null || n(a),
          w(a);
      } finally {
        U(!1);
      }
    };
  m.exports.useEffect(() => {
    K();
  }, []),
    m.exports.useLayoutEffect(() => {
      ke();
    }, [x, F]),
    m.exports.useLayoutEffect(() => {
      var r, g;
      const a =
          (g = (r = z.current) == null ? void 0 : r.getRootDOMNode) == null
            ? void 0
            : g.call(r),
        i = a == null ? void 0 : a.querySelector('input[type="file"]');
      !i || ((i.id = h('logoUpload')), (i.name = 'logoUpload'));
    }, [x]);
  const ne = (a) => {
      b(a), l.setFieldValue('logoType', a);
      const i = l.getFieldValue('logoSvgElement');
      S(typeof i == 'string' ? i : '');
    },
    W = (a) => (a.size > qe ? (v.warning(t.logoSizeExceeded), !1) : !0),
    J = async (a) => {
      k(!0);
      try {
        const i = Oe(await we('logo', a)),
          r = E(
            _(c({}, N), {
              config: _(c({}, se(l.getFieldsValue())), {
                logoType: d,
                logoPath: i.objectPath || '',
              }),
              logoUrl: i.url || '',
            })
          );
        return (
          l.setFieldValue('logoType', d),
          l.setFieldValue('logoPath', i.objectPath || ''),
          b(d),
          C(r),
          n == null || n(r),
          w(r),
          v.success(t.logoUploadSuccess),
          i
        );
      } finally {
        k(!1);
      }
    },
    re = async ({ file: a, onSuccess: i, onError: r }) => {
      try {
        const g = await J(a);
        i(g);
      } catch (g) {
        r(g);
      }
    },
    ue = async (a) => {
      var r;
      const i = (r = a.target.files) == null ? void 0 : r[0];
      (a.target.value = ''), !(!i || !W(i)) && (await J(i));
    },
    me = () => {
      if (!O) {
        v.warning(t.noLogoUrl);
        return;
      }
      Ce(O), v.success(t.logoUrlCopied);
    },
    ce = (a) => {
      var i;
      a.stopPropagation(), (i = M.current) == null || i.click();
    },
    ge = async () => {
      const a = await l.validate();
      q(!0);
      try {
        const i = E(await Te(se(a))),
          r = R(i);
        C(i),
          b(r.logoType || d),
          S(r.logoSvgElement || ''),
          l.setFieldsValue(r),
          n == null || n(i),
          w(i),
          f == null || f(),
          v.success('\u7CFB\u7EDF\u914D\u7F6E\u4FDD\u5B58\u6210\u529F');
      } finally {
        q(!1);
      }
    };
  return e.exports.jsxDEV(
    xe,
    {
      loading: G,
      className: u.wrapper,
      children: [
        e.exports.jsxDEV(
          'div',
          {
            className: u.header,
            children: [
              e.exports.jsxDEV(
                'div',
                {
                  children: [
                    e.exports.jsxDEV(
                      D.Title,
                      { heading: 5, className: u.title, children: t.pageTitle },
                      void 0,
                      !1,
                      { fileName: o, lineNumber: 567, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      D.Text,
                      { type: 'secondary', children: t.pageDescription },
                      void 0,
                      !1,
                      { fileName: o, lineNumber: 570, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: o, lineNumber: 566, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                ve,
                {
                  children: [
                    e.exports.jsxDEV(
                      j,
                      {
                        icon: e.exports.jsxDEV(
                          Ee,
                          {},
                          void 0,
                          !1,
                          { fileName: o, lineNumber: 575, columnNumber: 25 },
                          this
                        ),
                        onClick: K,
                        loading: G,
                        children: t.refresh,
                      },
                      void 0,
                      !1,
                      { fileName: o, lineNumber: 575, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      j,
                      {
                        type: 'primary',
                        icon: e.exports.jsxDEV(
                          ye,
                          {},
                          void 0,
                          !1,
                          { fileName: o, lineNumber: 580, columnNumber: 19 },
                          this
                        ),
                        onClick: ge,
                        loading: ae,
                        children: t.save,
                      },
                      void 0,
                      !1,
                      { fileName: o, lineNumber: 578, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: o, lineNumber: 574, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: o, lineNumber: 565, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          p,
          {
            id: B,
            form: l,
            layout: 'vertical',
            initialValues: R(N),
            children: e.exports.jsxDEV(
              Z,
              {
                gutter: 20,
                children: [
                  e.exports.jsxDEV(
                    y,
                    {
                      span: 16,
                      children: e.exports.jsxDEV(
                        Y,
                        {
                          title: t.brandInfo,
                          bordered: !1,
                          className: u.card,
                          children: ee.map((a) => {
                            const i = I('systemName', a.key),
                              r = I('companyName', a.key),
                              g = I('systemDescription', a.key);
                            return e.exports.jsxDEV(
                              'div',
                              {
                                className: u.langBlock,
                                children: [
                                  e.exports.jsxDEV(
                                    'div',
                                    {
                                      className: u.langTitle,
                                      children: t.languageLabels[a.key],
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: o,
                                      lineNumber: 615,
                                      columnNumber: 21,
                                    },
                                    this
                                  ),
                                  e.exports.jsxDEV(
                                    Z,
                                    {
                                      gutter: 16,
                                      children: [
                                        e.exports.jsxDEV(
                                          y,
                                          {
                                            span: 12,
                                            children: e.exports.jsxDEV(
                                              p.Item,
                                              {
                                                label: t.systemName,
                                                field: i,
                                                rules: [
                                                  {
                                                    required: !0,
                                                    message:
                                                      t.systemNameRequired,
                                                  },
                                                ],
                                                children: e.exports.jsxDEV(
                                                  V,
                                                  {
                                                    id: h(i),
                                                    name: i,
                                                    placeholder:
                                                      t.systemNamePlaceholder,
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: o,
                                                    lineNumber: 630,
                                                    columnNumber: 27,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 620,
                                                columnNumber: 25,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: o,
                                            lineNumber: 619,
                                            columnNumber: 23,
                                          },
                                          this
                                        ),
                                        e.exports.jsxDEV(
                                          y,
                                          {
                                            span: 12,
                                            children: e.exports.jsxDEV(
                                              p.Item,
                                              {
                                                label: t.companyName,
                                                field: r,
                                                rules: [
                                                  {
                                                    required: !0,
                                                    message:
                                                      t.companyNameRequired,
                                                  },
                                                ],
                                                children: e.exports.jsxDEV(
                                                  V,
                                                  {
                                                    id: h(r),
                                                    name: r,
                                                    placeholder:
                                                      t.companyNamePlaceholder,
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: o,
                                                    lineNumber: 648,
                                                    columnNumber: 27,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 638,
                                                columnNumber: 25,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: o,
                                            lineNumber: 637,
                                            columnNumber: 23,
                                          },
                                          this
                                        ),
                                        e.exports.jsxDEV(
                                          y,
                                          {
                                            span: 24,
                                            children: e.exports.jsxDEV(
                                              p.Item,
                                              {
                                                label: t.systemDescription,
                                                field: g,
                                                rules: [
                                                  {
                                                    required: !0,
                                                    message:
                                                      t.systemDescriptionRequired,
                                                  },
                                                ],
                                                children: e.exports.jsxDEV(
                                                  Q,
                                                  {
                                                    id: h(g),
                                                    name: g,
                                                    autoSize: {
                                                      minRows: 2,
                                                      maxRows: 4,
                                                    },
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: o,
                                                    lineNumber: 666,
                                                    columnNumber: 27,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 656,
                                                columnNumber: 25,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: o,
                                            lineNumber: 655,
                                            columnNumber: 23,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName: o,
                                      lineNumber: 618,
                                      columnNumber: 21,
                                    },
                                    this
                                  ),
                                ],
                              },
                              a.key,
                              !0,
                              {
                                fileName: o,
                                lineNumber: 614,
                                columnNumber: 19,
                              },
                              this
                            );
                          }),
                        },
                        void 0,
                        !1,
                        { fileName: o, lineNumber: 597, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: o, lineNumber: 596, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    y,
                    {
                      span: 8,
                      children: e.exports.jsxDEV(
                        Y,
                        {
                          title: t.logoUpload,
                          bordered: !1,
                          className: u.card,
                          children: [
                            e.exports.jsxDEV(
                              p.Item,
                              {
                                label: t.logoType,
                                field: 'logoType',
                                children: [
                                  e.exports.jsxDEV(
                                    T.Group,
                                    {
                                      name: 'logoType',
                                      type: 'button',
                                      value: x,
                                      onChange: ne,
                                      children: [
                                        e.exports.jsxDEV(
                                          T,
                                          { value: oe, children: t.svgPath },
                                          void 0,
                                          !1,
                                          {
                                            fileName: o,
                                            lineNumber: 693,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                        e.exports.jsxDEV(
                                          T,
                                          { value: d, children: t.image },
                                          void 0,
                                          !1,
                                          {
                                            fileName: o,
                                            lineNumber: 694,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName: o,
                                      lineNumber: 687,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  e.exports.jsxDEV(
                                    'input',
                                    {
                                      id: h('logoType'),
                                      name: 'logoType',
                                      type: 'text',
                                      value: x,
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
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: o,
                                      lineNumber: 696,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName: o,
                                lineNumber: 686,
                                columnNumber: 15,
                              },
                              this
                            ),
                            x === oe
                              ? e.exports.jsxDEV(
                                  e.exports.Fragment,
                                  {
                                    children: [
                                      e.exports.jsxDEV(
                                        p.Item,
                                        {
                                          label: t.logoSvgElement,
                                          field: 'logoSvgElement',
                                          extra: t.logoSvgExtra,
                                          rules: [
                                            {
                                              required: !0,
                                              message: t.logoSvgRequired,
                                            },
                                            { validator: $e(t) },
                                          ],
                                          children: e.exports.jsxDEV(
                                            Q,
                                            {
                                              id: h('logoSvgElement'),
                                              name: 'logoSvgElement',
                                              value: F,
                                              autoSize: {
                                                minRows: 4,
                                                maxRows: 8,
                                              },
                                              placeholder: t.logoSvgPlaceholder,
                                              onChange: (a) => {
                                                S(a),
                                                  l.setFieldValue(
                                                    'logoSvgElement',
                                                    a
                                                  );
                                              },
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: o,
                                              lineNumber: 726,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: o,
                                          lineNumber: 717,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      e.exports.jsxDEV(
                                        'div',
                                        {
                                          className: u.svgPreviewBlock,
                                          children: [
                                            e.exports.jsxDEV(
                                              D.Text,
                                              {
                                                type: 'secondary',
                                                children: t.svgPreview,
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 739,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            e.exports.jsxDEV(
                                              'div',
                                              {
                                                className: u.svgPreviewBox,
                                                children: $
                                                  ? e.exports.jsxDEV(
                                                      'img',
                                                      {
                                                        src: $,
                                                        alt: t.svgPreview,
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: o,
                                                        lineNumber: 744,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    )
                                                  : e.exports.jsxDEV(
                                                      'span',
                                                      {
                                                        children:
                                                          t.noSvgPreview,
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: o,
                                                        lineNumber: 746,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 742,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        void 0,
                                        !0,
                                        {
                                          fileName: o,
                                          lineNumber: 738,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  !0
                                )
                              : e.exports.jsxDEV(
                                  e.exports.Fragment,
                                  {
                                    children: [
                                      e.exports.jsxDEV(
                                        'div',
                                        {
                                          className: `system-config-logo-upload ${u.logoUploadBlock}`,
                                          children: [
                                            e.exports.jsxDEV(
                                              'div',
                                              {
                                                className: u.logoUploadMain,
                                                children: [
                                                  e.exports.jsxDEV(
                                                    be,
                                                    {
                                                      ref: z,
                                                      fileList: ie,
                                                      listType: 'picture-card',
                                                      imagePreview: !0,
                                                      accept:
                                                        'image/png,image/jpeg,image/jpg,image/webp,image/svg+xml',
                                                      beforeUpload: W,
                                                      customRequest: re,
                                                      limit: 1,
                                                      showUploadList: {
                                                        previewIcon:
                                                          e.exports.jsxDEV(
                                                            'span',
                                                            {
                                                              className:
                                                                u.logoUploadActions,
                                                              style: {
                                                                position:
                                                                  'absolute',
                                                                inset: 0,
                                                                display: 'grid',
                                                                gridTemplateColumns:
                                                                  '1fr 1fr',
                                                                width: '100%',
                                                                height: '100%',
                                                                lineHeight:
                                                                  'normal',
                                                              },
                                                              children: [
                                                                e.exports.jsxDEV(
                                                                  'span',
                                                                  {
                                                                    className:
                                                                      u.logoIconButton,
                                                                    style: {
                                                                      display:
                                                                        'flex',
                                                                      alignItems:
                                                                        'center',
                                                                      justifyContent:
                                                                        'center',
                                                                      width:
                                                                        '100%',
                                                                      height:
                                                                        '100%',
                                                                    },
                                                                    onClick: ce,
                                                                    children:
                                                                      e.exports.jsxDEV(
                                                                        Fe,
                                                                        {
                                                                          className:
                                                                            u.logoReselectIcon,
                                                                        },
                                                                        void 0,
                                                                        !1,
                                                                        {
                                                                          fileName:
                                                                            o,
                                                                          lineNumber: 791,
                                                                          columnNumber: 33,
                                                                        },
                                                                        this
                                                                      ),
                                                                  },
                                                                  void 0,
                                                                  !1,
                                                                  {
                                                                    fileName: o,
                                                                    lineNumber: 780,
                                                                    columnNumber: 31,
                                                                  },
                                                                  this
                                                                ),
                                                                e.exports.jsxDEV(
                                                                  'span',
                                                                  {
                                                                    className:
                                                                      u.logoIconButton,
                                                                    style: {
                                                                      display:
                                                                        'flex',
                                                                      alignItems:
                                                                        'center',
                                                                      justifyContent:
                                                                        'center',
                                                                      width:
                                                                        '100%',
                                                                      height:
                                                                        '100%',
                                                                    },
                                                                    children:
                                                                      e.exports.jsxDEV(
                                                                        Se,
                                                                        {},
                                                                        void 0,
                                                                        !1,
                                                                        {
                                                                          fileName:
                                                                            o,
                                                                          lineNumber: 803,
                                                                          columnNumber: 33,
                                                                        },
                                                                        this
                                                                      ),
                                                                  },
                                                                  void 0,
                                                                  !1,
                                                                  {
                                                                    fileName: o,
                                                                    lineNumber: 793,
                                                                    columnNumber: 31,
                                                                  },
                                                                  this
                                                                ),
                                                              ],
                                                            },
                                                            void 0,
                                                            !0,
                                                            {
                                                              fileName: o,
                                                              lineNumber: 768,
                                                              columnNumber: 29,
                                                            },
                                                            this
                                                          ),
                                                        removeIcon: null,
                                                      },
                                                      onRemove: () => !1,
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: o,
                                                      lineNumber: 757,
                                                      columnNumber: 23,
                                                    },
                                                    this
                                                  ),
                                                  e.exports.jsxDEV(
                                                    'input',
                                                    {
                                                      ref: M,
                                                      type: 'file',
                                                      accept:
                                                        'image/png,image/jpeg,image/jpg,image/webp,image/svg+xml',
                                                      style: {
                                                        display: 'none',
                                                      },
                                                      onChange: ue,
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: o,
                                                      lineNumber: 811,
                                                      columnNumber: 23,
                                                    },
                                                    this
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              !0,
                                              {
                                                fileName: o,
                                                lineNumber: 756,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            e.exports.jsxDEV(
                                              De,
                                              {
                                                content: t.uploadTipTooltip,
                                                children: e.exports.jsxDEV(
                                                  D.Text,
                                                  {
                                                    className: u.logoUploadTip,
                                                    style: {
                                                      fontSize: 10,
                                                      lineHeight: '16px',
                                                    },
                                                    children: [
                                                      e.exports.jsxDEV(
                                                        Ve,
                                                        {
                                                          style: {
                                                            fontSize: 12,
                                                          },
                                                        },
                                                        void 0,
                                                        !1,
                                                        {
                                                          fileName: o,
                                                          lineNumber: 824,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                      t.uploadTip,
                                                    ],
                                                  },
                                                  void 0,
                                                  !0,
                                                  {
                                                    fileName: o,
                                                    lineNumber: 820,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 819,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        void 0,
                                        !0,
                                        {
                                          fileName: o,
                                          lineNumber: 753,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      e.exports.jsxDEV(
                                        p.Item,
                                        {
                                          label: t.logoPath,
                                          field: 'logoPath',
                                          rules: [
                                            {
                                              required: !0,
                                              message: t.logoPathRequired,
                                            },
                                          ],
                                          children: e.exports.jsxDEV(
                                            V,
                                            {
                                              className: u.logoPathInput,
                                              name: 'logoPath',
                                              placeholder:
                                                t.logoPathPlaceholder,
                                              readOnly: !0,
                                              style: { width: '100%' },
                                              addAfter: e.exports.jsxDEV(
                                                j,
                                                {
                                                  className:
                                                    u.logoPathCopyButton,
                                                  type: 'text',
                                                  size: 'small',
                                                  onClick: me,
                                                  style: {
                                                    whiteSpace: 'nowrap',
                                                  },
                                                  children: t.copy,
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: o,
                                                  lineNumber: 841,
                                                  columnNumber: 25,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: o,
                                              lineNumber: 834,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: o,
                                          lineNumber: 829,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  !0
                                ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: o, lineNumber: 681, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: o, lineNumber: 680, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: o, lineNumber: 595, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: o, lineNumber: 589, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: o, lineNumber: 564, columnNumber: 5 },
    this
  );
}
export { Ze as default };
