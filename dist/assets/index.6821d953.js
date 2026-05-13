var we = Object.defineProperty,
  Me = Object.defineProperties;
var Oe = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var Y = Object.prototype.hasOwnProperty,
  Z = Object.prototype.propertyIsEnumerable;
var Q = (l, s, o) =>
    s in l
      ? we(l, s, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (l[s] = o),
  x = (l, s) => {
    for (var o in s || (s = {})) Y.call(s, o) && Q(l, o, s[o]);
    if (y) for (var o of y(s)) Z.call(s, o) && Q(l, o, s[o]);
    return l;
  },
  p = (l, s) => Me(l, Oe(s));
var X = (l, s) => {
  var o = {};
  for (var n in l) Y.call(l, n) && s.indexOf(n) < 0 && (o[n] = l[n]);
  if (l != null && y)
    for (var n of y(l)) s.indexOf(n) < 0 && Z.call(l, n) && (o[n] = l[n]);
  return o;
};
import {
  ae as m,
  r as d,
  j as e,
  at as A,
  S as w,
  B as h,
  aS as J,
  Z as Pe,
  aX as ke,
  a as ee,
  aY as $e,
  aZ as Ue,
  aP as ue,
  aQ as le,
  aR as V,
  M as D,
  N as ze,
  a_ as Le,
  aW as ie,
  aL as qe,
  a$ as Ge,
  af as N,
  H as j,
  T as Re,
  V as se,
  x as We,
  aT as He,
} from './vendor.3ac9a823.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  a as oe,
  t as Ke,
  b as Ye,
  e as re,
  g as te,
} from './access-permission.3a0f8dc9.js';
import { c as Ze } from './index.2a9369a5.js';
import './access-control.f393622f.js';
const Qe = '_operations_jagoo_84';
var a = {
    'page-layout': '_page-layout_jagoo_1',
    'tree-panel': '_tree-panel_jagoo_5',
    'tree-node-title': '_tree-node-title_jagoo_14',
    'tree-node-content': '_tree-node-content_jagoo_22',
    'icon-preview': '_icon-preview_jagoo_28',
    'tree-node-name': '_tree-node-name_jagoo_32',
    'tree-node-actions': '_tree-node-actions_jagoo_37',
    'catalog-tag': '_catalog-tag_jagoo_52',
    'stop-menu-button': '_stop-menu-button_jagoo_57',
    'tree-node-disabled': '_tree-node-disabled_jagoo_65',
    'detail-panel': '_detail-panel_jagoo_75',
    'button-group': '_button-group_jagoo_79',
    operations: Qe,
    'element-card': '_element-card_jagoo_89',
    'resource-card-content': '_resource-card-content_jagoo_96',
    'resource-bg-icon': '_resource-bg-icon_jagoo_102',
    'resource-header': '_resource-header_jagoo_113',
    'resource-title-wrap': '_resource-title-wrap_jagoo_122',
    'resource-title-row': '_resource-title-row_jagoo_125',
    'resource-title': '_resource-title_jagoo_122',
    'resource-code-row': '_resource-code-row_jagoo_140',
    'resource-code': '_resource-code_jagoo_140',
    'resource-code-copy': '_resource-code-copy_jagoo_156',
    'resource-descriptions': '_resource-descriptions_jagoo_160',
    'code-input-group': '_code-input-group_jagoo_164',
    'code-prefix': '_code-prefix_jagoo_169',
    'code-suffix': '_code-suffix_jagoo_173',
  },
  u =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/menus/index.tsx';
const { Title: Xe } = Re,
  Je = ['CATALOG', 'MENU'],
  _ = 0,
  eu = [
    { label: '\u76EE\u5F55', value: 'CATALOG' },
    { label: '\u83DC\u5355', value: 'MENU' },
  ],
  uu = [
    { label: '\u6309\u94AE', value: 'BUTTON' },
    { label: '\u9875\u9762\u5143\u7D20', value: 'ELEMENT' },
    { label: 'API \u63A5\u53E3', value: 'API' },
  ],
  lu = [
    { label: '\u542F\u7528', value: 1 },
    { label: '\u7981\u7528', value: 2 },
  ],
  ne = [
    { label: '\u663E\u793A', value: 1 },
    { label: '\u9690\u85CF', value: 2 },
  ],
  ae = Object.keys(se)
    .filter((l) => l.startsWith('Icon'))
    .sort();
