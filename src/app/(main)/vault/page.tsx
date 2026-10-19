import type { Metadata } from 'next';
import PageHeader from '@shared-components/layout/PageHeader';
import TextLink from '@shared-components/TextLink';
import VaultCard from './components/VaultCard';
import { sampleVault } from './data/sample-vault';

export const metadata: Metadata = {
  title: 'Vault',
  description:
    'Explore all the biscuits we’ve dropped and the artists behind them.',
};

export default function VaultPage() {
  return (
    <>
      <PageHeader
        eyebrow="Archive"
        title="Vault"
        tone="neutral"
        description={
          <>
            Explore all the biscuits we’ve dropped and the artists behind them.
            <span className="mt-2 block text-base">
              To see releases currently available, visit the{' '}
              <TextLink href="/#music-showcase-return">music showcase</TextLink>
              .
            </span>
          </>
        }
      />
      <div className="px-4 md:px-8">
        <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {sampleVault.map((release) => (
            <li key={release.id}>
              <VaultCard release={release} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
