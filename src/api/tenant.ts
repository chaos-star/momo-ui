import { authRequest } from './request';
import type { PageData } from './request';

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
  businessType?: number;
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
  businessType: number;
  tenantZone: string;
  eventSecret?: string;
  activeStatus?: number;
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
  businessType?: number;
  tenantZone?: string;
  activeStatus?: number;
  eventSecret?: string | null;
  expireAt?: number;
}) {
  return authRequest<Record<string, never>>({
    url: '/api/system/tenants/manage',
    method: 'PUT',
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
