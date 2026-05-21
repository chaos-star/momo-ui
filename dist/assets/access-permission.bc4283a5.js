import {
  p as r,
  d as t,
  g as a,
  a as s,
  b as n,
} from './access-control.a5391fe6.js';
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
function y(e) {
  return s('/api/system/menus/move', e);
}
function P(e, i) {
  return s('/api/system/menus/active-status', { id: e, activeStatus: i });
}
function d(e) {
  return t('/api/system/menus/manage', { id: e });
}
function A(e) {
  return a('/api/system/page-elements/list', e);
}
function h(e) {
  return n('/api/system/page-elements/manage', e);
}
function v(e) {
  return s('/api/system/page-elements/manage', e);
}
function M(e, i) {
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
function R(e) {
  return n('/api/system/apis/manage', e);
}
function b(e) {
  return s('/api/system/apis/manage', e);
}
function j(e) {
  return t('/api/system/apis/manage', { id: e });
}
function x(e) {
  return r('/api/system/api-groups/list', e);
}
function O() {
  return a('/api/system/api-groups/options');
}
function S(e) {
  return n('/api/system/api-groups/manage', e);
}
function k(e) {
  return s('/api/system/api-groups/manage', e);
}
function q(e) {
  return t('/api/system/api-groups/manage', { id: e });
}
function w(e) {
  return a('/api/system/permissions/options', e);
}
function z(e) {
  return a('/api/system/permission-relations/list', e);
}
function B(e) {
  return n('/api/system/permission-relations/manage', e);
}
function C(e) {
  return s('/api/system/permission-relations/manage', e);
}
function L(e) {
  return t('/api/system/permission-relations/manage', { id: e });
}
export {
  c as A,
  o as B,
  m as C,
  G as a,
  O as b,
  S as c,
  q as d,
  j as e,
  x as f,
  b as g,
  R as h,
  A as i,
  d as j,
  g as k,
  f as l,
  y as m,
  l as n,
  h as o,
  v as p,
  E as q,
  M as r,
  w as s,
  P as t,
  k as u,
  z as v,
  L as w,
  C as x,
  B as y,
  p as z,
};
