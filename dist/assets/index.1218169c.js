var jt = Object.defineProperty,
  qt = Object.defineProperties;
var Kt = Object.getOwnPropertyDescriptors;
var ae = Object.getOwnPropertySymbols;
var Ke = Object.prototype.hasOwnProperty,
  We = Object.prototype.propertyIsEnumerable;
var Ve = (t, s, o) =>
    s in t
      ? jt(t, s, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[s] = o),
  D = (t, s) => {
    for (var o in s || (s = {})) Ke.call(s, o) && Ve(t, o, s[o]);
    if (ae) for (var o of ae(s)) We.call(s, o) && Ve(t, o, s[o]);
    return t;
  },
  R = (t, s) => qt(t, Kt(s));
var ue = (t, s) => {
  var o = {};
  for (var n in t) Ke.call(t, n) && s.indexOf(n) < 0 && (o[n] = t[n]);
  if (t != null && ae)
    for (var n of ae(t)) s.indexOf(n) < 0 && We.call(t, n) && (o[n] = t[n]);
  return o;
};
import {
  r as l,
  j as e,
  L as ye,
  R as Wt,
  a as c,
  B as G,
  A as Ue,
  S as Je,
  T as ie,
  b as Vt,
  c as He,
  d as Ut,
  g as Jt,
  I as Ht,
  e as Gt,
  f as Xt,
  h as Ee,
  i as Ge,
  k as le,
  l as Q,
  u as ee,
  m as ce,
  n as Zt,
  o as Yt,
  D as Xe,
  p as Ze,
  q as Qt,
  s as en,
  F as de,
  t as tn,
  v as ge,
  w as nn,
  x as on,
  y as sn,
  M as ve,
  z as x,
  C as Ye,
  E as Qe,
  G as rn,
  H as et,
  J as an,
  K as Fe,
  N as un,
  O as ln,
  P as cn,
  Q as dn,
  U as gn,
  V as mn,
  W as tt,
  X as Z,
  Y as nt,
  Z as ot,
  _ as pn,
  $ as hn,
  a0 as st,
  a1 as fn,
  a2 as bn,
  a3 as _n,
  a4 as yn,
  a5 as te,
  a6 as En,
  a7 as rt,
  a8 as vn,
  a9 as at,
  aa as Fn,
  ab as Cn,
  ac as ut,
  ad as it,
  ae as wn,
  af as lt,
  ag as Ce,
  ah as Dn,
  ai as xn,
  aj as An,
  ak as Sn,
  al as V,
  am as Bn,
  an as kn,
  ao as Nn,
  ap as In,
  aq as Pn,
  ar as ct,
  as as Rn,
} from './vendor.0a91e66f.js';
const Mn = function () {
  const s = document.createElement('link').relList;
  if (s && s.supports && s.supports('modulepreload')) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === 'childList')
        for (const r of u.addedNodes)
          r.tagName === 'LINK' && r.rel === 'modulepreload' && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerpolicy && (u.referrerPolicy = a.referrerpolicy),
      a.crossorigin === 'use-credentials'
        ? (u.credentials = 'include')
        : a.crossorigin === 'anonymous'
        ? (u.credentials = 'omit')
        : (u.credentials = 'same-origin'),
      u
    );
  }
  function n(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = o(a);
    fetch(a.href, u);
  }
};
Mn();
const Ln = !1,
  Tn = !0,
  $n = !0,
  On = !1,
  zn = !0,
  jn = !0,
  qn = '#165DFF',
  Kn = 220;
var Wn = {
  colorWeek: Ln,
  navbar: Tn,
  menu: $n,
  topMenu: On,
  tabBar: zn,
  footer: jn,
  themeColor: qn,
  menuWidth: Kn,
};
const dt = { settings: Wn, theme: 'light', userInfo: { permissions: {} } };
function Vn(t = dt, s) {
  switch (s.type) {
    case 'update-settings': {
      const { settings: o } = s.payload;
      return R(D({}, t), { settings: o });
    }
    case 'update-theme': {
      const { theme: o } = s.payload;
      return R(D({}, t), { theme: o });
    }
    case 'update-userInfo': {
      const { userInfo: o = dt.userInfo, userLoading: n } = s.payload;
      return R(D({}, t), { userLoading: n, userInfo: o });
    }
    default:
      return t;
  }
}
const Un = 'modulepreload',
  gt = {},
  Jn = '/',
  N = function (s, o) {
    return !o || o.length === 0
      ? s()
      : Promise.all(
          o.map((n) => {
            if (((n = `${Jn}${n}`), n in gt)) return;
            gt[n] = !0;
            const a = n.endsWith('.css'),
              u = a ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${n}"]${u}`)) return;
            const r = document.createElement('link');
            if (
              ((r.rel = a ? 'stylesheet' : Un),
              a || ((r.as = 'script'), (r.crossOrigin = '')),
              (r.href = n),
              document.head.appendChild(r),
              a)
            )
              return new Promise((i, d) => {
                r.addEventListener('load', i), r.addEventListener('error', d);
              });
          })
        ).then(() => s());
  },
  we = l.exports.createContext({}),
  mt = {
    'en-US': {
      'menu.dashboard': 'Dashboard',
      'menu.dashboard.workplace': 'Workplace',
      'menu.user.info': 'User Info',
      'menu.user.setting': 'User Setting',
      'menu.user.switchRoles': 'Switch Roles',
      'menu.user.role.admin': 'Admin',
      'menu.user.role.user': 'General User',
      'navbar.logout': 'Logout',
      'settings.title': 'Settings',
      'settings.themeColor': 'Theme Color',
      'settings.content': 'Content Setting',
      'settings.navbar': 'Navbar',
      'settings.menuWidth': 'Menu Width (px)',
      'settings.navbar.theme.toLight': 'Click to use light mode',
      'settings.navbar.theme.toDark': 'Click to use dark mode',
      'settings.menu': 'Menu',
      'settings.topMenu': 'Top Menu',
      'settings.tabBar': 'Tab Bar',
      'settings.footer': 'Footer',
      'settings.otherSettings': 'Other Settings',
      'settings.colorWeek': 'Color Week',
      'settings.alertContent':
        'After the configuration is only temporarily effective, if you want to really affect the project, click the "Copy Settings" button below and replace the configuration in settings.json.',
      'settings.copySettings': 'Copy Settings',
      'settings.copySettings.message':
        'Copy succeeded, please paste to file src/settings.json.',
      'settings.close': 'Close',
      'settings.color.tooltip':
        '10 gradient colors generated according to the theme color',
      'message.tab.title.message': 'Message',
      'message.tab.title.notice': 'Notice',
      'message.tab.title.todo': 'ToDo',
      'message.allRead': 'All Read',
      'message.seeMore': 'SeeMore',
      'message.empty': 'Empty',
      'message.empty.tips': 'No Content',
      'message.lang.tips': 'Language switch to ',
      'navbar.search.placeholder': 'Please search',
    },
    'zh-CN': {
      'menu.dashboard': '\u4EEA\u8868\u76D8',
      'menu.dashboard.workplace': '\u5DE5\u4F5C\u53F0',
      'menu.user.info': '\u7528\u6237\u4FE1\u606F',
      'menu.user.setting': '\u7528\u6237\u8BBE\u7F6E',
      'menu.user.switchRoles': '\u5207\u6362\u89D2\u8272',
      'menu.user.role.admin': '\u7BA1\u7406\u5458',
      'menu.user.role.user': '\u666E\u901A\u7528\u6237',
      'navbar.logout': '\u9000\u51FA\u767B\u5F55',
      'settings.title': '\u9875\u9762\u914D\u7F6E',
      'settings.themeColor': '\u4E3B\u9898\u8272',
      'settings.content': '\u5185\u5BB9\u533A\u57DF',
      'settings.navbar': '\u5BFC\u822A\u680F',
      'settings.menuWidth': '\u83DC\u5355\u5BBD\u5EA6 (px)',
      'settings.navbar.theme.toLight':
        '\u70B9\u51FB\u5207\u6362\u4E3A\u4EAE\u8272\u6A21\u5F0F',
      'settings.navbar.theme.toDark':
        '\u70B9\u51FB\u5207\u6362\u4E3A\u6697\u9ED1\u6A21\u5F0F',
      'settings.menu': '\u83DC\u5355\u680F',
      'settings.topMenu': '\u9876\u90E8\u83DC\u5355\u680F',
      'settings.tabBar': '\u591A\u9875\u7B7E',
      'settings.footer': '\u5E95\u90E8',
      'settings.otherSettings': '\u5176\u4ED6\u8BBE\u7F6E',
      'settings.colorWeek': '\u8272\u5F31\u6A21\u5F0F',
      'settings.alertContent':
        '\u914D\u7F6E\u4E4B\u540E\u4EC5\u662F\u4E34\u65F6\u751F\u6548\uFF0C\u8981\u60F3\u771F\u6B63\u4F5C\u7528\u4E8E\u9879\u76EE\uFF0C\u70B9\u51FB\u4E0B\u65B9\u7684 "\u590D\u5236\u914D\u7F6E" \u6309\u94AE\uFF0C\u5C06\u914D\u7F6E\u66FF\u6362\u5230 settings.json \u4E2D\u5373\u53EF\u3002',
      'settings.copySettings': '\u590D\u5236\u914D\u7F6E',
      'settings.copySettings.message':
        '\u590D\u5236\u6210\u529F\uFF0C\u8BF7\u7C98\u8D34\u5230 src/settings.json \u6587\u4EF6\u4E2D',
      'settings.close': '\u5173\u95ED',
      'settings.color.tooltip':
        '\u6839\u636E\u4E3B\u9898\u989C\u8272\u751F\u6210\u7684 10 \u4E2A\u68AF\u5EA6\u8272\uFF08\u5C06\u914D\u7F6E\u590D\u5236\u5230\u9879\u76EE\u4E2D\uFF0C\u4E3B\u9898\u8272\u624D\u80FD\u5BF9\u4EAE\u8272 / \u6697\u9ED1\u6A21\u5F0F\u540C\u65F6\u751F\u6548\uFF09',
      'message.tab.title.message': '\u6D88\u606F',
      'message.tab.title.notice': '\u901A\u77E5',
      'message.tab.title.todo': '\u5F85\u529E',
      'message.allRead': '\u5168\u90E8\u5DF2\u8BFB',
      'message.seeMore': '\u67E5\u770B\u66F4\u591A',
      'message.empty': '\u6E05\u7A7A',
      'message.empty.tips': '\u6682\u65E0\u5185\u5BB9',
      'message.lang.tips': '\u8BED\u8A00\u5207\u6362\u81F3 ',
      'navbar.search.placeholder': '\u8F93\u5165\u5185\u5BB9\u67E5\u8BE2',
    },
  };
