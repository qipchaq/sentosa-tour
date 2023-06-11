import React, { Dispatch, SetStateAction } from 'react';
import { LINKS } from '../../../../service/utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MouseEvent, useRef } from 'react';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  const closeIcon = useRef<SVGSVGElement>(null);
  const menuContainer = useRef<HTMLDivElement>(null);

  const onBodyClick = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (menuContainer.current && menuContainer.current === e.target) return;
    setIsOpen(false);
  };

  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } absolute top-0 right-0 w-screen h-screen z-50 lg:hidden flex-row-reverse bg-neutral-900 bg-opacity-50`}
      onClick={onBodyClick}
    >
      <div
        className="menu menu-compact p-2 shadow bg-white w-screen sm:w-52"
        ref={menuContainer}
      >
        <span className="w-fit text-right cursor-pointer self-end">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl"
            ref={closeIcon}
          />
        </span>
        <ul className="mt-3">
          {LINKS.map((link, i) => (
            <li key={i}>
              <Link className="justify-center w-40 m-auto" href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
