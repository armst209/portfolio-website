import type { Metadata } from 'next';
import Image from 'next/image';
import IconList from '@shared-components/layout/IconList';
import SectionHeader from '@shared-components/layout/SectionHeader';
import HowWeServe from '@/app/(main)/about/components/HowWeServe';
import aboutStory from '@public/assets/about_story.webp';
import bucketHats from '@public/assets/buckethats.webp';
import handOne from '@public/assets/hand1_yellow.svg';
import handTwo from '@public/assets/hand2_yellow.svg';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Biscuits n Groovy exists to create a more engaging and equitable digital music experience',
};

export default function AboutPage() {
  return (
    <>
      <header className="bg-linear-to-b from-groovy-teal/70 to-base px-4 pt-24 pb-10 md:px-8 md:pt-28">
        <p className="text-sm font-bold">About</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
          Biscuits n Groovy exists to create a more{' '}
          <span className="text-groovy-yellow">engaging</span> and{' '}
          <span className="text-groovy-yellow">equitable</span> digital music
          experience
        </h1>
      </header>

      <div className="flex flex-col gap-14 px-4 md:gap-20 md:px-8">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start">
          <figure className="overflow-hidden rounded-lg bg-surface">
            <Image
              src={bucketHats}
              alt="Biscuit n Groovy Bucket Hats"
              title="Founders Matt & Allison wearing Biscuit n Groovy bucket hats"
              placeholder="blur"
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="h-auto w-full"
            />
          </figure>

          <div className="flex flex-col gap-6">
            <p className="text-xl font-bold md:text-2xl">
              We partner with artists to debut exclusive music and album art to
              their most devoted fans.
            </p>
            <p className="leading-relaxed text-subdued md:text-lg">
              By offering superfans a unique collector experience, we bring them
              closer to the artists they love. In return, we’re able to pay
              artists better and give their music the lasting value it deserves.
            </p>
            <div className="rounded-lg bg-surface p-6">
              <p className="mb-5 font-bold">
                Two principles guide everything we do:
              </p>
              <IconList
                iconSize={40}
                items={[
                  {
                    id: 'empower',
                    icon: handOne,
                    content: (
                      <span className="text-lg font-bold text-white">
                        Empower trailblazing artists
                      </span>
                    ),
                  },
                  {
                    id: 'reward',
                    icon: handTwo,
                    content: (
                      <span className="text-lg font-bold text-white">
                        Recognize and reward true fandom
                      </span>
                    ),
                  },
                ]}
              />
            </div>
            <HowWeServe />
          </div>
        </section>

        <section aria-labelledby="our-story">
          <SectionHeader
            id="our-story"
            title="Our Story"
          />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
            <div className="flex flex-col gap-5 leading-relaxed text-subdued md:text-lg">
              <p>
                The idea for Biscuits n Groovy started with a shared love for
                music. More specifically, with our co-founders Matt &amp;
                Alison’s carefully-curated collection of vinyl records. While we
                love the convenience of digital streaming, there&apos;s a lot of
                things about the &quot;old school&quot; approach that streaming
                just can’t compete with. No, we don&apos;t mean the audio
                quality. It&apos;s about the{' '}
                <strong className="text-white">experience.</strong>
              </p>
              <p>
                From admiring an album&apos;s cover art to carefully dropping
                the needle, everything about listening to a vinyl record is
                intentional. It gives you a chance to sit back and really hear
                the artist’s story, like reading a good book from beginning to
                end. Physical music provides a much needed reprieve from the
                shuffle-and-go mentality that underpins streaming services, and
                for that matter permeates so much of our hectic lives. We built
                our collection to appreciate and support our favorite artists in
                a more meaningful way, and we believe other true fans want to do
                the same.
              </p>
              <p>
                So we started thinking, how can we take modern-day streaming,
                and infuse it with some of the intentionality of vinyl
                collecting? And in doing so, we can help artists recapture some
                of the autonomy and identity that has been stripped away by the
                proliferation of their music.
              </p>
              <p>
                That&apos;s why we started Biscuits n Groovy. While we&apos;re
                not a record company, the &quot;biscuits&quot; part of the name
                is an homage to our vinyl collection, the original inspiration.
                Just like the process of making and selecting records,
                everything we do at BnG is thoughtful, deliberate, and human.
              </p>
            </div>
            <figure className="overflow-hidden rounded-lg bg-surface">
              <Image
                src={aboutStory}
                alt="Co-Founder's Collection"
                title="Favorite vinyl from our co-founders’ collection"
                placeholder="blur"
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="p-4 text-sm text-subdued">
                Some favorites from our co-founders’ collection. In vinyl
                manufacturing, the puck-shaped disc that gets pressed into a
                record is called “the biscuit”
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </>
  );
}
