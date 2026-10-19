import { getUser } from '@/lib/supabase/server';
import { toAppUser } from '@/features/auth/to-app-user';
import AuthSync from './AuthSync';

/**
 * Reads the session at request time. With Cache Components this must render
 * inside <Suspense> so the rest of the shell can still be prerendered.
 */
const SessionLoader = async () => {
  const user = await getUser();
  return <AuthSync initialUser={toAppUser(user)} />;
};

export default SessionLoader;
