import Image from 'next/image';
import Link from 'next/link';
import heroImage from '@public/assets/hero-image.webp';
import { buttonVariants } from '@/components/ui/Button';

const Hero = () => (
  <section
    aria-labelledby="hero-title"
    className="relative overflow-hidden bg-linear-to-b from-groovy-teal/70 via-groovy-teal-deep/40 to-base px-4 pt-24 md:px-8 md:pt-28">
    <div
      aria-hidden
      className="pointer-events-none absolute -top-24 right-[-10%] size-[28rem] rounded-full bg-groovy-yellow/25 blur-3xl"
    />
    <div className="relative grid items-end gap-8 md:grid-cols-[1.1fr_1fr]">
      <div className="pb-10 md:pb-16">
        <p className="text-sm font-bold tracking-widest text-groovy-yellow uppercase">
          Biscuits &apos;n&apos; Groovy
        </p>
        <h1
          id="hero-title"
          className="mt-3 font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-6xl lg:text-8xl">
          NEW MUSIC IS OUR JAM
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
          Stream and collect exclusive{' '}
          <Link
            href="#whats-a-biscuit"
            className="font-bold text-groovy-yellow underline decoration-2 underline-offset-4 hover:text-groovy-yellow-hover">
            biscuits
          </Link>{' '}
          from your favorite artists. Prove your fandom.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/#music-showcase-return"
            className={buttonVariants({ variant: 'primary', size: 'lg' })}>
            Start Your Collection
          </Link>
          <Link
            href="#how-it-works"
            className={buttonVariants({ variant: 'outline', size: 'lg' })}>
            How it works
          </Link>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-md md:max-w-none">
        <Image
          src={heroImage}
          alt="Fan listening to music on headphones"
          placeholder="blur"
          priority
          sizes="(min-width: 768px) 45vw, 90vw"
          // Mask (not an overlay) so the image fades into whatever gradient
          // sits behind it.
          className="h-auto w-full mask-[linear-gradient(to_bottom,black_55%,transparent_100%)]"
        />
      </div>
    </div>
  </section>
);

export default Hero;
