import {
  r as c,
  ae as u,
  j as e,
  af as m,
  H as n,
  B as t,
  aT as b,
  Z as d,
  aH as f,
} from './vendor.3821b0be.js';
import { G as x } from './index.77883a3f.js';
import { s as o } from './index.module.0c4d71de.js';
var l =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/roles/form.tsx';
const { Row: h, Col: r } = f,
  p = [
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
  E = [
    { label: '\u4EC5\u5E73\u53F0\u79DF\u6237', value: 'PLATFORM_ONLY' },
    { label: '\u4EC5\u672C\u79DF\u6237', value: 'TENANT_ONLY' },
    { label: '\u53EF\u8DE8\u79DF\u6237', value: 'CROSS_TENANT' },
  ];
function F(a) {
  const { lang: N } = c.exports.useContext(x),
    [i] = u.useForm(),
    s = N === 'zh-CN' ? 8 : 12;
  return e.exports.jsxDEV(
    'div',
    {
      className: o['search-form-wrapper'],
      children: [
        e.exports.jsxDEV(
          u,
          {
            form: i,
            className: o['search-form'],
            labelAlign: 'left',
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
            children: e.exports.jsxDEV(
              h,
              {
                gutter: 24,
                children: [
                  e.exports.jsxDEV(
                    r,
                    {
                      span: s,
                      children: e.exports.jsxDEV(
                        u.Item,
                        {
                          label: '\u89D2\u8272\u7F16\u7801',
                          field: 'roleCode',
                          children: e.exports.jsxDEV(
                            m,
                            {
                              allowClear: !0,
                              placeholder:
                                '\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u7801',
                            },
                            void 0,
                            !1,
                            { fileName: l, lineNumber: 45, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: l, lineNumber: 44, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 43, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r,
                    {
                      span: s,
                      children: e.exports.jsxDEV(
                        u.Item,
                        {
                          label: '\u89D2\u8272\u540D\u79F0',
                          field: 'roleName',
                          children: e.exports.jsxDEV(
                            m,
                            {
                              allowClear: !0,
                              placeholder:
                                '\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0',
                            },
                            void 0,
                            !1,
                            { fileName: l, lineNumber: 50, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: l, lineNumber: 49, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 48, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r,
                    {
                      span: s,
                      children: e.exports.jsxDEV(
                        u.Item,
                        {
                          label: '\u89D2\u8272\u7C7B\u578B',
                          field: 'roleType',
                          children: e.exports.jsxDEV(
                            n,
                            {
                              allowClear: !0,
                              placeholder: '\u5168\u90E8',
                              options: p,
                            },
                            void 0,
                            !1,
                            { fileName: l, lineNumber: 55, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: l, lineNumber: 54, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 53, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r,
                    {
                      span: s,
                      children: e.exports.jsxDEV(
                        u.Item,
                        {
                          label: '\u5206\u914D\u8303\u56F4',
                          field: 'assignScope',
                          children: e.exports.jsxDEV(
                            n,
                            {
                              allowClear: !0,
                              placeholder: '\u5168\u90E8',
                              options: E,
                            },
                            void 0,
                            !1,
                            { fileName: l, lineNumber: 64, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: l, lineNumber: 63, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 62, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: l, lineNumber: 42, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: l, lineNumber: 35, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: o['right-button'],
            children: [
              e.exports.jsxDEV(
                t,
                {
                  type: 'primary',
                  icon: e.exports.jsxDEV(
                    b,
                    {},
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 76, columnNumber: 17 },
                    this
                  ),
                  onClick: () => a.onSearch(i.getFieldsValue()),
                  children: '\u67E5\u8BE2',
                },
                void 0,
                !1,
                { fileName: l, lineNumber: 74, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                t,
                {
                  icon: e.exports.jsxDEV(
                    d,
                    {},
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 84, columnNumber: 17 },
                    this
                  ),
                  onClick: () => {
                    i.resetFields(), a.onSearch({});
                  },
                  children: '\u91CD\u7F6E',
                },
                void 0,
                !1,
                { fileName: l, lineNumber: 83, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: l, lineNumber: 73, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: l, lineNumber: 34, columnNumber: 5 },
    this
  );
}
export { E as ASSIGN_SCOPE_OPTIONS, p as ROLE_TYPE_OPTIONS, F as default };
