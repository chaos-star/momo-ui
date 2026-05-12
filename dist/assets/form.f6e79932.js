import {
  r as F,
  a as c,
  j as e,
  ag as t,
  ah as s,
  K as i,
  B as h,
  aV as f,
  $ as C,
  aI as E,
} from './vendor.64a7fdcd.js';
import { G as v, u as b } from './index.6c1213a0.js';
import { s as u } from './index.module.02cb7149.js';
const B = {
  'en-US': {
    'tenantSearch.title': 'Tenant management',
    'tenantSearch.form.search': 'Search',
    'tenantSearch.form.reset': 'Reset',
    'tenantSearch.refresh': 'Refresh',
    'tenantSearch.columns.tenantName': 'Tenant name',
    'tenantSearch.columns.tenantCode': 'Tenant code',
    'tenantSearch.columns.businessType': 'Business type',
    'tenantSearch.columns.tenantZone': 'Timezone',
    'tenantSearch.columns.activeStatus': 'Tenant status',
    'tenantSearch.columns.dataStatus': 'Data status',
    'tenantSearch.columns.operations': 'Actions',
    'tenantSearch.columns.operations.view': 'View',
    'tenantSearch.columns.operations.edit': 'Edit',
    'tenantSearch.columns.operations.delete': 'Delete',
    'tenantSearch.operations.add': 'New tenant',
    'tenantSearch.operation.download': 'Export',
    'tenantSearch.exportTip': 'Export is not available yet.',
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
  },
  'zh-CN': {
    'tenantSearch.title': '\u79DF\u6237\u7BA1\u7406',
    'tenantSearch.form.search': '\u67E5\u8BE2',
    'tenantSearch.form.reset': '\u91CD\u7F6E',
    'tenantSearch.refresh': '\u5237\u65B0',
    'tenantSearch.columns.tenantName': '\u79DF\u6237\u540D\u79F0',
    'tenantSearch.columns.tenantCode': '\u79DF\u6237\u7F16\u7801',
    'tenantSearch.columns.businessType': '\u4E1A\u52A1\u7C7B\u578B',
    'tenantSearch.columns.tenantZone': '\u65F6\u533A',
    'tenantSearch.columns.activeStatus': '\u79DF\u6237\u72B6\u6001',
    'tenantSearch.columns.dataStatus': '\u6570\u636E\u72B6\u6001',
    'tenantSearch.columns.operations': '\u64CD\u4F5C',
    'tenantSearch.columns.operations.view': '\u67E5\u770B',
    'tenantSearch.columns.operations.edit': '\u7F16\u8F91',
    'tenantSearch.columns.operations.delete': '\u5220\u9664',
    'tenantSearch.operations.add': '\u65B0\u5EFA',
    'tenantSearch.operation.download': '\u4E0B\u8F7D',
    'tenantSearch.exportTip': '\u5BFC\u51FA\u529F\u80FD\u5F00\u53D1\u4E2D',
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
    'tenantSearch.activeStatus.disabled': '\u7981\u7528',
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
  },
  'es-ES': {
    'tenantSearch.title': 'Gesti\xF3n de inquilinos',
    'tenantSearch.form.search': 'Buscar',
    'tenantSearch.form.reset': 'Restablecer',
    'tenantSearch.refresh': 'Actualizar',
    'tenantSearch.columns.tenantName': 'Nombre',
    'tenantSearch.columns.tenantCode': 'C\xF3digo',
    'tenantSearch.columns.businessType': 'Tipo',
    'tenantSearch.columns.tenantZone': 'Zona horaria',
    'tenantSearch.columns.activeStatus': 'Estado',
    'tenantSearch.columns.dataStatus': 'Estado de datos',
    'tenantSearch.columns.operations': 'Acciones',
    'tenantSearch.columns.operations.view': 'Ver',
    'tenantSearch.columns.operations.edit': 'Editar',
    'tenantSearch.columns.operations.delete': 'Eliminar',
    'tenantSearch.operations.add': 'Nuevo',
    'tenantSearch.operation.download': 'Descargar',
    'tenantSearch.exportTip': 'La exportaci\xF3n a\xFAn no est\xE1 disponible.',
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
  },
};
var D = B;
const { Row: T, Col: r } = E,
  { useForm: x } = t;
function y(l) {
  const { lang: d } = F.exports.useContext(v),
    a = b(D),
    [o] = x(),
    S = () => {
      const p = o.getFieldsValue();
      l.onSearch(p);
    },
    m = () => {
      o.resetFields(), l.onSearch({});
    },
    n = d === 'zh-CN' ? 8 : 12;
  return c('div', {
    className: u['search-form-wrapper'],
    children: [
      e(t, {
        form: o,
        className: u['search-form'],
        labelAlign: 'left',
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
        children: c(T, {
          gutter: 24,
          children: [
            e(r, {
              span: n,
              children: e(t.Item, {
                label: a['tenantSearch.columns.tenantName'],
                field: 'tenantName',
                children: e(s, {
                  placeholder: a['tenantSearch.form.tenantName.placeholder'],
                  allowClear: !0,
                }),
              }),
            }),
            e(r, {
              span: n,
              children: e(t.Item, {
                label: a['tenantSearch.columns.tenantCode'],
                field: 'tenantCode',
                children: e(s, {
                  allowClear: !0,
                  placeholder: a['tenantSearch.form.tenantCode.placeholder'],
                }),
              }),
            }),
            e(r, {
              span: n,
              children: e(t.Item, {
                label: a['tenantSearch.columns.businessType'],
                field: 'businessType',
                children: e(i, {
                  placeholder: a['tenantSearch.form.all.placeholder'],
                  allowClear: !0,
                  options: [
                    { label: a['tenantSearch.businessType.system'], value: 1 },
                    { label: a['tenantSearch.businessType.ops'], value: 2 },
                  ],
                }),
              }),
            }),
            e(r, {
              span: n,
              children: e(t.Item, {
                label: a['tenantSearch.columns.dataStatus'],
                field: 'status',
                children: e(i, {
                  placeholder: a['tenantSearch.form.status.placeholder'],
                  allowClear: !0,
                  options: [
                    { label: a['tenantSearch.dataStatus.normal'], value: 1 },
                    { label: a['tenantSearch.dataStatus.deleted'], value: 2 },
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
      c('div', {
        className: u['right-button'],
        children: [
          e(h, {
            type: 'primary',
            icon: e(f, {}),
            onClick: S,
            children: a['tenantSearch.form.search'],
          }),
          e(h, {
            icon: e(C, {}),
            onClick: m,
            children: a['tenantSearch.form.reset'],
          }),
        ],
      }),
    ],
  });
}
var N = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: y,
});
export { y as S, N as f, D as l };
