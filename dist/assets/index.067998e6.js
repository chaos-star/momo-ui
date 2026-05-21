var se = Object.defineProperty,
  oe = Object.defineProperties;
var de = Object.getOwnPropertyDescriptors;
var L = Object.getOwnPropertySymbols;
var re = Object.prototype.hasOwnProperty,
  ce = Object.prototype.propertyIsEnumerable;
var k = (s, l, n) =>
    l in s
      ? se(s, l, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (s[l] = n),
  b = (s, l) => {
    for (var n in l || (l = {})) re.call(l, n) && k(s, n, l[n]);
    if (L) for (var n of L(l)) ce.call(l, n) && k(s, n, l[n]);
    return s;
  },
  C = (s, l) => oe(s, de(l));
import {
  ag as i,
  r as a,
  a as d,
  av as pe,
  j as e,
  ah as o,
  B as r,
  $ as Be,
  S as A,
  aT as O,
  aM as N,
  aS as h,
  K as y,
  T as Fe,
  M as f,
  b as I,
  aQ as z,
  aR as V,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  z as he,
  A as ye,
  s as p,
  B as fe,
  C as Ee,
  D as ge,
  E as me,
  F as xe,
  G as be,
} from './index.module.68b61998.js';
import { f as q } from './accessControl.941fcf7e.js';
import './access-control.a5391fe6.js';
import './index.97399a5e.js';
const { Title: Ce } = Fe;
function ke() {
  const [s] = i.useForm(),
    [l] = i.useForm(),
    [n, M] = a.exports.useState(''),
    [W, D] = a.exports.useState(!1),
    [R, w] = a.exports.useState(!1),
    [K, Y] = a.exports.useState([]),
    [$, _] = a.exports.useState([]),
    [G, Q] = a.exports.useState(0),
    [U, H] = a.exports.useState(0),
    [E, S] = a.exports.useState(1),
    [g, v] = a.exports.useState(1),
    [J, m] = a.exports.useState(!1),
    [X, x] = a.exports.useState(!1),
    [B, Z] = a.exports.useState(null),
    [F, ee] = a.exports.useState(null),
    [P, c] = a.exports.useState(0);
  a.exports.useEffect(() => {
    let u = !1;
    return (
      D(!0),
      he({ page: E, pageSize: 10, keyword: n || void 0 })
        .then((t) => {
          u || (Y(t.list || []), Q(t.total || 0));
        })
        .finally(() => !u && D(!1)),
      () => {
        u = !0;
      }
    );
  }, [E, n, P]),
    a.exports.useEffect(() => {
      let u = !1;
      return (
        w(!0),
        ye({ page: g, pageSize: 10, keyword: n || void 0 })
          .then((t) => {
            u || (_(t.list || []), H(t.total || 0));
          })
          .finally(() => !u && w(!1)),
        () => {
          u = !0;
        }
      );
    }, [g, n, P]);
  const T = (u) => {
      Z(u || null),
        s.resetFields(),
        s.setFieldsValue(
          u || {
            policyType: 'ABAC',
            effect: 'ALLOW',
            priority: 100,
            activeStatus: 1,
          }
        ),
        m(!0);
    },
    j = (u) => {
      ee(u || null),
        l.resetFields(),
        l.setFieldsValue(
          u || {
            subjectType: 'ROLE',
            effect: 'ALLOW',
            priority: 100,
            activeStatus: 1,
          }
        ),
        x(!0);
    },
    ue = async () => {
      const u = await s.validate();
      B ? await fe(C(b({}, u), { id: B.id })) : await Ee(u),
        f.success(
          B
            ? '\u7B56\u7565\u5DF2\u66F4\u65B0'
            : '\u7B56\u7565\u5DF2\u65B0\u589E'
        ),
        m(!1),
        c((t) => t + 1);
    },
    te = async () => {
      const u = await l.validate();
      F ? await ge(C(b({}, u), { id: F.id })) : await me(u),
        f.success(
          F
            ? '\u7ED1\u5B9A\u5DF2\u66F4\u65B0'
            : '\u7ED1\u5B9A\u5DF2\u65B0\u589E'
        ),
        x(!1),
        c((t) => t + 1);
    },
    ie = (u) =>
      h.confirm({
        title: '\u5220\u9664 ABAC \u7B56\u7565',
        content: `\u786E\u8BA4\u5220\u9664 ${u.policyCode}\uFF1F\u7ED1\u5B9A\u4E3B\u4F53\u5C06\u65E0\u6CD5\u7EE7\u7EED\u547D\u4E2D\u8BE5\u7B56\u7565\u3002`,
        onOk: async () => {
          await xe(u.id),
            f.success('\u7B56\u7565\u5DF2\u5220\u9664'),
            c((t) => t + 1);
        },
      }),
    le = (u) =>
      h.confirm({
        title: '\u5220\u9664\u7B56\u7565\u7ED1\u5B9A',
        content: `\u786E\u8BA4\u5220\u9664\u4E3B\u4F53 ${u.subjectType}:${u.subjectId} \u7684\u7B56\u7565\u7ED1\u5B9A\uFF1F`,
        onOk: async () => {
          await be(u.id),
            f.success('\u7ED1\u5B9A\u5DF2\u5220\u9664'),
            c((t) => t + 1);
        },
      }),
    ae = [
      {
        title: '\u7B56\u7565\u7F16\u7801',
        dataIndex: 'policyCode',
        width: 200,
      },
      {
        title: '\u7B56\u7565\u540D\u79F0',
        dataIndex: 'policyName',
        width: 180,
      },
      {
        title: '\u7C7B\u578B',
        dataIndex: 'policyType',
        width: 110,
        render: (u) => e(I, { color: 'arcoblue', children: u || 'ABAC' }),
      },
      {
        title: '\u6548\u679C',
        dataIndex: 'effect',
        width: 100,
        render: (u) =>
          e(I, {
            color: u === 'DENY' ? 'red' : 'green',
            children: u || 'ALLOW',
          }),
      },
      {
        title: '\u6761\u4EF6\u8868\u8FBE\u5F0F',
        dataIndex: 'conditionExpr',
        ellipsis: !0,
      },
      { title: '\u4F18\u5148\u7EA7', dataIndex: 'priority', width: 100 },
      {
        title: '\u66F4\u65B0\u65F6\u95F4',
        dataIndex: 'updatedAt',
        width: 170,
        render: q,
      },
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 160,
        fixed: 'right',
        render: (u, t) =>
          d(A, {
            className: p.operations,
            children: [
              e(r, {
                type: 'text',
                size: 'small',
                icon: e(z, {}),
                onClick: () => T(t),
                children: '\u7F16\u8F91',
              }),
              e(r, {
                type: 'text',
                status: 'danger',
                size: 'small',
                icon: e(V, {}),
                onClick: () => ie(t),
                children: '\u5220\u9664',
              }),
            ],
          }),
      },
    ],
    ne = [
      {
        title: '\u4E3B\u4F53\u7C7B\u578B',
        dataIndex: 'subjectType',
        width: 120,
      },
      { title: '\u4E3B\u4F53 ID', dataIndex: 'subjectId', width: 100 },
      {
        title: '\u7B56\u7565\u7F16\u7801',
        dataIndex: 'policyCode',
        width: 200,
      },
      {
        title: '\u6548\u679C',
        dataIndex: 'effect',
        width: 100,
        render: (u) =>
          e(I, {
            color: u === 'DENY' ? 'red' : 'green',
            children: u || 'ALLOW',
          }),
      },
      {
        title: '\u8FC7\u671F\u65F6\u95F4',
        dataIndex: 'expireAt',
        width: 170,
        render: q,
      },
      { title: '\u4F18\u5148\u7EA7', dataIndex: 'priority', width: 100 },
      { title: '\u63CF\u8FF0', dataIndex: 'description', ellipsis: !0 },
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 160,
        fixed: 'right',
        render: (u, t) =>
          d(A, {
            className: p.operations,
            children: [
              e(r, {
                type: 'text',
                size: 'small',
                icon: e(z, {}),
                onClick: () => j(t),
                children: '\u7F16\u8F91',
              }),
              e(r, {
                type: 'text',
                status: 'danger',
                size: 'small',
                icon: e(V, {}),
                onClick: () => le(t),
                children: '\u5220\u9664',
              }),
            ],
          }),
      },
    ];
  return d(pe, {
    children: [
      e(Ce, { heading: 6, children: 'ABAC \u7B56\u7565\u7BA1\u7406' }),
      d('div', {
        className: p['search-row'],
        children: [
          e(o.Search, {
            allowClear: !0,
            placeholder:
              '\u641C\u7D22\u7B56\u7565\u7F16\u7801\u3001\u540D\u79F0\u6216\u4E3B\u4F53',
            onSearch: (u) => {
              S(1), v(1), M(u);
            },
          }),
          e(r, {
            icon: e(Be, {}),
            onClick: () => c((u) => u + 1),
            children: '\u5237\u65B0',
          }),
        ],
      }),
      e('div', {
        className: p['button-group'],
        children: d(A, {
          children: [
            e(r, {
              type: 'primary',
              icon: e(O, {}),
              onClick: () => T(),
              children: '\u65B0\u589E\u7B56\u7565',
            }),
            e(r, {
              icon: e(O, {}),
              onClick: () => j(),
              children: '\u65B0\u589E\u7ED1\u5B9A',
            }),
          ],
        }),
      }),
      e(N, {
        rowKey: 'id',
        loading: W,
        columns: ae,
        data: K,
        scroll: { x: 1250 },
        pagination: { current: E, pageSize: 10, total: G, showTotal: !0 },
        onChange: (u) => S(u.current || 1),
      }),
      e('div', {
        className: p['section-title'],
        children: '\u7B56\u7565\u7ED1\u5B9A',
      }),
      e(N, {
        rowKey: 'id',
        loading: R,
        columns: ne,
        data: $,
        scroll: { x: 1100 },
        pagination: { current: g, pageSize: 10, total: U, showTotal: !0 },
        onChange: (u) => v(u.current || 1),
      }),
      e(h, {
        title: B
          ? '\u7F16\u8F91 ABAC \u7B56\u7565'
          : '\u65B0\u589E ABAC \u7B56\u7565',
        visible: J,
        onOk: ue,
        onCancel: () => m(!1),
        unmountOnExit: !0,
        children: d(i, {
          form: s,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            e(i.Item, {
              label: '\u7B56\u7565\u7F16\u7801',
              field: 'policyCode',
              rules: [{ required: !0 }],
              children: e(o, {}),
            }),
            e(i.Item, {
              label: '\u7B56\u7565\u540D\u79F0',
              field: 'policyName',
              rules: [{ required: !0 }],
              children: e(o, {}),
            }),
            e(i.Item, {
              label: '\u7B56\u7565\u7C7B\u578B',
              field: 'policyType',
              children: e(y, {
                options: [
                  { label: 'ABAC', value: 'ABAC' },
                  { label: '\u65F6\u95F4\u7B56\u7565', value: 'TIME' },
                  { label: '\u73AF\u5883\u7B56\u7565', value: 'ENV' },
                ],
              }),
            }),
            e(i.Item, {
              label: '\u6548\u679C',
              field: 'effect',
              children: e(y, {
                options: [
                  { label: '\u5141\u8BB8', value: 'ALLOW' },
                  { label: '\u62D2\u7EDD', value: 'DENY' },
                ],
              }),
            }),
            e(i.Item, {
              label: '\u6761\u4EF6\u8868\u8FBE\u5F0F',
              field: 'conditionExpr',
              rules: [{ required: !0 }],
              children: e(o.TextArea, {
                rows: 5,
                placeholder:
                  '\u4F8B\u5982\uFF1Auser.deptId == resource.deptId && env.ip in trustedIps',
              }),
            }),
            e(i.Item, {
              label: '\u4F18\u5148\u7EA7',
              field: 'priority',
              children: e(o, {}),
            }),
            e(i.Item, {
              label: '\u63CF\u8FF0',
              field: 'description',
              children: e(o.TextArea, { rows: 3 }),
            }),
          ],
        }),
      }),
      e(h, {
        title: F
          ? '\u7F16\u8F91\u7B56\u7565\u7ED1\u5B9A'
          : '\u65B0\u589E\u7B56\u7565\u7ED1\u5B9A',
        visible: X,
        onOk: te,
        onCancel: () => x(!1),
        unmountOnExit: !0,
        children: d(i, {
          form: l,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            e(i.Item, {
              label: '\u4E3B\u4F53\u7C7B\u578B',
              field: 'subjectType',
              rules: [{ required: !0 }],
              children: e(y, {
                options: [
                  { label: '\u7528\u6237', value: 'USER' },
                  { label: '\u89D2\u8272', value: 'ROLE' },
                  { label: '\u90E8\u95E8', value: 'DEPT' },
                ],
              }),
            }),
            e(i.Item, {
              label: '\u4E3B\u4F53 ID',
              field: 'subjectId',
              rules: [{ required: !0 }],
              children: e(o, {}),
            }),
            e(i.Item, {
              label: '\u7B56\u7565\u7F16\u7801',
              field: 'policyCode',
              rules: [{ required: !0 }],
              children: e(o, {}),
            }),
            e(i.Item, {
              label: '\u6548\u679C',
              field: 'effect',
              children: e(y, {
                options: [
                  { label: '\u5141\u8BB8', value: 'ALLOW' },
                  { label: '\u62D2\u7EDD', value: 'DENY' },
                ],
              }),
            }),
            e(i.Item, {
              label: '\u8FC7\u671F\u65F6\u95F4\u6233',
              field: 'expireAt',
              children: e(o, {}),
            }),
            e(i.Item, {
              label: '\u4F18\u5148\u7EA7',
              field: 'priority',
              children: e(o, {}),
            }),
            e(i.Item, {
              label: '\u63CF\u8FF0',
              field: 'description',
              children: e(o.TextArea, { rows: 3 }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { ke as default };
