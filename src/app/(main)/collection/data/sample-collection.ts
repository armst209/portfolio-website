/**
 * PLACEHOLDER DATA — the signed-in user's library.
 * query (e.g. a `library` table joined to releases) once purchases exist.
 */
import { sampleReleases } from '@main/releases/data/sample-releases';
import type { Release } from '@/types';

export type CollectionRelease = Release & { isExpired: boolean };

export const sampleCollection: CollectionRelease[] = sampleReleases.map(
  (release, index) => ({ ...release, isExpired: index >= 3 }),
);

export const splitCollection = (releases: CollectionRelease[]) => ({
  live: releases.filter((release) => !release.isExpired),
  expired: releases.filter((release) => release.isExpired),
});
