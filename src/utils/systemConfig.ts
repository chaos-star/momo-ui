export const SYSTEM_PROFILE_KEY = 'system-profile';

export type SystemLanguage = 'zh-CN' | 'en-US' | 'es-ES';

export interface SystemConfigJson {
  logoPath?: string;
  systemName?: Partial<Record<SystemLanguage | string, string>>;
  companyName?: Partial<Record<SystemLanguage | string, string>>;
  systemDescription?: Partial<Record<SystemLanguage | string, string>>;
  [key: string]: unknown;
}

export interface SystemConfigProfile {
  config: SystemConfigJson;
  logoUrl?: string;
  obsCloudBase?: string;
}

export const DEFAULT_SYSTEM_PROFILE: SystemConfigProfile = {
  config: {
    logoPath: '',
    systemName: {
      'zh-CN': '营销中心',
      'en-US': 'Marketing Center',
      'es-ES': 'Centro de Marketing',
    },
    companyName: {
      'zh-CN': '公司名称',
      'en-US': 'Company Name',
      'es-ES': 'Nombre de la empresa',
    },
    systemDescription: {
      'zh-CN': '统一营销管理平台',
      'en-US': 'Unified marketing management platform',
      'es-ES': 'Plataforma unificada de gestión de marketing',
    },
  },
  logoUrl: '',
  obsCloudBase: '',
};

export function normalizeSystemProfile(
  profile?: Partial<SystemConfigProfile> | null
): SystemConfigProfile {
  return {
    config: {
      ...DEFAULT_SYSTEM_PROFILE.config,
      ...(profile?.config || {}),
      systemName: {
        ...DEFAULT_SYSTEM_PROFILE.config.systemName,
        ...(profile?.config?.systemName || {}),
      },
      companyName: {
        ...DEFAULT_SYSTEM_PROFILE.config.companyName,
        ...(profile?.config?.companyName || {}),
      },
      systemDescription: {
        ...DEFAULT_SYSTEM_PROFILE.config.systemDescription,
        ...(profile?.config?.systemDescription || {}),
      },
    },
    logoUrl: profile?.logoUrl || '',
    obsCloudBase: profile?.obsCloudBase || '',
  };
}

export function getSystemText(
  values: Partial<Record<string, string>> | undefined,
  lang = 'zh-CN'
) {
  return values?.[lang] || values?.['zh-CN'] || values?.['en-US'] || '';
}

export function getSystemName(
  profile?: SystemConfigProfile | null,
  lang = 'zh-CN'
) {
  return getSystemText(normalizeSystemProfile(profile).config.systemName, lang);
}

export function getCompanyName(
  profile?: SystemConfigProfile | null,
  lang = 'zh-CN'
) {
  return getSystemText(
    normalizeSystemProfile(profile).config.companyName,
    lang
  );
}

export function getSystemDescription(
  profile?: SystemConfigProfile | null,
  lang = 'zh-CN'
) {
  return getSystemText(
    normalizeSystemProfile(profile).config.systemDescription,
    lang
  );
}

export function getSystemTitle(
  profile?: SystemConfigProfile | null,
  lang = 'zh-CN'
) {
  const systemName = getSystemName(profile, lang);
  const systemDescription = getSystemDescription(profile, lang);
  return systemDescription
    ? `${systemName} - ${systemDescription}`
    : systemName;
}

export function getCopyrightText(
  profile?: SystemConfigProfile | null,
  lang = 'zh-CN'
) {
  const year = new Date().getFullYear();
  return `© 2026-${year} ${getCompanyName(profile, lang)}`;
}

export function readSystemProfile() {
  try {
    const raw = localStorage.getItem(SYSTEM_PROFILE_KEY);
    return raw ? normalizeSystemProfile(JSON.parse(raw)) : null;
  } catch {
    localStorage.removeItem(SYSTEM_PROFILE_KEY);
    return null;
  }
}

export function writeSystemProfile(profile: SystemConfigProfile) {
  const normalized = normalizeSystemProfile(profile);
  localStorage.setItem(SYSTEM_PROFILE_KEY, JSON.stringify(normalized));
  return normalized;
}

export function removeSystemProfile() {
  localStorage.removeItem(SYSTEM_PROFILE_KEY);
}
