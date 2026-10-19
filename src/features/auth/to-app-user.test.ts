import type { User } from '@supabase/supabase-js';
import { toAppUser } from './to-app-user';

describe('toAppUser', () => {
  it('returns null without a user', () => {
    expect(toAppUser(null)).toBeNull();
  });

  it('keeps only the fields the client needs', () => {
    const user = {
      id: 'u1',
      email: 'fan@bng.test',
      email_confirmed_at: undefined,
      user_metadata: { username: 'superfan', avatar_url: 'a.png' },
    } as unknown as User;

    expect(toAppUser(user)).toEqual({
      id: 'u1',
      email: 'fan@bng.test',
      username: 'superfan',
      avatarUrl: 'a.png',
      isEmailConfirmed: false,
    });
  });
});
