'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { createSupabaseClient } from '@/lib/supabase/server';
import logger from '@/lib/logger';
import { profileSchema } from './schemas';

export type ProfileFormState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: Partial<Record<'full_name' | 'username' | 'website', string[]>>;
};

/** Re-reads the session so the action authorises itself. */
const requireUserId = async () => {
  const supabase = await createSupabaseClient();
  const { data } = await supabase.auth.getClaims();
  return { supabase, userId: data?.claims?.sub ?? null };
};

export async function updateProfileAction(
  _prevState: ProfileFormState,
  formData: FormData,
): Promise<ProfileFormState> {
  const parsed = profileSchema.safeParse({
    full_name: String(formData.get('full_name') ?? ''),
    username: String(formData.get('username') ?? ''),
    website: String(formData.get('website') ?? ''),
  });
  if (!parsed.success) {
    return {
      status: 'error',
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
    };
  }

  const { supabase, userId } = await requireUserId();
  if (!userId) {
    return {
      status: 'error',
      message: 'You must be logged in to update your profile',
    };
  }

  const { error } = await supabase.from('profiles').upsert({
    id: userId,
    ...parsed.data,
    updated_at: new Date().toISOString(),
  });
  if (error) {
    logger.error(`Error updating profile: ${error.message}`);
    return { status: 'error', message: 'Could not update your profile.' };
  }

  revalidatePath('/account');
  return { status: 'success', message: 'Profile updated!' };
}

export async function updateAvatarAction(
  avatarPath: string,
): Promise<{ errorMessage: string | null }> {
  const { supabase, userId } = await requireUserId();
  if (!userId) return { errorMessage: 'You must be logged in.' };

  const { error } = await supabase.from('profiles').upsert({
    id: userId,
    avatar_url: avatarPath,
    updated_at: new Date().toISOString(),
  });
  if (error) {
    logger.error(`Error updating avatar: ${error.message}`);
    return { errorMessage: 'Could not save your avatar.' };
  }

  revalidatePath('/account');
  return { errorMessage: null };
}
