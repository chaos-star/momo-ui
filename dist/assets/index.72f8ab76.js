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
} from './vendor.3ac9a823.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  h as W,
  i as X,
  j as Y,
  k as ee,
} from './access-permission.3a0f8dc9.js';
import { f as se } from './accessControl.18599d4a.js';
import { s as h } from './index.module.94e2fe99.js';
import './access-control.f393622f.js';
import './index.2a9369a5.js';
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
                        { fileName: s, lineNumber: 41, columnNumber: 172 },
                        this
                      ),
                      onClick: () => {
                        D(o), i.setFieldsValue(o), m(!0);
                      },
                      children: '\u7F16\u8F91',
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 41, columnNumber: 133 },
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
                        { fileName: s, lineNumber: 41, columnNumber: 340 },
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
                    { fileName: s, lineNumber: 41, columnNumber: 285 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 41, columnNumber: 96 },
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
          { fileName: s, lineNumber: 58, columnNumber: 5 },
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
                { fileName: s, lineNumber: 59, columnNumber: 43 },
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
                    { fileName: s, lineNumber: 59, columnNumber: 160 },
                    this
                  ),
                  onClick: () => f((u) => u + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 59, columnNumber: 146 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: s, lineNumber: 59, columnNumber: 5 },
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
                  { fileName: s, lineNumber: 60, columnNumber: 74 },
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
              { fileName: s, lineNumber: 60, columnNumber: 45 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 60, columnNumber: 5 },
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
          { fileName: s, lineNumber: 61, columnNumber: 5 },
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
                        { fileName: s, lineNumber: 64, columnNumber: 85 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 64, columnNumber: 9 },
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
                        { fileName: s, lineNumber: 65, columnNumber: 85 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 65, columnNumber: 9 },
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
                        { fileName: s, lineNumber: 66, columnNumber: 56 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 66, columnNumber: 9 },
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
                        { fileName: s, lineNumber: 67, columnNumber: 52 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 67, columnNumber: 9 },
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
                        { fileName: s, lineNumber: 68, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 68, columnNumber: 9 },
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
                        { fileName: s, lineNumber: 69, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 69, columnNumber: 9 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 63, columnNumber: 7 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 62, columnNumber: 5 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: s, lineNumber: 57, columnNumber: 10 },
    this
  );
}
export { pe as default };
