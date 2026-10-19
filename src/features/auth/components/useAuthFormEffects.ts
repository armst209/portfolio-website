'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import type { AuthFormState } from '../form-state';

/** Toasts + redirect once a server action settles. */
export const useAuthFormEffects = (
  state: AuthFormState,
  {
    successMessage,
    redirectTo,
  }: { successMessage: string; redirectTo: string },
) => {
  const router = useRouter();

  useEffect(() => {
    if (state.status === 'success') {
      toast.success(successMessage);
      router.push(redirectTo);
    } else if (state.status === 'error' && state.message) {
      toast.error(state.message);
    }
  }, [state, successMessage, redirectTo, router]);
};
