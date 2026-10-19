'use client';

import { useActionState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import SignOutButton from '@/components/navigation/SignOutButton';
import { buttonVariants } from '@/components/ui/Button';
import { updateProfileAction, type ProfileFormState } from '../actions';
import type { Profile } from '../schemas';
import AvatarUpload from './AvatarUpload';

type AccountFormProps = {
  userId: string;
  email: string | null;
  profile: Profile | null;
};

const initialState: ProfileFormState = { status: 'idle' };

const AccountForm = ({ userId, email, profile }: AccountFormProps) => {
  const [state, formAction, isPending] = useActionState(
    updateProfileAction,
    initialState,
  );

  useEffect(() => {
    if (state.status === 'success') toast.success(state.message ?? 'Saved');
    if (state.status === 'error' && state.message) toast.error(state.message);
  }, [state]);

  const displayName = profile?.full_name ?? profile?.username ?? email;

  return (
    <>
      <header className="flex flex-col items-center gap-6 bg-linear-to-b from-groovy-teal/70 to-base px-4 pt-24 pb-8 sm:flex-row sm:items-end md:px-8 md:pt-28">
        <AvatarUpload
          uid={userId}
          path={profile?.avatar_url ?? null}
          name={displayName}
        />
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold">Profile</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight break-all md:text-6xl">
            {displayName ?? 'Your account'}
          </h1>
        </div>
      </header>

      <div className="px-4 md:px-8">
        <form
          id="form-widget"
          action={formAction}
          className="flex max-w-xl flex-col gap-5 rounded-lg bg-surface p-6 md:p-8">
          <Input
            label="Email"
            id="email"
            type="text"
            value={email ?? ''}
            disabled
            readOnly
          />
          <Input
            label="Full Name"
            id="fullName"
            name="full_name"
            type="text"
            defaultValue={profile?.full_name ?? ''}
            errors={state.fieldErrors?.full_name}
          />
          <Input
            label="Username"
            id="username"
            name="username"
            type="text"
            defaultValue={profile?.username ?? ''}
            errors={state.fieldErrors?.username}
          />
          <Input
            label="Website"
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            defaultValue={profile?.website ?? ''}
            errors={state.fieldErrors?.website}
          />
          <div className="mt-2 flex flex-wrap gap-3">
            <Button
              type="submit"
              loading={isPending}>
              Update
            </Button>
            <SignOutButton className={buttonVariants({ variant: 'outline' })} />
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountForm;
