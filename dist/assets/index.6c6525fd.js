var H = Object.defineProperty,
  J = Object.defineProperties;
var K = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var Q = Object.prototype.hasOwnProperty,
  Z = Object.prototype.propertyIsEnumerable;
var S = (t, u, r) =>
    u in t
      ? H(t, u, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[u] = r),
  C = (t, u) => {
    for (var r in u || (u = {})) Q.call(u, r) && S(t, r, u[r]);
    if (V) for (var r of V(u)) Z.call(u, r) && S(t, r, u[r]);
    return t;
  },
  I = (t, u) => J(t, K(u));
import {
  ae as a,
  r as o,
  j as e,
  S as w,
  B as m,
  aP as $,
  aQ as W,
  aR as A,
  M as j,
  at as X,
  aS as Y,
  Z as y,
  aL as ee,
  af as d,
  T as se,
  aT as ie,
  aH as te,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  f as ue,
  d as re,
  u as le,
  c as oe,
} from './access-permission.04fba575.js';
import { f as B } from './accessControl.941fcf7e.js';
import { s as p } from './index.module.ea069206.js';
import './access-control.86021a9b.js';
import './index.77883a3f.js';
var s =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/api-groups/index.tsx';
const { Title: ae, Text: ne } = se,
  { Row: me, Col: P } = te,
  T = { groupCode: '', groupName: '' };
