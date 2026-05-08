var ys = Object.defineProperty,
  js = Object.defineProperties;
var Vs = Object.getOwnPropertyDescriptors;
var Ve = Object.getOwnPropertySymbols;
var gt = Object.prototype.hasOwnProperty,
  xt = Object.prototype.propertyIsEnumerable;
var Et = (t, s, o) =>
    s in t
      ? ys(t, s, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[s] = o),
  C = (t, s) => {
    for (var o in s || (s = {})) gt.call(s, o) && Et(t, o, s[o]);
    if (Ve) for (var o of Ve(s)) xt.call(s, o) && Et(t, o, s[o]);
    return t;
  },
  $ = (t, s) => js(t, Vs(s));
var Fe = (t, s) => {
  var o = {};
  for (var n in t) gt.call(t, n) && s.indexOf(n) < 0 && (o[n] = t[n]);
  if (t != null && Ve)
    for (var n of Ve(t)) s.indexOf(n) < 0 && xt.call(t, n) && (o[n] = t[n]);
  return o;
};
import {
  r as l,
  j as e,
  L as Oe,
  R as vt,
  B as Y,
  A as Dt,
  S as _t,
  T as Ce,
  a as Fs,
  b as yt,
  c as Cs,
  g as ws,
  I as Ss,
  d as ks,
  e as As,
  f as ze,
  h as jt,
  i as Ue,
  k as pe,
  u as he,
  l as Ke,
  m as Bs,
  n as Is,
  D as Vt,
  o as Ft,
  p as Ps,
  q as Rs,
  s as Ms,
  t as we,
  v as Ts,
  w as Ls,
  x as $s,
  M as be,
  y as A,
  z as Ct,
  C as wt,
  E as Os,
  F as St,
  G as zs,
  H as Us,
  J as Ks,
  K as Gs,
  N as Ws,
  O as qs,
  P as Js,
  Q as kt,
  U as ce,
  V as Ge,
  W as At,
  X as Hs,
  Y as Xs,
  Z as Bt,
  _ as Ys,
  $ as Zs,
  a0 as Qs,
  a1 as eo,
  a2 as oe,
  a3 as to,
  a4 as It,
  a5 as so,
  a6 as Pt,
  a7 as oo,
  a8 as no,
  a9 as Rt,
  aa as Mt,
  ab as ro,
  ac as Tt,
  ad as Ne,
  ae as We,
  af as io,
  ag as ao,
  ah as uo,
  ai as lo,
  aj as co,
  ak as ne,
  al as mo,
  am as fo,
  an as po,
  ao as ho,
  ap as bo,
  aq as Lt,
  ar as No,
} from './vendor.aa22cee8.js';
const go = function () {
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
go();
const xo = !1,
  Eo = !0,
  vo = !0,
  Do = !1,
  _o = !0,
  yo = !0,
  jo = '#165DFF',
  Vo = 220;
var Fo = {
  colorWeek: xo,
  navbar: Eo,
  menu: vo,
  topMenu: Do,
  tabBar: _o,
  footer: yo,
  themeColor: jo,
  menuWidth: Vo,
};
const $t = { settings: Fo, theme: 'light', userInfo: { permissions: {} } };
function Co(t = $t, s) {
  switch (s.type) {
    case 'update-settings': {
      const { settings: o } = s.payload;
      return $(C({}, t), { settings: o });
    }
    case 'update-theme': {
      const { theme: o } = s.payload;
      return $(C({}, t), { theme: o });
    }
    case 'update-userInfo': {
      const { userInfo: o = $t.userInfo, userLoading: n } = s.payload;
      return $(C({}, t), { userLoading: n, userInfo: o });
    }
    default:
      return t;
  }
}
const wo = 'modulepreload',
  Ot = {},
  So = '/',
  M = function (s, o) {
    return !o || o.length === 0
      ? s()
      : Promise.all(
          o.map((n) => {
            if (((n = `${So}${n}`), n in Ot)) return;
            Ot[n] = !0;
            const r = n.endsWith('.css'),
              a = r ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${n}"]${a}`)) return;
            const i = document.createElement('link');
            if (
              ((i.rel = r ? 'stylesheet' : wo),
              r || ((i.as = 'script'), (i.crossOrigin = '')),
              (i.href = n),
              document.head.appendChild(i),
              r)
            )
              return new Promise((u, p) => {
                i.addEventListener('load', u), i.addEventListener('error', p);
              });
          })
        ).then(() => s());
  },
  qe = l.exports.createContext({}),
  zt = {
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
function J(t = null) {
  const { lang: s } = l.exports.useContext(qe);
  return (t || zt)[s] || {};
}
const Ut = (t) =>
    l.exports.createElement(
      'svg',
      C(
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
  ko = '_footer_8a7h1_26';
var ge = {
    'message-box': '_message-box_8a7h1_1',
    'message-title': '_message-title_8a7h1_22',
    footer: ko,
    'footer-item': '_footer-item_8a7h1_29',
  },
  w =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/MessageBox/list.tsx';
function Ao(t) {
  const s = J(),
    { data: o, unReadData: n } = t;
  function r(i, u) {
    i.status || (t.onItemClick && t.onItemClick(i, u));
  }
  function a() {
    t.onAllBtnClick && t.onAllBtnClick(n, o);
  }
  return e.exports.jsxDEV(
    Oe,
    {
      noDataElement: e.exports.jsxDEV(
        vt,
        { status: '404', subTitle: s['message.empty.tips'] },
        void 0,
        !1,
        { fileName: w, lineNumber: 55, columnNumber: 22 },
        this
      ),
      footer: e.exports.jsxDEV(
        'div',
        {
          className: ge.footer,
          children: [
            e.exports.jsxDEV(
              'div',
              {
                className: ge['footer-item'],
                children: e.exports.jsxDEV(
                  Y,
                  {
                    type: 'text',
                    size: 'small',
                    onClick: a,
                    children: s['message.allRead'],
                  },
                  void 0,
                  !1,
                  { fileName: w, lineNumber: 59, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: w, lineNumber: 58, columnNumber: 11 },
              this
            ),
            e.exports.jsxDEV(
              'div',
              {
                className: ge['footer-item'],
                children: e.exports.jsxDEV(
                  Y,
                  {
                    type: 'text',
                    size: 'small',
                    children: s['message.seeMore'],
                  },
                  void 0,
                  !1,
                  { fileName: w, lineNumber: 64, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: w, lineNumber: 63, columnNumber: 11 },
              this
            ),
          ],
        },
        void 0,
        !0,
        { fileName: w, lineNumber: 57, columnNumber: 9 },
        this
      ),
      children: o.map((i, u) =>
        e.exports.jsxDEV(
          Oe.Item,
          {
            actionLayout: 'vertical',
            style: { opacity: i.status ? 0.5 : 1 },
            children: e.exports.jsxDEV(
              'div',
              {
                style: { cursor: 'pointer' },
                onClick: () => {
                  r(i, u);
                },
                children: e.exports.jsxDEV(
                  Oe.Item.Meta,
                  {
                    avatar:
                      i.avatar &&
                      e.exports.jsxDEV(
                        Dt,
                        {
                          shape: 'circle',
                          size: 36,
                          children: e.exports.jsxDEV(
                            'img',
                            { src: i.avatar },
                            void 0,
                            !1,
                            { fileName: w, lineNumber: 91, columnNumber: 21 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: w, lineNumber: 90, columnNumber: 19 },
                        this
                      ),
                    title: e.exports.jsxDEV(
                      'div',
                      {
                        className: ge['message-title'],
                        children: [
                          e.exports.jsxDEV(
                            _t,
                            {
                              size: 4,
                              children: [
                                e.exports.jsxDEV(
                                  'span',
                                  { children: i.title },
                                  void 0,
                                  !1,
                                  {
                                    fileName: w,
                                    lineNumber: 98,
                                    columnNumber: 21,
                                  },
                                  this
                                ),
                                e.exports.jsxDEV(
                                  Ce.Text,
                                  { type: 'secondary', children: i.subTitle },
                                  void 0,
                                  !1,
                                  {
                                    fileName: w,
                                    lineNumber: 99,
                                    columnNumber: 21,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: w, lineNumber: 97, columnNumber: 19 },
                            this
                          ),
                          i.tag && i.tag.text
                            ? e.exports.jsxDEV(
                                Fs,
                                { color: i.tag.color, children: i.tag.text },
                                void 0,
                                !1,
                                {
                                  fileName: w,
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
                      { fileName: w, lineNumber: 96, columnNumber: 17 },
                      this
                    ),
                    description: e.exports.jsxDEV(
                      'div',
                      {
                        children: [
                          e.exports.jsxDEV(
                            Ce.Paragraph,
                            {
                              style: { marginBottom: 0 },
                              ellipsis: !0,
                              children: i.content,
                            },
                            void 0,
                            !1,
                            { fileName: w, lineNumber: 110, columnNumber: 19 },
                            this
                          ),
                          e.exports.jsxDEV(
                            Ce.Text,
                            {
                              type: 'secondary',
                              style: { fontSize: 12 },
                              children: i.time,
                            },
                            void 0,
                            !1,
                            { fileName: w, lineNumber: 113, columnNumber: 19 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: w, lineNumber: 109, columnNumber: 17 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: w, lineNumber: 87, columnNumber: 13 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: w, lineNumber: 79, columnNumber: 11 },
              this
            ),
          },
          i.id,
          !1,
          { fileName: w, lineNumber: 72, columnNumber: 9 },
          this
        )
      ),
    },
    void 0,
    !1,
    { fileName: w, lineNumber: 54, columnNumber: 5 },
    this
  );
}
var K =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/MessageBox/index.tsx';
function Bo() {
  const t = J(),
    [s, o] = l.exports.useState(!1),
    [n, r] = l.exports.useState({}),
    [a, i] = l.exports.useState([]);
  function u(h = !0) {
    h && o(!0),
      Ue.get('/api/message/list')
        .then((v) => {
          i(v.data);
        })
        .finally(() => {
          h && o(!1);
        });
  }
  function p(h) {
    const v = h.map((L) => L.id);
    Ue.post('/api/message/read', { ids: v }).then(() => {
      u();
    });
  }
  l.exports.useEffect(() => {
    u();
  }, []),
    l.exports.useEffect(() => {
      const h = ws(a, 'type');
      r(h);
    }, [a]);
  const d = [
    {
      key: 'message',
      title: t['message.tab.title.message'],
      titleIcon: e.exports.jsxDEV(
        Ss,
        {},
        void 0,
        !1,
        { fileName: K, lineNumber: 61, columnNumber: 18 },
        this
      ),
    },
    {
      key: 'notice',
      title: t['message.tab.title.notice'],
      titleIcon: e.exports.jsxDEV(
        ks,
        {},
        void 0,
        !1,
        { fileName: K, lineNumber: 66, columnNumber: 18 },
        this
      ),
    },
    {
      key: 'todo',
      title: t['message.tab.title.todo'],
      titleIcon: e.exports.jsxDEV(
        As,
        {},
        void 0,
        !1,
        { fileName: K, lineNumber: 71, columnNumber: 18 },
        this
      ),
    },
  ];
  return e.exports.jsxDEV(
    'div',
    {
      className: ge['message-box'],
      children: e.exports.jsxDEV(
        ze,
        {
          loading: s,
          style: { display: 'block' },
          children: e.exports.jsxDEV(
            jt,
            {
              overflow: 'dropdown',
              type: 'rounded',
              defaultActiveTab: 'message',
              destroyOnHide: !0,
              extra: e.exports.jsxDEV(
                Y,
                {
                  type: 'text',
                  onClick: () => i([]),
                  children: t['message.empty'],
                },
                void 0,
                !1,
                { fileName: K, lineNumber: 84, columnNumber: 13 },
                this
              ),
              children: d.map((h) => {
                const { key: v, title: L } = h,
                  k = n[v] || [],
                  N = k.filter((I) => !I.status);
                return e.exports.jsxDEV(
                  jt.TabPane,
                  {
                    title: e.exports.jsxDEV(
                      'span',
                      { children: [L, N.length ? `(${N.length})` : ''] },
                      void 0,
                      !0,
                      { fileName: K, lineNumber: 97, columnNumber: 19 },
                      this
                    ),
                    children: e.exports.jsxDEV(
                      Ao,
                      {
                        data: k,
                        unReadData: N,
                        onItemClick: (I) => {
                          p([I]);
                        },
                        onAllBtnClick: (I) => {
                          p(I);
                        },
                      },
                      void 0,
                      !1,
                      { fileName: K, lineNumber: 103, columnNumber: 17 },
                      this
                    ),
                  },
                  v,
                  !1,
                  { fileName: K, lineNumber: 94, columnNumber: 15 },
                  this
                );
              }),
            },
            void 0,
            !1,
            { fileName: K, lineNumber: 78, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: K, lineNumber: 77, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: K, lineNumber: 76, columnNumber: 5 },
    this
  );
}
function Io({ children: t }) {
  return e.exports.jsxDEV(
    yt,
    {
      trigger: 'hover',
      popup: () =>
        e.exports.jsxDEV(
          Bo,
          {},
          void 0,
          !1,
          { fileName: K, lineNumber: 126, columnNumber: 20 },
          this
        ),
      position: 'br',
      unmountOnExit: !1,
      popupAlign: { bottom: 4 },
      children: e.exports.jsxDEV(
        Cs,
        { count: 9, dot: !0, children: t },
        void 0,
        !1,
        { fileName: K, lineNumber: 131, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: K, lineNumber: 124, columnNumber: 5 },
    this
  );
}
var Po = { 'icon-button': '_icon-button_12azl_1' },
  Ro =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/NavBar/IconButton.tsx';
function Mo(t, s) {
  const a = t,
    { icon: o, className: n } = a,
    r = Fe(a, ['icon', 'className']);
  return e.exports.jsxDEV(
    Y,
    C(
      {
        ref: s,
        icon: o,
        shape: 'circle',
        type: 'secondary',
        className: pe(Po['icon-button'], n),
      },
      r
    ),
    void 0,
    !1,
    { fileName: Ro, lineNumber: 10, columnNumber: 5 },
    this
  );
}
var Se = l.exports.forwardRef(Mo);
const To = '_block_byc7u_1',
  Lo = '_title_byc7u_4';
var Je = { block: To, title: Lo, 'switch-wrapper': '_switch-wrapper_byc7u_9' },
  ie =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Settings/block.tsx';
function He(t) {
  const { title: s, options: o, children: n } = t,
    r = J(),
    a = he((u) => u.settings),
    i = Ke();
  return e.exports.jsxDEV(
    'div',
    {
      className: Je.block,
      children: [
        e.exports.jsxDEV(
          'h5',
          { className: Je.title, children: s },
          void 0,
          !1,
          { fileName: ie, lineNumber: 22, columnNumber: 7 },
          this
        ),
        o &&
          o.map((u) => {
            const p = u.type || 'switch';
            return e.exports.jsxDEV(
              'div',
              {
                className: Je['switch-wrapper'],
                children: [
                  e.exports.jsxDEV(
                    'span',
                    { children: r[u.name] },
                    void 0,
                    !1,
                    { fileName: ie, lineNumber: 29, columnNumber: 15 },
                    this
                  ),
                  p === 'switch' &&
                    e.exports.jsxDEV(
                      Bs,
                      {
                        size: 'small',
                        checked: !!a[u.value],
                        onChange: (d) => {
                          const h = $(C({}, a), { [u.value]: d });
                          i({
                            type: 'update-settings',
                            payload: { settings: h },
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
                      { fileName: ie, lineNumber: 31, columnNumber: 17 },
                      this
                    ),
                  p === 'number' &&
                    e.exports.jsxDEV(
                      Is,
                      {
                        style: { width: 80 },
                        size: 'small',
                        value: a.menuWidth,
                        onChange: (d) => {
                          const h = $(C({}, a), { [u.value]: d });
                          i({
                            type: 'update-settings',
                            payload: { settings: h },
                          });
                        },
                      },
                      void 0,
                      !1,
                      { fileName: ie, lineNumber: 54, columnNumber: 17 },
                      this
                    ),
                ],
              },
              u.value,
              !0,
              { fileName: ie, lineNumber: 28, columnNumber: 13 },
              this
            );
          }),
        n,
        e.exports.jsxDEV(
          Vt,
          {},
          void 0,
          !1,
          { fileName: ie, lineNumber: 74, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: ie, lineNumber: 21, columnNumber: 5 },
    this
  );
}
const $o = '_input_77wyg_1',
  Oo = '_color_77wyg_9',
  zo = '_ul_77wyg_14',
  Uo = '_li_77wyg_19';
var ke = { input: $o, color: Oo, ul: zo, li: Uo },
  Z =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Settings/color.tsx';
function Ko() {
  const t =
      document.querySelector('body').getAttribute('arco-theme') || 'light',
    s = he((i) => i.settings),
    o = J(),
    n = s.themeColor,
    r = Ft(n, { list: !0 }),
    a = Ke();
  return e.exports.jsxDEV(
    'div',
    {
      children: [
        e.exports.jsxDEV(
          yt,
          {
            trigger: 'hover',
            position: 'bl',
            popup: () =>
              e.exports.jsxDEV(
                Ps,
                {
                  color: n,
                  onChangeComplete: (i) => {
                    const u = i.hex;
                    a({
                      type: 'update-settings',
                      payload: { settings: $(C({}, s), { themeColor: u }) },
                    }),
                      Ft(u, { list: !0, dark: t === 'dark' }).forEach(
                        (d, h) => {
                          const v = Rs(d);
                          document.body.style.setProperty(
                            `--arcoblue-${h + 1}`,
                            v
                          );
                        }
                      );
                  },
                },
                void 0,
                !1,
                { fileName: Z, lineNumber: 25, columnNumber: 11 },
                this
              ),
            children: e.exports.jsxDEV(
              'div',
              {
                className: ke.input,
                children: [
                  e.exports.jsxDEV(
                    'div',
                    { className: ke.color, style: { backgroundColor: n } },
                    void 0,
                    !1,
                    { fileName: Z, lineNumber: 49, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    'span',
                    { children: n },
                    void 0,
                    !1,
                    { fileName: Z, lineNumber: 53, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: Z, lineNumber: 48, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: Z, lineNumber: 21, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'ul',
          {
            className: ke.ul,
            children: r.map((i, u) =>
              e.exports.jsxDEV(
                'li',
                { className: ke.li, style: { backgroundColor: i } },
                u,
                !1,
                { fileName: Z, lineNumber: 58, columnNumber: 11 },
                this
              )
            ),
          },
          void 0,
          !1,
          { fileName: Z, lineNumber: 56, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          Ce.Paragraph,
          { style: { fontSize: 12 }, children: o['settings.color.tooltip'] },
          void 0,
          !1,
          { fileName: Z, lineNumber: 65, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: Z, lineNumber: 20, columnNumber: 5 },
    this
  );
}
var Q =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Settings/index.tsx';
function Kt(t) {
  const { trigger: s } = t,
    [o, n] = l.exports.useState(!1),
    r = J(),
    a = he((u) => u.settings);
  function i() {
    $s(JSON.stringify(a, null, 2)),
      be.success(r['settings.copySettings.message']);
  }
  return e.exports.jsxDEV(
    e.exports.Fragment,
    {
      children: [
        s
          ? Ms.cloneElement(s, { onClick: () => n(!0) })
          : e.exports.jsxDEV(
              Se,
              {
                icon: e.exports.jsxDEV(
                  we,
                  {},
                  void 0,
                  !1,
                  { fileName: Q, lineNumber: 34, columnNumber: 27 },
                  this
                ),
                onClick: () => n(!0),
              },
              void 0,
              !1,
              { fileName: Q, lineNumber: 34, columnNumber: 9 },
              this
            ),
        e.exports.jsxDEV(
          Ts,
          {
            width: 300,
            title: e.exports.jsxDEV(
              e.exports.Fragment,
              {
                children: [
                  e.exports.jsxDEV(
                    we,
                    {},
                    void 0,
                    !1,
                    { fileName: Q, lineNumber: 40, columnNumber: 13 },
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
              e.exports.jsxDEV(
                He,
                {
                  title: r['settings.themeColor'],
                  children: e.exports.jsxDEV(
                    Ko,
                    {},
                    void 0,
                    !1,
                    { fileName: Q, lineNumber: 51, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: Q, lineNumber: 50, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                He,
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
                { fileName: Q, lineNumber: 53, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                He,
                {
                  title: r['settings.otherSettings'],
                  options: [{ name: 'settings.colorWeek', value: 'colorWeek' }],
                },
                void 0,
                !1,
                { fileName: Q, lineNumber: 64, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                Ls,
                { content: r['settings.alertContent'] },
                void 0,
                !1,
                { fileName: Q, lineNumber: 68, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: Q, lineNumber: 36, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0
  );
}
const Go = '_navbar_158hh_1',
  Wo = '_left_158hh_10',
  qo = '_logo_158hh_15',
  Jo = '_center_158hh_29',
  Ho = '_right_158hh_45',
  Xo = '_username_158hh_60',
  Yo = '_round_158hh_63';
var O = {
  navbar: Go,
  left: Wo,
  logo: qo,
  'logo-name': '_logo-name_158hh_22',
  center: Jo,
  right: Ho,
  username: Xo,
  round: Yo,
  'dropdown-icon': '_dropdown-icon_158hh_69',
  'fixed-settings': '_fixed-settings_158hh_74',
};
function Zo(t) {
  return Object.prototype.toString.call(t) === '[object Array]';
}
const me = (function () {
    try {
      return !(typeof window != 'undefined' && document !== void 0);
    } catch {
      return !0;
    }
  })(),
  Qo = (t) => {
    if (!me) return localStorage.getItem(t);
  };
function xe(t, s) {
  const [o, n] = l.exports.useState(Qo(t) || s),
    r = (i) => {
      me || (localStorage.setItem(t, i), i !== o && n(i));
    },
    a = () => {
      me || localStorage.removeItem(t);
    };
  return (
    l.exports.useEffect(() => {
      const i = localStorage.getItem(t);
      i && n(i);
    }, [t]),
    [o, r, a]
  );
}
const Ae = 'user-profile';
function Ee(t = window.location.pathname) {
  const [, s] = t.split('/');
  return !s || s === 'login' || s === '403' ? '' : s;
}
function Xe(t = window.location.pathname) {
  const s = Ee(t);
  if (!s) return t || '/';
  const o = t.replace(`/${s}`, '') || '/';
  return o.startsWith('/') ? o : `/${o}`;
}
function Gt() {
  const t = localStorage.getItem(Ae);
  if (!t) return null;
  try {
    return JSON.parse(t);
  } catch {
    return null;
  }
}
const ve = 'X-Access-Token',
  Be = 'X-Organization',
  Wt = 'Accept-Language',
  en = 'zh-CN';
function tn() {
  return localStorage.getItem(ve) || localStorage.getItem('accessToken') || '';
}
function sn() {
  return (
    Ee() ||
    localStorage.getItem(Be) ||
    localStorage.getItem('organization') ||
    ''
  );
}
function on() {
  return localStorage.getItem(Wt) || en;
}
function nn(t) {
  return t === 200;
}
function rn(t, s = '\u8BF7\u6C42\u5931\u8D25') {
  return (t == null ? void 0 : t.message) || s;
}
function an(t, s) {
  return t.status === 200 && nn(t.data.code)
    ? t.data.data
    : ((s == null ? void 0 : s.skipErrorMessage) || be.error(rn(t.data)),
      Promise.reject(t.data));
}
function un(t, s) {
  var o, n, r;
  if (!(s == null ? void 0 : s.skipErrorMessage)) {
    const a =
      ((n = (o = t.response) == null ? void 0 : o.data) == null
        ? void 0
        : n.message) ||
      (((r = t.response) == null ? void 0 : r.status)
        ? `\u8BF7\u6C42\u5931\u8D25\uFF0C\u72B6\u6001\u7801\uFF1A${t.response.status}`
        : t.message ||
          '\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5');
    be.error(a);
  }
  return Promise.reject(t);
}
function qt(t) {
  const s = Ue.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 3e4,
    validateStatus: () => !0,
  });
  return (
    s.interceptors.request.use((o) => {
      const n = C({ [Wt]: on() }, o.headers);
      if (t) {
        const r = tn(),
          a = sn();
        o.headers = $(C({}, n), { [ve]: r, [Be]: a });
      } else o.headers = n;
      return o;
    }),
    s
  );
}
function Jt(t) {
  return async function (o) {
    try {
      const n = await t.request(o);
      return an(n, o);
    } catch (n) {
      return un(n, o);
    }
  };
}
const Ht = Jt(qt(!0)),
  Xt = Jt(qt(!1));
function ln(t) {
  return Xt({ url: '/api/system/users/login', method: 'POST', data: t });
}
function cn() {
  return Ht({ url: '/api/system/users/logout', method: 'POST' });
}
function Ie(t) {
  return `${t}-resource`;
}
function Ye(t) {
  const s = localStorage.getItem(Ie(t));
  if (!s) return null;
  try {
    return JSON.parse(s);
  } catch {
    return localStorage.removeItem(Ie(t)), null;
  }
}
function mn(t, s) {
  localStorage.setItem(Ie(t), JSON.stringify(s));
}
function dn() {
  return Ht({ url: '/api/auth/context', method: 'GET' });
}
async function Ze(t) {
  const s = Ye(t);
  if (s) return s;
  const o = await dn();
  return mn(t, o), o;
}
var m =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/NavBar/index.tsx';
function fn({ show: t, topMenu: s, menu: o }) {
  const n = J(),
    r = he((c) => c.userInfo),
    [, a] = xe('userStatus'),
    [i, u] = xe('userRole', 'admin'),
    { setLang: p, lang: d, theme: h, setTheme: v } = l.exports.useContext(qe);
  function L() {
    const c = Ee();
    a('logout'),
      localStorage.removeItem(ve),
      localStorage.removeItem(Be),
      localStorage.removeItem(Ae),
      c && localStorage.removeItem(Ie(c)),
      localStorage.removeItem('accessToken'),
      localStorage.removeItem('organization');
  }
  function k() {
    cn()
      .catch(() => {})
      .finally(() => {
        L(), (window.location.href = '/login');
      });
  }
  function N(c) {
    c === 'logout' ? k() : be.info(`You clicked ${c}`);
  }
  if (!t)
    return e.exports.jsxDEV(
      'div',
      {
        className: O['fixed-settings'],
        children: e.exports.jsxDEV(
          Kt,
          {
            trigger: e.exports.jsxDEV(
              Y,
              {
                icon: e.exports.jsxDEV(
                  we,
                  {},
                  void 0,
                  !1,
                  { fileName: m, lineNumber: 93, columnNumber: 27 },
                  this
                ),
                type: 'primary',
                size: 'large',
              },
              void 0,
              !1,
              { fileName: m, lineNumber: 93, columnNumber: 13 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: m, lineNumber: 91, columnNumber: 9 },
          this
        ),
      },
      void 0,
      !1,
      { fileName: m, lineNumber: 90, columnNumber: 7 },
      this
    );
  const I = () => {
      u(i === 'admin' ? 'user' : 'admin');
    },
    b = e.exports.jsxDEV(
      A,
      {
        onClickMenuItem: N,
        children: [
          e.exports.jsxDEV(
            A.SubMenu,
            {
              title: e.exports.jsxDEV(
                e.exports.Fragment,
                {
                  children: [
                    e.exports.jsxDEV(
                      Ct,
                      { className: O['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 111, columnNumber: 13 },
                      this
                    ),
                    e.exports.jsxDEV(
                      'span',
                      {
                        className: O['user-role'],
                        children:
                          i === 'admin'
                            ? n['menu.user.role.admin']
                            : n['menu.user.role.user'],
                      },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 112, columnNumber: 13 },
                      this
                    ),
                  ],
                },
                void 0,
                !0
              ),
              children: e.exports.jsxDEV(
                A.Item,
                {
                  onClick: I,
                  children: [
                    e.exports.jsxDEV(
                      wt,
                      { className: O['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 121, columnNumber: 11 },
                      this
                    ),
                    n['menu.user.switchRoles'],
                  ],
                },
                'switch role',
                !0,
                { fileName: m, lineNumber: 120, columnNumber: 9 },
                this
              ),
            },
            'role',
            !1,
            { fileName: m, lineNumber: 107, columnNumber: 7 },
            this
          ),
          e.exports.jsxDEV(
            A.Item,
            {
              children: [
                e.exports.jsxDEV(
                  we,
                  { className: O['dropdown-icon'] },
                  void 0,
                  !1,
                  { fileName: m, lineNumber: 126, columnNumber: 9 },
                  this
                ),
                n['menu.user.setting'],
              ],
            },
            'setting',
            !0,
            { fileName: m, lineNumber: 125, columnNumber: 7 },
            this
          ),
          e.exports.jsxDEV(
            A.SubMenu,
            {
              title: e.exports.jsxDEV(
                'div',
                {
                  style: { width: 80 },
                  children: [
                    e.exports.jsxDEV(
                      Os,
                      { className: O['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 133, columnNumber: 13 },
                      this
                    ),
                    n['message.seeMore'],
                  ],
                },
                void 0,
                !0,
                { fileName: m, lineNumber: 132, columnNumber: 11 },
                this
              ),
              children: e.exports.jsxDEV(
                A.Item,
                {
                  children: [
                    e.exports.jsxDEV(
                      St,
                      { className: O['dropdown-icon'] },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 139, columnNumber: 11 },
                      this
                    ),
                    n['menu.dashboard.workplace'],
                  ],
                },
                'workplace',
                !0,
                { fileName: m, lineNumber: 138, columnNumber: 9 },
                this
              ),
            },
            'more',
            !1,
            { fileName: m, lineNumber: 129, columnNumber: 7 },
            this
          ),
          e.exports.jsxDEV(
            Vt,
            { style: { margin: '4px 0' } },
            void 0,
            !1,
            { fileName: m, lineNumber: 144, columnNumber: 7 },
            this
          ),
          e.exports.jsxDEV(
            A.Item,
            {
              children: [
                e.exports.jsxDEV(
                  zs,
                  { className: O['dropdown-icon'] },
                  void 0,
                  !1,
                  { fileName: m, lineNumber: 146, columnNumber: 9 },
                  this
                ),
                n['navbar.logout'],
              ],
            },
            'logout',
            !0,
            { fileName: m, lineNumber: 145, columnNumber: 7 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: m, lineNumber: 106, columnNumber: 5 },
      this
    );
  return e.exports.jsxDEV(
    'div',
    {
      className: O.navbar,
      children: [
        e.exports.jsxDEV(
          'div',
          {
            className: O.left,
            children: e.exports.jsxDEV(
              'div',
              {
                className: O.logo,
                children: [
                  e.exports.jsxDEV(
                    Ut,
                    {},
                    void 0,
                    !1,
                    { fileName: m, lineNumber: 156, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    'div',
                    { className: O['logo-name'], children: 'Arco Pro' },
                    void 0,
                    !1,
                    { fileName: m, lineNumber: 157, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: m, lineNumber: 155, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: m, lineNumber: 154, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          { className: O.center, children: o && s },
          void 0,
          !1,
          { fileName: m, lineNumber: 160, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'ul',
          {
            className: O.right,
            children: [
              e.exports.jsxDEV(
                'li',
                {
                  children: e.exports.jsxDEV(
                    Us,
                    {
                      triggerElement: e.exports.jsxDEV(
                        Se,
                        {
                          icon: e.exports.jsxDEV(
                            Ks,
                            {},
                            void 0,
                            !1,
                            { fileName: m, lineNumber: 164, columnNumber: 47 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: m, lineNumber: 164, columnNumber: 29 },
                        this
                      ),
                      options: [
                        { label: '\u4E2D\u6587', value: 'zh-CN' },
                        { label: 'Espa\xF1a', value: 'es-ES' },
                        { label: 'English', value: 'en-US' },
                      ],
                      value: d,
                      triggerProps: {
                        autoAlignPopupWidth: !1,
                        autoAlignPopupMinWidth: !0,
                        position: 'br',
                      },
                      trigger: 'hover',
                      onChange: (c) => {
                        p(c);
                        const j = zt[c];
                        be.info(`${j['message.lang.tips']}${c}`);
                      },
                    },
                    void 0,
                    !1,
                    { fileName: m, lineNumber: 163, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: m, lineNumber: 162, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                'li',
                {
                  children: e.exports.jsxDEV(
                    Io,
                    {
                      children: e.exports.jsxDEV(
                        Se,
                        {
                          icon: e.exports.jsxDEV(
                            Gs,
                            {},
                            void 0,
                            !1,
                            { fileName: m, lineNumber: 186, columnNumber: 31 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: m, lineNumber: 186, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: m, lineNumber: 185, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: m, lineNumber: 184, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                'li',
                {
                  children: e.exports.jsxDEV(
                    Ws,
                    {
                      content:
                        h === 'light'
                          ? n['settings.navbar.theme.toDark']
                          : n['settings.navbar.theme.toLight'],
                      children: e.exports.jsxDEV(
                        Se,
                        {
                          icon:
                            h !== 'dark'
                              ? e.exports.jsxDEV(
                                  qs,
                                  {},
                                  void 0,
                                  !1,
                                  {
                                    fileName: m,
                                    lineNumber: 198,
                                    columnNumber: 40,
                                  },
                                  this
                                )
                              : e.exports.jsxDEV(
                                  Js,
                                  {},
                                  void 0,
                                  !1,
                                  {
                                    fileName: m,
                                    lineNumber: 198,
                                    columnNumber: 59,
                                  },
                                  this
                                ),
                          onClick: () => v(h === 'light' ? 'dark' : 'light'),
                        },
                        void 0,
                        !1,
                        { fileName: m, lineNumber: 197, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: m, lineNumber: 190, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: m, lineNumber: 189, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                Kt,
                {},
                void 0,
                !1,
                { fileName: m, lineNumber: 203, columnNumber: 9 },
                this
              ),
              r &&
                e.exports.jsxDEV(
                  'li',
                  {
                    children: e.exports.jsxDEV(
                      kt,
                      {
                        droplist: b,
                        position: 'br',
                        children: e.exports.jsxDEV(
                          Dt,
                          {
                            size: 32,
                            style: { cursor: 'pointer' },
                            children: e.exports.jsxDEV(
                              'img',
                              { alt: 'avatar', src: r.avatar },
                              void 0,
                              !1,
                              {
                                fileName: m,
                                lineNumber: 208,
                                columnNumber: 17,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: m, lineNumber: 207, columnNumber: 15 },
                          this
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: m, lineNumber: 206, columnNumber: 13 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: m, lineNumber: 205, columnNumber: 11 },
                  this
                ),
            ],
          },
          void 0,
          !0,
          { fileName: m, lineNumber: 161, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: m, lineNumber: 153, columnNumber: 5 },
    this
  );
}
const pn = '_footer_1si67_1';
var hn = { footer: pn },
  bn =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/Footer/index.tsx';
function Yt(t = {}) {
  const n = t,
    { className: s } = n,
    o = Fe(n, ['className']);
  return e.exports.jsxDEV(
    ce.Footer,
    $(C({ className: pe(hn.footer, s) }, o), { children: 'Arco Design Pro' }),
    void 0,
    !1,
    { fileName: bn, lineNumber: 10, columnNumber: 5 },
    this
  );
}
var B = {
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
  },
  x =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/TabBar/index.tsx';
const H = {
  Reload: 'reload',
  Current: 'current',
  Left: 'left',
  Right: 'right',
  Others: 'others',
  All: 'all',
};
function Nn(t, s) {
  const o = Xe(t);
  return s.find((n) => o === `/${n.key}`);
}
function Zt(t, s, o) {
  const n = Nn(t, o);
  if (!n) return null;
  const r = Xe(t);
  return {
    title: n.name,
    name: r.replace(/^\//, ''),
    path: t,
    fullPath: `${t}${s || ''}`,
  };
}
function gn({
  defaultTab: t,
  tabList: s,
  offsetTop: o = 0,
  onTabsChange: n,
  onCloseTabs: r,
  onReload: a,
}) {
  const i = Ge(),
    u = At(),
    p = J(),
    d = `${u.pathname}${u.search || ''}`;
  function h(b) {
    b.fullPath !== d && i.push(b.fullPath);
  }
  function v(b, c) {
    if (c === 0) return;
    const j = s.filter((W, z) => z !== c);
    if ((r == null || r([b]), n(j), b.fullPath === d)) {
      const W = j[c - 1] || j[0];
      i.push(W.fullPath);
    }
  }
  function L(b = s) {
    return b.findIndex((c) => c.fullPath === d);
  }
  function k(b, c) {
    c.length && (r == null || r(c)), n(b);
  }
  function N(b, c, j) {
    const W = L();
    if (b === H.Current) {
      v(c, j);
      return;
    }
    if (b === H.Left) {
      const V = s.filter((P, D) => D === 0 || D >= j),
        g = s.filter((P, D) => D > 0 && D < j);
      k(V, g), W > 0 && W < j && i.push(c.fullPath);
      return;
    }
    if (b === H.Right) {
      const V = s.filter((P, D) => D <= j),
        g = s.filter((P, D) => D > j);
      k(V, g), W > j && i.push(c.fullPath);
      return;
    }
    if (b === H.Others) {
      const V = s.filter((P, D) => D === 0 || D === j),
        g = s.filter((P, D) => D !== 0 && D !== j);
      k(V, g), i.push(c.fullPath);
      return;
    }
    if (b === H.Reload) {
      a == null || a(c);
      return;
    }
    const z = s.filter((V, g) => g !== 0);
    k([t], z), i.push(t.fullPath);
  }
  function I(b, c) {
    const j = b.fullPath !== d,
      W = c === 0,
      z = c <= 1,
      V = c === s.length - 1;
    return e.exports.jsxDEV(
      A,
      {
        onClickMenuItem: (g) => N(g, b, c),
        children: [
          e.exports.jsxDEV(
            A.Item,
            {
              disabled: j,
              children: [
                e.exports.jsxDEV(
                  Xs,
                  {},
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 164, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  'span',
                  {
                    className: B['dropdown-label'],
                    children: '\u91CD\u65B0\u52A0\u8F7D',
                  },
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 165, columnNumber: 11 },
                  this
                ),
              ],
            },
            H.Reload,
            !0,
            { fileName: x, lineNumber: 163, columnNumber: 9 },
            this
          ),
          e.exports.jsxDEV(
            A.Item,
            {
              disabled: W,
              className: B['separate-line'],
              children: [
                e.exports.jsxDEV(
                  Bt,
                  {},
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 172, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  'span',
                  {
                    className: B['dropdown-label'],
                    children: '\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 173, columnNumber: 11 },
                  this
                ),
              ],
            },
            H.Current,
            !0,
            { fileName: x, lineNumber: 167, columnNumber: 9 },
            this
          ),
          e.exports.jsxDEV(
            A.Item,
            {
              disabled: z,
              children: [
                e.exports.jsxDEV(
                  Ys,
                  {},
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 176, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  'span',
                  {
                    className: B['dropdown-label'],
                    children: '\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 177, columnNumber: 11 },
                  this
                ),
              ],
            },
            H.Left,
            !0,
            { fileName: x, lineNumber: 175, columnNumber: 9 },
            this
          ),
          e.exports.jsxDEV(
            A.Item,
            {
              disabled: V,
              className: B['separate-line'],
              children: [
                e.exports.jsxDEV(
                  Zs,
                  {},
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 184, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  'span',
                  {
                    className: B['dropdown-label'],
                    children: '\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 185, columnNumber: 11 },
                  this
                ),
              ],
            },
            H.Right,
            !0,
            { fileName: x, lineNumber: 179, columnNumber: 9 },
            this
          ),
          e.exports.jsxDEV(
            A.Item,
            {
              disabled: s.length <= 2 && c !== 0,
              children: [
                e.exports.jsxDEV(
                  Qs,
                  {},
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 191, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  'span',
                  {
                    className: B['dropdown-label'],
                    children: '\u5173\u95ED\u5176\u5B83\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 192, columnNumber: 11 },
                  this
                ),
              ],
            },
            H.Others,
            !0,
            { fileName: x, lineNumber: 187, columnNumber: 9 },
            this
          ),
          e.exports.jsxDEV(
            A.Item,
            {
              disabled: s.length <= 1,
              children: [
                e.exports.jsxDEV(
                  eo,
                  {},
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 195, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  'span',
                  {
                    className: B['dropdown-label'],
                    children: '\u5173\u95ED\u5168\u90E8\u6807\u7B7E\u9875',
                  },
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 196, columnNumber: 11 },
                  this
                ),
              ],
            },
            H.All,
            !0,
            { fileName: x, lineNumber: 194, columnNumber: 9 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: x, lineNumber: 162, columnNumber: 7 },
      this
    );
  }
  return e.exports.jsxDEV(
    'div',
    {
      className: B['tab-bar-container'],
      children: e.exports.jsxDEV(
        Hs,
        {
          offsetTop: o,
          children: e.exports.jsxDEV(
            'div',
            {
              className: B['tab-bar-box'],
              children: [
                e.exports.jsxDEV(
                  'div',
                  {
                    className: B['tab-bar-scroll'],
                    children: e.exports.jsxDEV(
                      'div',
                      {
                        className: B['tags-wrap'],
                        children: s.map((b, c) =>
                          e.exports.jsxDEV(
                            kt,
                            {
                              droplist: I(b, c),
                              trigger: 'contextMenu',
                              position: 'bl',
                              children: e.exports.jsxDEV(
                                'span',
                                {
                                  className: pe(
                                    'arco-tag arco-tag-size-medium arco-tag-checked',
                                    B['tab-tag'],
                                    { [B['link-activated']]: b.fullPath === d }
                                  ),
                                  onClick: () => h(b),
                                  children: [
                                    e.exports.jsxDEV(
                                      'span',
                                      {
                                        className: B['tag-link'],
                                        children: p[b.title] || b.title,
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: x,
                                        lineNumber: 226,
                                        columnNumber: 21,
                                      },
                                      this
                                    ),
                                    c !== 0 &&
                                      e.exports.jsxDEV(
                                        'span',
                                        {
                                          className:
                                            'arco-icon-hover arco-tag-icon-hover arco-icon-hover-size-medium arco-tag-close-btn',
                                          onClick: (j) => {
                                            j.stopPropagation(), v(b, c);
                                          },
                                          children: e.exports.jsxDEV(
                                            Bt,
                                            {},
                                            void 0,
                                            !1,
                                            {
                                              fileName: x,
                                              lineNumber: 237,
                                              columnNumber: 25,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: x,
                                          lineNumber: 230,
                                          columnNumber: 23,
                                        },
                                        this
                                      ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName: x,
                                  lineNumber: 215,
                                  columnNumber: 19,
                                },
                                this
                              ),
                            },
                            b.fullPath,
                            !1,
                            { fileName: x, lineNumber: 209, columnNumber: 17 },
                            this
                          )
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: x, lineNumber: 207, columnNumber: 13 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 206, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  'div',
                  { className: B['tag-bar-operation'] },
                  void 0,
                  !1,
                  { fileName: x, lineNumber: 245, columnNumber: 11 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: x, lineNumber: 205, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: x, lineNumber: 204, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: x, lineNumber: 203, columnNumber: 5 },
    this
  );
}
const xn = 'marketing:tabs';
function Qt(t) {
  return encodeURIComponent(String(t || 'unknown'));
}
function Qe(t, s) {
  if (!!t)
    for (const o of s) {
      const n = t[o];
      if (typeof n == 'string' || typeof n == 'number') return n;
    }
}
function En(t) {
  const s = t == null ? void 0 : t.currentTenant,
    o = t == null ? void 0 : t.defaultTenant;
  return {
    tenantCode:
      Qe(s, ['tenantCode', 'code', 'tenantId', 'id']) ||
      Qe(t || void 0, ['tenantCode', 'tenantId']) ||
      Qe(o, ['tenantCode', 'code', 'tenantId', 'id']),
  };
}
function es(t) {
  return `${xn}:${Qt(t.tenantCode)}`;
}
function et(t, s) {
  return `${Qt(t.tenantCode)}:${encodeURIComponent(s)}`;
}
function vn(t) {
  try {
    const s = sessionStorage.getItem(es(t));
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
function Dn(t, s) {
  try {
    sessionStorage.setItem(es(t), JSON.stringify(s));
  } catch {}
}
var tt =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/components/KeepAliveRoute/index.tsx';
function _n(a) {
  var i = a,
    { identity: t, component: s, render: o, children: n } = i,
    r = Fe(i, ['identity', 'component', 'render', 'children']);
  return e.exports.jsxDEV(
    oe,
    $(C({}, r), {
      render: (u) => {
        const p = `${u.location.pathname}${u.location.search || ''}`,
          d = et(t, p),
          h = s;
        return e.exports.jsxDEV(
          to,
          {
            id: d,
            name: d,
            saveScrollPosition: 'screen',
            children: h
              ? e.exports.jsxDEV(
                  h,
                  C({}, u),
                  void 0,
                  !1,
                  { fileName: tt, lineNumber: 32, columnNumber: 15 },
                  this
                )
              : o
              ? o(u)
              : n,
          },
          void 0,
          !1,
          { fileName: tt, lineNumber: 30, columnNumber: 11 },
          this
        );
      },
    }),
    void 0,
    !1,
    { fileName: tt, lineNumber: 18, columnNumber: 5 },
    this
  );
}
const ts = (t, s) =>
    !s || !s.length
      ? !1
      : s.join('') === '*'
      ? !0
      : t.every((o) => s.includes(o)),
  yn = (t, s) => {
    const { resource: o, actions: n = [] } = t;
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
            const p = s[u];
            return ts(n, p);
          })
        : !1;
    }
    const r = s[o];
    return ts(n, r);
  };
var jn = (t, s) => {
  const { requiredPermissions: o, oneOfPerm: n } = t;
  if (Array.isArray(o) && o.length) {
    let r = 0;
    for (const a of o) yn(a, s) && r++;
    return n ? r > 0 : r === o.length;
  }
  return !0;
};
const De = [
  {
    name: 'menu.dashboard',
    key: 'dashboard',
    children: [
      { name: 'menu.dashboard.workplace', key: 'dashboard/workplace' },
    ],
  },
  { name: 'Example', key: 'example' },
];
function Vn(t) {
  return (t || '').replace(/^\/+/, '').replace(/\/+$/, '');
}
function ss(t) {
  return Vn(t.routerPath || t.resourcePath || t.resourceCode);
}
function Fn(t) {
  var s;
  return (
    t.resourceName ||
    ((s = t.resourceNames) == null ? void 0 : s['zh-CN']) ||
    t.resourceCode ||
    ss(t)
  );
}
function st(t = []) {
  return t
    .slice()
    .sort((s, o) => (s.sortOrder || 0) - (o.sortOrder || 0))
    .map((s) => {
      const o = st(s.children || []),
        n = {
          name: Fn(s),
          key: ss(s),
          path: s.routerPath || s.resourcePath,
          icon: s.resourceIcon,
          children: o.length ? o : void 0,
        };
      return (
        n.key === 'dashboard' && !n.children && (n.children = De[0].children), n
      );
    })
    .filter((s) => s.key);
}
function os(t) {
  if (!t) return De;
  const s = Ye(t),
    o = st((s == null ? void 0 : s.menus) || []);
  return o.length ? o : De;
}
const Cn = (t) => {
    const s = t === 'admin' ? ['*'] : ['read'],
      o = {};
    return (
      De.forEach((n) => {
        n.children &&
          n.children.forEach((r) => {
            o[r.name] = s;
          });
      }),
      o
    );
  },
  ot = (t, s, o = []) => {
    if (!t.length) return [];
    for (const n of t) {
      const { requiredPermissions: r, oneOfPerm: a } = n;
      let i = !0;
      if ((r && (i = jn({ requiredPermissions: r, oneOfPerm: a }, s)), !!i))
        if (n.children && n.children.length) {
          const u = $(C({}, n), { children: [] });
          ot(n.children, s, u.children), u.children.length && o.push(u);
        } else o.push(C({}, n));
    }
    return o;
  },
  wn = (t, s) => {
    const [o, n] = l.exports.useState(() => os(s)),
      [r, a] = l.exports.useState(!1),
      i = l.exports.useMemo(() => JSON.stringify(t || {}), [t]);
    l.exports.useEffect(() => {
      let p = !1;
      async function d() {
        const h = os(s);
        if ((n(ot(h, t)), !(!s || Ye(s)))) {
          a(!0);
          try {
            const v = await Ze(s);
            if (p) return;
            const L = st(v.menus || []);
            n(ot(L.length ? L : De, t));
          } finally {
            p || a(!1);
          }
        }
      }
      return (
        d(),
        () => {
          p = !0;
        }
      );
    }, [i, s, t]);
    const u = l.exports.useMemo(() => {
      var d, h;
      const p = o[0];
      return p
        ? ((h =
            (d = p == null ? void 0 : p.children) == null ? void 0 : d[0]) ==
          null
            ? void 0
            : h.key) || p.key
        : '';
    }, [o]);
    return [o, u, r];
  };
function Sn() {
  const t = It.parseUrl(me ? '' : window.location.href).query,
    s = {};
  return (
    Object.keys(t).forEach((o) => {
      t[o] === 'true' && (s[o] = !0), t[o] === 'false' && (s[o] = !1);
    }),
    s
  );
}
const kn = '_layout_316fi_1',
  An = '_icon_316fi_86',
  Bn = '_spin_316fi_111';
var T = {
    layout: kn,
    'layout-navbar': '_layout-navbar_316fi_5',
    'layout-navbar-hidden': '_layout-navbar-hidden_316fi_13',
    'layout-sider': '_layout-sider_316fi_16',
    'collapse-btn': '_collapse-btn_316fi_50',
    'menu-wrapper': '_menu-wrapper_316fi_67',
    icon: An,
    'icon-empty': '_icon-empty_316fi_90',
    'layout-content': '_layout-content_316fi_95',
    'layout-content-wrapper': '_layout-content-wrapper_316fi_102',
    'layout-content-wrapper-with-tab':
      '_layout-content-wrapper-with-tab_316fi_105',
    'layout-breadcrumb': '_layout-breadcrumb_316fi_108',
    spin: Bn,
  },
  ns = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/utils/lazyload.tsx';
function In(t, s) {
  const o = so(t, s);
  return (o.preload = t.requireAsync || t), o;
}
function Pn(t) {
  return t.error
    ? (console.error(t.error), null)
    : e.exports.jsxDEV(
        'div',
        {
          className: T.spin,
          children: e.exports.jsxDEV(
            ze,
            {},
            void 0,
            !1,
            { fileName: ns, lineNumber: 26, columnNumber: 7 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: ns, lineNumber: 25, columnNumber: 5 },
        this
      );
}
var rs = (t) =>
    In(t, { fallback: Pn({ pastDelay: !0, error: !1, timedOut: !1 }) }),
  E = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/layout.tsx';
const Rn = A.Item,
  Mn = A.SubMenu,
  Tn = ce.Sider,
  Ln = ce.Content;
function $n(t, s) {
  switch (s || t) {
    case 'dashboard':
      return e.exports.jsxDEV(
        St,
        { className: T.icon },
        void 0,
        !1,
        { fileName: E, lineNumber: 56, columnNumber: 14 },
        this
      );
    case 'example':
    case 'tag':
      return e.exports.jsxDEV(
        wt,
        { className: T.icon },
        void 0,
        !1,
        { fileName: E, lineNumber: 59, columnNumber: 14 },
        this
      );
    default:
      return e.exports.jsxDEV(
        'div',
        { className: T['icon-empty'] },
        void 0,
        !1,
        { fileName: E, lineNumber: 61, columnNumber: 14 },
        this
      );
  }
}
function On(t) {
  const s = {
      './pages/example/index.tsx': () =>
        M(
          () => import('./index.fda925f4.js'),
          [
            'assets/index.fda925f4.js',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aa22cee8.js',
            'assets/vendor.503ea215.css',
          ]
        ),
      './pages/login/banner.tsx': () =>
        M(
          () =>
            Promise.resolve().then(function () {
              return Yn;
            }),
          void 0
        ),
      './pages/login/form.tsx': () =>
        M(
          () =>
            Promise.resolve().then(function () {
              return Xn;
            }),
          void 0
        ),
      './pages/login/index.tsx': () =>
        M(
          () =>
            Promise.resolve().then(function () {
              return Zn;
            }),
          void 0
        ),
      './pages/dashboard/workplace/announcement.tsx': () =>
        M(
          () => import('./announcement.1eea7d1d.js'),
          [
            'assets/announcement.1eea7d1d.js',
            'assets/announcement.4446c828.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aa22cee8.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/carousel.tsx': () =>
        M(
          () => import('./carousel.08a2e5b8.js'),
          [
            'assets/carousel.08a2e5b8.js',
            'assets/vendor.aa22cee8.js',
            'assets/vendor.503ea215.css',
          ]
        ),
      './pages/dashboard/workplace/content-percentage.tsx': () =>
        M(
          () => import('./content-percentage.0755657e.js'),
          [
            'assets/content-percentage.0755657e.js',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aa22cee8.js',
            'assets/vendor.503ea215.css',
            'assets/index.fbad3a32.js',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/docs.tsx': () =>
        M(
          () => import('./docs.46272cd6.js'),
          [
            'assets/docs.46272cd6.js',
            'assets/docs.e521c9d6.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aa22cee8.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/index.tsx': () =>
        M(
          () => import('./index.9a6f52db.js'),
          [
            'assets/index.9a6f52db.js',
            'assets/index.0a453fe0.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aa22cee8.js',
            'assets/vendor.503ea215.css',
            'assets/overview.beb60c8e.js',
            'assets/overview.65964fa4.css',
            'assets/index.fbad3a32.js',
            'assets/index.9464998a.js',
            'assets/popular-contents.95c81152.js',
            'assets/popular-contents.884121de.css',
            'assets/content-percentage.0755657e.js',
            'assets/shortcuts.324f82f2.js',
            'assets/shortcuts.0626e3d2.css',
            'assets/announcement.1eea7d1d.js',
            'assets/announcement.4446c828.css',
            'assets/carousel.08a2e5b8.js',
            'assets/docs.46272cd6.js',
            'assets/docs.e521c9d6.css',
          ]
        ),
      './pages/dashboard/workplace/overview.tsx': () =>
        M(
          () => import('./overview.beb60c8e.js'),
          [
            'assets/overview.beb60c8e.js',
            'assets/overview.65964fa4.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aa22cee8.js',
            'assets/vendor.503ea215.css',
            'assets/index.fbad3a32.js',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/popular-contents.tsx': () =>
        M(
          () => import('./popular-contents.95c81152.js'),
          [
            'assets/popular-contents.95c81152.js',
            'assets/popular-contents.884121de.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aa22cee8.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/shortcuts.tsx': () =>
        M(
          () => import('./shortcuts.324f82f2.js'),
          [
            'assets/shortcuts.324f82f2.js',
            'assets/shortcuts.0626e3d2.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aa22cee8.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/exception/403/index.tsx': () =>
        M(
          () =>
            Promise.resolve().then(function () {
              return it;
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
            M(
              () =>
                Promise.resolve().then(function () {
                  return it;
                }),
              void 0
            ));
        (a.component = rs(i)), o.push(a);
      } else Zo(a.children) && a.children.length && n(a.children);
    });
  }
  return n(t), o;
}
function zn() {
  const t = Sn(),
    s = Ge(),
    o = At(),
    { dropScope: n, refreshScope: r } = Pt.exports.useAliveController(),
    a = o.pathname,
    i = Ee(a),
    u = i ? `/${i}` : '',
    p = Xe(a),
    d = It.parseUrl(p).url.slice(1),
    h = J(),
    { settings: v, userLoading: L, userInfo: k } = he((f) => f),
    N = l.exports.useMemo(
      () => ({ tenantCode: i || En(k).tenantCode }),
      [i, k]
    ),
    I = l.exports.useMemo(() => N.tenantCode || 'unknown', [N.tenantCode]),
    [b, c, j] = wn(k == null ? void 0 : k.permissions, i),
    W = [d || c],
    z = (d || c).split('/'),
    V = z.slice(0, z.length - 1),
    [g, P] = l.exports.useState([]),
    [D, R] = l.exports.useState(!1),
    [Te, _e] = l.exports.useState(W),
    [ye, fe] = l.exports.useState(V),
    [ee, ae] = l.exports.useState([]),
    re = l.exports.useRef(new Map()),
    Le = l.exports.useRef(new Map()),
    at = 60,
    ut = D ? 48 : v.menuWidth,
    je = v.navbar && t.navbar !== !1,
    lt = v.menu && t.menu !== !1,
    ue = lt && v.topMenu,
    ct = lt && !ue,
    mt = v.tabBar && t.tabBar !== !1,
    ms = v.footer && t.footer !== !1,
    le = l.exports.useMemo(() => On(b) || [], [b]),
    te = l.exports.useMemo(() => {
      const f = `${u}/${c}`;
      return Zt(f, '', le) || { title: c, name: c, path: f, fullPath: f };
    }, [c, le, u]);
  l.exports.useEffect(() => {
    if (!c) return;
    const f = vn(N);
    ae((f == null ? void 0 : f.length) ? f : [te]);
  }, [c, te, I, N]),
    l.exports.useEffect(() => {
      const f = Zt(o.pathname, o.search, le);
      !f ||
        ae((S) => {
          const X = S.length ? S : [te];
          return X.some((se) => se.fullPath === f.fullPath) ? X : [...X, f];
        });
    }, [te, le, o.pathname, o.search]),
    l.exports.useEffect(() => {
      ee.length && Dn(N, ee);
    }, [I, N, ee]);
  const ds = l.exports.useCallback(
      (f) => {
        ae(f.length ? f : [te]);
      },
      [te]
    ),
    fs = l.exports.useCallback(
      (f) => {
        f.forEach((S) => {
          n(et(N, S.fullPath));
        });
      },
      [n, N]
    ),
    ps = l.exports.useCallback(
      (f) => {
        r(et(N, f.fullPath));
      },
      [r, N]
    );
  function hs(f) {
    const S = le.find((U) => U.key === f),
      se = S.component.preload();
    Tt.start(),
      se.then(() => {
        s.push(S.path ? `${u}${S.path}` : `${u}/${f}`), Tt.done();
      });
  }
  function bs() {
    R((f) => !f);
  }
  const Ns = ct ? { paddingLeft: ut } : {},
    dt = je ? { paddingTop: at } : {},
    gs = C(C({}, Ns), dt),
    ft = e.exports.jsxDEV(
      A,
      {
        mode: ue ? 'horizontal' : 'vertical',
        collapse: !ue && D,
        onClickMenuItem: hs,
        selectedKeys: Te,
        openKeys: ue ? void 0 : ye,
        onClickSubMenu: (f, S) => {
          ue || fe(S);
        },
        children: xs(h)(b, 1),
      },
      void 0,
      !1,
      { fileName: E, lineNumber: 225, columnNumber: 5 },
      this
    );
  function xs(f) {
    return (
      re.current.clear(),
      function S(X, se, U = []) {
        return X.map((F) => {
          const { breadcrumb: Es = !0, ignore: vs } = F,
            Ds = $n(F.key, F.icon),
            ht = e.exports.jsxDEV(
              e.exports.Fragment,
              { children: [Ds, ' ', f[F.name] || F.name] },
              void 0,
              !0
            );
          re.current.set(`/${F.key}`, Es ? [...U, F.name] : []);
          const bt = (F.children || []).filter(($e) => {
            const { ignore: Nt, breadcrumb: _s = !0 } = $e;
            return (
              (Nt || F.ignore) &&
                re.current.set(`/${$e.key}`, _s ? [...U, F.name, $e.name] : []),
              !Nt
            );
          });
          return vs
            ? ''
            : bt.length
            ? (Le.current.set(F.key, { subMenu: !0 }),
              e.exports.jsxDEV(
                Mn,
                { title: ht, children: S(bt, se + 1, [...U, F.name]) },
                F.key,
                !1,
                { fileName: E, lineNumber: 276, columnNumber: 13 },
                this
              ))
            : (Le.current.set(F.key, { menuItem: !0 }),
              e.exports.jsxDEV(
                Rn,
                { children: ht },
                F.key,
                !1,
                { fileName: E, lineNumber: 282, columnNumber: 16 },
                this
              ));
        });
      }
    );
  }
  const pt = l.exports.useCallback(() => {
    const f = p.split('/'),
      S = [],
      X = [];
    for (; f.length > 0; ) {
      const U = f.join('/').replace(/^\//, ''),
        F = Le.current.get(U);
      F && F.menuItem && S.push(U), F && F.subMenu && X.push(U), f.pop();
    }
    _e(S),
      fe((se) => {
        const U = [...se];
        return (
          X.forEach((F) => {
            U.includes(F) || U.push(F);
          }),
          U
        );
      });
  }, [p]);
  return (
    l.exports.useEffect(() => {
      const f = re.current.get(p);
      P(f || []), pt();
    }, [p, pt]),
    e.exports.jsxDEV(
      ce,
      {
        className: T.layout,
        children: [
          e.exports.jsxDEV(
            'div',
            {
              className: pe(T['layout-navbar'], {
                [T['layout-navbar-hidden']]: !je,
              }),
              children: e.exports.jsxDEV(
                fn,
                { show: je, menu: ue, topMenu: ft },
                void 0,
                !1,
                { fileName: E, lineNumber: 327, columnNumber: 9 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: E, lineNumber: 322, columnNumber: 7 },
            this
          ),
          L || j
            ? e.exports.jsxDEV(
                ze,
                { className: T.spin },
                void 0,
                !1,
                { fileName: E, lineNumber: 330, columnNumber: 9 },
                this
              )
            : e.exports.jsxDEV(
                ce,
                {
                  children: [
                    ct &&
                      e.exports.jsxDEV(
                        Tn,
                        {
                          className: T['layout-sider'],
                          width: ut,
                          collapsed: D,
                          onCollapse: R,
                          trigger: null,
                          collapsible: !0,
                          breakpoint: 'xl',
                          style: dt,
                          children: [
                            e.exports.jsxDEV(
                              'div',
                              { className: T['menu-wrapper'], children: ft },
                              void 0,
                              !1,
                              {
                                fileName: E,
                                lineNumber: 344,
                                columnNumber: 15,
                              },
                              this
                            ),
                            e.exports.jsxDEV(
                              'div',
                              {
                                className: T['collapse-btn'],
                                onClick: bs,
                                children: D
                                  ? e.exports.jsxDEV(
                                      oo,
                                      {},
                                      void 0,
                                      !1,
                                      {
                                        fileName: E,
                                        lineNumber: 346,
                                        columnNumber: 30,
                                      },
                                      this
                                    )
                                  : e.exports.jsxDEV(
                                      no,
                                      {},
                                      void 0,
                                      !1,
                                      {
                                        fileName: E,
                                        lineNumber: 346,
                                        columnNumber: 51,
                                      },
                                      this
                                    ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: E,
                                lineNumber: 345,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: E, lineNumber: 334, columnNumber: 13 },
                        this
                      ),
                    e.exports.jsxDEV(
                      ce,
                      {
                        className: T['layout-content'],
                        style: gs,
                        children: [
                          mt &&
                            e.exports.jsxDEV(
                              gn,
                              {
                                defaultTab: te,
                                tabList: ee.length ? ee : [te],
                                offsetTop: je ? at : 0,
                                onTabsChange: ds,
                                onCloseTabs: fs,
                                onReload: ps,
                              },
                              void 0,
                              !1,
                              {
                                fileName: E,
                                lineNumber: 352,
                                columnNumber: 15,
                              },
                              this
                            ),
                          e.exports.jsxDEV(
                            'div',
                            {
                              className: pe(T['layout-content-wrapper'], {
                                [T['layout-content-wrapper-with-tab']]: mt,
                              }),
                              children: [
                                !!g.length &&
                                  e.exports.jsxDEV(
                                    'div',
                                    {
                                      className: T['layout-breadcrumb'],
                                      children: e.exports.jsxDEV(
                                        Rt,
                                        {
                                          children: g.map((f, S) =>
                                            e.exports.jsxDEV(
                                              Rt.Item,
                                              {
                                                children:
                                                  (typeof f == 'string' &&
                                                    h[f]) ||
                                                  f,
                                              },
                                              S,
                                              !1,
                                              {
                                                fileName: E,
                                                lineNumber: 370,
                                                columnNumber: 23,
                                              },
                                              this
                                            )
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: E,
                                          lineNumber: 368,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: E,
                                      lineNumber: 367,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                e.exports.jsxDEV(
                                  Ln,
                                  {
                                    children: e.exports.jsxDEV(
                                      Mt,
                                      {
                                        children: [
                                          le.map((f, S) =>
                                            e.exports.jsxDEV(
                                              _n,
                                              {
                                                path: `${u}/${f.key}`,
                                                component: f.component,
                                                identity: N,
                                              },
                                              S,
                                              !1,
                                              {
                                                fileName: E,
                                                lineNumber: 381,
                                                columnNumber: 23,
                                              },
                                              this
                                            )
                                          ),
                                          e.exports.jsxDEV(
                                            oe,
                                            {
                                              exact: !0,
                                              path: u || '/',
                                              children: e.exports.jsxDEV(
                                                ro,
                                                { to: `${u}/${c}` },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: E,
                                                  lineNumber: 390,
                                                  columnNumber: 21,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: E,
                                              lineNumber: 389,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                          e.exports.jsxDEV(
                                            oe,
                                            {
                                              path: '*',
                                              component: rs(() =>
                                                M(
                                                  () =>
                                                    Promise.resolve().then(
                                                      function () {
                                                        return it;
                                                      }
                                                    ),
                                                  void 0
                                                )
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: E,
                                              lineNumber: 392,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: E,
                                        lineNumber: 378,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: E,
                                    lineNumber: 377,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: E, lineNumber: 361, columnNumber: 13 },
                            this
                          ),
                          ms &&
                            e.exports.jsxDEV(
                              Yt,
                              {},
                              void 0,
                              !1,
                              {
                                fileName: E,
                                lineNumber: 399,
                                columnNumber: 28,
                              },
                              this
                            ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: E, lineNumber: 350, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: E, lineNumber: 332, columnNumber: 9 },
                this
              ),
        ],
      },
      void 0,
      !0,
      { fileName: E, lineNumber: 321, columnNumber: 5 },
      this
    )
  );
}
function Un() {
  return Xt({ url: '/api/system/captcha', method: 'GET' });
}
const is = {
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
  Kn = '_container_1kbuy_1',
  Gn = '_banner_1kbuy_5',
  Wn = '_content_1kbuy_9',
  qn = '_footer_1kbuy_14',
  Jn = '_logo_1kbuy_20',
  Hn = '_carousel_1kbuy_48';
var _ = {
    container: Kn,
    banner: Gn,
    content: Wn,
    footer: qn,
    logo: Jn,
    'logo-text': '_logo-text_1kbuy_28',
    'banner-inner': '_banner-inner_1kbuy_39',
    carousel: Hn,
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
function as() {
  const t = l.exports.useRef(),
    [s, o] = l.exports.useState(''),
    [n, r] = l.exports.useState(!1),
    [a, i] = l.exports.useState(!1),
    [u, p] = l.exports.useState(''),
    [d, h] = l.exports.useState(''),
    [v, L, k] = xe('loginParams'),
    N = J(is),
    [I, b] = l.exports.useState(!!v);
  function c() {
    i(!0),
      Un()
        .then((V) => {
          var g;
          p(V.captchaKey),
            h(V.captchaImage),
            (g = t.current) == null || g.setFieldValue('captchaCode', '');
        })
        .finally(() => {
          i(!1);
        });
  }
  async function j(V, g) {
    var _e, ye, fe, ee, ae, re;
    const P = (_e = g.defaultTenant) == null ? void 0 : _e.tenantCode;
    if (!P) {
      window.location.href = '/403';
      return;
    }
    I ? L(JSON.stringify({ account: V.account })) : k(),
      localStorage.setItem(ve, g.accessToken),
      localStorage.setItem(Be, P),
      localStorage.setItem(Ae, JSON.stringify(g.profile || {})),
      localStorage.setItem('userStatus', 'login');
    const D = await Ze(P);
    localStorage.setItem(Ae, JSON.stringify(D.profile || g.profile || {}));
    const R = (ye = D.menus) == null ? void 0 : ye[0],
      Te =
        ((ee =
          (fe = R == null ? void 0 : R.children) == null ? void 0 : fe[0]) ==
        null
          ? void 0
          : ee.routerPath) ||
        ((re =
          (ae = R == null ? void 0 : R.children) == null ? void 0 : ae[0]) ==
        null
          ? void 0
          : re.resourcePath) ||
        (R == null ? void 0 : R.routerPath) ||
        (R == null ? void 0 : R.resourcePath) ||
        '/dashboard/workplace';
    window.location.href = `/${P}/${Te.replace(/^\/+/, '')}`;
  }
  function W(V) {
    o(''),
      r(!0),
      ln($(C({}, V), { captchaKey: u }))
        .then((g) => j(V, g))
        .catch((g) => {
          var P, D;
          o(
            (g == null ? void 0 : g.message) ||
              ((D =
                (P = g == null ? void 0 : g.response) == null
                  ? void 0
                  : P.data) == null
                ? void 0
                : D.message) ||
              N['login.form.login.errMsg']
          ),
            c();
        })
        .finally(() => {
          r(!1);
        });
  }
  function z() {
    t.current.validate().then((V) => {
      W(V);
    });
  }
  return (
    l.exports.useEffect(() => {
      c();
    }, []),
    l.exports.useEffect(() => {
      const V = !!v;
      if ((b(V), t.current && V)) {
        const g = JSON.parse(v);
        t.current.setFieldsValue(g);
      }
    }, [v]),
    e.exports.jsxDEV(
      'div',
      {
        className: _['login-form-wrapper'],
        children: [
          e.exports.jsxDEV(
            'div',
            {
              className: _['login-form-title'],
              children: N['login.form.title'],
            },
            void 0,
            !1,
            { fileName: y, lineNumber: 124, columnNumber: 7 },
            this
          ),
          e.exports.jsxDEV(
            'div',
            {
              className: _['login-form-sub-title'],
              children: N['login.form.title'],
            },
            void 0,
            !1,
            { fileName: y, lineNumber: 125, columnNumber: 7 },
            this
          ),
          e.exports.jsxDEV(
            'div',
            { className: _['login-form-error-msg'], children: s },
            void 0,
            !1,
            { fileName: y, lineNumber: 128, columnNumber: 7 },
            this
          ),
          e.exports.jsxDEV(
            Ne,
            {
              className: _['login-form'],
              layout: 'vertical',
              ref: t,
              initialValues: { account: 'operator', password: 'Aa123!@#' },
              children: [
                e.exports.jsxDEV(
                  Ne.Item,
                  {
                    field: 'account',
                    rules: [
                      {
                        required: !0,
                        message: N['login.form.userName.errMsg'],
                      },
                    ],
                    children: e.exports.jsxDEV(
                      We,
                      {
                        prefix: e.exports.jsxDEV(
                          Ct,
                          {},
                          void 0,
                          !1,
                          { fileName: y, lineNumber: 140, columnNumber: 21 },
                          this
                        ),
                        placeholder: N['login.form.userName.placeholder'],
                        onPressEnter: z,
                      },
                      void 0,
                      !1,
                      { fileName: y, lineNumber: 139, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: y, lineNumber: 135, columnNumber: 9 },
                  this
                ),
                e.exports.jsxDEV(
                  Ne.Item,
                  {
                    field: 'password',
                    rules: [
                      {
                        required: !0,
                        message: N['login.form.password.errMsg'],
                      },
                    ],
                    children: e.exports.jsxDEV(
                      We.Password,
                      {
                        prefix: e.exports.jsxDEV(
                          io,
                          {},
                          void 0,
                          !1,
                          { fileName: y, lineNumber: 150, columnNumber: 21 },
                          this
                        ),
                        placeholder: N['login.form.password.placeholder'],
                        onPressEnter: z,
                      },
                      void 0,
                      !1,
                      { fileName: y, lineNumber: 149, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: y, lineNumber: 145, columnNumber: 9 },
                  this
                ),
                e.exports.jsxDEV(
                  Ne.Item,
                  {
                    children: e.exports.jsxDEV(
                      'div',
                      {
                        className: _['login-form-captcha-row'],
                        children: [
                          e.exports.jsxDEV(
                            Ne.Item,
                            {
                              field: 'captchaCode',
                              rules: [
                                {
                                  required: !0,
                                  message: N['login.form.captcha.errMsg'],
                                },
                              ],
                              noStyle: !0,
                              children: e.exports.jsxDEV(
                                We,
                                {
                                  className: _['login-form-captcha-input'],
                                  prefix: e.exports.jsxDEV(
                                    ao,
                                    {},
                                    void 0,
                                    !1,
                                    {
                                      fileName: y,
                                      lineNumber: 164,
                                      columnNumber: 25,
                                    },
                                    this
                                  ),
                                  maxLength: 5,
                                  placeholder:
                                    N['login.form.captcha.placeholder'],
                                  onPressEnter: z,
                                },
                                void 0,
                                !1,
                                {
                                  fileName: y,
                                  lineNumber: 162,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: y, lineNumber: 157, columnNumber: 13 },
                            this
                          ),
                          e.exports.jsxDEV(
                            Y,
                            {
                              type: 'text',
                              loading: a,
                              className: _['login-form-captcha-btn'],
                              onClick: c,
                              children: d
                                ? e.exports.jsxDEV(
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
                                      lineNumber: 177,
                                      columnNumber: 17,
                                    },
                                    this
                                  )
                                : N['login.form.captcha.refresh'],
                            },
                            void 0,
                            !1,
                            { fileName: y, lineNumber: 170, columnNumber: 13 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: y, lineNumber: 156, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: y, lineNumber: 155, columnNumber: 9 },
                  this
                ),
                e.exports.jsxDEV(
                  _t,
                  {
                    size: 16,
                    direction: 'vertical',
                    children: [
                      e.exports.jsxDEV(
                        'div',
                        {
                          className: _['login-form-password-actions'],
                          children: [
                            e.exports.jsxDEV(
                              uo,
                              {
                                checked: I,
                                onChange: b,
                                children: N['login.form.rememberPassword'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: y,
                                lineNumber: 190,
                                columnNumber: 13,
                              },
                              this
                            ),
                            e.exports.jsxDEV(
                              lo,
                              { children: N['login.form.forgetPassword'] },
                              void 0,
                              !1,
                              {
                                fileName: y,
                                lineNumber: 193,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: y, lineNumber: 189, columnNumber: 11 },
                        this
                      ),
                      e.exports.jsxDEV(
                        Y,
                        {
                          type: 'primary',
                          long: !0,
                          onClick: z,
                          loading: n,
                          children: N['login.form.login'],
                        },
                        void 0,
                        !1,
                        { fileName: y, lineNumber: 195, columnNumber: 11 },
                        this
                      ),
                      e.exports.jsxDEV(
                        Y,
                        {
                          type: 'text',
                          long: !0,
                          className: _['login-form-register-btn'],
                          children: N['login.form.register'],
                        },
                        void 0,
                        !1,
                        { fileName: y, lineNumber: 198, columnNumber: 11 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: y, lineNumber: 188, columnNumber: 9 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: y, lineNumber: 129, columnNumber: 7 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: y, lineNumber: 123, columnNumber: 5 },
      this
    )
  );
}
var Xn = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: as,
  }),
  de = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/login/banner.tsx';
function us() {
  const t = J(is),
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
  return e.exports.jsxDEV(
    co,
    {
      className: _.carousel,
      animation: 'fade',
      children: s.map((o, n) =>
        e.exports.jsxDEV(
          'div',
          {
            children: e.exports.jsxDEV(
              'div',
              {
                className: _['carousel-item'],
                children: [
                  e.exports.jsxDEV(
                    'div',
                    { className: _['carousel-title'], children: o.slogan },
                    void 0,
                    !1,
                    { fileName: de, lineNumber: 34, columnNumber: 13 },
                    this
                  ),
                  e.exports.jsxDEV(
                    'div',
                    {
                      className: _['carousel-sub-title'],
                      children: o.subSlogan,
                    },
                    void 0,
                    !1,
                    { fileName: de, lineNumber: 35, columnNumber: 13 },
                    this
                  ),
                  e.exports.jsxDEV(
                    'img',
                    {
                      alt: 'banner-image',
                      className: _['carousel-image'],
                      src: o.image,
                    },
                    void 0,
                    !1,
                    { fileName: de, lineNumber: 36, columnNumber: 13 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: de, lineNumber: 33, columnNumber: 11 },
              this
            ),
          },
          `${n}`,
          !1,
          { fileName: de, lineNumber: 32, columnNumber: 9 },
          this
        )
      ),
    },
    void 0,
    !1,
    { fileName: de, lineNumber: 30, columnNumber: 5 },
    this
  );
}
var Yn = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    default: us,
  }),
  q = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/login/index.tsx';
function Pe() {
  return (
    l.exports.useEffect(() => {
      document.body.setAttribute('arco-theme', 'light');
    }, []),
    e.exports.jsxDEV(
      'div',
      {
        className: _.container,
        children: [
          e.exports.jsxDEV(
            'div',
            {
              className: _.logo,
              children: [
                e.exports.jsxDEV(
                  Ut,
                  {},
                  void 0,
                  !1,
                  { fileName: q, lineNumber: 16, columnNumber: 9 },
                  this
                ),
                e.exports.jsxDEV(
                  'div',
                  { className: _['logo-text'], children: 'Arco Design Pro' },
                  void 0,
                  !1,
                  { fileName: q, lineNumber: 17, columnNumber: 9 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: q, lineNumber: 15, columnNumber: 7 },
            this
          ),
          e.exports.jsxDEV(
            'div',
            {
              className: _.banner,
              children: e.exports.jsxDEV(
                'div',
                {
                  className: _['banner-inner'],
                  children: e.exports.jsxDEV(
                    us,
                    {},
                    void 0,
                    !1,
                    { fileName: q, lineNumber: 21, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: q, lineNumber: 20, columnNumber: 9 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: q, lineNumber: 19, columnNumber: 7 },
            this
          ),
          e.exports.jsxDEV(
            'div',
            {
              className: _.content,
              children: [
                e.exports.jsxDEV(
                  'div',
                  {
                    className: _['content-inner'],
                    children: e.exports.jsxDEV(
                      as,
                      {},
                      void 0,
                      !1,
                      { fileName: q, lineNumber: 26, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: q, lineNumber: 25, columnNumber: 9 },
                  this
                ),
                e.exports.jsxDEV(
                  'div',
                  {
                    className: _.footer,
                    children: e.exports.jsxDEV(
                      Yt,
                      {},
                      void 0,
                      !1,
                      { fileName: q, lineNumber: 29, columnNumber: 11 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: q, lineNumber: 28, columnNumber: 9 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: q, lineNumber: 24, columnNumber: 7 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: q, lineNumber: 14, columnNumber: 5 },
      this
    )
  );
}
Pe.displayName = 'LoginPage';
var Zn = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Pe,
});
const Qn = {
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
  er = '_wrapper_jqkv8_1',
  tr = '_result_jqkv8_6';
var nt = { wrapper: er, result: tr },
  Re =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/exception/403/index.tsx';
function rt() {
  const t = J(Qn),
    s = Ge();
  return e.exports.jsxDEV(
    'div',
    {
      className: nt.container,
      children: e.exports.jsxDEV(
        'div',
        {
          className: nt.wrapper,
          children: e.exports.jsxDEV(
            vt,
            {
              className: nt.result,
              status: '403',
              subTitle: t['exception.result.403.description'],
              extra: e.exports.jsxDEV(
                Y,
                {
                  type: 'primary',
                  onClick: () => s.push('/login'),
                  children: t['exception.result.403.back'],
                },
                'back',
                !1,
                { fileName: Re, lineNumber: 20, columnNumber: 13 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: Re, lineNumber: 15, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: Re, lineNumber: 14, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: Re, lineNumber: 13, columnNumber: 5 },
    this
  );
}
var it = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: rt,
});
function sr() {
  return !!localStorage.getItem(ve);
}
function or(t) {
  t === 'dark'
    ? document.body.setAttribute('arco-theme', 'dark')
    : document.body.removeAttribute('arco-theme');
}
var ls = (t) => {
  const { mock: s = !0, setup: o } = t;
  s !== !1 && o();
};
me ||
  ((ne.XHR.prototype.withCredentials = !0),
  ls({
    setup: () => {
      const t = window.localStorage.getItem('userRole') || 'admin';
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
          permissions: Cn(t),
        })
      ),
        ne.mock(new RegExp('/api/user/login'), (s) => {
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
const cs = [],
  nr = () =>
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
    ].map((t) => $(C({}, t), { status: cs.indexOf(t.id) === -1 ? 0 : 1 }));
ls({
  setup: () => {
    ne.mock(new RegExp('/api/message/list'), () => nr()),
      ne.mock(new RegExp('/api/message/read'), (t) => {
        const { ids: s } = JSON.parse(t.body);
        return cs.push(...(s || [])), !0;
      });
  },
});
me || ne.setup({ timeout: '500-1500' });
var G = '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/main.tsx';
const Me = mo(Co);
function rr() {
  const t = Ke(),
    [s, o] = xe('arco-lang', 'en-US'),
    [n, r] = xe('arco-theme', 'light');
  function a() {
    switch (s) {
      case 'zh-CN':
        return Lt;
      case 'en-US':
        return No;
      default:
        return Lt;
    }
  }
  async function i() {
    Me.dispatch({ type: 'update-userInfo', payload: { userLoading: !0 } });
    const p = Ee();
    try {
      const d = p ? await Ze(p) : null;
      Me.dispatch({
        type: 'update-userInfo',
        payload: {
          userInfo: $(
            C(C({}, Gt() || {}), (d == null ? void 0 : d.profile) || {}),
            {
              permissions: (d == null ? void 0 : d.permissions) || [],
              fieldPolicies: (d == null ? void 0 : d.fieldPolicies) || {},
            }
          ),
          userLoading: !1,
        },
      });
    } catch {
      Me.dispatch({
        type: 'update-userInfo',
        payload: { userInfo: Gt() || { permissions: {} }, userLoading: !1 },
      });
    }
  }
  l.exports.useEffect(() => {
    const p = window.location.pathname,
      d = p === '/login' || p.endsWith('/login'),
      h = p === '/403' || p.endsWith('/403');
    sr() ? i() : !d && !h && (window.location.pathname = '/login');
  }, []),
    l.exports.useEffect(() => {
      or(n), t({ type: 'update-theme', payload: { theme: n } });
    }, [t, n]);
  const u = { lang: s, setLang: o, theme: n, setTheme: r };
  return e.exports.jsxDEV(
    ho,
    {
      children: e.exports.jsxDEV(
        bo,
        {
          locale: a(),
          componentConfig: {
            Card: { bordered: !1 },
            List: { bordered: !1 },
            Table: { border: !1 },
          },
          children: e.exports.jsxDEV(
            qe.Provider,
            {
              value: u,
              children: e.exports.jsxDEV(
                Pt.exports.AliveScope,
                {
                  children: e.exports.jsxDEV(
                    Mt,
                    {
                      children: [
                        e.exports.jsxDEV(
                          oe,
                          { path: '/login', component: Pe },
                          void 0,
                          !1,
                          { fileName: G, lineNumber: 116, columnNumber: 15 },
                          this
                        ),
                        e.exports.jsxDEV(
                          oe,
                          { path: '/:tenantCode/login', component: Pe },
                          void 0,
                          !1,
                          { fileName: G, lineNumber: 117, columnNumber: 15 },
                          this
                        ),
                        e.exports.jsxDEV(
                          oe,
                          { path: '/403', component: rt },
                          void 0,
                          !1,
                          { fileName: G, lineNumber: 118, columnNumber: 15 },
                          this
                        ),
                        e.exports.jsxDEV(
                          oe,
                          { path: '/:tenantCode/403', component: rt },
                          void 0,
                          !1,
                          { fileName: G, lineNumber: 119, columnNumber: 15 },
                          this
                        ),
                        e.exports.jsxDEV(
                          oe,
                          { path: '/', component: zn },
                          void 0,
                          !1,
                          { fileName: G, lineNumber: 120, columnNumber: 15 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: G, lineNumber: 115, columnNumber: 13 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: G, lineNumber: 114, columnNumber: 11 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: G, lineNumber: 113, columnNumber: 9 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: G, lineNumber: 99, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: G, lineNumber: 98, columnNumber: 5 },
    this
  );
}
function ir() {
  return e.exports.jsxDEV(
    po,
    {
      store: Me,
      children: e.exports.jsxDEV(
        rr,
        {},
        void 0,
        !1,
        { fileName: G, lineNumber: 132, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: G, lineNumber: 131, columnNumber: 5 },
    this
  );
}
fo.render(
  e.exports.jsxDEV(
    ir,
    {},
    void 0,
    !1,
    { fileName: G, lineNumber: 137, columnNumber: 17 },
    globalThis
  ),
  document.getElementById('root')
);
export { ls as s, J as u };
