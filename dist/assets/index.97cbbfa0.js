var q = Object.defineProperty,
  H = Object.defineProperties;
var K = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var Q = Object.prototype.hasOwnProperty,
  U = Object.prototype.propertyIsEnumerable;
var y = (u, t, i) =>
    t in u
      ? q(u, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (u[t] = i),
  E = (u, t) => {
    for (var i in t || (t = {})) Q.call(t, i) && y(u, i, t[i]);
    if (F) for (var i of F(t)) U.call(t, i) && y(u, i, t[i]);
    return u;
  },
  S = (u, t) => H(u, K(t));
import {
  ae as n,
  r,
  j as e,
  at as W,
  S as I,
  B as m,
  aS as X,
  aP as Z,
  ah as J,
  aQ as L,
  aR as x,
  M as p,
  Z as Y,
  aX as ee,
  aW as se,
  af as N,
  H as ue,
  ai as B,
  T as te,
} from './vendor.3ac9a823.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  d as le,
  b as C,
  g as _,
  a as ie,
  p as ae,
} from './access-control.f393622f.js';
import './index.2a9369a5.js';
function re() {
  return _('/api/system/depts/tree');
}
function oe(u) {
  return C('/api/system/depts/manage', u);
}
function ne(u) {
  return ie('/api/system/depts/manage', u);
}
function me(u) {
  return le('/api/system/depts/manage', { id: u });
}
function ce(u, t) {
  return _('/api/system/depts/roles', { deptId: u, tenantId: t });
}
function de(u) {
  return C('/api/system/depts/roles', u);
}
function pe(u) {
  return ae('/api/system/roles/list', E({ page: 1, pageSize: 1e3 }, u));
}
const Ne = '_operations_zl5g6_23';
var f = {
    'page-layout': '_page-layout_zl5g6_1',
    'tree-panel': '_tree-panel_zl5g6_5',
    'detail-panel': '_detail-panel_zl5g6_14',
    'button-group': '_button-group_zl5g6_18',
    operations: Ne,
  },
  s =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/depts/index.tsx';
