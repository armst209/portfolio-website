'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/ui/Modal';
import questionIcon from '@public/assets/help_question_yellow.svg';

const ExpiredInfoButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex cursor-pointer items-center gap-2 text-sm font-bold text-subdued transition-colors hover:text-white">
        <Image
          src={questionIcon}
          alt=""
          width={20}
          height={20}
          className="size-5"
        />
        Why can&apos;t I play my releases?
      </button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Expired biscuits">
        <h2 className="pr-8 font-display text-2xl font-bold">
          Expired biscuits
        </h2>
        <div className="mt-4 flex flex-col gap-3 text-subdued">
          <p>These expired biscuits are no longer available to stream on BnG</p>
          <p>
            Rest assured your album NFTs are here for good. They stay in your
            account permanently so you can curate the perfect collection.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ExpiredInfoButton;
