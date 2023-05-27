import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata = {
  title: 'Sentosa tours',
  description: 'Визы в Сингапур',
  // icons: {
  //   favicon: '/assets/images/logo.svg',
  // },
  icons: {
    icon: { url: '/assets/images/logo.png', type: 'image/png' },
  },
  openGraph: {
    title: 'Sentosa tours',
    description: 'Визы в Сингапур',
    url: 'https://www.sentosatours.kz/',
    siteName: 'Sentosa tours',
    images: [
      {
        url: 'https://www.sentosatours.kz/assets/images/logo.png',
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
  return (
    <html lang="en">
      <body
        className={`bg-white text-base text-neutral-900 min-h-screen ${roboto.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
