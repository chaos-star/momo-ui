import { get, post, PermissionNode } from './access-control';
import { AuthContextResult } from './auth';

export interface PermissionSourceRecord {
  permissionCode?: string;
  permissionName?: string;
  sourceType?: string;
  sourceId?: number;
  sourceName?: string;
  grantType?: string;
  expireAt?: number;
  config?: unknown;
}

export interface PermissionSimulationResult {
  allowed?: boolean;
  apiCode?: string;
  permissionCode?: string;
  reason?: string;
  matchedPermissions?: PermissionSourceRecord[];
  fieldPolicies?: Record<string, Record<string, unknown>>;
  dataScopes?: Record<string, unknown>[];
}

export function fetchDiagnosisContext(params?: Record<string, unknown>) {
  return get<AuthContextResult>('/api/system/auth-diagnosis/context', params);
}

export function fetchPermissionSources(params: {
  userId?: number;
  tenantId?: number;
  permissionCode?: string;
}) {
  return get<PermissionSourceRecord[]>(
    '/api/system/auth-diagnosis/sources',
    params
  );
}

export function fetchDiagnosisPermissionTree(params?: Record<string, unknown>) {
  return get<PermissionNode[]>(
    '/api/system/auth-diagnosis/permissions/tree',
    params
  );
}

export function simulateApiPermission(data: Record<string, unknown>) {
  return post<PermissionSimulationResult>(
    '/api/system/auth-diagnosis/simulate',
    data
  );
}
