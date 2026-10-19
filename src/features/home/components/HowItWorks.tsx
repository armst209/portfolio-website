import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/layout/SectionHeader';
import Card from '@/components/ui/Card';
import { howItWorks } from '../data';

const HowItWorks = () => (
  <section
    aria-labelledby="how-it-works"
    className="scroll-mt-20 px-4 md:px-8">
    <SectionHeader
      id="how-it-works"
      title="How It Works"
    />
    <ol className="grid gap-4 md:grid-cols-3">
      {howItWorks.map(({ id, title, image, message }, index) => (
        <li key={id}>
          <Card
            interactive
            className="flex h-full flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
              <Image
                src={image.src}
                alt={image.alt}
                width={56}
                height={56}
                className="size-14"
              />
              <span
                aria-hidden
                className="font-display text-5xl font-extrabold text-white/10">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="font-display text-xl font-bold">{title}</h3>
            <p className="text-subdued">{message}</p>
          </Card>
        </li>
      ))}
    </ol>
    <p className="mt-6 text-subdued">
      Get answers and learn more about our{' '}
      <span className="font-bold text-groovy-teal">eco-friendly</span> NFTs on
      our{' '}
      <Link
        href="/faq"
        className="font-bold text-white underline-offset-4 hover:underline">
        FAQ
      </Link>{' '}
      page
    </p>
  </section>
);

export default HowItWorks;
