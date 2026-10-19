import crowd from '@public/assets/crowd.jpg';

export const featuredEvent = {
  id: 'bng-presents-zevy',
  artist: 'ZEVY',
  title: 'BnG presents ZEVY',
  // The original flyer (zevyevent.webp) isn't in either repo; the crowd shot
  // stands in until it's recovered.
  image: crowd,
  startsAt: '2021-11-06T00:00:00-04:00',
  date: '11/6/2021',
  time: 'Concert will begin 3 hours prior to kickoff',
  location: '1001 Oakland Ave, Ann Arbor, MI',
  hashtag: '#BnGpresentsZEVY',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.374961781665!2d-83.7398452847149!3d42.27051864874446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae48ef0ac2a1%3A0x466cdf5a2faa3bb8!2s1001%20Oakland%20Ave%2C%20Ann%20Arbor%2C%20MI%2048104!5e0!3m2!1sen!2sus!4v1634905761283!5m2!1sen!2sus',
  socials: [
    { label: 'TikTok', href: 'https://www.tiktok.com/@zevymusic?lang=en' },
    {
      label: 'Spotify',
      href: 'https://open.spotify.com/artist/3Rr9ksBPquEWyD9fP2VBZk',
    },
    { label: 'Instagram', href: 'https://www.instagram.com/zevymusic/?hl=en' },
  ],
  perks: [
    'Guaranteed admission to the event',
    'A raffle ticket to win a BnG bucket hat signed by ZEVY',
    'An exclusive audio snippet of ZEVY’s brand new single, “Green Eyes”',
    'A free copy of “Green Eyes” when it drops on November 12th',
  ],
};

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/** Time left until `target`, or null once it has passed. */
export const getCountdown = (target: number, now: number): Countdown | null => {
  const distance = target - now;
  if (distance <= 0) return null;
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance % 86_400_000) / 3_600_000),
    minutes: Math.floor((distance % 3_600_000) / 60_000),
    seconds: Math.floor((distance % 60_000) / 1000),
  };
};
