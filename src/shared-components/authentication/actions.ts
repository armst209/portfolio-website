'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import logger from '@/utils/logger';
import { signInSchema, signUpSchema } from './schemas';
import type { AuthFormState } from './form-state';

const error = { message: '', code: null, status: 200 };

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
  if (error) {
    logger.error(error.message);
    return { errorMessage: error.message };
  }
  revalidatePath('/', 'layout');
  return { errorMessage: null };
}
