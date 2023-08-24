import './globals.css';
import type { Metadata } from 'next';
import { Sora } from '@next/font/google';
import { ReactNode } from 'react'; // Import ReactNode type
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
interface LayoutProps {
  children: ReactNode; // Use ReactNode type for the children prop
}
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Home',
  description:
    'A portfolio website for Bayezid portraying his achievements and personal life',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
        >
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
