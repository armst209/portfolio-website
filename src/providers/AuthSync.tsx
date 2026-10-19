'use client';

import { useEffect } from 'react';
import { createSupabaseClient } from '@/lib/supabase/client';
import { toAppUser } from '@/features/auth/to-app-user';
import useUserStore from '@/stores/useUserStore';
import type { AppUser } from '@/types';

/**
 * Seeds the user store from the server-rendered session, then keeps it in
 * sync with Supabase auth events. Replaces the old AuthProvider context.
 */
const AuthSync = ({ initialUser }: { initialUser: AppUser | null }) => {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    setUser(initialUser);
  }, [initialUser, setUser]);

  useEffect(() => {
    const { auth } = createSupabaseClient();
    const {
      data: { subscription },
    } = auth.onAuthStateChange((event, session) => {
      // INITIAL_SESSION duplicates what the server already told us.
      if (event === 'INITIAL_SESSION') return;
      setUser(toAppUser(session?.user));
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return null;
};

export default AuthSync;
