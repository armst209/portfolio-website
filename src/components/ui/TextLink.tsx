import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Inline link inside body copy. External URLs open in a new tab. */
const TextLink = ({ href, children, className }: TextLinkProps) => {
  const classes = cn(
    'font-bold text-white underline underline-offset-4 transition-colors hover:text-groovy-yellow',
    className,
  );

  if (/^(https?:|mailto:)/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}>
      {children}
    </Link>
  );
};

export default TextLink;
