import {
  j as t,
  S as a,
  B as n,
  aP as l,
  t as m,
  aQ as d,
  a as r,
} from './vendor.3821b0be.js';
import { f as p } from './utils.49caa52b.js';
import { s as x } from './index.module.ea069206.js';
var i =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/permission-boundary-packages/constants.tsx';
function N(u) {
  return u === 1
    ? t.exports.jsxDEV(
        r,
        { color: 'green', children: '\u542F\u7528' },
        void 0,
        !1,
        { fileName: i, lineNumber: 23, columnNumber: 5 },
        this
      )
    : t.exports.jsxDEV(
        r,
        { color: 'red', children: '\u505C\u7528' },
        void 0,
        !1,
        { fileName: i, lineNumber: 25, columnNumber: 5 },
        this
      );
}
function b(u) {
  return [
    { title: 'ID', dataIndex: 'id', width: 72 },
    {
      title: '\u6743\u9650\u5305\u7F16\u7801',
      dataIndex: 'packageCode',
      width: 170,
      ellipsis: !0,
      tooltip: !0,
    },
    {
      title: '\u6743\u9650\u5305\u540D\u79F0',
      dataIndex: 'packageName',
      width: 150,
      ellipsis: !0,
      tooltip: !0,
    },
    {
      title: '\u6743\u9650\u6570\u91CF',
      dataIndex: 'permissionCount',
      width: 92,
      render: (e) => (e != null ? e : 0),
    },
    {
      title: '\u7ED1\u5B9A\u6570',
      dataIndex: 'tenantCount',
      width: 88,
      render: (e) => (e != null ? e : 0),
    },
    {
      title: '\u542F\u52A8\u72B6\u6001',
      dataIndex: 'activeStatus',
      width: 96,
      render: N,
    },
    {
      title: '\u63CF\u8FF0',
      dataIndex: 'description',
      width: 200,
      ellipsis: !0,
      tooltip: !0,
    },
    {
      title: '\u6700\u540E\u64CD\u4F5C\u4EBA',
      dataIndex: 'operatorUsername',
      width: 120,
      ellipsis: !0,
      tooltip: !0,
      render: (e, s) => {
        var o;
        return (
          ((o = s.operatorUsername) == null ? void 0 : o.trim()) || '\u2014'
        );
      },
    },
    {
      title: '\u66F4\u65B0\u65F6\u95F4',
      dataIndex: 'updatedAt',
      width: 160,
      render: (e) => p(e),
    },
    {
      title: '\u64CD\u4F5C',
      dataIndex: 'operations',
      width: 210,
      fixed: 'right',
      render: (e, s) =>
        t.exports.jsxDEV(
          a,
          {
            className: x.operations,
            size: 4,
            children: [
              t.exports.jsxDEV(
                n,
                {
                  size: 'small',
                  type: 'text',
                  icon: t.exports.jsxDEV(
                    l,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 101, columnNumber: 19 },
                    this
                  ),
                  onClick: () => u.onEdit(s),
                  children: '\u7F16\u8F91',
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 98, columnNumber: 11 },
                this
              ),
              t.exports.jsxDEV(
                n,
                {
                  size: 'small',
                  type: 'text',
                  icon: t.exports.jsxDEV(
                    m,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 109, columnNumber: 19 },
                    this
                  ),
                  onClick: () => u.onGrant(s),
                  children: '\u6388\u6743',
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 106, columnNumber: 11 },
                this
              ),
              s.activeStatus === 1
                ? t.exports.jsxDEV(
                    n,
                    {
                      size: 'small',
                      type: 'text',
                      onClick: () => u.onDisable(s),
                      children: '\u505C\u7528',
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 115, columnNumber: 13 },
                    this
                  )
                : t.exports.jsxDEV(
                    n,
                    {
                      size: 'small',
                      type: 'text',
                      onClick: () => u.onEnable(s),
                      children: '\u542F\u7528',
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 123, columnNumber: 13 },
                    this
                  ),
              t.exports.jsxDEV(
                n,
                {
                  size: 'small',
                  status: 'danger',
                  type: 'text',
                  icon: t.exports.jsxDEV(
                    d,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 135, columnNumber: 19 },
                    this
                  ),
                  onClick: () => u.onDelete(s),
                  children: '\u5220\u9664',
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 131, columnNumber: 11 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: i, lineNumber: 97, columnNumber: 9 },
          this
        ),
    },
  ];
}
export { b as getColumns };
