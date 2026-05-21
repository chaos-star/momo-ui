var ue = Object.defineProperty,
  se = Object.defineProperties;
var ie = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var le = Object.prototype.hasOwnProperty,
  re = Object.prototype.propertyIsEnumerable;
var g = (l, s, o) =>
    s in l
      ? ue(l, s, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (l[s] = o),
  C = (l, s) => {
    for (var o in s || (s = {})) le.call(s, o) && g(l, o, s[o]);
    if (S) for (var o of S(s)) re.call(s, o) && g(l, o, s[o]);
    return l;
  },
  O = (l, s) => se(l, ie(s));
import {
  ae as a,
  r,
  j as e,
  S as k,
  B as m,
  aP as te,
  aQ as oe,
  aR as L,
  M as j,
  at as ae,
  H as c,
  aT as ne,
  Z as G,
  aS as me,
  aL as ce,
  af as de,
  T as pe,
  aH as Ne,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  s as V,
  v as fe,
  w as he,
  x as xe,
  y as be,
} from './access-permission.04fba575.js';
import { s as n } from './index.module.ea069206.js';
import './access-control.86021a9b.js';
import './index.77883a3f.js';
const Ee = '_tip_ybxvu_1';
var Fe = { tip: Ee },
  u =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/permission-relations/index.tsx';
const { Title: De, Text: ve } = pe,
  { Row: Ce, Col: T } = Ne,
  M = [
    { label: 'API', value: 'API' },
    { label: '\u9875\u9762\u5143\u7D20', value: 'ELEMENT' },
  ],
  je = [
    {
      label: '\u52FE\u9009\u7236\u6743\u9650\u65F6\u81EA\u52A8\u6388\u6743',
      value: 1,
    },
    { label: '\u9700\u624B\u52A8\u52FE\u9009\u5B50\u6743\u9650', value: 2 },
  ],
  R = { parentPermissionId: void 0, childGroup: void 0 };
function P(l = []) {
  return l.map((s) => ({
    label: `${s.permissionName || s.permissionCode} (${s.permissionCode})`,
    value: s.id,
  }));
}
function _(l, s) {
  var N, f;
  return String(
    (f = (N = s == null ? void 0 : s.props) == null ? void 0 : N.children) !=
      null
      ? f
      : ''
  )
    .toLowerCase()
    .includes(l.toLowerCase());
}
function ke() {
  const [l] = a.useForm(),
    [s] = a.useForm(),
    [o, N] = r.exports.useState([]),
    [f, A] = r.exports.useState(!1),
    [d, I] = r.exports.useState({}),
    [z, h] = r.exports.useState(!1),
    [p, b] = r.exports.useState(null),
    [B, $] = r.exports.useState([]),
    [E, q] = r.exports.useState([]),
    [F, H] = r.exports.useState([]),
    D = a.useWatch('childGroup', s),
    [U, J] = r.exports.useState(0),
    x = r.exports.useCallback(() => J((i) => i + 1), []),
    w = r.exports.useCallback(async () => {
      const [i, t, v] = await Promise.all([
        V({ objectType: 'MENU', permissionType: 'MENU' }),
        V({ objectType: 'API', permissionType: 'API' }),
        V({ objectType: 'ELEMENT' }),
      ]);
      $(P(i)), q(P(t)), H(P(v));
    }, []),
    K = r.exports.useMemo(
      () => (D === 'ELEMENT' ? F : D === 'API' ? E : [...E, ...F]),
      [D, E, F]
    ),
    Q = r.exports.useMemo(
      () => ({
        showTotal: !0,
        sizeCanChange: !0,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
        defaultPageSize: 10,
      }),
      []
    );
  r.exports.useEffect(() => {
    w();
  }, [w]),
    r.exports.useEffect(() => {
      let i = !1;
      A(!0);
      const t = {};
      return (
        d.parentPermissionId != null &&
          (t.parentPermissionId = d.parentPermissionId),
        d.childGroup && (t.childGroup = d.childGroup),
        fe(t)
          .then((v) => !i && N(v || []))
          .finally(() => !i && A(!1)),
        () => {
          i = !0;
        }
      );
    }, [d, U]);
  const W = () => {
      b(null),
        s.resetFields(),
        s.setFieldsValue({
          relationType: 'CHILD',
          childGroup: 'API',
          autoGrant: 2,
          sortOrder: 100,
          activeStatus: 1,
        }),
        h(!0);
    },
    y = r.exports.useCallback(
      (i) => {
        b(i), s.setFieldsValue(i), h(!0);
      },
      [s]
    ),
    Z = r.exports.useMemo(
      () => [
        { title: 'ID', dataIndex: 'id', width: 70 },
        {
          title: '\u7236\u6743\u9650\uFF08\u83DC\u5355\uFF09',
          width: 220,
          render: (i, t) =>
            `${t.parentPermissionName || '-'} (${
              t.parentPermissionCode || t.parentPermissionId
            })`,
        },
        {
          title: '\u5B50\u6743\u9650',
          width: 220,
          render: (i, t) =>
            `${t.childPermissionName || '-'} (${
              t.childPermissionCode || t.childPermissionId
            })`,
        },
        { title: '\u5206\u7EC4', dataIndex: 'childGroup', width: 90 },
        {
          title: '\u81EA\u52A8\u6388\u6743',
          dataIndex: 'autoGrant',
          width: 110,
          render: (i) => (i === 1 ? '\u81EA\u52A8' : '\u624B\u52A8'),
        },
        { title: '\u6392\u5E8F', dataIndex: 'sortOrder', width: 70 },
        {
          title: '\u64CD\u4F5C',
          width: 140,
          fixed: 'right',
          render: (i, t) =>
            e.exports.jsxDEV(
              k,
              {
                className: n.operations,
                children: [
                  e.exports.jsxDEV(
                    m,
                    {
                      type: 'text',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        te,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 213, columnNumber: 21 },
                        this
                      ),
                      onClick: () => y(t),
                      children: '\u7F16\u8F91',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 210, columnNumber: 13 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m,
                    {
                      type: 'text',
                      status: 'danger',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        oe,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 222, columnNumber: 21 },
                        this
                      ),
                      onClick: () =>
                        L.confirm({
                          title: '\u5220\u9664\u5173\u7CFB',
                          content:
                            '\u786E\u8BA4\u5220\u9664\u8BE5\u6743\u9650\u9644\u5C5E\u5173\u7CFB\uFF1F',
                          onOk: async () => {
                            await he(t.id),
                              j.success('\u5DF2\u5220\u9664'),
                              x();
                          },
                        }),
                      children: '\u5220\u9664',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 218, columnNumber: 13 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 209, columnNumber: 11 },
              this
            ),
        },
      ],
      [y, x]
    ),
    X = () => {
      I(l.getFieldsValue());
    },
    Y = () => {
      l.resetFields(), I(C({}, R));
    },
    ee = async () => {
      const i = await s.validate();
      (p == null ? void 0 : p.id)
        ? (await xe(O(C({}, i), { id: p.id })), j.success('\u5DF2\u66F4\u65B0'))
        : (await be(i), j.success('\u5DF2\u521B\u5EFA')),
        h(!1),
        b(null),
        x();
    };
  return e.exports.jsxDEV(
    ae,
    {
      children: [
        e.exports.jsxDEV(
          De,
          { heading: 6, children: '\u6743\u9650\u5173\u7CFB\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: u, lineNumber: 269, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          ve,
          {
            type: 'secondary',
            className: Fe.tip,
            children:
              '\u5728\u6B64\u58F0\u660E\u67D0\u83DC\u5355\u662F\u5426\u9700\u8981\u9644\u5C5E\u6743\u9650\uFF1A\u914D\u7F6E\u7236\u83DC\u5355\u4E0E API/\u9875\u9762\u5143\u7D20\u5B50\u6743\u9650\u7684\u5173\u7CFB\uFF0C\u4EE5\u53CA\u89D2\u8272\u6388\u6743\u65F6\u662F\u5426\u81EA\u52A8\u5E26\u51FA\uFF08auto_grant\uFF09\u3002 \u67D0\u83DC\u5355\u672A\u914D\u7F6E\u4EFB\u4F55\u5173\u7CFB\u65F6\uFF0C\u8868\u793A\u4EC5\u9700\u83DC\u5355\u6743\u9650\u672C\u8EAB\uFF0C\u4E0D\u9700\u8981\u5176\u4ED6 API/\u5143\u7D20\u6743\u9650\u3002API/\u83DC\u5355\u7BA1\u7406\u4EC5\u7EF4\u62A4\u8D44\u6E90\u4E0E\u6743\u9650\u70B9\uFF0C\u4E0D\u914D\u7F6E\u5173\u7CFB\u3002',
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 270, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: n['search-form-wrapper'],
            children: [
              e.exports.jsxDEV(
                a,
                {
                  form: l,
                  initialValues: R,
                  className: n['search-form'],
                  labelAlign: 'left',
                  labelCol: { span: 5 },
                  wrapperCol: { span: 19 },
                  children: e.exports.jsxDEV(
                    Ce,
                    {
                      gutter: 24,
                      children: [
                        e.exports.jsxDEV(
                          T,
                          {
                            span: 8,
                            children: e.exports.jsxDEV(
                              'div',
                              {
                                className: n.formLikeField,
                                children: [
                                  e.exports.jsxDEV(
                                    'label',
                                    {
                                      className: n.formLikeFieldLabel,
                                      children: '\u7236\u6743\u9650',
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: u,
                                      lineNumber: 288,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  e.exports.jsxDEV(
                                    'div',
                                    {
                                      className: n.formLikeFieldControl,
                                      children: e.exports.jsxDEV(
                                        a.Item,
                                        {
                                          field: 'parentPermissionId',
                                          noStyle: !0,
                                          children: e.exports.jsxDEV(
                                            c,
                                            {
                                              showSearch: !0,
                                              allowClear: !0,
                                              options: B,
                                              placeholder: '\u5168\u90E8',
                                              filterOption: _,
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: u,
                                              lineNumber: 291,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 290,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: u,
                                      lineNumber: 289,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName: u,
                                lineNumber: 287,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: u, lineNumber: 286, columnNumber: 13 },
                          this
                        ),
                        e.exports.jsxDEV(
                          T,
                          {
                            span: 8,
                            children: e.exports.jsxDEV(
                              'div',
                              {
                                className: n.formLikeField,
                                children: [
                                  e.exports.jsxDEV(
                                    'label',
                                    {
                                      className: n.formLikeFieldLabel,
                                      children: '\u5B50\u5206\u7EC4',
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: u,
                                      lineNumber: 304,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  e.exports.jsxDEV(
                                    'div',
                                    {
                                      className: n.formLikeFieldControl,
                                      children: e.exports.jsxDEV(
                                        a.Item,
                                        {
                                          field: 'childGroup',
                                          noStyle: !0,
                                          children: e.exports.jsxDEV(
                                            c,
                                            {
                                              allowClear: !0,
                                              options: M,
                                              placeholder: '\u5168\u90E8',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: u,
                                              lineNumber: 307,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 306,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: u,
                                      lineNumber: 305,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName: u,
                                lineNumber: 303,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: u, lineNumber: 302, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: u, lineNumber: 285, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 277, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                'div',
                {
                  className: n['right-button'],
                  children: [
                    e.exports.jsxDEV(
                      m,
                      {
                        type: 'primary',
                        icon: e.exports.jsxDEV(
                          ne,
                          {},
                          void 0,
                          !1,
                          { fileName: u, lineNumber: 319, columnNumber: 40 },
                          this
                        ),
                        onClick: X,
                        children: '\u67E5\u8BE2',
                      },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 319, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      m,
                      {
                        icon: e.exports.jsxDEV(
                          G,
                          {},
                          void 0,
                          !1,
                          { fileName: u, lineNumber: 322, columnNumber: 25 },
                          this
                        ),
                        onClick: Y,
                        children: '\u91CD\u7F6E',
                      },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 322, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: u, lineNumber: 318, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 276, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: n['button-group'],
            children: [
              e.exports.jsxDEV(
                k,
                {
                  children: e.exports.jsxDEV(
                    m,
                    {
                      type: 'primary',
                      icon: e.exports.jsxDEV(
                        me,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 329, columnNumber: 40 },
                        this
                      ),
                      onClick: W,
                      children: '\u65B0\u589E\u5173\u7CFB',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 329, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 328, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                m,
                {
                  icon: e.exports.jsxDEV(
                    G,
                    {},
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 333, columnNumber: 23 },
                    this
                  ),
                  onClick: x,
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 333, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 327, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          ce,
          {
            rowKey: 'id',
            loading: f,
            columns: Z,
            data: o,
            border: !0,
            scroll: { x: 1200 },
            pagination: Q,
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 337, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          L,
          {
            title: p
              ? '\u7F16\u8F91\u6743\u9650\u5173\u7CFB'
              : '\u65B0\u589E\u6743\u9650\u5173\u7CFB',
            visible: z,
            onOk: ee,
            onCancel: () => h(!1),
            unmountOnExit: !0,
            style: { width: 560 },
            children: e.exports.jsxDEV(
              a,
              {
                form: s,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                className: n['search-form'],
                children: [
                  e.exports.jsxDEV(
                    a.Item,
                    {
                      label: '\u7236\u6743\u9650',
                      field: 'parentPermissionId',
                      rules: [
                        {
                          required: !0,
                          message: '\u8BF7\u9009\u62E9\u7236\u6743\u9650',
                        },
                      ],
                      children: e.exports.jsxDEV(
                        c,
                        {
                          showSearch: !0,
                          allowClear: !0,
                          options: B,
                          placeholder:
                            '\u9009\u62E9\u83DC\u5355\u7C7B\u6743\u9650',
                          filterOption: _,
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 367, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 362, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    a.Item,
                    {
                      label: '\u5B50\u6743\u9650\u5206\u7EC4',
                      field: 'childGroup',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        c,
                        {
                          options: M,
                          onChange: (i) => {
                            s.setFieldValue('childGroup', i),
                              s.setFieldValue('childPermissionId', void 0);
                          },
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 380, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 375, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    a.Item,
                    {
                      label: '\u5B50\u6743\u9650',
                      field: 'childPermissionId',
                      rules: [
                        {
                          required: !0,
                          message: '\u8BF7\u9009\u62E9\u5B50\u6743\u9650',
                        },
                      ],
                      children: e.exports.jsxDEV(
                        c,
                        {
                          showSearch: !0,
                          allowClear: !0,
                          options: K,
                          placeholder:
                            '\u9009\u62E9 API \u6216\u5143\u7D20\u6743\u9650',
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 393, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 388, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    a.Item,
                    {
                      label: '\u81EA\u52A8\u6388\u6743',
                      field: 'autoGrant',
                      rules: [{ required: !0 }],
                      extra:
                        '\u8BBE\u4E3A\u300C\u81EA\u52A8\u300D\u65F6\uFF0C\u89D2\u8272\u52FE\u9009\u83DC\u5355\u5C06\u81EA\u52A8\u52FE\u9009\u8BE5\u5B50\u6743\u9650\u5E76\u5199\u5165\u6388\u6743\u7ED3\u679C',
                      children: e.exports.jsxDEV(
                        c,
                        { options: je },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 406, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 400, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    a.Item,
                    {
                      label: '\u6392\u5E8F',
                      field: 'sortOrder',
                      children: e.exports.jsxDEV(
                        de,
                        { type: 'number' },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 409, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 408, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 354, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 346, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: u, lineNumber: 268, columnNumber: 5 },
    this
  );
}
export { ke as default };
