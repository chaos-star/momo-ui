import {
  ag as r,
  r as i,
  j as t,
  d as de,
  a as l,
  S as _,
  B as d,
  aQ as Ge,
  ai as Ke,
  M as m,
  aW as He,
  aR as We,
  aS as S,
  av as Je,
  aT as me,
  $ as U,
  aM as pe,
  ah as g,
  aL as T,
  K as N,
  T as Z,
  x as he,
  aU as Qe,
  aX as Xe,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import { P as Ye } from './index.7e565d94.js';
import { a as p, u as et } from './index.04d9875a.js';
import { e as tt } from './permission-boundary-package.1cbff11c.js';
import { l as at, S as nt } from './form.9444adad.js';
import { a as Se, A as ye } from './ArcoSelectInputIds.2dc06435.js';
import { u as st } from './useArcoPaginationFieldIds.1ba1c2b9.js';
import { s as u } from './index.module.ea069206.js';
import { getColumns as it } from './constants.fcacaca0.js';
import {
  f as G,
  p as be,
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
function ge(e) {
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
const { Title: bt } = Z,
  Ce = [
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
  Fe = `${H}-field-label`,
  W = 'tenant-modal-edit-tenantZone',
  ve = `${W}-field-label`;
function ft(e, h, y) {
  var v, b;
  return {
    page: h,
    pageSize: y,
    tenantName: ((v = e.tenantName) == null ? void 0 : v.trim()) || void 0,
    tenantCode: ((b = e.tenantCode) == null ? void 0 : b.trim()) || void 0,
    businessType:
      e.businessType === 0 || e.businessType == null ? void 0 : e.businessType,
    status: e.status === 0 || e.status == null ? void 0 : e.status,
  };
}
function gt(e, h, y, v) {
  var f, x;
  const b = (f = h.id) == null ? void 0 : f.trim();
  return {
    tenantId: e,
    page: y,
    pageSize: v,
    id: b && /^\d+$/.test(b) ? Number(b) : void 0,
    permissionName:
      ((x = h.permissionName) == null ? void 0 : x.trim()) || void 0,
  };
}
function Pt() {
  var oe;
  const e = et(at),
    [h] = r.useForm(),
    [y] = r.useForm(),
    [v, b] = i.exports.useState([]),
    [f, x] = i.exports.useState(1),
    [k, Ee] = i.exports.useState(10),
    [M, Te] = i.exports.useState(0),
    xe = i.exports.useMemo(
      () => ({
        sizeCanChange: !0,
        showTotal: !0,
        pageSize: k,
        current: f,
        total: M,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [f, k, M]
    ),
    [J, Q] = i.exports.useState(!0),
    [X, ke] = i.exports.useState({}),
    [we, Ae] = i.exports.useState(0),
    [Be, j] = i.exports.useState(!1),
    [Ie, q] = i.exports.useState(!1),
    [o, Y] = i.exports.useState(null),
    [Ne, V] = i.exports.useState(''),
    [Le, R] = i.exports.useState(''),
    [$, ee] = i.exports.useState(!1),
    [c, te] = i.exports.useState(null),
    [De, L] = i.exports.useState(!1),
    [Oe, ae] = i.exports.useState([]),
    [D, w] = i.exports.useState(1),
    [O, Pe] = i.exports.useState(10),
    [ne, ze] = i.exports.useState(0),
    [se, P] = i.exports.useState({}),
    [_e, A] = i.exports.useState(0),
    [Ze, B] = i.exports.useState(!1),
    [z, I] = i.exports.useState(null),
    [C] = r.useForm(),
    [E] = r.useForm(),
    [Me, je] = i.exports.useState([]),
    ie = i.exports.useRef(null);
  st(ie, 'tenant-list-pagination', f, k, M, J),
    i.exports.useEffect(() => {
      let a = !1;
      return (
        Q(!0),
        ot(ft(X, f, k))
          .then((n) => {
            var s;
            a || (b(n.list || []), Te((s = n.total) != null ? s : 0));
          })
          .finally(() => {
            a || Q(!1);
          }),
        () => {
          a = !0;
        }
      );
    }, [f, k, X, we]);
  const F = i.exports.useCallback(() => Ae((a) => a + 1), []),
    re = i.exports.useCallback(
      async (a) => {
        te(a), ee(!0), w(1), P({}), E.resetFields(), L(!0);
        try {
          const n = await tt();
          je(
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
    if (!$ || !c) return;
    let a = !1;
    return (
      L(!0),
      pt(gt(c.id, se, D, O))
        .then((n) => {
          var s;
          a || (ae(n.list || []), ze((s = n.total) != null ? s : 0));
        })
        .finally(() => {
          a || L(!1);
        }),
      () => {
        a = !0;
      }
    );
  }, [$, c, se, D, O, _e]);
  const qe = i.exports.useMemo(
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
    Ve = i.exports.useMemo(
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
            t(de, {
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
            l(_, {
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
                        await ge({ id: n.id, activeStatus: 2 }),
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
                        await ge({ id: n.id, activeStatus: 1 }),
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
      [C, e]
    ),
    Re = (a) => {
      x(1), ke(a);
    },
    $e = (a) => {
      x((n) => {
        var s;
        return (s = a.current) != null ? s : n;
      }),
        Ee((n) => (a.pageSize != null ? Number(a.pageSize) : n));
    },
    ue = i.exports.useMemo(
      () => ({
        onView: (a) => Y(a),
        onEdit: (a) => {
          const n = be(a.config);
          V(n),
            R(a.tenantCode),
            y.setFieldsValue({
              id: a.id,
              tenantName: a.tenantName,
              businessType: K(a.tenantType),
              tenantZone: a.tenantZone,
              eventSecret: n,
            }),
            q(!0);
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
    Ue = i.exports.useMemo(() => it(e, ue), [e, ue]),
    le = o ? be(o.config) : '';
  return l(Je, {
    children: [
      t(bt, { heading: 6, children: e['tenantSearch.title'] }),
      t(nt, { onSearch: Re }),
      t(Ye, {
        requiredPermissions: [{ resource: 'system:tenant:access' }],
        children: l('div', {
          className: u['button-group'],
          children: [
            t(_, {
              children: t(d, {
                type: 'primary',
                icon: t(me, {}),
                onClick: () => {
                  h.resetFields(),
                    h.setFieldsValue({
                      businessType: 2,
                      tenantZone: 'Asia/Shanghai',
                    }),
                    j(!0);
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
        children: t(pe, {
          rowKey: 'id',
          loading: J,
          onChange: $e,
          pagination: xe,
          columns: Ue,
          data: v,
          border: !0,
          scroll: { x: 1598 },
        }),
      }),
      t(S, {
        title: e['tenantSearch.modal.createTitle'],
        visible: Be,
        onCancel: () => j(!1),
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
              j(!1),
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
                  id: Fe,
                  className: u.formLikeFieldLabel,
                  htmlFor: Se(H),
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
                    children: t(ye, {
                      baseId: H,
                      ariaLabelledBy: Fe,
                      children: t(N, {
                        allowCreate: !0,
                        placeholder: 'IANA',
                        children: Ce.map((a) =>
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
        visible: Ie,
        onCancel: () => {
          q(!1), V(''), R('');
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
            s !== (Ne || '').trim() && (ce.eventSecret = s),
              await dt(ce),
              m.success(e['tenantSearch.msg.saveOk']),
              q(!1),
              V(''),
              R(''),
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
              children: t(Z.Text, { type: 'secondary', children: Le }),
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
                  id: ve,
                  className: u.formLikeFieldLabel,
                  htmlFor: Se(W),
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
                    children: t(ye, {
                      baseId: W,
                      ariaLabelledBy: ve,
                      children: t(N, {
                        allowCreate: !0,
                        children: Ce.map((a) =>
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
        visible: $,
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
        style: { width: 980 },
        children:
          K((c == null ? void 0 : c.tenantType) || '') === 1
            ? t(he, {
                type: 'info',
                content:
                  '\u5E73\u53F0\u79DF\u6237\u7BA1\u7406\u5458\u5929\u7136\u62E5\u6709\u5168\u90E8\u542F\u7528\u6743\u9650\uFF0C\u65E0\u9700\u914D\u7F6E\u79DF\u6237\u6743\u9650\u8FB9\u754C\uFF1B\u5E73\u53F0\u79DF\u6237\u666E\u901A\u6210\u5458\u4ECD\u9700\u901A\u8FC7\u89D2\u8272\u3001\u7528\u6237\u6216\u90E8\u95E8\u89D2\u8272\u6388\u6743\u83B7\u5F97\u6743\u9650\u3002',
              })
            : l(_, {
                direction: 'vertical',
                size: 16,
                style: { width: '100%' },
                children: [
                  t(he, {
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
                      t(_, {
                        children: t(d, {
                          type: 'primary',
                          icon: t(me, {}),
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
                  t(pe, {
                    rowKey: 'id',
                    loading: De,
                    data: Oe,
                    columns: Ve,
                    pagination: qe,
                    onChange: (a) => {
                      w((n) => {
                        var s;
                        return (s = a.current) != null ? s : n;
                      }),
                        Pe((n) =>
                          a.pageSize != null ? Number(a.pageSize) : n
                        );
                    },
                    border: !0,
                    scroll: { x: 898 },
                  }),
                ],
              }),
      }),
      t(S, {
        title: z ? '\u7F16\u8F91\u6388\u6743' : '\u65B0\u589E\u6388\u6743',
        visible: Ze,
        onCancel: () => {
          B(!1), I(null), C.resetFields();
        },
        onOk: async () => {
          if (!!c)
            try {
              const a = await C.validate();
              z
                ? (await St({
                    id: z.id,
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
        children: l(r, {
          form: C,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          className: u['search-form'],
          children: [
            !z &&
              t(r.Item, {
                label: '\u72B6\u6001',
                children: t(de, { status: 'default', text: '\u505C\u7528' }),
              }),
            l('div', {
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
                      options: Me,
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
          ],
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
                  value: t(Z.Text, { copyable: !0, children: o.tenantCode }),
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
                  value: t(Z.Text, {
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
