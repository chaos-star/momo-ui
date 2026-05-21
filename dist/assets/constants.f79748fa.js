import {
  j as e,
  a as x,
  S as D,
  B as u,
  aP as j,
  b3 as E,
  ah as c,
  ag as V,
  aV as v,
  aQ as I,
  T as g,
  c as o,
} from './vendor.3821b0be.js';
import {
  g as f,
  i as p,
  a as h,
  m as b,
  f as y,
  s as w,
} from './accessControl.941fcf7e.js';
import { s as N } from './index.module.078c7882.js';
var s =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/users/constants.tsx';
const { Text: C } = g;
function F(i) {
  const r = w(i);
  return i === 1
    ? e.exports.jsxDEV(
        o,
        { status: 'success', text: r },
        void 0,
        !1,
        { fileName: s, lineNumber: 37, columnNumber: 27 },
        this
      )
    : i === 2 || i === 4
    ? e.exports.jsxDEV(
        o,
        { status: 'error', text: r },
        void 0,
        !1,
        { fileName: s, lineNumber: 38, columnNumber: 42 },
        this
      )
    : i === 3
    ? e.exports.jsxDEV(
        o,
        { status: 'warning', text: r },
        void 0,
        !1,
        { fileName: s, lineNumber: 39, columnNumber: 27 },
        this
      )
    : e.exports.jsxDEV(
        o,
        { status: 'default', text: r },
        void 0,
        !1,
        { fileName: s, lineNumber: 40, columnNumber: 10 },
        this
      );
}
function _(i, r) {
  const m = f(r, 'system.users.list', 'email'),
    d = f(r, 'system.users.list', 'mobile'),
    a = [
      { title: 'ID', dataIndex: 'id', width: 80 },
      {
        title: '\u7528\u6237\u540D',
        dataIndex: 'username',
        width: 140,
        render: (l) =>
          e.exports.jsxDEV(
            C,
            { copyable: !0, children: l },
            void 0,
            !1,
            { fileName: s, lineNumber: 63, columnNumber: 22 },
            this
          ),
      },
      {
        title: '\u59D3\u540D',
        dataIndex: 'realname',
        width: 120,
        render: (l) => l || '\u2014',
      },
    ];
  return (
    p(d) ||
      a.push({
        title: '\u624B\u673A\u53F7',
        dataIndex: 'mobile',
        width: 130,
        sorter: h(d),
        render: (l) => b(l, d),
      }),
    p(m) ||
      a.push({
        title: '\u90AE\u7BB1',
        dataIndex: 'email',
        width: 190,
        sorter: h(m),
        render: (l) => b(l, m),
      }),
    a.push(
      {
        title: '\u72B6\u6001',
        dataIndex: 'activeStatus',
        width: 100,
        render: F,
      },
      {
        title: '\u89D2\u8272',
        dataIndex: 'user_roles',
        width: 180,
        render: (l, t) =>
          e.exports.jsxDEV(
            'div',
            {
              className: N['tag-list'],
              children: (t.user_roles || []).map((n) =>
                e.exports.jsxDEV(
                  x,
                  { children: n.roleName },
                  n.roleId,
                  !1,
                  { fileName: s, lineNumber: 106, columnNumber: 13 },
                  this
                )
              ),
            },
            void 0,
            !1,
            { fileName: s, lineNumber: 104, columnNumber: 9 },
            this
          ),
      },
      {
        title: '\u90E8\u95E8',
        dataIndex: 'user_depts',
        width: 180,
        render: (l, t) =>
          e.exports.jsxDEV(
            'div',
            {
              className: N['tag-list'],
              children: (t.user_depts || []).map((n) =>
                e.exports.jsxDEV(
                  x,
                  { children: n.deptName },
                  n.deptId,
                  !1,
                  { fileName: s, lineNumber: 118, columnNumber: 13 },
                  this
                )
              ),
            },
            void 0,
            !1,
            { fileName: s, lineNumber: 116, columnNumber: 9 },
            this
          ),
      },
      {
        title: '\u6700\u8FD1\u767B\u5F55',
        dataIndex: 'loginAt',
        width: 170,
        render: y,
      },
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 360,
        fixed: 'right',
        render: (l, t) =>
          e.exports.jsxDEV(
            D,
            {
              className: N.operations,
              size: 8,
              wrap: !0,
              children: [
                e.exports.jsxDEV(
                  u,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      j,
                      {},
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 134, columnNumber: 19 },
                      this
                    ),
                    onClick: () => i.onEdit(t),
                    children: '\u7F16\u8F91',
                  },
                  void 0,
                  !1,
                  { fileName: s, lineNumber: 131, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  u,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      E,
                      {},
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 142, columnNumber: 19 },
                      this
                    ),
                    onClick: () => i.onRoles(t),
                    children: '\u89D2\u8272',
                  },
                  void 0,
                  !1,
                  { fileName: s, lineNumber: 139, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  u,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      c,
                      {},
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 150, columnNumber: 19 },
                      this
                    ),
                    onClick: () => i.onDepts(t),
                    children: '\u90E8\u95E8',
                  },
                  void 0,
                  !1,
                  { fileName: s, lineNumber: 147, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  u,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      c,
                      {},
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 158, columnNumber: 19 },
                      this
                    ),
                    onClick: () => i.onPermissions(t),
                    children: '\u6388\u6743',
                  },
                  void 0,
                  !1,
                  { fileName: s, lineNumber: 155, columnNumber: 11 },
                  this
                ),
                t.activeStatus === 1
                  ? e.exports.jsxDEV(
                      u,
                      {
                        type: 'text',
                        size: 'small',
                        icon: e.exports.jsxDEV(
                          V,
                          {},
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 167, columnNumber: 21 },
                          this
                        ),
                        onClick: () => i.onStatus(t, 2),
                        children: '\u7981\u7528',
                      },
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 164, columnNumber: 13 },
                      this
                    )
                  : e.exports.jsxDEV(
                      u,
                      {
                        type: 'text',
                        size: 'small',
                        icon: e.exports.jsxDEV(
                          v,
                          {},
                          void 0,
                          !1,
                          { fileName: s, lineNumber: 176, columnNumber: 21 },
                          this
                        ),
                        onClick: () => i.onStatus(t, 1),
                        children: '\u542F\u7528',
                      },
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 173, columnNumber: 13 },
                      this
                    ),
                e.exports.jsxDEV(
                  u,
                  {
                    type: 'text',
                    status: 'danger',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      I,
                      {},
                      void 0,
                      !1,
                      { fileName: s, lineNumber: 186, columnNumber: 19 },
                      this
                    ),
                    onClick: () => i.onDelete(t),
                    children: '\u5220\u9664',
                  },
                  void 0,
                  !1,
                  { fileName: s, lineNumber: 182, columnNumber: 11 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: s, lineNumber: 130, columnNumber: 9 },
            this
          ),
      }
    ),
    a
  );
}
export { _ as getColumns };
