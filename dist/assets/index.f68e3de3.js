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
} from './vendor.3ac9a823.js';
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
} from './index.module.911536f4.js';
import './access-control.f393622f.js';
import './index.2a9369a5.js';
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
                      { fileName: u, lineNumber: 110, columnNumber: 46 },
                      this
                    ),
                    onClick: () => K(n),
                    children: '\u7F16\u8F91',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 110, columnNumber: 7 },
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
                      { fileName: u, lineNumber: 111, columnNumber: 62 },
                      this
                    ),
                    onClick: () => W(n),
                    children: '\u5220\u9664',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 111, columnNumber: 7 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: u, lineNumber: 109, columnNumber: 94 },
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
          { fileName: u, lineNumber: 151, columnNumber: 5 },
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
                { fileName: u, lineNumber: 153, columnNumber: 7 },
                this
              ),
              e.exports.jsxDEV(
                v,
                { title: '\u6570\u636E\u8303\u56F4' },
                'scope',
                !1,
                { fileName: u, lineNumber: 154, columnNumber: 7 },
                this
              ),
              e.exports.jsxDEV(
                v,
                { title: '\u6388\u6743\u7ED1\u5B9A' },
                'binding',
                !1,
                { fileName: u, lineNumber: 155, columnNumber: 7 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 152, columnNumber: 5 },
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
                { fileName: u, lineNumber: 158, columnNumber: 7 },
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
                    { fileName: u, lineNumber: 159, columnNumber: 21 },
                    this
                  ),
                  onClick: () => h((i) => i + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 159, columnNumber: 7 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 157, columnNumber: 5 },
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
                  { fileName: u, lineNumber: 161, columnNumber: 74 },
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
              { fileName: u, lineNumber: 161, columnNumber: 45 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 161, columnNumber: 5 },
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
          { fileName: u, lineNumber: 162, columnNumber: 5 },
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
                                  lineNumber: 166,
                                  columnNumber: 83,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 166, columnNumber: 11 },
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
                                  lineNumber: 167,
                                  columnNumber: 83,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 167, columnNumber: 11 },
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
                                  lineNumber: 168,
                                  columnNumber: 51,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 168, columnNumber: 11 },
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
                                  lineNumber: 169,
                                  columnNumber: 54,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 169, columnNumber: 11 },
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
                                  lineNumber: 170,
                                  columnNumber: 55,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 170, columnNumber: 11 },
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
                                  lineNumber: 171,
                                  columnNumber: 53,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 171, columnNumber: 11 },
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
                                  lineNumber: 174,
                                  columnNumber: 82,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 174, columnNumber: 11 },
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
                                  lineNumber: 175,
                                  columnNumber: 82,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 175, columnNumber: 11 },
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
                                  lineNumber: 176,
                                  columnNumber: 53,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 176, columnNumber: 11 },
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
                                  lineNumber: 177,
                                  columnNumber: 58,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 177, columnNumber: 11 },
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
                                  lineNumber: 180,
                                  columnNumber: 84,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 180, columnNumber: 11 },
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
                                  lineNumber: 181,
                                  columnNumber: 83,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 181, columnNumber: 11 },
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
                                  lineNumber: 182,
                                  columnNumber: 85,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 182, columnNumber: 11 },
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
                                  lineNumber: 183,
                                  columnNumber: 82,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 183, columnNumber: 11 },
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
                                  lineNumber: 184,
                                  columnNumber: 48,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 184, columnNumber: 11 },
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
                                  lineNumber: 185,
                                  columnNumber: 53,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 185, columnNumber: 11 },
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
                        { fileName: u, lineNumber: 187, columnNumber: 49 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 187, columnNumber: 9 },
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
                        { fileName: u, lineNumber: 188, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 188, columnNumber: 9 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 164, columnNumber: 7 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 163, columnNumber: 5 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: u, lineNumber: 150, columnNumber: 10 },
    this
  );
}
export { Oe as default };
