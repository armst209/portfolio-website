'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import type { NavItem } from '@/types';
import { isActivePath } from './nav-items';

type NavLinkProps = NavItem & {
  collapsed?: boolean;
  className?: string;
};

const NavLink = ({
  href,
  label,
  icon: Icon,
  collapsed = false,
  className,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      title={collapsed ? label : undefined}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex items-center gap-5 rounded-md px-3 py-2 font-bold transition-colors',
        isActive ? 'text-white' : 'text-subdued hover:text-white',
        collapsed && 'justify-center px-0',
        className,
      )}>
      <Icon
        aria-hidden
        strokeWidth={isActive ? 2.75 : 2}
        className={cn('size-6 shrink-0', isActive && 'text-groovy-yellow')}
      />
      <span className={cn(collapsed && 'sr-only')}>{label}</span>
    </Link>
  );
};

export default NavLink;
