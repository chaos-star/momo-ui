var X = Object.defineProperty,
  q = Object.defineProperties;
var $ = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty,
  K = Object.prototype.propertyIsEnumerable;
var V = (l, a, o) =>
    a in l
      ? X(l, a, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (l[a] = o),
  w = (l, a) => {
    for (var o in a || (a = {})) H.call(a, o) && V(l, o, a[o]);
    if (g) for (var o of g(a)) K.call(a, o) && V(l, o, a[o]);
    return l;
  },
  A = (l, a) => q(l, $(a));
import {
  ae as r,
  r as u,
  j as t,
  S as U,
  B as p,
  aP as _,
  aQ as Q,
  aR as S,
  M as E,
  at as Z,
  af as n,
  Z as J,
  aS as W,
  aL as Y,
  H as c,
  T as ee,
} from './vendor.f50a67ab.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  a as te,
  b as se,
  e as ie,
  g as le,
  h as ue,
} from './access-permission.5cb0b950.js';
import { f as ae } from './accessControl.18599d4a.js';
import { s as D } from './index.module.94e2fe99.js';
import './access-control.b0193dd4.js';
import './index.1708e48b.js';
var s =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/apis/index.tsx';
const { Title: oe } = ee;
function Ee() {
  const [l] = r.useForm(),
    [a, o] = u.exports.useState([]),
    [P, v] = u.exports.useState(!1),
    [N, j] = u.exports.useState(1),
    [x, y] = u.exports.useState(10),
    [T, B] = u.exports.useState(0),
    [f, M] = u.exports.useState(''),
    [k, m] = u.exports.useState(!1),
    [b, C] = u.exports.useState(null),
    [d, G] = u.exports.useState([]),
    [F, h] = u.exports.useState(0);
  u.exports.useEffect(() => {
    let e = !1;
    return (
      v(!0),
      te({ page: N, pageSize: x, apiCode: f || void 0, apiName: f || void 0 })
        .then((i) => {
          e || (o(i.list || []), B(i.total || 0));
        })
        .finally(() => !e && v(!1)),
      () => {
        e = !0;
      }
    );
  }, [N, x, f, F]),
    u.exports.useEffect(() => {
      let e = !1;
      return (
        se().then((i) => {
          e || G((i == null ? void 0 : i.list) || []);
        }),
        () => {
          e = !0;
        }
      );
    }, [F]);
  const I = u.exports.useMemo(
      () =>
        d.reduce(
          (e, i) => (
            i.groupCode && (e[i.groupCode] = i.groupName || i.groupCode), e
          ),
          {}
        ),
      [d]
    ),
    z = u.exports.useMemo(
      () =>
        d.map((e) => ({
          label: e.groupName ? `${e.groupName} (${e.groupCode})` : e.groupCode,
          value: e.groupCode,
        })),
      [d]
    ),
    L = u.exports.useMemo(
      () => [
        { title: 'ID', dataIndex: 'id', width: 80 },
        { title: 'API \u7F16\u7801', dataIndex: 'apiCode', width: 220 },
        { title: 'API \u540D\u79F0', dataIndex: 'apiName', width: 180 },
        {
          title: '\u5206\u7EC4',
          dataIndex: 'apiGroup',
          width: 160,
          render: (e) => (e ? I[e] || e : '-'),
        },
        { title: '\u65B9\u6CD5', dataIndex: 'httpMethod', width: 100 },
        { title: '\u8DEF\u5F84', dataIndex: 'pathPattern', width: 260 },
        { title: '\u5339\u914D', dataIndex: 'matchType', width: 100 },
        {
          title: '\u533F\u540D',
          dataIndex: 'anonymous',
          width: 90,
          render: (e) => (e === 1 ? '\u662F' : '\u5426'),
        },
        {
          title: '\u66F4\u65B0\u65F6\u95F4',
          dataIndex: 'updatedAt',
          width: 170,
          render: ae,
        },
        {
          title: '\u64CD\u4F5C',
          dataIndex: 'operations',
          width: 160,
          fixed: 'right',
          render: (e, i) =>
            t.exports.jsxDEV(
              U,
              {
                className: D.operations,
                children: [
                  t.exports.jsxDEV(
                    p,
                    {
                      type: 'text',
                      size: 'small',
                      icon: t.exports.jsxDEV(
                        _,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 139, columnNumber: 21 },
                        this
                      ),
                      onClick: () => {
                        C(i), l.setFieldsValue(i), m(!0);
                      },
                      children: '\u7F16\u8F91',
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 136, columnNumber: 13 },
                    this
                  ),
                  t.exports.jsxDEV(
                    p,
                    {
                      type: 'text',
                      status: 'danger',
                      size: 'small',
                      icon: t.exports.jsxDEV(
                        Q,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 152, columnNumber: 21 },
                        this
                      ),
                      onClick: () =>
                        S.confirm({
                          title: '\u5220\u9664 API',
                          content: `\u786E\u8BA4\u5220\u9664 ${i.apiCode}\uFF1F`,
                          onOk: async () => {
                            await ie(i.id),
                              E.success('API \u5DF2\u5220\u9664'),
                              h((R) => R + 1);
                          },
                        }),
                      children: '\u5220\u9664',
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 148, columnNumber: 13 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 135, columnNumber: 11 },
              this
            ),
        },
      ],
      [l, I]
    ),
    O = async () => {
      const e = await l.validate();
      b
        ? (await le(A(w({}, e), { id: b.id })),
          E.success('API \u5DF2\u66F4\u65B0'))
        : (await ue(e), E.success('API \u5DF2\u65B0\u589E')),
        m(!1),
        h((i) => i + 1);
    };
  return t.exports.jsxDEV(
    Z,
    {
      children: [
        t.exports.jsxDEV(
          oe,
          { heading: 6, children: 'API \u6743\u9650\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: s, lineNumber: 189, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          'div',
          {
            className: D['search-row'],
            children: [
              t.exports.jsxDEV(
                n.Search,
                {
                  allowClear: !0,
                  placeholder:
                    '\u641C\u7D22 API \u7F16\u7801\u6216\u540D\u79F0',
                  onSearch: (e) => {
                    j(1), M(e);
                  },
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 191, columnNumber: 9 },
                this
              ),
              t.exports.jsxDEV(
                p,
                {
                  icon: t.exports.jsxDEV(
                    J,
                    {},
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 199, columnNumber: 23 },
                    this
                  ),
                  onClick: () => h((e) => e + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 199, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: s, lineNumber: 190, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          'div',
          {
            className: D['button-group'],
            children: t.exports.jsxDEV(
              p,
              {
                type: 'primary',
                icon: t.exports.jsxDEV(
                  W,
                  {},
                  void 0,
                  !1,
                  { fileName: s, lineNumber: 206, columnNumber: 17 },
                  this
                ),
                onClick: () => {
                  C(null),
                    l.resetFields(),
                    l.setFieldsValue({
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
              { fileName: s, lineNumber: 204, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 203, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          Y,
          {
            rowKey: 'id',
            loading: P,
            columns: L,
            data: a,
            scroll: { x: 1400 },
            pagination: {
              current: N,
              pageSize: x,
              total: T,
              showTotal: !0,
              sizeCanChange: !0,
            },
            onChange: (e) => {
              j(e.current || 1), y(e.pageSize || 10);
            },
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 222, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          S,
          {
            title: b ? '\u7F16\u8F91 API' : '\u65B0\u589E API',
            visible: k,
            onOk: O,
            onCancel: () => m(!1),
            unmountOnExit: !0,
            children: t.exports.jsxDEV(
              r,
              {
                form: l,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  t.exports.jsxDEV(
                    r.Item,
                    {
                      label: 'API \u7F16\u7801',
                      field: 'apiCode',
                      rules: [{ required: !0 }],
                      children: t.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 259, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 254, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    r.Item,
                    {
                      label: 'API \u540D\u79F0',
                      field: 'apiName',
                      rules: [{ required: !0 }],
                      children: t.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 266, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 261, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    r.Item,
                    {
                      label: 'API \u5206\u7EC4',
                      field: 'apiGroup',
                      children: t.exports.jsxDEV(
                        c,
                        {
                          allowClear: !0,
                          showSearch: !0,
                          options: z,
                          filterOption: (e, i) =>
                            String(i.props.value)
                              .toLowerCase()
                              .includes(e.toLowerCase()) ||
                            String(i.props.children)
                              .toLowerCase()
                              .includes(e.toLowerCase()),
                        },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 269, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 268, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    r.Item,
                    {
                      label: '\u8BF7\u6C42\u65B9\u6CD5',
                      field: 'httpMethod',
                      children: t.exports.jsxDEV(
                        c,
                        {
                          options: [
                            'GET',
                            'POST',
                            'PUT',
                            'DELETE',
                            'PATCH',
                          ].map((e) => ({ label: e, value: e })),
                        },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 284, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 283, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    r.Item,
                    {
                      label: '\u8DEF\u5F84\u5339\u914D',
                      field: 'pathPattern',
                      rules: [{ required: !0 }],
                      children: t.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 296, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 291, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    r.Item,
                    {
                      label: '\u5339\u914D\u7C7B\u578B',
                      field: 'matchType',
                      children: t.exports.jsxDEV(
                        c,
                        {
                          options: [
                            { label: '\u7CBE\u786E', value: 'EXACT' },
                            { label: '\u524D\u7F00', value: 'PREFIX' },
                            { label: '\u6B63\u5219', value: 'REGEX' },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 299, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 298, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    r.Item,
                    {
                      label: '\u533F\u540D\u8BBF\u95EE',
                      field: 'anonymous',
                      children: t.exports.jsxDEV(
                        c,
                        {
                          options: [
                            { label: '\u5426', value: 2 },
                            { label: '\u662F', value: 1 },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 308, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 307, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    r.Item,
                    {
                      label: '\u63CF\u8FF0',
                      field: 'description',
                      children: t.exports.jsxDEV(
                        n.TextArea,
                        { rows: 3 },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 316, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 315, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 247, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 240, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: s, lineNumber: 188, columnNumber: 5 },
    this
  );
}
export { Ee as default };
