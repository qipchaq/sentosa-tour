import Section from '../components/shared/Section';
import Image from 'next/image';
import visaStart from '@/public/assets/images/visastart-hiro.jpg';
import CardDescription from './components/CardDescription';
import Link from 'next/link';

const VisaStart = () => {
  return (
    <div>
      <Section>
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="flex-1">
            <Link href="./blogs/blog">
              <div>
                <Image
                  src={visaStart}
                  alt="Image"
                  style={{ width: '100%' }}
                  className="rounded-2xl overflow-hidden"
                />
              </div>
              <div className="mt-8 pr-10 flex flex-col">
                <h4 className="block font-semibold text-neutral-900 transition-colors text-lg sm:text-2xl">
                  Введение в Сингапур: обзор города-государства
                </h4>
                <p className="hidden sm:block mt-4 text-neutral-500">
                  Добро пожаловать в Сингапур: обзор города-государства для
                  Казахстана Если вы ищете захватывающее место для посещения,
                  где современность встречается с уникальной культурой, то
                  Сингапур - идеальное место для вас.
                </p>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <div className="grid gap-6 md:gap-8">
              <Link href="./blogs/blog">
                <div className="flex">
                  <CardDescription />
                  <Image
                    src={visaStart}
                    alt="Image"
                    width={200}
                    height={200}
                    className="rounded-2xl overflow-hidden shrink-0"
                  />
                </div>
              </Link>
              <Link href="./blogs/blog">
                <div className="flex">
                  <CardDescription />
                  <Image
                    src={visaStart}
                    alt="Image"
                    width={200}
                    height={200}
                    className="rounded-2xl overflow-hidden shrink-0"
                  />
                </div>
              </Link>
              <Link href="./blogs/blog">
                <div className="flex">
                  <CardDescription />
                  <Image
                    src={visaStart}
                    alt="Image"
                    width={200}
                    height={200}
                    className="rounded-2xl overflow-hidden shrink-0"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default VisaStart;
