import {
  ag as r,
  r as i,
  j as t,
  d as Ue,
  a as l,
  S as z,
  B as d,
  aQ as Ge,
  ai as Ke,
  M as m,
  aW as He,
  aR as We,
  aS as S,
  av as Je,
  aT as de,
  $ as U,
  aM as me,
  ah as g,
  aL as T,
  K as N,
  T as _,
  x as pe,
  aU as Qe,
  aX as Xe,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import { P as Ye } from './index.e971b0f8.js';
import { a as p, u as et } from './index.97399a5e.js';
import { e as tt } from './permission-boundary-package.8e6500ff.js';
import { l as at, S as nt } from './form.f5fb1f3d.js';
import { a as he, A as Se } from './ArcoSelectInputIds.2dc06435.js';
import { u as st } from './useArcoPaginationFieldIds.1ba1c2b9.js';
import { s as u } from './index.module.ea069206.js';
import { getColumns as it } from './constants.fcacaca0.js';
import {
  f as G,
  p as ye,
  t as K,
  b as rt,
  a as ut,
  d as lt,
} from './utils.49caa52b.js';
function ot(e) {
  return p({ url: '/api/system/tenants/list', method: 'GET', params: e });
}
function ct(e) {
  return p({ url: '/api/system/tenants/manage', method: 'POST', data: e });
}
function dt(e) {
  return p({ url: '/api/system/tenants/manage', method: 'PUT', data: e });
}
function fe(e) {
  return p({
    url: '/api/system/tenants/manage/active-status',
    method: 'PATCH',
    data: e,
  });
}
function mt(e) {
  return p({
    url: '/api/system/tenants/manage',
    method: 'DELETE',
    params: { id: e },
  });
}
function pt(e) {
  return p({
    url: '/api/system/tenants/permission-boundary-packages/list',
    method: 'GET',
    params: e,
  });
}
function ht(e) {
  return p({
    url: '/api/system/tenants/permission-boundary-packages/manage',
    method: 'POST',
    data: e,
  });
}
function St(e) {
  return p({
    url: '/api/system/tenants/permission-boundary-packages/manage',
    method: 'PUT',
    data: e,
  });
}
function be(e) {
  return p({
    url: '/api/system/tenants/permission-boundary-packages/active-status',
    method: 'PATCH',
    data: e,
  });
}
function yt(e) {
  return p({
    url: '/api/system/tenants/permission-boundary-packages/manage',
    method: 'DELETE',
    params: { id: e },
  });
}
const { Title: ft } = _,
  ge = [
    'Asia/Shanghai',
    'Asia/Hong_Kong',
    'Asia/Singapore',
    'Asia/Tokyo',
    'UTC',
    'Europe/London',
    'Europe/Berlin',
    'America/New_York',
    'America/Los_Angeles',
  ],
  H = 'tenant-modal-create-tenantZone',
  Ce = `${H}-field-label`,
  W = 'tenant-modal-edit-tenantZone',
  Fe = `${W}-field-label`;
function bt(e, h, y) {
  var v, f;
  return {
    page: h,
    pageSize: y,
    tenantName: ((v = e.tenantName) == null ? void 0 : v.trim()) || void 0,
    tenantCode: ((f = e.tenantCode) == null ? void 0 : f.trim()) || void 0,
    businessType:
      e.businessType === 0 || e.businessType == null ? void 0 : e.businessType,
    status: e.status === 0 || e.status == null ? void 0 : e.status,
  };
}
function gt(e, h, y, v) {
  var b, x;
  const f = (b = h.id) == null ? void 0 : b.trim();
  return {
    tenantId: e,
    page: y,
    pageSize: v,
    id: f && /^\d+$/.test(f) ? Number(f) : void 0,
    permissionName:
      ((x = h.permissionName) == null ? void 0 : x.trim()) || void 0,
  };
}
function Pt() {
  var oe;
  const e = et(at),
    [h] = r.useForm(),
    [y] = r.useForm(),
    [v, f] = i.exports.useState([]),
    [b, x] = i.exports.useState(1),
    [k, ve] = i.exports.useState(10),
    [Z, Ee] = i.exports.useState(0),
    Te = i.exports.useMemo(
      () => ({
        sizeCanChange: !0,
        showTotal: !0,
        pageSize: k,
        current: b,
        total: Z,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [b, k, Z]
    ),
    [J, Q] = i.exports.useState(!0),
    [X, xe] = i.exports.useState({}),
    [ke, we] = i.exports.useState(0),
    [Ae, M] = i.exports.useState(!1),
    [Be, j] = i.exports.useState(!1),
    [o, Y] = i.exports.useState(null),
    [Ie, q] = i.exports.useState(''),
    [Ne, V] = i.exports.useState(''),
    [R, ee] = i.exports.useState(!1),
    [c, te] = i.exports.useState(null),
    [Le, L] = i.exports.useState(!1),
    [De, ae] = i.exports.useState([]),
    [D, w] = i.exports.useState(1),
    [O, Oe] = i.exports.useState(10),
    [ne, Pe] = i.exports.useState(0),
    [se, P] = i.exports.useState({}),
    [ze, A] = i.exports.useState(0),
    [_e, B] = i.exports.useState(!1),
    [$, I] = i.exports.useState(null),
    [C] = r.useForm(),
    [E] = r.useForm(),
    [Ze, Me] = i.exports.useState([]),
    ie = i.exports.useRef(null);
  st(ie, 'tenant-list-pagination', b, k, Z, J),
    i.exports.useEffect(() => {
      let a = !1;
      return (
        Q(!0),
        ot(bt(X, b, k))
          .then((n) => {
            var s;
            a || (f(n.list || []), Ee((s = n.total) != null ? s : 0));
          })
          .finally(() => {
            a || Q(!1);
          }),
        () => {
          a = !0;
        }
      );
    }, [b, k, X, ke]);
  const F = i.exports.useCallback(() => we((a) => a + 1), []),
    re = i.exports.useCallback(
      async (a) => {
        te(a), ee(!0), w(1), P({}), E.resetFields(), L(!0);
        try {
          const n = await tt();
          Me(
            (n || []).map((s) => ({
              value: s.id,
              label: `${s.packageName || s.packageCode} (${s.packageCode})`,
            }))
          );
        } finally {
          L(!1);
        }
      },
      [E]
    );
  i.exports.useEffect(() => {
    if (!R || !c) return;
    let a = !1;
    return (
      L(!0),
      pt(gt(c.id, se, D, O))
        .then((n) => {
          var s;
          a || (ae(n.list || []), Pe((s = n.total) != null ? s : 0));
        })
        .finally(() => {
          a || L(!1);
        }),
      () => {
        a = !0;
      }
    );
  }, [R, c, se, D, O, ze]);
  const je = i.exports.useMemo(
      () => ({
        sizeCanChange: !0,
        showTotal: !0,
        current: D,
        pageSize: O,
        total: ne,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [D, O, ne]
    ),
    qe = i.exports.useMemo(
      () => [
        { title: 'ID', dataIndex: 'id', width: 90 },
        {
          title: '\u6743\u9650\u540D\u79F0',
          dataIndex: 'permissionName',
          width: 200,
          render: (a, n) => a || n.permissionCode || '\u2014',
        },
        {
          title: '\u72B6\u6001',
          dataIndex: 'activeStatus',
          width: 110,
          render: (a) =>
            t(Ue, {
              status: a === 1 ? 'success' : 'default',
              text: a === 1 ? '\u542F\u52A8' : '\u505C\u7528',
            }),
        },
        {
          title: '\u6700\u540E\u64CD\u4F5C\u4EBA',
          dataIndex: 'operatorUsername',
          width: 130,
          render: (a) => (a == null ? void 0 : a.trim()) || '\u2014',
        },
        {
          title: '\u66F4\u65B0\u65F6\u95F4',
          dataIndex: 'updatedAt',
          width: 168,
          render: (a) => G(a),
        },
        {
          title: '\u64CD\u4F5C',
          dataIndex: 'operations',
          width: 250,
          fixed: 'right',
          render: (a, n) =>
            l(z, {
              className: u.operations,
              size: 10,
              wrap: !0,
              children: [
                t(d, {
                  type: 'text',
                  size: 'small',
                  icon: t(Ge, {}),
                  onClick: () => {
                    I(n), C.setFieldsValue({ packageId: n.packageId }), B(!0);
                  },
                  children: '\u7F16\u8F91',
                }),
                n.activeStatus === 1
                  ? t(d, {
                      type: 'text',
                      size: 'small',
                      icon: t(Ke, {}),
                      onClick: async () => {
                        await be({ id: n.id, activeStatus: 2 }),
                          m.success('\u505C\u7528\u6210\u529F'),
                          A((s) => s + 1);
                      },
                      children: '\u505C\u7528',
                    })
                  : t(d, {
                      type: 'text',
                      size: 'small',
                      icon: t(He, {}),
                      onClick: async () => {
                        await be({ id: n.id, activeStatus: 1 }),
                          m.success('\u542F\u52A8\u6210\u529F'),
                          A((s) => s + 1);
                      },
                      children: '\u542F\u52A8',
                    }),
                t(d, {
                  type: 'text',
                  size: 'small',
                  icon: t(We, {}),
                  status: 'danger',
                  onClick: () => {
                    S.confirm({
                      title: '\u786E\u8BA4\u5220\u9664',
                      content:
                        '\u5220\u9664\u540E\u8BE5\u79DF\u6237\u5C06\u4E0D\u518D\u5173\u8054\u6B64\u6743\u9650\u8FB9\u754C\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F',
                      onOk: async () => {
                        await yt(n.id),
                          m.success('\u5220\u9664\u6210\u529F'),
                          A((s) => s + 1);
                      },
                    });
                  },
                  children: '\u5220\u9664',
                }),
              ],
            }),
        },
      ],
      [C]
    ),
    Ve = (a) => {
      x(1), xe(a);
    },
    Re = (a) => {
      x((n) => {
        var s;
        return (s = a.current) != null ? s : n;
      }),
        ve((n) => (a.pageSize != null ? Number(a.pageSize) : n));
    },
    ue = i.exports.useMemo(
      () => ({
        onView: (a) => Y(a),
        onEdit: (a) => {
          const n = ye(a.config);
          q(n),
            V(a.tenantCode),
            y.setFieldsValue({
              id: a.id,
              tenantName: a.tenantName,
              businessType: K(a.tenantType),
              tenantZone: a.tenantZone,
              eventSecret: n,
            }),
            j(!0);
        },
        onBoundary: re,
        onDelete: (a) => {
          S.confirm({
            title: e['tenantSearch.confirm.deleteTitle'],
            content: e['tenantSearch.confirm.deleteContent'],
            onOk: async () => {
              await mt(a.id), m.success(e['tenantSearch.msg.deleteOk']), F();
            },
          });
        },
        onEnable: (a) => {
          S.confirm({
            title: e['tenantSearch.confirm.enableTitle'],
            content: e['tenantSearch.confirm.enableContent'],
            onOk: async () => {
              await fe({ id: a.id, activeStatus: 1 }),
                m.success(e['tenantSearch.msg.activeStatusOk']),
                F();
            },
          });
        },
        onDisable: (a) => {
          S.confirm({
            title: e['tenantSearch.confirm.disableTitle'],
            content: e['tenantSearch.confirm.disableContent'],
            onOk: async () => {
              await fe({ id: a.id, activeStatus: 2 }),
                m.success(e['tenantSearch.msg.activeStatusOk']),
                F();
            },
          });
        },
      }),
      [y, e, F, re]
    ),
    $e = i.exports.useMemo(() => it(e, ue), [e, ue]),
    le = o ? ye(o.config) : '';
  return l(Je, {
    children: [
      t(ft, { heading: 6, children: e['tenantSearch.title'] }),
      t(nt, { onSearch: Ve }),
      t(Ye, {
        requiredPermissions: [{ resource: 'system:tenant:access' }],
        children: l('div', {
          className: u['button-group'],
          children: [
            t(z, {
              children: t(d, {
                type: 'primary',
                icon: t(de, {}),
                onClick: () => {
                  h.resetFields(),
                    h.setFieldsValue({
                      businessType: 2,
                      tenantZone: 'Asia/Shanghai',
                    }),
                    M(!0);
                },
                children: e['tenantSearch.operations.add'],
              }),
            }),
            t(d, {
              icon: t(U, {}),
              onClick: () => F(),
              children: e['tenantSearch.refresh'],
            }),
          ],
        }),
      }),
      t('div', {
        ref: ie,
        children: t(me, {
          rowKey: 'id',
          loading: J,
          onChange: Re,
          pagination: Te,
          columns: $e,
          data: v,
          border: !0,
          scroll: { x: 1598 },
        }),
      }),
      t(S, {
        title: e['tenantSearch.modal.createTitle'],
        visible: Ae,
        onCancel: () => M(!1),
        onOk: async () => {
          var a, n;
          try {
            const s = await h.validate();
            await ct({
              tenantName: s.tenantName.trim(),
              tenantCode: s.tenantCode.trim().toLowerCase(),
              businessType: s.businessType,
              tenantZone: s.tenantZone,
              eventSecret:
                ((a = s.eventSecret) == null ? void 0 : a.trim()) || void 0,
              expireAt: (n = s.expireAt) != null ? n : 0,
            }),
              m.success(e['tenantSearch.msg.createOk']),
              M(!1),
              F();
          } catch {}
        },
        unmountOnExit: !0,
        style: { width: 560 },
        children: l(r, {
          form: h,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          className: u['search-form'],
          children: [
            t(r.Item, {
              label: e['tenantSearch.columns.tenantName'],
              field: 'tenantName',
              rules: [
                {
                  required: !0,
                  message: e['tenantSearch.validation.required'],
                },
              ],
              children: t(g, {}),
            }),
            t(r.Item, {
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
              children: t(g, { placeholder: 'demo2' }),
            }),
            t(r.Item, {
              label: e['tenantSearch.columns.businessType'],
              field: 'businessType',
              rules: [
                {
                  required: !0,
                  message: e['tenantSearch.validation.required'],
                },
              ],
              children: l(T.Group, {
                children: [
                  t(T, {
                    value: 1,
                    children: e['tenantSearch.businessType.system'],
                  }),
                  t(T, {
                    value: 2,
                    children: e['tenantSearch.businessType.ops'],
                  }),
                ],
              }),
            }),
            l('div', {
              className: u.formLikeField,
              children: [
                t('label', {
                  id: Ce,
                  className: u.formLikeFieldLabel,
                  htmlFor: he(H),
                  children: e['tenantSearch.columns.tenantZone'],
                }),
                t('div', {
                  className: u.formLikeFieldControl,
                  children: t(r.Item, {
                    field: 'tenantZone',
                    rules: [
                      {
                        required: !0,
                        message: e['tenantSearch.validation.required'],
                      },
                    ],
                    noStyle: !0,
                    children: t(Se, {
                      baseId: H,
                      ariaLabelledBy: Ce,
                      children: t(N, {
                        allowCreate: !0,
                        placeholder: 'IANA',
                        children: ge.map((a) =>
                          t(N.Option, { value: a, children: a }, a)
                        ),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            t(r.Item, {
              label: 'encryption_key',
              field: 'eventSecret',
              rules: [
                {
                  validator: (a, n) =>
                    !a || !String(a).trim()
                      ? n()
                      : String(a).trim().length !== 16
                      ? n(e['tenantSearch.validation.encryptionLen'])
                      : n(),
                },
              ],
              children: t(g.Password, { autoComplete: 'new-password' }),
            }),
          ],
        }),
      }),
      t(S, {
        title: e['tenantSearch.modal.editTitle'],
        visible: Be,
        onCancel: () => {
          j(!1), q(''), V('');
        },
        onOk: async () => {
          var a;
          try {
            const n = await y.validate(),
              s = n.eventSecret != null ? String(n.eventSecret).trim() : '',
              ce = {
                id: n.id,
                tenantName: (a = n.tenantName) == null ? void 0 : a.trim(),
                businessType: n.businessType,
                tenantZone: n.tenantZone,
              };
            s !== (Ie || '').trim() && (ce.eventSecret = s),
              await dt(ce),
              m.success(e['tenantSearch.msg.saveOk']),
              j(!1),
              q(''),
              V(''),
              F();
          } catch {}
        },
        unmountOnExit: !0,
        style: { width: 560 },
        children: l(r, {
          form: y,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          className: u['search-form'],
          children: [
            t(r.Item, { field: 'id', hidden: !0, children: t(g, {}) }),
            t(r.Item, {
              label: e['tenantSearch.columns.tenantCode'],
              children: t(_.Text, { type: 'secondary', children: Ne }),
            }),
            t(r.Item, {
              label: e['tenantSearch.columns.tenantName'],
              field: 'tenantName',
              rules: [
                {
                  required: !0,
                  message: e['tenantSearch.validation.required'],
                },
              ],
              children: t(g, {}),
            }),
            t(r.Item, {
              label: e['tenantSearch.columns.businessType'],
              field: 'businessType',
              rules: [
                {
                  required: !0,
                  message: e['tenantSearch.validation.required'],
                },
              ],
              children: l(T.Group, {
                children: [
                  t(T, {
                    value: 1,
                    children: e['tenantSearch.businessType.system'],
                  }),
                  t(T, {
                    value: 2,
                    children: e['tenantSearch.businessType.ops'],
                  }),
                ],
              }),
            }),
            l('div', {
              className: u.formLikeField,
              children: [
                t('label', {
                  id: Fe,
                  className: u.formLikeFieldLabel,
                  htmlFor: he(W),
                  children: e['tenantSearch.columns.tenantZone'],
                }),
                t('div', {
                  className: u.formLikeFieldControl,
                  children: t(r.Item, {
                    field: 'tenantZone',
                    rules: [
                      {
                        required: !0,
                        message: e['tenantSearch.validation.required'],
                      },
                    ],
                    noStyle: !0,
                    children: t(Se, {
                      baseId: W,
                      ariaLabelledBy: Fe,
                      children: t(N, {
                        allowCreate: !0,
                        children: ge.map((a) =>
                          t(N.Option, { value: a, children: a }, a)
                        ),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            t(r.Item, {
              label: 'encryption_key',
              field: 'eventSecret',
              rules: [
                {
                  validator: (a, n) =>
                    a == null || !String(a).trim()
                      ? n()
                      : String(a).trim().length !== 16
                      ? n(e['tenantSearch.validation.encryptionLen'])
                      : n(),
                },
              ],
              children: t(g.Password, { autoComplete: 'new-password' }),
            }),
          ],
        }),
      }),
      t(S, {
        title: `\u6388\u6743\uFF1A${(c == null ? void 0 : c.tenantName) || ''}`,
        visible: R,
        footer: null,
        onCancel: () => {
          ee(!1),
            te(null),
            ae([]),
            P({}),
            w(1),
            B(!1),
            I(null),
            E.resetFields();
        },
        unmountOnExit: !0,
        style: { width: 1100 },
        children:
          K((c == null ? void 0 : c.tenantType) || '') === 1
            ? t(pe, {
                type: 'info',
                content:
                  '\u5E73\u53F0\u79DF\u6237\u7BA1\u7406\u5458\u5929\u7136\u62E5\u6709\u5168\u90E8\u542F\u7528\u6743\u9650\uFF0C\u65E0\u9700\u914D\u7F6E\u79DF\u6237\u6743\u9650\u8FB9\u754C\uFF1B\u5E73\u53F0\u79DF\u6237\u666E\u901A\u6210\u5458\u4ECD\u9700\u901A\u8FC7\u89D2\u8272\u3001\u7528\u6237\u6216\u90E8\u95E8\u89D2\u8272\u6388\u6743\u83B7\u5F97\u6743\u9650\u3002',
              })
            : l(z, {
                direction: 'vertical',
                size: 16,
                style: { width: '100%' },
                children: [
                  t(pe, {
                    type: 'warning',
                    content:
                      '\u65B0\u589E\u6388\u6743\u9ED8\u8BA4\u4E0D\u542F\u7528\uFF1B\u666E\u901A\u79DF\u6237\u7BA1\u7406\u5458\u81EA\u52A8\u62E5\u6709\u5DF2\u542F\u7528\u8FB9\u754C\u5185\u5168\u90E8\u6743\u9650\uFF0C\u666E\u901A\u6210\u5458\u4E0D\u4F1A\u8D85\u51FA\u8BE5\u8FB9\u754C\u3002',
                  }),
                  l('div', {
                    className: u['search-form-wrapper'],
                    children: [
                      t(r, {
                        form: E,
                        className: u['search-form'],
                        labelAlign: 'left',
                        labelCol: { span: 5 },
                        wrapperCol: { span: 19 },
                        children: l('div', {
                          className: u.boundarySearchGrid,
                          children: [
                            t(r.Item, {
                              label: 'ID',
                              field: 'id',
                              children: t(g, {
                                placeholder: '\u7CBE\u51C6\u67E5\u8BE2',
                                allowClear: !0,
                              }),
                            }),
                            t(r.Item, {
                              label: '\u6743\u9650\u540D\u79F0',
                              field: 'permissionName',
                              children: t(g, {
                                placeholder: '\u6A21\u7CCA\u67E5\u8BE2',
                                allowClear: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                      l('div', {
                        className: u['right-button'],
                        children: [
                          t(d, {
                            type: 'primary',
                            icon: t(Qe, {}),
                            onClick: async () => {
                              const a = await E.validate();
                              w(1), P(a);
                            },
                            children: '\u67E5\u8BE2',
                          }),
                          t(d, {
                            icon: t(U, {}),
                            onClick: () => {
                              E.resetFields(), w(1), P({});
                            },
                            children: '\u91CD\u7F6E',
                          }),
                        ],
                      }),
                    ],
                  }),
                  l('div', {
                    className: u['button-group'],
                    children: [
                      t(z, {
                        children: t(d, {
                          type: 'primary',
                          icon: t(de, {}),
                          onClick: () => {
                            I(null), C.resetFields(), B(!0);
                          },
                          children: '\u65B0\u589E',
                        }),
                      }),
                      t(d, {
                        icon: t(U, {}),
                        onClick: () => A((a) => a + 1),
                        children: '\u5237\u65B0',
                      }),
                    ],
                  }),
                  t(me, {
                    rowKey: 'id',
                    loading: Le,
                    data: De,
                    columns: qe,
                    pagination: je,
                    onChange: (a) => {
                      w((n) => {
                        var s;
                        return (s = a.current) != null ? s : n;
                      }),
                        Oe((n) =>
                          a.pageSize != null ? Number(a.pageSize) : n
                        );
                    },
                    border: !0,
                    scroll: { x: 948 },
                  }),
                ],
              }),
      }),
      t(S, {
        title: $ ? '\u7F16\u8F91\u6388\u6743' : '\u65B0\u589E\u6388\u6743',
        visible: _e,
        onCancel: () => {
          B(!1), I(null), C.resetFields();
        },
        onOk: async () => {
          if (!!c)
            try {
              const a = await C.validate();
              $
                ? (await St({
                    id: $.id,
                    tenantId: c.id,
                    packageId: a.packageId,
                  }),
                  m.success('\u4FDD\u5B58\u6210\u529F'))
                : (await ht({ tenantId: c.id, packageId: a.packageId }),
                  m.success('\u65B0\u589E\u6210\u529F')),
                B(!1),
                I(null),
                C.resetFields(),
                A((n) => n + 1);
            } catch {}
        },
        unmountOnExit: !0,
        style: { width: 560 },
        children: t(r, {
          form: C,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          className: u['search-form'],
          children: l('div', {
            className: u.formLikeField,
            children: [
              t('label', {
                className: u.formLikeFieldLabel,
                children: '\u6743\u9650\u8FB9\u754C',
              }),
              t('div', {
                className: u.formLikeFieldControl,
                children: t(r.Item, {
                  field: 'packageId',
                  rules: [
                    {
                      required: !0,
                      message: e['tenantSearch.validation.required'],
                    },
                  ],
                  noStyle: !0,
                  children: t(N, {
                    placeholder: '\u8BF7\u9009\u62E9\u6743\u9650\u8FB9\u754C',
                    showSearch: !0,
                    allowClear: !0,
                    options: Ze,
                    filterOption: (a, n) => {
                      var s;
                      return String(
                        ((s = n.extra) == null ? void 0 : s.label) || ''
                      )
                        .toLowerCase()
                        .includes(a.toLowerCase());
                    },
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
      t(S, {
        title: e['tenantSearch.modal.viewTitle'],
        visible: !!o,
        footer: null,
        onCancel: () => Y(null),
        unmountOnExit: !0,
        style: { width: 560 },
        className: u['tenant-view-modal'],
        children: o
          ? t(Xe, {
              className: u['tenant-view-descriptions'],
              column: 1,
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
                  label: e['tenantSearch.columns.tenantName'],
                  value: o.tenantName,
                },
                {
                  label: e['tenantSearch.columns.tenantCode'],
                  value: t(_.Text, { copyable: !0, children: o.tenantCode }),
                },
                {
                  label: e['tenantSearch.columns.businessType'],
                  value: rt(e, K(o.tenantType)),
                },
                {
                  label: e['tenantSearch.columns.tenantZone'],
                  value: o.tenantZone,
                },
                {
                  label: e['tenantSearch.columns.eventSecret'],
                  value: t(_.Text, {
                    copyable: Boolean(le),
                    children: le || '\u2014',
                  }),
                },
                {
                  label: e['tenantSearch.columns.enableStatus'],
                  value: ut(e, o.activeStatus),
                },
                {
                  label: e['tenantSearch.columns.tenantStatus'],
                  value: lt(e, o.status),
                },
                {
                  label: e['tenantSearch.columns.lastOperator'],
                  value:
                    ((oe = o.operatorUsername) == null ? void 0 : oe.trim()) ||
                    '\u2014',
                },
                {
                  label: e['tenantSearch.columns.createdAt'],
                  value: G(o.createdAt),
                },
                {
                  label: e['tenantSearch.columns.updatedAt'],
                  value: G(o.updatedAt),
                },
              ],
            })
          : null,
      }),
    ],
  });
}
export { Pt as default };
