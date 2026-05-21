var L = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty,
  A = Object.prototype.propertyIsEnumerable;
var h = (e, r, t) =>
    r in e
      ? L(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  a = (e, r) => {
    for (var t in r || (r = {})) v.call(r, t) && h(e, t, r[t]);
    if (s) for (var t of s(r)) A.call(r, t) && h(e, t, r[t]);
    return e;
  };
var x = (e, r) => {
  var t = {};
  for (var n in e) v.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && s)
    for (var n of s(e)) r.indexOf(n) < 0 && A.call(e, n) && (t[n] = e[n]);
  return t;
};
import { r as I, t as j, j as $ } from './vendor.44459b16.js';
function q(e) {
  return `${e}-view-input-main`;
}
function g(e) {
  const d = e,
    { baseId: r, ariaLabelledBy: t, children: n } = d,
    w = x(d, ['baseId', 'ariaLabelledBy', 'children']),
    u = I.exports.useRef(null),
    l = j.Children.only(n);
  return (
    I.exports.useLayoutEffect(() => {
      const i = u.current;
      if (!i) return;
      const b = () => {
        var f, y;
        const c = Array.from(
            i.querySelectorAll('input.arco-select-view-input')
          ),
          S =
            (f = c.find((o) => o.getAttribute('aria-hidden') !== 'true')) !=
            null
              ? f
              : c[0];
        c.forEach((o, E) => {
          const m = o === S ? q(r) : `${r}-view-input-aux-${E}`;
          o.setAttribute('id', m), o.setAttribute('name', m);
        }),
          t &&
            ((y = i.querySelector('[role="combobox"]')) == null ||
              y.setAttribute('aria-labelledby', t));
      };
      b();
      const p = new MutationObserver(b);
      return p.observe(i, { subtree: !0, childList: !0 }), () => p.disconnect();
    }, [r, t]),
    $('div', {
      ref: u,
      style: { display: 'contents' },
      children: j.cloneElement(l, a(a({}, l.props), w)),
    })
  );
}
export { g as A, q as a };
