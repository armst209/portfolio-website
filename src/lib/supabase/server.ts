import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import logger from '@/lib/logger';

export async function createSupabaseClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Called from a Server Component, where cookies are read-only.
            // The proxy refreshes the session, so this is safe to ignore.
          }
        },
      },
    },
  );
}

export async function getUser() {
  const { auth } = await createSupabaseClient();
  const { data, error } = await auth.getUser();
  if (error) {
    // A missing session is the normal logged-out state, not an error.
    if (error.name !== 'AuthSessionMissingError') logger.error(error);
    return null;
  }
  return data?.user ?? null;
}

export async function getClaims() {
  const { auth } = await createSupabaseClient();
  const { data, error } = await auth.getClaims();

  if (error) {
    logger.error(error);
    return null;
  }

  return data?.claims ?? null;
}
