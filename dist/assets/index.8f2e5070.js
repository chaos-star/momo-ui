var Se = Object.defineProperty,
  fe = Object.defineProperties;
var Ce = Object.getOwnPropertyDescriptors;
var $ = Object.getOwnPropertySymbols;
var Ie = Object.prototype.hasOwnProperty,
  Ae = Object.prototype.propertyIsEnumerable;
var U = (e, r, t) =>
    r in e
      ? Se(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  f = (e, r) => {
    for (var t in r || (r = {})) Ie.call(r, t) && U(e, t, r[t]);
    if ($) for (var t of $(r)) Ae.call(r, t) && U(e, t, r[t]);
    return e;
  },
  E = (e, r) => fe(e, Ce(r));
import {
  ag as p,
  r as c,
  a as h,
  S as H,
  j as a,
  B as u,
  aQ as Pe,
  aR as xe,
  aS as K,
  M as N,
  av as ge,
  ah as d,
  K as m,
  aU as Ee,
  $ as W,
  aT as Fe,
  aM as ve,
  T as Te,
  aI as Le,
  P as be,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  a as we,
  b as Ne,
  e as ye,
  g as Be,
  h as Me,
} from './access-permission.bc4283a5.js';
import { f as Ge } from './accessControl.941fcf7e.js';
import { u as Oe } from './index.97399a5e.js';
import { s as C } from './index.module.ea069206.js';
import './access-control.a5391fe6.js';
const _e = {
  'en-US': {
    'apiSearch.title': 'API management',
    'apiSearch.form.search': 'Search',
    'apiSearch.form.reset': 'Reset',
    'apiSearch.form.all.placeholder': 'All',
    'apiSearch.columns.id': 'ID',
    'apiSearch.columns.apiGroup': 'API group',
    'apiSearch.columns.apiCode': 'API code',
    'apiSearch.columns.apiName': 'API name',
    'apiSearch.columns.httpMethod': 'Request method',
    'apiSearch.columns.pathPattern': 'API path',
    'apiSearch.columns.matchType': 'Match type',
    'apiSearch.columns.accessLevel': 'Access level',
    'apiSearch.columns.updatedAt': 'Updated at',
    'apiSearch.columns.operations': 'Actions',
    'apiSearch.operations.add': 'New API',
    'apiSearch.operations.edit': 'Edit',
    'apiSearch.operations.delete': 'Delete',
    'apiSearch.operations.refresh': 'Refresh',
    'apiSearch.modal.createTitle': 'New API',
    'apiSearch.modal.editTitle': 'Edit API',
    'apiSearch.msg.createOk': 'Created',
    'apiSearch.msg.saveOk': 'Saved',
    'apiSearch.msg.deleteOk': 'Deleted',
    'apiSearch.confirm.deleteTitle': 'Delete API',
    'apiSearch.confirm.deleteContent': 'Confirm deleting this API?',
    'apiSearch.validation.required': 'Required',
    'apiSearch.placeholder.apiGroup': 'Select API group',
    'apiSearch.placeholder.apiCode': 'Select API group first',
    'apiSearch.placeholder.apiCodeSuffix': 'Enter API code suffix',
    'apiSearch.placeholder.apiName': 'Enter API name',
    'apiSearch.placeholder.httpMethod': 'Request method',
    'apiSearch.placeholder.pathPattern': 'Enter API path',
    'apiSearch.placeholder.matchType': 'Match type',
    'apiSearch.placeholder.accessLevel': 'Access level',
    'apiSearch.matchType.EXACT': 'Exact',
    'apiSearch.matchType.PREFIX': 'Prefix',
    'apiSearch.matchType.REGEX': 'Regex',
    'apiSearch.accessLevel.public': 'Public (no login)',
    'apiSearch.accessLevel.loginOnly': 'Login only (no permission)',
    'apiSearch.accessLevel.permission': 'Permission required',
    'apiSearch.field.description': 'Description',
  },
  'zh-CN': {
    'apiSearch.title': 'API \u7BA1\u7406',
    'apiSearch.form.search': '\u67E5\u8BE2',
    'apiSearch.form.reset': '\u91CD\u7F6E',
    'apiSearch.form.all.placeholder': '\u5168\u90E8',
    'apiSearch.columns.id': 'ID',
    'apiSearch.columns.apiGroup': 'API\u5206\u7EC4',
    'apiSearch.columns.apiCode': 'API\u7F16\u7801',
    'apiSearch.columns.apiName': 'API\u540D\u79F0',
    'apiSearch.columns.httpMethod': '\u8BF7\u6C42\u65B9\u6CD5',
    'apiSearch.columns.pathPattern': 'API\u8DEF\u5F84',
    'apiSearch.columns.matchType': '\u5339\u914D\u7C7B\u578B',
    'apiSearch.columns.accessLevel': '\u8BBF\u95EE\u7EA7\u522B',
    'apiSearch.columns.operator': '\u64CD\u4F5C\u4EBA',
    'apiSearch.columns.updatedAt': '\u66F4\u65B0\u65F6\u95F4',
    'apiSearch.columns.operations': '\u64CD\u4F5C',
    'apiSearch.operations.add': '\u65B0\u589E API',
    'apiSearch.operations.edit': '\u7F16\u8F91',
    'apiSearch.operations.delete': '\u5220\u9664',
    'apiSearch.operations.refresh': '\u5237\u65B0',
    'apiSearch.modal.createTitle': '\u65B0\u589E API',
    'apiSearch.modal.editTitle': '\u7F16\u8F91 API',
    'apiSearch.msg.createOk': '\u521B\u5EFA\u6210\u529F',
    'apiSearch.msg.saveOk': '\u4FDD\u5B58\u6210\u529F',
    'apiSearch.msg.deleteOk': 'API \u5DF2\u5220\u9664',
    'apiSearch.confirm.deleteTitle': '\u5220\u9664 API',
    'apiSearch.confirm.deleteContent':
      '\u786E\u8BA4\u5220\u9664\u8BE5 API\uFF1F',
    'apiSearch.validation.required': '\u5FC5\u586B',
    'apiSearch.placeholder.apiGroup': '\u8BF7\u9009\u62E9 API \u5206\u7EC4',
    'apiSearch.placeholder.apiCode':
      '\u8BF7\u5148\u9009\u62E9 API \u5206\u7EC4',
    'apiSearch.placeholder.apiCodeSuffix':
      '\u8BF7\u8F93\u5165 API \u7F16\u7801\u540E\u7F00',
    'apiSearch.placeholder.apiName': '\u8BF7\u8F93\u5165 API \u540D\u79F0',
    'apiSearch.placeholder.httpMethod': '\u8BF7\u6C42\u65B9\u6CD5',
    'apiSearch.placeholder.pathPattern': '\u8BF7\u8F93\u5165 API \u8DEF\u5F84',
    'apiSearch.placeholder.matchType': '\u5339\u914D\u7C7B\u578B',
    'apiSearch.placeholder.accessLevel': '\u8BBF\u95EE\u7EA7\u522B',
    'apiSearch.matchType.EXACT': '\u7CBE\u786E',
    'apiSearch.matchType.PREFIX': '\u524D\u7F00',
    'apiSearch.matchType.REGEX': '\u6B63\u5219',
    'apiSearch.accessLevel.public': '\u65E0\u9700\u767B\u5F55',
    'apiSearch.accessLevel.loginOnly': '\u65E0\u9700\u9274\u6743',
    'apiSearch.accessLevel.permission': '\u9700\u9274\u6743',
    'apiSearch.field.description': '\u63CF\u8FF0',
  },
  'es-ES': {
    'apiSearch.title': 'Gesti\xF3n de API',
    'apiSearch.form.search': 'Buscar',
    'apiSearch.form.reset': 'Restablecer',
    'apiSearch.form.all.placeholder': 'Todos',
    'apiSearch.columns.id': 'ID',
    'apiSearch.columns.apiGroup': 'Grupo API',
    'apiSearch.columns.apiCode': 'C\xF3digo API',
    'apiSearch.columns.apiName': 'Nombre API',
    'apiSearch.columns.httpMethod': 'M\xE9todo',
    'apiSearch.columns.pathPattern': 'Ruta API',
    'apiSearch.columns.matchType': 'Tipo de coincidencia',
    'apiSearch.columns.accessLevel': 'Nivel de acceso',
    'apiSearch.columns.operator': 'Operador',
    'apiSearch.columns.updatedAt': 'Actualizado',
    'apiSearch.columns.operations': 'Acciones',
    'apiSearch.operations.add': 'Nueva API',
    'apiSearch.operations.edit': 'Editar',
    'apiSearch.operations.delete': 'Eliminar',
    'apiSearch.operations.refresh': 'Actualizar',
    'apiSearch.modal.createTitle': 'Nueva API',
    'apiSearch.modal.editTitle': 'Editar API',
    'apiSearch.msg.createOk': 'Creado',
    'apiSearch.msg.saveOk': 'Guardado',
    'apiSearch.msg.deleteOk': 'API eliminada',
    'apiSearch.confirm.deleteTitle': 'Eliminar API',
    'apiSearch.confirm.deleteContent':
      '\xBFConfirmar eliminaci\xF3n de esta API?',
    'apiSearch.validation.required': 'Obligatorio',
    'apiSearch.placeholder.apiGroup': 'Seleccione grupo API',
    'apiSearch.placeholder.apiCode': 'Seleccione primero un grupo API',
    'apiSearch.placeholder.apiCodeSuffix': 'Ingrese sufijo del c\xF3digo API',
    'apiSearch.placeholder.apiName': 'Ingrese nombre API',
    'apiSearch.placeholder.httpMethod': 'M\xE9todo',
    'apiSearch.placeholder.pathPattern': 'Ingrese ruta API',
    'apiSearch.placeholder.matchType': 'Tipo de coincidencia',
    'apiSearch.placeholder.accessLevel': 'Nivel de acceso',
    'apiSearch.matchType.EXACT': 'Exacto',
    'apiSearch.matchType.PREFIX': 'Prefijo',
    'apiSearch.matchType.REGEX': 'Regex',
    'apiSearch.accessLevel.public': 'P\xFAblico (sin login)',
    'apiSearch.accessLevel.loginOnly': 'Solo login (sin permiso)',
    'apiSearch.accessLevel.permission': 'Requiere permiso',
    'apiSearch.field.description': 'Descripci\xF3n',
  },
};
var De = _e,
  S = {
    'ellipsis-text': '_ellipsis-text_oxw71_1',
    'nowrap-text': '_nowrap-text_oxw71_12',
    'search-form': '_search-form_oxw71_17',
    'api-modal': '_api-modal_oxw71_28',
    'modal-form': '_modal-form_oxw71_31',
    'description-item': '_description-item_oxw71_37',
  };
const { Title: Re } = Te,
  { Row: J, Col: l } = Le,
  ke = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  qe = 'api',
  Q = 1,
  Y = 2,
  y = 3,
  Z = {
    apiCode: '',
    apiName: '',
    apiGroup: void 0,
    httpMethod: void 0,
    pathPattern: '',
    accessLevel: void 0,
  };
function je(e, r) {
  return e == null ? '-' : r[e] || String(e);
}
function B(e) {
  return e ? `${qe}:${e}:` : '';
}
function ze(e, r) {
  const t = B(r);
  return e ? (t && e.startsWith(t) ? e.slice(t.length) : e) : '';
}
function F(e) {
  return e
    ? a(be, {
        content: e,
        position: 'top',
        children: a('span', { className: S['ellipsis-text'], children: e }),
      })
    : '-';
}
function Xe(e) {
  const r = Ge(e);
  return a('span', { className: S['nowrap-text'], children: r });
}
function aa() {
  const e = Oe(De),
    [r] = p.useForm(),
    [t] = p.useForm(),
    [ee, ae] = c.exports.useState([]),
    [ie, M] = c.exports.useState(!1),
    [I, v] = c.exports.useState(1),
    [A, re] = c.exports.useState(10),
    [G, te] = c.exports.useState(0),
    [n, O] = c.exports.useState({}),
    [ce, P] = c.exports.useState(!1),
    [T, _] = c.exports.useState(null),
    [x, oe] = c.exports.useState([]),
    [L, b] = c.exports.useState(),
    [D, w] = c.exports.useState(0),
    pe = c.exports.useMemo(
      () => ({
        current: I,
        pageSize: A,
        total: G,
        showTotal: !0,
        sizeCanChange: !0,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [I, A, G]
    ),
    R = c.exports.useMemo(
      () =>
        x.reduce(
          (i, o) => (
            o.groupCode && (i[o.groupCode] = o.groupName || o.groupCode), i
          ),
          {}
        ),
      [x]
    ),
    k = c.exports.useMemo(
      () =>
        x.map((i) => ({
          label: i.groupName ? `${i.groupName} (${i.groupCode})` : i.groupCode,
          value: i.groupCode,
        })),
      [x]
    ),
    q = c.exports.useMemo(
      () => ({
        [Q]: e['apiSearch.accessLevel.public'],
        [Y]: e['apiSearch.accessLevel.loginOnly'],
        [y]: e['apiSearch.accessLevel.permission'],
      }),
      [e]
    ),
    j = c.exports.useMemo(
      () => [
        { label: e['apiSearch.accessLevel.public'], value: Q },
        { label: e['apiSearch.accessLevel.loginOnly'], value: Y },
        { label: e['apiSearch.accessLevel.permission'], value: y },
      ],
      [e]
    ),
    z = c.exports.useMemo(() => ke.map((i) => ({ label: i, value: i })), []);
  c.exports.useEffect(() => {
    var o, s, g;
    let i = !1;
    return (
      M(!0),
      we({
        page: I,
        pageSize: A,
        apiCode: ((o = n.apiCode) == null ? void 0 : o.trim()) || void 0,
        apiName: ((s = n.apiName) == null ? void 0 : s.trim()) || void 0,
        apiGroup: n.apiGroup || void 0,
        httpMethod: n.httpMethod || void 0,
        pathPattern:
          ((g = n.pathPattern) == null ? void 0 : g.trim()) || void 0,
        accessLevel: n.accessLevel,
      })
        .then((V) => {
          i || (ae(V.list || []), te(V.total || 0));
        })
        .finally(() => !i && M(!1)),
      () => {
        i = !0;
      }
    );
  }, [I, A, n, D]),
    c.exports.useEffect(() => {
      let i = !1;
      return (
        Ne().then((o) => {
          i || oe((o == null ? void 0 : o.list) || []);
        }),
        () => {
          i = !0;
        }
      );
    }, [D]);
  const le = () => {
      _(null),
        b(void 0),
        t.resetFields(),
        t.setFieldsValue({
          httpMethod: 'GET',
          accessLevel: y,
          activeStatus: 1,
        }),
        P(!0);
    },
    X = c.exports.useCallback(
      (i) => {
        const o = i.apiGroup;
        _(i),
          b(o),
          t.setFieldsValue(E(f({}, i), { apiCodeSuffix: ze(i.apiCode, o) })),
          P(!0);
      },
      [t]
    ),
    se = c.exports.useMemo(
      () => [
        { title: e['apiSearch.columns.id'], dataIndex: 'id', width: 80 },
        {
          title: e['apiSearch.columns.apiName'],
          dataIndex: 'apiName',
          width: 180,
          render: F,
        },
        {
          title: e['apiSearch.columns.apiCode'],
          dataIndex: 'apiCode',
          width: 220,
          render: F,
        },
        {
          title: e['apiSearch.columns.apiGroup'],
          dataIndex: 'apiGroup',
          width: 120,
          render: (i) => F(i ? R[i] || i : ''),
        },
        {
          title: e['apiSearch.columns.httpMethod'],
          dataIndex: 'httpMethod',
          width: 120,
        },
        {
          title: e['apiSearch.columns.pathPattern'],
          dataIndex: 'pathPattern',
          width: 220,
          render: F,
        },
        {
          title: e['apiSearch.columns.accessLevel'],
          dataIndex: 'accessLevel',
          width: 120,
          render: (i) => je(i, q),
        },
        {
          title: e['apiSearch.columns.operator'],
          dataIndex: 'operatorUsername',
          width: 120,
          render: (i) => (i == null ? void 0 : i.trim()) || '\u2014',
        },
        {
          title: e['apiSearch.columns.updatedAt'],
          dataIndex: 'updatedAt',
          width: 200,
          render: Xe,
        },
        {
          title: e['apiSearch.columns.operations'],
          dataIndex: 'operations',
          width: 240,
          fixed: 'right',
          render: (i, o) =>
            h(H, {
              className: C.operations,
              children: [
                a(u, {
                  type: 'text',
                  size: 'small',
                  icon: a(Pe, {}),
                  onClick: () => X(o),
                  children: e['apiSearch.operations.edit'],
                }),
                a(u, {
                  type: 'text',
                  status: 'danger',
                  size: 'small',
                  icon: a(xe, {}),
                  onClick: () =>
                    K.confirm({
                      title: e['apiSearch.confirm.deleteTitle'],
                      content: e['apiSearch.confirm.deleteContent'],
                      onOk: async () => {
                        await ye(o.id),
                          N.success(e['apiSearch.msg.deleteOk']),
                          w((s) => s + 1);
                      },
                    }),
                  children: e['apiSearch.operations.delete'],
                }),
              ],
            }),
        },
      ],
      [q, R, X, e]
    ),
    ne = () => {
      v(1), O(r.getFieldsValue());
    },
    he = () => {
      r.resetFields(), v(1), O(f({}, Z));
    },
    de = (i) => {
      b(i), t.setFieldValue('apiGroup', i);
    },
    ue = async () => {
      const i = await t.validate(),
        o = `${B(i.apiGroup)}${String(i.apiCodeSuffix || '').trim()}`,
        s = E(f({}, i), { apiCode: o, matchType: 'EXACT' });
      delete s.apiCodeSuffix,
        T
          ? (await Be(E(f({}, s), { id: T.id })),
            N.success(e['apiSearch.msg.saveOk']))
          : (await Me(s), N.success(e['apiSearch.msg.createOk'])),
        P(!1),
        w((g) => g + 1);
    },
    me = (i) => {
      v(i.current || 1), re(i.pageSize || 10);
    };
  return h(ge, {
    children: [
      a(Re, { heading: 6, children: e['apiSearch.title'] }),
      h('div', {
        className: C['search-form-wrapper'],
        children: [
          a(p, {
            form: r,
            initialValues: Z,
            className: S['search-form'],
            labelAlign: 'left',
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
            children: h(J, {
              gutter: 24,
              children: [
                a(l, {
                  span: 8,
                  children: a(p.Item, {
                    label: e['apiSearch.columns.apiCode'],
                    field: 'apiCode',
                    children: a(d, {
                      allowClear: !0,
                      placeholder: e['apiSearch.placeholder.apiCodeSuffix'],
                    }),
                  }),
                }),
                a(l, {
                  span: 8,
                  children: a(p.Item, {
                    label: e['apiSearch.columns.apiName'],
                    field: 'apiName',
                    children: a(d, {
                      allowClear: !0,
                      placeholder: e['apiSearch.placeholder.apiName'],
                    }),
                  }),
                }),
                a(l, {
                  span: 8,
                  children: a(p.Item, {
                    label: e['apiSearch.columns.apiGroup'],
                    field: 'apiGroup',
                    children: a(m, {
                      allowClear: !0,
                      showSearch: !0,
                      options: k,
                      placeholder: e['apiSearch.placeholder.apiGroup'],
                    }),
                  }),
                }),
                a(l, {
                  span: 8,
                  children: a(p.Item, {
                    label: e['apiSearch.columns.httpMethod'],
                    field: 'httpMethod',
                    children: a(m, {
                      allowClear: !0,
                      options: z,
                      placeholder: e['apiSearch.placeholder.httpMethod'],
                    }),
                  }),
                }),
                a(l, {
                  span: 8,
                  children: a(p.Item, {
                    label: e['apiSearch.columns.pathPattern'],
                    field: 'pathPattern',
                    children: a(d, {
                      allowClear: !0,
                      placeholder: e['apiSearch.placeholder.pathPattern'],
                    }),
                  }),
                }),
                a(l, {
                  span: 8,
                  children: a(p.Item, {
                    label: e['apiSearch.columns.accessLevel'],
                    field: 'accessLevel',
                    children: a(m, {
                      allowClear: !0,
                      options: j,
                      placeholder: e['apiSearch.placeholder.accessLevel'],
                    }),
                  }),
                }),
              ],
            }),
          }),
          h('div', {
            className: C['right-button'],
            children: [
              a(u, {
                type: 'primary',
                icon: a(Ee, {}),
                onClick: ne,
                children: e['apiSearch.form.search'],
              }),
              a(u, {
                icon: a(W, {}),
                onClick: he,
                children: e['apiSearch.form.reset'],
              }),
            ],
          }),
        ],
      }),
      h('div', {
        className: C['button-group'],
        children: [
          a(H, {
            children: a(u, {
              type: 'primary',
              icon: a(Fe, {}),
              onClick: le,
              children: e['apiSearch.operations.add'],
            }),
          }),
          a(u, {
            icon: a(W, {}),
            onClick: () => w((i) => i + 1),
            children: e['apiSearch.operations.refresh'],
          }),
        ],
      }),
      a(ve, {
        rowKey: 'id',
        loading: ie,
        columns: se,
        data: ee,
        border: !0,
        pagination: pe,
        scroll: { x: 1560 },
        onChange: me,
      }),
      a(K, {
        title: T
          ? e['apiSearch.modal.editTitle']
          : e['apiSearch.modal.createTitle'],
        visible: ce,
        onOk: ue,
        onCancel: () => P(!1),
        unmountOnExit: !0,
        className: S['api-modal'],
        style: { width: 880 },
        children: a(p, {
          form: t,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 8 },
          wrapperCol: { span: 16 },
          className: `${C['search-form']} ${S['modal-form']}`,
          children: h(J, {
            gutter: 24,
            children: [
              a(l, {
                span: 12,
                children: a(p.Item, {
                  label: e['apiSearch.columns.apiGroup'],
                  field: 'apiGroup',
                  rules: [
                    {
                      required: !0,
                      message: e['apiSearch.validation.required'],
                    },
                  ],
                  children: a(m, {
                    allowClear: !0,
                    showSearch: !0,
                    options: k,
                    placeholder: e['apiSearch.placeholder.apiGroup'],
                    onChange: de,
                  }),
                }),
              }),
              a(l, {
                span: 12,
                children: a(p.Item, {
                  label: e['apiSearch.columns.apiCode'],
                  field: 'apiCodeSuffix',
                  rules: [
                    {
                      required: !0,
                      message: e['apiSearch.validation.required'],
                    },
                  ],
                  children: a(d, {
                    disabled: !L,
                    addBefore: B(L),
                    placeholder: L
                      ? e['apiSearch.placeholder.apiCodeSuffix']
                      : e['apiSearch.placeholder.apiCode'],
                  }),
                }),
              }),
              a(l, {
                span: 12,
                children: a(p.Item, {
                  label: e['apiSearch.columns.apiName'],
                  field: 'apiName',
                  rules: [
                    {
                      required: !0,
                      message: e['apiSearch.validation.required'],
                    },
                  ],
                  children: a(d, {
                    placeholder: e['apiSearch.placeholder.apiName'],
                  }),
                }),
              }),
              a(l, {
                span: 12,
                children: a(p.Item, {
                  label: e['apiSearch.columns.httpMethod'],
                  field: 'httpMethod',
                  children: a(m, { options: z }),
                }),
              }),
              a(l, {
                span: 12,
                children: a(p.Item, {
                  label: e['apiSearch.columns.pathPattern'],
                  field: 'pathPattern',
                  rules: [
                    {
                      required: !0,
                      message: e['apiSearch.validation.required'],
                    },
                  ],
                  children: a(d, {
                    placeholder: e['apiSearch.placeholder.pathPattern'],
                  }),
                }),
              }),
              a(l, {
                span: 12,
                children: a(p.Item, {
                  label: e['apiSearch.columns.accessLevel'],
                  field: 'accessLevel',
                  children: a(m, { options: j }),
                }),
              }),
              a(l, {
                span: 24,
                children: a(p.Item, {
                  label: e['apiSearch.field.description'],
                  field: 'description',
                  labelCol: { span: 4 },
                  wrapperCol: { span: 20 },
                  className: S['description-item'],
                  children: a(d.TextArea, {
                    rows: 3,
                    autoSize: { minRows: 3, maxRows: 5 },
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
export { aa as default };
