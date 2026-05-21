var E = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty,
  x = Object.prototype.propertyIsEnumerable;
var h = (e, r, t) =>
    r in e
      ? E(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  c = (e, r) => {
    for (var t in r || (r = {})) v.call(r, t) && h(e, t, r[t]);
    if (i) for (var t of i(r)) x.call(r, t) && h(e, t, r[t]);
    return e;
  };
var A = (e, r) => {
  var t = {};
  for (var n in e) v.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && i)
    for (var n of i(e)) r.indexOf(n) < 0 && x.call(e, n) && (t[n] = e[n]);
  return t;
};
import { r as I, s as j, j as N } from './vendor.3821b0be.js';
var L =
  '/Users/zhangjie/Space/MoMoGpt/marketing-web/src/pages/system/tenants/ArcoSelectInputIds.tsx';
function M(e) {
  return `${e}-view-input-main`;
}
function q(e) {
  const d = e,
    { baseId: r, ariaLabelledBy: t, children: n } = d,
    S = A(d, ['baseId', 'ariaLabelledBy', 'children']),
    l = I.exports.useRef(null),
    u = j.Children.only(n);
  return (
    I.exports.useLayoutEffect(() => {
      const o = l.current;
      if (!o) return;
      const p = () => {
        var m, f;
        const a = Array.from(
            o.querySelectorAll('input.arco-select-view-input')
          ),
          w =
            (m = a.find((s) => s.getAttribute('aria-hidden') !== 'true')) !=
            null
              ? m
              : a[0];
        a.forEach((s, g) => {
          const y = s === w ? M(r) : `${r}-view-input-aux-${g}`;
          s.setAttribute('id', y), s.setAttribute('name', y);
        }),
          t &&
            ((f = o.querySelector('[role="combobox"]')) == null ||
              f.setAttribute('aria-labelledby', t));
      };
      p();
      const b = new MutationObserver(p);
      return b.observe(o, { subtree: !0, childList: !0 }), () => b.disconnect();
    }, [r, t]),
    N.exports.jsxDEV(
      'div',
      {
        ref: l,
        style: { display: 'contents' },
        children: j.cloneElement(u, c(c({}, u.props), S)),
      },
      void 0,
      !1,
      { fileName: L, lineNumber: 69, columnNumber: 5 },
      this
    )
  );
}
export { q as A, M as a };
