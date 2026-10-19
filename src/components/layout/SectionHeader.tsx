import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import discIcon from '@public/assets/compact-disc-yellow.svg';
import { cn } from '@/lib/cn';

type SectionHeaderProps = {
  title: string;
  subtitle?: ReactNode;
  icon?: StaticImageData;
  action?: { href: string; label: string };
  id?: string;
  className?: string;
};

/** Section title with BnG's yellow line icon and an optional "Show all" link. */
const SectionHeader = ({
  title,
  subtitle,
  icon = discIcon,
  action,
  id,
  className,
}: SectionHeaderProps) => (
  <div className={cn('mb-5 flex items-end justify-between gap-4', className)}>
    <div>
      <div className="flex items-center gap-3">
        <Image
          src={icon}
          alt=""
          width={32}
          height={32}
          className="size-8 shrink-0"
        />
        <h2
          id={id}
          className="font-display text-2xl font-bold tracking-tight hover:underline md:text-3xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-2 max-w-3xl text-subdued md:text-lg">{subtitle}</p>
      )}
    </div>
    {action && (
      <Link
        href={action.href}
        className="shrink-0 text-sm font-bold text-subdued hover:text-white hover:underline">
        {action.label}
      </Link>
    )}
  </div>
);

export default SectionHeader;
