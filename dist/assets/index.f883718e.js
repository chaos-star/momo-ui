var be = Object.defineProperty,
  Se = Object.defineProperties;
var Ce = Object.getOwnPropertyDescriptors;
var Z = Object.getOwnPropertySymbols;
var ye = Object.prototype.hasOwnProperty,
  Fe = Object.prototype.propertyIsEnumerable;
var ee = (e, t, n) =>
    t in e
      ? be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  R = (e, t) => {
    for (var n in t || (t = {})) ye.call(t, n) && ee(e, n, t[n]);
    if (Z) for (var n of Z(t)) Fe.call(t, n) && ee(e, n, t[n]);
    return e;
  },
  H = (e, t) => Se(e, Ce(t));
import {
  r as u,
  j as s,
  w as Ee,
  h as te,
  a as C,
  aY as xe,
  b0 as se,
  ak as ne,
  T as re,
  M as O,
  S as J,
  P as Te,
  b as Ne,
  ag as I,
  av as De,
  B as ae,
  aT as Ae,
  $ as ke,
  aM as Me,
  aS as oe,
  ah as ue,
  F as Ie,
  K as le,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  f as we,
  b as Be,
  a as ce,
  s as Pe,
  c as ve,
  d as je,
  u as Ge,
  e as Le,
} from './access-role.42596941.js';
import $e, {
  ROLE_TYPE_OPTIONS as Re,
  ASSIGN_SCOPE_OPTIONS as Oe,
} from './form.f9554fa1.js';
import { getColumns as ze } from './constants.31395536.js';
/* empty css               */ import { s as h } from './index.module.0c4d71de.js';
import './access-control.9e664147.js';
import './index.2cec1040.js';
import './accessControl.941fcf7e.js';
const { Text: T } = re;
function ie(e) {
  var n;
  const t = (n = e.permissionId) != null ? n : e.id;
  return t != null ? String(t) : '';
}
function _e(e = []) {
  const t = new Set(),
    n = new Set(),
    l = new Map(),
    f = (b) =>
      b.flatMap((i) => {
        const m = ie(i),
          p =
            m &&
            i.checkable !== !1 &&
            i.nodeType !== 'CATALOG' &&
            !!i.permissionId,
          A = f(i.children || []),
          S = [...(p ? [m] : []), ...A];
        return (
          m &&
            (t.add(m), p && n.add(m), i.nodeType === 'CATALOG' && l.set(m, S)),
          S
        );
      });
  return f(e), { allKeys: t, checkableKeys: n, catalogDescendantMenuKeys: l };
}
function de(e = []) {
  return e
    .map((t) => {
      const n = de(t.children || []),
        l = t.checkable !== !1 && t.nodeType !== 'CATALOG' && !!t.permissionId;
      return !l && n.length === 0
        ? null
        : {
            key: ie(t),
            title: `${
              t.permissionName || t.objectName || t.permissionCode || t.id
            }${t.nodeType ? `\uFF08${t.nodeType}\uFF09` : ''}`,
            disableCheckbox: !l,
            children: n,
          };
    })
    .filter(Boolean);
}
const pe = {
  api: { label: 'api', color: 'arcoblue' },
  button: { label: 'btn', color: 'green' },
  form: { label: 'form', color: 'orange' },
  tab: { label: 'tab', color: 'purple' },
};
function he(e) {
  var n;
  const t = (e.childGroup || e.nodeType || '').toUpperCase();
  return t === 'API'
    ? ((n = e.resourceSubType) == null ? void 0 : n.toLowerCase()) || 'api'
    : t === 'ELEMENT' && e.resourceSubType
    ? e.resourceSubType.toLowerCase()
    : '';
}
function fe({ type: e }) {
  var l;
  const t = e.toLowerCase(),
    n = (l = pe[t]) != null ? l : { label: t, color: 'gray' };
  return s(Ne, { size: 'small', color: n.color, children: n.label });
}
function me() {
  return { element: [], api: [], other: [] };
}
function Ke(e) {
  const t = me(),
    n = me();
  return (
    e.forEach((l) => {
      const f = l.autoGrant === 1 ? n : t,
        b = (l.childGroup || l.nodeType || '').toUpperCase();
      b === 'API'
        ? f.api.push(l)
        : b === 'ELEMENT'
        ? f.element.push(l)
        : f.other.push(l);
    }),
    { manual: t, auto: n }
  );
}
function Ve(e) {
  return e.element.length > 0 || e.api.length > 0 || e.other.length > 0;
}
function Ue(e) {
  var i, m;
  const t = e.permissionName || e.objectName || e.permissionCode || e.id,
    n = he(e),
    l = n ? ((m = (i = pe[n]) == null ? void 0 : i.label) != null ? m : n) : '',
    f = e.objectPath ? `${e.httpMethod || ''} ${e.objectPath}`.trim() : '',
    b = l ? `${l} ${t}` : String(t);
  return f ? `${b} \u2014 ${f}` : b;
}
function Ye({ item: e, ellipsis: t = !1 }) {
  const n = e.permissionName || e.objectName || e.permissionCode || e.id,
    l = he(e),
    f = e.objectPath ? `${e.httpMethod || ''} ${e.objectPath}`.trim() : '',
    b = Ue(e);
  return t
    ? s(Te, {
        content: b,
        children: s('span', {
          className: h['grant-label-tooltip-wrap'],
          children: C('span', {
            className: h['grant-label-inline'],
            children: [
              l ? s(fe, { type: l }) : null,
              s(T, {
                className: h['grant-label-ellipsis'],
                ellipsis: !0,
                children: n,
              }),
            ],
          }),
        }),
      })
    : C(J, {
        wrap: !0,
        size: 8,
        align: 'center',
        children: [
          l ? s(fe, { type: l }) : null,
          s('span', { children: n }),
          f
            ? C(T, {
                type: 'secondary',
                style: { fontSize: 12 },
                children: ['\u2014 ', f],
              })
            : null,
        ],
      });
}
function qe({ role: e, visible: t, onClose: n, onSaved: l }) {
  const [f, b] = u.exports.useState([]),
    [i, m] = u.exports.useState([]),
    [p, A] = u.exports.useState(''),
    [S, E] = u.exports.useState([]),
    F = u.exports.useRef({}),
    [z, j] = u.exports.useState(!1),
    [k, w] = u.exports.useState(!1),
    [_, N] = u.exports.useState(!1),
    x = u.exports.useMemo(() => _e(f), [f]),
    G = u.exports.useMemo(() => {
      const r = new Set(i),
        o = i.filter((a) => x.checkableKeys.has(a));
      return (
        x.catalogDescendantMenuKeys.forEach((a, g) => {
          a.length > 0 && a.every((y) => r.has(y)) && o.push(g);
        }),
        o
      );
    }, [i, x]),
    B = u.exports.useMemo(() => p !== '' && i.includes(p), [i, p]);
  u.exports.useEffect(() => {
    if (!t || !e) return;
    let r = !1;
    return (
      j(!0),
      A(''),
      E([]),
      (F.current = {}),
      Promise.all([we(), Be(e.id)])
        .then(([o, a]) => {
          r || (b(o || []), m((a.grantedPermissionIds || []).map(String)));
        })
        .finally(() => !r && j(!1)),
      () => {
        r = !0;
      }
    );
  }, [t, e]),
    u.exports.useEffect(() => {
      if (!p) {
        E([]);
        return;
      }
      const r = F.current[p];
      if (r) {
        E(r);
        return;
      }
      const o = Number(p);
      if (!Number.isFinite(o)) {
        E([]);
        return;
      }
      let a = !1;
      return (
        w(!0),
        ce(o)
          .then((g) => {
            if (a) return;
            const y = g || [];
            (F.current[p] = y), E(y);
          })
          .finally(() => !a && w(!1)),
        () => {
          a = !0;
        }
      );
    }, [p]);
  const P = u.exports.useMemo(
      () =>
        S.map((r) => r.permissionId)
          .filter((r) => r != null && r > 0)
          .map(String)
          .filter((r) => i.includes(r)),
      [S, i]
    ),
    D = u.exports.useCallback((r, o, a) => {
      o.forEach((g) => {
        g.permissionId && g.autoGrant === 1 && a.add(String(g.permissionId));
      }),
        (F.current[r] = o);
    }, []),
    K = u.exports.useCallback(
      (r, o, a) => {
        var y;
        const g = ((y = F.current[r]) == null ? void 0 : y.length)
          ? F.current[r]
          : S;
        o.length > 0
          ? (a.add(r),
            g.forEach((c) => {
              c.permissionId &&
                c.autoGrant === 1 &&
                a.add(String(c.permissionId));
            }))
          : a.delete(r);
      },
      [S]
    ),
    V = (r) => {
      const o = new Set(i),
        a = new Set(i.filter((c) => !x.allKeys.has(c)));
      r.filter((c) => x.checkableKeys.has(c)).forEach((c) => a.add(c)),
        [...o]
          .filter((c) => x.checkableKeys.has(c) && !a.has(c))
          .forEach((c) => {
            const v = F.current[c];
            v &&
              v.forEach(($) => {
                $.permissionId && a.delete(String($.permissionId));
              });
          }),
        [...a]
          .filter((c) => !o.has(c))
          .forEach((c) => {
            const v = F.current[c];
            v
              ? D(c, v, a)
              : c === p && S.length
              ? D(c, S, a)
              : ce(Number(c)).then(($) => {
                  const W = $ || [];
                  (F.current[c] = W),
                    m((X) => {
                      const q = new Set(X);
                      return q.has(c) ? (D(c, W, q), Array.from(q)) : X;
                    });
                });
          }),
        m(Array.from(a));
    },
    U = (r) => {
      if (!p) return;
      const o = new Set(
        S.map((a) => (a.permissionId ? String(a.permissionId) : '')).filter(
          Boolean
        )
      );
      m((a) => {
        const g = new Set(a.filter((y) => !o.has(y)));
        return r.forEach((y) => g.add(y)), K(p, r, g), Array.from(g);
      });
    },
    Y = async () => {
      if (!!e) {
        N(!0);
        try {
          const r = i.map(Number).filter((o) => Number.isFinite(o) && o > 0);
          await Pe({ roleId: e.id, permissionIds: r }),
            O.success('\u6743\u9650\u5DF2\u4FDD\u5B58'),
            l == null || l(),
            n();
        } finally {
          N(!1);
        }
      }
    },
    L = u.exports.useMemo(() => Ke(S), [S]),
    d = (r, o = 'api') =>
      s(
        ne,
        {
          value: String(r.permissionId),
          children: s(J, {
            wrap: o !== 'element',
            size: 8,
            align: 'center',
            className: o === 'element' ? h['grant-checkbox-label'] : void 0,
            children: s(Ye, { item: r, ellipsis: o === 'element' }),
          }),
        },
        r.permissionId
      ),
    M = (r, o, a, g = 'api') => {
      if (!o.length) return null;
      const y =
        g === 'element'
          ? h['grant-resource-list-element']
          : h['grant-resource-list-api'];
      return C(
        'div',
        {
          className: h['grant-resource-block'],
          children: [
            s(T, {
              type: 'secondary',
              className: h['grant-resource-type-title'],
              children: r,
            }),
            s('div', {
              className: y,
              children: o.map((c) =>
                s(
                  'div',
                  {
                    className: `${h['grant-resource-item']}${
                      g === 'element'
                        ? ` ${h['grant-resource-item-element']}`
                        : ''
                    }`,
                    children: d(c, g),
                  },
                  c.permissionId
                )
              ),
            }),
          ],
        },
        a
      );
    },
    Q = (r, o, a) =>
      Ve(o)
        ? C(
            'div',
            {
              className: h['grant-mode-section'],
              children: [
                s(T, { className: h['grant-mode-section-title'], children: r }),
                M(
                  '\u9875\u9762\u5143\u7D20',
                  o.element,
                  `${a}-element`,
                  'element'
                ),
                M('API', o.api, `${a}-api`, 'api'),
                M('\u5176\u4ED6', o.other, `${a}-other`, 'api'),
              ],
            },
            a
          )
        : null,
    ge = { direction: 'vertical', disabled: !p, value: P, onChange: U };
  return s(Ee, {
    title: `\u89D2\u8272\u6388\u6743\uFF1A${
      (e == null ? void 0 : e.roleName) || ''
    }`,
    visible: t,
    width: 920,
    confirmLoading: _,
    onOk: Y,
    onCancel: n,
    bodyStyle: {
      padding: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: 0,
    },
    children: s(te, {
      loading: z,
      block: !0,
      className: h['grant-spin'],
      children: C('div', {
        className: h['grant-layout'],
        children: [
          C('div', {
            className: h['grant-panel-left'],
            children: [
              C(T, {
                className: h['grant-panel-title'],
                children: [
                  '\u83DC\u5355\u6743\u9650',
                  s(T, {
                    type: 'secondary',
                    style: { marginLeft: 8, fontSize: 12 },
                    children:
                      '\uFF08CATALOG \u4E3A\u76EE\u5F55\uFF0C\u65E0\u9700\u52FE\u9009\uFF1B\u6388\u6743\u5B50\u83DC\u5355\u540E\u76EE\u5F55\u4F1A\u81EA\u52A8\u5C55\u793A\uFF09',
                  }),
                ],
              }),
              s('div', {
                className: h['grant-panel-body'],
                children: s(xe, {
                  checkable: !0,
                  checkStrictly: !0,
                  checkedKeys: G,
                  selectedKeys: p ? [p] : [],
                  onCheck: V,
                  onSelect: (r) => {
                    const o = r[0] ? String(r[0]) : '';
                    A(o);
                  },
                  treeData: de(f),
                }),
              }),
            ],
          }),
          C('div', {
            className: h['grant-panel-right'],
            children: [
              C(T, {
                className: h['grant-panel-title'],
                children: [
                  '\u9644\u5C5E\u6743\u9650\u70B9',
                  p && !B
                    ? s(T, {
                        type: 'secondary',
                        style: { marginLeft: 8, fontSize: 12 },
                        children:
                          '\uFF08\u52FE\u9009\u9644\u5C5E\u6743\u9650\u540E\u5C06\u81EA\u52A8\u52FE\u9009\u5DE6\u4FA7\u83DC\u5355\uFF09',
                      })
                    : null,
                ],
              }),
              s('div', {
                className: h['grant-panel-body'],
                children: s(te, {
                  loading: k,
                  style: { width: '100%' },
                  children: p
                    ? S.length === 0 && !k
                      ? s(se, {
                          description:
                            '\u8BE5\u83DC\u5355\u672A\u914D\u7F6E\u9644\u5C5E\u6743\u9650\uFF0C\u8868\u793A\u4E0D\u9700\u8981\u5176\u4ED6 API/\u5143\u7D20\u6743\u9650\uFF1B\u82E5\u9700\u8981\u8BF7\u5728\u6743\u9650\u5173\u7CFB\u7BA1\u7406\u9875\u6DFB\u52A0',
                        })
                      : C(
                          ne.Group,
                          H(R({}, ge), {
                            children: [
                              Q('\u624B\u52A8\u6388\u6743', L.manual, 'manual'),
                              Q('\u81EA\u52A8\u6388\u6743', L.auto, 'auto'),
                            ],
                          })
                        )
                    : s(se, {
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
  });
}
const { Title: He } = re;
function ct() {
  const [e] = I.useForm(),
    [t, n] = u.exports.useState([]),
    [l, f] = u.exports.useState(!1),
    [b, i] = u.exports.useState(1),
    [m, p] = u.exports.useState(10),
    [A, S] = u.exports.useState(0),
    [E, F] = u.exports.useState({}),
    [z, j] = u.exports.useState(0),
    [k, w] = u.exports.useState('create'),
    [_, N] = u.exports.useState(!1),
    [x, G] = u.exports.useState(!1),
    [B, P] = u.exports.useState(null),
    D = u.exports.useCallback(() => j((d) => d + 1), []);
  u.exports.useEffect(() => {
    let d = !1;
    return (
      f(!0),
      ve(R({ page: b, pageSize: m }, E))
        .then((M) => {
          d || (n(M.list || []), S(M.total || 0));
        })
        .finally(() => !d && f(!1)),
      () => {
        d = !0;
      }
    );
  }, [b, m, E, z]);
  const K = () => {
      w('create'),
        P(null),
        e.resetFields(),
        e.setFieldsValue({
          roleType: 'TENANT_CUSTOM',
          assignScope: 'TENANT_ONLY',
        }),
        N(!0);
    },
    V = (d) => {
      w('edit'), P(d), e.setFieldsValue(d), N(!0);
    },
    U = (d) => {
      P(d), G(!0);
    },
    Y = async () => {
      const d = await e.validate();
      k === 'create'
        ? (await je(d), O.success('\u89D2\u8272\u5DF2\u65B0\u589E'))
        : B &&
          (await Ge(H(R({}, d), { id: B.id })),
          O.success('\u89D2\u8272\u5DF2\u66F4\u65B0')),
        N(!1),
        D();
    },
    L = ze({
      onEdit: V,
      onGrant: U,
      onDelete: (d) =>
        oe.confirm({
          title: '\u5220\u9664\u89D2\u8272',
          content: `\u786E\u8BA4\u5220\u9664\u89D2\u8272 ${d.roleName}\uFF1F`,
          onOk: async () => {
            await Le(d.id), O.success('\u89D2\u8272\u5DF2\u5220\u9664'), D();
          },
        }),
    });
  return C(De, {
    children: [
      s(He, { heading: 6, children: '\u89D2\u8272\u7BA1\u7406' }),
      s($e, {
        onSearch: (d) => {
          i(1), F(d);
        },
      }),
      C('div', {
        className: h['button-group'],
        children: [
          s(J, {
            children: s(ae, {
              type: 'primary',
              icon: s(Ae, {}),
              onClick: K,
              children: '\u65B0\u589E\u89D2\u8272',
            }),
          }),
          s(ae, { icon: s(ke, {}), onClick: D, children: '\u5237\u65B0' }),
        ],
      }),
      s(Me, {
        rowKey: 'id',
        loading: l,
        columns: L,
        data: t,
        scroll: { x: 1130 },
        pagination: {
          current: b,
          pageSize: m,
          total: A,
          showTotal: !0,
          sizeCanChange: !0,
        },
        onChange: (d) => {
          i(d.current || 1), p(d.pageSize || 10);
        },
      }),
      s(oe, {
        title:
          k === 'create'
            ? '\u65B0\u589E\u89D2\u8272'
            : '\u7F16\u8F91\u89D2\u8272',
        visible: _,
        onOk: Y,
        onCancel: () => N(!1),
        unmountOnExit: !0,
        style: { width: 560 },
        children: C(I, {
          form: e,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            s(I.Item, {
              label: '\u89D2\u8272\u540D\u79F0',
              field: 'roleName',
              rules: [{ required: !0 }],
              children: s(ue, {}),
            }),
            k === 'create'
              ? C(Ie, {
                  children: [
                    s(I.Item, {
                      label: '\u89D2\u8272\u7C7B\u578B',
                      field: 'roleType',
                      rules: [{ required: !0 }],
                      children: s(le, { options: Re }),
                    }),
                    s(I.Item, {
                      label: '\u5206\u914D\u8303\u56F4',
                      field: 'assignScope',
                      rules: [{ required: !0 }],
                      children: s(le, { options: Oe }),
                    }),
                  ],
                })
              : null,
            s(I.Item, {
              label: '\u89D2\u8272\u63CF\u8FF0',
              field: 'description',
              children: s(ue.TextArea, { rows: 4 }),
            }),
          ],
        }),
      }),
      s(qe, { role: B, visible: x, onClose: () => G(!1) }),
    ],
  });
}
export { ct as default };
