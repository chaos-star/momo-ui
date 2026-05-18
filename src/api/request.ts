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

/** 后端 LogicException：未登录 / Token 无效 */
const API_ERROR_UNAUTHORIZED = 100001;
/** 后端 LogicException：无接口或菜单访问权限 */
const API_ERROR_FORBIDDEN = 100060;

function getErrorMessage(response?: ApiResponse, fallback = '请求失败') {
  return response?.message || fallback;
}

let isRedirectingToLogin = false;

function isForbiddenResponse(response?: AxiosResponse<ApiResponse>) {
  const code = response?.data?.code;
  return (
    response?.status === 403 ||
    code === API_ERROR_FORBIDDEN ||
    code === 100003 ||
    code === 100002
  );
}

function isUnauthorizedResponse(response?: AxiosResponse<ApiResponse>) {
  if (isForbiddenResponse(response)) {
    return false;
  }
  const code = response?.data?.code;
  return (
    response?.status === 401 || code === 401 || code === API_ERROR_UNAUTHORIZED
  );
}

function showForbiddenMessage(response?: AxiosResponse<ApiResponse>) {
  Message.warning(getErrorMessage(response?.data, '无权限访问该资源'));
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
    if (isForbiddenResponse(error.response)) {
      return Promise.reject(error);
    }
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

  if (isForbiddenResponse(response)) {
    if (!config?.skipErrorMessage) {
      showForbiddenMessage(response);
    }
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
  if (isForbiddenResponse(error.response)) {
    if (!config?.skipErrorMessage) {
      showForbiddenMessage(error.response);
    }
    return Promise.reject(error);
  }

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
