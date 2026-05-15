var Z = Object.defineProperty,
  J = Object.defineProperties;
var X = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var $ = Object.prototype.hasOwnProperty,
  ee = Object.prototype.propertyIsEnumerable;
var S = (a, s, r) =>
    s in a
      ? Z(a, s, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[s] = r),
  b = (a, s) => {
    for (var r in s || (s = {})) $.call(s, r) && S(a, r, s[r]);
    if (g) for (var r of g(s)) ee.call(s, r) && S(a, r, s[r]);
    return a;
  },
  N = (a, s) => J(a, X(s));
import {
  ae as l,
  r as o,
  j as e,
  at as ue,
  h as I,
  af as t,
  B as f,
  Z as se,
  aS as ie,
  aL as le,
  aR as w,
  H as D,
  T as te,
  M as y,
  S as ae,
  aP as oe,
  aQ as re,
} from './vendor.f50a67ab.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  f as ne,
  a as me,
  b as ce,
  s as j,
  u as de,
  c as be,
  d as Ne,
  e as fe,
  g as xe,
  h as pe,
  i as Ee,
  j as he,
  k as De,
} from './index.module.e8f5a1d0.js';
import './access-control.111ee6c1.js';
import './index.8a32a122.js';
var u =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/data-scopes/index.tsx';
const { Title: je } = te,
  { TabPane: v } = I,
  ve = [
    { label: '\u7528\u6237', value: 'USER' },
    { label: '\u89D2\u8272', value: 'ROLE' },
    { label: '\u90E8\u95E8', value: 'DEPT' },
  ];
