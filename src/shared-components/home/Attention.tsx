import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@shared-components/layout/SectionHeader';
import { buttonVariants } from '@shared-components/Button';
import letterIcon from '@public/assets/letter2_yellow.svg';
import reminderImage from '@public/assets/subscribe-outline.webp';
import speakerIcon from '@public/assets/speaker_yellow.svg';
import NewsletterForm from './NewsletterForm';

const Attention = () => (
  <section
    aria-labelledby="attention"
    className="px-4 md:px-8">
    <SectionHeader
      id="attention"
      title="Attention"
      icon={speakerIcon}
    />
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="flex flex-col justify-between gap-6 rounded-lg bg-linear-to-br from-groovy-yellow to-[#c9c20b] p-6 text-black md:p-8">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            TIRED OF MAKING PENNIES FROM STREAMING?
          </p>
          <p className="mt-4 max-w-lg text-black/80 md:text-lg">
            We’ll help you earn more money and connect with your top fans. Learn
            more about the benefits of releasing your music on BnG
          </p>
        </div>
        <Link
          href="/artists"
          className={buttonVariants({
            variant: 'secondary',
            className: 'self-start bg-black text-white hover:bg-neutral-800',
          })}>
          For Artists
        </Link>
      </div>

      <div className="relative grid overflow-hidden rounded-lg bg-surface sm:grid-cols-[1fr_auto]">
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Image
              src={letterIcon}
              alt=""
              width={36}
              height={36}
            />
            <h3 className="font-display text-2xl font-bold">
              JOIN OUR NEWSLETTER
            </h3>
          </div>
          <p className="mt-2 text-subdued">
            Stay up to date on all things groovy
          </p>
          <NewsletterForm />
        </div>
        <Image
          src={reminderImage}
          alt="reminder image"
          placeholder="blur"
          sizes="200px"
          className="hidden h-full max-h-72 w-auto self-end object-contain sm:block"
        />
      </div>
    </div>
  </section>
);

export default Attention;
