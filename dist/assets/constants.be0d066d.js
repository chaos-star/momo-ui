import {
  a as s,
  S as d,
  j as e,
  B as u,
  aQ as o,
  v as r,
  aR as l,
  b as a,
} from './vendor.44459b16.js';
import { f as c } from './utils.49caa52b.js';
import { s as p } from './index.module.ea069206.js';
function x(i) {
  return i === 1
    ? e(a, { color: 'green', children: '\u542F\u7528' })
    : e(a, { color: 'red', children: '\u505C\u7528' });
}
function C(i) {
  return [
    {
      title: '\u6743\u9650\u5305\u7F16\u7801',
      dataIndex: 'packageCode',
      width: 220,
    },
    {
      title: '\u6743\u9650\u5305\u540D\u79F0',
      dataIndex: 'packageName',
      width: 200,
    },
    {
      title: '\u6743\u9650\u6570\u91CF',
      dataIndex: 'permissionCount',
      width: 110,
      render: (t) => (t != null ? t : 0),
    },
    {
      title: '\u7ED1\u5B9A\u79DF\u6237\u6570',
      dataIndex: 'tenantCount',
      width: 120,
      render: (t) => (t != null ? t : 0),
    },
    { title: '\u72B6\u6001', dataIndex: 'activeStatus', width: 100, render: x },
    {
      title: '\u63CF\u8FF0',
      dataIndex: 'description',
      ellipsis: !0,
      tooltip: !0,
    },
    {
      title: '\u66F4\u65B0\u65F6\u95F4',
      dataIndex: 'updatedAt',
      width: 180,
      render: (t) => c(t),
    },
    {
      title: '\u64CD\u4F5C',
      dataIndex: 'operations',
      width: 300,
      fixed: 'right',
      render: (t, n) =>
        s(d, {
          className: p.operations,
          size: 4,
          children: [
            e(u, {
              size: 'small',
              type: 'text',
              icon: e(o, {}),
              onClick: () => i.onEdit(n),
              children: '\u7F16\u8F91',
            }),
            e(u, {
              size: 'small',
              type: 'text',
              icon: e(r, {}),
              onClick: () => i.onGrant(n),
              children: '\u7EF4\u62A4\u6743\u9650',
            }),
            n.activeStatus === 1
              ? e(u, {
                  size: 'small',
                  type: 'text',
                  onClick: () => i.onDisable(n),
                  children: '\u505C\u7528',
                })
              : e(u, {
                  size: 'small',
                  type: 'text',
                  onClick: () => i.onEnable(n),
                  children: '\u542F\u7528',
                }),
            e(u, {
              size: 'small',
              status: 'danger',
              type: 'text',
              icon: e(l, {}),
              onClick: () => i.onDelete(n),
              children: '\u5220\u9664',
            }),
          ],
        }),
    },
  ];
}
export { C as getColumns };
