var W = Object.defineProperty,
  X = Object.defineProperties;
var ee = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var se = Object.prototype.hasOwnProperty,
  ie = Object.prototype.propertyIsEnumerable;
var T = (t, i, r) =>
    i in t
      ? W(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[i] = r),
  D = (t, i) => {
    for (var r in i || (i = {})) se.call(i, r) && T(t, r, i[r]);
    if (y) for (var r of y(i)) ie.call(i, r) && T(t, r, i[r]);
    return t;
  },
  w = (t, i) => X(t, ee(i));
import {
  ae as u,
  r as o,
  j as e,
  S as P,
  B as m,
  aP as le,
  aQ as ue,
  aR as A,
  M as C,
  at as te,
  af as n,
  H as x,
  aT as oe,
  Z as M,
  aS as re,
  aL as ae,
  T as me,
  aH as ne,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  z as de,
  A as ce,
  B as Ne,
  C as pe,
} from './access-permission.04fba575.js';
import { f as be } from './accessControl.941fcf7e.js';
import { s as c } from './index.module.ea069206.js';
import './access-control.86021a9b.js';
import './index.77883a3f.js';
var fe = { 'search-form': '_search-form_18j6z_1' },
  s =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/permissions/index.tsx';
const { Title: xe } = me,
  { Row: he, Col: h } = ne,
  O = {
    permissionCode: '',
    permissionName: '',
    permissionType: void 0,
    objectType: void 0,
  },
  z = [
    { label: '\u83DC\u5355', value: 'MENU' },
    { label: 'API', value: 'API' },
    { label: '\u5168\u5C40', value: 'GLOBAL' },
  ],
  k = [
    { label: 'MENU', value: 'MENU' },
    { label: 'API', value: 'API' },
    { label: 'GLOBAL', value: 'GLOBAL' },
  ];
