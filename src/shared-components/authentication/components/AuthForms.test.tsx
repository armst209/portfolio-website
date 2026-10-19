import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpPage from '@/app/(main)/signup/page';
import SignInForm from './SignInForm';
import { signInAction } from '../actions';

vi.mock('../actions', () => ({
  signInAction: vi.fn(),
  signUpAction: vi.fn(),
}));

describe('SignUpPage', () => {
  it('renders sign up page', () => {
    render(<SignUpPage />);
    expect(
      screen.getByText(/Start your collection today/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
  });
});

describe('SignInForm', () => {
  it('shows field errors returned by the server action', async () => {
    vi.mocked(signInAction).mockResolvedValue({
      status: 'error',
      fieldErrors: { email: ['Please enter a valid email address.'] },
      values: { email: 'nope' },
    });

    render(<SignInForm />);
    await userEvent.type(screen.getByLabelText('Email Address'), 'nope');
    await userEvent.click(screen.getByRole('button', { name: 'Sign In' }));

    expect(
      await screen.findByText('Please enter a valid email address.'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
  });
});
