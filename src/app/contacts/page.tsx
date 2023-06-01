"use client";

import React from "react";
import Section from "../components/shared/Section";
import Button from "../components/shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // const value = Object.fromEntries(data.entries());
    console.log(e);
  };
  return (
    <Section>
      <h2 className="my-10 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-800 justify-center">
        Электронная виза в Сингапур
      </h2>
      <div className="container max-w-7xl mx-auto">
        <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="max-w-sm space-y-8">
            <div>
              <h3 className="grid grid-cols-[20px_1fr] gap-3 items-start uppercase font-semibold text-sm tracking-wider">
                <span className="h-[22px] relative bottom-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    ></path>
                  </svg>
                </span>
                <span className="self-end">АДРЕС</span>
              </h3>
              <span className="block mt-2 ml-2 text-neutral-500">
                41 Hume Avenue 03-10, Singapore
              </span>
            </div>
            <div>
              <h3 className="grid grid-cols-[20px_1fr] gap-3 items-start uppercase font-semibold text-sm tracking-wider">
                <span className="h-[22px] relative bottom-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    ></path>
                  </svg>
                </span>
                <span className="self-end">EMAIL</span>
              </h3>
              <span className="block mt-2 ml-2 text-neutral-500">
                office@sentosatour.com
              </span>
            </div>
            <div>
              <h3 className="grid grid-cols-[20px_1fr] gap-3 items-start uppercase font-semibold text-sm tracking-wider">
                <span className="h-[22px] relative bottom-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    ></path>
                  </svg>
                </span>
                <span className="self-end">Телефон</span>
              </h3>
              <span className="block mt-2 ml-2 text-neutral-500">
                +6581810090
              </span>
            </div>
            <div>
              <h3 className="uppercase font-semibold text-sm text-neutral-600 tracking-wider">
                <span className="inline-block h-[22px] mr-2 align-sub">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    ></path>
                  </svg>
                </span>
                Мы в социальных сетях
              </h3>
              <nav
                className="flex space-x-2.5 text-2xl text-neutral-6000 mt-2 ml-2"
                data-nc-id="SocialsList"
              >
                <a
                  className="block"
                  href="https://www.facebook.com/sentosa_tours"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-4 mr-2" />
                </a>
                <a
                  className="block"
                  href="https://www.instagram.com/sentosatours/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-4 mr-2" />
                </a>
              </nav>
            </div>
          </div>
          <div>
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <label className="block relative">
                <label
                  className="nc-Label text-sm font-medium text-neutral-700"
                  data-nc-id="Label"
                >
                  Ваши имя и фамилия
                </label>
                <input
                  placeholder="Иван Иванов"
                  type="text"
                  className="mt-2 input input-bordered w-full rounded-full focus:outline-none focus:ring-2 bg-white"
                  name="name"
                  value=""
                />
              </label>
              <label className="block relative">
                <label
                  className="nc-Label text-sm font-medium text-neutral-700"
                  data-nc-id="Label"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  className="mt-2 input input-bordered w-full rounded-full focus:outline-none focus:ring-2 bg-white"
                  placeholder="+7 (123) 456-78-90"
                  name="tel"
                  value=""
                />
              </label>
              <label className="block relative">
                <label
                  className="nc-Label text-sm font-medium text-neutral-700 "
                  data-nc-id="Label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="mt-2 input input-bordered w-full rounded-full focus:outline-none focus:ring-2 bg-white"
                  placeholder="example@example.com"
                  name="email"
                  value=""
                />
              </label>
              <label className="block relative">
                <label
                  className="nc-Label text-sm font-medium text-neutral-700"
                  data-nc-id="Label"
                >
                  Прикрепить файл
                </label>
                <div className="mt-5 ">
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-neutral-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div className="flex flex-col gap-1 justify-center text-sm text-neutral-6000">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                        >
                          <span className="text-info">Загрузить файл</span>
                          <input
                            id="file-upload"
                            className="sr-only block"
                            type="file"
                            multiple
                          />
                        </label>
                      </div>
                      <p className="text-xs text-neutral-500">
                        PNG, JPG, PDF, GIF
                      </p>
                    </div>
                  </div>
                </div>
              </label>
              <label className="block relative">
                <label
                  className="nc-Label text-sm font-medium text-neutral-700"
                  data-nc-id="Label"
                >
                  Сообщение
                </label>
                <textarea
                  className="textarea textarea-bordered rounded-3xl block w-full text-sm border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white mt-2"
                  rows={6}
                  name="text"
                ></textarea>
              </label>
              <div>
                <Button text="Отправить сообщение" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
