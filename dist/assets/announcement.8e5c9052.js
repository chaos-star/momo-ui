import {
  r as i,
  j as e,
  at as d,
  T as p,
  aj as f,
  au as x,
  a as N,
  i as h,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css              */ import { u as b } from './index.77883a3f.js';
import { i as j } from './index.9464998a.js';
const v = '_item_17fky_1',
  k = '_link_17fky_8';
var r = { item: v, link: k },
  t =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/dashboard/workplace/announcement.tsx';
function V() {
  const [o, l] = i.exports.useState([]),
    [m, n] = i.exports.useState(!0),
    s = b(j),
    u = () => {
      n(!0),
        h
          .get('/api/workplace/announcement')
          .then((a) => {
            l(a.data);
          })
          .finally(() => {
            n(!1);
          });
    };
  i.exports.useEffect(() => {
    u();
  }, []);
  function c(a) {
    switch (a) {
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
                p.Title,
                { heading: 6, children: s['workplace.announcement'] },
                void 0,
                !1,
                { fileName: t, lineNumber: 46, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                f,
                { children: s['workplace.seeMore'] },
                void 0,
                !1,
                { fileName: t, lineNumber: 49, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: t, lineNumber: 45, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          x,
          {
            loading: m,
            text: { rows: 5, width: '100%' },
            animation: !0,
            children: e.exports.jsxDEV(
              'div',
              {
                children: o.map((a) =>
                  e.exports.jsxDEV(
                    'div',
                    {
                      className: r.item,
                      children: [
                        e.exports.jsxDEV(
                          N,
                          {
                            color: c(a.type),
                            size: 'small',
                            children: s[`workplace.${a.type}`],
                          },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 55, columnNumber: 15 },
                          this
                        ),
                        e.exports.jsxDEV(
                          'span',
                          { className: r.link, children: a.content },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 58, columnNumber: 15 },
                          this
                        ),
                      ],
                    },
                    a.key,
                    !0,
                    { fileName: t, lineNumber: 54, columnNumber: 13 },
                    this
                  )
                ),
              },
              void 0,
              !1,
              { fileName: t, lineNumber: 52, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 51, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: t, lineNumber: 44, columnNumber: 5 },
    this
  );
}
export { V as default };
