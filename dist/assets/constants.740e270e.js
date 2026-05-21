import {
  j as s,
  c as l,
  S as c,
  B as o,
  aU as h,
  aP as x,
  aV as N,
  ag as f,
  aQ as b,
  T as S,
} from './vendor.3821b0be.js';
import { s as j } from './index.module.ea069206.js';
function v(e) {
  if (e == null || e <= 0) return '\u2014';
  try {
    return new Date(Number(e)).toLocaleString();
  } catch {
    return String(e);
  }
}
function D(e, n) {
  return n === 1
    ? e['appSearch.activeStatus.enabled']
    : n === 2
    ? e['appSearch.activeStatus.disabled']
    : '\u2014';
}
function w(e, n) {
  return n === 1
    ? e['appSearch.dataStatus.normal']
    : n === 2
    ? e['appSearch.dataStatus.deleted']
    : '\u2014';
}
function E(e, n) {
  const t = (n || '').toLowerCase();
  return t === 'android'
    ? e['appSearch.os.android']
    : t === 'ios'
    ? e['appSearch.os.ios']
    : n || '\u2014';
}
var i =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/apps/constants.tsx';
const { Text: m } = S;
function g(e, n) {
  return [
    { title: e['appSearch.columns.id'], dataIndex: 'id', width: 80 },
    {
      title: e['appSearch.columns.appCode'],
      dataIndex: 'appCode',
      width: 180,
      render: (t) =>
        s.exports.jsxDEV(
          m,
          { copyable: !0, children: t },
          void 0,
          !1,
          { fileName: i, lineNumber: 39, columnNumber: 34 },
          this
        ),
    },
    {
      title: e['appSearch.columns.tenant'],
      dataIndex: 'tenantName',
      width: 140,
      ellipsis: !0,
      render: (t, a) => {
        var r;
        return ((r = a.tenantName) == null ? void 0 : r.trim()) || '\u2014';
      },
    },
    {
      title: e['appSearch.columns.pkgName'],
      dataIndex: 'pkgName',
      width: 200,
      ellipsis: !0,
      render: (t) =>
        t
          ? s.exports.jsxDEV(
              m,
              { copyable: { text: t }, children: t },
              void 0,
              !1,
              { fileName: i, lineNumber: 55, columnNumber: 17 },
              this
            )
          : '\u2014',
    },
    {
      title: e['appSearch.columns.osType'],
      dataIndex: 'osType',
      width: 88,
      render: (t) => E(e, t),
    },
    {
      title: e['appSearch.columns.activeStatus'],
      dataIndex: 'activeStatus',
      width: 100,
      render: (t) => {
        const a = D(e, t);
        return t === 1
          ? s.exports.jsxDEV(
              l,
              { status: 'success', text: a },
              void 0,
              !1,
              { fileName: i, lineNumber: 70, columnNumber: 18 },
              this
            )
          : t === 2
          ? s.exports.jsxDEV(
              l,
              { status: 'error', text: a },
              void 0,
              !1,
              { fileName: i, lineNumber: 73, columnNumber: 18 },
              this
            )
          : s.exports.jsxDEV(
              l,
              { status: 'default', text: a },
              void 0,
              !1,
              { fileName: i, lineNumber: 75, columnNumber: 16 },
              this
            );
      },
    },
    {
      title: e['appSearch.columns.operator'],
      dataIndex: 'operatorUsername',
      width: 120,
      ellipsis: !0,
      render: (t, a) => {
        var r;
        return (
          ((r = a.operatorUsername) == null ? void 0 : r.trim()) || '\u2014'
        );
      },
    },
    {
      title: e['appSearch.columns.updatedAt'],
      dataIndex: 'updatedAt',
      width: 168,
      render: (t) => v(t),
    },
    {
      title: e['appSearch.columns.operations'],
      dataIndex: 'operations',
      width: 260,
      fixed: 'right',
      headerCellStyle: { paddingLeft: '12px' },
      render: (t, a) => {
        const r = a.status === 2,
          u = !r,
          p = a.activeStatus !== 1,
          d = a.activeStatus === 1;
        return s.exports.jsxDEV(
          c,
          {
            className: j.operations,
            size: 10,
            wrap: !0,
            children: [
              s.exports.jsxDEV(
                o,
                {
                  type: 'text',
                  size: 'small',
                  icon: s.exports.jsxDEV(
                    h,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 108, columnNumber: 21 },
                    this
                  ),
                  onClick: () => n.onView(a),
                  children: e['appSearch.columns.operations.view'],
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 105, columnNumber: 13 },
                this
              ),
              s.exports.jsxDEV(
                o,
                {
                  type: 'text',
                  size: 'small',
                  icon: s.exports.jsxDEV(
                    x,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 116, columnNumber: 21 },
                    this
                  ),
                  disabled: r,
                  onClick: () => n.onEdit(a),
                  children: e['appSearch.columns.operations.edit'],
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 113, columnNumber: 13 },
                this
              ),
              p
                ? s.exports.jsxDEV(
                    o,
                    {
                      type: 'text',
                      size: 'small',
                      icon: s.exports.jsxDEV(
                        N,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 126, columnNumber: 23 },
                        this
                      ),
                      disabled: !u,
                      onClick: () => n.onEnable(a),
                      children: e['appSearch.columns.operations.enable'],
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 123, columnNumber: 15 },
                    this
                  )
                : null,
              d
                ? s.exports.jsxDEV(
                    o,
                    {
                      type: 'text',
                      size: 'small',
                      icon: s.exports.jsxDEV(
                        f,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 137, columnNumber: 23 },
                        this
                      ),
                      disabled: !u,
                      onClick: () => n.onDisable(a),
                      children: e['appSearch.columns.operations.disable'],
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 134, columnNumber: 15 },
                    this
                  )
                : null,
              s.exports.jsxDEV(
                o,
                {
                  type: 'text',
                  size: 'small',
                  status: 'danger',
                  icon: s.exports.jsxDEV(
                    b,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 148, columnNumber: 21 },
                    this
                  ),
                  disabled: r,
                  onClick: () => n.onDelete(a),
                  children: e['appSearch.columns.operations.delete'],
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 144, columnNumber: 13 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: i, lineNumber: 104, columnNumber: 11 },
          this
        );
      },
    },
  ];
}
var I = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  getColumns: g,
});
export { D as a, I as c, w as d, v as f, g, E as o };
