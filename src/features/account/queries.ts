import { createSupabaseClient } from '@/lib/supabase/server';
import logger from '@/lib/logger';
import type { Profile } from './schemas';

export async function getProfile(userId: string): Promise<Profile | null> {
  const supabase = await createSupabaseClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('full_name, username, website, avatar_url')
    .eq('id', userId)
    .maybeSingle();

  if (error) {
    logger.error(`Error loading profile: ${error.message}`);
    return null;
  }
  return data;
}
