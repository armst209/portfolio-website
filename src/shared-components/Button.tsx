import type { ButtonHTMLAttributes } from 'react';
import { LoaderCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'bg-groovy-yellow text-black hover:bg-groovy-yellow-hover hover:scale-[1.04]',
  secondary: 'bg-white text-black hover:bg-neutral-200 hover:scale-[1.04]',
  outline:
    'border border-muted text-white hover:border-white hover:scale-[1.04]',
  ghost: 'text-subdued hover:text-white hover:scale-[1.04]',
};

const sizes: Record<Size, string> = {
  sm: 'h-8 px-4 text-sm',
  md: 'h-12 px-8 text-base',
  lg: 'h-14 px-10 text-lg',
};

/** Shared pill styling, so links can look like buttons. */
export const buttonVariants = ({
  variant = 'primary',
  size = 'md',
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) =>
  cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition-[transform,background-color,border-color,color] duration-150 active:scale-100 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
    variants[variant],
    sizes[size],
    className,
  );

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
};

const Button = ({
  variant,
  size,
  loading = false,
  className,
  children,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) => (
  <button
    type={type}
    disabled={disabled || loading}
    aria-busy={loading || undefined}
    className={buttonVariants({ variant, size, className })}
    {...props}>
    {loading && (
      <LoaderCircle
        aria-hidden
        className="size-4 animate-spin"
      />
    )}
    {children}
  </button>
);

export default Button;
