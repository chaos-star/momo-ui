import {
  r as d,
  ag as a,
  a as l,
  j as e,
  ah as u,
  B as c,
  aU as h,
  $ as m,
  aI as p,
} from './vendor.44459b16.js';
import { G as F } from './index.97399a5e.js';
import { s as o } from './index.module.0c4d71de.js';
const { Row: f, Col: t } = p;
function D(s) {
  const { lang: i } = d.exports.useContext(F),
    [r] = a.useForm(),
    n = i === 'zh-CN' ? 8 : 12;
  return l('div', {
    className: o['search-form-wrapper'],
    children: [
      e(a, {
        form: r,
        className: o['search-form'],
        labelAlign: 'left',
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
        children: l(f, {
          gutter: 24,
          children: [
            e(t, {
              span: n,
              children: e(a.Item, {
                label: '\u89D2\u8272\u7F16\u7801',
                field: 'roleCode',
                children: e(u, {
                  allowClear: !0,
                  placeholder: '\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u7801',
                }),
              }),
            }),
            e(t, {
              span: n,
              children: e(a.Item, {
                label: '\u89D2\u8272\u540D\u79F0',
                field: 'roleName',
                children: e(u, {
                  allowClear: !0,
                  placeholder: '\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0',
                }),
              }),
            }),
          ],
        }),
      }),
      l('div', {
        className: o['right-button'],
        children: [
          e(c, {
            type: 'primary',
            icon: e(h, {}),
            onClick: () => s.onSearch(r.getFieldsValue()),
            children: '\u67E5\u8BE2',
          }),
          e(c, {
            icon: e(m, {}),
            onClick: () => {
              r.resetFields(), s.onSearch({});
            },
            children: '\u91CD\u7F6E',
          }),
        ],
      }),
    ],
  });
}
export { D as default };
