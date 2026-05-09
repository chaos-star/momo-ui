import { authRequest } from './request';
import { UserThemeConfig, UserThemePatchPayload } from '@/utils/userTheme';

export interface UserThemeResult {
  config: UserThemeConfig;
}

export function getUserTheme() {
  return authRequest<UserThemeResult>({
    url: '/api/system/user-theme',
    method: 'GET',
  });
}

export function patchUserThemeItem(data: UserThemePatchPayload) {
  return authRequest<UserThemeResult, UserThemePatchPayload>({
    url: '/api/system/user-theme',
    method: 'PATCH',
    data,
  });
}
