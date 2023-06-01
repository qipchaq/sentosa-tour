import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/images/logo.svg";
import Button from "../shared/Button";
import Link from "next/link";

const LINKS = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Виза в Сингапур",
    href: "/visastart",
  },
  {
    title: "Статус заявки",
    href: "/visacheck",
  },
  {
    title: "О нас",
    href: "/about",
  },
  {
    title: "Контакты",
    href: "/contacts",
  },
];

const Header = () => {
  return (
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
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 right-0"
            >
              {LINKS.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
