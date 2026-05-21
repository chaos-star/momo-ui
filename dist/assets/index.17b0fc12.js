import {
  ae as l,
  r as a,
  j as e,
  at as c,
  B as N,
  Z as A,
  af as o,
  aT as w,
  aL as S,
  ah as k,
  S as T,
  a as v,
  T as P,
  M,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css              */ import { g as L } from './index.77883a3f.js';
import { g as q, b as $ } from './access-control.86021a9b.js';
import { f as z } from './accessControl.941fcf7e.js';
function G(m) {
  return q('/api/system/auth-diagnosis/sources', m);
}
function O(m) {
  return $('/api/system/auth-diagnosis/simulate', m);
}
const R = '_toolbar_1avkc_1',
  J = '_grid_1avkc_6',
  K = '_metric_1avkc_15',
  U = '_result_1avkc_39',
  Z = '_code_1avkc_46';
var r = {
    toolbar: R,
    grid: J,
    'card-block': '_card-block_1avkc_11',
    'metric-row': '_metric-row_1avkc_15',
    metric: K,
    'metric-label': '_metric-label_1avkc_29',
    'metric-value': '_metric-value_1avkc_33',
    result: U,
    code: Z,
  },
  u =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/auth-diagnosis/index.tsx';
const { Title: H, Text: d } = P;
function ie() {
  const [m] = l.useForm(),
    [b] = l.useForm(),
    [i, D] = a.exports.useState(null),
    [E, j] = a.exports.useState([]),
    [n, V] = a.exports.useState(null),
    [B, f] = a.exports.useState(!1),
    [x, h] = a.exports.useState(!1),
    [F, p] = a.exports.useState(!1),
    g = a.exports.useMemo(() => {
      var s, t;
      return [
        {
          label: '\u83DC\u5355\u6570\u91CF',
          value:
            ((s = i == null ? void 0 : i.menus) == null ? void 0 : s.length) ||
            0,
        },
        {
          label: '\u6743\u9650\u7801\u6570\u91CF',
          value:
            ((t = i == null ? void 0 : i.permissions) == null
              ? void 0
              : t.length) || 0,
        },
        {
          label: '\u5B57\u6BB5\u7B56\u7565 API',
          value: Object.keys((i == null ? void 0 : i.fieldPolicies) || {})
            .length,
        },
      ];
    }, [i]),
    y = async () => {
      f(!0);
      try {
        const s = await L();
        D(s), M.success('\u6743\u9650\u4E0A\u4E0B\u6587\u5DF2\u5237\u65B0');
      } finally {
        f(!1);
      }
    },
    I = async () => {
      const s = await m.validate();
      h(!0);
      try {
        const t = await G(s);
        j(t || []);
      } finally {
        h(!1);
      }
    },
    C = async () => {
      const s = await b.validate();
      p(!0);
      try {
        const t = await O(s);
        V(t);
      } finally {
        p(!1);
      }
    },
    _ = [
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
        render: (s) =>
          e.exports.jsxDEV(
            v,
            { color: 'arcoblue', children: s || '-' },
            void 0,
            !1,
            { fileName: u, lineNumber: 90, columnNumber: 22 },
            this
          ),
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
  return e.exports.jsxDEV(
    c,
    {
      children: [
        e.exports.jsxDEV(
          H,
          { heading: 6, children: '\u6743\u9650\u8BCA\u65AD' },
          void 0,
          !1,
          { fileName: u, lineNumber: 105, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: r.toolbar,
            children: [
              e.exports.jsxDEV(
                N,
                {
                  type: 'primary',
                  icon: e.exports.jsxDEV(
                    A,
                    {},
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 109, columnNumber: 17 },
                    this
                  ),
                  loading: B,
                  onClick: y,
                  children: '\u5237\u65B0\u5F53\u524D\u4E0A\u4E0B\u6587',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 107, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                d,
                {
                  type: 'secondary',
                  children:
                    '\u8BCA\u65AD\u5F53\u524D\u7528\u6237\u83DC\u5355\u3001\u6743\u9650\u7801\u3001\u5B57\u6BB5\u7B56\u7565\uFF0C\u5E76\u6A21\u62DF API \u8BBF\u95EE\u7ED3\u8BBA\u3002',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 115, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 106, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: r['metric-row'],
            children: g.map((s) =>
              e.exports.jsxDEV(
                'div',
                {
                  className: r.metric,
                  children: [
                    e.exports.jsxDEV(
                      'div',
                      { className: r['metric-label'], children: s.label },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 122, columnNumber: 13 },
                      this
                    ),
                    e.exports.jsxDEV(
                      'div',
                      { className: r['metric-value'], children: s.value },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 123, columnNumber: 13 },
                      this
                    ),
                  ],
                },
                s.label,
                !0,
                { fileName: u, lineNumber: 121, columnNumber: 11 },
                this
              )
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 119, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: r.grid,
            children: [
              e.exports.jsxDEV(
                c,
                {
                  className: r['card-block'],
                  title: '\u6743\u9650\u6765\u6E90\u67E5\u8BE2',
                  children: [
                    e.exports.jsxDEV(
                      l,
                      {
                        form: m,
                        layout: 'inline',
                        children: [
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              field: 'userId',
                              label: '\u7528\u6237 ID',
                              children: e.exports.jsxDEV(
                                o,
                                { placeholder: '\u4F8B\u5982 2' },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 131,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 130, columnNumber: 13 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              field: 'tenantId',
                              label: '\u79DF\u6237 ID',
                              children: e.exports.jsxDEV(
                                o,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 134,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 133, columnNumber: 13 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              field: 'permissionCode',
                              label: '\u6743\u9650\u7801',
                              children: e.exports.jsxDEV(
                                o,
                                { placeholder: 'system:user:list' },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 137,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 136, columnNumber: 13 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              children: e.exports.jsxDEV(
                                N,
                                {
                                  type: 'primary',
                                  icon: e.exports.jsxDEV(
                                    w,
                                    {},
                                    void 0,
                                    !1,
                                    {
                                      fileName: u,
                                      lineNumber: 142,
                                      columnNumber: 23,
                                    },
                                    this
                                  ),
                                  loading: x,
                                  onClick: I,
                                  children: '\u67E5\u8BE2\u6765\u6E90',
                                },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 140,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 139, columnNumber: 13 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: u, lineNumber: 129, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      S,
                      {
                        rowKey: (s, t) =>
                          `${s.permissionCode}-${s.sourceType}-${s.sourceId}-${t}`,
                        style: { marginTop: 16 },
                        loading: x,
                        columns: _,
                        data: E,
                        pagination: !1,
                        scroll: { x: 1050 },
                      },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 150, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: u, lineNumber: 128, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                c,
                {
                  className: r['card-block'],
                  title: 'API \u6743\u9650\u6A21\u62DF',
                  children: [
                    e.exports.jsxDEV(
                      l,
                      {
                        form: b,
                        layout: 'horizontal',
                        labelAlign: 'left',
                        labelCol: { span: 5 },
                        wrapperCol: { span: 19 },
                        initialValues: { httpMethod: 'GET' },
                        children: [
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              field: 'userId',
                              label: '\u7528\u6237 ID',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                o,
                                { placeholder: '\u4F8B\u5982 2' },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 176,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 171, columnNumber: 13 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              field: 'tenantId',
                              label: '\u79DF\u6237 ID',
                              children: e.exports.jsxDEV(
                                o,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 179,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 178, columnNumber: 13 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              field: 'requestPath',
                              label: '\u8BF7\u6C42\u8DEF\u5F84',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                o,
                                { placeholder: '/api/system/users/list' },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 186,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 181, columnNumber: 13 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              field: 'httpMethod',
                              label: '\u8BF7\u6C42\u65B9\u6CD5',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                o,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 193,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 188, columnNumber: 13 },
                            this
                          ),
                          e.exports.jsxDEV(
                            N,
                            {
                              type: 'primary',
                              icon: e.exports.jsxDEV(
                                k,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 197,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              loading: F,
                              onClick: C,
                              children: '\u5F00\u59CB\u6A21\u62DF',
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 195, columnNumber: 13 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: u, lineNumber: 163, columnNumber: 11 },
                      this
                    ),
                    n &&
                      e.exports.jsxDEV(
                        'div',
                        {
                          className: r.result,
                          children: e.exports.jsxDEV(
                            T,
                            {
                              direction: 'vertical',
                              children: [
                                e.exports.jsxDEV(
                                  v,
                                  {
                                    color: n.allowed ? 'green' : 'red',
                                    children: n.allowed
                                      ? '\u5141\u8BB8\u8BBF\u95EE'
                                      : '\u62D2\u7EDD\u8BBF\u95EE',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: u,
                                    lineNumber: 207,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                                e.exports.jsxDEV(
                                  d,
                                  { children: ['API\uFF1A', n.apiCode || '-'] },
                                  void 0,
                                  !0,
                                  {
                                    fileName: u,
                                    lineNumber: 210,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                                e.exports.jsxDEV(
                                  d,
                                  {
                                    children: [
                                      '\u6743\u9650\u7801\uFF1A',
                                      n.permissionCode || '-',
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName: u,
                                    lineNumber: 211,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                                e.exports.jsxDEV(
                                  d,
                                  {
                                    children: [
                                      '\u539F\u56E0\uFF1A',
                                      n.reason || '-',
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName: u,
                                    lineNumber: 212,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: u, lineNumber: 206, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 205, columnNumber: 13 },
                        this
                      ),
                  ],
                },
                void 0,
                !0,
                { fileName: u, lineNumber: 162, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 127, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          c,
          {
            title: '\u5F53\u524D\u5B57\u6BB5\u7B56\u7565\u5FEB\u7167',
            style: { marginTop: 16 },
            children: e.exports.jsxDEV(
              'pre',
              {
                className: r.code,
                children: JSON.stringify(
                  (i == null ? void 0 : i.fieldPolicies) || {},
                  null,
                  2
                ),
              },
              void 0,
              !1,
              { fileName: u, lineNumber: 219, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 218, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: u, lineNumber: 104, columnNumber: 5 },
    this
  );
}
export { ie as default };
