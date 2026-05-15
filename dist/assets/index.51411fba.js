var Q = Object.defineProperty,
  W = Object.defineProperties;
var Y = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var ee = Object.prototype.hasOwnProperty,
  se = Object.prototype.propertyIsEnumerable;
var V = (e, s, i) =>
    s in e
      ? Q(e, s, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[s] = i),
  b = (e, s) => {
    for (var i in s || (s = {})) ee.call(s, i) && V(e, i, s[i]);
    if (y) for (var i of y(s)) se.call(s, i) && V(e, i, s[i]);
    return e;
  },
  C = (e, s) => W(e, Y(s));
import {
  ae as l,
  r,
  j as a,
  at as te,
  S as ae,
  B as k,
  aS as oe,
  Z as re,
  aL as ie,
  aR as T,
  af as w,
  v as ne,
  M as m,
  aX as ue,
  T as le,
} from './vendor.f50a67ab.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  p as me,
  b as R,
  a as ce,
  d as de,
  g as pe,
} from './access-control.111ee6c1.js';
import { a as fe } from './accessControl.18599d4a.js';
import xe from './form.2dbec8bd.js';
import { getColumns as Ne } from './constants.f1b63a47.js';
import { s as B } from './index.module.3d7e884a.js';
import './index.8a32a122.js';
function be(e) {
  return me('/api/system/roles/list', e);
}
function he(e) {
  return pe('/api/system/roles/manage', { id: e });
}
function De(e) {
  return R('/api/system/roles/manage', e);
}
function je(e) {
  return ce('/api/system/roles/manage', e);
}
function ge(e) {
  return de('/api/system/roles/manage', { id: e });
}
function ve(e) {
  return R('/api/system/roles/permissions', e);
}
var o =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/roles/index.tsx';
const { Title: Ee } = le;
function P(e = []) {
  return e.map((s) => ({
    key: String(s.permissionId || s.id),
    title: `${s.permissionName || s.objectName || s.permissionCode || s.id}${
      s.objectType ? `\uFF08${s.objectType}\uFF09` : ''
    }`,
    children: P(s.children || []),
  }));
}
function Ae() {
  const [e] = l.useForm(),
    [s, i] = r.exports.useState([]),
    [I, h] = r.exports.useState(!1),
    [c, D] = r.exports.useState(1),
    [d, M] = r.exports.useState(10),
    [z, A] = r.exports.useState(0),
    [j, G] = r.exports.useState({}),
    [$, O] = r.exports.useState(0),
    [g, v] = r.exports.useState('create'),
    [K, u] = r.exports.useState(!1),
    [L, p] = r.exports.useState(!1),
    [n, f] = r.exports.useState(null),
    [q, U] = r.exports.useState([]),
    [E, F] = r.exports.useState([]),
    x = r.exports.useCallback(() => O((t) => t + 1), []);
  r.exports.useEffect(() => {
    let t = !1;
    return (
      h(!0),
      be(b({ page: c, pageSize: d }, j))
        .then((N) => {
          t || (i(N.list || []), A(N.total || 0));
        })
        .finally(() => !t && h(!1)),
      () => {
        t = !0;
      }
    );
  }, [c, d, j, $]);
  const X = () => {
      v('create'), f(null), e.resetFields(), u(!0);
    },
    Z = (t) => {
      v('edit'), f(t), e.setFieldsValue(t), u(!0);
    },
    _ = async () => {
      const t = await e.validate();
      g === 'create'
        ? (await De(t), m.success('\u89D2\u8272\u5DF2\u65B0\u589E'))
        : n &&
          (await je(C(b({}, t), { id: n.id })),
          m.success('\u89D2\u8272\u5DF2\u66F4\u65B0')),
        u(!1),
        x();
    },
    H = Ne({
      onEdit: Z,
      onGrant: async (t) => {
        f(t);
        const S = (await he(t.id)).permissionTree || [];
        U(S),
          F(fe(S.filter((J) => !!J.rolePermissionConfig)).map(String)),
          p(!0);
      },
      onDelete: (t) =>
        T.confirm({
          title: '\u5220\u9664\u89D2\u8272',
          content: `\u786E\u8BA4\u5220\u9664\u89D2\u8272 ${t.roleName}\uFF1F`,
          onOk: async () => {
            await ge(t.id), m.success('\u89D2\u8272\u5DF2\u5220\u9664'), x();
          },
        }),
    });
  return a.exports.jsxDEV(
    te,
    {
      children: [
        a.exports.jsxDEV(
          Ee,
          { heading: 6, children: '\u89D2\u8272\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: o, lineNumber: 135, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          xe,
          {
            onSearch: (t) => {
              D(1), G(t);
            },
          },
          void 0,
          !1,
          { fileName: o, lineNumber: 136, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          'div',
          {
            className: B['button-group'],
            children: [
              a.exports.jsxDEV(
                ae,
                {
                  children: a.exports.jsxDEV(
                    k,
                    {
                      type: 'primary',
                      icon: a.exports.jsxDEV(
                        oe,
                        {},
                        void 0,
                        !1,
                        { fileName: o, lineNumber: 144, columnNumber: 40 },
                        this
                      ),
                      onClick: X,
                      children: '\u65B0\u589E\u89D2\u8272',
                    },
                    void 0,
                    !1,
                    { fileName: o, lineNumber: 144, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: o, lineNumber: 143, columnNumber: 9 },
                this
              ),
              a.exports.jsxDEV(
                k,
                {
                  icon: a.exports.jsxDEV(
                    re,
                    {},
                    void 0,
                    !1,
                    { fileName: o, lineNumber: 148, columnNumber: 23 },
                    this
                  ),
                  onClick: x,
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: o, lineNumber: 148, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: o, lineNumber: 142, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          ie,
          {
            rowKey: 'id',
            loading: I,
            columns: H,
            data: s,
            scroll: { x: 1e3 },
            pagination: {
              current: c,
              pageSize: d,
              total: z,
              showTotal: !0,
              sizeCanChange: !0,
            },
            onChange: (t) => {
              D(t.current || 1), M(t.pageSize || 10);
            },
          },
          void 0,
          !1,
          { fileName: o, lineNumber: 152, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          T,
          {
            title:
              g === 'create'
                ? '\u65B0\u589E\u89D2\u8272'
                : '\u7F16\u8F91\u89D2\u8272',
            visible: K,
            onOk: _,
            onCancel: () => u(!1),
            unmountOnExit: !0,
            children: a.exports.jsxDEV(
              l,
              {
                form: e,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  a.exports.jsxDEV(
                    l.Item,
                    {
                      label: '\u89D2\u8272\u540D\u79F0',
                      field: 'roleName',
                      rules: [{ required: !0 }],
                      children: a.exports.jsxDEV(
                        w,
                        {},
                        void 0,
                        !1,
                        { fileName: o, lineNumber: 190, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: o, lineNumber: 185, columnNumber: 11 },
                    this
                  ),
                  a.exports.jsxDEV(
                    l.Item,
                    {
                      label: '\u89D2\u8272\u63CF\u8FF0',
                      field: 'description',
                      children: a.exports.jsxDEV(
                        w.TextArea,
                        { rows: 4 },
                        void 0,
                        !1,
                        { fileName: o, lineNumber: 193, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: o, lineNumber: 192, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: o, lineNumber: 178, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: o, lineNumber: 171, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          ne,
          {
            title: `\u89D2\u8272\u6388\u6743\uFF1A${
              (n == null ? void 0 : n.roleName) || ''
            }`,
            visible: L,
            width: 680,
            onOk: async () => {
              n &&
                (await ve({ roleId: n.id, permissionIds: E.map(Number) }),
                m.success('\u6743\u9650\u5DF2\u4FDD\u5B58'),
                p(!1));
            },
            onCancel: () => p(!1),
            children: a.exports.jsxDEV(
              'div',
              {
                className: B['tree-card'],
                children: a.exports.jsxDEV(
                  ue,
                  {
                    checkable: !0,
                    checkedKeys: E,
                    onCheck: (t) => F(t),
                    treeData: P(q),
                  },
                  void 0,
                  !1,
                  { fileName: o, lineNumber: 215, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: o, lineNumber: 214, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: o, lineNumber: 198, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: o, lineNumber: 134, columnNumber: 5 },
    this
  );
}
export { Ae as default };
