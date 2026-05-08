export interface RouteTab {
  title: string;
  name: string;
  path: string;
  fullPath: string;
}

export interface TabIdentity {
  tenantCode?: string | number;
}

const TAB_STORAGE_PREFIX = 'marketing:tabs';

function normalizeKeyPart(value?: string | number) {
  return encodeURIComponent(String(value || 'unknown'));
}

function readRecordValue(
  record: Record<string, unknown> | undefined,
  keys: string[]
) {
  if (!record) {
    return undefined;
  }

  for (const key of keys) {
    const value = record[key];
    if (typeof value === 'string' || typeof value === 'number') {
      return value;
    }
  }

  return undefined;
}

export function getTabIdentity(
  userInfo?: Record<string, unknown> | null
): TabIdentity {
  const currentTenant = userInfo?.currentTenant as
    | Record<string, unknown>
    | undefined;
  const defaultTenant = userInfo?.defaultTenant as
    | Record<string, unknown>
    | undefined;

  return {
    tenantCode:
      readRecordValue(currentTenant, [
        'tenantCode',
        'code',
        'tenantId',
        'id',
      ]) ||
      readRecordValue(userInfo || undefined, ['tenantCode', 'tenantId']) ||
      readRecordValue(defaultTenant, ['tenantCode', 'code', 'tenantId', 'id']),
  };
}

export function getTabStorageKey(identity: TabIdentity) {
  return `${TAB_STORAGE_PREFIX}:${normalizeKeyPart(identity.tenantCode)}`;
}

export function getTabCacheKey(identity: TabIdentity, fullPath: string) {
  return `${normalizeKeyPart(identity.tenantCode)}:${encodeURIComponent(
    fullPath
  )}`;
}

export function readTabsFromStorage(identity: TabIdentity): RouteTab[] | null {
  try {
    const value = sessionStorage.getItem(getTabStorageKey(identity));
    if (!value) {
      return null;
    }

    const tabs = JSON.parse(value);
    if (!Array.isArray(tabs)) {
      return null;
    }

    return tabs.filter(
      (tab) =>
        tab &&
        typeof tab.title === 'string' &&
        typeof tab.name === 'string' &&
        typeof tab.path === 'string' &&
        typeof tab.fullPath === 'string'
    );
  } catch {
    return null;
  }
}

export function saveTabsToStorage(identity: TabIdentity, tabs: RouteTab[]) {
  try {
    sessionStorage.setItem(getTabStorageKey(identity), JSON.stringify(tabs));
  } catch {
    // ignore
  }
}

export function removeTabsFromStorage(identity: TabIdentity) {
  try {
    sessionStorage.removeItem(getTabStorageKey(identity));
  } catch {
    // ignore
  }
}
