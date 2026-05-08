import { publicRequest } from './request';

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

export interface LoginResult {
  profile: UserProfile;
  accessToken: string;
  expiresIn: number;
  defaultTenant?: Record<string, unknown>;
}

export function login(data: LoginParams) {
  return publicRequest<LoginResult, LoginParams>({
    url: '/api/system/users/login',
    method: 'POST',
    data,
  });
}
