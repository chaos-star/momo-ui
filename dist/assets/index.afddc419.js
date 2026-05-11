var Kn = Object.defineProperty,
  Wn = Object.defineProperties;
var Vn = Object.getOwnPropertyDescriptors;
var ve = Object.getOwnPropertySymbols;
var Nt = Object.prototype.hasOwnProperty,
  Bt = Object.prototype.propertyIsEnumerable;
var kt = (e, t, n) =>
    t in e
      ? Kn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  _ = (e, t) => {
    for (var n in t || (t = {})) Nt.call(t, n) && kt(e, n, t[n]);
    if (ve) for (var n of ve(t)) Bt.call(t, n) && kt(e, n, t[n]);
    return e;
  },
  B = (e, t) => Wn(e, Vn(t));
var Se = (e, t) => {
  var n = {};
  for (var r in e) Nt.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ve)
    for (var r of ve(e)) t.indexOf(r) < 0 && Bt.call(e, r) && (n[r] = e[r]);
  return n;
};
import {
  r as i,
  j as o,
  L as Ye,
  R as Pt,
  a as m,
  B as Q,
  A as It,
  S as Tt,
  T as we,
  b as Jn,
  c as Rt,
  d as Gn,
  g as Yn,
  I as Hn,
  e as Xn,
  f as Zn,
  h as He,
  i as Lt,
  k as xe,
  l as ye,
  M as le,
  u as ge,
  m as Xe,
  n as Qn,
  o as eo,
  D as Mt,
  p as $t,
  q as to,
  s as no,
  F as De,
  t as Ot,
  v as Ae,
  w as oo,
  x as ro,
  y as so,
  z as I,
  C as qt,
  E as ao,
  G as uo,
  H as io,
  J as co,
  K as lo,
  N as go,
  O as mo,
  P as po,
  Q as ho,
  U as fo,
  V as zt,
  W as me,
  X as yo,
  Y as Ze,
  Z as jt,
  _ as bo,
  $ as _o,
  a0 as Ut,
  a1 as Eo,
  a2 as Co,
  a3 as Fo,
  a4 as vo,
  a5 as ee,
  a6 as So,
  a7 as Kt,
  a8 as wo,
  a9 as Wt,
  aa as xo,
  ab as Do,
  ac as Vt,
  ad as Jt,
  ae as Gt,
  af as Yt,
  ag as be,
  ah as Qe,
  ai as Ao,
  aj as No,
  ak as Bo,
  al as ko,
  am as Po,
  an as te,
  ao as Io,
  ap as To,
  aq as Ro,
  ar as Lo,
  as as Mo,
  at as Ht,
  au as $o,
} from './vendor.aac6daa3.js';
const Oo = function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const u of s)
      if (u.type === 'childList')
        for (const a of u.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const u = {};
    return (
      s.integrity && (u.integrity = s.integrity),
      s.referrerpolicy && (u.referrerPolicy = s.referrerpolicy),
      s.crossorigin === 'use-credentials'
        ? (u.credentials = 'include')
        : s.crossorigin === 'anonymous'
        ? (u.credentials = 'omit')
        : (u.credentials = 'same-origin'),
      u
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const u = n(s);
    fetch(s.href, u);
  }
};
Oo();
const qo = !1,
  zo = !0,
  jo = !0,
  Uo = !1,
  Ko = !0,
  Wo = !0,
  Vo = '#165DFF',
  Jo = 220;
