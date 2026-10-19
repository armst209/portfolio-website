'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CalendarDays, ExternalLink, Music } from 'lucide-react';
import Card from '@shared-components/Card';
import Modal from '@shared-components/Modal';
import { buttonVariants } from '@shared-components/Button';
import { formatReleaseWindow, type VaultRelease } from '../data/sample-vault';

const socialLabel = (url: string) =>
  /spotify/.test(url) ? 'Spotify' : /tiktok/.test(url) ? 'TikTok' : 'Website';

const VaultCard = ({ release }: { release: VaultRelease }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    artistName,
    releaseName,
    art,
    startDate,
    endDate,
    socialUrl,
    description,
    tracks,
  } = release;
  const releaseWindow = formatReleaseWindow(startDate, endDate);

  return (
    <>
      <Card
        interactive
        className="group h-full p-3">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full cursor-pointer text-left"
          aria-label={`${releaseName} by ${artistName}`}>
          <div className="relative mb-4 aspect-square overflow-hidden rounded-md bg-surface-highlight shadow-[0_8px_24px_rgb(0_0_0/0.5)]">
            <Image
              src={art}
              alt=""
              fill
              sizes="(min-width: 1280px) 16vw, (min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="truncate font-bold">{artistName}</p>
          <p className="mt-1 truncate text-sm text-subdued">{releaseName}</p>
        </button>
      </Card>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={`${releaseName} by ${artistName}`}
        className="max-w-3xl">
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image
                src={art}
                alt={`${releaseName} biscuit`}
                fill
                sizes="(min-width: 768px) 300px, 90vw"
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold">
              {artistName}
            </h2>
            <p className="text-subdued">{releaseName}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-groovy-yellow">
              <CalendarDays
                aria-hidden
                className="size-4"
              />
              {releaseWindow}
            </p>
            {socialUrl && (
              <a
                href={socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: 'outline',
                  size: 'sm',
                  className: 'mt-4',
                })}>
                {socialLabel(socialUrl)}
                <ExternalLink
                  aria-hidden
                  className="size-3.5"
                />
              </a>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <p className="leading-relaxed text-subdued">{description}</p>
            <div>
              <h3 className="mb-2 text-sm font-bold tracking-widest text-subdued uppercase">
                Tracklist
              </h3>
              <ol className="divide-y divide-edge rounded-md bg-surface">
                {tracks.map((track, index) => (
                  <li
                    key={track}
                    className="flex items-center gap-4 px-4 py-3">
                    <span className="w-4 text-right text-sm text-subdued tabular-nums">
                      {index + 1}
                    </span>
                    <Music
                      aria-hidden
                      className="size-4 text-groovy-teal"
                    />
                    {track}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VaultCard;
