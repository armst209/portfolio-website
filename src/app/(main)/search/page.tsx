import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchView from '@/features/search/components/SearchView';

export const metadata: Metadata = { title: 'Search' };

export default function SearchPage() {
  return (
    <div className="px-4 pt-20 md:px-8">
      {/* useSearchParams is request-time, so it needs a boundary. */}
      <Suspense>
        <SearchView />
      </Suspense>
    </div>
  );
}
