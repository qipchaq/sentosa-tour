import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="px-4 lg:container py-4 lg:py-5 m-auto">
        <div className="divider"></div>
        <div className="flex flex-col max-w-[520px] m-auto md:max-w-screen-lg md:flex-row gap-10 justify-between py-10 lg:py-28 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          <div className="flex flex-col gap-3">
            <Link href="#" className="w-fit">
              <Image src={logo} alt="logo" width={130} height={25} />
            </Link>
            <Link
              href="https://www.facebook.com/sentosa_tours"
              target="blank"
              className="mt-2 flex items-center gap-1 w-fit"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-4 mr-2" />
              <span>Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/sentosatours/"
              target="blank"
              className="flex items-center gap-1 w-fit"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-4 mr-2" />
              <span>Instagram</span>
            </Link>
          </div>
          <div className="text-sm sm:col-span-2 md:col-span-2 lg:max-w-[300px] lg:m-auto">
            <h4 className="font-semibold text-neutral-700">Карта сайта</h4>
            <ul className="grid grid-cols-2 false mt-4">
              <li className="my-2">
                <a
                  href="#"
                  className="text-neutral-6000 hover:text-black active"
                >
                  Главная
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/blogs"
                  className="text-neutral-6000 hover:text-black active"
                >
                  Блог
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/visastart"
                  className="text-neutral-6000 hover:text-black active"
                >
                  Виза в Сингапур
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/about"
                  className="text-neutral-6000 hover:text-black active"
                >
                  О нас
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/terms"
                  className="text-neutral-6000 hover:text-black active"
                >
                  Пользовательское соглашение
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/confidentiality"
                  className="text-neutral-6000 hover:text-black active"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/contacts"
                  className="text-neutral-6000 hover:text-black active"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm false">
            <h4 className="font-semibold text-neutral-700">Связаться c нами</h4>
            <ul className="false text-justify mt-5 ">
              <li className="my-2">
                <a
                  rel="noreferrer"
                  className="text-neutral-6000 hover:text-black"
                  href="//goo.gl/maps/wRt9hLXnv1CUu19LA"
                  target="_blank"
                >
                  Адрес: 41 Hume Avenue 03-10 Singapore
                </a>
              </li>
              <li className="my-2">
                <a
                  rel="noreferrer"
                  className="text-neutral-6000 hover:text-black"
                  href="/contacts"
                  target=""
                >
                  Телефон: +6581810090
                </a>
              </li>
              <li className="my-2">
                <a
                  rel="noreferrer"
                  className="text-neutral-6000 hover:text-black"
                  href="/contacts"
                  target=""
                >
                  Email: office@sentosatour.com
                </a>
              </li>
              <li className="my-2">
                <a
                  rel="noreferrer"
                  className="text-neutral-6000 hover:text-black"
                  href="/contacts"
                  target=""
                >
                  Часы работы: Пн. - Вс. / 9:00AM - 8:00PM <br />
                  по Сингапурскому времени
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
