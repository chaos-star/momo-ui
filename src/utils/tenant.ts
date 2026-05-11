export const USER_PROFILE_KEY = 'user-profile';

type TenantProfile = Record<string, unknown> & {
  defaultTenant?: Record<string, unknown>;
};

function readTenantCode(record?: Record<string, unknown> | null) {
  const value = record?.tenantCode || record?.code;
  return typeof value === 'string' || typeof value === 'number'
    ? String(value)
    : '';
}

export function getTenantCodeFromPathname(pathname = window.location.pathname) {
  const [, firstSegment] = pathname.split('/');

  if (!firstSegment || firstSegment === 'login' || firstSegment === '403') {
    return '';
  }

  return firstSegment;
}

export function stripTenantFromPathname(pathname = window.location.pathname) {
  const tenantCode = getTenantCodeFromPathname(pathname);

  if (!tenantCode) {
    return pathname || '/';
  }

  const path = pathname.replace(`/${tenantCode}`, '') || '/';
  return path.startsWith('/') ? path : `/${path}`;
}

export function withTenantPath(
  path: string,
  tenantCode = getTenantCodeFromPathname()
) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (!tenantCode) {
    return normalizedPath;
  }

  return `/${tenantCode}${normalizedPath}`;
}

export function readUserProfile<T = Record<string, unknown>>() {
  const profile = localStorage.getItem(USER_PROFILE_KEY);

  if (!profile) {
    return null;
  }

  try {
    return JSON.parse(profile) as T;
  } catch {
    return null;
  }
}

export function getDefaultTenantCode() {
  const profile = readUserProfile<TenantProfile>();

  return (
    readTenantCode(profile?.defaultTenant) ||
    readTenantCode(profile?.currentTenant as Record<string, unknown>) ||
    readTenantCode(profile)
  );
}

const LS_ORG_KEYS = ['X-Organization', 'organization'] as const;

function readOrganizationFromStorage(): string {
  if (typeof localStorage === 'undefined') {
    return '';
  }
  for (const key of LS_ORG_KEYS) {
    const value = localStorage.getItem(key);
    if (value) {
      return value;
    }
  }
  return '';
}

/**
 * 多页签等场景：URL 尚未带上 tenant 时，从路径 / 用户档案 / 登录写入的组织上下文解析租户编码。
 */
export function getResolvedTenantCodeForPath(
  pathname: string = typeof window !== 'undefined'
    ? window.location.pathname
    : '',
  userInfo?: Record<string, unknown> | null
): string {
  const fromPath = getTenantCodeFromPathname(pathname);
  if (fromPath) {
    return fromPath;
  }
  const fromProfile = getDefaultTenantCode();
  if (fromProfile) {
    return fromProfile;
  }
  const fromOrg = readOrganizationFromStorage();
  if (fromOrg) {
    return fromOrg;
  }
  const currentTenant = userInfo?.currentTenant as
    | Record<string, unknown>
    | undefined;
  const fromUser = readTenantCode(currentTenant);
  if (fromUser) {
    return fromUser;
  }
  return '';
}

export function getResolvedTenantPathPrefix(
  pathname?: string,
  userInfo?: Record<string, unknown> | null
): string {
  const code = getResolvedTenantCodeForPath(pathname, userInfo);
  return code ? `/${code}` : '';
}
