var ve = Object.defineProperty,
  ye = Object.defineProperties;
var je = Object.getOwnPropertyDescriptors;
var ne = Object.getOwnPropertySymbols;
var ke = Object.prototype.hasOwnProperty,
  Se = Object.prototype.propertyIsEnumerable;
var ae = (u, e, r) =>
    e in u
      ? ve(u, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (u[e] = r),
  J = (u, e) => {
    for (var r in e || (e = {})) ke.call(e, r) && ae(u, r, e[r]);
    if (ne) for (var r of ne(e)) Se.call(e, r) && ae(u, r, e[r]);
    return u;
  },
  W = (u, e) => ye(u, je(e));
import {
  ae as G,
  r as o,
  j as s,
  aR as R,
  af as X,
  v as Be,
  w as Ae,
  a as Y,
  f as ie,
  aX as Ve,
  a$ as oe,
  ai as le,
  T as ce,
  M,
  S as Z,
  N as Pe,
  at as we,
  B as me,
  aS as Me,
  Z as Te,
  aL as Ie,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import { P as $e } from './index.7f843fd6.js';
import {
  f as Ge,
  s as Le,
  a as ze,
  u as de,
  d as _e,
  b as Re,
  c as Oe,
} from './permission-boundary-package.4dd508d7.js';
import Ue from './form.2725c39e.js';
import { s as pe } from './index.module.ea069206.js';
/* empty css               */ import {
  f as Ke,
  a as fe,
} from './access-role.b902211a.js';
import { s as h } from './index.module.0c4d71de.js';
import { getColumns as qe } from './constants.e23272c8.js';
import './index.77883a3f.js';
import './access-control.86021a9b.js';
import './utils.49caa52b.js';
var k =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/permission-boundary-packages/PermissionPackageModal.tsx';
function He({ visible: u, record: e, onCancel: r, onSubmit: i }) {
  const [m] = G.useForm();
  return (
    o.exports.useEffect(() => {
      !u ||
        (e
          ? m.setFieldsValue({
              id: e.id,
              packageName: e.packageName,
              description: e.description || '',
            })
          : m.resetFields());
    }, [m, e, u]),
    s.exports.jsxDEV(
      R,
      {
        title: e
          ? '\u7F16\u8F91\u6743\u9650\u8FB9\u754C\u5305'
          : '\u65B0\u589E\u6743\u9650\u8FB9\u754C\u5305',
        visible: u,
        onCancel: r,
        onOk: async () => {
          const b = await m.validate();
          await i(b);
        },
        unmountOnExit: !0,
        style: { width: 560 },
        children: s.exports.jsxDEV(
          G,
          {
            form: m,
            layout: 'horizontal',
            labelAlign: 'left',
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
            className: pe['search-form'],
            children: [
              s.exports.jsxDEV(
                G.Item,
                {
                  field: 'id',
                  hidden: !0,
                  children: s.exports.jsxDEV(
                    X,
                    {},
                    void 0,
                    !1,
                    { fileName: k, lineNumber: 63, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: k, lineNumber: 62, columnNumber: 9 },
                this
              ),
              s.exports.jsxDEV(
                G.Item,
                {
                  label: '\u6743\u9650\u5305\u540D\u79F0',
                  field: 'packageName',
                  rules: [
                    {
                      required: !0,
                      message:
                        '\u8BF7\u8F93\u5165\u6743\u9650\u5305\u540D\u79F0',
                    },
                  ],
                  children: s.exports.jsxDEV(
                    X,
                    {
                      placeholder:
                        '\u5982 \u9ED8\u8BA4\u79DF\u6237\u6743\u9650\u5305',
                    },
                    void 0,
                    !1,
                    { fileName: k, lineNumber: 70, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: k, lineNumber: 65, columnNumber: 9 },
                this
              ),
              s.exports.jsxDEV(
                G.Item,
                {
                  label: '\u63CF\u8FF0',
                  field: 'description',
                  children: s.exports.jsxDEV(
                    X.TextArea,
                    {
                      autoSize: { minRows: 3, maxRows: 5 },
                      placeholder:
                        '\u8BF4\u660E\u8BE5\u6743\u9650\u5305\u9002\u7528\u7684\u79DF\u6237\u7C7B\u578B\u548C\u529F\u80FD\u8FB9\u754C',
                    },
                    void 0,
                    !1,
                    { fileName: k, lineNumber: 73, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: k, lineNumber: 72, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: k, lineNumber: 54, columnNumber: 7 },
          this
        ),
      },
      void 0,
      !1,
      { fileName: k, lineNumber: 43, columnNumber: 5 },
      this
    )
  );
}
var Q = {
    'package-tip': '_package-tip_1w2vc_1',
    'permission-transfer': '_permission-transfer_1w2vc_5',
    'package-grant-header': '_package-grant-header_1w2vc_8',
    'package-summary': '_package-summary_1w2vc_13',
  },
  n =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/permission-boundary-packages/PermissionPackageGrantDrawer.tsx';
const { Text: j } = ce;
function Ne(u) {
  var r;
  const e = (r = u.permissionId) != null ? r : u.id;
  return e != null ? String(e) : '';
}
function Je(u = []) {
  const e = new Set(),
    r = new Set(),
    i = new Map(),
    m = (b) =>
      b.flatMap((p) => {
        const E = Ne(p),
          f =
            E &&
            p.checkable !== !1 &&
            p.nodeType !== 'CATALOG' &&
            !!p.permissionId,
          V = m(p.children || []),
          g = [...(f ? [E] : []), ...V];
        return (
          E &&
            (e.add(E), f && r.add(E), p.nodeType === 'CATALOG' && i.set(E, g)),
          g
        );
      });
  return m(u), { allKeys: e, checkableKeys: r, catalogDescendantMenuKeys: i };
}
function he(u = []) {
  return u
    .map((e) => {
      const r = he(e.children || []),
        i = e.checkable !== !1 && e.nodeType !== 'CATALOG' && !!e.permissionId;
      return !i && r.length === 0
        ? null
        : {
            key: Ne(e),
            title: `${
              e.permissionName || e.objectName || e.permissionCode || e.id
            }${e.nodeType ? `\uFF08${e.nodeType}\uFF09` : ''}`,
            disableCheckbox: !i,
            children: r,
          };
    })
    .filter(Boolean);
}
const be = {
  api: { label: 'api', color: 'arcoblue' },
  button: { label: 'btn', color: 'green' },
  form: { label: 'form', color: 'orange' },
  tab: { label: 'tab', color: 'purple' },
};
function xe(u) {
  var r;
  const e = (u.childGroup || u.nodeType || '').toUpperCase();
  return e === 'API'
    ? ((r = u.resourceSubType) == null ? void 0 : r.toLowerCase()) || 'api'
    : e === 'ELEMENT' && u.resourceSubType
    ? u.resourceSubType.toLowerCase()
    : '';
}
function Ee({ type: u }) {
  var i;
  const e = u.toLowerCase(),
    r = (i = be[e]) != null ? i : { label: e, color: 'gray' };
  return s.exports.jsxDEV(
    Y,
    { size: 'small', color: r.color, children: r.label },
    void 0,
    !1,
    { fileName: n, lineNumber: 127, columnNumber: 5 },
    this
  );
}
function ge() {
  return { element: [], api: [], other: [] };
}
function We(u) {
  const e = ge(),
    r = ge();
  return (
    u.forEach((i) => {
      const m = i.autoGrant === 1 ? r : e,
        b = (i.childGroup || i.nodeType || '').toUpperCase();
      b === 'API'
        ? m.api.push(i)
        : b === 'ELEMENT'
        ? m.element.push(i)
        : m.other.push(i);
    }),
    { manual: e, auto: r }
  );
}
function Xe(u) {
  return u.element.length > 0 || u.api.length > 0 || u.other.length > 0;
}
function Ye(u) {
  var p, E;
  const e = u.permissionName || u.objectName || u.permissionCode || u.id,
    r = xe(u),
    i = r ? ((E = (p = be[r]) == null ? void 0 : p.label) != null ? E : r) : '',
    m = u.objectPath ? `${u.httpMethod || ''} ${u.objectPath}`.trim() : '',
    b = i ? `${i} ${e}` : String(e);
  return m ? `${b} \u2014 ${m}` : b;
}
function Ze({ item: u, ellipsis: e = !1 }) {
  const r = u.permissionName || u.objectName || u.permissionCode || u.id,
    i = xe(u),
    m = u.objectPath ? `${u.httpMethod || ''} ${u.objectPath}`.trim() : '',
    b = Ye(u);
  return e
    ? s.exports.jsxDEV(
        Pe,
        {
          content: b,
          children: s.exports.jsxDEV(
            'span',
            {
              className: h['grant-label-tooltip-wrap'],
              children: s.exports.jsxDEV(
                'span',
                {
                  className: h['grant-label-inline'],
                  children: [
                    i
                      ? s.exports.jsxDEV(
                          Ee,
                          { type: i },
                          void 0,
                          !1,
                          { fileName: n, lineNumber: 207, columnNumber: 24 },
                          this
                        )
                      : null,
                    s.exports.jsxDEV(
                      j,
                      {
                        className: h['grant-label-ellipsis'],
                        ellipsis: !0,
                        children: r,
                      },
                      void 0,
                      !1,
                      { fileName: n, lineNumber: 208, columnNumber: 13 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: n, lineNumber: 206, columnNumber: 11 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: n, lineNumber: 205, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: n, lineNumber: 204, columnNumber: 7 },
        this
      )
    : s.exports.jsxDEV(
        Z,
        {
          wrap: !0,
          size: 8,
          align: 'center',
          children: [
            i
              ? s.exports.jsxDEV(
                  Ee,
                  { type: i },
                  void 0,
                  !1,
                  { fileName: n, lineNumber: 219, columnNumber: 18 },
                  this
                )
              : null,
            s.exports.jsxDEV(
              'span',
              { children: r },
              void 0,
              !1,
              { fileName: n, lineNumber: 220, columnNumber: 7 },
              this
            ),
            m
              ? s.exports.jsxDEV(
                  j,
                  {
                    type: 'secondary',
                    style: { fontSize: 12 },
                    children: ['\u2014 ', m],
                  },
                  void 0,
                  !0,
                  { fileName: n, lineNumber: 222, columnNumber: 9 },
                  this
                )
              : null,
          ],
        },
        void 0,
        !0,
        { fileName: n, lineNumber: 218, columnNumber: 5 },
        this
      );
}
function Qe({ visible: u, record: e, onClose: r, onSaved: i }) {
  var se;
  const [m, b] = o.exports.useState([]),
    [p, E] = o.exports.useState([]),
    [f, V] = o.exports.useState(''),
    [g, S] = o.exports.useState([]),
    C = o.exports.useRef({}),
    [O, L] = o.exports.useState(!1),
    [B, P] = o.exports.useState(!1),
    [w, T] = o.exports.useState(!1),
    v = o.exports.useMemo(() => Je(m), [m]),
    U = o.exports.useMemo(() => {
      const t = new Set(p),
        c = p.filter((a) => v.checkableKeys.has(a));
      return (
        v.catalogDescendantMenuKeys.forEach((a, N) => {
          a.length > 0 && a.every((F) => t.has(F)) && c.push(N);
        }),
        c
      );
    }, [p, v]),
    y = o.exports.useMemo(
      () => p.map(Number).filter((t) => Number.isFinite(t) && t > 0).length,
      [p]
    ),
    K = o.exports.useMemo(() => f !== '' && p.includes(f), [p, f]);
  o.exports.useEffect(() => {
    if (!u || !e) return;
    let t = !1;
    return (
      L(!0),
      V(''),
      S([]),
      (C.current = {}),
      Promise.all([Ke(), Ge(e.id)])
        .then(([c, a]) => {
          t || (b(c || []), E((a || []).map((N) => String(N.id))));
        })
        .finally(() => !t && L(!1)),
      () => {
        t = !0;
      }
    );
  }, [e, u]),
    o.exports.useEffect(() => {
      if (!f) {
        S([]);
        return;
      }
      const t = C.current[f];
      if (t) {
        S(t);
        return;
      }
      const c = Number(f);
      if (!Number.isFinite(c)) {
        S([]);
        return;
      }
      let a = !1;
      return (
        P(!0),
        fe(c)
          .then((N) => {
            if (a) return;
            const F = N || [];
            (C.current[f] = F), S(F);
          })
          .finally(() => !a && P(!1)),
        () => {
          a = !0;
        }
      );
    }, [f]);
  const z = o.exports.useMemo(
      () =>
        g
          .map((t) => t.permissionId)
          .filter((t) => t != null && t > 0)
          .map(String)
          .filter((t) => p.includes(t)),
      [g, p]
    ),
    I = o.exports.useCallback((t, c, a) => {
      c.forEach((N) => {
        N.permissionId && N.autoGrant === 1 && a.add(String(N.permissionId));
      }),
        (C.current[t] = c);
    }, []),
    l = o.exports.useCallback(
      (t, c, a) => {
        var F;
        const N = ((F = C.current[t]) == null ? void 0 : F.length)
          ? C.current[t]
          : g;
        c.length > 0
          ? (a.add(t),
            N.forEach((d) => {
              d.permissionId &&
                d.autoGrant === 1 &&
                a.add(String(d.permissionId));
            }))
          : a.delete(t);
      },
      [g]
    ),
    x = (t) => {
      const c = new Set(p),
        a = new Set(p.filter((d) => !v.allKeys.has(d)));
      t.filter((d) => v.checkableKeys.has(d)).forEach((d) => a.add(d)),
        [...c]
          .filter((d) => v.checkableKeys.has(d) && !a.has(d))
          .forEach((d) => {
            const $ = C.current[d];
            $ &&
              $.forEach((_) => {
                _.permissionId && a.delete(String(_.permissionId));
              });
          }),
        [...a]
          .filter((d) => !c.has(d))
          .forEach((d) => {
            const $ = C.current[d];
            $
              ? I(d, $, a)
              : d === f && g.length
              ? I(d, g, a)
              : fe(Number(d)).then((_) => {
                  const te = _ || [];
                  (C.current[d] = te),
                    E((re) => {
                      const H = new Set(re);
                      return H.has(d) ? (I(d, te, H), Array.from(H)) : re;
                    });
                });
          }),
        E(Array.from(a));
    },
    A = (t) => {
      if (!f) return;
      const c = new Set(
        g
          .map((a) => (a.permissionId ? String(a.permissionId) : ''))
          .filter(Boolean)
      );
      E((a) => {
        const N = new Set(a.filter((F) => !c.has(F)));
        return t.forEach((F) => N.add(F)), l(f, t, N), Array.from(N);
      });
    },
    Fe = async () => {
      if (!!e) {
        T(!0);
        try {
          await Le({
            packageId: e.id,
            permissionIds: p
              .map((t) => Number(t))
              .filter((t) => Number.isFinite(t) && t > 0),
          }),
            M.success('\u6743\u9650\u5305\u6743\u9650\u5DF2\u4FDD\u5B58'),
            i == null || i(),
            r();
        } finally {
          T(!1);
        }
      }
    },
    ee = o.exports.useMemo(() => We(g), [g]),
    De = (t, c = 'api') =>
      s.exports.jsxDEV(
        le,
        {
          value: String(t.permissionId),
          children: s.exports.jsxDEV(
            Z,
            {
              wrap: c !== 'element',
              size: 8,
              align: 'center',
              className: c === 'element' ? h['grant-checkbox-label'] : void 0,
              children: s.exports.jsxDEV(
                Ze,
                { item: t, ellipsis: c === 'element' },
                void 0,
                !1,
                { fileName: n, lineNumber: 475, columnNumber: 9 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: n, lineNumber: 467, columnNumber: 7 },
            this
          ),
        },
        t.permissionId,
        !1,
        { fileName: n, lineNumber: 466, columnNumber: 5 },
        this
      ),
    q = (t, c, a, N = 'api') => {
      if (!c.length) return null;
      const F =
        N === 'element'
          ? h['grant-resource-list-element']
          : h['grant-resource-list-api'];
      return s.exports.jsxDEV(
        'div',
        {
          className: h['grant-resource-block'],
          children: [
            s.exports.jsxDEV(
              j,
              {
                type: 'secondary',
                className: h['grant-resource-type-title'],
                children: t,
              },
              void 0,
              !1,
              { fileName: n, lineNumber: 493, columnNumber: 9 },
              this
            ),
            s.exports.jsxDEV(
              'div',
              {
                className: F,
                children: c.map((d) =>
                  s.exports.jsxDEV(
                    'div',
                    {
                      className: `${h['grant-resource-item']}${
                        N === 'element'
                          ? ` ${h['grant-resource-item-element']}`
                          : ''
                      }`,
                      children: De(d, N),
                    },
                    d.permissionId,
                    !1,
                    { fileName: n, lineNumber: 501, columnNumber: 13 },
                    this
                  )
                ),
              },
              void 0,
              !1,
              { fileName: n, lineNumber: 499, columnNumber: 9 },
              this
            ),
          ],
        },
        a,
        !0,
        { fileName: n, lineNumber: 492, columnNumber: 7 },
        this
      );
    },
    ue = (t, c, a) =>
      Xe(c)
        ? s.exports.jsxDEV(
            'div',
            {
              className: h['grant-mode-section'],
              children: [
                s.exports.jsxDEV(
                  j,
                  { className: h['grant-mode-section-title'], children: t },
                  void 0,
                  !1,
                  { fileName: n, lineNumber: 525, columnNumber: 9 },
                  this
                ),
                q(
                  '\u9875\u9762\u5143\u7D20',
                  c.element,
                  `${a}-element`,
                  'element'
                ),
                q('API', c.api, `${a}-api`, 'api'),
                q('\u5176\u4ED6', c.other, `${a}-other`, 'api'),
              ],
            },
            a,
            !0,
            { fileName: n, lineNumber: 524, columnNumber: 7 },
            this
          )
        : null,
    Ce = { direction: 'vertical', disabled: !f, value: z, onChange: A };
  return s.exports.jsxDEV(
    Be,
    {
      title: `\u7EF4\u62A4\u6743\u9650\uFF1A${
        (e == null ? void 0 : e.packageName) || ''
      }`,
      visible: u,
      width: 920,
      onCancel: r,
      onOk: Fe,
      confirmLoading: w,
      unmountOnExit: !0,
      bodyStyle: {
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
      },
      children: [
        s.exports.jsxDEV(
          'div',
          {
            className: Q['package-grant-header'],
            children: [
              s.exports.jsxDEV(
                Ae,
                {
                  type: 'warning',
                  content:
                    '\u4FEE\u6539\u6743\u9650\u5305\u4F1A\u7ACB\u5373\u5F71\u54CD\u6240\u6709\u7ED1\u5B9A\u8BE5\u6743\u9650\u5305\u7684\u666E\u901A\u79DF\u6237\uFF1B\u5E73\u53F0\u79DF\u6237\u65E0\u9700\u914D\u7F6E\u6743\u9650\u8FB9\u754C\u3002',
                },
                void 0,
                !1,
                { fileName: n, lineNumber: 569, columnNumber: 9 },
                this
              ),
              s.exports.jsxDEV(
                'div',
                {
                  className: Q['package-summary'],
                  children: [
                    s.exports.jsxDEV(
                      Y,
                      {
                        color: 'arcoblue',
                        children: ['\u6743\u9650\u6570\uFF1A', y],
                      },
                      void 0,
                      !0,
                      { fileName: n, lineNumber: 574, columnNumber: 11 },
                      this
                    ),
                    s.exports.jsxDEV(
                      Y,
                      {
                        color: 'green',
                        children: [
                          '\u7ED1\u5B9A\u79DF\u6237\uFF1A',
                          (se = e == null ? void 0 : e.tenantCount) != null
                            ? se
                            : 0,
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: n, lineNumber: 575, columnNumber: 11 },
                      this
                    ),
                    s.exports.jsxDEV(
                      j,
                      {
                        type: 'secondary',
                        children:
                          '\u666E\u901A\u79DF\u6237\u7BA1\u7406\u5458\u5C06\u81EA\u52A8\u62E5\u6709\u6709\u6548\u8FB9\u754C\u5185\u5168\u90E8\u6743\u9650\u3002',
                      },
                      void 0,
                      !1,
                      { fileName: n, lineNumber: 576, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: n, lineNumber: 573, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: n, lineNumber: 568, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          ie,
          {
            loading: O,
            block: !0,
            className: h['grant-spin'],
            children: s.exports.jsxDEV(
              'div',
              {
                className: h['grant-layout'],
                children: [
                  s.exports.jsxDEV(
                    'div',
                    {
                      className: h['grant-panel-left'],
                      children: [
                        s.exports.jsxDEV(
                          j,
                          {
                            className: h['grant-panel-title'],
                            children: [
                              '\u83DC\u5355\u6743\u9650',
                              s.exports.jsxDEV(
                                j,
                                {
                                  type: 'secondary',
                                  style: { marginLeft: 8, fontSize: 12 },
                                  children:
                                    '\uFF08CATALOG \u4E3A\u76EE\u5F55\uFF0C\u65E0\u9700\u52FE\u9009\uFF1B\u6388\u6743\u5B50\u83DC\u5355\u540E\u76EE\u5F55\u4F1A\u81EA\u52A8\u5C55\u793A\uFF09',
                                },
                                void 0,
                                !1,
                                {
                                  fileName: n,
                                  lineNumber: 586,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          { fileName: n, lineNumber: 584, columnNumber: 13 },
                          this
                        ),
                        s.exports.jsxDEV(
                          'div',
                          {
                            className: h['grant-panel-body'],
                            children: s.exports.jsxDEV(
                              Ve,
                              {
                                checkable: !0,
                                checkStrictly: !0,
                                checkedKeys: U,
                                selectedKeys: f ? [f] : [],
                                onCheck: x,
                                onSelect: (t) => {
                                  const c = t[0] ? String(t[0]) : '';
                                  V(c);
                                },
                                treeData: he(m),
                              },
                              void 0,
                              !1,
                              {
                                fileName: n,
                                lineNumber: 591,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: n, lineNumber: 590, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: n, lineNumber: 583, columnNumber: 11 },
                    this
                  ),
                  s.exports.jsxDEV(
                    'div',
                    {
                      className: h['grant-panel-right'],
                      children: [
                        s.exports.jsxDEV(
                          j,
                          {
                            className: h['grant-panel-title'],
                            children: [
                              '\u9644\u5C5E\u6743\u9650\u70B9',
                              f && !K
                                ? s.exports.jsxDEV(
                                    j,
                                    {
                                      type: 'secondary',
                                      style: { marginLeft: 8, fontSize: 12 },
                                      children:
                                        '\uFF08\u52FE\u9009\u9644\u5C5E\u6743\u9650\u540E\u5C06\u81EA\u52A8\u52FE\u9009\u5DE6\u4FA7\u83DC\u5355\uFF09',
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: n,
                                      lineNumber: 609,
                                      columnNumber: 17,
                                    },
                                    this
                                  )
                                : null,
                            ],
                          },
                          void 0,
                          !0,
                          { fileName: n, lineNumber: 606, columnNumber: 13 },
                          this
                        ),
                        s.exports.jsxDEV(
                          'div',
                          {
                            className: h['grant-panel-body'],
                            children: s.exports.jsxDEV(
                              ie,
                              {
                                loading: B,
                                style: { width: '100%' },
                                children: f
                                  ? g.length === 0 && !B
                                    ? s.exports.jsxDEV(
                                        oe,
                                        {
                                          description:
                                            '\u8BE5\u83DC\u5355\u672A\u914D\u7F6E\u9644\u5C5E\u6743\u9650\uFF0C\u8868\u793A\u4E0D\u9700\u8981\u5176\u4ED6 API/\u5143\u7D20\u6743\u9650\uFF1B\u82E5\u9700\u8981\u8BF7\u5728\u6743\u9650\u5173\u7CFB\u7BA1\u7406\u9875\u6DFB\u52A0',
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: n,
                                          lineNumber: 619,
                                          columnNumber: 19,
                                        },
                                        this
                                      )
                                    : s.exports.jsxDEV(
                                        le.Group,
                                        W(J({}, Ce), {
                                          children: [
                                            ue(
                                              '\u624B\u52A8\u6388\u6743',
                                              ee.manual,
                                              'manual'
                                            ),
                                            ue(
                                              '\u81EA\u52A8\u6388\u6743',
                                              ee.auto,
                                              'auto'
                                            ),
                                          ],
                                        }),
                                        void 0,
                                        !0,
                                        {
                                          fileName: n,
                                          lineNumber: 621,
                                          columnNumber: 19,
                                        },
                                        this
                                      )
                                  : s.exports.jsxDEV(
                                      oe,
                                      {
                                        description:
                                          '\u8BF7\u5728\u5DE6\u4FA7\u9009\u62E9\u83DC\u5355',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: n,
                                        lineNumber: 617,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: n,
                                lineNumber: 615,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: n, lineNumber: 614, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: n, lineNumber: 605, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: n, lineNumber: 582, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: n, lineNumber: 581, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: n, lineNumber: 551, columnNumber: 5 },
    this
  );
}
var D =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/permission-boundary-packages/index.tsx';
const { Title: eu, Text: uu } = ce;
function su(u, e, r) {
  var i, m, b;
  return {
    page: e,
    pageSize: r,
    id: ((i = u.id) == null ? void 0 : i.trim()) || void 0,
    packageCode: ((m = u.packageCode) == null ? void 0 : m.trim()) || void 0,
    packageName: ((b = u.packageName) == null ? void 0 : b.trim()) || void 0,
    activeStatus: u.activeStatus || void 0,
  };
}
function gu() {
  const [u, e] = o.exports.useState([]),
    [r, i] = o.exports.useState(!1),
    [m, b] = o.exports.useState(1),
    [p, E] = o.exports.useState(10),
    [f, V] = o.exports.useState(0),
    [g, S] = o.exports.useState({}),
    [C, O] = o.exports.useState(0),
    [L, B] = o.exports.useState(!1),
    [P, w] = o.exports.useState(null),
    [T, v] = o.exports.useState(null),
    U = o.exports.useMemo(
      () => ({
        current: m,
        pageSize: p,
        total: f,
        showTotal: !0,
        sizeCanChange: !0,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [m, p, f]
    );
  o.exports.useEffect(() => {
    let l = !1;
    return (
      i(!0),
      ze(su(g, m, p))
        .then((x) => {
          l || (e(x.list || []), V(x.total || 0));
        })
        .finally(() => !l && i(!1)),
      () => {
        l = !0;
      }
    );
  }, [m, p, g, C]);
  const y = o.exports.useCallback(() => O((l) => l + 1), []),
    K = async (l) => {
      var A;
      const x = {
        id: l.id,
        packageName: l.packageName.trim(),
        description: ((A = l.description) == null ? void 0 : A.trim()) || '',
      };
      P
        ? (await Re(W(J({}, x), { id: P.id })),
          M.success('\u6743\u9650\u5305\u5DF2\u66F4\u65B0'))
        : (await Oe(x), M.success('\u6743\u9650\u5305\u5DF2\u521B\u5EFA')),
        B(!1),
        w(null),
        y();
    },
    z = o.exports.useMemo(
      () => ({
        onEdit: (l) => {
          w(l), B(!0);
        },
        onGrant: (l) => v(l),
        onEnable: (l) => {
          R.confirm({
            title: '\u786E\u8BA4\u542F\u7528\u6743\u9650\u5305\uFF1F',
            content: `\u542F\u7528\u540E\uFF0C\u7ED1\u5B9A ${l.packageName} \u7684\u79DF\u6237\u5C06\u91CD\u65B0\u83B7\u5F97\u8BE5\u8FB9\u754C\u80FD\u529B\u3002`,
            onOk: async () => {
              await de({ id: l.id, activeStatus: 1 }),
                M.success('\u6743\u9650\u5305\u5DF2\u542F\u7528'),
                y();
            },
          });
        },
        onDisable: (l) => {
          var x;
          R.confirm({
            title: '\u786E\u8BA4\u505C\u7528\u6743\u9650\u5305\uFF1F',
            content: `\u505C\u7528\u4F1A\u5F71\u54CD ${
              (x = l.tenantCount) != null ? x : 0
            } \u4E2A\u5DF2\u7ED1\u5B9A\u79DF\u6237\u7684\u6709\u6548\u6743\u9650\u8FB9\u754C\u3002`,
            onOk: async () => {
              await de({ id: l.id, activeStatus: 2 }),
                M.success('\u6743\u9650\u5305\u5DF2\u505C\u7528'),
                y();
            },
          });
        },
        onDelete: (l) => {
          var x;
          R.confirm({
            title: '\u786E\u8BA4\u5220\u9664\u6743\u9650\u5305\uFF1F',
            content: `\u5220\u9664 ${
              l.packageName
            } \u540E\uFF0C\u5C06\u540C\u65F6\u89E3\u7ED1 ${
              (x = l.tenantCount) != null ? x : 0
            } \u4E2A\u5DF2\u7ED1\u5B9A\u79DF\u6237\u7684\u6743\u9650\u5305\uFF0C\u53EF\u80FD\u5F71\u54CD\u76F8\u5173\u7528\u6237\u6B63\u5E38\u4F7F\u7528\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002`,
            onOk: async () => {
              await _e(l.id),
                M.success('\u6743\u9650\u5305\u5DF2\u5220\u9664'),
                y();
            },
          });
        },
      }),
      [y]
    ),
    I = o.exports.useMemo(() => qe(z), [z]);
  return s.exports.jsxDEV(
    we,
    {
      children: [
        s.exports.jsxDEV(
          eu,
          {
            heading: 6,
            children: '\u6743\u9650\u8FB9\u754C\u5305\u7BA1\u7406',
          },
          void 0,
          !1,
          { fileName: D, lineNumber: 174, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          uu,
          {
            type: 'secondary',
            className: Q['package-tip'],
            children:
              '\u5E73\u53F0\u4FA7\u96C6\u4E2D\u7EF4\u62A4\u6743\u9650\u5305\uFF0C\u666E\u901A\u79DF\u6237\u7ED1\u5B9A\u540E\u81EA\u52A8\u5F62\u6210\u79DF\u6237\u6709\u6548\u6743\u9650\u8FB9\u754C\u3002',
          },
          void 0,
          !1,
          { fileName: D, lineNumber: 175, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          Ue,
          {
            onSearch: (l) => {
              b(1), S(l);
            },
          },
          void 0,
          !1,
          { fileName: D, lineNumber: 178, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          $e,
          {
            requiredPermissions: [
              { resource: 'system:permission-boundary-package:access' },
            ],
            children: s.exports.jsxDEV(
              'div',
              {
                className: pe['button-group'],
                children: [
                  s.exports.jsxDEV(
                    Z,
                    {
                      children: s.exports.jsxDEV(
                        me,
                        {
                          type: 'primary',
                          icon: s.exports.jsxDEV(
                            Me,
                            {},
                            void 0,
                            !1,
                            { fileName: D, lineNumber: 193, columnNumber: 21 },
                            this
                          ),
                          onClick: () => {
                            w(null), B(!0);
                          },
                          children: '\u65B0\u589E\u6743\u9650\u5305',
                        },
                        void 0,
                        !1,
                        { fileName: D, lineNumber: 191, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: D, lineNumber: 190, columnNumber: 11 },
                    this
                  ),
                  s.exports.jsxDEV(
                    me,
                    {
                      icon: s.exports.jsxDEV(
                        Te,
                        {},
                        void 0,
                        !1,
                        { fileName: D, lineNumber: 202, columnNumber: 25 },
                        this
                      ),
                      onClick: () => y(),
                      children: '\u5237\u65B0',
                    },
                    void 0,
                    !1,
                    { fileName: D, lineNumber: 202, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: D, lineNumber: 189, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: D, lineNumber: 184, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          Ie,
          {
            rowKey: 'id',
            loading: r,
            pagination: U,
            columns: I,
            data: u,
            border: !0,
            onChange: (l) => {
              b((x) => {
                var A;
                return (A = l.current) != null ? A : x;
              }),
                E((x) => (l.pageSize != null ? Number(l.pageSize) : x));
            },
          },
          void 0,
          !1,
          { fileName: D, lineNumber: 207, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          He,
          {
            visible: L,
            record: P,
            onCancel: () => {
              B(!1), w(null);
            },
            onSubmit: K,
          },
          void 0,
          !1,
          { fileName: D, lineNumber: 219, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          Qe,
          { visible: !!T, record: T, onClose: () => v(null), onSaved: y },
          void 0,
          !1,
          { fileName: D, lineNumber: 228, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: D, lineNumber: 173, columnNumber: 5 },
    this
  );
}
export { gu as default };
