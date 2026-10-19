import { Disc3 } from 'lucide-react';
import Logo from '@/components/layout/Logo';
import MessagePanel from '@/components/layout/MessagePanel';

export default function NotFound() {
  return (
    <main className="min-h-full bg-base">
      <div className="px-6 pt-8">
        <Logo className="w-40" />
      </div>
      <MessagePanel
        icon={Disc3}
        title="Page not found">
        <p>
          We can&apos;t seem to find the page you are looking for. It may still
          be in the studio.
        </p>
      </MessagePanel>
    </main>
  );
}
