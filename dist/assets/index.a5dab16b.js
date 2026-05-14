var Ee = Object.defineProperty,
  Fe = Object.defineProperties;
var Ve = Object.getOwnPropertyDescriptors;
var q = Object.getOwnPropertySymbols;
var ye = Object.prototype.hasOwnProperty,
  ge = Object.prototype.propertyIsEnumerable;
var K = (s, u, l) =>
    u in s
      ? Ee(s, u, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (s[u] = l),
  N = (s, u) => {
    for (var l in u || (u = {})) ye.call(u, l) && K(s, l, u[l]);
    if (q) for (var l of q(u)) ge.call(u, l) && K(s, l, u[l]);
    return s;
  },
  g = (s, u) => Fe(s, Ve(u));
import {
  ae as n,
  r,
  j as t,
  at as Se,
  S as G,
  B as L,
  aS as Ce,
  Z as ke,
  aL as we,
  aR as S,
  af as d,
  H as Be,
  v as C,
  M as m,
  ai as _,
  aX as H,
  T as Pe,
} from './vendor.f50a67ab.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  i as Ie,
  r as Te,
} from './index.1708e48b.js';
import { g as X, c as Z, a as Re } from './accessControl.18599d4a.js';
import {
  p as J,
  b as x,
  a as Q,
  d as Ue,
  g as h,
} from './access-control.b0193dd4.js';
import Ae from './form.292487a9.js';
import { getColumns as Oe } from './constants.b38d9d9d.js';
import { s as k } from './index.module.078c7882.js';
function Me(s) {
  return J('/api/system/users/list', s);
}
function ze(s) {
  return h('/api/system/users/manage', { id: s });
}
function $e(s) {
  return x('/api/system/users/register', s);
}
function qe(s) {
  return Q('/api/system/users/manage', s);
}
function Ke(s) {
  return Ue('/api/system/users/manage', { id: s });
}
function Ge(s) {
  return Q('/api/system/users/status', s);
}
function Le(s, u) {
  return h('/api/system/users/roles/list', { userId: s, tenantId: u });
}
function _e(s) {
  return x('/api/system/users/roles/save', s);
}
function He(s) {
  return h('/api/system/users/depts/tree', { tenantId: s });
}
function Xe(s) {
  return x('/api/system/users/depts/save', s);
}
function Ze(s, u) {
  return h('/api/system/users/permissions/tree', { userId: s, tenantId: u });
}
function Je(s) {
  return x('/api/system/users/permissions/save', s);
}
function Qe(s) {
  return J('/api/system/roles/list', N({ page: 1, pageSize: 1e3 }, s));
}
var i =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/users/index.tsx';
const { Title: We } = Pe;
function w(s = []) {
  return s.map((u) => ({
    key: String(u.permissionId || u.id),
    title:
      u.permissionName ||
      u.objectName ||
      u.deptName ||
      u.permissionCode ||
      String(u.id),
    children: w(u.children || []),
  }));
}
function Ns() {
  const [s] = n.useForm(),
    [u, l] = r.exports.useState([]),
    [W, B] = r.exports.useState(!1),
    [D, P] = r.exports.useState(1),
    [v, Y] = r.exports.useState(10),
    [ee, se] = r.exports.useState(0),
    [I, te] = r.exports.useState({}),
    [ie, ue] = r.exports.useState(0),
    [p, T] = r.exports.useState('create'),
    [re, b] = r.exports.useState(!1),
    [a, f] = r.exports.useState(null),
    [ae, j] = r.exports.useState(!1),
    [oe, E] = r.exports.useState(!1),
    [le, F] = r.exports.useState(!1),
    [ne, me] = r.exports.useState([]),
    [R, U] = r.exports.useState([]),
    [ce, de] = r.exports.useState([]),
    [A, O] = r.exports.useState([]),
    [pe, fe] = r.exports.useState([]),
    [M, z] = r.exports.useState([]),
    V = Ie(),
    y = r.exports.useMemo(() => {
      var e;
      return V ? ((e = Te(V)) == null ? void 0 : e.fieldPolicies) : void 0;
    }, [V]),
    c = r.exports.useCallback(() => ue((e) => e + 1), []);
  r.exports.useEffect(() => {
    let e = !1;
    return (
      B(!0),
      Me(N({ page: D, pageSize: v }, I))
        .then((o) => {
          e || (l(o.list || []), se(o.total || 0));
        })
        .finally(() => !e && B(!1)),
      () => {
        e = !0;
      }
    );
  }, [D, v, I, ie]);
  const Ne = () => {
      T('create'),
        f(null),
        s.resetFields(),
        s.setFieldsValue({ activeStatus: 1 }),
        b(!0);
    },
    be = async (e) => {
      T('edit'), f(e);
      const o = await ze(e.id);
      s.setFieldsValue(g(N({}, o), { password: void 0 })), b(!0);
    },
    xe = async () => {
      const e = await s.validate();
      p === 'create'
        ? (await $e(e), m.success('\u7528\u6237\u5DF2\u65B0\u589E'))
        : a &&
          (await qe(g(N({}, e), { id: a.id })),
          m.success('\u7528\u6237\u5DF2\u66F4\u65B0')),
        b(!1),
        c();
    },
    he = Oe(
      {
        onEdit: be,
        onRoles: async (e) => {
          f(e);
          const [o, je] = await Promise.all([Qe(), Le(e.id)]);
          me(o.list || []),
            U((je || []).map(($) => Number($.roleId || $.id)).filter(Boolean)),
            j(!0);
        },
        onDepts: async (e) => {
          f(e),
            de(await He()),
            O((e.user_depts || []).map((o) => String(o.deptId))),
            E(!0);
        },
        onPermissions: async (e) => {
          f(e);
          const o = await Ze(e.id);
          fe(o || []), z(Re(o || []).map(String)), F(!0);
        },
        onDelete: (e) =>
          S.confirm({
            title: '\u5220\u9664\u7528\u6237',
            content: `\u786E\u8BA4\u5220\u9664\u7528\u6237 ${e.username}\uFF1F`,
            onOk: async () => {
              await Ke(e.id), m.success('\u7528\u6237\u5DF2\u5220\u9664'), c();
            },
          }),
        onStatus: (e, o) =>
          S.confirm({
            title: '\u72B6\u6001\u53D8\u66F4',
            content: `\u786E\u8BA4${
              o === 1 ? '\u542F\u7528' : '\u7981\u7528'
            }\u7528\u6237 ${e.username}\uFF1F`,
            onOk: async () => {
              await Ge({ id: e.id, activeStatus: o }),
                m.success('\u72B6\u6001\u5DF2\u66F4\u65B0'),
                c();
            },
          }),
      },
      y
    ),
    De = X(y, 'system.users.manage', 'email'),
    ve = X(y, 'system.users.manage', 'mobile');
  return t.exports.jsxDEV(
    Se,
    {
      children: [
        t.exports.jsxDEV(
          We,
          { heading: 6, children: '\u7528\u6237\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: i, lineNumber: 220, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          Ae,
          {
            onSearch: (e) => {
              P(1), te(e);
            },
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 221, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          'div',
          {
            className: k['button-group'],
            children: [
              t.exports.jsxDEV(
                G,
                {
                  children: t.exports.jsxDEV(
                    L,
                    {
                      type: 'primary',
                      icon: t.exports.jsxDEV(
                        Ce,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 229, columnNumber: 40 },
                        this
                      ),
                      onClick: Ne,
                      children: '\u65B0\u589E\u7528\u6237',
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 229, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 228, columnNumber: 9 },
                this
              ),
              t.exports.jsxDEV(
                L,
                {
                  icon: t.exports.jsxDEV(
                    ke,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 233, columnNumber: 23 },
                    this
                  ),
                  onClick: c,
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 233, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: i, lineNumber: 227, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          we,
          {
            rowKey: 'id',
            loading: W,
            columns: he,
            data: u,
            scroll: { x: 1500 },
            pagination: {
              current: D,
              pageSize: v,
              total: ee,
              showTotal: !0,
              sizeCanChange: !0,
            },
            onChange: (e) => {
              P(e.current || 1), Y(e.pageSize || 10);
            },
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 237, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          S,
          {
            title:
              p === 'create'
                ? '\u65B0\u589E\u7528\u6237'
                : '\u7F16\u8F91\u7528\u6237',
            visible: re,
            onOk: xe,
            onCancel: () => b(!1),
            unmountOnExit: !0,
            children: t.exports.jsxDEV(
              n,
              {
                form: s,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  p === 'create' &&
                    t.exports.jsxDEV(
                      n.Item,
                      {
                        label: '\u7528\u6237\u540D',
                        field: 'username',
                        rules: [{ required: !0 }],
                        children: t.exports.jsxDEV(
                          d,
                          {},
                          void 0,
                          !1,
                          { fileName: i, lineNumber: 276, columnNumber: 15 },
                          this
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 271, columnNumber: 13 },
                      this
                    ),
                  p === 'create' &&
                    t.exports.jsxDEV(
                      n.Item,
                      {
                        label: '\u5BC6\u7801',
                        field: 'password',
                        rules: [{ required: !0 }],
                        children: t.exports.jsxDEV(
                          d.Password,
                          {},
                          void 0,
                          !1,
                          { fileName: i, lineNumber: 285, columnNumber: 15 },
                          this
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 280, columnNumber: 13 },
                      this
                    ),
                  t.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u90AE\u7BB1',
                      field: 'email',
                      rules: [{ required: p === 'create' }],
                      children: t.exports.jsxDEV(
                        d,
                        { disabled: Z(De) },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 293, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 288, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u624B\u673A\u53F7',
                      field: 'mobile',
                      children: t.exports.jsxDEV(
                        d,
                        { disabled: Z(ve) },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 296, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 295, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u771F\u5B9E\u59D3\u540D',
                      field: 'realname',
                      children: t.exports.jsxDEV(
                        d,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 299, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 298, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u6635\u79F0',
                      field: 'nickname',
                      children: t.exports.jsxDEV(
                        d,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 302, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 301, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u72B6\u6001',
                      field: 'activeStatus',
                      children: t.exports.jsxDEV(
                        Be,
                        {
                          options: [
                            { label: '\u542F\u7528', value: 1 },
                            { label: '\u7981\u7528', value: 2 },
                            { label: '\u8FC7\u671F', value: 3 },
                            { label: '\u9501\u5B9A', value: 4 },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 305, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 304, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: i, lineNumber: 263, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 256, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          C,
          {
            title: `\u5206\u914D\u89D2\u8272\uFF1A${
              (a == null ? void 0 : a.username) || ''
            }`,
            visible: ae,
            width: 520,
            onOk: async () => {
              a &&
                (await _e({ userId: a.id, roleIds: R }),
                m.success('\u89D2\u8272\u5DF2\u4FDD\u5B58'),
                j(!1),
                c());
            },
            onCancel: () => j(!1),
            children: t.exports.jsxDEV(
              _.Group,
              {
                value: R,
                onChange: (e) => U(e),
                children: t.exports.jsxDEV(
                  G,
                  {
                    direction: 'vertical',
                    children: ne.map((e) =>
                      t.exports.jsxDEV(
                        _,
                        {
                          value: e.id,
                          children: [
                            e.roleName,
                            '\uFF08',
                            e.roleCode,
                            '\uFF09',
                          ],
                        },
                        e.id,
                        !0,
                        { fileName: i, lineNumber: 337, columnNumber: 15 },
                        this
                      )
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 335, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: i, lineNumber: 331, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 317, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          C,
          {
            title: `\u5206\u914D\u90E8\u95E8\uFF1A${
              (a == null ? void 0 : a.username) || ''
            }`,
            visible: oe,
            width: 520,
            onOk: async () => {
              a &&
                (await Xe({ userId: a.id, deptIds: A.map(Number) }),
                m.success('\u90E8\u95E8\u5DF2\u4FDD\u5B58'),
                E(!1),
                c());
            },
            onCancel: () => E(!1),
            children: t.exports.jsxDEV(
              'div',
              {
                className: k['tree-card'],
                children: t.exports.jsxDEV(
                  H,
                  {
                    checkable: !0,
                    checkedKeys: A,
                    onCheck: (e) => O(e),
                    treeData: w(ce),
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 363, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: i, lineNumber: 362, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 345, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          C,
          {
            title: `\u7528\u6237\u76F4\u63A5\u6388\u6743\uFF1A${
              (a == null ? void 0 : a.username) || ''
            }`,
            visible: le,
            width: 640,
            onOk: async () => {
              a &&
                (await Je({ userId: a.id, permissionIds: M.map(Number) }),
                m.success('\u76F4\u63A5\u6388\u6743\u5DF2\u4FDD\u5B58'),
                F(!1));
            },
            onCancel: () => F(!1),
            children: t.exports.jsxDEV(
              'div',
              {
                className: k['tree-card'],
                children: t.exports.jsxDEV(
                  H,
                  {
                    checkable: !0,
                    checkedKeys: M,
                    onCheck: (e) => z(e),
                    treeData: w(pe),
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 389, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: i, lineNumber: 388, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 372, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: i, lineNumber: 219, columnNumber: 5 },
    this
  );
}
export { Ns as default };
