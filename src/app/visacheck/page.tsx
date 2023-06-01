"use client";

import React, { useState } from "react";
import Section from "../components/shared/Section";

const VisaCheck = () => {
  const [applicationNumber, setApplicationNumber] = useState("");

  return (
    <Section>
      <div className="max-w-[768px] m-auto py-10 pb-24 lg:pb-28">
        <div className="mb-8 lg:mb-10 text-center sm:text-start ">
          <h2 className="text-4xl mb-5 font-semibold">
            Электронная виза в Сингапур
          </h2>
          <p className="block text-base xl:text-lg text-neutral-800 mt-6">
            Для проверки статуса визы необходимо ввести уникальный номер заявки,
            присланный Вам при оформлении на email.
          </p>
        </div>
        <div className="flex flex-col justify-center max-w-[320px] gap-3 mx-auto">
          <label className="font-semibold">
            Введите уникальный номер заявки:
            <input
              className="input input-bordered mt-3 w-full rounded-full focus:outline-none focus:ring-2 bg-white"
              type="text"
              onChange={(e) => setApplicationNumber(e.target.value)}
              value={applicationNumber}
            />
          </label>
          <button
            disabled={!applicationNumber.length}
            className="btn rounded-full btn-info hover:btn-primary-focus text-sm sm:text-base normal-case text-neutral-50"
          >
            Проверить
          </button>
        </div>
      </div>
    </Section>
  );
};

export default VisaCheck;
