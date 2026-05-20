var We = Object.defineProperty,
  Je = Object.defineProperties;
var Xe = Object.getOwnPropertyDescriptors;
var P = Object.getOwnPropertySymbols;
var se = Object.prototype.hasOwnProperty,
  re = Object.prototype.propertyIsEnumerable;
var ie = (e, t, l) =>
    t in e
      ? We(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (e[t] = l),
  h = (e, t) => {
    for (var l in t || (t = {})) se.call(t, l) && ie(e, l, t[l]);
    if (P) for (var l of P(t)) re.call(t, l) && ie(e, l, t[l]);
    return e;
  },
  _ = (e, t) => Je(e, Xe(t));
var oe = (e, t) => {
  var l = {};
  for (var r in e) se.call(e, r) && t.indexOf(r) < 0 && (l[r] = e[r]);
  if (e != null && P)
    for (var r of P(e)) t.indexOf(r) < 0 && re.call(e, r) && (l[r] = e[r]);
  return l;
};
import {
  ag as o,
  r as d,
  a as c,
  av as L,
  j as u,
  S as $,
  B as b,
  aT as ce,
  $ as de,
  aY as Ye,
  b as k,
  aZ as me,
  a_ as pe,
  aQ as fe,
  aR as he,
  aS as B,
  M as D,
  aX as Fe,
  ah as p,
  K as x,
  aU as He,
  aM as Qe,
  a$ as Ze,
  T as eu,
  X as be,
  aV as uu,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  i as tu,
  j as nu,
  t as lu,
  k as au,
  l as su,
  m as ru,
  n as iu,
  o as ou,
  p as cu,
  q as du,
} from './access-permission.bbfa6ab6.js';
import { c as mu } from './index.04d9875a.js';
import './access-control.2c5ad8d6.js';
const pu = '_operations_sv72m_84';
var i = {
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
  operations: pu,
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
};
const { Title: fu, Text: hu } = eu,
  Fu = ['CATALOG', 'MENU'],
  I = 0,
  bu = [
    { label: '\u76EE\u5F55', value: 'CATALOG' },
    { label: '\u83DC\u5355', value: 'MENU' },
  ],
  Ce = [
    { label: '\u6309\u94AE', value: 'BUTTON' },
    { label: '\u4EA4\u4E92\u7EC4\u4EF6', value: 'FORM' },
    { label: '\u6807\u7B7E\u9875', value: 'TAB' },
    { label: '\u6570\u636E\u5217', value: 'COLUMN' },
  ],
  Cu = [
    { label: '\u542F\u7528', value: 1 },
    { label: '\u505C\u7528', value: 2 },
  ],
  _u = [
    { label: '\u663E\u793A', value: 1 },
    { label: '\u9690\u85CF', value: 2 },
  ],
  _e = Object.keys(be)
    .filter((e) => e.startsWith('Icon'))
    .sort();
function V(e) {
  return e ? Fu.includes(e.menuType || 'MENU') : !1;
}
function ve(e = []) {
  return e.reduce((t, l) => {
    const F = l,
      { children: r } = F,
      C = oe(F, ['children']);
    return (
      t.push(_(h({}, C), { children: r })),
      (r == null ? void 0 : r.length) && t.push(...ve(r)),
      t
    );
  }, []);
}
function vu(e = []) {
  const t = new Map(),
    l = [];
  return (
    e.forEach((r) => {
      t.set(r.id, _(h({}, r), { children: [] }));
    }),
    t.forEach((r) => {
      const C = r.parentId || I,
        F = t.get(C);
      F && F.id !== r.id
        ? (F.children = [...(F.children || []), r])
        : l.push(r);
    }),
    l
  );
}
function Eu(e = []) {
  return vu(ve(e));
}
function Ee(e = []) {
  return e
    .filter(V)
    .map((t) => _(h({}, t), { children: Ee(t.children || []) }));
}
function G(e = [], t) {
  for (const l of e) {
    if (l.id === t) return l;
    const r = G(l.children || [], t);
    if (r) return r;
  }
  return null;
}
function De(e = []) {
  for (const t of e) {
    if (V(t)) return t;
    const l = De(t.children || []);
    if (l) return l;
  }
  return null;
}
function Du(e) {
  const t = new Set(),
    l = (r = []) => {
      r.forEach((C) => {
        t.add(C.id), l(C.children || []);
      });
    };
  return l((e == null ? void 0 : e.children) || []), t;
}
function Be(e = [], t = new Set()) {
  return [
    { key: '0', value: I, title: '\u6839\u8282\u70B9', children: void 0 },
    ...e.map((l) => ({
      key: String(l.id),
      value: l.id,
      title: `${l.menuName || l.menuCode || l.id}${
        l.menuCode ? `\uFF08${l.menuCode}\uFF09` : ''
      }`,
      disabled: t.has(l.id),
      children: Be(l.children || [], t).slice(1),
    })),
  ];
}
function xe(e) {
  const t = mu(e);
  return t && _e.includes(t) ? t : void 0;
}
function ge(e) {
  return u(k, {
    className: e === 'CATALOG' ? i['catalog-tag'] : void 0,
    color: e === 'MENU' ? 'arcoblue' : void 0,
    children: e === 'CATALOG' ? '\u76EE\u5F55' : '\u83DC\u5355',
  });
}
function R(e) {
  const t = xe(e),
    l = t ? be[t] : null;
  return l ? u(l, { className: i['icon-preview'] }) : null;
}
function K(e, t) {
  var l;
  return !t || t === I
    ? 'menu'
    : ((l = G(e, t)) == null ? void 0 : l.menuCode) || 'menu';
}
function ye(e, t) {
  return e
    ? (t && e.startsWith(`${t}:`)) || (t && e.startsWith(`${t}.`))
      ? e.slice(t.length + 1)
      : e
    : '';
}
function Bu(e, t) {
  const l = t.trim();
  return e ? `${e}:${l}` : l;
}
function W(e = '', t) {
  return e && t ? `${e}:${t.toLowerCase()}` : '';
}
function xu(e, t, l) {
  const r = W(e, t),
    C = l.trim();
  return r ? `${r}:${C}` : C;
}
function Se(e) {
  return e === 'CATALOG'
    ? '\u76EE\u5F55'
    : e === 'MENU'
    ? '\u83DC\u5355'
    : e === 'BUTTON'
    ? '\u6309\u94AE'
    : e === 'ELEMENT' || e === 'DOM'
    ? '\u9875\u9762\u5143\u7D20'
    : e === 'API'
    ? 'API \u63A5\u53E3'
    : e || '-';
}
function Ne(e) {
  if (!e) return {};
  if (typeof e == 'string')
    try {
      const t = JSON.parse(e);
      return t && typeof t == 'object' && !Array.isArray(t) ? t : {};
    } catch {
      return {};
    }
  return typeof e == 'object' && !Array.isArray(e) ? e : {};
}
function S(e) {
  return typeof e == 'string' ? e : '';
}
function Te(e) {
  const t = Ne(e == null ? void 0 : e.config);
  return {
    label_zh: S(t.label_zh) || (e == null ? void 0 : e.menuName) || '',
    label_en: S(t.label_en),
    label_es: S(t.label_es),
  };
}
function gu(e, t) {
  return JSON.stringify(
    _(h({}, Ne(e == null ? void 0 : e.config)), {
      label_en: S(t.label_en).trim(),
      label_es: S(t.label_es).trim(),
      label_zh: S(t.label_zh).trim(),
    })
  );
}
function ku() {
  const [e] = o.useForm(),
    [t] = o.useForm(),
    [l] = o.useForm(),
    [r, C] = d.exports.useState([]),
    [F, w] = d.exports.useState(),
    [Ie, A] = d.exports.useState(!1),
    [we, O] = d.exports.useState(!1),
    [f, J] = d.exports.useState(null),
    [g, X] = d.exports.useState('create'),
    [Y, H] = d.exports.useState('create'),
    [v, Q] = d.exports.useState(null),
    [Z, ee] = d.exports.useState([]),
    [z, j] = d.exports.useState(''),
    [ue, te] = d.exports.useState({}),
    y = d.exports.useMemo(() => Eu(r), [r]),
    U = d.exports.useMemo(() => Ee(y), [y]),
    E = G(y, F),
    s = V(E) ? E : null,
    Ae = d.exports.useMemo(() => Z, [Z]),
    ne = d.exports.useMemo(() => {
      const n = Du(g === 'edit' ? E : null);
      return g === 'edit' && (E == null ? void 0 : E.id) && n.add(E.id), n;
    }, [g, E]),
    Oe = d.exports.useMemo(() => Be(U, ne), [U, ne]),
    M = o.useWatch('elementType', t),
    le = W((s == null ? void 0 : s.menuCode) || '', M),
    Me = (n) => {
      const a = n.activeStatus === 2;
      B.confirm({
        title: `${a ? '\u542F\u7528' : '\u505C\u7528'}\u83DC\u5355`,
        content: `\u786E\u8BA4${
          a ? '\u542F\u7528' : '\u505C\u7528'
        }\u83DC\u5355 ${n.menuName || n.menuCode}\uFF1F`,
        onOk: async () => {
          await lu(n.id, a ? 1 : 2),
            D.success(
              `\u83DC\u5355\u5DF2${a ? '\u542F\u7528' : '\u505C\u7528'}`
            ),
            await N();
        },
      });
    },
    Pe = (n) => {
      const a = n.activeStatus === 2;
      B.confirm({
        title: `${a ? '\u542F\u7528' : '\u505C\u7528'}\u9875\u9762\u5143\u7D20`,
        content: `\u786E\u8BA4${
          a ? '\u542F\u7528' : '\u505C\u7528'
        }\u9875\u9762\u5143\u7D20 ${n.elementName || n.elementCode}\uFF1F`,
        onOk: async () => {
          await du(n.id, a ? 1 : 2),
            D.success(
              `\u9875\u9762\u5143\u7D20\u5DF2${
                a ? '\u542F\u7528' : '\u505C\u7528'
              }`
            ),
            await T();
        },
      });
    },
    $e = (n) => {
      const a = n.activeStatus === 2;
      return c('div', {
        className: `${i['tree-node-title']} ${
          a ? i['tree-node-disabled'] : ''
        }`,
        children: [
          c('div', {
            className: i['tree-node-content'],
            children: [
              ge(n.menuType),
              n.icon ? R(n.icon) : null,
              u('span', {
                className: i['tree-node-name'],
                children: n.menuName || n.menuCode || String(n.id),
              }),
            ],
          }),
          c('div', {
            className: i['tree-node-actions'],
            onClick: (m) => m.stopPropagation(),
            children: [
              u(b, {
                type: 'text',
                size: 'mini',
                className: a ? void 0 : i['stop-menu-button'],
                status: a ? 'success' : void 0,
                icon: a ? u(me, {}) : u(pe, {}),
                onClick: () => Me(n),
                children: a ? '\u542F\u7528' : '\u505C\u7528',
              }),
              u(b, {
                type: 'text',
                size: 'mini',
                icon: u(fe, {}),
                onClick: () => ze(n),
                children: '\u7F16\u8F91',
              }),
              u(b, {
                type: 'text',
                size: 'mini',
                status: 'danger',
                icon: u(he, {}),
                onClick: () =>
                  B.confirm({
                    title: '\u5220\u9664\u83DC\u5355',
                    content: `\u786E\u8BA4\u5220\u9664\u83DC\u5355 ${
                      n.menuName || n.menuCode
                    }\uFF1F`,
                    onOk: async () => {
                      await nu(n.id),
                        D.success('\u83DC\u5355\u5DF2\u5220\u9664'),
                        F === n.id && w(void 0),
                        await N();
                    },
                  }),
                children: '\u5220\u9664',
              }),
            ],
          }),
        ],
      });
    },
    ae = (n = []) =>
      n.map((a) => ({
        key: String(a.id),
        value: a.id,
        title: $e(a),
        children: ae(a.children || []),
      })),
    N = async (n = !1) => {
      const m = (await au()) || [];
      if ((C(m), n)) {
        const q = De(m);
        w(q == null ? void 0 : q.id);
      }
    },
    T = d.exports.useCallback(async () => {
      if (!(s == null ? void 0 : s.id) || s.menuType !== 'MENU') {
        ee([]);
        return;
      }
      const n = await tu(h({ menuId: s.id }, ue));
      ee(n || []);
    }, [s == null ? void 0 : s.id, s == null ? void 0 : s.menuType, ue]);
  d.exports.useEffect(() => {
    N(!0);
  }, []),
    d.exports.useEffect(() => {
      T();
    }, [T]);
  const ke = () => {
      const n = (s == null ? void 0 : s.id) || I,
        a = K(y, n);
      X('create'),
        j(a),
        e.resetFields(),
        e.setFieldsValue({
          parentId: n,
          codeSuffix: '',
          menuName: '',
          label_zh: '',
          label_en: '',
          label_es: '',
          menuType: 'MENU',
          visible: 1,
          sortOrder: 100,
        }),
        A(!0);
    },
    ze = (n = s) => {
      if (!n) return;
      w(n.id);
      const a = K(y, n.parentId);
      X('edit'), j(a), e.resetFields();
      const m = Te(n);
      e.setFieldsValue(
        _(h(h({}, n), m), {
          parentId: n.parentId || I,
          codeSuffix: ye(n.menuCode, a),
          icon: xe(n.icon),
          activeStatus: void 0,
        })
      ),
        A(!0);
    },
    je = (n) => {
      const a = K(y, Number(n));
      j(a);
    },
    Ue = () => {
      !s ||
        (H('create'),
        Q(null),
        t.resetFields(),
        t.setFieldsValue({
          menuId: s.id,
          codeSuffix: '',
          elementType: void 0,
          elementName: '',
          sortOrder: 100,
        }),
        O(!0));
    },
    qe = (n) => {
      H('edit'), Q(n), t.resetFields();
      const a = W((s == null ? void 0 : s.menuCode) || '', n.elementType);
      t.setFieldsValue(_(h({}, n), { codeSuffix: ye(n.elementCode, a) })),
        O(!0);
    },
    Le = async () => {
      const n = await e.validate(),
        a = g === 'edit' ? s : null,
        m = _(h({}, n), {
          menuName: n.label_zh,
          menuCode: Bu(z, n.codeSuffix),
          config: gu(a, n),
        });
      delete m.codeSuffix,
        delete m.label_zh,
        delete m.label_en,
        delete m.label_es,
        g === 'create'
          ? (await su(m), D.success('\u83DC\u5355\u5DF2\u65B0\u589E'))
          : s &&
            (await ru(_(h({}, m), { id: s.id })),
            D.success('\u83DC\u5355\u5DF2\u66F4\u65B0')),
        A(!1),
        await N();
    },
    Ve = async () => {
      if (!s) return;
      const n = await t.validate(),
        a = _(h({}, n), {
          menuId: s.id,
          elementCode: xu(s.menuCode || '', n.elementType, n.codeSuffix),
          activeStatus: v == null ? void 0 : v.activeStatus,
          sortOrder: (v == null ? void 0 : v.sortOrder) || n.sortOrder || 100,
        });
      delete a.codeSuffix,
        Y === 'create'
          ? (await iu(a),
            D.success('\u9875\u9762\u5143\u7D20\u5DF2\u65B0\u589E'))
          : v &&
            (await ou(_(h({}, a), { id: v.id })),
            D.success('\u9875\u9762\u5143\u7D20\u5DF2\u66F4\u65B0')),
        O(!1),
        await T();
    },
    Ge = () => {
      const n = l.getFieldsValue();
      te(n);
    },
    Re = () => {
      l.resetFields(), te({});
    },
    Ke = [
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
        render: (n) => u(k, { children: Se(n) }),
      },
      {
        title: '\u542F\u7528\u72B6\u6001',
        dataIndex: 'activeStatus',
        width: 110,
        render: (n) =>
          n === 2
            ? u(k, { color: 'red', children: '\u505C\u7528' })
            : u(k, { color: 'green', children: '\u542F\u7528' }),
      },
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 280,
        fixed: 'right',
        render: (n, a) => {
          const m = a.activeStatus === 2;
          return c($, {
            className: i.operations,
            size: 10,
            wrap: !0,
            children: [
              u(b, {
                type: 'text',
                size: 'small',
                className: m ? void 0 : i['stop-menu-button'],
                status: m ? 'success' : void 0,
                icon: m ? u(me, {}) : u(pe, {}),
                onClick: () => Pe(a),
                children: m ? '\u542F\u7528' : '\u505C\u7528',
              }),
              u(b, {
                type: 'text',
                size: 'small',
                icon: u(uu, {}),
                onClick: () => J(a),
                children: '\u67E5\u770B',
              }),
              u(b, {
                type: 'text',
                size: 'small',
                icon: u(fe, {}),
                onClick: () => qe(a),
                children: '\u4FEE\u6539',
              }),
              u(b, {
                type: 'text',
                status: 'danger',
                size: 'small',
                icon: u(he, {}),
                onClick: () =>
                  B.confirm({
                    title: '\u5220\u9664\u9875\u9762\u5143\u7D20',
                    content: `\u786E\u8BA4\u5220\u9664 ${
                      a.elementName || a.elementCode
                    }\uFF1F`,
                    onOk: async () => {
                      await cu(a.id),
                        D.success('\u9875\u9762\u5143\u7D20\u5DF2\u5220\u9664'),
                        await T();
                    },
                  }),
                children: '\u5220\u9664',
              }),
            ],
          });
        },
      },
    ];
  return c(L, {
    children: [
      u(fu, { heading: 6, children: '\u83DC\u5355\u7BA1\u7406' }),
      c('div', {
        className: i['button-group'],
        children: [
          u($, {
            children: u(b, {
              type: 'primary',
              icon: u(ce, {}),
              onClick: ke,
              children: '\u65B0\u589E\u83DC\u5355',
            }),
          }),
          u(b, { icon: u(de, {}), onClick: N, children: '\u5237\u65B0' }),
        ],
      }),
      c('div', {
        className: i['page-layout'],
        children: [
          u('div', {
            className: i['tree-panel'],
            children: u(Ye, {
              blockNode: !0,
              treeData: ae(U),
              selectedKeys: F ? [String(F)] : [],
              onSelect: (n) => w(n[0] ? Number(n[0]) : void 0),
            }),
          }),
          c('div', {
            className: i['detail-panel'],
            children: [
              u(L, {
                title: '\u8D44\u6E90\u4FE1\u606F',
                children: s
                  ? c('div', {
                      className: i['resource-card-content'],
                      children: [
                        s.icon
                          ? u('div', {
                              className: i['resource-bg-icon'],
                              children: R(s.icon),
                            })
                          : null,
                        u('div', {
                          className: i['resource-header'],
                          children: c('div', {
                            className: i['resource-title-wrap'],
                            children: [
                              c('div', {
                                className: i['resource-title-row'],
                                children: [
                                  u('div', {
                                    className: i['resource-title'],
                                    children: s.menuName || '-',
                                  }),
                                  ge(s.menuType),
                                ],
                              }),
                              u('div', {
                                className: i['resource-code-row'],
                                children: s.menuCode
                                  ? u(hu, {
                                      className: i['resource-code'],
                                      copyable: !0,
                                      children: s.menuCode,
                                    })
                                  : u('span', {
                                      className: i['resource-code'],
                                      children: '-',
                                    }),
                              }),
                            ],
                          }),
                        }),
                        u(Fe, {
                          className: i['resource-descriptions'],
                          column: 2,
                          data: (() => {
                            var a;
                            const n = Te(s);
                            return [
                              {
                                label: '\u4E2D\u6587\u540D\u79F0',
                                value: n.label_zh || '-',
                              },
                              {
                                label: '\u8DEF\u7531',
                                value: s.routePath || '-',
                              },
                              {
                                label: '\u82F1\u6587\u540D\u79F0',
                                value: n.label_en || '-',
                              },
                              {
                                label: '\u7EC4\u4EF6\u8DEF\u5F84',
                                value: s.componentPath || '-',
                              },
                              {
                                label: '\u897F\u8BED\u540D\u79F0',
                                value: n.label_es || '-',
                              },
                              {
                                label: '\u53EF\u89C1\u72B6\u6001',
                                value:
                                  s.visible === 2
                                    ? '\u9690\u85CF'
                                    : '\u663E\u793A',
                              },
                              {
                                label: '\u542F\u7528\u72B6\u6001',
                                value:
                                  s.activeStatus === 2
                                    ? '\u7981\u7528'
                                    : '\u542F\u7528',
                              },
                              {
                                label: '\u6392\u5E8F',
                                value: (a = s.sortOrder) != null ? a : '-',
                              },
                            ];
                          })(),
                        }),
                      ],
                    })
                  : '\u8BF7\u9009\u62E9\u5DE6\u4FA7\u76EE\u5F55\u6216\u83DC\u5355\u8282\u70B9',
              }),
              c(L, {
                title: '\u9875\u9762\u5143\u7D20',
                className: i['element-card'],
                children: [
                  c('div', {
                    className: i['element-toolbar'],
                    children: [
                      c(o, {
                        form: l,
                        className: i['element-search-form'],
                        layout: 'inline',
                        onSubmit: Ge,
                        children: [
                          u(o.Item, {
                            label: '\u5143\u7D20\u7F16\u7801',
                            field: 'elementCode',
                            children: u(p, {
                              allowClear: !0,
                              placeholder:
                                '\u8BF7\u8F93\u5165\u5143\u7D20\u7F16\u7801',
                            }),
                          }),
                          u(o.Item, {
                            label: '\u5143\u7D20\u7C7B\u578B',
                            field: 'elementType',
                            children: u(x, {
                              allowClear: !0,
                              options: Ce,
                              placeholder:
                                '\u8BF7\u9009\u62E9\u5143\u7D20\u7C7B\u578B',
                            }),
                          }),
                          u(o.Item, {
                            label: '\u542F\u7528\u72B6\u6001',
                            field: 'activeStatus',
                            children: u(x, {
                              allowClear: !0,
                              options: Cu,
                              placeholder:
                                '\u8BF7\u9009\u62E9\u542F\u7528\u72B6\u6001',
                            }),
                          }),
                          u(o.Item, {
                            className: i['element-search-actions'],
                            children: c($, {
                              children: [
                                u(b, {
                                  type: 'primary',
                                  htmlType: 'submit',
                                  icon: u(He, {}),
                                  children: '\u67E5\u8BE2',
                                }),
                                u(b, {
                                  icon: u(de, {}),
                                  onClick: Re,
                                  children: '\u91CD\u7F6E',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (s == null ? void 0 : s.menuType) === 'MENU'
                        ? u(b, {
                            type: 'primary',
                            icon: u(ce, {}),
                            onClick: Ue,
                            children: '\u6DFB\u52A0\u5143\u7D20',
                          })
                        : null,
                    ],
                  }),
                  u(Qe, {
                    rowKey: 'id',
                    columns: Ke,
                    data: Ae,
                    pagination: !1,
                    scroll: { x: 860 },
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u(B, {
        title:
          g === 'create'
            ? '\u65B0\u589E\u83DC\u5355'
            : '\u7F16\u8F91\u83DC\u5355',
        visible: Ie,
        onOk: Le,
        onCancel: () => A(!1),
        unmountOnExit: !0,
        children: c(o, {
          form: e,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            u(o.Item, {
              label: '\u7236\u83DC\u5355',
              field: 'parentId',
              rules: [{ required: !0 }],
              children: u(Ze, {
                treeData: Oe,
                placeholder: '\u8BF7\u9009\u62E9\u7236\u83DC\u5355',
                allowClear: !1,
                onChange: je,
              }),
            }),
            u(o.Item, {
              label: '\u83DC\u5355\u7F16\u7801',
              required: !0,
              children: c(p.Group, {
                compact: !0,
                className: i['code-input-group'],
                children: [
                  z
                    ? u(p, {
                        value: `${z}:`,
                        disabled: !0,
                        className: i['code-prefix'],
                      })
                    : null,
                  u(o.Item, {
                    field: 'codeSuffix',
                    noStyle: !0,
                    rules: [
                      {
                        required: !0,
                        message: '\u8BF7\u8F93\u5165\u83DC\u5355\u7F16\u7801',
                      },
                    ],
                    children: u(p, {
                      className: i['code-suffix'],
                      placeholder:
                        '\u8BF7\u8F93\u5165\u65E0\u524D\u7F00\u7F16\u7801',
                    }),
                  }),
                ],
              }),
            }),
            u(o.Item, {
              label: '\u4E2D\u6587\u540D\u79F0',
              field: 'label_zh',
              rules: [
                {
                  required: !0,
                  message: '\u8BF7\u8F93\u5165\u4E2D\u6587\u540D\u79F0',
                },
              ],
              children: u(p, {
                placeholder: '\u5982 \u7CFB\u7EDF\u7BA1\u7406',
              }),
            }),
            u(o.Item, {
              label: '\u82F1\u6587\u540D\u79F0',
              field: 'label_en',
              rules: [
                {
                  required: !0,
                  message: '\u8BF7\u8F93\u5165\u82F1\u6587\u540D\u79F0',
                },
              ],
              children: u(p, { placeholder: '\u5982 System' }),
            }),
            u(o.Item, {
              label: '\u897F\u8BED\u540D\u79F0',
              field: 'label_es',
              rules: [
                {
                  required: !0,
                  message: '\u8BF7\u8F93\u5165\u897F\u8BED\u540D\u79F0',
                },
              ],
              children: u(p, { placeholder: '\u5982 Sistema' }),
            }),
            u(o.Item, {
              label: '\u83DC\u5355\u7C7B\u578B',
              field: 'menuType',
              rules: [{ required: !0 }],
              children: u(x, { options: bu }),
            }),
            u(o.Item, {
              label: '\u8DEF\u7531\u8DEF\u5F84',
              field: 'routePath',
              children: u(p, {
                placeholder:
                  '\u83DC\u5355\u7C7B\u578B\u4E3A\u83DC\u5355\u65F6\u586B\u5199',
              }),
            }),
            u(o.Item, {
              label: '\u7EC4\u4EF6\u8DEF\u5F84',
              field: 'componentPath',
              children: u(p, { placeholder: '\u5982 system/menus' }),
            }),
            u(o.Item, {
              label: '\u56FE\u6807',
              field: 'icon',
              children: u(x, {
                showSearch: !0,
                allowClear: !0,
                placeholder: '\u8BF7\u9009\u62E9\u56FE\u6807',
                filterOption: (n, a) =>
                  String(a.props.value).toLowerCase().includes(n.toLowerCase()),
                children: _e.map((n) =>
                  u(
                    x.Option,
                    {
                      value: n,
                      children: c($, {
                        children: [R(n), u('span', { children: n })],
                      }),
                    },
                    n
                  )
                ),
              }),
            }),
            u(o.Item, {
              label: '\u6392\u5E8F',
              field: 'sortOrder',
              children: u(p, {}),
            }),
            u(o.Item, {
              label: '\u662F\u5426\u663E\u793A',
              field: 'visible',
              children: u(x, { options: _u }),
            }),
          ],
        }),
      }),
      u(B, {
        title:
          Y === 'create'
            ? '\u65B0\u589E\u9875\u9762\u5143\u7D20'
            : '\u4FEE\u6539\u9875\u9762\u5143\u7D20',
        visible: we,
        onOk: Ve,
        onCancel: () => O(!1),
        unmountOnExit: !0,
        children: c(o, {
          form: t,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            u(o.Item, {
              label: '\u7236\u83DC\u5355',
              children: u(p, {
                value: (s == null ? void 0 : s.menuName) || '',
                disabled: !0,
              }),
            }),
            u(o.Item, {
              label: '\u5143\u7D20\u7C7B\u578B',
              field: 'elementType',
              rules: [{ required: !0 }],
              children: u(x, {
                options: Ce,
                placeholder: '\u8BF7\u9009\u62E9\u5143\u7D20\u7C7B\u578B',
              }),
            }),
            u(o.Item, {
              label: '\u5143\u7D20\u7F16\u7801',
              required: !0,
              children: c(p.Group, {
                compact: !0,
                className: i['code-input-group'],
                children: [
                  u(p, {
                    value: le ? `${le}:` : '',
                    disabled: !0,
                    className: i['element-code-prefix'],
                  }),
                  u(o.Item, {
                    field: 'codeSuffix',
                    noStyle: !0,
                    rules: [
                      {
                        required: !0,
                        message: '\u8BF7\u8F93\u5165\u5143\u7D20\u7F16\u7801',
                      },
                    ],
                    children: u(p, {
                      className: i['code-suffix'],
                      disabled: !M,
                      placeholder: M
                        ? '\u8BF7\u8F93\u5165\u8D44\u6E90\u7F16\u7801'
                        : '\u8BF7\u5148\u9009\u62E9\u5143\u7D20\u7C7B\u578B',
                    }),
                  }),
                ],
              }),
            }),
            u(o.Item, {
              label: '\u5143\u7D20\u540D\u79F0',
              field: 'elementName',
              rules: [{ required: !0 }],
              children: u(p, {}),
            }),
            M === 'COLUMN'
              ? u(o.Item, {
                  label: '\u5B57\u6BB5\u540D\u79F0',
                  field: 'elementKey',
                  rules: [
                    {
                      required: !0,
                      message: '\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\u79F0',
                    },
                  ],
                  children: u(p, {
                    placeholder: '\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\u79F0',
                  }),
                })
              : null,
          ],
        }),
      }),
      u(B, {
        title: '\u9875\u9762\u5143\u7D20\u8BE6\u60C5',
        visible: !!f,
        footer: null,
        onCancel: () => J(null),
        unmountOnExit: !0,
        children: u(Fe, {
          column: 1,
          data: [
            {
              label: '\u5143\u7D20\u540D\u79F0',
              value: (f == null ? void 0 : f.elementName) || '-',
            },
            {
              label: '\u5143\u7D20\u7F16\u7801',
              value: (f == null ? void 0 : f.elementCode) || '-',
            },
            {
              label: '\u5143\u7D20\u7C7B\u578B',
              value: Se(f == null ? void 0 : f.elementType),
            },
            {
              label: '\u542F\u7528\u72B6\u6001',
              value:
                (f == null ? void 0 : f.activeStatus) === 2
                  ? '\u505C\u7528'
                  : '\u542F\u7528',
            },
          ],
        }),
      }),
    ],
  });
}
export { ku as default };
