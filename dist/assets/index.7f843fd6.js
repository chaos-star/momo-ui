import { r as a, u as f, j as s, s as p } from './vendor.3821b0be.js';
import { b as l } from './index.77883a3f.js';
const x = (e) => {
  const { backup: t, requiredPermissions: n, oneOfPerm: i } = e,
    [c, u] = a.exports.useState(!1),
    o = f((r) => r.userInfo);
  return (
    a.exports.useEffect(() => {
      const r = l({ requiredPermissions: n, oneOfPerm: i }, o.permissions);
      u(r);
    }, [n, i, o.permissions]),
    c
      ? s.exports.jsxDEV(
          s.exports.Fragment,
          { children: m(e.children) },
          void 0,
          !1
        )
      : t
      ? s.exports.jsxDEV(s.exports.Fragment, { children: m(t) }, void 0, !1)
      : null
  );
};
function m(e) {
  return p.isValidElement(e)
    ? e
    : s.exports.jsxDEV(s.exports.Fragment, { children: e }, void 0, !1);
}
var h = x;
export { h as P };
