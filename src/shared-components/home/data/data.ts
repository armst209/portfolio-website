import collectShare from '@public/assets/collectshare.svg';
import loveSong from '@public/assets/love-song2.svg';
import question from '@public/assets/question2.svg';
import vinyl from '@public/assets/vinyl_yellow.svg';
import voice from '@public/assets/voice.svg';
import type { KnowYourCollectionTile, SectionTile } from '@/types';

export const howItWorks: SectionTile[] = [
  {
    id: 1,
    title: 'Exclusive Music For Superfans',
    image: { src: loveSong, alt: 'love song icon' },
    message:
      'We partner with trendsetting artists to debut new music. Show your loyalty, and support your favorite artists directly with each purchase.',
  },
  {
    id: 2,
    title: "Stream Here Before It's Gone",
    image: { src: voice, alt: 'voice icon' },
    message:
      "We're not another subscription. Buy the music you can’t wait to hear, and stream with us before it drops anywhere else. Get it while it’s hot, since it’s only streaming for a limited time.",
  },
  {
    id: 3,
    title: 'Collect & Share Your Exclusive Records',
    image: { src: collectShare, alt: 'collect icon' },
    message:
      'Each biscuit includes a unique insert and digital album cover. Secured by NFT technology, these assets let you own a permanent piece of music history and prove you’re a top fan. Build your collection and show it off!',
  },
];

export const biscuitParts: KnowYourCollectionTile[] = [
  {
    id: 1,
    title: 'Early Streaming',
    image: { src: vinyl, alt: 'record favorite icon' },
    message:
      'Stream new music here during our limited release window, before it drops anywhere else.',
    href: null,
  },
  {
    id: 2,
    title: 'Digital Album Cover',
    image: { src: vinyl, alt: 'record favorite icon' },
    message:
      'Build your collection of album art to prove you’re a top fan. Each cover is secured by an NFT to guarantee its authenticity. Our NFTs are simple & eco-friendly. Learn more',
    href: { link: '/faq#nft-scroll-purchase', text: 'here' },
  },
  {
    id: 3,
    title: 'Special Insert',
    image: { src: vinyl, alt: 'record favorite icon' },
    message:
      'Engage deeper with a surprise digital insert dreamed up by the artist. From personal commentary to exclusive audio or even their best meme, you never know what you might get!',
    href: null,
  },
];

export const biscuitNameTile: KnowYourCollectionTile = {
  id: 4,
  title: '',
  image: { src: question, alt: 'question icon' },
  message: 'Why biscuits? Learn how we got our name',
  href: { link: '/about', text: 'here' },
};
