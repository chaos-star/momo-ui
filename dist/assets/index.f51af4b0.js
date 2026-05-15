var $ = Object.defineProperty,
  ee = Object.defineProperties;
var ue = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var le = Object.prototype.hasOwnProperty,
  ie = Object.prototype.propertyIsEnumerable;
var w = (a, l, o) =>
    l in a
      ? $(a, l, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (a[l] = o),
  N = (a, l) => {
    for (var o in l || (l = {})) le.call(l, o) && w(a, o, l[o]);
    if (A) for (var o of A(l)) ie.call(l, o) && w(a, o, l[o]);
    return a;
  },
  b = (a, l) => ee(a, ue(l));
import {
  ae as t,
  r,
  j as e,
  at as te,
  h as g,
  af as s,
  B as x,
  Z as se,
  aS as ae,
  aL as re,
  aR as L,
  H as m,
  T as oe,
  M as S,
  a as F,
  S as ne,
  aP as me,
  aQ as de,
} from './vendor.f50a67ab.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  l as fe,
  m as ce,
  n as Ne,
  s as v,
  o as be,
  p as xe,
  q as pe,
  r as he,
  t as Ee,
  v as Be,
  w as De,
  x as Fe,
  y as ve,
} from './index.module.e8f5a1d0.js';
import { f as T } from './accessControl.18599d4a.js';
import './access-control.111ee6c1.js';
import './index.8a32a122.js';
var u =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/field-policies/index.tsx';
const { Title: je } = oe,
  { TabPane: j } = g;
