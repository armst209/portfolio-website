import type { Metadata } from 'next';
import TextLink from '@shared-components/TextLink';
import {
  Clause,
  Clauses,
  LegalDocument,
  SubClauses,
} from '@/features/legal/components/LegalDocument';

export const metadata: Metadata = { title: 'Music Purchase Terms' };

export default function MusicPurchaseTermsPage() {
  return (
    <LegalDocument
      title="Music Purchase Terms"
      heading="BISCUITS N GROOVY, LLC TERMS REGARDING PURCHASE OF MUSIC">
      <Clauses>
        <Clause title="Purpose of Agreement">
          Biscuits n Groovy (“BnG”) is a music streaming service that amplifies
          the connection between musical artists and their fans. Learn more
          about BnG and read our mission at{' '}
          <TextLink href="/about">https://www.bngroovy.com/about</TextLink>.
          These Terms Regarding Purchase of Music outline what each Customer
          (“Customer” or “you”) will receive upon purchasing from BnG.
        </Clause>
        <Clause title="Prerequisites to Purchase">
          In order to purchase music on BnG, you must first create a BnG account
          with a valid email address. You will also be required to create an
          account with Blocto, which will be linked to your BnG account. Blocto
          allows you to seamlessly access your NFTs (non-fungible tokens) within
          your BnG collection. You can learn more about Blocto at{' '}
          <TextLink href="https://blocto.portto.io/en/">
            https://blocto.portto.io/en/
          </TextLink>
        </Clause>
        <Clause title="Music">
          When you purchase a Release on BnG, you receive access to stream the
          music during its limited release window. The dates of the release
          window are displayed with the release details and price. The Artist
          determines the timing and duration of the release window. The music is
          exclusive to BnG during its entire release window, meaning it’s not
          available anywhere else.
          <SubClauses>
            <li>
              Once the release window ends, you will no longer be able to stream
              the music on BnG.
            </li>
            <li>
              The release window starts and ends on calendar dates, so it does
              not change based on when you purchased the release. For example,
              if the release window is June 4 - June 12 and you purchase the
              release on June 10, you will only be able to stream it until June
              12.
            </li>
            <li>
              You can stream the music as much as you like during the release
              window. BnG does not allow downloads. Any means of recording or
              saving the music is prohibited, as stated in our Terms of Service{' '}
              <TextLink href="/terms/subscriber">
                www.bngroovy.com/terms/subscriber
              </TextLink>
            </li>
          </SubClauses>
        </Clause>
        <Clause title="NFTs">
          With your purchase, you also receive a digital album cover NFT
          (non-fungible token). NFTs are digital collectibles created and stored
          on the blockchain, a database that keeps track of who the owner is at
          all times. You can learn more about NFTs on our FAQ page at{' '}
          <TextLink href="/faq">www.bngroovy.com/faq</TextLink>
          <SubClauses>
            <li>
              When you purchase a release on BnG, an NFT of the album cover is
              automatically created (or “minted”) and added to your collection.
              The NFT minting happens behind the scenes, so all you see is the
              shiny new album art in your collection.
            </li>
            <li>
              The album art stays in your collection permanently, even once the
              release window ends and the music is no longer streaming on BnG.
              Each time you buy music, your collection grows and becomes more
              unique. Show it off to friends and other superfans!
            </li>
            <li>
              You don’t need to be a blockchain or crypto expert to collect
              music on BnG. NFT technology simply keeps track of ownership and
              proves that the art is authentic. This means we can guarantee that
              you own a legitimate copy and were one of the exclusive superfans
              who listened to that release.
            </li>
            <li>
              Our NFTs are minted on the Flow blockchain. Flow is
              environmentally friendly; unlike other blockchains (such as
              Bitcoin or Ethereum) Flow does not consume high levels of
              electricity. Read more about Flow at{' '}
              <TextLink href="https://www.onflow.org/">
                https://www.onflow.org/
              </TextLink>
            </li>
            <li>
              To read our full legal policy regarding NFTs, visit{' '}
              <TextLink href="/terms/nft">www.bngroovy.com/terms/nft</TextLink>
            </li>
          </SubClauses>
        </Clause>
      </Clauses>
    </LegalDocument>
  );
}
