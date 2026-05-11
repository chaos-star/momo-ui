var ps = Object.defineProperty,
  hs = Object.defineProperties;
var gs = Object.getOwnPropertyDescriptors;
var Pe = Object.getOwnPropertySymbols;
var Ut = Object.prototype.hasOwnProperty,
  Ot = Object.prototype.propertyIsEnumerable;
var qt = (e, t, s) =>
    t in e
      ? ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  p = (e, t) => {
    for (var s in t || (t = {})) Ut.call(t, s) && qt(e, s, t[s]);
    if (Pe) for (var s of Pe(t)) Ot.call(t, s) && qt(e, s, t[s]);
    return e;
  },
  B = (e, t) => hs(e, gs(t));
var Ie = (e, t) => {
  var s = {};
  for (var o in e) Ut.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
  if (e != null && Pe)
    for (var o of Pe(e)) t.indexOf(o) < 0 && Ot.call(e, o) && (s[o] = e[o]);
  return s;
};
import {
  r as u,
  j as n,
  L as it,
  R as Kt,
  B as le,
  A as Gt,
  S as Wt,
  T as Te,
  a as Ns,
  b as Jt,
  c as bs,
  g as xs,
  I as Es,
  d as vs,
  e as Ds,
  f as at,
  h as Yt,
  i as Me,
  k as Se,
  M as Ee,
  u as ve,
  l as ut,
  m as ys,
  n as _s,
  D as Ht,
  o as Xt,
  p as js,
  q as Cs,
  s as Zt,
  t as Re,
  v as Fs,
  w as Ss,
  x as Vs,
  y as M,
  z as Qt,
  C as ws,
  E as As,
  F as ks,
  G as Bs,
  H as Ps,
  J as Is,
  K as Ts,
  N as Ms,
  O as Rs,
  P as $s,
  Q as en,
  U as De,
  V as Ls,
  W as lt,
  X as tn,
  Y as zs,
  Z as Us,
  _ as nn,
  $ as Os,
  a0 as qs,
  a1 as Ks,
  a2 as Gs,
  a3 as ce,
  a4 as Ws,
  a5 as sn,
  a6 as Js,
  a7 as on,
  a8 as Ys,
  a9 as Hs,
  aa as rn,
  ab as an,
  ac as un,
  ad as ln,
  ae as Ve,
  af as ct,
  ag as Xs,
  ah as Zs,
  ai as Qs,
  aj as eo,
  ak as to,
  al as me,
  am as no,
  an as so,
  ao as oo,
  ap as ro,
  aq as io,
  ar as cn,
  as as ao,
} from './vendor.5abf864c.js';
const uo = function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const a of r)
      if (a.type === 'childList')
        for (const i of a.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && o(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(r) {
    const a = {};
    return (
      r.integrity && (a.integrity = r.integrity),
      r.referrerpolicy && (a.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (a.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const a = s(r);
    fetch(r.href, a);
  }
};
uo();
const lo = !1,
  co = !0,
  mo = !0,
  fo = !1,
  po = !0,
  ho = !0,
  go = '#165DFF',
  No = 220;
var mn = {
  colorWeek: lo,
  navbar: co,
  menu: mo,
  topMenu: fo,
  tabBar: po,
  footer: ho,
  themeColor: go,
  menuWidth: No,
};
const fn = { settings: mn, theme: 'light', userInfo: { permissions: {} } };
function bo(e = fn, t) {
  switch (t.type) {
    case 'update-settings': {
      const { settings: s } = t.payload;
      return B(p({}, e), { settings: s });
    }
    case 'update-theme': {
      const { theme: s } = t.payload;
      return B(p({}, e), { theme: s });
    }
    case 'update-userInfo': {
      const { userInfo: s = fn.userInfo, userLoading: o } = t.payload;
      return B(p({}, e), { userLoading: o, userInfo: s });
    }
    default:
      return e;
  }
}
const xo = 'modulepreload',
  dn = {},
  Eo = '/',
  $ = function (t, s) {
    return !s || s.length === 0
      ? t()
      : Promise.all(
          s.map((o) => {
            if (((o = `${Eo}${o}`), o in dn)) return;
            dn[o] = !0;
            const r = o.endsWith('.css'),
              a = r ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${o}"]${a}`)) return;
            const i = document.createElement('link');
            if (
              ((i.rel = r ? 'stylesheet' : xo),
              r || ((i.as = 'script'), (i.crossOrigin = '')),
              (i.href = o),
              document.head.appendChild(i),
              r)
            )
              return new Promise((c, f) => {
                i.addEventListener('load', c), i.addEventListener('error', f);
              });
          })
        ).then(() => t());
  },
  fe = u.exports.createContext({}),
  pn = {
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
function Q(e = null) {
  const { lang: t } = u.exports.useContext(fe);
  return (e || pn)[t] || {};
}
const vo = (e) =>
    u.exports.createElement(
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
      u.exports.createElement(
        'g',
        { clipPath: 'url(#clip0)' },
        u.exports.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M5.37754 16.9795L12.7498 9.43027C14.7163 7.41663 17.9428 7.37837 19.9564 9.34482C19.9852 9.37297 20.0137 9.40145 20.0418 9.43027L20.1221 9.51243C22.1049 11.5429 22.1049 14.7847 20.1221 16.8152L12.7498 24.3644C10.7834 26.378 7.55686 26.4163 5.54322 24.4498C5.5144 24.4217 5.48592 24.3932 5.45777 24.3644L5.37754 24.2822C3.39468 22.2518 3.39468 19.0099 5.37754 16.9795Z',
          fill: '#12D2AC',
        }),
        u.exports.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M20.0479 9.43034L27.3399 16.8974C29.3674 18.9735 29.3674 22.2883 27.3399 24.3644C25.3735 26.3781 22.147 26.4163 20.1333 24.4499C20.1045 24.4217 20.076 24.3933 20.0479 24.3644L12.7558 16.8974C10.7284 14.8213 10.7284 11.5065 12.7558 9.43034C14.7223 7.4167 17.9488 7.37844 19.9624 9.34489C19.9912 9.37304 20.0197 9.40152 20.0479 9.43034Z',
          fill: '#307AF2',
        }),
        u.exports.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M20.1321 9.52163L23.6851 13.1599L16.3931 20.627L9.10103 13.1599L12.6541 9.52163C14.6707 7.45664 17.9794 7.4174 20.0444 9.434C20.074 9.46286 20.1032 9.49207 20.1321 9.52163Z',
          fill: '#0057FE',
        })
      ),
      u.exports.createElement(
        'defs',
        null,
        u.exports.createElement(
          'clipPath',
          { id: 'clip0' },
          u.exports.createElement('rect', {
            width: 26,
            height: 19,
            fill: 'white',
            transform: 'translate(3.5 7)',
          })
        )
      )
    ),
  $e = 'system-profile',
  we = {
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
function se(e) {
  const t = e,
    s = p(
      p(
        p(
          p(
            p({}, we.config),
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
    config: B(p({}, s), {
      systemName: p(p({}, we.config.systemName), s.systemName || {}),
      companyName: p(p({}, we.config.companyName), s.companyName || {}),
      systemDescription: p(
        p({}, we.config.systemDescription),
        s.systemDescription || {}
      ),
    }),
    logoUrl: (e == null ? void 0 : e.logoUrl) || '',
    obsCloudBase: (e == null ? void 0 : e.obsCloudBase) || '',
  };
}
function mt(e, t = 'zh-CN') {
  return (
    (e == null ? void 0 : e[t]) ||
    (e == null ? void 0 : e['zh-CN']) ||
    (e == null ? void 0 : e['en-US']) ||
    ''
  );
}
function Le(e, t = 'zh-CN') {
  return mt(se(e).config.systemName, t);
}
function Do(e, t = 'zh-CN') {
  return mt(se(e).config.companyName, t);
}
function hn(e, t = 'zh-CN') {
  return mt(se(e).config.systemDescription, t);
}
function yo(e, t = 'zh-CN') {
  const s = Le(e, t),
    o = hn(e, t);
  return o ? `${s} - ${o}` : s;
}
function _o(e, t = 'zh-CN') {
  return `\xA9 2026-${new Date().getFullYear()} ${Do(e, t)}`;
}
function gn(e) {
  const t = se(e).config;
  if (t.logoType !== '1') return '';
  const s = t.logoSvgElement;
  return typeof s == 'string' ? s.trim() : '';
}
function Nn(e) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`;
}
function bn(e) {
  const t = se(e),
    s = t.config.logoPath || '';
  return t.logoUrl
    ? t.logoUrl
    : s
    ? s.startsWith('http://') || s.startsWith('https://') || !t.obsCloudBase
      ? s
      : `${t.obsCloudBase.replace(/\/$/, '')}/${s.replace(/^\//, '')}`
    : '';
}
function jo(e) {
  const t = gn(e),
    s = t ? Nn(t) : bn(e);
  if (!s) return;
  const r = s.startsWith('data:')
    ? s
    : s.includes('?')
    ? `${s}&favicon=${Date.now()}`
    : `${s}?favicon=${Date.now()}`;
  let a = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
  a || ((a = document.createElement('link')), document.head.appendChild(a)),
    (a.rel = 'icon'),
    (a.type = t ? 'image/svg+xml' : 'image/x-icon'),
    (a.href = r);
}
function Co() {
  try {
    const e = localStorage.getItem($e);
    return e ? se(JSON.parse(e)) : null;
  } catch {
    return localStorage.removeItem($e), null;
  }
}
function xn(e) {
  const t = se(e);
  return localStorage.setItem($e, JSON.stringify(t)), t;
}
function Fo() {
  localStorage.removeItem($e);
}
var En =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/SystemLogo/index.tsx';
function vn({ profile: e, className: t, alt: s }) {
  const o = gn(e),
    r = o ? Nn(o) : bn(e);
  return r
    ? n.exports.jsxDEV(
        'img',
        { className: t, src: r, alt: s || '' },
        void 0,
        !1,
        { fileName: En, lineNumber: 27, columnNumber: 12 },
        this
      )
    : n.exports.jsxDEV(
        vo,
        {},
        void 0,
        !1,
        { fileName: En, lineNumber: 30, columnNumber: 10 },
        this
      );
}
const So = '_footer_8a7h1_26';
var Ae = {
    'message-box': '_message-box_8a7h1_1',
    'message-title': '_message-title_8a7h1_22',
    footer: So,
    'footer-item': '_footer-item_8a7h1_29',
  },
  P =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/MessageBox/list.tsx';
function Vo(e) {
  const t = Q(),
    { data: s, unReadData: o } = e;
  function r(i, c) {
    i.status || (e.onItemClick && e.onItemClick(i, c));
  }
  function a() {
    e.onAllBtnClick && e.onAllBtnClick(o, s);
  }
  return n.exports.jsxDEV(
    it,
    {
      noDataElement: n.exports.jsxDEV(
        Kt,
        { status: '404', subTitle: t['message.empty.tips'] },
        void 0,
        !1,
        { fileName: P, lineNumber: 55, columnNumber: 22 },
        this
      ),
      footer: n.exports.jsxDEV(
        'div',
        {
          className: Ae.footer,
          children: [
            n.exports.jsxDEV(
              'div',
              {
                className: Ae['footer-item'],
                children: n.exports.jsxDEV(
                  le,
                  {
                    type: 'text',
                    size: 'small',
                    onClick: a,
                    children: t['message.allRead'],
                  },
                  void 0,
                  !1,
                  { fileName: P, lineNumber: 59, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: P, lineNumber: 58, columnNumber: 11 },
              this
            ),
            n.exports.jsxDEV(
              'div',
              {
                className: Ae['footer-item'],
                children: n.exports.jsxDEV(
                  le,
                  {
                    type: 'text',
                    size: 'small',
                    children: t['message.seeMore'],
                  },
                  void 0,
                  !1,
                  { fileName: P, lineNumber: 64, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: P, lineNumber: 63, columnNumber: 11 },
              this
            ),
          ],
        },
        void 0,
        !0,
        { fileName: P, lineNumber: 57, columnNumber: 9 },
        this
      ),
      children: s.map((i, c) =>
        n.exports.jsxDEV(
          it.Item,
          {
            actionLayout: 'vertical',
            style: { opacity: i.status ? 0.5 : 1 },
            children: n.exports.jsxDEV(
              'div',
              {
                style: { cursor: 'pointer' },
                onClick: () => {
                  r(i, c);
                },
                children: n.exports.jsxDEV(
                  it.Item.Meta,
                  {
                    avatar:
                      i.avatar &&
                      n.exports.jsxDEV(
                        Gt,
                        {
                          shape: 'circle',
                          size: 36,
                          children: n.exports.jsxDEV(
                            'img',
                            { src: i.avatar },
                            void 0,
                            !1,
                            { fileName: P, lineNumber: 91, columnNumber: 21 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: P, lineNumber: 90, columnNumber: 19 },
                        this
                      ),
                    title: n.exports.jsxDEV(
                      'div',
                      {
                        className: Ae['message-title'],
                        children: [
                          n.exports.jsxDEV(
                            Wt,
                            {
                              size: 4,
                              children: [
                                n.exports.jsxDEV(
                                  'span',
                                  { children: i.title },
                                  void 0,
                                  !1,
                                  {
                                    fileName: P,
                                    lineNumber: 98,
                                    columnNumber: 21,
                                  },
                                  this
                                ),
                                n.exports.jsxDEV(
                                  Te.Text,
                                  { type: 'secondary', children: i.subTitle },
                                  void 0,
                                  !1,
                                  {
                                    fileName: P,
                                    lineNumber: 99,
                                    columnNumber: 21,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: P, lineNumber: 97, columnNumber: 19 },
                            this
                          ),
                          i.tag && i.tag.text
                            ? n.exports.jsxDEV(
                                Ns,
                                { color: i.tag.color, children: i.tag.text },
                                void 0,
                                !1,
                                {
                                  fileName: P,
                                  lineNumber: 104,
                                  columnNumber: 21,
                                },
                                this
                              )
                            : null,
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: P, lineNumber: 96, columnNumber: 17 },
                      this
                    ),
                    description: n.exports.jsxDEV(
                      'div',
                      {
                        children: [
                          n.exports.jsxDEV(
                            Te.Paragraph,
                            {
                              style: { marginBottom: 0 },
                              ellipsis: !0,
                              children: i.content,
                            },
                            void 0,
                            !1,
                            { fileName: P, lineNumber: 110, columnNumber: 19 },
                            this
                          ),
                          n.exports.jsxDEV(
                            Te.Text,
                            {
                              type: 'secondary',
                              style: { fontSize: 12 },
                              children: i.time,
                            },
                            void 0,
                            !1,
                            { fileName: P, lineNumber: 113, columnNumber: 19 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: P, lineNumber: 109, columnNumber: 17 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: P, lineNumber: 87, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: P, lineNumber: 79, columnNumber: 11 },
              this
            ),
          },
          i.id,
          !1,
          { fileName: P, lineNumber: 72, columnNumber: 9 },
          this
        )
      ),
    },
    void 0,
    !1,
    { fileName: P, lineNumber: 54, columnNumber: 5 },
    this
  );
}
var G =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/MessageBox/index.tsx';
function wo() {
  const e = Q(),
    [t, s] = u.exports.useState(!1),
    [o, r] = u.exports.useState({}),
    [a, i] = u.exports.useState([]);
  function c(N = !0) {
    N && s(!0),
      Me.get('/api/message/list')
        .then((x) => {
          i(x.data);
        })
        .finally(() => {
          N && s(!1);
        });
  }
  function f(N) {
    const x = N.map((T) => T.id);
    Me.post('/api/message/read', { ids: x }).then(() => {
      c();
    });
  }
  u.exports.useEffect(() => {
    c();
  }, []),
    u.exports.useEffect(() => {
      const N = xs(a, 'type');
      r(N);
    }, [a]);
  const v = [
    {
      key: 'message',
      title: e['message.tab.title.message'],
      titleIcon: n.exports.jsxDEV(
        Es,
        {},
        void 0,
        !1,
        { fileName: G, lineNumber: 61, columnNumber: 18 },
        this
      ),
    },
    {
      key: 'notice',
      title: e['message.tab.title.notice'],
      titleIcon: n.exports.jsxDEV(
        vs,
        {},
        void 0,
        !1,
        { fileName: G, lineNumber: 66, columnNumber: 18 },
        this
      ),
    },
    {
      key: 'todo',
      title: e['message.tab.title.todo'],
      titleIcon: n.exports.jsxDEV(
        Ds,
        {},
        void 0,
        !1,
        { fileName: G, lineNumber: 71, columnNumber: 18 },
        this
      ),
    },
  ];
  return n.exports.jsxDEV(
    'div',
    {
      className: Ae['message-box'],
      children: n.exports.jsxDEV(
        at,
        {
          loading: t,
          style: { display: 'block' },
          children: n.exports.jsxDEV(
            Yt,
            {
              overflow: 'dropdown',
              type: 'rounded',
              defaultActiveTab: 'message',
              destroyOnHide: !0,
              extra: n.exports.jsxDEV(
                le,
                {
                  type: 'text',
                  onClick: () => i([]),
                  children: e['message.empty'],
                },
                void 0,
                !1,
                { fileName: G, lineNumber: 84, columnNumber: 13 },
                this
              ),
              children: v.map((N) => {
                const { key: x, title: T } = N,
                  k = o[x] || [],
                  b = k.filter((I) => !I.status);
                return n.exports.jsxDEV(
                  Yt.TabPane,
                  {
                    title: n.exports.jsxDEV(
                      'span',
                      { children: [T, b.length ? `(${b.length})` : ''] },
                      void 0,
                      !0,
                      { fileName: G, lineNumber: 97, columnNumber: 19 },
                      this
                    ),
                    children: n.exports.jsxDEV(
                      Vo,
                      {
                        data: k,
                        unReadData: b,
                        onItemClick: (I) => {
                          f([I]);
                        },
                        onAllBtnClick: (I) => {
                          f(I);
                        },
                      },
                      void 0,
                      !1,
                      { fileName: G, lineNumber: 103, columnNumber: 17 },
                      this
                    ),
                  },
                  x,
                  !1,
                  { fileName: G, lineNumber: 94, columnNumber: 15 },
                  this
                );
              }),
            },
            void 0,
            !1,
            { fileName: G, lineNumber: 78, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: G, lineNumber: 77, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: G, lineNumber: 76, columnNumber: 5 },
    this
  );
}
function Ao({ children: e }) {
  return n.exports.jsxDEV(
    Jt,
    {
      trigger: 'hover',
      popup: () =>
        n.exports.jsxDEV(
          wo,
          {},
          void 0,
          !1,
          { fileName: G, lineNumber: 126, columnNumber: 20 },
          this
        ),
      position: 'br',
      unmountOnExit: !1,
      popupAlign: { bottom: 4 },
      children: n.exports.jsxDEV(
        bs,
        { count: 9, dot: !0, children: e },
        void 0,
        !1,
        { fileName: G, lineNumber: 131, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: G, lineNumber: 124, columnNumber: 5 },
    this
  );
}
var ko = { 'icon-button': '_icon-button_12azl_1' },
  Bo =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/NavBar/IconButton.tsx';
function Po(e, t) {
  const a = e,
    { icon: s, className: o } = a,
    r = Ie(a, ['icon', 'className']);
  return n.exports.jsxDEV(
    le,
    p(
      {
        ref: t,
        icon: s,
        shape: 'circle',
        type: 'secondary',
        className: Se(ko['icon-button'], o),
      },
      r
    ),
    void 0,
    !1,
    { fileName: Bo, lineNumber: 10, columnNumber: 5 },
    this
  );
}
var ze = u.exports.forwardRef(Po);
const Ue = 'user-profile';
function Oe(e) {
  const t =
    (e == null ? void 0 : e.tenantCode) || (e == null ? void 0 : e.code);
  return typeof t == 'string' || typeof t == 'number' ? String(t) : '';
}
function de(e = window.location.pathname) {
  const [, t] = e.split('/');
  return !t || t === 'login' || t === '403' ? '' : t;
}
function ft(e = window.location.pathname) {
  const t = de(e);
  if (!t) return e || '/';
  const s = e.replace(`/${t}`, '') || '/';
  return s.startsWith('/') ? s : `/${s}`;
}
function qe() {
  const e = localStorage.getItem(Ue);
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function dt() {
  const e = qe();
  return (
    Oe(e == null ? void 0 : e.defaultTenant) ||
    Oe(e == null ? void 0 : e.currentTenant) ||
    Oe(e)
  );
}
const Io = ['X-Organization', 'organization'];
function To() {
  if (typeof localStorage == 'undefined') return '';
  for (const e of Io) {
    const t = localStorage.getItem(e);
    if (t) return t;
  }
  return '';
}
function Dn(
  e = typeof window != 'undefined' ? window.location.pathname : '',
  t
) {
  const s = de(e);
  if (s) return s;
  const o = dt();
  if (o) return o;
  const r = To();
  if (r) return r;
  const a = t == null ? void 0 : t.currentTenant,
    i = Oe(a);
  return i || '';
}
function Mo(e, t) {
  const s = Dn(e, t);
  return s ? `/${s}` : '';
}
const ye = 'X-Access-Token',
  Ke = 'X-Organization',
  pt = 'Accept-Language',
  yn = 'zh-CN';
function Ro() {
  return localStorage.getItem(ye) || localStorage.getItem('accessToken') || '';
}
function $o() {
  return (
    de() ||
    localStorage.getItem(Ke) ||
    localStorage.getItem('organization') ||
    ''
  );
}
function Lo() {
  return localStorage.getItem(pt) || yn;
}
function zo(e) {
  return e === 200;
}
function Uo(e, t = '\u8BF7\u6C42\u5931\u8D25') {
  return (e == null ? void 0 : e.message) || t;
}
let ht = !1;
function Ge(e) {
  var t;
  return (
    (e == null ? void 0 : e.status) === 401 ||
    ((t = e == null ? void 0 : e.data) == null ? void 0 : t.code) === 401
  );
}
function Oo() {
  if (ht) return;
  (ht = !0),
    localStorage.removeItem(ye),
    localStorage.setItem('userStatus', 'logout');
  const { pathname: e } = window.location;
  e === '/login' || e.endsWith('/login')
    ? (ht = !1)
    : window.location.replace('/login');
}
function We(e) {
  (e == null ? void 0 : e.skipErrorMessage) ||
    Ee.error(
      '\u767B\u5F55\u72B6\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55'
    ),
    Oo();
}
Me.interceptors.response.use(
  (e) => (Ge(e) && We(), e),
  (e) => (Ge(e.response) && We(), Promise.reject(e))
);
function qo(e, t) {
  return Ge(e)
    ? (We(t), Promise.reject(e.data))
    : e.status === 200 && zo(e.data.code)
    ? e.data.data
    : ((t == null ? void 0 : t.skipErrorMessage) || Ee.error(Uo(e.data)),
      Promise.reject(e.data));
}
function Ko(e, t) {
  var s, o, r;
  if (Ge(e.response)) return We(t), Promise.reject(e);
  if (!(t == null ? void 0 : t.skipErrorMessage)) {
    const a =
      ((o = (s = e.response) == null ? void 0 : s.data) == null
        ? void 0
        : o.message) ||
      (((r = e.response) == null ? void 0 : r.status)
        ? `\u8BF7\u6C42\u5931\u8D25\uFF0C\u72B6\u6001\u7801\uFF1A${e.response.status}`
        : e.message ||
          '\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5');
    Ee.error(a);
  }
  return Promise.reject(e);
}
function _n(e) {
  const t = Me.create({ baseURL: '', timeout: 3e4, validateStatus: () => !0 });
  return (
    t.interceptors.request.use((s) => {
      const o = p({ [pt]: Lo() }, s.headers);
      if (e) {
        const r = Ro(),
          a = $o();
        s.headers = B(p({}, o), { [ye]: r, [Ke]: a });
      } else s.headers = o;
      return s;
    }),
    t
  );
}
function jn(e) {
  return async function (s) {
    try {
      const o = await e.request(s);
      return qo(o, s);
    } catch (o) {
      return Ko(o, s);
    }
  };
}
const ge = jn(_n(!0)),
  gt = jn(_n(!1));
function Go() {
  return ge({ url: '/api/system/user-theme', method: 'GET' });
}
function Je(e) {
  return ge({ url: '/api/system/user-theme', method: 'PATCH', data: e });
}
const Cn = 'user-theme';
function Nt() {
  return { settings: p({}, mn), theme: 'light', lang: yn };
}
function Fn(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function bt(e) {
  const t = Nt();
  if (!Fn(e)) return t;
  const s = Fn(e.settings) ? p(p({}, t.settings), e.settings) : t.settings,
    o = e.theme === 'dark' || e.theme === 'light' ? e.theme : t.theme,
    r =
      e.lang === 'zh-CN' || e.lang === 'en-US' || e.lang === 'es-ES'
        ? e.lang
        : t.lang;
  return { settings: s, theme: o, lang: r };
}
function Ye() {
  const e = localStorage.getItem(Cn);
  if (!e) return Nt();
  try {
    return bt(JSON.parse(e));
  } catch {
    return Nt();
  }
}
function _e(e) {
  const t = bt(e);
  return (
    localStorage.setItem(Cn, JSON.stringify(t)),
    localStorage.setItem('arco-theme', t.theme),
    localStorage.setItem('arco-lang', t.lang),
    localStorage.setItem(pt, t.lang),
    t
  );
}
function He(e) {
  const t = Ye();
  if (e.path.startsWith('settings.')) {
    const s = e.path.replace('settings.', '');
    t.settings = B(p({}, t.settings), { [s]: e.value });
  } else
    e.path === 'theme'
      ? (t.theme = e.value)
      : e.path === 'lang' && (t.lang = e.value);
  return _e(t);
}
const Wo = '_block_byc7u_1',
  Jo = '_title_byc7u_4';
var xt = { block: Wo, title: Jo, 'switch-wrapper': '_switch-wrapper_byc7u_9' },
  Ne =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Settings/block.tsx';
function Et(e) {
  const { title: t, options: s, children: o } = e,
    r = Q(),
    a = ve((f) => f.settings),
    i = ut();
  function c(f, v) {
    const N = `settings.${f}`;
    He({ path: N, value: v }), Je({ path: N, value: v }).catch(() => {});
  }
  return n.exports.jsxDEV(
    'div',
    {
      className: xt.block,
      children: [
        n.exports.jsxDEV(
          'h5',
          { className: xt.title, children: t },
          void 0,
          !1,
          { fileName: Ne, lineNumber: 30, columnNumber: 7 },
          this
        ),
        s &&
          s.map((f) => {
            const v = f.type || 'switch';
            return n.exports.jsxDEV(
              'div',
              {
                className: xt['switch-wrapper'],
                children: [
                  n.exports.jsxDEV(
                    'span',
                    { children: r[f.name] },
                    void 0,
                    !1,
                    { fileName: Ne, lineNumber: 37, columnNumber: 15 },
                    this
                  ),
                  v === 'switch' &&
                    n.exports.jsxDEV(
                      ys,
                      {
                        size: 'small',
                        checked: !!a[f.value],
                        onChange: (N) => {
                          const x = B(p({}, a), { [f.value]: N });
                          i({
                            type: 'update-settings',
                            payload: { settings: x },
                          }),
                            c(f.value, N),
                            N &&
                              f.value === 'colorWeek' &&
                              (document.body.style.filter = 'invert(80%)'),
                            !N &&
                              f.value === 'colorWeek' &&
                              (document.body.style.filter = 'none');
                        },
                      },
                      void 0,
                      !1,
                      { fileName: Ne, lineNumber: 39, columnNumber: 17 },
                      this
                    ),
                  v === 'number' &&
                    n.exports.jsxDEV(
                      _s,
                      {
                        style: { width: 80 },
                        size: 'small',
                        value: a.menuWidth,
                        onChange: (N) => {
                          const x = B(p({}, a), { [f.value]: N });
                          i({
                            type: 'update-settings',
                            payload: { settings: x },
                          }),
                            c(f.value, N);
                        },
                      },
                      void 0,
                      !1,
                      { fileName: Ne, lineNumber: 63, columnNumber: 17 },
                      this
                    ),
                ],
              },
              f.value,
              !0,
              { fileName: Ne, lineNumber: 36, columnNumber: 13 },
              this
            );
          }),
        o,
        n.exports.jsxDEV(
          Ht,
          {},
          void 0,
          !1,
          { fileName: Ne, lineNumber: 84, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: Ne, lineNumber: 29, columnNumber: 5 },
    this
  );
}
function Sn(e, t = 'light') {
  Xt(e, { list: !0, dark: t === 'dark' }).forEach((o, r) => {
    document.body.style.setProperty(`--arcoblue-${r + 1}`, js(o));
  });
}
function Xe(e, t) {
  e === 'dark'
    ? document.body.setAttribute('arco-theme', 'dark')
    : document.body.removeAttribute('arco-theme'),
    t && Sn(t, e);
}
const Yo = '_input_77wyg_1',
  Ho = '_color_77wyg_9',
  Xo = '_ul_77wyg_14',
  Zo = '_li_77wyg_19';
var Ze = { input: Yo, color: Ho, ul: Xo, li: Zo },
  oe =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Settings/color.tsx';
const Qo = [
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
function er() {
  const e =
      document.querySelector('body').getAttribute('arco-theme') || 'light',
    t = ve((i) => i.settings),
    s = Q(),
    o = t.themeColor,
    r = Xt(o, { list: !0 }),
    a = ut();
  return n.exports.jsxDEV(
    'div',
    {
      children: [
        n.exports.jsxDEV(
          Jt,
          {
            trigger: 'hover',
            position: 'bl',
            popup: () =>
              n.exports.jsxDEV(
                Cs,
                {
                  color: o,
                  presetColors: Qo,
                  onChangeComplete: (i) => {
                    const c = i.hex;
                    a({
                      type: 'update-settings',
                      payload: { settings: B(p({}, t), { themeColor: c }) },
                    }),
                      He({ path: 'settings.themeColor', value: c }),
                      Je({ path: 'settings.themeColor', value: c }).catch(
                        () => {}
                      ),
                      Sn(c, e);
                  },
                },
                void 0,
                !1,
                { fileName: oe, lineNumber: 47, columnNumber: 11 },
                this
              ),
            children: n.exports.jsxDEV(
              'div',
              {
                className: Ze.input,
                children: [
                  n.exports.jsxDEV(
                    'div',
                    { className: Ze.color, style: { backgroundColor: o } },
                    void 0,
                    !1,
                    { fileName: oe, lineNumber: 70, columnNumber: 11 },
                    this
                  ),
                  n.exports.jsxDEV(
                    'span',
                    { children: o },
                    void 0,
                    !1,
                    { fileName: oe, lineNumber: 74, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: oe, lineNumber: 69, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: oe, lineNumber: 43, columnNumber: 7 },
          this
        ),
        n.exports.jsxDEV(
          'ul',
          {
            className: Ze.ul,
            children: r.map((i, c) =>
              n.exports.jsxDEV(
                'li',
                { className: Ze.li, style: { backgroundColor: i } },
                c,
                !1,
                { fileName: oe, lineNumber: 79, columnNumber: 11 },
                this
              )
            ),
          },
          void 0,
          !1,
          { fileName: oe, lineNumber: 77, columnNumber: 7 },
          this
        ),
        n.exports.jsxDEV(
          Te.Paragraph,
          { style: { fontSize: 12 }, children: s['settings.color.tooltip'] },
          void 0,
          !1,
          { fileName: oe, lineNumber: 86, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: oe, lineNumber: 42, columnNumber: 5 },
    this
  );
}
var re =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Settings/index.tsx';
function Vn(e) {
  const { trigger: t } = e,
    [s, o] = u.exports.useState(!1),
    r = Q(),
    a = ve((v) => v.settings),
    { applyUserTheme: i } = u.exports.useContext(fe);
  function c() {
    o(!0),
      Go()
        .then((v) => {
          i == null || i(bt(v.config));
        })
        .catch(() => {});
  }
  function f() {
    Vs(JSON.stringify(a, null, 2)),
      Ee.success(r['settings.copySettings.message']);
  }
  return n.exports.jsxDEV(
    n.exports.Fragment,
    {
      children: [
        t
          ? Zt.cloneElement(t, { onClick: c })
          : n.exports.jsxDEV(
              ze,
              {
                icon: n.exports.jsxDEV(
                  Re,
                  {},
                  void 0,
                  !1,
                  { fileName: re, lineNumber: 47, columnNumber: 27 },
                  this
                ),
                onClick: c,
              },
              void 0,
              !1,
              { fileName: re, lineNumber: 47, columnNumber: 9 },
              this
            ),
        n.exports.jsxDEV(
          Fs,
          {
            width: 300,
            title: n.exports.jsxDEV(
              n.exports.Fragment,
              {
                children: [
                  n.exports.jsxDEV(
                    Re,
                    {},
                    void 0,
                    !1,
                    { fileName: re, lineNumber: 53, columnNumber: 13 },
                    this
                  ),
                  r['settings.title'],
                ],
              },
              void 0,
              !0
            ),
            visible: s,
            okText: r['settings.copySettings'],
            cancelText: r['settings.close'],
            onOk: f,
            onCancel: () => o(!1),
            children: [
              n.exports.jsxDEV(
                Et,
                {
                  title: r['settings.themeColor'],
                  children: n.exports.jsxDEV(
                    er,
                    {},
                    void 0,
                    !1,
                    { fileName: re, lineNumber: 64, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: re, lineNumber: 63, columnNumber: 9 },
                this
              ),
              n.exports.jsxDEV(
                Et,
                {
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
                },
                void 0,
                !1,
                { fileName: re, lineNumber: 66, columnNumber: 9 },
                this
              ),
              n.exports.jsxDEV(
                Et,
                {
                  title: r['settings.otherSettings'],
                  options: [{ name: 'settings.colorWeek', value: 'colorWeek' }],
                },
                void 0,
                !1,
                { fileName: re, lineNumber: 77, columnNumber: 9 },
                this
              ),
              n.exports.jsxDEV(
                Ss,
                { content: r['settings.alertContent'] },
                void 0,
                !1,
                { fileName: re, lineNumber: 81, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: re, lineNumber: 49, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0
  );
}
const tr = '_navbar_1nn4p_1',
  nr = '_left_1nn4p_10',
  sr = '_logo_1nn4p_15',
  or = '_center_1nn4p_35',
  rr = '_right_1nn4p_51',
  ir = '_username_1nn4p_66',
  ar = '_round_1nn4p_69';
var U = {
  navbar: tr,
  left: nr,
  logo: sr,
  'logo-image': '_logo-image_1nn4p_22',
  'logo-name': '_logo-name_1nn4p_28',
  center: or,
  right: rr,
  username: ir,
  round: ar,
  'dropdown-icon': '_dropdown-icon_1nn4p_75',
  'fixed-settings': '_fixed-settings_1nn4p_80',
};
function ur(e) {
  return Object.prototype.toString.call(e) === '[object Array]';
}
const je = (function () {
    try {
      return !(typeof window != 'undefined' && document !== void 0);
    } catch {
      return !0;
    }
  })(),
  lr = (e) => {
    if (!je) return localStorage.getItem(e);
  };
function ke(e, t) {
  const [s, o] = u.exports.useState(lr(e) || t),
    r = (i) => {
      je || (localStorage.setItem(e, i), i !== s && o(i));
    },
    a = () => {
      je || localStorage.removeItem(e);
    };
  return (
    u.exports.useEffect(() => {
      const i = localStorage.getItem(e);
      i && o(i);
    }, [e]),
    [s, r, a]
  );
}
function cr(e) {
  return gt({ url: '/api/system/users/login', method: 'POST', data: e });
}
function mr() {
  return ge({ url: '/api/system/users/logout', method: 'POST' });
}
function Qe(e) {
  return `${e}-resource`;
}
function vt(e) {
  const t = localStorage.getItem(Qe(e));
  if (!t) return null;
  try {
    return JSON.parse(t);
  } catch {
    return localStorage.removeItem(Qe(e)), null;
  }
}
function fr(e, t) {
  localStorage.setItem(Qe(e), JSON.stringify(t));
}
function dr() {
  return ge({ url: '/api/auth/context', method: 'GET' });
}
async function Dt(e) {
  const t = vt(e);
  if (t) return t;
  const s = await dr();
  return fr(e, s), s;
}
var d =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/NavBar/index.tsx';
function pr({ show: e, topMenu: t, menu: s }) {
  const o = Q(),
    r = ve((l) => l.userInfo),
    a = qe(),
    i = (a == null ? void 0 : a.avatar) || (r == null ? void 0 : r.avatar),
    [, c] = ke('userStatus'),
    [f, v] = ke('userRole', 'admin'),
    {
      setLang: N,
      lang: x,
      theme: T,
      setTheme: k,
      systemProfile: b,
    } = u.exports.useContext(fe),
    I = Le(b, x);
  function J() {
    const l = de();
    c('logout'),
      localStorage.removeItem(ye),
      localStorage.removeItem(Ke),
      localStorage.removeItem(Ue),
      l && localStorage.removeItem(Qe(l)),
      localStorage.removeItem('accessToken'),
      localStorage.removeItem('organization'),
      localStorage.removeItem('user-theme'),
      Fo();
  }
  function m() {
    mr()
      .catch(() => {})
      .finally(() => {
        J(), (window.location.href = '/login');
      });
  }
  function D(l) {
    l === 'logout' ? m() : Ee.info(`You clicked ${l}`);
  }
  if (!e)
    return n.exports.jsxDEV(
      'div',
      {
        className: U['fixed-settings'],
        children: n.exports.jsxDEV(
          Vn,
          {
            trigger: n.exports.jsxDEV(
              le,
              {
                icon: n.exports.jsxDEV(
                  Re,
                  {},
                  void 0,
                  !1,
                  { fileName: d, lineNumber: 106, columnNumber: 27 },
                  this
                ),
                type: 'primary',
                size: 'large',
              },
              void 0,
              !1,
              { fileName: d, lineNumber: 106, columnNumber: 13 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: d, lineNumber: 104, columnNumber: 9 },
          this
        ),
      },
      void 0,
      !1,
      { fileName: d, lineNumber: 103, columnNumber: 7 },
      this
    );
  const te = () => {
      v(f === 'admin' ? 'user' : 'admin');
    },
    h = n.exports.jsxDEV(
      M,
      {
        onClickMenuItem: D,
        children: [
          n.exports.jsxDEV(
            M.SubMenu,
            {
              title: n.exports.jsxDEV(
                n.exports.Fragment,
                {
                  children: [
                    n.exports.jsxDEV(
                      Qt,
                      { className: U['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: d, lineNumber: 124, columnNumber: 13 },
                      this
                    ),
                    n.exports.jsxDEV(
                      'span',
                      {
                        className: U['user-role'],
                        children:
                          f === 'admin'
                            ? o['menu.user.role.admin']
                            : o['menu.user.role.user'],
                      },
                      void 0,
                      !1,
                      { fileName: d, lineNumber: 125, columnNumber: 13 },
                      this
                    ),
                  ],
                },
                void 0,
                !0
              ),
              children: n.exports.jsxDEV(
                M.Item,
                {
                  onClick: te,
                  children: [
                    n.exports.jsxDEV(
                      ws,
                      { className: U['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: d, lineNumber: 134, columnNumber: 11 },
                      this
                    ),
                    o['menu.user.switchRoles'],
                  ],
                },
                'switch role',
                !0,
                { fileName: d, lineNumber: 133, columnNumber: 9 },
                this
              ),
            },
            'role',
            !1,
            { fileName: d, lineNumber: 120, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              children: [
                n.exports.jsxDEV(
                  Re,
                  { className: U['dropdown-icon'] },
                  void 0,
                  !1,
                  { fileName: d, lineNumber: 139, columnNumber: 9 },
                  this
                ),
                o['menu.user.setting'],
              ],
            },
            'setting',
            !0,
            { fileName: d, lineNumber: 138, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            M.SubMenu,
            {
              title: n.exports.jsxDEV(
                'div',
                {
                  style: { width: 80 },
                  children: [
                    n.exports.jsxDEV(
                      As,
                      { className: U['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: d, lineNumber: 146, columnNumber: 13 },
                      this
                    ),
                    o['message.seeMore'],
                  ],
                },
                void 0,
                !0,
                { fileName: d, lineNumber: 145, columnNumber: 11 },
                this
              ),
              children: n.exports.jsxDEV(
                M.Item,
                {
                  children: [
                    n.exports.jsxDEV(
                      ks,
                      { className: U['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: d, lineNumber: 152, columnNumber: 11 },
                      this
                    ),
                    o['menu.dashboard.workplace'],
                  ],
                },
                'workplace',
                !0,
                { fileName: d, lineNumber: 151, columnNumber: 9 },
                this
              ),
            },
            'more',
            !1,
            { fileName: d, lineNumber: 142, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            Ht,
            { style: { margin: '4px 0' } },
            void 0,
            !1,
            { fileName: d, lineNumber: 157, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              children: [
                n.exports.jsxDEV(
                  Bs,
                  { className: U['dropdown-icon'] },
                  void 0,
                  !1,
                  { fileName: d, lineNumber: 159, columnNumber: 9 },
                  this
                ),
                o['navbar.logout'],
              ],
            },
            'logout',
            !0,
            { fileName: d, lineNumber: 158, columnNumber: 7 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: d, lineNumber: 119, columnNumber: 5 },
      this
    );
  return n.exports.jsxDEV(
    'div',
    {
      className: U.navbar,
      children: [
        n.exports.jsxDEV(
          'div',
          {
            className: U.left,
            children: n.exports.jsxDEV(
              'div',
              {
                className: U.logo,
                children: [
                  n.exports.jsxDEV(
                    vn,
                    { profile: b, className: U['logo-image'], alt: I },
                    void 0,
                    !1,
                    { fileName: d, lineNumber: 169, columnNumber: 11 },
                    this
                  ),
                  n.exports.jsxDEV(
                    'div',
                    { className: U['logo-name'], children: I },
                    void 0,
                    !1,
                    { fileName: d, lineNumber: 174, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: d, lineNumber: 168, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: d, lineNumber: 167, columnNumber: 7 },
          this
        ),
        n.exports.jsxDEV(
          'div',
          { className: U.center, children: s && t },
          void 0,
          !1,
          { fileName: d, lineNumber: 177, columnNumber: 7 },
          this
        ),
        n.exports.jsxDEV(
          'ul',
          {
            className: U.right,
            children: [
              n.exports.jsxDEV(
                'li',
                {
                  children: n.exports.jsxDEV(
                    Ps,
                    {
                      triggerElement: n.exports.jsxDEV(
                        ze,
                        {
                          icon: n.exports.jsxDEV(
                            Is,
                            {},
                            void 0,
                            !1,
                            { fileName: d, lineNumber: 181, columnNumber: 47 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: d, lineNumber: 181, columnNumber: 29 },
                        this
                      ),
                      options: [
                        { label: '\u4E2D\u6587', value: 'zh-CN' },
                        { label: 'Espa\xF1a', value: 'es-ES' },
                        { label: 'English', value: 'en-US' },
                      ],
                      value: x,
                      triggerProps: {
                        autoAlignPopupWidth: !1,
                        autoAlignPopupMinWidth: !0,
                        position: 'br',
                      },
                      trigger: 'hover',
                      onChange: (l) => {
                        N(l),
                          He({ path: 'lang', value: l }),
                          Je({ path: 'lang', value: l }).catch(() => {});
                        const E = pn[l];
                        Ee.info(`${E['message.lang.tips']}${l}`);
                      },
                    },
                    void 0,
                    !1,
                    { fileName: d, lineNumber: 180, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: d, lineNumber: 179, columnNumber: 9 },
                this
              ),
              n.exports.jsxDEV(
                'li',
                {
                  children: n.exports.jsxDEV(
                    Ao,
                    {
                      children: n.exports.jsxDEV(
                        ze,
                        {
                          icon: n.exports.jsxDEV(
                            Ts,
                            {},
                            void 0,
                            !1,
                            { fileName: d, lineNumber: 207, columnNumber: 31 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: d, lineNumber: 207, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: d, lineNumber: 206, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: d, lineNumber: 205, columnNumber: 9 },
                this
              ),
              n.exports.jsxDEV(
                'li',
                {
                  children: n.exports.jsxDEV(
                    Ms,
                    {
                      content:
                        T === 'light'
                          ? o['settings.navbar.theme.toDark']
                          : o['settings.navbar.theme.toLight'],
                      children: n.exports.jsxDEV(
                        ze,
                        {
                          icon:
                            T !== 'dark'
                              ? n.exports.jsxDEV(
                                  Rs,
                                  {},
                                  void 0,
                                  !1,
                                  {
                                    fileName: d,
                                    lineNumber: 219,
                                    columnNumber: 40,
                                  },
                                  this
                                )
                              : n.exports.jsxDEV(
                                  $s,
                                  {},
                                  void 0,
                                  !1,
                                  {
                                    fileName: d,
                                    lineNumber: 219,
                                    columnNumber: 59,
                                  },
                                  this
                                ),
                          onClick: () => {
                            const l = T === 'light' ? 'dark' : 'light';
                            k(l),
                              He({ path: 'theme', value: l }),
                              Je({ path: 'theme', value: l }).catch(() => {});
                          },
                        },
                        void 0,
                        !1,
                        { fileName: d, lineNumber: 218, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: d, lineNumber: 211, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: d, lineNumber: 210, columnNumber: 9 },
                this
              ),
              n.exports.jsxDEV(
                Vn,
                {},
                void 0,
                !1,
                { fileName: d, lineNumber: 231, columnNumber: 9 },
                this
              ),
              r &&
                n.exports.jsxDEV(
                  'li',
                  {
                    children: n.exports.jsxDEV(
                      en,
                      {
                        droplist: h,
                        position: 'br',
                        children: n.exports.jsxDEV(
                          Gt,
                          {
                            size: 32,
                            style: { cursor: 'pointer' },
                            children:
                              i &&
                              n.exports.jsxDEV(
                                'img',
                                { alt: 'avatar', src: i },
                                void 0,
                                !1,
                                {
                                  fileName: d,
                                  lineNumber: 236,
                                  columnNumber: 28,
                                },
                                this
                              ),
                          },
                          void 0,
                          !1,
                          { fileName: d, lineNumber: 235, columnNumber: 15 },
                          this
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: d, lineNumber: 234, columnNumber: 13 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: d, lineNumber: 233, columnNumber: 11 },
                  this
                ),
            ],
          },
          void 0,
          !0,
          { fileName: d, lineNumber: 178, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: d, lineNumber: 166, columnNumber: 5 },
    this
  );
}
const hr = '_footer_1si67_1';
var gr = { footer: hr },
  Nr =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Footer/index.tsx';
function wn(e = {}) {
  const a = e,
    { className: t } = a,
    s = Ie(a, ['className']),
    { lang: o, systemProfile: r } = u.exports.useContext(fe);
  return n.exports.jsxDEV(
    De.Footer,
    B(p({ className: Se(gr.footer, t) }, s), { children: _o(r, o) }),
    void 0,
    !1,
    { fileName: Nr, lineNumber: 14, columnNumber: 5 },
    this
  );
}
const br = '_layout_316fi_1',
  xr = '_icon_316fi_86',
  Er = '_spin_316fi_111';
var O = {
    layout: br,
    'layout-navbar': '_layout-navbar_316fi_5',
    'layout-navbar-hidden': '_layout-navbar-hidden_316fi_13',
    'layout-sider': '_layout-sider_316fi_16',
    'collapse-btn': '_collapse-btn_316fi_50',
    'menu-wrapper': '_menu-wrapper_316fi_67',
    icon: xr,
    'icon-empty': '_icon-empty_316fi_90',
    'layout-content': '_layout-content_316fi_95',
    'layout-content-wrapper': '_layout-content-wrapper_316fi_102',
    'layout-content-wrapper-with-tab':
      '_layout-content-wrapper-with-tab_316fi_105',
    'layout-breadcrumb': '_layout-breadcrumb_316fi_108',
    spin: Er,
  },
  An = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/utils/routeIcon.tsx';
function vr(e) {
  if (!e) return '';
  if (e.startsWith('Icon')) return e;
  const t = e
    .replace(/^icon[-_]?/i, '')
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
  return t ? `Icon${t}` : '';
}
function kn(e, t) {
  const o = Ls[vr(t || e)];
  return o
    ? n.exports.jsxDEV(
        o,
        { className: O.icon },
        void 0,
        !1,
        { fileName: An, lineNumber: 31, columnNumber: 5 },
        this
      )
    : n.exports.jsxDEV(
        'div',
        { className: O['icon-empty'] },
        void 0,
        !1,
        { fileName: An, lineNumber: 33, columnNumber: 5 },
        this
      );
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
  },
  _ =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/TabBar/index.tsx';
const ee = {
  Reload: 'reload',
  Current: 'current',
  Left: 'left',
  Right: 'right',
  Others: 'others',
  All: 'all',
};
function Bn(e, t) {
  const s = ft(e);
  return t.find((o) => s === `/${o.key}`);
}
function Pn(e, t, s) {
  const o = Bn(e, s);
  if (!o) return null;
  const r = ft(e);
  return {
    title: o.name,
    name: r.replace(/^\//, ''),
    path: e,
    fullPath: `${e}${t || ''}`,
  };
}
function Dr({
  defaultTab: e,
  tabList: t,
  routes: s,
  offsetTop: o = 0,
  onTabsChange: r,
  onCloseTabs: a,
  onReload: i,
}) {
  const c = lt(),
    f = tn(),
    v = Q(),
    N = `${f.pathname}${f.search || ''}`;
  function x(h) {
    return Bn(h.path, s);
  }
  function T(h) {
    const l = x(h),
      E = (l == null ? void 0 : l.name) || h.title;
    return v[E] || E;
  }
  function k(h) {
    const l = x(h);
    return kn(
      (l == null ? void 0 : l.key) || h.name,
      l == null ? void 0 : l.icon
    );
  }
  function b(h) {
    h.fullPath !== N && c.push(h.fullPath);
  }
  function I(h, l) {
    if (l === 0) return;
    const E = t.filter((Y, H) => H !== l);
    if ((a == null || a([h]), r(E), h.fullPath === N)) {
      const Y = E[l - 1] || E[0];
      c.push(Y.fullPath);
    }
  }
  function J(h = t) {
    return h.findIndex((l) => l.fullPath === N);
  }
  function m(h, l) {
    l.length && (a == null || a(l)), r(h);
  }
  function D(h, l, E) {
    const Y = J();
    if (h === ee.Current) {
      I(l, E);
      return;
    }
    if (h === ee.Left) {
      const R = t.filter((j, F) => F === 0 || F >= E),
        S = t.filter((j, F) => F > 0 && F < E);
      m(R, S), Y > 0 && Y < E && c.push(l.fullPath);
      return;
    }
    if (h === ee.Right) {
      const R = t.filter((j, F) => F <= E),
        S = t.filter((j, F) => F > E);
      m(R, S), Y > E && c.push(l.fullPath);
      return;
    }
    if (h === ee.Others) {
      const R = t.filter((j, F) => F === 0 || F === E),
        S = t.filter((j, F) => F !== 0 && F !== E);
      m(R, S), c.push(l.fullPath);
      return;
    }
    if (h === ee.Reload) {
      i == null || i(l);
      return;
    }
    const H = t.filter((R, S) => S !== 0);
    m([e], H), c.push(e.fullPath);
  }
  function te(h, l) {
    const E = h.fullPath !== N,
      Y = l === 0,
      H = l <= 1,
      R = l === t.length - 1;
    return n.exports.jsxDEV(
      M,
      {
        onClickMenuItem: (S) => D(S, h, l),
        children: [
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: E,
              children: [
                n.exports.jsxDEV(
                  Us,
                  {},
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 182, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: L['dropdown-label'],
                    children: '\u91CD\u65B0\u52A0\u8F7D',
                  },
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 183, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.Reload,
            !0,
            { fileName: _, lineNumber: 181, columnNumber: 9 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: Y,
              className: L['separate-line'],
              children: [
                n.exports.jsxDEV(
                  nn,
                  {},
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 190, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: L['dropdown-label'],
                    children: '\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 191, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.Current,
            !0,
            { fileName: _, lineNumber: 185, columnNumber: 9 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: H,
              children: [
                n.exports.jsxDEV(
                  Os,
                  {},
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 194, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: L['dropdown-label'],
                    children: '\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 195, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.Left,
            !0,
            { fileName: _, lineNumber: 193, columnNumber: 9 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: R,
              className: L['separate-line'],
              children: [
                n.exports.jsxDEV(
                  qs,
                  {},
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 202, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: L['dropdown-label'],
                    children: '\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 203, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.Right,
            !0,
            { fileName: _, lineNumber: 197, columnNumber: 9 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: t.length <= 2 && l !== 0,
              children: [
                n.exports.jsxDEV(
                  Ks,
                  {},
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 209, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: L['dropdown-label'],
                    children: '\u5173\u95ED\u5176\u5B83\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 210, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.Others,
            !0,
            { fileName: _, lineNumber: 205, columnNumber: 9 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: t.length <= 1,
              children: [
                n.exports.jsxDEV(
                  Gs,
                  {},
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 213, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: L['dropdown-label'],
                    children: '\u5173\u95ED\u5168\u90E8\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 214, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.All,
            !0,
            { fileName: _, lineNumber: 212, columnNumber: 9 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: _, lineNumber: 180, columnNumber: 7 },
      this
    );
  }
  return n.exports.jsxDEV(
    'div',
    {
      className: L['tab-bar-container'],
      children: n.exports.jsxDEV(
        zs,
        {
          offsetTop: o,
          children: n.exports.jsxDEV(
            'div',
            {
              className: L['tab-bar-box'],
              children: [
                n.exports.jsxDEV(
                  'div',
                  {
                    className: L['tab-bar-scroll'],
                    children: n.exports.jsxDEV(
                      'div',
                      {
                        className: L['tags-wrap'],
                        children: t.map((h, l) =>
                          n.exports.jsxDEV(
                            en,
                            {
                              droplist: te(h, l),
                              trigger: 'contextMenu',
                              position: 'bl',
                              children: n.exports.jsxDEV(
                                'span',
                                {
                                  className: Se(
                                    'arco-tag arco-tag-size-medium arco-tag-checked',
                                    L['tab-tag'],
                                    { [L['link-activated']]: h.fullPath === N }
                                  ),
                                  onClick: () => b(h),
                                  children: [
                                    n.exports.jsxDEV(
                                      'span',
                                      {
                                        className: L['tag-link'],
                                        children: [k(h), T(h)],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: _,
                                        lineNumber: 244,
                                        columnNumber: 21,
                                      },
                                      this
                                    ),
                                    l !== 0 &&
                                      n.exports.jsxDEV(
                                        'span',
                                        {
                                          className:
                                            'arco-icon-hover arco-tag-icon-hover arco-icon-hover-size-medium arco-tag-close-btn',
                                          onClick: (E) => {
                                            E.stopPropagation(), I(h, l);
                                          },
                                          children: n.exports.jsxDEV(
                                            nn,
                                            {},
                                            void 0,
                                            !1,
                                            {
                                              fileName: _,
                                              lineNumber: 256,
                                              columnNumber: 25,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: _,
                                          lineNumber: 249,
                                          columnNumber: 23,
                                        },
                                        this
                                      ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName: _,
                                  lineNumber: 233,
                                  columnNumber: 19,
                                },
                                this
                              ),
                            },
                            h.fullPath,
                            !1,
                            { fileName: _, lineNumber: 227, columnNumber: 17 },
                            this
                          )
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: _, lineNumber: 225, columnNumber: 13 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 224, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'div',
                  { className: L['tag-bar-operation'] },
                  void 0,
                  !1,
                  { fileName: _, lineNumber: 264, columnNumber: 11 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: _, lineNumber: 223, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: _, lineNumber: 222, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: _, lineNumber: 221, columnNumber: 5 },
    this
  );
}
const yr = 'marketing:tabs';
function In(e) {
  return encodeURIComponent(String(e || 'unknown'));
}
function yt(e, t) {
  if (!!e)
    for (const s of t) {
      const o = e[s];
      if (typeof o == 'string' || typeof o == 'number') return o;
    }
}
function _r(e) {
  const t = e == null ? void 0 : e.currentTenant,
    s = e == null ? void 0 : e.defaultTenant;
  return {
    tenantCode:
      yt(t, ['tenantCode', 'code', 'tenantId', 'id']) ||
      yt(e || void 0, ['tenantCode', 'tenantId']) ||
      yt(s, ['tenantCode', 'code', 'tenantId', 'id']),
  };
}
function Tn(e) {
  return `${yr}:${In(e.tenantCode)}`;
}
function et(e, t) {
  return `${In(e.tenantCode)}:${encodeURIComponent(t)}`;
}
function jr(e) {
  try {
    const t = sessionStorage.getItem(Tn(e));
    if (!t) return null;
    const s = JSON.parse(t);
    return Array.isArray(s)
      ? s.filter(
          (o) =>
            o &&
            typeof o.title == 'string' &&
            typeof o.name == 'string' &&
            typeof o.path == 'string' &&
            typeof o.fullPath == 'string'
        )
      : null;
  } catch {
    return null;
  }
}
function Cr(e, t) {
  try {
    sessionStorage.setItem(Tn(e), JSON.stringify(t));
  } catch {}
}
function Fr(e, t) {
  if (!t || de(e.path)) return e;
  const s = `/${t}`.replace(/\/$/, ''),
    o = e.path.startsWith('/') ? e.path : `/${e.path}`,
    r = `${s}${o}`.replace(/\/+/g, '/'),
    a = e.fullPath.indexOf('?'),
    i = a >= 0 ? e.fullPath.slice(a) : '';
  return B(p({}, e), { path: r, fullPath: `${r}${i}` });
}
function Sr(e, t) {
  return !t || !e.length ? e : e.map((s) => Fr(s, t));
}
var _t =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/KeepAliveRoute/index.tsx';
function Vr(a) {
  var i = a,
    { identity: e, component: t, render: s, children: o } = i,
    r = Ie(i, ['identity', 'component', 'render', 'children']);
  return n.exports.jsxDEV(
    ce,
    B(p({}, r), {
      render: (c) => {
        const f = `${c.location.pathname}${c.location.search || ''}`,
          v = et(e, f),
          N = t;
        return n.exports.jsxDEV(
          Ws,
          {
            id: v,
            name: v,
            saveScrollPosition: 'screen',
            children: N
              ? n.exports.jsxDEV(
                  N,
                  p({}, c),
                  void 0,
                  !1,
                  { fileName: _t, lineNumber: 32, columnNumber: 15 },
                  this
                )
              : s
              ? s(c)
              : o,
          },
          void 0,
          !1,
          { fileName: _t, lineNumber: 30, columnNumber: 11 },
          this
        );
      },
    }),
    void 0,
    !1,
    { fileName: _t, lineNumber: 18, columnNumber: 5 },
    this
  );
}
const Mn = (e, t) =>
    !t || !t.length
      ? !1
      : t.join('') === '*'
      ? !0
      : e.every((s) => t.includes(s)),
  wr = (e, t) => {
    const { resource: s, actions: o = [] } = e;
    if (Array.isArray(t))
      return s instanceof RegExp
        ? t.some((a) => s.test(a))
        : o.length
        ? o.some((a) => t.includes(`${s}:${a}`))
        : t.includes(s);
    if (s instanceof RegExp) {
      const i = Object.keys(t).filter((c) => c.match(s));
      return i.length
        ? i.every((c) => {
            const f = t[c];
            return Mn(o, f);
          })
        : !1;
    }
    const r = t[s];
    return Mn(o, r);
  };
var Ar = (e, t) => {
  const { requiredPermissions: s, oneOfPerm: o } = e;
  if (Array.isArray(s) && s.length) {
    let r = 0;
    for (const a of s) wr(a, t) && r++;
    return o ? r > 0 : r === s.length;
  }
  return !0;
};
const tt = [
  {
    name: 'menu.dashboard',
    key: 'dashboard',
    children: [
      { name: 'menu.dashboard.workplace', key: 'dashboard/workplace' },
    ],
  },
  { name: 'Example', key: 'example' },
];
function jt(e) {
  return (e || '').replace(/^\/+/, '').replace(/\/+$/, '');
}
function Rn(e) {
  return jt(e.routerPath || e.resourcePath || e.resourceCode);
}
function kr(e, t = 'zh-CN') {
  var s, o;
  return (
    ((s = e.resourceNames) == null ? void 0 : s[t]) ||
    ((o = e.resourceNames) == null ? void 0 : o['zh-CN']) ||
    e.resourceName ||
    e.resourceCode ||
    Rn(e)
  );
}
function Ct(e = [], t = 'zh-CN') {
  return e
    .slice()
    .sort((s, o) => (s.sortOrder || 0) - (o.sortOrder || 0))
    .map((s) => {
      const o = Ct(s.children || [], t),
        r = {
          name: kr(s, t),
          resourceNames: s.resourceNames,
          key: Rn(s),
          path: s.routerPath || s.resourcePath,
          icon: s.resourceIcon,
          children: o.length ? o : void 0,
          menuType: s.menuType,
          useIndex: s.useIndex,
        };
      return (
        r.key === 'dashboard' && !r.children && (r.children = tt[0].children), r
      );
    })
    .filter((s) => s.key);
}
function $n(e, t = 'zh-CN') {
  if (!e) return tt;
  const s = vt(e);
  if (!s) return tt;
  const o = Ct((s == null ? void 0 : s.menus) || [], t);
  return o.length ? o : [];
}
function Ln(e) {
  return e.menuType || '';
}
function Br(e) {
  const t = e.useIndex;
  return typeof t == 'number' ? t : 0;
}
function zn(e) {
  if (e.key !== void 0) {
    const s = e;
    return jt(s.path || s.key);
  }
  const t = e;
  return jt(t.routerPath || t.resourcePath || t.resourceCode);
}
function Un(e) {
  const t = e.children;
  return Array.isArray(t) ? t : [];
}
function On(e = []) {
  for (const t of e) {
    if (Br(t) === 1 && Ln(t).toUpperCase() === 'MENU') {
      const o = zn(t);
      if (o) return o;
    }
    const s = Un(t);
    if (s.length) {
      const o = On(s);
      if (o) return o;
    }
  }
  return '';
}
function qn(e = []) {
  for (const t of e) {
    const s = Un(t);
    if (s.length) {
      const o = qn(s);
      if (o) return o;
    }
    if (Ln(t).toUpperCase() === 'MENU') {
      const o = zn(t);
      if (o) return o;
    }
  }
  return '';
}
function Kn(e = []) {
  return On(e) || qn(e);
}
const Pr = (e) => {
    const t = e === 'admin' ? ['*'] : ['read'],
      s = {};
    return (
      tt.forEach((o) => {
        o.children &&
          o.children.forEach((r) => {
            s[r.name] = t;
          });
      }),
      s
    );
  },
  Ft = (e, t, s = []) => {
    if (!e.length) return [];
    for (const o of e) {
      const { requiredPermissions: r, oneOfPerm: a } = o;
      let i = !0;
      if ((r && (i = Ar({ requiredPermissions: r, oneOfPerm: a }, t)), !!i))
        if (o.children && o.children.length) {
          const c = B(p({}, o), { children: [] });
          Ft(o.children, t, c.children), c.children.length && s.push(c);
        } else s.push(p({}, o));
    }
    return s;
  },
  Ir = (e, t) => {
    const { lang: s = 'zh-CN' } = u.exports.useContext(fe),
      [o, r] = u.exports.useState(() => $n(t, s)),
      [a, i] = u.exports.useState(!1),
      c = u.exports.useMemo(() => JSON.stringify(e || {}), [e]);
    u.exports.useEffect(() => {
      let v = !1;
      async function N() {
        const x = $n(t, s);
        if ((r(Ft(x, e)), !(!t || vt(t)))) {
          i(!0);
          try {
            const T = await Dt(t);
            if (v) return;
            const k = Ct(T.menus || [], s);
            r(Ft(k, e));
          } finally {
            v || i(!1);
          }
        }
      }
      return (
        N(),
        () => {
          v = !0;
        }
      );
    }, [s, c, t, e]);
    const f = u.exports.useMemo(() => Kn(o), [o]);
    return [o, f, a];
  };
function Tr() {
  const e = sn.parseUrl(je ? '' : window.location.href).query,
    t = {};
  return (
    Object.keys(e).forEach((s) => {
      e[s] === 'true' && (t[s] = !0), e[s] === 'false' && (t[s] = !1);
    }),
    t
  );
}
var Gn = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/utils/lazyload.tsx';
function Mr(e, t) {
  const s = Js(e, t);
  return (s.preload = e.requireAsync || e), s;
}
function Rr(e) {
  return e.error
    ? (console.error(e.error), null)
    : n.exports.jsxDEV(
        'div',
        {
          className: O.spin,
          children: n.exports.jsxDEV(
            at,
            {},
            void 0,
            !1,
            { fileName: Gn, lineNumber: 26, columnNumber: 7 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: Gn, lineNumber: 25, columnNumber: 5 },
        this
      );
}
var Wn = (e) =>
    Mr(e, { fallback: Rr({ pastDelay: !0, error: !1, timedOut: !1 }) }),
  C = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/layout.tsx';
const $r = M.Item,
  Lr = M.SubMenu,
  zr = De.Sider,
  Ur = De.Content,
  Or = {
    './pages/example/index.tsx': () =>
      $(
        () => import('./index.0a8b9fac.js'),
        [
          'assets/index.0a8b9fac.js',
          'assets/index.e7a6af1d.css',
          'assets/vendor.5abf864c.js',
          'assets/vendor.503ea215.css',
        ]
      ),
    './pages/login/banner.tsx': () =>
      $(
        () =>
          Promise.resolve().then(function () {
            return ni;
          }),
        void 0
      ),
    './pages/login/form.tsx': () =>
      $(
        () =>
          Promise.resolve().then(function () {
            return ti;
          }),
        void 0
      ),
    './pages/login/index.tsx': () =>
      $(
        () =>
          Promise.resolve().then(function () {
            return si;
          }),
        void 0
      ),
    './pages/dashboard/workplace/announcement.tsx': () =>
      $(
        () => import('./announcement.d13ef075.js'),
        [
          'assets/announcement.d13ef075.js',
          'assets/announcement.4446c828.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.5abf864c.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/carousel.tsx': () =>
      $(
        () => import('./carousel.39c26bab.js'),
        [
          'assets/carousel.39c26bab.js',
          'assets/vendor.5abf864c.js',
          'assets/vendor.503ea215.css',
        ]
      ),
    './pages/dashboard/workplace/content-percentage.tsx': () =>
      $(
        () => import('./content-percentage.69f8d63e.js'),
        [
          'assets/content-percentage.69f8d63e.js',
          'assets/index.e7a6af1d.css',
          'assets/vendor.5abf864c.js',
          'assets/vendor.503ea215.css',
          'assets/index.3e220579.js',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/docs.tsx': () =>
      $(
        () => import('./docs.675694c5.js'),
        [
          'assets/docs.675694c5.js',
          'assets/docs.e521c9d6.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.5abf864c.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/index.tsx': () =>
      $(
        () => import('./index.34f74530.js'),
        [
          'assets/index.34f74530.js',
          'assets/index.0a453fe0.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/index.eccebd16.css',
          'assets/vendor.5abf864c.js',
          'assets/vendor.503ea215.css',
          'assets/overview.cd812d6f.js',
          'assets/overview.65964fa4.css',
          'assets/index.3e220579.js',
          'assets/index.9464998a.js',
          'assets/popular-contents.d6523ab0.js',
          'assets/popular-contents.83853e81.css',
          'assets/content-percentage.69f8d63e.js',
          'assets/shortcuts.ac91458d.js',
          'assets/shortcuts.0626e3d2.css',
          'assets/announcement.d13ef075.js',
          'assets/announcement.4446c828.css',
          'assets/carousel.39c26bab.js',
          'assets/docs.675694c5.js',
          'assets/docs.e521c9d6.css',
        ]
      ),
    './pages/dashboard/workplace/overview.tsx': () =>
      $(
        () => import('./overview.cd812d6f.js'),
        [
          'assets/overview.cd812d6f.js',
          'assets/overview.65964fa4.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.5abf864c.js',
          'assets/vendor.503ea215.css',
          'assets/index.3e220579.js',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/popular-contents.tsx': () =>
      $(
        () => import('./popular-contents.d6523ab0.js'),
        [
          'assets/popular-contents.d6523ab0.js',
          'assets/popular-contents.83853e81.css',
          'assets/index.eccebd16.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.5abf864c.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/shortcuts.tsx': () =>
      $(
        () => import('./shortcuts.ac91458d.js'),
        [
          'assets/shortcuts.ac91458d.js',
          'assets/shortcuts.0626e3d2.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.5abf864c.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/exception/403/index.tsx': () =>
      $(
        () =>
          Promise.resolve().then(function () {
            return wt;
          }),
        void 0
      ),
    './pages/system/setting/index.tsx': () =>
      $(
        () => import('./index.9f670c43.js'),
        [
          'assets/index.9f670c43.js',
          'assets/index.9fd0f389.css',
          'assets/index.eccebd16.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.5abf864c.js',
          'assets/vendor.503ea215.css',
        ]
      ),
  },
  Jn = new Map();
function qr(e) {
  const t = Jn.get(e);
  if (t) return t;
  const s =
      Or[`./pages/${e}/index.tsx`] ||
      (() =>
        $(
          () =>
            Promise.resolve().then(function () {
              return wt;
            }),
          void 0
        )),
    o = Wn(s);
  return Jn.set(e, o), o;
}
function Kr(e) {
  const t = [];
  function s(o) {
    o.forEach((r) => {
      r.key && !r.children
        ? t.push(B(p({}, r), { component: qr(r.key) }))
        : ur(r.children) && r.children.length && s(r.children);
    });
  }
  return s(e), t;
}
function Gr() {
  const e = Tr(),
    t = lt(),
    s = tn(),
    { dropScope: o, refreshScope: r } = on.exports.useAliveController(),
    a = s.pathname,
    i = de(a),
    c = i ? `/${i}` : '',
    f = ft(a),
    v = sn.parseUrl(f).url.slice(1),
    N = Q(),
    { settings: x, userLoading: T, userInfo: k } = ve((g) => g),
    b = u.exports.useMemo(
      () => ({ tenantCode: i || _r(k).tenantCode }),
      [i, k]
    ),
    I = u.exports.useMemo(() => b.tenantCode || 'unknown', [b.tenantCode]),
    [J, m, D] = Ir(k == null ? void 0 : k.permissions, i),
    te = [v || m],
    h = (v || m).split('/'),
    l = h.slice(0, h.length - 1),
    [E, Y] = u.exports.useState([]),
    [H, R] = u.exports.useState(!1),
    [S, j] = u.exports.useState(te),
    [F, ie] = u.exports.useState(l),
    [X, ae] = u.exports.useState([]),
    pe = u.exports.useRef(new Map()),
    ot = u.exports.useRef(new Map()),
    At = 60,
    kt = H ? 48 : x.menuWidth,
    Be = x.navbar && e.navbar !== !1,
    Bt = x.menu && e.menu !== !1,
    be = Bt && x.topMenu,
    Pt = Bt && !be,
    ne = x.tabBar && e.tabBar !== !1,
    ts = x.footer && e.footer !== !1,
    he = u.exports.useMemo(() => Kr(J) || [], [J]),
    It = u.exports.useMemo(() => Mo(a, k), [a, k]),
    q = u.exports.useMemo(() => {
      if (!m) return null;
      const y = `${It.replace(/\/$/, '')}/${m}`.replace(/\/+/g, '/');
      return Pn(y, '', he) || { title: m, name: m, path: y, fullPath: y };
    }, [m, he, It]),
    xe = u.exports.useMemo(
      () => Pn(s.pathname, s.search, he),
      [he, s.pathname, s.search]
    );
  u.exports.useEffect(() => {
    if (!m || !ne || !q) return;
    const g = Dn(a, k),
      y = jr(b),
      z = (y == null ? void 0 : y.length) ? Sr(y, g) : null;
    ae((z == null ? void 0 : z.length) ? z : [q]);
  }, [m, q, I, a, ne, b, k]),
    u.exports.useEffect(() => {
      if (ne || !X.length) return;
      const g = `${s.pathname}${s.search || ''}`;
      X.forEach((y) => {
        y.fullPath !== g && o(et(b, y.fullPath));
      });
    }, [o, s.pathname, s.search, ne, b, X]),
    u.exports.useEffect(() => {
      if (i) return;
      const g = dt();
      t.replace(g ? `/${g}${a}` : '/403');
    }, [t, a, i]),
    u.exports.useEffect(() => {
      !xe ||
        ae((g) => {
          if (!ne) return [xe];
          const y = q ? [q] : [],
            z = g.length ? g : y;
          return z.length
            ? z.some((ue) => ue.fullPath === xe.fullPath)
              ? z
              : [...z, xe]
            : [xe];
        });
    }, [xe, q, ne]),
    u.exports.useEffect(() => {
      !X.length || Cr(b, ne ? X : X.slice(-1));
    }, [I, ne, b, X]);
  const ns = u.exports.useCallback(
      (g) => {
        if (g.length) {
          ae(g);
          return;
        }
        ae(q ? [q] : []);
      },
      [q]
    ),
    ss = u.exports.useCallback(
      (g) => {
        g.forEach((y) => {
          o(et(b, y.fullPath));
        });
      },
      [o, b]
    ),
    os = u.exports.useCallback(
      (g) => {
        r(et(b, g.fullPath));
      },
      [r, b]
    );
  function rs(g) {
    const y = he.find((K) => K.key === g),
      ue = y.component.preload();
    ln.start(),
      ue.then(() => {
        t.push(y.path ? `${c}${y.path}` : `${c}/${g}`), ln.done();
      });
  }
  function is() {
    R((g) => !g);
  }
  const as = Pt ? { paddingLeft: kt } : {},
    Tt = Be ? { paddingTop: At } : {},
    us = p(p({}, as), Tt),
    Mt = n.exports.jsxDEV(
      M,
      {
        mode: be ? 'horizontal' : 'vertical',
        collapse: !be && H,
        onClickMenuItem: rs,
        selectedKeys: S,
        openKeys: be ? void 0 : F,
        onClickSubMenu: (g, y) => {
          be || ie(y);
        },
        children: ls(N)(J, 1),
      },
      void 0,
      !1,
      { fileName: C, lineNumber: 309, columnNumber: 5 },
      this
    );
  function ls(g) {
    return (
      pe.current.clear(),
      function y(z, ue, K = []) {
        return z.map((w) => {
          const { breadcrumb: cs = !0, ignore: ms } = w,
            fs = kn(w.key, w.icon),
            $t = n.exports.jsxDEV(
              n.exports.Fragment,
              { children: [fs, ' ', g[w.name] || w.name] },
              void 0,
              !0
            );
          pe.current.set(`/${w.key}`, cs ? [...K, w.name] : []);
          const Lt = (w.children || []).filter((rt) => {
            const { ignore: zt, breadcrumb: ds = !0 } = rt;
            return (
              (zt || w.ignore) &&
                pe.current.set(`/${rt.key}`, ds ? [...K, w.name, rt.name] : []),
              !zt
            );
          });
          return ms
            ? ''
            : Lt.length
            ? (ot.current.set(w.key, { subMenu: !0 }),
              n.exports.jsxDEV(
                Lr,
                { title: $t, children: y(Lt, ue + 1, [...K, w.name]) },
                w.key,
                !1,
                { fileName: C, lineNumber: 360, columnNumber: 13 },
                this
              ))
            : (ot.current.set(w.key, { menuItem: !0 }),
              n.exports.jsxDEV(
                $r,
                { children: $t },
                w.key,
                !1,
                { fileName: C, lineNumber: 366, columnNumber: 16 },
                this
              ));
        });
      }
    );
  }
  const Rt = u.exports.useCallback(() => {
    const g = f.split('/'),
      y = [],
      z = [];
    for (; g.length > 0; ) {
      const K = g.join('/').replace(/^\//, ''),
        w = ot.current.get(K);
      w && w.menuItem && y.push(K), w && w.subMenu && z.push(K), g.pop();
    }
    j(y),
      ie((ue) => {
        const K = [...ue];
        return (
          z.forEach((w) => {
            K.includes(w) || K.push(w);
          }),
          K
        );
      });
  }, [f]);
  return (
    u.exports.useEffect(() => {
      const g = pe.current.get(f);
      Y(g || []), Rt();
    }, [f, Rt]),
    n.exports.jsxDEV(
      De,
      {
        className: O.layout,
        children: [
          n.exports.jsxDEV(
            'div',
            {
              className: Se(O['layout-navbar'], {
                [O['layout-navbar-hidden']]: !Be,
              }),
              children: n.exports.jsxDEV(
                pr,
                { show: Be, menu: be, topMenu: Mt },
                void 0,
                !1,
                { fileName: C, lineNumber: 411, columnNumber: 9 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: C, lineNumber: 406, columnNumber: 7 },
            this
          ),
          T || D
            ? n.exports.jsxDEV(
                at,
                { className: O.spin },
                void 0,
                !1,
                { fileName: C, lineNumber: 414, columnNumber: 9 },
                this
              )
            : n.exports.jsxDEV(
                De,
                {
                  children: [
                    Pt &&
                      n.exports.jsxDEV(
                        zr,
                        {
                          className: O['layout-sider'],
                          width: kt,
                          collapsed: H,
                          onCollapse: R,
                          trigger: null,
                          collapsible: !0,
                          breakpoint: 'xl',
                          style: Tt,
                          children: [
                            n.exports.jsxDEV(
                              'div',
                              { className: O['menu-wrapper'], children: Mt },
                              void 0,
                              !1,
                              {
                                fileName: C,
                                lineNumber: 428,
                                columnNumber: 15,
                              },
                              this
                            ),
                            n.exports.jsxDEV(
                              'div',
                              {
                                className: O['collapse-btn'],
                                onClick: is,
                                children: H
                                  ? n.exports.jsxDEV(
                                      Ys,
                                      {},
                                      void 0,
                                      !1,
                                      {
                                        fileName: C,
                                        lineNumber: 430,
                                        columnNumber: 30,
                                      },
                                      this
                                    )
                                  : n.exports.jsxDEV(
                                      Hs,
                                      {},
                                      void 0,
                                      !1,
                                      {
                                        fileName: C,
                                        lineNumber: 430,
                                        columnNumber: 51,
                                      },
                                      this
                                    ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: C,
                                lineNumber: 429,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: C, lineNumber: 418, columnNumber: 13 },
                        this
                      ),
                    n.exports.jsxDEV(
                      De,
                      {
                        className: O['layout-content'],
                        style: us,
                        children: [
                          ne &&
                            q &&
                            n.exports.jsxDEV(
                              Dr,
                              {
                                defaultTab: q,
                                tabList: X.length ? X : [q],
                                routes: he,
                                offsetTop: Be ? At : 0,
                                onTabsChange: ns,
                                onCloseTabs: ss,
                                onReload: os,
                              },
                              void 0,
                              !1,
                              {
                                fileName: C,
                                lineNumber: 436,
                                columnNumber: 15,
                              },
                              this
                            ),
                          n.exports.jsxDEV(
                            'div',
                            {
                              className: Se(O['layout-content-wrapper'], {
                                [O['layout-content-wrapper-with-tab']]:
                                  ne && !!q,
                              }),
                              children: [
                                !!E.length &&
                                  n.exports.jsxDEV(
                                    'div',
                                    {
                                      className: O['layout-breadcrumb'],
                                      children: n.exports.jsxDEV(
                                        rn,
                                        {
                                          children: E.map((g, y) =>
                                            n.exports.jsxDEV(
                                              rn.Item,
                                              {
                                                children:
                                                  (typeof g == 'string' &&
                                                    N[g]) ||
                                                  g,
                                              },
                                              y,
                                              !1,
                                              {
                                                fileName: C,
                                                lineNumber: 456,
                                                columnNumber: 23,
                                              },
                                              this
                                            )
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: C,
                                          lineNumber: 454,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: C,
                                      lineNumber: 453,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                n.exports.jsxDEV(
                                  Ur,
                                  {
                                    children: n.exports.jsxDEV(
                                      an,
                                      {
                                        children: [
                                          he.map((g, y) =>
                                            n.exports.jsxDEV(
                                              Vr,
                                              {
                                                path: `${c}/${g.key}`,
                                                component: g.component,
                                                identity: b,
                                              },
                                              y,
                                              !1,
                                              {
                                                fileName: C,
                                                lineNumber: 467,
                                                columnNumber: 23,
                                              },
                                              this
                                            )
                                          ),
                                          n.exports.jsxDEV(
                                            ce,
                                            {
                                              exact: !0,
                                              path: c || '/',
                                              children: m
                                                ? n.exports.jsxDEV(
                                                    un,
                                                    { to: `${c}/${m}` },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: C,
                                                      lineNumber: 477,
                                                      columnNumber: 23,
                                                    },
                                                    this
                                                  )
                                                : n.exports.jsxDEV(
                                                    un,
                                                    {
                                                      to: c
                                                        ? `${c}/403`
                                                        : '/403',
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: C,
                                                      lineNumber: 479,
                                                      columnNumber: 23,
                                                    },
                                                    this
                                                  ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: C,
                                              lineNumber: 475,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                          n.exports.jsxDEV(
                                            ce,
                                            {
                                              path: '*',
                                              component: Wn(() =>
                                                $(
                                                  () =>
                                                    Promise.resolve().then(
                                                      function () {
                                                        return wt;
                                                      }
                                                    ),
                                                  void 0
                                                )
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: C,
                                              lineNumber: 484,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: C,
                                        lineNumber: 464,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: C,
                                    lineNumber: 463,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: C, lineNumber: 446, columnNumber: 13 },
                            this
                          ),
                          ts &&
                            n.exports.jsxDEV(
                              wn,
                              {},
                              void 0,
                              !1,
                              {
                                fileName: C,
                                lineNumber: 491,
                                columnNumber: 28,
                              },
                              this
                            ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: C, lineNumber: 434, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: C, lineNumber: 416, columnNumber: 9 },
                this
              ),
        ],
      },
      void 0,
      !0,
      { fileName: C, lineNumber: 405, columnNumber: 5 },
      this
    )
  );
}
function Wr() {
  return gt({ url: '/api/system/captcha', method: 'GET' });
}
function Jr() {
  return gt({
    url: '/api/system/setting/public',
    method: 'GET',
    skipErrorMessage: !0,
  });
}
function fi() {
  return ge({ url: '/api/system/setting/manage', method: 'GET' });
}
function di(e) {
  return ge({
    url: '/api/system/setting/manage',
    method: 'PUT',
    data: { config: e },
  });
}
function pi(e, t) {
  const s = new FormData();
  return (
    s.append('scene', e),
    s.append('file', t),
    ge({
      url: '/api/system/upload/image',
      method: 'POST',
      data: s,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  );
}
const Yn = {
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
  Yr = '_container_1rgqq_1',
  Hr = '_banner_1rgqq_5',
  Xr = '_content_1rgqq_9',
  Zr = '_footer_1rgqq_14',
  Qr = '_logo_1rgqq_20',
  ei = '_carousel_1rgqq_54';
var V = {
    container: Yr,
    banner: Hr,
    content: Xr,
    footer: Zr,
    logo: Qr,
    'logo-image': '_logo-image_1rgqq_28',
    'logo-text': '_logo-text_1rgqq_34',
    'banner-inner': '_banner-inner_1rgqq_45',
    carousel: ei,
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
  },
  A = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/login/form.tsx';
function Hn() {
  const e = u.exports.useRef(),
    [t, s] = u.exports.useState(''),
    [o, r] = u.exports.useState(!1),
    [a, i] = u.exports.useState(!1),
    [c, f] = u.exports.useState(''),
    [v, N] = u.exports.useState(''),
    [x, T, k] = ke('loginParams'),
    b = Q(Yn),
    {
      lang: I,
      systemProfile: J,
      refreshSystemProfile: m,
    } = u.exports.useContext(fe),
    D = Le(J, I),
    te = hn(J, I),
    [h, l] = u.exports.useState(!!x);
  function E() {
    i(!0),
      Wr()
        .then((S) => {
          var j;
          f(S.captchaKey),
            N(S.captchaImage),
            (j = e.current) == null || j.setFieldValue('captchaCode', '');
        })
        .finally(() => {
          i(!1);
        });
  }
  async function Y(S, j) {
    var ae;
    const F = (ae = j.defaultTenant) == null ? void 0 : ae.tenantCode;
    if (!F) {
      window.location.href = '/403';
      return;
    }
    h ? T(JSON.stringify({ account: S.account })) : k(),
      localStorage.setItem(ye, j.accessToken),
      localStorage.setItem(Ke, F),
      localStorage.setItem(
        Ue,
        JSON.stringify(
          B(p({}, j.profile || {}), { defaultTenant: j.defaultTenant })
        )
      ),
      localStorage.setItem('userStatus', 'login'),
      _e(j.theme_setting),
      m == null ||
        m().then((pe) => {
          pe && xn(pe);
        });
    const ie = await Dt(F);
    localStorage.setItem(
      Ue,
      JSON.stringify(
        B(p({}, ie.profile || j.profile || {}), {
          defaultTenant: j.defaultTenant,
        })
      )
    );
    const X = Kn(ie.menus || []);
    if (!X) {
      window.location.href = '/403';
      return;
    }
    window.location.href = `/${F}/${X.replace(/^\/+/, '')}`;
  }
  function H(S) {
    s(''),
      r(!0),
      cr(B(p({}, S), { captchaKey: c }))
        .then((j) => Y(S, j))
        .catch((j) => {
          var F, ie;
          s(
            (j == null ? void 0 : j.message) ||
              ((ie =
                (F = j == null ? void 0 : j.response) == null
                  ? void 0
                  : F.data) == null
                ? void 0
                : ie.message) ||
              b['login.form.login.errMsg']
          ),
            E();
        })
        .finally(() => {
          r(!1);
        });
  }
  function R() {
    e.current.validate().then((S) => {
      H(S);
    });
  }
  return (
    u.exports.useEffect(() => {
      E();
    }, []),
    u.exports.useEffect(() => {
      const S = !!x;
      if ((l(S), e.current && S)) {
        const j = JSON.parse(x);
        e.current.setFieldsValue(j);
      }
    }, [x]),
    n.exports.jsxDEV(
      'div',
      {
        className: V['login-form-wrapper'],
        children: [
          n.exports.jsxDEV(
            'div',
            {
              className: V['login-form-title'],
              children: [b['login.form.title'], ' ', D],
            },
            void 0,
            !0,
            { fileName: A, lineNumber: 155, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            'div',
            { className: V['login-form-sub-title'], children: te },
            void 0,
            !1,
            { fileName: A, lineNumber: 158, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            'div',
            { className: V['login-form-error-msg'], children: t },
            void 0,
            !1,
            { fileName: A, lineNumber: 159, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            Ve,
            {
              className: V['login-form'],
              layout: 'vertical',
              ref: e,
              initialValues: { account: 'operator', password: 'Aa123!@#' },
              children: [
                n.exports.jsxDEV(
                  Ve.Item,
                  {
                    field: 'account',
                    rules: [
                      {
                        required: !0,
                        message: b['login.form.userName.errMsg'],
                      },
                    ],
                    children: n.exports.jsxDEV(
                      ct,
                      {
                        prefix: n.exports.jsxDEV(
                          Qt,
                          {},
                          void 0,
                          !1,
                          { fileName: A, lineNumber: 171, columnNumber: 21 },
                          this
                        ),
                        placeholder: b['login.form.userName.placeholder'],
                        onPressEnter: R,
                      },
                      void 0,
                      !1,
                      { fileName: A, lineNumber: 170, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: A, lineNumber: 166, columnNumber: 9 },
                  this
                ),
                n.exports.jsxDEV(
                  Ve.Item,
                  {
                    field: 'password',
                    rules: [
                      {
                        required: !0,
                        message: b['login.form.password.errMsg'],
                      },
                    ],
                    children: n.exports.jsxDEV(
                      ct.Password,
                      {
                        prefix: n.exports.jsxDEV(
                          Xs,
                          {},
                          void 0,
                          !1,
                          { fileName: A, lineNumber: 181, columnNumber: 21 },
                          this
                        ),
                        placeholder: b['login.form.password.placeholder'],
                        onPressEnter: R,
                      },
                      void 0,
                      !1,
                      { fileName: A, lineNumber: 180, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: A, lineNumber: 176, columnNumber: 9 },
                  this
                ),
                n.exports.jsxDEV(
                  Ve.Item,
                  {
                    children: n.exports.jsxDEV(
                      'div',
                      {
                        className: V['login-form-captcha-row'],
                        children: [
                          n.exports.jsxDEV(
                            Ve.Item,
                            {
                              field: 'captchaCode',
                              rules: [
                                {
                                  required: !0,
                                  message: b['login.form.captcha.errMsg'],
                                },
                              ],
                              noStyle: !0,
                              children: n.exports.jsxDEV(
                                ct,
                                {
                                  className: V['login-form-captcha-input'],
                                  prefix: n.exports.jsxDEV(
                                    Zs,
                                    {},
                                    void 0,
                                    !1,
                                    {
                                      fileName: A,
                                      lineNumber: 197,
                                      columnNumber: 25,
                                    },
                                    this
                                  ),
                                  maxLength: 5,
                                  placeholder:
                                    b['login.form.captcha.placeholder'],
                                  onPressEnter: R,
                                },
                                void 0,
                                !1,
                                {
                                  fileName: A,
                                  lineNumber: 195,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: A, lineNumber: 188, columnNumber: 13 },
                            this
                          ),
                          n.exports.jsxDEV(
                            le,
                            {
                              type: 'text',
                              loading: a,
                              className: V['login-form-captcha-btn'],
                              onClick: E,
                              children: v
                                ? n.exports.jsxDEV(
                                    'img',
                                    {
                                      className: V['login-form-captcha-image'],
                                      src: v,
                                      alt: 'captcha',
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: A,
                                      lineNumber: 210,
                                      columnNumber: 17,
                                    },
                                    this
                                  )
                                : b['login.form.captcha.refresh'],
                            },
                            void 0,
                            !1,
                            { fileName: A, lineNumber: 203, columnNumber: 13 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: A, lineNumber: 187, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: A, lineNumber: 186, columnNumber: 9 },
                  this
                ),
                n.exports.jsxDEV(
                  Wt,
                  {
                    size: 16,
                    direction: 'vertical',
                    children: [
                      n.exports.jsxDEV(
                        'div',
                        {
                          className: V['login-form-password-actions'],
                          children: [
                            n.exports.jsxDEV(
                              Qs,
                              {
                                checked: h,
                                onChange: l,
                                children: b['login.form.rememberPassword'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: A,
                                lineNumber: 223,
                                columnNumber: 13,
                              },
                              this
                            ),
                            n.exports.jsxDEV(
                              eo,
                              { children: b['login.form.forgetPassword'] },
                              void 0,
                              !1,
                              {
                                fileName: A,
                                lineNumber: 226,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: A, lineNumber: 222, columnNumber: 11 },
                        this
                      ),
                      n.exports.jsxDEV(
                        le,
                        {
                          type: 'primary',
                          long: !0,
                          onClick: R,
                          loading: o,
                          children: b['login.form.login'],
                        },
                        void 0,
                        !1,
                        { fileName: A, lineNumber: 228, columnNumber: 11 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: A, lineNumber: 221, columnNumber: 9 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: A, lineNumber: 160, columnNumber: 7 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: A, lineNumber: 154, columnNumber: 5 },
      this
    )
  );
}
var ti = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: Hn,
  }),
  Ce = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/login/banner.tsx';
function Xn() {
  const e = Q(Yn),
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
  return n.exports.jsxDEV(
    to,
    {
      className: V.carousel,
      animation: 'fade',
      children: t.map((s, o) =>
        n.exports.jsxDEV(
          'div',
          {
            children: n.exports.jsxDEV(
              'div',
              {
                className: V['carousel-item'],
                children: [
                  n.exports.jsxDEV(
                    'div',
                    { className: V['carousel-title'], children: s.slogan },
                    void 0,
                    !1,
                    { fileName: Ce, lineNumber: 34, columnNumber: 13 },
                    this
                  ),
                  n.exports.jsxDEV(
                    'div',
                    {
                      className: V['carousel-sub-title'],
                      children: s.subSlogan,
                    },
                    void 0,
                    !1,
                    { fileName: Ce, lineNumber: 35, columnNumber: 13 },
                    this
                  ),
                  n.exports.jsxDEV(
                    'img',
                    {
                      alt: 'banner-image',
                      className: V['carousel-image'],
                      src: s.image,
                    },
                    void 0,
                    !1,
                    { fileName: Ce, lineNumber: 36, columnNumber: 13 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: Ce, lineNumber: 33, columnNumber: 11 },
              this
            ),
          },
          `${o}`,
          !1,
          { fileName: Ce, lineNumber: 32, columnNumber: 9 },
          this
        )
      ),
    },
    void 0,
    !1,
    { fileName: Ce, lineNumber: 30, columnNumber: 5 },
    this
  );
}
var ni = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: Xn,
  }),
  Z = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/login/index.tsx';
function nt() {
  const { lang: e, systemProfile: t } = u.exports.useContext(fe),
    s = Le(t, e);
  return (
    u.exports.useEffect(() => {
      document.body.setAttribute('arco-theme', 'light');
    }, []),
    n.exports.jsxDEV(
      'div',
      {
        className: V.container,
        children: [
          n.exports.jsxDEV(
            'div',
            {
              className: V.logo,
              children: [
                n.exports.jsxDEV(
                  vn,
                  { profile: t, className: V['logo-image'], alt: s },
                  void 0,
                  !1,
                  { fileName: Z, lineNumber: 21, columnNumber: 9 },
                  this
                ),
                n.exports.jsxDEV(
                  'div',
                  { className: V['logo-text'], children: s },
                  void 0,
                  !1,
                  { fileName: Z, lineNumber: 26, columnNumber: 9 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: Z, lineNumber: 20, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            'div',
            {
              className: V.banner,
              children: n.exports.jsxDEV(
                'div',
                {
                  className: V['banner-inner'],
                  children: n.exports.jsxDEV(
                    Xn,
                    {},
                    void 0,
                    !1,
                    { fileName: Z, lineNumber: 30, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: Z, lineNumber: 29, columnNumber: 9 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: Z, lineNumber: 28, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            'div',
            {
              className: V.content,
              children: [
                n.exports.jsxDEV(
                  'div',
                  {
                    className: V['content-inner'],
                    children: n.exports.jsxDEV(
                      Hn,
                      {},
                      void 0,
                      !1,
                      { fileName: Z, lineNumber: 35, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: Z, lineNumber: 34, columnNumber: 9 },
                  this
                ),
                n.exports.jsxDEV(
                  'div',
                  {
                    className: V.footer,
                    children: n.exports.jsxDEV(
                      wn,
                      {},
                      void 0,
                      !1,
                      { fileName: Z, lineNumber: 38, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: Z, lineNumber: 37, columnNumber: 9 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: Z, lineNumber: 33, columnNumber: 7 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: Z, lineNumber: 19, columnNumber: 5 },
      this
    )
  );
}
nt.displayName = 'LoginPage';
var si = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: nt,
});
const oi = {
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
  ri = '_wrapper_jqkv8_1',
  ii = '_result_jqkv8_6';
var St = { wrapper: ri, result: ii },
  st =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/exception/403/index.tsx';
function Vt() {
  const e = Q(oi),
    t = lt();
  return n.exports.jsxDEV(
    'div',
    {
      className: St.container,
      children: n.exports.jsxDEV(
        'div',
        {
          className: St.wrapper,
          children: n.exports.jsxDEV(
            Kt,
            {
              className: St.result,
              status: '403',
              subTitle: e['exception.result.403.description'],
              extra: n.exports.jsxDEV(
                le,
                {
                  type: 'primary',
                  onClick: () => t.push('/login'),
                  children: e['exception.result.403.back'],
                },
                'back',
                !1,
                { fileName: st, lineNumber: 20, columnNumber: 13 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: st, lineNumber: 15, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: st, lineNumber: 14, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: st, lineNumber: 13, columnNumber: 5 },
    this
  );
}
var wt = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Vt,
});
function Zn() {
  return !!localStorage.getItem(ye);
}
var Qn = (e) => {
  const { mock: t = !0, setup: s } = e;
  t !== !1 && s();
};
je ||
  ((me.XHR.prototype.withCredentials = !0),
  Qn({
    setup: () => {
      const e = window.localStorage.getItem('userRole') || 'admin';
      me.mock(new RegExp('/api/user/userInfo'), () =>
        me.mock({
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
          registrationTime: me.Random.datetime('yyyy-MM-dd HH:mm:ss'),
          permissions: Pr(e),
        })
      ),
        me.mock(new RegExp('/api/user/login'), (t) => {
          const { userName: s, password: o } = JSON.parse(t.body);
          return s
            ? o
              ? s === 'admin' && o === 'admin'
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
const es = [],
  ai = () =>
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
    ].map((e) => B(p({}, e), { status: es.indexOf(e.id) === -1 ? 0 : 1 }));
Qn({
  setup: () => {
    me.mock(new RegExp('/api/message/list'), () => ai()),
      me.mock(new RegExp('/api/message/read'), (e) => {
        const { ids: t } = JSON.parse(e.body);
        return es.push(...(t || [])), !0;
      });
  },
});
je || me.setup({ timeout: '500-1500' });
var W = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/main.tsx';
const Fe = no(bo);
function ui() {
  const e = ut(),
    [t, s] = ke('arco-lang', 'en-US'),
    [o, r] = ke('arco-theme', 'light'),
    a = ve((m) => m.settings),
    [i, c] = u.exports.useState(() => se(Co() || we)),
    f = Zt.useRef();
  function v(m) {
    c(se(m));
  }
  const N = u.exports.useCallback(
    async () => (
      f.current ||
        (f.current = Jr()
          .then((m) => {
            const D = se(m);
            return v(D), Zn() && xn(D), D;
          })
          .catch(() => {})
          .finally(() => {
            f.current = void 0;
          })),
      f.current
    ),
    []
  );
  function x(m) {
    _e(m),
      s(m.lang),
      r(m.theme),
      e({ type: 'update-settings', payload: { settings: m.settings } }),
      e({ type: 'update-theme', payload: { theme: m.theme } }),
      Xe(m.theme, m.settings.themeColor);
  }
  function T(m) {
    const D = _e(B(p({}, Ye()), { lang: m }));
    s(D.lang);
  }
  function k(m) {
    const D = _e(B(p({}, Ye()), { theme: m }));
    r(D.theme),
      e({ type: 'update-theme', payload: { theme: D.theme } }),
      Xe(D.theme, D.settings.themeColor);
  }
  function b() {
    switch (t) {
      case 'zh-CN':
        return cn;
      case 'en-US':
        return ao;
      default:
        return cn;
    }
  }
  async function I() {
    Fe.dispatch({ type: 'update-userInfo', payload: { userLoading: !0 } });
    const m = de();
    try {
      const D = m ? await Dt(m) : null;
      Fe.dispatch({
        type: 'update-userInfo',
        payload: {
          userInfo: B(
            p(p({}, qe() || {}), (D == null ? void 0 : D.profile) || {}),
            {
              permissions: (D == null ? void 0 : D.permissions) || [],
              fieldPolicies: (D == null ? void 0 : D.fieldPolicies) || {},
            }
          ),
          userLoading: !1,
        },
      });
    } catch {
      Fe.dispatch({
        type: 'update-userInfo',
        payload: { userInfo: qe() || { permissions: {} }, userLoading: !1 },
      });
    }
  }
  u.exports.useEffect(() => {
    const m = window.location.pathname,
      D = m === '/login' || m.endsWith('/login'),
      te = m === '/403' || m.endsWith('/403');
    if (Zn()) {
      if (!de(m) && !D && !te) {
        const E = dt();
        window.location.replace(E ? `/${E}${m}` : '/403');
        return;
      }
      const l = Ye();
      _e(l),
        s(l.lang),
        r(l.theme),
        Fe.dispatch({
          type: 'update-settings',
          payload: { settings: l.settings },
        }),
        Fe.dispatch({ type: 'update-theme', payload: { theme: l.theme } }),
        Xe(l.theme, l.settings.themeColor),
        I();
    } else N(), !D && !te && (window.location.pathname = '/login');
  }, []),
    u.exports.useEffect(() => {
      (document.title = yo(i, t)), jo(i);
    }, [t, i]),
    u.exports.useEffect(() => {
      Xe(o, a.themeColor), e({ type: 'update-theme', payload: { theme: o } });
    }, [e, a.themeColor, o]);
  const J = {
    lang: t,
    setLang: T,
    theme: o,
    setTheme: k,
    applyUserTheme: x,
    systemProfile: i,
    setSystemProfile: v,
    refreshSystemProfile: N,
  };
  return n.exports.jsxDEV(
    ro,
    {
      children: n.exports.jsxDEV(
        io,
        {
          locale: b(),
          componentConfig: {
            Card: { bordered: !1 },
            List: { bordered: !1 },
            Table: { border: !1 },
          },
          children: n.exports.jsxDEV(
            fe.Provider,
            {
              value: J,
              children: n.exports.jsxDEV(
                on.exports.AliveScope,
                {
                  children: n.exports.jsxDEV(
                    an,
                    {
                      children: [
                        n.exports.jsxDEV(
                          ce,
                          { path: '/login', component: nt },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 239, columnNumber: 15 },
                          this
                        ),
                        n.exports.jsxDEV(
                          ce,
                          { path: '/:tenantCode/login', component: nt },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 240, columnNumber: 15 },
                          this
                        ),
                        n.exports.jsxDEV(
                          ce,
                          { path: '/403', component: Vt },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 241, columnNumber: 15 },
                          this
                        ),
                        n.exports.jsxDEV(
                          ce,
                          { path: '/:tenantCode/403', component: Vt },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 242, columnNumber: 15 },
                          this
                        ),
                        n.exports.jsxDEV(
                          ce,
                          { path: '/', component: Gr },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 243, columnNumber: 15 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: W, lineNumber: 238, columnNumber: 13 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: W, lineNumber: 237, columnNumber: 11 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: W, lineNumber: 236, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: W, lineNumber: 222, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: W, lineNumber: 221, columnNumber: 5 },
    this
  );
}
function li() {
  return n.exports.jsxDEV(
    oo,
    {
      store: Fe,
      children: n.exports.jsxDEV(
        ui,
        {},
        void 0,
        !1,
        { fileName: W, lineNumber: 255, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: W, lineNumber: 254, columnNumber: 5 },
    this
  );
}
so.render(
  n.exports.jsxDEV(
    li,
    {},
    void 0,
    !1,
    { fileName: W, lineNumber: 260, columnNumber: 17 },
    globalThis
  ),
  document.getElementById('root')
);
export {
  we as D,
  fe as G,
  Nn as a,
  pi as b,
  di as c,
  fi as g,
  se as n,
  Qn as s,
  Q as u,
  xn as w,
};
