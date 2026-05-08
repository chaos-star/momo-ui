export const USER_PROFILE_KEY = 'user-profile';

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
