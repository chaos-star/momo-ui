import {
  u as fe,
  r as i,
  ae as r,
  aR as x,
  M as y,
  j as a,
  at as he,
  S as xe,
  B as ve,
  aS as Se,
  aL as Ee,
  H as V,
  af as c,
  aW as De,
  T as v,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import { P as je } from './index.7f843fd6.js';
import { a as S, u as ye, b as Ve } from './index.77883a3f.js';
import { l as ge, S as Te } from './form.dfed6761.js';
import { a as g, A as T } from './ArcoSelectInputIds.060661df.js';
import { u as Ie } from './useArcoPaginationFieldIds.3edc305a.js';
import { s as o } from './index.module.ea069206.js';
import {
  g as Ae,
  o as Ce,
  a as Le,
  d as ke,
  f as H,
} from './constants.740e270e.js';
function we(e) {
  return S({ url: '/api/system/app/list', method: 'GET', params: e });
}
function Fe() {
  return S({ url: '/api/system/tenants/options', method: 'GET' });
}
function Oe(e) {
  return S({ url: '/api/system/app/manage', method: 'POST', data: e });
}
function _e(e) {
  return S({ url: '/api/system/app/manage', method: 'PUT', data: e });
}
function J(e) {
  return S({
    url: '/api/system/app/manage/active-status',
    method: 'PATCH',
    data: e,
  });
}
function Me(e) {
  return S({
    url: '/api/system/app/manage',
    method: 'DELETE',
    params: { id: e },
  });
}
var t =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/apps/index.tsx';
const { Title: qe } = v,
  F = 'app-modal-create-tenantId',
  Q = `${F}-field-label`,
  O = 'app-modal-create-osType',
  X = `${O}-field-label`,
  _ = 'app-modal-edit-tenantId',
  Y = `${_}-field-label`,
  M = 'app-modal-edit-osType',
  Z = `${M}-field-label`;
function Be(e, m, N, p) {
  var E, b, f;
  return {
    page: m,
    pageSize: N,
    tenantId: p && e.tenantId != null && e.tenantId > 0 ? e.tenantId : void 0,
    appCode: ((E = e.appCode) == null ? void 0 : E.trim()) || void 0,
    pkgName: ((b = e.pkgName) == null ? void 0 : b.trim()) || void 0,
    osType: ((f = e.osType) == null ? void 0 : f.trim()) || void 0,
    activeStatus:
      e.activeStatus === 0 || e.activeStatus == null ? void 0 : e.activeStatus,
    status: e.status === 0 || e.status == null ? void 0 : e.status,
  };
}
function Pe(e) {
  return (
    ((e == null ? void 0 : e.tenantType) || '').toUpperCase() === 'PLATFORM'
  );
}
function ea() {
  const e = ye(ge),
    m = fe((s) => s.userInfo),
    N = i.exports.useMemo(
      () => Pe(m == null ? void 0 : m.defaultTenant),
      [m == null ? void 0 : m.defaultTenant]
    ),
    p = i.exports.useMemo(
      () =>
        N &&
        Ve(
          { requiredPermissions: [{ resource: 'system:tenant:access' }] },
          (m == null ? void 0 : m.permissions) || {}
        ),
      [N, m == null ? void 0 : m.permissions]
    ),
    E = !N || p,
    [b] = r.useForm(),
    [f] = r.useForm(),
    [ee, ae] = i.exports.useState([]),
    [D, q] = i.exports.useState(1),
    [j, te] = i.exports.useState(10),
    [I, se] = i.exports.useState(0),
    ie = i.exports.useMemo(
      () => ({
        sizeCanChange: !0,
        showTotal: !0,
        pageSize: j,
        current: D,
        total: I,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [D, j, I]
    ),
    [B, P] = i.exports.useState(!0),
    [R, le] = i.exports.useState({}),
    [re, oe] = i.exports.useState(0),
    [A, C] = i.exports.useState([]),
    [ne, L] = i.exports.useState(!1),
    [me, k] = i.exports.useState(!1),
    [l, K] = i.exports.useState(null),
    w = i.exports.useRef(null),
    z = i.exports.useRef(null);
  Ie(z, 'app-list-pagination', D, j, I, B),
    i.exports.useEffect(() => {
      if (!p) {
        C([]);
        return;
      }
      let s = !1;
      return (
        Fe()
          .then((u) => {
            s || C(u || []);
          })
          .catch(() => {
            s || C([]);
          }),
        () => {
          s = !0;
        }
      );
    }, [p]),
    i.exports.useEffect(() => {
      let s = !1;
      return (
        P(!0),
        we(Be(R, D, j, p))
          .then((u) => {
            var n;
            s || (ae(u.list || []), se((n = u.total) != null ? n : 0));
          })
          .finally(() => {
            s || P(!1);
          }),
        () => {
          s = !0;
        }
      );
    }, [D, j, R, re, p]);
  const h = i.exports.useCallback(() => oe((s) => s + 1), []),
    ue = (s) => {
      q(1), le(s);
    },
    pe = (s) => {
      q((u) => {
        var n;
        return (n = s.current) != null ? n : u;
      }),
        te((u) => (s.pageSize != null ? Number(s.pageSize) : u));
    },
    $ = i.exports.useMemo(
      () => ({
        onView: (s) => K(s),
        onEdit: (s) => {
          (w.current = s),
            f.setFieldsValue({
              id: s.id,
              tenantId: s.tenantId,
              appCode: s.appCode,
              pkgName: s.pkgName,
              osType: s.osType,
              sendApiKey: s.apiKey,
              partnerId: s.partnerId,
              partnerSecret: s.partnerSecret,
            }),
            k(!0);
        },
        onDelete: (s) => {
          x.confirm({
            title: e['appSearch.confirm.deleteTitle'],
            content: e['appSearch.confirm.deleteContent'],
            onOk: async () => {
              await Me(s.id), y.success(e['appSearch.msg.deleteOk']), h();
            },
          });
        },
        onEnable: (s) => {
          x.confirm({
            title: e['appSearch.confirm.enableTitle'],
            content: e['appSearch.confirm.enableContent'],
            onOk: async () => {
              await J({ id: s.id, activeStatus: 1 }),
                y.success(e['appSearch.msg.activeStatusOk']),
                h();
            },
          });
        },
        onDisable: (s) => {
          x.confirm({
            title: e['appSearch.confirm.disableTitle'],
            content: e['appSearch.confirm.disableContent'],
            onOk: async () => {
              await J({ id: s.id, activeStatus: 2 }),
                y.success(e['appSearch.msg.activeStatusOk']),
                h();
            },
          });
        },
      }),
      [f, e, h]
    ),
    ce = i.exports.useMemo(() => Ae(e, $), [e, $]),
    U = i.exports.useMemo(
      () =>
        A.map((s) => ({
          label: `${s.tenantName} (${s.tenantCode})`,
          value: s.id,
        })),
      [A]
    ),
    de = async () => {
      var s, u;
      if (!(N && !p))
        try {
          const n = await b.validate();
          await Oe({
            tenantId: p ? n.tenantId : void 0,
            appCode: n.appCode.trim(),
            pkgName: n.pkgName.trim(),
            osType: n.osType,
            sendApiKey:
              ((s = n.sendApiKey) == null ? void 0 : s.trim()) || void 0,
            partnerId:
              ((u = n.partnerId) == null ? void 0 : u.trim()) || void 0,
            partnerSecret: n.partnerSecret || void 0,
          }),
            y.success(e['appSearch.msg.createOk']),
            L(!1),
            h();
        } catch {}
    },
    Ne = async () => {
      var s, u, n, G, W;
      try {
        const d = await f.validate(),
          be = p
            ? d.tenantId
            : N
            ? (s = w.current) == null
              ? void 0
              : s.tenantId
            : void 0;
        await _e({
          id: d.id,
          tenantId: be,
          appCode: d.appCode.trim(),
          pkgName: d.pkgName.trim(),
          osType: d.osType,
          activeStatus:
            (n = (u = w.current) == null ? void 0 : u.activeStatus) != null
              ? n
              : 1,
          sendApiKey:
            ((G = d.sendApiKey) == null ? void 0 : G.trim()) || void 0,
          partnerId: ((W = d.partnerId) == null ? void 0 : W.trim()) || void 0,
          partnerSecret: d.partnerSecret || void 0,
        }),
          y.success(e['appSearch.msg.saveOk']),
          k(!1),
          h();
      } catch {}
    };
  return a.exports.jsxDEV(
    he,
    {
      children: [
        a.exports.jsxDEV(
          qe,
          { heading: 6, children: e['appSearch.title'] },
          void 0,
          !1,
          { fileName: t, lineNumber: 333, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          Te,
          { onSearch: ue, showTenantFilter: p, tenantOptions: A },
          void 0,
          !1,
          { fileName: t, lineNumber: 334, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          je,
          {
            requiredPermissions: [{ resource: 'system:app:access' }],
            children: a.exports.jsxDEV(
              'div',
              {
                className: o['button-group'],
                children: a.exports.jsxDEV(
                  xe,
                  {
                    children: a.exports.jsxDEV(
                      ve,
                      {
                        type: 'primary',
                        icon: a.exports.jsxDEV(
                          Se,
                          {},
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 346, columnNumber: 21 },
                          this
                        ),
                        disabled: !E,
                        onClick: () => {
                          !E ||
                            (b.resetFields(),
                            b.setFieldsValue({ osType: 'android' }),
                            L(!0));
                        },
                        children: e['appSearch.operations.add'],
                      },
                      void 0,
                      !1,
                      { fileName: t, lineNumber: 344, columnNumber: 13 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: t, lineNumber: 343, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: t, lineNumber: 342, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 339, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          'div',
          {
            ref: z,
            children: a.exports.jsxDEV(
              Ee,
              {
                rowKey: 'id',
                loading: B,
                columns: ce,
                data: ee,
                pagination: ie,
                onChange: pe,
                scroll: { x: 1220 },
              },
              void 0,
              !1,
              { fileName: t, lineNumber: 365, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 364, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          x,
          {
            title: e['appSearch.modal.createTitle'],
            visible: ne,
            onOk: de,
            onCancel: () => L(!1),
            unmountOnExit: !0,
            style: { width: 560 },
            children: a.exports.jsxDEV(
              r,
              {
                form: b,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                className: o['search-form'],
                children: [
                  p
                    ? a.exports.jsxDEV(
                        'div',
                        {
                          className: o.formLikeField,
                          children: [
                            a.exports.jsxDEV(
                              'label',
                              {
                                id: Q,
                                className: o.formLikeFieldLabel,
                                htmlFor: g(F),
                                children: e['appSearch.columns.tenant'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 394,
                                columnNumber: 15,
                              },
                              this
                            ),
                            a.exports.jsxDEV(
                              'div',
                              {
                                className: o.formLikeFieldControl,
                                children: a.exports.jsxDEV(
                                  r.Item,
                                  {
                                    field: 'tenantId',
                                    rules: [
                                      {
                                        required: !0,
                                        message:
                                          e['appSearch.validation.required'],
                                      },
                                    ],
                                    noStyle: !0,
                                    children: a.exports.jsxDEV(
                                      T,
                                      {
                                        baseId: F,
                                        ariaLabelledBy: Q,
                                        children: a.exports.jsxDEV(
                                          V,
                                          {
                                            placeholder:
                                              e[
                                                'appSearch.form.tenant.placeholder'
                                              ],
                                            options: U,
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: t,
                                            lineNumber: 416,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: t,
                                        lineNumber: 412,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: t,
                                    lineNumber: 402,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 401,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: t, lineNumber: 393, columnNumber: 13 },
                        this
                      )
                    : null,
                  a.exports.jsxDEV(
                    r.Item,
                    {
                      label: e['appSearch.columns.appCode'],
                      field: 'appCode',
                      rules: [
                        {
                          required: !0,
                          message: e['appSearch.validation.required'],
                        },
                      ],
                      children: a.exports.jsxDEV(
                        c,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 435, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 425, columnNumber: 11 },
                    this
                  ),
                  a.exports.jsxDEV(
                    r.Item,
                    {
                      label: e['appSearch.columns.pkgName'],
                      field: 'pkgName',
                      rules: [
                        {
                          required: !0,
                          message: e['appSearch.validation.required'],
                        },
                      ],
                      children: a.exports.jsxDEV(
                        c,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 447, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 437, columnNumber: 11 },
                    this
                  ),
                  a.exports.jsxDEV(
                    'div',
                    {
                      className: o.formLikeField,
                      children: [
                        a.exports.jsxDEV(
                          'label',
                          {
                            id: X,
                            className: o.formLikeFieldLabel,
                            htmlFor: g(O),
                            children: e['appSearch.columns.osType'],
                          },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 450, columnNumber: 13 },
                          this
                        ),
                        a.exports.jsxDEV(
                          'div',
                          {
                            className: o.formLikeFieldControl,
                            children: a.exports.jsxDEV(
                              r.Item,
                              {
                                field: 'osType',
                                rules: [
                                  {
                                    required: !0,
                                    message: e['appSearch.validation.required'],
                                  },
                                ],
                                noStyle: !0,
                                children: a.exports.jsxDEV(
                                  T,
                                  {
                                    baseId: O,
                                    ariaLabelledBy: X,
                                    children: a.exports.jsxDEV(
                                      V,
                                      {
                                        options: [
                                          {
                                            label: e['appSearch.os.android'],
                                            value: 'android',
                                          },
                                          {
                                            label: e['appSearch.os.ios'],
                                            value: 'ios',
                                          },
                                        ],
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: t,
                                        lineNumber: 472,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: t,
                                    lineNumber: 468,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 458,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 457, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: t, lineNumber: 449, columnNumber: 11 },
                    this
                  ),
                  a.exports.jsxDEV(
                    r.Item,
                    {
                      label: e['appSearch.field.sendApiKey'],
                      field: 'sendApiKey',
                      children: a.exports.jsxDEV(
                        c.Password,
                        { autoComplete: 'new-password' },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 483, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 482, columnNumber: 11 },
                    this
                  ),
                  a.exports.jsxDEV(
                    r.Item,
                    {
                      label: e['appSearch.field.partnerId'],
                      field: 'partnerId',
                      children: a.exports.jsxDEV(
                        c,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 486, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 485, columnNumber: 11 },
                    this
                  ),
                  a.exports.jsxDEV(
                    r.Item,
                    {
                      label: e['appSearch.field.partnerSecret'],
                      field: 'partnerSecret',
                      children: a.exports.jsxDEV(
                        c.Password,
                        { autoComplete: 'new-password' },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 492, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 488, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: t, lineNumber: 384, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 376, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          x,
          {
            title: e['appSearch.modal.editTitle'],
            visible: me,
            onOk: Ne,
            onCancel: () => k(!1),
            unmountOnExit: !0,
            style: { width: 560 },
            children: a.exports.jsxDEV(
              r,
              {
                form: f,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                className: o['search-form'],
                children: [
                  a.exports.jsxDEV(
                    r.Item,
                    {
                      field: 'id',
                      hidden: !0,
                      children: a.exports.jsxDEV(
                        c,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 514, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 513, columnNumber: 11 },
                    this
                  ),
                  p
                    ? a.exports.jsxDEV(
                        'div',
                        {
                          className: o.formLikeField,
                          children: [
                            a.exports.jsxDEV(
                              'label',
                              {
                                id: Y,
                                className: o.formLikeFieldLabel,
                                htmlFor: g(_),
                                children: e['appSearch.columns.tenant'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 518,
                                columnNumber: 15,
                              },
                              this
                            ),
                            a.exports.jsxDEV(
                              'div',
                              {
                                className: o.formLikeFieldControl,
                                children: a.exports.jsxDEV(
                                  r.Item,
                                  {
                                    field: 'tenantId',
                                    rules: [
                                      {
                                        required: !0,
                                        message:
                                          e['appSearch.validation.required'],
                                      },
                                    ],
                                    noStyle: !0,
                                    children: a.exports.jsxDEV(
                                      T,
                                      {
                                        baseId: _,
                                        ariaLabelledBy: Y,
                                        children: a.exports.jsxDEV(
                                          V,
                                          { options: U },
                                          void 0,
                                          !1,
                                          {
                                            fileName: t,
                                            lineNumber: 540,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: t,
                                        lineNumber: 536,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: t,
                                    lineNumber: 526,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 525,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: t, lineNumber: 517, columnNumber: 13 },
                        this
                      )
                    : null,
                  a.exports.jsxDEV(
                    r.Item,
                    {
                      label: e['appSearch.columns.appCode'],
                      field: 'appCode',
                      rules: [
                        {
                          required: !0,
                          message: e['appSearch.validation.required'],
                        },
                      ],
                      children: a.exports.jsxDEV(
                        c,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 556, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 546, columnNumber: 11 },
                    this
                  ),
                  a.exports.jsxDEV(
                    r.Item,
                    {
                      label: e['appSearch.columns.pkgName'],
                      field: 'pkgName',
                      rules: [
                        {
                          required: !0,
                          message: e['appSearch.validation.required'],
                        },
                      ],
                      children: a.exports.jsxDEV(
                        c,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 568, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 558, columnNumber: 11 },
                    this
                  ),
                  a.exports.jsxDEV(
                    'div',
                    {
                      className: o.formLikeField,
                      children: [
                        a.exports.jsxDEV(
                          'label',
                          {
                            id: Z,
                            className: o.formLikeFieldLabel,
                            htmlFor: g(M),
                            children: e['appSearch.columns.osType'],
                          },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 571, columnNumber: 13 },
                          this
                        ),
                        a.exports.jsxDEV(
                          'div',
                          {
                            className: o.formLikeFieldControl,
                            children: a.exports.jsxDEV(
                              r.Item,
                              {
                                field: 'osType',
                                rules: [
                                  {
                                    required: !0,
                                    message: e['appSearch.validation.required'],
                                  },
                                ],
                                noStyle: !0,
                                children: a.exports.jsxDEV(
                                  T,
                                  {
                                    baseId: M,
                                    ariaLabelledBy: Z,
                                    children: a.exports.jsxDEV(
                                      V,
                                      {
                                        options: [
                                          {
                                            label: e['appSearch.os.android'],
                                            value: 'android',
                                          },
                                          {
                                            label: e['appSearch.os.ios'],
                                            value: 'ios',
                                          },
                                        ],
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: t,
                                        lineNumber: 593,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: t,
                                    lineNumber: 589,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 579,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 578, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: t, lineNumber: 570, columnNumber: 11 },
                    this
                  ),
                  a.exports.jsxDEV(
                    r.Item,
                    {
                      label: e['appSearch.field.sendApiKey'],
                      field: 'sendApiKey',
                      children: a.exports.jsxDEV(
                        c.Password,
                        { autoComplete: 'new-password' },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 604, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 603, columnNumber: 11 },
                    this
                  ),
                  a.exports.jsxDEV(
                    r.Item,
                    {
                      label: e['appSearch.field.partnerId'],
                      field: 'partnerId',
                      children: a.exports.jsxDEV(
                        c,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 607, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 606, columnNumber: 11 },
                    this
                  ),
                  a.exports.jsxDEV(
                    r.Item,
                    {
                      label: e['appSearch.field.partnerSecret'],
                      field: 'partnerSecret',
                      children: a.exports.jsxDEV(
                        c.Password,
                        { autoComplete: 'new-password' },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 613, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 609, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: t, lineNumber: 505, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 497, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          x,
          {
            title: e['appSearch.modal.viewTitle'],
            visible: !!l,
            footer: null,
            onCancel: () => K(null),
            unmountOnExit: !0,
            className: o['tenant-view-modal'],
            style: { width: 640 },
            children: l
              ? a.exports.jsxDEV(
                  De,
                  {
                    column: 1,
                    className: o['tenant-view-descriptions'],
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
                        value: l.tenantName || '\u2014',
                      },
                      {
                        label: e['appSearch.columns.appCode'],
                        value: l.appCode
                          ? a.exports.jsxDEV(
                              v.Text,
                              { copyable: !0, children: l.appCode },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 654,
                                columnNumber: 19,
                              },
                              this
                            )
                          : '\u2014',
                      },
                      {
                        label: e['appSearch.columns.pkgName'],
                        value: l.pkgName
                          ? a.exports.jsxDEV(
                              v.Text,
                              { copyable: !0, children: l.pkgName },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 664,
                                columnNumber: 19,
                              },
                              this
                            )
                          : '\u2014',
                      },
                      {
                        label: e['appSearch.columns.osType'],
                        value: Ce(e, l.osType),
                      },
                      {
                        label: e['appSearch.field.partnerId'],
                        value: l.partnerId
                          ? a.exports.jsxDEV(
                              v.Text,
                              { copyable: !0, children: l.partnerId },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 678,
                                columnNumber: 19,
                              },
                              this
                            )
                          : '\u2014',
                      },
                      {
                        label: e['appSearch.field.partnerSecret'],
                        value: l.partnerSecret
                          ? a.exports.jsxDEV(
                              v.Text,
                              { copyable: !0, children: l.partnerSecret },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 688,
                                columnNumber: 19,
                              },
                              this
                            )
                          : '\u2014',
                      },
                      {
                        label: e['appSearch.field.sendApiKey'],
                        value: l.apiKey
                          ? a.exports.jsxDEV(
                              v.Text,
                              { copyable: !0, children: l.apiKey },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 698,
                                columnNumber: 19,
                              },
                              this
                            )
                          : '\u2014',
                      },
                      {
                        label: e['appSearch.columns.activeStatus'],
                        value: Le(e, l.activeStatus),
                      },
                      {
                        label: e['appSearch.columns.status'],
                        value: ke(e, l.status),
                      },
                      {
                        label: e['appSearch.columns.operator'],
                        value: l.operatorUsername || '\u2014',
                      },
                      {
                        label: e['appSearch.view.createdAt'],
                        value: H(l.createdAt),
                      },
                      {
                        label: e['appSearch.columns.updatedAt'],
                        value: H(l.updatedAt),
                      },
                    ],
                  },
                  void 0,
                  !1,
                  { fileName: t, lineNumber: 628, columnNumber: 11 },
                  this
                )
              : null,
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 618, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: t, lineNumber: 332, columnNumber: 5 },
    this
  );
}
export { ea as default };
