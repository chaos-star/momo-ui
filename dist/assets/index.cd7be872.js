var Pe = Object.defineProperty,
  we = Object.defineProperties;
var Be = Object.getOwnPropertyDescriptors;
var L = Object.getOwnPropertySymbols;
var Te = Object.prototype.hasOwnProperty,
  Ie = Object.prototype.propertyIsEnumerable;
var W = (s, a, u) =>
    a in s
      ? Pe(s, a, { enumerable: !0, configurable: !0, writable: !0, value: u })
      : (s[a] = u),
  f = (s, a) => {
    for (var u in a || (a = {})) Te.call(a, u) && W(s, u, a[u]);
    if (L) for (var u of L(a)) Ie.call(a, u) && W(s, u, a[u]);
    return s;
  },
  T = (s, a) => we(s, Be(a));
import {
  ag as o,
  r as n,
  a as b,
  av as Ae,
  j as t,
  S as Y,
  B as _,
  aT as je,
  $ as Ee,
  aM as Ue,
  aS as I,
  ah as d,
  K as Re,
  w as A,
  M as l,
  ak as H,
  aY as J,
  T as Oe,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  i as Ne,
  r as $e,
} from './index.2cec1040.js';
import { g as Q, b as X, c as Ve, e as Ge } from './accessControl.941fcf7e.js';
import { g as Me } from './access-role.42596941.js';
import {
  p as Z,
  b as y,
  a as ee,
  d as ze,
  g,
} from './access-control.9e664147.js';
import Ke from './form.fc82e398.js';
import { getColumns as qe } from './constants.f626edf2.js';
import { s as j } from './index.module.078c7882.js';
function Le(s) {
  return Z('/api/system/users/list', s);
}
function We(s) {
  return g('/api/system/users/manage', { id: s });
}
function Ye(s) {
  return y('/api/system/users/register', s);
}
function _e(s) {
  return ee('/api/system/users/manage', s);
}
function He(s) {
  return ze('/api/system/users/manage', { id: s });
}
function Je(s) {
  return ee('/api/system/users/status', s);
}
function Qe(s, a) {
  return g('/api/system/users/roles/list', { userId: s, tenantId: a });
}
function Xe(s) {
  return y('/api/system/users/roles/save', s);
}
function Ze(s) {
  return g('/api/system/users/depts/tree', { tenantId: s });
}
function es(s) {
  return y('/api/system/users/depts/save', s);
}
function ss(s, a) {
  return g('/api/system/users/permissions/granted-ids', {
    userId: s,
    tenantId: a,
  });
}
function ts(s) {
  return y('/api/system/users/permissions/save', s);
}
function as(s) {
  return Z('/api/system/roles/list', f({ page: 1, pageSize: 1e3 }, s));
}
const { Title: us } = Oe;
function E(s = []) {
  return s.map((a) => {
    const u = a,
      h = a;
    return {
      key: String(u.permissionId || a.id),
      title: `${
        u.permissionName ||
        u.objectName ||
        h.deptName ||
        u.permissionCode ||
        String(a.id)
      }${u.nodeType ? `\uFF08${u.nodeType}\uFF09` : ''}${
        u.autoGrant === 1 ? ' [\u81EA\u52A8]' : ''
      }`,
      disableCheckbox:
        u.checkable === !1 ||
        u.nodeType === 'CATALOG' ||
        u.nodeType === 'GROUP' ||
        (!u.permissionId && !h.deptName),
      children: E(a.children || []),
    };
  });
}
function gs() {
  const [s] = o.useForm(),
    [a, u] = n.exports.useState([]),
    [h, U] = n.exports.useState(!1),
    [x, R] = n.exports.useState(1),
    [S, se] = n.exports.useState(10),
    [te, ae] = n.exports.useState(0),
    [O, ue] = n.exports.useState({}),
    [ne, ie] = n.exports.useState(0),
    [p, N] = n.exports.useState('create'),
    [re, F] = n.exports.useState(!1),
    [i, m] = n.exports.useState(null),
    [oe, C] = n.exports.useState(!1),
    [le, D] = n.exports.useState(!1),
    [ce, k] = n.exports.useState(!1),
    [de, pe] = n.exports.useState([]),
    [$, V] = n.exports.useState([]),
    [me, fe] = n.exports.useState([]),
    [G, M] = n.exports.useState([]),
    [v, he] = n.exports.useState([]),
    [z, K] = n.exports.useState([]),
    P = Ne(),
    w = n.exports.useMemo(() => {
      var e;
      return P ? ((e = $e(P)) == null ? void 0 : e.fieldPolicies) : void 0;
    }, [P]),
    c = n.exports.useCallback(() => ie((e) => e + 1), []);
  n.exports.useEffect(() => {
    let e = !1;
    return (
      U(!0),
      Le(f({ page: x, pageSize: S }, O))
        .then((r) => {
          e || (u(r.list || []), ae(r.total || 0));
        })
        .finally(() => !e && U(!1)),
      () => {
        e = !0;
      }
    );
  }, [x, S, O, ne]);
  const Fe = () => {
      N('create'),
        m(null),
        s.resetFields(),
        s.setFieldsValue({ activeStatus: 1 }),
        F(!0);
    },
    be = async (e) => {
      N('edit'), m(e);
      const r = await We(e.id);
      s.setFieldsValue(T(f({}, r), { password: void 0 })), F(!0);
    },
    ye = async () => {
      const e = await s.validate();
      p === 'create'
        ? (await Ye(e), l.success('\u7528\u6237\u5DF2\u65B0\u589E'))
        : i &&
          (await _e(T(f({}, e), { id: i.id })),
          l.success('\u7528\u6237\u5DF2\u66F4\u65B0')),
        F(!1),
        c();
    },
    ge = async (e) => {
      m(e);
      const [r, B] = await Promise.all([as(), Qe(e.id)]);
      pe(r.list || []),
        V((B || []).map((q) => Number(q.roleId || q.id)).filter(Boolean)),
        C(!0);
    },
    xe = async (e) => {
      m(e),
        fe(await Ze()),
        M((e.user_depts || []).map((r) => String(r.deptId))),
        D(!0);
    },
    Se = async (e) => {
      m(e);
      const [r, B] = await Promise.all([Me(), ss(e.id)]);
      he(r || []), K((B || []).map(String)), k(!0);
    },
    Ce = (e) => {
      const r = Ge(v, e);
      K(r);
    },
    De = qe(
      {
        onEdit: be,
        onRoles: ge,
        onDepts: xe,
        onPermissions: Se,
        onDelete: (e) =>
          I.confirm({
            title: '\u5220\u9664\u7528\u6237',
            content: `\u786E\u8BA4\u5220\u9664\u7528\u6237 ${e.username}\uFF1F`,
            onOk: async () => {
              await He(e.id), l.success('\u7528\u6237\u5DF2\u5220\u9664'), c();
            },
          }),
        onStatus: (e, r) =>
          I.confirm({
            title: '\u72B6\u6001\u53D8\u66F4',
            content: `\u786E\u8BA4${
              r === 1 ? '\u542F\u7528' : '\u7981\u7528'
            }\u7528\u6237 ${e.username}\uFF1F`,
            onOk: async () => {
              await Je({ id: e.id, activeStatus: r }),
                l.success('\u72B6\u6001\u5DF2\u66F4\u65B0'),
                c();
            },
          }),
      },
      w
    ),
    ke = Q(w, 'system.users.manage', 'email'),
    ve = Q(w, 'system.users.manage', 'mobile');
  return b(Ae, {
    children: [
      t(us, { heading: 6, children: '\u7528\u6237\u7BA1\u7406' }),
      t(Ke, {
        onSearch: (e) => {
          R(1), ue(e);
        },
      }),
      b('div', {
        className: j['button-group'],
        children: [
          t(Y, {
            children: t(_, {
              type: 'primary',
              icon: t(je, {}),
              onClick: Fe,
              children: '\u65B0\u589E\u7528\u6237',
            }),
          }),
          t(_, { icon: t(Ee, {}), onClick: c, children: '\u5237\u65B0' }),
        ],
      }),
      t(Ue, {
        rowKey: 'id',
        loading: h,
        columns: De,
        data: a,
        scroll: { x: 1500 },
        pagination: {
          current: x,
          pageSize: S,
          total: te,
          showTotal: !0,
          sizeCanChange: !0,
        },
        onChange: (e) => {
          R(e.current || 1), se(e.pageSize || 10);
        },
      }),
      t(I, {
        title:
          p === 'create'
            ? '\u65B0\u589E\u7528\u6237'
            : '\u7F16\u8F91\u7528\u6237',
        visible: re,
        onOk: ye,
        onCancel: () => F(!1),
        unmountOnExit: !0,
        children: b(o, {
          form: s,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            p === 'create' &&
              t(o.Item, {
                label: '\u7528\u6237\u540D',
                field: 'username',
                rules: [{ required: !0 }],
                children: t(d, {}),
              }),
            p === 'create' &&
              t(o.Item, {
                label: '\u5BC6\u7801',
                field: 'password',
                rules: [{ required: !0 }],
                children: t(d.Password, {}),
              }),
            t(o.Item, {
              label: '\u90AE\u7BB1',
              field: 'email',
              rules: [{ required: p === 'create' }],
              children: t(d, { disabled: X(ke) }),
            }),
            t(o.Item, {
              label: '\u624B\u673A\u53F7',
              field: 'mobile',
              children: t(d, { disabled: X(ve) }),
            }),
            t(o.Item, {
              label: '\u771F\u5B9E\u59D3\u540D',
              field: 'realname',
              children: t(d, {}),
            }),
            t(o.Item, {
              label: '\u6635\u79F0',
              field: 'nickname',
              children: t(d, {}),
            }),
            t(o.Item, {
              label: '\u72B6\u6001',
              field: 'activeStatus',
              children: t(Re, {
                options: [
                  { label: '\u542F\u7528', value: 1 },
                  { label: '\u7981\u7528', value: 2 },
                  { label: '\u8FC7\u671F', value: 3 },
                  { label: '\u9501\u5B9A', value: 4 },
                ],
              }),
            }),
          ],
        }),
      }),
      t(A, {
        title: `\u5206\u914D\u89D2\u8272\uFF1A${
          (i == null ? void 0 : i.username) || ''
        }`,
        visible: oe,
        width: 520,
        onOk: async () => {
          i &&
            (await Xe({ userId: i.id, roleIds: $ }),
            l.success('\u89D2\u8272\u5DF2\u4FDD\u5B58'),
            C(!1),
            c());
        },
        onCancel: () => C(!1),
        children: t(H.Group, {
          value: $,
          onChange: (e) => V(e),
          children: t(Y, {
            direction: 'vertical',
            children: de.map((e) =>
              b(
                H,
                {
                  value: e.id,
                  children: [e.roleName, '\uFF08', e.roleCode, '\uFF09'],
                },
                e.id
              )
            ),
          }),
        }),
      }),
      t(A, {
        title: `\u5206\u914D\u90E8\u95E8\uFF1A${
          (i == null ? void 0 : i.username) || ''
        }`,
        visible: le,
        width: 520,
        onOk: async () => {
          i &&
            (await es({ userId: i.id, deptIds: G.map(Number) }),
            l.success('\u90E8\u95E8\u5DF2\u4FDD\u5B58'),
            D(!1),
            c());
        },
        onCancel: () => D(!1),
        children: t('div', {
          className: j['tree-card'],
          children: t(J, {
            checkable: !0,
            checkedKeys: G,
            onCheck: (e) => M(e),
            treeData: E(me),
          }),
        }),
      }),
      t(A, {
        title: `\u7528\u6237\u76F4\u63A5\u6388\u6743\uFF1A${
          (i == null ? void 0 : i.username) || ''
        }`,
        visible: ce,
        width: 640,
        onOk: async () => {
          i &&
            (await ts({ userId: i.id, permissionIds: Ve(v, z).map(Number) }),
            l.success('\u76F4\u63A5\u6388\u6743\u5DF2\u4FDD\u5B58'),
            k(!1));
        },
        onCancel: () => k(!1),
        children: t('div', {
          className: j['tree-card'],
          children: t(J, {
            checkable: !0,
            checkedKeys: z,
            onCheck: Ce,
            treeData: E(v),
          }),
        }),
      }),
    ],
  });
}
export { gs as default };
