var fe = Object.defineProperty,
  Ce = Object.defineProperties;
var Ie = Object.getOwnPropertyDescriptors;
var U = Object.getOwnPropertySymbols;
var Ae = Object.prototype.hasOwnProperty,
  Pe = Object.prototype.propertyIsEnumerable;
var H = (e, t, r) =>
    t in e
      ? fe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  S = (e, t) => {
    for (var r in t || (t = {})) Ae.call(t, r) && H(e, r, t[r]);
    if (U) for (var r of U(t)) Pe.call(t, r) && H(e, r, t[r]);
    return e;
  },
  x = (e, t) => Ce(e, Ie(t));
import {
  ag as o,
  r as c,
  a as d,
  S as K,
  j as a,
  B as m,
  aQ as ge,
  aR as Ee,
  aS as Y,
  M,
  av as xe,
  ah as u,
  K as h,
  aU as Te,
  $ as J,
  aT as ve,
  aM as Fe,
  T as be,
  aI as ye,
  P as Le,
} from './vendor.44459b16.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  a as Me,
  b as Ne,
  e as Be,
  g as we,
  h as Ge,
} from './access-permission.f2447467.js';
import { f as Oe } from './accessControl.941fcf7e.js';
import { u as _e } from './index.2cec1040.js';
import { s as f } from './index.module.ea069206.js';
import './access-control.9e664147.js';
const Re = {
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
var ke = Re,
  C = {
    'ellipsis-text': '_ellipsis-text_hb9k4_1',
    'search-form': '_search-form_hb9k4_7',
    'api-modal': '_api-modal_hb9k4_18',
    'modal-form': '_modal-form_hb9k4_21',
    'description-item': '_description-item_hb9k4_27',
  };
const { Title: De, Text: qe } = be,
  { Row: Q, Col: l } = ye,
  je = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  Xe = ['EXACT', 'PREFIX', 'REGEX'],
  ze = 'api',
  W = 1,
  Z = 2,
  N = 3,
  ee = {
    apiCode: '',
    apiName: '',
    apiGroup: void 0,
    httpMethod: void 0,
    pathPattern: '',
    matchType: void 0,
    accessLevel: void 0,
  };
function $e(e, t) {
  return e == null ? '-' : t[e] || String(e);
}
function B(e) {
  return e ? `${ze}:${e}:` : '';
}
function Ve(e, t) {
  const r = B(t);
  return e ? (r && e.startsWith(r) ? e.slice(r.length) : e) : '';
}
function T(e) {
  return e
    ? a(Le, {
        content: e,
        position: 'top',
        children: a(qe, {
          className: C['ellipsis-text'],
          ellipsis: !0,
          children: e,
        }),
      })
    : '-';
}
function ra() {
  const e = _e(ke),
    [t] = o.useForm(),
    [r] = o.useForm(),
    [ae, ie] = c.exports.useState([]),
    [re, w] = c.exports.useState(!1),
    [I, v] = c.exports.useState(1),
    [A, ce] = c.exports.useState(10),
    [G, te] = c.exports.useState(0),
    [s, O] = c.exports.useState({}),
    [pe, P] = c.exports.useState(!1),
    [F, _] = c.exports.useState(null),
    [g, oe] = c.exports.useState([]),
    [b, y] = c.exports.useState(),
    [R, L] = c.exports.useState(0),
    le = c.exports.useMemo(
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
    k = c.exports.useMemo(
      () =>
        g.reduce(
          (i, p) => (
            p.groupCode && (i[p.groupCode] = p.groupName || p.groupCode), i
          ),
          {}
        ),
      [g]
    ),
    D = c.exports.useMemo(
      () =>
        g.map((i) => ({
          label: i.groupName ? `${i.groupName} (${i.groupCode})` : i.groupCode,
          value: i.groupCode,
        })),
      [g]
    ),
    q = c.exports.useMemo(
      () =>
        Xe.map((i) => ({
          label: e[`apiSearch.matchType.${i}`] || i,
          value: i,
        })),
      [e]
    ),
    j = c.exports.useMemo(
      () => ({
        [W]: e['apiSearch.accessLevel.public'],
        [Z]: e['apiSearch.accessLevel.loginOnly'],
        [N]: e['apiSearch.accessLevel.permission'],
      }),
      [e]
    ),
    X = c.exports.useMemo(
      () => [
        { label: e['apiSearch.accessLevel.public'], value: W },
        { label: e['apiSearch.accessLevel.loginOnly'], value: Z },
        { label: e['apiSearch.accessLevel.permission'], value: N },
      ],
      [e]
    ),
    z = c.exports.useMemo(() => je.map((i) => ({ label: i, value: i })), []);
  c.exports.useEffect(() => {
    var p, n, E;
    let i = !1;
    return (
      w(!0),
      Me({
        page: I,
        pageSize: A,
        apiCode: ((p = s.apiCode) == null ? void 0 : p.trim()) || void 0,
        apiName: ((n = s.apiName) == null ? void 0 : n.trim()) || void 0,
        apiGroup: s.apiGroup || void 0,
        httpMethod: s.httpMethod || void 0,
        pathPattern:
          ((E = s.pathPattern) == null ? void 0 : E.trim()) || void 0,
        matchType: s.matchType || void 0,
        accessLevel: s.accessLevel,
      })
        .then((V) => {
          i || (ie(V.list || []), te(V.total || 0));
        })
        .finally(() => !i && w(!1)),
      () => {
        i = !0;
      }
    );
  }, [I, A, s, R]),
    c.exports.useEffect(() => {
      let i = !1;
      return (
        Ne().then((p) => {
          i || oe((p == null ? void 0 : p.list) || []);
        }),
        () => {
          i = !0;
        }
      );
    }, [R]);
  const se = () => {
      _(null),
        y(void 0),
        r.resetFields(),
        r.setFieldsValue({
          httpMethod: 'GET',
          matchType: 'EXACT',
          accessLevel: N,
          activeStatus: 1,
        }),
        P(!0);
    },
    $ = c.exports.useCallback(
      (i) => {
        const p = i.apiGroup;
        _(i),
          y(p),
          r.setFieldsValue(x(S({}, i), { apiCodeSuffix: Ve(i.apiCode, p) })),
          P(!0);
      },
      [r]
    ),
    ne = c.exports.useMemo(
      () => [
        { title: e['apiSearch.columns.id'], dataIndex: 'id', width: 80 },
        {
          title: e['apiSearch.columns.apiName'],
          dataIndex: 'apiName',
          width: 180,
          render: T,
        },
        {
          title: e['apiSearch.columns.apiCode'],
          dataIndex: 'apiCode',
          width: 240,
          render: T,
        },
        {
          title: e['apiSearch.columns.apiGroup'],
          dataIndex: 'apiGroup',
          width: 120,
          render: (i) => T(i ? k[i] || i : ''),
        },
        {
          title: e['apiSearch.columns.httpMethod'],
          dataIndex: 'httpMethod',
          width: 110,
        },
        {
          title: e['apiSearch.columns.pathPattern'],
          dataIndex: 'pathPattern',
          width: 280,
          render: T,
        },
        {
          title: e['apiSearch.columns.matchType'],
          dataIndex: 'matchType',
          width: 120,
          render: (i) => e[`apiSearch.matchType.${i}`] || i || '-',
        },
        {
          title: e['apiSearch.columns.accessLevel'],
          dataIndex: 'accessLevel',
          width: 130,
          render: (i) => $e(i, j),
        },
        {
          title: e['apiSearch.columns.updatedAt'],
          dataIndex: 'updatedAt',
          width: 170,
          render: Oe,
        },
        {
          title: e['apiSearch.columns.operations'],
          dataIndex: 'operations',
          width: 160,
          fixed: 'right',
          render: (i, p) =>
            d(K, {
              className: f.operations,
              children: [
                a(m, {
                  type: 'text',
                  size: 'small',
                  icon: a(ge, {}),
                  onClick: () => $(p),
                  children: e['apiSearch.operations.edit'],
                }),
                a(m, {
                  type: 'text',
                  status: 'danger',
                  size: 'small',
                  icon: a(Ee, {}),
                  onClick: () =>
                    Y.confirm({
                      title: e['apiSearch.confirm.deleteTitle'],
                      content: e['apiSearch.confirm.deleteContent'],
                      onOk: async () => {
                        await Be(p.id),
                          M.success(e['apiSearch.msg.deleteOk']),
                          L((n) => n + 1);
                      },
                    }),
                  children: e['apiSearch.operations.delete'],
                }),
              ],
            }),
        },
      ],
      [j, k, $, e]
    ),
    he = () => {
      v(1), O(t.getFieldsValue());
    },
    de = () => {
      t.resetFields(), v(1), O(S({}, ee));
    },
    ue = (i) => {
      y(i), r.setFieldValue('apiGroup', i);
    },
    me = async () => {
      const i = await r.validate(),
        p = `${B(i.apiGroup)}${String(i.apiCodeSuffix || '').trim()}`,
        n = x(S({}, i), { apiCode: p });
      delete n.apiCodeSuffix,
        F
          ? (await we(x(S({}, n), { id: F.id })),
            M.success(e['apiSearch.msg.saveOk']))
          : (await Ge(n), M.success(e['apiSearch.msg.createOk'])),
        P(!1),
        L((E) => E + 1);
    },
    Se = (i) => {
      v(i.current || 1), ce(i.pageSize || 10);
    };
  return d(xe, {
    children: [
      a(De, { heading: 6, children: e['apiSearch.title'] }),
      d('div', {
        className: f['search-form-wrapper'],
        children: [
          a(o, {
            form: t,
            initialValues: ee,
            className: C['search-form'],
            labelAlign: 'left',
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
            children: d(Q, {
              gutter: 24,
              children: [
                a(l, {
                  span: 8,
                  children: a(o.Item, {
                    label: e['apiSearch.columns.apiCode'],
                    field: 'apiCode',
                    children: a(u, {
                      allowClear: !0,
                      placeholder: e['apiSearch.placeholder.apiCodeSuffix'],
                    }),
                  }),
                }),
                a(l, {
                  span: 8,
                  children: a(o.Item, {
                    label: e['apiSearch.columns.apiName'],
                    field: 'apiName',
                    children: a(u, {
                      allowClear: !0,
                      placeholder: e['apiSearch.placeholder.apiName'],
                    }),
                  }),
                }),
                a(l, {
                  span: 8,
                  children: a(o.Item, {
                    label: e['apiSearch.columns.apiGroup'],
                    field: 'apiGroup',
                    children: a(h, {
                      allowClear: !0,
                      showSearch: !0,
                      options: D,
                      placeholder: e['apiSearch.placeholder.apiGroup'],
                    }),
                  }),
                }),
                a(l, {
                  span: 8,
                  children: a(o.Item, {
                    label: e['apiSearch.columns.httpMethod'],
                    field: 'httpMethod',
                    children: a(h, {
                      allowClear: !0,
                      options: z,
                      placeholder: e['apiSearch.placeholder.httpMethod'],
                    }),
                  }),
                }),
                a(l, {
                  span: 8,
                  children: a(o.Item, {
                    label: e['apiSearch.columns.pathPattern'],
                    field: 'pathPattern',
                    children: a(u, {
                      allowClear: !0,
                      placeholder: e['apiSearch.placeholder.pathPattern'],
                    }),
                  }),
                }),
                a(l, {
                  span: 8,
                  children: a(o.Item, {
                    label: e['apiSearch.columns.matchType'],
                    field: 'matchType',
                    children: a(h, {
                      allowClear: !0,
                      options: q,
                      placeholder: e['apiSearch.placeholder.matchType'],
                    }),
                  }),
                }),
                a(l, {
                  span: 8,
                  children: a(o.Item, {
                    label: e['apiSearch.columns.accessLevel'],
                    field: 'accessLevel',
                    children: a(h, {
                      allowClear: !0,
                      options: X,
                      placeholder: e['apiSearch.placeholder.accessLevel'],
                    }),
                  }),
                }),
              ],
            }),
          }),
          d('div', {
            className: f['right-button'],
            children: [
              a(m, {
                type: 'primary',
                icon: a(Te, {}),
                onClick: he,
                children: e['apiSearch.form.search'],
              }),
              a(m, {
                icon: a(J, {}),
                onClick: de,
                children: e['apiSearch.form.reset'],
              }),
            ],
          }),
        ],
      }),
      d('div', {
        className: f['button-group'],
        children: [
          a(K, {
            children: a(m, {
              type: 'primary',
              icon: a(ve, {}),
              onClick: se,
              children: e['apiSearch.operations.add'],
            }),
          }),
          a(m, {
            icon: a(J, {}),
            onClick: () => L((i) => i + 1),
            children: e['apiSearch.operations.refresh'],
          }),
        ],
      }),
      a(Fe, {
        rowKey: 'id',
        loading: re,
        columns: ne,
        data: ae,
        border: !0,
        pagination: le,
        onChange: Se,
      }),
      a(Y, {
        title: F
          ? e['apiSearch.modal.editTitle']
          : e['apiSearch.modal.createTitle'],
        visible: pe,
        onOk: me,
        onCancel: () => P(!1),
        unmountOnExit: !0,
        className: C['api-modal'],
        style: { width: 880 },
        children: a(o, {
          form: r,
          layout: 'horizontal',
          labelAlign: 'left',
          labelCol: { span: 8 },
          wrapperCol: { span: 16 },
          className: `${f['search-form']} ${C['modal-form']}`,
          children: d(Q, {
            gutter: 24,
            children: [
              a(l, {
                span: 12,
                children: a(o.Item, {
                  label: e['apiSearch.columns.apiGroup'],
                  field: 'apiGroup',
                  rules: [
                    {
                      required: !0,
                      message: e['apiSearch.validation.required'],
                    },
                  ],
                  children: a(h, {
                    allowClear: !0,
                    showSearch: !0,
                    options: D,
                    placeholder: e['apiSearch.placeholder.apiGroup'],
                    onChange: ue,
                  }),
                }),
              }),
              a(l, {
                span: 12,
                children: a(o.Item, {
                  label: e['apiSearch.columns.apiCode'],
                  field: 'apiCodeSuffix',
                  rules: [
                    {
                      required: !0,
                      message: e['apiSearch.validation.required'],
                    },
                  ],
                  children: a(u, {
                    disabled: !b,
                    addBefore: B(b),
                    placeholder: b
                      ? e['apiSearch.placeholder.apiCodeSuffix']
                      : e['apiSearch.placeholder.apiCode'],
                  }),
                }),
              }),
              a(l, {
                span: 12,
                children: a(o.Item, {
                  label: e['apiSearch.columns.apiName'],
                  field: 'apiName',
                  rules: [
                    {
                      required: !0,
                      message: e['apiSearch.validation.required'],
                    },
                  ],
                  children: a(u, {
                    placeholder: e['apiSearch.placeholder.apiName'],
                  }),
                }),
              }),
              a(l, {
                span: 12,
                children: a(o.Item, {
                  label: e['apiSearch.columns.httpMethod'],
                  field: 'httpMethod',
                  children: a(h, { options: z }),
                }),
              }),
              a(l, {
                span: 12,
                children: a(o.Item, {
                  label: e['apiSearch.columns.pathPattern'],
                  field: 'pathPattern',
                  rules: [
                    {
                      required: !0,
                      message: e['apiSearch.validation.required'],
                    },
                  ],
                  children: a(u, {
                    placeholder: e['apiSearch.placeholder.pathPattern'],
                  }),
                }),
              }),
              a(l, {
                span: 12,
                children: a(o.Item, {
                  label: e['apiSearch.columns.matchType'],
                  field: 'matchType',
                  children: a(h, { options: q }),
                }),
              }),
              a(l, {
                span: 12,
                children: a(o.Item, {
                  label: e['apiSearch.columns.accessLevel'],
                  field: 'accessLevel',
                  children: a(h, { options: X }),
                }),
              }),
              a(l, {
                span: 24,
                children: a(o.Item, {
                  label: e['apiSearch.field.description'],
                  field: 'description',
                  labelCol: { span: 4 },
                  wrapperCol: { span: 20 },
                  className: C['description-item'],
                  children: a(u.TextArea, {
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
export { ra as default };
