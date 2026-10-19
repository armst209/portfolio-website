import Image from 'next/image';
import IconList from '@/components/layout/IconList';
import SectionHeader from '@/components/layout/SectionHeader';
import speakerIcon from '@public/assets/speaker_yellow.svg';
import vinylIcon from '@public/assets/vinyl_yellow.svg';
import { blockchainBasics, flowPerks, nftsExplained } from '../data';

const VinylList = ({ items }: { items: string[] }) => (
  <IconList
    items={items.map((text) => ({ id: text.slice(0, 32), content: text }))}
  />
);

const NftsExplained = () => (
  <section
    id="nft-scroll-purchase"
    aria-labelledby="NFTsExplained"
    className="scroll-mt-20">
    <SectionHeader
      id="NFTsExplained"
      title="NFTs Explained"
      icon={vinylIcon}
    />
    <div className="rounded-lg bg-surface p-6 md:p-8">
      <VinylList items={nftsExplained} />

      <aside className="mt-8 overflow-hidden rounded-lg bg-linear-to-br from-groovy-teal-deep to-surface-elevated">
        <p className="px-6 pt-6 font-display text-xl md:px-8 md:text-2xl">
          A better blockchain —{' '}
          <strong className="text-groovy-yellow">now that’s groovy</strong>
        </p>
        <div className="flex gap-4 p-6 md:p-8">
          <Image
            src={speakerIcon}
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0"
          />
          <div className="text-white/85">
            <p>
              Biscuits n Groovy is proudly built on Flow, the blockchain trusted
              by NBA Top Shot. Flow has three big perks for fans:
            </p>
            <ol className="mt-4 flex flex-col gap-3">
              {flowPerks.map((perk, index) => (
                <li
                  key={perk}
                  className="flex gap-3">
                  <span className="font-display text-lg font-extrabold text-groovy-yellow">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{perk}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5">
              Learn more about Flow{' '}
              <a
                href="https://www.onflow.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white underline underline-offset-4 hover:text-groovy-yellow">
                here
              </a>
            </p>
          </div>
        </div>
      </aside>

      <h3 className="mt-10 mb-5 font-display text-xl font-bold md:text-2xl">
        Back up… what are blockchains and tokens anyways?
      </h3>
      <VinylList items={blockchainBasics} />
    </div>
  </section>
);

export default NftsExplained;
