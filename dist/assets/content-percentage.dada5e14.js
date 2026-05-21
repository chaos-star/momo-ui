import {
  r,
  j as t,
  at as f,
  T as x,
  f as b,
  i as g,
} from './vendor.3821b0be.js';
/* empty css              */ import { D as h } from './index.9da8e5a8.js';
import { u as N } from './index.77883a3f.js';
import { i as j } from './index.9464998a.js';
var o =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/dashboard/workplace/content-percentage.tsx';
function S() {
  const s = N(j),
    [i, n] = r.exports.useState([]),
    [l, a] = r.exports.useState(!0),
    c = () => {
      a(!0),
        g
          .get('/api/workplace/content-percentage')
          .then((e) => {
            n(e.data);
          })
          .finally(() => {
            a(!1);
          });
    };
  return (
    r.exports.useEffect(() => {
      c();
    }, []),
    t.exports.jsxDEV(
      f,
      {
        children: [
          t.exports.jsxDEV(
            x.Title,
            { heading: 6, children: s['workplace.contentPercentage'] },
            void 0,
            !1,
            { fileName: o, lineNumber: 31, columnNumber: 7 },
            this
          ),
          t.exports.jsxDEV(
            b,
            {
              loading: l,
              style: { display: 'block' },
              children: t.exports.jsxDEV(
                h,
                {
                  autoFit: !0,
                  height: 340,
                  data: i,
                  radius: 0.7,
                  innerRadius: 0.65,
                  angleField: 'count',
                  colorField: 'type',
                  color: ['#21CCFF', '#313CA9', '#249EFF'],
                  interactions: [{ type: 'element-single-selected' }],
                  tooltip: { showMarkers: !1 },
                  label: {
                    visible: !0,
                    type: 'spider',
                    formatter: (e) => `${(e.percent * 100).toFixed(0)}%`,
                    style: { fill: '#86909C', fontSize: 14 },
                  },
                  legend: { position: 'bottom' },
                  statistic: {
                    title: {
                      style: {
                        fontSize: '14px',
                        lineHeight: 2,
                        color: 'rgb(--var(color-text-1))',
                      },
                      formatter: () => '\u5185\u5BB9\u91CF',
                    },
                    content: {
                      style: {
                        fontSize: '16px',
                        color: 'rgb(--var(color-text-1))',
                      },
                      formatter: (e, u) => {
                        const p = u.reduce((m, d) => m + d.count, 0);
                        return Number(p).toLocaleString();
                      },
                    },
                  },
                },
                void 0,
                !1,
                { fileName: o, lineNumber: 35, columnNumber: 9 },
                this
              ),
            },
            void 0,
            !1,
            { fileName: o, lineNumber: 34, columnNumber: 7 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: o, lineNumber: 30, columnNumber: 5 },
      this
    )
  );
}
export { S as default };
