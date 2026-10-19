import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import ReleaseGrid from '@/features/releases/components/ReleaseGrid';
import { sampleReleases } from '@/features/releases/data/sample-releases';

export const metadata: Metadata = { title: 'Releases' };

export default function ReleasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Biscuits"
        title="Releases"
        tone="yellow"
        description="Available biscuits shown below. Stream them here before they drop anywhere else."
      />
      <div className="px-4 md:px-8">
        <ReleaseGrid releases={sampleReleases} />
      </div>
    </>
  );
}
