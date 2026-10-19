import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import IconList from '@shared-components/layout/IconList';
import SectionHeader from '@shared-components/layout/SectionHeader';
import { buttonVariants } from '@shared-components/Button';
import TextLink from '@shared-components/TextLink';
import ArtistInquiryForm from './components/ArtistInquiryForm';
import addIcon from '@public/assets/add2_yellow.svg';
import collectIcon from '@public/assets/collectshare.svg';
import connectIcon from '@public/assets/connect.svg';
import loveSongIcon from '@public/assets/love-song2.svg';
import micDrop from '@public/assets/micdrop.webp';
import micHold from '@public/assets/michold.webp';
import moneyIcon from '@public/assets/money-bag2_yellow.svg';
import speakerIcon from '@public/assets/speaker_yellow.svg';
import standOutIcon from '@public/assets/3_standout.svg';
import voiceIcon from '@public/assets/voice.svg';

export const metadata: Metadata = {
  title: 'Artists',
  description:
    'Biscuits n Groovy is a new kind of streaming platform, empowering you to create and capture lasting value for new music. By dropping with us, you’ll tap into your network of superfans and earn an additional revenue stream, without any impact to your existing distribution channels.',
};

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-white">{children}</strong>
);

const formulaIcons = [loveSongIcon, voiceIcon, collectIcon];

