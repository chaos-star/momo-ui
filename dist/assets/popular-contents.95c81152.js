import {
  r as s,
  i as v,
  j as a,
  T as u,
  aH as g,
  aI as y,
  as as j,
  ai as k,
  aJ as w,
  aK as D,
} from './vendor.aa22cee8.js';
/* empty css              */ import { u as E } from './index.7cc85f9b.js';
import { i as V } from './index.9464998a.js';
const C = '_symbol_okjyb_1';
var S = { symbol: C },
  t =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/dashboard/workplace/popular-contents.tsx';
function _() {
  const r = E(V),
    [l, c] = s.exports.useState(0),
    [m, p] = s.exports.useState([]),
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
            p(e.data.list), N(e.data.total);
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
        a.exports.jsxDEV(
          u.Paragraph,
          { style: { margin: 0 }, ellipsis: !0, children: e },
          void 0,
          !1,
          { fileName: t, lineNumber: 46, columnNumber: 9 },
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
        a.exports.jsxDEV(
          'span',
          {
            children: [
              `${(e * 100).toFixed(2)}%`,
              a.exports.jsxDEV(
                'span',
                {
                  className: S.symbol,
                  children:
                    e < 0
                      ? a.exports.jsxDEV(
                          g,
                          { style: { color: 'rgb(var(--green-6))' } },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 70, columnNumber: 17 },
                          this
                        )
                      : a.exports.jsxDEV(
                          y,
                          { style: { color: 'rgb(var(--red-6))' } },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 72, columnNumber: 17 },
                          this
                        ),
                },
                void 0,
                !1,
                { fileName: t, lineNumber: 68, columnNumber: 13 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: t, lineNumber: 66, columnNumber: 11 },
          this
        ),
    },
  ];
  return a.exports.jsxDEV(
    j,
    {
      children: [
        a.exports.jsxDEV(
          'div',
          {
            style: { display: 'flex', justifyContent: 'space-between' },
            children: [
              a.exports.jsxDEV(
                u.Title,
                { heading: 6, children: r['workplace.popularContents'] },
                void 0,
                !1,
                { fileName: t, lineNumber: 84, columnNumber: 9 },
                this
              ),
              a.exports.jsxDEV(
                k,
                { children: r['workplace.seeMore'] },
                void 0,
                !1,
                { fileName: t, lineNumber: 87, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: t, lineNumber: 83, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          w.Group,
          {
            type: 'button',
            value: l,
            onChange: c,
            options: [
              { label: r['workplace.text'], value: 0 },
              { label: r['workplace.image'], value: 1 },
              { label: r['workplace.video'], value: 2 },
            ],
            style: { marginBottom: 16 },
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 89, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          D,
          {
            rowKey: 'rank',
            columns: f,
            data: m,
            loading: d,
            tableLayoutFixed: !0,
            onChange: (e) => {
              x(e.current);
            },
            pagination: { total: b, current: o, pageSize: 5, simple: !0 },
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 100, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: t, lineNumber: 82, columnNumber: 5 },
    this
  );
}
export { _ as default };
