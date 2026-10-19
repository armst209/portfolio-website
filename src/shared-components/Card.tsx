import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

/** Spotify-style tile: flat dark surface that lifts slightly on hover. */
const Card = ({ interactive = false, className, ...props }: CardProps) => (
  <div
    className={cn(
      'rounded-lg bg-surface p-4',
      interactive &&
        'transition-colors duration-300 hover:bg-surface-highlight focus-within:bg-surface-highlight',
      className,
    )}
    {...props}
  />
);

export default Card;
