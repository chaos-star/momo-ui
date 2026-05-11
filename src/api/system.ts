import { authRequest, publicRequest } from './request';
import { SystemConfigJson, SystemConfigProfile } from '@/utils/systemConfig';

export interface CaptchaResult {
  captchaKey: string;
  captchaImage: string;
}

export interface ImageUploadResult {
  scene: string;
  objectPath: string;
  url: string;
  fileName: string;
  size?: number;
  contentType?: string;
}

export function getCaptcha() {
  return publicRequest<CaptchaResult>({
    url: '/api/system/captcha',
    method: 'GET',
  });
}

export function getPublicSystemConfig() {
  return publicRequest<SystemConfigProfile>({
    url: '/api/system/setting/public',
    method: 'GET',
    skipErrorMessage: true,
  });
}

export function getManageSystemConfig() {
  return authRequest<SystemConfigProfile>({
    url: '/api/system/setting/manage',
    method: 'GET',
  });
}

export function updateManageSystemConfig(config: SystemConfigJson) {
  return authRequest<SystemConfigProfile, { config: SystemConfigJson }>({
    url: '/api/system/setting/manage',
    method: 'PUT',
    data: { config },
  });
}

export function uploadSystemImage(scene: string, file: File) {
  const formData = new FormData();
  formData.append('scene', scene);
  formData.append('file', file);

  return authRequest<ImageUploadResult, FormData>({
    url: '/api/system/upload/image',
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
