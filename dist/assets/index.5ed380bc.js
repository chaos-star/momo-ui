import {
  u as be,
  r,
  ag as l,
  aS as v,
  M as C,
  a as b,
  av as fe,
  j as a,
  S as ve,
  B as ye,
  aT as ge,
  aM as Te,
  K as L,
  ah as d,
  aX as Ie,
  T as y,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import { P as Ae } from './index.e971b0f8.js';
import { a as g, u as Ce, b as Le } from './index.97399a5e.js';
import { l as ke, S as Ne } from './form.c58b6385.js';
import { a as k, A as N } from './ArcoSelectInputIds.2dc06435.js';
import { u as xe } from './useArcoPaginationFieldIds.1ba1c2b9.js';
import { s as i } from './index.module.ea069206.js';
import {
  g as we,
  o as Ee,
  a as Fe,
  d as Oe,
  f as H,
} from './constants.493a6568.js';
function _e(e) {
  return g({ url: '/api/system/app/list', method: 'GET', params: e });
}
function De() {
  return g({ url: '/api/system/tenants/options', method: 'GET' });
}
function Me(e) {
  return g({ url: '/api/system/app/manage', method: 'POST', data: e });
}
function qe(e) {
  return g({ url: '/api/system/app/manage', method: 'PUT', data: e });
}
function J(e) {
  return g({
    url: '/api/system/app/manage/active-status',
    method: 'PATCH',
    data: e,
  });
}
function je(e) {
  return g({
    url: '/api/system/app/manage',
    method: 'DELETE',
    params: { id: e },
  });
}
const { Title: Be } = y,
  D = 'app-modal-create-tenantId',
  X = `${D}-field-label`,
  M = 'app-modal-create-osType',
  Q = `${M}-field-label`,
  q = 'app-modal-edit-tenantId',
  Y = `${q}-field-label`,
  j = 'app-modal-edit-osType',
  Z = `${j}-field-label`;
function Pe(e, o, m, c) {
  var T, h, S;
  return {
    page: o,
    pageSize: m,
    tenantId: c && e.tenantId != null && e.tenantId > 0 ? e.tenantId : void 0,
    appCode: ((T = e.appCode) == null ? void 0 : T.trim()) || void 0,
    pkgName: ((h = e.pkgName) == null ? void 0 : h.trim()) || void 0,
    osType: ((S = e.osType) == null ? void 0 : S.trim()) || void 0,
    activeStatus:
      e.activeStatus === 0 || e.activeStatus == null ? void 0 : e.activeStatus,
    status: e.status === 0 || e.status == null ? void 0 : e.status,
  };
}
function Ke(e) {
  return (
    ((e == null ? void 0 : e.tenantType) || '').toUpperCase() === 'PLATFORM'
  );
}
function ea() {
  const e = Ce(ke),
    o = be((t) => t.userInfo),
    m = r.exports.useMemo(
      () => Ke(o == null ? void 0 : o.defaultTenant),
      [o == null ? void 0 : o.defaultTenant]
    ),
    c = r.exports.useMemo(
      () =>
        m &&
        Le(
          { requiredPermissions: [{ resource: 'system:tenant:access' }] },
          (o == null ? void 0 : o.permissions) || {}
        ),
      [m, o == null ? void 0 : o.permissions]
    ),
    T = !m || c,
    [h] = l.useForm(),
    [S] = l.useForm(),
    [ee, ae] = r.exports.useState([]),
    [I, B] = r.exports.useState(1),
    [A, te] = r.exports.useState(10),
    [x, re] = r.exports.useState(0),
    se = r.exports.useMemo(
      () => ({
        sizeCanChange: !0,
        showTotal: !0,
        pageSize: A,
        current: I,
        total: x,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [I, A, x]
    ),
    [P, K] = r.exports.useState(!0),
    [R, le] = r.exports.useState({}),
    [ie, ne] = r.exports.useState(0),
    [w, E] = r.exports.useState([]),
    [oe, F] = r.exports.useState(!1),
    [pe, O] = r.exports.useState(!1),
    [s, z] = r.exports.useState(null),
    _ = r.exports.useRef(null),
    V = r.exports.useRef(null);
  xe(V, 'app-list-pagination', I, A, x, P),
    r.exports.useEffect(() => {
      if (!c) {
        E([]);
        return;
      }
      let t = !1;
      return (
        De()
          .then((p) => {
            t || E(p || []);
          })
          .catch(() => {
            t || E([]);
          }),
        () => {
          t = !0;
        }
      );
    }, [c]),
    r.exports.useEffect(() => {
      let t = !1;
      return (
        K(!0),
        _e(Pe(R, I, A, c))
          .then((p) => {
            var n;
            t || (ae(p.list || []), re((n = p.total) != null ? n : 0));
          })
          .finally(() => {
            t || K(!1);
          }),
        () => {
          t = !0;
        }
      );
    }, [I, A, R, ie, c]);
  const f = r.exports.useCallback(() => ne((t) => t + 1), []),
    ce = (t) => {
      B(1), le(t);
    },
    de = (t) => {
      B((p) => {
        var n;
        return (n = t.current) != null ? n : p;
      }),
        te((p) => (t.pageSize != null ? Number(t.pageSize) : p));
    },
    $ = r.exports.useMemo(
      () => ({
        onView: (t) => z(t),
        onEdit: (t) => {
          (_.current = t),
            S.setFieldsValue({
              id: t.id,
              tenantId: t.tenantId,
              appCode: t.appCode,
              pkgName: t.pkgName,
              osType: t.osType,
              sendApiKey: t.apiKey,
              partnerId: t.partnerId,
              partnerSecret: t.partnerSecret,
            }),
            O(!0);
        },
        onDelete: (t) => {
          v.confirm({
            title: e['appSearch.confirm.deleteTitle'],
            content: e['appSearch.confirm.deleteContent'],
            onOk: async () => {
              await je(t.id), C.success(e['appSearch.msg.deleteOk']), f();
            },
          });
        },
        onEnable: (t) => {
          v.confirm({
            title: e['appSearch.confirm.enableTitle'],
            content: e['appSearch.confirm.enableContent'],
            onOk: async () => {
              await J({ id: t.id, activeStatus: 1 }),
                C.success(e['appSearch.msg.activeStatusOk']),
                f();
            },
          });
        },
        onDisable: (t) => {
          v.confirm({
            title: e['appSearch.confirm.disableTitle'],
            content: e['appSearch.confirm.disableContent'],
            onOk: async () => {
              await J({ id: t.id, activeStatus: 2 }),
                C.success(e['appSearch.msg.activeStatusOk']),
                f();
            },
          });
        },
      }),
      [S, e, f]
    ),
    ue = r.exports.useMemo(() => we(e, $), [e, $]),
    U = r.exports.useMemo(
      () =>
        w.map((t) => ({
          label: `${t.tenantName} (${t.tenantCode})`,
          value: t.id,
        })),
      [w]
    ),
    me = async () => {
      var t, p;
      if (!(m && !c))
        try {
          const n = await h.validate();
          await Me({
            tenantId: c ? n.tenantId : void 0,
            appCode: n.appCode.trim(),
            pkgName: n.pkgName.trim(),
            osType: n.osType,
            sendApiKey:
              ((t = n.sendApiKey) == null ? void 0 : t.trim()) || void 0,
            partnerId:
              ((p = n.partnerId) == null ? void 0 : p.trim()) || void 0,
            partnerSecret: n.partnerSecret || void 0,
          }),
            C.success(e['appSearch.msg.createOk']),
            F(!1),
            f();
        } catch {}
    },
    he = async () => {
      var t, p, n, G, W;
      try {
        const u = await S.validate(),
          Se = c
            ? u.tenantId
            : m
            ? (t = _.current) == null
              ? void 0
              : t.tenantId
            : void 0;
        await qe({
          id: u.id,
          tenantId: Se,
          appCode: u.appCode.trim(),
          pkgName: u.pkgName.trim(),
          osType: u.osType,
          activeStatus:
            (n = (p = _.current) == null ? void 0 : p.activeStatus) != null
              ? n
              : 1,
          sendApiKey:
            ((G = u.sendApiKey) == null ? void 0 : G.trim()) || void 0,
          partnerId: ((W = u.partnerId) == null ? void 0 : W.trim()) || void 0,
          partnerSecret: u.partnerSecret || void 0,
        }),
          C.success(e['appSearch.msg.saveOk']),
          O(!1),
          f();
      } catch {}
    };
  return b(fe, {
    children: [
      a(Be, { heading: 6, children: e['appSearch.title'] }),
      a(Ne, { onSearch: ce, showTenantFilter: c, tenantOptions: w }),
      a(Ae, {
        requiredPermissions: [{ resource: 'system:app:access' }],
        children: a('div', {
          className: i['button-group'],
          children: a(ve, {
            children: a(ye, {
              type: 'primary',
              icon: a(ge, {}),
              disabled: !T,
              onClick: () => {
                !T ||
                  (h.resetFields(),
                  h.setFieldsValue({ osType: 'android' }),
                  F(!0));
              },
              children: e['appSearch.operations.add'],
            }),
          }),
        }),
      }),
      a('div', {
        ref: V,
        children: a(Te, {
          rowKey: 'id',
          loading: P,
          columns: ue,
          data: ee,
          pagination: se,
          onChange: de,
          scroll: { x: 1220 },
        }),
      }),
      a(v, {
        title: e['appSearch.modal.createTitle'],
        visible: oe,
        onOk: me,
        onCancel: () => F(!1),
        unmountOnExit: !0,
        style: { width: 560 },
        children: b(l, {
          form: h,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          className: i['search-form'],
          children: [
            c
              ? b('div', {
                  className: i.formLikeField,
                  children: [
                    a('label', {
                      id: X,
                      className: i.formLikeFieldLabel,
                      htmlFor: k(D),
                      children: e['appSearch.columns.tenant'],
                    }),
                    a('div', {
                      className: i.formLikeFieldControl,
                      children: a(l.Item, {
                        field: 'tenantId',
                        rules: [
                          {
                            required: !0,
                            message: e['appSearch.validation.required'],
                          },
                        ],
                        noStyle: !0,
                        children: a(N, {
                          baseId: D,
                          ariaLabelledBy: X,
                          children: a(L, {
                            placeholder: e['appSearch.form.tenant.placeholder'],
                            options: U,
                          }),
                        }),
                      }),
                    }),
                  ],
                })
              : null,
            a(l.Item, {
              label: e['appSearch.columns.appCode'],
              field: 'appCode',
              rules: [
                { required: !0, message: e['appSearch.validation.required'] },
              ],
              children: a(d, {}),
            }),
            a(l.Item, {
              label: e['appSearch.columns.pkgName'],
              field: 'pkgName',
              rules: [
                { required: !0, message: e['appSearch.validation.required'] },
              ],
              children: a(d, {}),
            }),
            b('div', {
              className: i.formLikeField,
              children: [
                a('label', {
                  id: Q,
                  className: i.formLikeFieldLabel,
                  htmlFor: k(M),
                  children: e['appSearch.columns.osType'],
                }),
                a('div', {
                  className: i.formLikeFieldControl,
                  children: a(l.Item, {
                    field: 'osType',
                    rules: [
                      {
                        required: !0,
                        message: e['appSearch.validation.required'],
                      },
                    ],
                    noStyle: !0,
                    children: a(N, {
                      baseId: M,
                      ariaLabelledBy: Q,
                      children: a(L, {
                        options: [
                          {
                            label: e['appSearch.os.android'],
                            value: 'android',
                          },
                          { label: e['appSearch.os.ios'], value: 'ios' },
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
            a(l.Item, {
              label: e['appSearch.field.sendApiKey'],
              field: 'sendApiKey',
              children: a(d.Password, { autoComplete: 'new-password' }),
            }),
            a(l.Item, {
              label: e['appSearch.field.partnerId'],
              field: 'partnerId',
              children: a(d, {}),
            }),
            a(l.Item, {
              label: e['appSearch.field.partnerSecret'],
              field: 'partnerSecret',
              children: a(d.Password, { autoComplete: 'new-password' }),
            }),
          ],
        }),
      }),
      a(v, {
        title: e['appSearch.modal.editTitle'],
        visible: pe,
        onOk: he,
        onCancel: () => O(!1),
        unmountOnExit: !0,
        style: { width: 560 },
        children: b(l, {
          form: S,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          className: i['search-form'],
          children: [
            a(l.Item, { field: 'id', hidden: !0, children: a(d, {}) }),
            c
              ? b('div', {
                  className: i.formLikeField,
                  children: [
                    a('label', {
                      id: Y,
                      className: i.formLikeFieldLabel,
                      htmlFor: k(q),
                      children: e['appSearch.columns.tenant'],
                    }),
                    a('div', {
                      className: i.formLikeFieldControl,
                      children: a(l.Item, {
                        field: 'tenantId',
                        rules: [
                          {
                            required: !0,
                            message: e['appSearch.validation.required'],
                          },
                        ],
                        noStyle: !0,
                        children: a(N, {
                          baseId: q,
                          ariaLabelledBy: Y,
                          children: a(L, { options: U }),
                        }),
                      }),
                    }),
                  ],
                })
              : null,
            a(l.Item, {
              label: e['appSearch.columns.appCode'],
              field: 'appCode',
              rules: [
                { required: !0, message: e['appSearch.validation.required'] },
              ],
              children: a(d, {}),
            }),
            a(l.Item, {
              label: e['appSearch.columns.pkgName'],
              field: 'pkgName',
              rules: [
                { required: !0, message: e['appSearch.validation.required'] },
              ],
              children: a(d, {}),
            }),
            b('div', {
              className: i.formLikeField,
              children: [
                a('label', {
                  id: Z,
                  className: i.formLikeFieldLabel,
                  htmlFor: k(j),
                  children: e['appSearch.columns.osType'],
                }),
                a('div', {
                  className: i.formLikeFieldControl,
                  children: a(l.Item, {
                    field: 'osType',
                    rules: [
                      {
                        required: !0,
                        message: e['appSearch.validation.required'],
                      },
                    ],
                    noStyle: !0,
                    children: a(N, {
                      baseId: j,
                      ariaLabelledBy: Z,
                      children: a(L, {
                        options: [
                          {
                            label: e['appSearch.os.android'],
                            value: 'android',
                          },
                          { label: e['appSearch.os.ios'], value: 'ios' },
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
            a(l.Item, {
              label: e['appSearch.field.sendApiKey'],
              field: 'sendApiKey',
              children: a(d.Password, { autoComplete: 'new-password' }),
            }),
            a(l.Item, {
              label: e['appSearch.field.partnerId'],
              field: 'partnerId',
              children: a(d, {}),
            }),
            a(l.Item, {
              label: e['appSearch.field.partnerSecret'],
              field: 'partnerSecret',
              children: a(d.Password, { autoComplete: 'new-password' }),
            }),
          ],
        }),
      }),
      a(v, {
        title: e['appSearch.modal.viewTitle'],
        visible: !!s,
        footer: null,
        onCancel: () => z(null),
        unmountOnExit: !0,
        className: i['tenant-view-modal'],
        style: { width: 640 },
        children: s
          ? a(Ie, {
              column: 1,
              className: i['tenant-view-descriptions'],
              layout: 'horizontal',
              colon: ':',
              labelStyle: {
                textAlign: 'right',
                width: 152,
                minWidth: 152,
                paddingRight: 12,
                color: 'var(--color-text-2)',
                verticalAlign: 'top',
              },
              valueStyle: {
                color: 'var(--color-text-1)',
                wordBreak: 'break-word',
                verticalAlign: 'top',
              },
              data: [
                {
                  label: e['appSearch.view.tenantName'],
                  value: s.tenantName || '\u2014',
                },
                {
                  label: e['appSearch.columns.appCode'],
                  value: s.appCode
                    ? a(y.Text, { copyable: !0, children: s.appCode })
                    : '\u2014',
                },
                {
                  label: e['appSearch.columns.pkgName'],
                  value: s.pkgName
                    ? a(y.Text, { copyable: !0, children: s.pkgName })
                    : '\u2014',
                },
                {
                  label: e['appSearch.columns.osType'],
                  value: Ee(e, s.osType),
                },
                {
                  label: e['appSearch.field.partnerId'],
                  value: s.partnerId
                    ? a(y.Text, { copyable: !0, children: s.partnerId })
                    : '\u2014',
                },
                {
                  label: e['appSearch.field.partnerSecret'],
                  value: s.partnerSecret
                    ? a(y.Text, { copyable: !0, children: s.partnerSecret })
                    : '\u2014',
                },
                {
                  label: e['appSearch.field.sendApiKey'],
                  value: s.apiKey
                    ? a(y.Text, { copyable: !0, children: s.apiKey })
                    : '\u2014',
                },
                {
                  label: e['appSearch.columns.activeStatus'],
                  value: Fe(e, s.activeStatus),
                },
                {
                  label: e['appSearch.columns.status'],
                  value: Oe(e, s.status),
                },
                {
                  label: e['appSearch.columns.operator'],
                  value: s.operatorUsername || '\u2014',
                },
                { label: e['appSearch.view.createdAt'], value: H(s.createdAt) },
                {
                  label: e['appSearch.columns.updatedAt'],
                  value: H(s.updatedAt),
                },
              ],
            })
          : null,
      }),
    ],
  });
}
export { ea as default };
