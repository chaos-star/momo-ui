import { ListData } from './request';
import {
  page,
  get,
  post,
  put,
  del,
  AccessListParams,
  MenuRecord,
  PageElementRecord,
  ApiEndpointRecord,
  ApiGroupRecord,
  PermissionNode,
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
  operator?: number;
  operatorUsername?: string;
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

export function moveMenu(data: { id: number; targetParentId: number }) {
  return put('/api/system/menus/move', data);
}

export function toggleMenuActiveStatus(id: number, activeStatus: number) {
  return put('/api/system/menus/active-status', { id, activeStatus });
}

export function deleteMenu(id: number) {
  return del('/api/system/menus/manage', { id });
}

export function fetchPageElements(params: AccessListParams) {
  return get<PageElementRecord[]>('/api/system/page-elements/list', params);
}

export function createPageElement(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/page-elements/manage', data);
}

export function updatePageElement(data: Record<string, unknown>) {
  return put('/api/system/page-elements/manage', data);
}

export function togglePageElementActiveStatus(
  id: number,
  activeStatus: number
) {
  return put('/api/system/page-elements/active-status', { id, activeStatus });
}

export function deletePageElement(id: number) {
  return del('/api/system/page-elements/manage', { id });
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

export function fetchApiGroupPage(params: AccessListParams) {
  return page<ApiGroupRecord>('/api/system/api-groups/list', params);
}

export function fetchApiGroupOptions() {
  return get<ListData<ApiGroupRecord>>('/api/system/api-groups/options');
}

export function createApiGroup(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/api-groups/manage', data);
}

export function updateApiGroup(data: Record<string, unknown>) {
  return put('/api/system/api-groups/manage', data);
}

export function deleteApiGroup(id: number) {
  return del('/api/system/api-groups/manage', { id });
}

export function fetchPermissionGrantTree() {
  return get<PermissionNode[]>('/api/system/permissions/grant-tree');
}

export interface PermissionRelationRecord {
  id: number;
  parentPermissionId: number;
  parentPermissionCode?: string;
  parentPermissionName?: string;
  childPermissionId: number;
  childPermissionCode?: string;
  childPermissionName?: string;
  relationType?: string;
  childGroup?: string;
  autoGrant?: number;
  sortOrder?: number;
  activeStatus?: number;
}

export interface PermissionOptionRecord {
  id: number;
  permissionCode?: string;
  permissionName?: string;
  permissionType?: string;
  objectType?: string;
  objectId?: number;
}

export function fetchPermissionOptions(params?: {
  objectType?: string;
  objectTypes?: string[];
  permissionType?: string;
}) {
  return get<PermissionOptionRecord[]>(
    '/api/system/permissions/options',
    params
  );
}

export function fetchPermissionRelationList(params?: Record<string, unknown>) {
  return get<PermissionRelationRecord[]>(
    '/api/system/permission-relations/list',
    params
  );
}

export function createPermissionRelation(data: Record<string, unknown>) {
  return post<{ id: number }>('/api/system/permission-relations/manage', data);
}

export function updatePermissionRelation(data: Record<string, unknown>) {
  return put('/api/system/permission-relations/manage', data);
}

export function deletePermissionRelation(id: number) {
  return del('/api/system/permission-relations/manage', { id });
}

export type {
  MenuRecord,
  PageElementRecord,
  ApiEndpointRecord,
  ApiGroupRecord,
};
