var ge = Object.defineProperty,
  be = Object.defineProperties;
var Ce = Object.getOwnPropertyDescriptors;
var Z = Object.getOwnPropertySymbols;
var ye = Object.prototype.hasOwnProperty,
  Se = Object.prototype.propertyIsEnumerable;
var ee = (e, t, s) =>
    t in e
      ? ge(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  L = (e, t) => {
    for (var s in t || (t = {})) ye.call(t, s) && ee(e, s, t[s]);
    if (Z) for (var s of Z(t)) Se.call(t, s) && ee(e, s, t[s]);
    return e;
  },
  H = (e, t) => be(e, Ce(t));
import {
  r as u,
  j as r,
  w as Fe,
  h as te,
  a as S,
  aY as Ee,
  b0 as se,
  ak as ne,
  T as re,
  M as R,
  S as J,
  P as xe,
  b as De,
  ag as z,
  av as Te,
  B as ae,
  aT as ke,
  $ as Ae,
  aM as Ne,
  aS as oe,
  ah as ue,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  f as Me,
  b as we,
  a as le,
  s as Ie,
  c as Be,
  d as ve,
  u as Pe,
  e as je,
} from './access-role.e3a16bcc.js';
import Ge from './form.e1b498f3.js';
import { getColumns as $e } from './constants.f22244d3.js';
/* empty css               */ import { s as h } from './index.module.0c4d71de.js';
import './access-control.a5391fe6.js';
import './index.97399a5e.js';
import './accessControl.941fcf7e.js';
const { Text: D } = re;
function ce(e) {
  var s;
  const t = (s = e.permissionId) != null ? s : e.id;
  return t != null ? String(t) : '';
}
function Le(e = []) {
  const t = new Set(),
    s = new Set(),
    l = new Map(),
    f = (b) =>
      b.flatMap((i) => {
        const m = ce(i),
          p =
            m &&
            i.checkable !== !1 &&
            i.nodeType !== 'CATALOG' &&
            !!i.permissionId,
          A = f(i.children || []),
          C = [...(p ? [m] : []), ...A];
        return (
          m &&
            (t.add(m), p && s.add(m), i.nodeType === 'CATALOG' && l.set(m, C)),
          C
        );
      });
  return f(e), { allKeys: t, checkableKeys: s, catalogDescendantMenuKeys: l };
}
function ie(e = []) {
  return e
    .map((t) => {
      const s = ie(t.children || []),
        l = t.checkable !== !1 && t.nodeType !== 'CATALOG' && !!t.permissionId;
      return !l && s.length === 0
        ? null
        : {
            key: ce(t),
            title: `${
              t.permissionName || t.objectName || t.permissionCode || t.id
            }${t.nodeType ? `\uFF08${t.nodeType}\uFF09` : ''}`,
            disableCheckbox: !l,
            children: s,
          };
    })
    .filter(Boolean);
}
const de = {
  api: { label: 'api', color: 'arcoblue' },
  button: { label: 'btn', color: 'green' },
  form: { label: 'form', color: 'orange' },
  tab: { label: 'tab', color: 'purple' },
};
function pe(e) {
  var s;
  const t = (e.childGroup || e.nodeType || '').toUpperCase();
  return t === 'API'
    ? ((s = e.resourceSubType) == null ? void 0 : s.toLowerCase()) || 'api'
    : t === 'ELEMENT' && e.resourceSubType
    ? e.resourceSubType.toLowerCase()
    : '';
}
function he({ type: e }) {
  var l;
  const t = e.toLowerCase(),
    s = (l = de[t]) != null ? l : { label: t, color: 'gray' };
  return r(De, { size: 'small', color: s.color, children: s.label });
}
function fe() {
  return { element: [], api: [], other: [] };
}
function Re(e) {
  const t = fe(),
    s = fe();
  return (
    e.forEach((l) => {
      const f = l.autoGrant === 1 ? s : t,
        b = (l.childGroup || l.nodeType || '').toUpperCase();
      b === 'API'
        ? f.api.push(l)
        : b === 'ELEMENT'
        ? f.element.push(l)
        : f.other.push(l);
    }),
    { manual: t, auto: s }
  );
}
function ze(e) {
  return e.element.length > 0 || e.api.length > 0 || e.other.length > 0;
}
function Oe(e) {
  var i, m;
  const t = e.permissionName || e.objectName || e.permissionCode || e.id,
    s = pe(e),
    l = s ? ((m = (i = de[s]) == null ? void 0 : i.label) != null ? m : s) : '',
    f = e.objectPath ? `${e.httpMethod || ''} ${e.objectPath}`.trim() : '',
    b = l ? `${l} ${t}` : String(t);
  return f ? `${b} \u2014 ${f}` : b;
}
function Ke({ item: e, ellipsis: t = !1 }) {
  const s = e.permissionName || e.objectName || e.permissionCode || e.id,
    l = pe(e),
    f = e.objectPath ? `${e.httpMethod || ''} ${e.objectPath}`.trim() : '',
    b = Oe(e);
  return t
    ? r(xe, {
        content: b,
        children: r('span', {
          className: h['grant-label-tooltip-wrap'],
          children: S('span', {
            className: h['grant-label-inline'],
            children: [
              l ? r(he, { type: l }) : null,
              r(D, {
                className: h['grant-label-ellipsis'],
                ellipsis: !0,
                children: s,
              }),
            ],
          }),
        }),
      })
    : S(J, {
        wrap: !0,
        size: 8,
        align: 'center',
        children: [
          l ? r(he, { type: l }) : null,
          r('span', { children: s }),
          f
            ? S(D, {
                type: 'secondary',
                style: { fontSize: 12 },
                children: ['\u2014 ', f],
              })
            : null,
        ],
      });
}
function Ve({ role: e, visible: t, onClose: s, onSaved: l }) {
  const [f, b] = u.exports.useState([]),
    [i, m] = u.exports.useState([]),
    [p, A] = u.exports.useState(''),
    [C, E] = u.exports.useState([]),
    F = u.exports.useRef({}),
    [O, P] = u.exports.useState(!1),
    [M, w] = u.exports.useState(!1),
    [K, T] = u.exports.useState(!1),
    x = u.exports.useMemo(() => Le(f), [f]),
    j = u.exports.useMemo(() => {
      const n = new Set(i),
        o = i.filter((a) => x.checkableKeys.has(a));
      return (
        x.catalogDescendantMenuKeys.forEach((a, g) => {
          a.length > 0 && a.every((y) => n.has(y)) && o.push(g);
        }),
        o
      );
    }, [i, x]),
    I = u.exports.useMemo(() => p !== '' && i.includes(p), [i, p]);
  u.exports.useEffect(() => {
    if (!t || !e) return;
    let n = !1;
    return (
      P(!0),
      A(''),
      E([]),
      (F.current = {}),
      Promise.all([Me(), we(e.id)])
        .then(([o, a]) => {
          n || (b(o || []), m((a.grantedPermissionIds || []).map(String)));
        })
        .finally(() => !n && P(!1)),
      () => {
        n = !0;
      }
    );
  }, [t, e]),
    u.exports.useEffect(() => {
      if (!p) {
        E([]);
        return;
      }
      const n = F.current[p];
      if (n) {
        E(n);
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
        le(o)
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
  const B = u.exports.useMemo(
      () =>
        C.map((n) => n.permissionId)
          .filter((n) => n != null && n > 0)
          .map(String)
          .filter((n) => i.includes(n)),
      [C, i]
    ),
    k = u.exports.useCallback((n, o, a) => {
      o.forEach((g) => {
        g.permissionId && g.autoGrant === 1 && a.add(String(g.permissionId));
      }),
        (F.current[n] = o);
    }, []),
    V = u.exports.useCallback(
      (n, o, a) => {
        var y;
        const g = ((y = F.current[n]) == null ? void 0 : y.length)
          ? F.current[n]
          : C;
        o.length > 0
          ? (a.add(n),
            g.forEach((c) => {
              c.permissionId &&
                c.autoGrant === 1 &&
                a.add(String(c.permissionId));
            }))
          : a.delete(n);
      },
      [C]
    ),
    U = (n) => {
      const o = new Set(i),
        a = new Set(i.filter((c) => !x.allKeys.has(c)));
      n.filter((c) => x.checkableKeys.has(c)).forEach((c) => a.add(c)),
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
              ? k(c, v, a)
              : c === p && C.length
              ? k(c, C, a)
              : le(Number(c)).then(($) => {
                  const W = $ || [];
                  (F.current[c] = W),
                    m((X) => {
                      const q = new Set(X);
                      return q.has(c) ? (k(c, W, q), Array.from(q)) : X;
                    });
                });
          }),
        m(Array.from(a));
    },
    _ = (n) => {
      if (!p) return;
      const o = new Set(
        C.map((a) => (a.permissionId ? String(a.permissionId) : '')).filter(
          Boolean
        )
      );
      m((a) => {
        const g = new Set(a.filter((y) => !o.has(y)));
        return n.forEach((y) => g.add(y)), V(p, n, g), Array.from(g);
      });
    },
    Y = async () => {
      if (!!e) {
        T(!0);
        try {
          const n = i.map(Number).filter((o) => Number.isFinite(o) && o > 0);
          await Ie({ roleId: e.id, permissionIds: n }),
            R.success('\u6743\u9650\u5DF2\u4FDD\u5B58'),
            l == null || l(),
            s();
        } finally {
          T(!1);
        }
      }
    },
    G = u.exports.useMemo(() => Re(C), [C]),
    d = (n, o = 'api') =>
      r(
        ne,
        {
          value: String(n.permissionId),
          children: r(J, {
            wrap: o !== 'element',
            size: 8,
            align: 'center',
            className: o === 'element' ? h['grant-checkbox-label'] : void 0,
            children: r(Ke, { item: n, ellipsis: o === 'element' }),
          }),
        },
        n.permissionId
      ),
    N = (n, o, a, g = 'api') => {
      if (!o.length) return null;
      const y =
        g === 'element'
          ? h['grant-resource-list-element']
          : h['grant-resource-list-api'];
      return S(
        'div',
        {
          className: h['grant-resource-block'],
          children: [
            r(D, {
              type: 'secondary',
              className: h['grant-resource-type-title'],
              children: n,
            }),
            r('div', {
              className: y,
              children: o.map((c) =>
                r(
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
    Q = (n, o, a) =>
      ze(o)
        ? S(
            'div',
            {
              className: h['grant-mode-section'],
              children: [
                r(D, { className: h['grant-mode-section-title'], children: n }),
                N(
                  '\u9875\u9762\u5143\u7D20',
                  o.element,
                  `${a}-element`,
                  'element'
                ),
                N('API', o.api, `${a}-api`, 'api'),
                N('\u5176\u4ED6', o.other, `${a}-other`, 'api'),
              ],
            },
            a
          )
        : null,
    me = { direction: 'vertical', disabled: !p, value: B, onChange: _ };
  return r(Fe, {
    title: `\u89D2\u8272\u6388\u6743\uFF1A${
      (e == null ? void 0 : e.roleName) || ''
    }`,
    visible: t,
    width: 920,
    confirmLoading: K,
    onOk: Y,
    onCancel: s,
    bodyStyle: {
      padding: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: 0,
    },
    children: r(te, {
      loading: O,
      block: !0,
      className: h['grant-spin'],
      children: S('div', {
        className: h['grant-layout'],
        children: [
          S('div', {
            className: h['grant-panel-left'],
            children: [
              S(D, {
                className: h['grant-panel-title'],
                children: [
                  '\u83DC\u5355\u6743\u9650',
                  r(D, {
                    type: 'secondary',
                    style: { marginLeft: 8, fontSize: 12 },
                    children:
                      '\uFF08CATALOG \u4E3A\u76EE\u5F55\uFF0C\u65E0\u9700\u52FE\u9009\uFF1B\u6388\u6743\u5B50\u83DC\u5355\u540E\u76EE\u5F55\u4F1A\u81EA\u52A8\u5C55\u793A\uFF09',
                  }),
                ],
              }),
              r('div', {
                className: h['grant-panel-body'],
                children: r(Ee, {
                  checkable: !0,
                  checkStrictly: !0,
                  checkedKeys: j,
                  selectedKeys: p ? [p] : [],
                  onCheck: U,
                  onSelect: (n) => {
                    const o = n[0] ? String(n[0]) : '';
                    A(o);
                  },
                  treeData: ie(f),
                }),
              }),
            ],
          }),
          S('div', {
            className: h['grant-panel-right'],
            children: [
              S(D, {
                className: h['grant-panel-title'],
                children: [
                  '\u9644\u5C5E\u6743\u9650\u70B9',
                  p && !I
                    ? r(D, {
                        type: 'secondary',
                        style: { marginLeft: 8, fontSize: 12 },
                        children:
                          '\uFF08\u52FE\u9009\u9644\u5C5E\u6743\u9650\u540E\u5C06\u81EA\u52A8\u52FE\u9009\u5DE6\u4FA7\u83DC\u5355\uFF09',
                      })
                    : null,
                ],
              }),
              r('div', {
                className: h['grant-panel-body'],
                children: r(te, {
                  loading: M,
                  style: { width: '100%' },
                  children: p
                    ? C.length === 0 && !M
                      ? r(se, {
                          description:
                            '\u8BE5\u83DC\u5355\u672A\u914D\u7F6E\u9644\u5C5E\u6743\u9650\uFF0C\u8868\u793A\u4E0D\u9700\u8981\u5176\u4ED6 API/\u5143\u7D20\u6743\u9650\uFF1B\u82E5\u9700\u8981\u8BF7\u5728\u6743\u9650\u5173\u7CFB\u7BA1\u7406\u9875\u6DFB\u52A0',
                        })
                      : S(
                          ne.Group,
                          H(L({}, me), {
                            children: [
                              Q('\u624B\u52A8\u6388\u6743', G.manual, 'manual'),
                              Q('\u81EA\u52A8\u6388\u6743', G.auto, 'auto'),
                            ],
                          })
                        )
                    : r(se, {
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
const { Title: Ue } = re;
function at() {
  const [e] = z.useForm(),
    [t, s] = u.exports.useState([]),
    [l, f] = u.exports.useState(!1),
    [b, i] = u.exports.useState(1),
    [m, p] = u.exports.useState(10),
    [A, C] = u.exports.useState(0),
    [E, F] = u.exports.useState({}),
    [O, P] = u.exports.useState(0),
    [M, w] = u.exports.useState('create'),
    [K, T] = u.exports.useState(!1),
    [x, j] = u.exports.useState(!1),
    [I, B] = u.exports.useState(null),
    k = u.exports.useCallback(() => P((d) => d + 1), []);
  u.exports.useEffect(() => {
    let d = !1;
    return (
      f(!0),
      Be(L({ page: b, pageSize: m }, E))
        .then((N) => {
          d || (s(N.list || []), C(N.total || 0));
        })
        .finally(() => !d && f(!1)),
      () => {
        d = !0;
      }
    );
  }, [b, m, E, O]);
  const V = () => {
      w('create'), B(null), e.resetFields(), T(!0);
    },
    U = (d) => {
      w('edit'), B(d), e.setFieldsValue(d), T(!0);
    },
    _ = (d) => {
      B(d), j(!0);
    },
    Y = async () => {
      const d = await e.validate();
      M === 'create'
        ? (await ve(d), R.success('\u89D2\u8272\u5DF2\u65B0\u589E'))
        : I &&
          (await Pe(H(L({}, d), { id: I.id })),
          R.success('\u89D2\u8272\u5DF2\u66F4\u65B0')),
        T(!1),
        k();
    },
    G = $e({
      onEdit: U,
      onGrant: _,
      onDelete: (d) =>
        oe.confirm({
          title: '\u5220\u9664\u89D2\u8272',
          content: `\u786E\u8BA4\u5220\u9664\u89D2\u8272 ${d.roleName}\uFF1F`,
          onOk: async () => {
            await je(d.id), R.success('\u89D2\u8272\u5DF2\u5220\u9664'), k();
          },
        }),
    });
  return S(Te, {
    children: [
      r(Ue, { heading: 6, children: '\u89D2\u8272\u7BA1\u7406' }),
      r(Ge, {
        onSearch: (d) => {
          i(1), F(d);
        },
      }),
      S('div', {
        className: h['button-group'],
        children: [
          r(J, {
            children: r(ae, {
              type: 'primary',
              icon: r(ke, {}),
              onClick: V,
              children: '\u65B0\u589E\u89D2\u8272',
            }),
          }),
          r(ae, { icon: r(Ae, {}), onClick: k, children: '\u5237\u65B0' }),
        ],
      }),
      r(Ne, {
        rowKey: 'id',
        loading: l,
        columns: G,
        data: t,
        scroll: { x: 870 },
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
      r(oe, {
        title:
          M === 'create'
            ? '\u65B0\u589E\u89D2\u8272'
            : '\u7F16\u8F91\u89D2\u8272',
        visible: K,
        onOk: Y,
        onCancel: () => T(!1),
        unmountOnExit: !0,
        style: { width: 560 },
        children: S(z, {
          form: e,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            r(z.Item, {
              label: '\u89D2\u8272\u540D\u79F0',
              field: 'roleName',
              rules: [{ required: !0 }],
              children: r(ue, {}),
            }),
            r(z.Item, {
              label: '\u89D2\u8272\u63CF\u8FF0',
              field: 'description',
              children: r(ue.TextArea, { rows: 4 }),
            }),
          ],
        }),
      }),
      r(Ve, { role: I, visible: x, onClose: () => j(!1) }),
    ],
  });
}
export { at as default };
