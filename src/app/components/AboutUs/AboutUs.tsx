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
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-10 flex-1">
          <h2 className="font-medium text-neutral-800 dark:text-neutral-200 text-4xl md:text-5xl xl:text-5xl !leading-[114%]">
            👋 О нас
          </h2>
          <p className="block text-base xl:text-lg text-neutral-600 dark:text-neutral-400">
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

      <h3 className="text-2xl font-bold text-center text-neutral-800 dark:text-neutral-200">
        Наша цель – сделать для Вас путешествие в Сингапур счастливым,
        незабываемым событием!
      </h3>

      <div className="flex justify-evenly">
        <div className="card w-56 bg-neutral-100 shadow-xl self-center">
          <div className="card-body">
            <p className="text-3xl font-semibold text-info">32400+</p>
            <p className="font-semibold text-neutral-600 dark:text-neutral-400">
              Оформленных виз
            </p>
          </div>
        </div>
        <div className="card w-[230px] bg-neutral-100 shadow-xl self-center">
          <div className="card-body">
            <p className="text-3xl font-semibold text-info">56000+</p>
            <p className="font-semibold text-neutral-600 dark:text-neutral-400">
              Счастливых туристов
            </p>
          </div>
        </div>
        <div className="card w-56 bg-neutral-100 shadow-xl self-center">
          <div className="card-body">
            <p className="text-3xl font-semibold text-info">16+</p>
            <p className="font-semibold text-neutral-600 dark:text-neutral-400">
              Опыта работы
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-16 mt-14">
        <div className="flex flex-col gap-10 max-w-[405px]">
          <p className="font-semibold text-2xl text-neutral-800 dark:text-neutral-200">
            Оказываем качественные и доступные услуги
          </p>
          <ul>
            {SERVICES.map((service, i) => (
              <li key={i} className="flex gap-4 items-center">
                <CheckIcon />
                <span className="text-neutral-600 dark:text-neutral-400 my-1">
                  {service}
                </span>
              </li>
            ))}
          </ul>
          <Button text="Наши услуги" link="services" />
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
