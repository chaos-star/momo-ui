var ge = Object.defineProperty,
  Se = Object.defineProperties;
var Ce = Object.getOwnPropertyDescriptors;
var L = Object.getOwnPropertySymbols;
var ke = Object.prototype.hasOwnProperty,
  Pe = Object.prototype.propertyIsEnumerable;
var _ = (s, r, u) =>
    r in s
      ? ge(s, r, { enumerable: !0, configurable: !0, writable: !0, value: u })
      : (s[r] = u),
  b = (s, r) => {
    for (var u in r || (r = {})) ke.call(r, u) && _(s, u, r[u]);
    if (L) for (var u of L(r)) Pe.call(r, u) && _(s, u, r[u]);
    return s;
  },
  k = (s, r) => Se(s, Ce(r));
import {
  ae as n,
  r as a,
  j as t,
  at as we,
  S as H,
  B as W,
  aS as Be,
  Z as Ie,
  aL as Te,
  aR as P,
  af as d,
  H as Ae,
  v as w,
  M as m,
  ai as X,
  aX as Z,
  T as Ue,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  i as Re,
  r as Oe,
} from './index.77883a3f.js';
import { g as J, b as Q, c as $e, e as Ge } from './accessControl.941fcf7e.js';
import { g as Me } from './access-role.b902211a.js';
import {
  p as Y,
  b as h,
  a as ee,
  d as ze,
  g as D,
} from './access-control.86021a9b.js';
import Ke from './form.fa2f2149.js';
import { getColumns as qe } from './constants.f79748fa.js';
import { s as B } from './index.module.078c7882.js';
function Le(s) {
  return Y('/api/system/users/list', s);
}
function _e(s) {
  return D('/api/system/users/manage', { id: s });
}
function He(s) {
  return h('/api/system/users/register', s);
}
function We(s) {
  return ee('/api/system/users/manage', s);
}
function Xe(s) {
  return ze('/api/system/users/manage', { id: s });
}
function Ze(s) {
  return ee('/api/system/users/status', s);
}
function Je(s, r) {
  return D('/api/system/users/roles/list', { userId: s, tenantId: r });
}
function Qe(s) {
  return h('/api/system/users/roles/save', s);
}
function Ye(s) {
  return D('/api/system/users/depts/tree', { tenantId: s });
}
function es(s) {
  return h('/api/system/users/depts/save', s);
}
function ss(s, r) {
  return D('/api/system/users/permissions/granted-ids', {
    userId: s,
    tenantId: r,
  });
}
function ts(s) {
  return h('/api/system/users/permissions/save', s);
}
function is(s) {
  return Y('/api/system/roles/list', b({ page: 1, pageSize: 1e3 }, s));
}
var i =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/users/index.tsx';
const { Title: rs } = Ue;
function I(s = []) {
  return s.map((r) => {
    const u = r,
      N = r;
    return {
      key: String(u.permissionId || r.id),
      title: `${
        u.permissionName ||
        u.objectName ||
        N.deptName ||
        u.permissionCode ||
        String(r.id)
      }${u.nodeType ? `\uFF08${u.nodeType}\uFF09` : ''}${
        u.autoGrant === 1 ? ' [\u81EA\u52A8]' : ''
      }`,
      disableCheckbox:
        u.checkable === !1 ||
        u.nodeType === 'CATALOG' ||
        u.nodeType === 'GROUP' ||
        (!u.permissionId && !N.deptName),
      children: I(r.children || []),
    };
  });
}
function Ds() {
  const [s] = n.useForm(),
    [r, u] = a.exports.useState([]),
    [N, T] = a.exports.useState(!1),
    [v, A] = a.exports.useState(1),
    [j, se] = a.exports.useState(10),
    [te, ie] = a.exports.useState(0),
    [U, re] = a.exports.useState({}),
    [ue, ae] = a.exports.useState(0),
    [p, R] = a.exports.useState('create'),
    [oe, x] = a.exports.useState(!1),
    [o, f] = a.exports.useState(null),
    [le, F] = a.exports.useState(!1),
    [ne, E] = a.exports.useState(!1),
    [me, y] = a.exports.useState(!1),
    [ce, de] = a.exports.useState([]),
    [O, $] = a.exports.useState([]),
    [pe, fe] = a.exports.useState([]),
    [G, M] = a.exports.useState([]),
    [V, be] = a.exports.useState([]),
    [z, K] = a.exports.useState([]),
    g = Re(),
    S = a.exports.useMemo(() => {
      var e;
      return g ? ((e = Oe(g)) == null ? void 0 : e.fieldPolicies) : void 0;
    }, [g]),
    c = a.exports.useCallback(() => ae((e) => e + 1), []);
  a.exports.useEffect(() => {
    let e = !1;
    return (
      T(!0),
      Le(b({ page: v, pageSize: j }, U))
        .then((l) => {
          e || (u(l.list || []), ie(l.total || 0));
        })
        .finally(() => !e && T(!1)),
      () => {
        e = !0;
      }
    );
  }, [v, j, U, ue]);
  const Ne = () => {
      R('create'),
        f(null),
        s.resetFields(),
        s.setFieldsValue({ activeStatus: 1 }),
        x(!0);
    },
    xe = async (e) => {
      R('edit'), f(e);
      const l = await _e(e.id);
      s.setFieldsValue(k(b({}, l), { password: void 0 })), x(!0);
    },
    he = async () => {
      const e = await s.validate();
      p === 'create'
        ? (await He(e), m.success('\u7528\u6237\u5DF2\u65B0\u589E'))
        : o &&
          (await We(k(b({}, e), { id: o.id })),
          m.success('\u7528\u6237\u5DF2\u66F4\u65B0')),
        x(!1),
        c();
    },
    De = async (e) => {
      f(e);
      const [l, C] = await Promise.all([is(), Je(e.id)]);
      de(l.list || []),
        $((C || []).map((q) => Number(q.roleId || q.id)).filter(Boolean)),
        F(!0);
    },
    ve = async (e) => {
      f(e),
        fe(await Ye()),
        M((e.user_depts || []).map((l) => String(l.deptId))),
        E(!0);
    },
    je = async (e) => {
      f(e);
      const [l, C] = await Promise.all([Me(), ss(e.id)]);
      be(l || []), K((C || []).map(String)), y(!0);
    },
    Fe = (e) => {
      const l = Ge(V, e);
      K(l);
    },
    Ee = qe(
      {
        onEdit: xe,
        onRoles: De,
        onDepts: ve,
        onPermissions: je,
        onDelete: (e) =>
          P.confirm({
            title: '\u5220\u9664\u7528\u6237',
            content: `\u786E\u8BA4\u5220\u9664\u7528\u6237 ${e.username}\uFF1F`,
            onOk: async () => {
              await Xe(e.id), m.success('\u7528\u6237\u5DF2\u5220\u9664'), c();
            },
          }),
        onStatus: (e, l) =>
          P.confirm({
            title: '\u72B6\u6001\u53D8\u66F4',
            content: `\u786E\u8BA4${
              l === 1 ? '\u542F\u7528' : '\u7981\u7528'
            }\u7528\u6237 ${e.username}\uFF1F`,
            onOk: async () => {
              await Ze({ id: e.id, activeStatus: l }),
                m.success('\u72B6\u6001\u5DF2\u66F4\u65B0'),
                c();
            },
          }),
      },
      S
    ),
    ye = J(S, 'system.users.manage', 'email'),
    Ve = J(S, 'system.users.manage', 'mobile');
  return t.exports.jsxDEV(
    we,
    {
      children: [
        t.exports.jsxDEV(
          rs,
          { heading: 6, children: '\u7528\u6237\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: i, lineNumber: 245, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          Ke,
          {
            onSearch: (e) => {
              A(1), re(e);
            },
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 246, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          'div',
          {
            className: B['button-group'],
            children: [
              t.exports.jsxDEV(
                H,
                {
                  children: t.exports.jsxDEV(
                    W,
                    {
                      type: 'primary',
                      icon: t.exports.jsxDEV(
                        Be,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 254, columnNumber: 40 },
                        this
                      ),
                      onClick: Ne,
                      children: '\u65B0\u589E\u7528\u6237',
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 254, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 253, columnNumber: 9 },
                this
              ),
              t.exports.jsxDEV(
                W,
                {
                  icon: t.exports.jsxDEV(
                    Ie,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 258, columnNumber: 23 },
                    this
                  ),
                  onClick: c,
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 258, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: i, lineNumber: 252, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          Te,
          {
            rowKey: 'id',
            loading: N,
            columns: Ee,
            data: r,
            scroll: { x: 1500 },
            pagination: {
              current: v,
              pageSize: j,
              total: te,
              showTotal: !0,
              sizeCanChange: !0,
            },
            onChange: (e) => {
              A(e.current || 1), se(e.pageSize || 10);
            },
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 262, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          P,
          {
            title:
              p === 'create'
                ? '\u65B0\u589E\u7528\u6237'
                : '\u7F16\u8F91\u7528\u6237',
            visible: oe,
            onOk: he,
            onCancel: () => x(!1),
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
                          { fileName: i, lineNumber: 301, columnNumber: 15 },
                          this
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 296, columnNumber: 13 },
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
                          { fileName: i, lineNumber: 310, columnNumber: 15 },
                          this
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 305, columnNumber: 13 },
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
                        { disabled: Q(ye) },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 318, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 313, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u624B\u673A\u53F7',
                      field: 'mobile',
                      children: t.exports.jsxDEV(
                        d,
                        { disabled: Q(Ve) },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 321, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 320, columnNumber: 11 },
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
                        { fileName: i, lineNumber: 324, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 323, columnNumber: 11 },
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
                        { fileName: i, lineNumber: 327, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 326, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u72B6\u6001',
                      field: 'activeStatus',
                      children: t.exports.jsxDEV(
                        Ae,
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
                        { fileName: i, lineNumber: 330, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 329, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: i, lineNumber: 288, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 281, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          w,
          {
            title: `\u5206\u914D\u89D2\u8272\uFF1A${
              (o == null ? void 0 : o.username) || ''
            }`,
            visible: le,
            width: 520,
            onOk: async () => {
              o &&
                (await Qe({ userId: o.id, roleIds: O }),
                m.success('\u89D2\u8272\u5DF2\u4FDD\u5B58'),
                F(!1),
                c());
            },
            onCancel: () => F(!1),
            children: t.exports.jsxDEV(
              X.Group,
              {
                value: O,
                onChange: (e) => $(e),
                children: t.exports.jsxDEV(
                  H,
                  {
                    direction: 'vertical',
                    children: ce.map((e) =>
                      t.exports.jsxDEV(
                        X,
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
                        { fileName: i, lineNumber: 362, columnNumber: 15 },
                        this
                      )
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 360, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: i, lineNumber: 356, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 342, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          w,
          {
            title: `\u5206\u914D\u90E8\u95E8\uFF1A${
              (o == null ? void 0 : o.username) || ''
            }`,
            visible: ne,
            width: 520,
            onOk: async () => {
              o &&
                (await es({ userId: o.id, deptIds: G.map(Number) }),
                m.success('\u90E8\u95E8\u5DF2\u4FDD\u5B58'),
                E(!1),
                c());
            },
            onCancel: () => E(!1),
            children: t.exports.jsxDEV(
              'div',
              {
                className: B['tree-card'],
                children: t.exports.jsxDEV(
                  Z,
                  {
                    checkable: !0,
                    checkedKeys: G,
                    onCheck: (e) => M(e),
                    treeData: I(pe),
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 388, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: i, lineNumber: 387, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 370, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          w,
          {
            title: `\u7528\u6237\u76F4\u63A5\u6388\u6743\uFF1A${
              (o == null ? void 0 : o.username) || ''
            }`,
            visible: me,
            width: 640,
            onOk: async () => {
              o &&
                (await ts({
                  userId: o.id,
                  permissionIds: $e(V, z).map(Number),
                }),
                m.success('\u76F4\u63A5\u6388\u6743\u5DF2\u4FDD\u5B58'),
                y(!1));
            },
            onCancel: () => y(!1),
            children: t.exports.jsxDEV(
              'div',
              {
                className: B['tree-card'],
                children: t.exports.jsxDEV(
                  Z,
                  {
                    checkable: !0,
                    checkedKeys: z,
                    onCheck: Fe,
                    treeData: I(V),
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 417, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: i, lineNumber: 416, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 397, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: i, lineNumber: 244, columnNumber: 5 },
    this
  );
}
export { Ds as default };
