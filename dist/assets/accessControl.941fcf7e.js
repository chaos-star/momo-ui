function u(e) {
  return (e || '').trim().toUpperCase();
}
function i(e, r, t) {
  var f;
  return (f = e == null ? void 0 : e[r]) == null ? void 0 : f[t];
}
function m(e) {
  return (
    u(
      (e == null ? void 0 : e.displayEffect) || (e == null ? void 0 : e.effect)
    ) === 'HIDDEN'
  );
}
function h(e) {
  return (
    u(
      (e == null ? void 0 : e.editEffect) || (e == null ? void 0 : e.effect)
    ) === 'READONLY'
  );
}
function E(e) {
  return (
    u(
      (e == null ? void 0 : e.sortEffect) || (e == null ? void 0 : e.effect)
    ) !== 'NON_SORTABLE'
  );
}
function I(e, r) {
  if (e == null || e === '') return '\u2014';
  const t = String(e);
  if (
    u(
      (r == null ? void 0 : r.displayEffect) || (r == null ? void 0 : r.effect)
    ) !== 'MASKED'
  )
    return t;
  const s = u(r == null ? void 0 : r.maskType);
  return s === 'EMAIL'
    ? t.replace(/^(.).+(@.+)$/, '$1***$2')
    : s === 'MOBILE' || /^1\d{10}$/.test(t)
    ? t.replace(/^(\d{3})\d+(\d{4})$/, '$1****$2')
    : t.length <= 2
    ? '*'.repeat(t.length)
    : `${t.slice(0, 1)}${'*'.repeat(Math.max(3, t.length - 2))}${t.slice(-1)}`;
}
function g(e) {
  return e === 1
    ? '\u542F\u7528'
    : e === 2
    ? '\u7981\u7528'
    : e === 3
    ? '\u8FC7\u671F'
    : e === 4
    ? '\u9501\u5B9A'
    : '\u672A\u77E5';
}
function k(e) {
  return e ? new Date(e).toLocaleString() : '\u2014';
}
function A(e = [], r) {
  const t = new Set(r),
    f = (s) => {
      s.forEach((n) => {
        const d =
          n.permissionId != null && n.permissionId > 0
            ? String(n.permissionId)
            : null;
        d &&
          t.has(d) &&
          (n.children || []).forEach((a) => {
            a.permissionId &&
              a.autoGrant === 1 &&
              t.add(String(a.permissionId));
          }),
          f(n.children || []);
      });
    };
  return f(e), Array.from(t);
}
function S(e = [], r) {
  const t = new Set(),
    f = (s) => {
      s.forEach((n) => {
        n.permissionId &&
          n.permissionId > 0 &&
          n.checkable !== !1 &&
          n.nodeType !== 'CATALOG' &&
          n.nodeType !== 'GROUP' &&
          t.add(String(n.permissionId)),
          f(n.children || []);
      });
    };
  return f(e), r.filter((s) => t.has(s));
}
export {
  E as a,
  h as b,
  S as c,
  A as e,
  k as f,
  i as g,
  m as i,
  I as m,
  g as s,
};
