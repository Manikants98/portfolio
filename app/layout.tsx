import { Metadata } from 'next';
import { Sen } from 'next/font/google';
import './globals.css';
import SessionProvider from './providers';

const sen = Sen({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mani Kant Sharma',
  description: 'Portfolio website of Mani Kant Sharma',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sen.className}>
      <body>
        <SessionProvider>
          <div className="bg-gray-100 dark:bg-secondary dark:text-white">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
