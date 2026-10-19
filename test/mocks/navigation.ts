import { vi } from 'vitest';

export const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  refresh: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  prefetch: vi.fn(),
};

export const mockNavigation = {
  pathname: '/',
  searchParams: new URLSearchParams(),
};

export const useRouter = () => mockRouter;
export const usePathname = () => mockNavigation.pathname;
export const useSearchParams = () => mockNavigation.searchParams;
export const redirect = vi.fn();
export const notFound = vi.fn();
