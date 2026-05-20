import { a } from './index.2cec1040.js';
function n(s) {
  return a({
    url: '/api/system/permission-boundary-packages/list',
    method: 'GET',
    params: s,
  });
}
function r() {
  return a({
    url: '/api/system/permission-boundary-packages/options',
    method: 'GET',
  });
}
function i(s) {
  return a({
    url: '/api/system/permission-boundary-packages/manage',
    method: 'POST',
    data: s,
  });
}
function o(s) {
  return a({
    url: '/api/system/permission-boundary-packages/manage',
    method: 'PUT',
    data: s,
  });
}
function t(s) {
  return a({
    url: '/api/system/permission-boundary-packages/manage',
    method: 'DELETE',
    params: { id: s },
  });
}
function u(s) {
  return a({
    url: '/api/system/permission-boundary-packages/active-status',
    method: 'PATCH',
    data: s,
  });
}
function m(s) {
  return a({
    url: '/api/system/permission-boundary-packages/permissions',
    method: 'GET',
    params: { packageId: s },
  });
}
function p(s) {
  return a({
    url: '/api/system/permission-boundary-packages/permissions',
    method: 'POST',
    data: s,
  });
}
export { n as a, o as b, i as c, t as d, r as e, m as f, p as s, u };
