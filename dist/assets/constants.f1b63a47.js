import {
  j as e,
  a as l,
  S as o,
  B as r,
  aP as n,
  ah as u,
  aQ as m,
  T as d,
} from './vendor.f50a67ab.js';
import { f as x } from './accessControl.18599d4a.js';
import { s as c } from './index.module.3d7e884a.js';
var t =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/roles/constants.tsx';
const { Text: N } = d;
function b(s) {
  return [
    { title: 'ID', dataIndex: 'id', width: 80 },
    { title: '\u89D2\u8272\u540D\u79F0', dataIndex: 'roleName', width: 160 },
    {
      title: '\u89D2\u8272\u7F16\u7801',
      dataIndex: 'roleCode',
      width: 180,
      render: (i) =>
        e.exports.jsxDEV(
          N,
          { copyable: !0, children: i },
          void 0,
          !1,
          { fileName: t, lineNumber: 27, columnNumber: 22 },
          this
        ),
    },
    {
      title: '\u7C7B\u578B',
      dataIndex: 'roleType',
      width: 120,
      render: (i) =>
        e.exports.jsxDEV(
          l,
          { children: i || 'CUSTOM' },
          void 0,
          !1,
          { fileName: t, lineNumber: 33, columnNumber: 22 },
          this
        ),
    },
    {
      title: '\u63CF\u8FF0',
      dataIndex: 'description',
      ellipsis: !0,
      width: 220,
      render: (i) => i || '\u2014',
    },
    {
      title: '\u521B\u5EFA\u65F6\u95F4',
      dataIndex: 'createdAt',
      width: 170,
      render: x,
    },
    {
      title: '\u64CD\u4F5C',
      dataIndex: 'operations',
      width: 230,
      fixed: 'right',
      render: (i, a) =>
        e.exports.jsxDEV(
          o,
          {
            className: c.operations,
            size: 8,
            wrap: !0,
            children: [
              e.exports.jsxDEV(
                r,
                {
                  type: 'text',
                  size: 'small',
                  icon: e.exports.jsxDEV(
                    n,
                    {},
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 58, columnNumber: 19 },
                    this
                  ),
                  onClick: () => s.onEdit(a),
                  children: '\u7F16\u8F91',
                },
                void 0,
                !1,
                { fileName: t, lineNumber: 55, columnNumber: 11 },
                this
              ),
              e.exports.jsxDEV(
                r,
                {
                  type: 'text',
                  size: 'small',
                  icon: e.exports.jsxDEV(
                    u,
                    {},
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 66, columnNumber: 19 },
                    this
                  ),
                  onClick: () => s.onGrant(a),
                  children: '\u6388\u6743',
                },
                void 0,
                !1,
                { fileName: t, lineNumber: 63, columnNumber: 11 },
                this
              ),
              e.exports.jsxDEV(
                r,
                {
                  type: 'text',
                  status: 'danger',
                  size: 'small',
                  icon: e.exports.jsxDEV(
                    m,
                    {},
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 75, columnNumber: 19 },
                    this
                  ),
                  onClick: () => s.onDelete(a),
                  children: '\u5220\u9664',
                },
                void 0,
                !1,
                { fileName: t, lineNumber: 71, columnNumber: 11 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: t, lineNumber: 54, columnNumber: 9 },
          this
        ),
    },
  ];
}
export { b as getColumns };
