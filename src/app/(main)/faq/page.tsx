import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeader from '@/components/layout/SectionHeader';
import FaqAccordion from '@/features/faq/components/FaqAccordion';
import NftsExplained from '@/features/faq/components/NftsExplained';
import { faqs } from '@/features/faq/data';
import questionIcon from '@public/assets/question2.svg';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Questions? We’ve got answers. Feel free to contact us at: support@bngroovy.com.',
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Help"
        title="FAQ"
        description="Questions? We’ve got answers."
      />
      <div className="flex flex-col gap-14 px-4 md:gap-20 md:px-8">
        <section aria-labelledby="faq-questions">
          <SectionHeader
            id="faq-questions"
            title="Frequently Asked Questions"
            icon={questionIcon}
          />
          <FaqAccordion items={faqs} />

          <div className="mt-6 flex items-center gap-4 rounded-lg bg-groovy-teal/15 px-5 py-5 md:px-6">
            <Image
              src={questionIcon}
              alt=""
              width={40}
              height={40}
              className="size-10 shrink-0"
            />
            <p>
              More questions? We’ve got answers. If yours isn’t answered above,
              feel free to contact us at:{' '}
              <a
                href="mailto:support@bngroovy.com?subject=Support"
                className="font-bold text-groovy-yellow underline underline-offset-4 hover:text-groovy-yellow-hover">
                support@bngroovy.com
              </a>
              .
            </p>
          </div>
        </section>

        <NftsExplained />
      </div>
    </>
  );
}
