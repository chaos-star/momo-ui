import {
  j as e,
  e as o,
  aM as r,
  t as a,
  aN as u,
  aO as N,
  at as d,
  T as x,
  aj as f,
  D as b,
  M as p,
} from './vendor.c4f0d1e5.js';
/* empty css              */ import { u as h } from './index.1f1355a3.js';
import { i as v } from './index.9464998a.js';
const j = '_shortcuts_f9b1x_1',
  k = '_item_f9b1x_5',
  D = '_icon_f9b1x_14',
  E = '_title_f9b1x_20',
  V = '_recent_f9b1x_41';
var n = { shortcuts: j, item: k, icon: D, title: E, recent: V },
  i =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/dashboard/workplace/shortcuts.tsx';
function w() {
  const t = h(v),
    m = [
      {
        title: t['workplace.contentMgmt'],
        key: 'Content Management',
        icon: e.exports.jsxDEV(
          o,
          {},
          void 0,
          !1,
          { fileName: i, lineNumber: 27, columnNumber: 13 },
          this
        ),
      },
      {
        title: t['workplace.contentStatistic'],
        key: 'Content Statistic',
        icon: e.exports.jsxDEV(
          r,
          {},
          void 0,
          !1,
          { fileName: i, lineNumber: 32, columnNumber: 13 },
          this
        ),
      },
      {
        title: t['workplace.advancedMgmt'],
        key: 'Advanced Management',
        icon: e.exports.jsxDEV(
          a,
          {},
          void 0,
          !1,
          { fileName: i, lineNumber: 37, columnNumber: 13 },
          this
        ),
      },
      {
        title: t['workplace.onlinePromotion'],
        key: 'Online Promotion',
        icon: e.exports.jsxDEV(
          u,
          {},
          void 0,
          !1,
          { fileName: i, lineNumber: 42, columnNumber: 13 },
          this
        ),
      },
      {
        title: t['workplace.marketing'],
        key: 'Marketing',
        icon: e.exports.jsxDEV(
          N,
          {},
          void 0,
          !1,
          { fileName: i, lineNumber: 47, columnNumber: 13 },
          this
        ),
      },
    ],
    c = [
      {
        title: t['workplace.contentStatistic'],
        key: 'Content Statistic',
        icon: e.exports.jsxDEV(
          r,
          {},
          void 0,
          !1,
          { fileName: i, lineNumber: 55, columnNumber: 13 },
          this
        ),
      },
      {
        title: t['workplace.contentMgmt'],
        key: 'Content Management',
        icon: e.exports.jsxDEV(
          o,
          {},
          void 0,
          !1,
          { fileName: i, lineNumber: 60, columnNumber: 13 },
          this
        ),
      },
      {
        title: t['workplace.advancedMgmt'],
        key: 'Advanced Management',
        icon: e.exports.jsxDEV(
          a,
          {},
          void 0,
          !1,
          { fileName: i, lineNumber: 65, columnNumber: 13 },
          this
        ),
      },
    ];
  function l(s) {
    p.info({
      content: e.exports.jsxDEV(
        'span',
        {
          children: [
            'You clicked ',
            e.exports.jsxDEV(
              'b',
              { children: s },
              void 0,
              !1,
              { fileName: i, lineNumber: 73, columnNumber: 23 },
              this
            ),
          ],
        },
        void 0,
        !0,
        { fileName: i, lineNumber: 72, columnNumber: 9 },
        this
      ),
    });
  }
  return e.exports.jsxDEV(
    d,
    {
      children: [
        e.exports.jsxDEV(
          'div',
          {
            style: { display: 'flex', justifyContent: 'space-between' },
            children: [
              e.exports.jsxDEV(
                x.Title,
                { heading: 6, children: t['workplace.shortcuts'] },
                void 0,
                !1,
                { fileName: i, lineNumber: 82, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                f,
                { children: t['workplace.seeMore'] },
                void 0,
                !1,
                { fileName: i, lineNumber: 85, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: i, lineNumber: 81, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: n.shortcuts,
            children: m.map((s) =>
              e.exports.jsxDEV(
                'div',
                {
                  className: n.item,
                  onClick: () => l(s.key),
                  children: [
                    e.exports.jsxDEV(
                      'div',
                      { className: n.icon, children: s.icon },
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 94, columnNumber: 13 },
                      this
                    ),
                    e.exports.jsxDEV(
                      'div',
                      { className: n.title, children: s.title },
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 95, columnNumber: 13 },
                      this
                    ),
                  ],
                },
                s.key,
                !0,
                { fileName: i, lineNumber: 89, columnNumber: 11 },
                this
              )
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 87, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          b,
          {},
          void 0,
          !1,
          { fileName: i, lineNumber: 99, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          { className: n.recent, children: t['workplace.recent'] },
          void 0,
          !1,
          { fileName: i, lineNumber: 100, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: n.shortcuts,
            children: c.map((s) =>
              e.exports.jsxDEV(
                'div',
                {
                  className: n.item,
                  onClick: () => l(s.key),
                  children: [
                    e.exports.jsxDEV(
                      'div',
                      { className: n.icon, children: s.icon },
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 108, columnNumber: 13 },
                      this
                    ),
                    e.exports.jsxDEV(
                      'div',
                      { className: n.title, children: s.title },
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 109, columnNumber: 13 },
                      this
                    ),
                  ],
                },
                s.key,
                !0,
                { fileName: i, lineNumber: 103, columnNumber: 11 },
                this
              )
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 101, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: i, lineNumber: 80, columnNumber: 5 },
    this
  );
}
export { w as default };
