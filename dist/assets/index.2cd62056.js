var Ye = Object.defineProperty,
  Ze = Object.defineProperties;
var Qe = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var re = Object.prototype.hasOwnProperty,
  ne = Object.prototype.propertyIsEnumerable;
var oe = (l, s, t) =>
    s in l
      ? Ye(l, s, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (l[s] = t),
  p = (l, s) => {
    for (var t in s || (s = {})) re.call(s, t) && oe(l, t, s[t]);
    if (A) for (var t of A(s)) ne.call(s, t) && oe(l, t, s[t]);
    return l;
  },
  D = (l, s) => Ze(l, Qe(s));
var ae = (l, s) => {
  var t = {};
  for (var o in l) re.call(l, o) && s.indexOf(o) < 0 && (t[o] = l[o]);
  if (l != null && A)
    for (var o of A(l)) s.indexOf(o) < 0 && ne.call(l, o) && (t[o] = l[o]);
  return t;
};
import {
  ae as m,
  r as d,
  j as e,
  at as q,
  S as O,
  B as x,
  aS as me,
  Z as ce,
  aX as Xe,
  a as P,
  aY as de,
  aZ as Ne,
  aP as fe,
  aQ as be,
  aR as B,
  M as V,
  aW as pe,
  af as N,
  H as _,
  aT as eu,
  aL as uu,
  a_ as lu,
  T as su,
  V as xe,
  aU as iu,
} from './vendor.f50a67ab.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  i as he,
  t as tu,
  j as ru,
  k as ve,
  l as De,
} from './access-permission.94149dee.js';
import { c as nu } from './index.8a32a122.js';
import './access-control.111ee6c1.js';
const ou = '_operations_sv72m_84';
var a = {
    'page-layout': '_page-layout_sv72m_1',
    'tree-panel': '_tree-panel_sv72m_5',
    'tree-node-title': '_tree-node-title_sv72m_14',
    'tree-node-content': '_tree-node-content_sv72m_22',
    'icon-preview': '_icon-preview_sv72m_28',
    'tree-node-name': '_tree-node-name_sv72m_32',
    'tree-node-actions': '_tree-node-actions_sv72m_37',
    'catalog-tag': '_catalog-tag_sv72m_52',
    'stop-menu-button': '_stop-menu-button_sv72m_57',
    'tree-node-disabled': '_tree-node-disabled_sv72m_65',
    'detail-panel': '_detail-panel_sv72m_75',
    'button-group': '_button-group_sv72m_79',
    operations: ou,
    'element-card': '_element-card_sv72m_97',
    'element-toolbar': '_element-toolbar_sv72m_100',
    'element-search-form': '_element-search-form_sv72m_107',
    'element-search-actions': '_element-search-actions_sv72m_120',
    'resource-card-content': '_resource-card-content_sv72m_127',
    'resource-bg-icon': '_resource-bg-icon_sv72m_133',
    'resource-header': '_resource-header_sv72m_144',
    'resource-title-wrap': '_resource-title-wrap_sv72m_153',
    'resource-title-row': '_resource-title-row_sv72m_156',
    'resource-title': '_resource-title_sv72m_153',
    'resource-code-row': '_resource-code-row_sv72m_171',
    'resource-code': '_resource-code_sv72m_171',
    'resource-descriptions': '_resource-descriptions_sv72m_190',
    'code-input-group': '_code-input-group_sv72m_207',
    'code-prefix': '_code-prefix_sv72m_212',
    'element-code-prefix': '_element-code-prefix_sv72m_216',
    'code-suffix': '_code-suffix_sv72m_220',
  },
  u =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/menus/index.tsx';
const { Title: au, Text: mu } = su,
  cu = ['CATALOG', 'MENU'],
  T = 0,
  du = [
    { label: '\u76EE\u5F55', value: 'CATALOG' },
    { label: '\u83DC\u5355', value: 'MENU' },
  ],
  Ee = [
    { label: '\u6309\u94AE', value: 'BUTTON' },
    { label: '\u9875\u9762\u5143\u7D20', value: 'DOM' },
  ],
  Nu = [
    { label: '\u542F\u7528', value: 1 },
    { label: '\u505C\u7528', value: 2 },
  ],
  fu = [
    { label: '\u663E\u793A', value: 1 },
    { label: '\u9690\u85CF', value: 2 },
  ],
  Fe = Object.keys(xe)
    .filter((l) => l.startsWith('Icon'))
    .sort();
