import { r as m } from './vendor.3821b0be.js';
function b(c, t, s, p, a, l) {
  m.exports.useLayoutEffect(() => {
    const e = c.current;
    if (!e) return;
    const i = () => {
      const r = e.querySelector('.arco-pagination-jumper-input');
      r &&
        (r.setAttribute('id', `${t}-jumper`),
        r.setAttribute('name', `${t}-jumper`)),
        e
          .querySelectorAll('.arco-pagination input.arco-select-view-input')
          .forEach((n, u) => {
            n.setAttribute('id', `${t}-page-size-input-${u}`),
              n.setAttribute('name', `${t}-page-size-input-${u}`);
          });
    };
    i();
    const o = new MutationObserver(i);
    return o.observe(e, { subtree: !0, childList: !0 }), () => o.disconnect();
  }, [t, s, p, a, l]);
}
export { b as u };
