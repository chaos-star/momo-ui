import { createContext } from 'react';
import { UserThemeConfig } from './utils/userTheme';

export const GlobalContext = createContext<{
  lang?: string;
  setLang?: (value: string) => void;
  theme?: string;
  setTheme?: (value: string) => void;
  applyUserTheme?: (value: UserThemeConfig) => void;
}>({});
