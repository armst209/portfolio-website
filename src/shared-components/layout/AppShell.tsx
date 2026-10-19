import type { ReactNode } from 'react';
import UIStoreHydrator from '@/providers/UIStoreHydrator';
import EmailVerificationBar from './EmailVerificationBar';
import Footer from './Footer';
import MobileTabBar from './MobileTabBar';
import Sidebar from './Sidebar';
import SignupBanner from './SignupBanner';
import TopBar from './TopBar';

/**
 * Spotify-style frame: sidebar + rounded, independently scrolling content
 * panel on a black gutter. On mobile it flattens to one column + tab bar.
 */
const AppShell = ({ children }: { children: ReactNode }) => (
  <div className="flex h-dvh flex-col gap-2 md:p-2">
    <UIStoreHydrator />
    <EmailVerificationBar />
    <div className="flex min-h-0 flex-1 gap-2">
      <Sidebar />
      <main
        id="main-content"
        className="relative min-w-0 flex-1 overflow-y-auto bg-base md:rounded-lg">
        <TopBar />
        {/* Pull content up under the transparent sticky top bar. */}
        <div className="-mt-16">{children}</div>
        <Footer />
      </main>
    </div>
    <SignupBanner />
    <MobileTabBar />
  </div>
);

export default AppShell;
