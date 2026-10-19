'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { signInAction } from '../actions';
import { initialAuthFormState } from '../form-state';
import { useAuthFormEffects } from './useAuthFormEffects';

const SignInForm = () => {
  const [state, formAction, isPending] = useActionState(
    signInAction,
    initialAuthFormState,
  );
  useAuthFormEffects(state, {
    successMessage: 'Signed in successfully!',
    redirectTo: '/confirm-account',
  });

  return (
    <form
      action={formAction}
      noValidate
      className="flex w-full flex-col gap-4">
      <Input
        label="Email Address"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email"
        required
        defaultValue={state.values?.email}
        errors={state.fieldErrors?.email}
      />
      <Input
        label="Password"
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
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
        Sign In
      </Button>
      <div className="mt-4 flex items-center justify-center gap-4 text-sm">
        <Link
          href="#"
          className="text-subdued underline hover:text-groovy-yellow">
          Forgot Password?
        </Link>
        <span
          aria-hidden
          className="text-muted">
          |
        </span>
        <Link
          href="/signup"
          className="font-bold underline hover:text-groovy-yellow">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
