var L = Object.defineProperty,
  O = Object.defineProperties;
var G = Object.getOwnPropertyDescriptors;
var E = Object.getOwnPropertySymbols;
var U = Object.prototype.hasOwnProperty,
  R = Object.prototype.propertyIsEnumerable;
var F = (i, t, l) =>
    t in i
      ? L(i, t, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[t] = l),
  B = (i, t) => {
    for (var l in t || (t = {})) U.call(t, l) && F(i, l, t[l]);
    if (E) for (var l of E(t)) R.call(t, l) && F(i, l, t[l]);
    return i;
  },
  C = (i, t) => O(i, G(t));
import {
  ae as r,
  r as a,
  j as e,
  S as q,
  B as d,
  aP as K,
  aQ as _,
  aR as V,
  M as b,
  at as H,
  af as n,
  Z as Q,
  aS as Z,
  aL as $,
  H as I,
  T as J,
} from './vendor.f50a67ab.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  m as W,
  n as X,
  o as Y,
  p as ee,
} from './access-permission.5cb0b950.js';
import { f as se } from './accessControl.18599d4a.js';
import { s as h } from './index.module.94e2fe99.js';
import './access-control.b0193dd4.js';
import './index.1708e48b.js';
var s =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/permissions/index.tsx';
const { Title: ie } = J;
function pe() {
  const [i] = r.useForm(),
    [t, l] = a.exports.useState([]),
    [g, j] = a.exports.useState(!1),
    [c, v] = a.exports.useState(1),
    [N, w] = a.exports.useState(10),
    [S, y] = a.exports.useState(0),
    [p, P] = a.exports.useState(''),
    [T, m] = a.exports.useState(!1),
    [x, D] = a.exports.useState(null),
    [A, f] = a.exports.useState(0);
  a.exports.useEffect(() => {
    let u = !1;
    return (
      j(!0),
      W({
        page: c,
        pageSize: N,
        permissionCode: p || void 0,
        permissionName: p || void 0,
      })
        .then((o) => {
          u || (l(o.list || []), y(o.total || 0));
        })
        .finally(() => !u && j(!1)),
      () => {
        u = !0;
      }
    );
  }, [c, N, p, A]);
  const k = a.exports.useMemo(
      () => [
        { title: 'ID', dataIndex: 'id', width: 80 },
        {
          title: '\u6743\u9650\u7F16\u7801',
          dataIndex: 'permissionCode',
          width: 220,
        },
        {
          title: '\u6743\u9650\u540D\u79F0',
          dataIndex: 'permissionName',
          width: 180,
        },
        { title: '\u7C7B\u578B', dataIndex: 'permissionType', width: 120 },
        {
          title: '\u5BF9\u8C61\u7C7B\u578B',
          dataIndex: 'objectType',
          width: 120,
        },
        { title: '\u5BF9\u8C61 ID', dataIndex: 'objectId', width: 100 },
        { title: '\u63CF\u8FF0', dataIndex: 'description', ellipsis: !0 },
        {
          title: '\u66F4\u65B0\u65F6\u95F4',
          dataIndex: 'updatedAt',
          width: 170,
          render: se,
        },
        {
          title: '\u64CD\u4F5C',
          dataIndex: 'operations',
          width: 160,
          fixed: 'right',
          render: (u, o) =>
            e.exports.jsxDEV(
              q,
              {
                className: h.operations,
                children: [
                  e.exports.jsxDEV(
                    d,
                    {
                      type: 'text',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        K,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 91, columnNumber: 21 },
                        this
                      ),
                      onClick: () => {
                        D(o), i.setFieldsValue(o), m(!0);
                      },
                      children: '\u7F16\u8F91',
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 88, columnNumber: 13 },
                    this
                  ),
                  e.exports.jsxDEV(
                    d,
                    {
                      type: 'text',
                      status: 'danger',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        _,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 104, columnNumber: 21 },
                        this
                      ),
                      onClick: () =>
                        V.confirm({
                          title: '\u5220\u9664\u6743\u9650\u70B9',
                          content: `\u786E\u8BA4\u5220\u9664 ${o.permissionCode}\uFF1F`,
                          onOk: async () => {
                            await X(o.id),
                              b.success('\u6743\u9650\u70B9\u5DF2\u5220\u9664'),
                              f((z) => z + 1);
                          },
                        }),
                      children: '\u5220\u9664',
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 100, columnNumber: 13 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 87, columnNumber: 11 },
              this
            ),
        },
      ],
      [i]
    ),
    M = async () => {
      const u = await i.validate();
      x
        ? (await Y(C(B({}, u), { id: x.id })),
          b.success('\u6743\u9650\u70B9\u5DF2\u66F4\u65B0'))
        : (await ee(u), b.success('\u6743\u9650\u70B9\u5DF2\u65B0\u589E')),
        m(!1),
        f((o) => o + 1);
    };
  return e.exports.jsxDEV(
    H,
    {
      children: [
        e.exports.jsxDEV(
          ie,
          { heading: 6, children: '\u6743\u9650\u70B9\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: s, lineNumber: 141, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: h['search-row'],
            children: [
              e.exports.jsxDEV(
                n.Search,
                {
                  allowClear: !0,
                  placeholder:
                    '\u641C\u7D22\u6743\u9650\u7F16\u7801\u6216\u540D\u79F0',
                  onSearch: (u) => {
                    v(1), P(u);
                  },
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 143, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                d,
                {
                  icon: e.exports.jsxDEV(
                    Q,
                    {},
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 151, columnNumber: 23 },
                    this
                  ),
                  onClick: () => f((u) => u + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 151, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: s, lineNumber: 142, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: h['button-group'],
            children: e.exports.jsxDEV(
              d,
              {
                type: 'primary',
                icon: e.exports.jsxDEV(
                  Z,
                  {},
                  void 0,
                  !1,
                  { fileName: s, lineNumber: 158, columnNumber: 17 },
                  this
                ),
                onClick: () => {
                  D(null),
                    i.resetFields(),
                    i.setFieldsValue({ activeStatus: 1 }),
                    m(!0);
                },
                children: '\u65B0\u589E\u6743\u9650\u70B9',
              },
              void 0,
              !1,
              { fileName: s, lineNumber: 156, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 155, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          $,
          {
            rowKey: 'id',
            loading: g,
            columns: k,
            data: t,
            scroll: { x: 1200 },
            pagination: {
              current: c,
              pageSize: N,
              total: S,
              showTotal: !0,
              sizeCanChange: !0,
            },
            onChange: (u) => {
              v(u.current || 1), w(u.pageSize || 10);
            },
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 169, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          V,
          {
            title: x
              ? '\u7F16\u8F91\u6743\u9650\u70B9'
              : '\u65B0\u589E\u6743\u9650\u70B9',
            visible: T,
            onOk: M,
            onCancel: () => m(!1),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              r,
              {
                form: i,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: '\u6743\u9650\u7F16\u7801',
                      field: 'permissionCode',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 206, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 201, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: '\u6743\u9650\u540D\u79F0',
                      field: 'permissionName',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 213, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 208, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: '\u6743\u9650\u7C7B\u578B',
                      field: 'permissionType',
                      children: e.exports.jsxDEV(
                        I,
                        {
                          options: [
                            { label: '\u83DC\u5355', value: 'MENU' },
                            { label: 'API', value: 'API' },
                            { label: '\u5168\u5C40', value: 'GLOBAL' },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 216, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 215, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: '\u5BF9\u8C61\u7C7B\u578B',
                      field: 'objectType',
                      children: e.exports.jsxDEV(
                        I,
                        {
                          options: [
                            { label: 'MENU', value: 'MENU' },
                            { label: 'API', value: 'API' },
                            { label: 'GLOBAL', value: 'GLOBAL' },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 225, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 224, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: '\u5BF9\u8C61 ID',
                      field: 'objectId',
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 234, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 233, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: '\u63CF\u8FF0',
                      field: 'description',
                      children: e.exports.jsxDEV(
                        n.TextArea,
                        { rows: 3 },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 237, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 236, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 194, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 187, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: s, lineNumber: 140, columnNumber: 5 },
    this
  );
}
export { pe as default };
