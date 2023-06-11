'use client';

import React, { useEffect, useRef } from 'react';
import Section from '../components/shared/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  AddressIcon,
  EmailIcon,
  FileIcon,
  PhoneIcon,
  SocialIcon,
  SpinnerIcon,
} from '../components/shared/Icons';
import emailjs from '@emailjs/browser';

const INIT_VALUES = {
  name: '',
  phone: '',
  email: '',
  files: [],
  message: '',
  status: 'init',
  error: '',
};

const Contacts = () => {
  const form = useRef<any>();
  const [userData, setUserData] = React.useState(INIT_VALUES);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLTextAreaElement
    >
  ) => {
    e.preventDefault();

    if (e.target.id === 'files') {
      const file = e.target as HTMLInputElement;
      const files = userData.files;
      setUserData((prev) => ({
        ...prev,
        [file.id]: [...files, ...(file.files ? Array.from(file.files) : [])],
      }));
    }
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    setUserData((prev) => ({ ...prev, status: 'sending' }));
    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then((result) => {
        setUserData((prev) => ({ ...prev, status: 'success' }));
      })
      .catch((error) => {
        setUserData((prev) => ({ ...prev, status: 'error', error: error }));
      })
      .finally(() => {
        formElement.reset();
      });
  };

  useEffect(() => {
    if (userData.status === 'success') {
      setTimeout(() => {
        setUserData(INIT_VALUES);
      }, 3000);
    }
  }, [userData.status]);

  const toast = () => {
    if (userData.status === 'success') {
      return (
        <div className="alert alert-success">
          <span>Message sent successfully.</span>
        </div>
      );
    } else if (userData.status === 'error') {
      <div className="alert alert-error">
        <span>Ошибка при отправке. Попробуйте еще раз.</span>
      </div>;
    }
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
            <form
              className="grid grid-cols-1 gap-6"
              ref={form}
              onSubmit={handleSubmit}
            >
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
                  {userData.status === 'sending' && <SpinnerIcon />}
                  Отправить сообщение
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="toast toast-start">{toast()}</div>
    </Section>
  );
};

export default Contacts;
