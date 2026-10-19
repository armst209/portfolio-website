'use client';

import Link from 'next/link';
import { MailWarning } from 'lucide-react';
import useUserStore from '@/stores/useUserStore';

const EmailVerificationBar = () => {
  const user = useUserStore((state) => state.user);
  if (!user || user.isEmailConfirmed) return null;

  return (
    <div
      role="status"
      className="flex items-center justify-center gap-2 rounded-lg bg-groovy-yellow px-4 py-2 text-sm font-bold text-black">
      <MailWarning
        aria-hidden
        className="size-4"
      />
      Please verify your email!
      <Link
        href="/confirm-account"
        className="underline underline-offset-2">
        Learn how
      </Link>
    </div>
  );
};

export default EmailVerificationBar;
