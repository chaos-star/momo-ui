import {
  r as e,
  a as f,
  av as m,
  j as o,
  T as x,
  h as g,
  k as h,
} from './vendor.44459b16.js';
/* empty css              */ import { D as y } from './index.9baac0dc.js';
import { u as b } from './index.97399a5e.js';
import { i as F } from './index.9464998a.js';
function D() {
  const r = b(F),
    [s, n] = e.exports.useState([]),
    [i, a] = e.exports.useState(!0),
    l = () => {
      a(!0),
        h
          .get('/api/workplace/content-percentage')
          .then((t) => {
            n(t.data);
          })
          .finally(() => {
            a(!1);
          });
    };
  return (
    e.exports.useEffect(() => {
      l();
    }, []),
    f(m, {
      children: [
        o(x.Title, { heading: 6, children: r['workplace.contentPercentage'] }),
        o(g, {
          loading: i,
          style: { display: 'block' },
          children: o(y, {
            autoFit: !0,
            height: 340,
            data: s,
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
              formatter: (t) => `${(t.percent * 100).toFixed(0)}%`,
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
                style: { fontSize: '16px', color: 'rgb(--var(color-text-1))' },
                formatter: (t, c) => {
                  const p = c.reduce((d, u) => d + u.count, 0);
                  return Number(p).toLocaleString();
                },
              },
            },
          }),
        }),
      ],
    })
  );
}
export { D as default };
