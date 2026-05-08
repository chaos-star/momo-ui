import {
  al as e,
  a7 as B,
  a as n,
  S as i,
  j as u,
  aG as m,
} from './vendor.0a91e66f.js';
import C from './overview.27b3f13d.js';
import E from './popular-contents.9dc50daf.js';
import d from './content-percentage.a4e51a61.js';
import D from './shortcuts.ea86f827.js';
import f from './announcement.3a6e14ee.js';
import g from './carousel.ee95df84.js';
import k from './docs.e3b9ca96.js';
import { s as A } from './index.1218169c.js';
/* empty css               */ /* empty css              */ import './index.78bb87cb.js';
import './index.9464998a.js';
const y = '_banner_14uhd_1',
  h = '_content_14uhd_5',
  j = '_right_14uhd_9',
  w = '_panel_14uhd_12';
var v = { banner: y, content: h, right: j, panel: w };
A({
  setup: () => {
    e.mock(new RegExp('/api/workplace/overview-content'), () => {
      const t = new Date().getFullYear();
      return {
        allContents: '373.5w+',
        liveContents: '368',
        increaseComments: '8874',
        growthRate: '2.8%',
        chartData: (() =>
          new Array(12).fill(0).map((a, c) => ({
            date: `${t}-${c + 1}`,
            count: e.Random.natural(2e4, 75e3),
          })))(),
      };
    });
    const o = () => {
        const { list: t } = e.mock({
          'list|100': [
            {
              'rank|+1': 1,
              title: () =>
                e.Random.pick([
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
        return t;
      },
      p = o(),
      l = o(),
      F = o();
    e.mock(new RegExp('/api/workplace/popular-contents'), (t) => {
      const {
        page: r = 1,
        pageSize: a = 5,
        category: c = 0,
      } = B.parseUrl(t.url).query;
      return {
        list: [p, l, F][Number(c)].slice((r - 1) * a, r * a),
        total: 100,
      };
    }),
      e.mock(new RegExp('/api/workplace/content-percentage'), () => [
        { type: '\u7EAF\u6587\u672C', count: 148564, percent: 0.16 },
        { type: '\u56FE\u6587\u7C7B', count: 334271, percent: 0.36 },
        { type: '\u89C6\u9891\u7C7B', count: 445695, percent: 0.48 },
      ]),
      e.mock(new RegExp('/api/workplace/announcement'), () => [
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
const { Row: x, Col: s } = m,
  _ = 16;
function U() {
  return n(i, {
    size: 16,
    align: 'start',
    children: [
      n(i, {
        size: 16,
        direction: 'vertical',
        children: [
          u(C, {}),
          n(x, {
            gutter: _,
            children: [
              u(s, { span: 12, children: u(E, {}) }),
              u(s, { span: 12, children: u(d, {}) }),
            ],
          }),
        ],
      }),
      n(i, {
        className: v.right,
        size: 16,
        direction: 'vertical',
        children: [u(D, {}), u(g, {}), u(f, {}), u(k, {})],
      }),
    ],
  });
}
export { U as default };
