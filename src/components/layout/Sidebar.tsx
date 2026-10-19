'use client';

import Link from 'next/link';
import { Library, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import NavLink from '@/components/navigation/NavLink';
import { navItems } from '@/components/navigation/nav-items';
import { buttonVariants } from '@/components/ui/Button';
import useUIStore from '@/stores/useUIStore';
import useUserStore, { selectIsLoggedIn } from '@/stores/useUserStore';
import { cn } from '@/lib/cn';
import Logo from './Logo';

const libraryPrompts = [
  {
    title: 'Start your collection',
    body: "It's easy, we'll help you find your first biscuit.",
    cta: { href: '/releases', label: 'Browse releases' },
  },
  {
    title: "What's a biscuit?",
    body: 'Learn how our new-age digital records work.',
    cta: { href: '/#whats-a-biscuit', label: 'Learn more' },
  },
];

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/artists', label: 'For Artists' },
  { href: '/vault', label: 'Vault' },
  { href: '/events', label: 'Events' },
  { href: '/faq', label: 'FAQ' },
  { href: '/terms', label: 'Privacy & Terms' },
];

const Sidebar = () => {
  const collapsed = useUIStore((state) => state.isSidebarCollapsed);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);
  const isLoggedIn = useUserStore(selectIsLoggedIn);
  const ToggleIcon = collapsed ? PanelLeftOpen : PanelLeftClose;

  return (
    <aside
      aria-label="Sidebar"
      className={cn(
        'hidden shrink-0 flex-col gap-2 transition-[width] duration-300 md:flex',
        collapsed ? 'w-[72px]' : 'w-72 lg:w-80',
      )}>
      <nav
        aria-label="Main"
        className="rounded-lg bg-base px-3 py-5">
        <div className={cn('mb-5 px-3', collapsed && 'px-0')}>
          {collapsed ? (
            <Link
              href="/"
              title="To Home Page"
              className="mx-auto flex size-10 items-center justify-center rounded-full bg-groovy-yellow font-display text-lg font-bold text-black">
              B
            </Link>
          ) : (
            <Logo
              priority
              className="w-40"
            />
          )}
        </div>
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                {...item}
                collapsed={collapsed}
              />
            </li>
          ))}
        </ul>
      </nav>

      <section
        aria-label="Your biscuits"
        className="flex min-h-0 flex-1 flex-col rounded-lg bg-base">
        <div
          className={cn(
            'flex items-center justify-between px-6 pt-4 pb-2 text-subdued',
            collapsed && 'justify-center px-0',
          )}>
          {!collapsed && (
            <span className="flex items-center gap-3 font-bold">
              <Library
                aria-hidden
                className="size-6"
              />
              Your Biscuits
            </span>
          )}
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="cursor-pointer rounded-full p-2 transition-colors hover:bg-surface-highlight hover:text-white">
            <ToggleIcon
              aria-hidden
              className="size-5"
            />
          </button>
        </div>

        {!collapsed && (
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-2 py-2">
            {libraryPrompts.map(({ title, body, cta }) => (
              <div
                key={title}
                className="rounded-lg bg-surface-elevated px-5 py-4">
                <p className="font-bold">{title}</p>
                <p className="mt-2 text-sm text-white/80">{body}</p>
                <Link
                  href={cta.href}
                  className={buttonVariants({
                    variant: 'secondary',
                    size: 'sm',
                    className: 'mt-5',
                  })}>
                  {cta.label}
                </Link>
              </div>
            ))}
            {isLoggedIn && (
              <Link
                href="/collection"
                className="mx-3 text-sm font-bold text-subdued hover:text-white hover:underline">
                Go to your collection
              </Link>
            )}
          </div>
        )}

        {!collapsed && (
          <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 px-6 pt-4 pb-6 text-xs text-subdued">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </aside>
  );
};

export default Sidebar;
