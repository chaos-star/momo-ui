import {
  get,
  page,
  post,
  put,
  del,
  RoleRecord,
  RoleDetail,
  AccessListParams,
} from './access-control';

export interface RoleListParams extends AccessListParams {
  tenantId?: number;
  roleCode?: string;
  roleName?: string;
  roleType?: string;
}

export function fetchRolePage(params: RoleListParams) {
  return page<RoleRecord>('/api/system/roles/list', params);
}

export function fetchRoleDetail(id: number) {
  return get<RoleDetail>('/api/system/roles/manage', { id });
}

export function createRole(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/roles/manage', data);
}

export function updateRole(data: Record<string, unknown>) {
  return put('/api/system/roles/manage', data);
}

export function deleteRole(id: number) {
  return del('/api/system/roles/manage', { id });
}

export function saveRolePermissions(data: {
  tenantId?: number;
  roleId: number;
  permissionIds?: number[];
  permissions?: {
    permissionId: number;
    grantType?: string;
    expireAt?: number;
    config?: string;
  }[];
}) {
  return post<{ ids: number[] }>('/api/system/roles/permissions', data);
}

export type { RoleRecord, RoleDetail };