var Xt = {
  colorWeek: qo,
  navbar: zo,
  menu: jo,
  topMenu: Uo,
  tabBar: Ko,
  footer: Wo,
  themeColor: Vo,
  menuWidth: Jo,
};
const Zt = { settings: Xt, theme: 'light', userInfo: { permissions: {} } };
function Go(e = Zt, t) {
  switch (t.type) {
    case 'update-settings': {
      const { settings: n } = t.payload;
      return B(_({}, e), { settings: n });
    }
    case 'update-theme': {
      const { theme: n } = t.payload;
      return B(_({}, e), { theme: n });
    }
    case 'update-userInfo': {
      const { userInfo: n = Zt.userInfo, userLoading: r } = t.payload;
      return B(_({}, e), { userLoading: r, userInfo: n });
    }
    default:
      return e;
  }
}
const Yo = 'modulepreload',
  Qt = {},
  Ho = '/',
  R = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((r) => {
            if (((r = `${Ho}${r}`), r in Qt)) return;
            Qt[r] = !0;
            const s = r.endsWith('.css'),
              u = s ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${r}"]${u}`)) return;
            const a = document.createElement('link');
            if (
              ((a.rel = s ? 'stylesheet' : Yo),
              s || ((a.as = 'script'), (a.crossOrigin = '')),
              (a.href = r),
              document.head.appendChild(a),
              s)
            )
              return new Promise((c, p) => {
                a.addEventListener('load', c), a.addEventListener('error', p);
              });
          })
        ).then(() => t());
  },
  ne = i.exports.createContext({}),
  en = {
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
function V(e = null) {
  const { lang: t } = i.exports.useContext(ne);
  return (e || en)[t] || {};
}
const tn = (e) =>
    i.exports.createElement(
      'svg',
      _(
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
  Xo = '_footer_8a7h1_26';
var _e = {
  'message-box': '_message-box_8a7h1_1',
  'message-title': '_message-title_8a7h1_22',
  footer: Xo,
  'footer-item': '_footer-item_8a7h1_29',
};
function Zo(e) {
  const t = V(),
    { data: n, unReadData: r } = e;
  function s(a, c) {
    a.status || (e.onItemClick && e.onItemClick(a, c));
  }
  function u() {
    e.onAllBtnClick && e.onAllBtnClick(r, n);
  }
  return o(Ye, {
    noDataElement: o(Pt, { status: '404', subTitle: t['message.empty.tips'] }),
    footer: m('div', {
      className: _e.footer,
      children: [
        o('div', {
          className: _e['footer-item'],
          children: o(Q, {
            type: 'text',
            size: 'small',
            onClick: u,
            children: t['message.allRead'],
          }),
        }),
        o('div', {
          className: _e['footer-item'],
          children: o(Q, {
            type: 'text',
            size: 'small',
            children: t['message.seeMore'],
          }),
        }),
      ],
    }),
    children: n.map((a, c) =>
      o(
        Ye.Item,
        {
          actionLayout: 'vertical',
          style: { opacity: a.status ? 0.5 : 1 },
          children: o('div', {
            style: { cursor: 'pointer' },
            onClick: () => {
              s(a, c);
            },
            children: o(Ye.Item.Meta, {
              avatar:
                a.avatar &&
                o(It, {
                  shape: 'circle',
                  size: 36,
                  children: o('img', { src: a.avatar }),
                }),
              title: m('div', {
                className: _e['message-title'],
                children: [
                  m(Tt, {
                    size: 4,
                    children: [
                      o('span', { children: a.title }),
                      o(we.Text, { type: 'secondary', children: a.subTitle }),
                    ],
                  }),
                  a.tag && a.tag.text
                    ? o(Jn, { color: a.tag.color, children: a.tag.text })
                    : null,
                ],
              }),
              description: m('div', {
                children: [
                  o(we.Paragraph, {
                    style: { marginBottom: 0 },
                    ellipsis: !0,
                    children: a.content,
                  }),
                  o(we.Text, {
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
function Qo() {
  const e = V(),
    [t, n] = i.exports.useState(!1),
    [r, s] = i.exports.useState({}),
    [u, a] = i.exports.useState([]);
  function c(y = !0) {
    y && n(!0),
      xe
        .get('/api/message/list')
        .then((E) => {
          a(E.data);
        })
        .finally(() => {
          y && n(!1);
        });
  }
  function p(y) {
    const E = y.map((P) => P.id);
    xe.post('/api/message/read', { ids: E }).then(() => {
      c();
    });
  }
  i.exports.useEffect(() => {
    c();
  }, []),
    i.exports.useEffect(() => {
      const y = Yn(u, 'type');
      s(y);
    }, [u]);
  const C = [
    {
      key: 'message',
      title: e['message.tab.title.message'],
      titleIcon: o(Hn, {}),
    },
    {
      key: 'notice',
      title: e['message.tab.title.notice'],
      titleIcon: o(Xn, {}),
    },
    { key: 'todo', title: e['message.tab.title.todo'], titleIcon: o(Zn, {}) },
  ];
  return o('div', {
    className: _e['message-box'],
    children: o(He, {
      loading: t,
      style: { display: 'block' },
      children: o(Lt, {
        overflow: 'dropdown',
        type: 'rounded',
        defaultActiveTab: 'message',
        destroyOnHide: !0,
        extra: o(Q, {
          type: 'text',
          onClick: () => a([]),
          children: e['message.empty'],
        }),
        children: C.map((y) => {
          const { key: E, title: P } = y,
            N = r[E] || [],
            b = N.filter((k) => !k.status);
          return o(
            Lt.TabPane,
            {
              title: m('span', {
                children: [P, b.length ? `(${b.length})` : ''],
              }),
              children: o(Zo, {
                data: N,
                unReadData: b,
                onItemClick: (k) => {
                  p([k]);
                },
                onAllBtnClick: (k) => {
                  p(k);
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
function er({ children: e }) {
  return o(Rt, {
    trigger: 'hover',
    popup: () => o(Qo, {}),
    position: 'br',
    unmountOnExit: !1,
    popupAlign: { bottom: 4 },
    children: o(Gn, { count: 9, dot: !0, children: e }),
  });
}
var tr = { 'icon-button': '_icon-button_12azl_1' };
function nr(e, t) {
  const u = e,
    { icon: n, className: r } = u,
    s = Se(u, ['icon', 'className']);
  return o(
    Q,
    _(
      {
        ref: t,
        icon: n,
        shape: 'circle',
        type: 'secondary',
        className: ye(tr['icon-button'], r),
      },
      s
    )
  );
}
var Ne = i.exports.forwardRef(nr);
const Be = 'user-profile';
function ke(e) {
  const t =
    (e == null ? void 0 : e.tenantCode) || (e == null ? void 0 : e.code);
  return typeof t == 'string' || typeof t == 'number' ? String(t) : '';
}
function oe(e = window.location.pathname) {
  const [, t] = e.split('/');
  return !t || t === 'login' || t === '403' ? '' : t;
}
function et(e = window.location.pathname) {
  const t = oe(e);
  if (!t) return e || '/';
  const n = e.replace(`/${t}`, '') || '/';
  return n.startsWith('/') ? n : `/${n}`;
}
function Pe() {
  const e = localStorage.getItem(Be);
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function tt() {
  const e = Pe();
  return (
    ke(e == null ? void 0 : e.defaultTenant) ||
    ke(e == null ? void 0 : e.currentTenant) ||
    ke(e)
  );
}
const or = ['X-Organization', 'organization'];
function rr() {
  if (typeof localStorage == 'undefined') return '';
  for (const e of or) {
    const t = localStorage.getItem(e);
    if (t) return t;
  }
  return '';
}
function nn(
  e = typeof window != 'undefined' ? window.location.pathname : '',
  t
) {
  const n = oe(e);
  if (n) return n;
  const r = tt();
  if (r) return r;
  const s = rr();
  if (s) return s;
  const u = t == null ? void 0 : t.currentTenant,
    a = ke(u);
  return a || '';
}
function sr(e, t) {
  const n = nn(e, t);
  return n ? `/${n}` : '';
}
const de = 'X-Access-Token',
  Ie = 'X-Organization',
  nt = 'Accept-Language',
  on = 'zh-CN';
function ar() {
  return localStorage.getItem(de) || localStorage.getItem('accessToken') || '';
}
function ur() {
  return (
    oe() ||
    localStorage.getItem(Ie) ||
    localStorage.getItem('organization') ||
    ''
  );
}
function ir() {
  return localStorage.getItem(nt) || on;
}
function cr(e) {
  return e === 200;
}
function lr(e, t = '\u8BF7\u6C42\u5931\u8D25') {
  return (e == null ? void 0 : e.message) || t;
}
let ot = !1;
function Te(e) {
  var t;
  return (
    (e == null ? void 0 : e.status) === 401 ||
    ((t = e == null ? void 0 : e.data) == null ? void 0 : t.code) === 401
  );
}
function gr() {
  if (ot) return;
  (ot = !0),
    localStorage.removeItem(de),
    localStorage.setItem('userStatus', 'logout');
  const { pathname: e } = window.location;
  e === '/login' || e.endsWith('/login')
    ? (ot = !1)
    : window.location.replace('/login');
}
function Re(e) {
  (e == null ? void 0 : e.skipErrorMessage) ||
    le.error(
      '\u767B\u5F55\u72B6\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55'
    ),
    gr();
}
xe.interceptors.response.use(
  (e) => (Te(e) && Re(), e),
  (e) => (Te(e.response) && Re(), Promise.reject(e))
);
function mr(e, t) {
  return Te(e)
    ? (Re(t), Promise.reject(e.data))
    : e.status === 200 && cr(e.data.code)
    ? e.data.data
    : ((t == null ? void 0 : t.skipErrorMessage) || le.error(lr(e.data)),
      Promise.reject(e.data));
}
function dr(e, t) {
  var n, r, s;
  if (Te(e.response)) return Re(t), Promise.reject(e);
  if (!(t == null ? void 0 : t.skipErrorMessage)) {
    const u =
      ((r = (n = e.response) == null ? void 0 : n.data) == null
        ? void 0
        : r.message) ||
      (((s = e.response) == null ? void 0 : s.status)
        ? `\u8BF7\u6C42\u5931\u8D25\uFF0C\u72B6\u6001\u7801\uFF1A${e.response.status}`
        : e.message ||
          '\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5');
    le.error(u);
  }
  return Promise.reject(e);
}
function rn(e) {
  const t = xe.create({
    baseURL: 'https://api.example.com',
    timeout: 3e4,
    validateStatus: () => !0,
  });
  return (
    t.interceptors.request.use((n) => {
      const r = _({ [nt]: ir() }, n.headers);
      if (e) {
        const s = ar(),
          u = ur();
        n.headers = B(_({}, r), { [de]: s, [Ie]: u });
      } else n.headers = r;
      return n;
    }),
    t
  );
}
function sn(e) {
  return async function (n) {
    try {
      const r = await e.request(n);
      return mr(r, n);
    } catch (r) {
      return dr(r, n);
    }
  };
}
const ue = sn(rn(!0)),
  rt = sn(rn(!1));
function pr() {
  return ue({ url: '/api/system/user-theme', method: 'GET' });
}
function Le(e) {
  return ue({ url: '/api/system/user-theme', method: 'PATCH', data: e });
}
const an = 'user-theme';
function st() {
  return { settings: _({}, Xt), theme: 'light', lang: on };
}
function un(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function at(e) {
  const t = st();
  if (!un(e)) return t;
  const n = un(e.settings) ? _(_({}, t.settings), e.settings) : t.settings,
    r = e.theme === 'dark' || e.theme === 'light' ? e.theme : t.theme,
    s =
      e.lang === 'zh-CN' || e.lang === 'en-US' || e.lang === 'es-ES'
        ? e.lang
        : t.lang;
  return { settings: n, theme: r, lang: s };
}
function Me() {
  const e = localStorage.getItem(an);
  if (!e) return st();
  try {
    return at(JSON.parse(e));
  } catch {
    return st();
  }
}
function pe(e) {
  const t = at(e);
  return (
    localStorage.setItem(an, JSON.stringify(t)),
    localStorage.setItem('arco-theme', t.theme),
    localStorage.setItem('arco-lang', t.lang),
    localStorage.setItem(nt, t.lang),
    t
  );
}
function $e(e) {
  const t = Me();
  if (e.path.startsWith('settings.')) {
    const n = e.path.replace('settings.', '');
    t.settings = B(_({}, t.settings), { [n]: e.value });
  } else
    e.path === 'theme'
      ? (t.theme = e.value)
      : e.path === 'lang' && (t.lang = e.value);
  return pe(t);
}
const hr = '_block_byc7u_1',
  fr = '_title_byc7u_4';
var ut = { block: hr, title: fr, 'switch-wrapper': '_switch-wrapper_byc7u_9' };
function it(e) {
  const { title: t, options: n, children: r } = e,
    s = V(),
    u = ge((p) => p.settings),
    a = Xe();
  function c(p, C) {
    const y = `settings.${p}`;
    $e({ path: y, value: C }), Le({ path: y, value: C }).catch(() => {});
  }
  return m('div', {
    className: ut.block,
    children: [
      o('h5', { className: ut.title, children: t }),
      n &&
        n.map((p) => {
          const C = p.type || 'switch';
          return m(
            'div',
            {
              className: ut['switch-wrapper'],
              children: [
                o('span', { children: s[p.name] }),
                C === 'switch' &&
                  o(Qn, {
                    size: 'small',
                    checked: !!u[p.value],
                    onChange: (y) => {
                      const E = B(_({}, u), { [p.value]: y });
                      a({ type: 'update-settings', payload: { settings: E } }),
                        c(p.value, y),
                        y &&
                          p.value === 'colorWeek' &&
                          (document.body.style.filter = 'invert(80%)'),
                        !y &&
                          p.value === 'colorWeek' &&
                          (document.body.style.filter = 'none');
                    },
                  }),
                C === 'number' &&
                  o(eo, {
                    style: { width: 80 },
                    size: 'small',
                    value: u.menuWidth,
                    onChange: (y) => {
                      const E = B(_({}, u), { [p.value]: y });
                      a({ type: 'update-settings', payload: { settings: E } }),
                        c(p.value, y);
                    },
                  }),
              ],
            },
            p.value
          );
        }),
      r,
      o(Mt, {}),
    ],
  });
}
function cn(e, t = 'light') {
  $t(e, { list: !0, dark: t === 'dark' }).forEach((r, s) => {
    document.body.style.setProperty(`--arcoblue-${s + 1}`, to(r));
  });
}
function Oe(e, t) {
  e === 'dark'
    ? document.body.setAttribute('arco-theme', 'dark')
    : document.body.removeAttribute('arco-theme'),
    t && cn(t, e);
}
const yr = '_input_77wyg_1',
  br = '_color_77wyg_9',
  _r = '_ul_77wyg_14',
  Er = '_li_77wyg_19';
var qe = { input: yr, color: br, ul: _r, li: Er };
const Cr = [
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
function Fr() {
  const e =
      document.querySelector('body').getAttribute('arco-theme') || 'light',
    t = ge((a) => a.settings),
    n = V(),
    r = t.themeColor,
    s = $t(r, { list: !0 }),
    u = Xe();
  return m('div', {
    children: [
      o(Rt, {
        trigger: 'hover',
        position: 'bl',
        popup: () =>
          o(no, {
            color: r,
            presetColors: Cr,
            onChangeComplete: (a) => {
              const c = a.hex;
              u({
                type: 'update-settings',
                payload: { settings: B(_({}, t), { themeColor: c }) },
              }),
                $e({ path: 'settings.themeColor', value: c }),
                Le({ path: 'settings.themeColor', value: c }).catch(() => {}),
                cn(c, e);
            },
          }),
        children: m('div', {
          className: qe.input,
          children: [
            o('div', { className: qe.color, style: { backgroundColor: r } }),
            o('span', { children: r }),
          ],
        }),
      }),
      o('ul', {
        className: qe.ul,
        children: s.map((a, c) =>
          o('li', { className: qe.li, style: { backgroundColor: a } }, c)
        ),
      }),
      o(we.Paragraph, {
        style: { fontSize: 12 },
        children: n['settings.color.tooltip'],
      }),
    ],
  });
}
function ln(e) {
  const { trigger: t } = e,
    [n, r] = i.exports.useState(!1),
    s = V(),
    u = ge((C) => C.settings),
    { applyUserTheme: a } = i.exports.useContext(ne);
  function c() {
    r(!0),
      pr()
        .then((C) => {
          a == null || a(at(C.config));
        })
        .catch(() => {});
  }
  function p() {
    so(JSON.stringify(u, null, 2)),
      le.success(s['settings.copySettings.message']);
  }
  return m(De, {
    children: [
      t
        ? Ot.cloneElement(t, { onClick: c })
        : o(Ne, { icon: o(Ae, {}), onClick: c }),
      m(oo, {
        width: 300,
        title: m(De, { children: [o(Ae, {}), s['settings.title']] }),
        visible: n,
        okText: s['settings.copySettings'],
        cancelText: s['settings.close'],
        onOk: p,
        onCancel: () => r(!1),
        children: [
          o(it, { title: s['settings.themeColor'], children: o(Fr, {}) }),
          o(it, {
            title: s['settings.content'],
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
          o(it, {
            title: s['settings.otherSettings'],
            options: [{ name: 'settings.colorWeek', value: 'colorWeek' }],
          }),
          o(ro, { content: s['settings.alertContent'] }),
        ],
      }),
    ],
  });
}
const vr = '_navbar_1nn4p_1',
  Sr = '_left_1nn4p_10',
  wr = '_logo_1nn4p_15',
  xr = '_center_1nn4p_35',
  Dr = '_right_1nn4p_51',
  Ar = '_username_1nn4p_66',
  Nr = '_round_1nn4p_69';
var $ = {
  navbar: vr,
  left: Sr,
  logo: wr,
  'logo-image': '_logo-image_1nn4p_22',
  'logo-name': '_logo-name_1nn4p_28',
  center: xr,
  right: Dr,
  username: Ar,
  round: Nr,
  'dropdown-icon': '_dropdown-icon_1nn4p_75',
  'fixed-settings': '_fixed-settings_1nn4p_80',
};
function Br(e) {
  return Object.prototype.toString.call(e) === '[object Array]';
}
const he = (function () {
    try {
      return !(typeof window != 'undefined' && document !== void 0);
    } catch {
      return !0;
    }
  })(),
  kr = (e) => {
    if (!he) return localStorage.getItem(e);
  };
function Ee(e, t) {
  const [n, r] = i.exports.useState(kr(e) || t),
    s = (a) => {
      he || (localStorage.setItem(e, a), a !== n && r(a));
    },
    u = () => {
      he || localStorage.removeItem(e);
    };
  return (
    i.exports.useEffect(() => {
      const a = localStorage.getItem(e);
      a && r(a);
    }, [e]),
    [n, s, u]
  );
}
function Pr(e) {
  return rt({ url: '/api/system/users/login', method: 'POST', data: e });
}
function Ir() {
  return ue({ url: '/api/system/users/logout', method: 'POST' });
}
function ze(e) {
  return `${e}-resource`;
}
function ct(e) {
  const t = localStorage.getItem(ze(e));
  if (!t) return null;
  try {
    return JSON.parse(t);
  } catch {
    return localStorage.removeItem(ze(e)), null;
  }
}
function Tr(e, t) {
  localStorage.setItem(ze(e), JSON.stringify(t));
}
function Rr() {
  return ue({ url: '/api/auth/context', method: 'GET' });
}
async function lt(e) {
  const t = ct(e);
  if (t) return t;
  const n = await Rr();
  return Tr(e, n), n;
}
const je = 'system-profile',
  Ce = {
    config: {
      logoPath: '',
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
function re(e) {
  var t, n, r;
  return {
    config: B(_(_({}, Ce.config), (e == null ? void 0 : e.config) || {}), {
      systemName: _(
        _({}, Ce.config.systemName),
        ((t = e == null ? void 0 : e.config) == null ? void 0 : t.systemName) ||
          {}
      ),
      companyName: _(
        _({}, Ce.config.companyName),
        ((n = e == null ? void 0 : e.config) == null
          ? void 0
          : n.companyName) || {}
      ),
      systemDescription: _(
        _({}, Ce.config.systemDescription),
        ((r = e == null ? void 0 : e.config) == null
          ? void 0
          : r.systemDescription) || {}
      ),
    }),
    logoUrl: (e == null ? void 0 : e.logoUrl) || '',
    obsCloudBase: (e == null ? void 0 : e.obsCloudBase) || '',
  };
}
function gt(e, t = 'zh-CN') {
  return (
    (e == null ? void 0 : e[t]) ||
    (e == null ? void 0 : e['zh-CN']) ||
    (e == null ? void 0 : e['en-US']) ||
    ''
  );
}
function Ue(e, t = 'zh-CN') {
  return gt(re(e).config.systemName, t);
}
function Lr(e, t = 'zh-CN') {
  return gt(re(e).config.companyName, t);
}
function gn(e, t = 'zh-CN') {
  return gt(re(e).config.systemDescription, t);
}
function Mr(e, t = 'zh-CN') {
  const n = Ue(e, t),
    r = gn(e, t);
  return r ? `${n} - ${r}` : n;
}
function $r(e, t = 'zh-CN') {
  return `\xA9 2026-${new Date().getFullYear()} ${Lr(e, t)}`;
}
function Or() {
  try {
    const e = localStorage.getItem(je);
    return e ? re(JSON.parse(e)) : null;
  } catch {
    return localStorage.removeItem(je), null;
  }
}
function mn(e) {
  const t = re(e);
  return localStorage.setItem(je, JSON.stringify(t)), t;
}
function qr() {
  localStorage.removeItem(je);
}
function zr({ show: e, topMenu: t, menu: n }) {
  const r = V(),
    s = ge((d) => d.userInfo),
    u = Pe(),
    a = (u == null ? void 0 : u.avatar) || (s == null ? void 0 : s.avatar),
    [, c] = Ee('userStatus'),
    [p, C] = Ee('userRole', 'admin'),
    {
      setLang: y,
      lang: E,
      theme: P,
      setTheme: N,
      systemProfile: b,
    } = i.exports.useContext(ne),
    k = Ue(b, E),
    z = b == null ? void 0 : b.logoUrl;
  function l() {
    const d = oe();
    c('logout'),
      localStorage.removeItem(de),
      localStorage.removeItem(Ie),
      localStorage.removeItem(Be),
      d && localStorage.removeItem(ze(d)),
      localStorage.removeItem('accessToken'),
      localStorage.removeItem('organization'),
      localStorage.removeItem('user-theme'),
      qr();
  }
  function F() {
    Ir()
      .catch(() => {})
      .finally(() => {
        l(), (window.location.href = '/login');
      });
  }
  function G(d) {
    d === 'logout' ? F() : le.info(`You clicked ${d}`);
  }
  if (!e)
    return o('div', {
      className: $['fixed-settings'],
      children: o(ln, {
        trigger: o(Q, { icon: o(Ae, {}), type: 'primary', size: 'large' }),
      }),
    });
  const h = () => {
      C(p === 'admin' ? 'user' : 'admin');
    },
    g = m(I, {
      onClickMenuItem: G,
      children: [
        o(
          I.SubMenu,
          {
            title: m(De, {
              children: [
                o(qt, { className: $['dropdown-icon'] }),
                o('span', {
                  className: $['user-role'],
                  children:
                    p === 'admin'
                      ? r['menu.user.role.admin']
                      : r['menu.user.role.user'],
                }),
              ],
            }),
            children: m(
              I.Item,
              {
                onClick: h,
                children: [
                  o(ao, { className: $['dropdown-icon'] }),
                  r['menu.user.switchRoles'],
                ],
              },
              'switch role'
            ),
          },
          'role'
        ),
        m(
          I.Item,
          {
            children: [
              o(Ae, { className: $['dropdown-icon'] }),
              r['menu.user.setting'],
            ],
          },
          'setting'
        ),
        o(
          I.SubMenu,
          {
            title: m('div', {
              style: { width: 80 },
              children: [
                o(uo, { className: $['dropdown-icon'] }),
                r['message.seeMore'],
              ],
            }),
            children: m(
              I.Item,
              {
                children: [
                  o(io, { className: $['dropdown-icon'] }),
                  r['menu.dashboard.workplace'],
                ],
              },
              'workplace'
            ),
          },
          'more'
        ),
        o(Mt, { style: { margin: '4px 0' } }),
        m(
          I.Item,
          {
            children: [
              o(co, { className: $['dropdown-icon'] }),
              r['navbar.logout'],
            ],
          },
          'logout'
        ),
      ],
    });
  return m('div', {
    className: $.navbar,
    children: [
      o('div', {
        className: $.left,
        children: m('div', {
          className: $.logo,
          children: [
            z
              ? o('img', { className: $['logo-image'], src: z, alt: k })
              : o(tn, {}),
            o('div', { className: $['logo-name'], children: k }),
          ],
        }),
      }),
      o('div', { className: $.center, children: n && t }),
      m('ul', {
        className: $.right,
        children: [
          o('li', {
            children: o(lo, {
              triggerElement: o(Ne, { icon: o(go, {}) }),
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
              onChange: (d) => {
                y(d),
                  $e({ path: 'lang', value: d }),
                  Le({ path: 'lang', value: d }).catch(() => {});
                const O = en[d];
                le.info(`${O['message.lang.tips']}${d}`);
              },
            }),
          }),
          o('li', {
            children: o(er, { children: o(Ne, { icon: o(mo, {}) }) }),
          }),
          o('li', {
            children: o(po, {
              content:
                P === 'light'
                  ? r['settings.navbar.theme.toDark']
                  : r['settings.navbar.theme.toLight'],
              children: o(Ne, {
                icon: P !== 'dark' ? o(ho, {}) : o(fo, {}),
                onClick: () => {
                  const d = P === 'light' ? 'dark' : 'light';
                  N(d),
                    $e({ path: 'theme', value: d }),
                    Le({ path: 'theme', value: d }).catch(() => {});
                },
              }),
            }),
          }),
          o(ln, {}),
          s &&
            o('li', {
              children: o(zt, {
                droplist: g,
                position: 'br',
                children: o(It, {
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
const jr = '_footer_1si67_1';
var Ur = { footer: jr };
function dn(e = {}) {
  const u = e,
    { className: t } = u,
    n = Se(u, ['className']),
    { lang: r, systemProfile: s } = i.exports.useContext(ne);
  return o(
    me.Footer,
    B(_({ className: ye(Ur.footer, t) }, n), { children: $r(s, r) })
  );
}
const Kr = '_layout_316fi_1',
  Wr = '_icon_316fi_86',
  Vr = '_spin_316fi_111';
var q = {
  layout: Kr,
  'layout-navbar': '_layout-navbar_316fi_5',
  'layout-navbar-hidden': '_layout-navbar-hidden_316fi_13',
  'layout-sider': '_layout-sider_316fi_16',
  'collapse-btn': '_collapse-btn_316fi_50',
  'menu-wrapper': '_menu-wrapper_316fi_67',
  icon: Wr,
  'icon-empty': '_icon-empty_316fi_90',
  'layout-content': '_layout-content_316fi_95',
  'layout-content-wrapper': '_layout-content-wrapper_316fi_102',
  'layout-content-wrapper-with-tab':
    '_layout-content-wrapper-with-tab_316fi_105',
  'layout-breadcrumb': '_layout-breadcrumb_316fi_108',
  spin: Vr,
};
function Jr(e) {
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
function pn(e, t) {
  const r = yo[Jr(t || e)];
  return r
    ? o(r, { className: q.icon })
    : o('div', { className: q['icon-empty'] });
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
function hn(e, t) {
  const n = et(e);
  return t.find((r) => n === `/${r.key}`);
}
function fn(e, t, n) {
  const r = hn(e, n);
  if (!r) return null;
  const s = et(e);
  return {
    title: r.name,
    name: s.replace(/^\//, ''),
    path: e,
    fullPath: `${e}${t || ''}`,
  };
}
function Gr({
  defaultTab: e,
  tabList: t,
  routes: n,
  offsetTop: r = 0,
  onTabsChange: s,
  onCloseTabs: u,
  onReload: a,
}) {
  const c = Ze(),
    p = jt(),
    C = V(),
    y = `${p.pathname}${p.search || ''}`;
  function E(h) {
    return hn(h.path, n);
  }
  function P(h) {
    const g = E(h),
      d = (g == null ? void 0 : g.name) || h.title;
    return C[d] || d;
  }
  function N(h) {
    const g = E(h);
    return pn(
      (g == null ? void 0 : g.key) || h.name,
      g == null ? void 0 : g.icon
    );
  }
  function b(h) {
    h.fullPath !== y && c.push(h.fullPath);
  }
  function k(h, g) {
    if (g === 0) return;
    const d = t.filter((O, K) => K !== g);
    if ((u == null || u([h]), s(d), h.fullPath === y)) {
      const O = d[g - 1] || d[0];
      c.push(O.fullPath);
    }
  }
  function z(h = t) {
    return h.findIndex((g) => g.fullPath === y);
  }
  function l(h, g) {
    g.length && (u == null || u(g)), s(h);
  }
  function F(h, g, d) {
    const O = z();
    if (h === J.Current) {
      k(g, d);
      return;
    }
    if (h === J.Left) {
      const T = t.filter((S, w) => w === 0 || w >= d),
        x = t.filter((S, w) => w > 0 && w < d);
      l(T, x), O > 0 && O < d && c.push(g.fullPath);
      return;
    }
    if (h === J.Right) {
      const T = t.filter((S, w) => w <= d),
        x = t.filter((S, w) => w > d);
      l(T, x), O > d && c.push(g.fullPath);
      return;
    }
    if (h === J.Others) {
      const T = t.filter((S, w) => w === 0 || w === d),
        x = t.filter((S, w) => w !== 0 && w !== d);
      l(T, x), c.push(g.fullPath);
      return;
    }
    if (h === J.Reload) {
      a == null || a(g);
      return;
    }
    const K = t.filter((T, x) => x !== 0);
    l([e], K), c.push(e.fullPath);
  }
  function G(h, g) {
    const d = h.fullPath !== y,
      O = g === 0,
      K = g <= 1,
      T = g === t.length - 1;
    return m(I, {
      onClickMenuItem: (x) => F(x, h, g),
      children: [
        m(
          I.Item,
          {
            disabled: d,
            children: [
              o(_o, {}),
              o('span', {
                className: L['dropdown-label'],
                children: '\u91CD\u65B0\u52A0\u8F7D',
              }),
            ],
          },
          J.Reload
        ),
        m(
          I.Item,
          {
            disabled: O,
            className: L['separate-line'],
            children: [
              o(Ut, {}),
              o('span', {
                className: L['dropdown-label'],
                children: '\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Current
        ),
        m(
          I.Item,
          {
            disabled: K,
            children: [
              o(Eo, {}),
              o('span', {
                className: L['dropdown-label'],
                children: '\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Left
        ),
        m(
          I.Item,
          {
            disabled: T,
            className: L['separate-line'],
            children: [
              o(Co, {}),
              o('span', {
                className: L['dropdown-label'],
                children: '\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Right
        ),
        m(
          I.Item,
          {
            disabled: t.length <= 2 && g !== 0,
            children: [
              o(Fo, {}),
              o('span', {
                className: L['dropdown-label'],
                children: '\u5173\u95ED\u5176\u5B83\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Others
        ),
        m(
          I.Item,
          {
            disabled: t.length <= 1,
            children: [
              o(vo, {}),
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
    children: o(bo, {
      offsetTop: r,
      children: m('div', {
        className: L['tab-bar-box'],
        children: [
          o('div', {
            className: L['tab-bar-scroll'],
            children: o('div', {
              className: L['tags-wrap'],
              children: t.map((h, g) =>
                o(
                  zt,
                  {
                    droplist: G(h, g),
                    trigger: 'contextMenu',
                    position: 'bl',
                    children: m('span', {
                      className: ye(
                        'arco-tag arco-tag-size-medium arco-tag-checked',
                        L['tab-tag'],
                        { [L['link-activated']]: h.fullPath === y }
                      ),
                      onClick: () => b(h),
                      children: [
                        m('span', {
                          className: L['tag-link'],
                          children: [N(h), P(h)],
                        }),
                        g !== 0 &&
                          o('span', {
                            className:
                              'arco-icon-hover arco-tag-icon-hover arco-icon-hover-size-medium arco-tag-close-btn',
                            onClick: (d) => {
                              d.stopPropagation(), k(h, g);
                            },
                            children: o(Ut, {}),
                          }),
                      ],
                    }),
                  },
                  h.fullPath
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
const Yr = 'marketing:tabs';
function yn(e) {
  return encodeURIComponent(String(e || 'unknown'));
}
function mt(e, t) {
  if (!!e)
    for (const n of t) {
      const r = e[n];
      if (typeof r == 'string' || typeof r == 'number') return r;
    }
}
function Hr(e) {
  const t = e == null ? void 0 : e.currentTenant,
    n = e == null ? void 0 : e.defaultTenant;
  return {
    tenantCode:
      mt(t, ['tenantCode', 'code', 'tenantId', 'id']) ||
      mt(e || void 0, ['tenantCode', 'tenantId']) ||
      mt(n, ['tenantCode', 'code', 'tenantId', 'id']),
  };
}
function bn(e) {
  return `${Yr}:${yn(e.tenantCode)}`;
}
function Ke(e, t) {
  return `${yn(e.tenantCode)}:${encodeURIComponent(t)}`;
}
function Xr(e) {
  try {
    const t = sessionStorage.getItem(bn(e));
    if (!t) return null;
    const n = JSON.parse(t);
    return Array.isArray(n)
      ? n.filter(
          (r) =>
            r &&
            typeof r.title == 'string' &&
            typeof r.name == 'string' &&
            typeof r.path == 'string' &&
            typeof r.fullPath == 'string'
        )
      : null;
  } catch {
    return null;
  }
}
function Zr(e, t) {
  try {
    sessionStorage.setItem(bn(e), JSON.stringify(t));
  } catch {}
}
function Qr(e, t) {
  if (!t || oe(e.path)) return e;
  const n = `/${t}`.replace(/\/$/, ''),
    r = e.path.startsWith('/') ? e.path : `/${e.path}`,
    s = `${n}${r}`.replace(/\/+/g, '/'),
    u = e.fullPath.indexOf('?'),
    a = u >= 0 ? e.fullPath.slice(u) : '';
  return B(_({}, e), { path: s, fullPath: `${s}${a}` });
}
function es(e, t) {
  return !t || !e.length ? e : e.map((n) => Qr(n, t));
}
function ts(u) {
  var a = u,
    { identity: e, component: t, render: n, children: r } = a,
    s = Se(a, ['identity', 'component', 'render', 'children']);
  return o(
    ee,
    B(_({}, s), {
      render: (c) => {
        const p = `${c.location.pathname}${c.location.search || ''}`,
          C = Ke(e, p),
          y = t;
        return o(So, {
          id: C,
          name: C,
          saveScrollPosition: 'screen',
          children: y ? o(y, _({}, c)) : n ? n(c) : r,
        });
      },
    })
  );
}
const _n = (e, t) =>
    !t || !t.length
      ? !1
      : t.join('') === '*'
      ? !0
      : e.every((n) => t.includes(n)),
  ns = (e, t) => {
    const { resource: n, actions: r = [] } = e;
    if (Array.isArray(t))
      return n instanceof RegExp
        ? t.some((u) => n.test(u))
        : r.length
        ? r.some((u) => t.includes(`${n}:${u}`))
        : t.includes(n);
    if (n instanceof RegExp) {
      const a = Object.keys(t).filter((c) => c.match(n));
      return a.length
        ? a.every((c) => {
            const p = t[c];
            return _n(r, p);
          })
        : !1;
    }
    const s = t[n];
    return _n(r, s);
  };
var os = (e, t) => {
  const { requiredPermissions: n, oneOfPerm: r } = e;
  if (Array.isArray(n) && n.length) {
    let s = 0;
    for (const u of n) ns(u, t) && s++;
    return r ? s > 0 : s === n.length;
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
function En(e) {
  return (e || '').replace(/^\/+/, '').replace(/\/+$/, '');
}
function Cn(e) {
  return En(e.routerPath || e.resourcePath || e.resourceCode);
}
function rs(e, t = 'zh-CN') {
  var n, r;
  return (
    ((n = e.resourceNames) == null ? void 0 : n[t]) ||
    ((r = e.resourceNames) == null ? void 0 : r['zh-CN']) ||
    e.resourceName ||
    e.resourceCode ||
    Cn(e)
  );
}
function dt(e = [], t = 'zh-CN') {
  return e
    .slice()
    .sort((n, r) => (n.sortOrder || 0) - (r.sortOrder || 0))
    .map((n) => {
      const r = dt(n.children || [], t),
        s = {
          name: rs(n, t),
          resourceNames: n.resourceNames,
          key: Cn(n),
          path: n.routerPath || n.resourcePath,
          icon: n.resourceIcon,
          children: r.length ? r : void 0,
        };
      return (
        s.key === 'dashboard' && !s.children && (s.children = We[0].children), s
      );
    })
    .filter((n) => n.key);
}
function Fn(e, t = 'zh-CN') {
  if (!e) return We;
  const n = ct(e);
  if (!n) return We;
  const r = dt((n == null ? void 0 : n.menus) || [], t);
  return r.length ? r : [];
}
function vn(e) {
  var t;
  for (const n of e)
    if (!!n.key) {
      if ((t = n.children) == null ? void 0 : t.length) {
        const r = vn(n.children);
        if (r) return r;
        continue;
      }
      return n.key;
    }
  return '';
}
function ss(e = []) {
  const t = (n) => {
    var r;
    for (const s of n) {
      if ((r = s.children) == null ? void 0 : r.length) {
        const c = t(s.children);
        if (c) return c;
      }
      const u = s.routerPath || s.resourcePath || s.resourceCode,
        a = En(u);
      if (a) return a;
    }
    return '';
  };
  return t(e);
}
const as = (e) => {
    const t = e === 'admin' ? ['*'] : ['read'],
      n = {};
    return (
      We.forEach((r) => {
        r.children &&
          r.children.forEach((s) => {
            n[s.name] = t;
          });
      }),
      n
    );
  },
  pt = (e, t, n = []) => {
    if (!e.length) return [];
    for (const r of e) {
      const { requiredPermissions: s, oneOfPerm: u } = r;
      let a = !0;
      if ((s && (a = os({ requiredPermissions: s, oneOfPerm: u }, t)), !!a))
        if (r.children && r.children.length) {
          const c = B(_({}, r), { children: [] });
          pt(r.children, t, c.children), c.children.length && n.push(c);
        } else n.push(_({}, r));
    }
    return n;
  },
  us = (e, t) => {
    const { lang: n = 'zh-CN' } = i.exports.useContext(ne),
      [r, s] = i.exports.useState(() => Fn(t, n)),
      [u, a] = i.exports.useState(!1),
      c = i.exports.useMemo(() => JSON.stringify(e || {}), [e]);
    i.exports.useEffect(() => {
      let C = !1;
      async function y() {
        const E = Fn(t, n);
        if ((s(pt(E, e)), !(!t || ct(t)))) {
          a(!0);
          try {
            const P = await lt(t);
            if (C) return;
            const N = dt(P.menus || [], n);
            s(pt(N, e));
          } finally {
            C || a(!1);
          }
        }
      }
      return (
        y(),
        () => {
          C = !0;
        }
      );
    }, [n, c, t, e]);
    const p = i.exports.useMemo(() => vn(r), [r]);
    return [r, p, u];
  };
function is() {
  const e = Kt.parseUrl(he ? '' : window.location.href).query,
    t = {};
  return (
    Object.keys(e).forEach((n) => {
      e[n] === 'true' && (t[n] = !0), e[n] === 'false' && (t[n] = !1);
    }),
    t
  );
}
function cs(e, t) {
  const n = wo(e, t);
  return (n.preload = e.requireAsync || e), n;
}
function ls(e) {
  return e.error
    ? (console.error(e.error), null)
    : o('div', { className: q.spin, children: o(He, {}) });
}
var Sn = (e) =>
  cs(e, { fallback: ls({ pastDelay: !0, error: !1, timedOut: !1 }) });
const gs = I.Item,
  ms = I.SubMenu,
  ds = me.Sider,
  ps = me.Content;
function hs(e) {
  const t = {
      './pages/example/index.tsx': () =>
        R(
          () => import('./index.03c9d8c5.js'),
          [
            'assets/index.03c9d8c5.js',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aac6daa3.js',
            'assets/vendor.503ea215.css',
          ]
        ),
      './pages/login/banner.tsx': () =>
        R(
          () =>
            Promise.resolve().then(function () {
              return xs;
            }),
          void 0
        ),
      './pages/login/form.tsx': () =>
        R(
          () =>
            Promise.resolve().then(function () {
              return ws;
            }),
          void 0
        ),
      './pages/login/index.tsx': () =>
        R(
          () =>
            Promise.resolve().then(function () {
              return Ds;
            }),
          void 0
        ),
      './pages/dashboard/workplace/announcement.tsx': () =>
        R(
          () => import('./announcement.4adcb865.js'),
          [
            'assets/announcement.4adcb865.js',
            'assets/announcement.4446c828.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aac6daa3.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/carousel.tsx': () =>
        R(
          () => import('./carousel.817b25bf.js'),
          [
            'assets/carousel.817b25bf.js',
            'assets/vendor.aac6daa3.js',
            'assets/vendor.503ea215.css',
          ]
        ),
      './pages/dashboard/workplace/content-percentage.tsx': () =>
        R(
          () => import('./content-percentage.bcc0f6ee.js'),
          [
            'assets/content-percentage.bcc0f6ee.js',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aac6daa3.js',
            'assets/vendor.503ea215.css',
            'assets/index.8450b337.js',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/docs.tsx': () =>
        R(
          () => import('./docs.493c4e99.js'),
          [
            'assets/docs.493c4e99.js',
            'assets/docs.e521c9d6.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aac6daa3.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/index.tsx': () =>
        R(
          () => import('./index.665512a1.js'),
          [
            'assets/index.665512a1.js',
            'assets/index.0a453fe0.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aac6daa3.js',
            'assets/vendor.503ea215.css',
            'assets/overview.5b751029.js',
            'assets/overview.65964fa4.css',
            'assets/index.8450b337.js',
            'assets/index.9464998a.js',
            'assets/popular-contents.a88d326f.js',
            'assets/popular-contents.884121de.css',
            'assets/content-percentage.bcc0f6ee.js',
            'assets/shortcuts.cb0fcc91.js',
            'assets/shortcuts.0626e3d2.css',
            'assets/announcement.4adcb865.js',
            'assets/announcement.4446c828.css',
            'assets/carousel.817b25bf.js',
            'assets/docs.493c4e99.js',
            'assets/docs.e521c9d6.css',
          ]
        ),
      './pages/dashboard/workplace/overview.tsx': () =>
        R(
          () => import('./overview.5b751029.js'),
          [
            'assets/overview.5b751029.js',
            'assets/overview.65964fa4.css',
            'assets/index.4623c961.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aac6daa3.js',
            'assets/vendor.503ea215.css',
            'assets/index.8450b337.js',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/popular-contents.tsx': () =>
        R(
          () => import('./popular-contents.a88d326f.js'),
          [
            'assets/popular-contents.a88d326f.js',
            'assets/popular-contents.884121de.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aac6daa3.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/dashboard/workplace/shortcuts.tsx': () =>
        R(
          () => import('./shortcuts.cb0fcc91.js'),
          [
            'assets/shortcuts.cb0fcc91.js',
            'assets/shortcuts.0626e3d2.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aac6daa3.js',
            'assets/vendor.503ea215.css',
            'assets/index.9464998a.js',
          ]
        ),
      './pages/exception/403/index.tsx': () =>
        R(
          () =>
            Promise.resolve().then(function () {
              return yt;
            }),
          void 0
        ),
      './pages/system/setting/index.tsx': () =>
        R(
          () => import('./index.b784b520.js'),
          [
            'assets/index.b784b520.js',
            'assets/index.7a4e1214.css',
            'assets/index.e7a6af1d.css',
            'assets/vendor.aac6daa3.js',
            'assets/vendor.503ea215.css',
          ]
        ),
    },
    n = [];
  function r(s) {
    s.forEach((u) => {
      if (u.key && !u.children) {
        const a =
          t[`./pages/${u.key}/index.tsx`] ||
          (() =>
            R(
              () =>
                Promise.resolve().then(function () {
                  return yt;
                }),
              void 0
            ));
        (u.component = Sn(a)), n.push(u);
      } else Br(u.children) && u.children.length && r(u.children);
    });
  }
  return r(e), n;
}
function fs() {
  const e = is(),
    t = Ze(),
    n = jt(),
    { dropScope: r, refreshScope: s } = Wt.exports.useAliveController(),
    u = n.pathname,
    a = oe(u),
    c = a ? `/${a}` : '',
    p = et(u),
    C = Kt.parseUrl(p).url.slice(1),
    y = V(),
    { settings: E, userLoading: P, userInfo: N } = ge((f) => f),
    b = i.exports.useMemo(
      () => ({ tenantCode: a || Hr(N).tenantCode }),
      [a, N]
    ),
    k = i.exports.useMemo(() => b.tenantCode || 'unknown', [b.tenantCode]),
    [z, l, F] = us(N == null ? void 0 : N.permissions, a),
    G = [C || l],
    h = (C || l).split('/'),
    g = h.slice(0, h.length - 1),
    [d, O] = i.exports.useState([]),
    [K, T] = i.exports.useState(!1),
    [x, S] = i.exports.useState(G),
    [w, H] = i.exports.useState(g),
    [W, X] = i.exports.useState([]),
    se = i.exports.useRef(new Map()),
    Je = i.exports.useRef(new Map()),
    bt = 60,
    _t = K ? 48 : E.menuWidth,
    Fe = E.navbar && e.navbar !== !1,
    Et = E.menu && e.menu !== !1,
    ie = Et && E.topMenu,
    Ct = Et && !ie,
    Y = E.tabBar && e.tabBar !== !1,
    kn = E.footer && e.footer !== !1,
    ae = i.exports.useMemo(() => hs(z) || [], [z]),
    Ft = i.exports.useMemo(() => sr(u, N), [u, N]),
    j = i.exports.useMemo(() => {
      if (!l) return null;
      const v = `${Ft.replace(/\/$/, '')}/${l}`.replace(/\/+/g, '/');
      return fn(v, '', ae) || { title: l, name: l, path: v, fullPath: v };
    }, [l, ae, Ft]),
    ce = i.exports.useMemo(
      () => fn(n.pathname, n.search, ae),
      [ae, n.pathname, n.search]
    );
  i.exports.useEffect(() => {
    if (!l || !Y || !j) return;
    const f = nn(u, N),
      v = Xr(b),
      M = (v == null ? void 0 : v.length) ? es(v, f) : null;
    X((M == null ? void 0 : M.length) ? M : [j]);
  }, [l, j, k, u, Y, b, N]),
    i.exports.useEffect(() => {
      if (Y || !W.length) return;
      const f = `${n.pathname}${n.search || ''}`;
      W.forEach((v) => {
        v.fullPath !== f && r(Ke(b, v.fullPath));
      });
    }, [r, n.pathname, n.search, Y, b, W]),
    i.exports.useEffect(() => {
      if (a) return;
      const f = tt();
      t.replace(f ? `/${f}${u}` : '/403');
    }, [t, u, a]),
    i.exports.useEffect(() => {
      !ce ||
        X((f) => {
          if (!Y) return [ce];
          const v = j ? [j] : [],
            M = f.length ? f : v;
          return M.length
            ? M.some((Z) => Z.fullPath === ce.fullPath)
              ? M
              : [...M, ce]
            : [ce];
        });
    }, [ce, j, Y]),
    i.exports.useEffect(() => {
      !W.length || Zr(b, Y ? W : W.slice(-1));
    }, [k, Y, b, W]);
  const Pn = i.exports.useCallback(
      (f) => {
        if (f.length) {
          X(f);
          return;
        }
        X(j ? [j] : []);
      },
      [j]
    ),
    In = i.exports.useCallback(
      (f) => {
        f.forEach((v) => {
          r(Ke(b, v.fullPath));
        });
      },
      [r, b]
    ),
    Tn = i.exports.useCallback(
      (f) => {
        s(Ke(b, f.fullPath));
      },
      [s, b]
    );
  function Rn(f) {
    const v = ae.find((U) => U.key === f),
      Z = v.component.preload();
    Yt.start(),
      Z.then(() => {
        t.push(v.path ? `${c}${v.path}` : `${c}/${f}`), Yt.done();
      });
  }
  function Ln() {
    T((f) => !f);
  }
  const Mn = Ct ? { paddingLeft: _t } : {},
    vt = Fe ? { paddingTop: bt } : {},
    $n = _(_({}, Mn), vt),
    St = o(I, {
      mode: ie ? 'horizontal' : 'vertical',
      collapse: !ie && K,
      onClickMenuItem: Rn,
      selectedKeys: x,
      openKeys: ie ? void 0 : w,
      onClickSubMenu: (f, v) => {
        ie || H(v);
      },
      children: On(y)(z, 1),
    });
  function On(f) {
    return (
      se.current.clear(),
      function v(M, Z, U = []) {
        return M.map((A) => {
          const { breadcrumb: qn = !0, ignore: zn } = A,
            jn = pn(A.key, A.icon),
            xt = m(De, { children: [jn, ' ', f[A.name] || A.name] });
          se.current.set(`/${A.key}`, qn ? [...U, A.name] : []);
          const Dt = (A.children || []).filter((Ge) => {
            const { ignore: At, breadcrumb: Un = !0 } = Ge;
            return (
              (At || A.ignore) &&
                se.current.set(`/${Ge.key}`, Un ? [...U, A.name, Ge.name] : []),
              !At
            );
          });
          return zn
            ? ''
            : Dt.length
            ? (Je.current.set(A.key, { subMenu: !0 }),
              o(
                ms,
                { title: xt, children: v(Dt, Z + 1, [...U, A.name]) },
                A.key
              ))
            : (Je.current.set(A.key, { menuItem: !0 }),
              o(gs, { children: xt }, A.key));
        });
      }
    );
  }
  const wt = i.exports.useCallback(() => {
    const f = p.split('/'),
      v = [],
      M = [];
    for (; f.length > 0; ) {
      const U = f.join('/').replace(/^\//, ''),
        A = Je.current.get(U);
      A && A.menuItem && v.push(U), A && A.subMenu && M.push(U), f.pop();
    }
    S(v),
      H((Z) => {
        const U = [...Z];
        return (
          M.forEach((A) => {
            U.includes(A) || U.push(A);
          }),
          U
        );
      });
  }, [p]);
  return (
    i.exports.useEffect(() => {
      const f = se.current.get(p);
      O(f || []), wt();
    }, [p, wt]),
    m(me, {
      className: q.layout,
      children: [
        o('div', {
          className: ye(q['layout-navbar'], {
            [q['layout-navbar-hidden']]: !Fe,
          }),
          children: o(zr, { show: Fe, menu: ie, topMenu: St }),
        }),
        P || F
          ? o(He, { className: q.spin })
          : m(me, {
              children: [
                Ct &&
                  m(ds, {
                    className: q['layout-sider'],
                    width: _t,
                    collapsed: K,
                    onCollapse: T,
                    trigger: null,
                    collapsible: !0,
                    breakpoint: 'xl',
                    style: vt,
                    children: [
                      o('div', { className: q['menu-wrapper'], children: St }),
                      o('div', {
                        className: q['collapse-btn'],
                        onClick: Ln,
                        children: K ? o(xo, {}) : o(Do, {}),
                      }),
                    ],
                  }),
                m(me, {
                  className: q['layout-content'],
                  style: $n,
                  children: [
                    Y &&
                      j &&
                      o(Gr, {
                        defaultTab: j,
                        tabList: W.length ? W : [j],
                        routes: ae,
                        offsetTop: Fe ? bt : 0,
                        onTabsChange: Pn,
                        onCloseTabs: In,
                        onReload: Tn,
                      }),
                    m('div', {
                      className: ye(q['layout-content-wrapper'], {
                        [q['layout-content-wrapper-with-tab']]: Y && !!j,
                      }),
                      children: [
                        !!d.length &&
                          o('div', {
                            className: q['layout-breadcrumb'],
                            children: o(Vt, {
                              children: d.map((f, v) =>
                                o(
                                  Vt.Item,
                                  {
                                    children:
                                      (typeof f == 'string' && y[f]) || f,
                                  },
                                  v
                                )
                              ),
                            }),
                          }),
                        o(ps, {
                          children: m(Jt, {
                            children: [
                              ae.map((f, v) =>
                                o(
                                  ts,
                                  {
                                    path: `${c}/${f.key}`,
                                    component: f.component,
                                    identity: b,
                                  },
                                  v
                                )
                              ),
                              o(ee, {
                                exact: !0,
                                path: c || '/',
                                children: l
                                  ? o(Gt, { to: `${c}/${l}` })
                                  : o(Gt, { to: c ? `${c}/403` : '/403' }),
                              }),
                              o(ee, {
                                path: '*',
                                component: Sn(() =>
                                  R(
                                    () =>
                                      Promise.resolve().then(function () {
                                        return yt;
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
                    kn && o(dn, {}),
                  ],
                }),
              ],
            }),
      ],
    })
  );
}
function ys() {
  return rt({ url: '/api/system/captcha', method: 'GET' });
}
function bs() {
  return rt({
    url: '/api/system/config/public',
    method: 'GET',
    skipErrorMessage: !0,
  });
}
function Ls() {
  return ue({ url: '/api/system/config/manage', method: 'GET' });
}
function Ms(e) {
  return ue({
    url: '/api/system/config/manage',
    method: 'PUT',
    data: { config: e },
  });
}
function $s(e, t) {
  const n = new FormData();
  return (
    n.append('scene', e),
    n.append('file', t),
    ue({
      url: '/api/system/upload/image',
      method: 'POST',
      data: n,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  );
}
const wn = {
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
  _s = '_container_1rgqq_1',
  Es = '_banner_1rgqq_5',
  Cs = '_content_1rgqq_9',
  Fs = '_footer_1rgqq_14',
  vs = '_logo_1rgqq_20',
  Ss = '_carousel_1rgqq_54';
var D = {
  container: _s,
  banner: Es,
  content: Cs,
  footer: Fs,
  logo: vs,
  'logo-image': '_logo-image_1rgqq_28',
  'logo-text': '_logo-text_1rgqq_34',
  'banner-inner': '_banner-inner_1rgqq_45',
  carousel: Ss,
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
function xn() {
  const e = i.exports.useRef(),
    [t, n] = i.exports.useState(''),
    [r, s] = i.exports.useState(!1),
    [u, a] = i.exports.useState(!1),
    [c, p] = i.exports.useState(''),
    [C, y] = i.exports.useState(''),
    [E, P, N] = Ee('loginParams'),
    b = V(wn),
    {
      lang: k,
      systemProfile: z,
      refreshSystemProfile: l,
    } = i.exports.useContext(ne),
    F = Ue(z, k),
    G = gn(z, k),
    [h, g] = i.exports.useState(!!E);
  function d() {
    a(!0),
      ys()
        .then((x) => {
          var S;
          p(x.captchaKey),
            y(x.captchaImage),
            (S = e.current) == null || S.setFieldValue('captchaCode', '');
        })
        .finally(() => {
          a(!1);
        });
  }
  async function O(x, S) {
    var X;
    const w = (X = S.defaultTenant) == null ? void 0 : X.tenantCode;
    if (!w) {
      window.location.href = '/403';
      return;
    }
    h ? P(JSON.stringify({ account: x.account })) : N(),
      localStorage.setItem(de, S.accessToken),
      localStorage.setItem(Ie, w),
      localStorage.setItem(
        Be,
        JSON.stringify(
          B(_({}, S.profile || {}), { defaultTenant: S.defaultTenant })
        )
      ),
      localStorage.setItem('userStatus', 'login'),
      pe(S.theme_setting),
      l == null ||
        l().then((se) => {
          se && mn(se);
        });
    const H = await lt(w);
    localStorage.setItem(
      Be,
      JSON.stringify(
        B(_({}, H.profile || S.profile || {}), {
          defaultTenant: S.defaultTenant,
        })
      )
    );
    const W = ss(H.menus || []);
    if (!W) {
      window.location.href = '/403';
      return;
    }
    window.location.href = `/${w}/${W.replace(/^\/+/, '')}`;
  }
  function K(x) {
    n(''),
      s(!0),
      Pr(B(_({}, x), { captchaKey: c }))
        .then((S) => O(x, S))
        .catch((S) => {
          var w, H;
          n(
            (S == null ? void 0 : S.message) ||
              ((H =
                (w = S == null ? void 0 : S.response) == null
                  ? void 0
                  : w.data) == null
                ? void 0
                : H.message) ||
              b['login.form.login.errMsg']
          ),
            d();
        })
        .finally(() => {
          s(!1);
        });
  }
  function T() {
    e.current.validate().then((x) => {
      K(x);
    });
  }
  return (
    i.exports.useEffect(() => {
      d();
    }, []),
    i.exports.useEffect(() => {
      const x = !!E;
      if ((g(x), e.current && x)) {
        const S = JSON.parse(E);
        e.current.setFieldsValue(S);
      }
    }, [E]),
    m('div', {
      className: D['login-form-wrapper'],
      children: [
        m('div', {
          className: D['login-form-title'],
          children: [b['login.form.title'], ' ', F],
        }),
        o('div', { className: D['login-form-sub-title'], children: G }),
        o('div', { className: D['login-form-error-msg'], children: t }),
        m(be, {
          className: D['login-form'],
          layout: 'vertical',
          ref: e,
          initialValues: { account: 'operator', password: 'Aa123!@#' },
          children: [
            o(be.Item, {
              field: 'account',
              rules: [
                { required: !0, message: b['login.form.userName.errMsg'] },
              ],
              children: o(Qe, {
                prefix: o(qt, {}),
                placeholder: b['login.form.userName.placeholder'],
                onPressEnter: T,
              }),
            }),
            o(be.Item, {
              field: 'password',
              rules: [
                { required: !0, message: b['login.form.password.errMsg'] },
              ],
              children: o(Qe.Password, {
                prefix: o(Ao, {}),
                placeholder: b['login.form.password.placeholder'],
                onPressEnter: T,
              }),
            }),
            o(be.Item, {
              children: m('div', {
                className: D['login-form-captcha-row'],
                children: [
                  o(be.Item, {
                    field: 'captchaCode',
                    rules: [
                      { required: !0, message: b['login.form.captcha.errMsg'] },
                    ],
                    noStyle: !0,
                    children: o(Qe, {
                      className: D['login-form-captcha-input'],
                      prefix: o(No, {}),
                      maxLength: 5,
                      placeholder: b['login.form.captcha.placeholder'],
                      onPressEnter: T,
                    }),
                  }),
                  o(Q, {
                    type: 'text',
                    loading: u,
                    className: D['login-form-captcha-btn'],
                    onClick: d,
                    children: C
                      ? o('img', {
                          className: D['login-form-captcha-image'],
                          src: C,
                          alt: 'captcha',
                        })
                      : b['login.form.captcha.refresh'],
                  }),
                ],
              }),
            }),
            m(Tt, {
              size: 16,
              direction: 'vertical',
              children: [
                m('div', {
                  className: D['login-form-password-actions'],
                  children: [
                    o(Bo, {
                      checked: h,
                      onChange: g,
                      children: b['login.form.rememberPassword'],
                    }),
                    o(ko, { children: b['login.form.forgetPassword'] }),
                  ],
                }),
                o(Q, {
                  type: 'primary',
                  long: !0,
                  onClick: T,
                  loading: r,
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
var ws = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: xn,
});
function Dn() {
  const e = V(wn),
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
  return o(Po, {
    className: D.carousel,
    animation: 'fade',
    children: t.map((n, r) =>
      o(
        'div',
        {
          children: m('div', {
            className: D['carousel-item'],
            children: [
              o('div', { className: D['carousel-title'], children: n.slogan }),
              o('div', {
                className: D['carousel-sub-title'],
                children: n.subSlogan,
              }),
              o('img', {
                alt: 'banner-image',
                className: D['carousel-image'],
                src: n.image,
              }),
            ],
          }),
        },
        `${r}`
      )
    ),
  });
}
var xs = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Dn,
});
function Ve() {
  const { lang: e, systemProfile: t } = i.exports.useContext(ne),
    n = Ue(t, e),
    r = t == null ? void 0 : t.logoUrl;
  return (
    i.exports.useEffect(() => {
      document.body.setAttribute('arco-theme', 'light');
    }, []),
    m('div', {
      className: D.container,
      children: [
        m('div', {
          className: D.logo,
          children: [
            r
              ? o('img', { className: D['logo-image'], src: r, alt: n })
              : o(tn, {}),
            o('div', { className: D['logo-text'], children: n }),
          ],
        }),
        o('div', {
          className: D.banner,
          children: o('div', {
            className: D['banner-inner'],
            children: o(Dn, {}),
          }),
        }),
        m('div', {
          className: D.content,
          children: [
            o('div', { className: D['content-inner'], children: o(xn, {}) }),
            o('div', { className: D.footer, children: o(dn, {}) }),
          ],
        }),
      ],
    })
  );
}
Ve.displayName = 'LoginPage';
var Ds = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Ve,
});
const As = {
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
  Ns = '_wrapper_jqkv8_1',
  Bs = '_result_jqkv8_6';
var ht = { wrapper: Ns, result: Bs };
function ft() {
  const e = V(As),
    t = Ze();
  return o('div', {
    className: ht.container,
    children: o('div', {
      className: ht.wrapper,
      children: o(Pt, {
        className: ht.result,
        status: '403',
        subTitle: e['exception.result.403.description'],
        extra: o(
          Q,
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
var yt = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: ft,
});
function An() {
  return !!localStorage.getItem(de);
}
var Nn = (e) => {
  const { mock: t = !1, setup: n } = e;
  t !== !1 && n();
};
he ||
  ((te.XHR.prototype.withCredentials = !0),
  Nn({
    setup: () => {
      const e = window.localStorage.getItem('userRole') || 'admin';
      te.mock(new RegExp('/api/user/userInfo'), () =>
        te.mock({
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
          registrationTime: te.Random.datetime('yyyy-MM-dd HH:mm:ss'),
          permissions: as(e),
        })
      ),
        te.mock(new RegExp('/api/user/login'), (t) => {
          const { userName: n, password: r } = JSON.parse(t.body);
          return n
            ? r
              ? n === 'admin' && r === 'admin'
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
const Bn = [],
  ks = () =>
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
    ].map((e) => B(_({}, e), { status: Bn.indexOf(e.id) === -1 ? 0 : 1 }));
Nn({
  setup: () => {
    te.mock(new RegExp('/api/message/list'), () => ks()),
      te.mock(new RegExp('/api/message/read'), (e) => {
        const { ids: t } = JSON.parse(e.body);
        return Bn.push(...(t || [])), !0;
      });
  },
});
he || te.setup({ timeout: '500-1500' });
const fe = Io(Go);
function Ps() {
  const e = Xe(),
    [t, n] = Ee('arco-lang', 'en-US'),
    [r, s] = Ee('arco-theme', 'light'),
    u = ge((l) => l.settings),
    [a, c] = i.exports.useState(() => re(Or() || Ce)),
    p = Ot.useRef();
  function C(l) {
    c(re(l));
  }
  const y = i.exports.useCallback(
    async () => (
      p.current ||
        (p.current = bs()
          .then((l) => {
            const F = re(l);
            return C(F), An() && mn(F), F;
          })
          .catch(() => {})
          .finally(() => {
            p.current = void 0;
          })),
      p.current
    ),
    []
  );
  function E(l) {
    pe(l),
      n(l.lang),
      s(l.theme),
      e({ type: 'update-settings', payload: { settings: l.settings } }),
      e({ type: 'update-theme', payload: { theme: l.theme } }),
      Oe(l.theme, l.settings.themeColor);
  }
  function P(l) {
    const F = pe(B(_({}, Me()), { lang: l }));
    n(F.lang);
  }
  function N(l) {
    const F = pe(B(_({}, Me()), { theme: l }));
    s(F.theme),
      e({ type: 'update-theme', payload: { theme: F.theme } }),
      Oe(F.theme, F.settings.themeColor);
  }
  function b() {
    switch (t) {
      case 'zh-CN':
        return Ht;
      case 'en-US':
        return $o;
      default:
        return Ht;
    }
  }
  async function k() {
    fe.dispatch({ type: 'update-userInfo', payload: { userLoading: !0 } });
    const l = oe();
    try {
      const F = l ? await lt(l) : null;
      fe.dispatch({
        type: 'update-userInfo',
        payload: {
          userInfo: B(
            _(_({}, Pe() || {}), (F == null ? void 0 : F.profile) || {}),
            {
              permissions: (F == null ? void 0 : F.permissions) || [],
              fieldPolicies: (F == null ? void 0 : F.fieldPolicies) || {},
            }
          ),
          userLoading: !1,
        },
      });
    } catch {
      fe.dispatch({
        type: 'update-userInfo',
        payload: { userInfo: Pe() || { permissions: {} }, userLoading: !1 },
      });
    }
  }
  i.exports.useEffect(() => {
    const l = window.location.pathname,
      F = l === '/login' || l.endsWith('/login'),
      G = l === '/403' || l.endsWith('/403');
    if (An()) {
      if (!oe(l) && !F && !G) {
        const d = tt();
        window.location.replace(d ? `/${d}${l}` : '/403');
        return;
      }
      const g = Me();
      pe(g),
        n(g.lang),
        s(g.theme),
        fe.dispatch({
          type: 'update-settings',
          payload: { settings: g.settings },
        }),
        fe.dispatch({ type: 'update-theme', payload: { theme: g.theme } }),
        Oe(g.theme, g.settings.themeColor),
        k();
    } else y(), !F && !G && (window.location.pathname = '/login');
  }, []),
    i.exports.useEffect(() => {
      document.title = Mr(a, t);
    }, [t, a]),
    i.exports.useEffect(() => {
      Oe(r, u.themeColor), e({ type: 'update-theme', payload: { theme: r } });
    }, [e, u.themeColor, r]);
  const z = {
    lang: t,
    setLang: P,
    theme: r,
    setTheme: N,
    applyUserTheme: E,
    systemProfile: a,
    setSystemProfile: C,
    refreshSystemProfile: y,
  };
  return o(Lo, {
    children: o(Mo, {
      locale: b(),
      componentConfig: {
        Card: { bordered: !1 },
        List: { bordered: !1 },
        Table: { border: !1 },
      },
      children: o(ne.Provider, {
        value: z,
        children: o(Wt.exports.AliveScope, {
          children: m(Jt, {
            children: [
              o(ee, { path: '/login', component: Ve }),
              o(ee, { path: '/:tenantCode/login', component: Ve }),
              o(ee, { path: '/403', component: ft }),
              o(ee, { path: '/:tenantCode/403', component: ft }),
              o(ee, { path: '/', component: fs }),
            ],
          }),
        }),
      }),
    }),
  });
}
function Is() {
  return o(Ro, { store: fe, children: o(Ps, {}) });
}
To.render(o(Is, {}), document.getElementById('root'));
export {
  Ce as D,
  ne as G,
  $s as a,
  Ms as b,
  Ls as g,
  re as n,
  Nn as s,
  V as u,
  mn as w,
};
