var Se = Object.defineProperty,
  Ae = Object.defineProperties;
var Be = Object.getOwnPropertyDescriptors;
var se = Object.getOwnPropertySymbols;
var xe = Object.prototype.hasOwnProperty,
  De = Object.prototype.propertyIsEnumerable;
var ne = (u, e, s) =>
    e in u
      ? Se(u, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (u[e] = s),
  Y = (u, e) => {
    for (var s in e || (e = {})) xe.call(e, s) && ne(u, s, e[s]);
    if (se) for (var s of se(e)) De.call(e, s) && ne(u, s, e[s]);
    return u;
  },
  H = (u, e) => Ae(u, Be(e));
import {
  ag as P,
  r as o,
  j as t,
  aS as z,
  a as f,
  ah as O,
  aL as J,
  w as Ne,
  x as Pe,
  b as W,
  h as re,
  aY as Te,
  b0 as oe,
  ak as ie,
  T as ce,
  M,
  S as Q,
  P as ve,
  av as we,
  B as le,
  aT as Me,
  $ as Ie,
  aM as je,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import { P as $e } from './index.7e565d94.js';
import {
  f as Le,
  s as Ge,
  a as _e,
  u as de,
  d as ze,
  b as Oe,
  c as Re,
} from './permission-boundary-package.1cbff11c.js';
import Ke from './form.c016d283.js';
import { s as pe } from './index.module.ea069206.js';
/* empty css               */ import {
  f as Ue,
  a as he,
} from './access-role.0b3f726a.js';
import { s as g } from './index.module.0c4d71de.js';
import { getColumns as Ve } from './constants.be0d066d.js';
import './index.04d9875a.js';
import './access-control.2c5ad8d6.js';
import './utils.49caa52b.js';
function qe({ visible: u, record: e, onCancel: s, onSubmit: r }) {
  const [c] = P.useForm();
  return (
    o.exports.useEffect(() => {
      !u ||
        (e
          ? c.setFieldsValue({
              id: e.id,
              packageCode: e.packageCode,
              packageName: e.packageName,
              description: e.description || '',
              activeStatus: e.activeStatus || 1,
            })
          : (c.resetFields(), c.setFieldsValue({ activeStatus: 1 })));
    }, [c, e, u]),
    t(z, {
      title: e
        ? '\u7F16\u8F91\u6743\u9650\u8FB9\u754C\u5305'
        : '\u65B0\u589E\u6743\u9650\u8FB9\u754C\u5305',
      visible: u,
      onCancel: s,
      onOk: async () => {
        const F = await c.validate();
        await r(F);
      },
      unmountOnExit: !0,
      style: { width: 560 },
      children: f(P, {
        form: c,
        layout: 'horizontal',
        labelAlign: 'left',
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
        className: pe['search-form'],
        children: [
          t(P.Item, { field: 'id', hidden: !0, children: t(O, {}) }),
          t(P.Item, {
            label: '\u6743\u9650\u5305\u7F16\u7801',
            field: 'packageCode',
            rules: [
              {
                required: !0,
                message: '\u8BF7\u8F93\u5165\u6743\u9650\u5305\u7F16\u7801',
              },
            ],
            children: t(O, {
              disabled: !!e,
              placeholder: '\u5982 DEFAULT_TENANT_PACKAGE',
            }),
          }),
          t(P.Item, {
            label: '\u6743\u9650\u5305\u540D\u79F0',
            field: 'packageName',
            rules: [
              {
                required: !0,
                message: '\u8BF7\u8F93\u5165\u6743\u9650\u5305\u540D\u79F0',
              },
            ],
            children: t(O, {
              placeholder: '\u5982 \u9ED8\u8BA4\u79DF\u6237\u6743\u9650\u5305',
            }),
          }),
          t(P.Item, {
            label: '\u542F\u7528\u72B6\u6001',
            field: 'activeStatus',
            children: f(J.Group, {
              children: [
                t(J, { value: 1, children: '\u542F\u7528' }),
                t(J, { value: 2, children: '\u505C\u7528' }),
              ],
            }),
          }),
          t(P.Item, {
            label: '\u63CF\u8FF0',
            field: 'description',
            children: t(O.TextArea, {
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
var X = {
  'package-tip': '_package-tip_1w2vc_1',
  'permission-transfer': '_permission-transfer_1w2vc_5',
  'package-grant-header': '_package-grant-header_1w2vc_8',
  'package-summary': '_package-summary_1w2vc_13',
};
const { Text: B } = ce;
function me(u) {
  var s;
  const e = (s = u.permissionId) != null ? s : u.id;
  return e != null ? String(e) : '';
}
function Ye(u = []) {
  const e = new Set(),
    s = new Set(),
    r = new Map(),
    c = (F) =>
      F.flatMap((p) => {
        const C = me(p),
          h =
            C &&
            p.checkable !== !1 &&
            p.nodeType !== 'CATALOG' &&
            !!p.permissionId,
          T = c(p.children || []),
          E = [...(h ? [C] : []), ...T];
        return (
          C &&
            (e.add(C), h && s.add(C), p.nodeType === 'CATALOG' && r.set(C, E)),
          E
        );
      });
  return c(u), { allKeys: e, checkableKeys: s, catalogDescendantMenuKeys: r };
}
function fe(u = []) {
  return u
    .map((e) => {
      const s = fe(e.children || []),
        r = e.checkable !== !1 && e.nodeType !== 'CATALOG' && !!e.permissionId;
      return !r && s.length === 0
        ? null
        : {
            key: me(e),
            title: `${
              e.permissionName || e.objectName || e.permissionCode || e.id
            }${e.nodeType ? `\uFF08${e.nodeType}\uFF09` : ''}`,
            disableCheckbox: !r,
            children: s,
          };
    })
    .filter(Boolean);
}
const ge = {
  api: { label: 'api', color: 'arcoblue' },
  button: { label: 'btn', color: 'green' },
  form: { label: 'form', color: 'orange' },
  tab: { label: 'tab', color: 'purple' },
};
function Fe(u) {
  var s;
  const e = (u.childGroup || u.nodeType || '').toUpperCase();
  return e === 'API'
    ? ((s = u.resourceSubType) == null ? void 0 : s.toLowerCase()) || 'api'
    : e === 'ELEMENT' && u.resourceSubType
    ? u.resourceSubType.toLowerCase()
    : '';
}
function Ce({ type: u }) {
  var r;
  const e = u.toLowerCase(),
    s = (r = ge[e]) != null ? r : { label: e, color: 'gray' };
  return t(W, { size: 'small', color: s.color, children: s.label });
}
function Ee() {
  return { element: [], api: [], other: [] };
}
function He(u) {
  const e = Ee(),
    s = Ee();
  return (
    u.forEach((r) => {
      const c = r.autoGrant === 1 ? s : e,
        F = (r.childGroup || r.nodeType || '').toUpperCase();
      F === 'API'
        ? c.api.push(r)
        : F === 'ELEMENT'
        ? c.element.push(r)
        : c.other.push(r);
    }),
    { manual: e, auto: s }
  );
}
function Je(u) {
  return u.element.length > 0 || u.api.length > 0 || u.other.length > 0;
}
function We(u) {
  var p, C;
  const e = u.permissionName || u.objectName || u.permissionCode || u.id,
    s = Fe(u),
    r = s ? ((C = (p = ge[s]) == null ? void 0 : p.label) != null ? C : s) : '',
    c = u.objectPath ? `${u.httpMethod || ''} ${u.objectPath}`.trim() : '',
    F = r ? `${r} ${e}` : String(e);
  return c ? `${F} \u2014 ${c}` : F;
}
function Qe({ item: u, ellipsis: e = !1 }) {
  const s = u.permissionName || u.objectName || u.permissionCode || u.id,
    r = Fe(u),
    c = u.objectPath ? `${u.httpMethod || ''} ${u.objectPath}`.trim() : '',
    F = We(u);
  return e
    ? t(ve, {
        content: F,
        children: t('span', {
          className: g['grant-label-tooltip-wrap'],
          children: f('span', {
            className: g['grant-label-inline'],
            children: [
              r ? t(Ce, { type: r }) : null,
              t(B, {
                className: g['grant-label-ellipsis'],
                ellipsis: !0,
                children: s,
              }),
            ],
          }),
        }),
      })
    : f(Q, {
        wrap: !0,
        size: 8,
        align: 'center',
        children: [
          r ? t(Ce, { type: r }) : null,
          t('span', { children: s }),
          c
            ? f(B, {
                type: 'secondary',
                style: { fontSize: 12 },
                children: ['\u2014 ', c],
              })
            : null,
        ],
      });
}
function Xe({ visible: u, record: e, onClose: s, onSaved: r }) {
  var ue;
  const [c, F] = o.exports.useState([]),
    [p, C] = o.exports.useState([]),
    [h, T] = o.exports.useState(''),
    [E, x] = o.exports.useState([]),
    k = o.exports.useRef({}),
    [R, L] = o.exports.useState(!1),
    [D, v] = o.exports.useState(!1),
    [w, I] = o.exports.useState(!1),
    S = o.exports.useMemo(() => Ye(c), [c]),
    K = o.exports.useMemo(() => {
      const a = new Set(p),
        l = p.filter((n) => S.checkableKeys.has(n));
      return (
        S.catalogDescendantMenuKeys.forEach((n, m) => {
          n.length > 0 && n.every((b) => a.has(b)) && l.push(m);
        }),
        l
      );
    }, [p, S]),
    A = o.exports.useMemo(
      () => p.map(Number).filter((a) => Number.isFinite(a) && a > 0).length,
      [p]
    ),
    U = o.exports.useMemo(() => h !== '' && p.includes(h), [p, h]);
  o.exports.useEffect(() => {
    if (!u || !e) return;
    let a = !1;
    return (
      L(!0),
      T(''),
      x([]),
      (k.current = {}),
      Promise.all([Ue(), Le(e.id)])
        .then(([l, n]) => {
          a || (F(l || []), C((n || []).map((m) => String(m.id))));
        })
        .finally(() => !a && L(!1)),
      () => {
        a = !0;
      }
    );
  }, [e, u]),
    o.exports.useEffect(() => {
      if (!h) {
        x([]);
        return;
      }
      const a = k.current[h];
      if (a) {
        x(a);
        return;
      }
      const l = Number(h);
      if (!Number.isFinite(l)) {
        x([]);
        return;
      }
      let n = !1;
      return (
        v(!0),
        he(l)
          .then((m) => {
            if (n) return;
            const b = m || [];
            (k.current[h] = b), x(b);
          })
          .finally(() => !n && v(!1)),
        () => {
          n = !0;
        }
      );
    }, [h]);
  const G = o.exports.useMemo(
      () =>
        E.map((a) => a.permissionId)
          .filter((a) => a != null && a > 0)
          .map(String)
          .filter((a) => p.includes(a)),
      [E, p]
    ),
    j = o.exports.useCallback((a, l, n) => {
      l.forEach((m) => {
        m.permissionId && m.autoGrant === 1 && n.add(String(m.permissionId));
      }),
        (k.current[a] = l);
    }, []),
    i = o.exports.useCallback(
      (a, l, n) => {
        var b;
        const m = ((b = k.current[a]) == null ? void 0 : b.length)
          ? k.current[a]
          : E;
        l.length > 0
          ? (n.add(a),
            m.forEach((d) => {
              d.permissionId &&
                d.autoGrant === 1 &&
                n.add(String(d.permissionId));
            }))
          : n.delete(a);
      },
      [E]
    ),
    y = (a) => {
      const l = new Set(p),
        n = new Set(p.filter((d) => !S.allKeys.has(d)));
      a.filter((d) => S.checkableKeys.has(d)).forEach((d) => n.add(d)),
        [...l]
          .filter((d) => S.checkableKeys.has(d) && !n.has(d))
          .forEach((d) => {
            const $ = k.current[d];
            $ &&
              $.forEach((_) => {
                _.permissionId && n.delete(String(_.permissionId));
              });
          }),
        [...n]
          .filter((d) => !l.has(d))
          .forEach((d) => {
            const $ = k.current[d];
            $
              ? j(d, $, n)
              : d === h && E.length
              ? j(d, E, n)
              : he(Number(d)).then((_) => {
                  const te = _ || [];
                  (k.current[d] = te),
                    C((ae) => {
                      const q = new Set(ae);
                      return q.has(d) ? (j(d, te, q), Array.from(q)) : ae;
                    });
                });
          }),
        C(Array.from(n));
    },
    N = (a) => {
      if (!h) return;
      const l = new Set(
        E.map((n) => (n.permissionId ? String(n.permissionId) : '')).filter(
          Boolean
        )
      );
      C((n) => {
        const m = new Set(n.filter((b) => !l.has(b)));
        return a.forEach((b) => m.add(b)), i(h, a, m), Array.from(m);
      });
    },
    ye = async () => {
      if (!!e) {
        I(!0);
        try {
          await Ge({
            packageId: e.id,
            permissionIds: p
              .map((a) => Number(a))
              .filter((a) => Number.isFinite(a) && a > 0),
          }),
            M.success('\u6743\u9650\u5305\u6743\u9650\u5DF2\u4FDD\u5B58'),
            r == null || r(),
            s();
        } finally {
          I(!1);
        }
      }
    },
    Z = o.exports.useMemo(() => He(E), [E]),
    be = (a, l = 'api') =>
      t(
        ie,
        {
          value: String(a.permissionId),
          children: t(Q, {
            wrap: l !== 'element',
            size: 8,
            align: 'center',
            className: l === 'element' ? g['grant-checkbox-label'] : void 0,
            children: t(Qe, { item: a, ellipsis: l === 'element' }),
          }),
        },
        a.permissionId
      ),
    V = (a, l, n, m = 'api') => {
      if (!l.length) return null;
      const b =
        m === 'element'
          ? g['grant-resource-list-element']
          : g['grant-resource-list-api'];
      return f(
        'div',
        {
          className: g['grant-resource-block'],
          children: [
            t(B, {
              type: 'secondary',
              className: g['grant-resource-type-title'],
              children: a,
            }),
            t('div', {
              className: b,
              children: l.map((d) =>
                t(
                  'div',
                  {
                    className: `${g['grant-resource-item']}${
                      m === 'element'
                        ? ` ${g['grant-resource-item-element']}`
                        : ''
                    }`,
                    children: be(d, m),
                  },
                  d.permissionId
                )
              ),
            }),
          ],
        },
        n
      );
    },
    ee = (a, l, n) =>
      Je(l)
        ? f(
            'div',
            {
              className: g['grant-mode-section'],
              children: [
                t(B, { className: g['grant-mode-section-title'], children: a }),
                V(
                  '\u9875\u9762\u5143\u7D20',
                  l.element,
                  `${n}-element`,
                  'element'
                ),
                V('API', l.api, `${n}-api`, 'api'),
                V('\u5176\u4ED6', l.other, `${n}-other`, 'api'),
              ],
            },
            n
          )
        : null,
    ke = { direction: 'vertical', disabled: !h, value: G, onChange: N };
  return f(Ne, {
    title: `\u7EF4\u62A4\u6743\u9650\uFF1A${
      (e == null ? void 0 : e.packageName) || ''
    }`,
    visible: u,
    width: 920,
    onCancel: s,
    onOk: ye,
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
      f('div', {
        className: X['package-grant-header'],
        children: [
          t(Pe, {
            type: 'warning',
            content:
              '\u4FEE\u6539\u6743\u9650\u5305\u4F1A\u7ACB\u5373\u5F71\u54CD\u6240\u6709\u7ED1\u5B9A\u8BE5\u6743\u9650\u5305\u7684\u666E\u901A\u79DF\u6237\uFF1B\u5E73\u53F0\u79DF\u6237\u65E0\u9700\u914D\u7F6E\u6743\u9650\u8FB9\u754C\u3002',
          }),
          f('div', {
            className: X['package-summary'],
            children: [
              f(W, {
                color: 'arcoblue',
                children: ['\u6743\u9650\u6570\uFF1A', A],
              }),
              f(W, {
                color: 'green',
                children: [
                  '\u7ED1\u5B9A\u79DF\u6237\uFF1A',
                  (ue = e == null ? void 0 : e.tenantCount) != null ? ue : 0,
                ],
              }),
              t(B, {
                type: 'secondary',
                children:
                  '\u666E\u901A\u79DF\u6237\u7BA1\u7406\u5458\u5C06\u81EA\u52A8\u62E5\u6709\u6709\u6548\u8FB9\u754C\u5185\u5168\u90E8\u6743\u9650\u3002',
              }),
            ],
          }),
        ],
      }),
      t(re, {
        loading: R,
        block: !0,
        className: g['grant-spin'],
        children: f('div', {
          className: g['grant-layout'],
          children: [
            f('div', {
              className: g['grant-panel-left'],
              children: [
                f(B, {
                  className: g['grant-panel-title'],
                  children: [
                    '\u83DC\u5355\u6743\u9650',
                    t(B, {
                      type: 'secondary',
                      style: { marginLeft: 8, fontSize: 12 },
                      children:
                        '\uFF08CATALOG \u4E3A\u76EE\u5F55\uFF0C\u65E0\u9700\u52FE\u9009\uFF1B\u6388\u6743\u5B50\u83DC\u5355\u540E\u76EE\u5F55\u4F1A\u81EA\u52A8\u5C55\u793A\uFF09',
                    }),
                  ],
                }),
                t('div', {
                  className: g['grant-panel-body'],
                  children: t(Te, {
                    checkable: !0,
                    checkStrictly: !0,
                    checkedKeys: K,
                    selectedKeys: h ? [h] : [],
                    onCheck: y,
                    onSelect: (a) => {
                      const l = a[0] ? String(a[0]) : '';
                      T(l);
                    },
                    treeData: fe(c),
                  }),
                }),
              ],
            }),
            f('div', {
              className: g['grant-panel-right'],
              children: [
                f(B, {
                  className: g['grant-panel-title'],
                  children: [
                    '\u9644\u5C5E\u6743\u9650\u70B9',
                    h && !U
                      ? t(B, {
                          type: 'secondary',
                          style: { marginLeft: 8, fontSize: 12 },
                          children:
                            '\uFF08\u52FE\u9009\u9644\u5C5E\u6743\u9650\u540E\u5C06\u81EA\u52A8\u52FE\u9009\u5DE6\u4FA7\u83DC\u5355\uFF09',
                        })
                      : null,
                  ],
                }),
                t('div', {
                  className: g['grant-panel-body'],
                  children: t(re, {
                    loading: D,
                    style: { width: '100%' },
                    children: h
                      ? E.length === 0 && !D
                        ? t(oe, {
                            description:
                              '\u8BE5\u83DC\u5355\u672A\u914D\u7F6E\u9644\u5C5E\u6743\u9650\uFF0C\u8868\u793A\u4E0D\u9700\u8981\u5176\u4ED6 API/\u5143\u7D20\u6743\u9650\uFF1B\u82E5\u9700\u8981\u8BF7\u5728\u6743\u9650\u5173\u7CFB\u7BA1\u7406\u9875\u6DFB\u52A0',
                          })
                        : f(
                            ie.Group,
                            H(Y({}, ke), {
                              children: [
                                ee(
                                  '\u624B\u52A8\u6388\u6743',
                                  Z.manual,
                                  'manual'
                                ),
                                ee('\u81EA\u52A8\u6388\u6743', Z.auto, 'auto'),
                              ],
                            })
                          )
                      : t(oe, {
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
const { Title: Ze, Text: eu } = ce;
function uu(u, e, s) {
  var r, c;
  return {
    page: e,
    pageSize: s,
    packageCode: ((r = u.packageCode) == null ? void 0 : r.trim()) || void 0,
    packageName: ((c = u.packageName) == null ? void 0 : c.trim()) || void 0,
    activeStatus: u.activeStatus || void 0,
  };
}
function Eu() {
  const [u, e] = o.exports.useState([]),
    [s, r] = o.exports.useState(!1),
    [c, F] = o.exports.useState(1),
    [p, C] = o.exports.useState(10),
    [h, T] = o.exports.useState(0),
    [E, x] = o.exports.useState({}),
    [k, R] = o.exports.useState(0),
    [L, D] = o.exports.useState(!1),
    [v, w] = o.exports.useState(null),
    [I, S] = o.exports.useState(null),
    K = o.exports.useMemo(
      () => ({
        current: c,
        pageSize: p,
        total: h,
        showTotal: !0,
        sizeCanChange: !0,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [c, p, h]
    );
  o.exports.useEffect(() => {
    let i = !1;
    return (
      r(!0),
      _e(uu(E, c, p))
        .then((y) => {
          i || (e(y.list || []), T(y.total || 0));
        })
        .finally(() => !i && r(!1)),
      () => {
        i = !0;
      }
    );
  }, [c, p, E, k]);
  const A = o.exports.useCallback(() => R((i) => i + 1), []),
    U = async (i) => {
      var N;
      const y = {
        id: i.id,
        packageCode: i.packageCode.trim().toUpperCase(),
        packageName: i.packageName.trim(),
        description: ((N = i.description) == null ? void 0 : N.trim()) || '',
        activeStatus: i.activeStatus || 1,
      };
      v
        ? (await Oe(H(Y({}, y), { id: v.id })),
          M.success('\u6743\u9650\u5305\u5DF2\u66F4\u65B0'))
        : (await Re(y), M.success('\u6743\u9650\u5305\u5DF2\u521B\u5EFA')),
        D(!1),
        w(null),
        A();
    },
    G = o.exports.useMemo(
      () => ({
        onEdit: (i) => {
          w(i), D(!0);
        },
        onGrant: (i) => S(i),
        onEnable: (i) => {
          z.confirm({
            title: '\u786E\u8BA4\u542F\u7528\u6743\u9650\u5305\uFF1F',
            content: `\u542F\u7528\u540E\uFF0C\u7ED1\u5B9A ${i.packageName} \u7684\u79DF\u6237\u5C06\u91CD\u65B0\u83B7\u5F97\u8BE5\u8FB9\u754C\u80FD\u529B\u3002`,
            onOk: async () => {
              await de({ id: i.id, activeStatus: 1 }),
                M.success('\u6743\u9650\u5305\u5DF2\u542F\u7528'),
                A();
            },
          });
        },
        onDisable: (i) => {
          var y;
          z.confirm({
            title: '\u786E\u8BA4\u505C\u7528\u6743\u9650\u5305\uFF1F',
            content: `\u505C\u7528\u4F1A\u5F71\u54CD ${
              (y = i.tenantCount) != null ? y : 0
            } \u4E2A\u5DF2\u7ED1\u5B9A\u79DF\u6237\u7684\u6709\u6548\u6743\u9650\u8FB9\u754C\u3002`,
            onOk: async () => {
              await de({ id: i.id, activeStatus: 2 }),
                M.success('\u6743\u9650\u5305\u5DF2\u505C\u7528'),
                A();
            },
          });
        },
        onDelete: (i) => {
          z.confirm({
            title: '\u786E\u8BA4\u5220\u9664\u6743\u9650\u5305\uFF1F',
            content: `\u5220\u9664 ${i.packageName} \u540E\uFF0C\u76F8\u5173\u79DF\u6237\u7ED1\u5B9A\u5C06\u4E0D\u518D\u751F\u6548\u3002`,
            onOk: async () => {
              await ze(i.id),
                M.success('\u6743\u9650\u5305\u5DF2\u5220\u9664'),
                A();
            },
          });
        },
      }),
      [A]
    ),
    j = o.exports.useMemo(() => Ve(G), [G]);
  return f(we, {
    children: [
      t(Ze, {
        heading: 6,
        children: '\u6743\u9650\u8FB9\u754C\u5305\u7BA1\u7406',
      }),
      t(eu, {
        type: 'secondary',
        className: X['package-tip'],
        children:
          '\u5E73\u53F0\u4FA7\u96C6\u4E2D\u7EF4\u62A4\u6743\u9650\u5305\uFF0C\u666E\u901A\u79DF\u6237\u7ED1\u5B9A\u540E\u81EA\u52A8\u5F62\u6210\u79DF\u6237\u6709\u6548\u6743\u9650\u8FB9\u754C\u3002',
      }),
      t(Ke, {
        onSearch: (i) => {
          F(1), x(i);
        },
      }),
      t($e, {
        requiredPermissions: [
          { resource: 'system:permission-boundary-package:access' },
        ],
        children: f('div', {
          className: pe['button-group'],
          children: [
            t(Q, {
              children: t(le, {
                type: 'primary',
                icon: t(Me, {}),
                onClick: () => {
                  w(null), D(!0);
                },
                children: '\u65B0\u589E\u6743\u9650\u5305',
              }),
            }),
            t(le, {
              icon: t(Ie, {}),
              onClick: () => A(),
              children: '\u5237\u65B0',
            }),
          ],
        }),
      }),
      t(je, {
        rowKey: 'id',
        loading: s,
        pagination: K,
        columns: j,
        data: u,
        border: !0,
        scroll: { x: 1320 },
        onChange: (i) => {
          F((y) => {
            var N;
            return (N = i.current) != null ? N : y;
          }),
            C((y) => (i.pageSize != null ? Number(i.pageSize) : y));
        },
      }),
      t(qe, {
        visible: L,
        record: v,
        onCancel: () => {
          D(!1), w(null);
        },
        onSubmit: U,
      }),
      t(Xe, { visible: !!I, record: I, onClose: () => S(null), onSaved: A }),
    ],
  });
}
export { Eu as default };
