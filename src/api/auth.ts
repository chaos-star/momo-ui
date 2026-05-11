import { authRequest } from './request';

export interface AuthMenuNode {
  id?: number | string;
  parentId?: number | string;
  resourceCode?: string;
  resourceName?: string;
  resourceNames?: Record<string, string>;
  /** 后端 sys_menu.menu_type：CATALOG / MENU / BUTTON */
  menuType?: string;
  resourcePath?: string;
  routerPath?: string;
  resourceIcon?: string;
  sortOrder?: number;
  /** 1=该节点为该用户在当前租户下的默认首页，0/缺省=否；同一菜单树最多 1 个为 1 */
  useIndex?: number;
  children?: AuthMenuNode[];
}

export interface AuthContextResult {
  profile?: Record<string, unknown>;
  tenant?: Record<string, unknown>;
  menus?: AuthMenuNode[];
  permissions?: string[];
  fieldPolicies?: Record<string, Record<string, unknown>>;
}

export function getAuthResourceCacheKey(tenantCode: string) {
  return `${tenantCode}-resource`;
}

export function readCachedAuthContext(tenantCode: string) {
  const cache = localStorage.getItem(getAuthResourceCacheKey(tenantCode));

  if (!cache) {
    return null;
  }

  try {
    return JSON.parse(cache) as AuthContextResult;
  } catch {
    localStorage.removeItem(getAuthResourceCacheKey(tenantCode));
    return null;
  }
}

export function cacheAuthContext(tenantCode: string, data: AuthContextResult) {
  localStorage.setItem(
    getAuthResourceCacheKey(tenantCode),
    JSON.stringify(data)
  );
}

export function getAuthContext() {
  return authRequest<AuthContextResult>({
    url: '/api/auth/context',
    method: 'GET',
  });
}

export async function getAuthContextResource(tenantCode: string) {
  const cached = readCachedAuthContext(tenantCode);

  if (cached) {
    return cached;
  }

  const data = await getAuthContext();
  cacheAuthContext(tenantCode, data);
  return data;
}
