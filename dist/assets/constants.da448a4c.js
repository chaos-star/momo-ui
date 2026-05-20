import {
  a as s,
  S as o,
  j as e,
  B as u,
  aQ as r,
  v as l,
  aR as p,
  b as d,
} from './vendor.44459b16.js';
import { f as c } from './utils.49caa52b.js';
import { s as h } from './index.module.ea069206.js';
function m(n) {
  return n === 1
    ? e(d, { color: 'green', children: '\u542F\u7528' })
    : e(d, { color: 'red', children: '\u505C\u7528' });
}
function I(n) {
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
      render: (t) => (t != null ? t : 0),
    },
    {
      title: '\u7ED1\u5B9A\u6570',
      dataIndex: 'tenantCount',
      width: 88,
      render: (t) => (t != null ? t : 0),
    },
    {
      title: '\u542F\u52A8\u72B6\u6001',
      dataIndex: 'activeStatus',
      width: 96,
      render: m,
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
      render: (t, i) => {
        var a;
        return (
          ((a = i.operatorUsername) == null ? void 0 : a.trim()) || '\u2014'
        );
      },
    },
    {
      title: '\u66F4\u65B0\u65F6\u95F4',
      dataIndex: 'updatedAt',
      width: 160,
      render: (t) => c(t),
    },
    {
      title: '\u64CD\u4F5C',
      dataIndex: 'operations',
      width: 210,
      fixed: 'right',
      render: (t, i) =>
        s(o, {
          className: h.operations,
          size: 4,
          children: [
            e(u, {
              size: 'small',
              type: 'text',
              icon: e(r, {}),
              onClick: () => n.onEdit(i),
              children: '\u7F16\u8F91',
            }),
            e(u, {
              size: 'small',
              type: 'text',
              icon: e(l, {}),
              onClick: () => n.onGrant(i),
              children: '\u6388\u6743',
            }),
            i.activeStatus === 1
              ? e(u, {
                  size: 'small',
                  type: 'text',
                  onClick: () => n.onDisable(i),
                  children: '\u505C\u7528',
                })
              : e(u, {
                  size: 'small',
                  type: 'text',
                  onClick: () => n.onEnable(i),
                  children: '\u542F\u7528',
                }),
            e(u, {
              size: 'small',
              status: 'danger',
              type: 'text',
              icon: e(p, {}),
              onClick: () => n.onDelete(i),
              children: '\u5220\u9664',
            }),
          ],
        }),
    },
  ];
}
export { I as getColumns };
