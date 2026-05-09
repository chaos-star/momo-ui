import defaultSettings from '@/settings.json';
import { ACCEPT_LANGUAGE_KEY, DEFAULT_ACCEPT_LANGUAGE } from '@/api/request';

export const USER_THEME_KEY = 'user-theme';

export type ThemeMode = 'light' | 'dark';
export type Lang = 'zh-CN' | 'en-US' | 'es-ES';

export interface UserThemeConfig {
  settings: typeof defaultSettings;
  theme: ThemeMode;
  lang: Lang;
}

export interface UserThemePatchPayload {
  path:
    | 'settings.colorWeek'
    | 'settings.navbar'
    | 'settings.menu'
    | 'settings.topMenu'
    | 'settings.tabBar'
    | 'settings.footer'
    | 'settings.themeColor'
    | 'settings.menuWidth'
    | 'theme'
    | 'lang';
  value: unknown;
}

export function getDefaultUserTheme(): UserThemeConfig {
  return {
    settings: { ...defaultSettings },
    theme: 'light',
    lang: DEFAULT_ACCEPT_LANGUAGE as Lang,
  };
}

function isObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function normalizeUserTheme(value?: unknown): UserThemeConfig {
  const defaults = getDefaultUserTheme();
  if (!isObject(value)) {
    return defaults;
  }

  const settings = isObject(value.settings)
    ? { ...defaults.settings, ...value.settings }
    : defaults.settings;
  const theme =
    value.theme === 'dark' || value.theme === 'light'
      ? value.theme
      : defaults.theme;
  const lang =
    value.lang === 'zh-CN' || value.lang === 'en-US' || value.lang === 'es-ES'
      ? value.lang
      : defaults.lang;

  return { settings, theme, lang };
}

export function readUserTheme(): UserThemeConfig {
  const raw = localStorage.getItem(USER_THEME_KEY);
  if (!raw) {
    return getDefaultUserTheme();
  }
  try {
    return normalizeUserTheme(JSON.parse(raw));
  } catch {
    return getDefaultUserTheme();
  }
}

export function writeUserTheme(value: unknown) {
  const theme = normalizeUserTheme(value);
  localStorage.setItem(USER_THEME_KEY, JSON.stringify(theme));
  localStorage.setItem('arco-theme', theme.theme);
  localStorage.setItem('arco-lang', theme.lang);
  localStorage.setItem(ACCEPT_LANGUAGE_KEY, theme.lang);
  return theme;
}

export function patchLocalUserTheme(payload: UserThemePatchPayload) {
  const theme = readUserTheme();
  if (payload.path.startsWith('settings.')) {
    const key = payload.path.replace(
      'settings.',
      ''
    ) as keyof typeof defaultSettings;
    theme.settings = {
      ...theme.settings,
      [key]: payload.value,
    };
  } else if (payload.path === 'theme') {
    theme.theme = payload.value as ThemeMode;
  } else if (payload.path === 'lang') {
    theme.lang = payload.value as Lang;
  }
  return writeUserTheme(theme);
}