function O(t = null) {
  const { lang: s } = l.exports.useContext(we);
  return (t || mt)[s] || {};
}
const pt = (t) =>
    l.exports.createElement(
      'svg',
      D(
        {
          width: 33,
          height: 33,
          viewBox: '0 0 33 33',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        t
      ),
      l.exports.createElement(
        'g',
        { clipPath: 'url(#clip0)' },
        l.exports.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M5.37754 16.9795L12.7498 9.43027C14.7163 7.41663 17.9428 7.37837 19.9564 9.34482C19.9852 9.37297 20.0137 9.40145 20.0418 9.43027L20.1221 9.51243C22.1049 11.5429 22.1049 14.7847 20.1221 16.8152L12.7498 24.3644C10.7834 26.378 7.55686 26.4163 5.54322 24.4498C5.5144 24.4217 5.48592 24.3932 5.45777 24.3644L5.37754 24.2822C3.39468 22.2518 3.39468 19.0099 5.37754 16.9795Z',
          fill: '#12D2AC',
        }),
        l.exports.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M20.0479 9.43034L27.3399 16.8974C29.3674 18.9735 29.3674 22.2883 27.3399 24.3644C25.3735 26.3781 22.147 26.4163 20.1333 24.4499C20.1045 24.4217 20.076 24.3933 20.0479 24.3644L12.7558 16.8974C10.7284 14.8213 10.7284 11.5065 12.7558 9.43034C14.7223 7.4167 17.9488 7.37844 19.9624 9.34489C19.9912 9.37304 20.0197 9.40152 20.0479 9.43034Z',
          fill: '#307AF2',
        }),
        l.exports.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M20.1321 9.52163L23.6851 13.1599L16.3931 20.627L9.10103 13.1599L12.6541 9.52163C14.6707 7.45664 17.9794 7.4174 20.0444 9.434C20.074 9.46286 20.1032 9.49207 20.1321 9.52163Z',
          fill: '#0057FE',
        })
      ),
      l.exports.createElement(
        'defs',
        null,
        l.exports.createElement(
          'clipPath',
          { id: 'clip0' },
          l.exports.createElement('rect', {
            width: 26,
            height: 19,
            fill: 'white',
            transform: 'translate(3.5 7)',
          })
        )
      )
    ),
  Hn = '_footer_8a7h1_26';
var ne = {
  'message-box': '_message-box_8a7h1_1',
  'message-title': '_message-title_8a7h1_22',
  footer: Hn,
  'footer-item': '_footer-item_8a7h1_29',
};
function Gn(t) {
  const s = O(),
    { data: o, unReadData: n } = t;
  function a(r, i) {
    r.status || (t.onItemClick && t.onItemClick(r, i));
  }
  function u() {
    t.onAllBtnClick && t.onAllBtnClick(n, o);
  }
  return e(ye, {
    noDataElement: e(Wt, { status: '404', subTitle: s['message.empty.tips'] }),
    footer: c('div', {
      className: ne.footer,
      children: [
        e('div', {
          className: ne['footer-item'],
          children: e(G, {
            type: 'text',
            size: 'small',
            onClick: u,
            children: s['message.allRead'],
          }),
        }),
        e('div', {
          className: ne['footer-item'],
          children: e(G, {
            type: 'text',
            size: 'small',
            children: s['message.seeMore'],
          }),
        }),
      ],
    }),
    children: o.map((r, i) =>
      e(
        ye.Item,
        {
          actionLayout: 'vertical',
          style: { opacity: r.status ? 0.5 : 1 },
          children: e('div', {
            style: { cursor: 'pointer' },
            onClick: () => {
              a(r, i);
            },
            children: e(ye.Item.Meta, {
              avatar:
                r.avatar &&
                e(Ue, {
                  shape: 'circle',
                  size: 36,
                  children: e('img', { src: r.avatar }),
                }),
              title: c('div', {
                className: ne['message-title'],
                children: [
                  c(Je, {
                    size: 4,
                    children: [
                      e('span', { children: r.title }),
                      e(ie.Text, { type: 'secondary', children: r.subTitle }),
                    ],
                  }),
                  r.tag && r.tag.text
                    ? e(Vt, { color: r.tag.color, children: r.tag.text })
                    : null,
                ],
              }),
              description: c('div', {
                children: [
                  e(ie.Paragraph, {
                    style: { marginBottom: 0 },
                    ellipsis: !0,
                    children: r.content,
                  }),
                  e(ie.Text, {
                    type: 'secondary',
                    style: { fontSize: 12 },
                    children: r.time,
                  }),
                ],
              }),
            }),
          }),
        },
        r.id
      )
    ),
  });
}
function Xn() {
  const t = O(),
    [s, o] = l.exports.useState(!1),
    [n, a] = l.exports.useState({}),
    [u, r] = l.exports.useState([]);
  function i(h = !0) {
    h && o(!0),
      le
        .get('/api/message/list')
        .then((p) => {
          r(p.data);
        })
        .finally(() => {
          h && o(!1);
        });
  }
  function d(h) {
    const p = h.map((P) => P.id);
    le.post('/api/message/read', { ids: p }).then(() => {
      i();
    });
  }
  l.exports.useEffect(() => {
    i();
  }, []),
    l.exports.useEffect(() => {
      const h = Jt(u, 'type');
      a(h);
    }, [u]);
  const _ = [
    {
      key: 'message',
      title: t['message.tab.title.message'],
      titleIcon: e(Ht, {}),
    },
    {
      key: 'notice',
      title: t['message.tab.title.notice'],
      titleIcon: e(Gt, {}),
    },
    { key: 'todo', title: t['message.tab.title.todo'], titleIcon: e(Xt, {}) },
  ];
  return e('div', {
    className: ne['message-box'],
    children: e(Ee, {
      loading: s,
      style: { display: 'block' },
      children: e(Ge, {
        overflow: 'dropdown',
        type: 'rounded',
        defaultActiveTab: 'message',
        destroyOnHide: !0,
        extra: e(G, {
          type: 'text',
          onClick: () => r([]),
          children: t['message.empty'],
        }),
        children: _.map((h) => {
          const { key: p, title: P } = h,
            S = n[p] || [],
            f = S.filter((F) => !F.status);
          return e(
            Ge.TabPane,
            {
              title: c('span', {
                children: [P, f.length ? `(${f.length})` : ''],
              }),
              children: e(Gn, {
                data: S,
                unReadData: f,
                onItemClick: (F) => {
                  d([F]);
                },
                onAllBtnClick: (F) => {
                  d(F);
                },
              }),
            },
            p
          );
        }),
      }),
    }),
  });
}
function Zn({ children: t }) {
  return e(He, {
    trigger: 'hover',
    popup: () => e(Xn, {}),
    position: 'br',
    unmountOnExit: !1,
    popupAlign: { bottom: 4 },
    children: e(Ut, { count: 9, dot: !0, children: t }),
  });
}
var Yn = { 'icon-button': '_icon-button_12azl_1' };
function Qn(t, s) {
  const u = t,
    { icon: o, className: n } = u,
    a = ue(u, ['icon', 'className']);
  return e(
    G,
    D(
      {
        ref: s,
        icon: o,
        shape: 'circle',
        type: 'secondary',
        className: Q(Yn['icon-button'], n),
      },
      a
    )
  );
}
var me = l.exports.forwardRef(Qn);
const eo = '_block_byc7u_1',
  to = '_title_byc7u_4';
