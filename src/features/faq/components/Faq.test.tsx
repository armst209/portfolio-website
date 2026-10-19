import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FaqPage from '@/app/(main)/faq/page';
import { faqs } from '../data';

describe('FaqPage', () => {
  it('renders every question collapsed by default', () => {
    render(<FaqPage />);
    faqs.forEach(({ question }) => {
      const summary = screen.getByText(question);
      expect(summary.closest('details')).not.toHaveAttribute('open');
    });
  });

  it('expands an answer when its question is clicked', async () => {
    render(<FaqPage />);
    const summary = screen.getByText('Can I download my music?');
    await userEvent.click(summary);
    expect(summary.closest('details')).toHaveAttribute('open');
  });

  it('keeps the anchor and contact link other pages rely on', () => {
    const { container } = render(<FaqPage />);
    expect(container.querySelector('#nft-scroll-purchase')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'support@bngroovy.com' }),
    ).toHaveAttribute('href', 'mailto:support@bngroovy.com?subject=Support');
  });
});
