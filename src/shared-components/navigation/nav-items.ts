import { Headphones, House, Search } from 'lucide-react';
import type { NavItem } from '@/types';

export const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: House },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/releases', label: 'Releases', icon: Headphones },
];

export const isActivePath = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname.startsWith(href);
