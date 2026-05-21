var fe = Object.defineProperty,
  Ne = Object.defineProperties;
var Se = Object.getOwnPropertyDescriptors;
var $ = Object.getOwnPropertySymbols;
var xe = Object.prototype.hasOwnProperty,
  be = Object.prototype.propertyIsEnumerable;
var U = (e, l, o) =>
    l in e
      ? fe(e, l, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[l] = o),
  N = (e, l) => {
    for (var o in l || (l = {})) xe.call(l, o) && U(e, o, l[o]);
    if ($) for (var o of $(l)) be.call(l, o) && U(e, o, l[o]);
    return e;
  },
  D = (e, l) => Ne(e, Se(l));
import {
  ae as c,
  r as s,
  j as a,
  S as H,
  B as h,
  aP as Ee,
  aQ as ve,
  aR as W,
  M as F,
  at as Ce,
  af as m,
  H as d,
  aT as De,
  Z as J,
  aS as Ie,
  aL as Ae,
  T as Pe,
  aH as ge,
  N as je,
} from './vendor.3821b0be.js';
/* empty css               */ /* empty css               */ /* empty css               */ /* empty css              */ import {
  a as Ve,
  b as Fe,
  e as Te,
  g as Le,
  h as we,
} from './access-permission.04fba575.js';
import { f as ye } from './accessControl.941fcf7e.js';
import { u as Me } from './index.77883a3f.js';
import { s as S } from './index.module.ea069206.js';
import './access-control.86021a9b.js';
const Be = {
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
var Ge = Be,
  f = {
    'ellipsis-text': '_ellipsis-text_oxw71_1',
    'nowrap-text': '_nowrap-text_oxw71_12',
    'search-form': '_search-form_oxw71_17',
    'api-modal': '_api-modal_oxw71_28',
    'modal-form': '_modal-form_oxw71_31',
    'description-item': '_description-item_oxw71_37',
  },
  i =
    '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/apis/index.tsx';
const { Title: Oe } = Pe,
  { Row: K, Col: p } = ge,
  _e = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  Re = 'api',
  Q = 1,
  Y = 2,
  T = 3,
  Z = {
    apiCode: '',
    apiName: '',
    apiGroup: void 0,
    httpMethod: void 0,
    pathPattern: '',
    accessLevel: void 0,
  };
function ke(e, l) {
  return e == null ? '-' : l[e] || String(e);
}
function L(e) {
  return e ? `${Re}:${e}:` : '';
}
function qe(e, l) {
  const o = L(l);
  return e ? (o && e.startsWith(o) ? e.slice(o.length) : e) : '';
}
function I(e) {
  return e
    ? a.exports.jsxDEV(
        je,
        {
          content: e,
          position: 'top',
          children: a.exports.jsxDEV(
            'span',
            { className: f['ellipsis-text'], children: e },
            void 0,
            !1,
            { fileName: i, lineNumber: 101, columnNumber: 7 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: i, lineNumber: 100, columnNumber: 5 },
        this
      )
    : '-';
}
function ze(e) {
  const l = ye(e);
  return a.exports.jsxDEV(
    'span',
    { className: f['nowrap-text'], children: l },
    void 0,
    !1,
    { fileName: i, lineNumber: 108, columnNumber: 10 },
    this
  );
}
function aa() {
  const e = Me(Ge),
    [l] = c.useForm(),
    [o] = c.useForm(),
    [ee, ae] = s.exports.useState([]),
    [ie, w] = s.exports.useState(!1),
    [x, A] = s.exports.useState(1),
    [b, re] = s.exports.useState(10),
    [y, le] = s.exports.useState(0),
    [n, M] = s.exports.useState({}),
    [oe, E] = s.exports.useState(!1),
    [P, B] = s.exports.useState(null),
    [v, se] = s.exports.useState([]),
    [g, j] = s.exports.useState(),
    [G, V] = s.exports.useState(0),
    te = s.exports.useMemo(
      () => ({
        current: x,
        pageSize: b,
        total: y,
        showTotal: !0,
        sizeCanChange: !0,
        pageSizeChangeResetCurrent: !0,
        showJumper: !0,
        pageSizeOptions: [10, 20, 50, 100],
      }),
      [x, b, y]
    ),
    O = s.exports.useMemo(
      () =>
        v.reduce(
          (r, t) => (
            t.groupCode && (r[t.groupCode] = t.groupName || t.groupCode), r
          ),
          {}
        ),
      [v]
    ),
    _ = s.exports.useMemo(
      () =>
        v.map((r) => ({
          label: r.groupName ? `${r.groupName} (${r.groupCode})` : r.groupCode,
          value: r.groupCode,
        })),
      [v]
    ),
    R = s.exports.useMemo(
      () => ({
        [Q]: e['apiSearch.accessLevel.public'],
        [Y]: e['apiSearch.accessLevel.loginOnly'],
        [T]: e['apiSearch.accessLevel.permission'],
      }),
      [e]
    ),
    k = s.exports.useMemo(
      () => [
        { label: e['apiSearch.accessLevel.public'], value: Q },
        { label: e['apiSearch.accessLevel.loginOnly'], value: Y },
        { label: e['apiSearch.accessLevel.permission'], value: T },
      ],
      [e]
    ),
    q = s.exports.useMemo(() => _e.map((r) => ({ label: r, value: r })), []);
  s.exports.useEffect(() => {
    var t, u, C;
    let r = !1;
    return (
      w(!0),
      Ve({
        page: x,
        pageSize: b,
        apiCode: ((t = n.apiCode) == null ? void 0 : t.trim()) || void 0,
        apiName: ((u = n.apiName) == null ? void 0 : u.trim()) || void 0,
        apiGroup: n.apiGroup || void 0,
        httpMethod: n.httpMethod || void 0,
        pathPattern:
          ((C = n.pathPattern) == null ? void 0 : C.trim()) || void 0,
        accessLevel: n.accessLevel,
      })
        .then((X) => {
          r || (ae(X.list || []), le(X.total || 0));
        })
        .finally(() => !r && w(!1)),
      () => {
        r = !0;
      }
    );
  }, [x, b, n, G]),
    s.exports.useEffect(() => {
      let r = !1;
      return (
        Fe().then((t) => {
          r || se((t == null ? void 0 : t.list) || []);
        }),
        () => {
          r = !0;
        }
      );
    }, [G]);
  const ce = () => {
      B(null),
        j(void 0),
        o.resetFields(),
        o.setFieldsValue({
          httpMethod: 'GET',
          accessLevel: T,
          activeStatus: 1,
        }),
        E(!0);
    },
    z = s.exports.useCallback(
      (r) => {
        const t = r.apiGroup;
        B(r),
          j(t),
          o.setFieldsValue(D(N({}, r), { apiCodeSuffix: qe(r.apiCode, t) })),
          E(!0);
      },
      [o]
    ),
    pe = s.exports.useMemo(
      () => [
        { title: e['apiSearch.columns.id'], dataIndex: 'id', width: 80 },
        {
          title: e['apiSearch.columns.apiName'],
          dataIndex: 'apiName',
          width: 180,
          render: I,
        },
        {
          title: e['apiSearch.columns.apiCode'],
          dataIndex: 'apiCode',
          width: 220,
          render: I,
        },
        {
          title: e['apiSearch.columns.apiGroup'],
          dataIndex: 'apiGroup',
          width: 120,
          render: (r) => I(r ? O[r] || r : ''),
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
          render: I,
        },
        {
          title: e['apiSearch.columns.accessLevel'],
          dataIndex: 'accessLevel',
          width: 120,
          render: (r) => ke(r, R),
        },
        {
          title: e['apiSearch.columns.operator'],
          dataIndex: 'operatorUsername',
          width: 120,
          render: (r) => (r == null ? void 0 : r.trim()) || '\u2014',
        },
        {
          title: e['apiSearch.columns.updatedAt'],
          dataIndex: 'updatedAt',
          width: 200,
          render: ze,
        },
        {
          title: e['apiSearch.columns.operations'],
          dataIndex: 'operations',
          width: 240,
          fixed: 'right',
          render: (r, t) =>
            a.exports.jsxDEV(
              H,
              {
                className: S.operations,
                children: [
                  a.exports.jsxDEV(
                    h,
                    {
                      type: 'text',
                      size: 'small',
                      icon: a.exports.jsxDEV(
                        Ee,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 316, columnNumber: 21 },
                        this
                      ),
                      onClick: () => z(t),
                      children: e['apiSearch.operations.edit'],
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 313, columnNumber: 13 },
                    this
                  ),
                  a.exports.jsxDEV(
                    h,
                    {
                      type: 'text',
                      status: 'danger',
                      size: 'small',
                      icon: a.exports.jsxDEV(
                        ve,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 325, columnNumber: 21 },
                        this
                      ),
                      onClick: () =>
                        W.confirm({
                          title: e['apiSearch.confirm.deleteTitle'],
                          content: e['apiSearch.confirm.deleteContent'],
                          onOk: async () => {
                            await Te(t.id),
                              F.success(e['apiSearch.msg.deleteOk']),
                              V((u) => u + 1);
                          },
                        }),
                      children: e['apiSearch.operations.delete'],
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 321, columnNumber: 13 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: i, lineNumber: 312, columnNumber: 11 },
              this
            ),
        },
      ],
      [R, O, z, e]
    ),
    ue = () => {
      A(1), M(l.getFieldsValue());
    },
    ne = () => {
      l.resetFields(), A(1), M(N({}, Z));
    },
    me = (r) => {
      j(r), o.setFieldValue('apiGroup', r);
    },
    he = async () => {
      const r = await o.validate(),
        t = `${L(r.apiGroup)}${String(r.apiCodeSuffix || '').trim()}`,
        u = D(N({}, r), { apiCode: t, matchType: 'EXACT' });
      delete u.apiCodeSuffix,
        P
          ? (await Le(D(N({}, u), { id: P.id })),
            F.success(e['apiSearch.msg.saveOk']))
          : (await we(u), F.success(e['apiSearch.msg.createOk'])),
        E(!1),
        V((C) => C + 1);
    },
    de = (r) => {
      A(r.current || 1), re(r.pageSize || 10);
    };
  return a.exports.jsxDEV(
    Ce,
    {
      children: [
        a.exports.jsxDEV(
          Oe,
          { heading: 6, children: e['apiSearch.title'] },
          void 0,
          !1,
          { fileName: i, lineNumber: 392, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          'div',
          {
            className: S['search-form-wrapper'],
            children: [
              a.exports.jsxDEV(
                c,
                {
                  form: l,
                  initialValues: Z,
                  className: f['search-form'],
                  labelAlign: 'left',
                  labelCol: { span: 5 },
                  wrapperCol: { span: 19 },
                  children: a.exports.jsxDEV(
                    K,
                    {
                      gutter: 24,
                      children: [
                        a.exports.jsxDEV(
                          p,
                          {
                            span: 8,
                            children: a.exports.jsxDEV(
                              c.Item,
                              {
                                label: e['apiSearch.columns.apiCode'],
                                field: 'apiCode',
                                children: a.exports.jsxDEV(
                                  m,
                                  {
                                    allowClear: !0,
                                    placeholder:
                                      e['apiSearch.placeholder.apiCodeSuffix'],
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: i,
                                    lineNumber: 405,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: i,
                                lineNumber: 404,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: i, lineNumber: 403, columnNumber: 13 },
                          this
                        ),
                        a.exports.jsxDEV(
                          p,
                          {
                            span: 8,
                            children: a.exports.jsxDEV(
                              c.Item,
                              {
                                label: e['apiSearch.columns.apiName'],
                                field: 'apiName',
                                children: a.exports.jsxDEV(
                                  m,
                                  {
                                    allowClear: !0,
                                    placeholder:
                                      e['apiSearch.placeholder.apiName'],
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: i,
                                    lineNumber: 413,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: i,
                                lineNumber: 412,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: i, lineNumber: 411, columnNumber: 13 },
                          this
                        ),
                        a.exports.jsxDEV(
                          p,
                          {
                            span: 8,
                            children: a.exports.jsxDEV(
                              c.Item,
                              {
                                label: e['apiSearch.columns.apiGroup'],
                                field: 'apiGroup',
                                children: a.exports.jsxDEV(
                                  d,
                                  {
                                    allowClear: !0,
                                    showSearch: !0,
                                    options: _,
                                    placeholder:
                                      e['apiSearch.placeholder.apiGroup'],
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: i,
                                    lineNumber: 424,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: i,
                                lineNumber: 420,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: i, lineNumber: 419, columnNumber: 13 },
                          this
                        ),
                        a.exports.jsxDEV(
                          p,
                          {
                            span: 8,
                            children: a.exports.jsxDEV(
                              c.Item,
                              {
                                label: e['apiSearch.columns.httpMethod'],
                                field: 'httpMethod',
                                children: a.exports.jsxDEV(
                                  d,
                                  {
                                    allowClear: !0,
                                    options: q,
                                    placeholder:
                                      e['apiSearch.placeholder.httpMethod'],
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: i,
                                    lineNumber: 437,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: i,
                                lineNumber: 433,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: i, lineNumber: 432, columnNumber: 13 },
                          this
                        ),
                        a.exports.jsxDEV(
                          p,
                          {
                            span: 8,
                            children: a.exports.jsxDEV(
                              c.Item,
                              {
                                label: e['apiSearch.columns.pathPattern'],
                                field: 'pathPattern',
                                children: a.exports.jsxDEV(
                                  m,
                                  {
                                    allowClear: !0,
                                    placeholder:
                                      e['apiSearch.placeholder.pathPattern'],
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: i,
                                    lineNumber: 449,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: i,
                                lineNumber: 445,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: i, lineNumber: 444, columnNumber: 13 },
                          this
                        ),
                        a.exports.jsxDEV(
                          p,
                          {
                            span: 8,
                            children: a.exports.jsxDEV(
                              c.Item,
                              {
                                label: e['apiSearch.columns.accessLevel'],
                                field: 'accessLevel',
                                children: a.exports.jsxDEV(
                                  d,
                                  {
                                    allowClear: !0,
                                    options: k,
                                    placeholder:
                                      e['apiSearch.placeholder.accessLevel'],
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: i,
                                    lineNumber: 460,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: i,
                                lineNumber: 456,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: i, lineNumber: 455, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: i, lineNumber: 402, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 394, columnNumber: 9 },
                this
              ),
              a.exports.jsxDEV(
                'div',
                {
                  className: S['right-button'],
                  children: [
                    a.exports.jsxDEV(
                      h,
                      {
                        type: 'primary',
                        icon: a.exports.jsxDEV(
                          De,
                          {},
                          void 0,
                          !1,
                          { fileName: i, lineNumber: 470, columnNumber: 40 },
                          this
                        ),
                        onClick: ue,
                        children: e['apiSearch.form.search'],
                      },
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 470, columnNumber: 11 },
                      this
                    ),
                    a.exports.jsxDEV(
                      h,
                      {
                        icon: a.exports.jsxDEV(
                          J,
                          {},
                          void 0,
                          !1,
                          { fileName: i, lineNumber: 473, columnNumber: 25 },
                          this
                        ),
                        onClick: ne,
                        children: e['apiSearch.form.reset'],
                      },
                      void 0,
                      !1,
                      { fileName: i, lineNumber: 473, columnNumber: 11 },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                { fileName: i, lineNumber: 469, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: i, lineNumber: 393, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          'div',
          {
            className: S['button-group'],
            children: [
              a.exports.jsxDEV(
                H,
                {
                  children: a.exports.jsxDEV(
                    h,
                    {
                      type: 'primary',
                      icon: a.exports.jsxDEV(
                        Ie,
                        {},
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 480, columnNumber: 40 },
                        this
                      ),
                      onClick: ce,
                      children: e['apiSearch.operations.add'],
                    },
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 480, columnNumber: 11 },
                    this
                  ),
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 479, columnNumber: 9 },
                this
              ),
              a.exports.jsxDEV(
                h,
                {
                  icon: a.exports.jsxDEV(
                    J,
                    {},
                    void 0,
                    !1,
                    { fileName: i, lineNumber: 484, columnNumber: 23 },
                    this
                  ),
                  onClick: () => V((r) => r + 1),
                  children: e['apiSearch.operations.refresh'],
                },
                void 0,
                !1,
                { fileName: i, lineNumber: 484, columnNumber: 9 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: i, lineNumber: 478, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          Ae,
          {
            rowKey: 'id',
            loading: ie,
            columns: pe,
            data: ee,
            border: !0,
            pagination: te,
            scroll: { x: 1560 },
            onChange: de,
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 488, columnNumber: 7 },
          this
        ),
        a.exports.jsxDEV(
          W,
          {
            title: P
              ? e['apiSearch.modal.editTitle']
              : e['apiSearch.modal.createTitle'],
            visible: oe,
            onOk: he,
            onCancel: () => E(!1),
            unmountOnExit: !0,
            className: f['api-modal'],
            style: { width: 880 },
            children: a.exports.jsxDEV(
              c,
              {
                form: o,
                layout: 'horizontal',
                labelAlign: 'left',
                labelCol: { span: 8 },
                wrapperCol: { span: 16 },
                className: `${S['search-form']} ${f['modal-form']}`,
                children: a.exports.jsxDEV(
                  K,
                  {
                    gutter: 24,
                    children: [
                      a.exports.jsxDEV(
                        p,
                        {
                          span: 12,
                          children: a.exports.jsxDEV(
                            c.Item,
                            {
                              label: e['apiSearch.columns.apiGroup'],
                              field: 'apiGroup',
                              rules: [
                                {
                                  required: !0,
                                  message: e['apiSearch.validation.required'],
                                },
                              ],
                              children: a.exports.jsxDEV(
                                d,
                                {
                                  allowClear: !0,
                                  showSearch: !0,
                                  options: _,
                                  placeholder:
                                    e['apiSearch.placeholder.apiGroup'],
                                  onChange: me,
                                },
                                void 0,
                                !1,
                                {
                                  fileName: i,
                                  lineNumber: 531,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: i, lineNumber: 521, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 520, columnNumber: 13 },
                        this
                      ),
                      a.exports.jsxDEV(
                        p,
                        {
                          span: 12,
                          children: a.exports.jsxDEV(
                            c.Item,
                            {
                              label: e['apiSearch.columns.apiCode'],
                              field: 'apiCodeSuffix',
                              rules: [
                                {
                                  required: !0,
                                  message: e['apiSearch.validation.required'],
                                },
                              ],
                              children: a.exports.jsxDEV(
                                m,
                                {
                                  disabled: !g,
                                  addBefore: L(g),
                                  placeholder: g
                                    ? e['apiSearch.placeholder.apiCodeSuffix']
                                    : e['apiSearch.placeholder.apiCode'],
                                },
                                void 0,
                                !1,
                                {
                                  fileName: i,
                                  lineNumber: 551,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: i, lineNumber: 541, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 540, columnNumber: 13 },
                        this
                      ),
                      a.exports.jsxDEV(
                        p,
                        {
                          span: 12,
                          children: a.exports.jsxDEV(
                            c.Item,
                            {
                              label: e['apiSearch.columns.apiName'],
                              field: 'apiName',
                              rules: [
                                {
                                  required: !0,
                                  message: e['apiSearch.validation.required'],
                                },
                              ],
                              children: a.exports.jsxDEV(
                                m,
                                {
                                  placeholder:
                                    e['apiSearch.placeholder.apiName'],
                                },
                                void 0,
                                !1,
                                {
                                  fileName: i,
                                  lineNumber: 573,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: i, lineNumber: 563, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 562, columnNumber: 13 },
                        this
                      ),
                      a.exports.jsxDEV(
                        p,
                        {
                          span: 12,
                          children: a.exports.jsxDEV(
                            c.Item,
                            {
                              label: e['apiSearch.columns.httpMethod'],
                              field: 'httpMethod',
                              children: a.exports.jsxDEV(
                                d,
                                { options: q },
                                void 0,
                                !1,
                                {
                                  fileName: i,
                                  lineNumber: 581,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: i, lineNumber: 577, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 576, columnNumber: 13 },
                        this
                      ),
                      a.exports.jsxDEV(
                        p,
                        {
                          span: 12,
                          children: a.exports.jsxDEV(
                            c.Item,
                            {
                              label: e['apiSearch.columns.pathPattern'],
                              field: 'pathPattern',
                              rules: [
                                {
                                  required: !0,
                                  message: e['apiSearch.validation.required'],
                                },
                              ],
                              children: a.exports.jsxDEV(
                                m,
                                {
                                  placeholder:
                                    e['apiSearch.placeholder.pathPattern'],
                                },
                                void 0,
                                !1,
                                {
                                  fileName: i,
                                  lineNumber: 595,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: i, lineNumber: 585, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 584, columnNumber: 13 },
                        this
                      ),
                      a.exports.jsxDEV(
                        p,
                        {
                          span: 12,
                          children: a.exports.jsxDEV(
                            c.Item,
                            {
                              label: e['apiSearch.columns.accessLevel'],
                              field: 'accessLevel',
                              children: a.exports.jsxDEV(
                                d,
                                { options: k },
                                void 0,
                                !1,
                                {
                                  fileName: i,
                                  lineNumber: 603,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: i, lineNumber: 599, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 598, columnNumber: 13 },
                        this
                      ),
                      a.exports.jsxDEV(
                        p,
                        {
                          span: 24,
                          children: a.exports.jsxDEV(
                            c.Item,
                            {
                              label: e['apiSearch.field.description'],
                              field: 'description',
                              labelCol: { span: 4 },
                              wrapperCol: { span: 20 },
                              className: f['description-item'],
                              children: a.exports.jsxDEV(
                                m.TextArea,
                                {
                                  rows: 3,
                                  autoSize: { minRows: 3, maxRows: 5 },
                                },
                                void 0,
                                !1,
                                {
                                  fileName: i,
                                  lineNumber: 614,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: i, lineNumber: 607, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: i, lineNumber: 606, columnNumber: 13 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: i, lineNumber: 519, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: i, lineNumber: 511, columnNumber: 9 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: i, lineNumber: 498, columnNumber: 7 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: i, lineNumber: 391, columnNumber: 5 },
    this
  );
}
export { aa as default };
