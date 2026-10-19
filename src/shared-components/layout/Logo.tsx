import Image from 'next/image';
import Link from 'next/link';
import bngLogo from '@public/assets/bng_logo_webp.webp';
import { cn } from '@/utils/cn';

const Logo = ({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) => (
  <Link
    href="/"
    title="To Home Page"
    className={cn('inline-block', className)}>
    <Image
      src={bngLogo}
      alt="Biscuits n Groovy logo"
      className="h-auto w-full"
      sizes="200px"
      priority={priority}
    />
  </Link>
);

export default Logo;
