var ne = Object.defineProperty,
  se = Object.defineProperties;
var ie = Object.getOwnPropertyDescriptors;
var j = Object.getOwnPropertySymbols;
var re = Object.prototype.hasOwnProperty,
  le = Object.prototype.propertyIsEnumerable;
var z = (e, i, l) =>
    i in e
      ? ne(e, i, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (e[i] = l),
  T = (e, i) => {
    for (var l in i || (i = {})) re.call(i, l) && z(e, l, i[l]);
    if (j) for (var l of j(i)) le.call(i, l) && z(e, l, i[l]);
    return e;
  },
  N = (e, i) => se(e, ie(i));
import {
  r as u,
  u as ce,
  j as t,
  F as q,
  t as oe,
  ag as c,
  aW as x,
  M as g,
  a as r,
  av as ue,
  S as M,
  B as C,
  aX as de,
  $ as he,
  aY as me,
  aM as pe,
  ah as b,
  aL as h,
  K as L,
  T as _,
  aZ as Se,
  y as ve,
} from './vendor.64a7fdcd.js';
/* empty css               */ /* empty css               */ /* empty css              */ import {
  d as we,
  e as I,
  u as be,
} from './index.6c1213a0.js';
import { l as ye, S as fe } from './form.f6e79932.js';
import { s as n } from './index.module.02cb7149.js';
import {
  p as G,
  t as B,
  g as ge,
  b as Te,
  a as Ne,
  d as xe,
  f as Ce,
} from './constants.7bb2469b.js';
const Le = (e) => {
  const { backup: i, requiredPermissions: l, oneOfPerm: p } = e,
    [S, v] = u.exports.useState(!1),
    w = ce((y) => y.userInfo);
  return (
    u.exports.useEffect(() => {
      const y = we({ requiredPermissions: l, oneOfPerm: p }, w.permissions);
      v(y);
    }, [l, p, w.permissions]),
    S ? t(q, { children: D(e.children) }) : i ? t(q, { children: D(i) }) : null
  );
};
function D(e) {
  return oe.isValidElement(e) ? e : t(q, { children: e });
}
var Ie = Le;
function Ae(e) {
  return I({ url: '/api/system/tenants/list', method: 'GET', params: e });
}
function Ve(e) {
  return I({ url: '/api/system/tenants/manage', method: 'POST', data: e });
}
function ke(e) {
  return I({ url: '/api/system/tenants/manage', method: 'PUT', data: e });
}
function Ee(e) {
  return I({
    url: '/api/system/tenants/manage',
    method: 'DELETE',
    params: { id: e },
  });
}
const { Title: Re } = _,
  K = [
    'Asia/Shanghai',
    'Asia/Hong_Kong',
    'Asia/Singapore',
    'Asia/Tokyo',
    'UTC',
    'Europe/London',
    'Europe/Berlin',
    'America/New_York',
    'America/Los_Angeles',
  ];
function qe(e, i, l) {
  var p, S;
  return {
    page: i,
    pageSize: l,
    tenantName: ((p = e.tenantName) == null ? void 0 : p.trim()) || void 0,
    tenantCode: ((S = e.tenantCode) == null ? void 0 : S.trim()) || void 0,
    businessType:
      e.businessType === 0 || e.businessType == null ? void 0 : e.businessType,
    status: e.status === 0 || e.status == null ? void 0 : e.status,
  };
}
function Be() {
  const e = be(ye),
    [i] = c.useForm(),
    [l] = c.useForm(),
    [p, S] = u.exports.useState([]),
    [v, w] = u.exports.useState({
      sizeCanChange: !0,
      showTotal: !0,
      pageSize: 10,
      current: 1,
      pageSizeChangeResetCurrent: !0,
      showJumper: !0,
      pageSizeOptions: [10, 20, 50, 100],
    }),
    [y, O] = u.exports.useState(!0),
    [Z, W] = u.exports.useState({}),
    [$, H] = u.exports.useState(0),
    [U, A] = u.exports.useState(!1),
    [Y, V] = u.exports.useState(!1),
    [d, P] = u.exports.useState(null),
    [J, k] = u.exports.useState(''),
    [X, E] = u.exports.useState('');
  u.exports.useEffect(() => {
    let a = !1;
    const { current: s = 1, pageSize: m = 10 } = v;
    return (
      O(!0),
      Ae(qe(Z, s, Number(m)))
        .then((o) => {
          a || (S(o.list || []), w((ae) => N(T({}, ae), { total: o.total })));
        })
        .finally(() => {
          a || O(!1);
        }),
      () => {
        a = !0;
      }
    );
  }, [v.current, v.pageSize, Z, $]);
  const f = u.exports.useCallback(() => H((a) => a + 1), []),
    Q = (a) => {
      w((s) => N(T({}, s), { current: 1 })), W(a);
    },
    ee = (a) => {
      w((s) => {
        var m, o;
        return N(T({}, s), {
          current: (m = a.current) != null ? m : s.current,
          pageSize: (o = a.pageSize) != null ? o : s.pageSize,
        });
      });
    },
    F = u.exports.useMemo(
      () => ({
        onView: (a) => P(a),
        onEdit: (a) => {
          const s = G(a.config);
          k(s),
            E(a.tenantCode),
            l.setFieldsValue({
              id: a.id,
              tenantName: a.tenantName,
              businessType: B(a.tenantType),
              tenantZone: a.tenantZone,
              activeStatus: a.activeStatus,
              eventSecret: s,
              expireAt: a.expireAt,
            }),
            V(!0);
        },
        onDelete: (a) => {
          x.confirm({
            title: e['tenantSearch.confirm.deleteTitle'],
            content: e['tenantSearch.confirm.deleteContent'],
            onOk: async () => {
              await Ee(a.id), g.success(e['tenantSearch.msg.deleteOk']), f();
            },
          });
        },
      }),
      [l, e, f]
    ),
    te = u.exports.useMemo(() => ge(e, F), [e, F]),
    R = d ? G(d.config) : '';
  return r(ue, {
    children: [
      t(Re, { heading: 6, children: e['tenantSearch.title'] }),
      t(fe, { onSearch: Q }),
      t(Ie, {
        requiredPermissions: [{ resource: 'system:tenant:access' }],
        children: r('div', {
          className: n['button-group'],
          children: [
            t(M, {
              children: t(C, {
                type: 'primary',
                icon: t(de, {}),
                onClick: () => {
                  i.resetFields(),
                    i.setFieldsValue({
                      businessType: 2,
                      tenantZone: 'Asia/Shanghai',
                      activeStatus: 1,
                    }),
                    A(!0);
                },
                children: e['tenantSearch.operations.add'],
              }),
            }),
            r(M, {
              children: [
                t(C, {
                  icon: t(he, {}),
                  onClick: () => f(),
                  children: e['tenantSearch.refresh'],
                }),
                t(C, {
                  icon: t(me, {}),
                  onClick: () => g.info(e['tenantSearch.exportTip']),
                  children: e['tenantSearch.operation.download'],
                }),
              ],
            }),
          ],
        }),
      }),
      t(pe, {
        rowKey: 'id',
        loading: y,
        onChange: ee,
        pagination: v,
        columns: te,
        data: p,
        border: !0,
        scroll: { x: 1100 },
      }),
      t(x, {
        title: e['tenantSearch.modal.createTitle'],
        visible: U,
        onCancel: () => A(!1),
        onOk: async () => {
          var a, s, m;
          try {
            const o = await i.validate();
            await Ve({
              tenantName: o.tenantName.trim(),
              tenantCode: o.tenantCode.trim().toLowerCase(),
              businessType: o.businessType,
              tenantZone: o.tenantZone,
              eventSecret:
                ((a = o.eventSecret) == null ? void 0 : a.trim()) || void 0,
              activeStatus: (s = o.activeStatus) != null ? s : 1,
              expireAt: (m = o.expireAt) != null ? m : 0,
            }),
              g.success(e['tenantSearch.msg.createOk']),
              A(!1),
              f();
          } catch {}
        },
        unmountOnExit: !0,
        style: { width: 520 },
        children: r(c, {
          form: i,
          layout: 'vertical',
          children: [
            t(c.Item, {
              label: e['tenantSearch.columns.tenantName'],
              field: 'tenantName',
              rules: [
                {
                  required: !0,
                  message: e['tenantSearch.validation.required'],
                },
              ],
              children: t(b, {}),
            }),
            t(c.Item, {
              label: e['tenantSearch.columns.tenantCode'],
              field: 'tenantCode',
              rules: [
                {
                  required: !0,
                  message: e['tenantSearch.validation.required'],
                },
                {
                  match: /^[a-z0-9][a-z0-9_-]{1,62}$/,
                  message: e['tenantSearch.validation.tenantCode'],
                },
              ],
              children: t(b, { placeholder: 'demo2' }),
            }),
            t(c.Item, {
              label: e['tenantSearch.columns.businessType'],
              field: 'businessType',
              rules: [
                {
                  required: !0,
                  message: e['tenantSearch.validation.required'],
                },
              ],
              children: r(h.Group, {
                children: [
                  t(h, {
                    value: 1,
                    children: e['tenantSearch.businessType.system'],
                  }),
                  t(h, {
                    value: 2,
                    children: e['tenantSearch.businessType.ops'],
                  }),
                ],
              }),
            }),
            t(c.Item, {
              label: e['tenantSearch.columns.tenantZone'],
              field: 'tenantZone',
              rules: [
                {
                  required: !0,
                  message: e['tenantSearch.validation.required'],
                },
              ],
              children: t(L, {
                allowCreate: !0,
                placeholder: 'IANA',
                children: K.map((a) =>
                  t(L.Option, { value: a, children: a }, a)
                ),
              }),
            }),
            t(c.Item, {
              label: 'encryption_key',
              field: 'eventSecret',
              rules: [
                {
                  validator: (a, s) =>
                    !a || !String(a).trim()
                      ? s()
                      : String(a).trim().length !== 16
                      ? s(e['tenantSearch.validation.encryptionLen'])
                      : s(),
                },
              ],
              children: t(b.Password, { autoComplete: 'new-password' }),
            }),
            t(c.Item, {
              label: e['tenantSearch.columns.activeStatus'],
              field: 'activeStatus',
              initialValue: 1,
              children: r(h.Group, {
                children: [
                  t(h, {
                    value: 1,
                    children: e['tenantSearch.activeStatus.enabled'],
                  }),
                  t(h, {
                    value: 2,
                    children: e['tenantSearch.activeStatus.disabled'],
                  }),
                  t(h, {
                    value: 3,
                    children: e['tenantSearch.activeStatus.expired'],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      t(x, {
        title: e['tenantSearch.modal.editTitle'],
        visible: Y,
        onCancel: () => {
          V(!1), k(''), E('');
        },
        onOk: async () => {
          var a;
          try {
            const s = await l.validate(),
              m = s.eventSecret != null ? String(s.eventSecret).trim() : '',
              o = {
                id: s.id,
                tenantName: (a = s.tenantName) == null ? void 0 : a.trim(),
                businessType: s.businessType,
                tenantZone: s.tenantZone,
                activeStatus: s.activeStatus,
                expireAt: s.expireAt,
              };
            m !== (J || '').trim() && (o.eventSecret = m),
              await ke(o),
              g.success(e['tenantSearch.msg.saveOk']),
              V(!1),
              k(''),
              E(''),
              f();
          } catch {}
        },
        unmountOnExit: !0,
        style: { width: 520 },
        children: r(c, {
          form: l,
          layout: 'vertical',
          children: [
            t(c.Item, { field: 'id', hidden: !0, children: t(b, {}) }),
            t(c.Item, {
              label: e['tenantSearch.columns.tenantCode'],
              children: t(_.Text, { type: 'secondary', children: X }),
            }),
            t(c.Item, {
              label: e['tenantSearch.columns.tenantName'],
              field: 'tenantName',
              rules: [
                {
                  required: !0,
                  message: e['tenantSearch.validation.required'],
                },
              ],
              children: t(b, {}),
            }),
            t(c.Item, {
              label: e['tenantSearch.columns.businessType'],
              field: 'businessType',
              rules: [
                {
                  required: !0,
                  message: e['tenantSearch.validation.required'],
                },
              ],
              children: r(h.Group, {
                children: [
                  t(h, {
                    value: 1,
                    children: e['tenantSearch.businessType.system'],
                  }),
                  t(h, {
                    value: 2,
                    children: e['tenantSearch.businessType.ops'],
                  }),
                ],
              }),
            }),
            t(c.Item, {
              label: e['tenantSearch.columns.tenantZone'],
              field: 'tenantZone',
              rules: [
                {
                  required: !0,
                  message: e['tenantSearch.validation.required'],
                },
              ],
              children: t(L, {
                allowCreate: !0,
                children: K.map((a) =>
                  t(L.Option, { value: a, children: a }, a)
                ),
              }),
            }),
            t(c.Item, {
              label: 'encryption_key',
              field: 'eventSecret',
              rules: [
                {
                  validator: (a, s) =>
                    a == null || !String(a).trim()
                      ? s()
                      : String(a).trim().length !== 16
                      ? s(e['tenantSearch.validation.encryptionLen'])
                      : s(),
                },
              ],
              children: t(b.Password, { autoComplete: 'new-password' }),
            }),
            t(c.Item, {
              label: e['tenantSearch.columns.activeStatus'],
              field: 'activeStatus',
              children: r(h.Group, {
                children: [
                  t(h, {
                    value: 1,
                    children: e['tenantSearch.activeStatus.enabled'],
                  }),
                  t(h, {
                    value: 2,
                    children: e['tenantSearch.activeStatus.disabled'],
                  }),
                  t(h, {
                    value: 3,
                    children: e['tenantSearch.activeStatus.expired'],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      t(x, {
        title: e['tenantSearch.modal.viewTitle'],
        visible: !!d,
        footer: null,
        onCancel: () => P(null),
        unmountOnExit: !0,
        style: { width: 560 },
        children:
          d &&
          r('div', {
            children: [
              r('div', {
                className: n.viewRow,
                children: [
                  t('span', {
                    className: n.viewLabel,
                    children: e['tenantSearch.columns.tenantName'],
                  }),
                  t('span', { className: n.viewValue, children: d.tenantName }),
                ],
              }),
              r('div', {
                className: n.viewRow,
                children: [
                  t('span', {
                    className: n.viewLabel,
                    children: e['tenantSearch.columns.tenantCode'],
                  }),
                  t('span', { className: n.viewValue, children: d.tenantCode }),
                ],
              }),
              r('div', {
                className: n.viewRow,
                children: [
                  t('span', {
                    className: n.viewLabel,
                    children: e['tenantSearch.columns.businessType'],
                  }),
                  t('span', {
                    className: n.viewValue,
                    children: Te(e, B(d.tenantType)),
                  }),
                ],
              }),
              r('div', {
                className: n.viewRow,
                children: [
                  t('span', {
                    className: n.viewLabel,
                    children: e['tenantSearch.columns.tenantZone'],
                  }),
                  t('span', { className: n.viewValue, children: d.tenantZone }),
                ],
              }),
              r('div', {
                className: n.viewRow,
                children: [
                  t('span', {
                    className: n.viewLabel,
                    children: e['tenantSearch.columns.activeStatus'],
                  }),
                  t('span', {
                    className: n.viewValue,
                    children: Ne(e, d.activeStatus),
                  }),
                ],
              }),
              r('div', {
                className: n.viewRow,
                children: [
                  t('span', {
                    className: n.viewLabel,
                    children: e['tenantSearch.columns.dataStatus'],
                  }),
                  t('span', {
                    className: n.viewValue,
                    children: xe(e, d.status),
                  }),
                ],
              }),
              r('div', {
                className: n.viewRow,
                children: [
                  t('span', {
                    className: n.viewLabel,
                    children: 'encryption_key',
                  }),
                  r('div', {
                    className: n.secretRow,
                    children: [
                      t('span', {
                        className: n.viewValue,
                        children: R || '\u2014',
                      }),
                      R
                        ? t(C, {
                            type: 'text',
                            size: 'mini',
                            icon: t(Se, {}),
                            onClick: () => {
                              ve(R), g.success(e['tenantSearch.msg.copied']);
                            },
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              r('div', {
                className: n.viewRow,
                children: [
                  t('span', { className: n.viewLabel, children: 'config' }),
                  t('span', { className: n.viewValue, children: Ce(d) }),
                ],
              }),
              r('div', {
                className: n.viewRow,
                children: [
                  t('span', { className: n.viewLabel, children: 'expireAt' }),
                  t('span', {
                    className: n.viewValue,
                    children: String(d.expireAt),
                  }),
                ],
              }),
              r('div', {
                className: n.viewRow,
                children: [
                  t('span', { className: n.viewLabel, children: 'createdAt' }),
                  t('span', {
                    className: n.viewValue,
                    children: String(d.createdAt),
                  }),
                ],
              }),
              r('div', {
                className: n.viewRow,
                children: [
                  t('span', { className: n.viewLabel, children: 'updatedAt' }),
                  t('span', {
                    className: n.viewValue,
                    children: String(d.updatedAt),
                  }),
                ],
              }),
            ],
          }),
      }),
    ],
  });
}
export { Be as default };
