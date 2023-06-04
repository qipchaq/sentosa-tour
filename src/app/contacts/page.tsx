'use client';

import React from 'react';
import Section from '../components/shared/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  AddressIcon,
  EmailIcon,
  FileIcon,
  PhoneIcon,
  SocialIcon,
} from '../components/shared/Icons';
import { sendMail } from '../../../service/api/sendMail';

const INIT_VALUES = {
  name: '',
  phone: '',
  email: '',
  // files: [] as File[],
  message: '',
};

const Contacts = () => {
  const [userData, setUserData] = React.useState(INIT_VALUES);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLTextAreaElement
    >
  ) => {
    e.preventDefault();
    const { id, name, value } = e.target;

    // if (id === 'files') {
    //   const { files } = e.target as HTMLInputElement;
    //   const newFiles = files ? Array.from(files) : [];
    //   setUserData((prev) => ({
    //     ...prev,
    //     [id]: [...prev[id], ...newFiles],
    //   }));
    // } else {
    setUserData((prev) => ({ ...prev, [name]: value }));
    // }
  };

  const handleFileClear = () => {
    setUserData((prev) => ({
      ...prev,
      files: [],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendMail(userData);
    console.log(userData);
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
                  <AddressIcon />
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
                  <EmailIcon />
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
                  <PhoneIcon />
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
                  <SocialIcon />
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
                  onChange={handleChange}
                  value={userData.name}
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
                  name="phone"
                  onChange={handleChange}
                  value={userData.phone}
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
                  onChange={handleChange}
                  value={userData.email}
                />
              </label>
              {/* <label className="block relative">
                <label
                  className="nc-Label text-sm font-medium text-neutral-700"
                  data-nc-id="Label"
                >
                  Прикрепить файл
                </label>
                <div className="mt-5 ">
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <FileIcon />
                      <div className="flex flex-col gap-1 justify-center text-sm text-neutral-6000">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                        >
                          <span className="text-info cursor-pointer rounded-md font-medium hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                            {userData.files.length
                              ? `Вы загрузили ${userData.files.length} файлов`
                              : 'Загрузить файл'}
                          </span>
                          <input
                            id="files"
                            className="sr-only block"
                            type="file"
                            accept=".png,.jpg,.pdf,.gif"
                            multiple
                            onChange={(e) => handleChange(e)}
                          />
                        </label>
                      </div>
                      {userData.files.length > 0 && (
                        <span
                          className="block cursor-pointer rounded-md font-medium text-info hover:text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                          onClick={handleFileClear}
                        >
                          Очистить
                        </span>
                      )}
                      <p className="text-xs text-neutral-500">
                        PNG, JPG, PDF, GIF
                      </p>
                    </div>
                  </div>
                </div>
              </label> */}
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
                  name="message"
                  onChange={handleChange}
                ></textarea>
              </label>
              <div>
                <button
                  type="submit"
                  className="btn btn-info rounded-full text-white"
                >
                  Отправить сообщение
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
