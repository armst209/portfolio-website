import { signInAction, signUpAction } from './actions';
import { initialAuthFormState } from './form-state';

const auth = {
  signInWithPassword: vi.fn(),
  signUp: vi.fn(),
  signOut: vi.fn(),
};

vi.mock('@/lib/supabase/server', () => ({
  createSupabaseClient: async () => ({ auth }),
}));
vi.mock('next/cache', () => ({ revalidatePath: vi.fn() }));

const form = (values: Record<string, string>) => {
  const data = new FormData();
  Object.entries(values).forEach(([key, value]) => data.set(key, value));
  return data;
};

describe('signInAction', () => {
  beforeEach(() => vi.clearAllMocks());

  it('returns field errors without calling Supabase when input is invalid', async () => {
    const state = await signInAction(
      initialAuthFormState,
      form({ email: 'bad', password: '1' }),
    );
    expect(state.status).toBe('error');
    expect(state.fieldErrors?.email).toBeArray();
    expect(state.fieldErrors?.password).toBeArray();
    expect(state.values?.email).toBe('bad');
    expect(auth.signInWithPassword).not.toHaveBeenCalled();
  });

  it('maps an unconfirmed email to a friendly message', async () => {
    auth.signInWithPassword.mockResolvedValue({
      error: { code: 'email_not_confirmed', message: 'Email not confirmed' },
    });
    const state = await signInAction(
      initialAuthFormState,
      form({ email: 'fan@bng.test', password: 'password1' }),
    );
    expect(state).toMatchObject({
      status: 'error',
      message: 'Please verify your email!',
    });
  });

  it('succeeds when Supabase signs the user in', async () => {
    auth.signInWithPassword.mockResolvedValue({ error: null });
    const state = await signInAction(
      initialAuthFormState,
      form({ email: 'fan@bng.test', password: 'password1' }),
    );
    expect(state.status).toBe('success');
    expect(auth.signInWithPassword).toHaveBeenCalledWith({
      email: 'fan@bng.test',
      password: 'password1',
    });
  });
});

describe('signUpAction', () => {
  beforeEach(() => vi.clearAllMocks());

  it('maps rate limiting to the original message', async () => {
    auth.signUp.mockResolvedValue({
      error: { status: 429, message: 'Too many requests' },
    });
    const state = await signUpAction(
      initialAuthFormState,
      form({ email: 'fan@bng.test', password: 'Groovy#2026' }),
    );
    expect(state).toMatchObject({
      status: 'error',
      message: 'Please use a different email',
    });
  });
});
