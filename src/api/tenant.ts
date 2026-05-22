import { authRequest } from './request';
import type { PageData } from './request';
import type { PermissionOptionRecord } from './access-permission';
import type { PermissionBoundaryPackageRecord } from './permission-boundary-package';

export interface TenantPermissionBoundaryRecord {
  tenantId: number;
  tenantType?: string;
  platformTenant?: boolean;
  packages?: PermissionBoundaryPackageRecord[];
  effectivePermissions?: PermissionOptionRecord[];
}

export interface TenantPermissionPackageRecord {
  id: number;
  tenantId: number;
  packageId: number;
  permissionCode?: string;
  permissionName?: string;
  activeStatus: number;
  operator?: number;
  operatorUsername?: string | null;
  updatedAt?: number;
}

export interface TenantPermissionPackageListParams {
  tenantId: number;
  page?: number;
  pageSize?: number;
  id?: number;
  permissionName?: string;
}

export interface TenantRecord {
  id: number;
  tenantCode: string;
  tenantName: string;
  tenantType: string;
  tenantZone: string;
  activeStatus: number;
  config: string;
  expireAt: number;
  status: number;
  operator: number;
  /** 最后操作人用户名（列表接口联表返回） */
  operatorUsername?: string | null;
  createdAt: number;
  updatedAt: number;
}

export interface TenantListParams {
  page?: number;
  pageSize?: number;
  tenantName?: string;
  tenantCode?: string;
  businessType?: string;
  status?: number;
}

export function fetchTenantPage(params: TenantListParams) {
  return authRequest<PageData<TenantRecord>>({
    url: '/api/system/tenants/list',
    method: 'GET',
    params,
  });
}

export function createTenant(data: {
  tenantName: string;
  tenantCode: string;
  businessType: string;
  tenantZone: string;
  config?: string;
  eventSecret?: string;
  expireAt?: number;
}) {
  return authRequest<{ id: number }>({
    url: '/api/system/tenants/manage',
    method: 'POST',
    data,
  });
}

export function updateTenant(data: {
  id: number;
  tenantName?: string;
  tenantCode?: string;
  businessType?: string;
  tenantZone?: string;
  config?: string;
  eventSecret?: string | null;
  expireAt?: number;
}) {
  return authRequest<Record<string, never>>({
    url: '/api/system/tenants/manage',
    method: 'PUT',
    data,
  });
}

/** 启用状态：1 启用 / 2 停用（与列表 activeStatus 一致） */
export function updateTenantActiveStatus(data: {
  id: number;
  activeStatus: 1 | 2;
}) {
  return authRequest<Record<string, never>>({
    url: '/api/system/tenants/manage/active-status',
    method: 'PATCH',
    data,
  });
}

export function deleteTenant(id: number) {
  return authRequest<Record<string, never>>({
    url: '/api/system/tenants/manage',
    method: 'DELETE',
    params: { id },
  });
}

export function fetchTenantPermissionBoundary(tenantId?: number) {
  return authRequest<TenantPermissionBoundaryRecord>({
    url: '/api/system/tenants/permission-boundary',
    method: 'GET',
    params: tenantId ? { tenantId } : undefined,
  });
}

export function saveTenantPermissionBoundary(data: {
  tenantId: number;
  packageIds: number[];
}) {
  return authRequest<{ ids: number[] }>({
    url: '/api/system/tenants/permission-boundary',
    method: 'POST',
    data,
  });
}

export function fetchTenantPermissionPackagePage(
  params: TenantPermissionPackageListParams
) {
  return authRequest<PageData<TenantPermissionPackageRecord>>({
    url: '/api/system/tenants/permission-boundary-packages/list',
    method: 'GET',
    params,
  });
}

export function createTenantPermissionPackage(data: {
  tenantId: number;
  packageId: number;
}) {
  return authRequest<{ id: number }>({
    url: '/api/system/tenants/permission-boundary-packages/manage',
    method: 'POST',
    data,
  });
}

export function updateTenantPermissionPackage(data: {
  id: number;
  tenantId: number;
  packageId: number;
}) {
  return authRequest<{ id: number }>({
    url: '/api/system/tenants/permission-boundary-packages/manage',
    method: 'PUT',
    data,
  });
}

export function updateTenantPermissionPackageActiveStatus(data: {
  id: number;
  activeStatus: 1 | 2;
}) {
  return authRequest<Record<string, never>>({
    url: '/api/system/tenants/permission-boundary-packages/active-status',
    method: 'PATCH',
    data,
  });
}

export function deleteTenantPermissionPackage(id: number) {
  return authRequest<Record<string, never>>({
    url: '/api/system/tenants/permission-boundary-packages/manage',
    method: 'DELETE',
    params: { id },
  });
}
