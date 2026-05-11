var K = Object.defineProperty,
  X = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var ee = Object.prototype.hasOwnProperty,
  oe = Object.prototype.propertyIsEnumerable;
var V = (o, l, s) =>
    l in o
      ? K(o, l, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (o[l] = s),
  n = (o, l) => {
    for (var s in l || (l = {})) ee.call(l, s) && V(o, s, l[s]);
    if (M) for (var s of M(l)) oe.call(l, s) && V(o, s, l[s]);
    return o;
  },
  x = (o, l) => X(o, Z(l));
import {
  ag as p,
  r as c,
  a as u,
  h as le,
  j as e,
  T as B,
  S as ae,
  B as S,
  $ as se,
  aQ as te,
  av as b,
  ah as y,
  aR as ue,
  aS as ne,
  aT as ie,
  P as re,
  aU as ce,
  aI as de,
  M as f,
  y as ge,
} from './vendor.aac6daa3.js';
/* empty css              */ import {
  G as pe,
  n as m,
  D as C,
  g as me,
  w as q,
  a as Fe,
  b as he,
} from './index.afddc419.js';
const ye = '_wrapper_11lm2_1',
  fe = '_header_11lm2_4',
  Ce = '_title_11lm2_14',
  _e = '_card_11lm2_18';
var a = {
  wrapper: ye,
  header: fe,
  title: Ce,
  card: _e,
  'lang-block': '_lang-block_11lm2_23',
  'lang-title': '_lang-title_11lm2_33',
  'logo-upload-block': '_logo-upload-block_11lm2_39',
  'logo-upload-main': '_logo-upload-main_11lm2_49',
  'logo-upload-actions': '_logo-upload-actions_11lm2_56',
  'logo-icon-button': '_logo-icon-button_11lm2_62',
  'logo-reselect-icon': '_logo-reselect-icon_11lm2_69',
  'logo-upload-tip': '_logo-upload-tip_11lm2_72',
  'logo-empty': '_logo-empty_11lm2_90',
  'preview-item': '_preview-item_11lm2_103',
  'json-preview': '_json-preview_11lm2_116',
};
const { Row: O, Col: F } = de,
  { TextArea: De } = y,
  Ee = [
    { key: 'zh-CN', label: '\u4E2D\u6587' },
    { key: 'en-US', label: 'English' },
    { key: 'es-ES', label: 'Espa\xF1ol' },
  ];
function Ne(o) {
  return o.data || o;
}
function I(o) {
  const l = m(o);
  return {
    logoPath: l.config.logoPath || '',
    systemName: n({}, l.config.systemName),
    companyName: n({}, l.config.companyName),
    systemDescription: n({}, l.config.systemDescription),
  };
}
function A(o) {
  return {
    logoPath: o.logoPath || '',
    systemName: n(n({}, C.config.systemName), o.systemName),
    companyName: n(n({}, C.config.companyName), o.companyName),
    systemDescription: n(
      n({}, C.config.systemDescription),
      o.systemDescription
    ),
  };
}
function ve(o, l) {
  return l
    ? l.startsWith('http://') || l.startsWith('https://') || !o
      ? l
      : `${o.replace(/\/$/, '')}/${l.replace(/^\//, '')}`
    : '';
}
function be() {
  var $, z;
  const [o] = p.useForm(),
    {
      lang: l,
      setSystemProfile: s,
      refreshSystemProfile: _,
    } = c.exports.useContext(pe),
    [d, D] = c.exports.useState(() => m(C)),
    [L, k] = c.exports.useState(!1),
    [P, U] = c.exports.useState(!1),
    [E, T] = c.exports.useState(!1),
    R = c.exports.useRef(null),
    N = d.logoUrl,
    v = l || 'zh-CN',
    j = ve(d.obsCloudBase, d.config.logoPath),
    W = c.exports.useMemo(
      () =>
        N
          ? [
              {
                uid: 'system-logo',
                name: d.config.logoPath || 'system-logo',
                status: E ? 'uploading' : 'done',
                url: N,
              },
            ]
          : [],
      [N, d.config.logoPath, E]
    ),
    w = c.exports.useMemo(() => A(o.getFieldsValue()), [d, E, P]),
    G = async () => {
      k(!0);
      try {
        const t = m(await me());
        D(t), o.setFieldsValue(I(t)), s == null || s(t), q(t);
      } finally {
        k(!1);
      }
    };
  c.exports.useEffect(() => {
    G();
  }, []);
  const J = async ({ file: t, onSuccess: i, onError: g }) => {
      T(!0);
      try {
        const r = Ne(await Fe('logo', t)),
          h = m(
            x(n({}, d), {
              config: x(n({}, A(o.getFieldsValue())), {
                logoPath: r.objectPath || '',
              }),
              logoUrl: r.url || '',
            })
          );
        o.setFieldValue('logoPath', r.objectPath || ''),
          D(h),
          i(r),
          f.success('Logo \u4E0A\u4F20\u6210\u529F');
      } catch (r) {
        g(r);
      } finally {
        T(!1);
      }
    },
    H = () => {
      if (!j) {
        f.warning('\u6682\u65E0\u53EF\u590D\u5236\u7684 Logo \u5730\u5740');
        return;
      }
      ge(j), f.success('Logo \u5730\u5740\u5DF2\u590D\u5236');
    },
    Q = (t) => {
      var g, r, h;
      t.stopPropagation();
      const i =
        (r = (g = R.current) == null ? void 0 : g.getRootDOMNode) == null
          ? void 0
          : r.call(g);
      (h = i == null ? void 0 : i.querySelector('input[type="file"]')) ==
        null || h.click();
    },
    Y = async () => {
      const t = await o.validate();
      U(!0);
      try {
        const i = m(await he(A(t)));
        D(i),
          o.setFieldsValue(I(i)),
          s == null || s(i),
          q(i),
          _ == null || _(),
          f.success('\u7CFB\u7EDF\u914D\u7F6E\u4FDD\u5B58\u6210\u529F');
      } finally {
        U(!1);
      }
    };
  return u(le, {
    loading: L,
    className: a.wrapper,
    children: [
      u('div', {
        className: a.header,
        children: [
          u('div', {
            children: [
              e(B.Title, {
                heading: 5,
                className: a.title,
                children: '\u7CFB\u7EDF\u914D\u7F6E',
              }),
              e(B.Text, {
                type: 'secondary',
                children:
                  '\u7EDF\u4E00\u7EF4\u62A4\u767B\u5F55\u9875\u3001\u5BFC\u822A\u680F\u3001\u9875\u811A\u5C55\u793A\u7684\u7CFB\u7EDF\u540D\u79F0\u3001\u516C\u53F8\u540D\u79F0\u3001\u63CF\u8FF0\u4E0E Logo\u3002',
              }),
            ],
          }),
          u(ae, {
            children: [
              e(S, {
                icon: e(se, {}),
                onClick: G,
                loading: L,
                children: '\u5237\u65B0',
              }),
              e(S, {
                type: 'primary',
                icon: e(te, {}),
                onClick: Y,
                loading: P,
                children: '\u4FDD\u5B58\u914D\u7F6E',
              }),
            ],
          }),
        ],
      }),
      e(p, {
        form: o,
        layout: 'vertical',
        initialValues: I(d),
        children: u(O, {
          gutter: 20,
          children: [
            e(F, {
              span: 16,
              children: e(b, {
                title: '\u591A\u8BED\u8A00\u54C1\u724C\u4FE1\u606F',
                bordered: !1,
                className: a.card,
                children: Ee.map((t) =>
                  u(
                    'div',
                    {
                      className: a.langBlock,
                      children: [
                        e('div', { className: a.langTitle, children: t.label }),
                        u(O, {
                          gutter: 16,
                          children: [
                            e(F, {
                              span: 12,
                              children: e(p.Item, {
                                label: '\u7CFB\u7EDF\u540D\u79F0',
                                field: `systemName.${t.key}`,
                                rules: [
                                  {
                                    required: !0,
                                    message:
                                      '\u8BF7\u8F93\u5165\u7CFB\u7EDF\u540D\u79F0',
                                  },
                                ],
                                children: e(y, {
                                  placeholder:
                                    '\u8BF7\u8F93\u5165\u7CFB\u7EDF\u540D\u79F0',
                                }),
                              }),
                            }),
                            e(F, {
                              span: 12,
                              children: e(p.Item, {
                                label: '\u516C\u53F8\u540D\u79F0',
                                field: `companyName.${t.key}`,
                                rules: [
                                  {
                                    required: !0,
                                    message:
                                      '\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0',
                                  },
                                ],
                                children: e(y, {
                                  placeholder:
                                    '\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0',
                                }),
                              }),
                            }),
                            e(F, {
                              span: 24,
                              children: e(p.Item, {
                                label: '\u7CFB\u7EDF\u63CF\u8FF0',
                                field: `systemDescription.${t.key}`,
                                rules: [
                                  {
                                    required: !0,
                                    message:
                                      '\u8BF7\u8F93\u5165\u7CFB\u7EDF\u63CF\u8FF0',
                                  },
                                ],
                                children: e(De, {
                                  autoSize: { minRows: 2, maxRows: 4 },
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    t.key
                  )
                ),
              }),
            }),
            u(F, {
              span: 8,
              children: [
                u(b, {
                  title: 'Logo \u4E0A\u4F20',
                  bordered: !1,
                  className: a.card,
                  children: [
                    u('div', {
                      className: `system-config-logo-upload ${a.logoUploadBlock}`,
                      children: [
                        e('div', {
                          className: a.logoUploadMain,
                          children: e(ue, {
                            ref: R,
                            fileList: W,
                            listType: 'picture-card',
                            imagePreview: !0,
                            accept:
                              'image/png,image/jpeg,image/jpg,image/webp,image/svg+xml',
                            customRequest: J,
                            limit: 1,
                            showUploadList: {
                              previewIcon: u('span', {
                                className: a.logoUploadActions,
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
                                  e('span', {
                                    className: a.logoIconButton,
                                    style: {
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      width: '100%',
                                      height: '100%',
                                    },
                                    onClick: Q,
                                    children: e(ne, {
                                      className: a.logoReselectIcon,
                                    }),
                                  }),
                                  e('span', {
                                    className: a.logoIconButton,
                                    style: {
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      width: '100%',
                                      height: '100%',
                                    },
                                    children: e(ie, {}),
                                  }),
                                ],
                              }),
                              removeIcon: null,
                            },
                            onRemove: () => !1,
                          }),
                        }),
                        e(re, {
                          content:
                            '\u652F\u6301 PNG\u3001JPG\u3001WebP\u3001SVG \u683C\u5F0F',
                          children: u(B.Text, {
                            className: a.logoUploadTip,
                            style: { fontSize: 10, lineHeight: '16px' },
                            children: [
                              e(ce, { style: { fontSize: 12 } }),
                              '\u652F\u6301 PNG / JPG / WebP / SVG\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u900F\u660E\u80CC\u666F Logo',
                            ],
                          }),
                        }),
                      ],
                    }),
                    e(p.Item, {
                      label: 'Logo \u5730\u5740',
                      field: 'logoPath',
                      children: e(y, {
                        placeholder:
                          '\u4E0A\u4F20\u540E\u81EA\u52A8\u5199\u5165 system/ \u76EE\u5F55\u5730\u5740',
                        readOnly: !0,
                        afterStyle: {
                          marginLeft: 8,
                          padding: 0,
                          border: 0,
                          background: 'transparent',
                        },
                        addAfter: e(S, {
                          type: 'text',
                          size: 'small',
                          onClick: H,
                          children: '\u590D\u5236',
                        }),
                      }),
                    }),
                  ],
                }),
                u(b, {
                  title: '\u5F53\u524D\u8BED\u8A00\u9884\u89C8',
                  bordered: !1,
                  className: a.card,
                  children: [
                    u('div', {
                      className: a.previewItem,
                      children: [
                        e('span', { children: '\u8BED\u8A00' }),
                        e('strong', { children: v }),
                      ],
                    }),
                    u('div', {
                      className: a.previewItem,
                      children: [
                        e('span', { children: '\u7CFB\u7EDF\u540D\u79F0' }),
                        e('strong', {
                          children: ($ = w.systemName) == null ? void 0 : $[v],
                        }),
                      ],
                    }),
                    u('div', {
                      className: a.previewItem,
                      children: [
                        e('span', { children: '\u516C\u53F8\u540D\u79F0' }),
                        e('strong', {
                          children: (z = w.companyName) == null ? void 0 : z[v],
                        }),
                      ],
                    }),
                    e('pre', {
                      className: a.jsonPreview,
                      children: JSON.stringify(w, null, 2),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { be as default };
