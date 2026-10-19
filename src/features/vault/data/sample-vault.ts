/**
 * PLACEHOLDER DATA — every past drop. The original fetched these from the
 * old Express API (`/vault`); replace with a Supabase query.
 */
import bucketHats from '@public/assets/buckethats.webp';
import crowd from '@public/assets/crowd.jpg';
import micDrop from '@public/assets/micdrop.webp';
import micHold from '@public/assets/michold.webp';
import type { StaticImageData } from 'next/image';

export type VaultRelease = {
  id: string;
  artistName: string;
  releaseName: string;
  art: StaticImageData;
  startDate: string;
  endDate: string;
  socialUrl: string | null;
  description: string;
  tracks: string[];
};

export const sampleVault: VaultRelease[] = [
  {
    id: 'vault-1',
    artistName: 'Sample Artist',
    releaseName: 'Midnight Drive',
    art: crowd,
    startDate: '2021-11-12',
    endDate: '2021-11-26',
    socialUrl: 'https://open.spotify.com/',
    description:
      'Placeholder description. A high-energy single that streamed exclusively on BnG for two weeks.',
    tracks: ['Midnight Drive', 'Midnight Drive (Extended Mix)'],
  },
  {
    id: 'vault-2',
    artistName: 'Sample Artist Two',
    releaseName: 'Mic Check',
    art: micDrop,
    startDate: '2022-02-04',
    endDate: '2022-02-18',
    socialUrl: 'https://www.tiktok.com/',
    description:
      'Placeholder description. A three-track EP with a handwritten lyric sheet included as the biscuit insert.',
    tracks: ['Intro', 'Mic Check', 'Outro'],
  },
  {
    id: 'vault-3',
    artistName: 'Sample Artist Three',
    releaseName: 'Hold On',
    art: micHold,
    startDate: '2022-05-06',
    endDate: '2022-05-20',
    socialUrl: null,
    description:
      'Placeholder description. A slow-burning R&B single with an exclusive voice memo for collectors.',
    tracks: ['Hold On'],
  },
  {
    id: 'vault-4',
    artistName: 'Sample Artist Four',
    releaseName: 'Bucket List',
    art: bucketHats,
    startDate: '2022-08-12',
    endDate: '2022-08-26',
    socialUrl: 'https://open.spotify.com/',
    description:
      'Placeholder description. A summer EP that dropped with limited-edition BnG bucket hats.',
    tracks: ['Bucket List', 'Sunburn', 'Last Call'],
  },
];

const dateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

/** e.g. "Nov 12, 2021 - Nov 26, 2021" (UTC so server and client agree). */
export const formatReleaseWindow = (start: string, end: string) =>
  `${dateFormat.format(new Date(start))} - ${dateFormat.format(new Date(end))}`;
