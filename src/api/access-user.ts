import {
  get,
  page,
  post,
  put,
  del,
  UserRecord,
  RoleRecord,
  DeptRecord,
  PermissionNode,
  RoleDetail,
  AccessListParams,
} from './access-control';

export interface UserListParams extends AccessListParams {
  username?: string;
  userId?: number;
  roleId?: number;
  tenantId?: number;
}

export function fetchUserPage(params: UserListParams) {
  return page<UserRecord>('/api/system/users/list', params);
}

export function fetchUserDetail(id: number) {
  return get<UserRecord>('/api/system/users/manage', { id });
}

export function createUser(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/users/register', data);
}

export function updateUser(data: Record<string, unknown>) {
  return put('/api/system/users/manage', data);
}

export function deleteUser(id: number) {
  return del('/api/system/users/manage', { id });
}

export function updateUserStatus(data: { id: number; activeStatus: number }) {
  return put('/api/system/users/status', data);
}

export function fetchUserRoles(userId: number, tenantId?: number) {
  return get<RoleRecord[]>('/api/system/users/roles/list', {
    userId,
    tenantId,
  });
}

export function saveUserRoles(data: {
  userId: number;
  tenantId?: number;
  roleIds: number[];
}) {
  return post<{ ids: number[] }>('/api/system/users/roles/save', data);
}

export function fetchUserDeptTree(tenantId?: number) {
  return get<DeptRecord[]>('/api/system/users/depts/tree', { tenantId });
}

export function saveUserDepts(data: {
  userId: number;
  tenantId?: number;
  deptIds: number[];
}) {
  return post<{ ids: number[] }>('/api/system/users/depts/save', data);
}

export function fetchUserPermissionTree(userId: number, tenantId?: number) {
  return get<PermissionNode[]>('/api/system/users/permissions/tree', {
    userId,
    tenantId,
  });
}

export function fetchUserGrantedPermissionIds(
  userId: number,
  tenantId?: number
) {
  return get<number[]>('/api/system/users/permissions/granted-ids', {
    userId,
    tenantId,
  });
}

export function saveUserPermissions(data: {
  userId: number;
  tenantId?: number;
  permissionIds?: number[];
  permissions?: {
    permissionId: number;
    effect?: string;
    grantType?: string;
    expireAt?: number;
    config?: string;
  }[];
}) {
  return post<{ ids: number[] }>('/api/system/users/permissions/save', data);
}

export function fetchRoleOptions(params?: AccessListParams) {
  return page<RoleRecord>('/api/system/roles/list', {
    page: 1,
    pageSize: 1000,
    ...params,
  });
}

export type { UserRecord, RoleRecord, DeptRecord, PermissionNode, RoleDetail };
