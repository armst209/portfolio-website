'use client';

import { useTransition, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { signOutAction } from '@/features/auth/actions';
import useUserStore from '@/stores/useUserStore';
import { cn } from '@/lib/cn';

/** Signs out, clears the user store and returns home. */
export const useSignOut = () => {
  const router = useRouter();
  const resetUser = useUserStore((state) => state.resetUser);
  const [isPending, startTransition] = useTransition();

  const signOut = () =>
    startTransition(async () => {
      const { errorMessage } = await signOutAction();
      if (errorMessage) {
        toast.error('Sign out failed.');
        return;
      }
      resetUser();
      router.push('/');
      toast.success('Signed out successfully!');
    });

  return { signOut, isPending };
};

const SignOutButton = ({
  className,
  children = 'Sign Out',
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const { signOut, isPending } = useSignOut();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={signOut}
      className={cn('cursor-pointer disabled:opacity-50', className)}>
      {children}
    </button>
  );
};

export default SignOutButton;