var De = { block: eo, title: to, 'switch-wrapper': '_switch-wrapper_byc7u_9' };
function xe(t) {
  const { title: s, options: o, children: n } = t,
    a = O(),
    u = ee((i) => i.settings),
    r = ce();
  return c('div', {
    className: De.block,
    children: [
      e('h5', { className: De.title, children: s }),
      o &&
        o.map((i) => {
          const d = i.type || 'switch';
          return c(
            'div',
            {
              className: De['switch-wrapper'],
              children: [
                e('span', { children: a[i.name] }),
                d === 'switch' &&
                  e(Zt, {
                    size: 'small',
                    checked: !!u[i.value],
                    onChange: (_) => {
                      const h = R(D({}, u), { [i.value]: _ });
                      r({ type: 'update-settings', payload: { settings: h } }),
                        _ &&
                          i.value === 'colorWeek' &&
                          (document.body.style.filter = 'invert(80%)'),
                        !_ &&
                          i.value === 'colorWeek' &&
                          (document.body.style.filter = 'none');
                    },
                  }),
                d === 'number' &&
                  e(Yt, {
                    style: { width: 80 },
                    size: 'small',
                    value: u.menuWidth,
                    onChange: (_) => {
                      const h = R(D({}, u), { [i.value]: _ });
                      r({ type: 'update-settings', payload: { settings: h } });
                    },
                  }),
              ],
            },
            i.value
          );
        }),
      n,
      e(Xe, {}),
    ],
  });
}
const no = '_input_77wyg_1',
  oo = '_color_77wyg_9',
  so = '_ul_77wyg_14',
  ro = '_li_77wyg_19';
var pe = { input: no, color: oo, ul: so, li: ro };
function ao() {
  const t =
      document.querySelector('body').getAttribute('arco-theme') || 'light',
    s = ee((r) => r.settings),
    o = O(),
    n = s.themeColor,
    a = Ze(n, { list: !0 }),
    u = ce();
  return c('div', {
    children: [
      e(He, {
        trigger: 'hover',
        position: 'bl',
        popup: () =>
          e(Qt, {
            color: n,
            onChangeComplete: (r) => {
              const i = r.hex;
              u({
                type: 'update-settings',
                payload: { settings: R(D({}, s), { themeColor: i }) },
              }),
                Ze(i, { list: !0, dark: t === 'dark' }).forEach((_, h) => {
                  const p = en(_);
                  document.body.style.setProperty(`--arcoblue-${h + 1}`, p);
                });
            },
          }),
        children: c('div', {
          className: pe.input,
          children: [
            e('div', { className: pe.color, style: { backgroundColor: n } }),
            e('span', { children: n }),
          ],
        }),
      }),
      e('ul', {
        className: pe.ul,
        children: a.map((r, i) =>
          e('li', { className: pe.li, style: { backgroundColor: r } }, i)
        ),
      }),
      e(ie.Paragraph, {
        style: { fontSize: 12 },
        children: o['settings.color.tooltip'],
      }),
    ],
  });
}
function ht(t) {
  const { trigger: s } = t,
    [o, n] = l.exports.useState(!1),
    a = O(),
    u = ee((i) => i.settings);
  function r() {
    sn(JSON.stringify(u, null, 2)),
      ve.success(a['settings.copySettings.message']);
  }
  return c(de, {
    children: [
      s
        ? tn.cloneElement(s, { onClick: () => n(!0) })
        : e(me, { icon: e(ge, {}), onClick: () => n(!0) }),
      c(nn, {
        width: 300,
        title: c(de, { children: [e(ge, {}), a['settings.title']] }),
        visible: o,
        okText: a['settings.copySettings'],
        cancelText: a['settings.close'],
        onOk: r,
        onCancel: () => n(!1),
        children: [
          e(xe, { title: a['settings.themeColor'], children: e(ao, {}) }),
          e(xe, {
            title: a['settings.content'],
            options: [
              { name: 'settings.navbar', value: 'navbar' },
              { name: 'settings.menu', value: 'menu' },
              { name: 'settings.topMenu', value: 'topMenu' },
              { name: 'settings.tabBar', value: 'tabBar' },
              { name: 'settings.footer', value: 'footer' },
              {
                name: 'settings.menuWidth',
                value: 'menuWidth',
                type: 'number',
              },
            ],
          }),
          e(xe, {
            title: a['settings.otherSettings'],
            options: [{ name: 'settings.colorWeek', value: 'colorWeek' }],
          }),
          e(on, { content: a['settings.alertContent'] }),
        ],
      }),
    ],
  });
}
const uo = '_navbar_158hh_1',
  io = '_left_158hh_10',
  lo = '_logo_158hh_15',
  co = '_center_158hh_29',
  go = '_right_158hh_45',
  mo = '_username_158hh_60',
  po = '_round_158hh_63';
var B = {
  navbar: uo,
  left: io,
  logo: lo,
  'logo-name': '_logo-name_158hh_22',
  center: co,
  right: go,
  username: mo,
  round: po,
  'dropdown-icon': '_dropdown-icon_158hh_69',
  'fixed-settings': '_fixed-settings_158hh_74',
};
function ho(t) {
  return Object.prototype.toString.call(t) === '[object Array]';
}
const Y = (function () {
    try {
      return !(typeof window != 'undefined' && document !== void 0);
    } catch {
      return !0;
    }
  })(),
  fo = (t) => {
    if (!Y) return localStorage.getItem(t);
  };
function oe(t, s) {
  const [o, n] = l.exports.useState(fo(t) || s),
    a = (r) => {
      Y || (localStorage.setItem(t, r), r !== o && n(r));
    },
    u = () => {
      Y || localStorage.removeItem(t);
    };
  return (
    l.exports.useEffect(() => {
      const r = localStorage.getItem(t);
      r && n(r);
    }, [t]),
    [o, a, u]
  );
}
const ft = (t, s) =>
    !s || !s.length
      ? !1
      : s.join('') === '*'
      ? !0
      : t.every((o) => s.includes(o)),
  bo = (t, s) => {
    const { resource: o, actions: n = [] } = t;
    if (o instanceof RegExp) {
      const r = Object.keys(s).filter((i) => i.match(o));
      return r.length
        ? r.every((i) => {
            const d = s[i];
            return ft(n, d);
          })
        : !1;
    }
    const a = s[o];
    return ft(n, a);
  };
var _o = (t, s) => {
  const { requiredPermissions: o, oneOfPerm: n } = t;
  if (Array.isArray(o) && o.length) {
    let a = 0;
    for (const u of o) bo(u, s) && a++;
    return n ? a > 0 : a === o.length;
  }
  return !0;
};
const Ae = [
    {
      name: 'menu.dashboard',
      key: 'dashboard',
      children: [
        { name: 'menu.dashboard.workplace', key: 'dashboard/workplace' },
      ],
    },
    { name: 'Example', key: 'example' },
  ],
  bt = (t) => {
    const s = t === 'admin' ? ['*'] : ['read'],
      o = {};
    return (
      Ae.forEach((n) => {
        n.children &&
          n.children.forEach((a) => {
            o[a.name] = s;
          });
      }),
      o
    );
  },
  _t = (t, s, o = []) => {
    if (!t.length) return [];
    for (const n of t) {
      const { requiredPermissions: a, oneOfPerm: u } = n;
      let r = !0;
      if ((a && (r = _o({ requiredPermissions: a, oneOfPerm: u }, s)), !!r))
        if (n.children && n.children.length) {
          const i = R(D({}, n), { children: [] });
          _t(n.children, s, i.children), i.children.length && o.push(i);
        } else o.push(D({}, n));
    }
    return o;
  },
  yo = (t) => {
    const [s, o] = l.exports.useState(Ae),
      n = l.exports.useMemo(() => JSON.stringify(t || {}), [t]);
    l.exports.useEffect(() => {
      const u = _t(Ae, t);
      o(u);
    }, [n, t]);
    const a = l.exports.useMemo(() => {
      var r, i;
      const u = s[0];
      return u
        ? ((i =
            (r = u == null ? void 0 : u.children) == null ? void 0 : r[0]) ==
          null
            ? void 0
            : i.key) || u.key
        : '';
    }, [s]);
    return [s, a];
  };
