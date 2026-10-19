import { cn } from '@/utils/cn';

type AvatarProps = {
  src?: string | null;
  name?: string | null;
  className?: string;
};

const Avatar = ({ src, name, className }: AvatarProps) => {
  const initial = name?.trim().charAt(0).toUpperCase() || '?';

  return (
    <span
      className={cn(
        'inline-flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-groovy-teal text-sm font-bold text-black',
        className,
      )}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          className="size-full object-cover"
        />
      ) : (
        <span aria-hidden>{initial}</span>
      )}
    </span>
  );
};

export default Avatar;
