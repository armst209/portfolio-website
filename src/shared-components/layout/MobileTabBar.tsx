'use client';

import { UserRound } from 'lucide-react';
import NavLink from '@shared-components/navigation/NavLink';
import { navItems } from '@shared-components/navigation/nav-items';
import useUserStore, { selectIsLoggedIn } from '@/stores/useUserStore';

const MobileTabBar = () => {
  const isLoggedIn = useUserStore(selectIsLoggedIn);
  const items = [
    ...navItems,
    isLoggedIn
      ? { href: '/account', label: 'Account', icon: UserRound }
      : { href: '/signin', label: 'Sign in', icon: UserRound },
  ];

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-40 bg-linear-to-t from-black via-black/95 to-black/0 pt-6 pb-[max(env(safe-area-inset-bottom),0.5rem)] md:hidden">
      <ul className="grid grid-cols-4">
        {items.map((item) => (
          <li key={item.href}>
            <NavLink
              {...item}
              className="flex-col gap-1 text-[11px] font-medium"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileTabBar;
