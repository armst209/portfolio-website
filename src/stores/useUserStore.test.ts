import useUserStore, {
  initialUserState,
  selectIsLoggedIn,
} from './useUserStore';
import type { AppUser } from '@/types';

const user: AppUser = {
  id: 'user-1',
  email: 'fan@bng.test',
  username: 'superfan',
  avatarUrl: null,
  isEmailConfirmed: true,
};

describe('useUserStore', () => {
  beforeEach(() => useUserStore.setState(initialUserState));

  it('starts in a loading state with no user', () => {
    expect(useUserStore.getState()).toMatchObject({
      user: null,
      status: 'loading',
    });
    expect(selectIsLoggedIn(useUserStore.getState())).toBeFalse();
  });

  it('marks the session authenticated when a user is set', () => {
    useUserStore.getState().setUser(user);
    expect(useUserStore.getState().user).toEqual(user);
    expect(useUserStore.getState().status).toBe('authenticated');
    expect(selectIsLoggedIn(useUserStore.getState())).toBeTrue();
  });

  it('marks the session unauthenticated when set to null', () => {
    useUserStore.getState().setUser(null);
    expect(useUserStore.getState().status).toBe('unauthenticated');
  });

  it('clears the user on reset', () => {
    useUserStore.getState().setUser(user);
    useUserStore.getState().resetUser();
    expect(useUserStore.getState()).toMatchObject({
      user: null,
      status: 'unauthenticated',
    });
  });
});
