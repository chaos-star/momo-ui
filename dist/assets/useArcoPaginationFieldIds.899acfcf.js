import { r as p, u as d, j as i, s as j } from './vendor.f50a67ab.js';
import { b as v } from './index.1708e48b.js';
const h = (e) => {
  const { backup: t, requiredPermissions: n, oneOfPerm: o } = e,
    [a, u] = p.exports.useState(!1),
    r = d((s) => s.userInfo);
  return (
    p.exports.useEffect(() => {
      const s = v({ requiredPermissions: n, oneOfPerm: o }, r.permissions);
      u(s);
    }, [n, o, r.permissions]),
    a
      ? i.exports.jsxDEV(
          i.exports.Fragment,
          { children: x(e.children) },
          void 0,
          !1
        )
      : t
      ? i.exports.jsxDEV(i.exports.Fragment, { children: x(t) }, void 0, !1)
      : null
  );
};
function x(e) {
  return j.isValidElement(e)
    ? e
    : i.exports.jsxDEV(i.exports.Fragment, { children: e }, void 0, !1);
}
var g = h;
function E(e, t, n, o, a, u) {
  p.exports.useLayoutEffect(() => {
    const r = e.current;
    if (!r) return;
    const s = () => {
      const c = r.querySelector('.arco-pagination-jumper-input');
      c &&
        (c.setAttribute('id', `${t}-jumper`),
        c.setAttribute('name', `${t}-jumper`)),
        r
          .querySelectorAll('.arco-pagination input.arco-select-view-input')
          .forEach((f, l) => {
            f.setAttribute('id', `${t}-page-size-input-${l}`),
              f.setAttribute('name', `${t}-page-size-input-${l}`);
          });
    };
    s();
    const m = new MutationObserver(s);
    return m.observe(r, { subtree: !0, childList: !0 }), () => m.disconnect();
  }, [t, n, o, a, u]);
}
export { g as P, E as u };
