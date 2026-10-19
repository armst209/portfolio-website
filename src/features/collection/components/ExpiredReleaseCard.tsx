'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Modal from '@/components/ui/Modal';
import type { CollectionRelease } from '../data/sample-collection';

/** Expired biscuits can't be streamed, but their album-art NFT stays. */
const ExpiredReleaseCard = ({ release }: { release: CollectionRelease }) => {
  const [isNftOpen, setIsNftOpen] = useState(false);
  const { title, name, art, type } = release;

  return (
    <Card
      interactive
      className="group p-3">
      <article>
        <div className="relative mb-4 aspect-square overflow-hidden rounded-md bg-surface-highlight">
          <Image
            src={art}
            alt={`${title} cover art`}
            fill
            sizes="(min-width: 1280px) 16vw, (min-width: 768px) 25vw, 50vw"
            className="object-cover grayscale-[60%] transition duration-300 group-hover:grayscale-0"
          />
          <span className="absolute top-2 left-2 rounded-full bg-black/75 px-2.5 py-1 text-xs font-bold text-subdued">
            Expired
          </span>
          <div className="absolute inset-x-2 bottom-2 translate-y-2 opacity-0 transition-all duration-300 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100">
            <Button
              size="sm"
              variant="secondary"
              className="w-full"
              onClick={() => setIsNftOpen(true)}>
              View NFT
            </Button>
          </div>
        </div>
        <h3 className="truncate font-bold">{title}</h3>
        <p className="mt-1 truncate text-sm text-subdued">
          {type} &middot; {name}
        </p>
      </article>

      <Modal
        open={isNftOpen}
        onClose={() => setIsNftOpen(false)}
        title={`${title} NFT`}>
        <div className="relative mt-4 aspect-square overflow-hidden rounded-md">
          <Image
            src={art}
            alt={`${title} album art NFT`}
            fill
            sizes="512px"
            className="object-cover"
          />
        </div>
        <p className="mt-4 font-display text-2xl font-bold">{title}</p>
        <p className="text-subdued">{name}</p>
        <p className="mt-4 flex items-center gap-2 text-sm text-groovy-teal">
          <ShieldCheck
            aria-hidden
            className="size-4"
          />
          Album art secured by an NFT on the Flow blockchain
        </p>
      </Modal>
    </Card>
  );
};

export default ExpiredReleaseCard;
