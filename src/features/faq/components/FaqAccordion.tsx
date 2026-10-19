import Image from 'next/image';
import chevron from '@public/assets/double-down-yellow.svg';
import type { FaqEntry } from '../data';

/**
 * Native <details> accordion: keyboard/screen-reader friendly and needs no
 * client JavaScript, so the FAQ stays a Server Component.
 */
const FaqAccordion = ({ items }: { items: FaqEntry[] }) => (
  <ul className="flex flex-col gap-2">
    {items.map(({ id, question, answer }) => (
      <li key={id}>
        <details
          id={id}
          className="group scroll-mt-20 rounded-lg bg-surface transition-colors open:bg-surface-elevated hover:bg-surface-highlight open:hover:bg-surface-elevated">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold md:px-6 md:py-5 md:text-lg [&::-webkit-details-marker]:hidden">
            {question}
            <Image
              src={chevron}
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <div className="flex flex-col gap-3 px-5 pb-5 leading-relaxed text-subdued md:px-6">
            {answer}
          </div>
        </details>
      </li>
    ))}
  </ul>
);

export default FaqAccordion;
