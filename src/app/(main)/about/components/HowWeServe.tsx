'use client';

import { useId, useState } from 'react';
import TextLink from '@shared-components/TextLink';
import { cn } from '@/utils/cn';

const audiences = ['Fans', 'Artists'] as const;
type Audience = (typeof audiences)[number];

const FansPanel = () => (
  <>
    <p>
      Biscuits n Groovy offers music fans a revolutionary collector experience.
      With our biscuits, fans can finally prove they were one of the FIRST to
      hear new music. By directly supporting the artists they love, fans can
      become part of their story.
    </p>
    <p>
      Your music taste is part of your identity. Biscuits n Groovy lets you
      build a collection that’s uniquely yours, so you can show it off to the
      world and confidently say “I own this.” Plus if your favorite artist blows
      up, you can finally PROVE you were an original fan.
    </p>
  </>
);

const ArtistsPanel = () => (
  <>
    <p>
      Biscuits n Groovy helps artists earn more for their recorded music. Each
      biscuit is a blank canvas to share unique content with their superfans and
      bring them closer together. We’re committed to treating our artists right
      and empowering them to grow and thrive where other music platforms can’t
    </p>
    <div>
      <p className="font-bold text-white">Why release with BnG?</p>
      <ol className="mt-2 list-decimal space-y-1 pl-5 marker:font-bold marker:text-groovy-yellow">
        <li>Make more money</li>
        <li>Connect with your top fans</li>
        <li>Stand out from the crowd</li>
      </ol>
    </div>
    <p>
      Read more <TextLink href="/artists">here</TextLink>
    </p>
  </>
);

/** "How We Serve" Fans / Artists toggle, as Spotify-style filter chips. */
const HowWeServe = () => {
  const [active, setActive] = useState<Audience>('Fans');
  const baseId = useId();

  return (
    <div className="rounded-lg bg-surface-elevated p-6">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="mr-2 font-display text-xl font-bold">How We Serve:</h3>
        <div
          role="tablist"
          aria-label="How we serve"
          className="flex gap-2">
          {audiences.map((audience) => {
            const isActive = audience === active;
            return (
              <button
                key={audience}
                type="button"
                role="tab"
                id={`${baseId}-${audience}-tab`}
                aria-selected={isActive}
                aria-controls={`${baseId}-${audience}-panel`}
                onClick={() => setActive(audience)}
                className={cn(
                  'h-8 cursor-pointer rounded-full px-4 text-sm font-bold transition-colors',
                  isActive
                    ? 'bg-groovy-yellow text-black'
                    : 'bg-surface-highlight text-white hover:bg-white/20',
                )}>
                {audience}
              </button>
            );
          })}
        </div>
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-${active}-panel`}
        aria-labelledby={`${baseId}-${active}-tab`}
        className="mt-5 flex animate-fade-in flex-col gap-4 leading-relaxed text-subdued"
        key={active}>
        {active === 'Fans' ? <FansPanel /> : <ArtistsPanel />}
      </div>
    </div>
  );
};

export default HowWeServe;
