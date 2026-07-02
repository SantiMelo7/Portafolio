import type { AnchorHTMLAttributes, ReactNode } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: ReactNode;
  disabled?: boolean;
}
