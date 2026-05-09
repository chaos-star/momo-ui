var ws = Object.defineProperty,
  Ss = Object.defineProperties;
var ks = Object.getOwnPropertyDescriptors;
var we = Object.getOwnPropertySymbols;
var _t = Object.prototype.hasOwnProperty,
  yt = Object.prototype.propertyIsEnumerable;
var jt = (e, s, o) =>
    s in e
      ? ws(e, s, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[s] = o),
  F = (e, s) => {
    for (var o in s || (s = {})) _t.call(s, o) && jt(e, o, s[o]);
    if (we) for (var o of we(s)) yt.call(s, o) && jt(e, o, s[o]);
    return e;
  },
  $ = (e, s) => Ss(e, ks(s));
var Se = (e, s) => {
  var o = {};
  for (var n in e) _t.call(e, n) && s.indexOf(n) < 0 && (o[n] = e[n]);
  if (e != null && we)
    for (var n of we(e)) s.indexOf(n) < 0 && yt.call(e, n) && (o[n] = e[n]);
  return o;
};
import {
  r as l,
  j as t,
  L as Je,
  R as Vt,
  B as ee,
  A as Ft,
  S as Ct,
  T as ke,
  a as As,
  b as wt,
  c as Bs,
  g as Is,
  I as Ps,
  d as Rs,
  e as Ms,
  f as He,
  h as St,
  i as Ae,
  k as ve,
  u as De,
  l as Xe,
  m as Ts,
  n as Ls,
  D as kt,
  o as At,
  p as $s,
  q as zs,
  s as Os,
  t as Be,
  v as Us,
  w as Ks,
  x as Gs,
  M as pe,
  y as I,
  z as Bt,
  C as Ws,
  E as qs,
  F as Js,
  G as Hs,
  H as Xs,
  J as Ys,
  K as Zs,
  N as Qs,
  O as eo,
  P as to,
  Q as It,
  U as he,
  V as so,
  W as Ye,
  X as Pt,
  Y as oo,
  Z as no,
  _ as Rt,
  $ as ro,
  a0 as io,
  a1 as ao,
  a2 as uo,
  a3 as ne,
  a4 as lo,
  a5 as Mt,
  a6 as co,
  a7 as Tt,
  a8 as mo,
  a9 as fo,
  aa as Lt,
  ab as $t,
  ac as po,
  ad as zt,
  ae as _e,
  af as Ze,
  ag as ho,
  ah as bo,
  ai as No,
  aj as go,
  ak as xo,
  al as re,
  am as Eo,
  an as vo,
  ao as Do,
  ap as _o,
  aq as yo,
  ar as Ot,
  as as jo,
} from './vendor.c4f0d1e5.js';
const Vo = function () {
  const s = document.createElement('link').relList;
  if (s && s.supports && s.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const a of r)
      if (a.type === 'childList')
        for (const i of a.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(r) {
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
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const a = o(r);
    fetch(r.href, a);
  }
};
Vo();
const Fo = !1,
  Co = !0,
  wo = !0,
  So = !1,
  ko = !0,
  Ao = !0,
  Bo = '#165DFF',
  Io = 220;
var Po = {
  colorWeek: Fo,
  navbar: Co,
  menu: wo,
  topMenu: So,
  tabBar: ko,
  footer: Ao,
  themeColor: Bo,
  menuWidth: Io,
};
const Ut = { settings: Po, theme: 'light', userInfo: { permissions: {} } };
function Ro(e = Ut, s) {
  switch (s.type) {
    case 'update-settings': {
      const { settings: o } = s.payload;
      return $(F({}, e), { settings: o });
    }
    case 'update-theme': {
      const { theme: o } = s.payload;
      return $(F({}, e), { theme: o });
    }
    case 'update-userInfo': {
      const { userInfo: o = Ut.userInfo, userLoading: n } = s.payload;
      return $(F({}, e), { userLoading: n, userInfo: o });
    }
    default:
      return e;
  }
}
const Mo = 'modulepreload',
  Kt = {},
  To = '/',
  L = function (s, o) {
    return !o || o.length === 0
      ? s()
      : Promise.all(
          o.map((n) => {
            if (((n = `${To}${n}`), n in Kt)) return;
            Kt[n] = !0;
            const r = n.endsWith('.css'),
              a = r ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${n}"]${a}`)) return;
            const i = document.createElement('link');
            if (
              ((i.rel = r ? 'stylesheet' : Mo),
              r || ((i.as = 'script'), (i.crossOrigin = '')),
              (i.href = n),
              document.head.appendChild(i),
              r)
            )
              return new Promise((u, N) => {
                i.addEventListener('load', u), i.addEventListener('error', N);
              });
          })
        ).then(() => s());
  },
  Ie = l.exports.createContext({}),
  Gt = {
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
function H(e = null) {
  const { lang: s } = l.exports.useContext(Ie);
  return (e || Gt)[s] || {};
}
const Wt = (e) =>
    l.exports.createElement(
      'svg',
      F(
        {
          width: 33,
          height: 33,
          viewBox: '0 0 33 33',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        e
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
  Lo = '_footer_8a7h1_26';
var ye = {
    'message-box': '_message-box_8a7h1_1',
    'message-title': '_message-title_8a7h1_22',
    footer: Lo,
    'footer-item': '_footer-item_8a7h1_29',
  },
  S =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/MessageBox/list.tsx';
function $o(e) {
  const s = H(),
    { data: o, unReadData: n } = e;
  function r(i, u) {
    i.status || (e.onItemClick && e.onItemClick(i, u));
  }
  function a() {
    e.onAllBtnClick && e.onAllBtnClick(n, o);
  }
  return t.exports.jsxDEV(
    Je,
    {
      noDataElement: t.exports.jsxDEV(
        Vt,
        { status: '404', subTitle: s['message.empty.tips'] },
        void 0,
        !1,
        { fileName: S, lineNumber: 55, columnNumber: 22 },
        this
      ),
      footer: t.exports.jsxDEV(
        'div',
        {
          className: ye.footer,
          children: [
            t.exports.jsxDEV(
              'div',
              {
                className: ye['footer-item'],
                children: t.exports.jsxDEV(
                  ee,
                  {
                    type: 'text',
                    size: 'small',
                    onClick: a,
                    children: s['message.allRead'],
                  },
                  void 0,
                  !1,
                  { fileName: S, lineNumber: 59, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: S, lineNumber: 58, columnNumber: 11 },
              this
            ),
            t.exports.jsxDEV(
              'div',
              {
                className: ye['footer-item'],
                children: t.exports.jsxDEV(
                  ee,
                  {
                    type: 'text',
                    size: 'small',
                    children: s['message.seeMore'],
                  },
                  void 0,
                  !1,
                  { fileName: S, lineNumber: 64, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: S, lineNumber: 63, columnNumber: 11 },
              this
            ),
          ],
        },
        void 0,
        !0,
        { fileName: S, lineNumber: 57, columnNumber: 9 },
        this
      ),
      children: o.map((i, u) =>
        t.exports.jsxDEV(
          Je.Item,
          {
            actionLayout: 'vertical',
            style: { opacity: i.status ? 0.5 : 1 },
            children: t.exports.jsxDEV(
              'div',
              {
                style: { cursor: 'pointer' },
                onClick: () => {
                  r(i, u);
                },
                children: t.exports.jsxDEV(
                  Je.Item.Meta,
                  {
                    avatar:
                      i.avatar &&
                      t.exports.jsxDEV(
                        Ft,
                        {
                          shape: 'circle',
                          size: 36,
                          children: t.exports.jsxDEV(
                            'img',
                            { src: i.avatar },
                            void 0,
                            !1,
                            { fileName: S, lineNumber: 91, columnNumber: 21 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: S, lineNumber: 90, columnNumber: 19 },
                        this
                      ),
                    title: t.exports.jsxDEV(
                      'div',
                      {
                        className: ye['message-title'],
                        children: [
                          t.exports.jsxDEV(
                            Ct,
                            {
                              size: 4,
                              children: [
                                t.exports.jsxDEV(
                                  'span',
                                  { children: i.title },
                                  void 0,
                                  !1,
                                  {
                                    fileName: S,
                                    lineNumber: 98,
                                    columnNumber: 21,
                                  },
                                  this
                                ),
                                t.exports.jsxDEV(
                                  ke.Text,
                                  { type: 'secondary', children: i.subTitle },
                                  void 0,
                                  !1,
                                  {
                                    fileName: S,
                                    lineNumber: 99,
                                    columnNumber: 21,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: S, lineNumber: 97, columnNumber: 19 },
                            this
                          ),
                          i.tag && i.tag.text
                            ? t.exports.jsxDEV(
                                As,
                                { color: i.tag.color, children: i.tag.text },
                                void 0,
                                !1,
                                {
                                  fileName: S,
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
                      { fileName: S, lineNumber: 96, columnNumber: 17 },
                      this
                    ),
                    description: t.exports.jsxDEV(
                      'div',
                      {
                        children: [
                          t.exports.jsxDEV(
                            ke.Paragraph,
                            {
                              style: { marginBottom: 0 },
                              ellipsis: !0,
                              children: i.content,
                            },
                            void 0,
                            !1,
                            { fileName: S, lineNumber: 110, columnNumber: 19 },
                            this
                          ),
                          t.exports.jsxDEV(
                            ke.Text,
                            {
                              type: 'secondary',
                              style: { fontSize: 12 },
                              children: i.time,
                            },
                            void 0,
                            !1,
                            { fileName: S, lineNumber: 113, columnNumber: 19 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: S, lineNumber: 109, columnNumber: 17 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: S, lineNumber: 87, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: S, lineNumber: 79, columnNumber: 11 },
              this
            ),
          },
          i.id,
          !1,
          { fileName: S, lineNumber: 72, columnNumber: 9 },
          this
        )
      ),
    },
    void 0,
    !1,
    { fileName: S, lineNumber: 54, columnNumber: 5 },
    this
  );
}
var G =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/MessageBox/index.tsx';
function zo() {
  const e = H(),
    [s, o] = l.exports.useState(!1),
    [n, r] = l.exports.useState({}),
    [a, i] = l.exports.useState([]);
  function u(b = !0) {
    b && o(!0),
      Ae.get('/api/message/list')
        .then((x) => {
          i(x.data);
        })
        .finally(() => {
          b && o(!1);
        });
  }
  function N(b) {
    const x = b.map((P) => P.id);
    Ae.post('/api/message/read', { ids: x }).then(() => {
      u();
    });
  }
  l.exports.useEffect(() => {
    u();
  }, []),
    l.exports.useEffect(() => {
      const b = Is(a, 'type');
      r(b);
    }, [a]);
  const d = [
    {
      key: 'message',
      title: e['message.tab.title.message'],
      titleIcon: t.exports.jsxDEV(
        Ps,
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
      titleIcon: t.exports.jsxDEV(
        Rs,
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
      titleIcon: t.exports.jsxDEV(
        Ms,
        {},
        void 0,
        !1,
        { fileName: G, lineNumber: 71, columnNumber: 18 },
        this
      ),
    },
  ];
  return t.exports.jsxDEV(
    'div',
    {
      className: ye['message-box'],
      children: t.exports.jsxDEV(
        He,
        {
          loading: s,
          style: { display: 'block' },
          children: t.exports.jsxDEV(
            St,
            {
              overflow: 'dropdown',
              type: 'rounded',
              defaultActiveTab: 'message',
              destroyOnHide: !0,
              extra: t.exports.jsxDEV(
                ee,
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
              children: d.map((b) => {
                const { key: x, title: P } = b,
                  B = n[x] || [],
                  g = B.filter((R) => !R.status);
                return t.exports.jsxDEV(
                  St.TabPane,
                  {
                    title: t.exports.jsxDEV(
                      'span',
                      { children: [P, g.length ? `(${g.length})` : ''] },
                      void 0,
                      !0,
                      { fileName: G, lineNumber: 97, columnNumber: 19 },
                      this
                    ),
                    children: t.exports.jsxDEV(
                      $o,
                      {
                        data: B,
                        unReadData: g,
                        onItemClick: (R) => {
                          N([R]);
                        },
                        onAllBtnClick: (R) => {
                          N(R);
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
function Oo({ children: e }) {
  return t.exports.jsxDEV(
    wt,
    {
      trigger: 'hover',
      popup: () =>
        t.exports.jsxDEV(
          zo,
          {},
          void 0,
          !1,
          { fileName: G, lineNumber: 126, columnNumber: 20 },
          this
        ),
      position: 'br',
      unmountOnExit: !1,
      popupAlign: { bottom: 4 },
      children: t.exports.jsxDEV(
        Bs,
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
var Uo = { 'icon-button': '_icon-button_12azl_1' },
  Ko =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/NavBar/IconButton.tsx';
function Go(e, s) {
  const a = e,
    { icon: o, className: n } = a,
    r = Se(a, ['icon', 'className']);
  return t.exports.jsxDEV(
    ee,
    F(
      {
        ref: s,
        icon: o,
        shape: 'circle',
        type: 'secondary',
        className: ve(Uo['icon-button'], n),
      },
      r
    ),
    void 0,
    !1,
    { fileName: Ko, lineNumber: 10, columnNumber: 5 },
    this
  );
}
var Pe = l.exports.forwardRef(Go);
const Wo = '_block_byc7u_1',
  qo = '_title_byc7u_4';
var Qe = { block: Wo, title: qo, 'switch-wrapper': '_switch-wrapper_byc7u_9' },
  ce =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Settings/block.tsx';
function et(e) {
  const { title: s, options: o, children: n } = e,
    r = H(),
    a = De((u) => u.settings),
    i = Xe();
  return t.exports.jsxDEV(
    'div',
    {
      className: Qe.block,
      children: [
        t.exports.jsxDEV(
          'h5',
          { className: Qe.title, children: s },
          void 0,
          !1,
          { fileName: ce, lineNumber: 22, columnNumber: 7 },
          this
        ),
        o &&
          o.map((u) => {
            const N = u.type || 'switch';
            return t.exports.jsxDEV(
              'div',
              {
                className: Qe['switch-wrapper'],
                children: [
                  t.exports.jsxDEV(
                    'span',
                    { children: r[u.name] },
                    void 0,
                    !1,
                    { fileName: ce, lineNumber: 29, columnNumber: 15 },
                    this
                  ),
                  N === 'switch' &&
                    t.exports.jsxDEV(
                      Ts,
                      {
                        size: 'small',
                        checked: !!a[u.value],
                        onChange: (d) => {
                          const b = $(F({}, a), { [u.value]: d });
                          i({
                            type: 'update-settings',
                            payload: { settings: b },
                          }),
                            d &&
                              u.value === 'colorWeek' &&
                              (document.body.style.filter = 'invert(80%)'),
                            !d &&
                              u.value === 'colorWeek' &&
                              (document.body.style.filter = 'none');
                        },
                      },
                      void 0,
                      !1,
                      { fileName: ce, lineNumber: 31, columnNumber: 17 },
                      this
                    ),
                  N === 'number' &&
                    t.exports.jsxDEV(
                      Ls,
                      {
                        style: { width: 80 },
                        size: 'small',
                        value: a.menuWidth,
                        onChange: (d) => {
                          const b = $(F({}, a), { [u.value]: d });
                          i({
                            type: 'update-settings',
                            payload: { settings: b },
                          });
                        },
                      },
                      void 0,
                      !1,
                      { fileName: ce, lineNumber: 54, columnNumber: 17 },
                      this
                    ),
                ],
              },
              u.value,
              !0,
              { fileName: ce, lineNumber: 28, columnNumber: 13 },
              this
            );
          }),
        n,
        t.exports.jsxDEV(
          kt,
          {},
          void 0,
          !1,
          { fileName: ce, lineNumber: 74, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: ce, lineNumber: 21, columnNumber: 5 },
    this
  );
}
const Jo = '_input_77wyg_1',
  Ho = '_color_77wyg_9',
  Xo = '_ul_77wyg_14',
  Yo = '_li_77wyg_19';
var Re = { input: Jo, color: Ho, ul: Xo, li: Yo },
  te =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Settings/color.tsx';
function Zo() {
  const e =
      document.querySelector('body').getAttribute('arco-theme') || 'light',
    s = De((i) => i.settings),
    o = H(),
    n = s.themeColor,
    r = At(n, { list: !0 }),
    a = Xe();
  return t.exports.jsxDEV(
    'div',
    {
      children: [
        t.exports.jsxDEV(
          wt,
          {
            trigger: 'hover',
            position: 'bl',
            popup: () =>
              t.exports.jsxDEV(
                $s,
                {
                  color: n,
                  onChangeComplete: (i) => {
                    const u = i.hex;
                    a({
                      type: 'update-settings',
                      payload: { settings: $(F({}, s), { themeColor: u }) },
                    }),
                      At(u, { list: !0, dark: e === 'dark' }).forEach(
                        (d, b) => {
                          const x = zs(d);
                          document.body.style.setProperty(
                            `--arcoblue-${b + 1}`,
                            x
                          );
                        }
                      );
                  },
                },
                void 0,
                !1,
                { fileName: te, lineNumber: 25, columnNumber: 11 },
                this
              ),
            children: t.exports.jsxDEV(
              'div',
              {
                className: Re.input,
                children: [
                  t.exports.jsxDEV(
                    'div',
                    { className: Re.color, style: { backgroundColor: n } },
                    void 0,
                    !1,
                    { fileName: te, lineNumber: 49, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    'span',
                    { children: n },
                    void 0,
                    !1,
                    { fileName: te, lineNumber: 53, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: te, lineNumber: 48, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: te, lineNumber: 21, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          'ul',
          {
            className: Re.ul,
            children: r.map((i, u) =>
              t.exports.jsxDEV(
                'li',
                { className: Re.li, style: { backgroundColor: i } },
                u,
                !1,
                { fileName: te, lineNumber: 58, columnNumber: 11 },
                this
              )
            ),
          },
          void 0,
          !1,
          { fileName: te, lineNumber: 56, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          ke.Paragraph,
          { style: { fontSize: 12 }, children: o['settings.color.tooltip'] },
          void 0,
          !1,
          { fileName: te, lineNumber: 65, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: te, lineNumber: 20, columnNumber: 5 },
    this
  );
}
var se =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Settings/index.tsx';
function qt(e) {
  const { trigger: s } = e,
    [o, n] = l.exports.useState(!1),
    r = H(),
    a = De((u) => u.settings);
  function i() {
    Gs(JSON.stringify(a, null, 2)),
      pe.success(r['settings.copySettings.message']);
  }
  return t.exports.jsxDEV(
    t.exports.Fragment,
    {
      children: [
        s
          ? Os.cloneElement(s, { onClick: () => n(!0) })
          : t.exports.jsxDEV(
              Pe,
              {
                icon: t.exports.jsxDEV(
                  Be,
                  {},
                  void 0,
                  !1,
                  { fileName: se, lineNumber: 34, columnNumber: 27 },
                  this
                ),
                onClick: () => n(!0),
              },
              void 0,
              !1,
              { fileName: se, lineNumber: 34, columnNumber: 9 },
              this
            ),
        t.exports.jsxDEV(
          Us,
          {
            width: 300,
            title: t.exports.jsxDEV(
              t.exports.Fragment,
              {
                children: [
                  t.exports.jsxDEV(
                    Be,
                    {},
                    void 0,
                    !1,
                    { fileName: se, lineNumber: 40, columnNumber: 13 },
                    this
                  ),
                  r['settings.title'],
                ],
              },
              void 0,
              !0
            ),
            visible: o,
            okText: r['settings.copySettings'],
            cancelText: r['settings.close'],
            onOk: i,
            onCancel: () => n(!1),
            children: [
              t.exports.jsxDEV(
                et,
                {
                  title: r['settings.themeColor'],
                  children: t.exports.jsxDEV(
                    Zo,
                    {},
                    void 0,
                    !1,
                    { fileName: se, lineNumber: 51, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: se, lineNumber: 50, columnNumber: 9 },
                this
              ),
              t.exports.jsxDEV(
                et,
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
                { fileName: se, lineNumber: 53, columnNumber: 9 },
                this
              ),
              t.exports.jsxDEV(
                et,
                {
                  title: r['settings.otherSettings'],
                  options: [{ name: 'settings.colorWeek', value: 'colorWeek' }],
                },
                void 0,
                !1,
                { fileName: se, lineNumber: 64, columnNumber: 9 },
                this
              ),
              t.exports.jsxDEV(
                Ks,
                { content: r['settings.alertContent'] },
                void 0,
                !1,
                { fileName: se, lineNumber: 68, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: se, lineNumber: 36, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0
  );
}
const Qo = '_navbar_158hh_1',
  en = '_left_158hh_10',
  tn = '_logo_158hh_15',
  sn = '_center_158hh_29',
  on = '_right_158hh_45',
  nn = '_username_158hh_60',
  rn = '_round_158hh_63';
var z = {
  navbar: Qo,
  left: en,
  logo: tn,
  'logo-name': '_logo-name_158hh_22',
  center: sn,
  right: on,
  username: nn,
  round: rn,
  'dropdown-icon': '_dropdown-icon_158hh_69',
  'fixed-settings': '_fixed-settings_158hh_74',
};
function an(e) {
  return Object.prototype.toString.call(e) === '[object Array]';
}
const be = (function () {
    try {
      return !(typeof window != 'undefined' && document !== void 0);
    } catch {
      return !0;
    }
  })(),
  un = (e) => {
    if (!be) return localStorage.getItem(e);
  };
function je(e, s) {
  const [o, n] = l.exports.useState(un(e) || s),
    r = (i) => {
      be || (localStorage.setItem(e, i), i !== o && n(i));
    },
    a = () => {
      be || localStorage.removeItem(e);
    };
  return (
    l.exports.useEffect(() => {
      const i = localStorage.getItem(e);
      i && n(i);
    }, [e]),
    [o, r, a]
  );
}
const Me = 'user-profile';
function Ve(e = window.location.pathname) {
  const [, s] = e.split('/');
  return !s || s === 'login' || s === '403' ? '' : s;
}
function tt(e = window.location.pathname) {
  const s = Ve(e);
  if (!s) return e || '/';
  const o = e.replace(`/${s}`, '') || '/';
  return o.startsWith('/') ? o : `/${o}`;
}
function st() {
  const e = localStorage.getItem(Me);
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
const Ne = 'X-Access-Token',
  Te = 'X-Organization',
  Jt = 'Accept-Language',
  ln = 'zh-CN';
function cn() {
  return localStorage.getItem(Ne) || localStorage.getItem('accessToken') || '';
}
function mn() {
  return (
    Ve() ||
    localStorage.getItem(Te) ||
    localStorage.getItem('organization') ||
    ''
  );
}
function dn() {
  return localStorage.getItem(Jt) || ln;
}
function fn(e) {
  return e === 200;
}
function pn(e, s = '\u8BF7\u6C42\u5931\u8D25') {
  return (e == null ? void 0 : e.message) || s;
}
let ot = !1;
function Le(e) {
  var s;
  return (
    (e == null ? void 0 : e.status) === 401 ||
    ((s = e == null ? void 0 : e.data) == null ? void 0 : s.code) === 401
  );
}
function hn() {
  if (ot) return;
  (ot = !0),
    localStorage.removeItem(Ne),
    localStorage.setItem('userStatus', 'logout');
  const { pathname: e } = window.location;
  e === '/login' || e.endsWith('/login')
    ? (ot = !1)
    : window.location.replace('/login');
}
function $e(e) {
  (e == null ? void 0 : e.skipErrorMessage) ||
    pe.error(
      '\u767B\u5F55\u72B6\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55'
    ),
    hn();
}
Ae.interceptors.response.use(
  (e) => (Le(e) && $e(), e),
  (e) => (Le(e.response) && $e(), Promise.reject(e))
);
function bn(e, s) {
  return Le(e)
    ? ($e(s), Promise.reject(e.data))
    : e.status === 200 && fn(e.data.code)
    ? e.data.data
    : ((s == null ? void 0 : s.skipErrorMessage) || pe.error(pn(e.data)),
      Promise.reject(e.data));
}
function Nn(e, s) {
  var o, n, r;
  if (Le(e.response)) return $e(s), Promise.reject(e);
  if (!(s == null ? void 0 : s.skipErrorMessage)) {
    const a =
      ((n = (o = e.response) == null ? void 0 : o.data) == null
        ? void 0
        : n.message) ||
      (((r = e.response) == null ? void 0 : r.status)
        ? `\u8BF7\u6C42\u5931\u8D25\uFF0C\u72B6\u6001\u7801\uFF1A${e.response.status}`
        : e.message ||
          '\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5');
    pe.error(a);
  }
  return Promise.reject(e);
}
function Ht(e) {
  const s = Ae.create({ baseURL: '', timeout: 3e4, validateStatus: () => !0 });
  return (
    s.interceptors.request.use((o) => {
      const n = F({ [Jt]: dn() }, o.headers);
      if (e) {
        const r = cn(),
          a = mn();
        o.headers = $(F({}, n), { [Ne]: r, [Te]: a });
      } else o.headers = n;
      return o;
    }),
    s
  );
}
function Xt(e) {
  return async function (o) {
    try {
      const n = await e.request(o);
      return bn(n, o);
    } catch (n) {
      return Nn(n, o);
    }
  };
}
const Yt = Xt(Ht(!0)),
  Zt = Xt(Ht(!1));
function gn(e) {
  return Zt({ url: '/api/system/users/login', method: 'POST', data: e });
}
function xn() {
  return Yt({ url: '/api/system/users/logout', method: 'POST' });
}
function ze(e) {
  return `${e}-resource`;
}
function nt(e) {
  const s = localStorage.getItem(ze(e));
  if (!s) return null;
  try {
    return JSON.parse(s);
  } catch {
    return localStorage.removeItem(ze(e)), null;
  }
}
function En(e, s) {
  localStorage.setItem(ze(e), JSON.stringify(s));
}
function vn() {
  return Yt({ url: '/api/auth/context', method: 'GET' });
}
async function rt(e) {
  const s = nt(e);
  if (s) return s;
  const o = await vn();
  return En(e, o), o;
}
var m =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/NavBar/index.tsx';
function Dn({ show: e, topMenu: s, menu: o }) {
  const n = H(),
    r = De((k) => k.userInfo),
    a = st(),
    i = (a == null ? void 0 : a.avatar) || (r == null ? void 0 : r.avatar),
    [, u] = je('userStatus'),
    [N, d] = je('userRole', 'admin'),
    { setLang: b, lang: x, theme: P, setTheme: B } = l.exports.useContext(Ie);
  function g() {
    const k = Ve();
    u('logout'),
      localStorage.removeItem(Ne),
      localStorage.removeItem(Te),
      localStorage.removeItem(Me),
      k && localStorage.removeItem(ze(k)),
      localStorage.removeItem('accessToken'),
      localStorage.removeItem('organization');
  }
  function R() {
    xn()
      .catch(() => {})
      .finally(() => {
        g(), (window.location.href = '/login');
      });
  }
  function Y(k) {
    k === 'logout' ? R() : pe.info(`You clicked ${k}`);
  }
  if (!e)
    return t.exports.jsxDEV(
      'div',
      {
        className: z['fixed-settings'],
        children: t.exports.jsxDEV(
          qt,
          {
            trigger: t.exports.jsxDEV(
              ee,
              {
                icon: t.exports.jsxDEV(
                  Be,
                  {},
                  void 0,
                  !1,
                  { fileName: m, lineNumber: 99, columnNumber: 27 },
                  this
                ),
                type: 'primary',
                size: 'large',
              },
              void 0,
              !1,
              { fileName: m, lineNumber: 99, columnNumber: 13 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: m, lineNumber: 97, columnNumber: 9 },
          this
        ),
      },
      void 0,
      !1,
      { fileName: m, lineNumber: 96, columnNumber: 7 },
      this
    );
  const C = () => {
      d(N === 'admin' ? 'user' : 'admin');
    },
    ie = t.exports.jsxDEV(
      I,
      {
        onClickMenuItem: Y,
        children: [
          t.exports.jsxDEV(
            I.SubMenu,
            {
              title: t.exports.jsxDEV(
                t.exports.Fragment,
                {
                  children: [
                    t.exports.jsxDEV(
                      Bt,
                      { className: z['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 117, columnNumber: 13 },
                      this
                    ),
                    t.exports.jsxDEV(
                      'span',
                      {
                        className: z['user-role'],
                        children:
                          N === 'admin'
                            ? n['menu.user.role.admin']
                            : n['menu.user.role.user'],
                      },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 118, columnNumber: 13 },
                      this
                    ),
                  ],
                },
                void 0,
                !0
              ),
              children: t.exports.jsxDEV(
                I.Item,
                {
                  onClick: C,
                  children: [
                    t.exports.jsxDEV(
                      Ws,
                      { className: z['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 127, columnNumber: 11 },
                      this
                    ),
                    n['menu.user.switchRoles'],
                  ],
                },
                'switch role',
                !0,
                { fileName: m, lineNumber: 126, columnNumber: 9 },
                this
              ),
            },
            'role',
            !1,
            { fileName: m, lineNumber: 113, columnNumber: 7 },
            this
          ),
          t.exports.jsxDEV(
            I.Item,
            {
              children: [
                t.exports.jsxDEV(
                  Be,
                  { className: z['dropdown-icon'] },
                  void 0,
                  !1,
                  { fileName: m, lineNumber: 132, columnNumber: 9 },
                  this
                ),
                n['menu.user.setting'],
              ],
            },
            'setting',
            !0,
            { fileName: m, lineNumber: 131, columnNumber: 7 },
            this
          ),
          t.exports.jsxDEV(
            I.SubMenu,
            {
              title: t.exports.jsxDEV(
                'div',
                {
                  style: { width: 80 },
                  children: [
                    t.exports.jsxDEV(
                      qs,
                      { className: z['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 139, columnNumber: 13 },
                      this
                    ),
                    n['message.seeMore'],
                  ],
                },
                void 0,
                !0,
                { fileName: m, lineNumber: 138, columnNumber: 11 },
                this
              ),
              children: t.exports.jsxDEV(
                I.Item,
                {
                  children: [
                    t.exports.jsxDEV(
                      Js,
                      { className: z['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 145, columnNumber: 11 },
                      this
                    ),
                    n['menu.dashboard.workplace'],
                  ],
                },
                'workplace',
                !0,
                { fileName: m, lineNumber: 144, columnNumber: 9 },
                this
              ),
            },
            'more',
            !1,
            { fileName: m, lineNumber: 135, columnNumber: 7 },
            this
          ),
          t.exports.jsxDEV(
            kt,
            { style: { margin: '4px 0' } },
            void 0,
            !1,
            { fileName: m, lineNumber: 150, columnNumber: 7 },
            this
          ),
          t.exports.jsxDEV(
            I.Item,
            {
              children: [
                t.exports.jsxDEV(
                  Hs,
                  { className: z['dropdown-icon'] },
                  void 0,
                  !1,
                  { fileName: m, lineNumber: 152, columnNumber: 9 },
                  this
                ),
                n['navbar.logout'],
              ],
            },
            'logout',
            !0,
            { fileName: m, lineNumber: 151, columnNumber: 7 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: m, lineNumber: 112, columnNumber: 5 },
      this
    );
  return t.exports.jsxDEV(
    'div',
    {
      className: z.navbar,
      children: [
        t.exports.jsxDEV(
          'div',
          {
            className: z.left,
            children: t.exports.jsxDEV(
              'div',
              {
                className: z.logo,
                children: [
                  t.exports.jsxDEV(
                    Wt,
                    {},
                    void 0,
                    !1,
                    { fileName: m, lineNumber: 162, columnNumber: 11 },
                    this
                  ),
                  t.exports.jsxDEV(
                    'div',
                    { className: z['logo-name'], children: 'Arco Pro' },
                    void 0,
                    !1,
                    { fileName: m, lineNumber: 163, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: m, lineNumber: 161, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: m, lineNumber: 160, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          'div',
          { className: z.center, children: o && s },
          void 0,
          !1,
          { fileName: m, lineNumber: 166, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          'ul',
          {
            className: z.right,
            children: [
              t.exports.jsxDEV(
                'li',
                {
                  children: t.exports.jsxDEV(
                    Xs,
                    {
                      triggerElement: t.exports.jsxDEV(
                        Pe,
                        {
                          icon: t.exports.jsxDEV(
                            Ys,
                            {},
                            void 0,
                            !1,
                            { fileName: m, lineNumber: 170, columnNumber: 47 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: m, lineNumber: 170, columnNumber: 29 },
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
                      onChange: (k) => {
                        b(k);
                        const f = Gt[k];
                        pe.info(`${f['message.lang.tips']}${k}`);
                      },
                    },
                    void 0,
                    !1,
                    { fileName: m, lineNumber: 169, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: m, lineNumber: 168, columnNumber: 9 },
                this
              ),
              t.exports.jsxDEV(
                'li',
                {
                  children: t.exports.jsxDEV(
                    Oo,
                    {
                      children: t.exports.jsxDEV(
                        Pe,
                        {
                          icon: t.exports.jsxDEV(
                            Zs,
                            {},
                            void 0,
                            !1,
                            { fileName: m, lineNumber: 192, columnNumber: 31 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: m, lineNumber: 192, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: m, lineNumber: 191, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: m, lineNumber: 190, columnNumber: 9 },
                this
              ),
              t.exports.jsxDEV(
                'li',
                {
                  children: t.exports.jsxDEV(
                    Qs,
                    {
                      content:
                        P === 'light'
                          ? n['settings.navbar.theme.toDark']
                          : n['settings.navbar.theme.toLight'],
                      children: t.exports.jsxDEV(
                        Pe,
                        {
                          icon:
                            P !== 'dark'
                              ? t.exports.jsxDEV(
                                  eo,
                                  {},
                                  void 0,
                                  !1,
                                  {
                                    fileName: m,
                                    lineNumber: 204,
                                    columnNumber: 40,
                                  },
                                  this
                                )
                              : t.exports.jsxDEV(
                                  to,
                                  {},
                                  void 0,
                                  !1,
                                  {
                                    fileName: m,
                                    lineNumber: 204,
                                    columnNumber: 59,
                                  },
                                  this
                                ),
                          onClick: () => B(P === 'light' ? 'dark' : 'light'),
                        },
                        void 0,
                        !1,
                        { fileName: m, lineNumber: 203, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: m, lineNumber: 196, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: m, lineNumber: 195, columnNumber: 9 },
                this
              ),
              t.exports.jsxDEV(
                qt,
                {},
                void 0,
                !1,
                { fileName: m, lineNumber: 209, columnNumber: 9 },
                this
              ),
              r &&
                t.exports.jsxDEV(
                  'li',
                  {
                    children: t.exports.jsxDEV(
                      It,
                      {
                        droplist: ie,
                        position: 'br',
                        children: t.exports.jsxDEV(
                          Ft,
                          {
                            size: 32,
                            style: { cursor: 'pointer' },
                            children:
                              i &&
                              t.exports.jsxDEV(
                                'img',
                                { alt: 'avatar', src: i },
                                void 0,
                                !1,
                                {
                                  fileName: m,
                                  lineNumber: 214,
                                  columnNumber: 28,
                                },
                                this
                              ),
                          },
                          void 0,
                          !1,
                          { fileName: m, lineNumber: 213, columnNumber: 15 },
                          this
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 212, columnNumber: 13 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: m, lineNumber: 211, columnNumber: 11 },
                  this
                ),
            ],
          },
          void 0,
          !0,
          { fileName: m, lineNumber: 167, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: m, lineNumber: 159, columnNumber: 5 },
    this
  );
}
const _n = '_footer_1si67_1';
var yn = { footer: _n },
  jn =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Footer/index.tsx';
function Qt(e = {}) {
  const n = e,
    { className: s } = n,
    o = Se(n, ['className']);
  return t.exports.jsxDEV(
    he.Footer,
    $(F({ className: ve(yn.footer, s) }, o), { children: 'Arco Design Pro' }),
    void 0,
    !1,
    { fileName: jn, lineNumber: 10, columnNumber: 5 },
    this
  );
}
const Vn = '_layout_316fi_1',
  Fn = '_icon_316fi_86',
  Cn = '_spin_316fi_111';
var O = {
    layout: Vn,
    'layout-navbar': '_layout-navbar_316fi_5',
    'layout-navbar-hidden': '_layout-navbar-hidden_316fi_13',
    'layout-sider': '_layout-sider_316fi_16',
    'collapse-btn': '_collapse-btn_316fi_50',
    'menu-wrapper': '_menu-wrapper_316fi_67',
    icon: Fn,
    'icon-empty': '_icon-empty_316fi_90',
    'layout-content': '_layout-content_316fi_95',
    'layout-content-wrapper': '_layout-content-wrapper_316fi_102',
    'layout-content-wrapper-with-tab':
      '_layout-content-wrapper-with-tab_316fi_105',
    'layout-breadcrumb': '_layout-breadcrumb_316fi_108',
    spin: Cn,
  },
  es = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/utils/routeIcon.tsx';
function wn(e) {
  if (!e) return '';
  if (e.startsWith('Icon')) return e;
  const s = e
    .replace(/^icon[-_]?/i, '')
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((o) => o.charAt(0).toUpperCase() + o.slice(1))
    .join('');
  return s ? `Icon${s}` : '';
}
function ts(e, s) {
  const n = so[wn(s || e)];
  return n
    ? t.exports.jsxDEV(
        n,
        { className: O.icon },
        void 0,
        !1,
        { fileName: es, lineNumber: 31, columnNumber: 5 },
        this
      )
    : t.exports.jsxDEV(
        'div',
        { className: O['icon-empty'] },
        void 0,
        !1,
        { fileName: es, lineNumber: 33, columnNumber: 5 },
        this
      );
}
var T = {
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
  E =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/TabBar/index.tsx';
const X = {
  Reload: 'reload',
  Current: 'current',
  Left: 'left',
  Right: 'right',
  Others: 'others',
  All: 'all',
};
function ss(e, s) {
  const o = tt(e);
  return s.find((n) => o === `/${n.key}`);
}
function os(e, s, o) {
  const n = ss(e, o);
  if (!n) return null;
  const r = tt(e);
  return {
    title: n.name,
    name: r.replace(/^\//, ''),
    path: e,
    fullPath: `${e}${s || ''}`,
  };
}
function Sn({
  defaultTab: e,
  tabList: s,
  routes: o,
  offsetTop: n = 0,
  onTabsChange: r,
  onCloseTabs: a,
  onReload: i,
}) {
  const u = Ye(),
    N = Pt(),
    d = H(),
    b = `${N.pathname}${N.search || ''}`;
  function x(f) {
    return ss(f.path, o);
  }
  function P(f) {
    const c = x(f),
      h = (c == null ? void 0 : c.name) || f.title;
    return d[h] || h;
  }
  function B(f) {
    const c = x(f);
    return ts(
      (c == null ? void 0 : c.key) || f.name,
      c == null ? void 0 : c.icon
    );
  }
  function g(f) {
    f.fullPath !== b && u.push(f.fullPath);
  }
  function R(f, c) {
    if (c === 0) return;
    const h = s.filter((A, M) => M !== c);
    if ((a == null || a([f]), r(h), f.fullPath === b)) {
      const A = h[c - 1] || h[0];
      u.push(A.fullPath);
    }
  }
  function Y(f = s) {
    return f.findIndex((c) => c.fullPath === b);
  }
  function C(f, c) {
    c.length && (a == null || a(c)), r(f);
  }
  function ie(f, c, h) {
    const A = Y();
    if (f === X.Current) {
      R(c, h);
      return;
    }
    if (f === X.Left) {
      const D = s.filter((Z, w) => w === 0 || w >= h),
        U = s.filter((Z, w) => w > 0 && w < h);
      C(D, U), A > 0 && A < h && u.push(c.fullPath);
      return;
    }
    if (f === X.Right) {
      const D = s.filter((Z, w) => w <= h),
        U = s.filter((Z, w) => w > h);
      C(D, U), A > h && u.push(c.fullPath);
      return;
    }
    if (f === X.Others) {
      const D = s.filter((Z, w) => w === 0 || w === h),
        U = s.filter((Z, w) => w !== 0 && w !== h);
      C(D, U), u.push(c.fullPath);
      return;
    }
    if (f === X.Reload) {
      i == null || i(c);
      return;
    }
    const M = s.filter((D, U) => U !== 0);
    C([e], M), u.push(e.fullPath);
  }
  function k(f, c) {
    const h = f.fullPath !== b,
      A = c === 0,
      M = c <= 1,
      D = c === s.length - 1;
    return t.exports.jsxDEV(
      I,
      {
        onClickMenuItem: (U) => ie(U, f, c),
        children: [
          t.exports.jsxDEV(
            I.Item,
            {
              disabled: h,
              children: [
                t.exports.jsxDEV(
                  no,
                  {},
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 182, columnNumber: 11 },
                  this
                ),
                t.exports.jsxDEV(
                  'span',
                  {
                    className: T['dropdown-label'],
                    children: '\u91CD\u65B0\u52A0\u8F7D',
                  },
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 183, columnNumber: 11 },
                  this
                ),
              ],
            },
            X.Reload,
            !0,
            { fileName: E, lineNumber: 181, columnNumber: 9 },
            this
          ),
          t.exports.jsxDEV(
            I.Item,
            {
              disabled: A,
              className: T['separate-line'],
              children: [
                t.exports.jsxDEV(
                  Rt,
                  {},
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 190, columnNumber: 11 },
                  this
                ),
                t.exports.jsxDEV(
                  'span',
                  {
                    className: T['dropdown-label'],
                    children: '\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 191, columnNumber: 11 },
                  this
                ),
              ],
            },
            X.Current,
            !0,
            { fileName: E, lineNumber: 185, columnNumber: 9 },
            this
          ),
          t.exports.jsxDEV(
            I.Item,
            {
              disabled: M,
              children: [
                t.exports.jsxDEV(
                  ro,
                  {},
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 194, columnNumber: 11 },
                  this
                ),
                t.exports.jsxDEV(
                  'span',
                  {
                    className: T['dropdown-label'],
                    children: '\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 195, columnNumber: 11 },
                  this
                ),
              ],
            },
            X.Left,
            !0,
            { fileName: E, lineNumber: 193, columnNumber: 9 },
            this
          ),
          t.exports.jsxDEV(
            I.Item,
            {
              disabled: D,
              className: T['separate-line'],
              children: [
                t.exports.jsxDEV(
                  io,
                  {},
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 202, columnNumber: 11 },
                  this
                ),
                t.exports.jsxDEV(
                  'span',
                  {
                    className: T['dropdown-label'],
                    children: '\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 203, columnNumber: 11 },
                  this
                ),
              ],
            },
            X.Right,
            !0,
            { fileName: E, lineNumber: 197, columnNumber: 9 },
            this
          ),
          t.exports.jsxDEV(
            I.Item,
            {
              disabled: s.length <= 2 && c !== 0,
              children: [
                t.exports.jsxDEV(
                  ao,
                  {},
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 209, columnNumber: 11 },
                  this
                ),
                t.exports.jsxDEV(
                  'span',
                  {
                    className: T['dropdown-label'],
                    children: '\u5173\u95ED\u5176\u5B83\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 210, columnNumber: 11 },
                  this
                ),
              ],
            },
            X.Others,
            !0,
            { fileName: E, lineNumber: 205, columnNumber: 9 },
            this
          ),
          t.exports.jsxDEV(
            I.Item,
            {
              disabled: s.length <= 1,
              children: [
                t.exports.jsxDEV(
                  uo,
                  {},
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 213, columnNumber: 11 },
                  this
                ),
                t.exports.jsxDEV(
                  'span',
                  {
                    className: T['dropdown-label'],
                    children: '\u5173\u95ED\u5168\u90E8\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 214, columnNumber: 11 },
                  this
                ),
              ],
            },
            X.All,
            !0,
            { fileName: E, lineNumber: 212, columnNumber: 9 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: E, lineNumber: 180, columnNumber: 7 },
      this
    );
  }
  return t.exports.jsxDEV(
    'div',
    {
      className: T['tab-bar-container'],
      children: t.exports.jsxDEV(
        oo,
        {
          offsetTop: n,
          children: t.exports.jsxDEV(
            'div',
            {
              className: T['tab-bar-box'],
              children: [
                t.exports.jsxDEV(
                  'div',
                  {
                    className: T['tab-bar-scroll'],
                    children: t.exports.jsxDEV(
                      'div',
                      {
                        className: T['tags-wrap'],
                        children: s.map((f, c) =>
                          t.exports.jsxDEV(
                            It,
                            {
                              droplist: k(f, c),
                              trigger: 'contextMenu',
                              position: 'bl',
                              children: t.exports.jsxDEV(
                                'span',
                                {
                                  className: ve(
                                    'arco-tag arco-tag-size-medium arco-tag-checked',
                                    T['tab-tag'],
                                    { [T['link-activated']]: f.fullPath === b }
                                  ),
                                  onClick: () => g(f),
                                  children: [
                                    t.exports.jsxDEV(
                                      'span',
                                      {
                                        className: T['tag-link'],
                                        children: [B(f), P(f)],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: E,
                                        lineNumber: 244,
                                        columnNumber: 21,
                                      },
                                      this
                                    ),
                                    c !== 0 &&
                                      t.exports.jsxDEV(
                                        'span',
                                        {
                                          className:
                                            'arco-icon-hover arco-tag-icon-hover arco-icon-hover-size-medium arco-tag-close-btn',
                                          onClick: (h) => {
                                            h.stopPropagation(), R(f, c);
                                          },
                                          children: t.exports.jsxDEV(
                                            Rt,
                                            {},
                                            void 0,
                                            !1,
                                            {
                                              fileName: E,
                                              lineNumber: 256,
                                              columnNumber: 25,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: E,
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
                                  fileName: E,
                                  lineNumber: 233,
                                  columnNumber: 19,
                                },
                                this
                              ),
                            },
                            f.fullPath,
                            !1,
                            { fileName: E, lineNumber: 227, columnNumber: 17 },
                            this
                          )
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: E, lineNumber: 225, columnNumber: 13 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 224, columnNumber: 11 },
                  this
                ),
                t.exports.jsxDEV(
                  'div',
                  { className: T['tag-bar-operation'] },
                  void 0,
                  !1,
                  { fileName: E, lineNumber: 264, columnNumber: 11 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: E, lineNumber: 223, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: E, lineNumber: 222, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: E, lineNumber: 221, columnNumber: 5 },
    this
  );
}
const kn = 'marketing:tabs';
function ns(e) {
  return encodeURIComponent(String(e || 'unknown'));
}
function it(e, s) {
  if (!!e)
    for (const o of s) {
      const n = e[o];
      if (typeof n == 'string' || typeof n == 'number') return n;
    }
}
function An(e) {
  const s = e == null ? void 0 : e.currentTenant,
    o = e == null ? void 0 : e.defaultTenant;
  return {
    tenantCode:
      it(s, ['tenantCode', 'code', 'tenantId', 'id']) ||
      it(e || void 0, ['tenantCode', 'tenantId']) ||
      it(o, ['tenantCode', 'code', 'tenantId', 'id']),
  };
}
function rs(e) {
  return `${kn}:${ns(e.tenantCode)}`;
}
function Oe(e, s) {
  return `${ns(e.tenantCode)}:${encodeURIComponent(s)}`;
}
function Bn(e) {
  try {
    const s = sessionStorage.getItem(rs(e));
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
function In(e, s) {
  try {
    sessionStorage.setItem(rs(e), JSON.stringify(s));
  } catch {}
}
var at =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/KeepAliveRoute/index.tsx';
function Pn(a) {
  var i = a,
    { identity: e, component: s, render: o, children: n } = i,
    r = Se(i, ['identity', 'component', 'render', 'children']);
  return t.exports.jsxDEV(
    ne,
    $(F({}, r), {
      render: (u) => {
        const N = `${u.location.pathname}${u.location.search || ''}`,
          d = Oe(e, N),
          b = s;
        return t.exports.jsxDEV(
          lo,
          {
            id: d,
            name: d,
            saveScrollPosition: 'screen',
            children: b
              ? t.exports.jsxDEV(
                  b,
                  F({}, u),
                  void 0,
                  !1,
                  { fileName: at, lineNumber: 32, columnNumber: 15 },
                  this
                )
              : o
              ? o(u)
              : n,
          },
          void 0,
          !1,
          { fileName: at, lineNumber: 30, columnNumber: 11 },
          this
        );
      },
    }),
    void 0,
    !1,
    { fileName: at, lineNumber: 18, columnNumber: 5 },
    this
  );
}
const is = (e, s) =>
    !s || !s.length
      ? !1
      : s.join('') === '*'
      ? !0
      : e.every((o) => s.includes(o)),
  Rn = (e, s) => {
    const { resource: o, actions: n = [] } = e;
    if (Array.isArray(s))
      return o instanceof RegExp
        ? s.some((a) => o.test(a))
        : n.length
        ? n.some((a) => s.includes(`${o}:${a}`))
        : s.includes(o);
    if (o instanceof RegExp) {
      const i = Object.keys(s).filter((u) => u.match(o));
      return i.length
        ? i.every((u) => {
            const N = s[u];
            return is(n, N);
          })
        : !1;
    }
    const r = s[o];
    return is(n, r);
  };
var Mn = (e, s) => {
  const { requiredPermissions: o, oneOfPerm: n } = e;
  if (Array.isArray(o) && o.length) {
    let r = 0;
    for (const a of o) Rn(a, s) && r++;
    return n ? r > 0 : r === o.length;
  }
  return !0;
};
const Fe = [
  {
    name: 'menu.dashboard',
    key: 'dashboard',
    children: [
      { name: 'menu.dashboard.workplace', key: 'dashboard/workplace' },
    ],
  },
  { name: 'Example', key: 'example' },
];
function Tn(e) {
  return (e || '').replace(/^\/+/, '').replace(/\/+$/, '');
}
function as(e) {
  return Tn(e.routerPath || e.resourcePath || e.resourceCode);
}
function Ln(e, s = 'zh-CN') {
  var o, n;
  return (
    ((o = e.resourceNames) == null ? void 0 : o[s]) ||
    ((n = e.resourceNames) == null ? void 0 : n['zh-CN']) ||
    e.resourceName ||
    e.resourceCode ||
    as(e)
  );
}
function ut(e = [], s = 'zh-CN') {
  return e
    .slice()
    .sort((o, n) => (o.sortOrder || 0) - (n.sortOrder || 0))
    .map((o) => {
      const n = ut(o.children || [], s),
        r = {
          name: Ln(o, s),
          resourceNames: o.resourceNames,
          key: as(o),
          path: o.routerPath || o.resourcePath,
          icon: o.resourceIcon,
          children: n.length ? n : void 0,
        };
      return (
        r.key === 'dashboard' && !r.children && (r.children = Fe[0].children), r
      );
    })
    .filter((o) => o.key);
}
function us(e, s = 'zh-CN') {
  if (!e) return Fe;
  const o = nt(e),
    n = ut((o == null ? void 0 : o.menus) || [], s);
  return n.length ? n : Fe;
}
const $n = (e) => {
    const s = e === 'admin' ? ['*'] : ['read'],
      o = {};
    return (
      Fe.forEach((n) => {
        n.children &&
          n.children.forEach((r) => {
            o[r.name] = s;
          });
      }),
      o
    );
  },
  lt = (e, s, o = []) => {
    if (!e.length) return [];
    for (const n of e) {
      const { requiredPermissions: r, oneOfPerm: a } = n;
      let i = !0;
      if ((r && (i = Mn({ requiredPermissions: r, oneOfPerm: a }, s)), !!i))
        if (n.children && n.children.length) {
          const u = $(F({}, n), { children: [] });
          lt(n.children, s, u.children), u.children.length && o.push(u);
        } else o.push(F({}, n));
    }
    return o;
  },
  zn = (e, s) => {
    const { lang: o = 'zh-CN' } = l.exports.useContext(Ie),
      [n, r] = l.exports.useState(() => us(s, o)),
      [a, i] = l.exports.useState(!1),
      u = l.exports.useMemo(() => JSON.stringify(e || {}), [e]);
    l.exports.useEffect(() => {
      let d = !1;
      async function b() {
        const x = us(s, o);
        if ((r(lt(x, e)), !(!s || nt(s)))) {
          i(!0);
          try {
            const P = await rt(s);
            if (d) return;
            const B = ut(P.menus || [], o);
            r(lt(B.length ? B : Fe, e));
          } finally {
            d || i(!1);
          }
        }
      }
      return (
        b(),
        () => {
          d = !0;
        }
      );
    }, [o, u, s, e]);
    const N = l.exports.useMemo(() => {
      var b, x;
      const d = n[0];
      return d
        ? ((x =
            (b = d == null ? void 0 : d.children) == null ? void 0 : b[0]) ==
          null
            ? void 0
            : x.key) || d.key
        : '';
    }, [n]);
    return [n, N, a];
  };
function On() {
  const e = Mt.parseUrl(be ? '' : window.location.href).query,
    s = {};
  return (
    Object.keys(e).forEach((o) => {
      e[o] === 'true' && (s[o] = !0), e[o] === 'false' && (s[o] = !1);
    }),
    s
  );
}
var ls = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/utils/lazyload.tsx';
function Un(e, s) {
  const o = co(e, s);
  return (o.preload = e.requireAsync || e), o;
}
function Kn(e) {
  return e.error
    ? (console.error(e.error), null)
    : t.exports.jsxDEV(
        'div',
        {
          className: O.spin,
          children: t.exports.jsxDEV(
            He,
            {},
            void 0,
            !1,
            { fileName: ls, lineNumber: 26, columnNumber: 7 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: ls, lineNumber: 25, columnNumber: 5 },
        this
      );
}
var cs = (e) =>
    Un(e, { fallback: Kn({ pastDelay: !0, error: !1, timedOut: !1 }) }),
  v = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/layout.tsx';
const Gn = I.Item,
  Wn = I.SubMenu,
  qn = he.Sider,
  Jn = he.Content;
function Hn(e) {
  const s = {
      './pages/example/index.tsx': () =>
        L(
          () => import('./index.fccae909.js'),
          [
            'assets/index.fccae909.js',
            'assets/index.e7a6af1d.css',
            'assets/vendor.c4f0d1e5.js',
            'assets/vendor.503ea215.css',
          ]
        ),
      './pages/login/banner.tsx': () =>
        L(
          () =>
            Promise.resolve().then(function () {
              return rr;
            }),
          void 0
        ),
      './pages/login/form.tsx': () =>
        L(
          () =>
            Promise.resolve().then(function () {
              return nr;
            }),
          void 0
        ),
      './pages/login/index.tsx': () =>
        L(
          () =>
            Promise.resolve().then(function () {
              return ir;
            }),
          void 0
        ),
      './pages/dashboard/workplace/announcement.tsx': () =>
        L(
          () => import('./announcement.1de93c9b.js'),
          [
            'assets/announcement.1de93c9b.js',
            'assets/announcement.4446c828.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.c4f0d1e5.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/carousel.tsx': () =>
        L(
          () => import('./carousel.3c91a035.js'),
          [
            'assets/carousel.3c91a035.js',
            'assets/vendor.c4f0d1e5.js',
            'assets/vendor.503ea215.css',
          ]
        ),
      './pages/dashboard/workplace/content-percentage.tsx': () =>
        L(
          () => import('./content-percentage.5a34d777.js'),
          [
            'assets/content-percentage.5a34d777.js',
            'assets/index.e7a6af1d.css',
            'assets/vendor.c4f0d1e5.js',
            'assets/vendor.503ea215.css',
            'assets/index.91c0c8fa.js',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/docs.tsx': () =>
        L(
          () => import('./docs.45dd779c.js'),
          [
            'assets/docs.45dd779c.js',
            'assets/docs.e521c9d6.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.c4f0d1e5.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/index.tsx': () =>
        L(
          () => import('./index.bd02f6f1.js'),
          [
            'assets/index.bd02f6f1.js',
            'assets/index.0a453fe0.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.c4f0d1e5.js',
            'assets/vendor.503ea215.css',
            'assets/overview.f019b948.js',
            'assets/overview.65964fa4.css',
            'assets/index.91c0c8fa.js',
            'assets/index.9464998a.js',
            'assets/popular-contents.f0ccf41d.js',
            'assets/popular-contents.884121de.css',
            'assets/content-percentage.5a34d777.js',
            'assets/shortcuts.683c7565.js',
            'assets/shortcuts.0626e3d2.css',
            'assets/announcement.1de93c9b.js',
            'assets/announcement.4446c828.css',
            'assets/carousel.3c91a035.js',
            'assets/docs.45dd779c.js',
            'assets/docs.e521c9d6.css',
          ]
        ),
      './pages/dashboard/workplace/overview.tsx': () =>
        L(
          () => import('./overview.f019b948.js'),
          [
            'assets/overview.f019b948.js',
            'assets/overview.65964fa4.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.c4f0d1e5.js',
            'assets/vendor.503ea215.css',
            'assets/index.91c0c8fa.js',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/popular-contents.tsx': () =>
        L(
          () => import('./popular-contents.f0ccf41d.js'),
          [
            'assets/popular-contents.f0ccf41d.js',
            'assets/popular-contents.884121de.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.c4f0d1e5.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/shortcuts.tsx': () =>
        L(
          () => import('./shortcuts.683c7565.js'),
          [
            'assets/shortcuts.683c7565.js',
            'assets/shortcuts.0626e3d2.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.c4f0d1e5.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/exception/403/index.tsx': () =>
        L(
          () =>
            Promise.resolve().then(function () {
              return dt;
            }),
          void 0
        ),
    },
    o = [];
  function n(r) {
    r.forEach((a) => {
      if (a.key && !a.children) {
        const i =
          s[`./pages/${a.key}/index.tsx`] ||
          (() =>
            L(
              () =>
                Promise.resolve().then(function () {
                  return dt;
                }),
              void 0
            ));
        (a.component = cs(i)), o.push(a);
      } else an(a.children) && a.children.length && n(a.children);
    });
  }
  return n(e), o;
}
function Xn() {
  const e = On(),
    s = Ye(),
    o = Pt(),
    { dropScope: n, refreshScope: r } = Tt.exports.useAliveController(),
    a = o.pathname,
    i = Ve(a),
    u = i ? `/${i}` : '',
    N = tt(a),
    d = Mt.parseUrl(N).url.slice(1),
    b = H(),
    { settings: x, userLoading: P, userInfo: B } = De((p) => p),
    g = l.exports.useMemo(
      () => ({ tenantCode: i || An(B).tenantCode }),
      [i, B]
    ),
    R = l.exports.useMemo(() => g.tenantCode || 'unknown', [g.tenantCode]),
    [Y, C, ie] = zn(B == null ? void 0 : B.permissions, i),
    k = [d || C],
    f = (d || C).split('/'),
    c = f.slice(0, f.length - 1),
    [h, A] = l.exports.useState([]),
    [M, D] = l.exports.useState(!1),
    [U, Z] = l.exports.useState(k),
    [w, xe] = l.exports.useState(c),
    [q, me] = l.exports.useState([]),
    ae = l.exports.useRef(new Map()),
    We = l.exports.useRef(new Map()),
    ft = 60,
    pt = M ? 48 : x.menuWidth,
    Ce = x.navbar && e.navbar !== !1,
    ht = x.menu && e.menu !== !1,
    de = ht && x.topMenu,
    bt = ht && !de,
    Q = x.tabBar && e.tabBar !== !1,
    bs = x.footer && e.footer !== !1,
    ue = l.exports.useMemo(() => Hn(Y) || [], [Y]),
    oe = l.exports.useMemo(() => {
      const p = `${u}/${C}`;
      return os(p, '', ue) || { title: C, name: C, path: p, fullPath: p };
    }, [C, ue, u]),
    Ee = l.exports.useMemo(
      () => os(o.pathname, o.search, ue),
      [ue, o.pathname, o.search]
    );
  l.exports.useEffect(() => {
    if (!C || !Q) return;
    const p = Bn(g);
    me((p == null ? void 0 : p.length) ? p : [oe]);
  }, [C, oe, R, Q, g]),
    l.exports.useEffect(() => {
      if (Q || !q.length) return;
      const p = `${o.pathname}${o.search || ''}`;
      q.forEach((j) => {
        j.fullPath !== p && n(Oe(g, j.fullPath));
      });
    }, [n, o.pathname, o.search, Q, g, q]),
    l.exports.useEffect(() => {
      !Ee ||
        me((p) => {
          if (!Q) return [Ee];
          const j = p.length ? p : [oe];
          return j.some((le) => le.fullPath === Ee.fullPath) ? j : [...j, Ee];
        });
    }, [Ee, oe, Q]),
    l.exports.useEffect(() => {
      !q.length || In(g, Q ? q : q.slice(-1));
    }, [R, Q, g, q]);
  const Ns = l.exports.useCallback(
      (p) => {
        me(p.length ? p : [oe]);
      },
      [oe]
    ),
    gs = l.exports.useCallback(
      (p) => {
        p.forEach((j) => {
          n(Oe(g, j.fullPath));
        });
      },
      [n, g]
    ),
    xs = l.exports.useCallback(
      (p) => {
        r(Oe(g, p.fullPath));
      },
      [r, g]
    );
  function Es(p) {
    const j = ue.find((K) => K.key === p),
      fe = j.component.preload();
    zt.start(),
      fe.then(() => {
        s.push(j.path ? `${u}${j.path}` : `${u}/${p}`), zt.done();
      });
  }
  function vs() {
    D((p) => !p);
  }
  const Ds = bt ? { paddingLeft: pt } : {},
    Nt = Ce ? { paddingTop: ft } : {},
    _s = F(F({}, Ds), Nt),
    gt = t.exports.jsxDEV(
      I,
      {
        mode: de ? 'horizontal' : 'vertical',
        collapse: !de && M,
        onClickMenuItem: Es,
        selectedKeys: U,
        openKeys: de ? void 0 : w,
        onClickSubMenu: (p, j) => {
          de || xe(j);
        },
        children: ys(b)(Y, 1),
      },
      void 0,
      !1,
      { fileName: v, lineNumber: 245, columnNumber: 5 },
      this
    );
  function ys(p) {
    return (
      ae.current.clear(),
      function j(le, fe, K = []) {
        return le.map((V) => {
          const { breadcrumb: js = !0, ignore: Vs } = V,
            Fs = ts(V.key, V.icon),
            Et = t.exports.jsxDEV(
              t.exports.Fragment,
              { children: [Fs, ' ', p[V.name] || V.name] },
              void 0,
              !0
            );
          ae.current.set(`/${V.key}`, js ? [...K, V.name] : []);
          const vt = (V.children || []).filter((qe) => {
            const { ignore: Dt, breadcrumb: Cs = !0 } = qe;
            return (
              (Dt || V.ignore) &&
                ae.current.set(`/${qe.key}`, Cs ? [...K, V.name, qe.name] : []),
              !Dt
            );
          });
          return Vs
            ? ''
            : vt.length
            ? (We.current.set(V.key, { subMenu: !0 }),
              t.exports.jsxDEV(
                Wn,
                { title: Et, children: j(vt, fe + 1, [...K, V.name]) },
                V.key,
                !1,
                { fileName: v, lineNumber: 296, columnNumber: 13 },
                this
              ))
            : (We.current.set(V.key, { menuItem: !0 }),
              t.exports.jsxDEV(
                Gn,
                { children: Et },
                V.key,
                !1,
                { fileName: v, lineNumber: 302, columnNumber: 16 },
                this
              ));
        });
      }
    );
  }
  const xt = l.exports.useCallback(() => {
    const p = N.split('/'),
      j = [],
      le = [];
    for (; p.length > 0; ) {
      const K = p.join('/').replace(/^\//, ''),
        V = We.current.get(K);
      V && V.menuItem && j.push(K), V && V.subMenu && le.push(K), p.pop();
    }
    Z(j),
      xe((fe) => {
        const K = [...fe];
        return (
          le.forEach((V) => {
            K.includes(V) || K.push(V);
          }),
          K
        );
      });
  }, [N]);
  return (
    l.exports.useEffect(() => {
      const p = ae.current.get(N);
      A(p || []), xt();
    }, [N, xt]),
    t.exports.jsxDEV(
      he,
      {
        className: O.layout,
        children: [
          t.exports.jsxDEV(
            'div',
            {
              className: ve(O['layout-navbar'], {
                [O['layout-navbar-hidden']]: !Ce,
              }),
              children: t.exports.jsxDEV(
                Dn,
                { show: Ce, menu: de, topMenu: gt },
                void 0,
                !1,
                { fileName: v, lineNumber: 347, columnNumber: 9 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: v, lineNumber: 342, columnNumber: 7 },
            this
          ),
          P || ie
            ? t.exports.jsxDEV(
                He,
                { className: O.spin },
                void 0,
                !1,
                { fileName: v, lineNumber: 350, columnNumber: 9 },
                this
              )
            : t.exports.jsxDEV(
                he,
                {
                  children: [
                    bt &&
                      t.exports.jsxDEV(
                        qn,
                        {
                          className: O['layout-sider'],
                          width: pt,
                          collapsed: M,
                          onCollapse: D,
                          trigger: null,
                          collapsible: !0,
                          breakpoint: 'xl',
                          style: Nt,
                          children: [
                            t.exports.jsxDEV(
                              'div',
                              { className: O['menu-wrapper'], children: gt },
                              void 0,
                              !1,
                              {
                                fileName: v,
                                lineNumber: 364,
                                columnNumber: 15,
                              },
                              this
                            ),
                            t.exports.jsxDEV(
                              'div',
                              {
                                className: O['collapse-btn'],
                                onClick: vs,
                                children: M
                                  ? t.exports.jsxDEV(
                                      mo,
                                      {},
                                      void 0,
                                      !1,
                                      {
                                        fileName: v,
                                        lineNumber: 366,
                                        columnNumber: 30,
                                      },
                                      this
                                    )
                                  : t.exports.jsxDEV(
                                      fo,
                                      {},
                                      void 0,
                                      !1,
                                      {
                                        fileName: v,
                                        lineNumber: 366,
                                        columnNumber: 51,
                                      },
                                      this
                                    ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: v,
                                lineNumber: 365,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: v, lineNumber: 354, columnNumber: 13 },
                        this
                      ),
                    t.exports.jsxDEV(
                      he,
                      {
                        className: O['layout-content'],
                        style: _s,
                        children: [
                          Q &&
                            t.exports.jsxDEV(
                              Sn,
                              {
                                defaultTab: oe,
                                tabList: q.length ? q : [oe],
                                routes: ue,
                                offsetTop: Ce ? ft : 0,
                                onTabsChange: Ns,
                                onCloseTabs: gs,
                                onReload: xs,
                              },
                              void 0,
                              !1,
                              {
                                fileName: v,
                                lineNumber: 372,
                                columnNumber: 15,
                              },
                              this
                            ),
                          t.exports.jsxDEV(
                            'div',
                            {
                              className: ve(O['layout-content-wrapper'], {
                                [O['layout-content-wrapper-with-tab']]: Q,
                              }),
                              children: [
                                !!h.length &&
                                  t.exports.jsxDEV(
                                    'div',
                                    {
                                      className: O['layout-breadcrumb'],
                                      children: t.exports.jsxDEV(
                                        Lt,
                                        {
                                          children: h.map((p, j) =>
                                            t.exports.jsxDEV(
                                              Lt.Item,
                                              {
                                                children:
                                                  (typeof p == 'string' &&
                                                    b[p]) ||
                                                  p,
                                              },
                                              j,
                                              !1,
                                              {
                                                fileName: v,
                                                lineNumber: 391,
                                                columnNumber: 23,
                                              },
                                              this
                                            )
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: v,
                                          lineNumber: 389,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: v,
                                      lineNumber: 388,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                t.exports.jsxDEV(
                                  Jn,
                                  {
                                    children: t.exports.jsxDEV(
                                      $t,
                                      {
                                        children: [
                                          ue.map((p, j) =>
                                            t.exports.jsxDEV(
                                              Pn,
                                              {
                                                path: `${u}/${p.key}`,
                                                component: p.component,
                                                identity: g,
                                              },
                                              j,
                                              !1,
                                              {
                                                fileName: v,
                                                lineNumber: 402,
                                                columnNumber: 23,
                                              },
                                              this
                                            )
                                          ),
                                          t.exports.jsxDEV(
                                            ne,
                                            {
                                              exact: !0,
                                              path: u || '/',
                                              children: t.exports.jsxDEV(
                                                po,
                                                { to: `${u}/${C}` },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: v,
                                                  lineNumber: 411,
                                                  columnNumber: 21,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: v,
                                              lineNumber: 410,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                          t.exports.jsxDEV(
                                            ne,
                                            {
                                              path: '*',
                                              component: cs(() =>
                                                L(
                                                  () =>
                                                    Promise.resolve().then(
                                                      function () {
                                                        return dt;
                                                      }
                                                    ),
                                                  void 0
                                                )
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: v,
                                              lineNumber: 413,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: v,
                                        lineNumber: 399,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: v,
                                    lineNumber: 398,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: v, lineNumber: 382, columnNumber: 13 },
                            this
                          ),
                          bs &&
                            t.exports.jsxDEV(
                              Qt,
                              {},
                              void 0,
                              !1,
                              {
                                fileName: v,
                                lineNumber: 420,
                                columnNumber: 28,
                              },
                              this
                            ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: v, lineNumber: 370, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: v, lineNumber: 352, columnNumber: 9 },
                this
              ),
        ],
      },
      void 0,
      !0,
      { fileName: v, lineNumber: 341, columnNumber: 5 },
      this
    )
  );
}
function Yn() {
  return Zt({ url: '/api/system/captcha', method: 'GET' });
}
const ms = {
    'en-US': {
      'login.form.title': 'Login to Arco Design Pro',
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
      'login.form.title': '\u767B\u5F55 Arco Design Pro',
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
  Zn = '_container_1kbuy_1',
  Qn = '_banner_1kbuy_5',
  er = '_content_1kbuy_9',
  tr = '_footer_1kbuy_14',
  sr = '_logo_1kbuy_20',
  or = '_carousel_1kbuy_48';
var _ = {
    container: Zn,
    banner: Qn,
    content: er,
    footer: tr,
    logo: sr,
    'logo-text': '_logo-text_1kbuy_28',
    'banner-inner': '_banner-inner_1kbuy_39',
    carousel: or,
    'carousel-item': '_carousel-item_1kbuy_51',
    'carousel-title': '_carousel-title_1kbuy_58',
    'carousel-sub-title': '_carousel-sub-title_1kbuy_64',
    'carousel-image': '_carousel-image_1kbuy_70',
    'login-form-wrapper': '_login-form-wrapper_1kbuy_74',
    'login-form-title': '_login-form-title_1kbuy_77',
    'login-form-sub-title': '_login-form-sub-title_1kbuy_83',
    'login-form-error-msg': '_login-form-error-msg_1kbuy_88',
    'login-form-password-actions': '_login-form-password-actions_1kbuy_93',
    'login-form-captcha-row': '_login-form-captcha-row_1kbuy_97',
    'login-form-captcha-input': '_login-form-captcha-input_1kbuy_101',
    'login-form-captcha-btn': '_login-form-captcha-btn_1kbuy_104',
    'login-form-captcha-image': '_login-form-captcha-image_1kbuy_112',
    'login-form-register-btn': '_login-form-register-btn_1kbuy_119',
  },
  y = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/login/form.tsx';
function ds() {
  const e = l.exports.useRef(),
    [s, o] = l.exports.useState(''),
    [n, r] = l.exports.useState(!1),
    [a, i] = l.exports.useState(!1),
    [u, N] = l.exports.useState(''),
    [d, b] = l.exports.useState(''),
    [x, P, B] = je('loginParams'),
    g = H(ms),
    [R, Y] = l.exports.useState(!!x);
  function C() {
    i(!0),
      Yn()
        .then((c) => {
          var h;
          N(c.captchaKey),
            b(c.captchaImage),
            (h = e.current) == null || h.setFieldValue('captchaCode', '');
        })
        .finally(() => {
          i(!1);
        });
  }
  async function ie(c, h) {
    var Z, w, xe, q, me, ae;
    const A = (Z = h.defaultTenant) == null ? void 0 : Z.tenantCode;
    if (!A) {
      window.location.href = '/403';
      return;
    }
    R ? P(JSON.stringify({ account: c.account })) : B(),
      localStorage.setItem(Ne, h.accessToken),
      localStorage.setItem(Te, A),
      localStorage.setItem(Me, JSON.stringify(h.profile || {})),
      localStorage.setItem('userStatus', 'login');
    const M = await rt(A);
    localStorage.setItem(Me, JSON.stringify(M.profile || h.profile || {}));
    const D = (w = M.menus) == null ? void 0 : w[0],
      U =
        ((q =
          (xe = D == null ? void 0 : D.children) == null ? void 0 : xe[0]) ==
        null
          ? void 0
          : q.routerPath) ||
        ((ae =
          (me = D == null ? void 0 : D.children) == null ? void 0 : me[0]) ==
        null
          ? void 0
          : ae.resourcePath) ||
        (D == null ? void 0 : D.routerPath) ||
        (D == null ? void 0 : D.resourcePath) ||
        '/dashboard/workplace';
    window.location.href = `/${A}/${U.replace(/^\/+/, '')}`;
  }
  function k(c) {
    o(''),
      r(!0),
      gn($(F({}, c), { captchaKey: u }))
        .then((h) => ie(c, h))
        .catch((h) => {
          var A, M;
          o(
            (h == null ? void 0 : h.message) ||
              ((M =
                (A = h == null ? void 0 : h.response) == null
                  ? void 0
                  : A.data) == null
                ? void 0
                : M.message) ||
              g['login.form.login.errMsg']
          ),
            C();
        })
        .finally(() => {
          r(!1);
        });
  }
  function f() {
    e.current.validate().then((c) => {
      k(c);
    });
  }
  return (
    l.exports.useEffect(() => {
      C();
    }, []),
    l.exports.useEffect(() => {
      const c = !!x;
      if ((Y(c), e.current && c)) {
        const h = JSON.parse(x);
        e.current.setFieldsValue(h);
      }
    }, [x]),
    t.exports.jsxDEV(
      'div',
      {
        className: _['login-form-wrapper'],
        children: [
          t.exports.jsxDEV(
            'div',
            {
              className: _['login-form-title'],
              children: g['login.form.title'],
            },
            void 0,
            !1,
            { fileName: y, lineNumber: 133, columnNumber: 7 },
            this
          ),
          t.exports.jsxDEV(
            'div',
            {
              className: _['login-form-sub-title'],
              children: g['login.form.title'],
            },
            void 0,
            !1,
            { fileName: y, lineNumber: 134, columnNumber: 7 },
            this
          ),
          t.exports.jsxDEV(
            'div',
            { className: _['login-form-error-msg'], children: s },
            void 0,
            !1,
            { fileName: y, lineNumber: 137, columnNumber: 7 },
            this
          ),
          t.exports.jsxDEV(
            _e,
            {
              className: _['login-form'],
              layout: 'vertical',
              ref: e,
              initialValues: { account: 'operator', password: 'Aa123!@#' },
              children: [
                t.exports.jsxDEV(
                  _e.Item,
                  {
                    field: 'account',
                    rules: [
                      {
                        required: !0,
                        message: g['login.form.userName.errMsg'],
                      },
                    ],
                    children: t.exports.jsxDEV(
                      Ze,
                      {
                        prefix: t.exports.jsxDEV(
                          Bt,
                          {},
                          void 0,
                          !1,
                          { fileName: y, lineNumber: 149, columnNumber: 21 },
                          this
                        ),
                        placeholder: g['login.form.userName.placeholder'],
                        onPressEnter: f,
                      },
                      void 0,
                      !1,
                      { fileName: y, lineNumber: 148, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: y, lineNumber: 144, columnNumber: 9 },
                  this
                ),
                t.exports.jsxDEV(
                  _e.Item,
                  {
                    field: 'password',
                    rules: [
                      {
                        required: !0,
                        message: g['login.form.password.errMsg'],
                      },
                    ],
                    children: t.exports.jsxDEV(
                      Ze.Password,
                      {
                        prefix: t.exports.jsxDEV(
                          ho,
                          {},
                          void 0,
                          !1,
                          { fileName: y, lineNumber: 159, columnNumber: 21 },
                          this
                        ),
                        placeholder: g['login.form.password.placeholder'],
                        onPressEnter: f,
                      },
                      void 0,
                      !1,
                      { fileName: y, lineNumber: 158, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: y, lineNumber: 154, columnNumber: 9 },
                  this
                ),
                t.exports.jsxDEV(
                  _e.Item,
                  {
                    children: t.exports.jsxDEV(
                      'div',
                      {
                        className: _['login-form-captcha-row'],
                        children: [
                          t.exports.jsxDEV(
                            _e.Item,
                            {
                              field: 'captchaCode',
                              rules: [
                                {
                                  required: !0,
                                  message: g['login.form.captcha.errMsg'],
                                },
                              ],
                              noStyle: !0,
                              children: t.exports.jsxDEV(
                                Ze,
                                {
                                  className: _['login-form-captcha-input'],
                                  prefix: t.exports.jsxDEV(
                                    bo,
                                    {},
                                    void 0,
                                    !1,
                                    {
                                      fileName: y,
                                      lineNumber: 175,
                                      columnNumber: 25,
                                    },
                                    this
                                  ),
                                  maxLength: 5,
                                  placeholder:
                                    g['login.form.captcha.placeholder'],
                                  onPressEnter: f,
                                },
                                void 0,
                                !1,
                                {
                                  fileName: y,
                                  lineNumber: 173,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: y, lineNumber: 166, columnNumber: 13 },
                            this
                          ),
                          t.exports.jsxDEV(
                            ee,
                            {
                              type: 'text',
                              loading: a,
                              className: _['login-form-captcha-btn'],
                              onClick: C,
                              children: d
                                ? t.exports.jsxDEV(
                                    'img',
                                    {
                                      className: _['login-form-captcha-image'],
                                      src: d,
                                      alt: 'captcha',
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: y,
                                      lineNumber: 188,
                                      columnNumber: 17,
                                    },
                                    this
                                  )
                                : g['login.form.captcha.refresh'],
                            },
                            void 0,
                            !1,
                            { fileName: y, lineNumber: 181, columnNumber: 13 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: y, lineNumber: 165, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: y, lineNumber: 164, columnNumber: 9 },
                  this
                ),
                t.exports.jsxDEV(
                  Ct,
                  {
                    size: 16,
                    direction: 'vertical',
                    children: [
                      t.exports.jsxDEV(
                        'div',
                        {
                          className: _['login-form-password-actions'],
                          children: [
                            t.exports.jsxDEV(
                              No,
                              {
                                checked: R,
                                onChange: Y,
                                children: g['login.form.rememberPassword'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: y,
                                lineNumber: 201,
                                columnNumber: 13,
                              },
                              this
                            ),
                            t.exports.jsxDEV(
                              go,
                              { children: g['login.form.forgetPassword'] },
                              void 0,
                              !1,
                              {
                                fileName: y,
                                lineNumber: 204,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: y, lineNumber: 200, columnNumber: 11 },
                        this
                      ),
                      t.exports.jsxDEV(
                        ee,
                        {
                          type: 'primary',
                          long: !0,
                          onClick: f,
                          loading: n,
                          children: g['login.form.login'],
                        },
                        void 0,
                        !1,
                        { fileName: y, lineNumber: 206, columnNumber: 11 },
                        this
                      ),
                      t.exports.jsxDEV(
                        ee,
                        {
                          type: 'text',
                          long: !0,
                          className: _['login-form-register-btn'],
                          children: g['login.form.register'],
                        },
                        void 0,
                        !1,
                        { fileName: y, lineNumber: 209, columnNumber: 11 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: y, lineNumber: 199, columnNumber: 9 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: y, lineNumber: 138, columnNumber: 7 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: y, lineNumber: 132, columnNumber: 5 },
      this
    )
  );
}
var nr = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: ds,
  }),
  ge = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/login/banner.tsx';
function fs() {
  const e = H(ms),
    s = [
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
  return t.exports.jsxDEV(
    xo,
    {
      className: _.carousel,
      animation: 'fade',
      children: s.map((o, n) =>
        t.exports.jsxDEV(
          'div',
          {
            children: t.exports.jsxDEV(
              'div',
              {
                className: _['carousel-item'],
                children: [
                  t.exports.jsxDEV(
                    'div',
                    { className: _['carousel-title'], children: o.slogan },
                    void 0,
                    !1,
                    { fileName: ge, lineNumber: 34, columnNumber: 13 },
                    this
                  ),
                  t.exports.jsxDEV(
                    'div',
                    {
                      className: _['carousel-sub-title'],
                      children: o.subSlogan,
                    },
                    void 0,
                    !1,
                    { fileName: ge, lineNumber: 35, columnNumber: 13 },
                    this
                  ),
                  t.exports.jsxDEV(
                    'img',
                    {
                      alt: 'banner-image',
                      className: _['carousel-image'],
                      src: o.image,
                    },
                    void 0,
                    !1,
                    { fileName: ge, lineNumber: 36, columnNumber: 13 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: ge, lineNumber: 33, columnNumber: 11 },
              this
            ),
          },
          `${n}`,
          !1,
          { fileName: ge, lineNumber: 32, columnNumber: 9 },
          this
        )
      ),
    },
    void 0,
    !1,
    { fileName: ge, lineNumber: 30, columnNumber: 5 },
    this
  );
}
var rr = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: fs,
  }),
  J = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/login/index.tsx';
function Ue() {
  return (
    l.exports.useEffect(() => {
      document.body.setAttribute('arco-theme', 'light');
    }, []),
    t.exports.jsxDEV(
      'div',
      {
        className: _.container,
        children: [
          t.exports.jsxDEV(
            'div',
            {
              className: _.logo,
              children: [
                t.exports.jsxDEV(
                  Wt,
                  {},
                  void 0,
                  !1,
                  { fileName: J, lineNumber: 16, columnNumber: 9 },
                  this
                ),
                t.exports.jsxDEV(
                  'div',
                  { className: _['logo-text'], children: 'Arco Design Pro' },
                  void 0,
                  !1,
                  { fileName: J, lineNumber: 17, columnNumber: 9 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: J, lineNumber: 15, columnNumber: 7 },
            this
          ),
          t.exports.jsxDEV(
            'div',
            {
              className: _.banner,
              children: t.exports.jsxDEV(
                'div',
                {
                  className: _['banner-inner'],
                  children: t.exports.jsxDEV(
                    fs,
                    {},
                    void 0,
                    !1,
                    { fileName: J, lineNumber: 21, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: J, lineNumber: 20, columnNumber: 9 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: J, lineNumber: 19, columnNumber: 7 },
            this
          ),
          t.exports.jsxDEV(
            'div',
            {
              className: _.content,
              children: [
                t.exports.jsxDEV(
                  'div',
                  {
                    className: _['content-inner'],
                    children: t.exports.jsxDEV(
                      ds,
                      {},
                      void 0,
                      !1,
                      { fileName: J, lineNumber: 26, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: J, lineNumber: 25, columnNumber: 9 },
                  this
                ),
                t.exports.jsxDEV(
                  'div',
                  {
                    className: _.footer,
                    children: t.exports.jsxDEV(
                      Qt,
                      {},
                      void 0,
                      !1,
                      { fileName: J, lineNumber: 29, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: J, lineNumber: 28, columnNumber: 9 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: J, lineNumber: 24, columnNumber: 7 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: J, lineNumber: 14, columnNumber: 5 },
      this
    )
  );
}
Ue.displayName = 'LoginPage';
var ir = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Ue,
});
const ar = {
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
  ur = '_wrapper_jqkv8_1',
  lr = '_result_jqkv8_6';
var ct = { wrapper: ur, result: lr },
  Ke =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/exception/403/index.tsx';
function mt() {
  const e = H(ar),
    s = Ye();
  return t.exports.jsxDEV(
    'div',
    {
      className: ct.container,
      children: t.exports.jsxDEV(
        'div',
        {
          className: ct.wrapper,
          children: t.exports.jsxDEV(
            Vt,
            {
              className: ct.result,
              status: '403',
              subTitle: e['exception.result.403.description'],
              extra: t.exports.jsxDEV(
                ee,
                {
                  type: 'primary',
                  onClick: () => s.push('/login'),
                  children: e['exception.result.403.back'],
                },
                'back',
                !1,
                { fileName: Ke, lineNumber: 20, columnNumber: 13 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: Ke, lineNumber: 15, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: Ke, lineNumber: 14, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: Ke, lineNumber: 13, columnNumber: 5 },
    this
  );
}
var dt = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: mt,
});
function cr() {
  return !!localStorage.getItem(Ne);
}
function mr(e) {
  e === 'dark'
    ? document.body.setAttribute('arco-theme', 'dark')
    : document.body.removeAttribute('arco-theme');
}
var ps = (e) => {
  const {
    mock: s = ['production', 'development'] === 'development',
    setup: o,
  } = e;
  s !== !1 && o();
};
be ||
  ((re.XHR.prototype.withCredentials = !0),
  ps({
    setup: () => {
      const e = window.localStorage.getItem('userRole') || 'admin';
      re.mock(new RegExp('/api/user/userInfo'), () =>
        re.mock({
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
          registrationTime: re.Random.datetime('yyyy-MM-dd HH:mm:ss'),
          permissions: $n(e),
        })
      ),
        re.mock(new RegExp('/api/user/login'), (s) => {
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
const hs = [],
  dr = () =>
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
    ].map((e) => $(F({}, e), { status: hs.indexOf(e.id) === -1 ? 0 : 1 }));
ps({
  setup: () => {
    re.mock(new RegExp('/api/message/list'), () => dr()),
      re.mock(new RegExp('/api/message/read'), (e) => {
        const { ids: s } = JSON.parse(e.body);
        return hs.push(...(s || [])), !0;
      });
  },
});
be || re.setup({ timeout: '500-1500' });
var W = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/main.tsx';
const Ge = Eo(Ro);
function fr() {
  const e = Xe(),
    [s, o] = je('arco-lang', 'en-US'),
    [n, r] = je('arco-theme', 'light');
  function a() {
    switch (s) {
      case 'zh-CN':
        return Ot;
      case 'en-US':
        return jo;
      default:
        return Ot;
    }
  }
  async function i() {
    Ge.dispatch({ type: 'update-userInfo', payload: { userLoading: !0 } });
    const N = Ve();
    try {
      const d = N ? await rt(N) : null;
      Ge.dispatch({
        type: 'update-userInfo',
        payload: {
          userInfo: $(
            F(F({}, st() || {}), (d == null ? void 0 : d.profile) || {}),
            {
              permissions: (d == null ? void 0 : d.permissions) || [],
              fieldPolicies: (d == null ? void 0 : d.fieldPolicies) || {},
            }
          ),
          userLoading: !1,
        },
      });
    } catch {
      Ge.dispatch({
        type: 'update-userInfo',
        payload: { userInfo: st() || { permissions: {} }, userLoading: !1 },
      });
    }
  }
  l.exports.useEffect(() => {
    const N = window.location.pathname,
      d = N === '/login' || N.endsWith('/login'),
      b = N === '/403' || N.endsWith('/403');
    cr() ? i() : !d && !b && (window.location.pathname = '/login');
  }, []),
    l.exports.useEffect(() => {
      mr(n), e({ type: 'update-theme', payload: { theme: n } });
    }, [e, n]);
  const u = { lang: s, setLang: o, theme: n, setTheme: r };
  return t.exports.jsxDEV(
    _o,
    {
      children: t.exports.jsxDEV(
        yo,
        {
          locale: a(),
          componentConfig: {
            Card: { bordered: !1 },
            List: { bordered: !1 },
            Table: { border: !1 },
          },
          children: t.exports.jsxDEV(
            Ie.Provider,
            {
              value: u,
              children: t.exports.jsxDEV(
                Tt.exports.AliveScope,
                {
                  children: t.exports.jsxDEV(
                    $t,
                    {
                      children: [
                        t.exports.jsxDEV(
                          ne,
                          { path: '/login', component: Ue },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 121, columnNumber: 15 },
                          this
                        ),
                        t.exports.jsxDEV(
                          ne,
                          { path: '/:tenantCode/login', component: Ue },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 122, columnNumber: 15 },
                          this
                        ),
                        t.exports.jsxDEV(
                          ne,
                          { path: '/403', component: mt },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 123, columnNumber: 15 },
                          this
                        ),
                        t.exports.jsxDEV(
                          ne,
                          { path: '/:tenantCode/403', component: mt },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 124, columnNumber: 15 },
                          this
                        ),
                        t.exports.jsxDEV(
                          ne,
                          { path: '/', component: Xn },
                          void 0,
                          !1,
                          { fileName: W, lineNumber: 125, columnNumber: 15 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: W, lineNumber: 120, columnNumber: 13 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: W, lineNumber: 119, columnNumber: 11 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: W, lineNumber: 118, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: W, lineNumber: 104, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: W, lineNumber: 103, columnNumber: 5 },
    this
  );
}
function pr() {
  return t.exports.jsxDEV(
    Do,
    {
      store: Ge,
      children: t.exports.jsxDEV(
        fr,
        {},
        void 0,
        !1,
        { fileName: W, lineNumber: 137, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: W, lineNumber: 136, columnNumber: 5 },
    this
  );
}
vo.render(
  t.exports.jsxDEV(
    pr,
    {},
    void 0,
    !1,
    { fileName: W, lineNumber: 142, columnNumber: 17 },
    globalThis
  ),
  document.getElementById('root')
);
export { ps as s, H as u };
