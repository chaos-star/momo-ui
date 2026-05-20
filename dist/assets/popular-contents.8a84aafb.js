import {
  r,
  k as b,
  j as t,
  T as c,
  a as n,
  aJ as w,
  aK as v,
  av as f,
  al as j,
  aL as C,
  aM as S,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css              */ import { u as I } from './index.2cec1040.js';
import { i as T } from './index.9464998a.js';
const L = '_symbol_okjyb_1';
var $ = { symbol: L };
function M() {
  const a = I(T),
    [s, p] = r.exports.useState(0),
    [d, u] = r.exports.useState([]),
    [m, l] = r.exports.useState(!0),
    [o, x] = r.exports.useState(1),
    [y, g] = r.exports.useState(0),
    i = r.exports.useCallback(() => {
      l(!0),
        b
          .get(
            `/api/workplace/popular-contents?page=${o}&pageSize=5&category=${s}`
          )
          .then((e) => {
            u(e.data.list), g(e.data.total);
          })
          .finally(() => {
            l(!1);
          });
    }, [o, s]);
  r.exports.useEffect(() => {
    i();
  }, [o, i]);
  const k = [
    { title: a['workplace.column.rank'], dataIndex: 'rank', width: 65 },
    {
      title: a['workplace.column.title'],
      dataIndex: 'title',
      render: (e) =>
        t(c.Paragraph, { style: { margin: 0 }, ellipsis: !0, children: e }),
    },
    {
      title: a['workplace.column.pv'],
      dataIndex: 'pv',
      width: 100,
      render: (e) => `${e / 1e3}k`,
    },
    {
      title: a['workplace.column.increase'],
      dataIndex: 'increase',
      sorter: (e, h) => e.increase - h.increase,
      width: 110,
      render: (e) =>
        n('span', {
          children: [
            `${(e * 100).toFixed(2)}%`,
            t('span', {
              className: $.symbol,
              children:
                e < 0
                  ? t(w, { style: { color: 'rgb(var(--green-6))' } })
                  : t(v, { style: { color: 'rgb(var(--red-6))' } }),
            }),
          ],
        }),
    },
  ];
  return n(f, {
    children: [
      n('div', {
        style: { display: 'flex', justifyContent: 'space-between' },
        children: [
          t(c.Title, { heading: 6, children: a['workplace.popularContents'] }),
          t(j, { children: a['workplace.seeMore'] }),
        ],
      }),
      t(C.Group, {
        type: 'button',
        value: s,
        onChange: p,
        options: [
          { label: a['workplace.text'], value: 0 },
          { label: a['workplace.image'], value: 1 },
          { label: a['workplace.video'], value: 2 },
        ],
        style: { marginBottom: 16 },
      }),
      t(S, {
        rowKey: 'rank',
        columns: k,
        data: d,
        loading: m,
        tableLayoutFixed: !0,
        onChange: (e) => {
          x(e.current);
        },
        pagination: { total: y, current: o, pageSize: 5, simple: !0 },
      }),
    ],
  });
}
export { M as default };
