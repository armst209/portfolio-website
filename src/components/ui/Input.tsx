import { useId, type InputHTMLAttributes } from 'react';
import { CircleAlert } from 'lucide-react';
import { cn } from '@/lib/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errors?: string[];
};

const Input = ({ label, errors, id, className, ...props }: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const hasError = !!errors?.length;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-bold">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? errorId : undefined}
        className={cn(
          'h-12 rounded-md border bg-base px-3.5 text-white placeholder:text-muted transition-[border-color,box-shadow] outline-none',
          'border-muted hover:border-white focus:border-white focus:shadow-[inset_0_0_0_1px_white] focus-visible:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-muted',
          hasError &&
            'border-danger hover:border-danger focus:border-danger focus:shadow-[inset_0_0_0_1px_var(--color-danger)]',
          className,
        )}
        {...props}
      />
      {hasError && (
        <p
          id={errorId}
          className="flex items-start gap-1.5 text-sm text-danger">
          <CircleAlert
            aria-hidden
            className="mt-0.5 size-4 shrink-0"
          />
          {errors[0]}
        </p>
      )}
    </div>
  );
};

export default Input;
