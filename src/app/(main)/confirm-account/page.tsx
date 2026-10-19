import type { Metadata } from 'next';
import { MailCheck } from 'lucide-react';
import MessagePanel from '@/components/layout/MessagePanel';

export const metadata: Metadata = { title: 'Verify your email' };

export default function ConfirmAccountPage() {
  return (
    <MessagePanel
      icon={MailCheck}
      title="Verify your email address">
      <p>
        To complete your account setup, you&apos;ll need to verify your email
        address.
      </p>
    </MessagePanel>
  );
}
