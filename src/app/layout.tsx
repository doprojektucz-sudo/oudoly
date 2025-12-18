import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Oudoly - Rybniční kaskáda na Vysočině',
    template: '%s | Oudoly',
  },
  description:
    'Tři propojené rybníky v malebné krajině Vysočiny. Rybaření, ubytování v chatě, relaxace v přírodě. Ideální místo pro rodinnou dovolenou.',
  keywords: [
    'rybaření',
    'rybník',
    'Vysočina',
    'ubytování',
    'chata',
    'příroda',
    'dovolená',
    'Oudoly',
    'Kadolec',
  ],
  authors: [{ name: 'Oudoly' }],
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://oudoly.cz',
    siteName: 'Rybniční kaskáda Oudoly',
    title: 'Oudoly - Rybniční kaskáda na Vysočině',
    description:
      'Tři propojené rybníky v malebné krajině Vysočiny. Rybaření, ubytování v chatě, relaxace v přírodě.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rybniční kaskáda Oudoly',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
