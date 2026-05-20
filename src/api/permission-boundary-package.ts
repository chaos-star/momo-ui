import { authRequest } from './request';
import type { PageData } from './request';
import type { PermissionOptionRecord } from './access-permission';

export interface PermissionBoundaryPackageRecord {
  id: number;
  packageCode: string;
  packageName: string;
  description?: string;
  activeStatus: number;
  config?: string;
  permissionCount?: number;
  tenantCount?: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface PermissionBoundaryPackageListParams {
  page?: number;
  pageSize?: number;
  packageCode?: string;
  packageName?: string;
  activeStatus?: number;
}

export function fetchPermissionBoundaryPackagePage(
  params: PermissionBoundaryPackageListParams
) {
  return authRequest<PageData<PermissionBoundaryPackageRecord>>({
    url: '/api/system/permission-boundary-packages/list',
    method: 'GET',
    params,
  });
}

export function fetchPermissionBoundaryPackageOptions() {
  return authRequest<PermissionBoundaryPackageRecord[]>({
    url: '/api/system/permission-boundary-packages/options',
    method: 'GET',
  });
}

export function createPermissionBoundaryPackage(data: {
  packageCode: string;
  packageName: string;
  description?: string;
  activeStatus?: number;
}) {
  return authRequest<{ id: number }>({
    url: '/api/system/permission-boundary-packages/manage',
    method: 'POST',
    data,
  });
}

export function updatePermissionBoundaryPackage(data: {
  id: number;
  packageCode: string;
  packageName: string;
  description?: string;
  activeStatus?: number;
}) {
  return authRequest<{ id: number }>({
    url: '/api/system/permission-boundary-packages/manage',
    method: 'PUT',
    data,
  });
}

export function deletePermissionBoundaryPackage(id: number) {
  return authRequest<Record<string, never>>({
    url: '/api/system/permission-boundary-packages/manage',
    method: 'DELETE',
    params: { id },
  });
}

export function updatePermissionBoundaryPackageActiveStatus(data: {
  id: number;
  activeStatus: 1 | 2;
}) {
  return authRequest<Record<string, never>>({
    url: '/api/system/permission-boundary-packages/active-status',
    method: 'PATCH',
    data,
  });
}

export function fetchPermissionBoundaryPackagePermissions(packageId: number) {
  return authRequest<PermissionOptionRecord[]>({
    url: '/api/system/permission-boundary-packages/permissions',
    method: 'GET',
    params: { packageId },
  });
}

export function savePermissionBoundaryPackagePermissions(data: {
  packageId: number;
  permissionIds: number[];
}) {
  return authRequest<{ ids: number[] }>({
    url: '/api/system/permission-boundary-packages/permissions',
    method: 'POST',
    data,
  });
}
