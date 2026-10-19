import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, ExternalLink, MapPin } from 'lucide-react';
import IconList from '@/components/layout/IconList';
import SectionHeader from '@/components/layout/SectionHeader';
import { buttonVariants } from '@/components/ui/Button';
import TextLink from '@/components/ui/TextLink';
import EventCountdown from '@/features/events/components/EventCountdown';
import { featuredEvent as event } from '@/features/events/data';
import NewsletterForm from '@/features/home/components/NewsletterForm';
import speakerIcon from '@public/assets/speaker_yellow.svg';

export const metadata: Metadata = {
  title: 'Events',
  description: `${event.title} — an exclusive tailgate concert in Ann Arbor.`,
};

const details = [
  { label: 'Date', value: event.date, icon: CalendarDays },
  { label: 'Time', value: event.time, icon: Clock },
  { label: 'Location', value: event.location, icon: MapPin },
];

export default function EventsPage() {
  return (
    <>
      <header className="relative isolate overflow-hidden px-4 pt-24 pb-10 md:px-8 md:pt-28">
        <Image
          src={event.image}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-10 object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-groovy-teal-deep/60 via-base/60 to-base" />
        <p className="text-sm font-bold">Events</p>
        <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight md:text-7xl">
          {event.title}
        </h1>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/85">
          {details.map(({ label, value, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-2">
              <Icon
                aria-hidden
                className="size-4 text-groovy-yellow"
              />
              <span className="sr-only">{label}:</span>
              {value}
            </li>
          ))}
        </ul>
      </header>

      <div className="flex flex-col gap-14 px-4 md:gap-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <section
            aria-label="Event details"
            className="flex flex-col gap-6">
            <EventCountdown startsAt={event.startsAt} />
            <div className="flex flex-col gap-4 leading-relaxed text-subdued md:text-lg">
              <p>
                Biscuits n Groovy brings you ZEVY, one of the brightest young
                EDM DJs in the game, at 1001 Oakland Ave in the heart of Ann
                Arbor on November 6, 2021 for an exclusive tailgate concert. The
                show will begin promptly 3 hours prior to kickoff. Space is
                limited so fans will be let in on a first come first served
                bases. However, you may reserve your spot by grabbing a VIP
                ticket for just $10 on bngroovy.com and presenting it at the
                door.
              </p>
              <p>
                VIP access tickets ensure you get a spot at the show and get you
                exclusive perks including:
              </p>
            </div>
            <div className="rounded-lg bg-surface p-6">
              <IconList
                items={[
                  ...event.perks.map((perk) => ({ id: perk, content: perk })),
                  {
                    id: 'release-note',
                    content: (
                      <span className="text-sm">
                        Each BnG release includes exclusive streaming access and
                        a collectible album cover. Read more{' '}
                        <TextLink href="/faq">here</TextLink>.
                      </span>
                    ),
                  },
                ]}
              />
            </div>
            <p className="leading-relaxed text-subdued md:text-lg">
              Once you get your ticket, Tweet at us using the hashtag{' '}
              <strong className="text-groovy-yellow">{event.hashtag}</strong>{' '}
              for a chance to win some exclusive merch and be featured on our
              socials!
            </p>
            <Link
              href="/#music-showcase-return"
              className={buttonVariants({
                size: 'lg',
                className: 'self-start',
              })}>
              VIP Tickets &amp; Exclusive Release
            </Link>
          </section>

          <aside className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-lg bg-surface">
              <iframe
                title={`Map of ${event.location}`}
                src={event.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0 grayscale-[30%] invert-[90%] hue-rotate-180"
              />
            </div>
            <div className="rounded-lg bg-surface p-6">
              <h2 className="font-display text-xl font-bold">
                Connect with {event.artist}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {event.socials.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: 'outline',
                        size: 'sm',
                      })}>
                      {label}
                      <ExternalLink
                        aria-hidden
                        className="size-3.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <section className="flex flex-col items-start justify-between gap-6 rounded-lg bg-linear-to-br from-groovy-yellow to-[#c9c20b] p-6 text-black md:p-8">
            <div className="flex items-center gap-3">
              <Image
                src={speakerIcon}
                alt=""
                width={40}
                height={40}
                className="size-10 brightness-0"
              />
              <h2 className="font-display text-2xl font-extrabold md:text-3xl">
                LEARN MORE ABOUT BNG
              </h2>
            </div>
            <Link
              href="/about"
              className={buttonVariants({
                variant: 'secondary',
                className: 'bg-black text-white hover:bg-neutral-800',
              })}>
              Learn More
            </Link>
          </section>
          <section className="rounded-lg bg-surface p-6 md:p-8">
            <SectionHeader
              title="JOIN OUR NEWSLETTER"
              subtitle="Stay up to date on all things groovy"
              className="mb-0"
            />
            <NewsletterForm />
          </section>
        </div>
      </div>
    </>
  );
}
