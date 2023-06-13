import GoogleAnalytics from '../../service/utils/GoogleAnalytics';
import SchemaOrg from '../../service/utils/SchemaOrg';
import { metaData } from '../../service/utils/metaData';
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

export const metadata = metaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key="product-jsonld"
        />
      </Head> */}
      <body
        className={`bg-white text-base text-neutral-900 min-h-screen ${roboto.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
      <SchemaOrg />
      <GoogleAnalytics />
    </html>
  );
}
