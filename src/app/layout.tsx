import GoogleAnalytics from '../../service/utils/GoogleAnalytics';
// import { metaData } from '../../service/utils/metaData';
import { schema } from '../../service/utils/schema';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import Head from 'next/head';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
});

const metaData = {
  title:
    'Sentosa tour - авторизированный партнер иммиграционного офиса Сингапура',
  description:
    'Sentosa tour предлагает оформить визу в Сингапур онлайн. Для граждан России, СНГ, Грузии, Туркменистана, Молдовы, Не граждан Латвии и Эстонии',
  icons: {
    icon: { url: '/assets/images/logo.png', type: 'image/png' },
  },
  openGraph: {
    title:
      'Sentosa tour - авторизированный партнер иммиграционного офиса Сингапура',
    description:
      'Sentosa tour предлагает оформить визу в Сингапур онлайн. Для граждан России, СНГ, Грузии, Туркменистана, Молдовы, Не граждан Латвии и Эстонии',
    url: 'https://www.sentosatours.kz/',
    siteName: 'Sentosa tours',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 200,
        height: 200,
      },
    ],
    locale: 'ru-RU',
    type: 'website',
  },
};

export const metadata = metaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key="product-jsonld"
        />
      </Head>
      <GoogleAnalytics />
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
