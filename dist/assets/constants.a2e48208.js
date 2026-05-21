import {
  j as t,
  S as o,
  B as s,
  aP as l,
  ah as a,
  aQ as d,
  T as m,
  a as n,
} from './vendor.3821b0be.js';
import { f as N } from './accessControl.941fcf7e.js';
import { s as c } from './index.module.0c4d71de.js';
var i =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/roles/constants.tsx';
const { Text: E } = m,
  x = {
    PLATFORM_INTERNAL: '\u5E73\u53F0\u5185\u90E8',
    PLATFORM_BUSINESS: '\u5E73\u53F0\u4E1A\u52A1',
    TENANT_CUSTOM: '\u79DF\u6237\u81EA\u5B9A\u4E49',
  },
  p = {
    PLATFORM_ONLY: '\u4EC5\u5E73\u53F0',
    TENANT_ONLY: '\u4EC5\u672C\u79DF\u6237',
    CROSS_TENANT: '\u53EF\u8DE8\u79DF\u6237',
  };
function f(u) {
  const e = u || 'TENANT_CUSTOM',
    r =
      e === 'PLATFORM_INTERNAL'
        ? 'red'
        : e === 'PLATFORM_BUSINESS'
        ? 'arcoblue'
        : 'green';
  return t.exports.jsxDEV(
    n,
    { color: r, children: x[e] || e },
    void 0,
    !1,
    { fileName: i, lineNumber: 37, columnNumber: 10 },
    this
  );
}
function T(u) {
  const e = u || 'TENANT_ONLY',
    r =
      e === 'CROSS_TENANT'
        ? 'purple'
        : e === 'PLATFORM_ONLY'
        ? 'orange'
        : 'gray';
  return t.exports.jsxDEV(
    n,
    { color: r, children: p[e] || e },
    void 0,
    !1,
    { fileName: i, lineNumber: 49, columnNumber: 5 },
    this
  );
}
function b(u) {
  return [
    { title: 'ID', dataIndex: 'id', width: 80 },
    { title: '\u89D2\u8272\u540D\u79F0', dataIndex: 'roleName', width: 160 },
    {
      title: '\u89D2\u8272\u7F16\u7801',
      dataIndex: 'roleCode',
      width: 180,
      render: (e) =>
        t.exports.jsxDEV(
          E,
          { copyable: !0, children: e },
          void 0,
          !1,
          { fileName: i, lineNumber: 63, columnNumber: 22 },
          this
        ),
    },
    { title: '\u7C7B\u578B', dataIndex: 'roleType', width: 130, render: f },
    {
      title: '\u5206\u914D\u8303\u56F4',
      dataIndex: 'assignScope',
      width: 130,
      render: T,
    },
    {
      title: '\u63CF\u8FF0',
      dataIndex: 'description',
      ellipsis: !0,
      width: 220,
      render: (e) => e || '\u2014',
    },
    {
      title: '\u521B\u5EFA\u65F6\u95F4',
      dataIndex: 'createdAt',
      width: 170,
      render: N,
    },
    {
      title: '\u64CD\u4F5C',
      dataIndex: 'operations',
      width: 230,
      fixed: 'right',
      render: (e, r) =>
        t.exports.jsxDEV(
          o,
          {
            className: c.operations,
            size: 8,
            wrap: !0,
            children: [
              t.exports.jsxDEV(
                s,
                {
                  type: 'text',
                  size: 'small',
                  icon: t.exports.jsxDEV(
                    l,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 100, columnNumber: 19 },
                    this
                  ),
                  onClick: () => u.onEdit(r),
                  children: '\u7F16\u8F91',
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 97, columnNumber: 11 },
                this
              ),
              t.exports.jsxDEV(
                s,
                {
                  type: 'text',
                  size: 'small',
                  icon: t.exports.jsxDEV(
                    a,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 108, columnNumber: 19 },
                    this
                  ),
                  onClick: () => u.onGrant(r),
                  children: '\u6388\u6743',
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 105, columnNumber: 11 },
                this
              ),
              t.exports.jsxDEV(
                s,
                {
                  type: 'text',
                  status: 'danger',
                  size: 'small',
                  icon: t.exports.jsxDEV(
                    d,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 117, columnNumber: 19 },
                    this
                  ),
                  onClick: () => u.onDelete(r),
                  children: '\u5220\u9664',
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 113, columnNumber: 11 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: i, lineNumber: 96, columnNumber: 9 },
          this
        ),
    },
  ];
}
export { b as getColumns };