function k(l) {
  return l ? cu.includes(l.menuType || 'MENU') : !1;
}
function je(l) {
  return l ? !k(l) : !1;
}
function Ve(l = []) {
  return l.reduce((s, t) => {
    const b = t,
      { children: o } = b,
      h = ae(b, ['children']);
    return (
      s.push(D(p({}, h), { children: o })),
      (o == null ? void 0 : o.length) && s.push(...Ve(o)),
      s
    );
  }, []);
}
function bu(l = []) {
  const s = new Map(),
    t = [];
  return (
    l.forEach((o) => {
      s.set(o.id, D(p({}, o), { children: [] }));
    }),
    s.forEach((o) => {
      const h = o.parentId || T,
        b = s.get(h);
      b && b.id !== o.id
        ? (b.children = [...(b.children || []), o])
        : t.push(o);
    }),
    t
  );
}
function pu(l = []) {
  return bu(Ve(l));
}
function _e(l = []) {
  return l
    .filter(k)
    .map((s) => D(p({}, s), { children: _e(s.children || []) }));
}
function G(l = [], s) {
  for (const t of l) {
    if (t.id === s) return t;
    const o = G(t.children || [], s);
    if (o) return o;
  }
  return null;
}
function Ce(l = []) {
  for (const s of l) {
    if (k(s)) return s;
    const t = Ce(s.children || []);
    if (t) return t;
  }
  return null;
}
function xu(l) {
  const s = new Set(),
    t = (o = []) => {
      o.forEach((h) => {
        s.add(h.id), t(h.children || []);
      });
    };
  return t((l == null ? void 0 : l.children) || []), s;
}
function ye(l = [], s = new Set()) {
  return [
    { key: '0', value: T, title: '\u6839\u8282\u70B9', children: void 0 },
    ...l.map((t) => ({
      key: String(t.id),
      value: t.id,
      title: `${t.menuName || t.menuCode || t.id}${
        t.menuCode ? `\uFF08${t.menuCode}\uFF09` : ''
      }`,
      disabled: s.has(t.id),
      children: ye(t.children || [], s).slice(1),
    })),
  ];
}
function Be(l) {
  const s = nu(l);
  return s && Fe.includes(s) ? s : void 0;
}
function Se(l) {
  return e.exports.jsxDEV(
    P,
    {
      className: l === 'CATALOG' ? a['catalog-tag'] : void 0,
      color: l === 'MENU' ? 'arcoblue' : void 0,
      children: l === 'CATALOG' ? '\u76EE\u5F55' : '\u83DC\u5355',
    },
    void 0,
    !1,
    { fileName: u, lineNumber: 176, columnNumber: 5 },
    this
  );
}
function R(l) {
  const s = Be(l),
    t = s ? xe[s] : null;
  return t
    ? e.exports.jsxDEV(
        t,
        { className: a['icon-preview'] },
        void 0,
        !1,
        { fileName: u, lineNumber: 191, columnNumber: 5 },
        this
      )
    : null;
}
function W(l, s) {
  var t;
  return !s || s === T
    ? 'menu'
    : ((t = G(l, s)) == null ? void 0 : t.menuCode) || 'menu';
}
function ge(l, s) {
  return l
    ? (s && l.startsWith(`${s}:`)) || (s && l.startsWith(`${s}.`))
      ? l.slice(s.length + 1)
      : l
    : '';
}
function hu(l, s) {
  const t = s.trim();
  return l ? `${l}:${t}` : t;
}
function K(l = '', s) {
  return l && s ? `${l}:${s.toLowerCase()}` : '';
}
function vu(l, s, t) {
  const o = K(l, s),
    h = t.trim();
  return o ? `${o}:${h}` : h;
}
function Te(l) {
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
function Ie(l) {
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
function S(l) {
  return typeof l == 'string' ? l : '';
}
function we(l) {
  const s = Ie(l == null ? void 0 : l.config);
  return {
    label_zh: S(s.label_zh) || (l == null ? void 0 : l.menuName) || '',
    label_en: S(s.label_en),
    label_es: S(s.label_es),
  };
}
function Du(l, s) {
  return JSON.stringify(
    D(p({}, Ie(l == null ? void 0 : l.config)), {
      label_en: S(s.label_en).trim(),
      label_es: S(s.label_es).trim(),
      label_zh: S(s.label_zh).trim(),
    })
  );
}
function Iu() {
  const [l] = m.useForm(),
    [s] = m.useForm(),
    [t] = m.useForm(),
    [o, h] = d.exports.useState([]),
    [b, I] = d.exports.useState(),
    [Me, w] = d.exports.useState(!1),
    [Ae, M] = d.exports.useState(!1),
    [f, H] = d.exports.useState(null),
    [C, J] = d.exports.useState('create'),
    [Y, Z] = d.exports.useState('create'),
    [v, Q] = d.exports.useState(null),
    [$, z] = d.exports.useState(''),
    [F, X] = d.exports.useState({}),
    y = d.exports.useMemo(() => pu(o), [o]),
    L = d.exports.useMemo(() => _e(y), [y]),
    E = G(y, b),
    n = k(E) ? E : null,
    ee = d.exports.useMemo(
      () => ((n == null ? void 0 : n.children) || []).filter(je),
      [n]
    ),
    Oe = d.exports.useMemo(
      () =>
        ee.filter((i) => {
          var te;
          const r =
              (te = F.menuCode) == null ? void 0 : te.trim().toLowerCase(),
            c = r ? (i.menuCode || '').toLowerCase().includes(r) : !0,
            g = F.menuType
              ? i.menuType === F.menuType ||
                (F.menuType === 'DOM' && i.menuType === 'ELEMENT')
              : !0,
            Je = F.activeStatus ? i.activeStatus === F.activeStatus : !0;
          return c && g && Je;
        }),
      [ee, F]
    ),
    ue = d.exports.useMemo(() => {
      const i = xu(C === 'edit' ? E : null);
      return C === 'edit' && (E == null ? void 0 : E.id) && i.add(E.id), i;
    }, [C, E]),
    Pe = d.exports.useMemo(() => ye(L, ue), [L, ue]),
    U = m.useWatch('menuType', s),
    le = K((n == null ? void 0 : n.menuCode) || '', U),
    se = (i) => {
      const r = i.activeStatus === 2,
        c = je(i) ? '\u9875\u9762\u5143\u7D20' : '\u83DC\u5355';
      B.confirm({
        title: `${r ? '\u542F\u7528' : '\u505C\u7528'}${c}`,
        content: `\u786E\u8BA4${r ? '\u542F\u7528' : '\u505C\u7528'}${c} ${
          i.menuName || i.menuCode
        }\uFF1F`,
        onOk: async () => {
          await tu(i.id, r ? 1 : 2),
            V.success(`${c}\u5DF2${r ? '\u542F\u7528' : '\u505C\u7528'}`),
            await j();
        },
      });
    },
    ke = (i) => {
      const r = i.activeStatus === 2;
      return e.exports.jsxDEV(
        'div',
        {
          className: `${a['tree-node-title']} ${
            r ? a['tree-node-disabled'] : ''
          }`,
          children: [
            e.exports.jsxDEV(
              'div',
              {
                className: a['tree-node-content'],
                children: [
                  Se(i.menuType),
                  i.icon ? R(i.icon) : null,
                  e.exports.jsxDEV(
                    'span',
                    {
                      className: a['tree-node-name'],
                      children: i.menuName || i.menuCode || String(i.id),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 373, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 370, columnNumber: 9 },
              this
            ),
            e.exports.jsxDEV(
              'div',
              {
                className: a['tree-node-actions'],
                onClick: (c) => c.stopPropagation(),
                children: [
                  e.exports.jsxDEV(
                    x,
                    {
                      type: 'text',
                      size: 'mini',
                      className: r ? void 0 : a['stop-menu-button'],
                      status: r ? 'success' : void 0,
                      icon: r
                        ? e.exports.jsxDEV(
                            de,
                            {},
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 386, columnNumber: 32 },
                            this
                          )
                        : e.exports.jsxDEV(
                            Ne,
                            {},
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 386, columnNumber: 52 },
                            this
                          ),
                      onClick: () => se(i),
                      children: r ? '\u542F\u7528' : '\u505C\u7528',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 381, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    x,
                    {
                      type: 'text',
                      size: 'mini',
                      icon: e.exports.jsxDEV(
                        fe,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 394, columnNumber: 19 },
                        this
                      ),
                      onClick: () => ze(i),
                      children: '\u7F16\u8F91',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 391, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    x,
                    {
                      type: 'text',
                      size: 'mini',
                      status: 'danger',
                      icon: e.exports.jsxDEV(
                        be,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 403, columnNumber: 19 },
                        this
                      ),
                      onClick: () =>
                        B.confirm({
                          title: '\u5220\u9664\u83DC\u5355',
                          content: `\u786E\u8BA4\u5220\u9664\u83DC\u5355 ${
                            i.menuName || i.menuCode
                          }\uFF1F`,
                          onOk: async () => {
                            await he(i.id),
                              V.success('\u83DC\u5355\u5DF2\u5220\u9664'),
                              b === i.id && I(void 0),
                              await j();
                          },
                        }),
                      children: '\u5220\u9664',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 399, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 377, columnNumber: 9 },
              this
            ),
          ],
        },
        void 0,
        !0,
        { fileName: u, lineNumber: 365, columnNumber: 7 },
        this
      );
    },
    ie = (i = []) =>
      i.map((r) => ({
        key: String(r.id),
        value: r.id,
        title: ke(r),
        children: ie(r.children || []),
      })),
    j = async (i = !1) => {
      const c = (await ru()) || [];
      if ((h(c), i)) {
        const g = Ce(c);
        I(g == null ? void 0 : g.id);
      }
    };
  d.exports.useEffect(() => {
    j(!0);
  }, []);
  const $e = () => {
      const i = (n == null ? void 0 : n.id) || T,
        r = W(y, i);
      J('create'),
        z(r),
        l.resetFields(),
        l.setFieldsValue({
          parentId: i,
          codeSuffix: '',
          menuName: '',
          label_zh: '',
          label_en: '',
          label_es: '',
          menuType: 'MENU',
          visible: 1,
          sortOrder: 100,
        }),
        w(!0);
    },
    ze = (i = n) => {
      if (!i) return;
      I(i.id);
      const r = W(y, i.parentId);
      J('edit'), z(r), l.resetFields();
      const c = we(i);
      l.setFieldsValue(
        D(p(p({}, i), c), {
          parentId: i.parentId || T,
          codeSuffix: ge(i.menuCode, r),
          icon: Be(i.icon),
          activeStatus: void 0,
        })
      ),
        w(!0);
    },
    Le = (i) => {
      const r = W(y, Number(i));
      z(r);
    },
    Ue = () => {
      !n ||
        (Z('create'),
        Q(null),
        s.resetFields(),
        s.setFieldsValue({ parentId: n.id, codeSuffix: '', menuType: void 0 }),
        M(!0));
    },
    qe = (i) => {
      Z('edit'), Q(i), s.resetFields();
      const r = K((n == null ? void 0 : n.menuCode) || '', i.menuType);
      s.setFieldsValue(D(p({}, i), { codeSuffix: ge(i.menuCode, r) })), M(!0);
    },
    Ge = async () => {
      const i = await l.validate(),
        r = C === 'edit' ? n : null,
        c = D(p({}, i), {
          menuName: i.label_zh,
          menuCode: hu($, i.codeSuffix),
          config: Du(r, i),
        });
      delete c.codeSuffix,
        delete c.label_zh,
        delete c.label_en,
        delete c.label_es,
        C === 'create'
          ? (await ve(c), V.success('\u83DC\u5355\u5DF2\u65B0\u589E'))
          : n &&
            (await De(D(p({}, c), { id: n.id })),
            V.success('\u83DC\u5355\u5DF2\u66F4\u65B0')),
        w(!1),
        await j();
    },
    Re = async () => {
      if (!n) return;
      const i = await s.validate(),
        r = D(p({}, i), {
          parentId: n.id,
          menuCode: vu(n.menuCode || '', i.menuType, i.codeSuffix),
          activeStatus: (v == null ? void 0 : v.activeStatus) || 1,
          visible: (v == null ? void 0 : v.visible) || 1,
          sortOrder: (v == null ? void 0 : v.sortOrder) || 100,
        });
      delete r.codeSuffix,
        Y === 'create'
          ? (await ve(r),
            V.success('\u9875\u9762\u5143\u7D20\u5DF2\u65B0\u589E'))
          : v &&
            (await De(D(p({}, r), { id: v.id })),
            V.success('\u9875\u9762\u5143\u7D20\u5DF2\u66F4\u65B0')),
        M(!1),
        await j();
    },
    We = () => {
      const i = t.getFieldsValue();
      X(i);
    },
    Ke = () => {
      t.resetFields(), X({});
    },
    He = [
      { title: '\u5143\u7D20\u540D\u79F0', dataIndex: 'menuName', width: 160 },
      { title: '\u5143\u7D20\u7F16\u7801', dataIndex: 'menuCode', width: 260 },
      {
        title: '\u7C7B\u578B',
        dataIndex: 'menuType',
        width: 110,
        render: (i) =>
          e.exports.jsxDEV(
            P,
            { children: Te(i) },
            void 0,
            !1,
            { fileName: u, lineNumber: 592, columnNumber: 26 },
            this
          ),
      },
      {
        title: '\u542F\u7528\u72B6\u6001',
        dataIndex: 'activeStatus',
        width: 110,
        render: (i) =>
          i === 2
            ? e.exports.jsxDEV(
                P,
                { color: 'red', children: '\u505C\u7528' },
                void 0,
                !1,
                { fileName: u, lineNumber: 600, columnNumber: 11 },
                this
              )
            : e.exports.jsxDEV(
                P,
                { color: 'green', children: '\u542F\u7528' },
                void 0,
                !1,
                { fileName: u, lineNumber: 602, columnNumber: 11 },
                this
              ),
      },
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 280,
        fixed: 'right',
        render: (i, r) => {
          const c = r.activeStatus === 2;
          return e.exports.jsxDEV(
            O,
            {
              className: a.operations,
              size: 10,
              wrap: !0,
              children: [
                e.exports.jsxDEV(
                  x,
                  {
                    type: 'text',
                    size: 'small',
                    className: c ? void 0 : a['stop-menu-button'],
                    status: c ? 'success' : void 0,
                    icon: c
                      ? e.exports.jsxDEV(
                          de,
                          {},
                          void 0,
                          !1,
                          { fileName: u, lineNumber: 619, columnNumber: 34 },
                          this
                        )
                      : e.exports.jsxDEV(
                          Ne,
                          {},
                          void 0,
                          !1,
                          { fileName: u, lineNumber: 619, columnNumber: 54 },
                          this
                        ),
                    onClick: () => se(r),
                    children: c ? '\u542F\u7528' : '\u505C\u7528',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 614, columnNumber: 13 },
                  this
                ),
                e.exports.jsxDEV(
                  x,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      iu,
                      {},
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 627, columnNumber: 21 },
                      this
                    ),
                    onClick: () => H(r),
                    children: '\u67E5\u770B',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 624, columnNumber: 13 },
                  this
                ),
                e.exports.jsxDEV(
                  x,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      fe,
                      {},
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 635, columnNumber: 21 },
                      this
                    ),
                    onClick: () => qe(r),
                    children: '\u4FEE\u6539',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 632, columnNumber: 13 },
                  this
                ),
                e.exports.jsxDEV(
                  x,
                  {
                    type: 'text',
                    status: 'danger',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      be,
                      {},
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 644, columnNumber: 21 },
                      this
                    ),
                    onClick: () =>
                      B.confirm({
                        title: '\u5220\u9664\u9875\u9762\u5143\u7D20',
                        content: `\u786E\u8BA4\u5220\u9664 ${
                          r.menuName || r.menuCode
                        }\uFF1F`,
                        onOk: async () => {
                          await he(r.id),
                            V.success(
                              '\u9875\u9762\u5143\u7D20\u5DF2\u5220\u9664'
                            ),
                            await j();
                        },
                      }),
                    children: '\u5220\u9664',
                  },
                  void 0,
                  !1,
                  { fileName: u, lineNumber: 640, columnNumber: 13 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: u, lineNumber: 613, columnNumber: 11 },
            this
          );
        },
      },
    ];
  return e.exports.jsxDEV(
    q,
    {
      children: [
        e.exports.jsxDEV(
          au,
          { heading: 6, children: '\u83DC\u5355\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: u, lineNumber: 667, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: a['button-group'],
            children: [
              e.exports.jsxDEV(
                O,
                {
                  children: e.exports.jsxDEV(
                    x,
                    {
                      type: 'primary',
                      icon: e.exports.jsxDEV(
                        me,
                        {},
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 670, columnNumber: 40 },
                        this
                      ),
                      onClick: $e,
                      children: '\u65B0\u589E\u83DC\u5355',
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 670, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 669, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                x,
                {
                  icon: e.exports.jsxDEV(
                    ce,
                    {},
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 674, columnNumber: 23 },
                    this
                  ),
                  onClick: j,
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 674, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 668, columnNumber: 7 },
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
                    Xe,
                    {
                      blockNode: !0,
                      treeData: ie(L),
                      selectedKeys: b ? [String(b)] : [],
                      onSelect: (i) => I(i[0] ? Number(i[0]) : void 0),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 681, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: u, lineNumber: 680, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                'div',
                {
                  className: a['detail-panel'],
                  children: [
                    e.exports.jsxDEV(
                      q,
                      {
                        title: '\u8D44\u6E90\u4FE1\u606F',
                        children: n
                          ? e.exports.jsxDEV(
                              'div',
                              {
                                className: a['resource-card-content'],
                                children: [
                                  n.icon
                                    ? e.exports.jsxDEV(
                                        'div',
                                        {
                                          className: a['resource-bg-icon'],
                                          children: R(n.icon),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 695,
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
                                                        n.menuName || '-',
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: u,
                                                      lineNumber: 702,
                                                      columnNumber: 23,
                                                    },
                                                    this
                                                  ),
                                                  Se(n.menuType),
                                                ],
                                              },
                                              void 0,
                                              !0,
                                              {
                                                fileName: u,
                                                lineNumber: 701,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            e.exports.jsxDEV(
                                              'div',
                                              {
                                                className:
                                                  a['resource-code-row'],
                                                children: n.menuCode
                                                  ? e.exports.jsxDEV(
                                                      mu,
                                                      {
                                                        className:
                                                          a['resource-code'],
                                                        copyable: !0,
                                                        children: n.menuCode,
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: u,
                                                        lineNumber: 709,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    )
                                                  : e.exports.jsxDEV(
                                                      'span',
                                                      {
                                                        className:
                                                          a['resource-code'],
                                                        children: '-',
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: u,
                                                        lineNumber: 713,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: u,
                                                lineNumber: 707,
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
                                          lineNumber: 700,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: u,
                                      lineNumber: 699,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  e.exports.jsxDEV(
                                    pe,
                                    {
                                      className: a['resource-descriptions'],
                                      column: 2,
                                      data: (() => {
                                        var r;
                                        const i = we(n);
                                        return [
                                          {
                                            label: '\u4E2D\u6587\u540D\u79F0',
                                            value: i.label_zh || '-',
                                          },
                                          {
                                            label: '\u8DEF\u7531',
                                            value: n.routePath || '-',
                                          },
                                          {
                                            label: '\u82F1\u6587\u540D\u79F0',
                                            value: i.label_en || '-',
                                          },
                                          {
                                            label: '\u7EC4\u4EF6\u8DEF\u5F84',
                                            value: n.componentPath || '-',
                                          },
                                          {
                                            label: '\u897F\u8BED\u540D\u79F0',
                                            value: i.label_es || '-',
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
                                      lineNumber: 718,
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
                                lineNumber: 693,
                                columnNumber: 15,
                              },
                              this
                            )
                          : '\u8BF7\u9009\u62E9\u5DE6\u4FA7\u76EE\u5F55\u6216\u83DC\u5355\u8282\u70B9',
                      },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 691, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      q,
                      {
                        title: '\u9875\u9762\u5143\u7D20',
                        className: a['element-card'],
                        children: [
                          e.exports.jsxDEV(
                            'div',
                            {
                              className: a['element-toolbar'],
                              children: [
                                e.exports.jsxDEV(
                                  m,
                                  {
                                    form: t,
                                    className: a['element-search-form'],
                                    layout: 'inline',
                                    onSubmit: We,
                                    children: [
                                      e.exports.jsxDEV(
                                        m.Item,
                                        {
                                          label: '\u5143\u7D20\u7F16\u7801',
                                          field: 'menuCode',
                                          children: e.exports.jsxDEV(
                                            N,
                                            {
                                              allowClear: !0,
                                              placeholder:
                                                '\u8BF7\u8F93\u5165\u5143\u7D20\u7F16\u7801',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: u,
                                              lineNumber: 766,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 765,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                      e.exports.jsxDEV(
                                        m.Item,
                                        {
                                          label: '\u5143\u7D20\u7C7B\u578B',
                                          field: 'menuType',
                                          children: e.exports.jsxDEV(
                                            _,
                                            {
                                              allowClear: !0,
                                              options: Ee,
                                              placeholder:
                                                '\u8BF7\u9009\u62E9\u5143\u7D20\u7C7B\u578B',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: u,
                                              lineNumber: 769,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 768,
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
                                            _,
                                            {
                                              allowClear: !0,
                                              options: Nu,
                                              placeholder:
                                                '\u8BF7\u9009\u62E9\u542F\u7528\u72B6\u6001',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: u,
                                              lineNumber: 776,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 775,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                      e.exports.jsxDEV(
                                        m.Item,
                                        {
                                          className:
                                            a['element-search-actions'],
                                          children: e.exports.jsxDEV(
                                            O,
                                            {
                                              children: [
                                                e.exports.jsxDEV(
                                                  x,
                                                  {
                                                    type: 'primary',
                                                    htmlType: 'submit',
                                                    icon: e.exports.jsxDEV(
                                                      eu,
                                                      {},
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: u,
                                                        lineNumber: 787,
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
                                                    lineNumber: 784,
                                                    columnNumber: 21,
                                                  },
                                                  this
                                                ),
                                                e.exports.jsxDEV(
                                                  x,
                                                  {
                                                    icon: e.exports.jsxDEV(
                                                      ce,
                                                      {},
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: u,
                                                        lineNumber: 791,
                                                        columnNumber: 35,
                                                      },
                                                      this
                                                    ),
                                                    onClick: Ke,
                                                    children: '\u91CD\u7F6E',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: u,
                                                    lineNumber: 791,
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
                                              lineNumber: 783,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 782,
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
                                    lineNumber: 759,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                                (n == null ? void 0 : n.menuType) === 'MENU'
                                  ? e.exports.jsxDEV(
                                      x,
                                      {
                                        type: 'primary',
                                        icon: e.exports.jsxDEV(
                                          me,
                                          {},
                                          void 0,
                                          !1,
                                          {
                                            fileName: u,
                                            lineNumber: 800,
                                            columnNumber: 25,
                                          },
                                          this
                                        ),
                                        onClick: Ue,
                                        children: '\u6DFB\u52A0\u5143',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: u,
                                        lineNumber: 798,
                                        columnNumber: 17,
                                      },
                                      this
                                    )
                                  : null,
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: u, lineNumber: 758, columnNumber: 13 },
                            this
                          ),
                          e.exports.jsxDEV(
                            uu,
                            {
                              rowKey: 'id',
                              columns: He,
                              data: Oe,
                              pagination: !1,
                              scroll: { x: 860 },
                            },
                            void 0,
                            !1,
                            { fileName: u, lineNumber: 807, columnNumber: 13 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: u, lineNumber: 757, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: u, lineNumber: 690, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 679, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          B,
          {
            title:
              C === 'create'
                ? '\u65B0\u589E\u83DC\u5355'
                : '\u7F16\u8F91\u83DC\u5355',
            visible: Me,
            onOk: Ge,
            onCancel: () => w(!1),
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
                        lu,
                        {
                          treeData: Pe,
                          placeholder: '\u8BF7\u9009\u62E9\u7236\u83DC\u5355',
                          allowClear: !1,
                          onChange: Le,
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 837, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 832, columnNumber: 11 },
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
                            $
                              ? e.exports.jsxDEV(
                                  N,
                                  {
                                    value: `${$}:`,
                                    disabled: !0,
                                    className: a['code-prefix'],
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: u,
                                    lineNumber: 847,
                                    columnNumber: 17,
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
                                    lineNumber: 858,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: u,
                                lineNumber: 853,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: u, lineNumber: 845, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 844, columnNumber: 11 },
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
                          message: '\u8BF7\u8F93\u5165\u4E2D\u6587\u540D\u79F0',
                        },
                      ],
                      children: e.exports.jsxDEV(
                        N,
                        { placeholder: '\u5982 \u7CFB\u7EDF\u7BA1\u7406' },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 870, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 865, columnNumber: 11 },
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
                          message: '\u8BF7\u8F93\u5165\u82F1\u6587\u540D\u79F0',
                        },
                      ],
                      children: e.exports.jsxDEV(
                        N,
                        { placeholder: '\u5982 System' },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 877, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 872, columnNumber: 11 },
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
                          message: '\u8BF7\u8F93\u5165\u897F\u8BED\u540D\u79F0',
                        },
                      ],
                      children: e.exports.jsxDEV(
                        N,
                        { placeholder: '\u5982 Sistema' },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 884, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 879, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u83DC\u5355\u7C7B\u578B',
                      field: 'menuType',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        _,
                        { options: du },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 891, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 886, columnNumber: 11 },
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
                        { fileName: u, lineNumber: 894, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 893, columnNumber: 11 },
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
                        { fileName: u, lineNumber: 897, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 896, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u56FE\u6807',
                      field: 'icon',
                      children: e.exports.jsxDEV(
                        _,
                        {
                          showSearch: !0,
                          allowClear: !0,
                          placeholder: '\u8BF7\u9009\u62E9\u56FE\u6807',
                          filterOption: (i, r) =>
                            String(r.props.value)
                              .toLowerCase()
                              .includes(i.toLowerCase()),
                          children: Fe.map((i) =>
                            e.exports.jsxDEV(
                              _.Option,
                              {
                                value: i,
                                children: e.exports.jsxDEV(
                                  O,
                                  {
                                    children: [
                                      R(i),
                                      e.exports.jsxDEV(
                                        'span',
                                        { children: i },
                                        void 0,
                                        !1,
                                        {
                                          fileName: u,
                                          lineNumber: 914,
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
                                    lineNumber: 912,
                                    columnNumber: 19,
                                  },
                                  this
                                ),
                              },
                              i,
                              !1,
                              {
                                fileName: u,
                                lineNumber: 911,
                                columnNumber: 17,
                              },
                              this
                            )
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 900, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 899, columnNumber: 11 },
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
                        { fileName: u, lineNumber: 921, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 920, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u662F\u5426\u663E\u793A',
                      field: 'visible',
                      children: e.exports.jsxDEV(
                        _,
                        { options: fu },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 924, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 923, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 825, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 818, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          B,
          {
            title:
              Y === 'create'
                ? '\u65B0\u589E\u9875\u9762\u5143\u7D20'
                : '\u4FEE\u6539\u9875\u9762\u5143\u7D20',
            visible: Ae,
            onOk: Re,
            onCancel: () => M(!1),
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
                          value: (n == null ? void 0 : n.menuName) || '',
                          disabled: !0,
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 944, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 943, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m.Item,
                    {
                      label: '\u5143\u7D20\u7C7B\u578B',
                      field: 'menuType',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        _,
                        {
                          options: Ee,
                          placeholder:
                            '\u8BF7\u9009\u62E9\u5143\u7D20\u7C7B\u578B',
                        },
                        void 0,
                        !1,
                        { fileName: u, lineNumber: 951, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 946, columnNumber: 11 },
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
                          className: a['code-input-group'],
                          children: [
                            e.exports.jsxDEV(
                              N,
                              {
                                value: le ? `${le}:` : '',
                                disabled: !0,
                                className: a['element-code-prefix'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: u,
                                lineNumber: 955,
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
                                    className: a['code-suffix'],
                                    disabled: !U,
                                    placeholder: U
                                      ? '\u8BF7\u8F93\u5165\u8D44\u6E90\u7F16\u7801'
                                      : '\u8BF7\u5148\u9009\u62E9\u5143\u7D20\u7C7B\u578B',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: u,
                                    lineNumber: 965,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: u,
                                lineNumber: 960,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: u, lineNumber: 954, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 953, columnNumber: 11 },
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
                        { fileName: u, lineNumber: 980, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: u, lineNumber: 975, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: u, lineNumber: 936, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 929, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          B,
          {
            title: '\u9875\u9762\u5143\u7D20\u8BE6\u60C5',
            visible: !!f,
            footer: null,
            onCancel: () => H(null),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              pe,
              {
                column: 1,
                data: [
                  {
                    label: '\u5143\u7D20\u540D\u79F0',
                    value: (f == null ? void 0 : f.menuName) || '-',
                  },
                  {
                    label: '\u5143\u7D20\u7F16\u7801',
                    value: (f == null ? void 0 : f.menuCode) || '-',
                  },
                  {
                    label: '\u5143\u7D20\u7C7B\u578B',
                    value: Te(f == null ? void 0 : f.menuType),
                  },
                  {
                    label: '\u542F\u7528\u72B6\u6001',
                    value:
                      (f == null ? void 0 : f.activeStatus) === 2
                        ? '\u505C\u7528'
                        : '\u542F\u7528',
                  },
                ],
              },
              void 0,
              !1,
              { fileName: u, lineNumber: 992, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: u, lineNumber: 985, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: u, lineNumber: 666, columnNumber: 5 },
    this
  );
}
export { Iu as default };
