import AboutUs from './components/AboutUs/AboutUs';
import MainSection from './components/MainSection/MainSection';
import Services from './components/Services/Services';

export const metadata = {
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
        url: 'https://www.sentosatours.kz/assets/images/logo.png',
        width: 200,
        height: 200,
      },
    ],
    locale: 'ru-RU',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="flex flex-col px-4 lg:container py-4 lg:py-5 m-auto">
      <MainSection />
      <div className="divider"></div>
      <AboutUs />
      <div className="divider"></div>
      <Services />
    </main>
  );
}
