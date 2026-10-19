import Image from 'next/image';
import vinylIcon from '@public/assets/vinyl_yellow.svg';
import type { Release } from '@/types';
import ReleaseCard from './ReleaseCard';

type ReleaseGridProps = {
  releases: Release[];
  emptyMessage?: string;
};

const ReleaseGrid = ({
  releases,
  emptyMessage = 'No biscuits are available right now. Check back soon!',
}: ReleaseGridProps) => {
  if (releases.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg bg-surface px-6 py-12 text-center">
        <Image
          src={vinylIcon}
          alt=""
          width={56}
          height={56}
        />
        <p className="text-subdued">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {releases.map((release) => (
        <li key={release.id}>
          <ReleaseCard release={release} />
        </li>
      ))}
    </ul>
  );
};

export default ReleaseGrid;
