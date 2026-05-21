var xe = Object.defineProperty,
  Ee = Object.defineProperties;
var De = Object.getOwnPropertyDescriptors;
var ee = Object.getOwnPropertySymbols;
var ge = Object.prototype.hasOwnProperty,
  je = Object.prototype.propertyIsEnumerable;
var se = (e, t, r) =>
    t in e
      ? xe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  $ = (e, t) => {
    for (var r in t || (t = {})) ge.call(t, r) && se(e, r, t[r]);
    if (ee) for (var r of ee(t)) je.call(t, r) && se(e, r, t[r]);
    return e;
  },
  X = (e, t) => Ee(e, De(t));
import {
  r as i,
  j as s,
  v as ve,
  f as te,
  aX as Se,
  a$ as re,
  ai as ne,
  T as le,
  M as O,
  S as Z,
  N as ye,
  a as Ce,
  ae as A,
  at as Fe,
  B as oe,
  aS as Ve,
  Z as Te,
  aL as ke,
  aR as ue,
  af as ie,
  H as ae,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  f as Ae,
  b as Me,
  a as ce,
  s as Ie,
  c as we,
  d as Be,
  u as Pe,
  e as Ge,
} from './access-role.b902211a.js';
import Le, {
  ROLE_TYPE_OPTIONS as Re,
  ASSIGN_SCOPE_OPTIONS as $e,
} from './form.8b3e9520.js';
import { getColumns as Oe } from './constants.a2e48208.js';
/* empty css               */ import { s as f } from './index.module.0c4d71de.js';
import './access-control.86021a9b.js';
import './index.77883a3f.js';
import './accessControl.941fcf7e.js';
var o =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/roles/RoleGrantDrawer.tsx';
const { Text: y } = le;
function me(e) {
  var r;
  const t = (r = e.permissionId) != null ? r : e.id;
  return t != null ? String(t) : '';
}
function ze(e = []) {
  const t = new Set(),
    r = new Set(),
    a = new Map(),
    N = (E) =>
      E.flatMap((m) => {
        const b = me(m),
          p =
            b &&
            m.checkable !== !1 &&
            m.nodeType !== 'CATALOG' &&
            !!m.permissionId,
          V = N(m.children || []),
          D = [...(p ? [b] : []), ...V];
        return (
          b &&
            (t.add(b), p && r.add(b), m.nodeType === 'CATALOG' && a.set(b, D)),
          D
        );
      });
  return N(e), { allKeys: t, checkableKeys: r, catalogDescendantMenuKeys: a };
}
function de(e = []) {
  return e
    .map((t) => {
      const r = de(t.children || []),
        a = t.checkable !== !1 && t.nodeType !== 'CATALOG' && !!t.permissionId;
      return !a && r.length === 0
        ? null
        : {
            key: me(t),
            title: `${
              t.permissionName || t.objectName || t.permissionCode || t.id
            }${t.nodeType ? `\uFF08${t.nodeType}\uFF09` : ''}`,
            disableCheckbox: !a,
            children: r,
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
function fe(e) {
  var r;
  const t = (e.childGroup || e.nodeType || '').toUpperCase();
  return t === 'API'
    ? ((r = e.resourceSubType) == null ? void 0 : r.toLowerCase()) || 'api'
    : t === 'ELEMENT' && e.resourceSubType
    ? e.resourceSubType.toLowerCase()
    : '';
}
function he({ type: e }) {
  var a;
  const t = e.toLowerCase(),
    r = (a = pe[t]) != null ? a : { label: t, color: 'gray' };
  return s.exports.jsxDEV(
    Ce,
    { size: 'small', color: r.color, children: r.label },
    void 0,
    !1,
    { fileName: o, lineNumber: 122, columnNumber: 5 },
    this
  );
}
function Ne() {
  return { element: [], api: [], other: [] };
}
function _e(e) {
  const t = Ne(),
    r = Ne();
  return (
    e.forEach((a) => {
      const N = a.autoGrant === 1 ? r : t,
        E = (a.childGroup || a.nodeType || '').toUpperCase();
      E === 'API'
        ? N.api.push(a)
        : E === 'ELEMENT'
        ? N.element.push(a)
        : N.other.push(a);
    }),
    { manual: t, auto: r }
  );
}
function Ue(e) {
  return e.element.length > 0 || e.api.length > 0 || e.other.length > 0;
}
function Ke(e) {
  var m, b;
  const t = e.permissionName || e.objectName || e.permissionCode || e.id,
    r = fe(e),
    a = r ? ((b = (m = pe[r]) == null ? void 0 : m.label) != null ? b : r) : '',
    N = e.objectPath ? `${e.httpMethod || ''} ${e.objectPath}`.trim() : '',
    E = a ? `${a} ${t}` : String(t);
  return N ? `${E} \u2014 ${N}` : E;
}
function qe({ item: e, ellipsis: t = !1 }) {
  const r = e.permissionName || e.objectName || e.permissionCode || e.id,
    a = fe(e),
    N = e.objectPath ? `${e.httpMethod || ''} ${e.objectPath}`.trim() : '',
    E = Ke(e);
  return t
    ? s.exports.jsxDEV(
        ye,
        {
          content: E,
          children: s.exports.jsxDEV(
            'span',
            {
              className: f['grant-label-tooltip-wrap'],
              children: s.exports.jsxDEV(
                'span',
                {
                  className: f['grant-label-inline'],
                  children: [
                    a
                      ? s.exports.jsxDEV(
                          he,
                          { type: a },
                          void 0,
                          !1,
                          { fileName: o, lineNumber: 202, columnNumber: 24 },
                          this
                        )
                      : null,
                    s.exports.jsxDEV(
                      y,
                      {
                        className: f['grant-label-ellipsis'],
                        ellipsis: !0,
                        children: r,
                      },
                      void 0,
                      !1,
                      { fileName: o, lineNumber: 203, columnNumber: 13 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: o, lineNumber: 201, columnNumber: 11 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: o, lineNumber: 200, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: o, lineNumber: 199, columnNumber: 7 },
        this
      )
    : s.exports.jsxDEV(
        Z,
        {
          wrap: !0,
          size: 8,
          align: 'center',
          children: [
            a
              ? s.exports.jsxDEV(
                  he,
                  { type: a },
                  void 0,
                  !1,
                  { fileName: o, lineNumber: 214, columnNumber: 18 },
                  this
                )
              : null,
            s.exports.jsxDEV(
              'span',
              { children: r },
              void 0,
              !1,
              { fileName: o, lineNumber: 215, columnNumber: 7 },
              this
            ),
            N
              ? s.exports.jsxDEV(
                  y,
                  {
                    type: 'secondary',
                    style: { fontSize: 12 },
                    children: ['\u2014 ', N],
                  },
                  void 0,
                  !0,
                  { fileName: o, lineNumber: 217, columnNumber: 9 },
                  this
                )
              : null,
          ],
        },
        void 0,
        !0,
        { fileName: o, lineNumber: 213, columnNumber: 5 },
        this
      );
}
function Ye({ role: e, visible: t, onClose: r, onSaved: a }) {
  const [N, E] = i.exports.useState([]),
    [m, b] = i.exports.useState([]),
    [p, V] = i.exports.useState(''),
    [D, v] = i.exports.useState([]),
    j = i.exports.useRef({}),
    [z, P] = i.exports.useState(!1),
    [T, M] = i.exports.useState(!1),
    [_, C] = i.exports.useState(!1),
    S = i.exports.useMemo(() => ze(N), [N]),
    G = i.exports.useMemo(() => {
      const n = new Set(m),
        u = m.filter((l) => S.checkableKeys.has(l));
      return (
        S.catalogDescendantMenuKeys.forEach((l, x) => {
          l.length > 0 && l.every((g) => n.has(g)) && u.push(x);
        }),
        u
      );
    }, [m, S]),
    I = i.exports.useMemo(() => p !== '' && m.includes(p), [m, p]);
  i.exports.useEffect(() => {
    if (!t || !e) return;
    let n = !1;
    return (
      P(!0),
      V(''),
      v([]),
      (j.current = {}),
      Promise.all([Ae(), Me(e.id)])
        .then(([u, l]) => {
          n || (E(u || []), b((l.grantedPermissionIds || []).map(String)));
        })
        .finally(() => !n && P(!1)),
      () => {
        n = !0;
      }
    );
  }, [t, e]),
    i.exports.useEffect(() => {
      if (!p) {
        v([]);
        return;
      }
      const n = j.current[p];
      if (n) {
        v(n);
        return;
      }
      const u = Number(p);
      if (!Number.isFinite(u)) {
        v([]);
        return;
      }
      let l = !1;
      return (
        M(!0),
        ce(u)
          .then((x) => {
            if (l) return;
            const g = x || [];
            (j.current[p] = g), v(g);
          })
          .finally(() => !l && M(!1)),
        () => {
          l = !0;
        }
      );
    }, [p]);
  const w = i.exports.useMemo(
      () =>
        D.map((n) => n.permissionId)
          .filter((n) => n != null && n > 0)
          .map(String)
          .filter((n) => m.includes(n)),
      [D, m]
    ),
    F = i.exports.useCallback((n, u, l) => {
      u.forEach((x) => {
        x.permissionId && x.autoGrant === 1 && l.add(String(x.permissionId));
      }),
        (j.current[n] = u);
    }, []),
    U = i.exports.useCallback(
      (n, u, l) => {
        var g;
        const x = ((g = j.current[n]) == null ? void 0 : g.length)
          ? j.current[n]
          : D;
        u.length > 0
          ? (l.add(n),
            x.forEach((c) => {
              c.permissionId &&
                c.autoGrant === 1 &&
                l.add(String(c.permissionId));
            }))
          : l.delete(n);
      },
      [D]
    ),
    K = (n) => {
      const u = new Set(m),
        l = new Set(m.filter((c) => !S.allKeys.has(c)));
      n.filter((c) => S.checkableKeys.has(c)).forEach((c) => l.add(c)),
        [...u]
          .filter((c) => S.checkableKeys.has(c) && !l.has(c))
          .forEach((c) => {
            const B = j.current[c];
            B &&
              B.forEach((R) => {
                R.permissionId && l.delete(String(R.permissionId));
              });
          }),
        [...l]
          .filter((c) => !u.has(c))
          .forEach((c) => {
            const B = j.current[c];
            B
              ? F(c, B, l)
              : c === p && D.length
              ? F(c, D, l)
              : ce(Number(c)).then((R) => {
                  const Q = R || [];
                  (j.current[c] = Q),
                    b((W) => {
                      const H = new Set(W);
                      return H.has(c) ? (F(c, Q, H), Array.from(H)) : W;
                    });
                });
          }),
        b(Array.from(l));
    },
    q = (n) => {
      if (!p) return;
      const u = new Set(
        D.map((l) => (l.permissionId ? String(l.permissionId) : '')).filter(
          Boolean
        )
      );
      b((l) => {
        const x = new Set(l.filter((g) => !u.has(g)));
        return n.forEach((g) => x.add(g)), U(p, n, x), Array.from(x);
      });
    },
    Y = async () => {
      if (!!e) {
        C(!0);
        try {
          const n = m.map(Number).filter((u) => Number.isFinite(u) && u > 0);
          await Ie({ roleId: e.id, permissionIds: n }),
            O.success('\u6743\u9650\u5DF2\u4FDD\u5B58'),
            a == null || a(),
            r();
        } finally {
          C(!1);
        }
      }
    },
    L = i.exports.useMemo(() => _e(D), [D]),
    d = (n, u = 'api') =>
      s.exports.jsxDEV(
        ne,
        {
          value: String(n.permissionId),
          children: s.exports.jsxDEV(
            Z,
            {
              wrap: u !== 'element',
              size: 8,
              align: 'center',
              className: u === 'element' ? f['grant-checkbox-label'] : void 0,
              children: s.exports.jsxDEV(
                qe,
                { item: n, ellipsis: u === 'element' },
                void 0,
                !1,
                { fileName: o, lineNumber: 459, columnNumber: 9 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: o, lineNumber: 451, columnNumber: 7 },
            this
          ),
        },
        n.permissionId,
        !1,
        { fileName: o, lineNumber: 450, columnNumber: 5 },
        this
      ),
    k = (n, u, l, x = 'api') => {
      if (!u.length) return null;
      const g =
        x === 'element'
          ? f['grant-resource-list-element']
          : f['grant-resource-list-api'];
      return s.exports.jsxDEV(
        'div',
        {
          className: f['grant-resource-block'],
          children: [
            s.exports.jsxDEV(
              y,
              {
                type: 'secondary',
                className: f['grant-resource-type-title'],
                children: n,
              },
              void 0,
              !1,
              { fileName: o, lineNumber: 477, columnNumber: 9 },
              this
            ),
            s.exports.jsxDEV(
              'div',
              {
                className: g,
                children: u.map((c) =>
                  s.exports.jsxDEV(
                    'div',
                    {
                      className: `${f['grant-resource-item']}${
                        x === 'element'
                          ? ` ${f['grant-resource-item-element']}`
                          : ''
                      }`,
                      children: d(c, x),
                    },
                    c.permissionId,
                    !1,
                    { fileName: o, lineNumber: 482, columnNumber: 13 },
                    this
                  )
                ),
              },
              void 0,
              !1,
              { fileName: o, lineNumber: 480, columnNumber: 9 },
              this
            ),
          ],
        },
        l,
        !0,
        { fileName: o, lineNumber: 476, columnNumber: 7 },
        this
      );
    },
    J = (n, u, l) =>
      Ue(u)
        ? s.exports.jsxDEV(
            'div',
            {
              className: f['grant-mode-section'],
              children: [
                s.exports.jsxDEV(
                  y,
                  { className: f['grant-mode-section-title'], children: n },
                  void 0,
                  !1,
                  { fileName: o, lineNumber: 506, columnNumber: 9 },
                  this
                ),
                k(
                  '\u9875\u9762\u5143\u7D20',
                  u.element,
                  `${l}-element`,
                  'element'
                ),
                k('API', u.api, `${l}-api`, 'api'),
                k('\u5176\u4ED6', u.other, `${l}-other`, 'api'),
              ],
            },
            l,
            !0,
            { fileName: o, lineNumber: 505, columnNumber: 7 },
            this
          )
        : null,
    be = { direction: 'vertical', disabled: !p, value: w, onChange: q };
  return s.exports.jsxDEV(
    ve,
    {
      title: `\u89D2\u8272\u6388\u6743\uFF1A${
        (e == null ? void 0 : e.roleName) || ''
      }`,
      visible: t,
      width: 920,
      confirmLoading: _,
      onOk: Y,
      onCancel: r,
      bodyStyle: {
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
      },
      children: s.exports.jsxDEV(
        te,
        {
          loading: z,
          block: !0,
          className: f['grant-spin'],
          children: s.exports.jsxDEV(
            'div',
            {
              className: f['grant-layout'],
              children: [
                s.exports.jsxDEV(
                  'div',
                  {
                    className: f['grant-panel-left'],
                    children: [
                      s.exports.jsxDEV(
                        y,
                        {
                          className: f['grant-panel-title'],
                          children: [
                            '\u83DC\u5355\u6743\u9650',
                            s.exports.jsxDEV(
                              y,
                              {
                                type: 'secondary',
                                style: { marginLeft: 8, fontSize: 12 },
                                children:
                                  '\uFF08CATALOG \u4E3A\u76EE\u5F55\uFF0C\u65E0\u9700\u52FE\u9009\uFF1B\u6388\u6743\u5B50\u83DC\u5355\u540E\u76EE\u5F55\u4F1A\u81EA\u52A8\u5C55\u793A\uFF09',
                              },
                              void 0,
                              !1,
                              {
                                fileName: o,
                                lineNumber: 553,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: o, lineNumber: 551, columnNumber: 13 },
                        this
                      ),
                      s.exports.jsxDEV(
                        'div',
                        {
                          className: f['grant-panel-body'],
                          children: s.exports.jsxDEV(
                            Se,
                            {
                              checkable: !0,
                              checkStrictly: !0,
                              checkedKeys: G,
                              selectedKeys: p ? [p] : [],
                              onCheck: K,
                              onSelect: (n) => {
                                const u = n[0] ? String(n[0]) : '';
                                V(u);
                              },
                              treeData: de(N),
                            },
                            void 0,
                            !1,
                            { fileName: o, lineNumber: 558, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: o, lineNumber: 557, columnNumber: 13 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: o, lineNumber: 550, columnNumber: 11 },
                  this
                ),
                s.exports.jsxDEV(
                  'div',
                  {
                    className: f['grant-panel-right'],
                    children: [
                      s.exports.jsxDEV(
                        y,
                        {
                          className: f['grant-panel-title'],
                          children: [
                            '\u9644\u5C5E\u6743\u9650\u70B9',
                            p && !I
                              ? s.exports.jsxDEV(
                                  y,
                                  {
                                    type: 'secondary',
                                    style: { marginLeft: 8, fontSize: 12 },
                                    children:
                                      '\uFF08\u52FE\u9009\u9644\u5C5E\u6743\u9650\u540E\u5C06\u81EA\u52A8\u52FE\u9009\u5DE6\u4FA7\u83DC\u5355\uFF09',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: o,
                                    lineNumber: 576,
                                    columnNumber: 17,
                                  },
                                  this
                                )
                              : null,
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: o, lineNumber: 573, columnNumber: 13 },
                        this
                      ),
                      s.exports.jsxDEV(
                        'div',
                        {
                          className: f['grant-panel-body'],
                          children: s.exports.jsxDEV(
                            te,
                            {
                              loading: T,
                              style: { width: '100%' },
                              children: p
                                ? D.length === 0 && !T
                                  ? s.exports.jsxDEV(
                                      re,
                                      {
                                        description:
                                          '\u8BE5\u83DC\u5355\u672A\u914D\u7F6E\u9644\u5C5E\u6743\u9650\uFF0C\u8868\u793A\u4E0D\u9700\u8981\u5176\u4ED6 API/\u5143\u7D20\u6743\u9650\uFF1B\u82E5\u9700\u8981\u8BF7\u5728\u6743\u9650\u5173\u7CFB\u7BA1\u7406\u9875\u6DFB\u52A0',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: o,
                                        lineNumber: 586,
                                        columnNumber: 19,
                                      },
                                      this
                                    )
                                  : s.exports.jsxDEV(
                                      ne.Group,
                                      X($({}, be), {
                                        children: [
                                          J(
                                            '\u624B\u52A8\u6388\u6743',
                                            L.manual,
                                            'manual'
                                          ),
                                          J(
                                            '\u81EA\u52A8\u6388\u6743',
                                            L.auto,
                                            'auto'
                                          ),
                                        ],
                                      }),
                                      void 0,
                                      !0,
                                      {
                                        fileName: o,
                                        lineNumber: 588,
                                        columnNumber: 19,
                                      },
                                      this
                                    )
                                : s.exports.jsxDEV(
                                    re,
                                    {
                                      description:
                                        '\u8BF7\u5728\u5DE6\u4FA7\u9009\u62E9\u83DC\u5355',
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: o,
                                      lineNumber: 584,
                                      columnNumber: 19,
                                    },
                                    this
                                  ),
                            },
                            void 0,
                            !1,
                            { fileName: o, lineNumber: 582, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: o, lineNumber: 581, columnNumber: 13 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: o, lineNumber: 572, columnNumber: 11 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: o, lineNumber: 549, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: o, lineNumber: 548, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: o, lineNumber: 532, columnNumber: 5 },
    this
  );
}
var h =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/roles/index.tsx';
const { Title: He } = le;
function as() {
  const [e] = A.useForm(),
    [t, r] = i.exports.useState([]),
    [a, N] = i.exports.useState(!1),
    [E, m] = i.exports.useState(1),
    [b, p] = i.exports.useState(10),
    [V, D] = i.exports.useState(0),
    [v, j] = i.exports.useState({}),
    [z, P] = i.exports.useState(0),
    [T, M] = i.exports.useState('create'),
    [_, C] = i.exports.useState(!1),
    [S, G] = i.exports.useState(!1),
    [I, w] = i.exports.useState(null),
    F = i.exports.useCallback(() => P((d) => d + 1), []);
  i.exports.useEffect(() => {
    let d = !1;
    return (
      N(!0),
      we($({ page: E, pageSize: b }, v))
        .then((k) => {
          d || (r(k.list || []), D(k.total || 0));
        })
        .finally(() => !d && N(!1)),
      () => {
        d = !0;
      }
    );
  }, [E, b, v, z]);
  const U = () => {
      M('create'),
        w(null),
        e.resetFields(),
        e.setFieldsValue({
          roleType: 'TENANT_CUSTOM',
          assignScope: 'TENANT_ONLY',
        }),
        C(!0);
    },
    K = (d) => {
      M('edit'), w(d), e.setFieldsValue(d), C(!0);
    },
    q = (d) => {
      w(d), G(!0);
    },
    Y = async () => {
      const d = await e.validate();
      T === 'create'
        ? (await Be(d), O.success('\u89D2\u8272\u5DF2\u65B0\u589E'))
        : I &&
          (await Pe(X($({}, d), { id: I.id })),
          O.success('\u89D2\u8272\u5DF2\u66F4\u65B0')),
        C(!1),
        F();
    },
    L = Oe({
      onEdit: K,
      onGrant: q,
      onDelete: (d) =>
        ue.confirm({
          title: '\u5220\u9664\u89D2\u8272',
          content: `\u786E\u8BA4\u5220\u9664\u89D2\u8272 ${d.roleName}\uFF1F`,
          onOk: async () => {
            await Ge(d.id), O.success('\u89D2\u8272\u5DF2\u5220\u9664'), F();
          },
        }),
    });
  return s.exports.jsxDEV(
    Fe,
    {
      children: [
        s.exports.jsxDEV(
          He,
          { heading: 6, children: '\u89D2\u8272\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: h, lineNumber: 119, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          Le,
          {
            onSearch: (d) => {
              m(1), j(d);
            },
          },
          void 0,
          !1,
          { fileName: h, lineNumber: 120, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          'div',
          {
            className: f['button-group'],
            children: [
              s.exports.jsxDEV(
                Z,
                {
                  children: s.exports.jsxDEV(
                    oe,
                    {
                      type: 'primary',
                      icon: s.exports.jsxDEV(
                        Ve,
                        {},
                        void 0,
                        !1,
                        { fileName: h, lineNumber: 128, columnNumber: 40 },
                        this
                      ),
                      onClick: U,
                      children: '\u65B0\u589E\u89D2\u8272',
                    },
                    void 0,
                    !1,
                    { fileName: h, lineNumber: 128, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: h, lineNumber: 127, columnNumber: 9 },
                this
              ),
              s.exports.jsxDEV(
                oe,
                {
                  icon: s.exports.jsxDEV(
                    Te,
                    {},
                    void 0,
                    !1,
                    { fileName: h, lineNumber: 132, columnNumber: 23 },
                    this
                  ),
                  onClick: F,
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: h, lineNumber: 132, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: h, lineNumber: 126, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          ke,
          {
            rowKey: 'id',
            loading: a,
            columns: L,
            data: t,
            scroll: { x: 1130 },
            pagination: {
              current: E,
              pageSize: b,
              total: V,
              showTotal: !0,
              sizeCanChange: !0,
            },
            onChange: (d) => {
              m(d.current || 1), p(d.pageSize || 10);
            },
          },
          void 0,
          !1,
          { fileName: h, lineNumber: 136, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          ue,
          {
            title:
              T === 'create'
                ? '\u65B0\u589E\u89D2\u8272'
                : '\u7F16\u8F91\u89D2\u8272',
            visible: _,
            onOk: Y,
            onCancel: () => C(!1),
            unmountOnExit: !0,
            style: { width: 560 },
            children: s.exports.jsxDEV(
              A,
              {
                form: e,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  s.exports.jsxDEV(
                    A.Item,
                    {
                      label: '\u89D2\u8272\u540D\u79F0',
                      field: 'roleName',
                      rules: [{ required: !0 }],
                      children: s.exports.jsxDEV(
                        ie,
                        {},
                        void 0,
                        !1,
                        { fileName: h, lineNumber: 175, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: h, lineNumber: 170, columnNumber: 11 },
                    this
                  ),
                  T === 'create'
                    ? s.exports.jsxDEV(
                        s.exports.Fragment,
                        {
                          children: [
                            s.exports.jsxDEV(
                              A.Item,
                              {
                                label: '\u89D2\u8272\u7C7B\u578B',
                                field: 'roleType',
                                rules: [{ required: !0 }],
                                children: s.exports.jsxDEV(
                                  ae,
                                  { options: Re },
                                  void 0,
                                  !1,
                                  {
                                    fileName: h,
                                    lineNumber: 184,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: h,
                                lineNumber: 179,
                                columnNumber: 15,
                              },
                              this
                            ),
                            s.exports.jsxDEV(
                              A.Item,
                              {
                                label: '\u5206\u914D\u8303\u56F4',
                                field: 'assignScope',
                                rules: [{ required: !0 }],
                                children: s.exports.jsxDEV(
                                  ae,
                                  { options: $e },
                                  void 0,
                                  !1,
                                  {
                                    fileName: h,
                                    lineNumber: 191,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: h,
                                lineNumber: 186,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0
                      )
                    : null,
                  s.exports.jsxDEV(
                    A.Item,
                    {
                      label: '\u89D2\u8272\u63CF\u8FF0',
                      field: 'description',
                      children: s.exports.jsxDEV(
                        ie.TextArea,
                        { rows: 4 },
                        void 0,
                        !1,
                        { fileName: h, lineNumber: 196, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: h, lineNumber: 195, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: h, lineNumber: 163, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: h, lineNumber: 155, columnNumber: 7 },
          this
        ),
        s.exports.jsxDEV(
          Ye,
          { role: I, visible: S, onClose: () => G(!1) },
          void 0,
          !1,
          { fileName: h, lineNumber: 201, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: h, lineNumber: 118, columnNumber: 5 },
    this
  );
}
export { as as default };
