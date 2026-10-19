'use client';

import Link from 'next/link';
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { cn } from '@/utils/cn';

const CloseContext = createContext<() => void>(() => {});

type DropdownProps = {
  trigger: ReactNode;
  triggerLabel: string;
  children: ReactNode;
  className?: string;
};

/** Minimal headless menu: toggles on click, closes on outside click or Esc. */
const Dropdown = ({
  trigger,
  triggerLabel,
  children,
  className,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handlePointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('pointerdown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  return (
    <div
      ref={rootRef}
      className="relative">
      <button
        type="button"
        aria-label={triggerLabel}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
        className="flex cursor-pointer items-center rounded-full">
        {trigger}
      </button>
      {isOpen && (
        <div
          id={menuId}
          role="menu"
          className={cn(
            'absolute right-0 z-50 mt-2 min-w-48 animate-fade-in rounded-md bg-surface-highlight p-1 shadow-[0_16px_24px_rgb(0_0_0/0.3),0_6px_8px_rgb(0_0_0/0.2)]',
            className,
          )}>
          <CloseContext value={() => setIsOpen(false)}>{children}</CloseContext>
        </div>
      )}
    </div>
  );
};

const itemClass =
  'flex w-full cursor-pointer items-center gap-3 rounded-sm px-3 py-2.5 text-left text-sm text-white/90 hover:bg-white/10 hover:text-white disabled:cursor-default disabled:text-muted disabled:hover:bg-transparent';

export const DropdownLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const close = useContext(CloseContext);
  return (
    <Link
      role="menuitem"
      href={href}
      onClick={close}
      className={itemClass}>
      {children}
    </Link>
  );
};

export const DropdownButton = ({
  onClick,
  disabled,
  children,
}: {
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}) => {
  const close = useContext(CloseContext);
  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      onClick={() => {
        onClick?.();
        close();
      }}
      className={itemClass}>
      {children}
    </button>
  );
};

export const DropdownSeparator = () => <hr className="my-1 border-white/10" />;

export default Dropdown;
