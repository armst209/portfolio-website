'use client';

import {
  Bell,
  ChevronDown,
  Headphones,
  Library,
  LogOut,
  UserRound,
} from 'lucide-react';
import Avatar from '@shared-components/Avatar';
import Dropdown, {
  DropdownButton,
  DropdownLink,
  DropdownSeparator,
} from '@shared-components/Dropdown';
import type { AppUser } from '@/types';
import { useSignOut } from './SignOutButton';

const UserMenu = ({ user }: { user: AppUser }) => {
  const { signOut, isPending } = useSignOut();
  const displayName = user.username ?? user.email;

  return (
    <Dropdown
      triggerLabel="Open account menu"
      trigger={
        <span className="flex items-center gap-1 rounded-full bg-black/70 p-1 pr-2 transition-colors hover:bg-surface-highlight">
          <Avatar
            src={user.avatarUrl}
            name={displayName}
          />
          <ChevronDown
            aria-hidden
            className="size-4 text-subdued"
          />
        </span>
      }>
      {displayName && (
        <p className="truncate px-3 pt-2 pb-1 text-xs text-subdued">
          {displayName}
        </p>
      )}
      <DropdownLink href="/account">
        <UserRound
          aria-hidden
          className="size-4"
        />
        Account
      </DropdownLink>
      <DropdownLink href="/collection">
        <Library
          aria-hidden
          className="size-4"
        />
        Collection
      </DropdownLink>
      <DropdownLink href="/releases">
        <Headphones
          aria-hidden
          className="size-4"
        />
        Releases
      </DropdownLink>
      <DropdownButton disabled>
        <Bell
          aria-hidden
          className="size-4"
        />
        Notifications
        <span className="ml-auto text-xs">Soon</span>
      </DropdownButton>
      <DropdownSeparator />
      <DropdownButton
        onClick={signOut}
        disabled={isPending}>
        <LogOut
          aria-hidden
          className="size-4"
        />
        Sign out
      </DropdownButton>
    </Dropdown>
  );
};

export default UserMenu;
