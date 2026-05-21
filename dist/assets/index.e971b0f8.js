import { r as c, u as l, j as r, F as n, t as p } from './vendor.44459b16.js';
import { b as P } from './index.97399a5e.js';
const h = (e) => {
  const { backup: i, requiredPermissions: t, oneOfPerm: o } = e,
    [u, f] = c.exports.useState(!1),
    a = l((s) => s.userInfo);
  return (
    c.exports.useEffect(() => {
      const s = P({ requiredPermissions: t, oneOfPerm: o }, a.permissions);
      f(s);
    }, [t, o, a.permissions]),
    u ? r(n, { children: m(e.children) }) : i ? r(n, { children: m(i) }) : null
  );
};
function m(e) {
  return p.isValidElement(e) ? e : r(n, { children: e });
}
var j = h;
export { j as P };
