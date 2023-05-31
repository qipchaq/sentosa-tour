import React from 'react';
import Button from '../shared/Button';
import Image from 'next/image';
import mainSection from '../../../../public/assets/images/main-section.png';

const MainSection = () => {
  return (
    <section className="justify-between items-center pt-10 lg:pt-16 lg:pb-16 gap-16 flex flex-col lg:flex-row lg:items-center">
      <div className="flex flex-col gap-10 flex-1">
        <h1 className="font-medium text-neutral-800 dark:text-neutral-200 text-4xl md:text-5xl xl:text-5xl !leading-[114%] max-w-[568px]">
          Авторизированный Партнер Иммиграционного Офиса Сингапура
        </h1>
        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
          Ваш отдых в Сингапуре, начнется с визита к нам!
        </p>
        <Button text="Оформить визу" />
      </div>

      <div className="flex flex-1 justify-end">
        <Image src={mainSection} alt="mainSection" width={624} height={643} />
      </div>
    </section>
  );
};

export default MainSection;