function Oe() {
  const [a] = t.useForm(),
    [l, o] = r.exports.useState('field'),
    [V, I] = r.exports.useState(''),
    [P, C] = r.exports.useState(!1),
    [p, h] = r.exports.useState(1),
    [E, O] = r.exports.useState(10),
    [k, M] = r.exports.useState(0),
    [q, W] = r.exports.useState([]),
    [R, z] = r.exports.useState([]),
    [Y, K] = r.exports.useState([]),
    [U, f] = r.exports.useState(!1),
    [d, y] = r.exports.useState(null),
    [_, B] = r.exports.useState(0);
  r.exports.useEffect(() => {
    let i = !1;
    C(!0);
    const n = { page: p, pageSize: E, keyword: V || void 0 };
    return (
      (l === 'field' ? fe(n) : l === 'policy' ? ce(n) : Ne(n))
        .then((c) => {
          i ||
            (l === 'field' && W(c.list || []),
            l === 'policy' && z(c.list || []),
            l === 'binding' && K(c.list || []),
            M(c.total || 0));
        })
        .finally(() => !i && C(!1)),
      () => {
        i = !0;
      }
    );
  }, [l, p, E, V, _]);
  const H = () => {
      y(null),
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
        f(!0);
    },
    G = (i) => {
      y(i), a.setFieldsValue(i), f(!0);
    },
    Q = (i) =>
      L.confirm({
        title: '\u786E\u8BA4\u5220\u9664',
        content:
          '\u5220\u9664\u5B57\u6BB5\u6743\u9650\u914D\u7F6E\u540E\u4F1A\u5F71\u54CD\u5B57\u6BB5\u5C55\u793A\u3001\u641C\u7D22\u3001\u5BFC\u51FA\u548C\u7F16\u8F91\u63A7\u5236\uFF0C\u786E\u8BA4\u7EE7\u7EED\uFF1F',
        onOk: async () => {
          l === 'field' && (await De(i.id)),
            l === 'policy' && (await Fe(i.id)),
            l === 'binding' && (await ve(i.id)),
            S.success('\u5220\u9664\u6210\u529F'),
            B((n) => n + 1);
        },
      }),
    Z = async () => {
      const i = await a.validate();
      l === 'field' && (d ? await be(b(N({}, i), { id: d.id })) : await xe(i)),
        l === 'policy' &&
          (d ? await pe(b(N({}, i), { id: d.id })) : await he(i)),
        l === 'binding' &&
          (d ? await Ee(b(N({}, i), { id: d.id })) : await Be(i)),
        S.success(d ? '\u66F4\u65B0\u6210\u529F' : '\u65B0\u589E\u6210\u529F'),
        f(!1),
        B((n) => n + 1);
    },
    D = {
      title: '\u64CD\u4F5C',
      dataIndex: 'operations',
      width: 160,
      fixed: 'right',
      render: (i, n) =>
        e.exports.jsxDEV(
          ne,
          {
            className: v.operations,
            children: [
              e.exports.jsxDEV(
                x,
                {
                  type: 'text',
                  size: 'small',
                  icon: e.exports.jsxDEV(
                    me,
                    {},
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 161, columnNumber: 17 },
                    this
                  ),
                  onClick: () => G(n),
                  children: '\u7F16\u8F91',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 158, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                x,
                {
                  type: 'text',
                  status: 'danger',
                  size: 'small',
                  icon: e.exports.jsxDEV(
                    de,
                    {},
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 170, columnNumber: 17 },
                    this
                  ),
                  onClick: () => Q(n),
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
    J = (() =>
      l === 'field'
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
              render: (i) =>
                i === 1
                  ? e.exports.jsxDEV(
                      F,
                      { color: 'red', children: '\u662F' },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 190, columnNumber: 37 },
                      this
                    )
                  : e.exports.jsxDEV(
                      F,
                      { children: '\u5426' },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 190, columnNumber: 64 },
                      this
                    ),
            },
            { title: '\u63CF\u8FF0', dataIndex: 'description', ellipsis: !0 },
            {
              title: '\u66F4\u65B0\u65F6\u95F4',
              dataIndex: 'updatedAt',
              width: 170,
              render: T,
            },
            D,
          ]
        : l === 'policy'
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
            D,
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
              render: (i) =>
                e.exports.jsxDEV(
                  F,
                  {
                    color: i === 'DENY' ? 'red' : 'green',
                    children: i || 'ALLOW',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 225, columnNumber: 11 },
                  this
                ),
            },
            {
              title: '\u8FC7\u671F\u65F6\u95F4',
              dataIndex: 'expireAt',
              width: 170,
              render: T,
            },
            D,
          ])(),
    X = l === 'field' ? q : l === 'policy' ? R : Y;
  return e.exports.jsxDEV(
    te,
    {
      children: [
        e.exports.jsxDEV(
          je,
          { heading: 6, children: '\u5B57\u6BB5\u6743\u9650\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: u, lineNumber: 247, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          g,
          {
            activeTab: l,
            onChange: (i) => {
              o(i), h(1), I('');
            },
            children: [
              e.exports.jsxDEV(
                j,
                { title: '\u6570\u636E\u5B57\u6BB5' },
                'field',
                !1,
                { fileName: u, lineNumber: 256, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                j,
                { title: '\u5B57\u6BB5\u7B56\u7565' },
                'policy',
                !1,
                { fileName: u, lineNumber: 257, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                j,
                { title: '\u7B56\u7565\u7ED1\u5B9A' },
                'binding',
                !1,
                { fileName: u, lineNumber: 258, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 248, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: v['search-row'],
            children: [
              e.exports.jsxDEV(
                s.Search,
                {
                  allowClear: !0,
                  placeholder:
                    '\u641C\u7D22\u5B57\u6BB5\u3001\u7B56\u7565\u6216 API \u7F16\u7801',
                  onSearch: (i) => {
                    h(1), I(i);
                  },
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 261, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                x,
                {
                  icon: e.exports.jsxDEV(
                    se,
                    {},
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 269, columnNumber: 23 },
                    this
                  ),
                  onClick: () => B((i) => i + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 269, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 260, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: v['button-group'],
            children: e.exports.jsxDEV(
              x,
              {
                type: 'primary',
                icon: e.exports.jsxDEV(
                  ae,
                  {},
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 274, columnNumber: 38 },
                  this
                ),
                onClick: H,
                children: [
                  '\u65B0\u589E',
                  l === 'field'
                    ? '\u6570\u636E\u5B57\u6BB5'
                    : l === 'policy'
                    ? '\u5B57\u6BB5\u7B56\u7565'
                    : '\u7B56\u7565\u7ED1\u5B9A',
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 274, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 273, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          re,
          {
            rowKey: 'id',
            loading: P,
            columns: J,
            data: X,
            scroll: { x: 1450 },
            pagination: {
              current: p,
              pageSize: E,
              total: k,
              showTotal: !0,
              sizeCanChange: !0,
            },
            onChange: (i) => {
              h(i.current || 1), O(i.pageSize || 10);
            },
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 283, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          L,
          {
            title: d ? '\u7F16\u8F91\u914D\u7F6E' : '\u65B0\u589E\u914D\u7F6E',
            visible: U,
            onOk: Z,
            onCancel: () => f(!1),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              t,
              {
                form: a,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  l === 'field' &&
                    e.exports.jsxDEV(
                      e.exports.Fragment,
                      {
                        children: [
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u6570\u636E\u5BF9\u8C61 ID',
                              field: 'dataObjectId',
                              children: e.exports.jsxDEV(
                                s,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 318,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 317, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u5B57\u6BB5\u7F16\u7801',
                              field: 'fieldCode',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                s,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 325,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 320, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u5B57\u6BB5\u540D\u79F0',
                              field: 'fieldName',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                s,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 332,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 327, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u5B57\u6BB5\u8DEF\u5F84',
                              field: 'fieldPath',
                              children: e.exports.jsxDEV(
                                s,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 335,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 334, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u5B57\u6BB5\u7C7B\u578B',
                              field: 'fieldType',
                              children: e.exports.jsxDEV(
                                s,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 338,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 337, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u662F\u5426\u654F\u611F',
                              field: 'sensitive',
                              children: e.exports.jsxDEV(
                                m,
                                {
                                  options: [
                                    { label: '\u5426', value: 2 },
                                    { label: '\u662F', value: 1 },
                                  ],
                                },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 341,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 340, columnNumber: 15 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0
                    ),
                  l === 'policy' &&
                    e.exports.jsxDEV(
                      e.exports.Fragment,
                      {
                        children: [
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u7B56\u7565\u7F16\u7801',
                              field: 'policyCode',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                s,
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
                            t.Item,
                            {
                              label: '\u7B56\u7565\u540D\u79F0',
                              field: 'policyName',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                s,
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
                            t.Item,
                            {
                              label: '\u5C55\u793A\u7B56\u7565',
                              field: 'displayEffect',
                              children: e.exports.jsxDEV(
                                m,
                                {
                                  options: [
                                    { label: '\u5141\u8BB8', value: 'ALLOW' },
                                    { label: '\u9690\u85CF', value: 'HIDE' },
                                    { label: '\u8131\u654F', value: 'MASK' },
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
                            t.Item,
                            {
                              label: '\u641C\u7D22\u7B56\u7565',
                              field: 'searchEffect',
                              children: e.exports.jsxDEV(
                                m,
                                {
                                  options: [
                                    { label: '\u5141\u8BB8', value: 'ALLOW' },
                                    { label: '\u7981\u6B62', value: 'DENY' },
                                  ],
                                },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 376,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 375, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u6392\u5E8F\u7B56\u7565',
                              field: 'sortEffect',
                              children: e.exports.jsxDEV(
                                m,
                                {
                                  options: [
                                    { label: '\u5141\u8BB8', value: 'ALLOW' },
                                    { label: '\u7981\u6B62', value: 'DENY' },
                                  ],
                                },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 384,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 383, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u7F16\u8F91\u7B56\u7565',
                              field: 'editEffect',
                              children: e.exports.jsxDEV(
                                m,
                                {
                                  options: [
                                    { label: '\u5141\u8BB8', value: 'ALLOW' },
                                    {
                                      label: '\u53EA\u8BFB',
                                      value: 'READONLY',
                                    },
                                    { label: '\u7981\u6B62', value: 'DENY' },
                                  ],
                                },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 392,
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
                            t.Item,
                            {
                              label: '\u5BFC\u51FA\u7B56\u7565',
                              field: 'exportEffect',
                              children: e.exports.jsxDEV(
                                m,
                                {
                                  options: [
                                    { label: '\u5141\u8BB8', value: 'ALLOW' },
                                    { label: '\u7981\u6B62', value: 'DENY' },
                                  ],
                                },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 401,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 400, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u8131\u654F\u7C7B\u578B',
                              field: 'maskType',
                              children: e.exports.jsxDEV(
                                m,
                                {
                                  options: [
                                    {
                                      label: '\u624B\u673A\u53F7',
                                      value: 'MOBILE',
                                    },
                                    { label: '\u90AE\u7BB1', value: 'EMAIL' },
                                    {
                                      label: '\u8EAB\u4EFD\u8BC1',
                                      value: 'ID_CARD',
                                    },
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
                                  lineNumber: 409,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 408, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u6761\u4EF6\u8868\u8FBE\u5F0F',
                              field: 'conditionExpr',
                              children: e.exports.jsxDEV(
                                s.TextArea,
                                { rows: 3 },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 419,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 418, columnNumber: 15 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0
                    ),
                  l === 'binding' &&
                    e.exports.jsxDEV(
                      e.exports.Fragment,
                      {
                        children: [
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u4E3B\u4F53\u7C7B\u578B',
                              field: 'subjectType',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                m,
                                {
                                  options: [
                                    { label: '\u7528\u6237', value: 'USER' },
                                    { label: '\u89D2\u8272', value: 'ROLE' },
                                    { label: '\u90E8\u95E8', value: 'DEPT' },
                                  ],
                                },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 430,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 425, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u4E3B\u4F53 ID',
                              field: 'subjectId',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                s,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 443,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 438, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: 'API \u7F16\u7801',
                              field: 'apiCode',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                s,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 450,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 445, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u5B57\u6BB5\u7F16\u7801',
                              field: 'fieldCode',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                s,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 457,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 452, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u7B56\u7565\u7F16\u7801',
                              field: 'policyCode',
                              rules: [{ required: !0 }],
                              children: e.exports.jsxDEV(
                                s,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 464,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 459, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u6548\u679C',
                              field: 'effect',
                              children: e.exports.jsxDEV(
                                m,
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
                                  lineNumber: 467,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 466, columnNumber: 15 },
                            this
                          ),
                          e.exports.jsxDEV(
                            t.Item,
                            {
                              label: '\u8FC7\u671F\u65F6\u95F4\u6233',
                              field: 'expireAt',
                              children: e.exports.jsxDEV(
                                s,
                                {},
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 475,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 474, columnNumber: 15 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0
                    ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u4F18\u5148\u7EA7',
                      field: 'priority',
                      children: e.exports.jsxDEV(
                        s,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 480, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 479, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u63CF\u8FF0',
                      field: 'description',
                      children: e.exports.jsxDEV(
                        s.TextArea,
                        { rows: 3 },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 483, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 482, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 308, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 301, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: u, lineNumber: 246, columnNumber: 5 },
    this
  );
}
export { Oe as default };
