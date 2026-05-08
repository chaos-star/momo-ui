import { publicRequest } from './request';

export interface CaptchaResult {
  captchaKey: string;
  captchaImage: string;
}

export function getCaptcha() {
  return publicRequest<CaptchaResult>({
    url: '/api/system/captcha',
    method: 'GET',
  });
}
