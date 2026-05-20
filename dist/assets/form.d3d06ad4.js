import {
  r as h,
  ag as l,
  a as o,
  j as e,
  ah as c,
  K as t,
  B as i,
  aU as F,
  $ as p,
  aI as E,
} from './vendor.44459b16.js';
import { G as m } from './index.04d9875a.js';
import { s } from './index.module.0c4d71de.js';
const { Row: C, Col: a } = E,
  N = [
    {
      label: '\u5E73\u53F0\u5185\u90E8\u89D2\u8272',
      value: 'PLATFORM_INTERNAL',
    },
    {
      label: '\u5E73\u53F0\u4E1A\u52A1\u89D2\u8272',
      value: 'PLATFORM_BUSINESS',
    },
    {
      label: '\u79DF\u6237\u81EA\u5B9A\u4E49\u89D2\u8272',
      value: 'TENANT_CUSTOM',
    },
  ],
  S = [
    { label: '\u4EC5\u5E73\u53F0\u79DF\u6237', value: 'PLATFORM_ONLY' },
    { label: '\u4EC5\u672C\u79DF\u6237', value: 'TENANT_ONLY' },
    { label: '\u53EF\u8DE8\u79DF\u6237', value: 'CROSS_TENANT' },
  ];
function f(n) {
  const { lang: d } = h.exports.useContext(m),
    [r] = l.useForm(),
    u = d === 'zh-CN' ? 8 : 12;
  return o('div', {
    className: s['search-form-wrapper'],
    children: [
      e(l, {
        form: r,
        className: s['search-form'],
        labelAlign: 'left',
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
        children: o(C, {
          gutter: 24,
          children: [
            e(a, {
              span: u,
              children: e(l.Item, {
                label: '\u89D2\u8272\u7F16\u7801',
                field: 'roleCode',
                children: e(c, {
                  allowClear: !0,
                  placeholder: '\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u7801',
                }),
              }),
            }),
            e(a, {
              span: u,
              children: e(l.Item, {
                label: '\u89D2\u8272\u540D\u79F0',
                field: 'roleName',
                children: e(c, {
                  allowClear: !0,
                  placeholder: '\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0',
                }),
              }),
            }),
            e(a, {
              span: u,
              children: e(l.Item, {
                label: '\u89D2\u8272\u7C7B\u578B',
                field: 'roleType',
                children: e(t, {
                  allowClear: !0,
                  placeholder: '\u5168\u90E8',
                  options: N,
                }),
              }),
            }),
            e(a, {
              span: u,
              children: e(l.Item, {
                label: '\u5206\u914D\u8303\u56F4',
                field: 'assignScope',
                children: e(t, {
                  allowClear: !0,
                  placeholder: '\u5168\u90E8',
                  options: S,
                }),
              }),
            }),
          ],
        }),
      }),
      o('div', {
        className: s['right-button'],
        children: [
          e(i, {
            type: 'primary',
            icon: e(F, {}),
            onClick: () => n.onSearch(r.getFieldsValue()),
            children: '\u67E5\u8BE2',
          }),
          e(i, {
            icon: e(p, {}),
            onClick: () => {
              r.resetFields(), n.onSearch({});
            },
            children: '\u91CD\u7F6E',
          }),
        ],
      }),
    ],
  });
}
export { S as ASSIGN_SCOPE_OPTIONS, N as ROLE_TYPE_OPTIONS, f as default };
