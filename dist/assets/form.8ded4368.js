import {
  r as m,
  ag as a,
  a as l,
  j as e,
  ah as t,
  B as c,
  aU as p,
  $ as f,
  aI as C,
} from './vendor.44459b16.js';
import { G as F } from './index.04d9875a.js';
import { s } from './index.module.078c7882.js';
const { Row: I, Col: u } = C;
function j(o) {
  const { lang: i } = m.exports.useContext(F),
    [r] = a.useForm(),
    n = i === 'zh-CN' ? 8 : 12,
    d = () => o.onSearch(r.getFieldsValue()),
    h = () => {
      r.resetFields(), o.onSearch({});
    };
  return l('div', {
    className: s['search-form-wrapper'],
    children: [
      e(a, {
        form: r,
        className: s['search-form'],
        labelAlign: 'left',
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
        children: l(I, {
          gutter: 24,
          children: [
            e(u, {
              span: n,
              children: e(a.Item, {
                label: '\u7528\u6237\u540D',
                field: 'username',
                children: e(t, {
                  allowClear: !0,
                  placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
                }),
              }),
            }),
            e(u, {
              span: n,
              children: e(a.Item, {
                label: '\u7528\u6237 ID',
                field: 'userId',
                children: e(t, {
                  allowClear: !0,
                  placeholder: '\u8BF7\u8F93\u5165\u7528\u6237 ID',
                }),
              }),
            }),
          ],
        }),
      }),
      l('div', {
        className: s['right-button'],
        children: [
          e(c, {
            type: 'primary',
            icon: e(p, {}),
            onClick: d,
            children: '\u67E5\u8BE2',
          }),
          e(c, { icon: e(f, {}), onClick: h, children: '\u91CD\u7F6E' }),
        ],
      }),
    ],
  });
}
export { j as default };
