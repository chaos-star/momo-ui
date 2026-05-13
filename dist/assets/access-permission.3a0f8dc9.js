import {
  p as n,
  d as a,
  a as s,
  b as t,
  g as r,
} from './access-control.f393622f.js';
function m(e) {
  return n('/api/system/permissions/list', e);
}
function p(e) {
  return t('/api/system/permissions/manage', e);
}
function o(e) {
  return s('/api/system/permissions/manage', e);
}
function c(e) {
  return a('/api/system/permissions/manage', { id: e });
}
function f() {
  return r('/api/system/menus/tree');
}
function g(e) {
  return t('/api/system/menus/manage', e);
}
function y(e) {
  return s('/api/system/menus/manage', e);
}
function d(e, i) {
  return s('/api/system/menus/active-status', { id: e, activeStatus: i });
}
function l(e) {
  return a('/api/system/menus/manage', { id: e });
}
function P(e) {
  return n('/api/system/apis/list', e);
}
function A(e) {
  return t('/api/system/apis/manage', e);
}
function M(e) {
  return s('/api/system/apis/manage', e);
}
function h(e) {
  return a('/api/system/apis/manage', { id: e });
}
export {
  l as a,
  f as b,
  A as c,
  h as d,
  g as e,
  P as f,
  y as g,
  m as h,
  c as i,
  o as j,
  p as k,
  d as t,
  M as u,
};
