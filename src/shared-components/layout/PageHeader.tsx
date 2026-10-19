import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

const tones = {
  teal: 'from-groovy-teal/70',
  yellow: 'from-groovy-yellow/45',
  neutral: 'from-surface-highlight',
} as const;

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  tone?: keyof typeof tones;
  children?: ReactNode;
};

/** Spotify's colour-washed page header that fades into the base surface. */
const PageHeader = ({
  eyebrow,
  title,
  description,
  tone = 'teal',
  children,
}: PageHeaderProps) => (
  <header
    className={cn(
      'bg-linear-to-b to-base px-4 pt-24 pb-8 md:px-8 md:pt-28',
      tones[tone],
    )}>
    {eyebrow && <p className="text-sm font-bold">{eyebrow}</p>}
    <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight md:text-7xl">
      {title}
    </h1>
    {description && (
      <p className="mt-4 max-w-2xl text-subdued md:text-lg">{description}</p>
    )}
    {children}
  </header>
);

export default PageHeader;
