import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { buttonVariants } from '@/components/ui/Button';

type MessagePanelProps = {
  icon: LucideIcon;
  title: string;
  children?: ReactNode;
  action?: { href: string; label: string };
};

/** Centered status message used by confirm/error/not-found screens. */
const MessagePanel = ({
  icon: Icon,
  title,
  children,
  action = { href: '/', label: 'Back to home' },
}: MessagePanelProps) => (
  <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-20 text-center">
    <span className="flex size-20 items-center justify-center rounded-full bg-surface-highlight text-groovy-yellow">
      <Icon
        aria-hidden
        className="size-10"
      />
    </span>
    <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
      {title}
    </h1>
    {children && (
      <div className="mt-4 max-w-lg text-subdued md:text-lg">{children}</div>
    )}
    <Link
      href={action.href}
      className={buttonVariants({ variant: 'secondary', className: 'mt-8' })}>
      {action.label}
    </Link>
  </div>
);

export default MessagePanel;
