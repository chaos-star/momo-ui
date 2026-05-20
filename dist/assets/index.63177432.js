var ue = Object.defineProperty,
  se = Object.defineProperties;
var te = Object.getOwnPropertyDescriptors;
var N = Object.getOwnPropertySymbols;
var ie = Object.prototype.hasOwnProperty,
  re = Object.prototype.propertyIsEnumerable;
var k = (t, u, a) =>
    u in t
      ? ue(t, u, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[u] = a),
  B = (t, u) => {
    for (var a in u || (u = {})) ie.call(u, a) && k(t, a, u[a]);
    if (N) for (var a of N(u)) re.call(u, a) && k(t, a, u[a]);
    return t;
  },
  L = (t, u) => se(t, te(u));
import {
  ag as l,
  r as i,
  a as n,
  S as T,
  j as e,
  B as c,
  aQ as ae,
  aR as le,
  aS as G,
  M as b,
  av as oe,
  K as d,
  aU as ne,
  $ as M,
  aT as ce,
  aM as de,
  ah as pe,
  T as me,
  aI as he,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  r as D,
  s as Fe,
  v as Ee,
  w as Ce,
  x as fe,
} from './access-permission.f2447467.js';
import { s as o } from './index.module.ea069206.js';
import './access-control.9e664147.js';
import './index.2cec1040.js';
const Pe = '_tip_ybxvu_1';
var Ae = { tip: Pe };
const { Title: Ie, Text: xe } = me,
  { Row: Be, Col: j } = he,
  R = [
    { label: 'API', value: 'API' },
    { label: '\u9875\u9762\u5143\u7D20', value: 'ELEMENT' },
  ],
  be = [
    {
      label: '\u52FE\u9009\u7236\u6743\u9650\u65F6\u81EA\u52A8\u6388\u6743',
      value: 1,
    },
    { label: '\u9700\u624B\u52A8\u52FE\u9009\u5B50\u6743\u9650', value: 2 },
  ],
  _ = { parentPermissionId: void 0, childGroup: void 0 };
