import {
  page,
  get,
  post,
  put,
  del,
  AccessListParams,
  MenuRecord,
  ApiEndpointRecord,
} from './access-control';

export interface PermissionRecord {
  id: number;
  permissionCode?: string;
  permissionName?: string;
  permissionType?: string;
  objectType?: string;
  objectId?: number;
  description?: string;
  activeStatus?: number;
  status?: number;
  createdAt?: number;
  updatedAt?: number;
}

export function fetchPermissionPage(params: AccessListParams) {
  return page<PermissionRecord>('/api/system/permissions/list', params);
}

export function createPermission(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/permissions/manage', data);
}

export function updatePermission(data: Record<string, unknown>) {
  return put('/api/system/permissions/manage', data);
}

export function deletePermission(id: number) {
  return del('/api/system/permissions/manage', { id });
}

export function fetchMenuTree() {
  return get<MenuRecord[]>('/api/system/menus/tree');
}

export function createMenu(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/menus/manage', data);
}

export function updateMenu(data: Record<string, unknown>) {
  return put('/api/system/menus/manage', data);
}

export function toggleMenuActiveStatus(id: number, activeStatus: number) {
  return put('/api/system/menus/active-status', { id, activeStatus });
}

export function deleteMenu(id: number) {
  return del('/api/system/menus/manage', { id });
}

export function fetchApiPage(params: AccessListParams) {
  return page<ApiEndpointRecord>('/api/system/apis/list', params);
}

export function createApi(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/apis/manage', data);
}

export function updateApi(data: Record<string, unknown>) {
  return put('/api/system/apis/manage', data);
}

export function deleteApi(id: number) {
  return del('/api/system/apis/manage', { id });
}

export type { MenuRecord, ApiEndpointRecord };
