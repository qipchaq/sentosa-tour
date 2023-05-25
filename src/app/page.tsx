import AboutUs from './components/AboutUs/AboutUs';
import MainSection from './components/MainSection/MainSection';

export default function Home() {
  return (
    <main className="flex flex-col px-4 lg:container py-4 lg:py-5 m-auto">
      <MainSection />
      <div className="divider"></div>
      <AboutUs />
    </main>
  );
}
