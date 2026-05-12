import React, { useLayoutEffect, useRef } from 'react';

/** Primary Select inner input id; use with `<label htmlFor={…}>` for strict a11y tools. */
export function arcoSelectPrimaryInputId(baseId: string): string {
  return `${baseId}-view-input-main`;
}

type Props = {
  /** Unique prefix per field, e.g. `tenant-search-businessType` */
  baseId: string;
  /**
   * Optional id of the visible `<label>` (or legend) for `role="combobox"` aria-labelledby.
   * Use together with native `<label id={this} htmlFor={arcoSelectPrimaryInputId(baseId)}>`.
   */
  ariaLabelledBy?: string;
  children: React.ReactElement;
};

/**
 * Arco Select: inner inputs lack id/name; strict audits want `<label htmlFor>` → real input id.
 * Assigns `${baseId}-view-input-main` to the primary inner input (first non-aria-hidden).
 */
export default function ArcoSelectInputIds(props: Props) {
  const { baseId, ariaLabelledBy, children } = props;
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) {
      return undefined;
    }
    const apply = () => {
      const inputs = Array.from(
        root.querySelectorAll<HTMLInputElement>('input.arco-select-view-input')
      );
      const primary =
        inputs.find((el) => el.getAttribute('aria-hidden') !== 'true') ??
        inputs[0];
      inputs.forEach((input, i) => {
        const id =
          input === primary
            ? arcoSelectPrimaryInputId(baseId)
            : `${baseId}-view-input-aux-${i}`;
        input.setAttribute('id', id);
        input.setAttribute('name', id);
      });
      if (ariaLabelledBy) {
        root
          .querySelector<HTMLElement>('[role="combobox"]')
          ?.setAttribute('aria-labelledby', ariaLabelledBy);
      }
    };
    apply();
    const ob = new MutationObserver(apply);
    ob.observe(root, { subtree: true, childList: true });
    return () => ob.disconnect();
  }, [baseId, ariaLabelledBy]);

  return (
    <div ref={ref} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}