function ye() {
  const [t] = u.useForm(),
    [i] = u.useForm(),
    [r, _] = o.exports.useState([]),
    [R, V] = o.exports.useState(!1),
    [N, v] = o.exports.useState(1),
    [p, L] = o.exports.useState(10),
    [F, G] = o.exports.useState(0),
    [d, B] = o.exports.useState({}),
    [U, b] = o.exports.useState(!1),
    [j, I] = o.exports.useState(null),
    [H, E] = o.exports.useState(0),
    q = o.exports.useMemo(
      () => ({
        current: N,
        pageSize: p,
        total: F,
        showTotal: !0,
        sizeCanChange: !0,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [N, p, F]
    );
  o.exports.useEffect(() => {
    var a, f;
    let l = !1;
    return (
      V(!0),
      de({
        page: N,
        pageSize: p,
        permissionCode:
          ((a = d.permissionCode) == null ? void 0 : a.trim()) || void 0,
        permissionName:
          ((f = d.permissionName) == null ? void 0 : f.trim()) || void 0,
        permissionType: d.permissionType || void 0,
        objectType: d.objectType || void 0,
      })
        .then((S) => {
          l || (_(S.list || []), G(S.total || 0));
        })
        .finally(() => !l && V(!1)),
      () => {
        l = !0;
      }
    );
  }, [N, p, d, H]);
  const J = () => {
      I(null), i.resetFields(), i.setFieldsValue({ activeStatus: 1 }), b(!0);
    },
    g = o.exports.useCallback(
      (l) => {
        I(l), i.setFieldsValue(l), b(!0);
      },
      [i]
    ),
    Y = o.exports.useMemo(
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
          render: be,
        },
        {
          title: '\u64CD\u4F5C',
          dataIndex: 'operations',
          width: 160,
          fixed: 'right',
          render: (l, a) =>
            e.exports.jsxDEV(
              P,
              {
                className: c.operations,
                children: [
                  e.exports.jsxDEV(
                    m,
                    {
                      type: 'text',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        le,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 155, columnNumber: 21 },
                        this
                      ),
                      onClick: () => g(a),
                      children: '\u7F16\u8F91',
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 152, columnNumber: 13 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m,
                    {
                      type: 'text',
                      status: 'danger',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        ue,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 164, columnNumber: 21 },
                        this
                      ),
                      onClick: () =>
                        A.confirm({
                          title: '\u5220\u9664\u6743\u9650\u70B9',
                          content: `\u786E\u8BA4\u5220\u9664 ${a.permissionCode}\uFF1F`,
                          onOk: async () => {
                            await ce(a.id),
                              C.success('\u6743\u9650\u70B9\u5DF2\u5220\u9664'),
                              E((f) => f + 1);
                          },
                        }),
                      children: '\u5220\u9664',
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 160, columnNumber: 13 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 151, columnNumber: 11 },
              this
            ),
        },
      ],
      [g]
    ),
    K = () => {
      v(1), B(t.getFieldsValue());
    },
    Q = () => {
      t.resetFields(), v(1), B(D({}, O));
    },
    Z = async () => {
      const l = await i.validate();
      j
        ? (await Ne(w(D({}, l), { id: j.id })),
          C.success('\u6743\u9650\u70B9\u5DF2\u66F4\u65B0'))
        : (await pe(l), C.success('\u6743\u9650\u70B9\u5DF2\u65B0\u589E')),
        b(!1),
        E((a) => a + 1);
    },
    $ = (l) => {
      v(l.current || 1), L(l.pageSize || 10);
    };
  return e.exports.jsxDEV(
    te,
    {
      children: [
        e.exports.jsxDEV(
          xe,
          { heading: 6, children: '\u6743\u9650\u70B9\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: s, lineNumber: 217, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: c['search-form-wrapper'],
            children: [
              e.exports.jsxDEV(
                u,
                {
                  form: t,
                  initialValues: O,
                  className: fe['search-form'],
                  labelAlign: 'left',
                  labelCol: { span: 5 },
                  wrapperCol: { span: 19 },
                  children: e.exports.jsxDEV(
                    he,
                    {
                      gutter: 24,
                      children: [
                        e.exports.jsxDEV(
                          h,
                          {
                            span: 8,
                            children: e.exports.jsxDEV(
                              u.Item,
                              {
                                label: '\u6743\u9650\u7F16\u7801',
                                field: 'permissionCode',
                                children: e.exports.jsxDEV(
                                  n,
                                  {
                                    allowClear: !0,
                                    placeholder:
                                      '\u8BF7\u8F93\u5165\u6743\u9650\u7F16\u7801',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: s,
                                    lineNumber: 230,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: s,
                                lineNumber: 229,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 228, columnNumber: 13 },
                          this
                        ),
                        e.exports.jsxDEV(
                          h,
                          {
                            span: 8,
                            children: e.exports.jsxDEV(
                              u.Item,
                              {
                                label: '\u6743\u9650\u540D\u79F0',
                                field: 'permissionName',
                                children: e.exports.jsxDEV(
                                  n,
                                  {
                                    allowClear: !0,
                                    placeholder:
                                      '\u8BF7\u8F93\u5165\u6743\u9650\u540D\u79F0',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: s,
                                    lineNumber: 235,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: s,
                                lineNumber: 234,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 233, columnNumber: 13 },
                          this
                        ),
                        e.exports.jsxDEV(
                          h,
                          {
                            span: 8,
                            children: e.exports.jsxDEV(
                              u.Item,
                              {
                                label: '\u6743\u9650\u7C7B\u578B',
                                field: 'permissionType',
                                children: e.exports.jsxDEV(
                                  x,
                                  {
                                    allowClear: !0,
                                    options: z,
                                    placeholder: '\u5168\u90E8',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: s,
                                    lineNumber: 240,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: s,
                                lineNumber: 239,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 238, columnNumber: 13 },
                          this
                        ),
                        e.exports.jsxDEV(
                          h,
                          {
                            span: 8,
                            children: e.exports.jsxDEV(
                              u.Item,
                              {
                                label: '\u5BF9\u8C61\u7C7B\u578B',
                                field: 'objectType',
                                children: e.exports.jsxDEV(
                                  x,
                                  {
                                    allowClear: !0,
                                    options: k,
                                    placeholder: '\u5168\u90E8',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: s,
                                    lineNumber: 249,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: s,
                                lineNumber: 248,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 247, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: s, lineNumber: 227, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 219, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                'div',
                {
                  className: c['right-button'],
                  children: [
                    e.exports.jsxDEV(
                      m,
                      {
                        type: 'primary',
                        icon: e.exports.jsxDEV(
                          oe,
                          {},
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 259, columnNumber: 40 },
                          this
                        ),
                        onClick: K,
                        children: '\u67E5\u8BE2',
                      },
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 259, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      m,
                      {
                        icon: e.exports.jsxDEV(
                          M,
                          {},
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 262, columnNumber: 25 },
                          this
                        ),
                        onClick: Q,
                        children: '\u91CD\u7F6E',
                      },
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 262, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: s, lineNumber: 258, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: s, lineNumber: 218, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: c['button-group'],
            children: [
              e.exports.jsxDEV(
                P,
                {
                  children: e.exports.jsxDEV(
                    m,
                    {
                      type: 'primary',
                      icon: e.exports.jsxDEV(
                        re,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 269, columnNumber: 40 },
                        this
                      ),
                      onClick: J,
                      children: '\u65B0\u589E\u6743\u9650\u70B9',
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 269, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 268, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                m,
                {
                  icon: e.exports.jsxDEV(
                    M,
                    {},
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 273, columnNumber: 23 },
                    this
                  ),
                  onClick: () => E((l) => l + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 273, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: s, lineNumber: 267, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          ae,
          {
            rowKey: 'id',
            loading: R,
            columns: Y,
            data: r,
            border: !0,
            scroll: { x: 1200 },
            pagination: q,
            onChange: $,
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 277, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          A,
          {
            title: j
              ? '\u7F16\u8F91\u6743\u9650\u70B9'
              : '\u65B0\u589E\u6743\u9650\u70B9',
            visible: U,
            onOk: Z,
            onCancel: () => b(!1),
            unmountOnExit: !0,
            style: { width: 560 },
            children: e.exports.jsxDEV(
              u,
              {
                form: i,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                className: c['search-form'],
                children: [
                  e.exports.jsxDEV(
                    u.Item,
                    {
                      label: '\u6743\u9650\u7F16\u7801',
                      field: 'permissionCode',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 308, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 303, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    u.Item,
                    {
                      label: '\u6743\u9650\u540D\u79F0',
                      field: 'permissionName',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 315, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 310, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    u.Item,
                    {
                      label: '\u6743\u9650\u7C7B\u578B',
                      field: 'permissionType',
                      children: e.exports.jsxDEV(
                        x,
                        { options: z },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 318, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 317, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    u.Item,
                    {
                      label: '\u5BF9\u8C61\u7C7B\u578B',
                      field: 'objectType',
                      children: e.exports.jsxDEV(
                        x,
                        { options: k },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 321, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 320, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    u.Item,
                    {
                      label: '\u5BF9\u8C61 ID',
                      field: 'objectId',
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 324, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 323, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    u.Item,
                    {
                      label: '\u63CF\u8FF0',
                      field: 'description',
                      children: e.exports.jsxDEV(
                        n.TextArea,
                        { rows: 3, autoSize: { minRows: 3, maxRows: 5 } },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 327, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 326, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 295, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 287, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: s, lineNumber: 216, columnNumber: 5 },
    this
  );
}
export { ye as default };
