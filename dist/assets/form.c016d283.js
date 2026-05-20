import {
  ag as a,
  a as r,
  j as e,
  ah as n,
  K as u,
  S as d,
  B as o,
  aU as t,
  $ as h,
  aI as m,
} from './vendor.44459b16.js';
import { s as l } from './index.module.ea069206.js';
const { Row: p, Col: c } = m;
function C({ onSearch: s }) {
  const [i] = a.useForm();
  return r('div', {
    className: l['search-form-wrapper'],
    children: [
      e(a, {
        form: i,
        className: l['search-form'],
        labelAlign: 'left',
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
        children: r(p, {
          gutter: 24,
          children: [
            e(c, {
              span: 8,
              children: e(a.Item, {
                label: '\u6743\u9650\u5305\u7F16\u7801',
                field: 'packageCode',
                children: e(n, {
                  allowClear: !0,
                  placeholder: '\u5982 DEFAULT_TENANT_PACKAGE',
                }),
              }),
            }),
            e(c, {
              span: 8,
              children: e(a.Item, {
                label: '\u6743\u9650\u5305\u540D\u79F0',
                field: 'packageName',
                children: e(n, {
                  allowClear: !0,
                  placeholder:
                    '\u5982 \u9ED8\u8BA4\u79DF\u6237\u6743\u9650\u5305',
                }),
              }),
            }),
            e(c, {
              span: 8,
              children: r('div', {
                className: l.formLikeField,
                children: [
                  e('label', {
                    className: l.formLikeFieldLabel,
                    children: '\u542F\u7528\u72B6\u6001',
                  }),
                  e('div', {
                    className: l.formLikeFieldControl,
                    children: e(a.Item, {
                      field: 'activeStatus',
                      noStyle: !0,
                      children: r(u, {
                        allowClear: !0,
                        placeholder: '\u5168\u90E8',
                        children: [
                          e(u.Option, { value: 1, children: '\u542F\u7528' }),
                          e(u.Option, { value: 2, children: '\u505C\u7528' }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      e('div', {
        className: l['right-button'],
        children: r(d, {
          direction: 'vertical',
          children: [
            e(o, {
              type: 'primary',
              icon: e(t, {}),
              onClick: () => s(i.getFieldsValue()),
              children: '\u67E5\u8BE2',
            }),
            e(o, {
              icon: e(h, {}),
              onClick: () => {
                i.resetFields(), s({});
              },
              children: '\u91CD\u7F6E',
            }),
          ],
        }),
      }),
    ],
  });
}
export { C as default };
