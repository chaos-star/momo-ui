var Qn = Object.defineProperty,
  eo = Object.defineProperties;
var to = Object.getOwnPropertyDescriptors;
var Fe = Object.getOwnPropertySymbols;
var Pt = Object.prototype.hasOwnProperty,
  Bt = Object.prototype.propertyIsEnumerable;
var kt = (e, t, n) =>
    t in e
      ? Qn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  p = (e, t) => {
    for (var n in t || (t = {})) Pt.call(t, n) && kt(e, n, t[n]);
    if (Fe) for (var n of Fe(t)) Bt.call(t, n) && kt(e, n, t[n]);
    return e;
  },
  P = (e, t) => eo(e, to(t));
var Se = (e, t) => {
  var n = {};
  for (var r in e) Pt.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Fe)
    for (var r of Fe(e)) t.indexOf(r) < 0 && Bt.call(e, r) && (n[r] = e[r]);
  return n;
};
import {
  r as i,
  j as o,
  L as Ye,
  R as It,
  a as g,
  B as ee,
  A as Tt,
  S as Rt,
  T as we,
  b as no,
  c as Mt,
  d as oo,
  g as ro,
  I as so,
  e as ao,
  f as uo,
  h as He,
  i as Lt,
  k as xe,
  l as ye,
  M as le,
  u as me,
  m as Xe,
  n as io,
  o as co,
  D as $t,
  p as qt,
  q as lo,
  s as mo,
  F as De,
  t as Ot,
  v as Ae,
  w as go,
  x as po,
  y as ho,
  z as T,
  C as Ut,
  E as fo,
  G as yo,
  H as bo,
  J as _o,
  K as Eo,
  N as Co,
  O as vo,
  P as Fo,
  Q as So,
  U as wo,
  V as zt,
  W as ge,
  X as xo,
  Y as Ze,
  Z as jt,
  _ as Do,
  $ as Ao,
  a0 as Kt,
  a1 as No,
  a2 as Po,
  a3 as Bo,
  a4 as ko,
  a5 as te,
  a6 as Io,
  a7 as Wt,
  a8 as To,
  a9 as Vt,
  aa as Ro,
  ab as Mo,
  ac as Jt,
  ad as Gt,
  ae as Yt,
  af as Ht,
  ag as be,
  ah as Qe,
  ai as Lo,
  aj as $o,
  ak as qo,
  al as Oo,
  am as Uo,
  an as ne,
  ao as zo,
  ap as jo,
  aq as Ko,
  ar as Wo,
  as as Vo,
  at as Xt,
  au as Jo,
} from './vendor.64a7fdcd.js';
const Go = function () {
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
Go();
const Yo = !1,
  Ho = !0,
  Xo = !0,
  Zo = !1,
  Qo = !0,
  er = !0,
  tr = '#165DFF',
  nr = 220;
var Zt = {
  colorWeek: Yo,
  navbar: Ho,
  menu: Xo,
  topMenu: Zo,
  tabBar: Qo,
  footer: er,
  themeColor: tr,
  menuWidth: nr,
};
const Qt = { settings: Zt, theme: 'light', userInfo: { permissions: {} } };
function or(e = Qt, t) {
  switch (t.type) {
    case 'update-settings': {
      const { settings: n } = t.payload;
      return P(p({}, e), { settings: n });
    }
    case 'update-theme': {
      const { theme: n } = t.payload;
      return P(p({}, e), { theme: n });
    }
    case 'update-userInfo': {
      const { userInfo: n = Qt.userInfo, userLoading: r } = t.payload;
      return P(p({}, e), { userLoading: r, userInfo: n });
    }
    default:
      return e;
  }
}
const rr = 'modulepreload',
  en = {},
  sr = '/',
  k = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((r) => {
            if (((r = `${sr}${r}`), r in en)) return;
            en[r] = !0;
            const s = r.endsWith('.css'),
              u = s ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${r}"]${u}`)) return;
            const a = document.createElement('link');
            if (
              ((a.rel = s ? 'stylesheet' : rr),
              s || ((a.as = 'script'), (a.crossOrigin = '')),
              (a.href = r),
              document.head.appendChild(a),
              s)
            )
              return new Promise((l, d) => {
                a.addEventListener('load', l), a.addEventListener('error', d);
              });
          })
        ).then(() => t());
  },
  oe = i.exports.createContext({}),
  tn = {
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
  const { lang: t } = i.exports.useContext(oe);
  return (e || tn)[t] || {};
}
const ar = (e) =>
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
  Ne = 'system-profile',
  _e = {
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
            p({}, _e.config),
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
    config: P(p({}, n), {
      systemName: p(p({}, _e.config.systemName), n.systemName || {}),
      companyName: p(p({}, _e.config.companyName), n.companyName || {}),
      systemDescription: p(
        p({}, _e.config.systemDescription),
        n.systemDescription || {}
      ),
    }),
    logoUrl: (e == null ? void 0 : e.logoUrl) || '',
    obsCloudBase: (e == null ? void 0 : e.obsCloudBase) || '',
  };
}
function et(e, t = 'zh-CN') {
  return (
    (e == null ? void 0 : e[t]) ||
    (e == null ? void 0 : e['zh-CN']) ||
    (e == null ? void 0 : e['en-US']) ||
    ''
  );
}
function Pe(e, t = 'zh-CN') {
  return et(H(e).config.systemName, t);
}
function ur(e, t = 'zh-CN') {
  return et(H(e).config.companyName, t);
}
function nn(e, t = 'zh-CN') {
  return et(H(e).config.systemDescription, t);
}
function ir(e, t = 'zh-CN') {
  const n = Pe(e, t),
    r = nn(e, t);
  return r ? `${n} - ${r}` : n;
}
function cr(e, t = 'zh-CN') {
  return `\xA9 2026-${new Date().getFullYear()} ${ur(e, t)}`;
}
function on(e) {
  const t = H(e).config;
  if (t.logoType !== '1') return '';
  const n = t.logoSvgElement;
  return typeof n == 'string' ? n.trim() : '';
}
function rn(e) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`;
}
function sn(e) {
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
function lr(e) {
  const t = on(e),
    n = t ? rn(t) : sn(e);
  if (!n) return;
  const s = n.startsWith('data:')
    ? n
    : n.includes('?')
    ? `${n}&favicon=${Date.now()}`
    : `${n}?favicon=${Date.now()}`;
  let u = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
  u || ((u = document.createElement('link')), document.head.appendChild(u)),
    (u.rel = 'icon'),
    (u.type = t ? 'image/svg+xml' : 'image/x-icon'),
    (u.href = s);
}
function mr() {
  try {
    const e = localStorage.getItem(Ne);
    return e ? H(JSON.parse(e)) : null;
  } catch {
    return localStorage.removeItem(Ne), null;
  }
}
function an(e) {
  const t = H(e);
  return localStorage.setItem(Ne, JSON.stringify(t)), t;
}
function gr() {
  localStorage.removeItem(Ne);
}
function un({ profile: e, className: t, alt: n }) {
  const r = on(e),
    s = r ? rn(r) : sn(e);
  return s ? o('img', { className: t, src: s, alt: n || '' }) : o(ar, {});
}
const dr = '_footer_8a7h1_26';
var Ee = {
  'message-box': '_message-box_8a7h1_1',
  'message-title': '_message-title_8a7h1_22',
  footer: dr,
  'footer-item': '_footer-item_8a7h1_29',
};
function pr(e) {
  const t = V(),
    { data: n, unReadData: r } = e;
  function s(a, l) {
    a.status || (e.onItemClick && e.onItemClick(a, l));
  }
  function u() {
    e.onAllBtnClick && e.onAllBtnClick(r, n);
  }
  return o(Ye, {
    noDataElement: o(It, { status: '404', subTitle: t['message.empty.tips'] }),
    footer: g('div', {
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
        Ye.Item,
        {
          actionLayout: 'vertical',
          style: { opacity: a.status ? 0.5 : 1 },
          children: o('div', {
            style: { cursor: 'pointer' },
            onClick: () => {
              s(a, l);
            },
            children: o(Ye.Item.Meta, {
              avatar:
                a.avatar &&
                o(Tt, {
                  shape: 'circle',
                  size: 36,
                  children: o('img', { src: a.avatar }),
                }),
              title: g('div', {
                className: Ee['message-title'],
                children: [
                  g(Rt, {
                    size: 4,
                    children: [
                      o('span', { children: a.title }),
                      o(we.Text, { type: 'secondary', children: a.subTitle }),
                    ],
                  }),
                  a.tag && a.tag.text
                    ? o(no, { color: a.tag.color, children: a.tag.text })
                    : null,
                ],
              }),
              description: g('div', {
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
function hr() {
  const e = V(),
    [t, n] = i.exports.useState(!1),
    [r, s] = i.exports.useState({}),
    [u, a] = i.exports.useState([]);
  function l(y = !0) {
    y && n(!0),
      xe
        .get('/api/message/list')
        .then((_) => {
          a(_.data);
        })
        .finally(() => {
          y && n(!1);
        });
  }
  function d(y) {
    const _ = y.map((I) => I.id);
    xe.post('/api/message/read', { ids: _ }).then(() => {
      l();
    });
  }
  i.exports.useEffect(() => {
    l();
  }, []),
    i.exports.useEffect(() => {
      const y = ro(u, 'type');
      s(y);
    }, [u]);
  const C = [
    {
      key: 'message',
      title: e['message.tab.title.message'],
      titleIcon: o(so, {}),
    },
    {
      key: 'notice',
      title: e['message.tab.title.notice'],
      titleIcon: o(ao, {}),
    },
    { key: 'todo', title: e['message.tab.title.todo'], titleIcon: o(uo, {}) },
  ];
  return o('div', {
    className: Ee['message-box'],
    children: o(He, {
      loading: t,
      style: { display: 'block' },
      children: o(Lt, {
        overflow: 'dropdown',
        type: 'rounded',
        defaultActiveTab: 'message',
        destroyOnHide: !0,
        extra: o(ee, {
          type: 'text',
          onClick: () => a([]),
          children: e['message.empty'],
        }),
        children: C.map((y) => {
          const { key: _, title: I } = y,
            N = r[_] || [],
            b = N.filter((B) => !B.status);
          return o(
            Lt.TabPane,
            {
              title: g('span', {
                children: [I, b.length ? `(${b.length})` : ''],
              }),
              children: o(pr, {
                data: N,
                unReadData: b,
                onItemClick: (B) => {
                  d([B]);
                },
                onAllBtnClick: (B) => {
                  d(B);
                },
              }),
            },
            _
          );
        }),
      }),
    }),
  });
}
function fr({ children: e }) {
  return o(Mt, {
    trigger: 'hover',
    popup: () => o(hr, {}),
    position: 'br',
    unmountOnExit: !1,
    popupAlign: { bottom: 4 },
    children: o(oo, { count: 9, dot: !0, children: e }),
  });
}
var yr = { 'icon-button': '_icon-button_12azl_1' };
function br(e, t) {
  const u = e,
    { icon: n, className: r } = u,
    s = Se(u, ['icon', 'className']);
  return o(
    ee,
    p(
      {
        ref: t,
        icon: n,
        shape: 'circle',
        type: 'secondary',
        className: ye(yr['icon-button'], r),
      },
      s
    )
  );
}
var Be = i.exports.forwardRef(br);
const ke = 'user-profile';
function Ie(e) {
  const t =
    (e == null ? void 0 : e.tenantCode) || (e == null ? void 0 : e.code);
  return typeof t == 'string' || typeof t == 'number' ? String(t) : '';
}
function re(e = window.location.pathname) {
  const [, t] = e.split('/');
  return !t || t === 'login' || t === '403' ? '' : t;
}
function tt(e = window.location.pathname) {
  const t = re(e);
  if (!t) return e || '/';
  const n = e.replace(`/${t}`, '') || '/';
  return n.startsWith('/') ? n : `/${n}`;
}
function Te() {
  const e = localStorage.getItem(ke);
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    return null;
  }
}
function nt() {
  const e = Te();
  return (
    Ie(e == null ? void 0 : e.defaultTenant) ||
    Ie(e == null ? void 0 : e.currentTenant) ||
    Ie(e)
  );
}
const _r = ['X-Organization', 'organization'];
function Er() {
  if (typeof localStorage == 'undefined') return '';
  for (const e of _r) {
    const t = localStorage.getItem(e);
    if (t) return t;
  }
  return '';
}
function cn(
  e = typeof window != 'undefined' ? window.location.pathname : '',
  t
) {
  const n = re(e);
  if (n) return n;
  const r = nt();
  if (r) return r;
  const s = Er();
  if (s) return s;
  const u = t == null ? void 0 : t.currentTenant,
    a = Ie(u);
  return a || '';
}
function Cr(e, t) {
  const n = cn(e, t);
  return n ? `/${n}` : '';
}
const de = 'X-Access-Token',
  Re = 'X-Organization',
  ot = 'Accept-Language',
  ln = 'zh-CN';
function vr() {
  return localStorage.getItem(de) || localStorage.getItem('accessToken') || '';
}
function Fr() {
  return (
    re() ||
    localStorage.getItem(Re) ||
    localStorage.getItem('organization') ||
    ''
  );
}
function Sr() {
  return localStorage.getItem(ot) || ln;
}
function wr(e) {
  return e === 200;
}
function xr(e, t = '\u8BF7\u6C42\u5931\u8D25') {
  return (e == null ? void 0 : e.message) || t;
}
let rt = !1;
function Me(e) {
  var t;
  return (
    (e == null ? void 0 : e.status) === 401 ||
    ((t = e == null ? void 0 : e.data) == null ? void 0 : t.code) === 401
  );
}
function Dr() {
  if (rt) return;
  (rt = !0),
    localStorage.removeItem(de),
    localStorage.setItem('userStatus', 'logout');
  const { pathname: e } = window.location;
  e === '/login' || e.endsWith('/login')
    ? (rt = !1)
    : window.location.replace('/login');
}
function Le(e) {
  (e == null ? void 0 : e.skipErrorMessage) ||
    le.error(
      '\u767B\u5F55\u72B6\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55'
    ),
    Dr();
}
xe.interceptors.response.use(
  (e) => (Me(e) && Le(), e),
  (e) => (Me(e.response) && Le(), Promise.reject(e))
);
function Ar(e, t) {
  return Me(e)
    ? (Le(t), Promise.reject(e.data))
    : e.status === 200 && wr(e.data.code)
    ? e.data.data
    : ((t == null ? void 0 : t.skipErrorMessage) || le.error(xr(e.data)),
      Promise.reject(e.data));
}
function Nr(e, t) {
  var n, r, s;
  if (Me(e.response)) return Le(t), Promise.reject(e);
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
function mn(e) {
  const t = xe.create({
    baseURL: 'https://api.example.com',
    timeout: 3e4,
    validateStatus: () => !0,
  });
  return (
    t.interceptors.request.use((n) => {
      const r = p({ [ot]: Sr() }, n.headers);
      if (e) {
        const s = vr(),
          u = Fr();
        n.headers = P(p({}, r), { [de]: s, [Re]: u });
      } else n.headers = r;
      return n;
    }),
    t
  );
}
function gn(e) {
  return async function (n) {
    try {
      const r = await e.request(n);
      return Ar(r, n);
    } catch (r) {
      return Nr(r, n);
    }
  };
}
const ue = gn(mn(!0)),
  st = gn(mn(!1));
function Pr() {
  return ue({ url: '/api/system/user-theme', method: 'GET' });
}
function $e(e) {
  return ue({ url: '/api/system/user-theme', method: 'PATCH', data: e });
}
const dn = 'user-theme';
function at() {
  return { settings: p({}, Zt), theme: 'light', lang: ln };
}
function pn(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function ut(e) {
  const t = at();
  if (!pn(e)) return t;
  const n = pn(e.settings) ? p(p({}, t.settings), e.settings) : t.settings,
    r = e.theme === 'dark' || e.theme === 'light' ? e.theme : t.theme,
    s =
      e.lang === 'zh-CN' || e.lang === 'en-US' || e.lang === 'es-ES'
        ? e.lang
        : t.lang;
  return { settings: n, theme: r, lang: s };
}
function qe() {
  const e = localStorage.getItem(dn);
  if (!e) return at();
  try {
    return ut(JSON.parse(e));
  } catch {
    return at();
  }
}
function pe(e) {
  const t = ut(e);
  return (
    localStorage.setItem(dn, JSON.stringify(t)),
    localStorage.setItem('arco-theme', t.theme),
    localStorage.setItem('arco-lang', t.lang),
    localStorage.setItem(ot, t.lang),
    t
  );
}
function Oe(e) {
  const t = qe();
  if (e.path.startsWith('settings.')) {
    const n = e.path.replace('settings.', '');
    t.settings = P(p({}, t.settings), { [n]: e.value });
  } else
    e.path === 'theme'
      ? (t.theme = e.value)
      : e.path === 'lang' && (t.lang = e.value);
  return pe(t);
}
const Br = '_block_byc7u_1',
  kr = '_title_byc7u_4';
var it = { block: Br, title: kr, 'switch-wrapper': '_switch-wrapper_byc7u_9' };
function ct(e) {
  const { title: t, options: n, children: r } = e,
    s = V(),
    u = me((d) => d.settings),
    a = Xe();
  function l(d, C) {
    const y = `settings.${d}`;
    Oe({ path: y, value: C }), $e({ path: y, value: C }).catch(() => {});
  }
  return g('div', {
    className: it.block,
    children: [
      o('h5', { className: it.title, children: t }),
      n &&
        n.map((d) => {
          const C = d.type || 'switch';
          return g(
            'div',
            {
              className: it['switch-wrapper'],
              children: [
                o('span', { children: s[d.name] }),
                C === 'switch' &&
                  o(io, {
                    size: 'small',
                    checked: !!u[d.value],
                    onChange: (y) => {
                      const _ = P(p({}, u), { [d.value]: y });
                      a({ type: 'update-settings', payload: { settings: _ } }),
                        l(d.value, y),
                        y &&
                          d.value === 'colorWeek' &&
                          (document.body.style.filter = 'invert(80%)'),
                        !y &&
                          d.value === 'colorWeek' &&
                          (document.body.style.filter = 'none');
                    },
                  }),
                C === 'number' &&
                  o(co, {
                    style: { width: 80 },
                    size: 'small',
                    value: u.menuWidth,
                    onChange: (y) => {
                      const _ = P(p({}, u), { [d.value]: y });
                      a({ type: 'update-settings', payload: { settings: _ } }),
                        l(d.value, y);
                    },
                  }),
              ],
            },
            d.value
          );
        }),
      r,
      o($t, {}),
    ],
  });
}
function hn(e, t = 'light') {
  qt(e, { list: !0, dark: t === 'dark' }).forEach((r, s) => {
    document.body.style.setProperty(`--arcoblue-${s + 1}`, lo(r));
  });
}
function Ue(e, t) {
  e === 'dark'
    ? document.body.setAttribute('arco-theme', 'dark')
    : document.body.removeAttribute('arco-theme'),
    t && hn(t, e);
}
const Ir = '_input_77wyg_1',
  Tr = '_color_77wyg_9',
  Rr = '_ul_77wyg_14',
  Mr = '_li_77wyg_19';
var ze = { input: Ir, color: Tr, ul: Rr, li: Mr };
const Lr = [
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
function $r() {
  const e =
      document.querySelector('body').getAttribute('arco-theme') || 'light',
    t = me((a) => a.settings),
    n = V(),
    r = t.themeColor,
    s = qt(r, { list: !0 }),
    u = Xe();
  return g('div', {
    children: [
      o(Mt, {
        trigger: 'hover',
        position: 'bl',
        popup: () =>
          o(mo, {
            color: r,
            presetColors: Lr,
            onChangeComplete: (a) => {
              const l = a.hex;
              u({
                type: 'update-settings',
                payload: { settings: P(p({}, t), { themeColor: l }) },
              }),
                Oe({ path: 'settings.themeColor', value: l }),
                $e({ path: 'settings.themeColor', value: l }).catch(() => {}),
                hn(l, e);
            },
          }),
        children: g('div', {
          className: ze.input,
          children: [
            o('div', { className: ze.color, style: { backgroundColor: r } }),
            o('span', { children: r }),
          ],
        }),
      }),
      o('ul', {
        className: ze.ul,
        children: s.map((a, l) =>
          o('li', { className: ze.li, style: { backgroundColor: a } }, l)
        ),
      }),
      o(we.Paragraph, {
        style: { fontSize: 12 },
        children: n['settings.color.tooltip'],
      }),
    ],
  });
}
function fn(e) {
  const { trigger: t } = e,
    [n, r] = i.exports.useState(!1),
    s = V(),
    u = me((C) => C.settings),
    { applyUserTheme: a } = i.exports.useContext(oe);
  function l() {
    r(!0),
      Pr()
        .then((C) => {
          a == null || a(ut(C.config));
        })
        .catch(() => {});
  }
  function d() {
    ho(JSON.stringify(u, null, 2)),
      le.success(s['settings.copySettings.message']);
  }
  return g(De, {
    children: [
      t
        ? Ot.cloneElement(t, { onClick: l })
        : o(Be, { icon: o(Ae, {}), onClick: l }),
      g(go, {
        width: 300,
        title: g(De, { children: [o(Ae, {}), s['settings.title']] }),
        visible: n,
        okText: s['settings.copySettings'],
        cancelText: s['settings.close'],
        onOk: d,
        onCancel: () => r(!1),
        children: [
          o(ct, { title: s['settings.themeColor'], children: o($r, {}) }),
          o(ct, {
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
          o(ct, {
            title: s['settings.otherSettings'],
            options: [{ name: 'settings.colorWeek', value: 'colorWeek' }],
          }),
          o(po, { content: s['settings.alertContent'] }),
        ],
      }),
    ],
  });
}
const qr = '_navbar_ql9qb_1',
  Or = '_left_ql9qb_10',
  Ur = '_logo_ql9qb_15',
  zr = '_center_ql9qb_47',
  jr = '_right_ql9qb_63',
  Kr = '_username_ql9qb_78',
  Wr = '_round_ql9qb_81';
var $ = {
  navbar: qr,
  left: Or,
  logo: Ur,
  'logo-image': '_logo-image_ql9qb_23',
  'logo-name': '_logo-name_ql9qb_30',
  center: zr,
  right: jr,
  username: Kr,
  round: Wr,
  'dropdown-icon': '_dropdown-icon_ql9qb_87',
  'fixed-settings': '_fixed-settings_ql9qb_92',
};
function Vr(e) {
  return Object.prototype.toString.call(e) === '[object Array]';
}
const he = (function () {
    try {
      return !(typeof window != 'undefined' && document !== void 0);
    } catch {
      return !0;
    }
  })(),
  Jr = (e) => {
    if (!he) return localStorage.getItem(e);
  };
function Ce(e, t) {
  const [n, r] = i.exports.useState(Jr(e) || t),
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
function Gr(e) {
  return st({ url: '/api/system/users/login', method: 'POST', data: e });
}
function Yr() {
  return ue({ url: '/api/system/users/logout', method: 'POST' });
}
function je(e) {
  return `${e}-resource`;
}
function lt(e) {
  const t = localStorage.getItem(je(e));
  if (!t) return null;
  try {
    return JSON.parse(t);
  } catch {
    return localStorage.removeItem(je(e)), null;
  }
}
function Hr(e, t) {
  localStorage.setItem(je(e), JSON.stringify(t));
}
function Xr() {
  return ue({ url: '/api/auth/context', method: 'GET' });
}
async function mt(e) {
  const t = lt(e);
  if (t) return t;
  const n = await Xr();
  return Hr(e, n), n;
}
function Zr({ show: e, topMenu: t, menu: n }) {
  const r = V(),
    s = me((c) => c.userInfo),
    u = Te(),
    a = (u == null ? void 0 : u.avatar) || (s == null ? void 0 : s.avatar),
    [, l] = Ce('userStatus'),
    [d, C] = Ce('userRole', 'admin'),
    {
      setLang: y,
      lang: _,
      theme: I,
      setTheme: N,
      systemProfile: b,
    } = i.exports.useContext(oe),
    B = Pe(b, _);
  function z() {
    const c = re();
    l('logout'),
      localStorage.removeItem(de),
      localStorage.removeItem(Re),
      localStorage.removeItem(ke),
      c && localStorage.removeItem(je(c)),
      localStorage.removeItem('accessToken'),
      localStorage.removeItem('organization'),
      localStorage.removeItem('user-theme'),
      gr();
  }
  function m() {
    Yr()
      .catch(() => {})
      .finally(() => {
        z(), (window.location.href = '/login');
      });
  }
  function v(c) {
    c === 'logout' ? m() : le.info(`You clicked ${c}`);
  }
  if (!e)
    return o('div', {
      className: $['fixed-settings'],
      children: o(fn, {
        trigger: o(ee, { icon: o(Ae, {}), type: 'primary', size: 'large' }),
      }),
    });
  const G = () => {
      C(d === 'admin' ? 'user' : 'admin');
    },
    h = g(T, {
      onClickMenuItem: v,
      children: [
        o(
          T.SubMenu,
          {
            title: g(De, {
              children: [
                o(Ut, { className: $['dropdown-icon'] }),
                o('span', {
                  className: $['user-role'],
                  children:
                    d === 'admin'
                      ? r['menu.user.role.admin']
                      : r['menu.user.role.user'],
                }),
              ],
            }),
            children: g(
              T.Item,
              {
                onClick: G,
                children: [
                  o(fo, { className: $['dropdown-icon'] }),
                  r['menu.user.switchRoles'],
                ],
              },
              'switch role'
            ),
          },
          'role'
        ),
        g(
          T.Item,
          {
            children: [
              o(Ae, { className: $['dropdown-icon'] }),
              r['menu.user.setting'],
            ],
          },
          'setting'
        ),
        o(
          T.SubMenu,
          {
            title: g('div', {
              style: { width: 80 },
              children: [
                o(yo, { className: $['dropdown-icon'] }),
                r['message.seeMore'],
              ],
            }),
            children: g(
              T.Item,
              {
                children: [
                  o(bo, { className: $['dropdown-icon'] }),
                  r['menu.dashboard.workplace'],
                ],
              },
              'workplace'
            ),
          },
          'more'
        ),
        o($t, { style: { margin: '4px 0' } }),
        g(
          T.Item,
          {
            children: [
              o(_o, { className: $['dropdown-icon'] }),
              r['navbar.logout'],
            ],
          },
          'logout'
        ),
      ],
    });
  return g('div', {
    className: $.navbar,
    children: [
      o('div', {
        className: $.left,
        children: g('div', {
          className: $.logo,
          children: [
            o(un, { profile: b, className: $['logo-image'], alt: B }),
            o('div', { className: $['logo-name'], children: B }),
          ],
        }),
      }),
      o('div', { className: $.center, children: n && t }),
      g('ul', {
        className: $.right,
        children: [
          o('li', {
            children: o(Eo, {
              triggerElement: o(Be, { icon: o(Co, {}) }),
              options: [
                { label: '\u4E2D\u6587', value: 'zh-CN' },
                { label: 'Espa\xF1a', value: 'es-ES' },
                { label: 'English', value: 'en-US' },
              ],
              value: _,
              triggerProps: {
                autoAlignPopupWidth: !1,
                autoAlignPopupMinWidth: !0,
                position: 'br',
              },
              trigger: 'hover',
              onChange: (c) => {
                y(c),
                  Oe({ path: 'lang', value: c }),
                  $e({ path: 'lang', value: c }).catch(() => {});
                const E = tn[c];
                le.info(`${E['message.lang.tips']}${c}`);
              },
            }),
          }),
          o('li', {
            children: o(fr, { children: o(Be, { icon: o(vo, {}) }) }),
          }),
          o('li', {
            children: o(Fo, {
              content:
                I === 'light'
                  ? r['settings.navbar.theme.toDark']
                  : r['settings.navbar.theme.toLight'],
              children: o(Be, {
                icon: I !== 'dark' ? o(So, {}) : o(wo, {}),
                onClick: () => {
                  const c = I === 'light' ? 'dark' : 'light';
                  N(c),
                    Oe({ path: 'theme', value: c }),
                    $e({ path: 'theme', value: c }).catch(() => {});
                },
              }),
            }),
          }),
          o(fn, {}),
          s &&
            o('li', {
              children: o(zt, {
                droplist: h,
                position: 'br',
                children: o(Tt, {
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
const Qr = '_footer_1si67_1';
var es = { footer: Qr };
function yn(e = {}) {
  const u = e,
    { className: t } = u,
    n = Se(u, ['className']),
    { lang: r, systemProfile: s } = i.exports.useContext(oe);
  return o(
    ge.Footer,
    P(p({ className: ye(es.footer, t) }, n), { children: cr(s, r) })
  );
}
const ts = '_layout_316fi_1',
  ns = '_icon_316fi_86',
  os = '_spin_316fi_111';
var q = {
  layout: ts,
  'layout-navbar': '_layout-navbar_316fi_5',
  'layout-navbar-hidden': '_layout-navbar-hidden_316fi_13',
  'layout-sider': '_layout-sider_316fi_16',
  'collapse-btn': '_collapse-btn_316fi_50',
  'menu-wrapper': '_menu-wrapper_316fi_67',
  icon: ns,
  'icon-empty': '_icon-empty_316fi_90',
  'layout-content': '_layout-content_316fi_95',
  'layout-content-wrapper': '_layout-content-wrapper_316fi_102',
  'layout-content-wrapper-with-tab':
    '_layout-content-wrapper-with-tab_316fi_105',
  'layout-breadcrumb': '_layout-breadcrumb_316fi_108',
  spin: os,
};
function rs(e) {
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
function bn(e, t) {
  const r = xo[rs(t || e)];
  return r
    ? o(r, { className: q.icon })
    : o('div', { className: q['icon-empty'] });
}
var M = {
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
function _n(e, t) {
  const n = tt(e);
  return t.find((r) => n === `/${r.key}`);
}
function En(e, t, n) {
  const r = _n(e, n);
  if (!r) return null;
  const s = tt(e);
  return {
    title: r.name,
    name: s.replace(/^\//, ''),
    path: e,
    fullPath: `${e}${t || ''}`,
  };
}
function ss({
  defaultTab: e,
  tabList: t,
  routes: n,
  offsetTop: r = 0,
  onTabsChange: s,
  onCloseTabs: u,
  onReload: a,
}) {
  const l = Ze(),
    d = jt(),
    C = V(),
    y = `${d.pathname}${d.search || ''}`;
  function _(h) {
    return _n(h.path, n);
  }
  function I(h) {
    const c = _(h),
      E = (c == null ? void 0 : c.name) || h.title;
    return C[E] || E;
  }
  function N(h) {
    const c = _(h);
    return bn(
      (c == null ? void 0 : c.key) || h.name,
      c == null ? void 0 : c.icon
    );
  }
  function b(h) {
    h.fullPath !== y && l.push(h.fullPath);
  }
  function B(h, c) {
    if (c === 0) return;
    const E = t.filter((j, K) => K !== c);
    if ((u == null || u([h]), s(E), h.fullPath === y)) {
      const j = E[c - 1] || E[0];
      l.push(j.fullPath);
    }
  }
  function z(h = t) {
    return h.findIndex((c) => c.fullPath === y);
  }
  function m(h, c) {
    c.length && (u == null || u(c)), s(h);
  }
  function v(h, c, E) {
    const j = z();
    if (h === J.Current) {
      B(c, E);
      return;
    }
    if (h === J.Left) {
      const R = t.filter((S, w) => w === 0 || w >= E),
        x = t.filter((S, w) => w > 0 && w < E);
      m(R, x), j > 0 && j < E && l.push(c.fullPath);
      return;
    }
    if (h === J.Right) {
      const R = t.filter((S, w) => w <= E),
        x = t.filter((S, w) => w > E);
      m(R, x), j > E && l.push(c.fullPath);
      return;
    }
    if (h === J.Others) {
      const R = t.filter((S, w) => w === 0 || w === E),
        x = t.filter((S, w) => w !== 0 && w !== E);
      m(R, x), l.push(c.fullPath);
      return;
    }
    if (h === J.Reload) {
      a == null || a(c);
      return;
    }
    const K = t.filter((R, x) => x !== 0);
    m([e], K), l.push(e.fullPath);
  }
  function G(h, c) {
    const E = h.fullPath !== y,
      j = c === 0,
      K = c <= 1,
      R = c === t.length - 1;
    return g(T, {
      onClickMenuItem: (x) => v(x, h, c),
      children: [
        g(
          T.Item,
          {
            disabled: E,
            children: [
              o(Ao, {}),
              o('span', {
                className: M['dropdown-label'],
                children: '\u91CD\u65B0\u52A0\u8F7D',
              }),
            ],
          },
          J.Reload
        ),
        g(
          T.Item,
          {
            disabled: j,
            className: M['separate-line'],
            children: [
              o(Kt, {}),
              o('span', {
                className: M['dropdown-label'],
                children: '\u5173\u95ED\u5F53\u524D\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Current
        ),
        g(
          T.Item,
          {
            disabled: K,
            children: [
              o(No, {}),
              o('span', {
                className: M['dropdown-label'],
                children: '\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Left
        ),
        g(
          T.Item,
          {
            disabled: R,
            className: M['separate-line'],
            children: [
              o(Po, {}),
              o('span', {
                className: M['dropdown-label'],
                children: '\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Right
        ),
        g(
          T.Item,
          {
            disabled: t.length <= 2 && c !== 0,
            children: [
              o(Bo, {}),
              o('span', {
                className: M['dropdown-label'],
                children: '\u5173\u95ED\u5176\u5B83\u6807\u7B7E\u9875',
              }),
            ],
          },
          J.Others
        ),
        g(
          T.Item,
          {
            disabled: t.length <= 1,
            children: [
              o(ko, {}),
              o('span', {
                className: M['dropdown-label'],
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
    className: M['tab-bar-container'],
    children: o(Do, {
      offsetTop: r,
      children: g('div', {
        className: M['tab-bar-box'],
        children: [
          o('div', {
            className: M['tab-bar-scroll'],
            children: o('div', {
              className: M['tags-wrap'],
              children: t.map((h, c) =>
                o(
                  zt,
                  {
                    droplist: G(h, c),
                    trigger: 'contextMenu',
                    position: 'bl',
                    children: g('span', {
                      className: ye(
                        'arco-tag arco-tag-size-medium arco-tag-checked',
                        M['tab-tag'],
                        { [M['link-activated']]: h.fullPath === y }
                      ),
                      onClick: () => b(h),
                      children: [
                        g('span', {
                          className: M['tag-link'],
                          children: [N(h), I(h)],
                        }),
                        c !== 0 &&
                          o('span', {
                            className:
                              'arco-icon-hover arco-tag-icon-hover arco-icon-hover-size-medium arco-tag-close-btn',
                            onClick: (E) => {
                              E.stopPropagation(), B(h, c);
                            },
                            children: o(Kt, {}),
                          }),
                      ],
                    }),
                  },
                  h.fullPath
                )
              ),
            }),
          }),
          o('div', { className: M['tag-bar-operation'] }),
        ],
      }),
    }),
  });
}
const as = 'marketing:tabs';
function Cn(e) {
  return encodeURIComponent(String(e || 'unknown'));
}
function gt(e, t) {
  if (!!e)
    for (const n of t) {
      const r = e[n];
      if (typeof r == 'string' || typeof r == 'number') return r;
    }
}
function us(e) {
  const t = e == null ? void 0 : e.currentTenant,
    n = e == null ? void 0 : e.defaultTenant;
  return {
    tenantCode:
      gt(t, ['tenantCode', 'code', 'tenantId', 'id']) ||
      gt(e || void 0, ['tenantCode', 'tenantId']) ||
      gt(n, ['tenantCode', 'code', 'tenantId', 'id']),
  };
}
function vn(e) {
  return `${as}:${Cn(e.tenantCode)}`;
}
function Ke(e, t) {
  return `${Cn(e.tenantCode)}:${encodeURIComponent(t)}`;
}
function is(e) {
  try {
    const t = sessionStorage.getItem(vn(e));
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
function cs(e, t) {
  try {
    sessionStorage.setItem(vn(e), JSON.stringify(t));
  } catch {}
}
function ls(e, t) {
  if (!t || re(e.path)) return e;
  const n = `/${t}`.replace(/\/$/, ''),
    r = e.path.startsWith('/') ? e.path : `/${e.path}`,
    s = `${n}${r}`.replace(/\/+/g, '/'),
    u = e.fullPath.indexOf('?'),
    a = u >= 0 ? e.fullPath.slice(u) : '';
  return P(p({}, e), { path: s, fullPath: `${s}${a}` });
}
function ms(e, t) {
  return !t || !e.length ? e : e.map((n) => ls(n, t));
}
function gs(u) {
  var a = u,
    { identity: e, component: t, render: n, children: r } = a,
    s = Se(a, ['identity', 'component', 'render', 'children']);
  return o(
    te,
    P(p({}, s), {
      render: (l) => {
        const d = `${l.location.pathname}${l.location.search || ''}`,
          C = Ke(e, d),
          y = t;
        return o(Io, {
          id: C,
          name: C,
          saveScrollPosition: 'screen',
          children: y ? o(y, p({}, l)) : n ? n(l) : r,
        });
      },
    })
  );
}
const Fn = (e, t) =>
    !t || !t.length
      ? !1
      : t.join('') === '*'
      ? !0
      : e.every((n) => t.includes(n)),
  ds = (e, t) => {
    const { resource: n, actions: r = [] } = e;
    if (Array.isArray(t))
      return n instanceof RegExp
        ? t.some((u) => n.test(u))
        : r.length
        ? r.some((u) => t.includes(`${n}:${u}`))
        : t.includes(n);
    if (n instanceof RegExp) {
      const a = Object.keys(t).filter((l) => l.match(n));
      return a.length
        ? a.every((l) => {
            const d = t[l];
            return Fn(r, d);
          })
        : !1;
    }
    const s = t[n];
    return Fn(r, s);
  };
var ps = (e, t) => {
  const { requiredPermissions: n, oneOfPerm: r } = e;
  if (Array.isArray(n) && n.length) {
    let s = 0;
    for (const u of n) ds(u, t) && s++;
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
function dt(e) {
  return (e || '').replace(/^\/+/, '').replace(/\/+$/, '');
}
function Sn(e) {
  return dt(e.routerPath || e.resourcePath || e.resourceCode);
}
function hs(e, t = 'zh-CN') {
  var n, r;
  return (
    ((n = e.resourceNames) == null ? void 0 : n[t]) ||
    ((r = e.resourceNames) == null ? void 0 : r['zh-CN']) ||
    e.resourceName ||
    e.resourceCode ||
    Sn(e)
  );
}
function pt(e = [], t = 'zh-CN') {
  return e
    .slice()
    .sort((n, r) => (n.sortOrder || 0) - (r.sortOrder || 0))
    .map((n) => {
      const r = pt(n.children || [], t),
        s = {
          name: hs(n, t),
          resourceNames: n.resourceNames,
          key: Sn(n),
          path: n.routerPath || n.resourcePath,
          icon: n.resourceIcon,
          children: r.length ? r : void 0,
          menuType: n.menuType,
          useIndex: n.useIndex,
        };
      return (
        s.key === 'dashboard' && !s.children && (s.children = We[0].children), s
      );
    })
    .filter((n) => n.key);
}
function wn(e, t = 'zh-CN') {
  if (!e) return We;
  const n = lt(e);
  if (!n) return We;
  const r = pt((n == null ? void 0 : n.menus) || [], t);
  return r.length ? r : [];
}
function xn(e) {
  return e.menuType || '';
}
function fs(e) {
  const t = e.useIndex;
  return typeof t == 'number' ? t : 0;
}
function Dn(e) {
  if (e.key !== void 0) {
    const n = e;
    return dt(n.path || n.key);
  }
  const t = e;
  return dt(t.routerPath || t.resourcePath || t.resourceCode);
}
function An(e) {
  const t = e.children;
  return Array.isArray(t) ? t : [];
}
function Nn(e = []) {
  for (const t of e) {
    if (fs(t) === 1 && xn(t).toUpperCase() === 'MENU') {
      const r = Dn(t);
      if (r) return r;
    }
    const n = An(t);
    if (n.length) {
      const r = Nn(n);
      if (r) return r;
    }
  }
  return '';
}
function Pn(e = []) {
  for (const t of e) {
    const n = An(t);
    if (n.length) {
      const r = Pn(n);
      if (r) return r;
    }
    if (xn(t).toUpperCase() === 'MENU') {
      const r = Dn(t);
      if (r) return r;
    }
  }
  return '';
}
function Bn(e = []) {
  return Nn(e) || Pn(e);
}
const ys = (e) => {
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
  ht = (e, t, n = []) => {
    if (!e.length) return [];
    for (const r of e) {
      const { requiredPermissions: s, oneOfPerm: u } = r;
      let a = !0;
      if ((s && (a = ps({ requiredPermissions: s, oneOfPerm: u }, t)), !!a))
        if (r.children && r.children.length) {
          const l = P(p({}, r), { children: [] });
          ht(r.children, t, l.children), l.children.length && n.push(l);
        } else n.push(p({}, r));
    }
    return n;
  },
  bs = (e, t) => {
    const { lang: n = 'zh-CN' } = i.exports.useContext(oe),
      [r, s] = i.exports.useState(() => wn(t, n)),
      [u, a] = i.exports.useState(!1),
      l = i.exports.useMemo(() => JSON.stringify(e || {}), [e]);
    i.exports.useEffect(() => {
      let C = !1;
      async function y() {
        const _ = wn(t, n);
        if ((s(ht(_, e)), !(!t || lt(t)))) {
          a(!0);
          try {
            const I = await mt(t);
            if (C) return;
            const N = pt(I.menus || [], n);
            s(ht(N, e));
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
    }, [n, l, t, e]);
    const d = i.exports.useMemo(() => Bn(r), [r]);
    return [r, d, u];
  };
function _s() {
  const e = Wt.parseUrl(he ? '' : window.location.href).query,
    t = {};
  return (
    Object.keys(e).forEach((n) => {
      e[n] === 'true' && (t[n] = !0), e[n] === 'false' && (t[n] = !1);
    }),
    t
  );
}
function Es(e, t) {
  const n = To(e, t);
  return (n.preload = e.requireAsync || e), n;
}
function Cs(e) {
  return e.error
    ? (console.error(e.error), null)
    : o('div', { className: q.spin, children: o(He, {}) });
}
var kn = (e) =>
  Es(e, { fallback: Cs({ pastDelay: !0, error: !1, timedOut: !1 }) });
const vs = T.Item,
  Fs = T.SubMenu,
  Ss = ge.Sider,
  ws = ge.Content,
  xs = {
    './pages/example/index.tsx': () =>
      k(
        () => import('./index.c99a80de.js'),
        [
          'assets/index.c99a80de.js',
          'assets/index.e7a6af1d.css',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
        ]
      ),
    './pages/login/banner.tsx': () =>
      k(
        () =>
          Promise.resolve().then(function () {
            return qs;
          }),
        void 0
      ),
    './pages/login/form.tsx': () =>
      k(
        () =>
          Promise.resolve().then(function () {
            return $s;
          }),
        void 0
      ),
    './pages/login/index.tsx': () =>
      k(
        () =>
          Promise.resolve().then(function () {
            return Os;
          }),
        void 0
      ),
    './pages/dashboard/workplace/announcement.tsx': () =>
      k(
        () => import('./announcement.6e7894e6.js'),
        [
          'assets/announcement.6e7894e6.js',
          'assets/announcement.4446c828.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/carousel.tsx': () =>
      k(
        () => import('./carousel.7034aa60.js'),
        [
          'assets/carousel.7034aa60.js',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
        ]
      ),
    './pages/dashboard/workplace/content-percentage.tsx': () =>
      k(
        () => import('./content-percentage.7daf0a08.js'),
        [
          'assets/content-percentage.7daf0a08.js',
          'assets/index.e7a6af1d.css',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
          'assets/index.6eae506e.js',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/docs.tsx': () =>
      k(
        () => import('./docs.eefe0211.js'),
        [
          'assets/docs.eefe0211.js',
          'assets/docs.e521c9d6.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/index.tsx': () =>
      k(
        () => import('./index.786db0ee.js'),
        [
          'assets/index.786db0ee.js',
          'assets/index.0a453fe0.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
          'assets/overview.de1c381c.js',
          'assets/overview.65964fa4.css',
          'assets/index.6eae506e.js',
          'assets/index.9464998a.js',
          'assets/popular-contents.c66e9998.js',
          'assets/popular-contents.5d7b60b5.css',
          'assets/content-percentage.7daf0a08.js',
          'assets/shortcuts.ef7401cd.js',
          'assets/shortcuts.0626e3d2.css',
          'assets/announcement.6e7894e6.js',
          'assets/announcement.4446c828.css',
          'assets/carousel.7034aa60.js',
          'assets/docs.eefe0211.js',
          'assets/docs.e521c9d6.css',
        ]
      ),
    './pages/dashboard/workplace/overview.tsx': () =>
      k(
        () => import('./overview.de1c381c.js'),
        [
          'assets/overview.de1c381c.js',
          'assets/overview.65964fa4.css',
          'assets/index.4623c961.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
          'assets/index.6eae506e.js',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/popular-contents.tsx': () =>
      k(
        () => import('./popular-contents.c66e9998.js'),
        [
          'assets/popular-contents.c66e9998.js',
          'assets/popular-contents.5d7b60b5.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/dashboard/workplace/shortcuts.tsx': () =>
      k(
        () => import('./shortcuts.ef7401cd.js'),
        [
          'assets/shortcuts.ef7401cd.js',
          'assets/shortcuts.0626e3d2.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
          'assets/index.9464998a.js',
        ]
      ),
    './pages/exception/403/index.tsx': () =>
      k(
        () =>
          Promise.resolve().then(function () {
            return bt;
          }),
        void 0
      ),
    './pages/system/setting/index.tsx': () =>
      k(
        () => import('./index.f2361fe4.js'),
        [
          'assets/index.f2361fe4.js',
          'assets/index.561fe829.css',
          'assets/index.eccebd16.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
        ]
      ),
    './pages/system/tenants/constants.tsx': () =>
      k(
        () =>
          import('./constants.7bb2469b.js').then(function (e) {
            return e.c;
          }),
        [
          'assets/constants.7bb2469b.js',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.02cb7149.js',
          'assets/index.module.180e418d.css',
        ]
      ),
    './pages/system/tenants/form.tsx': () =>
      k(
        () =>
          import('./form.f6e79932.js').then(function (e) {
            return e.f;
          }),
        [
          'assets/form.f6e79932.js',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
          'assets/index.module.02cb7149.js',
          'assets/index.module.180e418d.css',
        ]
      ),
    './pages/system/tenants/index.tsx': () =>
      k(
        () => import('./index.44af48e8.js'),
        [
          'assets/index.44af48e8.js',
          'assets/index.87aa3815.css',
          'assets/index.eccebd16.css',
          'assets/index.5553b0cc.css',
          'assets/index.e7a6af1d.css',
          'assets/vendor.64a7fdcd.js',
          'assets/vendor.503ea215.css',
          'assets/form.f6e79932.js',
          'assets/index.module.02cb7149.js',
          'assets/index.module.180e418d.css',
          'assets/constants.7bb2469b.js',
        ]
      ),
  },
  In = new Map();
function Ds(e) {
  const t = In.get(e);
  if (t) return t;
  const n =
      xs[`./pages/${e}/index.tsx`] ||
      (() =>
        k(
          () =>
            Promise.resolve().then(function () {
              return bt;
            }),
          void 0
        )),
    r = kn(n);
  return In.set(e, r), r;
}
function As(e) {
  const t = [];
  function n(r) {
    r.forEach((s) => {
      s.key && !s.children
        ? t.push(P(p({}, s), { component: Ds(s.key) }))
        : Vr(s.children) && s.children.length && n(s.children);
    });
  }
  return n(e), t;
}
function Ns() {
  const e = _s(),
    t = Ze(),
    n = jt(),
    { dropScope: r, refreshScope: s } = Vt.exports.useAliveController(),
    u = n.pathname,
    a = re(u),
    l = a ? `/${a}` : '',
    d = tt(u),
    C = Wt.parseUrl(d).url.slice(1),
    y = V(),
    { settings: _, userLoading: I, userInfo: N } = me((f) => f),
    b = i.exports.useMemo(
      () => ({ tenantCode: a || us(N).tenantCode }),
      [a, N]
    ),
    B = i.exports.useMemo(() => b.tenantCode || 'unknown', [b.tenantCode]),
    [z, m, v] = bs(N == null ? void 0 : N.permissions, a),
    G = [C || m],
    h = (C || m).split('/'),
    c = h.slice(0, h.length - 1),
    [E, j] = i.exports.useState([]),
    [K, R] = i.exports.useState(!1),
    [x, S] = i.exports.useState(G),
    [w, X] = i.exports.useState(c),
    [W, Z] = i.exports.useState([]),
    se = i.exports.useRef(new Map()),
    Je = i.exports.useRef(new Map()),
    _t = 60,
    Et = K ? 48 : _.menuWidth,
    ve = _.navbar && e.navbar !== !1,
    Ct = _.menu && e.menu !== !1,
    ie = Ct && _.topMenu,
    vt = Ct && !ie,
    Y = _.tabBar && e.tabBar !== !1,
    On = _.footer && e.footer !== !1,
    ae = i.exports.useMemo(() => As(z) || [], [z]),
    Ft = i.exports.useMemo(() => Cr(u, N), [u, N]),
    O = i.exports.useMemo(() => {
      if (!m) return null;
      const F = `${Ft.replace(/\/$/, '')}/${m}`.replace(/\/+/g, '/');
      return En(F, '', ae) || { title: m, name: m, path: F, fullPath: F };
    }, [m, ae, Ft]),
    ce = i.exports.useMemo(
      () => En(n.pathname, n.search, ae),
      [ae, n.pathname, n.search]
    );
  i.exports.useEffect(() => {
    if (!m || !Y || !O) return;
    const f = cn(u, N),
      F = is(b),
      L = (F == null ? void 0 : F.length) ? ms(F, f) : null;
    Z((L == null ? void 0 : L.length) ? L : [O]);
  }, [m, O, B, u, Y, b, N]),
    i.exports.useEffect(() => {
      if (Y || !W.length) return;
      const f = `${n.pathname}${n.search || ''}`;
      W.forEach((F) => {
        F.fullPath !== f && r(Ke(b, F.fullPath));
      });
    }, [r, n.pathname, n.search, Y, b, W]),
    i.exports.useEffect(() => {
      if (a) return;
      const f = nt();
      t.replace(f ? `/${f}${u}` : '/403');
    }, [t, u, a]),
    i.exports.useEffect(() => {
      !ce ||
        Z((f) => {
          if (!Y) return [ce];
          const F = O ? [O] : [],
            L = f.length ? f : F;
          return L.length
            ? L.some((Q) => Q.fullPath === ce.fullPath)
              ? L
              : [...L, ce]
            : [ce];
        });
    }, [ce, O, Y]),
    i.exports.useEffect(() => {
      !W.length || cs(b, Y ? W : W.slice(-1));
    }, [B, Y, b, W]);
  const Un = i.exports.useCallback(
      (f) => {
        if (f.length) {
          Z(f);
          return;
        }
        Z(O ? [O] : []);
      },
      [O]
    ),
    zn = i.exports.useCallback(
      (f) => {
        f.forEach((F) => {
          r(Ke(b, F.fullPath));
        });
      },
      [r, b]
    ),
    jn = i.exports.useCallback(
      (f) => {
        s(Ke(b, f.fullPath));
      },
      [s, b]
    );
  function Kn(f) {
    const F = ae.find((U) => U.key === f),
      Q = F.component.preload();
    Ht.start(),
      Q.then(() => {
        t.push(F.path ? `${l}${F.path}` : `${l}/${f}`), Ht.done();
      });
  }
  function Wn() {
    R((f) => !f);
  }
  const Vn = vt ? { paddingLeft: Et } : {},
    St = ve ? { paddingTop: _t } : {},
    Jn = p(p({}, Vn), St),
    wt = o(T, {
      mode: ie ? 'horizontal' : 'vertical',
      collapse: !ie && K,
      onClickMenuItem: Kn,
      selectedKeys: x,
      openKeys: ie ? void 0 : w,
      onClickSubMenu: (f, F) => {
        ie || X(F);
      },
      children: Gn(y)(z, 1),
    });
  function Gn(f) {
    return (
      se.current.clear(),
      function F(L, Q, U = []) {
        return L.map((A) => {
          const { breadcrumb: Yn = !0, ignore: Hn } = A,
            Xn = bn(A.key, A.icon),
            Dt = g(De, { children: [Xn, ' ', f[A.name] || A.name] });
          se.current.set(`/${A.key}`, Yn ? [...U, A.name] : []);
          const At = (A.children || []).filter((Ge) => {
            const { ignore: Nt, breadcrumb: Zn = !0 } = Ge;
            return (
              (Nt || A.ignore) &&
                se.current.set(`/${Ge.key}`, Zn ? [...U, A.name, Ge.name] : []),
              !Nt
            );
          });
          return Hn
            ? ''
            : At.length
            ? (Je.current.set(A.key, { subMenu: !0 }),
              o(
                Fs,
                { title: Dt, children: F(At, Q + 1, [...U, A.name]) },
                A.key
              ))
            : (Je.current.set(A.key, { menuItem: !0 }),
              o(vs, { children: Dt }, A.key));
        });
      }
    );
  }
  const xt = i.exports.useCallback(() => {
    const f = d.split('/'),
      F = [],
      L = [];
    for (; f.length > 0; ) {
      const U = f.join('/').replace(/^\//, ''),
        A = Je.current.get(U);
      A && A.menuItem && F.push(U), A && A.subMenu && L.push(U), f.pop();
    }
    S(F),
      X((Q) => {
        const U = [...Q];
        return (
          L.forEach((A) => {
            U.includes(A) || U.push(A);
          }),
          U
        );
      });
  }, [d]);
  return (
    i.exports.useEffect(() => {
      const f = se.current.get(d);
      j(f || []), xt();
    }, [d, xt]),
    g(ge, {
      className: q.layout,
      children: [
        o('div', {
          className: ye(q['layout-navbar'], {
            [q['layout-navbar-hidden']]: !ve,
          }),
          children: o(Zr, { show: ve, menu: ie, topMenu: wt }),
        }),
        I || v
          ? o(He, { className: q.spin })
          : g(ge, {
              children: [
                vt &&
                  g(Ss, {
                    className: q['layout-sider'],
                    width: Et,
                    collapsed: K,
                    onCollapse: R,
                    trigger: null,
                    collapsible: !0,
                    breakpoint: 'xl',
                    style: St,
                    children: [
                      o('div', { className: q['menu-wrapper'], children: wt }),
                      o('div', {
                        className: q['collapse-btn'],
                        onClick: Wn,
                        children: K ? o(Ro, {}) : o(Mo, {}),
                      }),
                    ],
                  }),
                g(ge, {
                  className: q['layout-content'],
                  style: Jn,
                  children: [
                    Y &&
                      O &&
                      o(ss, {
                        defaultTab: O,
                        tabList: W.length ? W : [O],
                        routes: ae,
                        offsetTop: ve ? _t : 0,
                        onTabsChange: Un,
                        onCloseTabs: zn,
                        onReload: jn,
                      }),
                    g('div', {
                      className: ye(q['layout-content-wrapper'], {
                        [q['layout-content-wrapper-with-tab']]: Y && !!O,
                      }),
                      children: [
                        !!E.length &&
                          o('div', {
                            className: q['layout-breadcrumb'],
                            children: o(Jt, {
                              children: E.map((f, F) =>
                                o(
                                  Jt.Item,
                                  {
                                    children:
                                      (typeof f == 'string' && y[f]) || f,
                                  },
                                  F
                                )
                              ),
                            }),
                          }),
                        o(ws, {
                          children: g(Gt, {
                            children: [
                              ae.map((f, F) =>
                                o(
                                  gs,
                                  {
                                    path: `${l}/${f.key}`,
                                    component: f.component,
                                    identity: b,
                                  },
                                  F
                                )
                              ),
                              o(te, {
                                exact: !0,
                                path: l || '/',
                                children: m
                                  ? o(Yt, { to: `${l}/${m}` })
                                  : o(Yt, { to: l ? `${l}/403` : '/403' }),
                              }),
                              o(te, {
                                path: '*',
                                component: kn(() =>
                                  k(
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
                    On && o(yn, {}),
                  ],
                }),
              ],
            }),
      ],
    })
  );
}
function Ps() {
  return st({ url: '/api/system/captcha', method: 'GET' });
}
function Bs() {
  return st({
    url: '/api/system/setting/public',
    method: 'GET',
    skipErrorMessage: !0,
  });
}
function Ys() {
  return ue({ url: '/api/system/setting/manage', method: 'GET' });
}
function Hs(e) {
  return ue({
    url: '/api/system/setting/manage',
    method: 'PUT',
    data: { config: e },
  });
}
function Xs(e, t) {
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
const Tn = {
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
  ks = '_container_1rgqq_1',
  Is = '_banner_1rgqq_5',
  Ts = '_content_1rgqq_9',
  Rs = '_footer_1rgqq_14',
  Ms = '_logo_1rgqq_20',
  Ls = '_carousel_1rgqq_54';
var D = {
  container: ks,
  banner: Is,
  content: Ts,
  footer: Rs,
  logo: Ms,
  'logo-image': '_logo-image_1rgqq_28',
  'logo-text': '_logo-text_1rgqq_34',
  'banner-inner': '_banner-inner_1rgqq_45',
  carousel: Ls,
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
function Rn() {
  const e = i.exports.useRef(),
    [t, n] = i.exports.useState(''),
    [r, s] = i.exports.useState(!1),
    [u, a] = i.exports.useState(!1),
    [l, d] = i.exports.useState(''),
    [C, y] = i.exports.useState(''),
    [_, I, N] = Ce('loginParams'),
    b = V(Tn),
    {
      lang: B,
      systemProfile: z,
      refreshSystemProfile: m,
    } = i.exports.useContext(oe),
    v = Pe(z, B),
    G = nn(z, B),
    [h, c] = i.exports.useState(!!_);
  function E() {
    a(!0),
      Ps()
        .then((x) => {
          var S;
          d(x.captchaKey),
            y(x.captchaImage),
            (S = e.current) == null || S.setFieldValue('captchaCode', '');
        })
        .finally(() => {
          a(!1);
        });
  }
  async function j(x, S) {
    var Z;
    const w = (Z = S.defaultTenant) == null ? void 0 : Z.tenantCode;
    if (!w) {
      window.location.href = '/403';
      return;
    }
    h ? I(JSON.stringify({ account: x.account })) : N(),
      localStorage.setItem(de, S.accessToken),
      localStorage.setItem(Re, w),
      localStorage.setItem(
        ke,
        JSON.stringify(
          P(p({}, S.profile || {}), { defaultTenant: S.defaultTenant })
        )
      ),
      localStorage.setItem('userStatus', 'login'),
      pe(S.theme_setting),
      m == null ||
        m().then((se) => {
          se && an(se);
        });
    const X = await mt(w);
    localStorage.setItem(
      ke,
      JSON.stringify(
        P(p({}, X.profile || S.profile || {}), {
          defaultTenant: S.defaultTenant,
        })
      )
    );
    const W = Bn(X.menus || []);
    if (!W) {
      window.location.href = '/403';
      return;
    }
    window.location.href = `/${w}/${W.replace(/^\/+/, '')}`;
  }
  function K(x) {
    n(''),
      s(!0),
      Gr(P(p({}, x), { captchaKey: l }))
        .then((S) => j(x, S))
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
            E();
        })
        .finally(() => {
          s(!1);
        });
  }
  function R() {
    e.current.validate().then((x) => {
      K(x);
    });
  }
  return (
    i.exports.useEffect(() => {
      E();
    }, []),
    i.exports.useEffect(() => {
      const x = !!_;
      if ((c(x), e.current && x)) {
        const S = JSON.parse(_);
        e.current.setFieldsValue(S);
      }
    }, [_]),
    g('div', {
      className: D['login-form-wrapper'],
      children: [
        g('div', {
          className: D['login-form-title'],
          children: [b['login.form.title'], ' ', v],
        }),
        o('div', { className: D['login-form-sub-title'], children: G }),
        o('div', { className: D['login-form-error-msg'], children: t }),
        g(be, {
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
                prefix: o(Ut, {}),
                placeholder: b['login.form.userName.placeholder'],
                onPressEnter: R,
              }),
            }),
            o(be.Item, {
              field: 'password',
              rules: [
                { required: !0, message: b['login.form.password.errMsg'] },
              ],
              children: o(Qe.Password, {
                prefix: o(Lo, {}),
                placeholder: b['login.form.password.placeholder'],
                onPressEnter: R,
              }),
            }),
            o(be.Item, {
              children: g('div', {
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
                      prefix: o($o, {}),
                      maxLength: 5,
                      placeholder: b['login.form.captcha.placeholder'],
                      onPressEnter: R,
                    }),
                  }),
                  o(ee, {
                    type: 'text',
                    loading: u,
                    className: D['login-form-captcha-btn'],
                    onClick: E,
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
            g(Rt, {
              size: 16,
              direction: 'vertical',
              children: [
                g('div', {
                  className: D['login-form-password-actions'],
                  children: [
                    o(qo, {
                      checked: h,
                      onChange: c,
                      children: b['login.form.rememberPassword'],
                    }),
                    o(Oo, { children: b['login.form.forgetPassword'] }),
                  ],
                }),
                o(ee, {
                  type: 'primary',
                  long: !0,
                  onClick: R,
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
var $s = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Rn,
});
function Mn() {
  const e = V(Tn),
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
  return o(Uo, {
    className: D.carousel,
    animation: 'fade',
    children: t.map((n, r) =>
      o(
        'div',
        {
          children: g('div', {
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
var qs = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Mn,
});
function Ve() {
  const { lang: e, systemProfile: t } = i.exports.useContext(oe),
    n = Pe(t, e);
  return (
    i.exports.useEffect(() => {
      document.body.setAttribute('arco-theme', 'light');
    }, []),
    g('div', {
      className: D.container,
      children: [
        g('div', {
          className: D.logo,
          children: [
            o(un, { profile: t, className: D['logo-image'], alt: n }),
            o('div', { className: D['logo-text'], children: n }),
          ],
        }),
        o('div', {
          className: D.banner,
          children: o('div', {
            className: D['banner-inner'],
            children: o(Mn, {}),
          }),
        }),
        g('div', {
          className: D.content,
          children: [
            o('div', { className: D['content-inner'], children: o(Rn, {}) }),
            o('div', { className: D.footer, children: o(yn, {}) }),
          ],
        }),
      ],
    })
  );
}
Ve.displayName = 'LoginPage';
var Os = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: Ve,
});
const Us = {
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
  zs = '_wrapper_jqkv8_1',
  js = '_result_jqkv8_6';
var ft = { wrapper: zs, result: js };
function yt() {
  const e = V(Us),
    t = Ze();
  return o('div', {
    className: ft.container,
    children: o('div', {
      className: ft.wrapper,
      children: o(It, {
        className: ft.result,
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
function Ln() {
  return !!localStorage.getItem(de);
}
var $n = (e) => {
  const { mock: t = !1, setup: n } = e;
  t !== !1 && n();
};
he ||
  ((ne.XHR.prototype.withCredentials = !0),
  $n({
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
          permissions: ys(e),
        })
      ),
        ne.mock(new RegExp('/api/user/login'), (t) => {
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
const qn = [],
  Ks = () =>
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
    ].map((e) => P(p({}, e), { status: qn.indexOf(e.id) === -1 ? 0 : 1 }));
$n({
  setup: () => {
    ne.mock(new RegExp('/api/message/list'), () => Ks()),
      ne.mock(new RegExp('/api/message/read'), (e) => {
        const { ids: t } = JSON.parse(e.body);
        return qn.push(...(t || [])), !0;
      });
  },
});
he || ne.setup({ timeout: '500-1500' });
const fe = zo(or);
function Ws() {
  const e = Xe(),
    [t, n] = Ce('arco-lang', 'en-US'),
    [r, s] = Ce('arco-theme', 'light'),
    u = me((m) => m.settings),
    [a, l] = i.exports.useState(() => H(mr() || _e)),
    d = Ot.useRef();
  function C(m) {
    l(H(m));
  }
  const y = i.exports.useCallback(
    async () => (
      d.current ||
        (d.current = Bs()
          .then((m) => {
            const v = H(m);
            return C(v), Ln() && an(v), v;
          })
          .catch(() => {})
          .finally(() => {
            d.current = void 0;
          })),
      d.current
    ),
    []
  );
  function _(m) {
    pe(m),
      n(m.lang),
      s(m.theme),
      e({ type: 'update-settings', payload: { settings: m.settings } }),
      e({ type: 'update-theme', payload: { theme: m.theme } }),
      Ue(m.theme, m.settings.themeColor);
  }
  function I(m) {
    const v = pe(P(p({}, qe()), { lang: m }));
    n(v.lang);
  }
  function N(m) {
    const v = pe(P(p({}, qe()), { theme: m }));
    s(v.theme),
      e({ type: 'update-theme', payload: { theme: v.theme } }),
      Ue(v.theme, v.settings.themeColor);
  }
  function b() {
    switch (t) {
      case 'zh-CN':
        return Xt;
      case 'en-US':
        return Jo;
      default:
        return Xt;
    }
  }
  async function B() {
    fe.dispatch({ type: 'update-userInfo', payload: { userLoading: !0 } });
    const m = re();
    try {
      const v = m ? await mt(m) : null;
      fe.dispatch({
        type: 'update-userInfo',
        payload: {
          userInfo: P(
            p(p({}, Te() || {}), (v == null ? void 0 : v.profile) || {}),
            {
              permissions: (v == null ? void 0 : v.permissions) || [],
              fieldPolicies: (v == null ? void 0 : v.fieldPolicies) || {},
            }
          ),
          userLoading: !1,
        },
      });
    } catch {
      fe.dispatch({
        type: 'update-userInfo',
        payload: { userInfo: Te() || { permissions: {} }, userLoading: !1 },
      });
    }
  }
  i.exports.useEffect(() => {
    const m = window.location.pathname,
      v = m === '/login' || m.endsWith('/login'),
      G = m === '/403' || m.endsWith('/403');
    if (Ln()) {
      if (!re(m) && !v && !G) {
        const E = nt();
        window.location.replace(E ? `/${E}${m}` : '/403');
        return;
      }
      const c = qe();
      pe(c),
        n(c.lang),
        s(c.theme),
        fe.dispatch({
          type: 'update-settings',
          payload: { settings: c.settings },
        }),
        fe.dispatch({ type: 'update-theme', payload: { theme: c.theme } }),
        Ue(c.theme, c.settings.themeColor),
        B();
    } else y(), !v && !G && (window.location.pathname = '/login');
  }, []),
    i.exports.useEffect(() => {
      (document.title = ir(a, t)), lr(a);
    }, [t, a]),
    i.exports.useEffect(() => {
      Ue(r, u.themeColor), e({ type: 'update-theme', payload: { theme: r } });
    }, [e, u.themeColor, r]);
  const z = {
    lang: t,
    setLang: I,
    theme: r,
    setTheme: N,
    applyUserTheme: _,
    systemProfile: a,
    setSystemProfile: C,
    refreshSystemProfile: y,
  };
  return o(Wo, {
    children: o(Vo, {
      locale: b(),
      componentConfig: {
        Card: { bordered: !1 },
        List: { bordered: !1 },
        Table: { border: !1 },
      },
      children: o(oe.Provider, {
        value: z,
        children: o(Vt.exports.AliveScope, {
          children: g(Gt, {
            children: [
              o(te, { path: '/login', component: Ve }),
              o(te, { path: '/:tenantCode/login', component: Ve }),
              o(te, { path: '/403', component: yt }),
              o(te, { path: '/:tenantCode/403', component: yt }),
              o(te, { path: '/', component: Ns }),
            ],
          }),
        }),
      }),
    }),
  });
}
function Vs() {
  return o(Ko, { store: fe, children: o(Ws, {}) });
}
jo.render(o(Vs, {}), document.getElementById('root'));
export {
  _e as D,
  oe as G,
  rn as a,
  Hs as b,
  Xs as c,
  ps as d,
  ue as e,
  Ys as g,
  H as n,
  $n as s,
  V as u,
  an as w,
};
