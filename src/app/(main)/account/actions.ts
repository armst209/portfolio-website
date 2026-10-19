'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { profileSchema } from './schemas';

export type ProfileFormState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: Partial<Record<keyof z.input<typeof profileSchema>, string[]>>;
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

  // TODO: persist parsed.data once the new profile backend is wired up

  revalidatePath('/account');
  return { status: 'success', message: 'Profile updated' };
}
