import {
  j as r,
  d as i,
  a as o,
  S as c,
  B as s,
  T as d,
} from './vendor.64a7fdcd.js';
import { s as l } from './index.module.02cb7149.js';
function b(t) {
  if (t == null) return '';
  if (typeof t == 'object' && !Array.isArray(t)) {
    const e = t.encryption_key;
    return typeof e == 'string' ? e : '';
  }
  if (typeof t != 'string' || !t.trim()) return '';
  try {
    const n = JSON.parse(t).encryption_key;
    return typeof n == 'string' ? n : '';
  } catch {
    return '';
  }
}
function p(t) {
  return (t || '').toUpperCase() === 'PLATFORM' ? 1 : 2;
}
function S(t, e) {
  return e === 1
    ? t['tenantSearch.businessType.system'] || '\u7CFB\u7EDF'
    : e === 2
    ? t['tenantSearch.businessType.ops'] || '\u8FD0\u8425'
    : '-';
}
function u(t, e) {
  return e === 1
    ? t['tenantSearch.dataStatus.normal'] || '\u6B63\u5E38'
    : e === 2
    ? t['tenantSearch.dataStatus.deleted'] || '\u5220\u9664'
    : String(e);
}
function h(t, e) {
  return e === 1
    ? t['tenantSearch.activeStatus.enabled'] || '\u542F\u7528'
    : e === 2
    ? t['tenantSearch.activeStatus.disabled'] || '\u7981\u7528'
    : e === 3
    ? t['tenantSearch.activeStatus.expired'] || '\u8FC7\u671F'
    : String(e);
}
function T(t) {
  const e = t.config;
  if (typeof e == 'string') return e;
  try {
    return JSON.stringify(e);
  } catch {
    return '';
  }
}
const { Text: y } = d;
function f(t, e) {
  return [
    {
      title: t['tenantSearch.columns.tenantName'],
      dataIndex: 'tenantName',
      width: 160,
    },
    {
      title: t['tenantSearch.columns.tenantCode'],
      dataIndex: 'tenantCode',
      width: 150,
      render: (n) => r(y, { copyable: !0, children: n }),
    },
    {
      title: t['tenantSearch.columns.businessType'],
      dataIndex: 'tenantType',
      width: 100,
      render: (n, a) => S(t, p(a.tenantType)),
    },
    {
      title: t['tenantSearch.columns.tenantZone'],
      dataIndex: 'tenantZone',
      width: 140,
    },
    {
      title: t['tenantSearch.columns.activeStatus'],
      dataIndex: 'activeStatus',
      width: 100,
      render: (n) => h(t, n),
    },
    {
      title: t['tenantSearch.columns.dataStatus'],
      dataIndex: 'status',
      width: 100,
      render: (n) =>
        n === 2
          ? r(i, { status: 'error', text: u(t, n) })
          : r(i, { status: 'success', text: u(t, n) }),
    },
    {
      title: t['tenantSearch.columns.operations'],
      dataIndex: 'operations',
      width: 220,
      fixed: 'right',
      headerCellStyle: { paddingLeft: '15px' },
      render: (n, a) =>
        o(c, {
          className: l.operations,
          children: [
            r(s, {
              type: 'text',
              size: 'small',
              onClick: () => e.onView(a),
              children: t['tenantSearch.columns.operations.view'],
            }),
            r(s, {
              type: 'text',
              size: 'small',
              disabled: a.status === 2,
              onClick: () => e.onEdit(a),
              children: t['tenantSearch.columns.operations.edit'],
            }),
            r(s, {
              type: 'text',
              size: 'small',
              status: 'danger',
              disabled: a.status === 2,
              onClick: () => e.onDelete(a),
              children: t['tenantSearch.columns.operations.delete'],
            }),
          ],
        }),
    },
  ];
}
var g = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  getColumns: f,
});
export { h as a, S as b, g as c, u as d, T as f, f as g, b as p, p as t };
