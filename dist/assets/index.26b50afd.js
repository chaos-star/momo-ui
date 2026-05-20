var $ = Object.defineProperty,
  H = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty,
  Q = Object.prototype.propertyIsEnumerable;
var B = (a, u, s) =>
    u in a
      ? $(a, u, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (a[u] = s),
  E = (a, u) => {
    for (var s in u || (u = {})) K.call(u, s) && B(a, s, u[s]);
    if (y) for (var s of y(u)) Q.call(u, s) && B(a, s, u[s]);
    return a;
  },
  j = (a, u) => H(a, J(u));
import {
  ag as o,
  r as i,
  j as e,
  a as n,
  S as P,
  B as d,
  aQ as W,
  aR as X,
  aS as T,
  M as I,
  av as Y,
  aT as Z,
  $ as D,
  aM as ee,
  ah as p,
  T as te,
  aU as ae,
  aI as ue,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  f as se,
  d as re,
  u as ie,
  c as oe,
} from './access-permission.bbfa6ab6.js';
import { f as k } from './accessControl.941fcf7e.js';
import { s as h } from './index.module.ea069206.js';
import './access-control.2c5ad8d6.js';
import './index.04d9875a.js';
const { Title: ne, Text: le } = te,
  { Row: de, Col: z } = ue,
  N = { groupCode: '', groupName: '' };
function ce(a, u, s) {
  const c = [a.groupCode, a.groupName]
    .map((l) => (l == null ? void 0 : l.trim()))
    .filter(Boolean)
    .join(' ');
  return { page: u, pageSize: s, keyword: c || void 0 };
}
function pe(a) {
  const [u] = o.useForm(),
    s = () => {
      a.onSearch(u.getFieldsValue());
    },
    c = () => {
      u.resetFields(), a.onSearch(E({}, N));
    };
  return n('div', {
    className: h['search-form-wrapper'],
    children: [
      e(o, {
        form: u,
        initialValues: N,
        className: h['search-form'],
        labelAlign: 'left',
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
        children: n(de, {
          gutter: 24,
          children: [
            e(z, {
              span: 8,
              children: e(o.Item, {
                label: '\u5206\u7EC4\u7F16\u7801',
                field: 'groupCode',
                children: e(p, {
                  allowClear: !0,
                  placeholder: '\u8BF7\u8F93\u5165\u5206\u7EC4\u7F16\u7801',
                }),
              }),
            }),
            e(z, {
              span: 8,
              children: e(o.Item, {
                label: '\u5206\u7EC4\u540D\u79F0',
                field: 'groupName',
                children: e(p, {
                  allowClear: !0,
                  placeholder: '\u8BF7\u8F93\u5165\u5206\u7EC4\u540D\u79F0',
                }),
              }),
            }),
          ],
        }),
      }),
      n('div', {
        className: h['right-button'],
        children: [
          e(d, {
            type: 'primary',
            icon: e(ae, {}),
            onClick: s,
            children: '\u67E5\u8BE2',
          }),
          e(d, { icon: e(D, {}), onClick: c, children: '\u91CD\u7F6E' }),
        ],
      }),
    ],
  });
}
function be() {
  const [a] = o.useForm(),
    [u, s] = i.exports.useState([]),
    [c, l] = i.exports.useState(!1),
    [m, S] = i.exports.useState(1),
    [C, L] = i.exports.useState(10),
    [w, M] = i.exports.useState(0),
    R = i.exports.useMemo(
      () => ({
        sizeCanChange: !0,
        showTotal: !0,
        pageSize: C,
        current: m,
        total: w,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [m, C, w]
    ),
    [b, G] = i.exports.useState({}),
    [v, F] = i.exports.useState(!1),
    [g, A] = i.exports.useState(null),
    [O, x] = i.exports.useState(0);
  i.exports.useEffect(() => {
    let t = !1;
    return (
      l(!0),
      se(ce(b, m, C))
        .then((r) => {
          t || (s(r.list || []), M(r.total || 0));
        })
        .finally(() => !t && l(!1)),
      () => {
        t = !0;
      }
    );
  }, [m, C, b, O]);
  const V = (t) => {
      S(1), G(t);
    },
    _ = (t) => {
      S((r) => {
        var f;
        return (f = t.current) != null ? f : r;
      }),
        L((r) => (t.pageSize != null ? Number(t.pageSize) : r));
    },
    U = i.exports.useMemo(
      () => [
        { title: 'ID', dataIndex: 'id', width: 72 },
        {
          title: '\u5206\u7EC4\u7F16\u7801',
          dataIndex: 'groupCode',
          width: 220,
          render: (t) => (t ? e(le, { copyable: !0, children: t }) : '\u2014'),
        },
        {
          title: '\u5206\u7EC4\u540D\u79F0',
          dataIndex: 'groupName',
          width: 180,
        },
        {
          title: '\u63CF\u8FF0',
          dataIndex: 'description',
          width: 280,
          ellipsis: !0,
          render: (t) => t || '\u2014',
        },
        {
          title: '\u6700\u540E\u64CD\u4F5C\u4EBA',
          dataIndex: 'operatorUsername',
          width: 120,
          ellipsis: !0,
          render: (t) => (t == null ? void 0 : t.trim()) || '\u2014',
        },
        {
          title: '\u521B\u5EFA\u65F6\u95F4',
          dataIndex: 'createdAt',
          width: 168,
          render: k,
        },
        {
          title: '\u66F4\u65B0\u65F6\u95F4',
          dataIndex: 'updatedAt',
          width: 168,
          render: k,
        },
        {
          title: '\u64CD\u4F5C',
          dataIndex: 'operations',
          width: 160,
          fixed: 'right',
          headerCellStyle: { paddingLeft: '12px' },
          render: (t, r) =>
            n(P, {
              className: h.operations,
              size: 10,
              wrap: !0,
              children: [
                e(d, {
                  type: 'text',
                  size: 'small',
                  icon: e(W, {}),
                  onClick: () => {
                    A(r), a.setFieldsValue(r), F(!0);
                  },
                  children: '\u7F16\u8F91',
                }),
                e(d, {
                  type: 'text',
                  status: 'danger',
                  size: 'small',
                  icon: e(X, {}),
                  onClick: () =>
                    T.confirm({
                      title: '\u5220\u9664 API \u5206\u7EC4',
                      content: `\u786E\u8BA4\u5220\u9664 ${r.groupCode}\uFF1F`,
                      onOk: async () => {
                        await re(r.id),
                          I.success('API \u5206\u7EC4\u5DF2\u5220\u9664'),
                          x((f) => f + 1);
                      },
                    }),
                  children: '\u5220\u9664',
                }),
              ],
            }),
        },
      ],
      [a]
    ),
    q = async () => {
      const t = await a.validate();
      g
        ? (await ie(j(E({}, t), { id: g.id })),
          I.success('API \u5206\u7EC4\u5DF2\u66F4\u65B0'))
        : (await oe(t), I.success('API \u5206\u7EC4\u5DF2\u65B0\u589E')),
        F(!1),
        x((r) => r + 1);
    };
  return n(Y, {
    children: [
      e(ne, { heading: 6, children: 'API \u5206\u7EC4\u7BA1\u7406' }),
      e(pe, { onSearch: V }),
      n('div', {
        className: h['button-group'],
        children: [
          e(P, {
            children: e(d, {
              type: 'primary',
              icon: e(Z, {}),
              onClick: () => {
                A(null), a.resetFields(), F(!0);
              },
              children: '\u65B0\u589E\u5206\u7EC4',
            }),
          }),
          e(d, {
            icon: e(D, {}),
            onClick: () => x((t) => t + 1),
            children: '\u5237\u65B0',
          }),
        ],
      }),
      e(ee, {
        rowKey: 'id',
        loading: c,
        columns: U,
        data: u,
        border: !0,
        scroll: { x: 1100 },
        pagination: R,
        onChange: _,
      }),
      e(T, {
        title: g
          ? '\u7F16\u8F91 API \u5206\u7EC4'
          : '\u65B0\u589E API \u5206\u7EC4',
        visible: v,
        onOk: q,
        onCancel: () => F(!1),
        unmountOnExit: !0,
        children: n(o, {
          form: a,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 5 },
          wrapperCol: { span: 19 },
          children: [
            e(o.Item, {
              label: '\u5206\u7EC4\u7F16\u7801',
              field: 'groupCode',
              rules: [{ required: !0 }],
              children: e(p, {}),
            }),
            e(o.Item, {
              label: '\u5206\u7EC4\u540D\u79F0',
              field: 'groupName',
              rules: [{ required: !0 }],
              children: e(p, {}),
            }),
            e(o.Item, {
              label: '\u63CF\u8FF0',
              field: 'description',
              children: e(p.TextArea, { rows: 3 }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { be as default };
