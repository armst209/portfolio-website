import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/layout/SectionHeader';
import vinylIcon from '@public/assets/vinyl_yellow.svg';
import { biscuitNameTile, biscuitParts } from '../data';

const KnowYourCollection = () => (
  <section
    aria-labelledby="whats-a-biscuit"
    className="scroll-mt-20 px-4 md:px-8">
    <SectionHeader
      id="whats-a-biscuit"
      title="What's a Biscuit?"
      subtitle="It’s not just a delicious pastry. Our biscuits are new-age digital records. Much like a traditional record, each BnG biscuit has 3 parts:"
      icon={vinylIcon}
    />
    <div className="overflow-hidden rounded-lg bg-linear-to-br from-surface-highlight via-surface to-surface">
      <ol className="divide-y divide-edge">
        {biscuitParts.map(({ id, title, message, href }, index) => (
          <li
            key={id}
            className="group grid grid-cols-[3rem_1fr] items-start gap-4 px-5 py-6 transition-colors hover:bg-white/5 md:grid-cols-[4rem_14rem_1fr] md:px-8">
            <span className="font-display text-3xl font-extrabold text-groovy-yellow md:text-4xl">
              {index + 1}
            </span>
            <h3 className="font-display text-xl font-bold md:pt-1">{title}</h3>
            <p className="col-span-2 text-subdued md:col-span-1 md:pt-1">
              {message}{' '}
              {href && (
                <Link
                  href={href.link}
                  className="font-bold text-white underline underline-offset-4 hover:text-groovy-yellow">
                  {href.text}
                </Link>
              )}
            </p>
          </li>
        ))}
      </ol>
      <div className="flex items-center gap-4 bg-groovy-teal/15 px-5 py-5 md:px-8">
        <Image
          src={biscuitNameTile.image.src}
          alt={biscuitNameTile.image.alt}
          width={40}
          height={40}
        />
        <p>
          {biscuitNameTile.message}{' '}
          {biscuitNameTile.href && (
            <Link
              href={biscuitNameTile.href.link}
              className="font-bold text-groovy-yellow underline underline-offset-4">
              {biscuitNameTile.href.text}
            </Link>
          )}
        </p>
      </div>
    </div>
  </section>
);

export default KnowYourCollection;
