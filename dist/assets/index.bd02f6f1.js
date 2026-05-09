import { al as t, a5 as E, j as e, aH as x } from './vendor.c4f0d1e5.js';
import d from './overview.f019b948.js';
import N from './popular-contents.f0ccf41d.js';
import f from './content-percentage.5a34d777.js';
import F from './shortcuts.683c7565.js';
import B from './announcement.1de93c9b.js';
import D from './carousel.3c91a035.js';
import C from './docs.45dd779c.js';
import { s as b } from './index.1f1355a3.js';
/* empty css               */ /* empty css              */ import './index.91c0c8fa.js';
import './index.9464998a.js';
const h = '_banner_i5y7o_1',
  j = '_content_i5y7o_5',
  v = '_workplace_i5y7o_9',
  k = '_main_i5y7o_16',
  y = '_charts_i5y7o_20',
  g = '_right_i5y7o_23',
  _ = '_panel_i5y7o_30';
var o = {
  banner: h,
  content: j,
  workplace: v,
  main: k,
  charts: y,
  right: g,
  panel: _,
};
b({
  setup: () => {
    t.mock(new RegExp('/api/workplace/overview-content'), () => {
      const n = new Date().getFullYear();
      return {
        allContents: '373.5w+',
        liveContents: '368',
        increaseComments: '8874',
        growthRate: '2.8%',
        chartData: (() =>
          new Array(12).fill(0).map((s, a) => ({
            date: `${n}-${a + 1}`,
            count: t.Random.natural(2e4, 75e3),
          })))(),
      };
    });
    const r = () => {
        const { list: n } = t.mock({
          'list|100': [
            {
              'rank|+1': 1,
              title: () =>
                t.Random.pick([
                  '\u7ECF\u6D4E\u65E5\u62A5\uFF1A\u8D22\u653F\u653F\u7B56\u8981\u7CBE\u51C6\u63D0\u5347\u6548\u80FD',
                  '\u201C\u53CC12\u201D\u9047\u51B7\u6D88\u8D39\u8005\u538C\u5026\u4E86\u7535\u5546\u5E73\u53F0\u7684\u4FC3\u9500\u201C\u5957\u8DEF\u201D',
                  '\u81F4\u656C\u575A\u5B88\u6218\u201C\u75AB\u201D\u4E00\u7EBF\u7684\u793E\u533A\u5DE5\u4F5C\u8005',
                  '\u666E\u9AD8\u8FD8\u662F\u804C\u9AD8\uFF1F\u5BB6\u957F\u4EEC\u9677\u5165\u9009\u6821\u96BE\u9898',
                ]),
              pv: function () {
                return 5e5 - 3200 * this.rank;
              },
              increase: '@float(-1, 1)',
            },
          ],
        });
        return n;
      },
      l = r(),
      m = r(),
      p = r();
    t.mock(new RegExp('/api/workplace/popular-contents'), (n) => {
      const {
        page: i = 1,
        pageSize: s = 5,
        category: a = 0,
      } = E.parseUrl(n.url).query;
      return {
        list: [l, m, p][Number(a)].slice((i - 1) * s, i * s),
        total: 100,
      };
    }),
      t.mock(new RegExp('/api/workplace/content-percentage'), () => [
        { type: '\u7EAF\u6587\u672C', count: 148564, percent: 0.16 },
        { type: '\u56FE\u6587\u7C7B', count: 334271, percent: 0.36 },
        { type: '\u89C6\u9891\u7C7B', count: 445695, percent: 0.48 },
      ]),
      t.mock(new RegExp('/api/workplace/announcement'), () => [
        {
          type: 'activity',
          key: '1',
          content: '\u5185\u5BB9\u6700\u65B0\u4F18\u60E0\u6D3B\u52A8',
        },
        {
          type: 'info',
          key: '2',
          content:
            '\u65B0\u589E\u5185\u5BB9\u5C1A\u672A\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002',
        },
        {
          type: 'notice',
          key: '3',
          content:
            '\u5F53\u524D\u4EA7\u54C1\u8BD5\u7528\u671F\u5373\u5C06\u7ED3\u675F\uFF0C\u5982\u9700\u7EED\u8D39\u8BF7\u70B9\u51FB\u67E5\u770B\u3002',
        },
        {
          type: 'notice',
          key: '4',
          content:
            '1 \u6708\u65B0\u7CFB\u7EDF\u5347\u7EA7\u8BA1\u5212\u901A\u77E5',
        },
        {
          type: 'info',
          key: '5',
          content:
            '\u65B0\u589E\u5185\u5BB9\u5DF2\u7ECF\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002',
        },
      ]);
  },
});
var u =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/dashboard/workplace/index.tsx';
const { Row: w, Col: c } = x,
  A = 16;
function T() {
  return e.exports.jsxDEV(
    'div',
    {
      className: o.workplace,
      children: [
        e.exports.jsxDEV(
          'div',
          {
            className: o.main,
            children: [
              e.exports.jsxDEV(
                d,
                {},
                void 0,
                !1,
                { fileName: u, lineNumber: 21, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                w,
                {
                  gutter: A,
                  className: o.charts,
                  children: [
                    e.exports.jsxDEV(
                      c,
                      {
                        xs: 24,
                        sm: 24,
                        md: 24,
                        lg: 12,
                        xl: 12,
                        xxl: 12,
                        children: e.exports.jsxDEV(
                          N,
                          {},
                          void 0,
                          !1,
                          { fileName: u, lineNumber: 24, columnNumber: 13 },
                          this
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 23, columnNumber: 11 },
                      this
                    ),
                    e.exports.jsxDEV(
                      c,
                      {
                        xs: 24,
                        sm: 24,
                        md: 24,
                        lg: 12,
                        xl: 12,
                        xxl: 12,
                        children: e.exports.jsxDEV(
                          f,
                          {},
                          void 0,
                          !1,
                          { fileName: u, lineNumber: 27, columnNumber: 13 },
                          this
                        ),
                      },
                      void 0,
                      !1,
                      { fileName: u, lineNumber: 26, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: u, lineNumber: 22, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 20, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: o.right,
            children: [
              e.exports.jsxDEV(
                F,
                {},
                void 0,
                !1,
                { fileName: u, lineNumber: 32, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                D,
                {},
                void 0,
                !1,
                { fileName: u, lineNumber: 33, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                B,
                {},
                void 0,
                !1,
                { fileName: u, lineNumber: 34, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                C,
                {},
                void 0,
                !1,
                { fileName: u, lineNumber: 35, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: u, lineNumber: 31, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: u, lineNumber: 19, columnNumber: 5 },
    this
  );
}
export { T as default };
