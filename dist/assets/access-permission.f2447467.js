import {
  p as r,
  d as t,
  g as a,
  a as s,
  b as n,
} from './access-control.9e664147.js';
function p(e) {
  return r('/api/system/permissions/list', e);
}
function m(e) {
  return n('/api/system/permissions/manage', e);
}
function o(e) {
  return s('/api/system/permissions/manage', e);
}
function c(e) {
  return t('/api/system/permissions/manage', { id: e });
}
function g() {
  return a('/api/system/menus/tree');
}
function f(e) {
  return n('/api/system/menus/manage', e);
}
function l(e) {
  return s('/api/system/menus/manage', e);
}
function y(e, i) {
  return s('/api/system/menus/active-status', { id: e, activeStatus: i });
}
function P(e) {
  return t('/api/system/menus/manage', { id: e });
}
function d(e) {
  return a('/api/system/page-elements/list', e);
}
function A(e) {
  return n('/api/system/page-elements/manage', e);
}
function h(e) {
  return s('/api/system/page-elements/manage', e);
}
function v(e, i) {
  return s('/api/system/page-elements/active-status', {
    id: e,
    activeStatus: i,
  });
}
function E(e) {
  return t('/api/system/page-elements/manage', { id: e });
}
function G(e) {
  return r('/api/system/apis/list', e);
}
function M(e) {
  return n('/api/system/apis/manage', e);
}
function R(e) {
  return s('/api/system/apis/manage', e);
}
function b(e) {
  return t('/api/system/apis/manage', { id: e });
}
function j(e) {
  return r('/api/system/api-groups/list', e);
}
function x() {
  return a('/api/system/api-groups/options');
}
function O(e) {
  return n('/api/system/api-groups/manage', e);
}
function S(e) {
  return s('/api/system/api-groups/manage', e);
}
function k(e) {
  return t('/api/system/api-groups/manage', { id: e });
}
function q(e) {
  return a('/api/system/permissions/options', e);
}
function w(e) {
  return a('/api/system/permission-relations/list', e);
}
function z(e) {
  return n('/api/system/permission-relations/manage', e);
}
function B(e) {
  return s('/api/system/permission-relations/manage', e);
}
function L(e) {
  return t('/api/system/permission-relations/manage', { id: e });
}
export {
  o as A,
  m as B,
  G as a,
  x as b,
  O as c,
  k as d,
  b as e,
  j as f,
  R as g,
  M as h,
  d as i,
  P as j,
  g as k,
  f as l,
  l as m,
  A as n,
  h as o,
  E as p,
  v as q,
  q as r,
  w as s,
  y as t,
  S as u,
  L as v,
  B as w,
  z as x,
  p as y,
  c as z,
};
