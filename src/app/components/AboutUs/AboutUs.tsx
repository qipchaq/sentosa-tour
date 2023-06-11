import React from 'react';
import Button from '../shared/Button';
import Image from 'next/image';
import aboutUs from '../../../../public/assets/images/about-hero.png';
import aboutUsSecond from '../../../../public/assets/images/about-hero-2.jpg';
import { CheckIcon } from '../shared/Icons';

const SERVICES = [
  'Оформление визы',
  'Экскурсии',
  'Бронирование отелей',
  'Бронирование билетов',
  'Трансферы',
  'Обучение в Сингапуре',
  'Аренда автомобиля',
  'Сопровождение на встречах',
];

const AboutUs = () => {
  return (
    <section className="flex flex-col pt-10 lg:pt-16 lg:pb-16 gap-16">
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="flex flex-col gap-10 flex-1">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-800 md:text-4xl xl:text-5xl">
            👋 О нас
          </h2>
          <p className="block text-base xl:text-lg text-neutral-600">
            Наша компания является стратегическим партнером миграционной службы
            Сингапура со штатом лицензированных гидов. В арсенале имеются
            интересные туры от групповых до эксклюзивных индивидуальных, включая
            программы для подростков по образовательным учреждениям Сингапура.
          </p>
        </div>
        <div className="flex flex-1 justify-end">
          <Image src={aboutUs} alt="aboutUs" width={664} height={293} />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center text-neutral-800">
        Наша цель – сделать для Вас путешествие в Сингапур счастливым,
        незабываемым событием!
      </h3>

      <div className="flex flex-col gap-3 md:flex-row md:justify-center md:gap-28">
        <div className="card w-56 bg-neutral-100 shadow-xl self-center">
          <div className="card-body">
            <p className="text-3xl font-semibold text-info">32400+</p>
            <p className="font-semibold text-neutral-600">Оформленных виз</p>
          </div>
        </div>
        <div className="card w-[230px] bg-neutral-100 shadow-xl self-center">
          <div className="card-body">
            <p className="text-3xl font-semibold text-info">56000+</p>
            <p className="font-semibold text-neutral-600">
              Счастливых туристов
            </p>
          </div>
        </div>
        <div className="card w-56 bg-neutral-100 shadow-xl self-center">
          <div className="card-body">
            <p className="text-3xl font-semibold text-info">16+</p>
            <p className="font-semibold text-neutral-600">Опыта работы</p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center lg:flex-row lg:items-center max-w-screen-xl container pb-16 lg:pb-28 ">
        <div className="flex flex-col gap-6 items-center text-center flex-shrink-0 mb-10 lg:text-start lg:mb-0 lg:items-start lg:mr-10 lg:w-1/3 lg:self-start">
          <p className="font-semibold text-2xl text-neutral-800">
            Оказываем качественные и доступные услуги
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-1">
            {SERVICES.map((service, i) => (
              <li key={i} className="flex gap-4 items-center">
                <CheckIcon />
                <span className="text-neutral-600 my-1">{service}</span>
              </li>
            ))}
          </ul>
          {/* <Button text="Наши услуги" link="services" /> */}
        </div>

        <div className="flex justify-end rounded-2xl overflow-hidden">
          <Image
            src={aboutUsSecond}
            alt="mainSection"
            width={530}
            height={530}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
