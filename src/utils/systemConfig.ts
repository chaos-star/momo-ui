export const SYSTEM_PROFILE_KEY = 'system-profile';

export type SystemLanguage = 'zh-CN' | 'en-US' | 'es-ES';

export type SystemLogoType = '1' | '2';

export interface SystemConfigJson {
  logoType?: SystemLogoType;
  logoPath?: string;
  logoSvgElement?: string;
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
    logoType: '2',
    logoPath: '',
    logoSvgElement: '',
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
  const topLevelConfig = profile as
    | Partial<SystemConfigJson>
    | null
    | undefined;
  const config = {
    ...DEFAULT_SYSTEM_PROFILE.config,
    ...(topLevelConfig?.logoType ? { logoType: topLevelConfig.logoType } : {}),
    ...(topLevelConfig?.logoPath !== undefined
      ? { logoPath: topLevelConfig.logoPath }
      : {}),
    ...(topLevelConfig?.logoSvgElement !== undefined
      ? { logoSvgElement: topLevelConfig.logoSvgElement }
      : {}),
    ...(profile?.config || {}),
  };

  return {
    config: {
      ...config,
      systemName: {
        ...DEFAULT_SYSTEM_PROFILE.config.systemName,
        ...(config.systemName || {}),
      },
      companyName: {
        ...DEFAULT_SYSTEM_PROFILE.config.companyName,
        ...(config.companyName || {}),
      },
      systemDescription: {
        ...DEFAULT_SYSTEM_PROFILE.config.systemDescription,
        ...(config.systemDescription || {}),
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

export function getSystemLogoSvgElement(profile?: SystemConfigProfile | null) {
  const config = normalizeSystemProfile(profile).config;
  if (config.logoType !== '1') {
    return '';
  }

  const svgElement = config.logoSvgElement;
  return typeof svgElement === 'string' ? svgElement.trim() : '';
}

export function svgElementToDataUrl(svgElement: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgElement)}`;
}

export function getSystemLogoUrl(profile?: SystemConfigProfile | null) {
  const normalized = normalizeSystemProfile(profile);
  const logoPath = normalized.config.logoPath || '';

  if (normalized.logoUrl) {
    return normalized.logoUrl;
  }

  if (!logoPath) {
    return '';
  }

  if (logoPath.startsWith('http://') || logoPath.startsWith('https://')) {
    return logoPath;
  }

  if (!normalized.obsCloudBase) {
    return logoPath;
  }

  return `${normalized.obsCloudBase.replace(/\/$/, '')}/${logoPath.replace(
    /^\//,
    ''
  )}`;
}

export function applySystemFavicon(profile?: SystemConfigProfile | null) {
  const svgElement = getSystemLogoSvgElement(profile);
  const faviconUrl = svgElement
    ? svgElementToDataUrl(svgElement)
    : getSystemLogoUrl(profile);
  if (!faviconUrl) {
    return;
  }

  const isDataUrl = faviconUrl.startsWith('data:');
  const href = isDataUrl
    ? faviconUrl
    : faviconUrl.includes('?')
    ? `${faviconUrl}&favicon=${Date.now()}`
    : `${faviconUrl}?favicon=${Date.now()}`;
  let link = document.querySelector<HTMLLinkElement>(
    'link[rel="icon"], link[rel="shortcut icon"]'
  );

  if (!link) {
    link = document.createElement('link');
    document.head.appendChild(link);
  }

  link.rel = 'icon';
  link.type = svgElement ? 'image/svg+xml' : 'image/x-icon';
  link.href = href;
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
