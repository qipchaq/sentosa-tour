import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/assets/images/logo.svg';
import { MoonIcon, SunIcon } from './Icons';
import Button from '../shared/Button';

const Header = () => {
  return (
    <header className="sticky bg-white top-0 w-full left-0 right-0 z-40 shadow-sm">
      <div className="px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center m-auto">
        <Image src={logo} alt="logo" width={130} height={25} />
        <div className="flex items-center gap-2">
          <a className="btn btn-ghost normal-case text-xl rounded-full">
            Главная
          </a>
          <a className="btn btn-ghost normal-case text-xl rounded-full">
            Виза в Сингапур
          </a>
          <a className="btn btn-ghost normal-case text-xl rounded-full">
            Услуги
          </a>
          <a className="btn btn-ghost normal-case text-xl rounded-full">
            Статус заявки
          </a>
          <a className="btn btn-ghost normal-case text-xl rounded-full">
            О нас
          </a>
          <a className="btn btn-ghost normal-case text-xl rounded-full">
            Контакты
          </a>
        </div>
        <div className="flex items-center gap-4">
          <label className="swap swap-rotate">
            <input type="checkbox" />
            <SunIcon />
            <MoonIcon />
          </label>
          <Button text="Оформить визу" />
        </div>
      </div>
    </header>
  );
};

export default Header;