function w(t = []) {
  return t.map((u) => ({
    label: `${u.permissionName || u.permissionCode} (${u.permissionCode})`,
    value: u.id,
  }));
}
function V(t, u) {
  var h, F;
  return String(
    (F = (h = u == null ? void 0 : u.props) == null ? void 0 : h.children) !=
      null
      ? F
      : ''
  )
    .toLowerCase()
    .includes(t.toLowerCase());
}
function Te() {
  const [t] = l.useForm(),
    [u] = l.useForm(),
    [a, h] = i.exports.useState([]),
    [F, S] = i.exports.useState(!1),
    [p, y] = i.exports.useState({}),
    [z, E] = i.exports.useState(!1),
    [m, f] = i.exports.useState(null),
    [g, $] = i.exports.useState([]),
    [P, q] = i.exports.useState([]),
    [A, U] = i.exports.useState([]),
    I = l.useWatch('childGroup', u),
    [H, K] = i.exports.useState(0),
    C = i.exports.useCallback(() => K((s) => s + 1), []),
    v = i.exports.useCallback(async () => {
      const [s, r, x] = await Promise.all([
        D({ objectType: 'MENU', permissionType: 'MENU' }),
        D({ objectType: 'API', permissionType: 'API' }),
        D({ objectType: 'ELEMENT' }),
      ]);
      $(w(s)), q(w(r)), U(w(x));
    }, []),
    J = i.exports.useMemo(
      () => (I === 'ELEMENT' ? A : I === 'API' ? P : [...P, ...A]),
      [I, P, A]
    ),
    Q = i.exports.useMemo(
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
  i.exports.useEffect(() => {
    v();
  }, [v]),
    i.exports.useEffect(() => {
      let s = !1;
      S(!0);
      const r = {};
      return (
        p.parentPermissionId != null &&
          (r.parentPermissionId = p.parentPermissionId),
        p.childGroup && (r.childGroup = p.childGroup),
        Fe(r)
          .then((x) => !s && h(x || []))
          .finally(() => !s && S(!1)),
        () => {
          s = !0;
        }
      );
    }, [p, H]);
  const W = () => {
      f(null),
        u.resetFields(),
        u.setFieldsValue({
          relationType: 'CHILD',
          childGroup: 'API',
          autoGrant: 2,
          sortOrder: 100,
          activeStatus: 1,
        }),
        E(!0);
    },
    O = i.exports.useCallback(
      (s) => {
        f(s), u.setFieldsValue(s), E(!0);
      },
      [u]
    ),
    X = i.exports.useMemo(
      () => [
        { title: 'ID', dataIndex: 'id', width: 70 },
        {
          title: '\u7236\u6743\u9650\uFF08\u83DC\u5355\uFF09',
          width: 220,
          render: (s, r) =>
            `${r.parentPermissionName || '-'} (${
              r.parentPermissionCode || r.parentPermissionId
            })`,
        },
        {
          title: '\u5B50\u6743\u9650',
          width: 220,
          render: (s, r) =>
            `${r.childPermissionName || '-'} (${
              r.childPermissionCode || r.childPermissionId
            })`,
        },
        { title: '\u5206\u7EC4', dataIndex: 'childGroup', width: 90 },
        {
          title: '\u81EA\u52A8\u6388\u6743',
          dataIndex: 'autoGrant',
          width: 110,
          render: (s) => (s === 1 ? '\u81EA\u52A8' : '\u624B\u52A8'),
        },
        { title: '\u6392\u5E8F', dataIndex: 'sortOrder', width: 70 },
        {
          title: '\u64CD\u4F5C',
          width: 140,
          fixed: 'right',
          render: (s, r) =>
            n(T, {
              className: o.operations,
              children: [
                e(c, {
                  type: 'text',
                  size: 'small',
                  icon: e(ae, {}),
                  onClick: () => O(r),
                  children: '\u7F16\u8F91',
                }),
                e(c, {
                  type: 'text',
                  status: 'danger',
                  size: 'small',
                  icon: e(le, {}),
                  onClick: () =>
                    G.confirm({
                      title: '\u5220\u9664\u5173\u7CFB',
                      content:
                        '\u786E\u8BA4\u5220\u9664\u8BE5\u6743\u9650\u9644\u5C5E\u5173\u7CFB\uFF1F',
                      onOk: async () => {
                        await Ee(r.id), b.success('\u5DF2\u5220\u9664'), C();
                      },
                    }),
                  children: '\u5220\u9664',
                }),
              ],
            }),
        },
      ],
      [O, C]
    ),
    Y = () => {
      y(t.getFieldsValue());
    },
    Z = () => {
      t.resetFields(), y(B({}, _));
    },
    ee = async () => {
      const s = await u.validate();
      (m == null ? void 0 : m.id)
        ? (await Ce(L(B({}, s), { id: m.id })), b.success('\u5DF2\u66F4\u65B0'))
        : (await fe(s), b.success('\u5DF2\u521B\u5EFA')),
        E(!1),
        f(null),
        C();
    };
  return n(oe, {
    children: [
      e(Ie, { heading: 6, children: '\u6743\u9650\u5173\u7CFB\u7BA1\u7406' }),
      e(xe, {
        type: 'secondary',
        className: Ae.tip,
        children:
          '\u5728\u6B64\u58F0\u660E\u67D0\u83DC\u5355\u662F\u5426\u9700\u8981\u9644\u5C5E\u6743\u9650\uFF1A\u914D\u7F6E\u7236\u83DC\u5355\u4E0E API/\u9875\u9762\u5143\u7D20\u5B50\u6743\u9650\u7684\u5173\u7CFB\uFF0C\u4EE5\u53CA\u89D2\u8272\u6388\u6743\u65F6\u662F\u5426\u81EA\u52A8\u5E26\u51FA\uFF08auto_grant\uFF09\u3002 \u67D0\u83DC\u5355\u672A\u914D\u7F6E\u4EFB\u4F55\u5173\u7CFB\u65F6\uFF0C\u8868\u793A\u4EC5\u9700\u83DC\u5355\u6743\u9650\u672C\u8EAB\uFF0C\u4E0D\u9700\u8981\u5176\u4ED6 API/\u5143\u7D20\u6743\u9650\u3002API/\u83DC\u5355\u7BA1\u7406\u4EC5\u7EF4\u62A4\u8D44\u6E90\u4E0E\u6743\u9650\u70B9\uFF0C\u4E0D\u914D\u7F6E\u5173\u7CFB\u3002',
      }),
      n('div', {
        className: o['search-form-wrapper'],
        children: [
          e(l, {
            form: t,
            initialValues: _,
            className: o['search-form'],
            labelAlign: 'left',
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
            children: n(Be, {
              gutter: 24,
              children: [
                e(j, {
                  span: 8,
                  children: n('div', {
                    className: o.formLikeField,
                    children: [
                      e('label', {
                        className: o.formLikeFieldLabel,
                        children: '\u7236\u6743\u9650',
                      }),
                      e('div', {
                        className: o.formLikeFieldControl,
                        children: e(l.Item, {
                          field: 'parentPermissionId',
                          noStyle: !0,
                          children: e(d, {
                            showSearch: !0,
                            allowClear: !0,
                            options: g,
                            placeholder: '\u5168\u90E8',
                            filterOption: V,
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                e(j, {
                  span: 8,
                  children: n('div', {
                    className: o.formLikeField,
                    children: [
                      e('label', {
                        className: o.formLikeFieldLabel,
                        children: '\u5B50\u5206\u7EC4',
                      }),
                      e('div', {
                        className: o.formLikeFieldControl,
                        children: e(l.Item, {
                          field: 'childGroup',
                          noStyle: !0,
                          children: e(d, {
                            allowClear: !0,
                            options: R,
                            placeholder: '\u5168\u90E8',
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          n('div', {
            className: o['right-button'],
            children: [
              e(c, {
                type: 'primary',
                icon: e(ne, {}),
                onClick: Y,
                children: '\u67E5\u8BE2',
              }),
              e(c, { icon: e(M, {}), onClick: Z, children: '\u91CD\u7F6E' }),
            ],
          }),
        ],
      }),
      n('div', {
        className: o['button-group'],
        children: [
          e(T, {
            children: e(c, {
              type: 'primary',
              icon: e(ce, {}),
              onClick: W,
              children: '\u65B0\u589E\u5173\u7CFB',
            }),
          }),
          e(c, { icon: e(M, {}), onClick: C, children: '\u5237\u65B0' }),
        ],
      }),
      e(de, {
        rowKey: 'id',
        loading: F,
        columns: X,
        data: a,
        border: !0,
        scroll: { x: 1200 },
        pagination: Q,
      }),
      e(G, {
        title: m
          ? '\u7F16\u8F91\u6743\u9650\u5173\u7CFB'
          : '\u65B0\u589E\u6743\u9650\u5173\u7CFB',
        visible: z,
        onOk: ee,
        onCancel: () => E(!1),
        unmountOnExit: !0,
        style: { width: 560 },
        children: n(l, {
          form: u,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          className: o['search-form'],
          children: [
            e(l.Item, {
              label: '\u7236\u6743\u9650',
              field: 'parentPermissionId',
              rules: [
                {
                  required: !0,
                  message: '\u8BF7\u9009\u62E9\u7236\u6743\u9650',
                },
              ],
              children: e(d, {
                showSearch: !0,
                allowClear: !0,
                options: g,
                placeholder: '\u9009\u62E9\u83DC\u5355\u7C7B\u6743\u9650',
                filterOption: V,
              }),
            }),
            e(l.Item, {
              label: '\u5B50\u6743\u9650\u5206\u7EC4',
              field: 'childGroup',
              rules: [{ required: !0 }],
              children: e(d, {
                options: R,
                onChange: (s) => {
                  u.setFieldValue('childGroup', s),
                    u.setFieldValue('childPermissionId', void 0);
                },
              }),
            }),
            e(l.Item, {
              label: '\u5B50\u6743\u9650',
              field: 'childPermissionId',
              rules: [
                {
                  required: !0,
                  message: '\u8BF7\u9009\u62E9\u5B50\u6743\u9650',
                },
              ],
              children: e(d, {
                showSearch: !0,
                allowClear: !0,
                options: J,
                placeholder: '\u9009\u62E9 API \u6216\u5143\u7D20\u6743\u9650',
              }),
            }),
            e(l.Item, {
              label: '\u81EA\u52A8\u6388\u6743',
              field: 'autoGrant',
              rules: [{ required: !0 }],
              extra:
                '\u8BBE\u4E3A\u300C\u81EA\u52A8\u300D\u65F6\uFF0C\u89D2\u8272\u52FE\u9009\u83DC\u5355\u5C06\u81EA\u52A8\u52FE\u9009\u8BE5\u5B50\u6743\u9650\u5E76\u5199\u5165\u6388\u6743\u7ED3\u679C',
              children: e(d, { options: be }),
            }),
            e(l.Item, {
              label: '\u6392\u5E8F',
              field: 'sortOrder',
              children: e(pe, { type: 'number' }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { Te as default };
