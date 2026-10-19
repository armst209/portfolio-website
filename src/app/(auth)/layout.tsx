import Logo from '@/components/layout/Logo';

/** Spotify-style auth screen: logo up top, a single centered card, no shell. */
export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-full bg-linear-to-b from-surface-highlight to-black px-0 py-0 sm:px-4 sm:py-8">
      <main className="mx-auto flex min-h-full max-w-[734px] flex-col items-center rounded-lg bg-base px-6 py-10 sm:min-h-0 sm:px-16 md:py-12">
        <Logo
          priority
          className="mb-10 w-48"
        />
        <div className="w-full max-w-sm">{children}</div>
      </main>
    </div>
  );
}
