import { a as t, av as c, j as e, T as d, al as r } from './vendor.aac6daa3.js';
/* empty css              */ import { u as o } from './index.afddc419.js';
import { i as l } from './index.9464998a.js';
const p = '_docs_lmqvd_1',
  m = '_link_lmqvd_5';
var i = { docs: p, link: m };
const h = {
  react: 'https://arco.design/react/docs/start',
  vue: 'https://arco.design/vue/docs/start',
  designLab: 'https://arco.design/themes',
  materialMarket: 'https://arco.design/material/',
};
function v() {
  const s = o(l);
  return t(c, {
    children: [
      t('div', {
        style: { display: 'flex', justifyContent: 'space-between' },
        children: [
          e(d.Title, { heading: 6, children: s['workplace.docs'] }),
          e(r, { children: s['workplace.seeMore'] }),
        ],
      }),
      e('div', {
        className: i.docs,
        children: Object.entries(h).map(([a, n]) =>
          e(
            r,
            {
              className: i.link,
              href: n,
              target: '_blank',
              children: s[`workplace.${a}`],
            },
            a
          )
        ),
      }),
    ],
  });
}
export { v as default };
