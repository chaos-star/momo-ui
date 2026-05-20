var ee = Object.defineProperty,
  ue = Object.defineProperties;
var te = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var le = Object.prototype.hasOwnProperty,
  ie = Object.prototype.propertyIsEnumerable;
var T = (a, u, s) =>
    u in a
      ? ee(a, u, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (a[u] = s),
  F = (a, u) => {
    for (var s in u || (u = {})) le.call(u, s) && T(a, s, u[s]);
    if (S) for (var s of S(u)) ie.call(u, s) && T(a, s, u[s]);
    return a;
  },
  p = (a, u) => ue(a, te(u));
import {
  ag as l,
  r as d,
  a as r,
  av as ae,
  j as e,
  i as P,
  ah as i,
  B as h,
  $ as de,
  aT as se,
  aM as ne,
  aS as O,
  F as C,
  K as o,
  T as re,
  M as j,
  b as y,
  S as oe,
  aQ as ce,
  aR as Be,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  l as fe,
  m as Fe,
  n as pe,
  s as A,
  o as he,
  p as Ee,
  q as be,
  r as Ie,
  t as me,
  v as xe,
  w as Ce,
  x as ye,
  y as Ae,
} from './index.module.54d3bd0f.js';
import { f as N } from './accessControl.941fcf7e.js';
import './access-control.2c5ad8d6.js';
import './index.04d9875a.js';
const { Title: we } = re,
  { TabPane: w } = P;
function qe() {
  const [a] = l.useForm(),
    [u, s] = d.exports.useState('field'),
    [D, v] = d.exports.useState(''),
    [k, g] = d.exports.useState(!1),
    [E, b] = d.exports.useState(1),
    [I, q] = d.exports.useState(10),
    [M, W] = d.exports.useState(0),
    [R, z] = d.exports.useState([]),
    [Y, K] = d.exports.useState([]),
    [V, U] = d.exports.useState([]),
    [_, B] = d.exports.useState(!1),
    [c, L] = d.exports.useState(null),
    [H, m] = d.exports.useState(0);
  d.exports.useEffect(() => {
    let t = !1;
    g(!0);
    const n = { page: E, pageSize: I, keyword: D || void 0 };
    return (
      (u === 'field' ? fe(n) : u === 'policy' ? Fe(n) : pe(n))
        .then((f) => {
          t ||
            (u === 'field' && z(f.list || []),
            u === 'policy' && K(f.list || []),
            u === 'binding' && U(f.list || []),
            W(f.total || 0));
        })
        .finally(() => !t && g(!1)),
      () => {
        t = !0;
      }
    );
  }, [u, E, I, D, H]);
  const Q = () => {
      L(null),
        a.resetFields(),
        a.setFieldsValue({
          activeStatus: 1,
          effect: 'MASK',
          displayEffect: 'MASK',
          searchEffect: 'ALLOW',
          sortEffect: 'ALLOW',
          editEffect: 'ALLOW',
          exportEffect: 'ALLOW',
          maskType: 'MOBILE',
          subjectType: 'ROLE',
          priority: 100,
        }),
        B(!0);
    },
    $ = (t) => {
      L(t), a.setFieldsValue(t), B(!0);
    },
    G = (t) =>
      O.confirm({
        title: '\u786E\u8BA4\u5220\u9664',
        content:
          '\u5220\u9664\u5B57\u6BB5\u6743\u9650\u914D\u7F6E\u540E\u4F1A\u5F71\u54CD\u5B57\u6BB5\u5C55\u793A\u3001\u641C\u7D22\u3001\u5BFC\u51FA\u548C\u7F16\u8F91\u63A7\u5236\uFF0C\u786E\u8BA4\u7EE7\u7EED\uFF1F',
        onOk: async () => {
          u === 'field' && (await Ce(t.id)),
            u === 'policy' && (await ye(t.id)),
            u === 'binding' && (await Ae(t.id)),
            j.success('\u5220\u9664\u6210\u529F'),
            m((n) => n + 1);
        },
      }),
    J = async () => {
      const t = await a.validate();
      u === 'field' && (c ? await he(p(F({}, t), { id: c.id })) : await Ee(t)),
        u === 'policy' &&
          (c ? await be(p(F({}, t), { id: c.id })) : await Ie(t)),
        u === 'binding' &&
          (c ? await me(p(F({}, t), { id: c.id })) : await xe(t)),
        j.success(c ? '\u66F4\u65B0\u6210\u529F' : '\u65B0\u589E\u6210\u529F'),
        B(!1),
        m((n) => n + 1);
    },
    x = {
      title: '\u64CD\u4F5C',
      dataIndex: 'operations',
      width: 160,
      fixed: 'right',
      render: (t, n) =>
        r(oe, {
          className: A.operations,
          children: [
            e(h, {
              type: 'text',
              size: 'small',
              icon: e(ce, {}),
              onClick: () => $(n),
              children: '\u7F16\u8F91',
            }),
            e(h, {
              type: 'text',
              status: 'danger',
              size: 'small',
              icon: e(Be, {}),
              onClick: () => G(n),
              children: '\u5220\u9664',
            }),
          ],
        }),
    },
    X = (() =>
      u === 'field'
        ? [
            {
              title: '\u5B57\u6BB5\u7F16\u7801',
              dataIndex: 'fieldCode',
              width: 180,
            },
            {
              title: '\u5B57\u6BB5\u540D\u79F0',
              dataIndex: 'fieldName',
              width: 160,
            },
            {
              title: '\u5B57\u6BB5\u8DEF\u5F84',
              dataIndex: 'fieldPath',
              width: 220,
            },
            {
              title: '\u5B57\u6BB5\u7C7B\u578B',
              dataIndex: 'fieldType',
              width: 120,
            },
            {
              title: '\u654F\u611F',
              dataIndex: 'sensitive',
              width: 90,
              render: (t) =>
                t === 1
                  ? e(y, { color: 'red', children: '\u662F' })
                  : e(y, { children: '\u5426' }),
            },
            { title: '\u63CF\u8FF0', dataIndex: 'description', ellipsis: !0 },
            {
              title: '\u66F4\u65B0\u65F6\u95F4',
              dataIndex: 'updatedAt',
              width: 170,
              render: N,
            },
            x,
          ]
        : u === 'policy'
        ? [
            {
              title: '\u7B56\u7565\u7F16\u7801',
              dataIndex: 'policyCode',
              width: 190,
            },
            {
              title: '\u7B56\u7565\u540D\u79F0',
              dataIndex: 'policyName',
              width: 160,
            },
            { title: '\u5C55\u793A', dataIndex: 'displayEffect', width: 100 },
            { title: '\u641C\u7D22', dataIndex: 'searchEffect', width: 100 },
            { title: '\u6392\u5E8F', dataIndex: 'sortEffect', width: 100 },
            { title: '\u7F16\u8F91', dataIndex: 'editEffect', width: 100 },
            { title: '\u5BFC\u51FA', dataIndex: 'exportEffect', width: 100 },
            { title: '\u8131\u654F', dataIndex: 'maskType', width: 120 },
            { title: '\u4F18\u5148\u7EA7', dataIndex: 'priority', width: 100 },
            x,
          ]
        : [
            {
              title: '\u4E3B\u4F53\u7C7B\u578B',
              dataIndex: 'subjectType',
              width: 120,
            },
            { title: '\u4E3B\u4F53 ID', dataIndex: 'subjectId', width: 100 },
            { title: 'API \u7F16\u7801', dataIndex: 'apiCode', width: 200 },
            {
              title: '\u5B57\u6BB5\u7F16\u7801',
              dataIndex: 'fieldCode',
              width: 180,
            },
            {
              title: '\u7B56\u7565\u7F16\u7801',
              dataIndex: 'policyCode',
              width: 190,
            },
            {
              title: '\u6548\u679C',
              dataIndex: 'effect',
              width: 100,
              render: (t) =>
                e(y, {
                  color: t === 'DENY' ? 'red' : 'green',
                  children: t || 'ALLOW',
                }),
            },
            {
              title: '\u8FC7\u671F\u65F6\u95F4',
              dataIndex: 'expireAt',
              width: 170,
              render: N,
            },
            x,
          ])(),
    Z = u === 'field' ? R : u === 'policy' ? Y : V;
  return r(ae, {
    children: [
      e(we, { heading: 6, children: '\u5B57\u6BB5\u6743\u9650\u7BA1\u7406' }),
      r(P, {
        activeTab: u,
        onChange: (t) => {
          s(t), b(1), v('');
        },
        children: [
          e(w, { title: '\u6570\u636E\u5B57\u6BB5' }, 'field'),
          e(w, { title: '\u5B57\u6BB5\u7B56\u7565' }, 'policy'),
          e(w, { title: '\u7B56\u7565\u7ED1\u5B9A' }, 'binding'),
        ],
      }),
      r('div', {
        className: A['search-row'],
        children: [
          e(i.Search, {
            allowClear: !0,
            placeholder:
              '\u641C\u7D22\u5B57\u6BB5\u3001\u7B56\u7565\u6216 API \u7F16\u7801',
            onSearch: (t) => {
              b(1), v(t);
            },
          }),
          e(h, {
            icon: e(de, {}),
            onClick: () => m((t) => t + 1),
            children: '\u5237\u65B0',
          }),
        ],
      }),
      e('div', {
        className: A['button-group'],
        children: r(h, {
          type: 'primary',
          icon: e(se, {}),
          onClick: Q,
          children: [
            '\u65B0\u589E',
            u === 'field'
              ? '\u6570\u636E\u5B57\u6BB5'
              : u === 'policy'
              ? '\u5B57\u6BB5\u7B56\u7565'
              : '\u7B56\u7565\u7ED1\u5B9A',
          ],
        }),
      }),
      e(ne, {
        rowKey: 'id',
        loading: k,
        columns: X,
        data: Z,
        scroll: { x: 1450 },
        pagination: {
          current: E,
          pageSize: I,
          total: M,
          showTotal: !0,
          sizeCanChange: !0,
        },
        onChange: (t) => {
          b(t.current || 1), q(t.pageSize || 10);
        },
      }),
      e(O, {
        title: c ? '\u7F16\u8F91\u914D\u7F6E' : '\u65B0\u589E\u914D\u7F6E',
        visible: _,
        onOk: J,
        onCancel: () => B(!1),
        unmountOnExit: !0,
        children: r(l, {
          form: a,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            u === 'field' &&
              r(C, {
                children: [
                  e(l.Item, {
                    label: '\u6570\u636E\u5BF9\u8C61 ID',
                    field: 'dataObjectId',
                    children: e(i, {}),
                  }),
                  e(l.Item, {
                    label: '\u5B57\u6BB5\u7F16\u7801',
                    field: 'fieldCode',
                    rules: [{ required: !0 }],
                    children: e(i, {}),
                  }),
                  e(l.Item, {
                    label: '\u5B57\u6BB5\u540D\u79F0',
                    field: 'fieldName',
                    rules: [{ required: !0 }],
                    children: e(i, {}),
                  }),
                  e(l.Item, {
                    label: '\u5B57\u6BB5\u8DEF\u5F84',
                    field: 'fieldPath',
                    children: e(i, {}),
                  }),
                  e(l.Item, {
                    label: '\u5B57\u6BB5\u7C7B\u578B',
                    field: 'fieldType',
                    children: e(i, {}),
                  }),
                  e(l.Item, {
                    label: '\u662F\u5426\u654F\u611F',
                    field: 'sensitive',
                    children: e(o, {
                      options: [
                        { label: '\u5426', value: 2 },
                        { label: '\u662F', value: 1 },
                      ],
                    }),
                  }),
                ],
              }),
            u === 'policy' &&
              r(C, {
                children: [
                  e(l.Item, {
                    label: '\u7B56\u7565\u7F16\u7801',
                    field: 'policyCode',
                    rules: [{ required: !0 }],
                    children: e(i, {}),
                  }),
                  e(l.Item, {
                    label: '\u7B56\u7565\u540D\u79F0',
                    field: 'policyName',
                    rules: [{ required: !0 }],
                    children: e(i, {}),
                  }),
                  e(l.Item, {
                    label: '\u5C55\u793A\u7B56\u7565',
                    field: 'displayEffect',
                    children: e(o, {
                      options: [
                        { label: '\u5141\u8BB8', value: 'ALLOW' },
                        { label: '\u9690\u85CF', value: 'HIDE' },
                        { label: '\u8131\u654F', value: 'MASK' },
                      ],
                    }),
                  }),
                  e(l.Item, {
                    label: '\u641C\u7D22\u7B56\u7565',
                    field: 'searchEffect',
                    children: e(o, {
                      options: [
                        { label: '\u5141\u8BB8', value: 'ALLOW' },
                        { label: '\u7981\u6B62', value: 'DENY' },
                      ],
                    }),
                  }),
                  e(l.Item, {
                    label: '\u6392\u5E8F\u7B56\u7565',
                    field: 'sortEffect',
                    children: e(o, {
                      options: [
                        { label: '\u5141\u8BB8', value: 'ALLOW' },
                        { label: '\u7981\u6B62', value: 'DENY' },
                      ],
                    }),
                  }),
                  e(l.Item, {
                    label: '\u7F16\u8F91\u7B56\u7565',
                    field: 'editEffect',
                    children: e(o, {
                      options: [
                        { label: '\u5141\u8BB8', value: 'ALLOW' },
                        { label: '\u53EA\u8BFB', value: 'READONLY' },
                        { label: '\u7981\u6B62', value: 'DENY' },
                      ],
                    }),
                  }),
                  e(l.Item, {
                    label: '\u5BFC\u51FA\u7B56\u7565',
                    field: 'exportEffect',
                    children: e(o, {
                      options: [
                        { label: '\u5141\u8BB8', value: 'ALLOW' },
                        { label: '\u7981\u6B62', value: 'DENY' },
                      ],
                    }),
                  }),
                  e(l.Item, {
                    label: '\u8131\u654F\u7C7B\u578B',
                    field: 'maskType',
                    children: e(o, {
                      options: [
                        { label: '\u624B\u673A\u53F7', value: 'MOBILE' },
                        { label: '\u90AE\u7BB1', value: 'EMAIL' },
                        { label: '\u8EAB\u4EFD\u8BC1', value: 'ID_CARD' },
                        { label: '\u81EA\u5B9A\u4E49', value: 'CUSTOM' },
                      ],
                    }),
                  }),
                  e(l.Item, {
                    label: '\u6761\u4EF6\u8868\u8FBE\u5F0F',
                    field: 'conditionExpr',
                    children: e(i.TextArea, { rows: 3 }),
                  }),
                ],
              }),
            u === 'binding' &&
              r(C, {
                children: [
                  e(l.Item, {
                    label: '\u4E3B\u4F53\u7C7B\u578B',
                    field: 'subjectType',
                    rules: [{ required: !0 }],
                    children: e(o, {
                      options: [
                        { label: '\u7528\u6237', value: 'USER' },
                        { label: '\u89D2\u8272', value: 'ROLE' },
                        { label: '\u90E8\u95E8', value: 'DEPT' },
                      ],
                    }),
                  }),
                  e(l.Item, {
                    label: '\u4E3B\u4F53 ID',
                    field: 'subjectId',
                    rules: [{ required: !0 }],
                    children: e(i, {}),
                  }),
                  e(l.Item, {
                    label: 'API \u7F16\u7801',
                    field: 'apiCode',
                    rules: [{ required: !0 }],
                    children: e(i, {}),
                  }),
                  e(l.Item, {
                    label: '\u5B57\u6BB5\u7F16\u7801',
                    field: 'fieldCode',
                    rules: [{ required: !0 }],
                    children: e(i, {}),
                  }),
                  e(l.Item, {
                    label: '\u7B56\u7565\u7F16\u7801',
                    field: 'policyCode',
                    rules: [{ required: !0 }],
                    children: e(i, {}),
                  }),
                  e(l.Item, {
                    label: '\u6548\u679C',
                    field: 'effect',
                    children: e(o, {
                      options: [
                        { label: '\u5141\u8BB8', value: 'ALLOW' },
                        { label: '\u62D2\u7EDD', value: 'DENY' },
                      ],
                    }),
                  }),
                  e(l.Item, {
                    label: '\u8FC7\u671F\u65F6\u95F4\u6233',
                    field: 'expireAt',
                    children: e(i, {}),
                  }),
                ],
              }),
            e(l.Item, {
              label: '\u4F18\u5148\u7EA7',
              field: 'priority',
              children: e(i, {}),
            }),
            e(l.Item, {
              label: '\u63CF\u8FF0',
              field: 'description',
              children: e(i.TextArea, { rows: 3 }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { qe as default };
