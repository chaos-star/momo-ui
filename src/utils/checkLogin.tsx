import { ACCESS_TOKEN_KEY } from '@/api/request';

export default function checkLogin() {
  return !!localStorage.getItem(ACCESS_TOKEN_KEY);
}
