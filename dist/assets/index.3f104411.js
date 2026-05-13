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
} from './vendor.3ac9a823.js';
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
} from './index.module.911536f4.js';
import { f as M } from './accessControl.18599d4a.js';
import './access-control.f393622f.js';
import './index.2a9369a5.js';
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
            { fileName: i, lineNumber: 109, columnNumber: 72 },
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
            { fileName: i, lineNumber: 110, columnNumber: 68 },
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
                      { fileName: i, lineNumber: 114, columnNumber: 172 },
                      this
                    ),
                    onClick: () => w(l),
                    children: '\u7F16\u8F91',
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 114, columnNumber: 133 },
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
                      { fileName: i, lineNumber: 114, columnNumber: 287 },
                      this
                    ),
                    onClick: () => le(l),
                    children: '\u5220\u9664',
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 114, columnNumber: 232 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: i, lineNumber: 114, columnNumber: 96 },
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
            { fileName: i, lineNumber: 121, columnNumber: 68 },
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
                      { fileName: i, lineNumber: 125, columnNumber: 172 },
                      this
                    ),
                    onClick: () => S(l),
                    children: '\u7F16\u8F91',
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 125, columnNumber: 133 },
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
                      { fileName: i, lineNumber: 125, columnNumber: 288 },
                      this
                    ),
                    onClick: () => te(l),
                    children: '\u5220\u9664',
                  },
                  void 0,
                  !1,
                  { fileName: i, lineNumber: 125, columnNumber: 233 },
                  this
                ),
              ],
            },
            void 0,
            !0,
            { fileName: i, lineNumber: 125, columnNumber: 96 },
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
          { fileName: i, lineNumber: 129, columnNumber: 5 },
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
                { fileName: i, lineNumber: 131, columnNumber: 7 },
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
                    { fileName: i, lineNumber: 132, columnNumber: 21 },
                    this
                  ),
                  onClick: () => d((u) => u + 1),
                  children: '\u5237\u65B0',
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 132, columnNumber: 7 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: i, lineNumber: 130, columnNumber: 5 },
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
                        { fileName: i, lineNumber: 134, columnNumber: 81 },
                        this
                      ),
                      onClick: () => w(),
                      children: '\u65B0\u589E\u7B56\u7565',
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 134, columnNumber: 52 },
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
                        { fileName: i, lineNumber: 134, columnNumber: 151 },
                        this
                      ),
                      onClick: () => S(),
                      children: '\u65B0\u589E\u7ED1\u5B9A',
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 134, columnNumber: 137 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: i, lineNumber: 134, columnNumber: 45 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 134, columnNumber: 5 },
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
          { fileName: i, lineNumber: 135, columnNumber: 5 },
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
          { fileName: i, lineNumber: 136, columnNumber: 5 },
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
          { fileName: i, lineNumber: 137, columnNumber: 5 },
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
                        { fileName: i, lineNumber: 140, columnNumber: 81 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 140, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 141, columnNumber: 81 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 141, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 142, columnNumber: 52 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 142, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 143, columnNumber: 46 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 143, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 144, columnNumber: 85 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 144, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 145, columnNumber: 49 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 145, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 146, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 146, columnNumber: 9 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: i, lineNumber: 139, columnNumber: 7 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 138, columnNumber: 5 },
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
                        { fileName: i, lineNumber: 151, columnNumber: 82 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 151, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 152, columnNumber: 81 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 152, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 153, columnNumber: 81 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 153, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 154, columnNumber: 46 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 154, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 155, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 155, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 156, columnNumber: 49 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 156, columnNumber: 9 },
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
                        { fileName: i, lineNumber: 157, columnNumber: 51 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 157, columnNumber: 9 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: i, lineNumber: 150, columnNumber: 7 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 149, columnNumber: 5 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: i, lineNumber: 128, columnNumber: 10 },
    this
  );
}
export { Te as default };
