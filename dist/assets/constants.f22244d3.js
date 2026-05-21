import {
  j as e,
  a as d,
  S as s,
  B as n,
  aQ as o,
  aj as r,
  aR as u,
  T as l,
} from './vendor.44459b16.js';
import { f as c } from './accessControl.941fcf7e.js';
import { s as p } from './index.module.0c4d71de.js';
const { Text: m } = l;
function f(i) {
  return [
    { title: 'ID', dataIndex: 'id', width: 80 },
    { title: '\u89D2\u8272\u540D\u79F0', dataIndex: 'roleName', width: 160 },
    {
      title: '\u89D2\u8272\u7F16\u7801',
      dataIndex: 'roleCode',
      width: 180,
      render: (t) => e(m, { copyable: !0, children: t }),
    },
    {
      title: '\u63CF\u8FF0',
      dataIndex: 'description',
      ellipsis: !0,
      width: 220,
      render: (t) => t || '\u2014',
    },
    {
      title: '\u521B\u5EFA\u65F6\u95F4',
      dataIndex: 'createdAt',
      width: 170,
      render: c,
    },
    {
      title: '\u64CD\u4F5C',
      dataIndex: 'operations',
      width: 230,
      fixed: 'right',
      render: (t, a) =>
        d(s, {
          className: p.operations,
          size: 8,
          wrap: !0,
          children: [
            e(n, {
              type: 'text',
              size: 'small',
              icon: e(o, {}),
              onClick: () => i.onEdit(a),
              children: '\u7F16\u8F91',
            }),
            e(n, {
              type: 'text',
              size: 'small',
              icon: e(r, {}),
              onClick: () => i.onGrant(a),
              children: '\u6388\u6743',
            }),
            e(n, {
              type: 'text',
              status: 'danger',
              size: 'small',
              icon: e(u, {}),
              onClick: () => i.onDelete(a),
              children: '\u5220\u9664',
            }),
          ],
        }),
    },
  ];
}
export { f as getColumns };
