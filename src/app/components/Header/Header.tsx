'use client';

import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import logo from '../../../../public/assets/images/logo.svg';
import Button from '../shared/Button';
import Link from 'next/link';
import { LINKS } from '../../../../service/utils/constants';
import { BurgerIcon } from '../shared/Icons';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <>
      <header className="sticky bg-white top-0 w-full left-0 right-0 z-40 shadow-sm">
        <div className="px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center m-auto">
          <Link href="/">
            <Image src={logo} alt="logo" width={130} height={25} />
          </Link>
          <div className="hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1">
            {LINKS.map((link, i) => (
              <Link
                key={i}
                className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-100"
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center space-x-0.5">
            <Button text="Оформить визу" />
          </div>
          <div className="flex lg:hidden items-center">
            <div className="dropdown" onClick={() => setIsOpen(true)}>
              <label tabIndex={0} className="btn btn-ghost btn-square">
                <BurgerIcon />
              </label>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
