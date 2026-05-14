var ae = Object.defineProperty,
  re = Object.defineProperties;
var ne = Object.getOwnPropertyDescriptors;
var P = Object.getOwnPropertySymbols;
var me = Object.prototype.hasOwnProperty,
  de = Object.prototype.propertyIsEnumerable;
var T = (r, s, a) =>
    s in r
      ? ae(r, s, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (r[s] = a),
  v = (r, s) => {
    for (var a in s || (s = {})) me.call(s, a) && T(r, a, s[a]);
    if (P) for (var a of P(s)) de.call(s, a) && T(r, a, s[a]);
    return r;
  },
  F = (r, s) => re(r, ne(s));
import {
  ae as t,
  r as o,
  j as e,
  at as ce,
  af as n,
  B as m,
  Z as Ne,
  S as j,
  aS as L,
  aL as k,
  aR as x,
  H as b,
  T as fe,
  M as p,
  a as y,
  aP as O,
  aQ as z,
} from './vendor.f50a67ab.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  z as xe,
  A as be,
  s as c,
  B as pe,
  C as he,
  D as Ee,
  E as De,
  F as Be,
  G as ve,
} from './index.module.b1aaef83.js';
import { f as M } from './accessControl.18599d4a.js';
import './access-control.b0193dd4.js';
import './index.1708e48b.js';
var i =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/policies/index.tsx';
const { Title: Fe } = fe;
function Te() {
  const [r] = t.useForm(),
    [s] = t.useForm(),
    [a, q] = o.exports.useState(''),
    [R, V] = o.exports.useState(!1),
    [W, g] = o.exports.useState(!1),
    [Y, K] = o.exports.useState([]),
    [_, $] = o.exports.useState([]),
    [G, U] = o.exports.useState(0),
    [H, Q] = o.exports.useState(0),
    [h, C] = o.exports.useState(1),
    [E, A] = o.exports.useState(1),
    [Z, D] = o.exports.useState(!1),
    [J, B] = o.exports.useState(!1),
    [N, X] = o.exports.useState(null),
    [f, ee] = o.exports.useState(null),
    [I, d] = o.exports.useState(0);
  o.exports.useEffect(() => {
    let u = !1;
    return (
      V(!0),
      xe({ page: h, pageSize: 10, keyword: a || void 0 })
        .then((l) => {
          u || (K(l.list || []), U(l.total || 0));
        })
        .finally(() => !u && V(!1)),
      () => {
        u = !0;
      }
    );
  }, [h, a, I]),
    o.exports.useEffect(() => {
      let u = !1;
      return (
        g(!0),
        be({ page: E, pageSize: 10, keyword: a || void 0 })
          .then((l) => {
            u || ($(l.list || []), Q(l.total || 0));
          })
          .finally(() => !u && g(!1)),
        () => {
          u = !0;
        }
      );
    }, [E, a, I]);
  const w = (u) => {
      X(u || null),
        r.resetFields(),
        r.setFieldsValue(
          u || {
            policyType: 'ABAC',
            effect: 'ALLOW',
            priority: 100,
            activeStatus: 1,
          }
        ),
        D(!0);
    },
    S = (u) => {
      ee(u || null),
        s.resetFields(),
        s.setFieldsValue(
          u || {
            subjectType: 'ROLE',
            effect: 'ALLOW',
            priority: 100,
            activeStatus: 1,
          }
        ),
        B(!0);
    },
    ie = async () => {
      const u = await r.validate();
      N ? await pe(F(v({}, u), { id: N.id })) : await he(u),
        p.success(
          N
            ? '\u7B56\u7565\u5DF2\u66F4\u65B0'
            : '\u7B56\u7565\u5DF2\u65B0\u589E'
        ),
        D(!1),
        d((l) => l + 1);
    },
    ue = async () => {
      const u = await s.validate();
      f ? await Ee(F(v({}, u), { id: f.id })) : await De(u),
        p.success(
          f
            ? '\u7ED1\u5B9A\u5DF2\u66F4\u65B0'
            : '\u7ED1\u5B9A\u5DF2\u65B0\u589E'
        ),
        B(!1),
        d((l) => l + 1);
    },
    le = (u) =>
      x.confirm({
        title: '\u5220\u9664 ABAC \u7B56\u7565',
        content: `\u786E\u8BA4\u5220\u9664 ${u.policyCode}\uFF1F\u7ED1\u5B9A\u4E3B\u4F53\u5C06\u65E0\u6CD5\u7EE7\u7EED\u547D\u4E2D\u8BE5\u7B56\u7565\u3002`,
        onOk: async () => {
          await Be(u.id),
            p.success('\u7B56\u7565\u5DF2\u5220\u9664'),
            d((l) => l + 1);
        },
      }),
    te = (u) =>
      x.confirm({
        title: '\u5220\u9664\u7B56\u7565\u7ED1\u5B9A',
        content: `\u786E\u8BA4\u5220\u9664\u4E3B\u4F53 ${u.subjectType}:${u.subjectId} \u7684\u7B56\u7565\u7ED1\u5B9A\uFF1F`,
        onOk: async () => {
          await ve(u.id),
            p.success('\u7ED1\u5B9A\u5DF2\u5220\u9664'),
            d((l) => l + 1);
        },
      }),
    se = [
      {
        title: '\u7B56\u7565\u7F16\u7801',
        dataIndex: 'policyCode',
        width: 200,
      },
      {
        title: '\u7B56\u7565\u540D\u79F0',
        dataIndex: 'policyName',
        width: 180,
      },
      {
        title: '\u7C7B\u578B',
        dataIndex: 'policyType',
        width: 110,
        render: (u) =>
          e.exports.jsxDEV(
            y,
            { color: 'arcoblue', children: u || 'ABAC' },
            void 0,
            !1,
            { fileName: i, lineNumber: 177, columnNumber: 22 },
            this
          ),
      },
      {
        title: '\u6548\u679C',
        dataIndex: 'effect',
        width: 100,
        render: (u) =>
          e.exports.jsxDEV(
            y,
            { color: u === 'DENY' ? 'red' : 'green', children: u || 'ALLOW' },
            void 0,
            !1,
            { fileName: i, lineNumber: 184, columnNumber: 9 },
            this
          ),
      },
      {
        title: '\u6761\u4EF6\u8868\u8FBE\u5F0F',
        dataIndex: 'conditionExpr',
        ellipsis: !0,
      },
      { title: '\u4F18\u5148\u7EA7', dataIndex: 'priority', width: 100 },
      {
        title: '\u66F4\u65B0\u65F6\u95F4',
        dataIndex: 'updatedAt',
        width: 170,
        render: M,
      },
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 160,
        fixed: 'right',
        render: (u, l) =>
          e.exports.jsxDEV(
            j,
            {
              className: c.operations,
              children: [
                e.exports.jsxDEV(
                  m,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      O,
                      {},
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 205, columnNumber: 19 },
                      this
                    ),
                    onClick: () => w(l),
                    children: '\u7F16\u8F91',
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 202, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  m,
                  {
                    type: 'text',
                    status: 'danger',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      z,
                      {},
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 214, columnNumber: 19 },
                      this
                    ),
                    onClick: () => le(l),
                    children: '\u5220\u9664',
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 210, columnNumber: 11 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: i, lineNumber: 201, columnNumber: 9 },
            this
          ),
      },
    ],
    oe = [
      {
        title: '\u4E3B\u4F53\u7C7B\u578B',
        dataIndex: 'subjectType',
        width: 120,
      },
      { title: '\u4E3B\u4F53 ID', dataIndex: 'subjectId', width: 100 },
      {
        title: '\u7B56\u7565\u7F16\u7801',
        dataIndex: 'policyCode',
        width: 200,
      },
      {
        title: '\u6548\u679C',
        dataIndex: 'effect',
        width: 100,
        render: (u) =>
          e.exports.jsxDEV(
            y,
            { color: u === 'DENY' ? 'red' : 'green', children: u || 'ALLOW' },
            void 0,
            !1,
            { fileName: i, lineNumber: 233, columnNumber: 9 },
            this
          ),
      },
      {
        title: '\u8FC7\u671F\u65F6\u95F4',
        dataIndex: 'expireAt',
        width: 170,
        render: M,
      },
      { title: '\u4F18\u5148\u7EA7', dataIndex: 'priority', width: 100 },
      { title: '\u63CF\u8FF0', dataIndex: 'description', ellipsis: !0 },
      {
        title: '\u64CD\u4F5C',
        dataIndex: 'operations',
        width: 160,
        fixed: 'right',
        render: (u, l) =>
          e.exports.jsxDEV(
            j,
            {
              className: c.operations,
              children: [
                e.exports.jsxDEV(
                  m,
                  {
                    type: 'text',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      O,
                      {},
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 254, columnNumber: 19 },
                      this
                    ),
                    onClick: () => S(l),
                    children: '\u7F16\u8F91',
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 251, columnNumber: 11 },
                  this
                ),
                e.exports.jsxDEV(
                  m,
                  {
                    type: 'text',
                    status: 'danger',
                    size: 'small',
                    icon: e.exports.jsxDEV(
                      z,
                      {},
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 263, columnNumber: 19 },
                      this
                    ),
                    onClick: () => te(l),
                    children: '\u5220\u9664',
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 259, columnNumber: 11 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: i, lineNumber: 250, columnNumber: 9 },
            this
          ),
      },
    ];
  return e.exports.jsxDEV(
    ce,
    {
      children: [
        e.exports.jsxDEV(
          Fe,
          { heading: 6, children: 'ABAC \u7B56\u7565\u7BA1\u7406' },
          void 0,
          !1,
          { fileName: i, lineNumber: 275, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: c['search-row'],
            children: [
              e.exports.jsxDEV(
                n.Search,
                {
                  allowClear: !0,
                  placeholder:
                    '\u641C\u7D22\u7B56\u7565\u7F16\u7801\u3001\u540D\u79F0\u6216\u4E3B\u4F53',
                  onSearch: (u) => {
                    C(1), A(1), q(u);
                  },
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 277, columnNumber: 9 },
                this
              ),
              e.exports.jsxDEV(
                m,
                {
                  icon: e.exports.jsxDEV(
                    Ne,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 286, columnNumber: 23 },
                    this
                  ),
                  onClick: () => d((u) => u + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 286, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: i, lineNumber: 276, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: c['button-group'],
            children: e.exports.jsxDEV(
              j,
              {
                children: [
                  e.exports.jsxDEV(
                    m,
                    {
                      type: 'primary',
                      icon: e.exports.jsxDEV(
                        L,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 294, columnNumber: 19 },
                        this
                      ),
                      onClick: () => w(),
                      children: '\u65B0\u589E\u7B56\u7565',
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 292, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    m,
                    {
                      icon: e.exports.jsxDEV(
                        L,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 299, columnNumber: 25 },
                        this
                      ),
                      onClick: () => S(),
                      children: '\u65B0\u589E\u7ED1\u5B9A',
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 299, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: i, lineNumber: 291, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 290, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          k,
          {
            rowKey: 'id',
            loading: R,
            columns: se,
            data: Y,
            scroll: { x: 1250 },
            pagination: { current: h, pageSize: 10, total: G, showTotal: !0 },
            onChange: (u) => C(u.current || 1),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 304, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          'div',
          {
            className: c['section-title'],
            children: '\u7B56\u7565\u7ED1\u5B9A',
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 318, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          k,
          {
            rowKey: 'id',
            loading: W,
            columns: oe,
            data: _,
            scroll: { x: 1100 },
            pagination: { current: E, pageSize: 10, total: H, showTotal: !0 },
            onChange: (u) => A(u.current || 1),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 319, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          x,
          {
            title: N
              ? '\u7F16\u8F91 ABAC \u7B56\u7565'
              : '\u65B0\u589E ABAC \u7B56\u7565',
            visible: Z,
            onOk: ie,
            onCancel: () => D(!1),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              t,
              {
                form: r,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u7B56\u7565\u7F16\u7801',
                      field: 'policyCode',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 352, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 347, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u7B56\u7565\u540D\u79F0',
                      field: 'policyName',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 359, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 354, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u7B56\u7565\u7C7B\u578B',
                      field: 'policyType',
                      children: e.exports.jsxDEV(
                        b,
                        {
                          options: [
                            { label: 'ABAC', value: 'ABAC' },
                            {
                              label: '\u65F6\u95F4\u7B56\u7565',
                              value: 'TIME',
                            },
                            { label: '\u73AF\u5883\u7B56\u7565', value: 'ENV' },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 362, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 361, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u6548\u679C',
                      field: 'effect',
                      children: e.exports.jsxDEV(
                        b,
                        {
                          options: [
                            { label: '\u5141\u8BB8', value: 'ALLOW' },
                            { label: '\u62D2\u7EDD', value: 'DENY' },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 371, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 370, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u6761\u4EF6\u8868\u8FBE\u5F0F',
                      field: 'conditionExpr',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n.TextArea,
                        {
                          rows: 5,
                          placeholder:
                            '\u4F8B\u5982\uFF1Auser.deptId == resource.deptId && env.ip in trustedIps',
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 383, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 378, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u4F18\u5148\u7EA7',
                      field: 'priority',
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 389, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 388, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u63CF\u8FF0',
                      field: 'description',
                      children: e.exports.jsxDEV(
                        n.TextArea,
                        { rows: 3 },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 392, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 391, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: i, lineNumber: 340, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 333, columnNumber: 7 },
          this
        ),
        e.exports.jsxDEV(
          x,
          {
            title: f
              ? '\u7F16\u8F91\u7B56\u7565\u7ED1\u5B9A'
              : '\u65B0\u589E\u7B56\u7565\u7ED1\u5B9A',
            visible: J,
            onOk: ue,
            onCancel: () => B(!1),
            unmountOnExit: !0,
            children: e.exports.jsxDEV(
              t,
              {
                form: s,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 5 },
                wrapperCol: { span: 19 },
                children: [
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u4E3B\u4F53\u7C7B\u578B',
                      field: 'subjectType',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        b,
                        {
                          options: [
                            { label: '\u7528\u6237', value: 'USER' },
                            { label: '\u89D2\u8272', value: 'ROLE' },
                            { label: '\u90E8\u95E8', value: 'DEPT' },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 415, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 410, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u4E3B\u4F53 ID',
                      field: 'subjectId',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 428, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 423, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u7B56\u7565\u7F16\u7801',
                      field: 'policyCode',
                      rules: [{ required: !0 }],
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 435, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 430, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u6548\u679C',
                      field: 'effect',
                      children: e.exports.jsxDEV(
                        b,
                        {
                          options: [
                            { label: '\u5141\u8BB8', value: 'ALLOW' },
                            { label: '\u62D2\u7EDD', value: 'DENY' },
                          ],
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 438, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 437, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u8FC7\u671F\u65F6\u95F4\u6233',
                      field: 'expireAt',
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 446, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 445, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u4F18\u5148\u7EA7',
                      field: 'priority',
                      children: e.exports.jsxDEV(
                        n,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 449, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 448, columnNumber: 11 },
                    this
                  ),
                  e.exports.jsxDEV(
                    t.Item,
                    {
                      label: '\u63CF\u8FF0',
                      field: 'description',
                      children: e.exports.jsxDEV(
                        n.TextArea,
                        { rows: 3 },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 452, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 451, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: i, lineNumber: 403, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 396, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: i, lineNumber: 274, columnNumber: 5 },
    this
  );
}
export { Te as default };
