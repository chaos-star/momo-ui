var X = Object.defineProperty,
  Z = Object.defineProperties;
var ee = Object.getOwnPropertyDescriptors;
var P = Object.getOwnPropertySymbols;
var se = Object.prototype.hasOwnProperty,
  te = Object.prototype.propertyIsEnumerable;
var N = (i, s, l) =>
    s in i
      ? X(i, s, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (i[s] = l),
  S = (i, s) => {
    for (var l in s || (s = {})) se.call(s, l) && N(i, l, s[l]);
    if (P) for (var l of P(s)) te.call(s, l) && N(i, l, s[l]);
    return i;
  },
  A = (i, s) => Z(i, ee(s));
import {
  ag as a,
  r as u,
  a as r,
  S as D,
  j as e,
  B as n,
  aQ as ae,
  aR as ie,
  aS as M,
  M as g,
  av as ue,
  ah as d,
  K as f,
  aU as le,
  $ as O,
  aT as oe,
  aM as re,
  T as ne,
  aI as de,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  y as ce,
  z as pe,
  A as me,
  B as he,
} from './access-permission.bbfa6ab6.js';
import { f as Ce } from './accessControl.941fcf7e.js';
import { s as p } from './index.module.ea069206.js';
import './access-control.2c5ad8d6.js';
import './index.04d9875a.js';
var Fe = { 'search-form': '_search-form_18j6z_1' };
const { Title: fe } = ne,
  { Row: Be, Col: B } = de,
  z = {
    permissionCode: '',
    permissionName: '',
    permissionType: void 0,
    objectType: void 0,
  },
  k = [
    { label: '\u83DC\u5355', value: 'MENU' },
    { label: 'API', value: 'API' },
    { label: '\u5168\u5C40', value: 'GLOBAL' },
  ],
  _ = [
    { label: 'MENU', value: 'MENU' },
    { label: 'API', value: 'API' },
    { label: 'GLOBAL', value: 'GLOBAL' },
  ];
function Pe() {
  const [i] = a.useForm(),
    [s] = a.useForm(),
    [l, R] = u.exports.useState([]),
    [L, y] = u.exports.useState(!1),
    [m, I] = u.exports.useState(1),
    [h, V] = u.exports.useState(10),
    [T, U] = u.exports.useState(0),
    [c, w] = u.exports.useState({}),
    [G, C] = u.exports.useState(!1),
    [b, v] = u.exports.useState(null),
    [q, x] = u.exports.useState(0),
    J = u.exports.useMemo(
      () => ({
        current: m,
        pageSize: h,
        total: T,
        showTotal: !0,
        sizeCanChange: !0,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [m, h, T]
    );
  u.exports.useEffect(() => {
    var o, F;
    let t = !1;
    return (
      y(!0),
      ce({
        page: m,
        pageSize: h,
        permissionCode:
          ((o = c.permissionCode) == null ? void 0 : o.trim()) || void 0,
        permissionName:
          ((F = c.permissionName) == null ? void 0 : F.trim()) || void 0,
        permissionType: c.permissionType || void 0,
        objectType: c.objectType || void 0,
      })
        .then((E) => {
          t || (R(E.list || []), U(E.total || 0));
        })
        .finally(() => !t && y(!1)),
      () => {
        t = !0;
      }
    );
  }, [m, h, c, q]);
  const K = () => {
      v(null), s.resetFields(), s.setFieldsValue({ activeStatus: 1 }), C(!0);
    },
    j = u.exports.useCallback(
      (t) => {
        v(t), s.setFieldsValue(t), C(!0);
      },
      [s]
    ),
    Y = u.exports.useMemo(
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
          render: Ce,
        },
        {
          title: '\u64CD\u4F5C',
          dataIndex: 'operations',
          width: 160,
          fixed: 'right',
          render: (t, o) =>
            r(D, {
              className: p.operations,
              children: [
                e(n, {
                  type: 'text',
                  size: 'small',
                  icon: e(ae, {}),
                  onClick: () => j(o),
                  children: '\u7F16\u8F91',
                }),
                e(n, {
                  type: 'text',
                  status: 'danger',
                  size: 'small',
                  icon: e(ie, {}),
                  onClick: () =>
                    M.confirm({
                      title: '\u5220\u9664\u6743\u9650\u70B9',
                      content: `\u786E\u8BA4\u5220\u9664 ${o.permissionCode}\uFF1F`,
                      onOk: async () => {
                        await pe(o.id),
                          g.success('\u6743\u9650\u70B9\u5DF2\u5220\u9664'),
                          x((F) => F + 1);
                      },
                    }),
                  children: '\u5220\u9664',
                }),
              ],
            }),
        },
      ],
      [j]
    ),
    $ = () => {
      I(1), w(i.getFieldsValue());
    },
    H = () => {
      i.resetFields(), I(1), w(S({}, z));
    },
    Q = async () => {
      const t = await s.validate();
      b
        ? (await me(A(S({}, t), { id: b.id })),
          g.success('\u6743\u9650\u70B9\u5DF2\u66F4\u65B0'))
        : (await he(t), g.success('\u6743\u9650\u70B9\u5DF2\u65B0\u589E')),
        C(!1),
        x((o) => o + 1);
    },
    W = (t) => {
      I(t.current || 1), V(t.pageSize || 10);
    };
  return r(ue, {
    children: [
      e(fe, { heading: 6, children: '\u6743\u9650\u70B9\u7BA1\u7406' }),
      r('div', {
        className: p['search-form-wrapper'],
        children: [
          e(a, {
            form: i,
            initialValues: z,
            className: Fe['search-form'],
            labelAlign: 'left',
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
            children: r(Be, {
              gutter: 24,
              children: [
                e(B, {
                  span: 8,
                  children: e(a.Item, {
                    label: '\u6743\u9650\u7F16\u7801',
                    field: 'permissionCode',
                    children: e(d, {
                      allowClear: !0,
                      placeholder: '\u8BF7\u8F93\u5165\u6743\u9650\u7F16\u7801',
                    }),
                  }),
                }),
                e(B, {
                  span: 8,
                  children: e(a.Item, {
                    label: '\u6743\u9650\u540D\u79F0',
                    field: 'permissionName',
                    children: e(d, {
                      allowClear: !0,
                      placeholder: '\u8BF7\u8F93\u5165\u6743\u9650\u540D\u79F0',
                    }),
                  }),
                }),
                e(B, {
                  span: 8,
                  children: e(a.Item, {
                    label: '\u6743\u9650\u7C7B\u578B',
                    field: 'permissionType',
                    children: e(f, {
                      allowClear: !0,
                      options: k,
                      placeholder: '\u5168\u90E8',
                    }),
                  }),
                }),
                e(B, {
                  span: 8,
                  children: e(a.Item, {
                    label: '\u5BF9\u8C61\u7C7B\u578B',
                    field: 'objectType',
                    children: e(f, {
                      allowClear: !0,
                      options: _,
                      placeholder: '\u5168\u90E8',
                    }),
                  }),
                }),
              ],
            }),
          }),
          r('div', {
            className: p['right-button'],
            children: [
              e(n, {
                type: 'primary',
                icon: e(le, {}),
                onClick: $,
                children: '\u67E5\u8BE2',
              }),
              e(n, { icon: e(O, {}), onClick: H, children: '\u91CD\u7F6E' }),
            ],
          }),
        ],
      }),
      r('div', {
        className: p['button-group'],
        children: [
          e(D, {
            children: e(n, {
              type: 'primary',
              icon: e(oe, {}),
              onClick: K,
              children: '\u65B0\u589E\u6743\u9650\u70B9',
            }),
          }),
          e(n, {
            icon: e(O, {}),
            onClick: () => x((t) => t + 1),
            children: '\u5237\u65B0',
          }),
        ],
      }),
      e(re, {
        rowKey: 'id',
        loading: L,
        columns: Y,
        data: l,
        border: !0,
        scroll: { x: 1200 },
        pagination: J,
        onChange: W,
      }),
      e(M, {
        title: b
          ? '\u7F16\u8F91\u6743\u9650\u70B9'
          : '\u65B0\u589E\u6743\u9650\u70B9',
        visible: G,
        onOk: Q,
        onCancel: () => C(!1),
        unmountOnExit: !0,
        style: { width: 560 },
        children: r(a, {
          form: s,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          className: p['search-form'],
          children: [
            e(a.Item, {
              label: '\u6743\u9650\u7F16\u7801',
              field: 'permissionCode',
              rules: [{ required: !0 }],
              children: e(d, {}),
            }),
            e(a.Item, {
              label: '\u6743\u9650\u540D\u79F0',
              field: 'permissionName',
              rules: [{ required: !0 }],
              children: e(d, {}),
            }),
            e(a.Item, {
              label: '\u6743\u9650\u7C7B\u578B',
              field: 'permissionType',
              children: e(f, { options: k }),
            }),
            e(a.Item, {
              label: '\u5BF9\u8C61\u7C7B\u578B',
              field: 'objectType',
              children: e(f, { options: _ }),
            }),
            e(a.Item, {
              label: '\u5BF9\u8C61 ID',
              field: 'objectId',
              children: e(d, {}),
            }),
            e(a.Item, {
              label: '\u63CF\u8FF0',
              field: 'description',
              children: e(d.TextArea, {
                rows: 3,
                autoSize: { minRows: 3, maxRows: 5 },
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { Pe as default };
