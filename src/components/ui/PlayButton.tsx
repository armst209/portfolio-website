'use client';

import { Play } from 'lucide-react';
import toast from 'react-hot-toast';
import { cn } from '@/lib/cn';

type PlayButtonProps = {
  label: string;
  className?: string;
};

/** The round accent play button that rises into view on card hover. */
const PlayButton = ({ label, className }: PlayButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={() => toast('Streaming opens when this biscuit drops.')}
    className={cn(
      'flex size-12 cursor-pointer items-center justify-center rounded-full bg-groovy-yellow text-black shadow-[0_8px_8px_rgb(0_0_0/0.3)] transition-transform hover:scale-105 hover:bg-groovy-yellow-hover active:scale-95',
      className,
    )}>
    <Play
      aria-hidden
      className="size-5 translate-x-px fill-current"
    />
  </button>
);

export default PlayButton;
