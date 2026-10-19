import Image from 'next/image';
import Card from '@shared-components/Card';
import PlayButton from '@shared-components/PlayButton';
import type { Release } from '@/types';

const ReleaseCard = ({ release }: { release: Release }) => {
  const { title, name, art, type } = release;

  return (
    <Card
      interactive
      className="group p-3">
      <article>
        <div className="relative mb-4 aspect-square overflow-hidden rounded-md bg-surface-highlight shadow-[0_8px_24px_rgb(0_0_0/0.5)]">
          <Image
            src={art}
            alt={`${title} cover art`}
            fill
            sizes="(min-width: 1280px) 16vw, (min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
          <div className="absolute right-2 bottom-2 translate-y-2 opacity-0 transition-all duration-300 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100">
            <PlayButton label={`Play ${title}`} />
          </div>
        </div>
        <h3 className="truncate font-bold">{title}</h3>
        <p className="mt-1 truncate text-sm text-subdued">
          {type} &middot; {name}
        </p>
      </article>
    </Card>
  );
};

export default ReleaseCard;
