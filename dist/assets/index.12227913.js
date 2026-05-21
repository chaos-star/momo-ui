var Nu = Object.defineProperty,
  fu = Object.defineProperties;
var bu = Object.getOwnPropertyDescriptors;
var L = Object.getOwnPropertySymbols;
var Ee = Object.prototype.hasOwnProperty,
  De = Object.prototype.propertyIsEnumerable;
var ve = (l, s, i) =>
    s in l
      ? Nu(l, s, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (l[s] = i),
  x = (l, s) => {
    for (var i in s || (s = {})) Ee.call(s, i) && ve(l, i, s[i]);
    if (L) for (var i of L(s)) De.call(s, i) && ve(l, i, s[i]);
    return l;
  },
  E = (l, s) => fu(l, bu(s));
var Fe = (l, s) => {
  var i = {};
  for (var a in l) Ee.call(l, a) && s.indexOf(a) < 0 && (i[a] = l[a]);
  if (l != null && L)
    for (var a of L(l)) s.indexOf(a) < 0 && De.call(l, a) && (i[a] = l[a]);
  return i;
};
import {
  ae as m,
  r as c,
  j as e,
  at as H,
  S as q,
  B as p,
  aS as je,
  Z as Ce,
  aX as hu,
  a as P,
  a8 as xu,
  aY as Ve,
  aZ as _e,
  aP as ge,
  aQ as Be,
  aR as V,
  M as D,
  aW as ye,
  af as d,
  H as y,
  aT as pu,
  aL as Eu,
  a_ as Se,
  T as Du,
  V as Te,
  aU as vu,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  i as Fu,
  j as ju,
  t as Cu,
  k as Vu,
  m as _u,
  l as gu,
  n as Bu,
  o as yu,
  p as Su,
  q as Tu,
  r as Iu,
} from './access-permission.04fba575.js';
import { c as wu } from './index.77883a3f.js';
import './access-control.86021a9b.js';
const Au = '_operations_1h400_90';
var o = {
    'page-layout': '_page-layout_1h400_1',
    'tree-panel': '_tree-panel_1h400_5',
    'tree-node-title': '_tree-node-title_1h400_14',
    'tree-node-content': '_tree-node-content_1h400_22',
    'icon-preview': '_icon-preview_1h400_28',
    'tree-node-name': '_tree-node-name_1h400_32',
    'hidden-tag': '_hidden-tag_1h400_37',
    'tree-node-actions': '_tree-node-actions_1h400_43',
    'catalog-tag': '_catalog-tag_1h400_58',
    'stop-menu-button': '_stop-menu-button_1h400_63',
    'tree-node-disabled': '_tree-node-disabled_1h400_71',
    'detail-panel': '_detail-panel_1h400_81',
    'button-group': '_button-group_1h400_85',
    operations: Au,
    'element-card': '_element-card_1h400_103',
    'element-toolbar': '_element-toolbar_1h400_106',
    'element-search-form': '_element-search-form_1h400_113',
    'element-search-actions': '_element-search-actions_1h400_126',
    'resource-card-content': '_resource-card-content_1h400_133',
    'resource-bg-icon': '_resource-bg-icon_1h400_139',
    'resource-header': '_resource-header_1h400_150',
    'resource-title-wrap': '_resource-title-wrap_1h400_159',
    'resource-title-row': '_resource-title-row_1h400_162',
    'resource-title': '_resource-title_1h400_159',
    'resource-code-row': '_resource-code-row_1h400_177',
    'resource-code': '_resource-code_1h400_177',
    'resource-descriptions': '_resource-descriptions_1h400_196',
    'menu-modal': '_menu-modal_1h400_213',
    'menu-modal-form-grid': '_menu-modal-form-grid_1h400_216',
    'code-input-group': '_code-input-group_1h400_229',
    'code-prefix': '_code-prefix_1h400_234',
    'element-code-prefix': '_element-code-prefix_1h400_238',
    'code-suffix': '_code-suffix_1h400_242',
  },
  u =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/menus/index.tsx';
const { Title: Mu, Text: Pu } = Du,
  Ou = ['CATALOG', 'MENU'],
  _ = 0,
  ku = [
    { label: '\u76EE\u5F55', value: 'CATALOG' },
    { label: '\u83DC\u5355', value: 'MENU' },
  ],
  Ie = [
    { label: '\u6309\u94AE', value: 'BUTTON' },
    { label: '\u4EA4\u4E92\u7EC4\u4EF6', value: 'FORM' },
    { label: '\u6807\u7B7E\u9875', value: 'TAB' },
    { label: '\u6570\u636E\u5217', value: 'COLUMN' },
  ],
  zu = [
    { label: '\u542F\u7528', value: 1 },
    { label: '\u505C\u7528', value: 2 },
  ],
  $u = [
    { label: '\u663E\u793A', value: 1 },
    { label: '\u9690\u85CF', value: 2 },
  ],
  we = Object.keys(Te)
    .filter((l) => l.startsWith('Icon'))
    .sort();
function Ae(l) {
  return l ? Ou.includes(l.menuType || 'MENU') : !1;
}
function Me(l = []) {
  return l.reduce((s, i) => {
    const v = i,
      { children: a } = v,
      f = Fe(v, ['children']);
    return (
      s.push(E(x({}, f), { children: a })),
      (a == null ? void 0 : a.length) && s.push(...Me(a)),
      s
    );
  }, []);
}
function Uu(l = []) {
  const s = new Map(),
    i = [];
  return (
    l.forEach((a) => {
      s.set(a.id, E(x({}, a), { children: [] }));
    }),
    s.forEach((a) => {
      const f = a.parentId || _,
        v = s.get(f);
      v && v.id !== a.id
        ? (v.children = [...(v.children || []), a])
        : i.push(a);
    }),
    i
  );
}
function Lu(l = []) {
  return Uu(Me(l));
}
function Pe(l = []) {
  return l
    .filter((s) => s.menuType === 'CATALOG')
    .map((s) => E(x({}, s), { children: Pe(s.children || []) }));
}
function J(l = [], s) {
  for (const i of l) {
    if (i.id === s) return i;
    const a = J(i.children || [], s);
    if (a) return a;
  }
  return null;
}
function Oe(l = []) {
  for (const s of l) {
    if (Ae(s)) return s;
    const i = Oe(s.children || []);
    if (i) return i;
  }
  return null;
}
function ke(l) {
  const s = new Set(),
    i = (a = []) => {
      a.forEach((f) => {
        s.add(f.id), i(f.children || []);
      });
    };
  return i((l == null ? void 0 : l.children) || []), s;
}
function Y(l = [], s = new Set()) {
  return [
    {
      key: String(_),
      value: String(_),
      title: '\u6839\u8282\u70B9',
      children: void 0,
    },
    ...l.map((i) => ({
      key: String(i.id),
      value: String(i.id),
      title: `${i.menuName || i.menuCode || i.id}${
        i.menuCode ? `\uFF08${i.menuCode}\uFF09` : ''
      }`,
      disabled: s.has(i.id),
      children: Y(i.children || [], s).slice(1),
    })),
  ];
}
function w(l) {
  const s = Number(l != null ? l : _);
  return Number.isFinite(s) ? s : _;
}
function Z(l) {
  return String(l != null ? l : _);
}
function Q(l) {
  const s = wu(l);
  return s && we.includes(s) ? s : void 0;
}
function ze(l) {
  return e.exports.jsxDEV(
    P,
    {
      className: l === 'CATALOG' ? o['catalog-tag'] : void 0,
      color: l === 'MENU' ? 'arcoblue' : void 0,
      children: l === 'CATALOG' ? '\u76EE\u5F55' : '\u83DC\u5355',
    },
    void 0,
    !1,
    { fileName: u, lineNumber: 198, columnNumber: 5 },
    this
  );
}
function X(l) {
  const s = Q(l),
    i = s ? Te[s] : null;
  return i
    ? e.exports.jsxDEV(
        i,
        { className: o['icon-preview'] },
        void 0,
        !1,
        { fileName: u, lineNumber: 213, columnNumber: 5 },
        this
      )
    : null;
}
function ee(l, s, i) {
  var f;
  if (!s || s === _)
    return i === 'CATALOG' ? 'catalog' : i === 'MENU' ? 'menu' : '';
  const a = ((f = J(l, s)) == null ? void 0 : f.menuCode) || '';
  return !a || !i
    ? ''
    : i === 'MENU'
    ? a.replace(/^catalog(?=:|$)/, 'menu')
    : a;
}
function $e(l, s) {
  return l
    ? (s && l.startsWith(`${s}:`)) || (s && l.startsWith(`${s}.`))
      ? l.slice(s.length + 1)
      : l
    : '';
}
function qu(l, s) {
  const i = s.trim();
  return l ? `${l}:${i}` : i;
}
function ue(l = '', s) {
  return l && s ? `${l}:${s.toLowerCase()}` : '';
}
function Gu(l, s, i) {
  const a = ue(l, s),
    f = i.trim();
  return a ? `${a}:${f}` : f;
}
function Ue(l) {
  return l === 'CATALOG'
    ? '\u76EE\u5F55'
    : l === 'MENU'
    ? '\u83DC\u5355'
    : l === 'BUTTON'
    ? '\u6309\u94AE'
    : l === 'ELEMENT' || l === 'DOM'
    ? '\u9875\u9762\u5143\u7D20'
    : l === 'API'
    ? 'API \u63A5\u53E3'
    : l || '-';
}
function Le(l) {
  if (!l) return {};
  if (typeof l == 'string')
    try {
      const s = JSON.parse(l);
      return s && typeof s == 'object' && !Array.isArray(s) ? s : {};
    } catch {
      return {};
    }
  return typeof l == 'object' && !Array.isArray(l) ? l : {};
}
function F(l) {
  return typeof l == 'string' ? l : '';
}
function qe(l) {
  const s = Le(l == null ? void 0 : l.config);
  return {
    label_zh: F(s.label_zh) || (l == null ? void 0 : l.menuName) || '',
    label_en: F(s.label_en),
    label_es: F(s.label_es),
  };
}
function Ru(l, s) {
  return JSON.stringify(
    E(x({}, Le(l == null ? void 0 : l.config)), {
      label_en: F(s.label_en).trim(),
      label_es: F(s.label_es).trim(),
      label_zh: F(s.label_zh).trim(),
    })
  );
}
function tl() {
  const [l] = m.useForm(),
    [s] = m.useForm(),
    [i] = m.useForm(),
    [a] = m.useForm(),
    [f, v] = c.exports.useState([]),
    [O, A] = c.exports.useState(),
    [Ge, k] = c.exports.useState(!1),
    [Re, G] = c.exports.useState(!1),
    [N, R] = c.exports.useState(null),
    [We, z] = c.exports.useState(!1),
    [h, le] = c.exports.useState(null),
    [S, te] = c.exports.useState('create'),
    [se, ie] = c.exports.useState('create'),
    [j, re] = c.exports.useState(null),
    [ne, ae] = c.exports.useState([]),
    [oe, me] = c.exports.useState({}),
    g = c.exports.useMemo(() => Lu(f), [f]),
    $ = c.exports.useMemo(() => Pe(g), [g]),
    C = J(g, O),
    n = Ae(C) ? C : null,
    W = m.useWatch('parentId', l),
    Ke = w(W),
    K = m.useWatch('menuType', l),
    ce = W != null,
    He = c.exports.useMemo(() => ne, [ne]),
    de = c.exports.useMemo(() => {
      const t = ke(S === 'edit' ? C : null);
      return S === 'edit' && (C == null ? void 0 : C.id) && t.add(C.id), t;
    }, [S, C]),
    Ne = c.exports.useMemo(() => {
      const t = ke(N);
      return (
        (N == null ? void 0 : N.id) && (t.add(N.id), t.add(w(N.parentId))), t
      );
    }, [N]),
    Je = c.exports.useMemo(() => Y($, de), [$, de]),
    Ye = c.exports.useMemo(() => Y($, Ne), [$, Ne]),
    fe = ee(g, Ke, K),
    U = m.useWatch('elementType', i),
    be = ue((n == null ? void 0 : n.menuCode) || '', U),
    Ze = (t) => {
      const r = t.activeStatus === 2;
      V.confirm({
        title: `${r ? '\u542F\u7528' : '\u505C\u7528'}\u83DC\u5355`,
        content: `\u786E\u8BA4${
          r ? '\u542F\u7528' : '\u505C\u7528'
        }\u83DC\u5355 ${t.menuName || t.menuCode}\uFF1F`,
        onOk: async () => {
          await Cu(t.id, r ? 1 : 2),
            D.success(
              `\u83DC\u5355\u5DF2${r ? '\u542F\u7528' : '\u505C\u7528'}`
            ),
            await T();
        },
      });
    },
    Qe = (t) => {
      const r = t.activeStatus === 2;
      V.confirm({
        title: `${r ? '\u542F\u7528' : '\u505C\u7528'}\u9875\u9762\u5143\u7D20`,
        content: `\u786E\u8BA4${
          r ? '\u542F\u7528' : '\u505C\u7528'
        }\u9875\u9762\u5143\u7D20 ${t.elementName || t.elementCode}\uFF1F`,
        onOk: async () => {
          await Iu(t.id, r ? 1 : 2),
            D.success(
              `\u9875\u9762\u5143\u7D20\u5DF2${
                r ? '\u542F\u7528' : '\u505C\u7528'
              }`
            ),
            await M();
        },
      });
    },
    Xe = (t) => {
      const r = t.activeStatus === 2;
      return e.exports.jsxDEV(
        'div',
        {
          className: `${o['tree-node-title']} ${
            r ? o['tree-node-disabled'] : ''
          }`,
          children: [
            e.exports.jsxDEV(
              'div',
              {
                className: o['tree-node-content'],
                children: [
                  ze(t.menuType),
                  t.icon ? X(t.icon) : null,
                  e.exports.jsxDEV(
                    'span',
                    {
                      className: o['tree-node-name'],
                      children: t.menuName || t.menuCode || String(t.id),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 429, columnNumber: 11 },
                    this
                  ),
                  t.visible === 2
                    ? e.exports.jsxDEV(
                        P,
                        {
                          className: o['hidden-tag'],
                          size: 'small',
                          children: '\u9690\u85CF',
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 433, columnNumber: 13 },
                        this
                      )
                    : null,
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 426, columnNumber: 9 },
              this
            ),
            e.exports.jsxDEV(
              'div',
              {
                className: o['tree-node-actions'],
                onClick: (b) => b.stopPropagation(),
                children: [
                  e.exports.jsxDEV(
                    p,
                    {
                      type: 'text',
                      size: 'mini',
                      icon: e.exports.jsxDEV(
                        xu,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 445, columnNumber: 19 },
                        this
                      ),
                      onClick: () => su(t),
                      children: '\u79FB\u52A8',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 442, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    p,
                    {
                      type: 'text',
                      size: 'mini',
                      className: r ? void 0 : o['stop-menu-button'],
                      status: r ? 'success' : void 0,
                      icon: r
                        ? e.exports.jsxDEV(
                            Ve,
                            {},
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 455, columnNumber: 32 },
                            this
                          )
                        : e.exports.jsxDEV(
                            _e,
                            {},
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 455, columnNumber: 52 },
                            this
                          ),
                      onClick: () => Ze(t),
                      children: r ? '\u542F\u7528' : '\u505C\u7528',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 450, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    p,
                    {
                      type: 'text',
                      size: 'mini',
                      icon: e.exports.jsxDEV(
                        ge,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 463, columnNumber: 19 },
                        this
                      ),
                      onClick: () => uu(t),
                      children: '\u7F16\u8F91',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 460, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    p,
                    {
                      type: 'text',
                      size: 'mini',
                      status: 'danger',
                      icon: e.exports.jsxDEV(
                        Be,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 472, columnNumber: 19 },
                        this
                      ),
                      onClick: () =>
                        V.confirm({
                          title: '\u5220\u9664\u83DC\u5355',
                          content: `\u786E\u8BA4\u5220\u9664\u83DC\u5355 ${
                            t.menuName || t.menuCode
                          }\uFF1F`,
                          onOk: async () => {
                            await ju(t.id),
                              D.success('\u83DC\u5355\u5DF2\u5220\u9664'),
                              O === t.id && A(void 0),
                              await T();
                          },
                        }),
                      children: '\u5220\u9664',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 468, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 438, columnNumber: 9 },
              this
            ),
          ],
        },
        void 0,
        !0,
        { fileName: u, lineNumber: 421, columnNumber: 7 },
        this
      );
    },
    he = (t = []) =>
      t.map((r) => ({
        key: String(r.id),
        value: r.id,
        title: Xe(r),
        children: he(r.children || []),
      })),
    T = async (t = !1) => {
      const b = (await Vu()) || [];
      if ((v(b), t)) {
        const B = Oe(b);
        A(B == null ? void 0 : B.id);
      }
    },
    M = c.exports.useCallback(async () => {
      if (!(n == null ? void 0 : n.id) || n.menuType !== 'MENU') {
        ae([]);
        return;
      }
      const t = await Fu(x({ menuId: n.id }, oe));
      ae(t || []);
    }, [n == null ? void 0 : n.id, n == null ? void 0 : n.menuType, oe]);
  c.exports.useEffect(() => {
    T(!0);
  }, []),
    c.exports.useEffect(() => {
      M();
    }, [M]);
  const eu = () => {
      const t = (n == null ? void 0 : n.menuType) === 'CATALOG' ? n.id : _,
        r = 'MENU';
      te('create'),
        l.resetFields(),
        l.setFieldsValue({
          parentId: Z(t),
          codeSuffix: '',
          menuName: '',
          label_zh: '',
          label_en: '',
          label_es: '',
          menuType: r,
          visible: 1,
          sortOrder: 100,
        }),
        k(!0);
    },
    uu = (t = n) => {
      if (!t) return;
      A(t.id);
      const r = w(t.parentId),
        b = ee(g, r, t.menuType);
      te('edit'), l.resetFields();
      const B = qe(t);
      l.setFieldsValue(
        E(x(x({}, t), B), {
          parentId: Z(r),
          codeSuffix: $e(t.menuCode, b),
          icon: Q(t.icon),
          activeStatus: void 0,
        })
      ),
        k(!0);
    },
    lu = () => {
      l.setFieldValue('codeSuffix', '');
    },
    tu = () => {
      l.setFieldValue('codeSuffix', '');
    },
    su = (t) => {
      A(t.id),
        R(t),
        s.resetFields(),
        s.setFieldsValue({ targetParentId: Z(t.parentId) }),
        G(!0);
    },
    iu = async () => {
      if (!N) return;
      const t = await s.validate(),
        r = w(t.targetParentId);
      if (r === w(N.parentId)) {
        D.warning(
          '\u8BF7\u9009\u62E9\u4E0D\u540C\u7684\u76EE\u6807\u4F4D\u7F6E'
        );
        return;
      }
      await _u({ id: N.id, targetParentId: r }),
        D.success('\u83DC\u5355\u5DF2\u79FB\u52A8'),
        G(!1),
        R(null),
        await T();
    },
    ru = () => {
      !n ||
        (ie('create'),
        re(null),
        i.resetFields(),
        i.setFieldsValue({
          menuId: n.id,
          codeSuffix: '',
          elementType: void 0,
          elementName: '',
          sortOrder: 100,
        }),
        z(!0));
    },
    nu = (t) => {
      ie('edit'), re(t), i.resetFields();
      const r = ue((n == null ? void 0 : n.menuCode) || '', t.elementType);
      i.setFieldsValue(E(x({}, t), { codeSuffix: $e(t.elementCode, r) })),
        z(!0);
    },
    au = async () => {
      var xe, pe;
      const t = await l.validate(),
        r = S === 'edit' ? n : null,
        b = w(t.parentId),
        B = ee(g, b, t.menuType),
        I = E(x({}, t), {
          parentId: b,
          menuName: F(t.label_zh).trim(),
          menuCode: qu(B, t.codeSuffix),
          routePath: F(t.routePath).trim(),
          componentPath: F(t.componentPath).trim(),
          icon: Q(t.icon) || '',
          visible: Number((xe = t.visible) != null ? xe : 1),
          sortOrder: Number((pe = t.sortOrder) != null ? pe : 100),
          config: Ru(r, t),
        });
      delete I.codeSuffix,
        delete I.label_zh,
        delete I.label_en,
        delete I.label_es,
        S === 'create'
          ? (await gu(I), D.success('\u83DC\u5355\u5DF2\u65B0\u589E'))
          : n &&
            (await Bu(E(x({}, I), { id: n.id })),
            D.success('\u83DC\u5355\u5DF2\u66F4\u65B0')),
        k(!1),
        await T();
    },
    ou = async () => {
      if (!n) return;
      const t = await i.validate(),
        r = E(x({}, t), {
          menuId: n.id,
          elementCode: Gu(n.menuCode || '', t.elementType, t.codeSuffix),
          activeStatus: j == null ? void 0 : j.activeStatus,
          sortOrder: (j == null ? void 0 : j.sortOrder) || t.sortOrder || 100,
        });
      delete r.codeSuffix,
        se === 'create'
          ? (await yu(r),
            D.success('\u9875\u9762\u5143\u7D20\u5DF2\u65B0\u589E'))
          : j &&
            (await Su(E(x({}, r), { id: j.id })),
            D.success('\u9875\u9762\u5143\u7D20\u5DF2\u66F4\u65B0')),
        z(!1),
        await M();
    },
    mu = () => {
      const t = a.getFieldsValue();
      me(t);
    },
    cu = () => {
      a.resetFields(), me({});
    },
    du = [
      {
        title: '\u5143\u7D20\u540D\u79F0',
        dataIndex: 'elementName',
        width: 160,
      },
      {
        title: '\u5143\u7D20\u7F16\u7801',
        dataIndex: 'elementCode',
        width: 260,
      },
      {
        title: '\u7C7B\u578B',
        dataIndex: 'elementType',
        width: 110,
        render: (t) =>
          e.exports.jsxDEV(
            P,
            { children: Ue(t) },
            void 0,
            !1,
            { fileName: u, lineNumber: 718, columnNumber: 26 },
            this
          ),
      },
      {
        title: '\u542F\u7528\u72B6\u6001',
        dataIndex: 'activeStatus',
        width: 110,
        render: (t) =>
          t === 2
            ? e.exports.jsxDEV(
                P,
                { color: 'red', children: '\u505C\u7528' },
                void 0,
                !1,
                { fileName: u, lineNumber: 726, columnNumber: 11 },
                this
              )
            : e.exports.jsxDEV(
                P,
                { color: 'green', children: '\u542F\u7528' },
                void 0,
                !1,
                { fileName: u, lineNumber: 728, columnNumber: 11 },
                this
              ),
      },
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 280,
        fixed: 'right',
        render: (t, r) => {
          const b = r.activeStatus === 2;
          return e.exports.jsxDEV(
            q,
            {
              className: o.operations,
              size: 10,
              wrap: !0,
              children: [
                e.exports.jsxDEV(
                  p,
                  {
                    type: 'text',
                    size: 'small',
                    className: b ? void 0 : o['stop-menu-button'],
                    status: b ? 'success' : void 0,
                    icon: b
                      ? e.exports.jsxDEV(
                          Ve,
                          {},
                          void 0,
                          !1,
                          { fileName: u, lineNumber: 745, columnNumber: 34 },
                          this
                        )
                      : e.exports.jsxDEV(
                          _e,
                          {},
                          void 0,
                          !1,
                          { fileName: u, lineNumber: 745, columnNumber: 54 },
                          this
                        ),
                    onClick: () => Qe(r),
                    children: b ? '\u542F\u7528' : '\u505C\u7528',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 740, columnNumber: 13 },
                  this
                ),
                e.exports.jsxDEV(
                  p,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      vu,
                      {},
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 753, columnNumber: 21 },
                      this
                    ),
                    onClick: () => le(r),
                    children: '\u67E5\u770B',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 750, columnNumber: 13 },
                  this
                ),
                e.exports.jsxDEV(
                  p,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      ge,
                      {},
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 761, columnNumber: 21 },
                      this
                    ),
                    onClick: () => nu(r),
                    children: '\u4FEE\u6539',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 758, columnNumber: 13 },
                  this
                ),
                e.exports.jsxDEV(
                  p,
                  {
                    type: 'text',
                    status: 'danger',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      Be,
                      {},
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 770, columnNumber: 21 },
                      this
                    ),
                    onClick: () =>
                      V.confirm({
                        title: '\u5220\u9664\u9875\u9762\u5143\u7D20',
                        content: `\u786E\u8BA4\u5220\u9664 ${
                          r.elementName || r.elementCode
                        }\uFF1F`,
                        onOk: async () => {
                          await Tu(r.id),
                            D.success(
                              '\u9875\u9762\u5143\u7D20\u5DF2\u5220\u9664'
                            ),
                            await M();
                        },
                      }),
                    children: '\u5220\u9664',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 766, columnNumber: 13 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: u, lineNumber: 739, columnNumber: 11 },
            this
          );
        },
      },
    ];
  return e.exports.jsxDEV(
    H,
    {
      children: [
        e.exports.jsxDEV(
          Mu,
          { heading: 6, children: '\u83DC\u5355\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: u, lineNumber: 795, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: o['button-group'],
            children: [
              e.exports.jsxDEV(
                q,
                {
                  children: e.exports.jsxDEV(
                    p,
                    {
                      type: 'primary',
                      icon: e.exports.jsxDEV(
                        je,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 798, columnNumber: 40 },
                        this
                      ),
                      onClick: eu,
                      children: '\u65B0\u589E\u83DC\u5355',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 798, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 797, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                p,
                {
                  icon: e.exports.jsxDEV(
                    Ce,
                    {},
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 802, columnNumber: 23 },
                    this
                  ),
                  onClick: () => T(),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 802, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 796, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: o['page-layout'],
            children: [
              e.exports.jsxDEV(
                'div',
                {
                  className: o['tree-panel'],
                  children: e.exports.jsxDEV(
                    hu,
                    {
                      blockNode: !0,
                      treeData: he(g),
                      selectedKeys: O ? [String(O)] : [],
                      onSelect: (t) => A(t[0] ? Number(t[0]) : void 0),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 809, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 808, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                'div',
                {
                  className: o['detail-panel'],
                  children: [
                    e.exports.jsxDEV(
                      H,
                      {
                        title: '\u8D44\u6E90\u4FE1\u606F',
                        children: n
                          ? e.exports.jsxDEV(
                              'div',
                              {
                                className: o['resource-card-content'],
                                children: [
                                  n.icon
                                    ? e.exports.jsxDEV(
                                        'div',
                                        {
                                          className: o['resource-bg-icon'],
                                          children: X(n.icon),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 823,
                                          columnNumber: 19,
                                        },
                                        this
                                      )
                                    : null,
                                  e.exports.jsxDEV(
                                    'div',
                                    {
                                      className: o['resource-header'],
                                      children: e.exports.jsxDEV(
                                        'div',
                                        {
                                          className: o['resource-title-wrap'],
                                          children: [
                                            e.exports.jsxDEV(
                                              'div',
                                              {
                                                className:
                                                  o['resource-title-row'],
                                                children: [
                                                  e.exports.jsxDEV(
                                                    'div',
                                                    {
                                                      className:
                                                        o['resource-title'],
                                                      children:
                                                        n.menuName || '-',
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: u,
                                                      lineNumber: 830,
                                                      columnNumber: 23,
                                                    },
                                                    this
                                                  ),
                                                  ze(n.menuType),
                                                ],
                                              },
                                              void 0,
                                              !0,
                                              {
                                                fileName: u,
                                                lineNumber: 829,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            e.exports.jsxDEV(
                                              'div',
                                              {
                                                className:
                                                  o['resource-code-row'],
                                                children: n.menuCode
                                                  ? e.exports.jsxDEV(
                                                      Pu,
                                                      {
                                                        className:
                                                          o['resource-code'],
                                                        copyable: !0,
                                                        children: n.menuCode,
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: u,
                                                        lineNumber: 837,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    )
                                                  : e.exports.jsxDEV(
                                                      'span',
                                                      {
                                                        className:
                                                          o['resource-code'],
                                                        children: '-',
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: u,
                                                        lineNumber: 841,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: u,
                                                lineNumber: 835,
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
                                          lineNumber: 828,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: u,
                                      lineNumber: 827,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  e.exports.jsxDEV(
                                    ye,
                                    {
                                      className: o['resource-descriptions'],
                                      column: 2,
                                      data: (() => {
                                        var r;
                                        const t = qe(n);
                                        return [
                                          {
                                            label: '\u4E2D\u6587\u540D\u79F0',
                                            value: t.label_zh || '-',
                                          },
                                          {
                                            label: '\u8DEF\u7531',
                                            value: n.routePath || '-',
                                          },
                                          {
                                            label: '\u82F1\u6587\u540D\u79F0',
                                            value: t.label_en || '-',
                                          },
                                          {
                                            label: '\u7EC4\u4EF6\u8DEF\u5F84',
                                            value: n.componentPath || '-',
                                          },
                                          {
                                            label: '\u897F\u8BED\u540D\u79F0',
                                            value: t.label_es || '-',
                                          },
                                          {
                                            label: '\u53EF\u89C1\u72B6\u6001',
                                            value:
                                              n.visible === 2
                                                ? '\u9690\u85CF'
                                                : '\u663E\u793A',
                                          },
                                          {
                                            label: '\u542F\u7528\u72B6\u6001',
                                            value:
                                              n.activeStatus === 2
                                                ? '\u7981\u7528'
                                                : '\u542F\u7528',
                                          },
                                          {
                                            label: '\u6392\u5E8F',
                                            value:
                                              (r = n.sortOrder) != null
                                                ? r
                                                : '-',
                                          },
                                        ];
                                      })(),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: u,
                                      lineNumber: 846,
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
                                lineNumber: 821,
                                columnNumber: 15,
                              },
                              this
                            )
                          : '\u8BF7\u9009\u62E9\u5DE6\u4FA7\u76EE\u5F55\u6216\u83DC\u5355\u8282\u70B9',
                      },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 819, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      H,
                      {
                        title: '\u9875\u9762\u5143\u7D20',
                        className: o['element-card'],
                        children: [
                          e.exports.jsxDEV(
                            'div',
                            {
                              className: o['element-toolbar'],
                              children: [
                                e.exports.jsxDEV(
                                  m,
                                  {
                                    form: a,
                                    className: o['element-search-form'],
                                    layout: 'inline',
                                    onSubmit: mu,
                                    children: [
                                      e.exports.jsxDEV(
                                        m.Item,
                                        {
                                          label: '\u5143\u7D20\u7F16\u7801',
                                          field: 'elementCode',
                                          children: e.exports.jsxDEV(
                                            d,
                                            {
                                              allowClear: !0,
                                              placeholder:
                                                '\u8BF7\u8F93\u5165\u5143\u7D20\u7F16\u7801',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: u,
                                              lineNumber: 894,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 893,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                      e.exports.jsxDEV(
                                        m.Item,
                                        {
                                          label: '\u5143\u7D20\u7C7B\u578B',
                                          field: 'elementType',
                                          children: e.exports.jsxDEV(
                                            y,
                                            {
                                              allowClear: !0,
                                              options: Ie,
                                              placeholder:
                                                '\u8BF7\u9009\u62E9\u5143\u7D20\u7C7B\u578B',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: u,
                                              lineNumber: 897,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 896,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                      e.exports.jsxDEV(
                                        m.Item,
                                        {
                                          label: '\u542F\u7528\u72B6\u6001',
                                          field: 'activeStatus',
                                          children: e.exports.jsxDEV(
                                            y,
                                            {
                                              allowClear: !0,
                                              options: zu,
                                              placeholder:
                                                '\u8BF7\u9009\u62E9\u542F\u7528\u72B6\u6001',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: u,
                                              lineNumber: 904,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 903,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                      e.exports.jsxDEV(
                                        m.Item,
                                        {
                                          className:
                                            o['element-search-actions'],
                                          children: e.exports.jsxDEV(
                                            q,
                                            {
                                              children: [
                                                e.exports.jsxDEV(
                                                  p,
                                                  {
                                                    type: 'primary',
                                                    htmlType: 'submit',
                                                    icon: e.exports.jsxDEV(
                                                      pu,
                                                      {},
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: u,
                                                        lineNumber: 915,
                                                        columnNumber: 29,
                                                      },
                                                      this
                                                    ),
                                                    children: '\u67E5\u8BE2',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: u,
                                                    lineNumber: 912,
                                                    columnNumber: 21,
                                                  },
                                                  this
                                                ),
                                                e.exports.jsxDEV(
                                                  p,
                                                  {
                                                    icon: e.exports.jsxDEV(
                                                      Ce,
                                                      {},
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: u,
                                                        lineNumber: 919,
                                                        columnNumber: 35,
                                                      },
                                                      this
                                                    ),
                                                    onClick: cu,
                                                    children: '\u91CD\u7F6E',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: u,
                                                    lineNumber: 919,
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
                                              lineNumber: 911,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 910,
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
                                    lineNumber: 887,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                                (n == null ? void 0 : n.menuType) === 'MENU'
                                  ? e.exports.jsxDEV(
                                      p,
                                      {
                                        type: 'primary',
                                        icon: e.exports.jsxDEV(
                                          je,
                                          {},
                                          void 0,
                                          !1,
                                          {
                                            fileName: u,
                                            lineNumber: 928,
                                            columnNumber: 25,
                                          },
                                          this
                                        ),
                                        onClick: ru,
                                        children: '\u6DFB\u52A0\u5143\u7D20',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: u,
                                        lineNumber: 926,
                                        columnNumber: 17,
                                      },
                                      this
                                    )
                                  : null,
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: u, lineNumber: 886, columnNumber: 13 },
                            this
                          ),
                          e.exports.jsxDEV(
                            Eu,
                            {
                              rowKey: 'id',
                              columns: du,
                              data: He,
                              pagination: !1,
                              scroll: { x: 860 },
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 935, columnNumber: 13 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: u, lineNumber: 885, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: u, lineNumber: 818, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 807, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          V,
          {
            title:
              S === 'create'
                ? '\u65B0\u589E\u83DC\u5355'
                : '\u7F16\u8F91\u83DC\u5355',
            visible: Ge,
            onOk: au,
            onCancel: () => k(!1),
            unmountOnExit: !0,
            style: { width: 880 },
            className: o['menu-modal'],
            children: e.exports.jsxDEV(
              m,
              {
                form: l,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 7 },
                wrapperCol: { span: 17 },
                children: e.exports.jsxDEV(
                  'div',
                  {
                    className: o['menu-modal-form-grid'],
                    children: [
                      e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u7236\u83DC\u5355',
                          field: 'parentId',
                          rules: [{ required: !0 }],
                          children: e.exports.jsxDEV(
                            Se,
                            {
                              treeData: Je,
                              placeholder:
                                '\u8BF7\u9009\u62E9\u7236\u83DC\u5355',
                              allowClear: !1,
                              onChange: lu,
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 968, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 963, columnNumber: 13 },
                        this
                      ),
                      e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u83DC\u5355\u7C7B\u578B',
                          field: 'menuType',
                          rules: [{ required: !0 }],
                          children: e.exports.jsxDEV(
                            y,
                            { options: ku, onChange: tu },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 980, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 975, columnNumber: 13 },
                        this
                      ),
                      e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u83DC\u5355\u7F16\u7801',
                          required: !0,
                          children: e.exports.jsxDEV(
                            d.Group,
                            {
                              compact: !0,
                              className: o['code-input-group'],
                              children: [
                                fe
                                  ? e.exports.jsxDEV(
                                      d,
                                      {
                                        value: `${fe}:`,
                                        disabled: !0,
                                        className: o['code-prefix'],
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: u,
                                        lineNumber: 988,
                                        columnNumber: 19,
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
                                      d,
                                      {
                                        className: o['code-suffix'],
                                        disabled: !ce || !K,
                                        placeholder:
                                          ce && K
                                            ? '\u8BF7\u8F93\u5165\u65E0\u524D\u7F00\u7F16\u7801'
                                            : '\u8BF7\u5148\u9009\u62E9\u7236\u83DC\u5355\u548C\u83DC\u5355\u7C7B\u578B',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: u,
                                        lineNumber: 999,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: u,
                                    lineNumber: 994,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: u, lineNumber: 986, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 985, columnNumber: 13 },
                        this
                      ),
                      e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u4E2D\u6587\u540D\u79F0',
                          field: 'label_zh',
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8BF7\u8F93\u5165\u4E2D\u6587\u540D\u79F0',
                            },
                          ],
                          children: e.exports.jsxDEV(
                            d,
                            { placeholder: '\u5982 \u7CFB\u7EDF\u7BA1\u7406' },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 1016, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1011, columnNumber: 13 },
                        this
                      ),
                      e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u82F1\u6587\u540D\u79F0',
                          field: 'label_en',
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8BF7\u8F93\u5165\u82F1\u6587\u540D\u79F0',
                            },
                          ],
                          children: e.exports.jsxDEV(
                            d,
                            { placeholder: '\u5982 System' },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 1023, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1018, columnNumber: 13 },
                        this
                      ),
                      e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u897F\u8BED\u540D\u79F0',
                          field: 'label_es',
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8BF7\u8F93\u5165\u897F\u8BED\u540D\u79F0',
                            },
                          ],
                          children: e.exports.jsxDEV(
                            d,
                            { placeholder: '\u5982 Sistema' },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 1030, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1025, columnNumber: 13 },
                        this
                      ),
                      e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u8DEF\u7531\u8DEF\u5F84',
                          field: 'routePath',
                          children: e.exports.jsxDEV(
                            d,
                            {
                              placeholder:
                                '\u83DC\u5355\u7C7B\u578B\u4E3A\u83DC\u5355\u65F6\u586B\u5199',
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 1033, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1032, columnNumber: 13 },
                        this
                      ),
                      e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u7EC4\u4EF6\u8DEF\u5F84',
                          field: 'componentPath',
                          children: e.exports.jsxDEV(
                            d,
                            { placeholder: '\u5982 system/menus' },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 1036, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1035, columnNumber: 13 },
                        this
                      ),
                      e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u56FE\u6807',
                          field: 'icon',
                          children: e.exports.jsxDEV(
                            y,
                            {
                              showSearch: !0,
                              allowClear: !0,
                              placeholder: '\u8BF7\u9009\u62E9\u56FE\u6807',
                              filterOption: (t, r) =>
                                String(r.props.value)
                                  .toLowerCase()
                                  .includes(t.toLowerCase()),
                              children: we.map((t) =>
                                e.exports.jsxDEV(
                                  y.Option,
                                  {
                                    value: t,
                                    children: e.exports.jsxDEV(
                                      q,
                                      {
                                        children: [
                                          X(t),
                                          e.exports.jsxDEV(
                                            'span',
                                            { children: t },
                                            void 0,
                                            !1,
                                            {
                                              fileName: u,
                                              lineNumber: 1053,
                                              columnNumber: 23,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: u,
                                        lineNumber: 1051,
                                        columnNumber: 21,
                                      },
                                      this
                                    ),
                                  },
                                  t,
                                  !1,
                                  {
                                    fileName: u,
                                    lineNumber: 1050,
                                    columnNumber: 19,
                                  },
                                  this
                                )
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 1039, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1038, columnNumber: 13 },
                        this
                      ),
                      e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u6392\u5E8F',
                          field: 'sortOrder',
                          children: e.exports.jsxDEV(
                            d,
                            { type: 'number' },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 1060, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1059, columnNumber: 13 },
                        this
                      ),
                      e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u662F\u5426\u663E\u793A',
                          field: 'visible',
                          children: e.exports.jsxDEV(
                            y,
                            { options: $u },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 1063, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1062, columnNumber: 13 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: u, lineNumber: 962, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: u, lineNumber: 955, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 946, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          V,
          {
            title: '\u79FB\u52A8\u83DC\u5355',
            visible: Re,
            onOk: iu,
            onCancel: () => {
              G(!1), R(null);
            },
            unmountOnExit: !0,
            style: { width: 560 },
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
                      label: '\u5F53\u524D\u83DC\u5355',
                      children: e.exports.jsxDEV(
                        d,
                        {
                          value:
                            (N == null ? void 0 : N.menuName) ||
                            (N == null ? void 0 : N.menuCode) ||
                            '',
                          disabled: !0,
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1088, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 1087, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u76EE\u6807\u4F4D\u7F6E',
                      field: 'targetParentId',
                      rules: [
                        {
                          required: !0,
                          message: '\u8BF7\u9009\u62E9\u76EE\u6807\u4F4D\u7F6E',
                        },
                      ],
                      children: e.exports.jsxDEV(
                        Se,
                        {
                          treeData: Ye,
                          placeholder:
                            '\u8BF7\u9009\u62E9\u76EE\u6807\u4F4D\u7F6E',
                          allowClear: !1,
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1098, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 1093, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 1080, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 1069, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          V,
          {
            title:
              se === 'create'
                ? '\u65B0\u589E\u9875\u9762\u5143\u7D20'
                : '\u4FEE\u6539\u9875\u9762\u5143\u7D20',
            visible: We,
            onOk: ou,
            onCancel: () => z(!1),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              m,
              {
                form: i,
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
                        d,
                        {
                          value: (n == null ? void 0 : n.menuName) || '',
                          disabled: !0,
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1122, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 1121, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u5143\u7D20\u7C7B\u578B',
                      field: 'elementType',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        y,
                        {
                          options: Ie,
                          placeholder:
                            '\u8BF7\u9009\u62E9\u5143\u7D20\u7C7B\u578B',
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1129, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 1124, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u5143\u7D20\u7F16\u7801',
                      required: !0,
                      children: e.exports.jsxDEV(
                        d.Group,
                        {
                          compact: !0,
                          className: o['code-input-group'],
                          children: [
                            e.exports.jsxDEV(
                              d,
                              {
                                value: be ? `${be}:` : '',
                                disabled: !0,
                                className: o['element-code-prefix'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: u,
                                lineNumber: 1133,
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
                                  d,
                                  {
                                    className: o['code-suffix'],
                                    disabled: !U,
                                    placeholder: U
                                      ? '\u8BF7\u8F93\u5165\u8D44\u6E90\u7F16\u7801'
                                      : '\u8BF7\u5148\u9009\u62E9\u5143\u7D20\u7C7B\u578B',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: u,
                                    lineNumber: 1143,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: u,
                                lineNumber: 1138,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: u, lineNumber: 1132, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 1131, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u5143\u7D20\u540D\u79F0',
                      field: 'elementName',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        d,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1158, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 1153, columnNumber: 11 },
                    this
                  ),
                  U === 'COLUMN'
                    ? e.exports.jsxDEV(
                        m.Item,
                        {
                          label: '\u5B57\u6BB5\u540D\u79F0',
                          field: 'elementKey',
                          rules: [
                            {
                              required: !0,
                              message:
                                '\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\u79F0',
                            },
                          ],
                          children: e.exports.jsxDEV(
                            d,
                            {
                              placeholder:
                                '\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\u79F0',
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 1166, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 1161, columnNumber: 13 },
                        this
                      )
                    : null,
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 1114, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 1107, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          V,
          {
            title: '\u9875\u9762\u5143\u7D20\u8BE6\u60C5',
            visible: !!h,
            footer: null,
            onCancel: () => le(null),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              ye,
              {
                column: 1,
                data: [
                  {
                    label: '\u5143\u7D20\u540D\u79F0',
                    value: (h == null ? void 0 : h.elementName) || '-',
                  },
                  {
                    label: '\u5143\u7D20\u7F16\u7801',
                    value: (h == null ? void 0 : h.elementCode) || '-',
                  },
                  {
                    label: '\u5143\u7D20\u7C7B\u578B',
                    value: Ue(h == null ? void 0 : h.elementType),
                  },
                  {
                    label: '\u542F\u7528\u72B6\u6001',
                    value:
                      (h == null ? void 0 : h.activeStatus) === 2
                        ? '\u505C\u7528'
                        : '\u542F\u7528',
                  },
                ],
              },
              void 0,
              !1,
              { fileName: u, lineNumber: 1179, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 1172, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: u, lineNumber: 794, columnNumber: 5 },
    this
  );
}
export { tl as default };
