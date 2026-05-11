var me = Object.defineProperty,
  ce = Object.defineProperties;
var de = Object.getOwnPropertyDescriptors;
var J = Object.getOwnPropertySymbols;
var ge = Object.prototype.hasOwnProperty,
  pe = Object.prototype.propertyIsEnumerable;
var H = (l, s, n) =>
    s in l
      ? me(l, s, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (l[s] = n),
  c = (l, s) => {
    for (var n in s || (s = {})) ge.call(s, n) && H(l, n, s[n]);
    if (J) for (var n of J(s)) pe.call(s, n) && H(l, n, s[n]);
    return l;
  },
  T = (l, s) => ce(l, de(s));
import {
  ae as p,
  r as d,
  j as e,
  f as Ne,
  T as D,
  S as fe,
  B as _,
  Z as he,
  aP as be,
  at as X,
  af as V,
  aK as I,
  aQ as ve,
  aR as xe,
  aS as ye,
  N as Ee,
  aT as Fe,
  aH as Se,
  M as P,
  x as De,
} from './vendor.5abf864c.js';
/* empty css               */ /* empty css              */ import {
  G as Ve,
  n as x,
  D as C,
  a as Pe,
  g as Ce,
  w as B,
  b as Le,
  c as we,
} from './index.1a6061ac.js';
const je = '_wrapper_wubbq_1',
  Te = '_header_wubbq_5',
  _e = '_title_wubbq_16',
  Ie = '_card_wubbq_20';
var m = {
    wrapper: je,
    header: Te,
    title: _e,
    card: Ie,
    'lang-block': '_lang-block_wubbq_25',
    'lang-title': '_lang-title_wubbq_35',
    'logo-upload-block': '_logo-upload-block_wubbq_41',
    'logo-upload-main': '_logo-upload-main_wubbq_51',
    'logo-upload-actions': '_logo-upload-actions_wubbq_58',
    'logo-icon-button': '_logo-icon-button_wubbq_64',
    'logo-reselect-icon': '_logo-reselect-icon_wubbq_71',
    'logo-upload-tip': '_logo-upload-tip_wubbq_74',
    'logo-empty': '_logo-empty_wubbq_92',
    'svg-preview-block': '_svg-preview-block_wubbq_105',
    'svg-preview-box': '_svg-preview-box_wubbq_112',
  },
  o =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/setting/index.tsx';
const { Row: Y, Col: y } = Se,
  { TextArea: Q } = V,
  K = [
    { key: 'zh-CN', label: '\u4E2D\u6587' },
    { key: 'en-US', label: 'English' },
    { key: 'es-ES', label: 'Espa\xF1ol' },
  ],
  Z = '1',
  g = '2',
  R = 'system-config-form',
  Be = '_input',
  ee = `${R}-textarea-autosize-mirror`;
function f(l) {
  const s = l.replace(/[\[\.]/g, '_').replace(/]/g, '');
  return `${R}-${s}${Be}`;
}
function G(l, s) {
  return `${l}.${s}`;
}
function Re() {
  typeof document != 'undefined' &&
    document.querySelectorAll('body > textarea').forEach((l) => {
      const s = window.getComputedStyle(l);
      s.position === 'absolute' &&
        s.visibility === 'hidden' &&
        s.zIndex === '-100' &&
        ((l.id = ee), (l.name = ee));
    });
}
const Ge = {
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
      '\u652F\u6301 PNG\u3001JPG\u3001WebP\u3001SVG \u683C\u5F0F',
    uploadTip:
      '\u652F\u6301 PNG / JPG / WebP / SVG\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u900F\u660E\u80CC\u666F Logo',
    logoPath: 'Logo \u5730\u5740',
    logoPathRequired: '\u8BF7\u4E0A\u4F20 Logo \u56FE\u7247',
    logoPathPlaceholder:
      '\u4E0A\u4F20\u540E\u81EA\u52A8\u5199\u5165 system/ \u76EE\u5F55\u5730\u5740',
    copy: '\u590D\u5236',
    noLogoUrl: '\u6682\u65E0\u53EF\u590D\u5236\u7684 Logo \u5730\u5740',
    logoUrlCopied: 'Logo \u5730\u5740\u5DF2\u590D\u5236',
    logoUploadSuccess: 'Logo \u4E0A\u4F20\u6210\u529F',
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
    uploadTipTooltip: 'Se admiten PNG, JPG, WebP y SVG',
    uploadTip:
      'Se admiten PNG / JPG / WebP / SVG. Se recomienda un Logo con fondo transparente.',
    logoPath: 'Ruta del Logo',
    logoPathRequired: 'Sube una imagen de Logo',
    logoPathPlaceholder:
      'La ruta system/ se completar\xE1 autom\xE1ticamente despu\xE9s de la subida',
    copy: 'Copiar',
    noLogoUrl: 'No hay URL de Logo para copiar',
    logoUrlCopied: 'URL de Logo copiada',
    logoUploadSuccess: 'Logo subido correctamente',
    saveSuccess: 'Configuraci\xF3n del sistema guardada correctamente',
  },
};
function qe(l) {
  return K.some((s) => s.key === l) ? l : 'zh-CN';
}
function Ue(l) {
  return l.data || l;
}
function q(l) {
  const s = x(l);
  return {
    logoType: s.config.logoType || g,
    logoPath: s.config.logoPath || '',
    logoSvgElement: s.config.logoSvgElement || '',
    systemName: c({}, s.config.systemName),
    companyName: c({}, s.config.companyName),
    systemDescription: c({}, s.config.systemDescription),
  };
}
function oe(l) {
  return {
    logoType: l.logoType || g,
    logoPath: l.logoPath || '',
    logoSvgElement: l.logoSvgElement || '',
    systemName: c(c({}, C.config.systemName), l.systemName),
    companyName: c(c({}, C.config.companyName), l.companyName),
    systemDescription: c(
      c({}, C.config.systemDescription),
      l.systemDescription
    ),
  };
}
function Ae(l) {
  return (s) => {
    const n = (s == null ? void 0 : s.trim()) || '';
    if (!n) return l.logoSvgRequired;
    if (typeof DOMParser == 'undefined') return !0;
    const h = new DOMParser().parseFromString(n, 'image/svg+xml');
    return h.querySelector('parsererror') ||
      h.documentElement.nodeName.toLowerCase() !== 'svg'
      ? l.logoSvgInvalid
      : !0;
  };
}
function ke(l, s) {
  return s
    ? s.startsWith('http://') || s.startsWith('https://') || !l
      ? s
      : `${l.replace(/\/$/, '')}/${s.replace(/^\//, '')}`
    : '';
}
function Je() {
  const [l] = p.useForm(),
    {
      lang: s,
      setSystemProfile: n,
      refreshSystemProfile: h,
    } = d.exports.useContext(Ve),
    le = qe(s),
    a = Ge[le],
    [N, L] = d.exports.useState(() => x(C)),
    [U, A] = d.exports.useState(!1),
    [se, k] = d.exports.useState(!1),
    [M, z] = d.exports.useState(!1),
    [v, E] = d.exports.useState(g),
    [F, S] = d.exports.useState(''),
    w = d.exports.useRef(null),
    j = N.logoUrl,
    O = ke(N.obsCloudBase, N.config.logoPath),
    ae = d.exports.useMemo(
      () =>
        j
          ? [
              {
                uid: 'system-logo',
                name: N.config.logoPath || 'system-logo',
                status: M ? 'uploading' : 'done',
                url: j,
              },
            ]
          : [],
      [j, N.config.logoPath, M]
    ),
    $ = F ? Pe(F) : '',
    W = async () => {
      A(!0);
      try {
        const t = x(await Ce()),
          i = q(t);
        L(t),
          E(i.logoType || g),
          S(i.logoSvgElement || ''),
          l.setFieldsValue(i),
          n == null || n(t),
          B(t);
      } finally {
        A(!1);
      }
    };
  d.exports.useEffect(() => {
    W();
  }, []),
    d.exports.useLayoutEffect(() => {
      Re();
    }, [v, F]),
    d.exports.useLayoutEffect(() => {
      var u, r;
      const t =
          (r = (u = w.current) == null ? void 0 : u.getRootDOMNode) == null
            ? void 0
            : r.call(u),
        i = t == null ? void 0 : t.querySelector('input[type="file"]');
      !i || ((i.id = f('logoUpload')), (i.name = 'logoUpload'));
    }, [v]);
  const te = (t) => {
      E(t), l.setFieldValue('logoType', t);
      const i = l.getFieldValue('logoSvgElement') || '';
      S(i);
    },
    ie = async ({ file: t, onSuccess: i, onError: u }) => {
      z(!0);
      try {
        const r = Ue(await Le('logo', t)),
          b = x(
            T(c({}, N), {
              config: T(c({}, oe(l.getFieldsValue())), {
                logoType: g,
                logoPath: r.objectPath || '',
              }),
              logoUrl: r.url || '',
            })
          );
        l.setFieldValue('logoType', g),
          l.setFieldValue('logoPath', r.objectPath || ''),
          E(g),
          L(b),
          n == null || n(b),
          B(b),
          i(r),
          P.success(a.logoUploadSuccess);
      } catch (r) {
        u(r);
      } finally {
        z(!1);
      }
    },
    ne = () => {
      if (!O) {
        P.warning(a.noLogoUrl);
        return;
      }
      De(O), P.success('Logo \u5730\u5740\u5DF2\u590D\u5236');
    },
    ue = (t) => {
      var u, r, b;
      t.stopPropagation();
      const i =
        (r = (u = w.current) == null ? void 0 : u.getRootDOMNode) == null
          ? void 0
          : r.call(u);
      (b = i == null ? void 0 : i.querySelector('input[type="file"]')) ==
        null || b.click();
    },
    re = async () => {
      const t = await l.validate();
      k(!0);
      try {
        const i = x(await we(oe(t))),
          u = q(i);
        L(i),
          E(u.logoType || g),
          S(u.logoSvgElement || ''),
          l.setFieldsValue(u),
          n == null || n(i),
          B(i),
          h == null || h(),
          P.success('\u7CFB\u7EDF\u914D\u7F6E\u4FDD\u5B58\u6210\u529F');
      } finally {
        k(!1);
      }
    };
  return e.exports.jsxDEV(
    Ne,
    {
      loading: U,
      className: m.wrapper,
      children: [
        e.exports.jsxDEV(
          'div',
          {
            className: m.header,
            children: [
              e.exports.jsxDEV(
                'div',
                {
                  children: [
                    e.exports.jsxDEV(
                      D.Title,
                      { heading: 5, className: m.title, children: a.pageTitle },
                      void 0,
                      !1,
                      { fileName: o, lineNumber: 519, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      D.Text,
                      { type: 'secondary', children: a.pageDescription },
                      void 0,
                      !1,
                      { fileName: o, lineNumber: 522, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: o, lineNumber: 518, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                fe,
                {
                  children: [
                    e.exports.jsxDEV(
                      _,
                      {
                        icon: e.exports.jsxDEV(
                          he,
                          {},
                          void 0,
                          !1,
                          { fileName: o, lineNumber: 527, columnNumber: 25 },
                          this
                        ),
                        onClick: W,
                        loading: U,
                        children: a.refresh,
                      },
                      void 0,
                      !1,
                      { fileName: o, lineNumber: 527, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      _,
                      {
                        type: 'primary',
                        icon: e.exports.jsxDEV(
                          be,
                          {},
                          void 0,
                          !1,
                          { fileName: o, lineNumber: 532, columnNumber: 19 },
                          this
                        ),
                        onClick: re,
                        loading: se,
                        children: a.save,
                      },
                      void 0,
                      !1,
                      { fileName: o, lineNumber: 530, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: o, lineNumber: 526, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: o, lineNumber: 517, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          p,
          {
            id: R,
            form: l,
            layout: 'vertical',
            initialValues: q(N),
            children: e.exports.jsxDEV(
              Y,
              {
                gutter: 20,
                children: [
                  e.exports.jsxDEV(
                    y,
                    {
                      span: 16,
                      children: e.exports.jsxDEV(
                        X,
                        {
                          title: a.brandInfo,
                          bordered: !1,
                          className: m.card,
                          children: K.map((t) => {
                            const i = G('systemName', t.key),
                              u = G('companyName', t.key),
                              r = G('systemDescription', t.key);
                            return e.exports.jsxDEV(
                              'div',
                              {
                                className: m.langBlock,
                                children: [
                                  e.exports.jsxDEV(
                                    'div',
                                    {
                                      className: m.langTitle,
                                      children: a.languageLabels[t.key],
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: o,
                                      lineNumber: 560,
                                      columnNumber: 21,
                                    },
                                    this
                                  ),
                                  e.exports.jsxDEV(
                                    Y,
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
                                                label: a.systemName,
                                                field: i,
                                                rules: [
                                                  {
                                                    required: !0,
                                                    message:
                                                      a.systemNameRequired,
                                                  },
                                                ],
                                                children: e.exports.jsxDEV(
                                                  V,
                                                  {
                                                    id: f(i),
                                                    name: i,
                                                    placeholder:
                                                      a.systemNamePlaceholder,
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: o,
                                                    lineNumber: 575,
                                                    columnNumber: 27,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 565,
                                                columnNumber: 25,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: o,
                                            lineNumber: 564,
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
                                                label: a.companyName,
                                                field: u,
                                                rules: [
                                                  {
                                                    required: !0,
                                                    message:
                                                      a.companyNameRequired,
                                                  },
                                                ],
                                                children: e.exports.jsxDEV(
                                                  V,
                                                  {
                                                    id: f(u),
                                                    name: u,
                                                    placeholder:
                                                      a.companyNamePlaceholder,
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: o,
                                                    lineNumber: 593,
                                                    columnNumber: 27,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 583,
                                                columnNumber: 25,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: o,
                                            lineNumber: 582,
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
                                                label: a.systemDescription,
                                                field: r,
                                                rules: [
                                                  {
                                                    required: !0,
                                                    message:
                                                      a.systemDescriptionRequired,
                                                  },
                                                ],
                                                children: e.exports.jsxDEV(
                                                  Q,
                                                  {
                                                    id: f(r),
                                                    name: r,
                                                    autoSize: {
                                                      minRows: 2,
                                                      maxRows: 4,
                                                    },
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: o,
                                                    lineNumber: 611,
                                                    columnNumber: 27,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 601,
                                                columnNumber: 25,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: o,
                                            lineNumber: 600,
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
                                      lineNumber: 563,
                                      columnNumber: 21,
                                    },
                                    this
                                  ),
                                ],
                              },
                              t.key,
                              !0,
                              {
                                fileName: o,
                                lineNumber: 559,
                                columnNumber: 19,
                              },
                              this
                            );
                          }),
                        },
                        void 0,
                        !1,
                        { fileName: o, lineNumber: 549, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: o, lineNumber: 548, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    y,
                    {
                      span: 8,
                      children: e.exports.jsxDEV(
                        X,
                        {
                          title: a.logoUpload,
                          bordered: !1,
                          className: m.card,
                          children: [
                            e.exports.jsxDEV(
                              p.Item,
                              {
                                label: a.logoType,
                                field: 'logoType',
                                children: [
                                  e.exports.jsxDEV(
                                    I.Group,
                                    {
                                      name: 'logoType',
                                      type: 'button',
                                      value: v,
                                      onChange: te,
                                      children: [
                                        e.exports.jsxDEV(
                                          I,
                                          { value: Z, children: a.svgPath },
                                          void 0,
                                          !1,
                                          {
                                            fileName: o,
                                            lineNumber: 634,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                        e.exports.jsxDEV(
                                          I,
                                          { value: g, children: a.image },
                                          void 0,
                                          !1,
                                          {
                                            fileName: o,
                                            lineNumber: 635,
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
                                      lineNumber: 628,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  e.exports.jsxDEV(
                                    'input',
                                    {
                                      id: f('logoType'),
                                      name: 'logoType',
                                      type: 'text',
                                      value: v,
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
                                      lineNumber: 637,
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
                                lineNumber: 627,
                                columnNumber: 15,
                              },
                              this
                            ),
                            v === Z
                              ? e.exports.jsxDEV(
                                  e.exports.Fragment,
                                  {
                                    children: [
                                      e.exports.jsxDEV(
                                        p.Item,
                                        {
                                          label: a.logoSvgElement,
                                          field: 'logoSvgElement',
                                          extra: a.logoSvgExtra,
                                          rules: [
                                            {
                                              required: !0,
                                              message: a.logoSvgRequired,
                                            },
                                            { validator: Ae(a) },
                                          ],
                                          children: e.exports.jsxDEV(
                                            Q,
                                            {
                                              id: f('logoSvgElement'),
                                              name: 'logoSvgElement',
                                              value: F,
                                              autoSize: {
                                                minRows: 4,
                                                maxRows: 8,
                                              },
                                              placeholder: a.logoSvgPlaceholder,
                                              onChange: (t) => {
                                                S(t),
                                                  l.setFieldValue(
                                                    'logoSvgElement',
                                                    t
                                                  );
                                              },
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: o,
                                              lineNumber: 667,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: o,
                                          lineNumber: 658,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      e.exports.jsxDEV(
                                        'div',
                                        {
                                          className: m.svgPreviewBlock,
                                          children: [
                                            e.exports.jsxDEV(
                                              D.Text,
                                              {
                                                type: 'secondary',
                                                children: a.svgPreview,
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 680,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            e.exports.jsxDEV(
                                              'div',
                                              {
                                                className: m.svgPreviewBox,
                                                children: $
                                                  ? e.exports.jsxDEV(
                                                      'img',
                                                      {
                                                        src: $,
                                                        alt: a.svgPreview,
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: o,
                                                        lineNumber: 685,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    )
                                                  : e.exports.jsxDEV(
                                                      'span',
                                                      {
                                                        children:
                                                          a.noSvgPreview,
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: o,
                                                        lineNumber: 687,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 683,
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
                                          lineNumber: 679,
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
                                          className: `system-config-logo-upload ${m.logoUploadBlock}`,
                                          children: [
                                            e.exports.jsxDEV(
                                              'div',
                                              {
                                                className: m.logoUploadMain,
                                                children: e.exports.jsxDEV(
                                                  ve,
                                                  {
                                                    ref: w,
                                                    fileList: ae,
                                                    listType: 'picture-card',
                                                    imagePreview: !0,
                                                    accept:
                                                      'image/png,image/jpeg,image/jpg,image/webp,image/svg+xml',
                                                    customRequest: ie,
                                                    limit: 1,
                                                    showUploadList: {
                                                      previewIcon:
                                                        e.exports.jsxDEV(
                                                          'span',
                                                          {
                                                            className:
                                                              m.logoUploadActions,
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
                                                                    m.logoIconButton,
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
                                                                  onClick: ue,
                                                                  children:
                                                                    e.exports.jsxDEV(
                                                                      xe,
                                                                      {
                                                                        className:
                                                                          m.logoReselectIcon,
                                                                      },
                                                                      void 0,
                                                                      !1,
                                                                      {
                                                                        fileName:
                                                                          o,
                                                                        lineNumber: 731,
                                                                        columnNumber: 33,
                                                                      },
                                                                      this
                                                                    ),
                                                                },
                                                                void 0,
                                                                !1,
                                                                {
                                                                  fileName: o,
                                                                  lineNumber: 720,
                                                                  columnNumber: 31,
                                                                },
                                                                this
                                                              ),
                                                              e.exports.jsxDEV(
                                                                'span',
                                                                {
                                                                  className:
                                                                    m.logoIconButton,
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
                                                                      ye,
                                                                      {},
                                                                      void 0,
                                                                      !1,
                                                                      {
                                                                        fileName:
                                                                          o,
                                                                        lineNumber: 743,
                                                                        columnNumber: 33,
                                                                      },
                                                                      this
                                                                    ),
                                                                },
                                                                void 0,
                                                                !1,
                                                                {
                                                                  fileName: o,
                                                                  lineNumber: 733,
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
                                                            lineNumber: 708,
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
                                                    lineNumber: 698,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 697,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            e.exports.jsxDEV(
                                              Ee,
                                              {
                                                content: a.uploadTipTooltip,
                                                children: e.exports.jsxDEV(
                                                  D.Text,
                                                  {
                                                    className: m.logoUploadTip,
                                                    style: {
                                                      fontSize: 10,
                                                      lineHeight: '16px',
                                                    },
                                                    children: [
                                                      e.exports.jsxDEV(
                                                        Fe,
                                                        {
                                                          style: {
                                                            fontSize: 12,
                                                          },
                                                        },
                                                        void 0,
                                                        !1,
                                                        {
                                                          fileName: o,
                                                          lineNumber: 757,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                      a.uploadTip,
                                                    ],
                                                  },
                                                  void 0,
                                                  !0,
                                                  {
                                                    fileName: o,
                                                    lineNumber: 753,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: o,
                                                lineNumber: 752,
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
                                          lineNumber: 694,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      e.exports.jsxDEV(
                                        p.Item,
                                        {
                                          label: a.logoPath,
                                          field: 'logoPath',
                                          rules: [
                                            {
                                              required: !0,
                                              message: a.logoPathRequired,
                                            },
                                          ],
                                          children: e.exports.jsxDEV(
                                            V,
                                            {
                                              id: f('logoPath'),
                                              name: 'logoPath',
                                              placeholder:
                                                a.logoPathPlaceholder,
                                              readOnly: !0,
                                              afterStyle: {
                                                marginLeft: 8,
                                                padding: 0,
                                                border: 0,
                                                background: 'transparent',
                                              },
                                              addAfter: e.exports.jsxDEV(
                                                _,
                                                {
                                                  type: 'text',
                                                  size: 'small',
                                                  onClick: ne,
                                                  children: a.copy,
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: o,
                                                  lineNumber: 781,
                                                  columnNumber: 25,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: o,
                                              lineNumber: 769,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: o,
                                          lineNumber: 762,
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
                        { fileName: o, lineNumber: 626, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: o, lineNumber: 625, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: o, lineNumber: 547, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: o, lineNumber: 541, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: o, lineNumber: 516, columnNumber: 5 },
    this
  );
}
export { Je as default };
