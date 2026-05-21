import {
  ae as i,
  j as e,
  af as m,
  H as a,
  S as t,
  B as n,
  aT as N,
  Z as c,
  aH as d,
} from './vendor.3821b0be.js';
import { s as r } from './index.module.ea069206.js';
var l =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/permission-boundary-packages/form.tsx';
const { Row: f, Col: s } = d;
function x({ onSearch: o }) {
  const [u] = i.useForm();
  return e.exports.jsxDEV(
    'div',
    {
      className: r['search-form-wrapper'],
      children: [
        e.exports.jsxDEV(
          i,
          {
            form: u,
            className: r['search-form'],
            labelAlign: 'left',
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
            children: e.exports.jsxDEV(
              f,
              {
                gutter: 24,
                children: [
                  e.exports.jsxDEV(
                    s,
                    {
                      span: 6,
                      children: e.exports.jsxDEV(
                        i.Item,
                        {
                          label: 'ID',
                          field: 'id',
                          children: e.exports.jsxDEV(
                            m,
                            {
                              allowClear: !0,
                              placeholder: '\u8BF7\u8F93\u5165ID',
                            },
                            void 0,
                            !1,
                            { fileName: l, lineNumber: 41, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: l, lineNumber: 40, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 39, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    s,
                    {
                      span: 6,
                      children: e.exports.jsxDEV(
                        i.Item,
                        {
                          label: '\u6743\u9650\u5305\u7F16\u7801',
                          field: 'packageCode',
                          children: e.exports.jsxDEV(
                            m,
                            {
                              allowClear: !0,
                              placeholder: '\u5982 DEFAULT_TENANT_PACKAGE',
                            },
                            void 0,
                            !1,
                            { fileName: l, lineNumber: 46, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: l, lineNumber: 45, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 44, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    s,
                    {
                      span: 6,
                      children: e.exports.jsxDEV(
                        i.Item,
                        {
                          label: '\u6743\u9650\u5305\u540D\u79F0',
                          field: 'packageName',
                          children: e.exports.jsxDEV(
                            m,
                            {
                              allowClear: !0,
                              placeholder:
                                '\u5982 \u9ED8\u8BA4\u79DF\u6237\u6743\u9650\u5305',
                            },
                            void 0,
                            !1,
                            { fileName: l, lineNumber: 51, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: l, lineNumber: 50, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 49, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    s,
                    {
                      span: 6,
                      children: e.exports.jsxDEV(
                        'div',
                        {
                          className: r.formLikeField,
                          children: [
                            e.exports.jsxDEV(
                              'label',
                              {
                                className: r.formLikeFieldLabel,
                                children: '\u542F\u7528\u72B6\u6001',
                              },
                              void 0,
                              !1,
                              { fileName: l, lineNumber: 56, columnNumber: 15 },
                              this
                            ),
                            e.exports.jsxDEV(
                              'div',
                              {
                                className: r.formLikeFieldControl,
                                children: e.exports.jsxDEV(
                                  i.Item,
                                  {
                                    field: 'activeStatus',
                                    noStyle: !0,
                                    children: e.exports.jsxDEV(
                                      a,
                                      {
                                        allowClear: !0,
                                        placeholder: '\u5168\u90E8',
                                        children: [
                                          e.exports.jsxDEV(
                                            a.Option,
                                            {
                                              value: 1,
                                              children: '\u542F\u7528',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: l,
                                              lineNumber: 60,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          e.exports.jsxDEV(
                                            a.Option,
                                            {
                                              value: 2,
                                              children: '\u505C\u7528',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: l,
                                              lineNumber: 61,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: l,
                                        lineNumber: 59,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: l,
                                    lineNumber: 58,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              { fileName: l, lineNumber: 57, columnNumber: 15 },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: l, lineNumber: 55, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 54, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: l, lineNumber: 38, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: l, lineNumber: 31, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: r['right-button'],
            children: e.exports.jsxDEV(
              t,
              {
                direction: 'vertical',
                children: [
                  e.exports.jsxDEV(
                    n,
                    {
                      type: 'primary',
                      icon: e.exports.jsxDEV(
                        N,
                        {},
                        void 0,
                        !1,
                        { fileName: l, lineNumber: 73, columnNumber: 19 },
                        this
                      ),
                      onClick: () => o(u.getFieldsValue()),
                      children: '\u67E5\u8BE2',
                    },
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 71, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    n,
                    {
                      icon: e.exports.jsxDEV(
                        c,
                        {},
                        void 0,
                        !1,
                        { fileName: l, lineNumber: 79, columnNumber: 19 },
                        this
                      ),
                      onClick: () => {
                        u.resetFields(), o({});
                      },
                      children: '\u91CD\u7F6E',
                    },
                    void 0,
                    !1,
                    { fileName: l, lineNumber: 78, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: l, lineNumber: 70, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: l, lineNumber: 69, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: l, lineNumber: 30, columnNumber: 5 },
    this
  );
}
export { x as default };
