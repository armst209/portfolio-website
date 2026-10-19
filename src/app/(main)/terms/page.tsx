import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import PageHeader from '@shared-components/layout/PageHeader';
import { legalDocuments } from '@main/terms/documents';
import openBook from '@public/assets/open-book.svg';

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms of Use',
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy & Terms of Use"
        tone="neutral"
      />
      <div className="grid gap-8 px-4 md:grid-cols-[auto_minmax(0,1fr)] md:items-start md:px-8">
        <Image
          src={openBook}
          alt=""
          width={120}
          height={120}
          className="hidden size-28 md:block"
        />
        <ul className="grid max-w-4xl gap-2 sm:grid-cols-2">
          {legalDocuments.map(({ href, label, description }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full items-center justify-between gap-4 rounded-lg bg-surface p-5 transition-colors hover:bg-surface-highlight">
                <span>
                  <span className="block font-display text-lg font-bold">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm text-subdued">
                    {description}
                  </span>
                </span>
                <ChevronRight
                  aria-hidden
                  className="size-5 shrink-0 text-subdued transition-transform group-hover:translate-x-1 group-hover:text-groovy-yellow"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
