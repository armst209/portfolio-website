'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
};

/**
 * Native <dialog> modal: focus trapping, Esc-to-close and the inert backdrop
 * come from the browser. Clicking the backdrop also closes it.
 */
const Modal = ({ open, onClose, title, children, className }: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    } else if (!open && dialog.open) {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={title}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={cn(
        'm-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg animate-fade-in overflow-y-auto rounded-lg bg-surface-elevated p-0 text-white shadow-[0_16px_48px_rgb(0_0_0/0.6)] backdrop:bg-black/70',
        className,
      )}>
      <div className="relative p-6 md:p-8">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer rounded-full p-2 text-subdued transition-colors hover:bg-surface-highlight hover:text-white">
          <X
            aria-hidden
            className="size-5"
          />
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