export default function ArtistsPage() {
  return (
    <>
      <header className="relative overflow-hidden bg-linear-to-b from-groovy-yellow/45 to-base px-4 pt-24 md:px-8 md:pt-28">
        <div className="grid items-end gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="pb-10">
            <p className="text-sm font-bold">For Artists</p>
            <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight md:text-7xl">
              Artists
            </h1>
            <div className="mt-6 flex max-w-xl items-start gap-4 rounded-lg bg-black/40 p-5 backdrop-blur">
              <Image
                src={speakerIcon}
                alt=""
                width={40}
                height={40}
                className="size-10 shrink-0"
              />
              <p className="md:text-lg">
                Interested in releasing with Biscuits n Groovy? Contact us{' '}
                <TextLink href="#artists-form">here</TextLink> and we’ll be in
                touch ASAP.
              </p>
            </div>
          </div>
          <Image
            src={micHold}
            alt="Artist holding a microphone"
            placeholder="blur"
            priority
            sizes="(min-width: 768px) 35vw, 80vw"
            className="mx-auto hidden h-auto max-h-[26rem] w-auto md:block"
          />
        </div>
      </header>

      <div className="flex flex-col gap-14 px-4 md:gap-20 md:px-8">
        <section className="flex flex-col items-start gap-6">
          <div
            aria-hidden
            className="flex items-center gap-3">
            {formulaIcons.map((icon, index) => (
              <span
                key={index}
                className="flex items-center gap-3">
                {index > 0 && (
                  <Image
                    src={addIcon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                )}
                <span className="flex size-16 items-center justify-center rounded-full bg-surface-highlight">
                  <Image
                    src={icon}
                    alt=""
                    width={36}
                    height={36}
                    className="size-9"
                  />
                </span>
              </span>
            ))}
          </div>
          <p className="max-w-3xl text-lg leading-relaxed md:text-xl">
            Biscuits n Groovy is a new kind of streaming platform, empowering
            you to create and capture lasting value for new music. By dropping
            with us, you’ll tap into your network of superfans and earn an
            additional revenue stream, without any impact to your existing
            distribution channels.
          </p>
        </section>

        <div className="grid gap-4 lg:grid-cols-2">
          <section
            aria-labelledby="artists-how-it-works"
            className="rounded-lg bg-surface p-6 md:p-8">
            <SectionHeader
              id="artists-how-it-works"
              title="How it Works"
            />
            <IconList
              items={[
                {
                  id: 'choose',
                  content: (
                    <>
                      <Strong>Choose</Strong> - You choose the drop date for
                      your release, how much to charge, and how long it’s
                      available. Unlike on other platforms, with BnG you’re in
                      control.
                    </>
                  ),
                },
                {
                  id: 'drop',
                  content: (
                    <>
                      <Strong>Drop</Strong> - Fans purchase your music and can
                      stream it exclusively on BnG during that time. They also
                      get a limited-edition digital album cover backed by an NFT
                      (non-fungible token) to add to their collection.
                    </>
                  ),
                },
                {
                  id: 'earn',
                  content: (
                    <>
                      <Strong>Earn</Strong> - After the BnG release window ends,
                      you cash out and are free to release the music elsewhere
                      if you like. We take 25% of net sales and give you the
                      remaining 75%, plus a fully transparent breakdown of how
                      your release performed.
                    </>
                  ),
                },
              ]}
            />
          </section>

          <section
            aria-labelledby="why-release"
            className="rounded-lg bg-surface p-6 md:p-8">
            <SectionHeader
              id="why-release"
              title="Why Release With Us?"
              icon={speakerIcon}
            />
            <IconList
              iconSize={36}
              items={[
                {
                  id: 'money',
                  icon: moneyIcon,
                  content: (
                    <>
                      <Strong>Make more money</Strong> - We&apos;re not another
                      subscription pool. You set the price, and fans buy your
                      music directly. Plus BnG is designed to be used in
                      addition to (not instead of) other streaming services, so
                      the money you earn with us is supplemental.
                    </>
                  ),
                },
                {
                  id: 'connect',
                  icon: connectIcon,
                  content: (
                    <>
                      <Strong>Connect with your top fans</Strong> - BnG is built
                      for superfans. We help you discover who they are, and keep
                      them engaged with exclusive content &amp; collectibles.
                    </>
                  ),
                },
                {
                  id: 'stand-out',
                  icon: standOutIcon,
                  content: (
                    <>
                      <Strong>Stand out from the crowd</Strong> - Consumers are
                      overwhelmed by free content. With BnG, you&apos;ll create
                      more hype for each drop and show fans that great music is
                      worth collecting.
                    </>
                  ),
                },
              ]}
            />
          </section>
        </div>

        <section
          aria-labelledby="artists-nfts"
          className="overflow-hidden rounded-lg bg-linear-to-br from-groovy-teal-deep to-surface p-6 md:p-8">
          <h2
            id="artists-nfts"
            className="font-display text-2xl font-bold md:text-3xl">
            Heard of NFTs but don’t know where to start?
          </h2>
          <div className="mt-5 grid gap-5 leading-relaxed text-white/85 md:grid-cols-3">
            <p>
              We make it easy for you to get in on the action and capture hype
              for your music. When your release does well, your album art NFTs
              can increase in value as collectors resell them, giving you a
              whole new way to earn money.
            </p>
            <p>
              We handle the entire technical process so you can spend your time
              making music, instead of worrying about the blockchain. We also
              make it easy for your fans to start collecting — all they need is
              a credit card, not cryptocurrency.
            </p>
            <p>
              In fact, everything on BnG is in dollars and common sense, unlike
              other NFT marketplaces full of confusing crypto charts and
              auctions. We strive to be the most artist-friendly platform and to
              keep the spotlight where it should: on you and your music. Learn
              more about NFTs{' '}
              <TextLink href="/faq#nft-scroll-purchase">here</TextLink>.
            </p>
          </div>
        </section>

        <section
          id="artists-form"
          aria-labelledby="artists-form-title"
          className="grid scroll-mt-20 overflow-hidden rounded-lg bg-surface md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="p-6 md:p-8">
            <h2
              id="artists-form-title"
              className="font-display text-2xl font-bold md:text-3xl">
              Release with BnG
            </h2>
            <p className="mt-2 mb-6 text-subdued">
              Tell us about yourself and we’ll be in touch ASAP.
            </p>
            <ArtistInquiryForm />
          </div>
          <div className="relative hidden bg-linear-to-t from-groovy-yellow/30 to-transparent md:block">
            <Image
              src={micDrop}
              alt="Artist dropping a microphone"
              placeholder="blur"
              sizes="30vw"
              className="absolute bottom-0 left-1/2 h-[95%] w-auto max-w-none -translate-x-1/2 object-contain"
            />
          </div>
        </section>

        <p className="text-subdued">
          Have questions first? Check out our{' '}
          <Link
            href="/faq"
            className={buttonVariants({
              variant: 'outline',
              size: 'sm',
              className: 'ml-1',
            })}>
            FAQ
          </Link>
        </p>
      </div>
    </>
  );
}
