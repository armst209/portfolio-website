'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { legalDocuments } from '../documents';

/** Spotify-style filter chips for hopping between legal documents. */
const TermsNav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Legal documents">
      <ul className="flex flex-wrap gap-2">
        {legalDocuments.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'inline-flex h-8 items-center rounded-full px-4 text-sm font-bold transition-colors',
                  isActive
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white hover:bg-white/20',
                )}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TermsNav;
