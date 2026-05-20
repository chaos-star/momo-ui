import {
  j as n,
  d as o,
  a as u,
  S as h,
  B as i,
  aV as S,
  aQ as m,
  aW as x,
  ai as f,
  aR as b,
  T as y,
} from './vendor.44459b16.js';
import { s as g } from './index.module.ea069206.js';
function w(e) {
  if (e == null || e <= 0) return '\u2014';
  try {
    return new Date(Number(e)).toLocaleString();
  } catch {
    return String(e);
  }
}
function I(e, s) {
  return s === 1
    ? e['appSearch.activeStatus.enabled']
    : s === 2
    ? e['appSearch.activeStatus.disabled']
    : '\u2014';
}
function _(e, s) {
  return s === 1
    ? e['appSearch.dataStatus.normal']
    : s === 2
    ? e['appSearch.dataStatus.deleted']
    : '\u2014';
}
function C(e, s) {
  const a = (s || '').toLowerCase();
  return a === 'android'
    ? e['appSearch.os.android']
    : a === 'ios'
    ? e['appSearch.os.ios']
    : s || '\u2014';
}
const { Text: d } = y;
function T(e, s) {
  return [
    { title: e['appSearch.columns.id'], dataIndex: 'id', width: 80 },
    {
      title: e['appSearch.columns.appCode'],
      dataIndex: 'appCode',
      width: 180,
      render: (a) => n(d, { copyable: !0, children: a }),
    },
    {
      title: e['appSearch.columns.tenant'],
      dataIndex: 'tenantName',
      width: 140,
      ellipsis: !0,
      render: (a, t) => {
        var r;
        return ((r = t.tenantName) == null ? void 0 : r.trim()) || '\u2014';
      },
    },
    {
      title: e['appSearch.columns.pkgName'],
      dataIndex: 'pkgName',
      width: 200,
      ellipsis: !0,
      render: (a) =>
        a ? n(d, { copyable: { text: a }, children: a }) : '\u2014',
    },
    {
      title: e['appSearch.columns.osType'],
      dataIndex: 'osType',
      width: 88,
      render: (a) => C(e, a),
    },
    {
      title: e['appSearch.columns.activeStatus'],
      dataIndex: 'activeStatus',
      width: 100,
      render: (a) => {
        const t = I(e, a);
        return a === 1
          ? n(o, { status: 'success', text: t })
          : a === 2
          ? n(o, { status: 'error', text: t })
          : n(o, { status: 'default', text: t });
      },
    },
    {
      title: e['appSearch.columns.operator'],
      dataIndex: 'operatorUsername',
      width: 120,
      ellipsis: !0,
      render: (a, t) => {
        var r;
        return (
          ((r = t.operatorUsername) == null ? void 0 : r.trim()) || '\u2014'
        );
      },
    },
    {
      title: e['appSearch.columns.updatedAt'],
      dataIndex: 'updatedAt',
      width: 168,
      render: (a) => w(a),
    },
    {
      title: e['appSearch.columns.operations'],
      dataIndex: 'operations',
      width: 260,
      fixed: 'right',
      headerCellStyle: { paddingLeft: '12px' },
      render: (a, t) => {
        const r = t.status === 2,
          l = !r,
          p = t.activeStatus !== 1,
          c = t.activeStatus === 1;
        return u(h, {
          className: g.operations,
          size: 10,
          wrap: !0,
          children: [
            n(i, {
              type: 'text',
              size: 'small',
              icon: n(S, {}),
              onClick: () => s.onView(t),
              children: e['appSearch.columns.operations.view'],
            }),
            n(i, {
              type: 'text',
              size: 'small',
              icon: n(m, {}),
              disabled: r,
              onClick: () => s.onEdit(t),
              children: e['appSearch.columns.operations.edit'],
            }),
            p
              ? n(i, {
                  type: 'text',
                  size: 'small',
                  icon: n(x, {}),
                  disabled: !l,
                  onClick: () => s.onEnable(t),
                  children: e['appSearch.columns.operations.enable'],
                })
              : null,
            c
              ? n(i, {
                  type: 'text',
                  size: 'small',
                  icon: n(f, {}),
                  disabled: !l,
                  onClick: () => s.onDisable(t),
                  children: e['appSearch.columns.operations.disable'],
                })
              : null,
            n(i, {
              type: 'text',
              size: 'small',
              status: 'danger',
              icon: n(b, {}),
              disabled: r,
              onClick: () => s.onDelete(t),
              children: e['appSearch.columns.operations.delete'],
            }),
          ],
        });
      },
    },
  ];
}
var j = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  getColumns: T,
});
export { I as a, j as c, _ as d, w as f, T as g, C as o };
