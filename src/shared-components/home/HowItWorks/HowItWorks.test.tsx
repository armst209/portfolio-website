import { render, screen } from '@testing-library/react';
import { howItWorks } from '../data/data';
import HowItWorks from './HowItWorks';

describe('HowItWorks', () => {
  it('renders every step from the data file', () => {
    render(<HowItWorks />);
    expect(
      screen.getByRole('heading', { name: 'How It Works' }),
    ).toBeInTheDocument();
    howItWorks.forEach(({ title, message }) => {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
      expect(screen.getByText(message)).toBeInTheDocument();
    });
    expect(screen.getByRole('link', { name: 'FAQ' })).toHaveAttribute(
      'href',
      '/faq',
    );
  });
});
