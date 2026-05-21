var no = Object.defineProperty,
  oo = Object.defineProperties;
var so = Object.getOwnPropertyDescriptors;
var ve = Object.getOwnPropertySymbols;
var Nt = Object.prototype.hasOwnProperty,
  Bt = Object.prototype.propertyIsEnumerable;
var Tt = (e, t, n) =>
    t in e
      ? no(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  p = (e, t) => {
    for (var n in t || (t = {})) Nt.call(t, n) && Tt(e, n, t[n]);
    if (ve) for (var n of ve(t)) Bt.call(t, n) && Tt(e, n, t[n]);
    return e;
  },
  N = (e, t) => oo(e, so(t));
var Fe = (e, t) => {
  var n = {};
  for (var s in e) Nt.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && ve)
    for (var s of ve(e)) t.indexOf(s) < 0 && Bt.call(e, s) && (n[s] = e[s]);
  return n;
};
import {
  r as i,
  j as o,
  L as He,
  R as kt,
  a as d,
  B as ee,
  A as Rt,
  S as Lt,
  T as Se,
  b as ro,
  c as Ot,
  d as ao,
  g as uo,
  I as io,
  e as co,
  f as lo,
  h as Xe,
  i as jt,
  k as we,
  l as _e,
  M as ue,
  u as me,
  m as Ze,
  n as mo,
  o as go,
  D as Mt,
  p as $t,
  q as po,
  s as fo,
  F as De,
  t as qt,
  v as Ae,
  w as ho,
  x as _o,
  y as yo,
  z as k,
  C as Ut,
  E as bo,
  G as Eo,
  H as Co,
  J as xo,
  K as vo,
  N as Fo,
  O as So,
  P as wo,
  Q as Do,
  U as Ao,
  V as zt,
  W as de,
  X as Po,
  Y as Qe,
  Z as Vt,
  _ as Io,
  $ as No,
  a0 as Kt,
  a1 as Bo,
  a2 as To,
  a3 as ko,
  a4 as Ro,
  a5 as te,
  a6 as Lo,
  a7 as Wt,
  a8 as Oo,
  a9 as Jt,
  aa as jo,
  ab as Mo,
  ac as Gt,
  ad as Yt,
  ae as Ht,
  af as Xt,
  ag as ye,
  ah as et,
  ai as $o,
  aj as qo,
  ak as Uo,
  al as zo,
  am as Vo,
  an as ne,
  ao as Ko,
  ap as Wo,
  aq as Jo,
  ar as Go,
  as as Yo,
  at as Zt,
  au as Ho,
} from './vendor.44459b16.js';
const Xo = function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const u of r)
      if (u.type === 'childList')
        for (const a of u.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && s(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const u = {};
    return (
      r.integrity && (u.integrity = r.integrity),
      r.referrerpolicy && (u.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (u.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (u.credentials = 'omit')
        : (u.credentials = 'same-origin'),
      u
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const u = n(r);
    fetch(r.href, u);
  }
};
Xo();
const Zo = !1,
  Qo = !0,
  es = !0,
  ts = !1,
  ns = !0,
  os = !0,
  ss = '#165DFF',
  rs = 220;
var Qt = {
  colorWeek: Zo,
  navbar: Qo,
  menu: es,
  topMenu: ts,
  tabBar: ns,
  footer: os,
  themeColor: ss,
  menuWidth: rs,
};
const en = { settings: Qt, theme: 'light', userInfo: { permissions: {} } };
function as(e = en, t) {
  switch (t.type) {
    case 'update-settings': {
      const { settings: n } = t.payload;
      return N(p({}, e), { settings: n });
    }
    case 'update-theme': {
      const { theme: n } = t.payload;
      return N(p({}, e), { theme: n });
    }
    case 'update-userInfo': {
      const { userInfo: n = en.userInfo, userLoading: s } = t.payload;
      return N(p({}, e), { userLoading: s, userInfo: n });
    }
    default:
      return e;
  }
}
const us = 'modulepreload',
  tn = {},
  is = '/',
  _ = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((s) => {
            if (((s = `${is}${s}`), s in tn)) return;
            tn[s] = !0;
            const r = s.endsWith('.css'),
              u = r ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${s}"]${u}`)) return;
            const a = document.createElement('link');
            if (
              ((a.rel = r ? 'stylesheet' : us),
              r || ((a.as = 'script'), (a.crossOrigin = '')),
              (a.href = s),
              document.head.appendChild(a),
              r)
            )
              return new Promise((l, g) => {
                a.addEventListener('load', l), a.addEventListener('error', g);
              });
          })
        ).then(() => t());
  },
  oe = i.exports.createContext({}),
  nn = {
    'en-US': {
      'menu.dashboard': 'Dashboard',
      'menu.dashboard.workplace': 'Workplace',
      'menu.system': 'System',
      'menu.system.config': 'System Config',
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
      'menu.system': '\u7CFB\u7EDF\u7BA1\u7406',
      'menu.system.config': '\u7CFB\u7EDF\u914D\u7F6E',
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
function W(e = null) {
  const { lang: t } = i.exports.useContext(oe);
  return (e || nn)[t] || {};
}
const cs = (e) =>
    i.exports.createElement(
      'svg',
      p(
        {
          width: 33,
          height: 33,
          viewBox: '0 0 33 33',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        e
      ),
      i.exports.createElement(
        'g',
        { clipPath: 'url(#clip0)' },
        i.exports.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M5.37754 16.9795L12.7498 9.43027C14.7163 7.41663 17.9428 7.37837 19.9564 9.34482C19.9852 9.37297 20.0137 9.40145 20.0418 9.43027L20.1221 9.51243C22.1049 11.5429 22.1049 14.7847 20.1221 16.8152L12.7498 24.3644C10.7834 26.378 7.55686 26.4163 5.54322 24.4498C5.5144 24.4217 5.48592 24.3932 5.45777 24.3644L5.37754 24.2822C3.39468 22.2518 3.39468 19.0099 5.37754 16.9795Z',
          fill: '#12D2AC',
        }),
        i.exports.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M20.0479 9.43034L27.3399 16.8974C29.3674 18.9735 29.3674 22.2883 27.3399 24.3644C25.3735 26.3781 22.147 26.4163 20.1333 24.4499C20.1045 24.4217 20.076 24.3933 20.0479 24.3644L12.7558 16.8974C10.7284 14.8213 10.7284 11.5065 12.7558 9.43034C14.7223 7.4167 17.9488 7.37844 19.9624 9.34489C19.9912 9.37304 20.0197 9.40152 20.0479 9.43034Z',
          fill: '#307AF2',
        }),
        i.exports.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M20.1321 9.52163L23.6851 13.1599L16.3931 20.627L9.10103 13.1599L12.6541 9.52163C14.6707 7.45664 17.9794 7.4174 20.0444 9.434C20.074 9.46286 20.1032 9.49207 20.1321 9.52163Z',
          fill: '#0057FE',
        })
      ),
      i.exports.createElement(
        'defs',
        null,
        i.exports.createElement(
          'clipPath',
          { id: 'clip0' },
          i.exports.createElement('rect', {
            width: 26,
            height: 19,
            fill: 'white',
            transform: 'translate(3.5 7)',
          })
        )
      )
    ),
  Pe = 'system-profile',
  be = {
    config: {
      logoType: '2',
      logoPath: '',
      logoSvgElement: '',
      systemName: {
        'zh-CN': '\u8425\u9500\u4E2D\u5FC3',
        'en-US': 'Marketing Center',
        'es-ES': 'Centro de Marketing',
      },
      companyName: {
        'zh-CN': '\u516C\u53F8\u540D\u79F0',
        'en-US': 'Company Name',
        'es-ES': 'Nombre de la empresa',
      },
      systemDescription: {
        'zh-CN': '\u7EDF\u4E00\u8425\u9500\u7BA1\u7406\u5E73\u53F0',
        'en-US': 'Unified marketing management platform',
        'es-ES': 'Plataforma unificada de gesti\xF3n de marketing',
      },
    },
    logoUrl: '',
    obsCloudBase: '',
  };
