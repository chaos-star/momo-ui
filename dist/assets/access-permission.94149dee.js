import {
  p as n,
  d as a,
  g as i,
  a as s,
  b as t,
} from './access-control.111ee6c1.js';
function p(e) {
  return n('/api/system/permissions/list', e);
}
function o(e) {
  return t('/api/system/permissions/manage', e);
}
function m(e) {
  return s('/api/system/permissions/manage', e);
}
function c(e) {
  return a('/api/system/permissions/manage', { id: e });
}
function g() {
  return i('/api/system/menus/tree');
}
function f(e) {
  return t('/api/system/menus/manage', e);
}
function y(e) {
  return s('/api/system/menus/manage', e);
}
function d(e, r) {
  return s('/api/system/menus/active-status', { id: e, activeStatus: r });
}
function l(e) {
  return a('/api/system/menus/manage', { id: e });
}
function A(e) {
  return n('/api/system/apis/list', e);
}
function P(e) {
  return t('/api/system/apis/manage', e);
}
function h(e) {
  return s('/api/system/apis/manage', e);
}
function G(e) {
  return a('/api/system/apis/manage', { id: e });
}
function M(e) {
  return n('/api/system/api-groups/list', e);
}
function b() {
  return i('/api/system/api-groups/options');
}
function j(e) {
  return t('/api/system/api-groups/manage', e);
}
function v(e) {
  return s('/api/system/api-groups/manage', e);
}
function k(e) {
  return a('/api/system/api-groups/manage', { id: e });
}
export {
  A as a,
  b,
  j as c,
  k as d,
  G as e,
  M as f,
  h as g,
  P as h,
  l as i,
  g as j,
  f as k,
  y as l,
  p as m,
  c as n,
  m as o,
  o as p,
  d as t,
  v as u,
};
