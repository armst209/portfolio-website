import { render, screen } from '@testing-library/react';
import { sampleReleases, searchReleases } from '../data/sample-releases';
import ReleaseCard from './ReleaseCard';
import ReleaseGrid from './ReleaseGrid';

describe('ReleaseCard', () => {
  it('renders the title, type, artist and a play button', () => {
    const [release] = sampleReleases;
    render(<ReleaseCard release={release} />);
    expect(
      screen.getByRole('heading', { name: release.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${release.type} · ${release.name}`),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: `Play ${release.title}` }),
    ).toBeInTheDocument();
  });
});

describe('ReleaseGrid', () => {
  it('renders one card per release', () => {
    render(<ReleaseGrid releases={sampleReleases} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(sampleReleases.length);
  });

  it('shows the empty state when there are no releases', () => {
    render(
      <ReleaseGrid
        releases={[]}
        emptyMessage="Nothing here"
      />,
    );
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
  });
});

describe('searchReleases', () => {
  it('matches title, artist or type case-insensitively', () => {
    expect(searchReleases(sampleReleases, 'mic drop')).toHaveLength(1);
    expect(searchReleases(sampleReleases, 'album').map((r) => r.type)).toEqual([
      'Album',
    ]);
    expect(searchReleases(sampleReleases, '   ')).toEqual(sampleReleases);
    expect(searchReleases(sampleReleases, 'zzz')).toBeEmpty();
  });
});