function H(e) {
  const t = e,
    n = p(
      p(
        p(
          p(
            p({}, be.config),
            (t == null ? void 0 : t.logoType) ? { logoType: t.logoType } : {}
          ),
          (t == null ? void 0 : t.logoPath) !== void 0
            ? { logoPath: t.logoPath }
            : {}
        ),
        (t == null ? void 0 : t.logoSvgElement) !== void 0
          ? { logoSvgElement: t.logoSvgElement }
          : {}
      ),
      (e == null ? void 0 : e.config) || {}
    );
  return {
    config: N(p({}, n), {
      systemName: p(p({}, be.config.systemName), n.systemName || {}),
      companyName: p(p({}, be.config.companyName), n.companyName || {}),
      systemDescription: p(
        p({}, be.config.systemDescription),
        n.systemDescription || {}
      ),
    }),
    logoUrl: (e == null ? void 0 : e.logoUrl) || '',
    obsCloudBase: (e == null ? void 0 : e.obsCloudBase) || '',
  };
}
function tt(e, t = 'zh-CN') {
  return (
    (e == null ? void 0 : e[t]) ||
    (e == null ? void 0 : e['zh-CN']) ||
    (e == null ? void 0 : e['en-US']) ||
    ''
  );
}
function Ie(e, t = 'zh-CN') {
  return tt(H(e).config.systemName, t);
}
function ls(e, t = 'zh-CN') {
  return tt(H(e).config.companyName, t);
}
function on(e, t = 'zh-CN') {
  return tt(H(e).config.systemDescription, t);
}
function ms(e, t = 'zh-CN') {
  const n = Ie(e, t),
    s = on(e, t);
  return s ? `${n} - ${s}` : n;
}
function ds(e, t = 'zh-CN') {
  return `\xA9 2026-${new Date().getFullYear()} ${ls(e, t)}`;
}
function sn(e) {
  const t = H(e).config;
  if (t.logoType !== '1') return '';
  const n = t.logoSvgElement;
  return typeof n == 'string' ? n.trim() : '';
}
function rn(e) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`;
}
function an(e) {
  const t = H(e),
    n = t.config.logoPath || '';
  return t.logoUrl
    ? t.logoUrl
    : n
    ? n.startsWith('http://') || n.startsWith('https://') || !t.obsCloudBase
      ? n
      : `${t.obsCloudBase.replace(/\/$/, '')}/${n.replace(/^\//, '')}`
    : '';
}
function gs(e) {
  const t = sn(e),
    n = t ? rn(t) : an(e);
  if (!n) return;
  const r = n.startsWith('data:')
    ? n
    : n.includes('?')
    ? `${n}&favicon=${Date.now()}`
    : `${n}?favicon=${Date.now()}`;
  let u = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
  u || ((u = document.createElement('link')), document.head.appendChild(u)),
    (u.rel = 'icon'),
    (u.type = t ? 'image/svg+xml' : 'image/x-icon'),
    (u.href = r);
}
function ps() {
  try {
    const e = localStorage.getItem(Pe);
    return e ? H(JSON.parse(e)) : null;
  } catch {
    return localStorage.removeItem(Pe), null;
  }
}
function un(e) {
  const t = H(e);
  return localStorage.setItem(Pe, JSON.stringify(t)), t;
}
function fs() {
  localStorage.removeItem(Pe);
}
function cn({ profile: e, className: t, alt: n }) {
  const s = sn(e),
    r = s ? rn(s) : an(e);
  return r ? o('img', { className: t, src: r, alt: n || '' }) : o(cs, {});
}
const hs = '_footer_8a7h1_26';
var Ee = {
  'message-box': '_message-box_8a7h1_1',
  'message-title': '_message-title_8a7h1_22',
  footer: hs,
  'footer-item': '_footer-item_8a7h1_29',
};
function _s(e) {
  const t = W(),
    { data: n, unReadData: s } = e;
  function r(a, l) {
    a.status || (e.onItemClick && e.onItemClick(a, l));
  }
  function u() {
    e.onAllBtnClick && e.onAllBtnClick(s, n);
  }
  return o(He, {
    noDataElement: o(kt, { status: '404', subTitle: t['message.empty.tips'] }),
    footer: d('div', {
      className: Ee.footer,
      children: [
        o('div', {
          className: Ee['footer-item'],
          children: o(ee, {
            type: 'text',
            size: 'small',
            onClick: u,
            children: t['message.allRead'],
          }),
        }),
        o('div', {
          className: Ee['footer-item'],
          children: o(ee, {
            type: 'text',
            size: 'small',
            children: t['message.seeMore'],
          }),
        }),
      ],
    }),
    children: n.map((a, l) =>
      o(
        He.Item,
        {
          actionLayout: 'vertical',
          style: { opacity: a.status ? 0.5 : 1 },
          children: o('div', {
            style: { cursor: 'pointer' },
            onClick: () => {
              r(a, l);
            },
            children: o(He.Item.Meta, {
              avatar:
                a.avatar &&
                o(Rt, {
                  shape: 'circle',
                  size: 36,
                  children: o('img', { src: a.avatar }),
                }),
              title: d('div', {
                className: Ee['message-title'],
                children: [
                  d(Lt, {
                    size: 4,
                    children: [
                      o('span', { children: a.title }),
                      o(Se.Text, { type: 'secondary', children: a.subTitle }),
                    ],
                  }),
                  a.tag && a.tag.text
                    ? o(ro, { color: a.tag.color, children: a.tag.text })
                    : null,
                ],
              }),
              description: d('div', {
                children: [
                  o(Se.Paragraph, {
                    style: { marginBottom: 0 },
                    ellipsis: !0,
                    children: a.content,
                  }),
                  o(Se.Text, {
                    type: 'secondary',
                    style: { fontSize: 12 },
                    children: a.time,
                  }),
                ],
              }),
            }),
          }),
        },
        a.id
      )
    ),
  });
}
function ys() {
  const e = W(),
    [t, n] = i.exports.useState(!1),
    [s, r] = i.exports.useState({}),
    [u, a] = i.exports.useState([]);
  function l(y = !0) {
    y && n(!0),
      we
        .get('/api/message/list')
        .then((E) => {
          a(E.data);
        })
        .finally(() => {
          y && n(!1);
        });
  }
  function g(y) {
    const E = y.map((T) => T.id);
    we.post('/api/message/read', { ids: E }).then(() => {
      l();
    });
  }
  i.exports.useEffect(() => {
    l();
  }, []),
    i.exports.useEffect(() => {
      const y = uo(u, 'type');
      r(y);
    }, [u]);
  const x = [
    {
      key: 'message',
      title: e['message.tab.title.message'],
      titleIcon: o(io, {}),
    },
    {
      key: 'notice',
      title: e['message.tab.title.notice'],
      titleIcon: o(co, {}),
    },
    { key: 'todo', title: e['message.tab.title.todo'], titleIcon: o(lo, {}) },
  ];
  return o('div', {
    className: Ee['message-box'],
    children: o(Xe, {
      loading: t,
      style: { display: 'block' },
      children: o(jt, {
        overflow: 'dropdown',
        type: 'rounded',
        defaultActiveTab: 'message',
        destroyOnHide: !0,
        extra: o(ee, {
          type: 'text',
          onClick: () => a([]),
          children: e['message.empty'],
        }),
        children: x.map((y) => {
          const { key: E, title: T } = y,
            I = s[E] || [],
            b = I.filter((B) => !B.status);
          return o(
            jt.TabPane,
            {
              title: d('span', {
                children: [T, b.length ? `(${b.length})` : ''],
              }),
              children: o(_s, {
                data: I,
                unReadData: b,
                onItemClick: (B) => {
                  g([B]);
                },
                onAllBtnClick: (B) => {
                  g(B);
                },
              }),
            },
            E
          );
        }),
      }),
    }),
  });
}
function bs({ children: e }) {
  return o(Ot, {
    trigger: 'hover',
    popup: () => o(ys, {}),
    position: 'br',
    unmountOnExit: !1,
    popupAlign: { bottom: 4 },
    children: o(ao, { count: 9, dot: !0, children: e }),
  });
}
var Es = { 'icon-button': '_icon-button_12azl_1' };
function Cs(e, t) {
  const u = e,
    { icon: n, className: s } = u,
    r = Fe(u, ['icon', 'className']);
  return o(
    ee,
    p(
      {
        ref: t,
        icon: n,
        shape: 'circle',
        type: 'secondary',
        className: _e(Es['icon-button'], s),
      },
      r
    )
  );
}
var Ne = i.exports.forwardRef(Cs);
const Be = 'user-profile';
function Te(e) {
  const t =
    (e == null ? void 0 : e.tenantCode) || (e == null ? void 0 : e.code);
  return typeof t == 'string' || typeof t == 'number' ? String(t) : '';
}
function se(e = window.location.pathname) {
  const [, t] = e.split('/');
  return !t || t === 'login' || t === '403' ? '' : t;
}
function nt(e = window.location.pathname) {
  const t = se(e);
  if (!t) return e || '/';
  const n = e.replace(`/${t}`, '') || '/';
  return n.startsWith('/') ? n : `/${n}`;
}
function ke() {
  const e = localStorage.getItem(Be);
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function ot() {
  const e = ke();
  return (
    Te(e == null ? void 0 : e.defaultTenant) ||
    Te(e == null ? void 0 : e.currentTenant) ||
    Te(e)
  );
}
const xs = ['X-Organization', 'organization'];
function vs() {
  if (typeof localStorage == 'undefined') return '';
  for (const e of xs) {
    const t = localStorage.getItem(e);
    if (t) return t;
  }
  return '';
}
function ln(
  e = typeof window != 'undefined' ? window.location.pathname : '',
  t
) {
  const n = se(e);
  if (n) return n;
  const s = ot();
  if (s) return s;
  const r = vs();
  if (r) return r;
  const u = t == null ? void 0 : t.currentTenant,
    a = Te(u);
  return a || '';
}
function Fs(e, t) {
  const n = ln(e, t);
  return n ? `/${n}` : '';
}
const ge = 'X-Access-Token',
  Re = 'X-Organization',
  st = 'Accept-Language',
  mn = 'zh-CN';
function Ss() {
  return localStorage.getItem(ge) || localStorage.getItem('accessToken') || '';
}
function ws() {
  return (
    se() ||
    localStorage.getItem(Re) ||
    localStorage.getItem('organization') ||
    ''
  );
}
function Ds() {
  return localStorage.getItem(st) || mn;
}
function As(e) {
  return e === 200;
}
const Ps = 100001,
  Is = 100060;
function dn(e, t = '\u8BF7\u6C42\u5931\u8D25') {
  return (e == null ? void 0 : e.message) || t;
}
let rt = !1;
function Le(e) {
  var n;
  const t = (n = e == null ? void 0 : e.data) == null ? void 0 : n.code;
  return (
    (e == null ? void 0 : e.status) === 403 ||
    t === Is ||
    t === 100003 ||
    t === 100002
  );
}
function Oe(e) {
  var n;
  if (Le(e)) return !1;
  const t = (n = e == null ? void 0 : e.data) == null ? void 0 : n.code;
  return (e == null ? void 0 : e.status) === 401 || t === 401 || t === Ps;
}
function gn(e) {
  ue.warning(
    dn(
      e == null ? void 0 : e.data,
      '\u65E0\u6743\u9650\u8BBF\u95EE\u8BE5\u8D44\u6E90'
    )
  );
}
function Ns() {
  if (rt) return;
  (rt = !0),
    localStorage.removeItem(ge),
    localStorage.setItem('userStatus', 'logout');
  const { pathname: e } = window.location;
  e === '/login' || e.endsWith('/login')
    ? (rt = !1)
    : window.location.replace('/login');
}
function je(e) {
  (e == null ? void 0 : e.skipErrorMessage) ||
    ue.error(
      '\u767B\u5F55\u72B6\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55'
    ),
    Ns();
}
we.interceptors.response.use(
  (e) => (Oe(e) && je(), e),
  (e) => (Le(e.response) || (Oe(e.response) && je()), Promise.reject(e))
);
function Bs(e, t) {
  return Oe(e)
    ? (je(t), Promise.reject(e.data))
    : Le(e)
    ? ((t == null ? void 0 : t.skipErrorMessage) || gn(e),
      Promise.reject(e.data))
    : e.status === 200 && As(e.data.code)
    ? e.data.data
    : ((t == null ? void 0 : t.skipErrorMessage) || ue.error(dn(e.data)),
      Promise.reject(e.data));
}
function Ts(e, t) {
  var n, s, r;
  if (Le(e.response))
    return (
      (t == null ? void 0 : t.skipErrorMessage) || gn(e.response),
      Promise.reject(e)
    );
  if (Oe(e.response)) return je(t), Promise.reject(e);
  if (!(t == null ? void 0 : t.skipErrorMessage)) {
    const u =
      ((s = (n = e.response) == null ? void 0 : n.data) == null
        ? void 0
        : s.message) ||
      (((r = e.response) == null ? void 0 : r.status)
        ? `\u8BF7\u6C42\u5931\u8D25\uFF0C\u72B6\u6001\u7801\uFF1A${e.response.status}`
        : e.message ||
          '\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5');
    ue.error(u);
  }
  return Promise.reject(e);
}
function pn(e) {
  const t = we.create({
    baseURL: 'https://api.example.com',
    timeout: 3e4,
    validateStatus: () => !0,
  });
  return (
    t.interceptors.request.use((n) => {
      const s = p({ [st]: Ds() }, n.headers);
      if (e) {
        const r = Ss(),
          u = ws();
        n.headers = N(p({}, s), { [ge]: r, [Re]: u });
      } else n.headers = s;
      return n;
    }),
    t
  );
}
function fn(e) {
  return async function (n) {
    try {
      const s = await e.request(n);
      return Bs(s, n);
    } catch (s) {
      return Ts(s, n);
    }
  };
}
const ie = fn(pn(!0)),
  at = fn(pn(!1));
function ks() {
  return ie({ url: '/api/system/user-theme', method: 'GET' });
}
function Me(e) {
  return ie({ url: '/api/system/user-theme', method: 'PATCH', data: e });
}
const hn = 'user-theme';
function ut() {
  return { settings: p({}, Qt), theme: 'light', lang: mn };
}
function _n(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function it(e) {
  const t = ut();
  if (!_n(e)) return t;
  const n = _n(e.settings) ? p(p({}, t.settings), e.settings) : t.settings,
    s = e.theme === 'dark' || e.theme === 'light' ? e.theme : t.theme,
    r =
      e.lang === 'zh-CN' || e.lang === 'en-US' || e.lang === 'es-ES'
        ? e.lang
        : t.lang;
  return { settings: n, theme: s, lang: r };
}
function $e() {
  const e = localStorage.getItem(hn);
  if (!e) return ut();
  try {
    return it(JSON.parse(e));
  } catch {
    return ut();
  }
}
function pe(e) {
  const t = it(e);
  return (
    localStorage.setItem(hn, JSON.stringify(t)),
    localStorage.setItem('arco-theme', t.theme),
    localStorage.setItem('arco-lang', t.lang),
    localStorage.setItem(st, t.lang),
    t
  );
}
function qe(e) {
  const t = $e();
  if (e.path.startsWith('settings.')) {
    const n = e.path.replace('settings.', '');
    t.settings = N(p({}, t.settings), { [n]: e.value });
  } else
    e.path === 'theme'
      ? (t.theme = e.value)
      : e.path === 'lang' && (t.lang = e.value);
  return pe(t);
}
const Rs = '_block_byc7u_1',
  Ls = '_title_byc7u_4';
var ct = { block: Rs, title: Ls, 'switch-wrapper': '_switch-wrapper_byc7u_9' };
function lt(e) {
  const { title: t, options: n, children: s } = e,
    r = W(),
    u = me((g) => g.settings),
    a = Ze();
  function l(g, x) {
    const y = `settings.${g}`;
    qe({ path: y, value: x }), Me({ path: y, value: x }).catch(() => {});
  }
  return d('div', {
    className: ct.block,
    children: [
      o('h5', { className: ct.title, children: t }),
      n &&
        n.map((g) => {
          const x = g.type || 'switch';
          return d(
            'div',
            {
              className: ct['switch-wrapper'],
              children: [
                o('span', { children: r[g.name] }),
                x === 'switch' &&
                  o(mo, {
                    size: 'small',
                    checked: !!u[g.value],
                    onChange: (y) => {
                      const E = N(p({}, u), { [g.value]: y });
                      a({ type: 'update-settings', payload: { settings: E } }),
                        l(g.value, y),
                        y &&
                          g.value === 'colorWeek' &&
                          (document.body.style.filter = 'invert(80%)'),
                        !y &&
                          g.value === 'colorWeek' &&
                          (document.body.style.filter = 'none');
                    },
                  }),
                x === 'number' &&
                  o(go, {
                    style: { width: 80 },
                    size: 'small',
                    value: u.menuWidth,
                    onChange: (y) => {
                      const E = N(p({}, u), { [g.value]: y });
                      a({ type: 'update-settings', payload: { settings: E } }),
                        l(g.value, y);
                    },
                  }),
              ],
            },
            g.value
          );
        }),
      s,
      o(Mt, {}),
    ],
  });
}
function yn(e, t = 'light') {
  $t(e, { list: !0, dark: t === 'dark' }).forEach((s, r) => {
    document.body.style.setProperty(`--arcoblue-${r + 1}`, po(s));
  });
}
function Ue(e, t) {
  e === 'dark'
    ? document.body.setAttribute('arco-theme', 'dark')
    : document.body.removeAttribute('arco-theme'),
    t && yn(t, e);
}
const Os = '_input_77wyg_1',
  js = '_color_77wyg_9',
  Ms = '_ul_77wyg_14',
  $s = '_li_77wyg_19';
var ze = { input: Os, color: js, ul: Ms, li: $s };
const qs = [
  '#D0021B',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#165DFF',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
];
function Us() {
  const e =
      document.querySelector('body').getAttribute('arco-theme') || 'light',
    t = me((a) => a.settings),
    n = W(),
    s = t.themeColor,
    r = $t(s, { list: !0 }),
    u = Ze();
  return d('div', {
    children: [
      o(Ot, {
        trigger: 'hover',
        position: 'bl',
        popup: () =>
          o(fo, {
            color: s,
            presetColors: qs,
            onChangeComplete: (a) => {
              const l = a.hex;
              u({
                type: 'update-settings',
                payload: { settings: N(p({}, t), { themeColor: l }) },
              }),
                qe({ path: 'settings.themeColor', value: l }),
                Me({ path: 'settings.themeColor', value: l }).catch(() => {}),
                yn(l, e);
            },
          }),
        children: d('div', {
          className: ze.input,
          children: [
            o('div', { className: ze.color, style: { backgroundColor: s } }),
            o('span', { children: s }),
          ],
        }),
      }),
      o('ul', {
        className: ze.ul,
        children: r.map((a, l) =>
          o('li', { className: ze.li, style: { backgroundColor: a } }, l)
        ),
      }),
      o(Se.Paragraph, {
        style: { fontSize: 12 },
        children: n['settings.color.tooltip'],
      }),
    ],
  });
}
function bn(e) {
  const { trigger: t } = e,
    [n, s] = i.exports.useState(!1),
    r = W(),
    u = me((x) => x.settings),
    { applyUserTheme: a } = i.exports.useContext(oe);
  function l() {
    s(!0),
      ks()
        .then((x) => {
          a == null || a(it(x.config));
        })
        .catch(() => {});
  }
  function g() {
    yo(JSON.stringify(u, null, 2)),
      ue.success(r['settings.copySettings.message']);
  }
  return d(De, {
    children: [
      t
        ? qt.cloneElement(t, { onClick: l })
        : o(Ne, { icon: o(Ae, {}), onClick: l }),
      d(ho, {
        width: 300,
        title: d(De, { children: [o(Ae, {}), r['settings.title']] }),
        visible: n,
        okText: r['settings.copySettings'],
        cancelText: r['settings.close'],
        onOk: g,
        onCancel: () => s(!1),
        children: [
          o(lt, { title: r['settings.themeColor'], children: o(Us, {}) }),
          o(lt, {
            title: r['settings.content'],
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
          o(lt, {
            title: r['settings.otherSettings'],
            options: [{ name: 'settings.colorWeek', value: 'colorWeek' }],
          }),
          o(_o, { content: r['settings.alertContent'] }),
        ],
      }),
    ],
  });
}
const zs = '_navbar_ql9qb_1',
  Vs = '_left_ql9qb_10',
  Ks = '_logo_ql9qb_15',
  Ws = '_center_ql9qb_47',
  Js = '_right_ql9qb_63',
  Gs = '_username_ql9qb_78',
  Ys = '_round_ql9qb_81';
var j = {
  navbar: zs,
  left: Vs,
  logo: Ks,
  'logo-image': '_logo-image_ql9qb_23',
  'logo-name': '_logo-name_ql9qb_30',
  center: Ws,
  right: Js,
  username: Gs,
  round: Ys,
  'dropdown-icon': '_dropdown-icon_ql9qb_87',
  'fixed-settings': '_fixed-settings_ql9qb_92',
};
function Hs(e) {
  return Object.prototype.toString.call(e) === '[object Array]';
}
const fe = (function () {
    try {
      return !(typeof window != 'undefined' && document !== void 0);
    } catch {
      return !0;
    }
  })(),
  Xs = (e) => {
    if (!fe) return localStorage.getItem(e);
  };
function Ce(e, t) {
  const [n, s] = i.exports.useState(Xs(e) || t),
    r = (a) => {
      fe || (localStorage.setItem(e, a), a !== n && s(a));
    },
    u = () => {
      fe || localStorage.removeItem(e);
    };
  return (
    i.exports.useEffect(() => {
      const a = localStorage.getItem(e);
      a && s(a);
    }, [e]),
    [n, r, u]
  );
}
function Zs(e) {
  return at({ url: '/api/system/users/login', method: 'POST', data: e });
}
function Qs() {
  return ie({ url: '/api/system/users/logout', method: 'POST' });
}
function Ve(e) {
  return `${e}-resource`;
}
function mt(e) {
  const t = localStorage.getItem(Ve(e));
  if (!t) return null;
  try {
    return JSON.parse(t);
  } catch {
    return localStorage.removeItem(Ve(e)), null;
  }
}
function er(e, t) {
  localStorage.setItem(Ve(e), JSON.stringify(t));
}
function tr() {
  return ie({ url: '/api/auth/context', method: 'GET' });
}
async function dt(e) {
  const t = mt(e);
  if (t) return t;
  const n = await tr();
  return er(e, n), n;
}
function nr({ show: e, topMenu: t, menu: n }) {
  const s = W(),
    r = me((c) => c.userInfo),
    u = ke(),
    a = (u == null ? void 0 : u.avatar) || (r == null ? void 0 : r.avatar),
    [, l] = Ce('userStatus'),
    [g, x] = Ce('userRole', 'admin'),
    {
      setLang: y,
      lang: E,
      theme: T,
      setTheme: I,
      systemProfile: b,
    } = i.exports.useContext(oe),
    B = Ie(b, E);
  function U() {
    const c = se();
    l('logout'),
      localStorage.removeItem(ge),
      localStorage.removeItem(Re),
      localStorage.removeItem(Be),
      c && localStorage.removeItem(Ve(c)),
      localStorage.removeItem('accessToken'),
      localStorage.removeItem('organization'),
      localStorage.removeItem('user-theme'),
      fs();
  }
  function m() {
    Qs()
      .catch(() => {})
      .finally(() => {
        U(), (window.location.href = '/login');
      });
  }
  function v(c) {
    c === 'logout' ? m() : ue.info(`You clicked ${c}`);
  }
  if (!e)
    return o('div', {
      className: j['fixed-settings'],
      children: o(bn, {
        trigger: o(ee, { icon: o(Ae, {}), type: 'primary', size: 'large' }),
      }),
    });
  const G = () => {
      x(g === 'admin' ? 'user' : 'admin');
    },
    f = d(k, {
      onClickMenuItem: v,
      children: [
        o(
          k.SubMenu,
          {
            title: d(De, {
              children: [
                o(Ut, { className: j['dropdown-icon'] }),
                o('span', {
                  className: j['user-role'],
                  children:
                    g === 'admin'
                      ? s['menu.user.role.admin']
                      : s['menu.user.role.user'],
                }),
              ],
            }),
            children: d(
              k.Item,
              {
                onClick: G,
                children: [
                  o(bo, { className: j['dropdown-icon'] }),
                  s['menu.user.switchRoles'],
                ],
              },
              'switch role'
            ),
          },
          'role'
        ),
        d(
          k.Item,
          {
            children: [
              o(Ae, { className: j['dropdown-icon'] }),
              s['menu.user.setting'],
            ],
          },
          'setting'
        ),
        o(
          k.SubMenu,
          {
            title: d('div', {
              style: { width: 80 },
              children: [
                o(Eo, { className: j['dropdown-icon'] }),
                s['message.seeMore'],
              ],
            }),
            children: d(
              k.Item,
              {
                children: [
                  o(Co, { className: j['dropdown-icon'] }),
                  s['menu.dashboard.workplace'],
                ],
              },
              'workplace'
            ),
          },
          'more'
        ),
        o(Mt, { style: { margin: '4px 0' } }),
        d(
          k.Item,
          {
            children: [
              o(xo, { className: j['dropdown-icon'] }),
              s['navbar.logout'],
            ],
          },
          'logout'
        ),
      ],
    });
  return d('div', {
    className: j.navbar,
    children: [
      o('div', {
        className: j.left,
        children: d('div', {
          className: j.logo,
          children: [
            o(cn, { profile: b, className: j['logo-image'], alt: B }),
            o('div', { className: j['logo-name'], children: B }),
          ],
        }),
      }),
      o('div', { className: j.center, children: n && t }),
      d('ul', {
        className: j.right,
        children: [
          o('li', {
            children: o(vo, {
              triggerElement: o(Ne, { icon: o(Fo, {}) }),
              options: [
                { label: '\u4E2D\u6587', value: 'zh-CN' },
                { label: 'Espa\xF1a', value: 'es-ES' },
                { label: 'English', value: 'en-US' },
              ],
              value: E,
              triggerProps: {
                autoAlignPopupWidth: !1,
                autoAlignPopupMinWidth: !0,
                position: 'br',
              },
              trigger: 'hover',
              onChange: (c) => {
                y(c),
                  qe({ path: 'lang', value: c }),
                  Me({ path: 'lang', value: c }).catch(() => {});
                const C = nn[c];
                ue.info(`${C['message.lang.tips']}${c}`);
              },
            }),
          }),
          o('li', {
            children: o(bs, { children: o(Ne, { icon: o(So, {}) }) }),
          }),
          o('li', {
            children: o(wo, {
              content:
                T === 'light'
                  ? s['settings.navbar.theme.toDark']
                  : s['settings.navbar.theme.toLight'],
              children: o(Ne, {
                icon: T !== 'dark' ? o(Do, {}) : o(Ao, {}),
                onClick: () => {
                  const c = T === 'light' ? 'dark' : 'light';
                  I(c),
                    qe({ path: 'theme', value: c }),
                    Me({ path: 'theme', value: c }).catch(() => {});
                },
              }),
            }),
          }),
          o(bn, {}),
          r &&
            o('li', {
              children: o(zt, {
                droplist: f,
                position: 'br',
                children: o(Rt, {
                  size: 32,
                  style: { cursor: 'pointer' },
                  children: a && o('img', { alt: 'avatar', src: a }),
                }),
              }),
            }),
        ],
      }),
    ],
  });
}
const or = '_footer_1si67_1';
var sr = { footer: or };
function En(e = {}) {
  const u = e,
    { className: t } = u,
    n = Fe(u, ['className']),
    { lang: s, systemProfile: r } = i.exports.useContext(oe);
  return o(
    de.Footer,
    N(p({ className: _e(sr.footer, t) }, n), { children: ds(r, s) })
  );
}
const rr = '_layout_316fi_1',
  ar = '_icon_316fi_86',
  ur = '_spin_316fi_111';
var M = {
  layout: rr,
  'layout-navbar': '_layout-navbar_316fi_5',
  'layout-navbar-hidden': '_layout-navbar-hidden_316fi_13',
  'layout-sider': '_layout-sider_316fi_16',
  'collapse-btn': '_collapse-btn_316fi_50',
  'menu-wrapper': '_menu-wrapper_316fi_67',
  icon: ar,
  'icon-empty': '_icon-empty_316fi_90',
  'layout-content': '_layout-content_316fi_95',
  'layout-content-wrapper': '_layout-content-wrapper_316fi_102',
  'layout-content-wrapper-with-tab':
    '_layout-content-wrapper-with-tab_316fi_105',
  'layout-breadcrumb': '_layout-breadcrumb_316fi_108',
  spin: ur,
};
function ir(e) {
  if (!e) return '';
  if (e.startsWith('Icon')) return e;
  const t = e
    .replace(/^icon[-_]?/i, '')
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
    .join('');
  return t ? `Icon${t}` : '';
}
function Cn(e, t) {
  const s = Po[ir(t || e)];
  return s
    ? o(s, { className: M.icon })
    : o('div', { className: M['icon-empty'] });
}
var L = {
  'tab-bar-container': '_tab-bar-container_1821m_1',
  'tab-bar-box': '_tab-bar-box_1821m_6',
  'tab-bar-scroll': '_tab-bar-scroll_1821m_13',
  'tags-wrap': '_tags-wrap_1821m_18',
  'tab-tag': '_tab-tag_1821m_27',
  'tag-link': '_tag-link_1821m_42',
  'link-activated': '_link-activated_1821m_49',
  'dropdown-label': '_dropdown-label_1821m_64',
  'separate-line': '_separate-line_1821m_67',
  'tag-bar-operation': '_tag-bar-operation_1821m_70',
};
const J = {
  Reload: 'reload',
  Current: 'current',
  Left: 'left',
  Right: 'right',
  Others: 'others',
  All: 'all',
};
function xn(e, t) {
  const n = nt(e);
  return t.find((s) => n === `/${s.key}`);
}
function vn(e, t, n) {
  const s = xn(e, n);
  if (!s) return null;
  const r = nt(e);
  return {
    title: s.name,
    name: r.replace(/^\//, ''),
    path: e,
    fullPath: `${e}${t || ''}`,
  };
}
function cr({
  defaultTab: e,
  tabList: t,
  routes: n,
  offsetTop: s = 0,
  onTabsChange: r,
  onCloseTabs: u,
  onReload: a,
}) {
  const l = Qe(),
    g = Vt(),
    x = W(),
    y = `${g.pathname}${g.search || ''}`;
  function E(f) {
    return xn(f.path, n);
  }
  function T(f) {
    const c = E(f),
      C = (c == null ? void 0 : c.name) || f.title;
    return x[C] || C;
  }
  function I(f) {
    const c = E(f);
    return Cn(
      (c == null ? void 0 : c.key) || f.name,
      c == null ? void 0 : c.icon
    );
  }
  function b(f) {
    f.fullPath !== y && l.push(f.fullPath);
  }
  function B(f, c) {
    if (c === 0) return;
    const C = t.filter((z, V) => V !== c);
    if ((u == null || u([f]), r(C), f.fullPath === y)) {
      const z = C[c - 1] || C[0];
      l.push(z.fullPath);
    }
  }
  function U(f = t) {
    return f.findIndex((c) => c.fullPath === y);
  }
  function m(f, c) {
    c.length && (u == null || u(c)), r(f);
  }
  function v(f, c, C) {
    const z = U();
    if (f === J.Current) {
      B(c, C);
      return;
    }
    if (f === J.Left) {
      const R = t.filter((S, w) => w === 0 || w >= C),
        D = t.filter((S, w) => w > 0 && w < C);
      m(R, D), z > 0 && z < C && l.push(c.fullPath);
      return;
    }
    if (f === J.Right) {
      const R = t.filter((S, w) => w <= C),
        D = t.filter((S, w) => w > C);
      m(R, D), z > C && l.push(c.fullPath);
      return;
    }
    if (f === J.Others) {
      const R = t.filter((S, w) => w === 0 || w === C),
        D = t.filter((S, w) => w !== 0 && w !== C);
      m(R, D), l.push(c.fullPath);
      return;
    }
    if (f === J.Reload) {
      a == null || a(c);
      return;
    }
    const V = t.filter((R, D) => D !== 0);
    m([e], V), l.push(e.fullPath);
  }
  function G(f, c) {
    const C = f.fullPath !== y,
      z = c === 0,
      V = c <= 1,
      R = c === t.length - 1;
    return d(k, {
      onClickMenuItem: (D) => v(D, f, c),
      children: [
        d(
          k.Item,
          {
            disabled: C,
            children: [
              o(No, {}),
              o('span', {
                className: L['dropdown-label'],
                children: '\u91CD\u65B0\u52A0\u8F7D',
              }),
            ],
          },
          J.Reload
        ),
        d(
          k.Item,
          {
            disabled: z,
            className: L['separate-line'],
            children: [
              o(Kt, {}),
              o('span', {
                className: L['dropdown-label'],
                children: '\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Current
        ),
        d(
          k.Item,
          {
            disabled: V,
            children: [
              o(Bo, {}),
              o('span', {
                className: L['dropdown-label'],
                children: '\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Left
        ),
        d(
          k.Item,
          {
            disabled: R,
            className: L['separate-line'],
            children: [
              o(To, {}),
              o('span', {
                className: L['dropdown-label'],
                children: '\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Right
        ),
        d(
          k.Item,
          {
            disabled: t.length <= 2 && c !== 0,
            children: [
              o(ko, {}),
              o('span', {
                className: L['dropdown-label'],
                children: '\u5173\u95ED\u5176\u5B83\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Others
        ),
        d(
          k.Item,
          {
            disabled: t.length <= 1,
            children: [
              o(Ro, {}),
              o('span', {
                className: L['dropdown-label'],
                children: '\u5173\u95ED\u5168\u90E8\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.All
        ),
      ],
    });
  }
  return o('div', {
    className: L['tab-bar-container'],
    children: o(Io, {
      offsetTop: s,
      children: d('div', {
        className: L['tab-bar-box'],
        children: [
          o('div', {
            className: L['tab-bar-scroll'],
            children: o('div', {
              className: L['tags-wrap'],
              children: t.map((f, c) =>
                o(
                  zt,
                  {
                    droplist: G(f, c),
                    trigger: 'contextMenu',
                    position: 'bl',
                    children: d('span', {
                      className: _e(
                        'arco-tag arco-tag-size-medium arco-tag-checked',
                        L['tab-tag'],
                        { [L['link-activated']]: f.fullPath === y }
                      ),
                      onClick: () => b(f),
                      children: [
                        d('span', {
                          className: L['tag-link'],
                          children: [I(f), T(f)],
                        }),
                        c !== 0 &&
                          o('span', {
                            className:
                              'arco-icon-hover arco-tag-icon-hover arco-icon-hover-size-medium arco-tag-close-btn',
                            onClick: (C) => {
                              C.stopPropagation(), B(f, c);
                            },
                            children: o(Kt, {}),
                          }),
                      ],
                    }),
                  },
                  f.fullPath
                )
              ),
            }),
          }),
          o('div', { className: L['tag-bar-operation'] }),
        ],
      }),
    }),
  });
}
const lr = 'marketing:tabs';
function Fn(e) {
  return encodeURIComponent(String(e || 'unknown'));
}
function gt(e, t) {
  if (!!e)
    for (const n of t) {
      const s = e[n];
      if (typeof s == 'string' || typeof s == 'number') return s;
    }
}
function mr(e) {
  const t = e == null ? void 0 : e.currentTenant,
    n = e == null ? void 0 : e.defaultTenant;
  return {
    tenantCode:
      gt(t, ['tenantCode', 'code', 'tenantId', 'id']) ||
      gt(e || void 0, ['tenantCode', 'tenantId']) ||
      gt(n, ['tenantCode', 'code', 'tenantId', 'id']),
  };
}
function Sn(e) {
  return `${lr}:${Fn(e.tenantCode)}`;
}
function Ke(e, t) {
  return `${Fn(e.tenantCode)}:${encodeURIComponent(t)}`;
}
function dr(e) {
  try {
    const t = sessionStorage.getItem(Sn(e));
    if (!t) return null;
    const n = JSON.parse(t);
    return Array.isArray(n)
      ? n.filter(
          (s) =>
            s &&
            typeof s.title == 'string' &&
            typeof s.name == 'string' &&
            typeof s.path == 'string' &&
            typeof s.fullPath == 'string'
        )
      : null;
  } catch {
    return null;
  }
}
function gr(e, t) {
  try {
    sessionStorage.setItem(Sn(e), JSON.stringify(t));
  } catch {}
}
function pr(e, t) {
  if (!t || se(e.path)) return e;
  const n = `/${t}`.replace(/\/$/, ''),
    s = e.path.startsWith('/') ? e.path : `/${e.path}`,
    r = `${n}${s}`.replace(/\/+/g, '/'),
    u = e.fullPath.indexOf('?'),
    a = u >= 0 ? e.fullPath.slice(u) : '';
  return N(p({}, e), { path: r, fullPath: `${r}${a}` });
}
function fr(e, t) {
  return !t || !e.length ? e : e.map((n) => pr(n, t));
}
function hr(u) {
  var a = u,
    { identity: e, component: t, render: n, children: s } = a,
    r = Fe(a, ['identity', 'component', 'render', 'children']);
  return o(
    te,
    N(p({}, r), {
      render: (l) => {
        const g = `${l.location.pathname}${l.location.search || ''}`,
          x = Ke(e, g),
          y = t;
        return o(Lo, {
          id: x,
          name: x,
          saveScrollPosition: 'screen',
          children: y ? o(y, p({}, l)) : n ? n(l) : s,
        });
      },
    })
  );
}
const wn = (e, t) =>
    !t || !t.length
      ? !1
      : t.join('') === '*'
      ? !0
      : e.every((n) => t.includes(n)),
  _r = (e, t) => {
    const { resource: n, actions: s = [] } = e;
    if (Array.isArray(t))
      return n instanceof RegExp
        ? t.some((u) => n.test(u))
        : s.length
        ? s.some((u) => t.includes(`${n}:${u}`))
        : t.includes(n);
    if (n instanceof RegExp) {
      const a = Object.keys(t).filter((l) => l.match(n));
      return a.length
        ? a.every((l) => {
            const g = t[l];
            return wn(s, g);
          })
        : !1;
    }
    const r = t[n];
    return wn(s, r);
  };
var yr = (e, t) => {
  const { requiredPermissions: n, oneOfPerm: s } = e;
  if (Array.isArray(n) && n.length) {
    let r = 0;
    for (const u of n) _r(u, t) && r++;
    return s ? r > 0 : r === n.length;
  }
  return !0;
};
const We = [
  {
    name: 'menu.dashboard',
    key: 'dashboard',
    children: [
      { name: 'menu.dashboard.workplace', key: 'dashboard/workplace' },
    ],
  },
  { name: 'Example', key: 'example' },
];
function pt(e) {
  return (e || '').replace(/^\/+/, '').replace(/\/+$/, '');
}
function Dn(e) {
  return pt(e.routerPath || e.resourcePath || e.resourceCode);
}
function br(e, t = 'zh-CN') {
  var n, s;
  return (
    ((n = e.resourceNames) == null ? void 0 : n[t]) ||
    ((s = e.resourceNames) == null ? void 0 : s['zh-CN']) ||
    e.resourceName ||
    e.resourceCode ||
    Dn(e)
  );
}
function ft(e = [], t = 'zh-CN') {
  return e
    .slice()
    .sort((n, s) => (n.sortOrder || 0) - (s.sortOrder || 0))
    .map((n) => {
      const s = ft(n.children || [], t),
        r = {
          name: br(n, t),
          resourceNames: n.resourceNames,
          key: Dn(n),
          path: n.routerPath || n.resourcePath,
          icon: n.resourceIcon,
          children: s.length ? s : void 0,
          menuType: n.menuType,
          useIndex: n.useIndex,
        };
      return (
        r.key === 'dashboard' && !r.children && (r.children = We[0].children), r
      );
    })
    .filter((n) => n.key);
}
function An(e, t = 'zh-CN') {
  if (!e) return We;
  const n = mt(e);
  if (!n) return We;
  const s = ft((n == null ? void 0 : n.menus) || [], t);
  return s.length ? s : [];
}
function Pn(e) {
  return e.menuType || '';
}
function Er(e) {
  const t = e.useIndex;
  return typeof t == 'number' ? t : 0;
}
function In(e) {
  if (e.key !== void 0) {
    const n = e;
    return pt(n.path || n.key);
  }
  const t = e;
  return pt(t.routerPath || t.resourcePath || t.resourceCode);
}
function Nn(e) {
  const t = e.children;
  return Array.isArray(t) ? t : [];
}
function Bn(e = []) {
  for (const t of e) {
    if (Er(t) === 1 && Pn(t).toUpperCase() === 'MENU') {
      const s = In(t);
      if (s) return s;
    }
    const n = Nn(t);
    if (n.length) {
      const s = Bn(n);
      if (s) return s;
    }
  }
  return '';
}
function Tn(e = []) {
  for (const t of e) {
    const n = Nn(t);
    if (n.length) {
      const s = Tn(n);
      if (s) return s;
    }
    if (Pn(t).toUpperCase() === 'MENU') {
      const s = In(t);
      if (s) return s;
    }
  }
  return '';
}
function kn(e = []) {
  return Bn(e) || Tn(e);
}
const Cr = (e) => {
    const t = e === 'admin' ? ['*'] : ['read'],
      n = {};
    return (
      We.forEach((s) => {
        s.children &&
          s.children.forEach((r) => {
            n[r.name] = t;
          });
      }),
      n
    );
  },
  ht = (e, t, n = []) => {
    if (!e.length) return [];
    for (const s of e) {
      const { requiredPermissions: r, oneOfPerm: u } = s;
      let a = !0;
      if ((r && (a = yr({ requiredPermissions: r, oneOfPerm: u }, t)), !!a))
        if (s.children && s.children.length) {
          const l = N(p({}, s), { children: [] });
          ht(s.children, t, l.children), l.children.length && n.push(l);
        } else n.push(p({}, s));
    }
    return n;
  },
  xr = (e, t) => {
    const { lang: n = 'zh-CN' } = i.exports.useContext(oe),
      [s, r] = i.exports.useState(() => An(t, n)),
      [u, a] = i.exports.useState(!1),
      l = i.exports.useMemo(() => JSON.stringify(e || {}), [e]);
    i.exports.useEffect(() => {
      let x = !1;
      async function y() {
        const E = An(t, n);
        if ((r(ht(E, e)), !(!t || mt(t)))) {
          a(!0);
          try {
            const T = await dt(t);
            if (x) return;
            const I = ft(T.menus || [], n);
            r(ht(I, e));
          } finally {
            x || a(!1);
          }
        }
      }
      return (
        y(),
        () => {
          x = !0;
        }
      );
    }, [n, l, t, e]);
    const g = i.exports.useMemo(() => kn(s), [s]);
    return [s, g, u];
  };
function vr() {
  const e = Wt.parseUrl(fe ? '' : window.location.href).query,
    t = {};
  return (
    Object.keys(e).forEach((n) => {
      e[n] === 'true' && (t[n] = !0), e[n] === 'false' && (t[n] = !1);
    }),
    t
  );
}
function Fr(e, t) {
  const n = Oo(e, t);
  return (n.preload = e.requireAsync || e), n;
}
function Sr(e) {
  return e.error
    ? (console.error(e.error), null)
    : o('div', { className: M.spin, children: o(Xe, {}) });
}
var Rn = (e) =>
  Fr(e, { fallback: Sr({ pastDelay: !0, error: !1, timedOut: !1 }) });
const wr = k.Item,
  Dr = k.SubMenu,
  Ar = de.Sider,
  Pr = de.Content,
  Ir = {
    './pages/example/index.tsx': () =>
      _(
        () => import('./index.c792f993.js'),
        [
          'assets/index.c792f993.js',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
        ]
      ),
    './pages/login/banner.tsx': () =>
      _(
        () =>
          Promise.resolve().then(function () {
            return zr;
          }),
        void 0
      ),
    './pages/login/form.tsx': () =>
      _(
        () =>
          Promise.resolve().then(function () {
            return Ur;
          }),
        void 0
      ),
    './pages/login/index.tsx': () =>
      _(
        () =>
          Promise.resolve().then(function () {
            return Vr;
          }),
        void 0
      ),
    './pages/dashboard/workplace/announcement.tsx': () =>
      _(
        () => import('./announcement.eff30493.js'),
        [
          'assets/announcement.eff30493.js',
          'assets/announcement.4446c828.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/carousel.tsx': () =>
      _(
        () => import('./carousel.bb695497.js'),
        [
          'assets/carousel.bb695497.js',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
        ]
      ),
    './pages/dashboard/workplace/content-percentage.tsx': () =>
      _(
        () => import('./content-percentage.556c0e1e.js'),
        [
          'assets/content-percentage.556c0e1e.js',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.9baac0dc.js',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/docs.tsx': () =>
      _(
        () => import('./docs.2dddecd0.js'),
        [
          'assets/docs.2dddecd0.js',
          'assets/docs.e521c9d6.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/index.tsx': () =>
      _(
        () => import('./index.c2ce080d.js'),
        [
          'assets/index.c2ce080d.js',
          'assets/index.0a453fe0.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/overview.05191cc2.js',
          'assets/overview.65964fa4.css',
          'assets/index.9baac0dc.js',
          'assets/index.9464998a.js',
          'assets/popular-contents.c2fde505.js',
          'assets/popular-contents.5d7b60b5.css',
          'assets/content-percentage.556c0e1e.js',
          'assets/shortcuts.5b4614a3.js',
          'assets/shortcuts.0626e3d2.css',
          'assets/announcement.eff30493.js',
          'assets/announcement.4446c828.css',
          'assets/carousel.bb695497.js',
          'assets/docs.2dddecd0.js',
          'assets/docs.e521c9d6.css',
        ]
      ),
    './pages/dashboard/workplace/overview.tsx': () =>
      _(
        () => import('./overview.05191cc2.js'),
        [
          'assets/overview.05191cc2.js',
          'assets/overview.65964fa4.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.9baac0dc.js',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/popular-contents.tsx': () =>
      _(
        () => import('./popular-contents.c2fde505.js'),
        [
          'assets/popular-contents.c2fde505.js',
          'assets/popular-contents.5d7b60b5.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/shortcuts.tsx': () =>
      _(
        () => import('./shortcuts.5b4614a3.js'),
        [
          'assets/shortcuts.5b4614a3.js',
          'assets/shortcuts.0626e3d2.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/exception/403/index.tsx': () =>
      _(
        () =>
          Promise.resolve().then(function () {
            return bt;
          }),
        void 0
      ),
    './pages/system/api-groups/index.tsx': () =>
      _(
        () => import('./index.5dbbd3aa.js'),
        [
          'assets/index.5dbbd3aa.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/access-permission.bc4283a5.js',
          'assets/access-control.a5391fe6.js',
          'assets/accessControl.941fcf7e.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/apis/index.tsx': () =>
      _(
        () => import('./index.8f2e5070.js'),
        [
          'assets/index.8f2e5070.js',
          'assets/index.52dd629b.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/access-permission.bc4283a5.js',
          'assets/access-control.a5391fe6.js',
          'assets/accessControl.941fcf7e.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/apps/constants.tsx': () =>
      _(
        () =>
          import('./constants.493a6568.js').then(function (e) {
            return e.c;
          }),
        [
          'assets/constants.493a6568.js',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/apps/form.tsx': () =>
      _(
        () =>
          import('./form.c58b6385.js').then(function (e) {
            return e.f;
          }),
        [
          'assets/form.c58b6385.js',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/ArcoSelectInputIds.2dc06435.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/apps/index.tsx': () =>
      _(
        () => import('./index.5ed380bc.js'),
        [
          'assets/index.5ed380bc.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.bb858e7e.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.e971b0f8.js',
          'assets/form.c58b6385.js',
          'assets/ArcoSelectInputIds.2dc06435.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
          'assets/useArcoPaginationFieldIds.1ba1c2b9.js',
          'assets/constants.493a6568.js',
        ]
      ),
    './pages/system/auth-diagnosis/index.tsx': () =>
      _(
        () => import('./index.10e7f076.js'),
        [
          'assets/index.10e7f076.js',
          'assets/index.dcec7a6e.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/access-control.a5391fe6.js',
          'assets/accessControl.941fcf7e.js',
        ]
      ),
    './pages/system/data-scopes/index.tsx': () =>
      _(
        () => import('./index.4de1cb3e.js'),
        [
          'assets/index.4de1cb3e.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.68b61998.js',
          'assets/index.module.0979aea6.css',
          'assets/access-control.a5391fe6.js',
        ]
      ),
    './pages/system/depts/index.tsx': () =>
      _(
        () => import('./index.48d2f969.js'),
        [
          'assets/index.48d2f969.js',
          'assets/index.9731526f.css',
          'assets/index.544904ce.css',
          'assets/index.87aa3815.css',
          'assets/index.bb858e7e.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/access-control.a5391fe6.js',
        ]
      ),
    './pages/system/field-policies/index.tsx': () =>
      _(
        () => import('./index.1f9bb79f.js'),
        [
          'assets/index.1f9bb79f.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.68b61998.js',
          'assets/index.module.0979aea6.css',
          'assets/access-control.a5391fe6.js',
          'assets/accessControl.941fcf7e.js',
        ]
      ),
    './pages/system/menus/index.tsx': () =>
      _(
        () => import('./index.f9099219.js'),
        [
          'assets/index.f9099219.js',
          'assets/index.d1b72007.css',
          'assets/index.544904ce.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.bb858e7e.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/access-permission.bc4283a5.js',
          'assets/access-control.a5391fe6.js',
        ]
      ),
    './pages/system/permission-boundary-packages/constants.tsx': () =>
      _(
        () => import('./constants.da448a4c.js'),
        [
          'assets/constants.da448a4c.js',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/utils.49caa52b.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/permission-boundary-packages/form.tsx': () =>
      _(
        () => import('./form.3b01674f.js'),
        [
          'assets/form.3b01674f.js',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/permission-boundary-packages/index.tsx': () =>
      _(
        () => import('./index.dd12db32.js'),
        [
          'assets/index.dd12db32.js',
          'assets/index.d6a549e7.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/index.544904ce.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.e971b0f8.js',
          'assets/permission-boundary-package.8e6500ff.js',
          'assets/form.3b01674f.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
          'assets/access-role.e3a16bcc.js',
          'assets/access-control.a5391fe6.js',
          'assets/index.module.0c4d71de.js',
          'assets/index.module.1377d8bd.css',
          'assets/constants.da448a4c.js',
          'assets/utils.49caa52b.js',
        ]
      ),
    './pages/system/permission-relations/index.tsx': () =>
      _(
        () => import('./index.9eb0946d.js'),
        [
          'assets/index.9eb0946d.js',
          'assets/index.f7ecdacb.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/access-permission.bc4283a5.js',
          'assets/access-control.a5391fe6.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/permissions/index.tsx': () =>
      _(
        () => import('./index.7198b7d7.js'),
        [
          'assets/index.7198b7d7.js',
          'assets/index.41df8e75.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/access-permission.bc4283a5.js',
          'assets/access-control.a5391fe6.js',
          'assets/accessControl.941fcf7e.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/policies/index.tsx': () =>
      _(
        () => import('./index.067998e6.js'),
        [
          'assets/index.067998e6.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.68b61998.js',
          'assets/index.module.0979aea6.css',
          'assets/access-control.a5391fe6.js',
          'assets/accessControl.941fcf7e.js',
        ]
      ),
    './pages/system/roles/constants.tsx': () =>
      _(
        () => import('./constants.f22244d3.js'),
        [
          'assets/constants.f22244d3.js',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/accessControl.941fcf7e.js',
          'assets/index.module.0c4d71de.js',
          'assets/index.module.1377d8bd.css',
        ]
      ),
    './pages/system/roles/form.tsx': () =>
      _(
        () => import('./form.e1b498f3.js'),
        [
          'assets/form.e1b498f3.js',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.0c4d71de.js',
          'assets/index.module.1377d8bd.css',
        ]
      ),
    './pages/system/roles/index.tsx': () =>
      _(
        () => import('./index.6f79ddf5.js'),
        [
          'assets/index.6f79ddf5.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/index.544904ce.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/access-role.e3a16bcc.js',
          'assets/access-control.a5391fe6.js',
          'assets/form.e1b498f3.js',
          'assets/index.module.0c4d71de.js',
          'assets/index.module.1377d8bd.css',
          'assets/constants.f22244d3.js',
          'assets/accessControl.941fcf7e.js',
        ]
      ),
    './pages/system/setting/index.tsx': () =>
      _(
        () => import('./index.8274a865.js'),
        [
          'assets/index.8274a865.js',
          'assets/index.561fe829.css',
          'assets/index.eccebd16.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
        ]
      ),
    './pages/system/tenants/constants.tsx': () =>
      _(
        () => import('./constants.fcacaca0.js'),
        [
          'assets/constants.fcacaca0.js',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/utils.49caa52b.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/tenants/form.tsx': () =>
      _(
        () =>
          import('./form.f5fb1f3d.js').then(function (e) {
            return e.f;
          }),
        [
          'assets/form.f5fb1f3d.js',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/ArcoSelectInputIds.2dc06435.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/tenants/index.tsx': () =>
      _(
        () => import('./index.9c586983.js'),
        [
          'assets/index.9c586983.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.bb858e7e.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.e971b0f8.js',
          'assets/permission-boundary-package.8e6500ff.js',
          'assets/form.f5fb1f3d.js',
          'assets/ArcoSelectInputIds.2dc06435.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
          'assets/useArcoPaginationFieldIds.1ba1c2b9.js',
          'assets/constants.fcacaca0.js',
          'assets/utils.49caa52b.js',
        ]
      ),
    './pages/system/users/constants.tsx': () =>
      _(
        () => import('./constants.f626edf2.js'),
        [
          'assets/constants.f626edf2.js',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/accessControl.941fcf7e.js',
          'assets/index.module.078c7882.js',
          'assets/index.module.7633bc66.css',
        ]
      ),
    './pages/system/users/form.tsx': () =>
      _(
        () => import('./form.a82c7f7e.js'),
        [
          'assets/form.a82c7f7e.js',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.078c7882.js',
          'assets/index.module.7633bc66.css',
        ]
      ),
    './pages/system/users/index.tsx': () =>
      _(
        () => import('./index.9bc6d002.js'),
        [
          'assets/index.9bc6d002.js',
          'assets/index.544904ce.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.44459b16.js',
          'assets/vendor.503ea215.css',
          'assets/accessControl.941fcf7e.js',
          'assets/access-role.e3a16bcc.js',
          'assets/access-control.a5391fe6.js',
          'assets/form.a82c7f7e.js',
          'assets/index.module.078c7882.js',
          'assets/index.module.7633bc66.css',
          'assets/constants.f626edf2.js',
        ]
      ),
  },
  Ln = new Map();
function Nr(e) {
  const t = Ln.get(e);
  if (t) return t;
  const n =
      Ir[`./pages/${e}/index.tsx`] ||
      (() =>
        _(
          () =>
            Promise.resolve().then(function () {
              return bt;
            }),
          void 0
        )),
    s = Rn(n);
  return Ln.set(e, s), s;
}
function Br(e) {
  const t = [];
  function n(s) {
    s.forEach((r) => {
      r.key && !r.children
        ? t.push(N(p({}, r), { component: Nr(r.key) }))
        : Hs(r.children) && r.children.length && n(r.children);
    });
  }
  return n(e), t;
}
function Tr() {
  const e = vr(),
    t = Qe(),
    n = Vt(),
    { dropScope: s, refreshScope: r } = Jt.exports.useAliveController(),
    u = n.pathname,
    a = se(u),
    l = a ? `/${a}` : '',
    g = nt(u),
    x = Wt.parseUrl(g).url.slice(1),
    y = W(),
    { settings: E, userLoading: T, userInfo: I } = me((h) => h),
    b = i.exports.useMemo(
      () => ({ tenantCode: a || mr(I).tenantCode }),
      [a, I]
    ),
    B = i.exports.useMemo(() => b.tenantCode || 'unknown', [b.tenantCode]),
    [U, m, v] = xr(I == null ? void 0 : I.permissions, a),
    G = [x || m],
    f = (x || m).split('/'),
    c = f.slice(0, f.length - 1),
    [C, z] = i.exports.useState([]),
    [V, R] = i.exports.useState(!1),
    [D, S] = i.exports.useState(G),
    [w, X] = i.exports.useState(c),
    [K, Z] = i.exports.useState([]),
    re = i.exports.useRef(new Map()),
    Ge = i.exports.useRef(new Map()),
    Et = 60,
    Ct = V ? 48 : E.menuWidth,
    xe = E.navbar && e.navbar !== !1,
    xt = E.menu && e.menu !== !1,
    ce = xt && E.topMenu,
    vt = xt && !ce,
    Y = E.tabBar && e.tabBar !== !1,
    zn = E.footer && e.footer !== !1,
    ae = i.exports.useMemo(() => Br(U) || [], [U]),
    Ft = i.exports.useMemo(() => Fs(u, I), [u, I]),
    $ = i.exports.useMemo(() => {
      if (!m) return null;
      const F = `${Ft.replace(/\/$/, '')}/${m}`.replace(/\/+/g, '/');
      return vn(F, '', ae) || { title: m, name: m, path: F, fullPath: F };
    }, [m, ae, Ft]),
    le = i.exports.useMemo(
      () => vn(n.pathname, n.search, ae),
      [ae, n.pathname, n.search]
    );
  i.exports.useEffect(() => {
    if (!m || !Y || !$) return;
    const h = ln(u, I),
      F = dr(b),
      O = (F == null ? void 0 : F.length) ? fr(F, h) : null;
    Z((O == null ? void 0 : O.length) ? O : [$]);
  }, [m, $, B, u, Y, b, I]),
    i.exports.useEffect(() => {
      if (Y || !K.length) return;
      const h = `${n.pathname}${n.search || ''}`;
      K.forEach((F) => {
        F.fullPath !== h && s(Ke(b, F.fullPath));
      });
    }, [s, n.pathname, n.search, Y, b, K]),
    i.exports.useEffect(() => {
      if (a) return;
      const h = ot();
      t.replace(h ? `/${h}${u}` : '/403');
    }, [t, u, a]),
    i.exports.useEffect(() => {
      !le ||
        Z((h) => {
          if (!Y) return [le];
          const F = $ ? [$] : [],
            O = h.length ? h : F;
          return O.length
            ? O.some((Q) => Q.fullPath === le.fullPath)
              ? O
              : [...O, le]
            : [le];
        });
    }, [le, $, Y]),
    i.exports.useEffect(() => {
      !K.length || gr(b, Y ? K : K.slice(-1));
    }, [B, Y, b, K]);
  const Vn = i.exports.useCallback(
      (h) => {
        if (h.length) {
          Z(h);
          return;
        }
        Z($ ? [$] : []);
      },
      [$]
    ),
    Kn = i.exports.useCallback(
      (h) => {
        h.forEach((F) => {
          s(Ke(b, F.fullPath));
        });
      },
      [s, b]
    ),
    Wn = i.exports.useCallback(
      (h) => {
        r(Ke(b, h.fullPath));
      },
      [r, b]
    );
  function Jn(h) {
    const F = ae.find((q) => q.key === h),
      Q = F.component.preload();
    Xt.start(),
      Q.then(() => {
        t.push(F.path ? `${l}${F.path}` : `${l}/${h}`), Xt.done();
      });
  }
  function Gn() {
    R((h) => !h);
  }
  const Yn = vt ? { paddingLeft: Ct } : {},
    St = xe ? { paddingTop: Et } : {},
    Hn = p(p({}, Yn), St),
    wt = o(k, {
      mode: ce ? 'horizontal' : 'vertical',
      collapse: !ce && V,
      onClickMenuItem: Jn,
      selectedKeys: D,
      openKeys: ce ? void 0 : w,
      onClickSubMenu: (h, F) => {
        ce || X(F);
      },
      children: Xn(y)(U, 1),
    });
  function Xn(h) {
    return (
      re.current.clear(),
      function F(O, Q, q = []) {
        return O.map((P) => {
          const { breadcrumb: Zn = !0, ignore: Qn } = P,
            eo = Cn(P.key, P.icon),
            At = d(De, { children: [eo, ' ', h[P.name] || P.name] });
          re.current.set(`/${P.key}`, Zn ? [...q, P.name] : []);
          const Pt = (P.children || []).filter((Ye) => {
            const { ignore: It, breadcrumb: to = !0 } = Ye;
            return (
              (It || P.ignore) &&
                re.current.set(`/${Ye.key}`, to ? [...q, P.name, Ye.name] : []),
              !It
            );
          });
          return Qn
            ? ''
            : Pt.length
            ? (Ge.current.set(P.key, { subMenu: !0 }),
              o(
                Dr,
                { title: At, children: F(Pt, Q + 1, [...q, P.name]) },
                P.key
              ))
            : (Ge.current.set(P.key, { menuItem: !0 }),
              o(wr, { children: At }, P.key));
        });
      }
    );
  }
  const Dt = i.exports.useCallback(() => {
    const h = g.split('/'),
      F = [],
      O = [];
    for (; h.length > 0; ) {
      const q = h.join('/').replace(/^\//, ''),
        P = Ge.current.get(q);
      P && P.menuItem && F.push(q), P && P.subMenu && O.push(q), h.pop();
    }
    S(F),
      X((Q) => {
        const q = [...Q];
        return (
          O.forEach((P) => {
            q.includes(P) || q.push(P);
          }),
          q
        );
      });
  }, [g]);
  return (
    i.exports.useEffect(() => {
      const h = re.current.get(g);
      z(h || []), Dt();
    }, [g, Dt]),
    d(de, {
      className: M.layout,
      children: [
        o('div', {
          className: _e(M['layout-navbar'], {
            [M['layout-navbar-hidden']]: !xe,
          }),
          children: o(nr, { show: xe, menu: ce, topMenu: wt }),
        }),
        T || v
          ? o(Xe, { className: M.spin })
          : d(de, {
              children: [
                vt &&
                  d(Ar, {
                    className: M['layout-sider'],
                    width: Ct,
                    collapsed: V,
                    onCollapse: R,
                    trigger: null,
                    collapsible: !0,
                    breakpoint: 'xl',
                    style: St,
                    children: [
                      o('div', { className: M['menu-wrapper'], children: wt }),
                      o('div', {
                        className: M['collapse-btn'],
                        onClick: Gn,
                        children: V ? o(jo, {}) : o(Mo, {}),
                      }),
                    ],
                  }),
                d(de, {
                  className: M['layout-content'],
                  style: Hn,
                  children: [
                    Y &&
                      $ &&
                      o(cr, {
                        defaultTab: $,
                        tabList: K.length ? K : [$],
                        routes: ae,
                        offsetTop: xe ? Et : 0,
                        onTabsChange: Vn,
                        onCloseTabs: Kn,
                        onReload: Wn,
                      }),
                    d('div', {
                      className: _e(M['layout-content-wrapper'], {
                        [M['layout-content-wrapper-with-tab']]: Y && !!$,
                      }),
                      children: [
                        !!C.length &&
                          o('div', {
                            className: M['layout-breadcrumb'],
                            children: o(Gt, {
                              children: C.map((h, F) =>
                                o(
                                  Gt.Item,
                                  {
                                    children:
                                      (typeof h == 'string' && y[h]) || h,
                                  },
                                  F
                                )
                              ),
                            }),
                          }),
                        o(Pr, {
                          children: d(Yt, {
                            children: [
                              ae.map((h, F) =>
                                o(
                                  hr,
                                  {
                                    path: `${l}/${h.key}`,
                                    component: h.component,
                                    identity: b,
                                  },
                                  F
                                )
                              ),
                              o(te, {
                                exact: !0,
                                path: l || '/',
                                children: m
                                  ? o(Ht, { to: `${l}/${m}` })
                                  : o(Ht, { to: l ? `${l}/403` : '/403' }),
                              }),
                              o(te, {
                                path: '*',
                                component: Rn(() =>
                                  _(
                                    () =>
                                      Promise.resolve().then(function () {
                                        return bt;
                                      }),
                                    void 0
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    zn && o(En, {}),
                  ],
                }),
              ],
            }),
      ],
    })
  );
}
function kr() {
  return at({ url: '/api/system/captcha', method: 'GET' });
}
function Rr() {
  return at({
    url: '/api/system/setting/public',
    method: 'GET',
    skipErrorMessage: !0,
  });
}
function Qr() {
  return ie({ url: '/api/system/setting/manage', method: 'GET' });
}
function ea(e) {
  return ie({
    url: '/api/system/setting/manage',
    method: 'PUT',
    data: { config: e },
  });
}
function ta(e, t) {
  const n = new FormData();
  return (
    n.append('scene', e),
    n.append('file', t),
    ie({
      url: '/api/system/upload/image',
      method: 'POST',
      data: n,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  );
}
const On = {
    'en-US': {
      'login.form.title': 'Login to',
      'login.form.userName.errMsg': 'Username cannot be empty',
      'login.form.password.errMsg': 'Password cannot be empty',
      'login.form.login.errMsg': 'Login error, please refresh and try again',
      'login.form.userName.placeholder': 'Username: admin',
      'login.form.password.placeholder': 'Password: admin',
      'login.form.captcha.errMsg': 'Captcha cannot be empty',
      'login.form.captcha.placeholder': 'Captcha',
      'login.form.captcha.refresh': 'Refresh',
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
      'login.form.title': '\u767B\u5F55',
      'login.form.userName.errMsg':
        '\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A',
      'login.form.password.errMsg': '\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A',
      'login.form.login.errMsg':
        '\u767B\u5F55\u51FA\u9519\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5',
      'login.form.userName.placeholder': '\u7528\u6237\u540D\uFF1Aadmin',
      'login.form.password.placeholder': '\u5BC6\u7801\uFF1Aadmin',
      'login.form.captcha.errMsg': '\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A',
      'login.form.captcha.placeholder': '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801',
      'login.form.captcha.refresh': '\u5237\u65B0',
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
  Lr = '_container_1rgqq_1',
  Or = '_banner_1rgqq_5',
  jr = '_content_1rgqq_9',
  Mr = '_footer_1rgqq_14',
  $r = '_logo_1rgqq_20',
  qr = '_carousel_1rgqq_54';
var A = {
  container: Lr,
  banner: Or,
  content: jr,
  footer: Mr,
  logo: $r,
  'logo-image': '_logo-image_1rgqq_28',
  'logo-text': '_logo-text_1rgqq_34',
  'banner-inner': '_banner-inner_1rgqq_45',
  carousel: qr,
  'carousel-item': '_carousel-item_1rgqq_57',
  'carousel-title': '_carousel-title_1rgqq_64',
  'carousel-sub-title': '_carousel-sub-title_1rgqq_70',
  'carousel-image': '_carousel-image_1rgqq_76',
  'login-form-wrapper': '_login-form-wrapper_1rgqq_80',
  'login-form-title': '_login-form-title_1rgqq_83',
  'login-form-sub-title': '_login-form-sub-title_1rgqq_89',
  'login-form-error-msg': '_login-form-error-msg_1rgqq_94',
  'login-form-password-actions': '_login-form-password-actions_1rgqq_99',
  'login-form-captcha-row': '_login-form-captcha-row_1rgqq_103',
  'login-form-captcha-input': '_login-form-captcha-input_1rgqq_107',
  'login-form-captcha-btn': '_login-form-captcha-btn_1rgqq_110',
  'login-form-captcha-image': '_login-form-captcha-image_1rgqq_118',
};
function jn() {
  const e = i.exports.useRef(),
    [t, n] = i.exports.useState(''),
    [s, r] = i.exports.useState(!1),
    [u, a] = i.exports.useState(!1),
    [l, g] = i.exports.useState(''),
    [x, y] = i.exports.useState(''),
    [E, T, I] = Ce('loginParams'),
    b = W(On),
    {
      lang: B,
      systemProfile: U,
      refreshSystemProfile: m,
    } = i.exports.useContext(oe),
    v = Ie(U, B),
    G = on(U, B),
    [f, c] = i.exports.useState(!!E);
  function C() {
    a(!0),
      kr()
        .then((D) => {
          var S;
          g(D.captchaKey),
            y(D.captchaImage),
            (S = e.current) == null || S.setFieldValue('captchaCode', '');
        })
        .finally(() => {
          a(!1);
        });
  }
  async function z(D, S) {
    var Z;
    const w = (Z = S.defaultTenant) == null ? void 0 : Z.tenantCode;
    if (!w) {
      window.location.href = '/403';
      return;
    }
    f ? T(JSON.stringify({ account: D.account })) : I(),
      localStorage.setItem(ge, S.accessToken),
      localStorage.setItem(Re, w),
      localStorage.setItem(
        Be,
        JSON.stringify(
          N(p({}, S.profile || {}), { defaultTenant: S.defaultTenant })
        )
      ),
      localStorage.setItem('userStatus', 'login'),
      pe(S.theme_setting),
      m == null ||
        m().then((re) => {
          re && un(re);
        });
    const X = await dt(w);
    localStorage.setItem(
      Be,
      JSON.stringify(
        N(p({}, X.profile || S.profile || {}), {
          defaultTenant: S.defaultTenant,
        })
      )
    );
    const K = kn(X.menus || []);
    if (!K) {
      window.location.href = '/403';
      return;
    }
    window.location.href = `/${w}/${K.replace(/^\/+/, '')}`;
  }
  function V(D) {
    n(''),
      r(!0),
      Zs(N(p({}, D), { captchaKey: l }))
        .then((S) => z(D, S))
        .catch((S) => {
          var w, X;
          n(
            (S == null ? void 0 : S.message) ||
              ((X =
                (w = S == null ? void 0 : S.response) == null
                  ? void 0
                  : w.data) == null
                ? void 0
                : X.message) ||
              b['login.form.login.errMsg']
          ),
            C();
        })
        .finally(() => {
          r(!1);
        });
  }
  function R() {
    e.current.validate().then((D) => {
      V(D);
    });
  }
  return (
    i.exports.useEffect(() => {
      C();
    }, []),
    i.exports.useEffect(() => {
      const D = !!E;
      if ((c(D), e.current && D)) {
        const S = JSON.parse(E);
        e.current.setFieldsValue(S);
      }
    }, [E]),
    d('div', {
      className: A['login-form-wrapper'],
      children: [
        d('div', {
          className: A['login-form-title'],
          children: [b['login.form.title'], ' ', v],
        }),
        o('div', { className: A['login-form-sub-title'], children: G }),
        o('div', { className: A['login-form-error-msg'], children: t }),
        d(ye, {
          className: A['login-form'],
          layout: 'vertical',
          ref: e,
          initialValues: { account: 'operator', password: 'Aa123!@#' },
          children: [
            o(ye.Item, {
              field: 'account',
              rules: [
                { required: !0, message: b['login.form.userName.errMsg'] },
              ],
              children: o(et, {
                prefix: o(Ut, {}),
                placeholder: b['login.form.userName.placeholder'],
                onPressEnter: R,
              }),
            }),
            o(ye.Item, {
              field: 'password',
              rules: [
                { required: !0, message: b['login.form.password.errMsg'] },
              ],
              children: o(et.Password, {
                prefix: o($o, {}),
                placeholder: b['login.form.password.placeholder'],
                onPressEnter: R,
              }),
            }),
            o(ye.Item, {
              children: d('div', {
                className: A['login-form-captcha-row'],
                children: [
                  o(ye.Item, {
                    field: 'captchaCode',
                    rules: [
                      { required: !0, message: b['login.form.captcha.errMsg'] },
                    ],
                    noStyle: !0,
                    children: o(et, {
                      className: A['login-form-captcha-input'],
                      prefix: o(qo, {}),
                      maxLength: 5,
                      placeholder: b['login.form.captcha.placeholder'],
                      onPressEnter: R,
                    }),
                  }),
                  o(ee, {
                    type: 'text',
                    loading: u,
                    className: A['login-form-captcha-btn'],
                    onClick: C,
                    children: x
                      ? o('img', {
                          className: A['login-form-captcha-image'],
                          src: x,
                          alt: 'captcha',
                        })
                      : b['login.form.captcha.refresh'],
                  }),
                ],
              }),
            }),
            d(Lt, {
              size: 16,
              direction: 'vertical',
              children: [
                d('div', {
                  className: A['login-form-password-actions'],
                  children: [
                    o(Uo, {
                      checked: f,
                      onChange: c,
                      children: b['login.form.rememberPassword'],
                    }),
                    o(zo, { children: b['login.form.forgetPassword'] }),
                  ],
                }),
                o(ee, {
                  type: 'primary',
                  long: !0,
                  onClick: R,
                  loading: s,
                  children: b['login.form.login'],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
var Ur = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: jn,
});
function Mn() {
  const e = W(On),
    t = [
      {
        slogan: e['login.banner.slogan1'],
        subSlogan: e['login.banner.subSlogan1'],
        image:
          'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
      },
      {
        slogan: e['login.banner.slogan2'],
        subSlogan: e['login.banner.subSlogan2'],
        image:
          'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
      },
      {
        slogan: e['login.banner.slogan3'],
        subSlogan: e['login.banner.subSlogan3'],
        image:
          'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
      },
    ];
  return o(Vo, {
    className: A.carousel,
    animation: 'fade',
    children: t.map((n, s) =>
      o(
        'div',
        {
          children: d('div', {
            className: A['carousel-item'],
            children: [
              o('div', { className: A['carousel-title'], children: n.slogan }),
              o('div', {
                className: A['carousel-sub-title'],
                children: n.subSlogan,
              }),
              o('img', {
                alt: 'banner-image',
                className: A['carousel-image'],
                src: n.image,
              }),
            ],
          }),
        },
        `${s}`
      )
    ),
  });
}
var zr = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Mn,
});
function Je() {
  const { lang: e, systemProfile: t } = i.exports.useContext(oe),
    n = Ie(t, e);
  return (
    i.exports.useEffect(() => {
      document.body.setAttribute('arco-theme', 'light');
    }, []),
    d('div', {
      className: A.container,
      children: [
        d('div', {
          className: A.logo,
          children: [
            o(cn, { profile: t, className: A['logo-image'], alt: n }),
            o('div', { className: A['logo-text'], children: n }),
          ],
        }),
        o('div', {
          className: A.banner,
          children: o('div', {
            className: A['banner-inner'],
            children: o(Mn, {}),
          }),
        }),
        d('div', {
          className: A.content,
          children: [
            o('div', { className: A['content-inner'], children: o(jn, {}) }),
            o('div', { className: A.footer, children: o(En, {}) }),
          ],
        }),
      ],
    })
  );
}
Je.displayName = 'LoginPage';
var Vr = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Je,
});
const Kr = {
    'en-US': {
      'menu.exception': 'Exception page',
      'menu.exception.403': '403',
      'exception.result.403.description':
        'Access to this resource on the server is denied.',
      'exception.result.403.back': 'Back',
    },
    'zh-CN': {
      'menu.exception': '\u5F02\u5E38\u9875',
      'menu.exception.403': '403',
      'exception.result.403.description':
        '\u5BF9\u4E0D\u8D77\uFF0C\u60A8\u6CA1\u6709\u8BBF\u95EE\u8BE5\u8D44\u6E90\u7684\u6743\u9650',
      'exception.result.403.back': '\u8FD4\u56DE',
    },
  },
  Wr = '_wrapper_jqkv8_1',
  Jr = '_result_jqkv8_6';
var _t = { wrapper: Wr, result: Jr };
function yt() {
  const e = W(Kr),
    t = Qe();
  return o('div', {
    className: _t.container,
    children: o('div', {
      className: _t.wrapper,
      children: o(kt, {
        className: _t.result,
        status: '403',
        subTitle: e['exception.result.403.description'],
        extra: o(
          ee,
          {
            type: 'primary',
            onClick: () => t.push('/login'),
            children: e['exception.result.403.back'],
          },
          'back'
        ),
      }),
    }),
  });
}
var bt = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: yt,
});
function $n() {
  return !!localStorage.getItem(ge);
}
var qn = (e) => {
  const { mock: t = !1, setup: n } = e;
  t !== !1 && n();
};
fe ||
  ((ne.XHR.prototype.withCredentials = !0),
  qn({
    setup: () => {
      const e = window.localStorage.getItem('userRole') || 'admin';
      ne.mock(new RegExp('/api/user/userInfo'), () =>
        ne.mock({
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
          registrationTime: ne.Random.datetime('yyyy-MM-dd HH:mm:ss'),
          permissions: Cr(e),
        })
      ),
        ne.mock(new RegExp('/api/user/login'), (t) => {
          const { userName: n, password: s } = JSON.parse(t.body);
          return n
            ? s
              ? n === 'admin' && s === 'admin'
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
const Un = [],
  Gr = () =>
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
    ].map((e) => N(p({}, e), { status: Un.indexOf(e.id) === -1 ? 0 : 1 }));
qn({
  setup: () => {
    ne.mock(new RegExp('/api/message/list'), () => Gr()),
      ne.mock(new RegExp('/api/message/read'), (e) => {
        const { ids: t } = JSON.parse(e.body);
        return Un.push(...(t || [])), !0;
      });
  },
});
fe || ne.setup({ timeout: '500-1500' });
const he = Ko(as);
function Yr() {
  const e = Ze(),
    [t, n] = Ce('arco-lang', 'en-US'),
    [s, r] = Ce('arco-theme', 'light'),
    u = me((m) => m.settings),
    [a, l] = i.exports.useState(() => H(ps() || be)),
    g = qt.useRef();
  function x(m) {
    l(H(m));
  }
  const y = i.exports.useCallback(
    async () => (
      g.current ||
        (g.current = Rr()
          .then((m) => {
            const v = H(m);
            return x(v), $n() && un(v), v;
          })
          .catch(() => {})
          .finally(() => {
            g.current = void 0;
          })),
      g.current
    ),
    []
  );
  function E(m) {
    pe(m),
      n(m.lang),
      r(m.theme),
      e({ type: 'update-settings', payload: { settings: m.settings } }),
      e({ type: 'update-theme', payload: { theme: m.theme } }),
      Ue(m.theme, m.settings.themeColor);
  }
  function T(m) {
    const v = pe(N(p({}, $e()), { lang: m }));
    n(v.lang);
  }
  function I(m) {
    const v = pe(N(p({}, $e()), { theme: m }));
    r(v.theme),
      e({ type: 'update-theme', payload: { theme: v.theme } }),
      Ue(v.theme, v.settings.themeColor);
  }
  function b() {
    switch (t) {
      case 'zh-CN':
        return Zt;
      case 'en-US':
        return Ho;
      default:
        return Zt;
    }
  }
  async function B() {
    he.dispatch({ type: 'update-userInfo', payload: { userLoading: !0 } });
    const m = se();
    try {
      const v = m ? await dt(m) : null;
      he.dispatch({
        type: 'update-userInfo',
        payload: {
          userInfo: N(
            p(p({}, ke() || {}), (v == null ? void 0 : v.profile) || {}),
            {
              permissions: (v == null ? void 0 : v.permissions) || [],
              fieldPolicies: (v == null ? void 0 : v.fieldPolicies) || {},
            }
          ),
          userLoading: !1,
        },
      });
    } catch {
      he.dispatch({
        type: 'update-userInfo',
        payload: { userInfo: ke() || { permissions: {} }, userLoading: !1 },
      });
    }
  }
  i.exports.useEffect(() => {
    const m = window.location.pathname,
      v = m === '/login' || m.endsWith('/login'),
      G = m === '/403' || m.endsWith('/403');
    if ($n()) {
      if (!se(m) && !v && !G) {
        const C = ot();
        window.location.replace(C ? `/${C}${m}` : '/403');
        return;
      }
      const c = $e();
      pe(c),
        n(c.lang),
        r(c.theme),
        he.dispatch({
          type: 'update-settings',
          payload: { settings: c.settings },
        }),
        he.dispatch({ type: 'update-theme', payload: { theme: c.theme } }),
        Ue(c.theme, c.settings.themeColor),
        B();
    } else y(), !v && !G && (window.location.pathname = '/login');
  }, []),
    i.exports.useEffect(() => {
      (document.title = ms(a, t)), gs(a);
    }, [t, a]),
    i.exports.useEffect(() => {
      Ue(s, u.themeColor), e({ type: 'update-theme', payload: { theme: s } });
    }, [e, u.themeColor, s]);
  const U = {
    lang: t,
    setLang: T,
    theme: s,
    setTheme: I,
    applyUserTheme: E,
    systemProfile: a,
    setSystemProfile: x,
    refreshSystemProfile: y,
  };
  return o(Go, {
    children: o(Yo, {
      locale: b(),
      componentConfig: {
        Card: { bordered: !1 },
        List: { bordered: !1 },
        Table: { border: !1 },
      },
      children: o(oe.Provider, {
        value: U,
        children: o(Jt.exports.AliveScope, {
          children: d(Yt, {
            children: [
              o(te, { path: '/login', component: Je }),
              o(te, { path: '/:tenantCode/login', component: Je }),
              o(te, { path: '/403', component: yt }),
              o(te, { path: '/:tenantCode/403', component: yt }),
              o(te, { path: '/', component: Tr }),
            ],
          }),
        }),
      }),
    }),
  });
}
function Hr() {
  return o(Jo, { store: he, children: o(Yr, {}) });
}
Wo.render(o(Hr, {}), document.getElementById('root'));
export {
  be as D,
  oe as G,
  ie as a,
  yr as b,
  ir as c,
  rn as d,
  Qr as e,
  ea as f,
  tr as g,
  ta as h,
  se as i,
  H as n,
  mt as r,
  qn as s,
  W as u,
  un as w,
};
