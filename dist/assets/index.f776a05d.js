var J = Object.defineProperty,
  X = Object.defineProperties;
var Z = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var ee = Object.prototype.hasOwnProperty,
  ue = Object.prototype.propertyIsEnumerable;
var A = (s, u, o) =>
    u in s
      ? J(s, u, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (s[u] = o),
  b = (s, u) => {
    for (var o in u || (u = {})) ee.call(u, o) && A(s, o, u[o]);
    if (w) for (var o of w(u)) ue.call(u, o) && A(s, o, u[o]);
    return s;
  },
  F = (s, u) => X(s, Z(u));
import {
  ag as a,
  r as i,
  a as c,
  av as te,
  j as e,
  i as T,
  ah as l,
  B as E,
  $ as ae,
  aT as le,
  aM as se,
  aS as y,
  F as C,
  K as D,
  T as ie,
  M as O,
  S as oe,
  aQ as ne,
  aR as ce,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  f as re,
  a as de,
  b as pe,
  s as S,
  u as be,
  c as Fe,
  d as Ee,
  e as fe,
  g as he,
  h as me,
  i as Be,
  j as Ce,
  k as De,
} from './index.module.54d3bd0f.js';
import './access-control.2c5ad8d6.js';
import './index.04d9875a.js';
const { Title: Se } = ie,
  { TabPane: g } = T,
  ge = [
    { label: '\u7528\u6237', value: 'USER' },
    { label: '\u89D2\u8272', value: 'ROLE' },
    { label: '\u90E8\u95E8', value: 'DEPT' },
  ];
function qe() {
  const [s] = a.useForm(),
    [u, o] = i.exports.useState('object'),
    [j, x] = i.exports.useState(''),
    [L, I] = i.exports.useState(!1),
    [f, h] = i.exports.useState(1),
    [m, k] = i.exports.useState(10),
    [q, P] = i.exports.useState(0),
    [N, z] = i.exports.useState([]),
    [R, M] = i.exports.useState([]),
    [K, V] = i.exports.useState([]),
    [_, d] = i.exports.useState(!1),
    [r, v] = i.exports.useState(null),
    [U, B] = i.exports.useState(0);
  i.exports.useEffect(() => {
    let t = !1;
    I(!0);
    const n = { page: f, pageSize: m, keyword: j || void 0 };
    return (
      (u === 'object' ? re(n) : u === 'scope' ? de(n) : pe(n))
        .then((p) => {
          t ||
            (u === 'object' && z(p.list || []),
            u === 'scope' && M(p.list || []),
            u === 'binding' && V(p.list || []),
            P(p.total || 0));
        })
        .finally(() => !t && I(!1)),
      () => {
        t = !0;
      }
    );
  }, [u, f, m, j, U]);
  const W = () => {
      v(null),
        s.resetFields(),
        s.setFieldsValue({
          activeStatus: 1,
          effect: 'ALLOW',
          priority: 100,
          scopeType: 'SELF',
          subjectType: 'ROLE',
        }),
        d(!0);
    },
    H = (t) => {
      v(t), s.setFieldsValue(t), d(!0);
    },
    Q = (t) =>
      y.confirm({
        title: '\u786E\u8BA4\u5220\u9664',
        content:
          '\u5220\u9664\u540E\u4F1A\u5F71\u54CD\u76F8\u5173\u6388\u6743\u5224\u65AD\uFF0C\u786E\u8BA4\u7EE7\u7EED\uFF1F',
        onOk: async () => {
          u === 'object' && (await Be(t.id)),
            u === 'scope' && (await Ce(t.id)),
            u === 'binding' && (await De(t.id)),
            O.success('\u5220\u9664\u6210\u529F'),
            B((n) => n + 1);
        },
      }),
    Y = async () => {
      const t = await s.validate();
      u === 'object' && (r ? await be(F(b({}, t), { id: r.id })) : await Fe(t)),
        u === 'scope' &&
          (r ? await Ee(F(b({}, t), { id: r.id })) : await fe(t)),
        u === 'binding' &&
          (r ? await he(F(b({}, t), { id: r.id })) : await me(t)),
        O.success(r ? '\u66F4\u65B0\u6210\u529F' : '\u65B0\u589E\u6210\u529F'),
        d(!1),
        B((n) => n + 1);
    },
    $ = [
      u,
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 160,
        fixed: 'right',
        render: (t, n) =>
          c(oe, {
            className: S.operations,
            children: [
              e(E, {
                type: 'text',
                size: 'small',
                icon: e(ne, {}),
                onClick: () => H(n),
                children: '\u7F16\u8F91',
              }),
              e(E, {
                type: 'text',
                status: 'danger',
                size: 'small',
                icon: e(ce, {}),
                onClick: () => Q(n),
                children: '\u5220\u9664',
              }),
            ],
          }),
      },
    ],
    G = u === 'object' ? N : u === 'scope' ? R : K;
  return c(te, {
    children: [
      e(Se, { heading: 6, children: '\u6570\u636E\u6743\u9650\u7BA1\u7406' }),
      c(T, {
        activeTab: u,
        onChange: (t) => {
          o(t), h(1), x('');
        },
        children: [
          e(g, { title: '\u6570\u636E\u5BF9\u8C61' }, 'object'),
          e(g, { title: '\u6570\u636E\u8303\u56F4' }, 'scope'),
          e(g, { title: '\u6388\u6743\u7ED1\u5B9A' }, 'binding'),
        ],
      }),
      c('div', {
        className: S['search-row'],
        children: [
          e(l.Search, {
            allowClear: !0,
            placeholder:
              '\u641C\u7D22\u7F16\u7801\u3001\u540D\u79F0\u6216\u4E3B\u4F53',
            onSearch: (t) => {
              h(1), x(t);
            },
          }),
          e(E, {
            icon: e(ae, {}),
            onClick: () => B((t) => t + 1),
            children: '\u5237\u65B0',
          }),
        ],
      }),
      e('div', {
        className: S['button-group'],
        children: c(E, {
          type: 'primary',
          icon: e(le, {}),
          onClick: W,
          children: [
            '\u65B0\u589E',
            u === 'object'
              ? '\u6570\u636E\u5BF9\u8C61'
              : u === 'scope'
              ? '\u6570\u636E\u8303\u56F4'
              : '\u6388\u6743\u7ED1\u5B9A',
          ],
        }),
      }),
      e(se, {
        rowKey: 'id',
        loading: L,
        columns: $,
        data: G,
        scroll: { x: 1300 },
        pagination: {
          current: f,
          pageSize: m,
          total: q,
          showTotal: !0,
          sizeCanChange: !0,
        },
        onChange: (t) => {
          h(t.current || 1), k(t.pageSize || 10);
        },
      }),
      e(y, {
        title: r ? '\u7F16\u8F91\u914D\u7F6E' : '\u65B0\u589E\u914D\u7F6E',
        visible: _,
        onOk: Y,
        onCancel: () => d(!1),
        unmountOnExit: !0,
        children: c(a, {
          form: s,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            u === 'object' &&
              c(C, {
                children: [
                  e(a.Item, {
                    label: '\u5BF9\u8C61\u7F16\u7801',
                    field: 'objectCode',
                    rules: [{ required: !0 }],
                    children: e(l, {}),
                  }),
                  e(a.Item, {
                    label: '\u5BF9\u8C61\u540D\u79F0',
                    field: 'objectName',
                    rules: [{ required: !0 }],
                    children: e(l, {}),
                  }),
                  e(a.Item, {
                    label: '\u8868\u540D',
                    field: 'tableName',
                    children: e(l, {}),
                  }),
                  e(a.Item, {
                    label: '\u5F52\u5C5E\u5B57\u6BB5',
                    field: 'ownerField',
                    children: e(l, {}),
                  }),
                  e(a.Item, {
                    label: '\u79DF\u6237\u5B57\u6BB5',
                    field: 'tenantField',
                    children: e(l, {}),
                  }),
                  e(a.Item, {
                    label: '\u90E8\u95E8\u5B57\u6BB5',
                    field: 'deptField',
                    children: e(l, {}),
                  }),
                ],
              }),
            u === 'scope' &&
              c(C, {
                children: [
                  e(a.Item, {
                    label: '\u8303\u56F4\u7F16\u7801',
                    field: 'scopeCode',
                    rules: [{ required: !0 }],
                    children: e(l, {}),
                  }),
                  e(a.Item, {
                    label: '\u8303\u56F4\u540D\u79F0',
                    field: 'scopeName',
                    rules: [{ required: !0 }],
                    children: e(l, {}),
                  }),
                  e(a.Item, {
                    label: '\u8303\u56F4\u7C7B\u578B',
                    field: 'scopeType',
                    children: e(D, {
                      options: [
                        { label: '\u672C\u4EBA', value: 'SELF' },
                        { label: '\u672C\u90E8\u95E8', value: 'DEPT' },
                        {
                          label: '\u672C\u90E8\u95E8\u53CA\u4E0B\u7EA7',
                          value: 'DEPT_AND_CHILDREN',
                        },
                        { label: '\u5168\u90E8', value: 'ALL' },
                        { label: '\u81EA\u5B9A\u4E49', value: 'CUSTOM' },
                      ],
                    }),
                  }),
                  e(a.Item, {
                    label: '\u6761\u4EF6\u8868\u8FBE\u5F0F',
                    field: 'conditionExpr',
                    children: e(l.TextArea, { rows: 4 }),
                  }),
                ],
              }),
            u === 'binding' &&
              c(C, {
                children: [
                  e(a.Item, {
                    label: '\u4E3B\u4F53\u7C7B\u578B',
                    field: 'subjectType',
                    rules: [{ required: !0 }],
                    children: e(D, { options: ge }),
                  }),
                  e(a.Item, {
                    label: '\u4E3B\u4F53 ID',
                    field: 'subjectId',
                    rules: [{ required: !0 }],
                    children: e(l, {}),
                  }),
                  e(a.Item, {
                    label: '\u6570\u636E\u5BF9\u8C61\u7F16\u7801',
                    field: 'objectCode',
                    rules: [{ required: !0 }],
                    children: e(l, {}),
                  }),
                  e(a.Item, {
                    label: '\u8303\u56F4\u7F16\u7801',
                    field: 'scopeCode',
                    rules: [{ required: !0 }],
                    children: e(l, {}),
                  }),
                  e(a.Item, {
                    label: '\u6548\u679C',
                    field: 'effect',
                    children: e(D, {
                      options: [
                        { label: '\u5141\u8BB8', value: 'ALLOW' },
                        { label: '\u62D2\u7EDD', value: 'DENY' },
                      ],
                    }),
                  }),
                  e(a.Item, {
                    label: '\u8FC7\u671F\u65F6\u95F4\u6233',
                    field: 'expireAt',
                    children: e(l, {}),
                  }),
                ],
              }),
            e(a.Item, {
              label: '\u4F18\u5148\u7EA7',
              field: 'priority',
              children: e(l, {}),
            }),
            e(a.Item, {
              label: '\u63CF\u8FF0',
              field: 'description',
              children: e(l.TextArea, { rows: 3 }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { qe as default };