function Eo({ show: t, topMenu: s, menu: o }) {
  const n = O(),
    a = ee((m) => m.userInfo),
    u = ce(),
    [, r] = oe('userStatus'),
    [i, d] = oe('userRole', 'admin'),
    { setLang: _, lang: h, theme: p, setTheme: P } = l.exports.useContext(we);
  function S() {
    r('logout'), (window.location.href = '/login');
  }
  function f(m) {
    m === 'logout' ? S() : ve.info(`You clicked ${m}`);
  }
  const F = l.exports.useMemo(() => bt(i), [i]);
  if (
    (l.exports.useEffect(() => {
      JSON.stringify((a == null ? void 0 : a.permissions) || {}) !==
        JSON.stringify(F) &&
        u({
          type: 'update-userInfo',
          payload: { userInfo: R(D({}, a), { permissions: F }) },
        });
    }, [u, F, a]),
    !t)
  )
    return e('div', {
      className: B['fixed-settings'],
      children: e(ht, {
        trigger: e(G, { icon: e(ge, {}), type: 'primary', size: 'large' }),
      }),
    });
  const j = () => {
      d(i === 'admin' ? 'user' : 'admin');
    },
    U = c(x, {
      onClickMenuItem: f,
      children: [
        e(
          x.SubMenu,
          {
            title: c(de, {
              children: [
                e(Ye, { className: B['dropdown-icon'] }),
                e('span', {
                  className: B['user-role'],
                  children:
                    i === 'admin'
                      ? n['menu.user.role.admin']
                      : n['menu.user.role.user'],
                }),
              ],
            }),
            children: c(
              x.Item,
              {
                onClick: j,
                children: [
                  e(Qe, { className: B['dropdown-icon'] }),
                  n['menu.user.switchRoles'],
                ],
              },
              'switch role'
            ),
          },
          'role'
        ),
        c(
          x.Item,
          {
            children: [
              e(ge, { className: B['dropdown-icon'] }),
              n['menu.user.setting'],
            ],
          },
          'setting'
        ),
        e(
          x.SubMenu,
          {
            title: c('div', {
              style: { width: 80 },
              children: [
                e(rn, { className: B['dropdown-icon'] }),
                n['message.seeMore'],
              ],
            }),
            children: c(
              x.Item,
              {
                children: [
                  e(et, { className: B['dropdown-icon'] }),
                  n['menu.dashboard.workplace'],
                ],
              },
              'workplace'
            ),
          },
          'more'
        ),
        e(Xe, { style: { margin: '4px 0' } }),
        c(
          x.Item,
          {
            children: [
              e(an, { className: B['dropdown-icon'] }),
              n['navbar.logout'],
            ],
          },
          'logout'
        ),
      ],
    });
  return c('div', {
    className: B.navbar,
    children: [
      e('div', {
        className: B.left,
        children: c('div', {
          className: B.logo,
          children: [
            e(pt, {}),
            e('div', { className: B['logo-name'], children: 'Arco Pro' }),
          ],
        }),
      }),
      e('div', { className: B.center, children: o && s }),
      c('ul', {
        className: B.right,
        children: [
          e('li', {
            children: e(Fe.Search, {
              className: B.round,
              placeholder: n['navbar.search.placeholder'],
            }),
          }),
          e('li', {
            children: e(un, {
              triggerElement: e(me, { icon: e(ln, {}) }),
              options: [
                { label: '\u4E2D\u6587', value: 'zh-CN' },
                { label: 'English', value: 'en-US' },
              ],
              value: h,
              triggerProps: {
                autoAlignPopupWidth: !1,
                autoAlignPopupMinWidth: !0,
                position: 'br',
              },
              trigger: 'hover',
              onChange: (m) => {
                _(m);
                const b = mt[m];
                ve.info(`${b['message.lang.tips']}${m}`);
              },
            }),
          }),
          e('li', {
            children: e(Zn, { children: e(me, { icon: e(cn, {}) }) }),
          }),
          e('li', {
            children: e(dn, {
              content:
                p === 'light'
                  ? n['settings.navbar.theme.toDark']
                  : n['settings.navbar.theme.toLight'],
              children: e(me, {
                icon: p !== 'dark' ? e(gn, {}) : e(mn, {}),
                onClick: () => P(p === 'light' ? 'dark' : 'light'),
              }),
            }),
          }),
          e(ht, {}),
          a &&
            e('li', {
              children: e(tt, {
                droplist: U,
                position: 'br',
                children: e(Ue, {
                  size: 32,
                  style: { cursor: 'pointer' },
                  children: e('img', { alt: 'avatar', src: a.avatar }),
                }),
              }),
            }),
        ],
      }),
    ],
  });
}
const vo = '_footer_1si67_1';
var Fo = { footer: vo };
function yt(t = {}) {
  const n = t,
    { className: s } = n,
    o = ue(n, ['className']);
  return e(
    Z.Footer,
    R(D({ className: Q(Fo.footer, s) }, o), { children: 'Arco Design Pro' })
  );
}
var A = {
  'tab-bar-container': '_tab-bar-container_1eenx_1',
  'tab-bar-box': '_tab-bar-box_1eenx_6',
  'tab-bar-scroll': '_tab-bar-scroll_1eenx_13',
  'tags-wrap': '_tags-wrap_1eenx_18',
  'tab-tag': '_tab-tag_1eenx_27',
  'tag-link': '_tag-link_1eenx_42',
  'link-activated': '_link-activated_1eenx_46',
  'dropdown-label': '_dropdown-label_1eenx_61',
  'separate-line': '_separate-line_1eenx_64',
  'tag-bar-operation': '_tag-bar-operation_1eenx_67',
};
const T = {
  Reload: 'reload',
  Current: 'current',
  Left: 'left',
  Right: 'right',
  Others: 'others',
  All: 'all',
};
function Co(t, s) {
  return s.find((o) => t === `/${o.key}`);
}
function Et(t, s, o) {
  const n = Co(t, o);
  return n
    ? { title: n.name, name: n.key, path: t, fullPath: `${t}${s || ''}` }
    : null;
}
function wo({
  routes: t,
  defaultRoute: s,
  defaultTab: o,
  tabList: n,
  offsetTop: a = 0,
  onTabsChange: u,
  onCloseTabs: r,
  onReload: i,
}) {
  const d = nt(),
    _ = ot(),
    h = O(),
    p = `${_.pathname}${_.search || ''}`;
  function P(m) {
    m.fullPath !== p && d.push(m.fullPath);
  }
  function S(m, b) {
    if (b === 0) return;
    const y = n.filter((M, J) => J !== b);
    if ((r == null || r([m]), u(y), m.fullPath === p)) {
      const M = y[b - 1] || y[0];
      d.push(M.fullPath);
    }
  }
  function f(m = n) {
    return m.findIndex((b) => b.fullPath === p);
  }
  function F(m, b) {
    b.length && (r == null || r(b)), u(m);
  }
  function j(m, b, y) {
    const M = f();
    if (m === T.Current) {
      S(b, y);
      return;
    }
    if (m === T.Left) {
      const $ = n.filter((q, v) => v === 0 || v >= y),
        L = n.filter((q, v) => v > 0 && v < y);
      F($, L), M > 0 && M < y && d.push(b.fullPath);
      return;
    }
    if (m === T.Right) {
      const $ = n.filter((q, v) => v <= y),
        L = n.filter((q, v) => v > y);
      F($, L), M > y && d.push(b.fullPath);
      return;
    }
    if (m === T.Others) {
      const $ = n.filter((q, v) => v === 0 || v === y),
        L = n.filter((q, v) => v !== 0 && v !== y);
      F($, L), d.push(b.fullPath);
      return;
    }
    if (m === T.Reload) {
      i == null || i(b);
      return;
    }
    const J = n.filter(($, L) => L !== 0);
    F([o], J), d.push(o.fullPath);
  }
  function U(m, b) {
    const y = m.fullPath !== p,
      M = b === 0,
      J = b <= 1,
      $ = b === n.length - 1;
    return c(x, {
      onClickMenuItem: (L) => j(L, m, b),
      children: [
        c(
          x.Item,
          {
            disabled: y,
            children: [
              e(hn, {}),
              e('span', {
                className: A['dropdown-label'],
                children: '\u91CD\u65B0\u52A0\u8F7D',
              }),
            ],
          },
          T.Reload
        ),
        c(
          x.Item,
          {
            disabled: M,
            className: A['separate-line'],
            children: [
              e(st, {}),
              e('span', {
                className: A['dropdown-label'],
                children: '\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875',
              }),
            ],
          },
          T.Current
        ),
        c(
          x.Item,
          {
            disabled: J,
            children: [
              e(fn, {}),
              e('span', {
                className: A['dropdown-label'],
                children: '\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875',
              }),
            ],
          },
          T.Left
        ),
        c(
          x.Item,
          {
            disabled: $,
            className: A['separate-line'],
            children: [
              e(bn, {}),
              e('span', {
                className: A['dropdown-label'],
                children: '\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875',
              }),
            ],
          },
          T.Right
        ),
        c(
          x.Item,
          {
            disabled: n.length <= 2 && b !== 0,
            children: [
              e(_n, {}),
              e('span', {
                className: A['dropdown-label'],
                children: '\u5173\u95ED\u5176\u5B83\u6807\u7B7E\u9875',
              }),
            ],
          },
          T.Others
        ),
        c(
          x.Item,
          {
            disabled: n.length <= 1,
            children: [
              e(yn, {}),
              e('span', {
                className: A['dropdown-label'],
                children: '\u5173\u95ED\u5168\u90E8\u6807\u7B7E\u9875',
              }),
            ],
          },
          T.All
        ),
      ],
    });
  }
  return e('div', {
    className: A['tab-bar-container'],
    children: e(pn, {
      offsetTop: a,
      children: c('div', {
        className: A['tab-bar-box'],
        children: [
          e('div', {
            className: A['tab-bar-scroll'],
            children: e('div', {
              className: A['tags-wrap'],
              children: n.map((m, b) =>
                e(
                  tt,
                  {
                    droplist: U(m, b),
                    trigger: 'contextMenu',
                    position: 'bl',
                    children: c('span', {
                      className: Q(
                        'arco-tag arco-tag-size-medium arco-tag-checked',
                        A['tab-tag'],
                        { [A['link-activated']]: m.fullPath === p }
                      ),
                      onClick: () => P(m),
                      children: [
                        e('span', {
                          className: A['tag-link'],
                          children: h[m.title] || m.title,
                        }),
                        b !== 0 &&
                          e('span', {
                            className:
                              'arco-icon-hover arco-tag-icon-hover arco-icon-hover-size-medium arco-tag-close-btn',
                            onClick: (y) => {
                              y.stopPropagation(), S(m, b);
                            },
                            children: e(st, {}),
                          }),
                      ],
                    }),
                  },
                  m.fullPath
                )
              ),
            }),
          }),
          e('div', { className: A['tag-bar-operation'] }),
        ],
      }),
    }),
  });
}
const Do = 'marketing:tabs';
function he(t) {
  return encodeURIComponent(String(t || 'unknown'));
}
function Se(t, s) {
  if (!!t)
    for (const o of s) {
      const n = t[o];
      if (typeof n == 'string' || typeof n == 'number') return n;
    }
}
function xo(t) {
  const s = t == null ? void 0 : t.defaultTenant;
  return {
    tenantCode:
      Se(t || void 0, ['tenantCode', 'tenantId']) ||
      Se(s, ['tenantCode', 'code', 'tenantId', 'id']),
    userId: Se(t || void 0, ['userId', 'id', 'accountId', 'account', 'name']),
  };
}
function vt(t) {
  return `${Do}:${he(t.tenantCode)}:${he(t.userId)}`;
}
function Be(t, s) {
  return `${he(t.tenantCode)}:${he(t.userId)}:${encodeURIComponent(s)}`;
}
function Ao(t) {
  try {
    const s = sessionStorage.getItem(vt(t));
    if (!s) return null;
    const o = JSON.parse(s);
    return Array.isArray(o)
      ? o.filter(
          (n) =>
            n &&
            typeof n.title == 'string' &&
            typeof n.name == 'string' &&
            typeof n.path == 'string' &&
            typeof n.fullPath == 'string'
        )
      : null;
  } catch {
    return null;
  }
}
function So(t, s) {
  try {
    sessionStorage.setItem(vt(t), JSON.stringify(s));
  } catch {}
}
function Bo(u) {
  var r = u,
    { identity: t, component: s, render: o, children: n } = r,
    a = ue(r, ['identity', 'component', 'render', 'children']);
  return e(
    te,
    R(D({}, a), {
      render: (i) => {
        const d = `${i.location.pathname}${i.location.search || ''}`,
          _ = Be(t, d),
          h = s;
        return e(En, {
          id: _,
          name: _,
          saveScrollPosition: 'screen',
          children: h ? e(h, D({}, i)) : o ? o(i) : n,
        });
      },
    })
  );
}
function ko() {
  const t = rt.parseUrl(Y ? '' : window.location.href).query,
    s = {};
  return (
    Object.keys(t).forEach((o) => {
      t[o] === 'true' && (s[o] = !0), t[o] === 'false' && (s[o] = !1);
    }),
    s
  );
}
const No = '_layout_720q3_1',
  Io = '_icon_720q3_87',
  Po = '_spin_720q3_112';
