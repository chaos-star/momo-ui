import {
  j as s,
  c as l,
  S as p,
  B as u,
  aU as f,
  aP as h,
  aV as x,
  ag as b,
  aQ as N,
  T as S,
} from './vendor.f50a67ab.js';
import { s as y } from './index.module.14a417ff.js';
function D(e) {
  if (e == null) return '';
  if (typeof e == 'object' && !Array.isArray(e)) {
    const t = e.encryption_key;
    return typeof t == 'string' ? t : '';
  }
  if (typeof e != 'string' || !e.trim()) return '';
  try {
    const n = JSON.parse(e).encryption_key;
    return typeof n == 'string' ? n : '';
  } catch {
    return '';
  }
}
function E(e) {
  return (e || '').toUpperCase() === 'PLATFORM' ? 1 : 2;
}
function g(e, t) {
  return t === 1
    ? e['tenantSearch.businessType.system'] || '\u7CFB\u7EDF'
    : t === 2
    ? e['tenantSearch.businessType.ops'] || '\u8FD0\u8425'
    : '-';
}
function T(e, t) {
  return t === 1
    ? e['tenantSearch.dataStatus.normal'] || '\u6B63\u5E38'
    : t === 2
    ? e['tenantSearch.dataStatus.deleted'] || '\u5220\u9664'
    : String(t);
}
function j(e, t) {
  return t === 1
    ? e['tenantSearch.activeStatus.enabled'] || '\u542F\u7528'
    : t === 2
    ? e['tenantSearch.activeStatus.disabled'] || '\u7981\u7528'
    : t === 3
    ? e['tenantSearch.activeStatus.expired'] || '\u8FC7\u671F'
    : String(t);
}
function v(e) {
  if (e == null || e <= 0) return '\u2014';
  const t = new Date(e),
    n = (a) => String(a).padStart(2, '0');
  return `${t.getFullYear()}-${n(t.getMonth() + 1)}-${n(t.getDate())} ${n(
    t.getHours()
  )}:${n(t.getMinutes())}:${n(t.getSeconds())}`;
}
var r =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/tenants/constants.tsx';
const { Text: c } = S;
function V(e, t) {
  return [
    { title: e['tenantSearch.columns.id'], dataIndex: 'id', width: 72 },
    {
      title: e['tenantSearch.columns.tenantName'],
      dataIndex: 'tenantName',
      width: 160,
    },
    {
      title: e['tenantSearch.columns.tenantCode'],
      dataIndex: 'tenantCode',
      width: 150,
      render: (n) =>
        s.exports.jsxDEV(
          c,
          { copyable: !0, children: n },
          void 0,
          !1,
          { fileName: r, lineNumber: 50, columnNumber: 34 },
          this
        ),
    },
    {
      title: e['tenantSearch.columns.businessType'],
      dataIndex: 'tenantType',
      width: 100,
      render: (n, a) => g(e, E(a.tenantType)),
    },
    {
      title: e['tenantSearch.columns.tenantZone'],
      dataIndex: 'tenantZone',
      width: 140,
    },
    {
      title: e['tenantSearch.columns.eventSecret'],
      dataIndex: 'config',
      width: 200,
      render: (n, a) => {
        const i = D(a.config);
        return i
          ? s.exports.jsxDEV(
              c,
              { copyable: !0, children: i },
              void 0,
              !1,
              { fileName: r, lineNumber: 73, columnNumber: 16 },
              this
            )
          : '\u2014';
      },
    },
    {
      title: e['tenantSearch.columns.tenantStatus'],
      dataIndex: 'activeStatus',
      width: 100,
      render: (n) => {
        const a = j(e, n);
        return n === 1
          ? s.exports.jsxDEV(
              l,
              { status: 'success', text: a },
              void 0,
              !1,
              { fileName: r, lineNumber: 83, columnNumber: 18 },
              this
            )
          : n === 2
          ? s.exports.jsxDEV(
              l,
              { status: 'error', text: a },
              void 0,
              !1,
              { fileName: r, lineNumber: 86, columnNumber: 18 },
              this
            )
          : n === 3
          ? s.exports.jsxDEV(
              l,
              { status: 'warning', text: a },
              void 0,
              !1,
              { fileName: r, lineNumber: 89, columnNumber: 18 },
              this
            )
          : s.exports.jsxDEV(
              l,
              { status: 'default', text: a },
              void 0,
              !1,
              { fileName: r, lineNumber: 91, columnNumber: 16 },
              this
            );
      },
    },
    {
      title: e['tenantSearch.columns.lastOperator'],
      dataIndex: 'operatorUsername',
      width: 120,
      ellipsis: !0,
      render: (n, a) => {
        var o;
        const i = (o = a.operatorUsername) == null ? void 0 : o.trim();
        return i || '\u2014';
      },
    },
    {
      title: e['tenantSearch.columns.updatedAt'],
      dataIndex: 'updatedAt',
      width: 168,
      render: (n) => v(n),
    },
    {
      title: e['tenantSearch.columns.operations'],
      dataIndex: 'operations',
      width: 306,
      fixed: 'right',
      headerCellStyle: { paddingLeft: '12px' },
      render: (n, a) => {
        const i = a.status === 2,
          o = !i,
          m = a.activeStatus !== 1,
          d = a.activeStatus === 1;
        return s.exports.jsxDEV(
          p,
          {
            className: y.operations,
            size: 10,
            wrap: !0,
            children: [
              s.exports.jsxDEV(
                u,
                {
                  type: 'text',
                  size: 'small',
                  icon: s.exports.jsxDEV(
                    f,
                    {},
                    void 0,
                    !1,
                    { fileName: r, lineNumber: 129, columnNumber: 21 },
                    this
                  ),
                  onClick: () => t.onView(a),
                  children: e['tenantSearch.columns.operations.view'],
                },
                void 0,
                !1,
                { fileName: r, lineNumber: 126, columnNumber: 13 },
                this
              ),
              s.exports.jsxDEV(
                u,
                {
                  type: 'text',
                  size: 'small',
                  icon: s.exports.jsxDEV(
                    h,
                    {},
                    void 0,
                    !1,
                    { fileName: r, lineNumber: 137, columnNumber: 21 },
                    this
                  ),
                  disabled: i,
                  onClick: () => t.onEdit(a),
                  children: e['tenantSearch.columns.operations.edit'],
                },
                void 0,
                !1,
                { fileName: r, lineNumber: 134, columnNumber: 13 },
                this
              ),
              m
                ? s.exports.jsxDEV(
                    u,
                    {
                      type: 'text',
                      size: 'small',
                      icon: s.exports.jsxDEV(
                        x,
                        {},
                        void 0,
                        !1,
                        { fileName: r, lineNumber: 147, columnNumber: 23 },
                        this
                      ),
                      disabled: !o,
                      onClick: () => t.onEnable(a),
                      children: e['tenantSearch.columns.operations.enable'],
                    },
                    void 0,
                    !1,
                    { fileName: r, lineNumber: 144, columnNumber: 15 },
                    this
                  )
                : null,
              d
                ? s.exports.jsxDEV(
                    u,
                    {
                      type: 'text',
                      size: 'small',
                      icon: s.exports.jsxDEV(
                        b,
                        {},
                        void 0,
                        !1,
                        { fileName: r, lineNumber: 158, columnNumber: 23 },
                        this
                      ),
                      disabled: !o,
                      onClick: () => t.onDisable(a),
                      children: e['tenantSearch.columns.operations.disable'],
                    },
                    void 0,
                    !1,
                    { fileName: r, lineNumber: 155, columnNumber: 15 },
                    this
                  )
                : null,
              s.exports.jsxDEV(
                u,
                {
                  type: 'text',
                  size: 'small',
                  icon: s.exports.jsxDEV(
                    N,
                    {},
                    void 0,
                    !1,
                    { fileName: r, lineNumber: 168, columnNumber: 21 },
                    this
                  ),
                  status: 'danger',
                  disabled: i,
                  onClick: () => t.onDelete(a),
                  children: e['tenantSearch.columns.operations.delete'],
                },
                void 0,
                !1,
                { fileName: r, lineNumber: 165, columnNumber: 13 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: r, lineNumber: 125, columnNumber: 11 },
          this
        );
      },
    },
  ];
}
var C = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  getColumns: V,
});
export { j as a, g as b, C as c, T as d, v as f, V as g, D as p, E as t };
