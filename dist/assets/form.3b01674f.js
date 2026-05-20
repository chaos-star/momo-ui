import {
  ag as l,
  a as r,
  j as e,
  ah as c,
  K as n,
  S as o,
  B as d,
  aU as t,
  $ as h,
  aI as m,
} from './vendor.44459b16.js';
import { s as a } from './index.module.ea069206.js';
const { Row: p, Col: i } = m;
function C({ onSearch: s }) {
  const [u] = l.useForm();
  return r('div', {
    className: a['search-form-wrapper'],
    children: [
      e(l, {
        form: u,
        className: a['search-form'],
        labelAlign: 'left',
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
        children: r(p, {
          gutter: 24,
          children: [
            e(i, {
              span: 6,
              children: e(l.Item, {
                label: 'ID',
                field: 'id',
                children: e(c, {
                  allowClear: !0,
                  placeholder: '\u8BF7\u8F93\u5165ID',
                }),
              }),
            }),
            e(i, {
              span: 6,
              children: e(l.Item, {
                label: '\u6743\u9650\u5305\u7F16\u7801',
                field: 'packageCode',
                children: e(c, {
                  allowClear: !0,
                  placeholder: '\u5982 DEFAULT_TENANT_PACKAGE',
                }),
              }),
            }),
            e(i, {
              span: 6,
              children: e(l.Item, {
                label: '\u6743\u9650\u5305\u540D\u79F0',
                field: 'packageName',
                children: e(c, {
                  allowClear: !0,
                  placeholder:
                    '\u5982 \u9ED8\u8BA4\u79DF\u6237\u6743\u9650\u5305',
                }),
              }),
            }),
            e(i, {
              span: 6,
              children: r('div', {
                className: a.formLikeField,
                children: [
                  e('label', {
                    className: a.formLikeFieldLabel,
                    children: '\u542F\u7528\u72B6\u6001',
                  }),
                  e('div', {
                    className: a.formLikeFieldControl,
                    children: e(l.Item, {
                      field: 'activeStatus',
                      noStyle: !0,
                      children: r(n, {
                        allowClear: !0,
                        placeholder: '\u5168\u90E8',
                        children: [
                          e(n.Option, { value: 1, children: '\u542F\u7528' }),
                          e(n.Option, { value: 2, children: '\u505C\u7528' }),
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
        className: a['right-button'],
        children: r(o, {
          direction: 'vertical',
          children: [
            e(d, {
              type: 'primary',
              icon: e(t, {}),
              onClick: () => s(u.getFieldsValue()),
              children: '\u67E5\u8BE2',
            }),
            e(d, {
              icon: e(h, {}),
              onClick: () => {
                u.resetFields(), s({});
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
