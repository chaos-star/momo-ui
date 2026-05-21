import {
  g as s,
  p as n,
  b as t,
  a as r,
  d as a,
} from './access-control.86021a9b.js';
function o(e) {
  return n('/api/system/roles/list', e);
}
function m(e) {
  return s('/api/system/roles/manage', { id: e });
}
function u(e) {
  return t('/api/system/roles/manage', e);
}
function c(e) {
  return r('/api/system/roles/manage', e);
}
function p(e) {
  return a('/api/system/roles/manage', { id: e });
}
function l(e) {
  return t('/api/system/roles/permissions', e);
}
function f() {
  return s('/api/system/permissions/grant-tree');
}
function g() {
  return s('/api/system/permissions/grant-tree/menus');
}
function y(e) {
  return s('/api/system/permissions/grant-children', { parentPermissionId: e });
}
export {
  y as a,
  m as b,
  o as c,
  u as d,
  p as e,
  g as f,
  f as g,
  l as s,
  c as u,
};
