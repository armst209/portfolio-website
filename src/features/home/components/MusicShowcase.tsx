import SectionHeader from '@/components/layout/SectionHeader';
import musicIcon from '@public/assets/music-collection-yellow.svg';
import ReleaseGrid from '@/features/releases/components/ReleaseGrid';
import { sampleReleases } from '@/features/releases/data/sample-releases';

const MusicShowcase = () => (
  <section
    aria-labelledby="music-showcase-return"
    className="scroll-mt-20 px-4 md:px-8">
    <SectionHeader
      id="music-showcase-return"
      title="Music Showcase"
      subtitle="Available biscuits shown below. Click on a title for more details"
      icon={musicIcon}
      action={{ href: '/releases', label: 'Show all' }}
    />
    <ReleaseGrid releases={sampleReleases.slice(0, 6)} />
  </section>
);

export default MusicShowcase;
