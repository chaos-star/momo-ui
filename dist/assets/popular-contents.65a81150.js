import {
  r as s,
  i as v,
  j as t,
  T as u,
  aI as g,
  aJ as j,
  at as y,
  aj as k,
  aK as w,
  aL as D,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css              */ import { u as E } from './index.77883a3f.js';
import { i as V } from './index.9464998a.js';
const C = '_symbol_okjyb_1';
var S = { symbol: C },
  a =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/dashboard/workplace/popular-contents.tsx';
function F() {
  const r = E(V),
    [l, m] = s.exports.useState(0),
    [p, c] = s.exports.useState([]),
    [d, i] = s.exports.useState(!0),
    [o, x] = s.exports.useState(1),
    [b, N] = s.exports.useState(0),
    n = s.exports.useCallback(() => {
      i(!0),
        v
          .get(
            `/api/workplace/popular-contents?page=${o}&pageSize=5&category=${l}`
          )
          .then((e) => {
            c(e.data.list), N(e.data.total);
          })
          .finally(() => {
            i(!1);
          });
    }, [o, l]);
  s.exports.useEffect(() => {
    n();
  }, [o, n]);
  const f = [
    { title: r['workplace.column.rank'], dataIndex: 'rank', width: 65 },
    {
      title: r['workplace.column.title'],
      dataIndex: 'title',
      render: (e) =>
        t.exports.jsxDEV(
          u.Paragraph,
          { style: { margin: 0 }, ellipsis: !0, children: e },
          void 0,
          !1,
          { fileName: a, lineNumber: 46, columnNumber: 9 },
          this
        ),
    },
    {
      title: r['workplace.column.pv'],
      dataIndex: 'pv',
      width: 100,
      render: (e) => `${e / 1e3}k`,
    },
    {
      title: r['workplace.column.increase'],
      dataIndex: 'increase',
      sorter: (e, h) => e.increase - h.increase,
      width: 110,
      render: (e) =>
        t.exports.jsxDEV(
          'span',
          {
            children: [
              `${(e * 100).toFixed(2)}%`,
              t.exports.jsxDEV(
                'span',
                {
                  className: S.symbol,
                  children:
                    e < 0
                      ? t.exports.jsxDEV(
                          g,
                          { style: { color: 'rgb(var(--green-6))' } },
                          void 0,
                          !1,
                          { fileName: a, lineNumber: 70, columnNumber: 17 },
                          this
                        )
                      : t.exports.jsxDEV(
                          j,
                          { style: { color: 'rgb(var(--red-6))' } },
                          void 0,
                          !1,
                          { fileName: a, lineNumber: 72, columnNumber: 17 },
                          this
                        ),
                },
                void 0,
                !1,
                { fileName: a, lineNumber: 68, columnNumber: 13 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: a, lineNumber: 66, columnNumber: 11 },
          this
        ),
    },
  ];
  return t.exports.jsxDEV(
    y,
    {
      children: [
        t.exports.jsxDEV(
          'div',
          {
            style: { display: 'flex', justifyContent: 'space-between' },
            children: [
              t.exports.jsxDEV(
                u.Title,
                { heading: 6, children: r['workplace.popularContents'] },
                void 0,
                !1,
                { fileName: a, lineNumber: 84, columnNumber: 9 },
                this
              ),
              t.exports.jsxDEV(
                k,
                { children: r['workplace.seeMore'] },
                void 0,
                !1,
                { fileName: a, lineNumber: 87, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: a, lineNumber: 83, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          w.Group,
          {
            type: 'button',
            value: l,
            onChange: m,
            options: [
              { label: r['workplace.text'], value: 0 },
              { label: r['workplace.image'], value: 1 },
              { label: r['workplace.video'], value: 2 },
            ],
            style: { marginBottom: 16 },
          },
          void 0,
          !1,
          { fileName: a, lineNumber: 89, columnNumber: 7 },
          this
        ),
        t.exports.jsxDEV(
          D,
          {
            rowKey: 'rank',
            columns: f,
            data: p,
            loading: d,
            tableLayoutFixed: !0,
            onChange: (e) => {
              x(e.current);
            },
            pagination: { total: b, current: o, pageSize: 5, simple: !0 },
          },
          void 0,
          !1,
          { fileName: a, lineNumber: 100, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: a, lineNumber: 82, columnNumber: 5 },
    this
  );
}
export { F as default };
