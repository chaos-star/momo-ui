import {
  j as t,
  a as i,
  S as a,
  B as r,
  aQ as d,
  aj as s,
  aR as l,
  T as c,
  b as o,
} from './vendor.44459b16.js';
import { f as T } from './accessControl.941fcf7e.js';
import { s as E } from './index.module.0c4d71de.js';
const { Text: F } = c,
  N = {
    PLATFORM_INTERNAL: '\u5E73\u53F0\u5185\u90E8',
    PLATFORM_BUSINESS: '\u5E73\u53F0\u4E1A\u52A1',
    TENANT_CUSTOM: '\u79DF\u6237\u81EA\u5B9A\u4E49',
  },
  A = {
    PLATFORM_ONLY: '\u4EC5\u5E73\u53F0',
    TENANT_ONLY: '\u4EC5\u672C\u79DF\u6237',
    CROSS_TENANT: '\u53EF\u8DE8\u79DF\u6237',
  };
function p(u) {
  const e = u || 'TENANT_CUSTOM';
  return t(o, {
    color:
      e === 'PLATFORM_INTERNAL'
        ? 'red'
        : e === 'PLATFORM_BUSINESS'
        ? 'arcoblue'
        : 'green',
    children: N[e] || e,
  });
}
function S(u) {
  const e = u || 'TENANT_ONLY';
  return t(o, {
    color:
      e === 'CROSS_TENANT'
        ? 'purple'
        : e === 'PLATFORM_ONLY'
        ? 'orange'
        : 'gray',
    children: A[e] || e,
  });
}
function x(u) {
  return [
    { title: 'ID', dataIndex: 'id', width: 80 },
    { title: '\u89D2\u8272\u540D\u79F0', dataIndex: 'roleName', width: 160 },
    {
      title: '\u89D2\u8272\u7F16\u7801',
      dataIndex: 'roleCode',
      width: 180,
      render: (e) => t(F, { copyable: !0, children: e }),
    },
    { title: '\u7C7B\u578B', dataIndex: 'roleType', width: 130, render: p },
    {
      title: '\u5206\u914D\u8303\u56F4',
      dataIndex: 'assignScope',
      width: 130,
      render: S,
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
      render: T,
    },
    {
      title: '\u64CD\u4F5C',
      dataIndex: 'operations',
      width: 230,
      fixed: 'right',
      render: (e, n) =>
        i(a, {
          className: E.operations,
          size: 8,
          wrap: !0,
          children: [
            t(r, {
              type: 'text',
              size: 'small',
              icon: t(d, {}),
              onClick: () => u.onEdit(n),
              children: '\u7F16\u8F91',
            }),
            t(r, {
              type: 'text',
              size: 'small',
              icon: t(s, {}),
              onClick: () => u.onGrant(n),
              children: '\u6388\u6743',
            }),
            t(r, {
              type: 'text',
              status: 'danger',
              size: 'small',
              icon: t(l, {}),
              onClick: () => u.onDelete(n),
              children: '\u5220\u9664',
            }),
          ],
        }),
    },
  ];
}
export { x as getColumns };
