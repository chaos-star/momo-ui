import {
  j as e,
  b as m,
  a as y,
  S as g,
  B as a,
  aQ as w,
  b4 as C,
  aj as p,
  ai as D,
  aW as F,
  aR as B,
  T as z,
  d as r,
} from './vendor.44459b16.js';
import {
  g as h,
  i as x,
  a as I,
  m as f,
  f as S,
  s as j,
} from './accessControl.941fcf7e.js';
import { s as c } from './index.module.078c7882.js';
const { Text: E } = z;
function _(t) {
  const n = j(t);
  return t === 1
    ? e(r, { status: 'success', text: n })
    : t === 2 || t === 4
    ? e(r, { status: 'error', text: n })
    : t === 3
    ? e(r, { status: 'warning', text: n })
    : e(r, { status: 'default', text: n });
}
function A(t, n) {
  const o = h(n, 'system.users.list', 'email'),
    l = h(n, 'system.users.list', 'mobile'),
    d = [
      { title: 'ID', dataIndex: 'id', width: 80 },
      {
        title: '\u7528\u6237\u540D',
        dataIndex: 'username',
        width: 140,
        render: (i) => e(E, { copyable: !0, children: i }),
      },
      {
        title: '\u59D3\u540D',
        dataIndex: 'realname',
        width: 120,
        render: (i) => i || '\u2014',
      },
    ];
  return (
    x(l) ||
      d.push({
        title: '\u624B\u673A\u53F7',
        dataIndex: 'mobile',
        width: 130,
        sorter: I(l),
        render: (i) => f(i, l),
      }),
    x(o) ||
      d.push({
        title: '\u90AE\u7BB1',
        dataIndex: 'email',
        width: 190,
        sorter: I(o),
        render: (i) => f(i, o),
      }),
    d.push(
      {
        title: '\u72B6\u6001',
        dataIndex: 'activeStatus',
        width: 100,
        render: _,
      },
      {
        title: '\u89D2\u8272',
        dataIndex: 'user_roles',
        width: 180,
        render: (i, s) =>
          e('div', {
            className: c['tag-list'],
            children: (s.user_roles || []).map((u) =>
              e(m, { children: u.roleName }, u.roleId)
            ),
          }),
      },
      {
        title: '\u90E8\u95E8',
        dataIndex: 'user_depts',
        width: 180,
        render: (i, s) =>
          e('div', {
            className: c['tag-list'],
            children: (s.user_depts || []).map((u) =>
              e(m, { children: u.deptName }, u.deptId)
            ),
          }),
      },
      {
        title: '\u6700\u8FD1\u767B\u5F55',
        dataIndex: 'loginAt',
        width: 170,
        render: S,
      },
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 360,
        fixed: 'right',
        render: (i, s) =>
          y(g, {
            className: c.operations,
            size: 8,
            wrap: !0,
            children: [
              e(a, {
                type: 'text',
                size: 'small',
                icon: e(w, {}),
                onClick: () => t.onEdit(s),
                children: '\u7F16\u8F91',
              }),
              e(a, {
                type: 'text',
                size: 'small',
                icon: e(C, {}),
                onClick: () => t.onRoles(s),
                children: '\u89D2\u8272',
              }),
              e(a, {
                type: 'text',
                size: 'small',
                icon: e(p, {}),
                onClick: () => t.onDepts(s),
                children: '\u90E8\u95E8',
              }),
              e(a, {
                type: 'text',
                size: 'small',
                icon: e(p, {}),
                onClick: () => t.onPermissions(s),
                children: '\u6388\u6743',
              }),
              s.activeStatus === 1
                ? e(a, {
                    type: 'text',
                    size: 'small',
                    icon: e(D, {}),
                    onClick: () => t.onStatus(s, 2),
                    children: '\u7981\u7528',
                  })
                : e(a, {
                    type: 'text',
                    size: 'small',
                    icon: e(F, {}),
                    onClick: () => t.onStatus(s, 1),
                    children: '\u542F\u7528',
                  }),
              e(a, {
                type: 'text',
                status: 'danger',
                size: 'small',
                icon: e(B, {}),
                onClick: () => t.onDelete(s),
                children: '\u5220\u9664',
              }),
            ],
          }),
      }
    ),
    d
  );
}
export { A as getColumns };
