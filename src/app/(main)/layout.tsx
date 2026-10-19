import AppShell from '@shared-components/layout/AppShell';

// Layout that wraps around all (main) pages.Eex. Home, Artists, Events, etc. This layout is a child of RootLayout.
//(main) is a route group
export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <AppShell>{children}</AppShell>;
}
