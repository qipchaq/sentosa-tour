'use client';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import './globals.css';
import { Roboto } from 'next/font/google';
import { useState } from 'react';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata = {
  title: 'Sentosa tours',
  description: 'Визы в Сингапур',
  icons: {
    icon: { url: '/assets/images/logo.svg', type: 'image/svg' },
  },
  openGraph: {
    title: 'Sentosa tours',
    description: 'Визы в Сингапур',
    url: 'https://www.sentosatours.kz/',
    siteName: 'Sentosa tours',
    images: [
      {
        url: 'https://www.sentosatours.kz/assets/images/logo.svg',
        width: 200,
        height: 200,
      },
    ],
    locale: 'ru-RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <html lang="en">
      <body
        className={`bg-white text-base text-neutral-900 min-h-screen ${roboto.className}`}
      >
        <Header setIsOpen={setIsOpen} />
        {children}
        <Footer />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </body>
    </html>
  );
}