var k = {
  layout: No,
  'layout-navbar': '_layout-navbar_720q3_5',
  'layout-navbar-hidden': '_layout-navbar-hidden_720q3_14',
  'layout-sider': '_layout-sider_720q3_17',
  'collapse-btn': '_collapse-btn_720q3_51',
  'menu-wrapper': '_menu-wrapper_720q3_68',
  icon: Io,
  'icon-empty': '_icon-empty_720q3_91',
  'layout-content': '_layout-content_720q3_96',
  'layout-content-wrapper': '_layout-content-wrapper_720q3_103',
  'layout-content-wrapper-with-tab':
    '_layout-content-wrapper-with-tab_720q3_106',
  'layout-breadcrumb': '_layout-breadcrumb_720q3_109',
  spin: Po,
};
function Ro(t, s) {
  const o = vn(t, s);
  return (o.preload = t.requireAsync || t), o;
}
function Mo(t) {
  return t.error
    ? (console.error(t.error), null)
    : e('div', { className: k.spin, children: e(Ee, {}) });
}
var Ft = (t) =>
  Ro(t, { fallback: Mo({ pastDelay: !0, error: !1, timedOut: !1 }) });
const Lo = x.Item,
  To = x.SubMenu,
  $o = Z.Sider,
  Oo = Z.Content;
