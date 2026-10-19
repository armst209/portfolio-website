import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockNavigation } from '../../test/mocks/navigation';
import HowWeServe from './about/components/HowWeServe';
import ArtistInquiryForm from './artists/components/ArtistInquiryForm';
import ExpiredInfoButton from './collection/components/ExpiredInfoButton';
import TermsNav from './legal/components/TermsNav';
import VaultCard from './vault/components/VaultCard';
import { sampleVault } from './vault/data/sample-vault';

describe('HowWeServe', () => {
  it('switches between the fan and artist panels', async () => {
    render(<HowWeServe />);
    expect(screen.getByRole('tab', { name: 'Fans' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(
      screen.getByText(/revolutionary collector experience/),
    ).toBeVisible();

    await userEvent.click(screen.getByRole('tab', { name: 'Artists' }));
    expect(screen.getByText('Why release with BnG?')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'here' })).toHaveAttribute(
      'href',
      '/artists',
    );
  });
});

describe('ArtistInquiryForm', () => {
  it('shows validation errors, then a success state', async () => {
    render(<ArtistInquiryForm />);
    await userEvent.click(
      screen.getByRole('button', { name: 'Submit Artist Info' }),
    );
    expect(
      screen.getByText('Please enter a valid email address.'),
    ).toBeInTheDocument();
    expect(screen.getByText('Please enter a message.')).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText('Email'), 'artist@bng.test');
    await userEvent.type(screen.getByLabelText('Artist Name'), 'ZEVY');
    await userEvent.type(screen.getByLabelText('Message'), 'Hello!');
    await userEvent.click(
      screen.getByRole('button', { name: 'Submit Artist Info' }),
    );
    expect(screen.getByRole('status')).toHaveTextContent('Success!');
  });
});

describe('ExpiredInfoButton', () => {
  it('opens an explanation dialog', async () => {
    const { container } = render(<ExpiredInfoButton />);
    expect(container.querySelector('dialog')).not.toHaveAttribute('open');

    await userEvent.click(
      screen.getByRole('button', { name: /Why can't I play my releases/ }),
    );
    const dialog = screen.getByRole('dialog', { name: 'Expired biscuits' });
    expect(dialog).toHaveAttribute('open');
    expect(
      within(dialog).getByText(/album NFTs are here for good/),
    ).toBeInTheDocument();
  });
});

describe('VaultCard', () => {
  it('opens release details with the tracklist', async () => {
    const [release] = sampleVault;
    render(<VaultCard release={release} />);
    await userEvent.click(
      screen.getByRole('button', {
        name: `${release.releaseName} by ${release.artistName}`,
      }),
    );
    const dialog = screen.getByRole('dialog');
    const tracklist = within(dialog).getAllByRole('listitem');
    expect(tracklist.map((item) => item.textContent?.slice(1))).toEqual(
      release.tracks,
    );
    expect(within(dialog).getByText(release.description)).toBeInTheDocument();
  });
});

describe('TermsNav', () => {
  it('highlights the current legal document', () => {
    mockNavigation.pathname = '/terms/nft';
    render(<TermsNav />);
    expect(screen.getByRole('link', { name: 'NFT Terms' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(
      screen.getByRole('link', { name: 'Privacy Policy' }),
    ).not.toHaveAttribute('aria-current');
  });
});
