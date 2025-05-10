import { Sen } from 'next/font/google';
import './globals.css';
import Footer from './shared/footer';
import Header from './shared/header';
import type { Metadata } from 'next';

const sen = Sen({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mani Kant Sharma',
  description: 'Personal portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sen.className}>
      <body className="bg-[#f3f4f6] dark:bg-secondary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
