function u(e) {
  return (e || '').trim().toUpperCase();
}
function a(e, t, n) {
  var f;
  return (f = e == null ? void 0 : e[t]) == null ? void 0 : f[n];
}
function d(e) {
  return (
    u(
      (e == null ? void 0 : e.displayEffect) || (e == null ? void 0 : e.effect)
    ) === 'HIDDEN'
  );
}
function E(e) {
  return (
    u(
      (e == null ? void 0 : e.editEffect) || (e == null ? void 0 : e.effect)
    ) === 'READONLY'
  );
}
function $(e) {
  return (
    u(
      (e == null ? void 0 : e.sortEffect) || (e == null ? void 0 : e.effect)
    ) !== 'NON_SORTABLE'
  );
}
function h(e, t) {
  if (e == null || e === '') return '\u2014';
  const n = String(e);
  if (
    u(
      (t == null ? void 0 : t.displayEffect) || (t == null ? void 0 : t.effect)
    ) !== 'MASKED'
  )
    return n;
  const r = u(t == null ? void 0 : t.maskType);
  return r === 'EMAIL'
    ? n.replace(/^(.).+(@.+)$/, '$1***$2')
    : r === 'MOBILE' || /^1\d{10}$/.test(n)
    ? n.replace(/^(\d{3})\d+(\d{4})$/, '$1****$2')
    : n.length <= 2
    ? '*'.repeat(n.length)
    : `${n.slice(0, 1)}${'*'.repeat(Math.max(3, n.length - 2))}${n.slice(-1)}`;
}
function m(e) {
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
function g(e) {
  return e ? new Date(e).toLocaleString() : '\u2014';
}
function F(e = []) {
  const t = [],
    n = (f) => {
      f.forEach((r) => {
        var s;
        r.permissionId && t.push(r.permissionId),
          ((s = r.children) == null ? void 0 : s.length) && n(r.children);
      });
    };
  return n(e), t;
}
export { F as a, $ as b, E as c, g as f, a as g, d as i, h as m, m as s };
