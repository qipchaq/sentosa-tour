import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../components/shared/Section";
import Image from "next/image";
import visaStart from "../../../public/assets/images/visastart-hiro.jpg";
import {
  WebIcon,
  FormIcon,
  PhotoIcon,
  TicketIcon,
  ReservationIcon,
} from "../components/shared/Icons";
import { faGgCircle } from "@fortawesome/free-brands-svg-icons";
import Button from "../components/shared/Button";
import Calculator from "./components/Calculator/Calculator";

const REQIURED_DOCS = [
  {
    icon: <WebIcon />,
    text: [
      "Необходимо загрузить в электронном виде (отканировать или качественно и чётко сфотографировать) разворот загранпаспорта с вашими данными: фото, дата выдачи, ФИО. При этом паспорт должен действовать ещё как минимум в течение полугода на момент пересечения границы Сингапура. В паспортае должна быть хотя бы одна пустая страница для пограничного штампа.",
      "Виза на каждого ребёнка оформляется отдельно — и если он вписан в паспорт путешествующего с ним родителя, и если у него есть свой загранпаспорт. Если ребёнок вписан в паспорт, то цифровую копию этой страницы также нужно приложить.",
    ],
  },
  {
    icon: <FormIcon />,
    text: [
      "Заполненная анкета для визы в Сингапур, заполнить которую можно по ссылке ниже.",
    ],
  },
  {
    icon: <PhotoIcon />,
    text: [
      "Нужно загрузить ваше цветное фото, оно может быть как сделано на цифровую камеру, так и отсканировано с бумажного носителя. Требования к фотографии на визу в Сингапур:",
      [
        "фон должен быть белым;",
        "фото должно быть свежим — не более трёх месяцев до загрузки;",
        "не должно быть головного убора и деталей, закрывающих лицо;",
        "фотография должна быть четкой, как на паспорт, фото плохого качества повлекут за собой отказ в выдаче визы.",
      ],
      "Имейте в виду, что фотография не вклеивается и не печатается непосредственно на сингапурской визе, она хранится в базе данных Иммиграционного Ведомства Сингапура, и офицер сравнивает вас с фотоизображением при пересечении границы.",
    ],
  },
  {
    icon: <TicketIcon />,
    text: ["Приложить авиабилет в/из Сингапура."],
  },
  {
    icon: <ReservationIcon />,
    text: [
      "Приложить подтверждение бронирования гостиницы. Либо воспользоваться услцгой бронирования гостиницы.",
    ],
  },
];

const VisaStart = () => {
  return (
    <div>
      <Section>
        <div className="relative flex flex-col justify-center lg:flex-row lg:items-center max-w-screen-xl container pb-2 lg:pb-8 ">
          <div className="flex flex-col gap-6 mt-12 items-center text-center flex-shrink-0 mb-2 lg:text-start lg:mb-0 lg:items-start lg:mr-10 lg:w-1/3 lg:self-start">
            <h2 className="font-semibold text-2xl text-neutral-800">
              Электронная виза в Сингапур
            </h2>
            <p className="block text-base xl:text-lg text-neutral-600">
              Лицензированный туроператор Сентоза-Тур предлагают вам оформить
              визу в Сингапур онлайн. Компания Сентоза-Тур имеет статус
              Надежного Партнера иммиграционной службы Сингапура. Мы оформим для
              вас электронную визу в Сингапур всего за 3–4 дня от 60 долларов!
            </p>
          </div>
          <div className="flex-grow sm: max-w-[530px] self-center">
            <Image
              src={visaStart}
              alt="Image"
              width={530}
              height={353}
              className="rounded-2xl overflow-hidden"
            />
          </div>
        </div>
      </Section>
      <div className="divider px-4 lg:container py-4 lg:py-5 m-auto"></div>
      <Calculator />
      <Section>
        <div className="max-w-[768px] mx-auto">
          <h2 className="font-semibold text-2xl text-neutral-800">
            Оформление визы
          </h2>
          <p className="block text-base xl:text-lg text-neutral-800 mt-6">
            Лицензированный туроператор Сентоза-Тур предлагают вам оформить визу
            в Сингапур онлайн. Компания Сентоза-Тур имеет статус Надежного
            Партнера иммиграционной службы Сингапура. Мы оформим для вас
            электронную визу в Сингапур всего за 3–4 дня от 60 долларов!
          </p>
          <p className="block text-base xl:text-lg text-neutral-800 mt-6">
            Виза в Сингапур даёт вам право въезда на территорию государства в
            течение девяти недель, то есть срока действия визы. Однако
            непрерывное пребывание на территории Сингапура ограничено 30 днями —
            въездной штамп дает право пребывать в стране в течение этого срока,
            не более. То есть въехать и находиться на территории Сингапура
            безвыездно все девять недель по данной категории визы нельзя.
          </p>
          <p className="block text-base xl:text-lg text-neutral-800 mt-6">
            К рассмотрению принимаются заявки от граждан Армении, Азербайджана,
            Беларуси, Грузии, Казахстана, Кыргызстана, Молдовы, России,
            Таджикистана, Туркменистана, Узбекистана
          </p>
        </div>
      </Section>
      <Section>
        <div className="max-w-[768px] mx-auto">
          <h2 className="font-semibold text-2xl text-neutral-800">
            Требуемые документы
          </h2>
          <p className="block text-base xl:text-lg text-neutral-800 mt-6 font-bold">
            Для оформления заявки вам потребуется:
          </p>
          {REQIURED_DOCS.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className="flex gap-10 mt-6">
                  <div>{item.icon}</div>
                  <div className="flex flex-col gap-8">
                    {item.text.map((text) => {
                      return Array.isArray(text) ? (
                        text.map((bullet, index) => (
                          <p
                            key={index}
                            className="text-base xl:text-lg text-neutral-800"
                          >
                            <FontAwesomeIcon
                              icon={faGgCircle}
                              className="w-2 inline mr-4"
                            />
                            {bullet}
                          </p>
                        ))
                      ) : (
                        <p className="text-base xl:text-lg text-neutral-800">
                          {text}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </Fragment>
            );
          })}
          <p className="text-base xl:text-lg text-neutral-800 mt-12">
            В течение 3–4 дней после подачи и оплаты заявки на ваш email придет
            PDF-файл, вам остается только распечатать этот документ и предъявить
            при въезде в Сингапур.
          </p>
          <div className="text-center mt-10">
            <Button text="Заполнить анкету онлайн" link="visa" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default VisaStart;
