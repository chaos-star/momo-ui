var q = Object.defineProperty,
  G = Object.defineProperties;
var Q = Object.getOwnPropertyDescriptors;
var B = Object.getOwnPropertySymbols;
var X = Object.prototype.hasOwnProperty,
  Y = Object.prototype.propertyIsEnumerable;
var x = (e, a, s) =>
    a in e
      ? q(e, a, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[a] = s),
  F = (e, a) => {
    for (var s in a || (a = {})) X.call(a, s) && x(e, s, a[s]);
    if (B) for (var s of B(a)) Y.call(a, s) && x(e, s, a[s]);
    return e;
  },
  C = (e, a) => G(e, Q(a));
import {
  ag as o,
  r as n,
  a as r,
  av as H,
  j as t,
  S as _,
  B as c,
  aT as J,
  aQ as L,
  aj as U,
  aR as W,
  aS as b,
  M as E,
  $ as Z,
  aY as ee,
  aX as te,
  ah as m,
  K as ae,
  ak as k,
  T as ue,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  d as se,
  b as N,
  g as j,
  a as le,
  p as ne,
} from './access-control.2c5ad8d6.js';
import './index.04d9875a.js';
function ie() {
  return j('/api/system/depts/tree');
}
function oe(e) {
  return N('/api/system/depts/manage', e);
}
function re(e) {
  return le('/api/system/depts/manage', e);
}
function ce(e) {
  return se('/api/system/depts/manage', { id: e });
}
function de(e, a) {
  return j('/api/system/depts/roles', { deptId: e, tenantId: a });
}
function pe(e) {
  return N('/api/system/depts/roles', e);
}
function Ee(e) {
  return ne('/api/system/roles/list', F({ page: 1, pageSize: 1e3 }, e));
}
const me = '_operations_zl5g6_23';
var f = {
  'page-layout': '_page-layout_zl5g6_1',
  'tree-panel': '_tree-panel_zl5g6_5',
  'detail-panel': '_detail-panel_zl5g6_14',
  'button-group': '_button-group_zl5g6_18',
  operations: me,
};
const { Title: fe } = ue;
function w(e = []) {
  return e.map((a) => ({
    key: String(a.id),
    title: a.deptName || a.deptCode || String(a.id),
    children: w(a.children || []),
  }));
}
function R(e = [], a) {
  for (const s of e) {
    if (s.id === a) return s;
    const i = R(s.children || [], a);
    if (i) return i;
  }
  return null;
}
function Se() {
  const [e] = o.useForm(),
    [a, s] = n.exports.useState([]),
    [i, g] = n.exports.useState(),
    [T, d] = n.exports.useState(!1),
    [A, h] = n.exports.useState(!1),
    [D, v] = n.exports.useState('create'),
    [z, O] = n.exports.useState([]),
    [y, I] = n.exports.useState([]),
    u = n.exports.useMemo(() => R(a, i), [a, i]),
    p = async () => {
      const l = await ie();
      s(l || []);
    };
  n.exports.useEffect(() => {
    p();
  }, []);
  const M = () => {
      v('create'),
        e.resetFields(),
        e.setFieldsValue({ parentId: i || 0, activeStatus: 1 }),
        d(!0);
    },
    V = () => {
      !u || (v('edit'), e.setFieldsValue(u), d(!0));
    },
    P = async () => {
      const l = await e.validate();
      D === 'create'
        ? (await oe(l), E.success('\u90E8\u95E8\u5DF2\u65B0\u589E'))
        : u &&
          (await re(C(F({}, l), { id: u.id })),
          E.success('\u90E8\u95E8\u5DF2\u66F4\u65B0')),
        d(!1),
        await p();
    },
    $ = async () => {
      if (!u) return;
      const [l, K] = await Promise.all([Ee(), de(u.id)]);
      O(l.list || []),
        I((K || []).map((S) => Number(S.roleId || S.id)).filter(Boolean)),
        h(!0);
    };
  return r(H, {
    children: [
      t(fe, { heading: 6, children: '\u90E8\u95E8\u7BA1\u7406' }),
      r('div', {
        className: f['button-group'],
        children: [
          r(_, {
            children: [
              t(c, {
                type: 'primary',
                icon: t(J, {}),
                onClick: M,
                children: '\u65B0\u589E\u90E8\u95E8',
              }),
              t(c, {
                disabled: !u,
                icon: t(L, {}),
                onClick: V,
                children: '\u7F16\u8F91\u90E8\u95E8',
              }),
              t(c, {
                disabled: !u,
                icon: t(U, {}),
                onClick: $,
                children: '\u7ED1\u5B9A\u89D2\u8272',
              }),
              t(c, {
                disabled: !u,
                status: 'danger',
                icon: t(W, {}),
                onClick: () =>
                  u &&
                  b.confirm({
                    title: '\u5220\u9664\u90E8\u95E8',
                    content: `\u786E\u8BA4\u5220\u9664\u90E8\u95E8 ${u.deptName}\uFF1F`,
                    onOk: async () => {
                      await ce(u.id),
                        E.success('\u90E8\u95E8\u5DF2\u5220\u9664'),
                        g(void 0),
                        await p();
                    },
                  }),
                children: '\u5220\u9664\u90E8\u95E8',
              }),
            ],
          }),
          t(c, { icon: t(Z, {}), onClick: p, children: '\u5237\u65B0' }),
        ],
      }),
      r('div', {
        className: f['page-layout'],
        children: [
          t('div', {
            className: f['tree-panel'],
            children: t(ee, {
              treeData: w(a),
              selectedKeys: i ? [String(i)] : [],
              onSelect: (l) => g(Number(l[0])),
            }),
          }),
          t('div', {
            className: f['detail-panel'],
            children: t(te, {
              column: 1,
              title: '\u90E8\u95E8\u8BE6\u60C5',
              data: u
                ? [
                    { label: '\u90E8\u95E8 ID', value: u.id },
                    {
                      label: '\u90E8\u95E8\u540D\u79F0',
                      value: u.deptName || '\u2014',
                    },
                    {
                      label: '\u90E8\u95E8\u7F16\u7801',
                      value: u.deptCode || '\u2014',
                    },
                    { label: '\u7236\u90E8\u95E8', value: u.parentId || 0 },
                    {
                      label: '\u72B6\u6001',
                      value:
                        u.activeStatus === 1 ? '\u542F\u7528' : '\u7981\u7528',
                    },
                  ]
                : [
                    {
                      label: '\u63D0\u793A',
                      value:
                        '\u8BF7\u9009\u62E9\u5DE6\u4FA7\u90E8\u95E8\u8282\u70B9',
                    },
                  ],
            }),
          }),
        ],
      }),
      t(b, {
        title:
          D === 'create'
            ? '\u65B0\u589E\u90E8\u95E8'
            : '\u7F16\u8F91\u90E8\u95E8',
        visible: T,
        onOk: P,
        onCancel: () => d(!1),
        unmountOnExit: !0,
        children: r(o, {
          form: e,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            t(o.Item, {
              label: '\u7236\u90E8\u95E8 ID',
              field: 'parentId',
              children: t(m, {}),
            }),
            t(o.Item, {
              label: '\u90E8\u95E8\u540D\u79F0',
              field: 'deptName',
              rules: [{ required: !0 }],
              children: t(m, {}),
            }),
            t(o.Item, {
              label: '\u90E8\u95E8\u7C7B\u578B',
              field: 'deptType',
              children: t(m, {}),
            }),
            t(o.Item, {
              label: '\u6392\u5E8F',
              field: 'sortOrder',
              children: t(m, {}),
            }),
            t(o.Item, {
              label: '\u72B6\u6001',
              field: 'activeStatus',
              children: t(ae, {
                options: [
                  { label: '\u542F\u7528', value: 1 },
                  { label: '\u7981\u7528', value: 2 },
                ],
              }),
            }),
          ],
        }),
      }),
      t(b, {
        title: `\u90E8\u95E8\u7ED1\u5B9A\u89D2\u8272\uFF1A${
          (u == null ? void 0 : u.deptName) || ''
        }`,
        visible: A,
        onOk: async () => {
          u &&
            (await pe({ deptId: u.id, roleIds: y }),
            E.success('\u90E8\u95E8\u89D2\u8272\u5DF2\u4FDD\u5B58'),
            h(!1));
        },
        onCancel: () => h(!1),
        children: t(k.Group, {
          value: y,
          onChange: (l) => I(l),
          children: t(_, {
            direction: 'vertical',
            children: z.map((l) =>
              r(
                k,
                {
                  value: l.id,
                  children: [l.roleName, '\uFF08', l.roleCode, '\uFF09'],
                },
                l.id
              )
            ),
          }),
        }),
      }),
    ],
  });
}
export { Se as default };
