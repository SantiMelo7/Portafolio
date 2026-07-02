import { forwardRef } from 'react';
import styles from './Link.module.css';

import type { LinkProps } from './Link.types';

export const ForwardedLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, disabled = false, className, onClick, tabIndex, ...rest }, ref) => {
    const isDisabled = disabled || !href;

    const handleClick: LinkProps['onClick'] = (event) => {
      if (isDisabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      onClick?.(event);
    };

    return (
      <a
        {...rest}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        href={isDisabled ? undefined : href}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : tabIndex}
        onClick={handleClick}
        className={`${className ?? ''} ${isDisabled ? styles.disabled : ''}`.trim()}
      >
        {children}
      </a>
    );
  }
);

export const LinkAtom = (props: LinkProps) => {
  return <ForwardedLink {...props} />;
};
