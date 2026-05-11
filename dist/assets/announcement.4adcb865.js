import {
  r as n,
  a as s,
  av as p,
  j as a,
  T as m,
  al as f,
  aw as h,
  b as k,
  k as y,
} from './vendor.aac6daa3.js';
/* empty css               */ /* empty css              */ import { u as x } from './index.afddc419.js';
import { i as g } from './index.9464998a.js';
const j = '_item_17fky_1',
  w = '_link_17fky_8';
var r = { item: j, link: w };
function L() {
  const [o, c] = n.exports.useState([]),
    [l, i] = n.exports.useState(!0),
    t = x(g),
    d = () => {
      i(!0),
        y
          .get('/api/workplace/announcement')
          .then((e) => {
            c(e.data);
          })
          .finally(() => {
            i(!1);
          });
    };
  n.exports.useEffect(() => {
    d();
  }, []);
  function u(e) {
    switch (e) {
      case 'activity':
        return 'orangered';
      case 'info':
        return 'cyan';
      case 'notice':
        return 'arcoblue';
      default:
        return 'arcoblue';
    }
  }
  return s(p, {
    children: [
      s('div', {
        style: { display: 'flex', justifyContent: 'space-between' },
        children: [
          a(m.Title, { heading: 6, children: t['workplace.announcement'] }),
          a(f, { children: t['workplace.seeMore'] }),
        ],
      }),
      a(h, {
        loading: l,
        text: { rows: 5, width: '100%' },
        animation: !0,
        children: a('div', {
          children: o.map((e) =>
            s(
              'div',
              {
                className: r.item,
                children: [
                  a(k, {
                    color: u(e.type),
                    size: 'small',
                    children: t[`workplace.${e.type}`],
                  }),
                  a('span', { className: r.link, children: e.content }),
                ],
              },
              e.key
            )
          ),
        }),
      }),
    ],
  });
}
export { L as default };