function Oe() {
  const [a] = l.useForm(),
    [s, r] = o.exports.useState('object'),
    [F, V] = o.exports.useState(''),
    [A, B] = o.exports.useState(!1),
    [x, p] = o.exports.useState(1),
    [E, T] = o.exports.useState(10),
    [O, L] = o.exports.useState(0),
    [k, P] = o.exports.useState([]),
    [q, z] = o.exports.useState([]),
    [R, M] = o.exports.useState([]),
    [_, c] = o.exports.useState(!1),
    [m, C] = o.exports.useState(null),
    [U, h] = o.exports.useState(0);
  o.exports.useEffect(() => {
    let i = !1;
    B(!0);
    const n = { page: x, pageSize: E, keyword: F || void 0 };
    return (
      (s === 'object' ? ne(n) : s === 'scope' ? me(n) : ce(n))
        .then((d) => {
          i ||
            (s === 'object' && P(d.list || []),
            s === 'scope' && z(d.list || []),
            s === 'binding' && M(d.list || []),
            L(d.total || 0));
        })
        .finally(() => !i && B(!1)),
      () => {
        i = !0;
      }
    );
  }, [s, x, E, F, U]);
  const H = () => {
      C(null),
        a.resetFields(),
        a.setFieldsValue({
          activeStatus: 1,
          effect: 'ALLOW',
          priority: 100,
          scopeType: 'SELF',
          subjectType: 'ROLE',
        }),
        c(!0);
    },
    K = (i) => {
      C(i), a.setFieldsValue(i), c(!0);
    },
    W = (i) =>
      w.confirm({
        title: '\u786E\u8BA4\u5220\u9664',
        content:
          '\u5220\u9664\u540E\u4F1A\u5F71\u54CD\u76F8\u5173\u6388\u6743\u5224\u65AD\uFF0C\u786E\u8BA4\u7EE7\u7EED\uFF1F',
        onOk: async () => {
          s === 'object' && (await Ee(i.id)),
            s === 'scope' && (await he(i.id)),
            s === 'binding' && (await De(i.id)),
            y.success('\u5220\u9664\u6210\u529F'),
            h((n) => n + 1);
        },
      }),
    G = async () => {
      const i = await a.validate();
      s === 'object' && (m ? await de(N(b({}, i), { id: m.id })) : await be(i)),
        s === 'scope' &&
          (m ? await Ne(N(b({}, i), { id: m.id })) : await fe(i)),
        s === 'binding' &&
          (m ? await xe(N(b({}, i), { id: m.id })) : await pe(i)),
        y.success(m ? '\u66F4\u65B0\u6210\u529F' : '\u65B0\u589E\u6210\u529F'),
        c(!1),
        h((n) => n + 1);
    },
    Q = [
      s,
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 160,
        fixed: 'right',
        render: (i, n) =>
          e.exports.jsxDEV(
            ae,
            {
              className: j.operations,
              children: [
                e.exports.jsxDEV(
                  f,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      oe,
                      {},
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 161, columnNumber: 17 },
                      this
                    ),
                    onClick: () => K(n),
                    children: '\u7F16\u8F91',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 158, columnNumber: 9 },
                  this
                ),
                e.exports.jsxDEV(
                  f,
                  {
                    type: 'text',
                    status: 'danger',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      re,
                      {},
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 170, columnNumber: 17 },
                      this
                    ),
                    onClick: () => W(n),
                    children: '\u5220\u9664',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 166, columnNumber: 9 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: u, lineNumber: 157, columnNumber: 7 },
            this
          ),
      },
    ],
    Y = s === 'object' ? k : s === 'scope' ? q : R;
  return e.exports.jsxDEV(
    ue,
    {
      children: [
        e.exports.jsxDEV(
          je,
          { heading: 6, children: '\u6570\u636E\u6743\u9650\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: u, lineNumber: 252, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          I,
          {
            activeTab: s,
            onChange: (i) => {
              r(i), p(1), V('');
            },
            children: [
              e.exports.jsxDEV(
                v,
                { title: '\u6570\u636E\u5BF9\u8C61' },
                'object',
                !1,
                { fileName: u, lineNumber: 261, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                v,
                { title: '\u6570\u636E\u8303\u56F4' },
                'scope',
                !1,
                { fileName: u, lineNumber: 262, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                v,
                { title: '\u6388\u6743\u7ED1\u5B9A' },
                'binding',
                !1,
                { fileName: u, lineNumber: 263, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 253, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: j['search-row'],
            children: [
              e.exports.jsxDEV(
                t.Search,
                {
                  allowClear: !0,
                  placeholder:
                    '\u641C\u7D22\u7F16\u7801\u3001\u540D\u79F0\u6216\u4E3B\u4F53',
                  onSearch: (i) => {
                    p(1), V(i);
                  },
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 266, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                f,
                {
                  icon: e.exports.jsxDEV(
                    se,
                    {},
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 274, columnNumber: 23 },
                    this
                  ),
                  onClick: () => h((i) => i + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 274, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 265, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: j['button-group'],
            children: e.exports.jsxDEV(
              f,
              {
                type: 'primary',
                icon: e.exports.jsxDEV(
                  ie,
                  {},
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 279, columnNumber: 38 },
                  this
                ),
                onClick: H,
                children: [
                  '\u65B0\u589E',
                  s === 'object'
                    ? '\u6570\u636E\u5BF9\u8C61'
                    : s === 'scope'
                    ? '\u6570\u636E\u8303\u56F4'
                    : '\u6388\u6743\u7ED1\u5B9A',
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 279, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 278, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          le,
          {
            rowKey: 'id',
            loading: A,
            columns: Q,
            data: Y,
            scroll: { x: 1300 },
            pagination: {
              current: x,
              pageSize: E,
              total: O,
              showTotal: !0,
              sizeCanChange: !0,
            },
            onChange: (i) => {
              p(i.current || 1), T(i.pageSize || 10);
            },
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 288, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          w,
          {
            title: m ? '\u7F16\u8F91\u914D\u7F6E' : '\u65B0\u589E\u914D\u7F6E',
            visible: _,
            onOk: G,
            onCancel: () => c(!1),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              l,
              {
                form: a,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  s === 'object' &&
                    e.exports.jsxDEV(
                      e.exports.Fragment,
                      {
                        children: [
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u5BF9\u8C61\u7F16\u7801',
                              field: 'objectCode',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 327,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 322, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u5BF9\u8C61\u540D\u79F0',
                              field: 'objectName',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 334,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 329, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u8868\u540D',
                              field: 'tableName',
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 337,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 336, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u5F52\u5C5E\u5B57\u6BB5',
                              field: 'ownerField',
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 340,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 339, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u79DF\u6237\u5B57\u6BB5',
                              field: 'tenantField',
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 343,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 342, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u90E8\u95E8\u5B57\u6BB5',
                              field: 'deptField',
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 346,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 345, columnNumber: 15 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0
                    ),
                  s === 'scope' &&
                    e.exports.jsxDEV(
                      e.exports.Fragment,
                      {
                        children: [
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u8303\u56F4\u7F16\u7801',
                              field: 'scopeCode',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 357,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 352, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u8303\u56F4\u540D\u79F0',
                              field: 'scopeName',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 364,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 359, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u8303\u56F4\u7C7B\u578B',
                              field: 'scopeType',
                              children: e.exports.jsxDEV(
                                D,
                                {
                                  options: [
                                    { label: '\u672C\u4EBA', value: 'SELF' },
                                    {
                                      label: '\u672C\u90E8\u95E8',
                                      value: 'DEPT',
                                    },
                                    {
                                      label:
                                        '\u672C\u90E8\u95E8\u53CA\u4E0B\u7EA7',
                                      value: 'DEPT_AND_CHILDREN',
                                    },
                                    { label: '\u5168\u90E8', value: 'ALL' },
                                    {
                                      label: '\u81EA\u5B9A\u4E49',
                                      value: 'CUSTOM',
                                    },
                                  ],
                                },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 367,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 366, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u6761\u4EF6\u8868\u8FBE\u5F0F',
                              field: 'conditionExpr',
                              children: e.exports.jsxDEV(
                                t.TextArea,
                                { rows: 4 },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 378,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 377, columnNumber: 15 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0
                    ),
                  s === 'binding' &&
                    e.exports.jsxDEV(
                      e.exports.Fragment,
                      {
                        children: [
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u4E3B\u4F53\u7C7B\u578B',
                              field: 'subjectType',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                D,
                                { options: ve },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 389,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 384, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u4E3B\u4F53 ID',
                              field: 'subjectId',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 396,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 391, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u6570\u636E\u5BF9\u8C61\u7F16\u7801',
                              field: 'objectCode',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 403,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 398, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u8303\u56F4\u7F16\u7801',
                              field: 'scopeCode',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 410,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 405, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u6548\u679C',
                              field: 'effect',
                              children: e.exports.jsxDEV(
                                D,
                                {
                                  options: [
                                    { label: '\u5141\u8BB8', value: 'ALLOW' },
                                    { label: '\u62D2\u7EDD', value: 'DENY' },
                                  ],
                                },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 413,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 412, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            l.Item,
                            {
                              label: '\u8FC7\u671F\u65F6\u95F4\u6233',
                              field: 'expireAt',
                              children: e.exports.jsxDEV(
                                t,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 421,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 420, columnNumber: 15 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0
                    ),
                  e.exports.jsxDEV(
                    l.Item,
                    {
                      label: '\u4F18\u5148\u7EA7',
                      field: 'priority',
                      children: e.exports.jsxDEV(
                        t,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 426, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 425, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    l.Item,
                    {
                      label: '\u63CF\u8FF0',
                      field: 'description',
                      children: e.exports.jsxDEV(
                        t.TextArea,
                        { rows: 3 },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 429, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 428, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 313, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 306, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: u, lineNumber: 251, columnNumber: 5 },
    this
  );
}
export { Oe as default };
