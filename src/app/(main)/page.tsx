import Attention from '@shared-components/home/Attention';
import Hero from '@shared-components/home/Hero';
import HowItWorks from '@/shared-components/home/HowItWorks/HowItWorks';
import KnowYourCollection from '@shared-components/home/KnowYourCollection';
import MusicShowcase from '@shared-components/home/MusicShowcase';

export default function Home() {
  return (
    <div className="flex flex-col gap-14 md:gap-20">
      <Hero />
      <HowItWorks />
      <MusicShowcase />
      <KnowYourCollection />
      <Attention />
    </div>
  );
}
