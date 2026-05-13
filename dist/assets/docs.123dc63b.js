import { j as e, at as l, T as n, aj as r } from './vendor.3ac9a823.js';
/* empty css              */ import { u as c } from './index.2a9369a5.js';
import { i as m } from './index.9464998a.js';
const d = '_docs_lmqvd_1',
  u = '_link_lmqvd_5';
var t = { docs: d, link: u },
  s =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/dashboard/workplace/docs.tsx';
const p = {
  react: 'https://arco.design/react/docs/start',
  vue: 'https://arco.design/vue/docs/start',
  designLab: 'https://arco.design/themes',
  materialMarket: 'https://arco.design/material/',
};
function f() {
  const a = c(m);
  return e.exports.jsxDEV(
    l,
    {
      children: [
        e.exports.jsxDEV(
          'div',
          {
            style: { display: 'flex', justifyContent: 'space-between' },
            children: [
              e.exports.jsxDEV(
                n.Title,
                { heading: 6, children: a['workplace.docs'] },
                void 0,
                !1,
                { fileName: s, lineNumber: 19, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                r,
                { children: a['workplace.seeMore'] },
                void 0,
                !1,
                { fileName: s, lineNumber: 20, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: s, lineNumber: 18, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: t.docs,
            children: Object.entries(p).map(([i, o]) =>
              e.exports.jsxDEV(
                r,
                {
                  className: t.link,
                  href: o,
                  target: '_blank',
                  children: a[`workplace.${i}`],
                },
                i,
                !1,
                { fileName: s, lineNumber: 24, columnNumber: 11 },
                this
              )
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 22, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: s, lineNumber: 17, columnNumber: 5 },
    this
  );
}
export { f as default };
