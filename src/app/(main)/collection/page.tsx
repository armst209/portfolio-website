import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/layout/SectionHeader';
import { buttonVariants } from '@/components/ui/Button';
import ExpiredInfoButton from '@/features/collection/components/ExpiredInfoButton';
import ExpiredReleaseCard from '@/features/collection/components/ExpiredReleaseCard';
import {
  sampleCollection,
  splitCollection,
} from '@/features/collection/data/sample-collection';
import ReleaseGrid from '@/features/releases/components/ReleaseGrid';
import musicIcon from '@public/assets/music-collection-yellow.svg';
import vinylIcon from '@public/assets/vinyl_yellow.svg';

export const metadata: Metadata = { title: 'Collection' };

const gridClass =
  'grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6';

export default function CollectionPage() {
  // Private route: src/proxy.ts redirects signed-out visitors to /signin.
  const { live, expired } = splitCollection(sampleCollection);
  const isEmpty = live.length === 0 && expired.length === 0;

  return (
    <>
      <PageHeader
        eyebrow="Your Library"
        title="Collection"
        description={`${live.length + expired.length} biscuits`}
      />
      <div className="flex flex-col gap-14 px-4 md:px-8">
        {isEmpty ? (
          <div className="flex flex-col items-center gap-6 rounded-lg bg-surface px-6 py-16 text-center">
            <h2 className="font-display text-3xl font-bold">
              Nothing to see here...yet.
            </h2>
            <Link
              href="/#music-showcase-return"
              className={buttonVariants()}>
              Start Your Collection
            </Link>
          </div>
        ) : (
          <>
            <section aria-labelledby="live-biscuits">
              <SectionHeader
                id="live-biscuits"
                title="Live Biscuits"
                icon={musicIcon}
              />
              <ReleaseGrid
                releases={live}
                emptyMessage="No releases? No problem. Head over to our showcase to start groovin`"
              />
              {live.length === 0 && (
                <Link
                  href="/#music-showcase-return"
                  className={buttonVariants({ className: 'mt-6' })}>
                  Head To Showcase
                </Link>
              )}
            </section>

            {expired.length > 0 && (
              <section aria-labelledby="expired-biscuits">
                <SectionHeader
                  id="expired-biscuits"
                  title="Expired Biscuits"
                  icon={vinylIcon}
                  className="mb-3"
                />
                <div className="mb-5">
                  <ExpiredInfoButton />
                </div>
                <ul className={gridClass}>
                  {expired.map((release) => (
                    <li key={release.id}>
                      <ExpiredReleaseCard release={release} />
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
}