function M(l) {
  return l ? Je.includes(l.menuType || 'MENU') : !1;
}
function iu(l) {
  return l ? !M(l) : !1;
}
function me(l = []) {
  return l.reduce((s, o) => {
    const b = o,
      { children: n } = b,
      f = X(b, ['children']);
    return (
      s.push(p(x({}, f), { children: n })),
      (n == null ? void 0 : n.length) && s.push(...me(n)),
      s
    );
  }, []);
}
function su(l = []) {
  const s = new Map(),
    o = [];
  return (
    l.forEach((n) => {
      s.set(n.id, p(x({}, n), { children: [] }));
    }),
    s.forEach((n) => {
      const f = n.parentId || _,
        b = s.get(f);
      b && b.id !== n.id
        ? (b.children = [...(b.children || []), n])
        : o.push(n);
    }),
    o
  );
}
function ou(l = []) {
  return su(me(l));
}
function ce(l = []) {
  return l
    .filter(M)
    .map((s) => p(x({}, s), { children: ce(s.children || []) }));
}
function O(l = [], s) {
  for (const o of l) {
    if (o.id === s) return o;
    const n = O(o.children || [], s);
    if (n) return n;
  }
  return null;
}
function ru(l) {
  const s = new Set(),
    o = (n = []) => {
      n.forEach((f) => {
        s.add(f.id), o(f.children || []);
      });
    };
  return o((l == null ? void 0 : l.children) || []), s;
}
function de(l = [], s = new Set()) {
  return [
    { key: '0', value: _, title: '\u6839\u8282\u70B9', children: void 0 },
    ...l.map((o) => ({
      key: String(o.id),
      value: o.id,
      title: `${o.menuName || o.menuCode || o.id}${
        o.menuCode ? `\uFF08${o.menuCode}\uFF09` : ''
      }`,
      disabled: s.has(o.id),
      children: de(o.children || [], s).slice(1),
    })),
  ];
}
function Ne(l) {
  const s = Ze(l);
  return s && ae.includes(s) ? s : void 0;
}
function fe(l) {
  return e.exports.jsxDEV(
    ee,
    {
      className: l === 'CATALOG' ? a['catalog-tag'] : void 0,
      color: l === 'MENU' ? 'arcoblue' : void 0,
      children: l === 'CATALOG' ? '\u76EE\u5F55' : '\u83DC\u5355',
    },
    void 0,
    !1,
    { fileName: u, lineNumber: 167, columnNumber: 5 },
    this
  );
}
function P(l) {
  const s = Ne(l),
    o = s ? se[s] : null;
  return o
    ? e.exports.jsxDEV(
        o,
        { className: a['icon-preview'] },
        void 0,
        !1,
        { fileName: u, lineNumber: 178, columnNumber: 26 },
        this
      )
    : null;
}
function k(l, s) {
  var o;
  return !s || s === _
    ? ''
    : ((o = O(l, s)) == null ? void 0 : o.menuCode) || '';
}
function be(l, s) {
  return l
    ? (s && l.startsWith(`${s}:`)) || (s && l.startsWith(`${s}.`))
      ? l.slice(s.length + 1)
      : l
    : '';
}
function xe(l, s) {
  const o = s.trim();
  return l ? `${l}:${o}` : o;
}
function pe(l) {
  return l === 'CATALOG'
    ? '\u76EE\u5F55'
    : l === 'MENU'
    ? '\u83DC\u5355'
    : l === 'BUTTON'
    ? '\u6309\u94AE'
    : l === 'ELEMENT'
    ? '\u9875\u9762\u5143\u7D20'
    : l === 'API'
    ? 'API \u63A5\u53E3'
    : l || '-';
}
function hu() {
  var H, K;
  const [l] = m.useForm(),
    [s] = m.useForm(),
    [o, n] = d.exports.useState([]),
    [f, b] = d.exports.useState(),
    [he, g] = d.exports.useState(!1),
    [Ee, I] = d.exports.useState(!1),
    [c, $] = d.exports.useState(null),
    [C, U] = d.exports.useState('create'),
    [z, L] = d.exports.useState('create'),
    [q, G] = d.exports.useState(null),
    [T, B] = d.exports.useState(''),
    F = d.exports.useMemo(() => ou(o), [o]),
    S = d.exports.useMemo(() => ce(F), [F]),
    E = O(F, f),
    r = M(E) ? E : null,
    De = d.exports.useMemo(
      () => ((r == null ? void 0 : r.children) || []).filter(iu),
      [r]
    ),
    R = d.exports.useMemo(() => {
      const i = ru(C === 'edit' ? E : null);
      return C === 'edit' && (E == null ? void 0 : E.id) && i.add(E.id), i;
    }, [C, E]),
    ve = d.exports.useMemo(() => de(S, R), [S, R]),
    je = (i) => {
      const t = i.activeStatus === 2;
      V.confirm({
        title: t ? '\u542F\u7528\u83DC\u5355' : '\u505C\u7528\u83DC\u5355',
        content: `\u786E\u8BA4${
          t ? '\u542F\u7528' : '\u505C\u7528'
        }\u83DC\u5355 ${i.menuName || i.menuCode}\uFF1F`,
        onOk: async () => {
          await Ke(i.id, t ? 1 : 2),
            D.success(
              `\u83DC\u5355\u5DF2${t ? '\u542F\u7528' : '\u505C\u7528'}`
            ),
            await v();
        },
      });
    },
    Fe = (i) => {
      const t = i.activeStatus === 2;
      return e.exports.jsxDEV(
        'div',
        {
          className: `${a['tree-node-title']} ${
            t ? a['tree-node-disabled'] : ''
          }`,
          children: [
            e.exports.jsxDEV(
              'div',
              {
                className: a['tree-node-content'],
                children: [
                  fe(i.menuType),
                  i.icon ? P(i.icon) : null,
                  e.exports.jsxDEV(
                    'span',
                    {
                      className: a['tree-node-name'],
                      children: i.menuName || i.menuCode || String(i.id),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 274, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 271, columnNumber: 9 },
              this
            ),
            e.exports.jsxDEV(
              'div',
              {
                className: a['tree-node-actions'],
                onClick: (Ae) => Ae.stopPropagation(),
                children: [
                  e.exports.jsxDEV(
                    h,
                    {
                      type: 'text',
                      size: 'mini',
                      className: t ? void 0 : a['stop-menu-button'],
                      status: t ? 'success' : void 0,
                      icon: t
                        ? e.exports.jsxDEV(
                            $e,
                            {},
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 282, columnNumber: 32 },
                            this
                          )
                        : e.exports.jsxDEV(
                            Ue,
                            {},
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 282, columnNumber: 52 },
                            this
                          ),
                      onClick: () => je(i),
                      children: t ? '\u542F\u7528' : '\u505C\u7528',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 277, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    h,
                    {
                      type: 'text',
                      size: 'mini',
                      icon: e.exports.jsxDEV(
                        ue,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 290, columnNumber: 19 },
                        this
                      ),
                      onClick: () => Ce(i),
                      children: '\u7F16\u8F91',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 287, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    h,
                    {
                      type: 'text',
                      size: 'mini',
                      status: 'danger',
                      icon: e.exports.jsxDEV(
                        le,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 299, columnNumber: 19 },
                        this
                      ),
                      onClick: () =>
                        V.confirm({
                          title: '\u5220\u9664\u83DC\u5355',
                          content: `\u786E\u8BA4\u5220\u9664\u83DC\u5355 ${
                            i.menuName || i.menuCode
                          }\uFF1F`,
                          onOk: async () => {
                            await oe(i.id),
                              D.success('\u83DC\u5355\u5DF2\u5220\u9664'),
                              f === i.id && b(void 0),
                              await v();
                          },
                        }),
                      children: '\u5220\u9664',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 295, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 276, columnNumber: 9 },
              this
            ),
          ],
        },
        void 0,
        !0,
        { fileName: u, lineNumber: 270, columnNumber: 7 },
        this
      );
    },
    W = (i = []) =>
      i.map((t) => ({
        key: String(t.id),
        value: t.id,
        title: Fe(t),
        children: W(t.children || []),
      })),
    v = async () => {
      const i = await Ye();
      n(i || []);
    };
  d.exports.useEffect(() => {
    v();
  }, []);
  const Ve = () => {
      const i = (r == null ? void 0 : r.id) || _,
        t = k(F, i);
      U('create'),
        B(t),
        l.resetFields(),
        l.setFieldsValue({
          parentId: i,
          codeSuffix: '',
          menuType: 'MENU',
          visible: 1,
          sortOrder: 100,
        }),
        g(!0);
    },
    Ce = (i = r) => {
      if (!i) return;
      b(i.id);
      const t = k(F, i.parentId);
      U('edit'),
        B(t),
        l.resetFields(),
        l.setFieldsValue(
          p(x({}, i), {
            parentId: i.parentId || _,
            codeSuffix: be(i.menuCode, t),
            icon: Ne(i.icon),
            activeStatus: void 0,
          })
        ),
        g(!0);
    },
    _e = (i) => {
      const t = k(F, Number(i));
      B(t);
    },
    ge = () => {
      !r ||
        (L('create'),
        G(null),
        s.resetFields(),
        s.setFieldsValue({
          parentId: r.id,
          codeSuffix: '',
          menuType: 'BUTTON',
          visible: 1,
          activeStatus: 1,
          sortOrder: 100,
        }),
        I(!0));
    },
    Ie = (i) => {
      L('edit'),
        G(i),
        s.resetFields(),
        s.setFieldsValue(
          p(x({}, i), {
            codeSuffix: be(i.menuCode, r == null ? void 0 : r.menuCode),
          })
        ),
        I(!0);
    },
    ye = async () => {
      const i = await l.validate(),
        t = p(x({}, i), { menuCode: xe(T, i.codeSuffix) });
      delete t.codeSuffix,
        C === 'create'
          ? (await re(t), D.success('\u83DC\u5355\u5DF2\u65B0\u589E'))
          : r &&
            (await te(p(x({}, t), { id: r.id })),
            D.success('\u83DC\u5355\u5DF2\u66F4\u65B0')),
        g(!1),
        await v();
    },
    Te = async () => {
      if (!r) return;
      const i = await s.validate(),
        t = p(x({}, i), {
          parentId: r.id,
          menuCode: xe(r.menuCode || '', i.codeSuffix),
        });
      delete t.codeSuffix,
        z === 'create'
          ? (await re(t),
            D.success('\u9875\u9762\u5143\u7D20\u5DF2\u65B0\u589E'))
          : q &&
            (await te(p(x({}, t), { id: q.id })),
            D.success('\u9875\u9762\u5143\u7D20\u5DF2\u66F4\u65B0')),
        I(!1),
        await v();
    },
    Be = (i) => {
      !i || (We(i), D.success('\u83DC\u5355\u7F16\u7801\u5DF2\u590D\u5236'));
    },
    Se = [
      { title: '\u5143\u7D20\u540D\u79F0', dataIndex: 'menuName', width: 160 },
      { title: '\u5143\u7D20\u7F16\u7801', dataIndex: 'menuCode', width: 220 },
      {
        title: '\u7C7B\u578B',
        dataIndex: 'menuType',
        width: 110,
        render: (i) =>
          e.exports.jsxDEV(
            ee,
            { children: pe(i) },
            void 0,
            !1,
            { fileName: u, lineNumber: 450, columnNumber: 74 },
            this
          ),
      },
      {
        title: '\u8DEF\u7531/API',
        dataIndex: 'routePath',
        width: 220,
        render: (i) => i || '-',
      },
      { title: '\u6392\u5E8F', dataIndex: 'sortOrder', width: 90 },
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 220,
        fixed: 'right',
        render: (i, t) =>
          e.exports.jsxDEV(
            w,
            {
              className: a.operations,
              children: [
                e.exports.jsxDEV(
                  h,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      He,
                      {},
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 460, columnNumber: 50 },
                      this
                    ),
                    onClick: () => $(t),
                    children: '\u67E5\u770B',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 460, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  h,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      ue,
                      {},
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 461, columnNumber: 50 },
                      this
                    ),
                    onClick: () => Ie(t),
                    children: '\u4FEE\u6539',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 461, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  h,
                  {
                    type: 'text',
                    status: 'danger',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      le,
                      {},
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 466, columnNumber: 19 },
                      this
                    ),
                    onClick: () =>
                      V.confirm({
                        title: '\u5220\u9664\u9875\u9762\u5143\u7D20',
                        content: `\u786E\u8BA4\u5220\u9664 ${
                          t.menuName || t.menuCode
                        }\uFF1F`,
                        onOk: async () => {
                          await oe(t.id),
                            D.success(
                              '\u9875\u9762\u5143\u7D20\u5DF2\u5220\u9664'
                            ),
                            await v();
                        },
                      }),
                    children: '\u5220\u9664',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 462, columnNumber: 11 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: u, lineNumber: 459, columnNumber: 9 },
            this
          ),
      },
    ];
  return e.exports.jsxDEV(
    A,
    {
      children: [
        e.exports.jsxDEV(
          Xe,
          { heading: 6, children: '\u83DC\u5355\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: u, lineNumber: 486, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: a['button-group'],
            children: [
              e.exports.jsxDEV(
                w,
                {
                  children: e.exports.jsxDEV(
                    h,
                    {
                      type: 'primary',
                      icon: e.exports.jsxDEV(
                        J,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 489, columnNumber: 40 },
                        this
                      ),
                      onClick: Ve,
                      children: '\u65B0\u589E\u83DC\u5355',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 489, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 488, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                h,
                {
                  icon: e.exports.jsxDEV(
                    Pe,
                    {},
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 491, columnNumber: 23 },
                    this
                  ),
                  onClick: v,
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 491, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 487, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: a['page-layout'],
            children: [
              e.exports.jsxDEV(
                'div',
                {
                  className: a['tree-panel'],
                  children: e.exports.jsxDEV(
                    ke,
                    {
                      blockNode: !0,
                      treeData: W(S),
                      selectedKeys: f ? [String(f)] : [],
                      onSelect: (i) => b(i[0] ? Number(i[0]) : void 0),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 496, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 495, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                'div',
                {
                  className: a['detail-panel'],
                  children: [
                    e.exports.jsxDEV(
                      A,
                      {
                        title: '\u8D44\u6E90\u4FE1\u606F',
                        extra:
                          (r == null ? void 0 : r.menuType) === 'MENU'
                            ? e.exports.jsxDEV(
                                h,
                                {
                                  type: 'primary',
                                  icon: e.exports.jsxDEV(
                                    J,
                                    {},
                                    void 0,
                                    !1,
                                    {
                                      fileName: u,
                                      lineNumber: 507,
                                      columnNumber: 44,
                                    },
                                    this
                                  ),
                                  onClick: ge,
                                  children:
                                    '\u6DFB\u52A0\u9875\u9762\u5143\u7D20',
                                },
                                void 0,
                                !1,
                                {
                                  fileName: u,
                                  lineNumber: 507,
                                  columnNumber: 15,
                                },
                                this
                              )
                            : null,
                        children: r
                          ? e.exports.jsxDEV(
                              'div',
                              {
                                className: a['resource-card-content'],
                                children: [
                                  r.icon
                                    ? e.exports.jsxDEV(
                                        'div',
                                        {
                                          className: a['resource-bg-icon'],
                                          children: P(r.icon),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 513,
                                          columnNumber: 19,
                                        },
                                        this
                                      )
                                    : null,
                                  e.exports.jsxDEV(
                                    'div',
                                    {
                                      className: a['resource-header'],
                                      children: e.exports.jsxDEV(
                                        'div',
                                        {
                                          className: a['resource-title-wrap'],
                                          children: [
                                            e.exports.jsxDEV(
                                              'div',
                                              {
                                                className:
                                                  a['resource-title-row'],
                                                children: [
                                                  e.exports.jsxDEV(
                                                    'div',
                                                    {
                                                      className:
                                                        a['resource-title'],
                                                      children:
                                                        r.menuName || '-',
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: u,
                                                      lineNumber: 520,
                                                      columnNumber: 23,
                                                    },
                                                    this
                                                  ),
                                                  fe(r.menuType),
                                                ],
                                              },
                                              void 0,
                                              !0,
                                              {
                                                fileName: u,
                                                lineNumber: 519,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            e.exports.jsxDEV(
                                              'div',
                                              {
                                                className:
                                                  a['resource-code-row'],
                                                children: [
                                                  e.exports.jsxDEV(
                                                    'span',
                                                    {
                                                      className:
                                                        a['resource-code'],
                                                      children:
                                                        r.menuCode || '-',
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: u,
                                                      lineNumber: 524,
                                                      columnNumber: 23,
                                                    },
                                                    this
                                                  ),
                                                  r.menuCode
                                                    ? e.exports.jsxDEV(
                                                        ze,
                                                        {
                                                          content:
                                                            '\u590D\u5236\u83DC\u5355\u7F16\u7801',
                                                          children:
                                                            e.exports.jsxDEV(
                                                              h,
                                                              {
                                                                type: 'text',
                                                                size: 'mini',
                                                                icon: e.exports.jsxDEV(
                                                                  Le,
                                                                  {},
                                                                  void 0,
                                                                  !1,
                                                                  {
                                                                    fileName: u,
                                                                    lineNumber: 530,
                                                                    columnNumber: 35,
                                                                  },
                                                                  this
                                                                ),
                                                                className:
                                                                  a[
                                                                    'resource-code-copy'
                                                                  ],
                                                                onClick: () =>
                                                                  Be(
                                                                    r.menuCode
                                                                  ),
                                                              },
                                                              void 0,
                                                              !1,
                                                              {
                                                                fileName: u,
                                                                lineNumber: 527,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                        },
                                                        void 0,
                                                        !1,
                                                        {
                                                          fileName: u,
                                                          lineNumber: 526,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      )
                                                    : null,
                                                ],
                                              },
                                              void 0,
                                              !0,
                                              {
                                                fileName: u,
                                                lineNumber: 523,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        void 0,
                                        !0,
                                        {
                                          fileName: u,
                                          lineNumber: 518,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: u,
                                      lineNumber: 517,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  e.exports.jsxDEV(
                                    ie,
                                    {
                                      className: a['resource-descriptions'],
                                      column: 2,
                                      data: [
                                        {
                                          label: '\u8DEF\u7531',
                                          value: r.routePath || '-',
                                        },
                                        {
                                          label: '\u7EC4\u4EF6\u8DEF\u5F84',
                                          value: r.componentPath || '-',
                                        },
                                        {
                                          label: '\u6392\u5E8F',
                                          value:
                                            (H = r.sortOrder) != null ? H : '-',
                                        },
                                        {
                                          label: '\u53EF\u89C1\u72B6\u6001',
                                          value:
                                            r.visible === 2
                                              ? '\u9690\u85CF'
                                              : '\u663E\u793A',
                                        },
                                        {
                                          label: '\u542F\u7528\u72B6\u6001',
                                          value:
                                            r.activeStatus === 2
                                              ? '\u7981\u7528'
                                              : '\u542F\u7528',
                                        },
                                        {
                                          label: '\u56FE\u6807',
                                          value:
                                            r.icon ||
                                            '\u672A\u8BBE\u7F6E\u56FE\u6807',
                                        },
                                      ],
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: u,
                                      lineNumber: 539,
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
                                lineNumber: 511,
                                columnNumber: 15,
                              },
                              this
                            )
                          : '\u8BF7\u9009\u62E9\u5DE6\u4FA7\u76EE\u5F55\u6216\u83DC\u5355\u8282\u70B9',
                      },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 504, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      A,
                      {
                        title: '\u9875\u9762\u5143\u7D20',
                        className: a['element-card'],
                        children: e.exports.jsxDEV(
                          qe,
                          {
                            rowKey: 'id',
                            columns: Se,
                            data: De,
                            pagination: !1,
                            scroll: { x: 980 },
                          },
                          void 0,
                          !1,
                          { fileName: u, lineNumber: 556, columnNumber: 13 },
                          this
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 555, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: u, lineNumber: 503, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 494, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          V,
          {
            title:
              C === 'create'
                ? '\u65B0\u589E\u83DC\u5355'
                : '\u7F16\u8F91\u83DC\u5355',
            visible: he,
            onOk: ye,
            onCancel: () => g(!1),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              m,
              {
                form: l,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u7236\u83DC\u5355',
                      field: 'parentId',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        Ge,
                        {
                          treeData: ve,
                          placeholder: '\u8BF7\u9009\u62E9\u7236\u83DC\u5355',
                          allowClear: !1,
                          onChange: _e,
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 576, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 575, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u83DC\u5355\u7F16\u7801',
                      required: !0,
                      children: e.exports.jsxDEV(
                        N.Group,
                        {
                          compact: !0,
                          className: a['code-input-group'],
                          children: [
                            T
                              ? e.exports.jsxDEV(
                                  N,
                                  {
                                    value: `${T}:`,
                                    disabled: !0,
                                    className: a['code-prefix'],
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: u,
                                    lineNumber: 585,
                                    columnNumber: 29,
                                  },
                                  this
                                )
                              : null,
                            e.exports.jsxDEV(
                              m.Item,
                              {
                                field: 'codeSuffix',
                                noStyle: !0,
                                rules: [
                                  {
                                    required: !0,
                                    message:
                                      '\u8BF7\u8F93\u5165\u83DC\u5355\u7F16\u7801',
                                  },
                                ],
                                children: e.exports.jsxDEV(
                                  N,
                                  {
                                    className: a['code-suffix'],
                                    placeholder:
                                      '\u8BF7\u8F93\u5165\u65E0\u524D\u7F00\u7F16\u7801',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: u,
                                    lineNumber: 587,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: u,
                                lineNumber: 586,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: u, lineNumber: 584, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 583, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u83DC\u5355\u540D\u79F0',
                      field: 'menuName',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        N,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 591, columnNumber: 81 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 591, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u83DC\u5355\u7C7B\u578B',
                      field: 'menuType',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        j,
                        { options: eu },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 592, columnNumber: 81 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 592, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u8DEF\u7531\u8DEF\u5F84',
                      field: 'routePath',
                      children: e.exports.jsxDEV(
                        N,
                        {
                          placeholder:
                            '\u83DC\u5355\u7C7B\u578B\u4E3A\u83DC\u5355\u65F6\u586B\u5199',
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 593, columnNumber: 53 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 593, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u7EC4\u4EF6\u8DEF\u5F84',
                      field: 'componentPath',
                      children: e.exports.jsxDEV(
                        N,
                        { placeholder: '\u5982 system/menus' },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 594, columnNumber: 57 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 594, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u56FE\u6807',
                      field: 'icon',
                      children: e.exports.jsxDEV(
                        j,
                        {
                          showSearch: !0,
                          allowClear: !0,
                          placeholder: '\u8BF7\u9009\u62E9\u56FE\u6807',
                          filterOption: (i, t) =>
                            String(t.props.value)
                              .toLowerCase()
                              .includes(i.toLowerCase()),
                          children: ae.map((i) =>
                            e.exports.jsxDEV(
                              j.Option,
                              {
                                value: i,
                                children: e.exports.jsxDEV(
                                  w,
                                  {
                                    children: [
                                      P(i),
                                      e.exports.jsxDEV(
                                        'span',
                                        { children: i },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 604,
                                          columnNumber: 44,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName: u,
                                    lineNumber: 604,
                                    columnNumber: 19,
                                  },
                                  this
                                ),
                              },
                              i,
                              !1,
                              {
                                fileName: u,
                                lineNumber: 603,
                                columnNumber: 17,
                              },
                              this
                            )
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 596, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 595, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u6392\u5E8F',
                      field: 'sortOrder',
                      children: e.exports.jsxDEV(
                        N,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 609, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 609, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u662F\u5426\u663E\u793A',
                      field: 'visible',
                      children: e.exports.jsxDEV(
                        j,
                        { options: ne },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 610, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 610, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 574, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 567, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          V,
          {
            title:
              z === 'create'
                ? '\u65B0\u589E\u9875\u9762\u5143\u7D20'
                : '\u4FEE\u6539\u9875\u9762\u5143\u7D20',
            visible: Ee,
            onOk: Te,
            onCancel: () => I(!1),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              m,
              {
                form: s,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u7236\u83DC\u5355',
                      children: e.exports.jsxDEV(
                        N,
                        {
                          value: (r == null ? void 0 : r.menuName) || '',
                          disabled: !0,
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 622, columnNumber: 34 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 622, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u5143\u7D20\u7F16\u7801',
                      required: !0,
                      children: e.exports.jsxDEV(
                        N.Group,
                        {
                          compact: !0,
                          children: [
                            e.exports.jsxDEV(
                              N,
                              {
                                value: (r == null ? void 0 : r.menuCode)
                                  ? `${r.menuCode}.`
                                  : '',
                                disabled: !0,
                                className: a['code-prefix'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: u,
                                lineNumber: 625,
                                columnNumber: 15,
                              },
                              this
                            ),
                            e.exports.jsxDEV(
                              m.Item,
                              {
                                field: 'codeSuffix',
                                noStyle: !0,
                                rules: [
                                  {
                                    required: !0,
                                    message:
                                      '\u8BF7\u8F93\u5165\u5143\u7D20\u7F16\u7801',
                                  },
                                ],
                                children: e.exports.jsxDEV(
                                  N,
                                  {
                                    placeholder:
                                      '\u8BF7\u8F93\u5165\u8D44\u6E90\u7F16\u7801',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: u,
                                    lineNumber: 627,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: u,
                                lineNumber: 626,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: u, lineNumber: 624, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 623, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u5143\u7D20\u540D\u79F0',
                      field: 'menuName',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        N,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 631, columnNumber: 81 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 631, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u5143\u7D20\u7C7B\u578B',
                      field: 'menuType',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        j,
                        { options: uu },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 632, columnNumber: 81 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 632, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u8DEF\u7531/API',
                      field: 'routePath',
                      children: e.exports.jsxDEV(
                        N,
                        {
                          placeholder:
                            '\u53EF\u586B\u5199\u524D\u7AEF\u5143\u7D20\u6807\u8BC6\u6216 API \u8DEF\u5F84',
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 633, columnNumber: 55 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 633, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u7EC4\u4EF6\u8DEF\u5F84',
                      field: 'componentPath',
                      children: e.exports.jsxDEV(
                        N,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 634, columnNumber: 57 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 634, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u6392\u5E8F',
                      field: 'sortOrder',
                      children: e.exports.jsxDEV(
                        N,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 635, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 635, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u662F\u5426\u663E\u793A',
                      field: 'visible',
                      children: e.exports.jsxDEV(
                        j,
                        { options: ne },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 636, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 636, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u72B6\u6001',
                      field: 'activeStatus',
                      children: e.exports.jsxDEV(
                        j,
                        { options: lu },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 637, columnNumber: 54 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 637, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 621, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 614, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          V,
          {
            title: '\u9875\u9762\u5143\u7D20\u8BE6\u60C5',
            visible: !!c,
            footer: null,
            onCancel: () => $(null),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              ie,
              {
                column: 1,
                data: [
                  {
                    label: '\u5143\u7D20\u540D\u79F0',
                    value: (c == null ? void 0 : c.menuName) || '-',
                  },
                  {
                    label: '\u5143\u7D20\u7F16\u7801',
                    value: (c == null ? void 0 : c.menuCode) || '-',
                  },
                  {
                    label: '\u5143\u7D20\u7C7B\u578B',
                    value: pe(c == null ? void 0 : c.menuType),
                  },
                  {
                    label: '\u8DEF\u7531/API',
                    value: (c == null ? void 0 : c.routePath) || '-',
                  },
                  {
                    label: '\u7EC4\u4EF6\u8DEF\u5F84',
                    value: (c == null ? void 0 : c.componentPath) || '-',
                  },
                  {
                    label: '\u6392\u5E8F',
                    value:
                      (K = c == null ? void 0 : c.sortOrder) != null ? K : '-',
                  },
                ],
              },
              void 0,
              !1,
              { fileName: u, lineNumber: 642, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 641, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: u, lineNumber: 485, columnNumber: 5 },
    this
  );
}
export { hu as default };
