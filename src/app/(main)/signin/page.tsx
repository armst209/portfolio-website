import type { Metadata } from 'next';
import SignInForm from '@shared-components/authentication/components/SignInForm';

export const metadata: Metadata = { title: 'Sign In' };

export default function SignInPage() {
  return (
    <>
      <h1 className="mb-10 text-center font-display text-4xl font-extrabold tracking-tight">
        Sign In
      </h1>
      <SignInForm />
    </>
  );
}
