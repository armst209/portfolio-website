/**
 * PLACEHOLDER DATA
 * exists. Artwork reuses photography already in /public/assets.
 */
import aboutStory from '@public/assets/about_story.webp';
import bucketHats from '@public/assets/buckethats.webp';
import crowd from '@public/assets/crowd.jpg';
import hero from '@public/assets/hero.webp';
import micDrop from '@public/assets/micdrop.webp';
import micHold from '@public/assets/michold.webp';
import type { Release } from '@/types';

export const sampleReleases: Release[] = [
  {
    id: 'sample-mic-drop',
    title: 'Mic Drop',
    name: 'Sample Artist',
    art: micDrop,
    type: 'Single',
  },
  {
    id: 'sample-front-row',
    title: 'Front Row',
    name: 'Sample Artist',
    art: crowd,
    type: 'EP',
  },
  {
    id: 'sample-bucket-hats',
    title: 'Bucket Hats',
    name: 'Sample Artist',
    art: bucketHats,
    type: 'Single',
  },
  {
    id: 'sample-hold-steady',
    title: 'Hold Steady',
    name: 'Sample Artist',
    art: micHold,
    type: 'Album',
  },
  {
    id: 'sample-pink-static',
    title: 'Pink Static',
    name: 'Sample Artist',
    art: hero,
    type: 'Single',
  },
  {
    id: 'sample-origin-story',
    title: 'Origin Story',
    name: 'Sample Artist',
    art: aboutStory,
    type: 'EP',
  },
];

export const searchReleases = (releases: Release[], query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return releases;
  return releases.filter(
    ({ title, name, type }) =>
      title.toLowerCase().includes(q) ||
      name.toLowerCase().includes(q) ||
      type.toLowerCase().includes(q),
  );
};
