import {
  j as n,
  d as l,
  a as S,
  S as y,
  B as o,
  aV as x,
  aQ as f,
  aj as b,
  aW as w,
  ai as I,
  aR as T,
  T as g,
} from './vendor.44459b16.js';
import { b as C, t as c, p as j, a as z, f as E } from './utils.49caa52b.js';
import { s as B } from './index.module.ea069206.js';
const { Text: u } = g;
function _(t, i) {
  return [
    { title: t['tenantSearch.columns.id'], dataIndex: 'id', width: 72 },
    {
      title: t['tenantSearch.columns.tenantName'],
      dataIndex: 'tenantName',
      width: 160,
    },
    {
      title: t['tenantSearch.columns.tenantCode'],
      dataIndex: 'tenantCode',
      width: 150,
      render: (a) => n(u, { copyable: !0, children: a }),
    },
    {
      title: t['tenantSearch.columns.businessType'],
      dataIndex: 'tenantType',
      width: 100,
      render: (a, e) => C(t, c(e.tenantType)),
    },
    {
      title: t['tenantSearch.columns.tenantZone'],
      dataIndex: 'tenantZone',
      width: 140,
    },
    {
      title: t['tenantSearch.columns.eventSecret'],
      dataIndex: 'config',
      width: 200,
      render: (a, e) => {
        const s = j(e.config);
        return s ? n(u, { copyable: !0, children: s }) : '\u2014';
      },
    },
    {
      title: t['tenantSearch.columns.tenantStatus'],
      dataIndex: 'activeStatus',
      width: 100,
      render: (a) => {
        const e = z(t, a);
        return a === 1
          ? n(l, { status: 'success', text: e })
          : a === 2
          ? n(l, { status: 'error', text: e })
          : a === 3
          ? n(l, { status: 'warning', text: e })
          : n(l, { status: 'default', text: e });
      },
    },
    {
      title: t['tenantSearch.columns.lastOperator'],
      dataIndex: 'operatorUsername',
      width: 120,
      ellipsis: !0,
      render: (a, e) => {
        var r;
        const s = (r = e.operatorUsername) == null ? void 0 : r.trim();
        return s || '\u2014';
      },
    },
    {
      title: t['tenantSearch.columns.updatedAt'],
      dataIndex: 'updatedAt',
      width: 168,
      render: (a) => E(a),
    },
    {
      title: t['tenantSearch.columns.operations'],
      dataIndex: 'operations',
      width: 306,
      fixed: 'right',
      headerCellStyle: { paddingLeft: '12px' },
      render: (a, e) => {
        const s = e.status === 2,
          r = c(e.tenantType) === 1,
          d = !s,
          p = !s && !r,
          h = e.activeStatus !== 1,
          m = e.activeStatus === 1;
        return S(y, {
          className: B.operations,
          size: 10,
          wrap: !0,
          children: [
            n(o, {
              type: 'text',
              size: 'small',
              icon: n(x, {}),
              onClick: () => i.onView(e),
              children: t['tenantSearch.columns.operations.view'],
            }),
            n(o, {
              type: 'text',
              size: 'small',
              icon: n(f, {}),
              disabled: s,
              onClick: () => i.onEdit(e),
              children: t['tenantSearch.columns.operations.edit'],
            }),
            n(o, {
              type: 'text',
              size: 'small',
              icon: n(b, {}),
              disabled: !p,
              onClick: () => i.onBoundary(e),
              children: t['tenantSearch.columns.operations.boundary'],
            }),
            h
              ? n(o, {
                  type: 'text',
                  size: 'small',
                  icon: n(w, {}),
                  disabled: !d,
                  onClick: () => i.onEnable(e),
                  children: t['tenantSearch.columns.operations.enable'],
                })
              : null,
            m
              ? n(o, {
                  type: 'text',
                  size: 'small',
                  icon: n(I, {}),
                  disabled: !d,
                  onClick: () => i.onDisable(e),
                  children: t['tenantSearch.columns.operations.disable'],
                })
              : null,
            n(o, {
              type: 'text',
              size: 'small',
              icon: n(T, {}),
              status: 'danger',
              disabled: s,
              onClick: () => i.onDelete(e),
              children: t['tenantSearch.columns.operations.delete'],
            }),
          ],
        });
      },
    },
  ];
}
export { _ as getColumns };
