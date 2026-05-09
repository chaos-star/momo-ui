import { authRequest, publicRequest } from './request';

export interface LoginParams {
  account?: string;
  password?: string;
  captchaKey?: string;
  captchaCode?: string;
  loginIp?: string;
}

export interface UserProfile {
  id?: string | number;
  account?: string;
  name?: string;
  nickname?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  organization?: string;
  [key: string]: unknown;
}

export interface DefaultTenant {
  id?: number;
  tenantCode?: string;
  tenantName?: string;
  tenantType?: string;
  tenantZone?: string;
  activeStatus?: number;
  config?: string;
  expireAt?: number;
  status?: number;
  operator?: number;
  createdAt?: number;
  updatedAt?: number;
}

export interface LoginResult {
  profile: UserProfile;
  accessToken: string;
  expiresIn: number;
  defaultTenant?: DefaultTenant;
  theme_setting?: unknown;
}

export function login(data: LoginParams) {
  return publicRequest<LoginResult, LoginParams>({
    url: '/api/system/users/login',
    method: 'POST',
    data,
  });
}

export function logout() {
  return authRequest<Record<string, never>>({
    url: '/api/system/users/logout',
    method: 'POST',
  });
}
