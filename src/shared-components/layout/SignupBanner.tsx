'use client';

import Link from 'next/link';
import { buttonVariants } from '@shared-components/Button';
import useUserStore from '@/stores/useUserStore';

/** Spotify's "Preview of …" bar, shown only to logged-out visitors. */
const SignupBanner = () => {
  const status = useUserStore((state) => state.status);
  if (status !== 'unauthenticated') return null;

  return (
    <aside
      aria-label="Sign up"
      className="hidden animate-fade-in items-center justify-between gap-6 rounded-lg bg-linear-to-r from-groovy-teal-deep via-groovy-teal to-groovy-yellow/90 px-5 py-3 text-black md:flex">
      <div className="text-white">
        <p className="text-sm font-bold">
          Preview of Biscuits &apos;n&apos; Groovy
        </p>
        <p className="text-sm">
          Sign up to collect exclusive biscuits and stream new music before it
          drops anywhere else.
        </p>
      </div>
      <Link
        href="/signup"
        className={buttonVariants({ variant: 'secondary', size: 'md' })}>
        Sign up free
      </Link>
    </aside>
  );
};

export default SignupBanner;
