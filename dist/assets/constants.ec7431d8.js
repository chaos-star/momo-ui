import {
  j as t,
  c as m,
  S as N,
  B as l,
  aU as b,
  aP as f,
  ah as S,
  aV as j,
  ag as v,
  aQ as y,
  T as E,
} from './vendor.3821b0be.js';
import { b as D, t as c, p as V, a as w, f as I } from './utils.49caa52b.js';
import { s as g } from './index.module.ea069206.js';
var n =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/tenants/constants.tsx';
const { Text: d } = E;
function B(s, o) {
  return [
    { title: s['tenantSearch.columns.id'], dataIndex: 'id', width: 72 },
    {
      title: s['tenantSearch.columns.tenantName'],
      dataIndex: 'tenantName',
      width: 160,
    },
    {
      title: s['tenantSearch.columns.tenantCode'],
      dataIndex: 'tenantCode',
      width: 150,
      render: (a) =>
        t.exports.jsxDEV(
          d,
          { copyable: !0, children: a },
          void 0,
          !1,
          { fileName: n, lineNumber: 52, columnNumber: 34 },
          this
        ),
    },
    {
      title: s['tenantSearch.columns.businessType'],
      dataIndex: 'tenantType',
      width: 100,
      render: (a, e) => D(s, c(e.tenantType)),
    },
    {
      title: s['tenantSearch.columns.tenantZone'],
      dataIndex: 'tenantZone',
      width: 140,
    },
    {
      title: s['tenantSearch.columns.eventSecret'],
      dataIndex: 'config',
      width: 200,
      render: (a, e) => {
        const i = V(e.config);
        return i
          ? t.exports.jsxDEV(
              d,
              { copyable: !0, children: i },
              void 0,
              !1,
              { fileName: n, lineNumber: 75, columnNumber: 16 },
              this
            )
          : '\u2014';
      },
    },
    {
      title: s['tenantSearch.columns.tenantStatus'],
      dataIndex: 'activeStatus',
      width: 100,
      render: (a) => {
        const e = w(s, a);
        return a === 1
          ? t.exports.jsxDEV(
              m,
              { status: 'success', text: e },
              void 0,
              !1,
              { fileName: n, lineNumber: 85, columnNumber: 18 },
              this
            )
          : a === 2
          ? t.exports.jsxDEV(
              m,
              { status: 'error', text: e },
              void 0,
              !1,
              { fileName: n, lineNumber: 88, columnNumber: 18 },
              this
            )
          : a === 3
          ? t.exports.jsxDEV(
              m,
              { status: 'warning', text: e },
              void 0,
              !1,
              { fileName: n, lineNumber: 91, columnNumber: 18 },
              this
            )
          : t.exports.jsxDEV(
              m,
              { status: 'default', text: e },
              void 0,
              !1,
              { fileName: n, lineNumber: 93, columnNumber: 16 },
              this
            );
      },
    },
    {
      title: s['tenantSearch.columns.lastOperator'],
      dataIndex: 'operatorUsername',
      width: 120,
      ellipsis: !0,
      render: (a, e) => {
        var r;
        const i = (r = e.operatorUsername) == null ? void 0 : r.trim();
        return i || '\u2014';
      },
    },
    {
      title: s['tenantSearch.columns.updatedAt'],
      dataIndex: 'updatedAt',
      width: 168,
      render: (a) => I(a),
    },
    {
      title: s['tenantSearch.columns.operations'],
      dataIndex: 'operations',
      width: 306,
      fixed: 'right',
      headerCellStyle: { paddingLeft: '12px' },
      render: (a, e) => {
        const i = e.status === 2,
          r = c(e.tenantType) === 1,
          u = !i,
          p = !i && !r,
          x = e.activeStatus !== 1,
          h = e.activeStatus === 1;
        return t.exports.jsxDEV(
          N,
          {
            className: g.operations,
            size: 10,
            wrap: !0,
            children: [
              t.exports.jsxDEV(
                l,
                {
                  type: 'text',
                  size: 'small',
                  icon: t.exports.jsxDEV(
                    b,
                    {},
                    void 0,
                    !1,
                    { fileName: n, lineNumber: 134, columnNumber: 21 },
                    this
                  ),
                  onClick: () => o.onView(e),
                  children: s['tenantSearch.columns.operations.view'],
                },
                void 0,
                !1,
                { fileName: n, lineNumber: 131, columnNumber: 13 },
                this
              ),
              t.exports.jsxDEV(
                l,
                {
                  type: 'text',
                  size: 'small',
                  icon: t.exports.jsxDEV(
                    f,
                    {},
                    void 0,
                    !1,
                    { fileName: n, lineNumber: 142, columnNumber: 21 },
                    this
                  ),
                  disabled: i,
                  onClick: () => o.onEdit(e),
                  children: s['tenantSearch.columns.operations.edit'],
                },
                void 0,
                !1,
                { fileName: n, lineNumber: 139, columnNumber: 13 },
                this
              ),
              t.exports.jsxDEV(
                l,
                {
                  type: 'text',
                  size: 'small',
                  icon: t.exports.jsxDEV(
                    S,
                    {},
                    void 0,
                    !1,
                    { fileName: n, lineNumber: 151, columnNumber: 21 },
                    this
                  ),
                  disabled: !p,
                  onClick: () => o.onBoundary(e),
                  children: s['tenantSearch.columns.operations.boundary'],
                },
                void 0,
                !1,
                { fileName: n, lineNumber: 148, columnNumber: 13 },
                this
              ),
              x
                ? t.exports.jsxDEV(
                    l,
                    {
                      type: 'text',
                      size: 'small',
                      icon: t.exports.jsxDEV(
                        j,
                        {},
                        void 0,
                        !1,
                        { fileName: n, lineNumber: 161, columnNumber: 23 },
                        this
                      ),
                      disabled: !u,
                      onClick: () => o.onEnable(e),
                      children: s['tenantSearch.columns.operations.enable'],
                    },
                    void 0,
                    !1,
                    { fileName: n, lineNumber: 158, columnNumber: 15 },
                    this
                  )
                : null,
              h
                ? t.exports.jsxDEV(
                    l,
                    {
                      type: 'text',
                      size: 'small',
                      icon: t.exports.jsxDEV(
                        v,
                        {},
                        void 0,
                        !1,
                        { fileName: n, lineNumber: 172, columnNumber: 23 },
                        this
                      ),
                      disabled: !u,
                      onClick: () => o.onDisable(e),
                      children: s['tenantSearch.columns.operations.disable'],
                    },
                    void 0,
                    !1,
                    { fileName: n, lineNumber: 169, columnNumber: 15 },
                    this
                  )
                : null,
              t.exports.jsxDEV(
                l,
                {
                  type: 'text',
                  size: 'small',
                  icon: t.exports.jsxDEV(
                    y,
                    {},
                    void 0,
                    !1,
                    { fileName: n, lineNumber: 182, columnNumber: 21 },
                    this
                  ),
                  status: 'danger',
                  disabled: i,
                  onClick: () => o.onDelete(e),
                  children: s['tenantSearch.columns.operations.delete'],
                },
                void 0,
                !1,
                { fileName: n, lineNumber: 179, columnNumber: 13 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: n, lineNumber: 130, columnNumber: 11 },
          this
        );
      },
    },
  ];
}
export { B as getColumns };
