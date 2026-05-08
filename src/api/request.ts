import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { Message } from '@arco-design/web-react';
import { getTenantCodeFromPathname } from '@/utils/tenant';

export const ACCESS_TOKEN_KEY = 'X-Access-Token';
export const ORGANIZATION_KEY = 'X-Organization';
export const ACCEPT_LANGUAGE_KEY = 'Accept-Language';
export const DEFAULT_ACCEPT_LANGUAGE = 'zh-CN';

export interface PageData<T = unknown> {
  total: number;
  page: number;
  pageSize: number;
  list: T[];
}

export interface ListData<T = unknown> {
  list: T[];
}

export type DetailData<
  T extends Record<string, unknown> = Record<string, unknown>
> = T;

export interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

export interface ApiRequestConfig<D = unknown> extends AxiosRequestConfig<D> {
  skipErrorMessage?: boolean;
}

export type AuthHeaders = {
  [ACCESS_TOKEN_KEY]: string;
  [ORGANIZATION_KEY]: string;
};

export type CommonHeaders = {
  [ACCEPT_LANGUAGE_KEY]: string;
};

function getAccessToken() {
  return (
    localStorage.getItem(ACCESS_TOKEN_KEY) ||
    localStorage.getItem('accessToken') ||
    ''
  );
}

function getOrganization() {
  return (
    getTenantCodeFromPathname() ||
    localStorage.getItem(ORGANIZATION_KEY) ||
    localStorage.getItem('organization') ||
    ''
  );
}

function getAcceptLanguage() {
  return localStorage.getItem(ACCEPT_LANGUAGE_KEY) || DEFAULT_ACCEPT_LANGUAGE;
}

function isApiSuccess(code: number) {
  return code === 200;
}

function getErrorMessage(response?: ApiResponse, fallback = '请求失败') {
  return response?.message || fallback;
}

let isRedirectingToLogin = false;

function isUnauthorizedResponse(response?: AxiosResponse<ApiResponse>) {
  return response?.status === 401 || response?.data?.code === 401;
}

function redirectToLogin() {
  if (isRedirectingToLogin) {
    return;
  }

  isRedirectingToLogin = true;
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.setItem('userStatus', 'logout');

  const { pathname } = window.location;
  const isLoginPage = pathname === '/login' || pathname.endsWith('/login');

  if (!isLoginPage) {
    window.location.replace('/login');
  } else {
    isRedirectingToLogin = false;
  }
}

function handleUnauthorized(config?: ApiRequestConfig) {
  if (!config?.skipErrorMessage) {
    Message.error('登录状态已失效，请重新登录');
  }

  redirectToLogin();
}

axios.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    if (isUnauthorizedResponse(response)) {
      handleUnauthorized();
    }

    return response;
  },
  (error: AxiosError<ApiResponse>) => {
    if (isUnauthorizedResponse(error.response)) {
      handleUnauthorized();
    }

    return Promise.reject(error);
  }
);

function handleResponse<T>(
  response: AxiosResponse<ApiResponse<T>>,
  config?: ApiRequestConfig
): T | Promise<never> {
  if (isUnauthorizedResponse(response)) {
    handleUnauthorized(config);
    return Promise.reject(response.data);
  }

  if (response.status === 200 && isApiSuccess(response.data.code)) {
    return response.data.data;
  }

  if (!config?.skipErrorMessage) {
    Message.error(getErrorMessage(response.data));
  }

  return Promise.reject(response.data);
}

function handleError(
  error: AxiosError<ApiResponse>,
  config?: ApiRequestConfig
) {
  if (isUnauthorizedResponse(error.response)) {
    handleUnauthorized(config);
    return Promise.reject(error);
  }

  if (!config?.skipErrorMessage) {
    const message =
      error.response?.data?.message ||
      (error.response?.status
        ? `请求失败，状态码：${error.response.status}`
        : error.message || '网络异常，请稍后重试');
    Message.error(message);
  }

  return Promise.reject(error);
}

function createService(withAuth: boolean): AxiosInstance {
  const service = axios.create({
    baseURL:
      typeof import.meta.env.VITE_API_BASE_URL === 'string'
        ? import.meta.env.VITE_API_BASE_URL
        : '',
    timeout: 30000,
    validateStatus: () => true,
  });

  service.interceptors.request.use((config: ApiRequestConfig) => {
    const headers = {
      [ACCEPT_LANGUAGE_KEY]: getAcceptLanguage(),
      ...config.headers,
    };

    if (withAuth) {
      const accessToken = getAccessToken();
      const organization = getOrganization();

      config.headers = {
        ...headers,
        [ACCESS_TOKEN_KEY]: accessToken,
        [ORGANIZATION_KEY]: organization,
      };
    } else {
      config.headers = headers;
    }

    return config;
  });

  return service;
}

function createRequester(service: AxiosInstance) {
  return async function request<T = unknown, D = unknown>(
    config: ApiRequestConfig<D>
  ) {
    try {
      const response = await service.request<ApiResponse<T>>(config);
      return handleResponse<T>(response, config);
    } catch (error) {
      return handleError(error as AxiosError<ApiResponse>, config);
    }
  };
}

export const authRequest = createRequester(createService(true));
export const publicRequest = createRequester(createService(false));

export const request = authRequest;

export default request;
