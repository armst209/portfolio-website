import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import AccountForm from './components/AccountForm';
import { getProfile } from './queries';

export const metadata: Metadata = { title: 'Account' };

export default function AccountPage() {
  return (
    <Suspense fallback={<AccountSkeleton />}>
      <AccountContent />
    </Suspense>
  );
}

async function AccountContent() {
  const claims = {
    sub: '',
    email: '',
  }; //replace with new getUser handler

  if (!claims?.sub) redirect('/signin');

  const profile = await getProfile(claims.sub);
  return (
    <AccountForm
      userId={claims.sub}
      email={typeof claims.email === 'string' ? claims.email : null}
      profile={profile}
    />
  );
}

function AccountSkeleton() {
  return (
    <div
      aria-busy
      className="animate-pulse">
      <div className="flex items-end gap-6 bg-linear-to-b from-groovy-teal/40 to-base px-4 pt-24 pb-8 md:px-8 md:pt-28">
        <div className="size-36 rounded-full bg-surface-highlight md:size-48" />
        <div className="h-12 w-64 rounded bg-surface-highlight" />
      </div>
      <div className="mx-4 h-96 max-w-xl rounded-lg bg-surface md:mx-8" />
    </div>
  );
}
