'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { signUpAction } from '../actions';
import { initialAuthFormState } from '../form-state';
import { useAuthFormEffects } from './useAuthFormEffects';

const SignUpForm = () => {
  const [state, formAction, isPending] = useActionState(
    signUpAction,
    initialAuthFormState,
  );
  useAuthFormEffects(state, {
    successMessage: 'Sign Up was successful!',
    redirectTo: '/account',
  });

  return (
    <form
      action={formAction}
      noValidate
      className="flex w-full flex-col gap-4">
      <Input
        label="Email address"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="name@domain.com"
        required
        defaultValue={state.values?.email}
        errors={state.fieldErrors?.email}
      />
      <Input
        label="Password"
        id="password"
        name="password"
        type="password"
        autoComplete="new-password"
        placeholder="Password"
        required
        errors={state.fieldErrors?.password}
      />
      {state.status === 'error' && state.message && (
        <p
          role="alert"
          className="rounded-md bg-danger/15 px-4 py-3 text-sm text-danger">
          Error: {state.message}
        </p>
      )}
      <Button
        type="submit"
        loading={isPending}
        className="mt-4 w-full">
        Sign Up
      </Button>
      <p className="mt-4 text-center text-sm text-subdued">
        Already have an account?{' '}
        <Link
          href="/signin"
          className="font-bold text-white underline hover:text-groovy-yellow">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
