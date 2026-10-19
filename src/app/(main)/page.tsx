import Attention from '@/features/home/components/Attention';
import Hero from '@/features/home/components/Hero';
import HowItWorks from '@/features/home/components/HowItWorks';
import KnowYourCollection from '@/features/home/components/KnowYourCollection';
import MusicShowcase from '@/features/home/components/MusicShowcase';

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
