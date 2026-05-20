import {
  r as m,
  ag as r,
  a as l,
  j as e,
  ah as c,
  B as t,
  aU as p,
  $ as f,
  aI as C,
} from './vendor.44459b16.js';
import { G as F } from './index.2cec1040.js';
import { s } from './index.module.078c7882.js';
const { Row: I, Col: u } = C;
function j(o) {
  const { lang: i } = m.exports.useContext(F),
    [a] = r.useForm(),
    n = i === 'zh-CN' ? 8 : 12,
    d = () => o.onSearch(a.getFieldsValue()),
    h = () => {
      a.resetFields(), o.onSearch({});
    };
  return l('div', {
    className: s['search-form-wrapper'],
    children: [
      e(r, {
        form: a,
        className: s['search-form'],
        labelAlign: 'left',
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
        children: l(I, {
          gutter: 24,
          children: [
            e(u, {
              span: n,
              children: e(r.Item, {
                label: '\u7528\u6237\u540D',
                field: 'username',
                children: e(c, {
                  allowClear: !0,
                  placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
                }),
              }),
            }),
            e(u, {
              span: n,
              children: e(r.Item, {
                label: '\u7528\u6237 ID',
                field: 'userId',
                children: e(c, {
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
          e(t, {
            type: 'primary',
            icon: e(p, {}),
            onClick: d,
            children: '\u67E5\u8BE2',
          }),
          e(t, { icon: e(f, {}), onClick: h, children: '\u91CD\u7F6E' }),
        ],
      }),
    ],
  });
}
export { j as default };
