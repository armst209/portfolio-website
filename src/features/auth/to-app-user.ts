import type { User } from '@supabase/supabase-js';
import type { AppUser } from '@/types';

export const toAppUser = (user: User | null | undefined): AppUser | null => {
  if (!user) return null;
  const metadata = user.user_metadata ?? {};
  return {
    id: user.id,
    email: user.email ?? null,
    username: metadata.username ?? null,
    avatarUrl: metadata.avatar_url ?? null,
    isEmailConfirmed: !!(user.email_confirmed_at ?? user.confirmed_at),
  };
};
