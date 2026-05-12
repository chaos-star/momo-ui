import {
  r as t,
  a as f,
  av as m,
  j as o,
  T as x,
  h as g,
  k as h,
} from './vendor.64a7fdcd.js';
/* empty css              */ import { D as y } from './index.6eae506e.js';
import { u as F } from './index.6c1213a0.js';
import { i as j } from './index.9464998a.js';
function D() {
  const r = F(j),
    [s, n] = t.exports.useState([]),
    [i, a] = t.exports.useState(!0),
    l = () => {
      a(!0),
        h
          .get('/api/workplace/content-percentage')
          .then((e) => {
            n(e.data);
          })
          .finally(() => {
            a(!1);
          });
    };
  return (
    t.exports.useEffect(() => {
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
                style: { fontSize: '16px', color: 'rgb(--var(color-text-1))' },
                formatter: (e, c) => {
                  const d = c.reduce((p, u) => p + u.count, 0);
                  return Number(d).toLocaleString();
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
