import {
  get,
  page,
  post,
  put,
  del,
  DeptRecord,
  RoleRecord,
  AccessListParams,
} from './access-control';

export function fetchDeptTree() {
  return get<DeptRecord[]>('/api/system/depts/tree');
}

export function fetchDeptDetail(id: number) {
  return get<DeptRecord>('/api/system/depts/manage', { id });
}

export function createDept(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/depts/manage', data);
}

export function updateDept(data: Record<string, unknown>) {
  return put('/api/system/depts/manage', data);
}

export function deleteDept(id: number) {
  return del('/api/system/depts/manage', { id });
}

export function fetchDeptRoles(deptId: number, tenantId?: number) {
  return get<RoleRecord[]>('/api/system/depts/roles', { deptId, tenantId });
}

export function saveDeptRoles(data: {
  deptId: number;
  tenantId?: number;
  roleIds: number[];
}) {
  return post<{ ids: number[] }>('/api/system/depts/roles', data);
}

export function fetchRolePageForDept(params?: AccessListParams) {
  return page<RoleRecord>('/api/system/roles/list', {
    page: 1,
    pageSize: 1000,
    ...params,
  });
}

export type { DeptRecord, RoleRecord };
