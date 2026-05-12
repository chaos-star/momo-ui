import { type RefObject, useLayoutEffect } from 'react';

/**
 * Arco Pagination page jumper and page-size Select omit id/name on inner inputs.
 * Assigns stable identifiers under `containerRef` for audits / autofill hints.
 */
export function useArcoPaginationFieldIds(
  containerRef: RefObject<HTMLElement | null>,
  baseId: string,
  listCurrent: number,
  listPageSize: number,
  listTotal: number,
  loading: boolean
): void {
  useLayoutEffect(() => {
    const root = containerRef.current;
    if (!root) {
      return undefined;
    }
    const apply = () => {
      const jumper = root.querySelector<HTMLInputElement>(
        '.arco-pagination-jumper-input'
      );
      if (jumper) {
        jumper.setAttribute('id', `${baseId}-jumper`);
        jumper.setAttribute('name', `${baseId}-jumper`);
      }
      root
        .querySelectorAll<HTMLInputElement>(
          '.arco-pagination input.arco-select-view-input'
        )
        .forEach((input, i) => {
          input.setAttribute('id', `${baseId}-page-size-input-${i}`);
          input.setAttribute('name', `${baseId}-page-size-input-${i}`);
        });
    };
    apply();
    const ob = new MutationObserver(apply);
    ob.observe(root, { subtree: true, childList: true });
    return () => ob.disconnect();
    // containerRef is a stable RefObject; we only read .current inside the effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- containerRef omitted (stable)
  }, [baseId, listCurrent, listPageSize, listTotal, loading]);
}
