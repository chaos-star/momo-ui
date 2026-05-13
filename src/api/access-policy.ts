import {
  page,
  post,
  put,
  del,
  DataObjectRecord,
  DataScopeRecord,
  DataScopeBindingRecord,
  DataFieldRecord,
  FieldPolicyRecord,
  FieldPolicyBindingRecord,
  PolicyRecord,
  PolicyBindingRecord,
  AccessListParams,
} from './access-control';

export function fetchDataObjectPage(params: AccessListParams) {
  return page<DataObjectRecord>('/api/system/data-objects/list', params);
}

export function createDataObject(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/data-objects/manage', data);
}

export function updateDataObject(data: Record<string, unknown>) {
  return put('/api/system/data-objects/manage', data);
}

export function deleteDataObject(id: number) {
  return del('/api/system/data-objects/manage', { id });
}

export function fetchDataScopePage(params: AccessListParams) {
  return page<DataScopeRecord>('/api/system/data-scopes/list', params);
}

export function createDataScope(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/data-scopes/manage', data);
}

export function updateDataScope(data: Record<string, unknown>) {
  return put('/api/system/data-scopes/manage', data);
}

export function deleteDataScope(id: number) {
  return del('/api/system/data-scopes/manage', { id });
}

export function fetchDataScopeBindingPage(params: AccessListParams) {
  return page<DataScopeBindingRecord>(
    '/api/system/data-scope-bindings/list',
    params
  );
}

export function createDataScopeBinding(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/data-scope-bindings/manage', data);
}

export function updateDataScopeBinding(data: Record<string, unknown>) {
  return put('/api/system/data-scope-bindings/manage', data);
}

export function deleteDataScopeBinding(id: number) {
  return del('/api/system/data-scope-bindings/manage', { id });
}

export function fetchDataFieldPage(params: AccessListParams) {
  return page<DataFieldRecord>('/api/system/data-fields/list', params);
}

export function createDataField(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/data-fields/manage', data);
}

export function updateDataField(data: Record<string, unknown>) {
  return put('/api/system/data-fields/manage', data);
}

export function deleteDataField(id: number) {
  return del('/api/system/data-fields/manage', { id });
}

export function fetchFieldPolicyPage(params: AccessListParams) {
  return page<FieldPolicyRecord>('/api/system/field-policies/list', params);
}

export function createFieldPolicy(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/field-policies/manage', data);
}

export function updateFieldPolicy(data: Record<string, unknown>) {
  return put('/api/system/field-policies/manage', data);
}

export function deleteFieldPolicy(id: number) {
  return del('/api/system/field-policies/manage', { id });
}

export function fetchFieldPolicyBindingPage(params: AccessListParams) {
  return page<FieldPolicyBindingRecord>(
    '/api/system/field-policy-bindings/list',
    params
  );
}

export function createFieldPolicyBinding(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/field-policy-bindings/manage', data);
}

export function updateFieldPolicyBinding(data: Record<string, unknown>) {
  return put('/api/system/field-policy-bindings/manage', data);
}

export function deleteFieldPolicyBinding(id: number) {
  return del('/api/system/field-policy-bindings/manage', { id });
}

export function fetchPolicyPage(params: AccessListParams) {
  return page<PolicyRecord>('/api/system/policies/list', params);
}

export function createPolicy(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/policies/manage', data);
}

export function updatePolicy(data: Record<string, unknown>) {
  return put('/api/system/policies/manage', data);
}

export function deletePolicy(id: number) {
  return del('/api/system/policies/manage', { id });
}

export function fetchPolicyBindingPage(params: AccessListParams) {
  return page<PolicyBindingRecord>('/api/system/policy-bindings/list', params);
}

export function createPolicyBinding(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/policy-bindings/manage', data);
}

export function updatePolicyBinding(data: Record<string, unknown>) {
  return put('/api/system/policy-bindings/manage', data);
}

export function deletePolicyBinding(id: number) {
  return del('/api/system/policy-bindings/manage', { id });
}

export type {
  DataObjectRecord,
  DataScopeRecord,
  DataScopeBindingRecord,
  DataFieldRecord,
  FieldPolicyRecord,
  FieldPolicyBindingRecord,
  PolicyRecord,
  PolicyBindingRecord,
};
