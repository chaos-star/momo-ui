var y = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty,
  x = Object.prototype.propertyIsEnumerable;
var S = (n, t, e) =>
    t in n
      ? y(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (n[t] = e),
  m = (n, t) => {
    for (var e in t || (t = {})) g.call(t, e) && S(n, e, t[e]);
    if (h) for (var e of h(t)) x.call(t, e) && S(n, e, t[e]);
    return n;
  };
import {
  r as N,
  a as o,
  j as a,
  ag as c,
  ah as p,
  K as F,
  B as b,
  aU as I,
  $ as k,
  aI as L,
} from './vendor.44459b16.js';
import { G as _, u as w } from './index.2cec1040.js';
import { a as C, A as f } from './ArcoSelectInputIds.2dc06435.js';
import { s as r } from './index.module.ea069206.js';
const O = {
  'en-US': {
    'tenantSearch.title': 'Tenant management',
    'tenantSearch.form.search': 'Search',
    'tenantSearch.form.reset': 'Reset',
    'tenantSearch.refresh': 'Refresh',
    'tenantSearch.columns.id': 'ID',
    'tenantSearch.columns.tenantName': 'Tenant name',
    'tenantSearch.columns.tenantCode': 'Tenant code',
    'tenantSearch.columns.businessType': 'Business type',
    'tenantSearch.columns.tenantZone': 'Timezone',
    'tenantSearch.columns.eventSecret': 'Event secret',
    'tenantSearch.columns.tenantStatus': 'Tenant status',
    'tenantSearch.columns.enableStatus': 'Activation',
    'tenantSearch.columns.lastOperator': 'Last operator',
    'tenantSearch.columns.createdAt': 'Created at',
    'tenantSearch.columns.updatedAt': 'Updated at',
    'tenantSearch.columns.operations': 'Actions',
    'tenantSearch.columns.operations.view': 'View',
    'tenantSearch.columns.operations.edit': 'Edit',
    'tenantSearch.columns.operations.boundary': 'Authorize',
    'tenantSearch.columns.operations.enable': 'Enable',
    'tenantSearch.columns.operations.disable': 'Disable',
    'tenantSearch.columns.operations.delete': 'Delete',
    'tenantSearch.columns.expireAt': 'Expire at (ms)',
    'tenantSearch.columns.config': 'Extension config',
    'tenantSearch.operations.add': 'New tenant',
    'tenantSearch.validation.required': 'This field is required',
    'tenantSearch.validation.tenantCode':
      'Lowercase letter or digit first, 2\u201364 chars, only a-z 0-9 _ -',
    'tenantSearch.validation.encryptionLen': 'Must be 16 characters',
    'tenantSearch.form.tenantName.placeholder': 'Prefix match',
    'tenantSearch.form.tenantCode.placeholder': 'Prefix match',
    'tenantSearch.form.all.placeholder': 'All',
    'tenantSearch.form.status.placeholder': 'Default: active only',
    'tenantSearch.businessType.system': 'System',
    'tenantSearch.businessType.ops': 'Operations',
    'tenantSearch.dataStatus.normal': 'Active',
    'tenantSearch.dataStatus.deleted': 'Deleted',
    'tenantSearch.activeStatus.enabled': 'Enabled',
    'tenantSearch.activeStatus.disabled': 'Disabled',
    'tenantSearch.activeStatus.expired': 'Expired',
    'tenantSearch.modal.createTitle': 'New tenant',
    'tenantSearch.modal.editTitle': 'Edit tenant',
    'tenantSearch.modal.viewTitle': 'View tenant',
    'tenantSearch.msg.createOk': 'Created',
    'tenantSearch.msg.saveOk': 'Saved',
    'tenantSearch.msg.deleteOk': 'Marked as deleted',
    'tenantSearch.msg.copied': 'Copied',
    'tenantSearch.confirm.deleteTitle': 'Confirm delete',
    'tenantSearch.confirm.deleteContent':
      'The tenant will be marked as deleted. Continue?',
    'tenantSearch.confirm.enableTitle': 'Enable tenant',
    'tenantSearch.confirm.enableContent':
      'Set this tenant to enabled. Continue?',
    'tenantSearch.confirm.disableTitle': 'Disable tenant',
    'tenantSearch.confirm.disableContent':
      'Set this tenant to disabled. Continue?',
    'tenantSearch.msg.activeStatusOk': 'Activation status updated',
  },
  'zh-CN': {
    'tenantSearch.title': '\u79DF\u6237\u7BA1\u7406',
    'tenantSearch.form.search': '\u67E5\u8BE2',
    'tenantSearch.form.reset': '\u91CD\u7F6E',
    'tenantSearch.refresh': '\u5237\u65B0',
    'tenantSearch.columns.id': 'ID',
    'tenantSearch.columns.tenantName': '\u79DF\u6237\u540D\u79F0',
    'tenantSearch.columns.tenantCode': '\u79DF\u6237\u7F16\u7801',
    'tenantSearch.columns.businessType': '\u4E1A\u52A1\u7C7B\u578B',
    'tenantSearch.columns.tenantZone': '\u65F6\u533A',
    'tenantSearch.columns.eventSecret': '\u4E8B\u4EF6\u79D8\u94A5',
    'tenantSearch.columns.tenantStatus': '\u79DF\u6237\u72B6\u6001',
    'tenantSearch.columns.enableStatus': '\u542F\u7528\u72B6\u6001',
    'tenantSearch.columns.lastOperator': '\u6700\u540E\u64CD\u4F5C\u4EBA',
    'tenantSearch.columns.createdAt': '\u521B\u5EFA\u65F6\u95F4',
    'tenantSearch.columns.updatedAt': '\u4FEE\u6539\u65F6\u95F4',
    'tenantSearch.columns.operations': '\u64CD\u4F5C',
    'tenantSearch.columns.operations.view': '\u67E5\u770B',
    'tenantSearch.columns.operations.edit': '\u7F16\u8F91',
    'tenantSearch.columns.operations.boundary': '\u6388\u6743',
    'tenantSearch.columns.operations.enable': '\u542F\u7528',
    'tenantSearch.columns.operations.disable': '\u505C\u7528',
    'tenantSearch.columns.operations.delete': '\u5220\u9664',
    'tenantSearch.columns.expireAt':
      '\u8FC7\u671F\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09',
    'tenantSearch.columns.config': '\u6269\u5C55\u914D\u7F6E',
    'tenantSearch.operations.add': '\u65B0\u5EFA',
    'tenantSearch.validation.required': '\u6B64\u9879\u4E3A\u5FC5\u586B',
    'tenantSearch.validation.tenantCode':
      '\u5C0F\u5199\u5B57\u6BCD\u6216\u6570\u5B57\u5F00\u5934\uFF0C2\u201364 \u4F4D\uFF0C\u4EC5 a-z 0-9 _ -',
    'tenantSearch.validation.encryptionLen':
      '\u5FC5\u987B\u4E3A 16 \u5B57\u7B26',
    'tenantSearch.form.tenantName.placeholder': '\u524D\u7F6E\u5339\u914D',
    'tenantSearch.form.tenantCode.placeholder': '\u524D\u7F6E\u5339\u914D',
    'tenantSearch.form.all.placeholder': '\u5168\u90E8',
    'tenantSearch.form.status.placeholder': '\u9ED8\u8BA4\u4EC5\u6B63\u5E38',
    'tenantSearch.businessType.system': '\u7CFB\u7EDF',
    'tenantSearch.businessType.ops': '\u8FD0\u8425',
    'tenantSearch.dataStatus.normal': '\u6B63\u5E38',
    'tenantSearch.dataStatus.deleted': '\u5220\u9664',
    'tenantSearch.activeStatus.enabled': '\u542F\u7528',
    'tenantSearch.activeStatus.disabled': '\u505C\u7528',
    'tenantSearch.activeStatus.expired': '\u8FC7\u671F',
    'tenantSearch.modal.createTitle': '\u65B0\u589E\u79DF\u6237',
    'tenantSearch.modal.editTitle': '\u7F16\u8F91\u79DF\u6237',
    'tenantSearch.modal.viewTitle': '\u67E5\u770B\u79DF\u6237',
    'tenantSearch.msg.createOk': '\u521B\u5EFA\u6210\u529F',
    'tenantSearch.msg.saveOk': '\u4FDD\u5B58\u6210\u529F',
    'tenantSearch.msg.deleteOk': '\u5DF2\u6807\u8BB0\u5220\u9664',
    'tenantSearch.msg.copied': '\u5DF2\u590D\u5236',
    'tenantSearch.confirm.deleteTitle': '\u786E\u8BA4\u5220\u9664',
    'tenantSearch.confirm.deleteContent':
      '\u5C06\u6807\u8BB0\u8BE5\u79DF\u6237\u4E3A\u5220\u9664\u72B6\u6001\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F',
    'tenantSearch.confirm.enableTitle': '\u786E\u8BA4\u542F\u7528',
    'tenantSearch.confirm.enableContent':
      '\u5C06\u542F\u7528\u8BE5\u79DF\u6237\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F',
    'tenantSearch.confirm.disableTitle': '\u786E\u8BA4\u505C\u7528',
    'tenantSearch.confirm.disableContent':
      '\u5C06\u505C\u7528\u8BE5\u79DF\u6237\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F',
    'tenantSearch.msg.activeStatusOk':
      '\u542F\u7528\u72B6\u6001\u5DF2\u66F4\u65B0',
  },
  'es-ES': {
    'tenantSearch.title': 'Gesti\xF3n de inquilinos',
    'tenantSearch.form.search': 'Buscar',
    'tenantSearch.form.reset': 'Restablecer',
    'tenantSearch.refresh': 'Actualizar',
    'tenantSearch.columns.id': 'ID',
    'tenantSearch.columns.tenantName': 'Nombre',
    'tenantSearch.columns.tenantCode': 'C\xF3digo',
    'tenantSearch.columns.businessType': 'Tipo',
    'tenantSearch.columns.tenantZone': 'Zona horaria',
    'tenantSearch.columns.eventSecret': 'Secreto de eventos',
    'tenantSearch.columns.tenantStatus': 'Estado',
    'tenantSearch.columns.enableStatus': 'Activaci\xF3n',
    'tenantSearch.columns.lastOperator': '\xDAltimo operador',
    'tenantSearch.columns.createdAt': 'Creado',
    'tenantSearch.columns.updatedAt': 'Actualizado',
    'tenantSearch.columns.operations': 'Acciones',
    'tenantSearch.columns.operations.view': 'Ver',
    'tenantSearch.columns.operations.edit': 'Editar',
    'tenantSearch.columns.operations.boundary': 'Autorizar',
    'tenantSearch.columns.operations.enable': 'Habilitar',
    'tenantSearch.columns.operations.disable': 'Deshabilitar',
    'tenantSearch.columns.operations.delete': 'Eliminar',
    'tenantSearch.columns.expireAt': 'Caduca (ms)',
    'tenantSearch.columns.config': 'Config. ampliada',
    'tenantSearch.operations.add': 'Nuevo',
    'tenantSearch.validation.required': 'Campo obligatorio',
    'tenantSearch.validation.tenantCode':
      'Empieza con min\xFAscula o d\xEDgito, 2\u201364 caracteres',
    'tenantSearch.validation.encryptionLen': 'Debe tener 16 caracteres',
    'tenantSearch.form.tenantName.placeholder': 'Coincidencia por prefijo',
    'tenantSearch.form.tenantCode.placeholder': 'Coincidencia por prefijo',
    'tenantSearch.form.all.placeholder': 'Todos',
    'tenantSearch.form.status.placeholder': 'Solo activos por defecto',
    'tenantSearch.businessType.system': 'Sistema',
    'tenantSearch.businessType.ops': 'Operaciones',
    'tenantSearch.dataStatus.normal': 'Activo',
    'tenantSearch.dataStatus.deleted': 'Eliminado',
    'tenantSearch.activeStatus.enabled': 'Habilitado',
    'tenantSearch.activeStatus.disabled': 'Deshabilitado',
    'tenantSearch.activeStatus.expired': 'Expirado',
    'tenantSearch.modal.createTitle': 'Nuevo inquilino',
    'tenantSearch.modal.editTitle': 'Editar inquilino',
    'tenantSearch.modal.viewTitle': 'Ver inquilino',
    'tenantSearch.msg.createOk': 'Creado',
    'tenantSearch.msg.saveOk': 'Guardado',
    'tenantSearch.msg.deleteOk': 'Marcado como eliminado',
    'tenantSearch.msg.copied': 'Copiado',
    'tenantSearch.confirm.deleteTitle': 'Confirmar eliminaci\xF3n',
    'tenantSearch.confirm.deleteContent':
      'El inquilino se marcar\xE1 como eliminado. \xBFContinuar?',
    'tenantSearch.confirm.enableTitle': 'Habilitar inquilino',
    'tenantSearch.confirm.enableContent': '\xBFActivar este inquilino ahora?',
    'tenantSearch.confirm.disableTitle': 'Deshabilitar inquilino',
    'tenantSearch.confirm.disableContent':
      '\xBFMarcar este inquilino como deshabilitado?',
    'tenantSearch.msg.activeStatusOk': 'Estado de activaci\xF3n actualizado',
  },
};
var q = O;
const { Row: z, Col: l } = L,
  { useForm: R } = c,
  i = 'tenant-search-businessType',
  d = 'tenant-search-status',
  E = `${i}-field-label`,
  v = `${d}-field-label`,
  B = { tenantName: '', tenantCode: '', businessType: void 0, status: void 0 };
function j(n) {
  const { lang: t } = N.exports.useContext(_),
    e = w(q),
    [s] = R(),
    A = () => {
      const T = s.getFieldsValue();
      n.onSearch(T);
    },
    D = () => {
      s.resetFields(), n.onSearch(m({}, B));
    },
    u = t === 'zh-CN' ? 8 : 12;
  return o('div', {
    className: r['search-form-wrapper'],
    children: [
      a(c, {
        form: s,
        initialValues: B,
        className: r['search-form'],
        labelAlign: 'left',
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
        children: o(z, {
          gutter: 24,
          children: [
            a(l, {
              span: u,
              children: a(c.Item, {
                label: e['tenantSearch.columns.tenantName'],
                field: 'tenantName',
                children: a(p, {
                  placeholder: e['tenantSearch.form.tenantName.placeholder'],
                  allowClear: !0,
                }),
              }),
            }),
            a(l, {
              span: u,
              children: a(c.Item, {
                label: e['tenantSearch.columns.tenantCode'],
                field: 'tenantCode',
                children: a(p, {
                  allowClear: !0,
                  placeholder: e['tenantSearch.form.tenantCode.placeholder'],
                }),
              }),
            }),
            a(l, {
              span: u,
              children: o('div', {
                className: r.formLikeField,
                children: [
                  a('label', {
                    id: E,
                    className: r.formLikeFieldLabel,
                    htmlFor: C(i),
                    children: e['tenantSearch.columns.businessType'],
                  }),
                  a('div', {
                    className: r.formLikeFieldControl,
                    children: a(c.Item, {
                      field: 'businessType',
                      noStyle: !0,
                      children: a(f, {
                        baseId: i,
                        ariaLabelledBy: E,
                        children: a(F, {
                          placeholder: e['tenantSearch.form.all.placeholder'],
                          allowClear: !0,
                          options: [
                            {
                              label: e['tenantSearch.businessType.system'],
                              value: 1,
                            },
                            {
                              label: e['tenantSearch.businessType.ops'],
                              value: 2,
                            },
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
            a(l, {
              span: u,
              children: o('div', {
                className: r.formLikeField,
                children: [
                  a('label', {
                    id: v,
                    className: r.formLikeFieldLabel,
                    htmlFor: C(d),
                    children: e['tenantSearch.columns.tenantStatus'],
                  }),
                  a('div', {
                    className: r.formLikeFieldControl,
                    children: a(c.Item, {
                      field: 'status',
                      noStyle: !0,
                      children: a(f, {
                        baseId: d,
                        ariaLabelledBy: v,
                        children: a(F, {
                          placeholder:
                            e['tenantSearch.form.status.placeholder'],
                          allowClear: !0,
                          options: [
                            {
                              label: e['tenantSearch.dataStatus.normal'],
                              value: 1,
                            },
                            {
                              label: e['tenantSearch.dataStatus.deleted'],
                              value: 2,
                            },
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      o('div', {
        className: r['right-button'],
        children: [
          a(b, {
            type: 'primary',
            icon: a(I, {}),
            onClick: A,
            children: e['tenantSearch.form.search'],
          }),
          a(b, {
            icon: a(k, {}),
            onClick: D,
            children: e['tenantSearch.form.reset'],
          }),
        ],
      }),
    ],
  });
}
var P = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: j,
});
export { j as S, P as f, q as l };
