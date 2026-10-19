import { create } from 'zustand';
import type { AppUser, AuthStatus } from '@/types';

type UserState = {
  user: AppUser | null;
  status: AuthStatus;
};

type UserActions = {
  setUser: (user: AppUser | null) => void;
  resetUser: () => void;
};

export const initialUserState: UserState = {
  user: null,
  status: 'loading',
};

const useUserStore = create<UserState & UserActions>((set) => ({
  ...initialUserState,
  setUser: (user) =>
    set({ user, status: user ? 'authenticated' : 'unauthenticated' }),
  resetUser: () => set({ user: null, status: 'unauthenticated' }),
}));

export const selectIsLoggedIn = (state: UserState) =>
  state.status === 'authenticated';

export default useUserStore;
