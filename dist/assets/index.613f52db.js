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
} from './vendor.3ac9a823.js';
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
} from './index.module.911536f4.js';
import { f as T } from './accessControl.18599d4a.js';
import './access-control.f393622f.js';
import './index.2a9369a5.js';
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
                    { fileName: u, lineNumber: 102, columnNumber: 46 },
                    this
                  ),
                  onClick: () => G(n),
                  children: '\u7F16\u8F91',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 102, columnNumber: 7 },
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
                    { fileName: u, lineNumber: 103, columnNumber: 62 },
                    this
                  ),
                  onClick: () => Q(n),
                  children: '\u5220\u9664',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 103, columnNumber: 7 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 101, columnNumber: 94 },
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
                      { fileName: u, lineNumber: 113, columnNumber: 82 },
                      this
                    )
                  : e.exports.jsxDEV(
                      F,
                      { children: '\u5426' },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 113, columnNumber: 109 },
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
                  { fileName: u, lineNumber: 136, columnNumber: 70 },
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
          { fileName: u, lineNumber: 145, columnNumber: 5 },
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
                { fileName: u, lineNumber: 147, columnNumber: 7 },
                this
              ),
              e.exports.jsxDEV(
                j,
                { title: '\u5B57\u6BB5\u7B56\u7565' },
                'policy',
                !1,
                { fileName: u, lineNumber: 148, columnNumber: 7 },
                this
              ),
              e.exports.jsxDEV(
                j,
                { title: '\u7B56\u7565\u7ED1\u5B9A' },
                'binding',
                !1,
                { fileName: u, lineNumber: 149, columnNumber: 7 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 146, columnNumber: 5 },
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
                { fileName: u, lineNumber: 152, columnNumber: 7 },
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
                    { fileName: u, lineNumber: 153, columnNumber: 21 },
                    this
                  ),
                  onClick: () => B((i) => i + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 153, columnNumber: 7 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 151, columnNumber: 5 },
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
                  { fileName: u, lineNumber: 155, columnNumber: 74 },
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
              { fileName: u, lineNumber: 155, columnNumber: 45 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 155, columnNumber: 5 },
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
          { fileName: u, lineNumber: 156, columnNumber: 5 },
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
                                  lineNumber: 160,
                                  columnNumber: 59,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 160, columnNumber: 11 },
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
                                  lineNumber: 161,
                                  columnNumber: 82,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 161, columnNumber: 11 },
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
                                  lineNumber: 162,
                                  columnNumber: 82,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 162, columnNumber: 11 },
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
                                  lineNumber: 163,
                                  columnNumber: 53,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 163, columnNumber: 11 },
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
                                  lineNumber: 164,
                                  columnNumber: 53,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 164, columnNumber: 11 },
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
                                  lineNumber: 165,
                                  columnNumber: 53,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 165, columnNumber: 11 },
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
                                  lineNumber: 168,
                                  columnNumber: 83,
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
                                  lineNumber: 169,
                                  columnNumber: 83,
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
                                  lineNumber: 170,
                                  columnNumber: 57,
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
                                  lineNumber: 171,
                                  columnNumber: 56,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 171, columnNumber: 11 },
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
                                  lineNumber: 172,
                                  columnNumber: 54,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 172, columnNumber: 11 },
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
                                  lineNumber: 173,
                                  columnNumber: 54,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 173, columnNumber: 11 },
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
                                  lineNumber: 174,
                                  columnNumber: 56,
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
                                  lineNumber: 175,
                                  columnNumber: 52,
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
                                  lineNumber: 176,
                                  columnNumber: 58,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 176, columnNumber: 11 },
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
                                  lineNumber: 179,
                                  columnNumber: 84,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 179, columnNumber: 11 },
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
                                  lineNumber: 180,
                                  columnNumber: 83,
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
                                  lineNumber: 181,
                                  columnNumber: 82,
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
                                  lineNumber: 182,
                                  columnNumber: 82,
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
                                  lineNumber: 183,
                                  columnNumber: 83,
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
                    t.Item,
                    {
                      label: '\u4F18\u5148\u7EA7',
                      field: 'priority',
                      children: e.exports.jsxDEV(
                        s,
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
                    t.Item,
                    {
                      label: '\u63CF\u8FF0',
                      field: 'description',
                      children: e.exports.jsxDEV(
                        s.TextArea,
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
              { fileName: u, lineNumber: 158, columnNumber: 7 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 157, columnNumber: 5 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: u, lineNumber: 144, columnNumber: 10 },
    this
  );
}
export { Oe as default };
