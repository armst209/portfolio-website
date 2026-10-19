import type { Metadata, Viewport } from 'next';
import { Figtree, Jost } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: "Biscuits 'n' Groovy",
    template: "%s | Biscuits 'n' Groovy",
  },
  description:
    'New Music Is Our Jam | Biscuits n Groovy - A Music Streaming Service',
};

export const viewport: Viewport = {
  themeColor: '#121212',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${jost.variable} h-full antialiased`}>
      <body className="h-full">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#2a2a2a',
              color: '#fff',
              borderRadius: '8px',
            },
            success: { iconTheme: { primary: '#f5ee0d', secondary: '#000' } },
          }}
        />
      </body>
    </html>
  );
}
