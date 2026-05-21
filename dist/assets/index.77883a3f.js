var Nn = Object.defineProperty,
  bn = Object.defineProperties;
var xn = Object.getOwnPropertyDescriptors;
var Ie = Object.getOwnPropertySymbols;
var Ut = Object.prototype.hasOwnProperty,
  zt = Object.prototype.propertyIsEnumerable;
var Kt = (e, t, s) =>
    t in e
      ? Nn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  p = (e, t) => {
    for (var s in t || (t = {})) Ut.call(t, s) && Kt(e, s, t[s]);
    if (Ie) for (var s of Ie(t)) zt.call(t, s) && Kt(e, s, t[s]);
    return e;
  },
  I = (e, t) => bn(e, xn(t));
var Be = (e, t) => {
  var s = {};
  for (var o in e) Ut.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
  if (e != null && Ie)
    for (var o of Ie(e)) t.indexOf(o) < 0 && zt.call(e, o) && (s[o] = e[o]);
  return s;
};
import {
  r as u,
  j as n,
  L as at,
  R as Gt,
  B as le,
  A as Wt,
  S as Jt,
  T as Te,
  a as En,
  b as Yt,
  c as vn,
  g as _n,
  I as Dn,
  d as yn,
  e as jn,
  f as ut,
  h as Ht,
  i as Re,
  k as Ve,
  M as ge,
  u as ve,
  l as lt,
  m as Cn,
  n as Fn,
  D as Xt,
  o as Zt,
  p as Vn,
  q as Sn,
  s as Qt,
  t as Me,
  v as wn,
  w as An,
  x as Pn,
  y as M,
  z as es,
  C as kn,
  E as In,
  F as Bn,
  G as Tn,
  H as Rn,
  J as Mn,
  K as Ln,
  N as $n,
  O as On,
  P as qn,
  Q as ts,
  U as _e,
  V as Un,
  W as ct,
  X as ss,
  Y as zn,
  Z as Kn,
  _ as ns,
  $ as Gn,
  a0 as Wn,
  a1 as Jn,
  a2 as Yn,
  a3 as ce,
  a4 as Hn,
  a5 as os,
  a6 as Xn,
  a7 as rs,
  a8 as Zn,
  a9 as Qn,
  aa as is,
  ab as as,
  ac as us,
  ad as ls,
  ae as Se,
  af as mt,
  ag as eo,
  ah as to,
  ai as so,
  aj as no,
  ak as oo,
  al as me,
  am as ro,
  an as io,
  ao,
  ap as uo,
  aq as lo,
  ar as cs,
  as as co,
} from './vendor.3821b0be.js';
const mo = function () {
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
mo();
const fo = !1,
  po = !0,
  ho = !0,
  go = !1,
  No = !0,
  bo = !0,
  xo = '#165DFF',
  Eo = 220;
var ms = {
  colorWeek: fo,
  navbar: po,
  menu: ho,
  topMenu: go,
  tabBar: No,
  footer: bo,
  themeColor: xo,
  menuWidth: Eo,
};
const fs = { settings: ms, theme: 'light', userInfo: { permissions: {} } };
function vo(e = fs, t) {
  switch (t.type) {
    case 'update-settings': {
      const { settings: s } = t.payload;
      return I(p({}, e), { settings: s });
    }
    case 'update-theme': {
      const { theme: s } = t.payload;
      return I(p({}, e), { theme: s });
    }
    case 'update-userInfo': {
      const { userInfo: s = fs.userInfo, userLoading: o } = t.payload;
      return I(p({}, e), { userLoading: o, userInfo: s });
    }
    default:
      return e;
  }
}
const _o = 'modulepreload',
  ds = {},
  Do = '/',
  N = function (t, s) {
    return !s || s.length === 0
      ? t()
      : Promise.all(
          s.map((o) => {
            if (((o = `${Do}${o}`), o in ds)) return;
            ds[o] = !0;
            const r = o.endsWith('.css'),
              a = r ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${o}"]${a}`)) return;
            const i = document.createElement('link');
            if (
              ((i.rel = r ? 'stylesheet' : _o),
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
  ps = {
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
  return (e || ps)[t] || {};
}
const yo = (e) =>
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
  Le = 'system-profile',
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
function ne(e) {
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
    config: I(p({}, s), {
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
function ft(e, t = 'zh-CN') {
  return (
    (e == null ? void 0 : e[t]) ||
    (e == null ? void 0 : e['zh-CN']) ||
    (e == null ? void 0 : e['en-US']) ||
    ''
  );
}
function $e(e, t = 'zh-CN') {
  return ft(ne(e).config.systemName, t);
}
function jo(e, t = 'zh-CN') {
  return ft(ne(e).config.companyName, t);
}
function hs(e, t = 'zh-CN') {
  return ft(ne(e).config.systemDescription, t);
}
function Co(e, t = 'zh-CN') {
  const s = $e(e, t),
    o = hs(e, t);
  return o ? `${s} - ${o}` : s;
}
function Fo(e, t = 'zh-CN') {
  return `\xA9 2026-${new Date().getFullYear()} ${jo(e, t)}`;
}
function gs(e) {
  const t = ne(e).config;
  if (t.logoType !== '1') return '';
  const s = t.logoSvgElement;
  return typeof s == 'string' ? s.trim() : '';
}
function Ns(e) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`;
}
function bs(e) {
  const t = ne(e),
    s = t.config.logoPath || '';
  return t.logoUrl
    ? t.logoUrl
    : s
    ? s.startsWith('http://') || s.startsWith('https://') || !t.obsCloudBase
      ? s
      : `${t.obsCloudBase.replace(/\/$/, '')}/${s.replace(/^\//, '')}`
    : '';
}
function Vo(e) {
  const t = gs(e),
    s = t ? Ns(t) : bs(e);
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
function So() {
  try {
    const e = localStorage.getItem(Le);
    return e ? ne(JSON.parse(e)) : null;
  } catch {
    return localStorage.removeItem(Le), null;
  }
}
function xs(e) {
  const t = ne(e);
  return localStorage.setItem(Le, JSON.stringify(t)), t;
}
function wo() {
  localStorage.removeItem(Le);
}
var Es =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/SystemLogo/index.tsx';
function vs({ profile: e, className: t, alt: s }) {
  const o = gs(e),
    r = o ? Ns(o) : bs(e);
  return r
    ? n.exports.jsxDEV(
        'img',
        { className: t, src: r, alt: s || '' },
        void 0,
        !1,
        { fileName: Es, lineNumber: 27, columnNumber: 12 },
        this
      )
    : n.exports.jsxDEV(
        yo,
        {},
        void 0,
        !1,
        { fileName: Es, lineNumber: 30, columnNumber: 10 },
        this
      );
}
const Ao = '_footer_8a7h1_26';
var Ae = {
    'message-box': '_message-box_8a7h1_1',
    'message-title': '_message-title_8a7h1_22',
    footer: Ao,
    'footer-item': '_footer-item_8a7h1_29',
  },
  B =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/MessageBox/list.tsx';
function Po(e) {
  const t = Q(),
    { data: s, unReadData: o } = e;
  function r(i, c) {
    i.status || (e.onItemClick && e.onItemClick(i, c));
  }
  function a() {
    e.onAllBtnClick && e.onAllBtnClick(o, s);
  }
  return n.exports.jsxDEV(
    at,
    {
      noDataElement: n.exports.jsxDEV(
        Gt,
        { status: '404', subTitle: t['message.empty.tips'] },
        void 0,
        !1,
        { fileName: B, lineNumber: 55, columnNumber: 22 },
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
                  { fileName: B, lineNumber: 59, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: B, lineNumber: 58, columnNumber: 11 },
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
                  { fileName: B, lineNumber: 64, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: B, lineNumber: 63, columnNumber: 11 },
              this
            ),
          ],
        },
        void 0,
        !0,
        { fileName: B, lineNumber: 57, columnNumber: 9 },
        this
      ),
      children: s.map((i, c) =>
        n.exports.jsxDEV(
          at.Item,
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
                  at.Item.Meta,
                  {
                    avatar:
                      i.avatar &&
                      n.exports.jsxDEV(
                        Wt,
                        {
                          shape: 'circle',
                          size: 36,
                          children: n.exports.jsxDEV(
                            'img',
                            { src: i.avatar },
                            void 0,
                            !1,
                            { fileName: B, lineNumber: 91, columnNumber: 21 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: B, lineNumber: 90, columnNumber: 19 },
                        this
                      ),
                    title: n.exports.jsxDEV(
                      'div',
                      {
                        className: Ae['message-title'],
                        children: [
                          n.exports.jsxDEV(
                            Jt,
                            {
                              size: 4,
                              children: [
                                n.exports.jsxDEV(
                                  'span',
                                  { children: i.title },
                                  void 0,
                                  !1,
                                  {
                                    fileName: B,
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
                                    fileName: B,
                                    lineNumber: 99,
                                    columnNumber: 21,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: B, lineNumber: 97, columnNumber: 19 },
                            this
                          ),
                          i.tag && i.tag.text
                            ? n.exports.jsxDEV(
                                En,
                                { color: i.tag.color, children: i.tag.text },
                                void 0,
                                !1,
                                {
                                  fileName: B,
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
                      { fileName: B, lineNumber: 96, columnNumber: 17 },
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
                            { fileName: B, lineNumber: 110, columnNumber: 19 },
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
                            { fileName: B, lineNumber: 113, columnNumber: 19 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: B, lineNumber: 109, columnNumber: 17 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: B, lineNumber: 87, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: B, lineNumber: 79, columnNumber: 11 },
              this
            ),
          },
          i.id,
          !1,
          { fileName: B, lineNumber: 72, columnNumber: 9 },
          this
        )
      ),
    },
    void 0,
    !1,
    { fileName: B, lineNumber: 54, columnNumber: 5 },
    this
  );
}
var G =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/MessageBox/index.tsx';
function ko() {
  const e = Q(),
    [t, s] = u.exports.useState(!1),
    [o, r] = u.exports.useState({}),
    [a, i] = u.exports.useState([]);
  function c(b = !0) {
    b && s(!0),
      Re.get('/api/message/list')
        .then((E) => {
          i(E.data);
        })
        .finally(() => {
          b && s(!1);
        });
  }
  function f(b) {
    const E = b.map((R) => R.id);
    Re.post('/api/message/read', { ids: E }).then(() => {
      c();
    });
  }
  u.exports.useEffect(() => {
    c();
  }, []),
    u.exports.useEffect(() => {
      const b = _n(a, 'type');
      r(b);
    }, [a]);
  const _ = [
    {
      key: 'message',
      title: e['message.tab.title.message'],
      titleIcon: n.exports.jsxDEV(
        Dn,
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
        yn,
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
        jn,
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
        ut,
        {
          loading: t,
          style: { display: 'block' },
          children: n.exports.jsxDEV(
            Ht,
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
              children: _.map((b) => {
                const { key: E, title: R } = b,
                  k = o[E] || [],
                  x = k.filter((T) => !T.status);
                return n.exports.jsxDEV(
                  Ht.TabPane,
                  {
                    title: n.exports.jsxDEV(
                      'span',
                      { children: [R, x.length ? `(${x.length})` : ''] },
                      void 0,
                      !0,
                      { fileName: G, lineNumber: 97, columnNumber: 19 },
                      this
                    ),
                    children: n.exports.jsxDEV(
                      Po,
                      {
                        data: k,
                        unReadData: x,
                        onItemClick: (T) => {
                          f([T]);
                        },
                        onAllBtnClick: (T) => {
                          f(T);
                        },
                      },
                      void 0,
                      !1,
                      { fileName: G, lineNumber: 103, columnNumber: 17 },
                      this
                    ),
                  },
                  E,
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
function Io({ children: e }) {
  return n.exports.jsxDEV(
    Yt,
    {
      trigger: 'hover',
      popup: () =>
        n.exports.jsxDEV(
          ko,
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
        vn,
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
var Bo = { 'icon-button': '_icon-button_12azl_1' },
  To =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/NavBar/IconButton.tsx';
function Ro(e, t) {
  const a = e,
    { icon: s, className: o } = a,
    r = Be(a, ['icon', 'className']);
  return n.exports.jsxDEV(
    le,
    p(
      {
        ref: t,
        icon: s,
        shape: 'circle',
        type: 'secondary',
        className: Ve(Bo['icon-button'], o),
      },
      r
    ),
    void 0,
    !1,
    { fileName: To, lineNumber: 10, columnNumber: 5 },
    this
  );
}
var Oe = u.exports.forwardRef(Ro);
const qe = 'user-profile';
function Ue(e) {
  const t =
    (e == null ? void 0 : e.tenantCode) || (e == null ? void 0 : e.code);
  return typeof t == 'string' || typeof t == 'number' ? String(t) : '';
}
function de(e = window.location.pathname) {
  const [, t] = e.split('/');
  return !t || t === 'login' || t === '403' ? '' : t;
}
function dt(e = window.location.pathname) {
  const t = de(e);
  if (!t) return e || '/';
  const s = e.replace(`/${t}`, '') || '/';
  return s.startsWith('/') ? s : `/${s}`;
}
function ze() {
  const e = localStorage.getItem(qe);
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function pt() {
  const e = ze();
  return (
    Ue(e == null ? void 0 : e.defaultTenant) ||
    Ue(e == null ? void 0 : e.currentTenant) ||
    Ue(e)
  );
}
const Mo = ['X-Organization', 'organization'];
function Lo() {
  if (typeof localStorage == 'undefined') return '';
  for (const e of Mo) {
    const t = localStorage.getItem(e);
    if (t) return t;
  }
  return '';
}
function _s(
  e = typeof window != 'undefined' ? window.location.pathname : '',
  t
) {
  const s = de(e);
  if (s) return s;
  const o = pt();
  if (o) return o;
  const r = Lo();
  if (r) return r;
  const a = t == null ? void 0 : t.currentTenant,
    i = Ue(a);
  return i || '';
}
function $o(e, t) {
  const s = _s(e, t);
  return s ? `/${s}` : '';
}
const De = 'X-Access-Token',
  Ke = 'X-Organization',
  ht = 'Accept-Language',
  Ds = 'zh-CN';
function Oo() {
  return localStorage.getItem(De) || localStorage.getItem('accessToken') || '';
}
function qo() {
  return (
    de() ||
    localStorage.getItem(Ke) ||
    localStorage.getItem('organization') ||
    ''
  );
}
function Uo() {
  return localStorage.getItem(ht) || Ds;
}
function zo(e) {
  return e === 200;
}
const Ko = 100001,
  Go = 100060;
function ys(e, t = '\u8BF7\u6C42\u5931\u8D25') {
  return (e == null ? void 0 : e.message) || t;
}
let gt = !1;
function Ge(e) {
  var s;
  const t = (s = e == null ? void 0 : e.data) == null ? void 0 : s.code;
  return (
    (e == null ? void 0 : e.status) === 403 ||
    t === Go ||
    t === 100003 ||
    t === 100002
  );
}
function We(e) {
  var s;
  if (Ge(e)) return !1;
  const t = (s = e == null ? void 0 : e.data) == null ? void 0 : s.code;
  return (e == null ? void 0 : e.status) === 401 || t === 401 || t === Ko;
}
function js(e) {
  ge.warning(
    ys(
      e == null ? void 0 : e.data,
      '\u65E0\u6743\u9650\u8BBF\u95EE\u8BE5\u8D44\u6E90'
    )
  );
}
function Wo() {
  if (gt) return;
  (gt = !0),
    localStorage.removeItem(De),
    localStorage.setItem('userStatus', 'logout');
  const { pathname: e } = window.location;
  e === '/login' || e.endsWith('/login')
    ? (gt = !1)
    : window.location.replace('/login');
}
function Je(e) {
  (e == null ? void 0 : e.skipErrorMessage) ||
    ge.error(
      '\u767B\u5F55\u72B6\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55'
    ),
    Wo();
}
Re.interceptors.response.use(
  (e) => (We(e) && Je(), e),
  (e) => (Ge(e.response) || (We(e.response) && Je()), Promise.reject(e))
);
function Jo(e, t) {
  return We(e)
    ? (Je(t), Promise.reject(e.data))
    : Ge(e)
    ? ((t == null ? void 0 : t.skipErrorMessage) || js(e),
      Promise.reject(e.data))
    : e.status === 200 && zo(e.data.code)
    ? e.data.data
    : ((t == null ? void 0 : t.skipErrorMessage) || ge.error(ys(e.data)),
      Promise.reject(e.data));
}
function Yo(e, t) {
  var s, o, r;
  if (Ge(e.response))
    return (
      (t == null ? void 0 : t.skipErrorMessage) || js(e.response),
      Promise.reject(e)
    );
  if (We(e.response)) return Je(t), Promise.reject(e);
  if (!(t == null ? void 0 : t.skipErrorMessage)) {
    const a =
      ((o = (s = e.response) == null ? void 0 : s.data) == null
        ? void 0
        : o.message) ||
      (((r = e.response) == null ? void 0 : r.status)
        ? `\u8BF7\u6C42\u5931\u8D25\uFF0C\u72B6\u6001\u7801\uFF1A${e.response.status}`
        : e.message ||
          '\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5');
    ge.error(a);
  }
  return Promise.reject(e);
}
function Cs(e) {
  const t = Re.create({ baseURL: '', timeout: 3e4, validateStatus: () => !0 });
  return (
    t.interceptors.request.use((s) => {
      const o = p({ [ht]: Uo() }, s.headers);
      if (e) {
        const r = Oo(),
          a = qo();
        s.headers = I(p({}, o), { [De]: r, [Ke]: a });
      } else s.headers = o;
      return s;
    }),
    t
  );
}
function Fs(e) {
  return async function (s) {
    try {
      const o = await e.request(s);
      return Jo(o, s);
    } catch (o) {
      return Yo(o, s);
    }
  };
}
const Ne = Fs(Cs(!0)),
  Nt = Fs(Cs(!1));
function Ho() {
  return Ne({ url: '/api/system/user-theme', method: 'GET' });
}
function Ye(e) {
  return Ne({ url: '/api/system/user-theme', method: 'PATCH', data: e });
}
const Vs = 'user-theme';
function bt() {
  return { settings: p({}, ms), theme: 'light', lang: Ds };
}
function Ss(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function xt(e) {
  const t = bt();
  if (!Ss(e)) return t;
  const s = Ss(e.settings) ? p(p({}, t.settings), e.settings) : t.settings,
    o = e.theme === 'dark' || e.theme === 'light' ? e.theme : t.theme,
    r =
      e.lang === 'zh-CN' || e.lang === 'en-US' || e.lang === 'es-ES'
        ? e.lang
        : t.lang;
  return { settings: s, theme: o, lang: r };
}
function He() {
  const e = localStorage.getItem(Vs);
  if (!e) return bt();
  try {
    return xt(JSON.parse(e));
  } catch {
    return bt();
  }
}
function ye(e) {
  const t = xt(e);
  return (
    localStorage.setItem(Vs, JSON.stringify(t)),
    localStorage.setItem('arco-theme', t.theme),
    localStorage.setItem('arco-lang', t.lang),
    localStorage.setItem(ht, t.lang),
    t
  );
}
function Xe(e) {
  const t = He();
  if (e.path.startsWith('settings.')) {
    const s = e.path.replace('settings.', '');
    t.settings = I(p({}, t.settings), { [s]: e.value });
  } else
    e.path === 'theme'
      ? (t.theme = e.value)
      : e.path === 'lang' && (t.lang = e.value);
  return ye(t);
}
const Xo = '_block_byc7u_1',
  Zo = '_title_byc7u_4';
var Et = { block: Xo, title: Zo, 'switch-wrapper': '_switch-wrapper_byc7u_9' },
  be =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Settings/block.tsx';
function vt(e) {
  const { title: t, options: s, children: o } = e,
    r = Q(),
    a = ve((f) => f.settings),
    i = lt();
  function c(f, _) {
    const b = `settings.${f}`;
    Xe({ path: b, value: _ }), Ye({ path: b, value: _ }).catch(() => {});
  }
  return n.exports.jsxDEV(
    'div',
    {
      className: Et.block,
      children: [
        n.exports.jsxDEV(
          'h5',
          { className: Et.title, children: t },
          void 0,
          !1,
          { fileName: be, lineNumber: 30, columnNumber: 7 },
          this
        ),
        s &&
          s.map((f) => {
            const _ = f.type || 'switch';
            return n.exports.jsxDEV(
              'div',
              {
                className: Et['switch-wrapper'],
                children: [
                  n.exports.jsxDEV(
                    'span',
                    { children: r[f.name] },
                    void 0,
                    !1,
                    { fileName: be, lineNumber: 37, columnNumber: 15 },
                    this
                  ),
                  _ === 'switch' &&
                    n.exports.jsxDEV(
                      Cn,
                      {
                        size: 'small',
                        checked: !!a[f.value],
                        onChange: (b) => {
                          const E = I(p({}, a), { [f.value]: b });
                          i({
                            type: 'update-settings',
                            payload: { settings: E },
                          }),
                            c(f.value, b),
                            b &&
                              f.value === 'colorWeek' &&
                              (document.body.style.filter = 'invert(80%)'),
                            !b &&
                              f.value === 'colorWeek' &&
                              (document.body.style.filter = 'none');
                        },
                      },
                      void 0,
                      !1,
                      { fileName: be, lineNumber: 39, columnNumber: 17 },
                      this
                    ),
                  _ === 'number' &&
                    n.exports.jsxDEV(
                      Fn,
                      {
                        style: { width: 80 },
                        size: 'small',
                        value: a.menuWidth,
                        onChange: (b) => {
                          const E = I(p({}, a), { [f.value]: b });
                          i({
                            type: 'update-settings',
                            payload: { settings: E },
                          }),
                            c(f.value, b);
                        },
                      },
                      void 0,
                      !1,
                      { fileName: be, lineNumber: 63, columnNumber: 17 },
                      this
                    ),
                ],
              },
              f.value,
              !0,
              { fileName: be, lineNumber: 36, columnNumber: 13 },
              this
            );
          }),
        o,
        n.exports.jsxDEV(
          Xt,
          {},
          void 0,
          !1,
          { fileName: be, lineNumber: 84, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: be, lineNumber: 29, columnNumber: 5 },
    this
  );
}
function ws(e, t = 'light') {
  Zt(e, { list: !0, dark: t === 'dark' }).forEach((o, r) => {
    document.body.style.setProperty(`--arcoblue-${r + 1}`, Vn(o));
  });
}
function Ze(e, t) {
  e === 'dark'
    ? document.body.setAttribute('arco-theme', 'dark')
    : document.body.removeAttribute('arco-theme'),
    t && ws(t, e);
}
const Qo = '_input_77wyg_1',
  er = '_color_77wyg_9',
  tr = '_ul_77wyg_14',
  sr = '_li_77wyg_19';
var Qe = { input: Qo, color: er, ul: tr, li: sr },
  oe =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Settings/color.tsx';
const nr = [
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
function or() {
  const e =
      document.querySelector('body').getAttribute('arco-theme') || 'light',
    t = ve((i) => i.settings),
    s = Q(),
    o = t.themeColor,
    r = Zt(o, { list: !0 }),
    a = lt();
  return n.exports.jsxDEV(
    'div',
    {
      children: [
        n.exports.jsxDEV(
          Yt,
          {
            trigger: 'hover',
            position: 'bl',
            popup: () =>
              n.exports.jsxDEV(
                Sn,
                {
                  color: o,
                  presetColors: nr,
                  onChangeComplete: (i) => {
                    const c = i.hex;
                    a({
                      type: 'update-settings',
                      payload: { settings: I(p({}, t), { themeColor: c }) },
                    }),
                      Xe({ path: 'settings.themeColor', value: c }),
                      Ye({ path: 'settings.themeColor', value: c }).catch(
                        () => {}
                      ),
                      ws(c, e);
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
                className: Qe.input,
                children: [
                  n.exports.jsxDEV(
                    'div',
                    { className: Qe.color, style: { backgroundColor: o } },
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
            className: Qe.ul,
            children: r.map((i, c) =>
              n.exports.jsxDEV(
                'li',
                { className: Qe.li, style: { backgroundColor: i } },
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
function As(e) {
  const { trigger: t } = e,
    [s, o] = u.exports.useState(!1),
    r = Q(),
    a = ve((_) => _.settings),
    { applyUserTheme: i } = u.exports.useContext(fe);
  function c() {
    o(!0),
      Ho()
        .then((_) => {
          i == null || i(xt(_.config));
        })
        .catch(() => {});
  }
  function f() {
    Pn(JSON.stringify(a, null, 2)),
      ge.success(r['settings.copySettings.message']);
  }
  return n.exports.jsxDEV(
    n.exports.Fragment,
    {
      children: [
        t
          ? Qt.cloneElement(t, { onClick: c })
          : n.exports.jsxDEV(
              Oe,
              {
                icon: n.exports.jsxDEV(
                  Me,
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
          wn,
          {
            width: 300,
            title: n.exports.jsxDEV(
              n.exports.Fragment,
              {
                children: [
                  n.exports.jsxDEV(
                    Me,
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
                vt,
                {
                  title: r['settings.themeColor'],
                  children: n.exports.jsxDEV(
                    or,
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
                vt,
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
                vt,
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
                An,
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
const rr = '_navbar_ql9qb_1',
  ir = '_left_ql9qb_10',
  ar = '_logo_ql9qb_15',
  ur = '_center_ql9qb_47',
  lr = '_right_ql9qb_63',
  cr = '_username_ql9qb_78',
  mr = '_round_ql9qb_81';
var q = {
  navbar: rr,
  left: ir,
  logo: ar,
  'logo-image': '_logo-image_ql9qb_23',
  'logo-name': '_logo-name_ql9qb_30',
  center: ur,
  right: lr,
  username: cr,
  round: mr,
  'dropdown-icon': '_dropdown-icon_ql9qb_87',
  'fixed-settings': '_fixed-settings_ql9qb_92',
};
function fr(e) {
  return Object.prototype.toString.call(e) === '[object Array]';
}
const je = (function () {
    try {
      return !(typeof window != 'undefined' && document !== void 0);
    } catch {
      return !0;
    }
  })(),
  dr = (e) => {
    if (!je) return localStorage.getItem(e);
  };
function Pe(e, t) {
  const [s, o] = u.exports.useState(dr(e) || t),
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
function pr(e) {
  return Nt({ url: '/api/system/users/login', method: 'POST', data: e });
}
function hr() {
  return Ne({ url: '/api/system/users/logout', method: 'POST' });
}
function et(e) {
  return `${e}-resource`;
}
function _t(e) {
  const t = localStorage.getItem(et(e));
  if (!t) return null;
  try {
    return JSON.parse(t);
  } catch {
    return localStorage.removeItem(et(e)), null;
  }
}
function gr(e, t) {
  localStorage.setItem(et(e), JSON.stringify(t));
}
function Nr() {
  return Ne({ url: '/api/auth/context', method: 'GET' });
}
async function Dt(e) {
  const t = _t(e);
  if (t) return t;
  const s = await Nr();
  return gr(e, s), s;
}
var d =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/NavBar/index.tsx';
function br({ show: e, topMenu: t, menu: s }) {
  const o = Q(),
    r = ve((l) => l.userInfo),
    a = ze(),
    i = (a == null ? void 0 : a.avatar) || (r == null ? void 0 : r.avatar),
    [, c] = Pe('userStatus'),
    [f, _] = Pe('userRole', 'admin'),
    {
      setLang: b,
      lang: E,
      theme: R,
      setTheme: k,
      systemProfile: x,
    } = u.exports.useContext(fe),
    T = $e(x, E);
  function J() {
    const l = de();
    c('logout'),
      localStorage.removeItem(De),
      localStorage.removeItem(Ke),
      localStorage.removeItem(qe),
      l && localStorage.removeItem(et(l)),
      localStorage.removeItem('accessToken'),
      localStorage.removeItem('organization'),
      localStorage.removeItem('user-theme'),
      wo();
  }
  function m() {
    hr()
      .catch(() => {})
      .finally(() => {
        J(), (window.location.href = '/login');
      });
  }
  function D(l) {
    l === 'logout' ? m() : ge.info(`You clicked ${l}`);
  }
  if (!e)
    return n.exports.jsxDEV(
      'div',
      {
        className: q['fixed-settings'],
        children: n.exports.jsxDEV(
          As,
          {
            trigger: n.exports.jsxDEV(
              le,
              {
                icon: n.exports.jsxDEV(
                  Me,
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
      _(f === 'admin' ? 'user' : 'admin');
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
                      es,
                      { className: q['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: d, lineNumber: 124, columnNumber: 13 },
                      this
                    ),
                    n.exports.jsxDEV(
                      'span',
                      {
                        className: q['user-role'],
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
                      kn,
                      { className: q['dropdown-icon'] },
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
                  Me,
                  { className: q['dropdown-icon'] },
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
                      In,
                      { className: q['dropdown-icon'] },
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
                      Bn,
                      { className: q['dropdown-icon'] },
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
            Xt,
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
                  Tn,
                  { className: q['dropdown-icon'] },
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
      className: q.navbar,
      children: [
        n.exports.jsxDEV(
          'div',
          {
            className: q.left,
            children: n.exports.jsxDEV(
              'div',
              {
                className: q.logo,
                children: [
                  n.exports.jsxDEV(
                    vs,
                    { profile: x, className: q['logo-image'], alt: T },
                    void 0,
                    !1,
                    { fileName: d, lineNumber: 169, columnNumber: 11 },
                    this
                  ),
                  n.exports.jsxDEV(
                    'div',
                    { className: q['logo-name'], children: T },
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
          { className: q.center, children: s && t },
          void 0,
          !1,
          { fileName: d, lineNumber: 177, columnNumber: 7 },
          this
        ),
        n.exports.jsxDEV(
          'ul',
          {
            className: q.right,
            children: [
              n.exports.jsxDEV(
                'li',
                {
                  children: n.exports.jsxDEV(
                    Rn,
                    {
                      triggerElement: n.exports.jsxDEV(
                        Oe,
                        {
                          icon: n.exports.jsxDEV(
                            Mn,
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
                      value: E,
                      triggerProps: {
                        autoAlignPopupWidth: !1,
                        autoAlignPopupMinWidth: !0,
                        position: 'br',
                      },
                      trigger: 'hover',
                      onChange: (l) => {
                        b(l),
                          Xe({ path: 'lang', value: l }),
                          Ye({ path: 'lang', value: l }).catch(() => {});
                        const v = ps[l];
                        ge.info(`${v['message.lang.tips']}${l}`);
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
                    Io,
                    {
                      children: n.exports.jsxDEV(
                        Oe,
                        {
                          icon: n.exports.jsxDEV(
                            Ln,
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
                    $n,
                    {
                      content:
                        R === 'light'
                          ? o['settings.navbar.theme.toDark']
                          : o['settings.navbar.theme.toLight'],
                      children: n.exports.jsxDEV(
                        Oe,
                        {
                          icon:
                            R !== 'dark'
                              ? n.exports.jsxDEV(
                                  On,
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
                                  qn,
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
                            const l = R === 'light' ? 'dark' : 'light';
                            k(l),
                              Xe({ path: 'theme', value: l }),
                              Ye({ path: 'theme', value: l }).catch(() => {});
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
                As,
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
                      ts,
                      {
                        droplist: h,
                        position: 'br',
                        children: n.exports.jsxDEV(
                          Wt,
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
const xr = '_footer_1si67_1';
var Er = { footer: xr },
  vr =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Footer/index.tsx';
function Ps(e = {}) {
  const a = e,
    { className: t } = a,
    s = Be(a, ['className']),
    { lang: o, systemProfile: r } = u.exports.useContext(fe);
  return n.exports.jsxDEV(
    _e.Footer,
    I(p({ className: Ve(Er.footer, t) }, s), { children: Fo(r, o) }),
    void 0,
    !1,
    { fileName: vr, lineNumber: 14, columnNumber: 5 },
    this
  );
}
const _r = '_layout_316fi_1',
  Dr = '_icon_316fi_86',
  yr = '_spin_316fi_111';
var U = {
    layout: _r,
    'layout-navbar': '_layout-navbar_316fi_5',
    'layout-navbar-hidden': '_layout-navbar-hidden_316fi_13',
    'layout-sider': '_layout-sider_316fi_16',
    'collapse-btn': '_collapse-btn_316fi_50',
    'menu-wrapper': '_menu-wrapper_316fi_67',
    icon: Dr,
    'icon-empty': '_icon-empty_316fi_90',
    'layout-content': '_layout-content_316fi_95',
    'layout-content-wrapper': '_layout-content-wrapper_316fi_102',
    'layout-content-wrapper-with-tab':
      '_layout-content-wrapper-with-tab_316fi_105',
    'layout-breadcrumb': '_layout-breadcrumb_316fi_108',
    spin: yr,
  },
  ks = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/utils/routeIcon.tsx';
function jr(e) {
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
function Is(e, t) {
  const o = Un[jr(t || e)];
  return o
    ? n.exports.jsxDEV(
        o,
        { className: U.icon },
        void 0,
        !1,
        { fileName: ks, lineNumber: 31, columnNumber: 5 },
        this
      )
    : n.exports.jsxDEV(
        'div',
        { className: U['icon-empty'] },
        void 0,
        !1,
        { fileName: ks, lineNumber: 33, columnNumber: 5 },
        this
      );
}
var $ = {
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
  j =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/TabBar/index.tsx';
const ee = {
  Reload: 'reload',
  Current: 'current',
  Left: 'left',
  Right: 'right',
  Others: 'others',
  All: 'all',
};
function Bs(e, t) {
  const s = dt(e);
  return t.find((o) => s === `/${o.key}`);
}
function Ts(e, t, s) {
  const o = Bs(e, s);
  if (!o) return null;
  const r = dt(e);
  return {
    title: o.name,
    name: r.replace(/^\//, ''),
    path: e,
    fullPath: `${e}${t || ''}`,
  };
}
function Cr({
  defaultTab: e,
  tabList: t,
  routes: s,
  offsetTop: o = 0,
  onTabsChange: r,
  onCloseTabs: a,
  onReload: i,
}) {
  const c = ct(),
    f = ss(),
    _ = Q(),
    b = `${f.pathname}${f.search || ''}`;
  function E(h) {
    return Bs(h.path, s);
  }
  function R(h) {
    const l = E(h),
      v = (l == null ? void 0 : l.name) || h.title;
    return _[v] || v;
  }
  function k(h) {
    const l = E(h);
    return Is(
      (l == null ? void 0 : l.key) || h.name,
      l == null ? void 0 : l.icon
    );
  }
  function x(h) {
    h.fullPath !== b && c.push(h.fullPath);
  }
  function T(h, l) {
    if (l === 0) return;
    const v = t.filter((Y, H) => H !== l);
    if ((a == null || a([h]), r(v), h.fullPath === b)) {
      const Y = v[l - 1] || v[0];
      c.push(Y.fullPath);
    }
  }
  function J(h = t) {
    return h.findIndex((l) => l.fullPath === b);
  }
  function m(h, l) {
    l.length && (a == null || a(l)), r(h);
  }
  function D(h, l, v) {
    const Y = J();
    if (h === ee.Current) {
      T(l, v);
      return;
    }
    if (h === ee.Left) {
      const L = t.filter((C, V) => V === 0 || V >= v),
        S = t.filter((C, V) => V > 0 && V < v);
      m(L, S), Y > 0 && Y < v && c.push(l.fullPath);
      return;
    }
    if (h === ee.Right) {
      const L = t.filter((C, V) => V <= v),
        S = t.filter((C, V) => V > v);
      m(L, S), Y > v && c.push(l.fullPath);
      return;
    }
    if (h === ee.Others) {
      const L = t.filter((C, V) => V === 0 || V === v),
        S = t.filter((C, V) => V !== 0 && V !== v);
      m(L, S), c.push(l.fullPath);
      return;
    }
    if (h === ee.Reload) {
      i == null || i(l);
      return;
    }
    const H = t.filter((L, S) => S !== 0);
    m([e], H), c.push(e.fullPath);
  }
  function te(h, l) {
    const v = h.fullPath !== b,
      Y = l === 0,
      H = l <= 1,
      L = l === t.length - 1;
    return n.exports.jsxDEV(
      M,
      {
        onClickMenuItem: (S) => D(S, h, l),
        children: [
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: v,
              children: [
                n.exports.jsxDEV(
                  Kn,
                  {},
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 182, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: $['dropdown-label'],
                    children: '\u91CD\u65B0\u52A0\u8F7D',
                  },
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 183, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.Reload,
            !0,
            { fileName: j, lineNumber: 181, columnNumber: 9 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: Y,
              className: $['separate-line'],
              children: [
                n.exports.jsxDEV(
                  ns,
                  {},
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 190, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: $['dropdown-label'],
                    children: '\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 191, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.Current,
            !0,
            { fileName: j, lineNumber: 185, columnNumber: 9 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: H,
              children: [
                n.exports.jsxDEV(
                  Gn,
                  {},
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 194, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: $['dropdown-label'],
                    children: '\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 195, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.Left,
            !0,
            { fileName: j, lineNumber: 193, columnNumber: 9 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: L,
              className: $['separate-line'],
              children: [
                n.exports.jsxDEV(
                  Wn,
                  {},
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 202, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: $['dropdown-label'],
                    children: '\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 203, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.Right,
            !0,
            { fileName: j, lineNumber: 197, columnNumber: 9 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: t.length <= 2 && l !== 0,
              children: [
                n.exports.jsxDEV(
                  Jn,
                  {},
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 209, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: $['dropdown-label'],
                    children: '\u5173\u95ED\u5176\u5B83\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 210, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.Others,
            !0,
            { fileName: j, lineNumber: 205, columnNumber: 9 },
            this
          ),
          n.exports.jsxDEV(
            M.Item,
            {
              disabled: t.length <= 1,
              children: [
                n.exports.jsxDEV(
                  Yn,
                  {},
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 213, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'span',
                  {
                    className: $['dropdown-label'],
                    children: '\u5173\u95ED\u5168\u90E8\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 214, columnNumber: 11 },
                  this
                ),
              ],
            },
            ee.All,
            !0,
            { fileName: j, lineNumber: 212, columnNumber: 9 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: j, lineNumber: 180, columnNumber: 7 },
      this
    );
  }
  return n.exports.jsxDEV(
    'div',
    {
      className: $['tab-bar-container'],
      children: n.exports.jsxDEV(
        zn,
        {
          offsetTop: o,
          children: n.exports.jsxDEV(
            'div',
            {
              className: $['tab-bar-box'],
              children: [
                n.exports.jsxDEV(
                  'div',
                  {
                    className: $['tab-bar-scroll'],
                    children: n.exports.jsxDEV(
                      'div',
                      {
                        className: $['tags-wrap'],
                        children: t.map((h, l) =>
                          n.exports.jsxDEV(
                            ts,
                            {
                              droplist: te(h, l),
                              trigger: 'contextMenu',
                              position: 'bl',
                              children: n.exports.jsxDEV(
                                'span',
                                {
                                  className: Ve(
                                    'arco-tag arco-tag-size-medium arco-tag-checked',
                                    $['tab-tag'],
                                    { [$['link-activated']]: h.fullPath === b }
                                  ),
                                  onClick: () => x(h),
                                  children: [
                                    n.exports.jsxDEV(
                                      'span',
                                      {
                                        className: $['tag-link'],
                                        children: [k(h), R(h)],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: j,
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
                                          onClick: (v) => {
                                            v.stopPropagation(), T(h, l);
                                          },
                                          children: n.exports.jsxDEV(
                                            ns,
                                            {},
                                            void 0,
                                            !1,
                                            {
                                              fileName: j,
                                              lineNumber: 256,
                                              columnNumber: 25,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: j,
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
                                  fileName: j,
                                  lineNumber: 233,
                                  columnNumber: 19,
                                },
                                this
                              ),
                            },
                            h.fullPath,
                            !1,
                            { fileName: j, lineNumber: 227, columnNumber: 17 },
                            this
                          )
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: j, lineNumber: 225, columnNumber: 13 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 224, columnNumber: 11 },
                  this
                ),
                n.exports.jsxDEV(
                  'div',
                  { className: $['tag-bar-operation'] },
                  void 0,
                  !1,
                  { fileName: j, lineNumber: 264, columnNumber: 11 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: j, lineNumber: 223, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: j, lineNumber: 222, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: j, lineNumber: 221, columnNumber: 5 },
    this
  );
}
const Fr = 'marketing:tabs';
function Rs(e) {
  return encodeURIComponent(String(e || 'unknown'));
}
function yt(e, t) {
  if (!!e)
    for (const s of t) {
      const o = e[s];
      if (typeof o == 'string' || typeof o == 'number') return o;
    }
}
function Vr(e) {
  const t = e == null ? void 0 : e.currentTenant,
    s = e == null ? void 0 : e.defaultTenant;
  return {
    tenantCode:
      yt(t, ['tenantCode', 'code', 'tenantId', 'id']) ||
      yt(e || void 0, ['tenantCode', 'tenantId']) ||
      yt(s, ['tenantCode', 'code', 'tenantId', 'id']),
  };
}
function Ms(e) {
  return `${Fr}:${Rs(e.tenantCode)}`;
}
function tt(e, t) {
  return `${Rs(e.tenantCode)}:${encodeURIComponent(t)}`;
}
function Sr(e) {
  try {
    const t = sessionStorage.getItem(Ms(e));
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
function wr(e, t) {
  try {
    sessionStorage.setItem(Ms(e), JSON.stringify(t));
  } catch {}
}
function Ar(e, t) {
  if (!t || de(e.path)) return e;
  const s = `/${t}`.replace(/\/$/, ''),
    o = e.path.startsWith('/') ? e.path : `/${e.path}`,
    r = `${s}${o}`.replace(/\/+/g, '/'),
    a = e.fullPath.indexOf('?'),
    i = a >= 0 ? e.fullPath.slice(a) : '';
  return I(p({}, e), { path: r, fullPath: `${r}${i}` });
}
function Pr(e, t) {
  return !t || !e.length ? e : e.map((s) => Ar(s, t));
}
var jt =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/KeepAliveRoute/index.tsx';
function kr(a) {
  var i = a,
    { identity: e, component: t, render: s, children: o } = i,
    r = Be(i, ['identity', 'component', 'render', 'children']);
  return n.exports.jsxDEV(
    ce,
    I(p({}, r), {
      render: (c) => {
        const f = `${c.location.pathname}${c.location.search || ''}`,
          _ = tt(e, f),
          b = t;
        return n.exports.jsxDEV(
          Hn,
          {
            id: _,
            name: _,
            saveScrollPosition: 'screen',
            children: b
              ? n.exports.jsxDEV(
                  b,
                  p({}, c),
                  void 0,
                  !1,
                  { fileName: jt, lineNumber: 32, columnNumber: 15 },
                  this
                )
              : s
              ? s(c)
              : o,
          },
          void 0,
          !1,
          { fileName: jt, lineNumber: 30, columnNumber: 11 },
          this
        );
      },
    }),
    void 0,
    !1,
    { fileName: jt, lineNumber: 18, columnNumber: 5 },
    this
  );
}
const Ls = (e, t) =>
    !t || !t.length
      ? !1
      : t.join('') === '*'
      ? !0
      : e.every((s) => t.includes(s)),
  Ir = (e, t) => {
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
            return Ls(o, f);
          })
        : !1;
    }
    const r = t[s];
    return Ls(o, r);
  };
var Br = (e, t) => {
  const { requiredPermissions: s, oneOfPerm: o } = e;
  if (Array.isArray(s) && s.length) {
    let r = 0;
    for (const a of s) Ir(a, t) && r++;
    return o ? r > 0 : r === s.length;
  }
  return !0;
};
const st = [
  {
    name: 'menu.dashboard',
    key: 'dashboard',
    children: [
      { name: 'menu.dashboard.workplace', key: 'dashboard/workplace' },
    ],
  },
  { name: 'Example', key: 'example' },
];
function Ct(e) {
  return (e || '').replace(/^\/+/, '').replace(/\/+$/, '');
}
function $s(e) {
  return Ct(e.routerPath || e.resourcePath || e.resourceCode);
}
function Tr(e, t = 'zh-CN') {
  var s, o;
  return (
    ((s = e.resourceNames) == null ? void 0 : s[t]) ||
    ((o = e.resourceNames) == null ? void 0 : o['zh-CN']) ||
    e.resourceName ||
    e.resourceCode ||
    $s(e)
  );
}
function Ft(e = [], t = 'zh-CN') {
  return e
    .slice()
    .sort((s, o) => (s.sortOrder || 0) - (o.sortOrder || 0))
    .map((s) => {
      const o = Ft(s.children || [], t),
        r = {
          name: Tr(s, t),
          resourceNames: s.resourceNames,
          key: $s(s),
          path: s.routerPath || s.resourcePath,
          icon: s.resourceIcon,
          children: o.length ? o : void 0,
          menuType: s.menuType,
          useIndex: s.useIndex,
        };
      return (
        r.key === 'dashboard' && !r.children && (r.children = st[0].children), r
      );
    })
    .filter((s) => s.key);
}
function Os(e, t = 'zh-CN') {
  if (!e) return st;
  const s = _t(e);
  if (!s) return st;
  const o = Ft((s == null ? void 0 : s.menus) || [], t);
  return o.length ? o : [];
}
function qs(e) {
  return e.menuType || '';
}
function Rr(e) {
  const t = e.useIndex;
  return typeof t == 'number' ? t : 0;
}
function Us(e) {
  if (e.key !== void 0) {
    const s = e;
    return Ct(s.path || s.key);
  }
  const t = e;
  return Ct(t.routerPath || t.resourcePath || t.resourceCode);
}
function zs(e) {
  const t = e.children;
  return Array.isArray(t) ? t : [];
}
function Ks(e = []) {
  for (const t of e) {
    if (Rr(t) === 1 && qs(t).toUpperCase() === 'MENU') {
      const o = Us(t);
      if (o) return o;
    }
    const s = zs(t);
    if (s.length) {
      const o = Ks(s);
      if (o) return o;
    }
  }
  return '';
}
function Gs(e = []) {
  for (const t of e) {
    const s = zs(t);
    if (s.length) {
      const o = Gs(s);
      if (o) return o;
    }
    if (qs(t).toUpperCase() === 'MENU') {
      const o = Us(t);
      if (o) return o;
    }
  }
  return '';
}
function Ws(e = []) {
  return Ks(e) || Gs(e);
}
const Mr = (e) => {
    const t = e === 'admin' ? ['*'] : ['read'],
      s = {};
    return (
      st.forEach((o) => {
        o.children &&
          o.children.forEach((r) => {
            s[r.name] = t;
          });
      }),
      s
    );
  },
  Vt = (e, t, s = []) => {
    if (!e.length) return [];
    for (const o of e) {
      const { requiredPermissions: r, oneOfPerm: a } = o;
      let i = !0;
      if ((r && (i = Br({ requiredPermissions: r, oneOfPerm: a }, t)), !!i))
        if (o.children && o.children.length) {
          const c = I(p({}, o), { children: [] });
          Vt(o.children, t, c.children), c.children.length && s.push(c);
        } else s.push(p({}, o));
    }
    return s;
  },
  Lr = (e, t) => {
    const { lang: s = 'zh-CN' } = u.exports.useContext(fe),
      [o, r] = u.exports.useState(() => Os(t, s)),
      [a, i] = u.exports.useState(!1),
      c = u.exports.useMemo(() => JSON.stringify(e || {}), [e]);
    u.exports.useEffect(() => {
      let _ = !1;
      async function b() {
        const E = Os(t, s);
        if ((r(Vt(E, e)), !(!t || _t(t)))) {
          i(!0);
          try {
            const R = await Dt(t);
            if (_) return;
            const k = Ft(R.menus || [], s);
            r(Vt(k, e));
          } finally {
            _ || i(!1);
          }
        }
      }
      return (
        b(),
        () => {
          _ = !0;
        }
      );
    }, [s, c, t, e]);
    const f = u.exports.useMemo(() => Ws(o), [o]);
    return [o, f, a];
  };
function $r() {
  const e = os.parseUrl(je ? '' : window.location.href).query,
    t = {};
  return (
    Object.keys(e).forEach((s) => {
      e[s] === 'true' && (t[s] = !0), e[s] === 'false' && (t[s] = !1);
    }),
    t
  );
}
var Js = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/utils/lazyload.tsx';
function Or(e, t) {
  const s = Xn(e, t);
  return (s.preload = e.requireAsync || e), s;
}
function qr(e) {
  return e.error
    ? (console.error(e.error), null)
    : n.exports.jsxDEV(
        'div',
        {
          className: U.spin,
          children: n.exports.jsxDEV(
            ut,
            {},
            void 0,
            !1,
            { fileName: Js, lineNumber: 26, columnNumber: 7 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: Js, lineNumber: 25, columnNumber: 5 },
        this
      );
}
var Ys = (e) =>
    Or(e, { fallback: qr({ pastDelay: !0, error: !1, timedOut: !1 }) }),
  F = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/layout.tsx';
const Ur = M.Item,
  zr = M.SubMenu,
  Kr = _e.Sider,
  Gr = _e.Content,
  Wr = {
    './pages/example/index.tsx': () =>
      N(
        () => import('./index.51916cb3.js'),
        [
          'assets/index.51916cb3.js',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
        ]
      ),
    './pages/login/banner.tsx': () =>
      N(
        () =>
          Promise.resolve().then(function () {
            return ii;
          }),
        void 0
      ),
    './pages/login/form.tsx': () =>
      N(
        () =>
          Promise.resolve().then(function () {
            return ri;
          }),
        void 0
      ),
    './pages/login/index.tsx': () =>
      N(
        () =>
          Promise.resolve().then(function () {
            return ai;
          }),
        void 0
      ),
    './pages/dashboard/workplace/announcement.tsx': () =>
      N(
        () => import('./announcement.8e5c9052.js'),
        [
          'assets/announcement.8e5c9052.js',
          'assets/announcement.4446c828.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/carousel.tsx': () =>
      N(
        () => import('./carousel.c13a1c5b.js'),
        [
          'assets/carousel.c13a1c5b.js',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
        ]
      ),
    './pages/dashboard/workplace/content-percentage.tsx': () =>
      N(
        () => import('./content-percentage.dada5e14.js'),
        [
          'assets/content-percentage.dada5e14.js',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.9da8e5a8.js',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/docs.tsx': () =>
      N(
        () => import('./docs.f39de9e5.js'),
        [
          'assets/docs.f39de9e5.js',
          'assets/docs.e521c9d6.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/index.tsx': () =>
      N(
        () => import('./index.1a754723.js'),
        [
          'assets/index.1a754723.js',
          'assets/index.0a453fe0.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/overview.ce678905.js',
          'assets/overview.65964fa4.css',
          'assets/index.9da8e5a8.js',
          'assets/index.9464998a.js',
          'assets/popular-contents.65a81150.js',
          'assets/popular-contents.5d7b60b5.css',
          'assets/content-percentage.dada5e14.js',
          'assets/shortcuts.5bca77f9.js',
          'assets/shortcuts.0626e3d2.css',
          'assets/announcement.8e5c9052.js',
          'assets/announcement.4446c828.css',
          'assets/carousel.c13a1c5b.js',
          'assets/docs.f39de9e5.js',
          'assets/docs.e521c9d6.css',
        ]
      ),
    './pages/dashboard/workplace/overview.tsx': () =>
      N(
        () => import('./overview.ce678905.js'),
        [
          'assets/overview.ce678905.js',
          'assets/overview.65964fa4.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.9da8e5a8.js',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/popular-contents.tsx': () =>
      N(
        () => import('./popular-contents.65a81150.js'),
        [
          'assets/popular-contents.65a81150.js',
          'assets/popular-contents.5d7b60b5.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/shortcuts.tsx': () =>
      N(
        () => import('./shortcuts.5bca77f9.js'),
        [
          'assets/shortcuts.5bca77f9.js',
          'assets/shortcuts.0626e3d2.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/exception/403/index.tsx': () =>
      N(
        () =>
          Promise.resolve().then(function () {
            return At;
          }),
        void 0
      ),
    './pages/system/api-groups/index.tsx': () =>
      N(
        () => import('./index.6c6525fd.js'),
        [
          'assets/index.6c6525fd.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/access-permission.04fba575.js',
          'assets/access-control.86021a9b.js',
          'assets/accessControl.941fcf7e.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/apis/index.tsx': () =>
      N(
        () => import('./index.e7a0784d.js'),
        [
          'assets/index.e7a0784d.js',
          'assets/index.52dd629b.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/access-permission.04fba575.js',
          'assets/access-control.86021a9b.js',
          'assets/accessControl.941fcf7e.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/apps/constants.tsx': () =>
      N(
        () =>
          import('./constants.740e270e.js').then(function (e) {
            return e.c;
          }),
        [
          'assets/constants.740e270e.js',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/apps/form.tsx': () =>
      N(
        () =>
          import('./form.dfed6761.js').then(function (e) {
            return e.f;
          }),
        [
          'assets/form.dfed6761.js',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/ArcoSelectInputIds.060661df.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/apps/index.tsx': () =>
      N(
        () => import('./index.ec7607ec.js'),
        [
          'assets/index.ec7607ec.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.bb858e7e.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.7f843fd6.js',
          'assets/form.dfed6761.js',
          'assets/ArcoSelectInputIds.060661df.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
          'assets/useArcoPaginationFieldIds.3edc305a.js',
          'assets/constants.740e270e.js',
        ]
      ),
    './pages/system/auth-diagnosis/index.tsx': () =>
      N(
        () => import('./index.17b0fc12.js'),
        [
          'assets/index.17b0fc12.js',
          'assets/index.dcec7a6e.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/access-control.86021a9b.js',
          'assets/accessControl.941fcf7e.js',
        ]
      ),
    './pages/system/data-scopes/index.tsx': () =>
      N(
        () => import('./index.52a489d2.js'),
        [
          'assets/index.52a489d2.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.8e9fc3f3.js',
          'assets/index.module.0979aea6.css',
          'assets/access-control.86021a9b.js',
        ]
      ),
    './pages/system/depts/index.tsx': () =>
      N(
        () => import('./index.45531072.js'),
        [
          'assets/index.45531072.js',
          'assets/index.9731526f.css',
          'assets/index.544904ce.css',
          'assets/index.87aa3815.css',
          'assets/index.bb858e7e.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/access-control.86021a9b.js',
        ]
      ),
    './pages/system/field-policies/index.tsx': () =>
      N(
        () => import('./index.4c371cef.js'),
        [
          'assets/index.4c371cef.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.8e9fc3f3.js',
          'assets/index.module.0979aea6.css',
          'assets/access-control.86021a9b.js',
          'assets/accessControl.941fcf7e.js',
        ]
      ),
    './pages/system/menus/index.tsx': () =>
      N(
        () => import('./index.12227913.js'),
        [
          'assets/index.12227913.js',
          'assets/index.d1b72007.css',
          'assets/index.544904ce.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.bb858e7e.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/access-permission.04fba575.js',
          'assets/access-control.86021a9b.js',
        ]
      ),
    './pages/system/permission-boundary-packages/constants.tsx': () =>
      N(
        () => import('./constants.e23272c8.js'),
        [
          'assets/constants.e23272c8.js',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/utils.49caa52b.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/permission-boundary-packages/form.tsx': () =>
      N(
        () => import('./form.2725c39e.js'),
        [
          'assets/form.2725c39e.js',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/permission-boundary-packages/index.tsx': () =>
      N(
        () => import('./index.0d0721cb.js'),
        [
          'assets/index.0d0721cb.js',
          'assets/index.d6a549e7.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/index.544904ce.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.7f843fd6.js',
          'assets/permission-boundary-package.4dd508d7.js',
          'assets/form.2725c39e.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
          'assets/access-role.b902211a.js',
          'assets/access-control.86021a9b.js',
          'assets/index.module.0c4d71de.js',
          'assets/index.module.1377d8bd.css',
          'assets/constants.e23272c8.js',
          'assets/utils.49caa52b.js',
        ]
      ),
    './pages/system/permission-relations/index.tsx': () =>
      N(
        () => import('./index.498c0164.js'),
        [
          'assets/index.498c0164.js',
          'assets/index.f7ecdacb.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/access-permission.04fba575.js',
          'assets/access-control.86021a9b.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/permissions/index.tsx': () =>
      N(
        () => import('./index.b3c34f90.js'),
        [
          'assets/index.b3c34f90.js',
          'assets/index.41df8e75.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/access-permission.04fba575.js',
          'assets/access-control.86021a9b.js',
          'assets/accessControl.941fcf7e.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/policies/index.tsx': () =>
      N(
        () => import('./index.ac46dbb6.js'),
        [
          'assets/index.ac46dbb6.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.8e9fc3f3.js',
          'assets/index.module.0979aea6.css',
          'assets/access-control.86021a9b.js',
          'assets/accessControl.941fcf7e.js',
        ]
      ),
    './pages/system/roles/constants.tsx': () =>
      N(
        () => import('./constants.a2e48208.js'),
        [
          'assets/constants.a2e48208.js',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/accessControl.941fcf7e.js',
          'assets/index.module.0c4d71de.js',
          'assets/index.module.1377d8bd.css',
        ]
      ),
    './pages/system/roles/form.tsx': () =>
      N(
        () => import('./form.8b3e9520.js'),
        [
          'assets/form.8b3e9520.js',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.0c4d71de.js',
          'assets/index.module.1377d8bd.css',
        ]
      ),
    './pages/system/roles/index.tsx': () =>
      N(
        () => import('./index.acd4e0ba.js'),
        [
          'assets/index.acd4e0ba.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/index.544904ce.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/access-role.b902211a.js',
          'assets/access-control.86021a9b.js',
          'assets/form.8b3e9520.js',
          'assets/index.module.0c4d71de.js',
          'assets/index.module.1377d8bd.css',
          'assets/constants.a2e48208.js',
          'assets/accessControl.941fcf7e.js',
        ]
      ),
    './pages/system/setting/index.tsx': () =>
      N(
        () => import('./index.cbf07f7b.js'),
        [
          'assets/index.cbf07f7b.js',
          'assets/index.561fe829.css',
          'assets/index.eccebd16.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
        ]
      ),
    './pages/system/tenants/constants.tsx': () =>
      N(
        () => import('./constants.ec7431d8.js'),
        [
          'assets/constants.ec7431d8.js',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/utils.49caa52b.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/tenants/form.tsx': () =>
      N(
        () =>
          import('./form.c4a9924e.js').then(function (e) {
            return e.f;
          }),
        [
          'assets/form.c4a9924e.js',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/ArcoSelectInputIds.060661df.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
        ]
      ),
    './pages/system/tenants/index.tsx': () =>
      N(
        () => import('./index.fff89ab9.js'),
        [
          'assets/index.fff89ab9.js',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.bb858e7e.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.7f843fd6.js',
          'assets/permission-boundary-package.4dd508d7.js',
          'assets/form.c4a9924e.js',
          'assets/ArcoSelectInputIds.060661df.js',
          'assets/index.module.ea069206.js',
          'assets/index.module.7d6de100.css',
          'assets/useArcoPaginationFieldIds.3edc305a.js',
          'assets/constants.ec7431d8.js',
          'assets/utils.49caa52b.js',
        ]
      ),
    './pages/system/users/constants.tsx': () =>
      N(
        () => import('./constants.f79748fa.js'),
        [
          'assets/constants.f79748fa.js',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/accessControl.941fcf7e.js',
          'assets/index.module.078c7882.js',
          'assets/index.module.7633bc66.css',
        ]
      ),
    './pages/system/users/form.tsx': () =>
      N(
        () => import('./form.fa2f2149.js'),
        [
          'assets/form.fa2f2149.js',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.078c7882.js',
          'assets/index.module.7633bc66.css',
        ]
      ),
    './pages/system/users/index.tsx': () =>
      N(
        () => import('./index.39cfdc41.js'),
        [
          'assets/index.39cfdc41.js',
          'assets/index.544904ce.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.87aa3815.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.3821b0be.js',
          'assets/vendor.503ea215.css',
          'assets/accessControl.941fcf7e.js',
          'assets/access-role.b902211a.js',
          'assets/access-control.86021a9b.js',
          'assets/form.fa2f2149.js',
          'assets/index.module.078c7882.js',
          'assets/index.module.7633bc66.css',
          'assets/constants.f79748fa.js',
        ]
      ),
  },
  Hs = new Map();
function Jr(e) {
  const t = Hs.get(e);
  if (t) return t;
  const s =
      Wr[`./pages/${e}/index.tsx`] ||
      (() =>
        N(
          () =>
            Promise.resolve().then(function () {
              return At;
            }),
          void 0
        )),
    o = Ys(s);
  return Hs.set(e, o), o;
}
function Yr(e) {
  const t = [];
  function s(o) {
    o.forEach((r) => {
      r.key && !r.children
        ? t.push(I(p({}, r), { component: Jr(r.key) }))
        : fr(r.children) && r.children.length && s(r.children);
    });
  }
  return s(e), t;
}
function Hr() {
  const e = $r(),
    t = ct(),
    s = ss(),
    { dropScope: o, refreshScope: r } = rs.exports.useAliveController(),
    a = s.pathname,
    i = de(a),
    c = i ? `/${i}` : '',
    f = dt(a),
    _ = os.parseUrl(f).url.slice(1),
    b = Q(),
    { settings: E, userLoading: R, userInfo: k } = ve((g) => g),
    x = u.exports.useMemo(
      () => ({ tenantCode: i || Vr(k).tenantCode }),
      [i, k]
    ),
    T = u.exports.useMemo(() => x.tenantCode || 'unknown', [x.tenantCode]),
    [J, m, D] = Lr(k == null ? void 0 : k.permissions, i),
    te = [_ || m],
    h = (_ || m).split('/'),
    l = h.slice(0, h.length - 1),
    [v, Y] = u.exports.useState([]),
    [H, L] = u.exports.useState(!1),
    [S, C] = u.exports.useState(te),
    [V, ie] = u.exports.useState(l),
    [X, ae] = u.exports.useState([]),
    pe = u.exports.useRef(new Map()),
    rt = u.exports.useRef(new Map()),
    Pt = 60,
    kt = H ? 48 : E.menuWidth,
    ke = E.navbar && e.navbar !== !1,
    It = E.menu && e.menu !== !1,
    xe = It && E.topMenu,
    Bt = It && !xe,
    se = E.tabBar && e.tabBar !== !1,
    nn = E.footer && e.footer !== !1,
    he = u.exports.useMemo(() => Yr(J) || [], [J]),
    Tt = u.exports.useMemo(() => $o(a, k), [a, k]),
    z = u.exports.useMemo(() => {
      if (!m) return null;
      const y = `${Tt.replace(/\/$/, '')}/${m}`.replace(/\/+/g, '/');
      return Ts(y, '', he) || { title: m, name: m, path: y, fullPath: y };
    }, [m, he, Tt]),
    Ee = u.exports.useMemo(
      () => Ts(s.pathname, s.search, he),
      [he, s.pathname, s.search]
    );
  u.exports.useEffect(() => {
    if (!m || !se || !z) return;
    const g = _s(a, k),
      y = Sr(x),
      O = (y == null ? void 0 : y.length) ? Pr(y, g) : null;
    ae((O == null ? void 0 : O.length) ? O : [z]);
  }, [m, z, T, a, se, x, k]),
    u.exports.useEffect(() => {
      if (se || !X.length) return;
      const g = `${s.pathname}${s.search || ''}`;
      X.forEach((y) => {
        y.fullPath !== g && o(tt(x, y.fullPath));
      });
    }, [o, s.pathname, s.search, se, x, X]),
    u.exports.useEffect(() => {
      if (i) return;
      const g = pt();
      t.replace(g ? `/${g}${a}` : '/403');
    }, [t, a, i]),
    u.exports.useEffect(() => {
      !Ee ||
        ae((g) => {
          if (!se) return [Ee];
          const y = z ? [z] : [],
            O = g.length ? g : y;
          return O.length
            ? O.some((ue) => ue.fullPath === Ee.fullPath)
              ? O
              : [...O, Ee]
            : [Ee];
        });
    }, [Ee, z, se]),
    u.exports.useEffect(() => {
      !X.length || wr(x, se ? X : X.slice(-1));
    }, [T, se, x, X]);
  const on = u.exports.useCallback(
      (g) => {
        if (g.length) {
          ae(g);
          return;
        }
        ae(z ? [z] : []);
      },
      [z]
    ),
    rn = u.exports.useCallback(
      (g) => {
        g.forEach((y) => {
          o(tt(x, y.fullPath));
        });
      },
      [o, x]
    ),
    an = u.exports.useCallback(
      (g) => {
        r(tt(x, g.fullPath));
      },
      [r, x]
    );
  function un(g) {
    const y = he.find((K) => K.key === g),
      ue = y.component.preload();
    ls.start(),
      ue.then(() => {
        t.push(y.path ? `${c}${y.path}` : `${c}/${g}`), ls.done();
      });
  }
  function ln() {
    L((g) => !g);
  }
  const cn = Bt ? { paddingLeft: kt } : {},
    Rt = ke ? { paddingTop: Pt } : {},
    mn = p(p({}, cn), Rt),
    Mt = n.exports.jsxDEV(
      M,
      {
        mode: xe ? 'horizontal' : 'vertical',
        collapse: !xe && H,
        onClickMenuItem: un,
        selectedKeys: S,
        openKeys: xe ? void 0 : V,
        onClickSubMenu: (g, y) => {
          xe || ie(y);
        },
        children: fn(b)(J, 1),
      },
      void 0,
      !1,
      { fileName: F, lineNumber: 309, columnNumber: 5 },
      this
    );
  function fn(g) {
    return (
      pe.current.clear(),
      function y(O, ue, K = []) {
        return O.map((A) => {
          const { breadcrumb: dn = !0, ignore: pn } = A,
            hn = Is(A.key, A.icon),
            $t = n.exports.jsxDEV(
              n.exports.Fragment,
              { children: [hn, ' ', g[A.name] || A.name] },
              void 0,
              !0
            );
          pe.current.set(`/${A.key}`, dn ? [...K, A.name] : []);
          const Ot = (A.children || []).filter((it) => {
            const { ignore: qt, breadcrumb: gn = !0 } = it;
            return (
              (qt || A.ignore) &&
                pe.current.set(`/${it.key}`, gn ? [...K, A.name, it.name] : []),
              !qt
            );
          });
          return pn
            ? ''
            : Ot.length
            ? (rt.current.set(A.key, { subMenu: !0 }),
              n.exports.jsxDEV(
                zr,
                { title: $t, children: y(Ot, ue + 1, [...K, A.name]) },
                A.key,
                !1,
                { fileName: F, lineNumber: 360, columnNumber: 13 },
                this
              ))
            : (rt.current.set(A.key, { menuItem: !0 }),
              n.exports.jsxDEV(
                Ur,
                { children: $t },
                A.key,
                !1,
                { fileName: F, lineNumber: 366, columnNumber: 16 },
                this
              ));
        });
      }
    );
  }
  const Lt = u.exports.useCallback(() => {
    const g = f.split('/'),
      y = [],
      O = [];
    for (; g.length > 0; ) {
      const K = g.join('/').replace(/^\//, ''),
        A = rt.current.get(K);
      A && A.menuItem && y.push(K), A && A.subMenu && O.push(K), g.pop();
    }
    C(y),
      ie((ue) => {
        const K = [...ue];
        return (
          O.forEach((A) => {
            K.includes(A) || K.push(A);
          }),
          K
        );
      });
  }, [f]);
  return (
    u.exports.useEffect(() => {
      const g = pe.current.get(f);
      Y(g || []), Lt();
    }, [f, Lt]),
    n.exports.jsxDEV(
      _e,
      {
        className: U.layout,
        children: [
          n.exports.jsxDEV(
            'div',
            {
              className: Ve(U['layout-navbar'], {
                [U['layout-navbar-hidden']]: !ke,
              }),
              children: n.exports.jsxDEV(
                br,
                { show: ke, menu: xe, topMenu: Mt },
                void 0,
                !1,
                { fileName: F, lineNumber: 411, columnNumber: 9 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: F, lineNumber: 406, columnNumber: 7 },
            this
          ),
          R || D
            ? n.exports.jsxDEV(
                ut,
                { className: U.spin },
                void 0,
                !1,
                { fileName: F, lineNumber: 414, columnNumber: 9 },
                this
              )
            : n.exports.jsxDEV(
                _e,
                {
                  children: [
                    Bt &&
                      n.exports.jsxDEV(
                        Kr,
                        {
                          className: U['layout-sider'],
                          width: kt,
                          collapsed: H,
                          onCollapse: L,
                          trigger: null,
                          collapsible: !0,
                          breakpoint: 'xl',
                          style: Rt,
                          children: [
                            n.exports.jsxDEV(
                              'div',
                              { className: U['menu-wrapper'], children: Mt },
                              void 0,
                              !1,
                              {
                                fileName: F,
                                lineNumber: 428,
                                columnNumber: 15,
                              },
                              this
                            ),
                            n.exports.jsxDEV(
                              'div',
                              {
                                className: U['collapse-btn'],
                                onClick: ln,
                                children: H
                                  ? n.exports.jsxDEV(
                                      Zn,
                                      {},
                                      void 0,
                                      !1,
                                      {
                                        fileName: F,
                                        lineNumber: 430,
                                        columnNumber: 30,
                                      },
                                      this
                                    )
                                  : n.exports.jsxDEV(
                                      Qn,
                                      {},
                                      void 0,
                                      !1,
                                      {
                                        fileName: F,
                                        lineNumber: 430,
                                        columnNumber: 51,
                                      },
                                      this
                                    ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: F,
                                lineNumber: 429,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: F, lineNumber: 418, columnNumber: 13 },
                        this
                      ),
                    n.exports.jsxDEV(
                      _e,
                      {
                        className: U['layout-content'],
                        style: mn,
                        children: [
                          se &&
                            z &&
                            n.exports.jsxDEV(
                              Cr,
                              {
                                defaultTab: z,
                                tabList: X.length ? X : [z],
                                routes: he,
                                offsetTop: ke ? Pt : 0,
                                onTabsChange: on,
                                onCloseTabs: rn,
                                onReload: an,
                              },
                              void 0,
                              !1,
                              {
                                fileName: F,
                                lineNumber: 436,
                                columnNumber: 15,
                              },
                              this
                            ),
                          n.exports.jsxDEV(
                            'div',
                            {
                              className: Ve(U['layout-content-wrapper'], {
                                [U['layout-content-wrapper-with-tab']]:
                                  se && !!z,
                              }),
                              children: [
                                !!v.length &&
                                  n.exports.jsxDEV(
                                    'div',
                                    {
                                      className: U['layout-breadcrumb'],
                                      children: n.exports.jsxDEV(
                                        is,
                                        {
                                          children: v.map((g, y) =>
                                            n.exports.jsxDEV(
                                              is.Item,
                                              {
                                                children:
                                                  (typeof g == 'string' &&
                                                    b[g]) ||
                                                  g,
                                              },
                                              y,
                                              !1,
                                              {
                                                fileName: F,
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
                                          fileName: F,
                                          lineNumber: 454,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: F,
                                      lineNumber: 453,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                n.exports.jsxDEV(
                                  Gr,
                                  {
                                    children: n.exports.jsxDEV(
                                      as,
                                      {
                                        children: [
                                          he.map((g, y) =>
                                            n.exports.jsxDEV(
                                              kr,
                                              {
                                                path: `${c}/${g.key}`,
                                                component: g.component,
                                                identity: x,
                                              },
                                              y,
                                              !1,
                                              {
                                                fileName: F,
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
                                                    us,
                                                    { to: `${c}/${m}` },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: F,
                                                      lineNumber: 477,
                                                      columnNumber: 23,
                                                    },
                                                    this
                                                  )
                                                : n.exports.jsxDEV(
                                                    us,
                                                    {
                                                      to: c
                                                        ? `${c}/403`
                                                        : '/403',
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: F,
                                                      lineNumber: 479,
                                                      columnNumber: 23,
                                                    },
                                                    this
                                                  ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: F,
                                              lineNumber: 475,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                          n.exports.jsxDEV(
                                            ce,
                                            {
                                              path: '*',
                                              component: Ys(() =>
                                                N(
                                                  () =>
                                                    Promise.resolve().then(
                                                      function () {
                                                        return At;
                                                      }
                                                    ),
                                                  void 0
                                                )
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: F,
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
                                        fileName: F,
                                        lineNumber: 464,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: F,
                                    lineNumber: 463,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: F, lineNumber: 446, columnNumber: 13 },
                            this
                          ),
                          nn &&
                            n.exports.jsxDEV(
                              Ps,
                              {},
                              void 0,
                              !1,
                              {
                                fileName: F,
                                lineNumber: 491,
                                columnNumber: 28,
                              },
                              this
                            ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: F, lineNumber: 434, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: F, lineNumber: 416, columnNumber: 9 },
                this
              ),
        ],
      },
      void 0,
      !0,
      { fileName: F, lineNumber: 405, columnNumber: 5 },
      this
    )
  );
}
function Xr() {
  return Nt({ url: '/api/system/captcha', method: 'GET' });
}
function Zr() {
  return Nt({
    url: '/api/system/setting/public',
    method: 'GET',
    skipErrorMessage: !0,
  });
}
function gi() {
  return Ne({ url: '/api/system/setting/manage', method: 'GET' });
}
function Ni(e) {
  return Ne({
    url: '/api/system/setting/manage',
    method: 'PUT',
    data: { config: e },
  });
}
function bi(e, t) {
  const s = new FormData();
  return (
    s.append('scene', e),
    s.append('file', t),
    Ne({
      url: '/api/system/upload/image',
      method: 'POST',
      data: s,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  );
}
const Xs = {
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
  Qr = '_container_1rgqq_1',
  ei = '_banner_1rgqq_5',
  ti = '_content_1rgqq_9',
  si = '_footer_1rgqq_14',
  ni = '_logo_1rgqq_20',
  oi = '_carousel_1rgqq_54';
var w = {
    container: Qr,
    banner: ei,
    content: ti,
    footer: si,
    logo: ni,
    'logo-image': '_logo-image_1rgqq_28',
    'logo-text': '_logo-text_1rgqq_34',
    'banner-inner': '_banner-inner_1rgqq_45',
    carousel: oi,
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
  P = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/login/form.tsx';
function Zs() {
  const e = u.exports.useRef(),
    [t, s] = u.exports.useState(''),
    [o, r] = u.exports.useState(!1),
    [a, i] = u.exports.useState(!1),
    [c, f] = u.exports.useState(''),
    [_, b] = u.exports.useState(''),
    [E, R, k] = Pe('loginParams'),
    x = Q(Xs),
    {
      lang: T,
      systemProfile: J,
      refreshSystemProfile: m,
    } = u.exports.useContext(fe),
    D = $e(J, T),
    te = hs(J, T),
    [h, l] = u.exports.useState(!!E);
  function v() {
    i(!0),
      Xr()
        .then((S) => {
          var C;
          f(S.captchaKey),
            b(S.captchaImage),
            (C = e.current) == null || C.setFieldValue('captchaCode', '');
        })
        .finally(() => {
          i(!1);
        });
  }
  async function Y(S, C) {
    var ae;
    const V = (ae = C.defaultTenant) == null ? void 0 : ae.tenantCode;
    if (!V) {
      window.location.href = '/403';
      return;
    }
    h ? R(JSON.stringify({ account: S.account })) : k(),
      localStorage.setItem(De, C.accessToken),
      localStorage.setItem(Ke, V),
      localStorage.setItem(
        qe,
        JSON.stringify(
          I(p({}, C.profile || {}), { defaultTenant: C.defaultTenant })
        )
      ),
      localStorage.setItem('userStatus', 'login'),
      ye(C.theme_setting),
      m == null ||
        m().then((pe) => {
          pe && xs(pe);
        });
    const ie = await Dt(V);
    localStorage.setItem(
      qe,
      JSON.stringify(
        I(p({}, ie.profile || C.profile || {}), {
          defaultTenant: C.defaultTenant,
        })
      )
    );
    const X = Ws(ie.menus || []);
    if (!X) {
      window.location.href = '/403';
      return;
    }
    window.location.href = `/${V}/${X.replace(/^\/+/, '')}`;
  }
  function H(S) {
    s(''),
      r(!0),
      pr(I(p({}, S), { captchaKey: c }))
        .then((C) => Y(S, C))
        .catch((C) => {
          var V, ie;
          s(
            (C == null ? void 0 : C.message) ||
              ((ie =
                (V = C == null ? void 0 : C.response) == null
                  ? void 0
                  : V.data) == null
                ? void 0
                : ie.message) ||
              x['login.form.login.errMsg']
          ),
            v();
        })
        .finally(() => {
          r(!1);
        });
  }
  function L() {
    e.current.validate().then((S) => {
      H(S);
    });
  }
  return (
    u.exports.useEffect(() => {
      v();
    }, []),
    u.exports.useEffect(() => {
      const S = !!E;
      if ((l(S), e.current && S)) {
        const C = JSON.parse(E);
        e.current.setFieldsValue(C);
      }
    }, [E]),
    n.exports.jsxDEV(
      'div',
      {
        className: w['login-form-wrapper'],
        children: [
          n.exports.jsxDEV(
            'div',
            {
              className: w['login-form-title'],
              children: [x['login.form.title'], ' ', D],
            },
            void 0,
            !0,
            { fileName: P, lineNumber: 155, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            'div',
            { className: w['login-form-sub-title'], children: te },
            void 0,
            !1,
            { fileName: P, lineNumber: 158, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            'div',
            { className: w['login-form-error-msg'], children: t },
            void 0,
            !1,
            { fileName: P, lineNumber: 159, columnNumber: 7 },
            this
          ),
          n.exports.jsxDEV(
            Se,
            {
              className: w['login-form'],
              layout: 'vertical',
              ref: e,
              initialValues: { account: 'operator', password: 'Aa123!@#' },
              children: [
                n.exports.jsxDEV(
                  Se.Item,
                  {
                    field: 'account',
                    rules: [
                      {
                        required: !0,
                        message: x['login.form.userName.errMsg'],
                      },
                    ],
                    children: n.exports.jsxDEV(
                      mt,
                      {
                        prefix: n.exports.jsxDEV(
                          es,
                          {},
                          void 0,
                          !1,
                          { fileName: P, lineNumber: 171, columnNumber: 21 },
                          this
                        ),
                        placeholder: x['login.form.userName.placeholder'],
                        onPressEnter: L,
                      },
                      void 0,
                      !1,
                      { fileName: P, lineNumber: 170, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: P, lineNumber: 166, columnNumber: 9 },
                  this
                ),
                n.exports.jsxDEV(
                  Se.Item,
                  {
                    field: 'password',
                    rules: [
                      {
                        required: !0,
                        message: x['login.form.password.errMsg'],
                      },
                    ],
                    children: n.exports.jsxDEV(
                      mt.Password,
                      {
                        prefix: n.exports.jsxDEV(
                          eo,
                          {},
                          void 0,
                          !1,
                          { fileName: P, lineNumber: 181, columnNumber: 21 },
                          this
                        ),
                        placeholder: x['login.form.password.placeholder'],
                        onPressEnter: L,
                      },
                      void 0,
                      !1,
                      { fileName: P, lineNumber: 180, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: P, lineNumber: 176, columnNumber: 9 },
                  this
                ),
                n.exports.jsxDEV(
                  Se.Item,
                  {
                    children: n.exports.jsxDEV(
                      'div',
                      {
                        className: w['login-form-captcha-row'],
                        children: [
                          n.exports.jsxDEV(
                            Se.Item,
                            {
                              field: 'captchaCode',
                              rules: [
                                {
                                  required: !0,
                                  message: x['login.form.captcha.errMsg'],
                                },
                              ],
                              noStyle: !0,
                              children: n.exports.jsxDEV(
                                mt,
                                {
                                  className: w['login-form-captcha-input'],
                                  prefix: n.exports.jsxDEV(
                                    to,
                                    {},
                                    void 0,
                                    !1,
                                    {
                                      fileName: P,
                                      lineNumber: 197,
                                      columnNumber: 25,
                                    },
                                    this
                                  ),
                                  maxLength: 5,
                                  placeholder:
                                    x['login.form.captcha.placeholder'],
                                  onPressEnter: L,
                                },
                                void 0,
                                !1,
                                {
                                  fileName: P,
                                  lineNumber: 195,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: P, lineNumber: 188, columnNumber: 13 },
                            this
                          ),
                          n.exports.jsxDEV(
                            le,
                            {
                              type: 'text',
                              loading: a,
                              className: w['login-form-captcha-btn'],
                              onClick: v,
                              children: _
                                ? n.exports.jsxDEV(
                                    'img',
                                    {
                                      className: w['login-form-captcha-image'],
                                      src: _,
                                      alt: 'captcha',
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: P,
                                      lineNumber: 210,
                                      columnNumber: 17,
                                    },
                                    this
                                  )
                                : x['login.form.captcha.refresh'],
                            },
                            void 0,
                            !1,
                            { fileName: P, lineNumber: 203, columnNumber: 13 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: P, lineNumber: 187, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: P, lineNumber: 186, columnNumber: 9 },
                  this
                ),
                n.exports.jsxDEV(
                  Jt,
                  {
                    size: 16,
                    direction: 'vertical',
                    children: [
                      n.exports.jsxDEV(
                        'div',
                        {
                          className: w['login-form-password-actions'],
                          children: [
                            n.exports.jsxDEV(
                              so,
                              {
                                checked: h,
                                onChange: l,
                                children: x['login.form.rememberPassword'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: P,
                                lineNumber: 223,
                                columnNumber: 13,
                              },
                              this
                            ),
                            n.exports.jsxDEV(
                              no,
                              { children: x['login.form.forgetPassword'] },
                              void 0,
                              !1,
                              {
                                fileName: P,
                                lineNumber: 226,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: P, lineNumber: 222, columnNumber: 11 },
                        this
                      ),
                      n.exports.jsxDEV(
                        le,
                        {
                          type: 'primary',
                          long: !0,
                          onClick: L,
                          loading: o,
                          children: x['login.form.login'],
                        },
                        void 0,
                        !1,
                        { fileName: P, lineNumber: 228, columnNumber: 11 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: P, lineNumber: 221, columnNumber: 9 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: P, lineNumber: 160, columnNumber: 7 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: P, lineNumber: 154, columnNumber: 5 },
      this
    )
  );
}
var ri = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: Zs,
  }),
  Ce = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/login/banner.tsx';
function Qs() {
  const e = Q(Xs),
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
    oo,
    {
      className: w.carousel,
      animation: 'fade',
      children: t.map((s, o) =>
        n.exports.jsxDEV(
          'div',
          {
            children: n.exports.jsxDEV(
              'div',
              {
                className: w['carousel-item'],
                children: [
                  n.exports.jsxDEV(
                    'div',
                    { className: w['carousel-title'], children: s.slogan },
                    void 0,
                    !1,
                    { fileName: Ce, lineNumber: 34, columnNumber: 13 },
                    this
                  ),
                  n.exports.jsxDEV(
                    'div',
                    {
                      className: w['carousel-sub-title'],
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
                      className: w['carousel-image'],
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
var ii = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: Qs,
  }),
  Z = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/login/index.tsx';
function nt() {
  const { lang: e, systemProfile: t } = u.exports.useContext(fe),
    s = $e(t, e);
  return (
    u.exports.useEffect(() => {
      document.body.setAttribute('arco-theme', 'light');
    }, []),
    n.exports.jsxDEV(
      'div',
      {
        className: w.container,
        children: [
          n.exports.jsxDEV(
            'div',
            {
              className: w.logo,
              children: [
                n.exports.jsxDEV(
                  vs,
                  { profile: t, className: w['logo-image'], alt: s },
                  void 0,
                  !1,
                  { fileName: Z, lineNumber: 21, columnNumber: 9 },
                  this
                ),
                n.exports.jsxDEV(
                  'div',
                  { className: w['logo-text'], children: s },
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
              className: w.banner,
              children: n.exports.jsxDEV(
                'div',
                {
                  className: w['banner-inner'],
                  children: n.exports.jsxDEV(
                    Qs,
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
              className: w.content,
              children: [
                n.exports.jsxDEV(
                  'div',
                  {
                    className: w['content-inner'],
                    children: n.exports.jsxDEV(
                      Zs,
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
                    className: w.footer,
                    children: n.exports.jsxDEV(
                      Ps,
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
var ai = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: nt,
});
const ui = {
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
  li = '_wrapper_jqkv8_1',
  ci = '_result_jqkv8_6';
var St = { wrapper: li, result: ci },
  ot =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/exception/403/index.tsx';
function wt() {
  const e = Q(ui),
    t = ct();
  return n.exports.jsxDEV(
    'div',
    {
      className: St.container,
      children: n.exports.jsxDEV(
        'div',
        {
          className: St.wrapper,
          children: n.exports.jsxDEV(
            Gt,
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
                { fileName: ot, lineNumber: 20, columnNumber: 13 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: ot, lineNumber: 15, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: ot, lineNumber: 14, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: ot, lineNumber: 13, columnNumber: 5 },
    this
  );
}
var At = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: wt,
});
function en() {
  return !!localStorage.getItem(De);
}
var tn = (e) => {
  const { mock: t = !0, setup: s } = e;
  t !== !1 && s();
};
je ||
  ((me.XHR.prototype.withCredentials = !0),
  tn({
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
          permissions: Mr(e),
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
const sn = [],
  mi = () =>
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
    ].map((e) => I(p({}, e), { status: sn.indexOf(e.id) === -1 ? 0 : 1 }));
tn({
  setup: () => {
    me.mock(new RegExp('/api/message/list'), () => mi()),
      me.mock(new RegExp('/api/message/read'), (e) => {
        const { ids: t } = JSON.parse(e.body);
        return sn.push(...(t || [])), !0;
      });
  },
});
je || me.setup({ timeout: '500-1500' });
var W = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/main.tsx';
const Fe = ro(vo);
function fi() {
  const e = lt(),
    [t, s] = Pe('arco-lang', 'en-US'),
    [o, r] = Pe('arco-theme', 'light'),
    a = ve((m) => m.settings),
    [i, c] = u.exports.useState(() => ne(So() || we)),
    f = Qt.useRef();
  function _(m) {
    c(ne(m));
  }
  const b = u.exports.useCallback(
    async () => (
      f.current ||
        (f.current = Zr()
          .then((m) => {
            const D = ne(m);
            return _(D), en() && xs(D), D;
          })
          .catch(() => {})
          .finally(() => {
            f.current = void 0;
          })),
      f.current
    ),
    []
  );
  function E(m) {
    ye(m),
      s(m.lang),
      r(m.theme),
      e({ type: 'update-settings', payload: { settings: m.settings } }),
      e({ type: 'update-theme', payload: { theme: m.theme } }),
      Ze(m.theme, m.settings.themeColor);
  }
  function R(m) {
    const D = ye(I(p({}, He()), { lang: m }));
    s(D.lang);
  }
  function k(m) {
    const D = ye(I(p({}, He()), { theme: m }));
    r(D.theme),
      e({ type: 'update-theme', payload: { theme: D.theme } }),
      Ze(D.theme, D.settings.themeColor);
  }
  function x() {
    switch (t) {
      case 'zh-CN':
        return cs;
      case 'en-US':
        return co;
      default:
        return cs;
    }
  }
  async function T() {
    Fe.dispatch({ type: 'update-userInfo', payload: { userLoading: !0 } });
    const m = de();
    try {
      const D = m ? await Dt(m) : null;
      Fe.dispatch({
        type: 'update-userInfo',
        payload: {
          userInfo: I(
            p(p({}, ze() || {}), (D == null ? void 0 : D.profile) || {}),
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
        payload: { userInfo: ze() || { permissions: {} }, userLoading: !1 },
      });
    }
  }
  u.exports.useEffect(() => {
    const m = window.location.pathname,
      D = m === '/login' || m.endsWith('/login'),
      te = m === '/403' || m.endsWith('/403');
    if (en()) {
      if (!de(m) && !D && !te) {
        const v = pt();
        window.location.replace(v ? `/${v}${m}` : '/403');
        return;
      }
      const l = He();
      ye(l),
        s(l.lang),
        r(l.theme),
        Fe.dispatch({
          type: 'update-settings',
          payload: { settings: l.settings },
        }),
        Fe.dispatch({ type: 'update-theme', payload: { theme: l.theme } }),
        Ze(l.theme, l.settings.themeColor),
        T();
    } else b(), !D && !te && (window.location.pathname = '/login');
  }, []),
    u.exports.useEffect(() => {
      (document.title = Co(i, t)), Vo(i);
    }, [t, i]),
    u.exports.useEffect(() => {
      Ze(o, a.themeColor), e({ type: 'update-theme', payload: { theme: o } });
    }, [e, a.themeColor, o]);
  const J = {
    lang: t,
    setLang: R,
    theme: o,
    setTheme: k,
    applyUserTheme: E,
    systemProfile: i,
    setSystemProfile: _,
    refreshSystemProfile: b,
  };
  return n.exports.jsxDEV(
    uo,
    {
      children: n.exports.jsxDEV(
        lo,
        {
          locale: x(),
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
                rs.exports.AliveScope,
                {
                  children: n.exports.jsxDEV(
                    as,
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
                          { path: '/403', component: wt },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 241, columnNumber: 15 },
                          this
                        ),
                        n.exports.jsxDEV(
                          ce,
                          { path: '/:tenantCode/403', component: wt },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 242, columnNumber: 15 },
                          this
                        ),
                        n.exports.jsxDEV(
                          ce,
                          { path: '/', component: Hr },
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
function di() {
  return n.exports.jsxDEV(
    ao,
    {
      store: Fe,
      children: n.exports.jsxDEV(
        fi,
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
io.render(
  n.exports.jsxDEV(
    di,
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
  Ne as a,
  Br as b,
  jr as c,
  Ns as d,
  gi as e,
  Ni as f,
  Nr as g,
  bi as h,
  de as i,
  ne as n,
  _t as r,
  tn as s,
  Q as u,
  xs as w,
};
