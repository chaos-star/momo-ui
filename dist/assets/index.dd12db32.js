var ke = Object.defineProperty,
  Se = Object.defineProperties;
var Be = Object.getOwnPropertyDescriptors;
var ne = Object.getOwnPropertySymbols;
var Ae = Object.prototype.hasOwnProperty,
  De = Object.prototype.propertyIsEnumerable;
var se = (u, e, n) =>
    e in u
      ? ke(u, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (u[e] = n),
  q = (u, e) => {
    for (var n in e || (e = {})) Ae.call(e, n) && se(u, n, e[n]);
    if (ne) for (var n of ne(e)) De.call(e, n) && se(u, n, e[n]);
    return u;
  },
  Y = (u, e) => Se(u, Be(e));
import {
  ag as $,
  r as o,
  j as s,
  aS as _,
  a as g,
  ah as H,
  w as xe,
  x as Ne,
  b as J,
  h as ae,
  aY as Pe,
  b0 as re,
  ak as oe,
  T as ie,
  M as v,
  S as W,
  P as Te,
  av as we,
  B as ce,
  aT as ve,
  $ as Me,
  aM as Ie,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import { P as je } from './index.e971b0f8.js';
import {
  f as $e,
  s as Le,
  a as Ge,
  u as le,
  d as ze,
  b as _e,
  c as Oe,
} from './permission-boundary-package.8e6500ff.js';
import Re from './form.3b01674f.js';
import { s as de } from './index.module.ea069206.js';
/* empty css               */ import {
  f as Ke,
  a as pe,
} from './access-role.e3a16bcc.js';
import { s as f } from './index.module.0c4d71de.js';
import { getColumns as Ue } from './constants.da448a4c.js';
import './index.97399a5e.js';
import './access-control.a5391fe6.js';
import './utils.49caa52b.js';
function Ve({ visible: u, record: e, onCancel: n, onSubmit: r }) {
  const [l] = $.useForm();
  return (
    o.exports.useEffect(() => {
      !u ||
        (e
          ? l.setFieldsValue({
              id: e.id,
              packageName: e.packageName,
              description: e.description || '',
            })
          : l.resetFields());
    }, [l, e, u]),
    s(_, {
      title: e
        ? '\u7F16\u8F91\u6743\u9650\u8FB9\u754C\u5305'
        : '\u65B0\u589E\u6743\u9650\u8FB9\u754C\u5305',
      visible: u,
      onCancel: n,
      onOk: async () => {
        const F = await l.validate();
        await r(F);
      },
      unmountOnExit: !0,
      style: { width: 560 },
      children: g($, {
        form: l,
        layout: 'horizontal',
        labelAlign: 'left',
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
        className: de['search-form'],
        children: [
          s($.Item, { field: 'id', hidden: !0, children: s(H, {}) }),
          s($.Item, {
            label: '\u6743\u9650\u5305\u540D\u79F0',
            field: 'packageName',
            rules: [
              {
                required: !0,
                message: '\u8BF7\u8F93\u5165\u6743\u9650\u5305\u540D\u79F0',
              },
            ],
            children: s(H, {
              placeholder: '\u5982 \u9ED8\u8BA4\u79DF\u6237\u6743\u9650\u5305',
            }),
          }),
          s($.Item, {
            label: '\u63CF\u8FF0',
            field: 'description',
            children: s(H.TextArea, {
              autoSize: { minRows: 3, maxRows: 5 },
              placeholder:
                '\u8BF4\u660E\u8BE5\u6743\u9650\u5305\u9002\u7528\u7684\u79DF\u6237\u7C7B\u578B\u548C\u529F\u80FD\u8FB9\u754C',
            }),
          }),
        ],
      }),
    })
  );
}
var Q = {
  'package-tip': '_package-tip_1w2vc_1',
  'permission-transfer': '_permission-transfer_1w2vc_5',
  'package-grant-header': '_package-grant-header_1w2vc_8',
  'package-summary': '_package-summary_1w2vc_13',
};
const { Text: A } = ie;
function he(u) {
  var n;
  const e = (n = u.permissionId) != null ? n : u.id;
  return e != null ? String(e) : '';
}
function qe(u = []) {
  const e = new Set(),
    n = new Set(),
    r = new Map(),
    l = (F) =>
      F.flatMap((p) => {
        const E = he(p),
          h =
            E &&
            p.checkable !== !1 &&
            p.nodeType !== 'CATALOG' &&
            !!p.permissionId,
          P = l(p.children || []),
          y = [...(h ? [E] : []), ...P];
        return (
          E &&
            (e.add(E), h && n.add(E), p.nodeType === 'CATALOG' && r.set(E, y)),
          y
        );
      });
  return l(u), { allKeys: e, checkableKeys: n, catalogDescendantMenuKeys: r };
}
function me(u = []) {
  return u
    .map((e) => {
      const n = me(e.children || []),
        r = e.checkable !== !1 && e.nodeType !== 'CATALOG' && !!e.permissionId;
      return !r && n.length === 0
        ? null
        : {
            key: he(e),
            title: `${
              e.permissionName || e.objectName || e.permissionCode || e.id
            }${e.nodeType ? `\uFF08${e.nodeType}\uFF09` : ''}`,
            disableCheckbox: !r,
            children: n,
          };
    })
    .filter(Boolean);
}
const fe = {
  api: { label: 'api', color: 'arcoblue' },
  button: { label: 'btn', color: 'green' },
  form: { label: 'form', color: 'orange' },
  tab: { label: 'tab', color: 'purple' },
};
function Fe(u) {
  var n;
  const e = (u.childGroup || u.nodeType || '').toUpperCase();
  return e === 'API'
    ? ((n = u.resourceSubType) == null ? void 0 : n.toLowerCase()) || 'api'
    : e === 'ELEMENT' && u.resourceSubType
    ? u.resourceSubType.toLowerCase()
    : '';
}
function ge({ type: u }) {
  var r;
  const e = u.toLowerCase(),
    n = (r = fe[e]) != null ? r : { label: e, color: 'gray' };
  return s(J, { size: 'small', color: n.color, children: n.label });
}
function Ce() {
  return { element: [], api: [], other: [] };
}
function Ye(u) {
  const e = Ce(),
    n = Ce();
  return (
    u.forEach((r) => {
      const l = r.autoGrant === 1 ? n : e,
        F = (r.childGroup || r.nodeType || '').toUpperCase();
      F === 'API'
        ? l.api.push(r)
        : F === 'ELEMENT'
        ? l.element.push(r)
        : l.other.push(r);
    }),
    { manual: e, auto: n }
  );
}
function He(u) {
  return u.element.length > 0 || u.api.length > 0 || u.other.length > 0;
}
function Je(u) {
  var p, E;
  const e = u.permissionName || u.objectName || u.permissionCode || u.id,
    n = Fe(u),
    r = n ? ((E = (p = fe[n]) == null ? void 0 : p.label) != null ? E : n) : '',
    l = u.objectPath ? `${u.httpMethod || ''} ${u.objectPath}`.trim() : '',
    F = r ? `${r} ${e}` : String(e);
  return l ? `${F} \u2014 ${l}` : F;
}
function We({ item: u, ellipsis: e = !1 }) {
  const n = u.permissionName || u.objectName || u.permissionCode || u.id,
    r = Fe(u),
    l = u.objectPath ? `${u.httpMethod || ''} ${u.objectPath}`.trim() : '',
    F = Je(u);
  return e
    ? s(Te, {
        content: F,
        children: s('span', {
          className: f['grant-label-tooltip-wrap'],
          children: g('span', {
            className: f['grant-label-inline'],
            children: [
              r ? s(ge, { type: r }) : null,
              s(A, {
                className: f['grant-label-ellipsis'],
                ellipsis: !0,
                children: n,
              }),
            ],
          }),
        }),
      })
    : g(W, {
        wrap: !0,
        size: 8,
        align: 'center',
        children: [
          r ? s(ge, { type: r }) : null,
          s('span', { children: n }),
          l
            ? g(A, {
                type: 'secondary',
                style: { fontSize: 12 },
                children: ['\u2014 ', l],
              })
            : null,
        ],
      });
}
function Qe({ visible: u, record: e, onClose: n, onSaved: r }) {
  var ee;
  const [l, F] = o.exports.useState([]),
    [p, E] = o.exports.useState([]),
    [h, P] = o.exports.useState(''),
    [y, D] = o.exports.useState([]),
    k = o.exports.useRef({}),
    [O, L] = o.exports.useState(!1),
    [x, T] = o.exports.useState(!1),
    [w, M] = o.exports.useState(!1),
    S = o.exports.useMemo(() => qe(l), [l]),
    R = o.exports.useMemo(() => {
      const t = new Set(p),
        c = p.filter((a) => S.checkableKeys.has(a));
      return (
        S.catalogDescendantMenuKeys.forEach((a, m) => {
          a.length > 0 && a.every((b) => t.has(b)) && c.push(m);
        }),
        c
      );
    }, [p, S]),
    B = o.exports.useMemo(
      () => p.map(Number).filter((t) => Number.isFinite(t) && t > 0).length,
      [p]
    ),
    K = o.exports.useMemo(() => h !== '' && p.includes(h), [p, h]);
  o.exports.useEffect(() => {
    if (!u || !e) return;
    let t = !1;
    return (
      L(!0),
      P(''),
      D([]),
      (k.current = {}),
      Promise.all([Ke(), $e(e.id)])
        .then(([c, a]) => {
          t || (F(c || []), E((a || []).map((m) => String(m.id))));
        })
        .finally(() => !t && L(!1)),
      () => {
        t = !0;
      }
    );
  }, [e, u]),
    o.exports.useEffect(() => {
      if (!h) {
        D([]);
        return;
      }
      const t = k.current[h];
      if (t) {
        D(t);
        return;
      }
      const c = Number(h);
      if (!Number.isFinite(c)) {
        D([]);
        return;
      }
      let a = !1;
      return (
        T(!0),
        pe(c)
          .then((m) => {
            if (a) return;
            const b = m || [];
            (k.current[h] = b), D(b);
          })
          .finally(() => !a && T(!1)),
        () => {
          a = !0;
        }
      );
    }, [h]);
  const G = o.exports.useMemo(
      () =>
        y
          .map((t) => t.permissionId)
          .filter((t) => t != null && t > 0)
          .map(String)
          .filter((t) => p.includes(t)),
      [y, p]
    ),
    I = o.exports.useCallback((t, c, a) => {
      c.forEach((m) => {
        m.permissionId && m.autoGrant === 1 && a.add(String(m.permissionId));
      }),
        (k.current[t] = c);
    }, []),
    i = o.exports.useCallback(
      (t, c, a) => {
        var b;
        const m = ((b = k.current[t]) == null ? void 0 : b.length)
          ? k.current[t]
          : y;
        c.length > 0
          ? (a.add(t),
            m.forEach((d) => {
              d.permissionId &&
                d.autoGrant === 1 &&
                a.add(String(d.permissionId));
            }))
          : a.delete(t);
      },
      [y]
    ),
    C = (t) => {
      const c = new Set(p),
        a = new Set(p.filter((d) => !S.allKeys.has(d)));
      t.filter((d) => S.checkableKeys.has(d)).forEach((d) => a.add(d)),
        [...c]
          .filter((d) => S.checkableKeys.has(d) && !a.has(d))
          .forEach((d) => {
            const j = k.current[d];
            j &&
              j.forEach((z) => {
                z.permissionId && a.delete(String(z.permissionId));
              });
          }),
        [...a]
          .filter((d) => !c.has(d))
          .forEach((d) => {
            const j = k.current[d];
            j
              ? I(d, j, a)
              : d === h && y.length
              ? I(d, y, a)
              : pe(Number(d)).then((z) => {
                  const ue = z || [];
                  (k.current[d] = ue),
                    E((te) => {
                      const V = new Set(te);
                      return V.has(d) ? (I(d, ue, V), Array.from(V)) : te;
                    });
                });
          }),
        E(Array.from(a));
    },
    N = (t) => {
      if (!h) return;
      const c = new Set(
        y
          .map((a) => (a.permissionId ? String(a.permissionId) : ''))
          .filter(Boolean)
      );
      E((a) => {
        const m = new Set(a.filter((b) => !c.has(b)));
        return t.forEach((b) => m.add(b)), i(h, t, m), Array.from(m);
      });
    },
    Ee = async () => {
      if (!!e) {
        M(!0);
        try {
          await Le({
            packageId: e.id,
            permissionIds: p
              .map((t) => Number(t))
              .filter((t) => Number.isFinite(t) && t > 0),
          }),
            v.success('\u6743\u9650\u5305\u6743\u9650\u5DF2\u4FDD\u5B58'),
            r == null || r(),
            n();
        } finally {
          M(!1);
        }
      }
    },
    X = o.exports.useMemo(() => Ye(y), [y]),
    ye = (t, c = 'api') =>
      s(
        oe,
        {
          value: String(t.permissionId),
          children: s(W, {
            wrap: c !== 'element',
            size: 8,
            align: 'center',
            className: c === 'element' ? f['grant-checkbox-label'] : void 0,
            children: s(We, { item: t, ellipsis: c === 'element' }),
          }),
        },
        t.permissionId
      ),
    U = (t, c, a, m = 'api') => {
      if (!c.length) return null;
      const b =
        m === 'element'
          ? f['grant-resource-list-element']
          : f['grant-resource-list-api'];
      return g(
        'div',
        {
          className: f['grant-resource-block'],
          children: [
            s(A, {
              type: 'secondary',
              className: f['grant-resource-type-title'],
              children: t,
            }),
            s('div', {
              className: b,
              children: c.map((d) =>
                s(
                  'div',
                  {
                    className: `${f['grant-resource-item']}${
                      m === 'element'
                        ? ` ${f['grant-resource-item-element']}`
                        : ''
                    }`,
                    children: ye(d, m),
                  },
                  d.permissionId
                )
              ),
            }),
          ],
        },
        a
      );
    },
    Z = (t, c, a) =>
      He(c)
        ? g(
            'div',
            {
              className: f['grant-mode-section'],
              children: [
                s(A, { className: f['grant-mode-section-title'], children: t }),
                U(
                  '\u9875\u9762\u5143\u7D20',
                  c.element,
                  `${a}-element`,
                  'element'
                ),
                U('API', c.api, `${a}-api`, 'api'),
                U('\u5176\u4ED6', c.other, `${a}-other`, 'api'),
              ],
            },
            a
          )
        : null,
    be = { direction: 'vertical', disabled: !h, value: G, onChange: N };
  return g(xe, {
    title: `\u7EF4\u62A4\u6743\u9650\uFF1A${
      (e == null ? void 0 : e.packageName) || ''
    }`,
    visible: u,
    width: 920,
    onCancel: n,
    onOk: Ee,
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
      g('div', {
        className: Q['package-grant-header'],
        children: [
          s(Ne, {
            type: 'warning',
            content:
              '\u4FEE\u6539\u6743\u9650\u5305\u4F1A\u7ACB\u5373\u5F71\u54CD\u6240\u6709\u7ED1\u5B9A\u8BE5\u6743\u9650\u5305\u7684\u666E\u901A\u79DF\u6237\uFF1B\u5E73\u53F0\u79DF\u6237\u65E0\u9700\u914D\u7F6E\u6743\u9650\u8FB9\u754C\u3002',
          }),
          g('div', {
            className: Q['package-summary'],
            children: [
              g(J, {
                color: 'arcoblue',
                children: ['\u6743\u9650\u6570\uFF1A', B],
              }),
              g(J, {
                color: 'green',
                children: [
                  '\u7ED1\u5B9A\u79DF\u6237\uFF1A',
                  (ee = e == null ? void 0 : e.tenantCount) != null ? ee : 0,
                ],
              }),
              s(A, {
                type: 'secondary',
                children:
                  '\u666E\u901A\u79DF\u6237\u7BA1\u7406\u5458\u5C06\u81EA\u52A8\u62E5\u6709\u6709\u6548\u8FB9\u754C\u5185\u5168\u90E8\u6743\u9650\u3002',
              }),
            ],
          }),
        ],
      }),
      s(ae, {
        loading: O,
        block: !0,
        className: f['grant-spin'],
        children: g('div', {
          className: f['grant-layout'],
          children: [
            g('div', {
              className: f['grant-panel-left'],
              children: [
                g(A, {
                  className: f['grant-panel-title'],
                  children: [
                    '\u83DC\u5355\u6743\u9650',
                    s(A, {
                      type: 'secondary',
                      style: { marginLeft: 8, fontSize: 12 },
                      children:
                        '\uFF08CATALOG \u4E3A\u76EE\u5F55\uFF0C\u65E0\u9700\u52FE\u9009\uFF1B\u6388\u6743\u5B50\u83DC\u5355\u540E\u76EE\u5F55\u4F1A\u81EA\u52A8\u5C55\u793A\uFF09',
                    }),
                  ],
                }),
                s('div', {
                  className: f['grant-panel-body'],
                  children: s(Pe, {
                    checkable: !0,
                    checkStrictly: !0,
                    checkedKeys: R,
                    selectedKeys: h ? [h] : [],
                    onCheck: C,
                    onSelect: (t) => {
                      const c = t[0] ? String(t[0]) : '';
                      P(c);
                    },
                    treeData: me(l),
                  }),
                }),
              ],
            }),
            g('div', {
              className: f['grant-panel-right'],
              children: [
                g(A, {
                  className: f['grant-panel-title'],
                  children: [
                    '\u9644\u5C5E\u6743\u9650\u70B9',
                    h && !K
                      ? s(A, {
                          type: 'secondary',
                          style: { marginLeft: 8, fontSize: 12 },
                          children:
                            '\uFF08\u52FE\u9009\u9644\u5C5E\u6743\u9650\u540E\u5C06\u81EA\u52A8\u52FE\u9009\u5DE6\u4FA7\u83DC\u5355\uFF09',
                        })
                      : null,
                  ],
                }),
                s('div', {
                  className: f['grant-panel-body'],
                  children: s(ae, {
                    loading: x,
                    style: { width: '100%' },
                    children: h
                      ? y.length === 0 && !x
                        ? s(re, {
                            description:
                              '\u8BE5\u83DC\u5355\u672A\u914D\u7F6E\u9644\u5C5E\u6743\u9650\uFF0C\u8868\u793A\u4E0D\u9700\u8981\u5176\u4ED6 API/\u5143\u7D20\u6743\u9650\uFF1B\u82E5\u9700\u8981\u8BF7\u5728\u6743\u9650\u5173\u7CFB\u7BA1\u7406\u9875\u6DFB\u52A0',
                          })
                        : g(
                            oe.Group,
                            Y(q({}, be), {
                              children: [
                                Z(
                                  '\u624B\u52A8\u6388\u6743',
                                  X.manual,
                                  'manual'
                                ),
                                Z('\u81EA\u52A8\u6388\u6743', X.auto, 'auto'),
                              ],
                            })
                          )
                      : s(re, {
                          description:
                            '\u8BF7\u5728\u5DE6\u4FA7\u9009\u62E9\u83DC\u5355',
                        }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const { Title: Xe, Text: Ze } = ie;
function eu(u, e, n) {
  var r, l, F;
  return {
    page: e,
    pageSize: n,
    id: ((r = u.id) == null ? void 0 : r.trim()) || void 0,
    packageCode: ((l = u.packageCode) == null ? void 0 : l.trim()) || void 0,
    packageName: ((F = u.packageName) == null ? void 0 : F.trim()) || void 0,
    activeStatus: u.activeStatus || void 0,
  };
}
function Cu() {
  const [u, e] = o.exports.useState([]),
    [n, r] = o.exports.useState(!1),
    [l, F] = o.exports.useState(1),
    [p, E] = o.exports.useState(10),
    [h, P] = o.exports.useState(0),
    [y, D] = o.exports.useState({}),
    [k, O] = o.exports.useState(0),
    [L, x] = o.exports.useState(!1),
    [T, w] = o.exports.useState(null),
    [M, S] = o.exports.useState(null),
    R = o.exports.useMemo(
      () => ({
        current: l,
        pageSize: p,
        total: h,
        showTotal: !0,
        sizeCanChange: !0,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [l, p, h]
    );
  o.exports.useEffect(() => {
    let i = !1;
    return (
      r(!0),
      Ge(eu(y, l, p))
        .then((C) => {
          i || (e(C.list || []), P(C.total || 0));
        })
        .finally(() => !i && r(!1)),
      () => {
        i = !0;
      }
    );
  }, [l, p, y, k]);
  const B = o.exports.useCallback(() => O((i) => i + 1), []),
    K = async (i) => {
      var N;
      const C = {
        id: i.id,
        packageName: i.packageName.trim(),
        description: ((N = i.description) == null ? void 0 : N.trim()) || '',
      };
      T
        ? (await _e(Y(q({}, C), { id: T.id })),
          v.success('\u6743\u9650\u5305\u5DF2\u66F4\u65B0'))
        : (await Oe(C), v.success('\u6743\u9650\u5305\u5DF2\u521B\u5EFA')),
        x(!1),
        w(null),
        B();
    },
    G = o.exports.useMemo(
      () => ({
        onEdit: (i) => {
          w(i), x(!0);
        },
        onGrant: (i) => S(i),
        onEnable: (i) => {
          _.confirm({
            title: '\u786E\u8BA4\u542F\u7528\u6743\u9650\u5305\uFF1F',
            content: `\u542F\u7528\u540E\uFF0C\u7ED1\u5B9A ${i.packageName} \u7684\u79DF\u6237\u5C06\u91CD\u65B0\u83B7\u5F97\u8BE5\u8FB9\u754C\u80FD\u529B\u3002`,
            onOk: async () => {
              await le({ id: i.id, activeStatus: 1 }),
                v.success('\u6743\u9650\u5305\u5DF2\u542F\u7528'),
                B();
            },
          });
        },
        onDisable: (i) => {
          var C;
          _.confirm({
            title: '\u786E\u8BA4\u505C\u7528\u6743\u9650\u5305\uFF1F',
            content: `\u505C\u7528\u4F1A\u5F71\u54CD ${
              (C = i.tenantCount) != null ? C : 0
            } \u4E2A\u5DF2\u7ED1\u5B9A\u79DF\u6237\u7684\u6709\u6548\u6743\u9650\u8FB9\u754C\u3002`,
            onOk: async () => {
              await le({ id: i.id, activeStatus: 2 }),
                v.success('\u6743\u9650\u5305\u5DF2\u505C\u7528'),
                B();
            },
          });
        },
        onDelete: (i) => {
          var C;
          _.confirm({
            title: '\u786E\u8BA4\u5220\u9664\u6743\u9650\u5305\uFF1F',
            content: `\u5220\u9664 ${
              i.packageName
            } \u540E\uFF0C\u5C06\u540C\u65F6\u89E3\u7ED1 ${
              (C = i.tenantCount) != null ? C : 0
            } \u4E2A\u5DF2\u7ED1\u5B9A\u79DF\u6237\u7684\u6743\u9650\u5305\uFF0C\u53EF\u80FD\u5F71\u54CD\u76F8\u5173\u7528\u6237\u6B63\u5E38\u4F7F\u7528\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002`,
            onOk: async () => {
              await ze(i.id),
                v.success('\u6743\u9650\u5305\u5DF2\u5220\u9664'),
                B();
            },
          });
        },
      }),
      [B]
    ),
    I = o.exports.useMemo(() => Ue(G), [G]);
  return g(we, {
    children: [
      s(Xe, {
        heading: 6,
        children: '\u6743\u9650\u8FB9\u754C\u5305\u7BA1\u7406',
      }),
      s(Ze, {
        type: 'secondary',
        className: Q['package-tip'],
        children:
          '\u5E73\u53F0\u4FA7\u96C6\u4E2D\u7EF4\u62A4\u6743\u9650\u5305\uFF0C\u666E\u901A\u79DF\u6237\u7ED1\u5B9A\u540E\u81EA\u52A8\u5F62\u6210\u79DF\u6237\u6709\u6548\u6743\u9650\u8FB9\u754C\u3002',
      }),
      s(Re, {
        onSearch: (i) => {
          F(1), D(i);
        },
      }),
      s(je, {
        requiredPermissions: [
          { resource: 'system:permission-boundary-package:access' },
        ],
        children: g('div', {
          className: de['button-group'],
          children: [
            s(W, {
              children: s(ce, {
                type: 'primary',
                icon: s(ve, {}),
                onClick: () => {
                  w(null), x(!0);
                },
                children: '\u65B0\u589E\u6743\u9650\u5305',
              }),
            }),
            s(ce, {
              icon: s(Me, {}),
              onClick: () => B(),
              children: '\u5237\u65B0',
            }),
          ],
        }),
      }),
      s(Ie, {
        rowKey: 'id',
        loading: n,
        pagination: R,
        columns: I,
        data: u,
        border: !0,
        onChange: (i) => {
          F((C) => {
            var N;
            return (N = i.current) != null ? N : C;
          }),
            E((C) => (i.pageSize != null ? Number(i.pageSize) : C));
        },
      }),
      s(Ve, {
        visible: L,
        record: T,
        onCancel: () => {
          x(!1), w(null);
        },
        onSubmit: K,
      }),
      s(Qe, { visible: !!M, record: M, onClose: () => S(null), onSaved: B }),
    ],
  });
}
export { Cu as default };