const { Title: fe } = te;
function k(u = []) {
  return u.map((t) => ({
    key: String(t.id),
    title: t.deptName || t.deptCode || String(t.id),
    children: k(t.children || []),
  }));
}
function w(u = [], t) {
  for (const i of u) {
    if (i.id === t) return i;
    const o = w(i.children || [], t);
    if (o) return o;
  }
  return null;
}
function ge() {
  const [u] = n.useForm(),
    [t, i] = r.exports.useState([]),
    [o, h] = r.exports.useState(),
    [R, c] = r.exports.useState(!1),
    [T, b] = r.exports.useState(!1),
    [D, v] = r.exports.useState('create'),
    [z, A] = r.exports.useState([]),
    [j, V] = r.exports.useState([]),
    l = r.exports.useMemo(() => w(t, o), [t, o]),
    d = async () => {
      const a = await re();
      i(a || []);
    };
  r.exports.useEffect(() => {
    d();
  }, []);
  const M = () => {
      v('create'),
        u.resetFields(),
        u.setFieldsValue({ parentId: o || 0, activeStatus: 1 }),
        c(!0);
    },
    O = () => {
      !l || (v('edit'), u.setFieldsValue(l), c(!0));
    },
    P = async () => {
      const a = await u.validate();
      D === 'create'
        ? (await oe(a), p.success('\u90E8\u95E8\u5DF2\u65B0\u589E'))
        : l &&
          (await ne(S(E({}, a), { id: l.id })),
          p.success('\u90E8\u95E8\u5DF2\u66F4\u65B0')),
        c(!1),
        await d();
    },
    G = async () => {
      if (!l) return;
      const [a, $] = await Promise.all([pe(), ce(l.id)]);
      A(a.list || []),
        V(($ || []).map((g) => Number(g.roleId || g.id)).filter(Boolean)),
        b(!0);
    };
  return e.exports.jsxDEV(
    W,
    {
      children: [
        e.exports.jsxDEV(
          fe,
          { heading: 6, children: '\u90E8\u95E8\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: s, lineNumber: 78, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: f['button-group'],
            children: [
              e.exports.jsxDEV(
                I,
                {
                  children: [
                    e.exports.jsxDEV(
                      m,
                      {
                        type: 'primary',
                        icon: e.exports.jsxDEV(
                          X,
                          {},
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 81, columnNumber: 40 },
                          this
                        ),
                        onClick: M,
                        children: '\u65B0\u589E\u90E8\u95E8',
                      },
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 81, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      m,
                      {
                        disabled: !l,
                        icon: e.exports.jsxDEV(
                          Z,
                          {},
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 82, columnNumber: 46 },
                          this
                        ),
                        onClick: O,
                        children: '\u7F16\u8F91\u90E8\u95E8',
                      },
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 82, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      m,
                      {
                        disabled: !l,
                        icon: e.exports.jsxDEV(
                          J,
                          {},
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 83, columnNumber: 46 },
                          this
                        ),
                        onClick: G,
                        children: '\u7ED1\u5B9A\u89D2\u8272',
                      },
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 83, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      m,
                      {
                        disabled: !l,
                        status: 'danger',
                        icon: e.exports.jsxDEV(
                          L,
                          {},
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 84, columnNumber: 62 },
                          this
                        ),
                        onClick: () =>
                          l &&
                          x.confirm({
                            title: '\u5220\u9664\u90E8\u95E8',
                            content: `\u786E\u8BA4\u5220\u9664\u90E8\u95E8 ${l.deptName}\uFF1F`,
                            onOk: async () => {
                              await me(l.id),
                                p.success('\u90E8\u95E8\u5DF2\u5220\u9664'),
                                h(void 0),
                                await d();
                            },
                          }),
                        children: '\u5220\u9664\u90E8\u95E8',
                      },
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 84, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: s, lineNumber: 80, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                m,
                {
                  icon: e.exports.jsxDEV(
                    Y,
                    {},
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 86, columnNumber: 23 },
                    this
                  ),
                  onClick: d,
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 86, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: s, lineNumber: 79, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: f['page-layout'],
            children: [
              e.exports.jsxDEV(
                'div',
                {
                  className: f['tree-panel'],
                  children: e.exports.jsxDEV(
                    ee,
                    {
                      treeData: k(t),
                      selectedKeys: o ? [String(o)] : [],
                      onSelect: (a) => h(Number(a[0])),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 89, columnNumber: 47 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 89, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                'div',
                {
                  className: f['detail-panel'],
                  children: e.exports.jsxDEV(
                    se,
                    {
                      column: 1,
                      title: '\u90E8\u95E8\u8BE6\u60C5',
                      data: l
                        ? [
                            { label: '\u90E8\u95E8 ID', value: l.id },
                            {
                              label: '\u90E8\u95E8\u540D\u79F0',
                              value: l.deptName || '\u2014',
                            },
                            {
                              label: '\u90E8\u95E8\u7F16\u7801',
                              value: l.deptCode || '\u2014',
                            },
                            {
                              label: '\u7236\u90E8\u95E8',
                              value: l.parentId || 0,
                            },
                            {
                              label: '\u72B6\u6001',
                              value:
                                l.activeStatus === 1
                                  ? '\u542F\u7528'
                                  : '\u7981\u7528',
                            },
                          ]
                        : [
                            {
                              label: '\u63D0\u793A',
                              value:
                                '\u8BF7\u9009\u62E9\u5DE6\u4FA7\u90E8\u95E8\u8282\u70B9',
                            },
                          ],
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 91, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 90, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: s, lineNumber: 88, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          x,
          {
            title:
              D === 'create'
                ? '\u65B0\u589E\u90E8\u95E8'
                : '\u7F16\u8F91\u90E8\u95E8',
            visible: R,
            onOk: P,
            onCancel: () => c(!1),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              n,
              {
                form: u,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  e.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u7236\u90E8\u95E8 ID',
                      field: 'parentId',
                      children: e.exports.jsxDEV(
                        N,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 103, columnNumber: 54 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 103, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u90E8\u95E8\u540D\u79F0',
                      field: 'deptName',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        N,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 104, columnNumber: 81 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 104, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u90E8\u95E8\u7C7B\u578B',
                      field: 'deptType',
                      children: e.exports.jsxDEV(
                        N,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 105, columnNumber: 52 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 105, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u6392\u5E8F',
                      field: 'sortOrder',
                      children: e.exports.jsxDEV(
                        N,
                        {},
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 106, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 106, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    n.Item,
                    {
                      label: '\u72B6\u6001',
                      field: 'activeStatus',
                      children: e.exports.jsxDEV(
                        ue,
                        {
                          options: [
                            { label: '\u542F\u7528', value: 1 },
                            { label: '\u7981\u7528', value: 2 },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 107, columnNumber: 54 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 107, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 102, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 101, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          x,
          {
            title: `\u90E8\u95E8\u7ED1\u5B9A\u89D2\u8272\uFF1A${
              (l == null ? void 0 : l.deptName) || ''
            }`,
            visible: T,
            onOk: async () => {
              l &&
                (await de({ deptId: l.id, roleIds: j }),
                p.success('\u90E8\u95E8\u89D2\u8272\u5DF2\u4FDD\u5B58'),
                b(!1));
            },
            onCancel: () => b(!1),
            children: e.exports.jsxDEV(
              B.Group,
              {
                value: j,
                onChange: (a) => V(a),
                children: e.exports.jsxDEV(
                  I,
                  {
                    direction: 'vertical',
                    children: z.map((a) =>
                      e.exports.jsxDEV(
                        B,
                        {
                          value: a.id,
                          children: [
                            a.roleName,
                            '\uFF08',
                            a.roleCode,
                            '\uFF09',
                          ],
                        },
                        a.id,
                        !0,
                        { fileName: s, lineNumber: 113, columnNumber: 66 },
                        this
                      )
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: s, lineNumber: 113, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: s, lineNumber: 112, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 111, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: s, lineNumber: 77, columnNumber: 5 },
    this
  );
}
export { ge as default };