function zo(t) {
  switch (t) {
    case 'dashboard':
      return e(et, { className: k.icon });
    case 'example':
      return e(Qe, { className: k.icon });
    default:
      return e('div', { className: k['icon-empty'] });
  }
}
function jo(t) {
  const s = {
      './pages/example/index.tsx': () =>
        N(
          () => import('./index.5b1565e2.js'),
          [
            'assets/index.5b1565e2.js',
            'assets/index.e7a6af1d.css',
            'assets/vendor.0a91e66f.js',
            'assets/vendor.3f379851.css',
          ]
        ),
      './pages/login/banner.tsx': () =>
        N(
          () =>
            Promise.resolve().then(function () {
              return Xo;
            }),
          void 0
        ),
      './pages/login/form.tsx': () =>
        N(
          () =>
            Promise.resolve().then(function () {
              return Go;
            }),
          void 0
        ),
      './pages/login/index.tsx': () =>
        N(
          () =>
            Promise.resolve().then(function () {
              return Zo;
            }),
          void 0
        ),
      './pages/dashboard/workplace/announcement.tsx': () =>
        N(
          () => import('./announcement.3a6e14ee.js'),
          [
            'assets/announcement.3a6e14ee.js',
            'assets/announcement.4446c828.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.0a91e66f.js',
            'assets/vendor.3f379851.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/carousel.tsx': () =>
        N(
          () => import('./carousel.ee95df84.js'),
          [
            'assets/carousel.ee95df84.js',
            'assets/vendor.0a91e66f.js',
            'assets/vendor.3f379851.css',
          ]
        ),
      './pages/dashboard/workplace/content-percentage.tsx': () =>
        N(
          () => import('./content-percentage.a4e51a61.js'),
          [
            'assets/content-percentage.a4e51a61.js',
            'assets/index.e7a6af1d.css',
            'assets/vendor.0a91e66f.js',
            'assets/vendor.3f379851.css',
            'assets/index.78bb87cb.js',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/docs.tsx': () =>
        N(
          () => import('./docs.e3b9ca96.js'),
          [
            'assets/docs.e3b9ca96.js',
            'assets/docs.e521c9d6.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.0a91e66f.js',
            'assets/vendor.3f379851.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/index.tsx': () =>
        N(
          () => import('./index.46987221.js'),
          [
            'assets/index.46987221.js',
            'assets/index.8c5bf3cd.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.0a91e66f.js',
            'assets/vendor.3f379851.css',
            'assets/overview.27b3f13d.js',
            'assets/overview.65964fa4.css',
            'assets/index.78bb87cb.js',
            'assets/index.9464998a.js',
            'assets/popular-contents.9dc50daf.js',
            'assets/popular-contents.884121de.css',
            'assets/content-percentage.a4e51a61.js',
            'assets/shortcuts.ea86f827.js',
            'assets/shortcuts.0626e3d2.css',
            'assets/announcement.3a6e14ee.js',
            'assets/announcement.4446c828.css',
            'assets/carousel.ee95df84.js',
            'assets/docs.e3b9ca96.js',
            'assets/docs.e521c9d6.css',
          ]
        ),
      './pages/dashboard/workplace/overview.tsx': () =>
        N(
          () => import('./overview.27b3f13d.js'),
          [
            'assets/overview.27b3f13d.js',
            'assets/overview.65964fa4.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.0a91e66f.js',
            'assets/vendor.3f379851.css',
            'assets/index.78bb87cb.js',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/popular-contents.tsx': () =>
        N(
          () => import('./popular-contents.9dc50daf.js'),
          [
            'assets/popular-contents.9dc50daf.js',
            'assets/popular-contents.884121de.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.0a91e66f.js',
            'assets/vendor.3f379851.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/shortcuts.tsx': () =>
        N(
          () => import('./shortcuts.ea86f827.js'),
          [
            'assets/shortcuts.ea86f827.js',
            'assets/shortcuts.0626e3d2.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.0a91e66f.js',
            'assets/vendor.3f379851.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/exception/403/index.tsx': () =>
        N(
          () => import('./index.aa084993.js'),
          [
            'assets/index.aa084993.js',
            'assets/index.6ecaddee.css',
            'assets/vendor.0a91e66f.js',
            'assets/vendor.3f379851.css',
          ]
        ),
    },
    o = [];
  function n(a) {
    a.forEach((u) => {
      u.key && !u.children
        ? ((u.component = Ft(s[`./pages/${u.key}/index.tsx`])), o.push(u))
        : ho(u.children) && u.children.length && n(u.children);
    });
  }
  return n(t), o;
}
function qo() {
  const t = ko(),
    s = nt(),
    o = ot(),
    { dropScope: n, refreshScope: a } = at.exports.useAliveController(),
    u = o.pathname,
    r = rt.parseUrl(u).url.slice(1),
    i = O(),
    { settings: d, userLoading: _, userInfo: h } = ee((g) => g),
    p = l.exports.useMemo(() => xo(h), [h]),
    P = l.exports.useMemo(
      () => `${p.tenantCode || 'unknown'}:${p.userId || 'unknown'}`,
      [p.tenantCode, p.userId]
    ),
    [S, f] = yo(h == null ? void 0 : h.permissions),
    F = [r || f],
    j = (r || f).split('/'),
    U = j.slice(0, j.length - 1),
    [m, b] = l.exports.useState([]),
    [y, M] = l.exports.useState(!1),
    [J, $] = l.exports.useState(F),
    [L, q] = l.exports.useState(U),
    [v, fe] = l.exports.useState([]),
    se = l.exports.useRef(new Map()),
    be = l.exports.useRef(new Map()),
    Ie = 60,
    Pe = y ? 48 : d.menuWidth,
    re = d.navbar && t.navbar !== !1,
    Re = d.menu && t.menu !== !1,
    X = Re && d.topMenu,
    Me = Re && !X,
    Le = d.tabBar && t.tabBar !== !1,
    St = d.footer && t.footer !== !1,
    H = l.exports.useMemo(() => jo(S) || [], [S]),
    K = l.exports.useMemo(() => {
      const g = `/${f}`;
      return Et(g, '', H) || { title: f, name: f, path: g, fullPath: g };
    }, [f, H]);
  l.exports.useEffect(() => {
    if (!f) return;
    const g = Ao(p);
    fe((g == null ? void 0 : g.length) ? g : [K]);
  }, [f, K, P, p]),
    l.exports.useEffect(() => {
      const g = Et(o.pathname, o.search, H);
      !g ||
        fe((w) => {
          const z = w.length ? w : [K];
          return z.some((W) => W.fullPath === g.fullPath) ? z : [...z, g];
        });
    }, [K, H, o.pathname, o.search]),
    l.exports.useEffect(() => {
      v.length && So(p, v);
    }, [P, p, v]);
  const Bt = l.exports.useCallback(
      (g) => {
        fe(g.length ? g : [K]);
      },
      [K]
    ),
    kt = l.exports.useCallback(
      (g) => {
        g.forEach((w) => {
          n(Be(p, w.fullPath));
        });
      },
      [n, p]
    ),
    Nt = l.exports.useCallback(
      (g) => {
        a(Be(p, g.fullPath));
      },
      [a, p]
    );
  function It(g) {
    const w = H.find((I) => I.key === g),
      W = w.component.preload();
    lt.start(),
      W.then(() => {
        s.push(w.path ? w.path : `/${g}`), lt.done();
      });
  }
  function Pt() {
    M((g) => !g);
  }
  const Rt = Me ? { paddingLeft: Pe } : {},
    Te = re ? { paddingTop: Ie } : {},
    Mt = D(D({}, Rt), Te),
    $e = e(x, {
      mode: X ? 'horizontal' : 'vertical',
      collapse: !X && y,
      onClickMenuItem: It,
      selectedKeys: J,
      openKeys: X ? void 0 : L,
      onClickSubMenu: (g, w) => {
        X || q(w);
      },
      children: Lt(i)(S, 1),
    });
  function Lt(g) {
    return (
      se.current.clear(),
      function w(z, W, I = []) {
        return z.map((E) => {
          const { breadcrumb: Tt = !0, ignore: $t } = E,
            Ot = zo(E.key),
            ze = c(de, { children: [Ot, ' ', g[E.name] || E.name] });
          se.current.set(`/${E.key}`, Tt ? [...I, E.name] : []);
          const je = (E.children || []).filter((_e) => {
            const { ignore: qe, breadcrumb: zt = !0 } = _e;
            return (
              (qe || E.ignore) &&
                se.current.set(`/${_e.key}`, zt ? [...I, E.name, _e.name] : []),
              !qe
            );
          });
          return $t
            ? ''
            : je.length
            ? (be.current.set(E.key, { subMenu: !0 }),
              e(
                To,
                { title: ze, children: w(je, W + 1, [...I, E.name]) },
                E.key
              ))
            : (be.current.set(E.key, { menuItem: !0 }),
              e(Lo, { children: ze }, E.key));
        });
      }
    );
  }
  const Oe = l.exports.useCallback(() => {
    const g = u.split('/'),
      w = [],
      z = [];
    for (; g.length > 0; ) {
      const I = g.join('/').replace(/^\//, ''),
        E = be.current.get(I);
      E && E.menuItem && w.push(I), E && E.subMenu && z.push(I), g.pop();
    }
    $(w),
      q((W) => {
        const I = [...W];
        return (
          z.forEach((E) => {
            I.includes(E) || I.push(E);
          }),
          I
        );
      });
  }, [u]);
  return (
    l.exports.useEffect(() => {
      const g = se.current.get(u);
      b(g || []), Oe();
    }, [u, Oe]),
    c(Z, {
      className: k.layout,
      children: [
        e('div', {
          className: Q(k['layout-navbar'], {
            [k['layout-navbar-hidden']]: !re,
          }),
          children: e(Eo, { show: re, menu: X, topMenu: $e }),
        }),
        _
          ? e(Ee, { className: k.spin })
          : c(Z, {
              children: [
                Me &&
                  c($o, {
                    className: k['layout-sider'],
                    width: Pe,
                    collapsed: y,
                    onCollapse: M,
                    trigger: null,
                    collapsible: !0,
                    breakpoint: 'xl',
                    style: Te,
                    children: [
                      e('div', { className: k['menu-wrapper'], children: $e }),
                      e('div', {
                        className: k['collapse-btn'],
                        onClick: Pt,
                        children: y ? e(Fn, {}) : e(Cn, {}),
                      }),
                    ],
                  }),
                c(Z, {
                  className: k['layout-content'],
                  style: Mt,
                  children: [
                    Le &&
                      e(wo, {
                        routes: H,
                        defaultRoute: f,
                        defaultTab: K,
                        tabList: v.length ? v : [K],
                        offsetTop: re ? Ie : 0,
                        onTabsChange: Bt,
                        onCloseTabs: kt,
                        onReload: Nt,
                      }),
                    c('div', {
                      className: Q(k['layout-content-wrapper'], {
                        [k['layout-content-wrapper-with-tab']]: Le,
                      }),
                      children: [
                        !!m.length &&
                          e('div', {
                            className: k['layout-breadcrumb'],
                            children: e(ut, {
                              children: m.map((g, w) =>
                                e(
                                  ut.Item,
                                  {
                                    children:
                                      (typeof g == 'string' && i[g]) || g,
                                  },
                                  w
                                )
                              ),
                            }),
                          }),
                        e(Oo, {
                          children: c(it, {
                            children: [
                              H.map((g, w) =>
                                e(
                                  Bo,
                                  {
                                    path: `/${g.key}`,
                                    component: g.component,
                                    identity: p,
                                  },
                                  w
                                )
                              ),
                              e(te, {
                                exact: !0,
                                path: '/',
                                children: e(wn, { to: `/${f}` }),
                              }),
                              e(te, {
                                path: '*',
                                component: Ft(() =>
                                  N(
                                    () => import('./index.aa084993.js'),
                                    [
                                      'assets/index.aa084993.js',
                                      'assets/index.6ecaddee.css',
                                      'assets/vendor.0a91e66f.js',
                                      'assets/vendor.3f379851.css',
                                    ]
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    St && e(yt, {}),
                  ],
                }),
              ],
            }),
      ],
    })
  );
}
const Ct = {
    'en-US': {
      'login.form.title': 'Login to Arco Design Pro',
      'login.form.userName.errMsg': 'Username cannot be empty',
      'login.form.password.errMsg': 'Password cannot be empty',
      'login.form.login.errMsg': 'Login error, please refresh and try again',
      'login.form.userName.placeholder': 'Username: admin',
      'login.form.password.placeholder': 'Password: admin',
      'login.form.rememberPassword': 'Remember password',
      'login.form.forgetPassword': 'Forgot password',
      'login.form.login': 'login',
      'login.form.register': 'register account',
      'login.banner.slogan1': 'Out-of-the-box high-quality template',
      'login.banner.subSlogan1':
        'Rich page templates, covering most typical business scenarios',
      'login.banner.slogan2': 'Built-in solutions to common problems',
      'login.banner.subSlogan2':
        'Internationalization, routing configuration, state management everything',
      'login.banner.slogan3': 'Access visualization enhancement tool AUX',
      'login.banner.subSlogan3': 'Realize flexible block development',
    },
    'zh-CN': {
      'login.form.title': '\u767B\u5F55 Arco Design Pro',
      'login.form.userName.errMsg':
        '\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A',
      'login.form.password.errMsg': '\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A',
      'login.form.login.errMsg':
        '\u767B\u5F55\u51FA\u9519\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5',
      'login.form.userName.placeholder': '\u7528\u6237\u540D\uFF1Aadmin',
      'login.form.password.placeholder': '\u5BC6\u7801\uFF1Aadmin',
      'login.form.rememberPassword': '\u8BB0\u4F4F\u5BC6\u7801',
      'login.form.forgetPassword': '\u5FD8\u8BB0\u5BC6\u7801',
      'login.form.login': '\u767B\u5F55',
      'login.form.register': '\u6CE8\u518C\u8D26\u53F7',
      'login.banner.slogan1':
        '\u5F00\u7BB1\u5373\u7528\u7684\u9AD8\u8D28\u91CF\u6A21\u677F',
      'login.banner.subSlogan1':
        '\u4E30\u5BCC\u7684\u7684\u9875\u9762\u6A21\u677F\uFF0C\u8986\u76D6\u5927\u591A\u6570\u5178\u578B\u4E1A\u52A1\u573A\u666F',
      'login.banner.slogan2':
        '\u5185\u7F6E\u4E86\u5E38\u89C1\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6848',
      'login.banner.subSlogan2':
        '\u56FD\u9645\u5316\uFF0C\u8DEF\u7531\u914D\u7F6E\uFF0C\u72B6\u6001\u7BA1\u7406\u5E94\u6709\u5C3D\u6709',
      'login.banner.slogan3':
        '\u63A5\u5165\u53EF\u89C6\u5316\u589E\u5F3A\u5DE5\u5177AUX',
      'login.banner.subSlogan3':
        '\u5B9E\u73B0\u7075\u6D3B\u7684\u533A\u5757\u5F0F\u5F00\u53D1',
    },
  },
  Ko = '_container_13zaa_1',
  Wo = '_banner_13zaa_5',
  Vo = '_content_13zaa_9',
  Uo = '_footer_13zaa_14',
  Jo = '_logo_13zaa_20',
  Ho = '_carousel_13zaa_48';
var C = {
  container: Ko,
  banner: Wo,
  content: Vo,
  footer: Uo,
  logo: Jo,
  'logo-text': '_logo-text_13zaa_28',
  'banner-inner': '_banner-inner_13zaa_39',
  carousel: Ho,
  'carousel-item': '_carousel-item_13zaa_51',
  'carousel-title': '_carousel-title_13zaa_58',
  'carousel-sub-title': '_carousel-sub-title_13zaa_64',
  'carousel-image': '_carousel-image_13zaa_70',
  'login-form-wrapper': '_login-form-wrapper_13zaa_74',
  'login-form-title': '_login-form-title_13zaa_77',
  'login-form-sub-title': '_login-form-sub-title_13zaa_83',
  'login-form-error-msg': '_login-form-error-msg_13zaa_88',
  'login-form-password-actions': '_login-form-password-actions_13zaa_93',
  'login-form-register-btn': '_login-form-register-btn_13zaa_97',
};
function wt() {
  const t = l.exports.useRef(),
    [s, o] = l.exports.useState(''),
    [n, a] = l.exports.useState(!1),
    [u, r, i] = oe('loginParams'),
    d = O(Ct),
    [_, h] = l.exports.useState(!!u);
  function p(f) {
    _ ? r(JSON.stringify(f)) : i(),
      localStorage.setItem('userStatus', 'login'),
      (window.location.href = '/');
  }
  function P(f) {
    o(''),
      a(!0),
      le
        .post('/api/user/login', f)
        .then((F) => {
          const { status: j, msg: U } = F.data;
          j === 'ok' ? p(f) : o(U || d['login.form.login.errMsg']);
        })
        .finally(() => {
          a(!1);
        });
  }
  function S() {
    t.current.validate().then((f) => {
      P(f);
    });
  }
  return (
    l.exports.useEffect(() => {
      const f = !!u;
      if ((h(f), t.current && f)) {
        const F = JSON.parse(u);
        t.current.setFieldsValue(F);
      }
    }, [u]),
    c('div', {
      className: C['login-form-wrapper'],
      children: [
        e('div', {
          className: C['login-form-title'],
          children: d['login.form.title'],
        }),
        e('div', {
          className: C['login-form-sub-title'],
          children: d['login.form.title'],
        }),
        e('div', { className: C['login-form-error-msg'], children: s }),
        c(Ce, {
          className: C['login-form'],
          layout: 'vertical',
          ref: t,
          initialValues: { userName: 'admin', password: 'admin' },
          children: [
            e(Ce.Item, {
              field: 'userName',
              rules: [
                { required: !0, message: d['login.form.userName.errMsg'] },
              ],
              children: e(Fe, {
                prefix: e(Ye, {}),
                placeholder: d['login.form.userName.placeholder'],
                onPressEnter: S,
              }),
            }),
            e(Ce.Item, {
              field: 'password',
              rules: [
                { required: !0, message: d['login.form.password.errMsg'] },
              ],
              children: e(Fe.Password, {
                prefix: e(Dn, {}),
                placeholder: d['login.form.password.placeholder'],
                onPressEnter: S,
              }),
            }),
            c(Je, {
              size: 16,
              direction: 'vertical',
              children: [
                c('div', {
                  className: C['login-form-password-actions'],
                  children: [
                    e(xn, {
                      checked: _,
                      onChange: h,
                      children: d['login.form.rememberPassword'],
                    }),
                    e(An, { children: d['login.form.forgetPassword'] }),
                  ],
                }),
                e(G, {
                  type: 'primary',
                  long: !0,
                  onClick: S,
                  loading: n,
                  children: d['login.form.login'],
                }),
                e(G, {
                  type: 'text',
                  long: !0,
                  className: C['login-form-register-btn'],
                  children: d['login.form.register'],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
var Go = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: wt,
});
function Dt() {
  const t = O(Ct),
    s = [
      {
        slogan: t['login.banner.slogan1'],
        subSlogan: t['login.banner.subSlogan1'],
        image:
          'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
      },
      {
        slogan: t['login.banner.slogan2'],
        subSlogan: t['login.banner.subSlogan2'],
        image:
          'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
      },
      {
        slogan: t['login.banner.slogan3'],
        subSlogan: t['login.banner.subSlogan3'],
        image:
          'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
      },
    ];
  return e(Sn, {
    className: C.carousel,
    animation: 'fade',
    children: s.map((o, n) =>
      e(
        'div',
        {
          children: c('div', {
            className: C['carousel-item'],
            children: [
              e('div', { className: C['carousel-title'], children: o.slogan }),
              e('div', {
                className: C['carousel-sub-title'],
                children: o.subSlogan,
              }),
              e('img', {
                alt: 'banner-image',
                className: C['carousel-image'],
                src: o.image,
              }),
            ],
          }),
        },
        `${n}`
      )
    ),
  });
}
var Xo = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Dt,
});
function ke() {
  return (
    l.exports.useEffect(() => {
      document.body.setAttribute('arco-theme', 'light');
    }, []),
    c('div', {
      className: C.container,
      children: [
        c('div', {
          className: C.logo,
          children: [
            e(pt, {}),
            e('div', {
              className: C['logo-text'],
              children: 'Arco Design Pro',
            }),
          ],
        }),
        e('div', {
          className: C.banner,
          children: e('div', {
            className: C['banner-inner'],
            children: e(Dt, {}),
          }),
        }),
        c('div', {
          className: C.content,
          children: [
            e('div', { className: C['content-inner'], children: e(wt, {}) }),
            e('div', { className: C.footer, children: e(yt, {}) }),
          ],
        }),
      ],
    })
  );
}
ke.displayName = 'LoginPage';
var Zo = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: ke,
});
function Yo() {
  return localStorage.getItem('userStatus') === 'login';
}
function Qo(t) {
  t === 'dark'
    ? document.body.setAttribute('arco-theme', 'dark')
    : document.body.removeAttribute('arco-theme');
}
var xt = (t) => {
  const { mock: s = !1, setup: o } = t;
  s !== !1 && o();
};
Y ||
  ((V.XHR.prototype.withCredentials = !0),
  xt({
    setup: () => {
      const t = window.localStorage.getItem('userRole') || 'admin';
      V.mock(new RegExp('/api/user/userInfo'), () =>
        V.mock({
          name: 'admin',
          avatar:
            'https://lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
          email: 'wangliqun@email.com',
          job: 'frontend',
          jobName: '\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08',
          organization: 'Frontend',
          organizationName: '\u524D\u7AEF',
          location: 'beijing',
          locationName: '\u5317\u4EAC',
          introduction:
            '\u738B\u529B\u7FA4\u5E76\u975E\u662F\u4E00\u4E2A\u771F\u5B9E\u5B58\u5728\u7684\u4EBA\u3002',
          personalWebsite: 'https://www.arco.design',
          verified: !0,
          phoneNumber: /177[*]{6}[0-9]{2}/,
          accountId: /[a-z]{4}[-][0-9]{8}/,
          registrationTime: V.Random.datetime('yyyy-MM-dd HH:mm:ss'),
          permissions: bt(t),
        })
      ),
        V.mock(new RegExp('/api/user/login'), (s) => {
          const { userName: o, password: n } = JSON.parse(s.body);
          return o
            ? n
              ? o === 'admin' && n === 'admin'
                ? { status: 'ok' }
                : {
                    status: 'error',
                    msg: '\u8D26\u53F7\u6216\u8005\u5BC6\u7801\u9519\u8BEF',
                  }
              : { status: 'error', msg: '\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A' }
            : {
                status: 'error',
                msg: '\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A',
              };
        });
    },
  }));
const At = [],
  es = () =>
    [
      {
        id: 1,
        type: 'message',
        title: '\u90D1\u66E6\u6708',
        subTitle: '\u7684\u79C1\u4FE1',
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
        content:
          '\u5BA1\u6279\u8BF7\u6C42\u5DF2\u53D1\u9001\uFF0C\u8BF7\u67E5\u6536',
        time: '\u4ECA\u5929 12:30:01',
      },
      {
        id: 2,
        type: 'message',
        title: '\u5B81\u6CE2',
        subTitle: '\u7684\u56DE\u590D',
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        content:
          '\u6B64\u5904 bug \u5DF2\u7ECF\u4FEE\u590D\uFF0C\u5982\u6709\u95EE\u9898\u8BF7\u67E5\u9605\u6587\u6863\u6216\u8005\u7EE7\u7EED github \u63D0 issue\uFF5E',
        time: '\u4ECA\u5929 12:30:01',
      },
      {
        id: 3,
        type: 'message',
        title: '\u5B81\u6CE2',
        subTitle: '\u7684\u56DE\u590D',
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        content: '\u6B64\u5904 bug \u5DF2\u7ECF\u4FEE\u590D',
        time: '\u4ECA\u5929 12:20:01',
      },
      {
        id: 4,
        type: 'todo',
        title: '\u57DF\u540D\u670D\u52A1',
        content:
          '\u5185\u5BB9\u8D28\u68C0\u961F\u5217\u4E8E 2021-12-01 19:50:23 \u8FDB\u884C\u53D8\u66F4\uFF0C\u8BF7\u91CD\u65B0',
        tag: { text: '\u672A\u5F00\u59CB', color: 'gray' },
      },
      {
        id: 5,
        type: 'todo',
        title: '\u5185\u5BB9\u5BA1\u6279\u901A\u77E5',
        content:
          '\u5B81\u9759\u63D0\u4EA4\u4E8E 2021-11-05\uFF0C\u9700\u8981\u60A8\u5728 2011-11-07\u4E4B\u524D\u5BA1\u6279',
        tag: { text: '\u8FDB\u884C\u4E2D', color: 'arcoblue' },
      },
      {
        id: 6,
        type: 'notice',
        title: '\u8D28\u68C0\u961F\u5217\u53D8\u66F4',
        content:
          '\u60A8\u7684\u4EA7\u54C1\u4F7F\u7528\u671F\u9650\u5373\u5C06\u622A\u6B62\uFF0C\u5982\u9700\u7EE7\u7EED\u4F7F\u7528\u4EA7\u54C1\u8BF7\u524D\u5F80\u8D2D\u2026',
        tag: { text: '\u5373\u5C06\u5230\u671F', color: 'red' },
      },
      {
        id: 7,
        type: 'notice',
        title: '\u89C4\u5219\u5F00\u901A\u6210\u529F',
        subTitle: '',
        avatar: '',
        content:
          '\u5185\u5BB9\u5C4F\u853D\u89C4\u5219\u4E8E 2021-12-01 \u5F00\u901A\u6210\u529F\u5E76\u751F\u6548\u3002',
        tag: { text: '\u5DF2\u5F00\u901A', color: 'green' },
      },
    ].map((t) => R(D({}, t), { status: At.indexOf(t.id) === -1 ? 0 : 1 }));
xt({
  setup: () => {
    V.mock(new RegExp('/api/message/list'), () => es()),
      V.mock(new RegExp('/api/message/read'), (t) => {
        const { ids: s } = JSON.parse(t.body);
        return At.push(...(s || [])), !0;
      });
  },
});
Y || V.setup({ timeout: '500-1500' });
const Ne = Bn(Vn);
function ts() {
  const t = ce(),
    [s, o] = oe('arco-lang', 'en-US'),
    [n, a] = oe('arco-theme', 'light');
  function u() {
    switch (s) {
      case 'zh-CN':
        return ct;
      case 'en-US':
        return Rn;
      default:
        return ct;
    }
  }
  function r() {
    Ne.dispatch({ type: 'update-userInfo', payload: { userLoading: !0 } }),
      le.get('/api/user/userInfo').then((d) => {
        Ne.dispatch({
          type: 'update-userInfo',
          payload: { userInfo: d.data, userLoading: !1 },
        });
      });
  }
  l.exports.useEffect(() => {
    Yo()
      ? r()
      : window.location.pathname.replace(/\//g, '') !== 'login' &&
        (window.location.pathname = '/login');
  }, []),
    l.exports.useEffect(() => {
      Qo(n), t({ type: 'update-theme', payload: { theme: n } });
    }, [t, n]);
  const i = { lang: s, setLang: o, theme: n, setTheme: a };
  return e(In, {
    children: e(Pn, {
      locale: u(),
      componentConfig: {
        Card: { bordered: !1 },
        List: { bordered: !1 },
        Table: { border: !1 },
      },
      children: e(we.Provider, {
        value: i,
        children: e(at.exports.AliveScope, {
          children: c(it, {
            children: [
              e(te, { path: '/login', component: ke }),
              e(te, { path: '/', component: qo }),
            ],
          }),
        }),
      }),
    }),
  });
}
function ns() {
  return e(Nn, { store: Ne, children: e(ts, {}) });
}
kn.render(e(ns, {}), document.getElementById('root'));
export { xt as s, O as u };
