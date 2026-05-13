var G = Object.defineProperty,
  R = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var X = Object.prototype.hasOwnProperty,
  q = Object.prototype.propertyIsEnumerable;
var I = (i, l, a) =>
    l in i
      ? G(i, l, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (i[l] = a),
  V = (i, l) => {
    for (var a in l || (l = {})) X.call(l, a) && I(i, a, l[a]);
    if (F) for (var a of F(l)) q.call(l, a) && I(i, a, l[a]);
    return i;
  },
  C = (i, l) => R(i, O(l));
import {
  ae as o,
  r as u,
  j as e,
  S as L,
  B as d,
  aP as H,
  aQ as K,
  aR as A,
  M as b,
  at as U,
  af as n,
  Z as _,
  aS as Q,
  aL as Z,
  H as h,
  T as $,
} from './vendor.3ac9a823.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  f as J,
  d as W,
  u as Y,
  c as ee,
} from './access-permission.3a0f8dc9.js';
import { f as te } from './accessControl.18599d4a.js';
import { s as E } from './index.module.94e2fe99.js';
import './access-control.f393622f.js';
import './index.2a9369a5.js';
var t =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/apis/index.tsx';
const { Title: se } = $;
function Ne() {
  const [i] = o.useForm(),
    [l, a] = u.exports.useState([]),
    [P, D] = u.exports.useState(!1),
    [c, v] = u.exports.useState(1),
    [p, w] = u.exports.useState(10),
    [g, S] = u.exports.useState(0),
    [N, y] = u.exports.useState(''),
    [T, m] = u.exports.useState(!1),
    [x, j] = u.exports.useState(null),
    [B, f] = u.exports.useState(0);
  u.exports.useEffect(() => {
    let s = !1;
    return (
      D(!0),
      J({ page: c, pageSize: p, apiCode: N || void 0, apiName: N || void 0 })
        .then((r) => {
          s || (a(r.list || []), S(r.total || 0));
        })
        .finally(() => !s && D(!1)),
      () => {
        s = !0;
      }
    );
  }, [c, p, N, B]);
  const k = u.exports.useMemo(
      () => [
        { title: 'ID', dataIndex: 'id', width: 80 },
        { title: 'API \u7F16\u7801', dataIndex: 'apiCode', width: 220 },
        { title: 'API \u540D\u79F0', dataIndex: 'apiName', width: 180 },
        { title: '\u5206\u7EC4', dataIndex: 'apiGroup', width: 120 },
        { title: '\u65B9\u6CD5', dataIndex: 'httpMethod', width: 100 },
        { title: '\u8DEF\u5F84', dataIndex: 'pathPattern', width: 260 },
        { title: '\u5339\u914D', dataIndex: 'matchType', width: 100 },
        {
          title: '\u533F\u540D',
          dataIndex: 'anonymous',
          width: 90,
          render: (s) => (s === 1 ? '\u662F' : '\u5426'),
        },
        {
          title: '\u66F4\u65B0\u65F6\u95F4',
          dataIndex: 'updatedAt',
          width: 170,
          render: te,
        },
        {
          title: '\u64CD\u4F5C',
          dataIndex: 'operations',
          width: 160,
          fixed: 'right',
          render: (s, r) =>
            e.exports.jsxDEV(
              L,
              {
                className: E.operations,
                children: [
                  e.exports.jsxDEV(
                    d,
                    {
                      type: 'text',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        H,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 42, columnNumber: 172 },
                        this
                      ),
                      onClick: () => {
                        j(r), i.setFieldsValue(r), m(!0);
                      },
                      children: '\u7F16\u8F91',
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 42, columnNumber: 133 },
                    this
                  ),
                  e.exports.jsxDEV(
                    d,
                    {
                      type: 'text',
                      status: 'danger',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        K,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 42, columnNumber: 340 },
                        this
                      ),
                      onClick: () =>
                        A.confirm({
                          title: '\u5220\u9664 API',
                          content: `\u786E\u8BA4\u5220\u9664 ${r.apiCode}\uFF1F`,
                          onOk: async () => {
                            await W(r.id),
                              b.success('API \u5DF2\u5220\u9664'),
                              f((z) => z + 1);
                          },
                        }),
                      children: '\u5220\u9664',
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 42, columnNumber: 285 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: t, lineNumber: 42, columnNumber: 96 },
              this
            ),
        },
      ],
      [i]
    ),
    M = async () => {
      const s = await i.validate();
      x
        ? (await Y(C(V({}, s), { id: x.id })),
          b.success('API \u5DF2\u66F4\u65B0'))
        : (await ee(s), b.success('API \u5DF2\u65B0\u589E')),
        m(!1),
        f((r) => r + 1);
    };
  return e.exports.jsxDEV(
    U,
    {
      children: [
        e.exports.jsxDEV(
          se,
          { heading: 6, children: 'API \u6743\u9650\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: t, lineNumber: 59, columnNumber: 5 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: E['search-row'],
            children: [
              e.exports.jsxDEV(
                n.Search,
                {
                  allowClear: !0,
                  placeholder:
                    '\u641C\u7D22 API \u7F16\u7801\u6216\u540D\u79F0',
                  onSearch: (s) => {
                    v(1), y(s);
                  },
                },
                void 0,
                !1,
                { fileName: t, lineNumber: 60, columnNumber: 43 },
                this
              ),
              e.exports.jsxDEV(
                d,
                {
                  icon: e.exports.jsxDEV(
                    _,
                    {},
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 60, columnNumber: 163 },
                    this
                  ),
                  onClick: () => f((s) => s + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: t, lineNumber: 60, columnNumber: 149 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: t, lineNumber: 60, columnNumber: 5 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: E['button-group'],
            children: e.exports.jsxDEV(
              d,
              {
                type: 'primary',
                icon: e.exports.jsxDEV(
                  Q,
                  {},
                  void 0,
                  !1,
                  { fileName: t, lineNumber: 61, columnNumber: 74 },
                  this
                ),
                onClick: () => {
                  j(null),
                    i.resetFields(),
                    i.setFieldsValue({
                      httpMethod: 'GET',
                      matchType: 'EXACT',
                      anonymous: 2,
                      activeStatus: 1,
                    }),
                    m(!0);
                },
                children: '\u65B0\u589E API',
              },
              void 0,
              !1,
              { fileName: t, lineNumber: 61, columnNumber: 45 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 61, columnNumber: 5 },
          this
        ),
        e.exports.jsxDEV(
          Z,
          {
            rowKey: 'id',
            loading: P,
            columns: k,
            data: l,
            scroll: { x: 1400 },
            pagination: {
              current: c,
              pageSize: p,
              total: g,
              showTotal: !0,
              sizeCanChange: !0,
            },
            onChange: (s) => {
              v(s.current || 1), w(s.pageSize || 10);
            },
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 62, columnNumber: 5 },
          this
        ),
        e.exports.jsxDEV(
          A,
          {
            title: x ? '\u7F16\u8F91 API' : '\u65B0\u589E API',
            visible: T,
            onOk: M,
            onCancel: () => m(!1),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              o,
              {
                form: i,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  e.exports.jsxDEV(
                    o.Item,
                    {
                      label: 'API \u7F16\u7801',
                      field: 'apiCode',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 65, columnNumber: 80 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 65, columnNumber: 9 },
                    this
                  ),
                  e.exports.jsxDEV(
                    o.Item,
                    {
                      label: 'API \u540D\u79F0',
                      field: 'apiName',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 66, columnNumber: 80 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 66, columnNumber: 9 },
                    this
                  ),
                  e.exports.jsxDEV(
                    o.Item,
                    {
                      label: 'API \u5206\u7EC4',
                      field: 'apiGroup',
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 67, columnNumber: 52 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 67, columnNumber: 9 },
                    this
                  ),
                  e.exports.jsxDEV(
                    o.Item,
                    {
                      label: '\u8BF7\u6C42\u65B9\u6CD5',
                      field: 'httpMethod',
                      children: e.exports.jsxDEV(
                        h,
                        {
                          options: [
                            'GET',
                            'POST',
                            'PUT',
                            'DELETE',
                            'PATCH',
                          ].map((s) => ({ label: s, value: s })),
                        },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 68, columnNumber: 52 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 68, columnNumber: 9 },
                    this
                  ),
                  e.exports.jsxDEV(
                    o.Item,
                    {
                      label: '\u8DEF\u5F84\u5339\u914D',
                      field: 'pathPattern',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 69, columnNumber: 82 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 69, columnNumber: 9 },
                    this
                  ),
                  e.exports.jsxDEV(
                    o.Item,
                    {
                      label: '\u5339\u914D\u7C7B\u578B',
                      field: 'matchType',
                      children: e.exports.jsxDEV(
                        h,
                        {
                          options: [
                            { label: '\u7CBE\u786E', value: 'EXACT' },
                            { label: '\u524D\u7F00', value: 'PREFIX' },
                            { label: '\u6B63\u5219', value: 'REGEX' },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 70, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 70, columnNumber: 9 },
                    this
                  ),
                  e.exports.jsxDEV(
                    o.Item,
                    {
                      label: '\u533F\u540D\u8BBF\u95EE',
                      field: 'anonymous',
                      children: e.exports.jsxDEV(
                        h,
                        {
                          options: [
                            { label: '\u5426', value: 2 },
                            { label: '\u662F', value: 1 },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 71, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 71, columnNumber: 9 },
                    this
                  ),
                  e.exports.jsxDEV(
                    o.Item,
                    {
                      label: '\u63CF\u8FF0',
                      field: 'description',
                      children: e.exports.jsxDEV(
                        n.TextArea,
                        { rows: 3 },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 72, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 72, columnNumber: 9 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: t, lineNumber: 64, columnNumber: 7 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 63, columnNumber: 5 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: t, lineNumber: 58, columnNumber: 10 },
    this
  );
}
export { Ne as default };
