import {
  ae as r,
  r as l,
  j as e,
  c as $e,
  S as O,
  B as c,
  aP as Ge,
  ag as Ke,
  M as d,
  aV as He,
  aQ as We,
  aR as b,
  at as Je,
  aS as ce,
  Z as $,
  aL as de,
  af as v,
  aK as g,
  H as w,
  T as P,
  w as Ne,
  aT as Qe,
  aW as Ye,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import { P as Xe } from './index.7f843fd6.js';
import { a as N, u as et } from './index.77883a3f.js';
import { e as tt } from './permission-boundary-package.4dd508d7.js';
import { l as at, S as st } from './form.c4a9924e.js';
import { a as pe, A as be } from './ArcoSelectInputIds.060661df.js';
import { u as nt } from './useArcoPaginationFieldIds.3edc305a.js';
import { s as u } from './index.module.ea069206.js';
import { getColumns as it } from './constants.ec7431d8.js';
import {
  f as G,
  p as fe,
  t as K,
  b as lt,
  a as rt,
  d as ut,
} from './utils.49caa52b.js';
function ot(a) {
  return N({ url: '/api/system/tenants/list', method: 'GET', params: a });
}
function mt(a) {
  return N({ url: '/api/system/tenants/manage', method: 'POST', data: a });
}
function ct(a) {
  return N({ url: '/api/system/tenants/manage', method: 'PUT', data: a });
}
function he(a) {
  return N({
    url: '/api/system/tenants/manage/active-status',
    method: 'PATCH',
    data: a,
  });
}
function dt(a) {
  return N({
    url: '/api/system/tenants/manage',
    method: 'DELETE',
    params: { id: a },
  });
}
function Nt(a) {
  return N({
    url: '/api/system/tenants/permission-boundary-packages/list',
    method: 'GET',
    params: a,
  });
}
function pt(a) {
  return N({
    url: '/api/system/tenants/permission-boundary-packages/manage',
    method: 'POST',
    data: a,
  });
}
function bt(a) {
  return N({
    url: '/api/system/tenants/permission-boundary-packages/manage',
    method: 'PUT',
    data: a,
  });
}
function xe(a) {
  return N({
    url: '/api/system/tenants/permission-boundary-packages/active-status',
    method: 'PATCH',
    data: a,
  });
}
function ft(a) {
  return N({
    url: '/api/system/tenants/permission-boundary-packages/manage',
    method: 'DELETE',
    params: { id: a },
  });
}
var t =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/tenants/index.tsx';
const { Title: ht } = P,
  ve = [
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
  Ee = `${H}-field-label`,
  W = 'tenant-modal-edit-tenantZone',
  Se = `${W}-field-label`;
function xt(a, p, f) {
  var y, h;
  return {
    page: p,
    pageSize: f,
    tenantName: ((y = a.tenantName) == null ? void 0 : y.trim()) || void 0,
    tenantCode: ((h = a.tenantCode) == null ? void 0 : h.trim()) || void 0,
    businessType:
      a.businessType === 0 || a.businessType == null ? void 0 : a.businessType,
    status: a.status === 0 || a.status == null ? void 0 : a.status,
  };
}
function vt(a, p, f, y) {
  var x, j;
  const h = (x = p.id) == null ? void 0 : x.trim();
  return {
    tenantId: a,
    page: f,
    pageSize: y,
    id: h && /^\d+$/.test(h) ? Number(h) : void 0,
    permissionName:
      ((j = p.permissionName) == null ? void 0 : j.trim()) || void 0,
  };
}
function Lt() {
  var oe;
  const a = et(at),
    [p] = r.useForm(),
    [f] = r.useForm(),
    [y, h] = l.exports.useState([]),
    [x, j] = l.exports.useState(1),
    [V, ye] = l.exports.useState(10),
    [z, De] = l.exports.useState(0),
    ge = l.exports.useMemo(
      () => ({
        sizeCanChange: !0,
        showTotal: !0,
        pageSize: V,
        current: x,
        total: z,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [x, V, z]
    ),
    [J, Q] = l.exports.useState(!0),
    [Y, je] = l.exports.useState({}),
    [Ve, Ce] = l.exports.useState(0),
    [Fe, _] = l.exports.useState(!1),
    [Te, Z] = l.exports.useState(!1),
    [o, X] = l.exports.useState(null),
    [ke, M] = l.exports.useState(''),
    [we, q] = l.exports.useState(''),
    [R, ee] = l.exports.useState(!1),
    [m, te] = l.exports.useState(null),
    [Ae, A] = l.exports.useState(!1),
    [Be, ae] = l.exports.useState([]),
    [B, C] = l.exports.useState(1),
    [I, Ie] = l.exports.useState(10),
    [se, Le] = l.exports.useState(0),
    [ne, L] = l.exports.useState({}),
    [Oe, F] = l.exports.useState(0),
    [Pe, T] = l.exports.useState(!1),
    [U, k] = l.exports.useState(null),
    [E] = r.useForm(),
    [D] = r.useForm(),
    [ze, _e] = l.exports.useState([]),
    ie = l.exports.useRef(null);
  nt(ie, 'tenant-list-pagination', x, V, z, J),
    l.exports.useEffect(() => {
      let s = !1;
      return (
        Q(!0),
        ot(xt(Y, x, V))
          .then((n) => {
            var i;
            s || (h(n.list || []), De((i = n.total) != null ? i : 0));
          })
          .finally(() => {
            s || Q(!1);
          }),
        () => {
          s = !0;
        }
      );
    }, [x, V, Y, Ve]);
  const S = l.exports.useCallback(() => Ce((s) => s + 1), []),
    le = l.exports.useCallback(
      async (s) => {
        te(s), ee(!0), C(1), L({}), D.resetFields(), A(!0);
        try {
          const n = await tt();
          _e(
            (n || []).map((i) => ({
              value: i.id,
              label: `${i.packageName || i.packageCode} (${i.packageCode})`,
            }))
          );
        } finally {
          A(!1);
        }
      },
      [D]
    );
  l.exports.useEffect(() => {
    if (!R || !m) return;
    let s = !1;
    return (
      A(!0),
      Nt(vt(m.id, ne, B, I))
        .then((n) => {
          var i;
          s || (ae(n.list || []), Le((i = n.total) != null ? i : 0));
        })
        .finally(() => {
          s || A(!1);
        }),
      () => {
        s = !0;
      }
    );
  }, [R, m, ne, B, I, Oe]);
  const Ze = l.exports.useMemo(
      () => ({
        sizeCanChange: !0,
        showTotal: !0,
        current: B,
        pageSize: I,
        total: se,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [B, I, se]
    ),
    Me = l.exports.useMemo(
      () => [
        { title: 'ID', dataIndex: 'id', width: 90 },
        {
          title: '\u6743\u9650\u540D\u79F0',
          dataIndex: 'permissionName',
          width: 200,
          render: (s, n) => s || n.permissionCode || '\u2014',
        },
        {
          title: '\u72B6\u6001',
          dataIndex: 'activeStatus',
          width: 110,
          render: (s) =>
            e.exports.jsxDEV(
              $e,
              {
                status: s === 1 ? 'success' : 'default',
                text: s === 1 ? '\u542F\u52A8' : '\u505C\u7528',
              },
              void 0,
              !1,
              { fileName: t, lineNumber: 313, columnNumber: 11 },
              this
            ),
        },
        {
          title: '\u6700\u540E\u64CD\u4F5C\u4EBA',
          dataIndex: 'operatorUsername',
          width: 130,
          render: (s) => (s == null ? void 0 : s.trim()) || '\u2014',
        },
        {
          title: '\u66F4\u65B0\u65F6\u95F4',
          dataIndex: 'updatedAt',
          width: 168,
          render: (s) => G(s),
        },
        {
          title: '\u64CD\u4F5C',
          dataIndex: 'operations',
          width: 250,
          fixed: 'right',
          render: (s, n) =>
            e.exports.jsxDEV(
              O,
              {
                className: u.operations,
                size: 10,
                wrap: !0,
                children: [
                  e.exports.jsxDEV(
                    c,
                    {
                      type: 'text',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        Ge,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 341, columnNumber: 21 },
                        this
                      ),
                      onClick: () => {
                        k(n),
                          E.setFieldsValue({ packageId: n.packageId }),
                          T(!0);
                      },
                      children: '\u7F16\u8F91',
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 338, columnNumber: 13 },
                    this
                  ),
                  n.activeStatus === 1
                    ? e.exports.jsxDEV(
                        c,
                        {
                          type: 'text',
                          size: 'small',
                          icon: e.exports.jsxDEV(
                            Ke,
                            {},
                            void 0,
                            !1,
                            { fileName: t, lineNumber: 356, columnNumber: 23 },
                            this
                          ),
                          onClick: async () => {
                            await xe({ id: n.id, activeStatus: 2 }),
                              d.success('\u505C\u7528\u6210\u529F'),
                              F((i) => i + 1);
                          },
                          children: '\u505C\u7528',
                        },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 353, columnNumber: 15 },
                        this
                      )
                    : e.exports.jsxDEV(
                        c,
                        {
                          type: 'text',
                          size: 'small',
                          icon: e.exports.jsxDEV(
                            He,
                            {},
                            void 0,
                            !1,
                            { fileName: t, lineNumber: 372, columnNumber: 23 },
                            this
                          ),
                          onClick: async () => {
                            await xe({ id: n.id, activeStatus: 1 }),
                              d.success('\u542F\u52A8\u6210\u529F'),
                              F((i) => i + 1);
                          },
                          children: '\u542F\u52A8',
                        },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 369, columnNumber: 15 },
                        this
                      ),
                  e.exports.jsxDEV(
                    c,
                    {
                      type: 'text',
                      size: 'small',
                      icon: e.exports.jsxDEV(
                        We,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 388, columnNumber: 21 },
                        this
                      ),
                      status: 'danger',
                      onClick: () => {
                        b.confirm({
                          title: '\u786E\u8BA4\u5220\u9664',
                          content:
                            '\u5220\u9664\u540E\u8BE5\u79DF\u6237\u5C06\u4E0D\u518D\u5173\u8054\u6B64\u6743\u9650\u8FB9\u754C\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F',
                          onOk: async () => {
                            await ft(n.id),
                              d.success('\u5220\u9664\u6210\u529F'),
                              F((i) => i + 1);
                          },
                        });
                      },
                      children: '\u5220\u9664',
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 385, columnNumber: 13 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: t, lineNumber: 337, columnNumber: 11 },
              this
            ),
        },
      ],
      [E]
    ),
    qe = (s) => {
      j(1), je(s);
    },
    Re = (s) => {
      j((n) => {
        var i;
        return (i = s.current) != null ? i : n;
      }),
        ye((n) => (s.pageSize != null ? Number(s.pageSize) : n));
    },
    re = l.exports.useMemo(
      () => ({
        onView: (s) => X(s),
        onEdit: (s) => {
          const n = fe(s.config);
          M(n),
            q(s.tenantCode),
            f.setFieldsValue({
              id: s.id,
              tenantName: s.tenantName,
              businessType: K(s.tenantType),
              tenantZone: s.tenantZone,
              eventSecret: n,
            }),
            Z(!0);
        },
        onBoundary: le,
        onDelete: (s) => {
          b.confirm({
            title: a['tenantSearch.confirm.deleteTitle'],
            content: a['tenantSearch.confirm.deleteContent'],
            onOk: async () => {
              await dt(s.id), d.success(a['tenantSearch.msg.deleteOk']), S();
            },
          });
        },
        onEnable: (s) => {
          b.confirm({
            title: a['tenantSearch.confirm.enableTitle'],
            content: a['tenantSearch.confirm.enableContent'],
            onOk: async () => {
              await he({ id: s.id, activeStatus: 1 }),
                d.success(a['tenantSearch.msg.activeStatusOk']),
                S();
            },
          });
        },
        onDisable: (s) => {
          b.confirm({
            title: a['tenantSearch.confirm.disableTitle'],
            content: a['tenantSearch.confirm.disableContent'],
            onOk: async () => {
              await he({ id: s.id, activeStatus: 2 }),
                d.success(a['tenantSearch.msg.activeStatusOk']),
                S();
            },
          });
        },
      }),
      [f, a, S, le]
    ),
    Ue = l.exports.useMemo(() => it(a, re), [a, re]),
    ue = o ? fe(o.config) : '';
  return e.exports.jsxDEV(
    Je,
    {
      children: [
        e.exports.jsxDEV(
          ht,
          { heading: 6, children: a['tenantSearch.title'] },
          void 0,
          !1,
          { fileName: t, lineNumber: 483, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          st,
          { onSearch: qe },
          void 0,
          !1,
          { fileName: t, lineNumber: 484, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          Xe,
          {
            requiredPermissions: [{ resource: 'system:tenant:access' }],
            children: e.exports.jsxDEV(
              'div',
              {
                className: u['button-group'],
                children: [
                  e.exports.jsxDEV(
                    O,
                    {
                      children: e.exports.jsxDEV(
                        c,
                        {
                          type: 'primary',
                          icon: e.exports.jsxDEV(
                            ce,
                            {},
                            void 0,
                            !1,
                            { fileName: t, lineNumber: 492, columnNumber: 21 },
                            this
                          ),
                          onClick: () => {
                            p.resetFields(),
                              p.setFieldsValue({
                                businessType: 2,
                                tenantZone: 'Asia/Shanghai',
                              }),
                              _(!0);
                          },
                          children: a['tenantSearch.operations.add'],
                        },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 490, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 489, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    c,
                    {
                      icon: e.exports.jsxDEV(
                        $,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 505, columnNumber: 25 },
                        this
                      ),
                      onClick: () => S(),
                      children: a['tenantSearch.refresh'],
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 505, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: t, lineNumber: 488, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 485, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            ref: ie,
            children: e.exports.jsxDEV(
              de,
              {
                rowKey: 'id',
                loading: J,
                onChange: Re,
                pagination: ge,
                columns: Ue,
                data: y,
                border: !0,
                scroll: { x: 1598 },
              },
              void 0,
              !1,
              { fileName: t, lineNumber: 512, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 511, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          b,
          {
            title: a['tenantSearch.modal.createTitle'],
            visible: Fe,
            onCancel: () => _(!1),
            onOk: async () => {
              var s, n;
              try {
                const i = await p.validate();
                await mt({
                  tenantName: i.tenantName.trim(),
                  tenantCode: i.tenantCode.trim().toLowerCase(),
                  businessType: i.businessType,
                  tenantZone: i.tenantZone,
                  eventSecret:
                    ((s = i.eventSecret) == null ? void 0 : s.trim()) || void 0,
                  expireAt: (n = i.expireAt) != null ? n : 0,
                }),
                  d.success(a['tenantSearch.msg.createOk']),
                  _(!1),
                  S();
              } catch {}
            },
            unmountOnExit: !0,
            style: { width: 560 },
            children: e.exports.jsxDEV(
              r,
              {
                form: p,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                className: u['search-form'],
                children: [
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: a['tenantSearch.columns.tenantName'],
                      field: 'tenantName',
                      rules: [
                        {
                          required: !0,
                          message: a['tenantSearch.validation.required'],
                        },
                      ],
                      children: e.exports.jsxDEV(
                        v,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 567, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 557, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: a['tenantSearch.columns.tenantCode'],
                      field: 'tenantCode',
                      rules: [
                        {
                          required: !0,
                          message: a['tenantSearch.validation.required'],
                        },
                        {
                          match: /^[a-z0-9][a-z0-9_-]{1,62}$/,
                          message: a['tenantSearch.validation.tenantCode'],
                        },
                      ],
                      children: e.exports.jsxDEV(
                        v,
                        { placeholder: 'demo2' },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 583, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 569, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: a['tenantSearch.columns.businessType'],
                      field: 'businessType',
                      rules: [
                        {
                          required: !0,
                          message: a['tenantSearch.validation.required'],
                        },
                      ],
                      children: e.exports.jsxDEV(
                        g.Group,
                        {
                          children: [
                            e.exports.jsxDEV(
                              g,
                              {
                                value: 1,
                                children: a['tenantSearch.businessType.system'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 596,
                                columnNumber: 15,
                              },
                              this
                            ),
                            e.exports.jsxDEV(
                              g,
                              {
                                value: 2,
                                children: a['tenantSearch.businessType.ops'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 597,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: t, lineNumber: 595, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 585, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    'div',
                    {
                      className: u.formLikeField,
                      children: [
                        e.exports.jsxDEV(
                          'label',
                          {
                            id: Ee,
                            className: u.formLikeFieldLabel,
                            htmlFor: pe(H),
                            children: a['tenantSearch.columns.tenantZone'],
                          },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 601, columnNumber: 13 },
                          this
                        ),
                        e.exports.jsxDEV(
                          'div',
                          {
                            className: u.formLikeFieldControl,
                            children: e.exports.jsxDEV(
                              r.Item,
                              {
                                field: 'tenantZone',
                                rules: [
                                  {
                                    required: !0,
                                    message:
                                      a['tenantSearch.validation.required'],
                                  },
                                ],
                                noStyle: !0,
                                children: e.exports.jsxDEV(
                                  be,
                                  {
                                    baseId: H,
                                    ariaLabelledBy: Ee,
                                    children: e.exports.jsxDEV(
                                      w,
                                      {
                                        allowCreate: !0,
                                        placeholder: 'IANA',
                                        children: ve.map((s) =>
                                          e.exports.jsxDEV(
                                            w.Option,
                                            { value: s, children: s },
                                            s,
                                            !1,
                                            {
                                              fileName: t,
                                              lineNumber: 625,
                                              columnNumber: 23,
                                            },
                                            this
                                          )
                                        ),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: t,
                                        lineNumber: 623,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: t,
                                    lineNumber: 619,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 609,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 608, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: t, lineNumber: 600, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: 'encryption_key',
                      field: 'eventSecret',
                      rules: [
                        {
                          validator: (s, n) =>
                            !s || !String(s).trim()
                              ? n()
                              : String(s).trim().length !== 16
                              ? n(a['tenantSearch.validation.encryptionLen'])
                              : n(),
                        },
                      ],
                      children: e.exports.jsxDEV(
                        v.Password,
                        { autoComplete: 'new-password' },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 651, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 634, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: t, lineNumber: 549, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 524, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          b,
          {
            title: a['tenantSearch.modal.editTitle'],
            visible: Te,
            onCancel: () => {
              Z(!1), M(''), q('');
            },
            onOk: async () => {
              var s;
              try {
                const n = await f.validate(),
                  i = n.eventSecret != null ? String(n.eventSecret).trim() : '',
                  me = {
                    id: n.id,
                    tenantName: (s = n.tenantName) == null ? void 0 : s.trim(),
                    businessType: n.businessType,
                    tenantZone: n.tenantZone,
                  };
                i !== (ke || '').trim() && (me.eventSecret = i),
                  await ct(me),
                  d.success(a['tenantSearch.msg.saveOk']),
                  Z(!1),
                  M(''),
                  q(''),
                  S();
              } catch {}
            },
            unmountOnExit: !0,
            style: { width: 560 },
            children: e.exports.jsxDEV(
              r,
              {
                form: f,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                className: u['search-form'],
                children: [
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      field: 'id',
                      hidden: !0,
                      children: e.exports.jsxDEV(
                        v,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 700, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 699, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: a['tenantSearch.columns.tenantCode'],
                      children: e.exports.jsxDEV(
                        P.Text,
                        { type: 'secondary', children: we },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 703, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 702, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: a['tenantSearch.columns.tenantName'],
                      field: 'tenantName',
                      rules: [
                        {
                          required: !0,
                          message: a['tenantSearch.validation.required'],
                        },
                      ],
                      children: e.exports.jsxDEV(
                        v,
                        {},
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 715, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 705, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: a['tenantSearch.columns.businessType'],
                      field: 'businessType',
                      rules: [
                        {
                          required: !0,
                          message: a['tenantSearch.validation.required'],
                        },
                      ],
                      children: e.exports.jsxDEV(
                        g.Group,
                        {
                          children: [
                            e.exports.jsxDEV(
                              g,
                              {
                                value: 1,
                                children: a['tenantSearch.businessType.system'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 728,
                                columnNumber: 15,
                              },
                              this
                            ),
                            e.exports.jsxDEV(
                              g,
                              {
                                value: 2,
                                children: a['tenantSearch.businessType.ops'],
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 729,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: t, lineNumber: 727, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 717, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    'div',
                    {
                      className: u.formLikeField,
                      children: [
                        e.exports.jsxDEV(
                          'label',
                          {
                            id: Se,
                            className: u.formLikeFieldLabel,
                            htmlFor: pe(W),
                            children: a['tenantSearch.columns.tenantZone'],
                          },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 733, columnNumber: 13 },
                          this
                        ),
                        e.exports.jsxDEV(
                          'div',
                          {
                            className: u.formLikeFieldControl,
                            children: e.exports.jsxDEV(
                              r.Item,
                              {
                                field: 'tenantZone',
                                rules: [
                                  {
                                    required: !0,
                                    message:
                                      a['tenantSearch.validation.required'],
                                  },
                                ],
                                noStyle: !0,
                                children: e.exports.jsxDEV(
                                  be,
                                  {
                                    baseId: W,
                                    ariaLabelledBy: Se,
                                    children: e.exports.jsxDEV(
                                      w,
                                      {
                                        allowCreate: !0,
                                        children: ve.map((s) =>
                                          e.exports.jsxDEV(
                                            w.Option,
                                            { value: s, children: s },
                                            s,
                                            !1,
                                            {
                                              fileName: t,
                                              lineNumber: 757,
                                              columnNumber: 23,
                                            },
                                            this
                                          )
                                        ),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: t,
                                        lineNumber: 755,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: t,
                                    lineNumber: 751,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: t,
                                lineNumber: 741,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 740, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: t, lineNumber: 732, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    r.Item,
                    {
                      label: 'encryption_key',
                      field: 'eventSecret',
                      rules: [
                        {
                          validator: (s, n) =>
                            s == null || !String(s).trim()
                              ? n()
                              : String(s).trim().length !== 16
                              ? n(a['tenantSearch.validation.encryptionLen'])
                              : n(),
                        },
                      ],
                      children: e.exports.jsxDEV(
                        v.Password,
                        { autoComplete: 'new-password' },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 783, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 766, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: t, lineNumber: 691, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 656, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          b,
          {
            title: `\u6388\u6743\uFF1A${
              (m == null ? void 0 : m.tenantName) || ''
            }`,
            visible: R,
            footer: null,
            onCancel: () => {
              ee(!1),
                te(null),
                ae([]),
                L({}),
                C(1),
                T(!1),
                k(null),
                D.resetFields();
            },
            unmountOnExit: !0,
            style: { width: 1100 },
            children:
              K((m == null ? void 0 : m.tenantType) || '') === 1
                ? e.exports.jsxDEV(
                    Ne,
                    {
                      type: 'info',
                      content:
                        '\u5E73\u53F0\u79DF\u6237\u7BA1\u7406\u5458\u5929\u7136\u62E5\u6709\u5168\u90E8\u542F\u7528\u6743\u9650\uFF0C\u65E0\u9700\u914D\u7F6E\u79DF\u6237\u6743\u9650\u8FB9\u754C\uFF1B\u5E73\u53F0\u79DF\u6237\u666E\u901A\u6210\u5458\u4ECD\u9700\u901A\u8FC7\u89D2\u8272\u3001\u7528\u6237\u6216\u90E8\u95E8\u89D2\u8272\u6388\u6743\u83B7\u5F97\u6743\u9650\u3002',
                    },
                    void 0,
                    !1,
                    { fileName: t, lineNumber: 806, columnNumber: 11 },
                    this
                  )
                : e.exports.jsxDEV(
                    O,
                    {
                      direction: 'vertical',
                      size: 16,
                      style: { width: '100%' },
                      children: [
                        e.exports.jsxDEV(
                          Ne,
                          {
                            type: 'warning',
                            content:
                              '\u65B0\u589E\u6388\u6743\u9ED8\u8BA4\u4E0D\u542F\u7528\uFF1B\u666E\u901A\u79DF\u6237\u7BA1\u7406\u5458\u81EA\u52A8\u62E5\u6709\u5DF2\u542F\u7528\u8FB9\u754C\u5185\u5168\u90E8\u6743\u9650\uFF0C\u666E\u901A\u6210\u5458\u4E0D\u4F1A\u8D85\u51FA\u8BE5\u8FB9\u754C\u3002',
                          },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 812, columnNumber: 13 },
                          this
                        ),
                        e.exports.jsxDEV(
                          'div',
                          {
                            className: u['search-form-wrapper'],
                            children: [
                              e.exports.jsxDEV(
                                r,
                                {
                                  form: D,
                                  className: u['search-form'],
                                  labelAlign: 'left',
                                  labelCol: { span: 5 },
                                  wrapperCol: { span: 19 },
                                  children: e.exports.jsxDEV(
                                    'div',
                                    {
                                      className: u.boundarySearchGrid,
                                      children: [
                                        e.exports.jsxDEV(
                                          r.Item,
                                          {
                                            label: 'ID',
                                            field: 'id',
                                            children: e.exports.jsxDEV(
                                              v,
                                              {
                                                placeholder:
                                                  '\u7CBE\u51C6\u67E5\u8BE2',
                                                allowClear: !0,
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: t,
                                                lineNumber: 826,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: t,
                                            lineNumber: 825,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                        e.exports.jsxDEV(
                                          r.Item,
                                          {
                                            label: '\u6743\u9650\u540D\u79F0',
                                            field: 'permissionName',
                                            children: e.exports.jsxDEV(
                                              v,
                                              {
                                                placeholder:
                                                  '\u6A21\u7CCA\u67E5\u8BE2',
                                                allowClear: !0,
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: t,
                                                lineNumber: 829,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: t,
                                            lineNumber: 828,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName: t,
                                      lineNumber: 824,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                !1,
                                {
                                  fileName: t,
                                  lineNumber: 817,
                                  columnNumber: 15,
                                },
                                this
                              ),
                              e.exports.jsxDEV(
                                'div',
                                {
                                  className: u['right-button'],
                                  children: [
                                    e.exports.jsxDEV(
                                      c,
                                      {
                                        type: 'primary',
                                        icon: e.exports.jsxDEV(
                                          Qe,
                                          {},
                                          void 0,
                                          !1,
                                          {
                                            fileName: t,
                                            lineNumber: 836,
                                            columnNumber: 25,
                                          },
                                          this
                                        ),
                                        onClick: async () => {
                                          const s = await D.validate();
                                          C(1), L(s);
                                        },
                                        children: '\u67E5\u8BE2',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: t,
                                        lineNumber: 834,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                    e.exports.jsxDEV(
                                      c,
                                      {
                                        icon: e.exports.jsxDEV(
                                          $,
                                          {},
                                          void 0,
                                          !1,
                                          {
                                            fileName: t,
                                            lineNumber: 846,
                                            columnNumber: 25,
                                          },
                                          this
                                        ),
                                        onClick: () => {
                                          D.resetFields(), C(1), L({});
                                        },
                                        children: '\u91CD\u7F6E',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: t,
                                        lineNumber: 845,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName: t,
                                  lineNumber: 833,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          { fileName: t, lineNumber: 816, columnNumber: 13 },
                          this
                        ),
                        e.exports.jsxDEV(
                          'div',
                          {
                            className: u['button-group'],
                            children: [
                              e.exports.jsxDEV(
                                O,
                                {
                                  children: e.exports.jsxDEV(
                                    c,
                                    {
                                      type: 'primary',
                                      icon: e.exports.jsxDEV(
                                        ce,
                                        {},
                                        void 0,
                                        !1,
                                        {
                                          fileName: t,
                                          lineNumber: 861,
                                          columnNumber: 25,
                                        },
                                        this
                                      ),
                                      onClick: () => {
                                        k(null), E.resetFields(), T(!0);
                                      },
                                      children: '\u65B0\u589E',
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: t,
                                      lineNumber: 859,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                !1,
                                {
                                  fileName: t,
                                  lineNumber: 858,
                                  columnNumber: 15,
                                },
                                this
                              ),
                              e.exports.jsxDEV(
                                c,
                                {
                                  icon: e.exports.jsxDEV(
                                    $,
                                    {},
                                    void 0,
                                    !1,
                                    {
                                      fileName: t,
                                      lineNumber: 872,
                                      columnNumber: 23,
                                    },
                                    this
                                  ),
                                  onClick: () => F((s) => s + 1),
                                  children: '\u5237\u65B0',
                                },
                                void 0,
                                !1,
                                {
                                  fileName: t,
                                  lineNumber: 871,
                                  columnNumber: 15,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          { fileName: t, lineNumber: 857, columnNumber: 13 },
                          this
                        ),
                        e.exports.jsxDEV(
                          de,
                          {
                            rowKey: 'id',
                            loading: Ae,
                            data: Be,
                            columns: Me,
                            pagination: Ze,
                            onChange: (s) => {
                              C((n) => {
                                var i;
                                return (i = s.current) != null ? i : n;
                              }),
                                Ie((n) =>
                                  s.pageSize != null ? Number(s.pageSize) : n
                                );
                            },
                            border: !0,
                            scroll: { x: 948 },
                          },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 878, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: t, lineNumber: 811, columnNumber: 11 },
                    this
                  ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 788, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          b,
          {
            title: U ? '\u7F16\u8F91\u6388\u6743' : '\u65B0\u589E\u6388\u6743',
            visible: Pe,
            onCancel: () => {
              T(!1), k(null), E.resetFields();
            },
            onOk: async () => {
              if (!!m)
                try {
                  const s = await E.validate();
                  U
                    ? (await bt({
                        id: U.id,
                        tenantId: m.id,
                        packageId: s.packageId,
                      }),
                      d.success('\u4FDD\u5B58\u6210\u529F'))
                    : (await pt({ tenantId: m.id, packageId: s.packageId }),
                      d.success('\u65B0\u589E\u6210\u529F')),
                    T(!1),
                    k(null),
                    E.resetFields(),
                    F((n) => n + 1);
                } catch {}
            },
            unmountOnExit: !0,
            style: { width: 560 },
            children: e.exports.jsxDEV(
              r,
              {
                form: E,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                className: u['search-form'],
                children: e.exports.jsxDEV(
                  'div',
                  {
                    className: u.formLikeField,
                    children: [
                      e.exports.jsxDEV(
                        'label',
                        {
                          className: u.formLikeFieldLabel,
                          children: '\u6743\u9650\u8FB9\u754C',
                        },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 945, columnNumber: 13 },
                        this
                      ),
                      e.exports.jsxDEV(
                        'div',
                        {
                          className: u.formLikeFieldControl,
                          children: e.exports.jsxDEV(
                            r.Item,
                            {
                              field: 'packageId',
                              rules: [
                                {
                                  required: !0,
                                  message:
                                    a['tenantSearch.validation.required'],
                                },
                              ],
                              noStyle: !0,
                              children: e.exports.jsxDEV(
                                w,
                                {
                                  placeholder:
                                    '\u8BF7\u9009\u62E9\u6743\u9650\u8FB9\u754C',
                                  showSearch: !0,
                                  allowClear: !0,
                                  options: ze,
                                  filterOption: (s, n) => {
                                    var i;
                                    return String(
                                      ((i = n.extra) == null
                                        ? void 0
                                        : i.label) || ''
                                    )
                                      .toLowerCase()
                                      .includes(s.toLowerCase());
                                  },
                                },
                                void 0,
                                !1,
                                {
                                  fileName: t,
                                  lineNumber: 957,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: t, lineNumber: 947, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: t, lineNumber: 946, columnNumber: 13 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: t, lineNumber: 944, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: t, lineNumber: 936, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 897, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          b,
          {
            title: a['tenantSearch.modal.viewTitle'],
            visible: !!o,
            footer: null,
            onCancel: () => X(null),
            unmountOnExit: !0,
            style: { width: 560 },
            className: u['tenant-view-modal'],
            children: o
              ? e.exports.jsxDEV(
                  Ye,
                  {
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
                        label: a['tenantSearch.columns.tenantName'],
                        value: o.tenantName,
                      },
                      {
                        label: a['tenantSearch.columns.tenantCode'],
                        value: e.exports.jsxDEV(
                          P.Text,
                          { copyable: !0, children: o.tenantCode },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 1010, columnNumber: 19 },
                          this
                        ),
                      },
                      {
                        label: a['tenantSearch.columns.businessType'],
                        value: lt(a, K(o.tenantType)),
                      },
                      {
                        label: a['tenantSearch.columns.tenantZone'],
                        value: o.tenantZone,
                      },
                      {
                        label: a['tenantSearch.columns.eventSecret'],
                        value: e.exports.jsxDEV(
                          P.Text,
                          { copyable: Boolean(ue), children: ue || '\u2014' },
                          void 0,
                          !1,
                          { fileName: t, lineNumber: 1029, columnNumber: 19 },
                          this
                        ),
                      },
                      {
                        label: a['tenantSearch.columns.enableStatus'],
                        value: rt(a, o.activeStatus),
                      },
                      {
                        label: a['tenantSearch.columns.tenantStatus'],
                        value: ut(a, o.status),
                      },
                      {
                        label: a['tenantSearch.columns.lastOperator'],
                        value:
                          ((oe = o.operatorUsername) == null
                            ? void 0
                            : oe.trim()) || '\u2014',
                      },
                      {
                        label: a['tenantSearch.columns.createdAt'],
                        value: G(o.createdAt),
                      },
                      {
                        label: a['tenantSearch.columns.updatedAt'],
                        value: G(o.updatedAt),
                      },
                    ],
                  },
                  void 0,
                  !1,
                  { fileName: t, lineNumber: 984, columnNumber: 11 },
                  this
                )
              : null,
          },
          void 0,
          !1,
          { fileName: t, lineNumber: 974, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: t, lineNumber: 482, columnNumber: 5 },
    this
  );
}
export { Lt as default };
