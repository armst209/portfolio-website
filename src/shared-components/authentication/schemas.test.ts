import { signInSchema, signUpSchema } from './schemas';

describe('signInSchema', () => {
  it('accepts a valid email and password', () => {
    expect(
      signInSchema.safeParse({ email: 'fan@bng.test', password: 'password1' })
        .success,
    ).toBeTrue();
  });

  it('rejects an invalid email and short password', () => {
    const result = signInSchema.safeParse({ email: 'nope', password: 'short' });
    expect(result.success).toBeFalse();
    expect(
      result.error?.issues.map((issue) => issue.path[0]),
    ).toIncludeSameMembers(['email', 'password']);
  });
});

describe('signUpSchema', () => {
  it('requires a strong password', () => {
    expect(
      signUpSchema.safeParse({ email: 'fan@bng.test', password: 'password1' })
        .success,
    ).toBeFalse();
    expect(
      signUpSchema.safeParse({ email: 'fan@bng.test', password: 'Groovy#2026' })
        .success,
    ).toBeTrue();
  });
});
