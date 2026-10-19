import { render, screen } from '@testing-library/react';
import { mockNavigation } from '../../../test/mocks/navigation';
import useUIStore, { initialUIState } from '@/stores/useUIStore';
import useUserStore, { initialUserState } from '@/stores/useUserStore';
import EmailVerificationBar from './EmailVerificationBar';
import Sidebar from './Sidebar';
import SignupBanner from './SignupBanner';

const fan = {
  id: 'u1',
  email: 'fan@bng.test',
  username: null,
  avatarUrl: null,
  isEmailConfirmed: true,
};

describe('Sidebar', () => {
  beforeEach(() => {
    useUIStore.setState(initialUIState);
    useUserStore.setState(initialUserState);
  });

  it('marks the link for the current route as active', () => {
    mockNavigation.pathname = '/releases';
    render(<Sidebar />);
    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(screen.getByRole('link', { name: 'Releases' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(
      nav.querySelector('a[href="/"][aria-current]'),
    ).not.toBeInTheDocument();
  });

  it('hides labels visually when collapsed but keeps them accessible', () => {
    useUIStore.setState({ isSidebarCollapsed: true });
    render(<Sidebar />);
    expect(screen.getByText('Home')).toHaveClass('sr-only');
    expect(
      screen.getByRole('button', { name: 'Expand sidebar' }),
    ).toBeInTheDocument();
  });
});

describe('SignupBanner', () => {
  beforeEach(() => useUserStore.setState(initialUserState));

  it('stays hidden while the session is loading', () => {
    const { container } = render(<SignupBanner />);
    expect(container).toBeEmptyDOMElement();
  });

  it('shows for logged-out visitors', () => {
    useUserStore.getState().setUser(null);
    render(<SignupBanner />);
    expect(screen.getByRole('link', { name: 'Sign up free' })).toHaveAttribute(
      'href',
      '/signup',
    );
  });

  it('is hidden when a user is in the store', () => {
    useUserStore.getState().setUser(fan);
    const { container } = render(<SignupBanner />);
    expect(container).toBeEmptyDOMElement();
  });
});

describe('EmailVerificationBar', () => {
  it('only shows for users with an unconfirmed email', () => {
    useUserStore.getState().setUser(fan);
    const { rerender, container } = render(<EmailVerificationBar />);
    expect(container).toBeEmptyDOMElement();

    useUserStore.getState().setUser({ ...fan, isEmailConfirmed: false });
    rerender(<EmailVerificationBar />);
    expect(screen.getByText(/Please verify your email/)).toBeInTheDocument();
  });
});
