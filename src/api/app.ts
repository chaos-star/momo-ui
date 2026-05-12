import { authRequest } from './request';
import type { PageData } from './request';

export interface TenantOption {
  id: number;
  tenantCode: string;
  tenantName: string;
}

export interface AppRecord {
  id: number;
  tenantId: number;
  tenantName?: string | null;
  appCode: string;
  activeStatus: number;
  pkgName: string;
  osType: string;
  config?: string;
  apiKey: string;
  partnerId: string;
  partnerSecret: string;
  status: number;
  operator?: number;
  operatorUsername?: string | null;
  createdAt: number;
  updatedAt: number;
}

export interface AppListParams {
  page?: number;
  pageSize?: number;
  tenantId?: number;
  appCode?: string;
  pkgName?: string;
  osType?: string;
  activeStatus?: number;
  status?: number;
}

export function fetchAppPage(params: AppListParams) {
  return authRequest<PageData<AppRecord>>({
    url: '/api/system/app/list',
    method: 'GET',
    params,
  });
}

export function fetchTenantOptionsForPlatform() {
  return authRequest<TenantOption[]>({
    url: '/api/system/tenants/options',
    method: 'GET',
  });
}

export function createApp(data: {
  tenantId?: number;
  appCode: string;
  pkgName: string;
  osType: string;
  sendApiKey?: string;
  partnerId?: string;
  partnerSecret?: string;
}) {
  return authRequest<{ id: number }>({
    url: '/api/system/app/manage',
    method: 'POST',
    data,
  });
}

export function updateApp(data: {
  id: number;
  tenantId?: number;
  appCode: string;
  pkgName: string;
  osType: string;
  activeStatus?: number;
  sendApiKey?: string | null;
  partnerId?: string | null;
  partnerSecret?: string | null;
}) {
  return authRequest<Record<string, never>>({
    url: '/api/system/app/manage',
    method: 'PUT',
    data,
  });
}

export function updateAppActiveStatus(data: {
  id: number;
  activeStatus: 1 | 2;
}) {
  return authRequest<Record<string, never>>({
    url: '/api/system/app/manage/active-status',
    method: 'PATCH',
    data,
  });
}

export function deleteApp(id: number) {
  return authRequest<Record<string, never>>({
    url: '/api/system/app/manage',
    method: 'DELETE',
    params: { id },
  });
}
