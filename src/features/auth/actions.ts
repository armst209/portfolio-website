'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { createSupabaseClient } from '@/lib/supabase/server';
import logger from '@/lib/logger';
import { signInSchema, signUpSchema } from './schemas';
import type { AuthFormState } from './form-state';

const readCredentials = (formData: FormData) => ({
  email: String(formData.get('email') ?? ''),
  password: String(formData.get('password') ?? ''),
});

export async function signInAction(
  _prevState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const input = readCredentials(formData);
  const parsed = signInSchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: 'error',
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
      values: { email: input.email },
    };
  }

  const { auth } = await createSupabaseClient();
  const { error } = await auth.signInWithPassword(parsed.data);

  if (error) {
    logger.error(`Error signing in: ${error.message}`);
    return {
      status: 'error',
      message:
        error.code === 'email_not_confirmed'
          ? 'Please verify your email!'
          : 'Incorrect email or password.',
      values: { email: input.email },
    };
  }

  revalidatePath('/', 'layout');
  return { status: 'success' };
}

export async function signUpAction(
  _prevState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const input = readCredentials(formData);
  const parsed = signUpSchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: 'error',
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
      values: { email: input.email },
    };
  }

  const { auth } = await createSupabaseClient();
  const { error } = await auth.signUp(parsed.data);

  if (error) {
    logger.error(`Error signing up: ${error.message}`);
    return {
      status: 'error',
      message:
        error.status === 429
          ? 'Please use a different email'
          : 'Sign up failed. Please try again.',
      values: { email: input.email },
    };
  }

  revalidatePath('/', 'layout');
  return { status: 'success' };
}

export async function signOutAction(): Promise<{
  errorMessage: string | null;
}> {
  const { auth } = await createSupabaseClient();
  const { error } = await auth.signOut();
  if (error) {
    logger.error(error.message);
    return { errorMessage: error.message };
  }
  revalidatePath('/', 'layout');
  return { errorMessage: null };
}
