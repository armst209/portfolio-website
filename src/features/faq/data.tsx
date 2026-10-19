import Link from 'next/link';
import type { ReactNode } from 'react';

export type FaqEntry = {
  id: string;
  question: string;
  answer: ReactNode;
};

const linkClass =
  'font-bold text-white underline underline-offset-4 hover:text-groovy-yellow';

export const faqs: FaqEntry[] = [
  {
    id: 'purchase',
    question: 'What do I get with my purchase?',
    answer: (
      <p>
        Check out{' '}
        <Link
          href="/#whats-a-biscuit"
          className={linkClass}>
          “What’s a Biscuit?”
        </Link>
      </p>
    ),
  },
  {
    id: 'expire',
    question: 'Why does music expire?',
    answer: (
      <p>
        All music on BnG is released on a limited basis. So when it’s gone, it’s
        gone. We do this so we can offer affordable prices for fans, and still
        be able to pay artists better. Besides, we’re not just another streaming
        service. We’re built for superfans who want to experience music in the
        moment, setting themselves apart from the crowd. But don’t worry, you
        always keep your collectible album covers, so everyone will know that
        you’re a true fan.
      </p>
    ),
  },
  {
    id: 'download',
    question: 'Can I download my music?',
    answer: (
      <p>
        No, music purchased on BnG is not available for download. You can stream
        the music as much as you’d like during the release window.
      </p>
    ),
  },
  {
    id: 'nft',
    question: 'What’s an NFT?',
    answer: (
      <>
        <p>
          We’re glad you asked! An NFT, or non-fungible token, is a digital
          collectible whose ownership is recorded on the blockchain. If that
          still sounds like gibberish to you, don’t worry! You don’t need to be
          an NFT expert to use BnG (most of our customers aren’t). The key idea
          to know is that NFTs give our album art a permanent stamp of
          authenticity, proving who the true owner is, so you can feel confident
          when showing off your collection.
        </p>
        <p>
          Want to really dig into NFTs? Read more{' '}
          <Link
            href="/faq#nft-scroll-purchase"
            className={linkClass}>
            here
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: 'crypto',
    question: 'Do I need cryptocurrency to pay?',
    answer: (
      <p>
        No, and in fact we don’t accept cryptocurrency at this time. Call us
        old-fashioned, but we like to stick with dollars around here. BnG
        accepts all major credit cards as payment. That means you don’t need a
        crypto wallet or cryptocurrency of any kind to purchase music and NFTs.
        Sadly you’ll have to find somewhere else to spend your dogecoin.
      </p>
    ),
  },
  {
    id: 'blocto',
    question: 'What is a Blocto/Flow account and why do I need it?',
    answer: (
      <p>
        Blocto is a trusted, user-friendly wallet for crypto assets such as
        NFTs. We integrate with Blocto to seamlessly store your NFT album art,
        so you can view it in your BnG library as well as outside our platform.
        When you create an account on BnG, you’ll also be prompted to create a
        Blocto account (if you already have one, you can easily link that
        instead). Don’t worry! The process is super easy and we walk you through
        it when you sign up. Your Blocto account will be linked to your BnG
        account for easy access, so you don’t need to remember multiple logins.
        Blocto is designed to be so intuitive, you won’t even realize you’re
        interacting with the blockchain. Learn more{' '}
        <a
          href="https://blocto.portto.io/en/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}>
          here
        </a>
        .
      </p>
    ),
  },
  {
    id: 'subscription',
    question: 'Is this a subscription?',
    answer: (
      <p>
        Nope, BnG is not subscription-based. We give artists the freedom to
        price their own releases, so buying music on BnG is a one-time purchase.
        We don’t save your payment information, and you won’t be charged again
        (unless you buy more music, of course!)
      </p>
    ),
  },
  {
    id: 'app',
    question: 'Do you have an app?',
    answer: (
      <p>
        Currently we do not have an app. You can access BnG through any mobile
        browser, however, so you can still buy and stream music on your phone.
        Stay tuned for an app in the future!
      </p>
    ),
  },
];

export const nftsExplained = [
  'An NFT, or non-fungible token, is a digital collectible whose ownership is recorded on a blockchain. NFTs have been around for several years, but recently exploded in popularity as a way for digital creators to authenticate and monetize their work.',
  'When you purchase a biscuit on Biscuits n Groovy, you receive a digital album cover secured by an NFT. The NFT acts as a stamp of authenticity, proving your art is original and that you, the buyer, were one of the elite superfans who listened to that release early.',
  'You don’t need cryptocurrency to collect biscuits on BnG. When you sign up, you’ll also create an account with Blocto, which is the trusted crypto wallet we use to store your NFTs. This gets linked to your BnG account so you don’t have to worry about the technical details. Rest assured, though, if anything were to happen to our site, your NFTs are safely recorded and recoverable on the blockchain (that’s the point of it!)',
  'All your art lives in your Collection permanently, regardless of when the music is streaming.',
];

export const flowPerks = [
  'It’s eco-friendly, since it doesn’t require “mining” like Bitcoin or Ethereum',
  'It’s compatible with credit cards, so you don’t need to buy cryptocurrency to get started',
  'There’s no gas fees, so the price you see is what you pay',
];

export const blockchainBasics = [
  'Many people hear “blockchain” or “crypto” and think of Bitcoin, the most well-known cryptocurrency. While Bitcoin’s creation in 2008 kicked things off, blockchain technology has grown a ton, and its applications go far beyond finance. A blockchain is simply a type of database, or online file cabinet, that records information, verifies it, and keeps it secure. The key advantage of blockchain is that once information is added to the chain, it’s there permanently and can’t be easily hacked or manipulated.',
  'Blockchains are great for recording transactions, like a receipt that keeps getting added onto. These transactions are usually denominated in tokens. There are two types of tokens used with blockchains. Bitcoin and other cryptocurrencies like Dogecoin are fungible tokens, designed to operate as currency.',
  'Non-fungible tokens (or NFTs), on the other hand, are unique, which is why they’re great for representing collectibles. Think of them like baseball cards or concert tickets. Each one is unique. Sure, there may be 1,000 of the same rookie card in the world, and of course plenty of concertgoers have the same GA ticket, but each one has a serial number to identify which it is in the series.',
  'In practice, though, this doesn’t always work in the real world. Counterfeit tickets and baseball cards pose a big problem. NFTs solve this issue for digital goods, since the rightful owner is recorded on the blockchain, so they can’t be faked.',
  'A common reaction to NFTs is “okay, but why are these worth anything? If it’s a digital work of art, and anyone can see it on the internet, why would I pay for it?” The answer is ownership. Every NFT has a unique identifier for itself and its rightful owner. That owner could be the original creator or, once it’s sold, the buyer. Sure, anyone might be able to see the image, but the blockchain proves who the true owner is. Think of the Mona Lisa: anyone can see it, print a picture of it, or buy a poster of it, but there’s only one real copy and owner.',
];
