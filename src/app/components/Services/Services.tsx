'use client';

import React from 'react';
import serviceVisa from '../../../../public/assets/images/service-visa.png';
import serviceTour from '../../../../public/assets/images/service-tour.png';
import serviceTransfer from '../../../../public/assets/images/service-transfer.png';
import serviceHotel from '../../../../public/assets/images/service-hotel.jpeg';
import serviceTickets from '../../../../public/assets/images/service-tickets.jpg';
import serviceEducation from '../../../../public/assets/images/service-education.jpg';
import serviceRent from '../../../../public/assets/images/service-rent.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SERVICES = [
  {
    title: 'Виза в Сингапур',
    text: 'Помощь в оформлении визы позволит вам сэкономить личное время и деньги.',
    img: serviceVisa,
  },
  {
    title: 'Экскурсии',
    text: 'Частные гиды и индивидуальные туры. Русские гиды - переводчики. Груповые экскурсии.',
    img: serviceTour,
  },
  {
    title: 'Трансфер',
    text: 'Комфортабельный транспорт. Встреча в аэропорту с именной табличкой, помощь с багажом.',
    img: serviceTransfer,
  },
  {
    title: 'Бронирование отелей',
    text: 'Лучшие номера в отелях, оформление документов, лучшие условия.',
    img: serviceHotel,
  },
  {
    title: 'Бронирование билетов',
    text: 'Укажите даты прилеты и вылета, а все остальное сделаем мы.',
    img: serviceTickets,
  },
  {
    title: 'Обучение в Сингапуре',
    text: 'Помощь в оформлении документов для обучения в Сингапуре.',
    img: serviceEducation,
  },
  {
    title: 'Аренда автомобиля',
    text: 'Все что Вам нужно - это написать нам. Все остальное мы сделаем сами.',
    img: serviceRent,
  },
];

const Services = () => {
  return (
    <section className="pt-10 lg:pt-16 lg:pb-16">
      <div className="mb-12 lg:mb-16 text-neutral-900">
        <h2 className="font-medium text-neutral-800 text-4xl md:text-5xl xl:text-5xl !leading-[114%]">
          Популярные услуги
        </h2>
        <p className="block text-base xl:text-lg text-neutral-600 mt-3">
          Услуги пользующиеся наибольшим спросом
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {SERVICES.map((service, i) => (
          <SwiperSlide key={i}>
            <div className="">
              <div className="w-full">
                <Image
                  src={service.img}
                  alt="mainSection"
                  // width={224}
                  // height={168}
                  //   style={{ objectFit: 'cover', height: '168px', width: '224px' }}
                  // fill
                  className="rounded-2xl overflow-hidden"
                />
              </div>
              <div className="mt-4 px-3">
                <p className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium whitespace-normal">
                  {service.title}
                </p>
                <p className="block mt-2 text-sm text-neutral-6000 dark:text-neutral-400">
                  {service.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