function ce(t, u, r) {
  const c = [t.groupCode, t.groupName]
    .map((n) => (n == null ? void 0 : n.trim()))
    .filter(Boolean)
    .join(' ');
  return { page: u, pageSize: r, keyword: c || void 0 };
}
function de(t) {
  const [u] = a.useForm(),
    r = () => {
      t.onSearch(u.getFieldsValue());
    },
    c = () => {
      u.resetFields(), t.onSearch(C({}, T));
    };
  return e.exports.jsxDEV(
    'div',
    {
      className: p['search-form-wrapper'],
      children: [
        e.exports.jsxDEV(
          a,
          {
            form: u,
            initialValues: T,
            className: p['search-form'],
            labelAlign: 'left',
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
            children: e.exports.jsxDEV(
              me,
              {
                gutter: 24,
                children: [
                  e.exports.jsxDEV(
                    P,
                    {
                      span: 8,
                      children: e.exports.jsxDEV(
                        a.Item,
                        {
                          label: '\u5206\u7EC4\u7F16\u7801',
                          field: 'groupCode',
                          children: e.exports.jsxDEV(
                            d,
                            {
                              allowClear: !0,
                              placeholder:
                                '\u8BF7\u8F93\u5165\u5206\u7EC4\u7F16\u7801',
                            },
                            void 0,
                            !1,
                            { fileName: s, lineNumber: 90, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 89, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 88, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    P,
                    {
                      span: 8,
                      children: e.exports.jsxDEV(
                        a.Item,
                        {
                          label: '\u5206\u7EC4\u540D\u79F0',
                          field: 'groupName',
                          children: e.exports.jsxDEV(
                            d,
                            {
                              allowClear: !0,
                              placeholder:
                                '\u8BF7\u8F93\u5165\u5206\u7EC4\u540D\u79F0',
                            },
                            void 0,
                            !1,
                            { fileName: s, lineNumber: 95, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 94, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 93, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 87, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 79, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: p['right-button'],
            children: [
              e.exports.jsxDEV(
                m,
                {
                  type: 'primary',
                  icon: e.exports.jsxDEV(
                    ie,
                    {},
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 101, columnNumber: 38 },
                    this
                  ),
                  onClick: r,
                  children: '\u67E5\u8BE2',
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 101, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                m,
                {
                  icon: e.exports.jsxDEV(
                    y,
                    {},
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 104, columnNumber: 23 },
                    this
                  ),
                  onClick: c,
                  children: '\u91CD\u7F6E',
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 104, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: s, lineNumber: 100, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: s, lineNumber: 78, columnNumber: 5 },
    this
  );
}
function ve() {
  const [t] = a.useForm(),
    [u, r] = o.exports.useState([]),
    [c, n] = o.exports.useState(!1),
    [N, D] = o.exports.useState(1),
    [x, k] = o.exports.useState(10),
    [F, z] = o.exports.useState(0),
    L = o.exports.useMemo(
      () => ({
        sizeCanChange: !0,
        showTotal: !0,
        pageSize: x,
        current: N,
        total: F,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [N, x, F]
    ),
    [v, M] = o.exports.useState({}),
    [R, f] = o.exports.useState(!1),
    [h, g] = o.exports.useState(null),
    [G, E] = o.exports.useState(0);
  o.exports.useEffect(() => {
    let i = !1;
    return (
      n(!0),
      ue(ce(v, N, x))
        .then((l) => {
          i || (r(l.list || []), z(l.total || 0));
        })
        .finally(() => !i && n(!1)),
      () => {
        i = !0;
      }
    );
  }, [N, x, v, G]);
  const O = (i) => {
      D(1), M(i);
    },
    _ = (i) => {
      D((l) => {
        var b;
        return (b = i.current) != null ? b : l;
      }),
        k((l) => (i.pageSize != null ? Number(i.pageSize) : l));
    },
    U = o.exports.useMemo(
      () => [
        { title: 'ID', dataIndex: 'id', width: 72 },
        {
          title: '\u5206\u7EC4\u7F16\u7801',
          dataIndex: 'groupCode',
          width: 220,
          render: (i) =>
            i
              ? e.exports.jsxDEV(
                  ne,
                  { copyable: !0, children: i },
                  void 0,
                  !1,
                  { fileName: s, lineNumber: 173, columnNumber: 19 },
                  this
                )
              : '\u2014',
        },
        {
          title: '\u5206\u7EC4\u540D\u79F0',
          dataIndex: 'groupName',
          width: 180,
        },
        {
          title: '\u63CF\u8FF0',
          dataIndex: 'description',
          width: 280,
          ellipsis: !0,
          render: (i) => i || '\u2014',
        },
        {
          title: '\u6700\u540E\u64CD\u4F5C\u4EBA',
          dataIndex: 'operatorUsername',
          width: 120,
          ellipsis: !0,
          render: (i) => (i == null ? void 0 : i.trim()) || '\u2014',
        },
        {
          title: '\u521B\u5EFA\u65F6\u95F4',
          dataIndex: 'createdAt',
          width: 168,
          render: B,
        },
        {
          title: '\u66F4\u65B0\u65F6\u95F4',
          dataIndex: 'updatedAt',
          width: 168,
          render: B,
        },
        {
          title: '\u64CD\u4F5C',
          dataIndex: 'operations',
          width: 160,
          fixed: 'right',
          headerCellStyle: { paddingLeft: '12px' },
          render: (i, l) =>
            e.exports.jsxDEV(
              w,
              {
                className: p.operations,
                size: 10,
                wrap: !0,
                children: [
                  e.exports.jsxDEV(
                    m,
                    {
                      type: 'text',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        $,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 213, columnNumber: 21 },
                        this
                      ),
                      onClick: () => {
                        g(l), t.setFieldsValue(l), f(!0);
                      },
                      children: '\u7F16\u8F91',
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 210, columnNumber: 13 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m,
                    {
                      type: 'text',
                      status: 'danger',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        W,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 226, columnNumber: 21 },
                        this
                      ),
                      onClick: () =>
                        A.confirm({
                          title: '\u5220\u9664 API \u5206\u7EC4',
                          content: `\u786E\u8BA4\u5220\u9664 ${l.groupCode}\uFF1F`,
                          onOk: async () => {
                            await re(l.id),
                              j.success('API \u5206\u7EC4\u5DF2\u5220\u9664'),
                              E((b) => b + 1);
                          },
                        }),
                      children: '\u5220\u9664',
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 222, columnNumber: 13 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 209, columnNumber: 11 },
              this
            ),
        },
      ],
      [t]
    ),
    q = async () => {
      const i = await t.validate();
      h
        ? (await le(I(C({}, i), { id: h.id })),
          j.success('API \u5206\u7EC4\u5DF2\u66F4\u65B0'))
        : (await oe(i), j.success('API \u5206\u7EC4\u5DF2\u65B0\u589E')),
        f(!1),
        E((l) => l + 1);
    };
  return e.exports.jsxDEV(
    X,
    {
      children: [
        e.exports.jsxDEV(
          ae,
          { heading: 6, children: 'API \u5206\u7EC4\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: s, lineNumber: 263, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          de,
          { onSearch: O },
          void 0,
          !1,
          { fileName: s, lineNumber: 264, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: p['button-group'],
            children: [
              e.exports.jsxDEV(
                w,
                {
                  children: e.exports.jsxDEV(
                    m,
                    {
                      type: 'primary',
                      icon: e.exports.jsxDEV(
                        Y,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 269, columnNumber: 19 },
                        this
                      ),
                      onClick: () => {
                        g(null), t.resetFields(), f(!0);
                      },
                      children: '\u65B0\u589E\u5206\u7EC4',
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 267, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 266, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                m,
                {
                  icon: e.exports.jsxDEV(
                    y,
                    {},
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 279, columnNumber: 23 },
                    this
                  ),
                  onClick: () => E((i) => i + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 279, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: s, lineNumber: 265, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          ee,
          {
            rowKey: 'id',
            loading: c,
            columns: U,
            data: u,
            border: !0,
            scroll: { x: 1100 },
            pagination: L,
            onChange: _,
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 283, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          A,
          {
            title: h
              ? '\u7F16\u8F91 API \u5206\u7EC4'
              : '\u65B0\u589E API \u5206\u7EC4',
            visible: R,
            onOk: q,
            onCancel: () => f(!1),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              a,
              {
                form: t,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  e.exports.jsxDEV(
                    a.Item,
                    {
                      label: '\u5206\u7EC4\u7F16\u7801',
                      field: 'groupCode',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        d,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 312, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 307, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    a.Item,
                    {
                      label: '\u5206\u7EC4\u540D\u79F0',
                      field: 'groupName',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        d,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 319, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 314, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    a.Item,
                    {
                      label: '\u63CF\u8FF0',
                      field: 'description',
                      children: e.exports.jsxDEV(
                        d.TextArea,
                        { rows: 3 },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 322, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 321, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 300, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 293, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: s, lineNumber: 262, columnNumber: 5 },
    this
  );
}
export { ve as default };
