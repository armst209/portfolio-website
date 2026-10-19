import type { ReactNode } from 'react';
import PageHeader from '@shared-components/layout/PageHeader';
import TermsNav from './TermsNav';

type LegalDocumentProps = {
  title: string;
  heading: string;
  effectiveDate?: string;
  children: ReactNode;
};

/** Shell for a legal document: header, document chips, readable column. */
export const LegalDocument = ({
  title,
  heading,
  effectiveDate,
  children,
}: LegalDocumentProps) => (
  <>
    <PageHeader
      eyebrow="Legal"
      title={title}
      tone="neutral">
      <div className="mt-6">
        <TermsNav />
      </div>
    </PageHeader>
    <article className="mx-4 max-w-4xl rounded-lg bg-surface p-6 leading-relaxed text-subdued md:mx-8 md:p-10">
      <h2 className="font-display text-xl font-bold text-white md:text-2xl">
        {heading}
      </h2>
      {effectiveDate && (
        <p className="mt-2 text-sm font-bold text-groovy-yellow">
          Effective Date: {effectiveDate}
        </p>
      )}
      <div className="mt-8">{children}</div>
    </article>
  </>
);

/** Top-level numbered clauses. */
export const Clauses = ({ children }: { children: ReactNode }) => (
  <ol className="flex list-decimal flex-col gap-6 pl-6 marker:font-display marker:font-bold marker:text-groovy-yellow">
    {children}
  </ol>
);

export const Clause = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <li className="pl-2">
    <strong className="text-white">{title}. </strong>
    {children}
  </li>
);

/** Lettered sub-items, e.g. (a), (b), (c). */
export const SubClauses = ({ children }: { children: ReactNode }) => (
  <ol className="mt-3 flex list-[lower-alpha] flex-col gap-3 pl-6 marker:font-bold marker:text-white">
    {children}
  </ol>
);

export const LegalSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="mt-8 first:mt-0">
    <h3 className="mb-3 font-display text-lg font-bold text-white">{title}</h3>
    <div className="flex flex-col gap-3">{children}</div>
  </section>
);
