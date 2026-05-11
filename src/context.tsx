import { createContext } from 'react';
import { UserThemeConfig } from './utils/userTheme';
import { SystemConfigProfile } from './utils/systemConfig';

export const GlobalContext = createContext<{
  lang?: string;
  setLang?: (value: string) => void;
  theme?: string;
  setTheme?: (value: string) => void;
  applyUserTheme?: (value: UserThemeConfig) => void;
  systemProfile?: SystemConfigProfile;
  setSystemProfile?: (value: SystemConfigProfile) => void;
  refreshSystemProfile?: () => Promise<SystemConfigProfile | undefined>;
}>({});
