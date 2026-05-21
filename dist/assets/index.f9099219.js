var hu = Object.defineProperty,
  pu = Object.defineProperties;
var fu = Object.getOwnPropertyDescriptors;
var L = Object.getOwnPropertySymbols;
var Ee = Object.prototype.hasOwnProperty,
  _e = Object.prototype.propertyIsEnumerable;
var De = (e, n, l) =>
    n in e
      ? hu(e, n, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (e[n] = l),
  b = (e, n) => {
    for (var l in n || (n = {})) Ee.call(n, l) && De(e, l, n[l]);
    if (L) for (var l of L(n)) _e.call(n, l) && De(e, l, n[l]);
    return e;
  },
  E = (e, n) => pu(e, fu(n));
var ve = (e, n) => {
  var l = {};
  for (var s in e) Ee.call(e, s) && n.indexOf(s) < 0 && (l[s] = e[s]);
  if (e != null && L)
    for (var s of L(e)) n.indexOf(s) < 0 && _e.call(e, s) && (l[s] = e[s]);
  return l;
};
import {
  ag as o,
  r as c,
  a as d,
  av as J,
  j as u,
  S as q,
  B as C,
  aT as ge,
  $ as Be,
  aY as Fu,
  b as $,
  aa as bu,
  aZ as xe,
  a_ as ye,
  aQ as Se,
  aR as Ne,
  aS as x,
  M as _,
  aX as Te,
  ah as m,
  K as T,
  aU as Cu,
  aM as Eu,
  a$ as Ie,
  T as _u,
  X as we,
  aV as Du,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  i as vu,
  j as gu,
  t as Bu,
  k as xu,
  m as yu,
  l as Su,
  n as Nu,
  o as Tu,
  p as Iu,
  q as wu,
  r as Au,
} from './access-permission.bc4283a5.js';
import { c as Mu } from './index.97399a5e.js';
import './access-control.a5391fe6.js';
const Pu = '_operations_1h400_90';
var i = {
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
  operations: Pu,
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
};
const { Title: Ou, Text: $u } = _u,
  ku = ['CATALOG', 'MENU'],
  y = 0,
  zu = [
    { label: '\u76EE\u5F55', value: 'CATALOG' },
    { label: '\u83DC\u5355', value: 'MENU' },
  ],
  Ae = [
    { label: '\u6309\u94AE', value: 'BUTTON' },
    { label: '\u4EA4\u4E92\u7EC4\u4EF6', value: 'FORM' },
    { label: '\u6807\u7B7E\u9875', value: 'TAB' },
    { label: '\u6570\u636E\u5217', value: 'COLUMN' },
  ],
  ju = [
    { label: '\u542F\u7528', value: 1 },
    { label: '\u505C\u7528', value: 2 },
  ],
  Vu = [
    { label: '\u663E\u793A', value: 1 },
    { label: '\u9690\u85CF', value: 2 },
  ],
  Me = Object.keys(we)
    .filter((e) => e.startsWith('Icon'))
    .sort();
function Pe(e) {
  return e ? ku.includes(e.menuType || 'MENU') : !1;
}
function Oe(e = []) {
  return e.reduce((n, l) => {
    const D = l,
      { children: s } = D,
      p = ve(D, ['children']);
    return (
      n.push(E(b({}, p), { children: s })),
      (s == null ? void 0 : s.length) && n.push(...Oe(s)),
      n
    );
  }, []);
}
function Uu(e = []) {
  const n = new Map(),
    l = [];
  return (
    e.forEach((s) => {
      n.set(s.id, E(b({}, s), { children: [] }));
    }),
    n.forEach((s) => {
      const p = s.parentId || y,
        D = n.get(p);
      D && D.id !== s.id
        ? (D.children = [...(D.children || []), s])
        : l.push(s);
    }),
    l
  );
}
function Lu(e = []) {
  return Uu(Oe(e));
}
function $e(e = []) {
  return e
    .filter((n) => n.menuType === 'CATALOG')
    .map((n) => E(b({}, n), { children: $e(n.children || []) }));
}
function X(e = [], n) {
  for (const l of e) {
    if (l.id === n) return l;
    const s = X(l.children || [], n);
    if (s) return s;
  }
  return null;
}
function ke(e = []) {
  for (const n of e) {
    if (Pe(n)) return n;
    const l = ke(n.children || []);
    if (l) return l;
  }
  return null;
}
function ze(e) {
  const n = new Set(),
    l = (s = []) => {
      s.forEach((p) => {
        n.add(p.id), l(p.children || []);
      });
    };
  return l((e == null ? void 0 : e.children) || []), n;
}
function Y(e = [], n = new Set()) {
  return [
    {
      key: String(y),
      value: String(y),
      title: '\u6839\u8282\u70B9',
      children: void 0,
    },
    ...e.map((l) => ({
      key: String(l.id),
      value: String(l.id),
      title: `${l.menuName || l.menuCode || l.id}${
        l.menuCode ? `\uFF08${l.menuCode}\uFF09` : ''
      }`,
      disabled: n.has(l.id),
      children: Y(l.children || [], n).slice(1),
    })),
  ];
}
function M(e) {
  const n = Number(e != null ? e : y);
  return Number.isFinite(n) ? n : y;
}
function H(e) {
  return String(e != null ? e : y);
}
function Q(e) {
  const n = Mu(e);
  return n && Me.includes(n) ? n : void 0;
}
function je(e) {
  return u($, {
    className: e === 'CATALOG' ? i['catalog-tag'] : void 0,
    color: e === 'MENU' ? 'arcoblue' : void 0,
    children: e === 'CATALOG' ? '\u76EE\u5F55' : '\u83DC\u5355',
  });
}
function Z(e) {
  const n = Q(e),
    l = n ? we[n] : null;
  return l ? u(l, { className: i['icon-preview'] }) : null;
}
function ee(e, n, l) {
  var p;
  if (!n || n === y)
    return l === 'CATALOG' ? 'catalog' : l === 'MENU' ? 'menu' : '';
  const s = ((p = X(e, n)) == null ? void 0 : p.menuCode) || '';
  return !s || !l
    ? ''
    : l === 'MENU'
    ? s.replace(/^catalog(?=:|$)/, 'menu')
    : s;
}
function Ve(e, n) {
  return e
    ? (n && e.startsWith(`${n}:`)) || (n && e.startsWith(`${n}.`))
      ? e.slice(n.length + 1)
      : e
    : '';
}
function qu(e, n) {
  const l = n.trim();
  return e ? `${e}:${l}` : l;
}
function ue(e = '', n) {
  return e && n ? `${e}:${n.toLowerCase()}` : '';
}
function Gu(e, n, l) {
  const s = ue(e, n),
    p = l.trim();
  return s ? `${s}:${p}` : p;
}
function Ue(e) {
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
function Le(e) {
  if (!e) return {};
  if (typeof e == 'string')
    try {
      const n = JSON.parse(e);
      return n && typeof n == 'object' && !Array.isArray(n) ? n : {};
    } catch {
      return {};
    }
  return typeof e == 'object' && !Array.isArray(e) ? e : {};
}
function v(e) {
  return typeof e == 'string' ? e : '';
}
function qe(e) {
  const n = Le(e == null ? void 0 : e.config);
  return {
    label_zh: v(n.label_zh) || (e == null ? void 0 : e.menuName) || '',
    label_en: v(n.label_en),
    label_es: v(n.label_es),
  };
}
function Ru(e, n) {
  return JSON.stringify(
    E(b({}, Le(e == null ? void 0 : e.config)), {
      label_en: v(n.label_en).trim(),
      label_es: v(n.label_es).trim(),
      label_zh: v(n.label_zh).trim(),
    })
  );
}
function nt() {
  const [e] = o.useForm(),
    [n] = o.useForm(),
    [l] = o.useForm(),
    [s] = o.useForm(),
    [p, D] = c.exports.useState([]),
    [k, P] = c.exports.useState(),
    [Ge, z] = c.exports.useState(!1),
    [Re, G] = c.exports.useState(!1),
    [h, R] = c.exports.useState(null),
    [We, j] = c.exports.useState(!1),
    [F, te] = c.exports.useState(null),
    [I, ne] = c.exports.useState('create'),
    [le, ae] = c.exports.useState('create'),
    [g, re] = c.exports.useState(null),
    [se, ie] = c.exports.useState([]),
    [oe, ce] = c.exports.useState({}),
    S = c.exports.useMemo(() => Lu(p), [p]),
    V = c.exports.useMemo(() => $e(S), [S]),
    B = X(S, k),
    r = Pe(B) ? B : null,
    W = o.useWatch('parentId', e),
    Ke = M(W),
    K = o.useWatch('menuType', e),
    de = W != null,
    Je = c.exports.useMemo(() => se, [se]),
    me = c.exports.useMemo(() => {
      const t = ze(I === 'edit' ? B : null);
      return I === 'edit' && (B == null ? void 0 : B.id) && t.add(B.id), t;
    }, [I, B]),
    he = c.exports.useMemo(() => {
      const t = ze(h);
      return (
        (h == null ? void 0 : h.id) && (t.add(h.id), t.add(M(h.parentId))), t
      );
    }, [h]),
    Xe = c.exports.useMemo(() => Y(V, me), [V, me]),
    Ye = c.exports.useMemo(() => Y(V, he), [V, he]),
    pe = ee(S, Ke, K),
    U = o.useWatch('elementType', l),
    fe = ue((r == null ? void 0 : r.menuCode) || '', U),
    He = (t) => {
      const a = t.activeStatus === 2;
      x.confirm({
        title: `${a ? '\u542F\u7528' : '\u505C\u7528'}\u83DC\u5355`,
        content: `\u786E\u8BA4${
          a ? '\u542F\u7528' : '\u505C\u7528'
        }\u83DC\u5355 ${t.menuName || t.menuCode}\uFF1F`,
        onOk: async () => {
          await Bu(t.id, a ? 1 : 2),
            _.success(
              `\u83DC\u5355\u5DF2${a ? '\u542F\u7528' : '\u505C\u7528'}`
            ),
            await w();
        },
      });
    },
    Qe = (t) => {
      const a = t.activeStatus === 2;
      x.confirm({
        title: `${a ? '\u542F\u7528' : '\u505C\u7528'}\u9875\u9762\u5143\u7D20`,
        content: `\u786E\u8BA4${
          a ? '\u542F\u7528' : '\u505C\u7528'
        }\u9875\u9762\u5143\u7D20 ${t.elementName || t.elementCode}\uFF1F`,
        onOk: async () => {
          await Au(t.id, a ? 1 : 2),
            _.success(
              `\u9875\u9762\u5143\u7D20\u5DF2${
                a ? '\u542F\u7528' : '\u505C\u7528'
              }`
            ),
            await O();
        },
      });
    },
    Ze = (t) => {
      const a = t.activeStatus === 2;
      return d('div', {
        className: `${i['tree-node-title']} ${
          a ? i['tree-node-disabled'] : ''
        }`,
        children: [
          d('div', {
            className: i['tree-node-content'],
            children: [
              je(t.menuType),
              t.icon ? Z(t.icon) : null,
              u('span', {
                className: i['tree-node-name'],
                children: t.menuName || t.menuCode || String(t.id),
              }),
              t.visible === 2
                ? u($, {
                    className: i['hidden-tag'],
                    size: 'small',
                    children: '\u9690\u85CF',
                  })
                : null,
            ],
          }),
          d('div', {
            className: i['tree-node-actions'],
            onClick: (f) => f.stopPropagation(),
            children: [
              u(C, {
                type: 'text',
                size: 'mini',
                icon: u(bu, {}),
                onClick: () => lu(t),
                children: '\u79FB\u52A8',
              }),
              u(C, {
                type: 'text',
                size: 'mini',
                className: a ? void 0 : i['stop-menu-button'],
                status: a ? 'success' : void 0,
                icon: a ? u(xe, {}) : u(ye, {}),
                onClick: () => He(t),
                children: a ? '\u542F\u7528' : '\u505C\u7528',
              }),
              u(C, {
                type: 'text',
                size: 'mini',
                icon: u(Se, {}),
                onClick: () => uu(t),
                children: '\u7F16\u8F91',
              }),
              u(C, {
                type: 'text',
                size: 'mini',
                status: 'danger',
                icon: u(Ne, {}),
                onClick: () =>
                  x.confirm({
                    title: '\u5220\u9664\u83DC\u5355',
                    content: `\u786E\u8BA4\u5220\u9664\u83DC\u5355 ${
                      t.menuName || t.menuCode
                    }\uFF1F`,
                    onOk: async () => {
                      await gu(t.id),
                        _.success('\u83DC\u5355\u5DF2\u5220\u9664'),
                        k === t.id && P(void 0),
                        await w();
                    },
                  }),
                children: '\u5220\u9664',
              }),
            ],
          }),
        ],
      });
    },
    Fe = (t = []) =>
      t.map((a) => ({
        key: String(a.id),
        value: a.id,
        title: Ze(a),
        children: Fe(a.children || []),
      })),
    w = async (t = !1) => {
      const f = (await xu()) || [];
      if ((D(f), t)) {
        const N = ke(f);
        P(N == null ? void 0 : N.id);
      }
    },
    O = c.exports.useCallback(async () => {
      if (!(r == null ? void 0 : r.id) || r.menuType !== 'MENU') {
        ie([]);
        return;
      }
      const t = await vu(b({ menuId: r.id }, oe));
      ie(t || []);
    }, [r == null ? void 0 : r.id, r == null ? void 0 : r.menuType, oe]);
  c.exports.useEffect(() => {
    w(!0);
  }, []),
    c.exports.useEffect(() => {
      O();
    }, [O]);
  const eu = () => {
      const t = (r == null ? void 0 : r.menuType) === 'CATALOG' ? r.id : y,
        a = 'MENU';
      ne('create'),
        e.resetFields(),
        e.setFieldsValue({
          parentId: H(t),
          codeSuffix: '',
          menuName: '',
          label_zh: '',
          label_en: '',
          label_es: '',
          menuType: a,
          visible: 1,
          sortOrder: 100,
        }),
        z(!0);
    },
    uu = (t = r) => {
      if (!t) return;
      P(t.id);
      const a = M(t.parentId),
        f = ee(S, a, t.menuType);
      ne('edit'), e.resetFields();
      const N = qe(t);
      e.setFieldsValue(
        E(b(b({}, t), N), {
          parentId: H(a),
          codeSuffix: Ve(t.menuCode, f),
          icon: Q(t.icon),
          activeStatus: void 0,
        })
      ),
        z(!0);
    },
    tu = () => {
      e.setFieldValue('codeSuffix', '');
    },
    nu = () => {
      e.setFieldValue('codeSuffix', '');
    },
    lu = (t) => {
      P(t.id),
        R(t),
        n.resetFields(),
        n.setFieldsValue({ targetParentId: H(t.parentId) }),
        G(!0);
    },
    au = async () => {
      if (!h) return;
      const t = await n.validate(),
        a = M(t.targetParentId);
      if (a === M(h.parentId)) {
        _.warning(
          '\u8BF7\u9009\u62E9\u4E0D\u540C\u7684\u76EE\u6807\u4F4D\u7F6E'
        );
        return;
      }
      await yu({ id: h.id, targetParentId: a }),
        _.success('\u83DC\u5355\u5DF2\u79FB\u52A8'),
        G(!1),
        R(null),
        await w();
    },
    ru = () => {
      !r ||
        (ae('create'),
        re(null),
        l.resetFields(),
        l.setFieldsValue({
          menuId: r.id,
          codeSuffix: '',
          elementType: void 0,
          elementName: '',
          sortOrder: 100,
        }),
        j(!0));
    },
    su = (t) => {
      ae('edit'), re(t), l.resetFields();
      const a = ue((r == null ? void 0 : r.menuCode) || '', t.elementType);
      l.setFieldsValue(E(b({}, t), { codeSuffix: Ve(t.elementCode, a) })),
        j(!0);
    },
    iu = async () => {
      var be, Ce;
      const t = await e.validate(),
        a = I === 'edit' ? r : null,
        f = M(t.parentId),
        N = ee(S, f, t.menuType),
        A = E(b({}, t), {
          parentId: f,
          menuName: v(t.label_zh).trim(),
          menuCode: qu(N, t.codeSuffix),
          routePath: v(t.routePath).trim(),
          componentPath: v(t.componentPath).trim(),
          icon: Q(t.icon) || '',
          visible: Number((be = t.visible) != null ? be : 1),
          sortOrder: Number((Ce = t.sortOrder) != null ? Ce : 100),
          config: Ru(a, t),
        });
      delete A.codeSuffix,
        delete A.label_zh,
        delete A.label_en,
        delete A.label_es,
        I === 'create'
          ? (await Su(A), _.success('\u83DC\u5355\u5DF2\u65B0\u589E'))
          : r &&
            (await Nu(E(b({}, A), { id: r.id })),
            _.success('\u83DC\u5355\u5DF2\u66F4\u65B0')),
        z(!1),
        await w();
    },
    ou = async () => {
      if (!r) return;
      const t = await l.validate(),
        a = E(b({}, t), {
          menuId: r.id,
          elementCode: Gu(r.menuCode || '', t.elementType, t.codeSuffix),
          activeStatus: g == null ? void 0 : g.activeStatus,
          sortOrder: (g == null ? void 0 : g.sortOrder) || t.sortOrder || 100,
        });
      delete a.codeSuffix,
        le === 'create'
          ? (await Tu(a),
            _.success('\u9875\u9762\u5143\u7D20\u5DF2\u65B0\u589E'))
          : g &&
            (await Iu(E(b({}, a), { id: g.id })),
            _.success('\u9875\u9762\u5143\u7D20\u5DF2\u66F4\u65B0')),
        j(!1),
        await O();
    },
    cu = () => {
      const t = s.getFieldsValue();
      ce(t);
    },
    du = () => {
      s.resetFields(), ce({});
    },
    mu = [
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
        render: (t) => u($, { children: Ue(t) }),
      },
      {
        title: '\u542F\u7528\u72B6\u6001',
        dataIndex: 'activeStatus',
        width: 110,
        render: (t) =>
          t === 2
            ? u($, { color: 'red', children: '\u505C\u7528' })
            : u($, { color: 'green', children: '\u542F\u7528' }),
      },
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 280,
        fixed: 'right',
        render: (t, a) => {
          const f = a.activeStatus === 2;
          return d(q, {
            className: i.operations,
            size: 10,
            wrap: !0,
            children: [
              u(C, {
                type: 'text',
                size: 'small',
                className: f ? void 0 : i['stop-menu-button'],
                status: f ? 'success' : void 0,
                icon: f ? u(xe, {}) : u(ye, {}),
                onClick: () => Qe(a),
                children: f ? '\u542F\u7528' : '\u505C\u7528',
              }),
              u(C, {
                type: 'text',
                size: 'small',
                icon: u(Du, {}),
                onClick: () => te(a),
                children: '\u67E5\u770B',
              }),
              u(C, {
                type: 'text',
                size: 'small',
                icon: u(Se, {}),
                onClick: () => su(a),
                children: '\u4FEE\u6539',
              }),
              u(C, {
                type: 'text',
                status: 'danger',
                size: 'small',
                icon: u(Ne, {}),
                onClick: () =>
                  x.confirm({
                    title: '\u5220\u9664\u9875\u9762\u5143\u7D20',
                    content: `\u786E\u8BA4\u5220\u9664 ${
                      a.elementName || a.elementCode
                    }\uFF1F`,
                    onOk: async () => {
                      await wu(a.id),
                        _.success('\u9875\u9762\u5143\u7D20\u5DF2\u5220\u9664'),
                        await O();
                    },
                  }),
                children: '\u5220\u9664',
              }),
            ],
          });
        },
      },
    ];
  return d(J, {
    children: [
      u(Ou, { heading: 6, children: '\u83DC\u5355\u7BA1\u7406' }),
      d('div', {
        className: i['button-group'],
        children: [
          u(q, {
            children: u(C, {
              type: 'primary',
              icon: u(ge, {}),
              onClick: eu,
              children: '\u65B0\u589E\u83DC\u5355',
            }),
          }),
          u(C, {
            icon: u(Be, {}),
            onClick: () => w(),
            children: '\u5237\u65B0',
          }),
        ],
      }),
      d('div', {
        className: i['page-layout'],
        children: [
          u('div', {
            className: i['tree-panel'],
            children: u(Fu, {
              blockNode: !0,
              treeData: Fe(S),
              selectedKeys: k ? [String(k)] : [],
              onSelect: (t) => P(t[0] ? Number(t[0]) : void 0),
            }),
          }),
          d('div', {
            className: i['detail-panel'],
            children: [
              u(J, {
                title: '\u8D44\u6E90\u4FE1\u606F',
                children: r
                  ? d('div', {
                      className: i['resource-card-content'],
                      children: [
                        r.icon
                          ? u('div', {
                              className: i['resource-bg-icon'],
                              children: Z(r.icon),
                            })
                          : null,
                        u('div', {
                          className: i['resource-header'],
                          children: d('div', {
                            className: i['resource-title-wrap'],
                            children: [
                              d('div', {
                                className: i['resource-title-row'],
                                children: [
                                  u('div', {
                                    className: i['resource-title'],
                                    children: r.menuName || '-',
                                  }),
                                  je(r.menuType),
                                ],
                              }),
                              u('div', {
                                className: i['resource-code-row'],
                                children: r.menuCode
                                  ? u($u, {
                                      className: i['resource-code'],
                                      copyable: !0,
                                      children: r.menuCode,
                                    })
                                  : u('span', {
                                      className: i['resource-code'],
                                      children: '-',
                                    }),
                              }),
                            ],
                          }),
                        }),
                        u(Te, {
                          className: i['resource-descriptions'],
                          column: 2,
                          data: (() => {
                            var a;
                            const t = qe(r);
                            return [
                              {
                                label: '\u4E2D\u6587\u540D\u79F0',
                                value: t.label_zh || '-',
                              },
                              {
                                label: '\u8DEF\u7531',
                                value: r.routePath || '-',
                              },
                              {
                                label: '\u82F1\u6587\u540D\u79F0',
                                value: t.label_en || '-',
                              },
                              {
                                label: '\u7EC4\u4EF6\u8DEF\u5F84',
                                value: r.componentPath || '-',
                              },
                              {
                                label: '\u897F\u8BED\u540D\u79F0',
                                value: t.label_es || '-',
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
                                label: '\u6392\u5E8F',
                                value: (a = r.sortOrder) != null ? a : '-',
                              },
                            ];
                          })(),
                        }),
                      ],
                    })
                  : '\u8BF7\u9009\u62E9\u5DE6\u4FA7\u76EE\u5F55\u6216\u83DC\u5355\u8282\u70B9',
              }),
              d(J, {
                title: '\u9875\u9762\u5143\u7D20',
                className: i['element-card'],
                children: [
                  d('div', {
                    className: i['element-toolbar'],
                    children: [
                      d(o, {
                        form: s,
                        className: i['element-search-form'],
                        layout: 'inline',
                        onSubmit: cu,
                        children: [
                          u(o.Item, {
                            label: '\u5143\u7D20\u7F16\u7801',
                            field: 'elementCode',
                            children: u(m, {
                              allowClear: !0,
                              placeholder:
                                '\u8BF7\u8F93\u5165\u5143\u7D20\u7F16\u7801',
                            }),
                          }),
                          u(o.Item, {
                            label: '\u5143\u7D20\u7C7B\u578B',
                            field: 'elementType',
                            children: u(T, {
                              allowClear: !0,
                              options: Ae,
                              placeholder:
                                '\u8BF7\u9009\u62E9\u5143\u7D20\u7C7B\u578B',
                            }),
                          }),
                          u(o.Item, {
                            label: '\u542F\u7528\u72B6\u6001',
                            field: 'activeStatus',
                            children: u(T, {
                              allowClear: !0,
                              options: ju,
                              placeholder:
                                '\u8BF7\u9009\u62E9\u542F\u7528\u72B6\u6001',
                            }),
                          }),
                          u(o.Item, {
                            className: i['element-search-actions'],
                            children: d(q, {
                              children: [
                                u(C, {
                                  type: 'primary',
                                  htmlType: 'submit',
                                  icon: u(Cu, {}),
                                  children: '\u67E5\u8BE2',
                                }),
                                u(C, {
                                  icon: u(Be, {}),
                                  onClick: du,
                                  children: '\u91CD\u7F6E',
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (r == null ? void 0 : r.menuType) === 'MENU'
                        ? u(C, {
                            type: 'primary',
                            icon: u(ge, {}),
                            onClick: ru,
                            children: '\u6DFB\u52A0\u5143\u7D20',
                          })
                        : null,
                    ],
                  }),
                  u(Eu, {
                    rowKey: 'id',
                    columns: mu,
                    data: Je,
                    pagination: !1,
                    scroll: { x: 860 },
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u(x, {
        title:
          I === 'create'
            ? '\u65B0\u589E\u83DC\u5355'
            : '\u7F16\u8F91\u83DC\u5355',
        visible: Ge,
        onOk: iu,
        onCancel: () => z(!1),
        unmountOnExit: !0,
        style: { width: 880 },
        className: i['menu-modal'],
        children: u(o, {
          form: e,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 7 },
          wrapperCol: { span: 17 },
          children: d('div', {
            className: i['menu-modal-form-grid'],
            children: [
              u(o.Item, {
                label: '\u7236\u83DC\u5355',
                field: 'parentId',
                rules: [{ required: !0 }],
                children: u(Ie, {
                  treeData: Xe,
                  placeholder: '\u8BF7\u9009\u62E9\u7236\u83DC\u5355',
                  allowClear: !1,
                  onChange: tu,
                }),
              }),
              u(o.Item, {
                label: '\u83DC\u5355\u7C7B\u578B',
                field: 'menuType',
                rules: [{ required: !0 }],
                children: u(T, { options: zu, onChange: nu }),
              }),
              u(o.Item, {
                label: '\u83DC\u5355\u7F16\u7801',
                required: !0,
                children: d(m.Group, {
                  compact: !0,
                  className: i['code-input-group'],
                  children: [
                    pe
                      ? u(m, {
                          value: `${pe}:`,
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
                      children: u(m, {
                        className: i['code-suffix'],
                        disabled: !de || !K,
                        placeholder:
                          de && K
                            ? '\u8BF7\u8F93\u5165\u65E0\u524D\u7F00\u7F16\u7801'
                            : '\u8BF7\u5148\u9009\u62E9\u7236\u83DC\u5355\u548C\u83DC\u5355\u7C7B\u578B',
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
                children: u(m, {
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
                children: u(m, { placeholder: '\u5982 System' }),
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
                children: u(m, { placeholder: '\u5982 Sistema' }),
              }),
              u(o.Item, {
                label: '\u8DEF\u7531\u8DEF\u5F84',
                field: 'routePath',
                children: u(m, {
                  placeholder:
                    '\u83DC\u5355\u7C7B\u578B\u4E3A\u83DC\u5355\u65F6\u586B\u5199',
                }),
              }),
              u(o.Item, {
                label: '\u7EC4\u4EF6\u8DEF\u5F84',
                field: 'componentPath',
                children: u(m, { placeholder: '\u5982 system/menus' }),
              }),
              u(o.Item, {
                label: '\u56FE\u6807',
                field: 'icon',
                children: u(T, {
                  showSearch: !0,
                  allowClear: !0,
                  placeholder: '\u8BF7\u9009\u62E9\u56FE\u6807',
                  filterOption: (t, a) =>
                    String(a.props.value)
                      .toLowerCase()
                      .includes(t.toLowerCase()),
                  children: Me.map((t) =>
                    u(
                      T.Option,
                      {
                        value: t,
                        children: d(q, {
                          children: [Z(t), u('span', { children: t })],
                        }),
                      },
                      t
                    )
                  ),
                }),
              }),
              u(o.Item, {
                label: '\u6392\u5E8F',
                field: 'sortOrder',
                children: u(m, { type: 'number' }),
              }),
              u(o.Item, {
                label: '\u662F\u5426\u663E\u793A',
                field: 'visible',
                children: u(T, { options: Vu }),
              }),
            ],
          }),
        }),
      }),
      u(x, {
        title: '\u79FB\u52A8\u83DC\u5355',
        visible: Re,
        onOk: au,
        onCancel: () => {
          G(!1), R(null);
        },
        unmountOnExit: !0,
        style: { width: 560 },
        children: d(o, {
          form: n,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            u(o.Item, {
              label: '\u5F53\u524D\u83DC\u5355',
              children: u(m, {
                value:
                  (h == null ? void 0 : h.menuName) ||
                  (h == null ? void 0 : h.menuCode) ||
                  '',
                disabled: !0,
              }),
            }),
            u(o.Item, {
              label: '\u76EE\u6807\u4F4D\u7F6E',
              field: 'targetParentId',
              rules: [
                {
                  required: !0,
                  message: '\u8BF7\u9009\u62E9\u76EE\u6807\u4F4D\u7F6E',
                },
              ],
              children: u(Ie, {
                treeData: Ye,
                placeholder: '\u8BF7\u9009\u62E9\u76EE\u6807\u4F4D\u7F6E',
                allowClear: !1,
              }),
            }),
          ],
        }),
      }),
      u(x, {
        title:
          le === 'create'
            ? '\u65B0\u589E\u9875\u9762\u5143\u7D20'
            : '\u4FEE\u6539\u9875\u9762\u5143\u7D20',
        visible: We,
        onOk: ou,
        onCancel: () => j(!1),
        unmountOnExit: !0,
        children: d(o, {
          form: l,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            u(o.Item, {
              label: '\u7236\u83DC\u5355',
              children: u(m, {
                value: (r == null ? void 0 : r.menuName) || '',
                disabled: !0,
              }),
            }),
            u(o.Item, {
              label: '\u5143\u7D20\u7C7B\u578B',
              field: 'elementType',
              rules: [{ required: !0 }],
              children: u(T, {
                options: Ae,
                placeholder: '\u8BF7\u9009\u62E9\u5143\u7D20\u7C7B\u578B',
              }),
            }),
            u(o.Item, {
              label: '\u5143\u7D20\u7F16\u7801',
              required: !0,
              children: d(m.Group, {
                compact: !0,
                className: i['code-input-group'],
                children: [
                  u(m, {
                    value: fe ? `${fe}:` : '',
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
                    children: u(m, {
                      className: i['code-suffix'],
                      disabled: !U,
                      placeholder: U
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
              children: u(m, {}),
            }),
            U === 'COLUMN'
              ? u(o.Item, {
                  label: '\u5B57\u6BB5\u540D\u79F0',
                  field: 'elementKey',
                  rules: [
                    {
                      required: !0,
                      message: '\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\u79F0',
                    },
                  ],
                  children: u(m, {
                    placeholder: '\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\u79F0',
                  }),
                })
              : null,
          ],
        }),
      }),
      u(x, {
        title: '\u9875\u9762\u5143\u7D20\u8BE6\u60C5',
        visible: !!F,
        footer: null,
        onCancel: () => te(null),
        unmountOnExit: !0,
        children: u(Te, {
          column: 1,
          data: [
            {
              label: '\u5143\u7D20\u540D\u79F0',
              value: (F == null ? void 0 : F.elementName) || '-',
            },
            {
              label: '\u5143\u7D20\u7F16\u7801',
              value: (F == null ? void 0 : F.elementCode) || '-',
            },
            {
              label: '\u5143\u7D20\u7C7B\u578B',
              value: Ue(F == null ? void 0 : F.elementType),
            },
            {
              label: '\u542F\u7528\u72B6\u6001',
              value:
                (F == null ? void 0 : F.activeStatus) === 2
                  ? '\u505C\u7528'
                  : '\u542F\u7528',
            },
          ],
        }),
      }),
    ],
  });
}
export { nt as default };
