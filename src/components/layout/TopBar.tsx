'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import AccountSection from '@/components/navigation/AccountSection';
import { cn } from '@/lib/cn';
import Logo from './Logo';

const TopBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isSearchPage = pathname === '/search';

  // The header sits inside the scrollable content panel, not the window.
  useEffect(() => {
    const scroller = headerRef.current?.parentElement;
    if (!scroller) return;
    const onScroll = () => setIsScrolled(scroller.scrollTop > 16);
    onScroll();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const q = String(new FormData(event.currentTarget).get('q') ?? '').trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : '/search');
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        'sticky top-0 z-30 flex h-16 items-center gap-2 px-4 transition-colors duration-300 md:px-6',
        isScrolled ? 'bg-surface' : 'bg-transparent',
      )}>
      <Logo
        priority
        className="w-32 md:hidden"
      />

      <div className="hidden items-center gap-2 md:flex">
        <button
          type="button"
          aria-label="Go back"
          onClick={() => router.back()}
          className="cursor-pointer rounded-full bg-black/70 p-1 text-subdued transition-colors hover:text-white">
          <ChevronLeft
            aria-hidden
            className="size-6"
          />
        </button>
        <button
          type="button"
          aria-label="Go forward"
          onClick={() => router.forward()}
          className="cursor-pointer rounded-full bg-black/70 p-1 text-subdued transition-colors hover:text-white">
          <ChevronRight
            aria-hidden
            className="size-6"
          />
        </button>
      </div>

      {!isSearchPage && (
        <form
          role="search"
          onSubmit={handleSearch}
          className="ml-2 hidden max-w-md flex-1 md:block">
          <label className="group flex h-12 items-center gap-3 rounded-full bg-surface-elevated px-4 text-subdued ring-white/40 transition hover:bg-surface-highlight hover:ring-1 focus-within:ring-2 focus-within:ring-white">
            <Search
              aria-hidden
              className="size-5 shrink-0 group-hover:text-white"
            />
            <span className="sr-only">Search</span>
            <input
              name="q"
              type="search"
              placeholder="What do you want to hear?"
              className="w-full bg-transparent text-white placeholder:text-subdued focus:outline-none focus-visible:outline-none"
            />
          </label>
        </form>
      )}

      <div className="ml-auto">
        <AccountSection />
      </div>
    </header>
  );
};

export default TopBar;
