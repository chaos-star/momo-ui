import {
  r as f,
  ae as r,
  j as e,
  af as u,
  B as m,
  aT as d,
  Z as b,
  aH as x,
} from './vendor.3821b0be.js';
import { G as h } from './index.77883a3f.js';
import { s as i } from './index.module.078c7882.js';
var s =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/users/form.tsx';
const { Row: p, Col: n } = x;
function E(o) {
  const { lang: t } = f.exports.useContext(h),
    [l] = r.useForm(),
    a = t === 'zh-CN' ? 8 : 12,
    c = () => o.onSearch(l.getFieldsValue()),
    N = () => {
      l.resetFields(), o.onSearch({});
    };
  return e.exports.jsxDEV(
    'div',
    {
      className: i['search-form-wrapper'],
      children: [
        e.exports.jsxDEV(
          r,
          {
            form: l,
            className: i['search-form'],
            labelAlign: 'left',
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
            children: e.exports.jsxDEV(
              p,
              {
                gutter: 24,
                children: [
                  e.exports.jsxDEV(
                    n,
                    {
                      span: a,
                      children: e.exports.jsxDEV(
                        r.Item,
                        {
                          label: '\u7528\u6237\u540D',
                          field: 'username',
                          children: e.exports.jsxDEV(
                            u,
                            {
                              allowClear: !0,
                              placeholder:
                                '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
                            },
                            void 0,
                            !1,
                            { fileName: s, lineNumber: 38, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 37, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 36, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    n,
                    {
                      span: a,
                      children: e.exports.jsxDEV(
                        r.Item,
                        {
                          label: '\u7528\u6237 ID',
                          field: 'userId',
                          children: e.exports.jsxDEV(
                            u,
                            {
                              allowClear: !0,
                              placeholder: '\u8BF7\u8F93\u5165\u7528\u6237 ID',
                            },
                            void 0,
                            !1,
                            { fileName: s, lineNumber: 43, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: s, lineNumber: 42, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 41, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: s, lineNumber: 35, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: s, lineNumber: 28, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: i['right-button'],
            children: [
              e.exports.jsxDEV(
                m,
                {
                  type: 'primary',
                  icon: e.exports.jsxDEV(
                    d,
                    {},
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 49, columnNumber: 38 },
                    this
                  ),
                  onClick: c,
                  children: '\u67E5\u8BE2',
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 49, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                m,
                {
                  icon: e.exports.jsxDEV(
                    b,
                    {},
                    void 0,
                    !1,
                    { fileName: s, lineNumber: 52, columnNumber: 23 },
                    this
                  ),
                  onClick: N,
                  children: '\u91CD\u7F6E',
                },
                void 0,
                !1,
                { fileName: s, lineNumber: 52, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: s, lineNumber: 48, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: s, lineNumber: 27, columnNumber: 5 },
    this
  );
}
export { E as default };
