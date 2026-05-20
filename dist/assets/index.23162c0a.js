import {
  ag as s,
  r,
  a as l,
  av as d,
  j as e,
  B as h,
  $ as k,
  ah as o,
  aU as N,
  aM as T,
  aj as j,
  S as P,
  b as y,
  T as M,
  M as q,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css              */ import { g as L } from './index.2cec1040.js';
import { g as $, b as O } from './access-control.9e664147.js';
import { f as z } from './accessControl.941fcf7e.js';
function G(c) {
  return $('/api/system/auth-diagnosis/sources', c);
}
function J(c) {
  return O('/api/system/auth-diagnosis/simulate', c);
}
const K = '_toolbar_1avkc_1',
  R = '_grid_1avkc_6',
  U = '_metric_1avkc_15',
  V = '_result_1avkc_39',
  H = '_code_1avkc_46';
var t = {
  toolbar: K,
  grid: R,
  'card-block': '_card-block_1avkc_11',
  'metric-row': '_metric-row_1avkc_15',
  metric: U,
  'metric-label': '_metric-label_1avkc_29',
  'metric-value': '_metric-value_1avkc_33',
  result: V,
  code: H,
};
const { Title: Q, Text: m } = M;
function se() {
  const [c] = s.useForm(),
    [p] = s.useForm(),
    [a, I] = r.exports.useState(null),
    [b, v] = r.exports.useState([]),
    [n, C] = r.exports.useState(null),
    [D, B] = r.exports.useState(!1),
    [F, f] = r.exports.useState(!1),
    [_, g] = r.exports.useState(!1),
    E = r.exports.useMemo(() => {
      var u, i;
      return [
        {
          label: '\u83DC\u5355\u6570\u91CF',
          value:
            ((u = a == null ? void 0 : a.menus) == null ? void 0 : u.length) ||
            0,
        },
        {
          label: '\u6743\u9650\u7801\u6570\u91CF',
          value:
            ((i = a == null ? void 0 : a.permissions) == null
              ? void 0
              : i.length) || 0,
        },
        {
          label: '\u5B57\u6BB5\u7B56\u7565 API',
          value: Object.keys((a == null ? void 0 : a.fieldPolicies) || {})
            .length,
        },
      ];
    }, [a]),
    A = async () => {
      B(!0);
      try {
        const u = await L();
        I(u), q.success('\u6743\u9650\u4E0A\u4E0B\u6587\u5DF2\u5237\u65B0');
      } finally {
        B(!1);
      }
    },
    x = async () => {
      const u = await c.validate();
      f(!0);
      try {
        const i = await G(u);
        v(i || []);
      } finally {
        f(!1);
      }
    },
    w = async () => {
      const u = await p.validate();
      g(!0);
      try {
        const i = await J(u);
        C(i);
      } finally {
        g(!1);
      }
    },
    S = [
      { title: '\u6743\u9650\u7801', dataIndex: 'permissionCode', width: 220 },
      {
        title: '\u6743\u9650\u540D\u79F0',
        dataIndex: 'permissionName',
        width: 160,
      },
      {
        title: '\u6765\u6E90\u7C7B\u578B',
        dataIndex: 'sourceType',
        width: 120,
        render: (u) => e(y, { color: 'arcoblue', children: u || '-' }),
      },
      { title: '\u6765\u6E90 ID', dataIndex: 'sourceId', width: 100 },
      {
        title: '\u6765\u6E90\u540D\u79F0',
        dataIndex: 'sourceName',
        width: 180,
      },
      { title: '\u6388\u6743\u7C7B\u578B', dataIndex: 'grantType', width: 120 },
      {
        title: '\u8FC7\u671F\u65F6\u95F4',
        dataIndex: 'expireAt',
        width: 170,
        render: z,
      },
    ];
  return l(d, {
    children: [
      e(Q, { heading: 6, children: '\u6743\u9650\u8BCA\u65AD' }),
      l('div', {
        className: t.toolbar,
        children: [
          e(h, {
            type: 'primary',
            icon: e(k, {}),
            loading: D,
            onClick: A,
            children: '\u5237\u65B0\u5F53\u524D\u4E0A\u4E0B\u6587',
          }),
          e(m, {
            type: 'secondary',
            children:
              '\u8BCA\u65AD\u5F53\u524D\u7528\u6237\u83DC\u5355\u3001\u6743\u9650\u7801\u3001\u5B57\u6BB5\u7B56\u7565\uFF0C\u5E76\u6A21\u62DF API \u8BBF\u95EE\u7ED3\u8BBA\u3002',
          }),
        ],
      }),
      e('div', {
        className: t['metric-row'],
        children: E.map((u) =>
          l(
            'div',
            {
              className: t.metric,
              children: [
                e('div', { className: t['metric-label'], children: u.label }),
                e('div', { className: t['metric-value'], children: u.value }),
              ],
            },
            u.label
          )
        ),
      }),
      l('div', {
        className: t.grid,
        children: [
          l(d, {
            className: t['card-block'],
            title: '\u6743\u9650\u6765\u6E90\u67E5\u8BE2',
            children: [
              l(s, {
                form: c,
                layout: 'inline',
                children: [
                  e(s.Item, {
                    field: 'userId',
                    label: '\u7528\u6237 ID',
                    children: e(o, { placeholder: '\u4F8B\u5982 2' }),
                  }),
                  e(s.Item, {
                    field: 'tenantId',
                    label: '\u79DF\u6237 ID',
                    children: e(o, {}),
                  }),
                  e(s.Item, {
                    field: 'permissionCode',
                    label: '\u6743\u9650\u7801',
                    children: e(o, { placeholder: 'system:user:list' }),
                  }),
                  e(s.Item, {
                    children: e(h, {
                      type: 'primary',
                      icon: e(N, {}),
                      loading: F,
                      onClick: x,
                      children: '\u67E5\u8BE2\u6765\u6E90',
                    }),
                  }),
                ],
              }),
              e(T, {
                rowKey: (u, i) =>
                  `${u.permissionCode}-${u.sourceType}-${u.sourceId}-${i}`,
                style: { marginTop: 16 },
                loading: F,
                columns: S,
                data: b,
                pagination: !1,
                scroll: { x: 1050 },
              }),
            ],
          }),
          l(d, {
            className: t['card-block'],
            title: 'API \u6743\u9650\u6A21\u62DF',
            children: [
              l(s, {
                form: p,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                initialValues: { httpMethod: 'GET' },
                children: [
                  e(s.Item, {
                    field: 'userId',
                    label: '\u7528\u6237 ID',
                    rules: [{ required: !0 }],
                    children: e(o, { placeholder: '\u4F8B\u5982 2' }),
                  }),
                  e(s.Item, {
                    field: 'tenantId',
                    label: '\u79DF\u6237 ID',
                    children: e(o, {}),
                  }),
                  e(s.Item, {
                    field: 'requestPath',
                    label: '\u8BF7\u6C42\u8DEF\u5F84',
                    rules: [{ required: !0 }],
                    children: e(o, { placeholder: '/api/system/users/list' }),
                  }),
                  e(s.Item, {
                    field: 'httpMethod',
                    label: '\u8BF7\u6C42\u65B9\u6CD5',
                    rules: [{ required: !0 }],
                    children: e(o, {}),
                  }),
                  e(h, {
                    type: 'primary',
                    icon: e(j, {}),
                    loading: _,
                    onClick: w,
                    children: '\u5F00\u59CB\u6A21\u62DF',
                  }),
                ],
              }),
              n &&
                e('div', {
                  className: t.result,
                  children: l(P, {
                    direction: 'vertical',
                    children: [
                      e(y, {
                        color: n.allowed ? 'green' : 'red',
                        children: n.allowed
                          ? '\u5141\u8BB8\u8BBF\u95EE'
                          : '\u62D2\u7EDD\u8BBF\u95EE',
                      }),
                      l(m, { children: ['API\uFF1A', n.apiCode || '-'] }),
                      l(m, {
                        children: [
                          '\u6743\u9650\u7801\uFF1A',
                          n.permissionCode || '-',
                        ],
                      }),
                      l(m, {
                        children: ['\u539F\u56E0\uFF1A', n.reason || '-'],
                      }),
                    ],
                  }),
                }),
            ],
          }),
        ],
      }),
      e(d, {
        title: '\u5F53\u524D\u5B57\u6BB5\u7B56\u7565\u5FEB\u7167',
        style: { marginTop: 16 },
        children: e('pre', {
          className: t.code,
          children: JSON.stringify(
            (a == null ? void 0 : a.fieldPolicies) || {},
            null,
            2
          ),
        }),
      }),
    ],
  });
}
export { se as default };
