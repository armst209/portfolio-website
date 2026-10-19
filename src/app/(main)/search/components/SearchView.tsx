'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import ReleaseGrid from '../../releases/components/ReleaseGrid';
import {
  sampleReleases,
  searchReleases,
} from '../../releases/data/sample-releases';
import { browseCategories } from '../browse-categories';

const SearchView = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const trimmed = query.trim();

  const handleChange = (value: string) => {
    setQuery(value);
    const params = new URLSearchParams(searchParams);
    if (value.trim()) params.set('q', value);
    else params.delete('q');
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  return (
    <>
      <label className="group flex h-12 max-w-xl items-center gap-3 rounded-full bg-surface-elevated px-4 text-subdued ring-white/40 transition hover:bg-surface-highlight hover:ring-1 focus-within:ring-2 focus-within:ring-white">
        <Search
          aria-hidden
          className="size-5 shrink-0 group-hover:text-white"
        />
        <span className="sr-only">Search releases</span>
        <input
          type="search"
          value={query}
          onChange={(event) => handleChange(event.target.value)}
          placeholder="What do you want to hear?"
          autoFocus
          className="w-full bg-transparent text-white placeholder:text-subdued focus:outline-none focus-visible:outline-none"
        />
      </label>

      {trimmed ? (
        <section
          aria-live="polite"
          className="mt-8">
          <h2 className="mb-4 font-display text-2xl font-bold">
            Results for &ldquo;{trimmed}&rdquo;
          </h2>
          <ReleaseGrid
            releases={searchReleases(sampleReleases, trimmed)}
            emptyMessage={`No results found for "${trimmed}". Check the spelling, or try another keyword.`}
          />
        </section>
      ) : (
        <section className="mt-8">
          <h2 className="mb-4 font-display text-2xl font-bold">Browse all</h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {browseCategories.map(({ label, color }) => (
              <li key={label}>
                <Link
                  href={`/search?q=${encodeURIComponent(label)}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleChange(label);
                  }}
                  style={{ backgroundColor: color }}
                  className="relative flex aspect-[1.6] overflow-hidden rounded-lg p-4 font-display text-xl font-bold transition-transform hover:scale-[1.02] md:text-2xl">
                  {label}
                  <span
                    aria-hidden
                    className="absolute -right-4 -bottom-2 size-20 rotate-25 rounded-md bg-black/25 shadow-[0_2px_4px_rgb(0_0_0/0.2)] md:size-24"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default SearchView;
