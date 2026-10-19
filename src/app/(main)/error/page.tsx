import type { Metadata } from 'next';
import { TriangleAlert } from 'lucide-react';
import MessagePanel from '@shared-components/layout/MessagePanel';

export const metadata: Metadata = { title: 'Error' };

export default function ErrorPage() {
  return (
    <MessagePanel
      icon={TriangleAlert}
      title="Sorry, something went wrong"
    />
  );
}
