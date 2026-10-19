'use client';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';
import useUserStore from '@/stores/useUserStore';
import UserMenu from './UserMenu';

/** Top-bar auth area: Sign up / Sign in pills, or the user menu. */
const AccountSection = () => {
  const user = useUserStore((state) => state.user);
  const status = useUserStore((state) => state.status);

  if (status === 'loading') {
    return (
      <span
        aria-hidden
        className="size-10 animate-pulse rounded-full bg-surface-highlight"
      />
    );
  }

  if (user) return <UserMenu user={user} />;

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/signup"
        className={buttonVariants({
          variant: 'ghost',
          size: 'md',
          className: 'hidden px-4 text-white/85 sm:inline-flex',
        })}>
        Sign up
      </Link>
      <Link
        href="/signin"
        className={buttonVariants({ variant: 'secondary', size: 'md' })}>
        Sign in
      </Link>
    </div>
  );
};

export default AccountSection;
