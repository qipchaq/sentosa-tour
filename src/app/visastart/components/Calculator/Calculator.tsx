'use client';

import Section from '@/app/components/shared/Section';
import Image from 'next/image';
import React from 'react';
import calculatorGif from '../../../../../public/assets/images/calculator-anim.gif';
import calculator from '../../../../../public/assets/images/calculator.png';

const Calculator = () => {
  const handleVisaTerm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  return (
    <Section>
      <div className="collapse collapse-arrow p-4 sm:p-6 bg-white border border-neutral-100 rounded-2xl hover:shadow-lg transition-shadow group">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center gap-10">
          <div className="w-16 flex justify-center items-center">
            <Image
              src={calculator}
              width={38}
              height={38}
              alt="calculator"
              className="group-hover:hidden"
            />
            <Image
              src={calculatorGif}
              width={46}
              height={46}
              alt="calculator"
              className="hidden group-hover:block"
            />
          </div>

          <div>
            <h3 className="font-medium text-lg">
              Калькулятор стоимости визы в Сингапур
            </h3>
            <p className="text-sm text-neutral-500 font-normal mt-0.5">
              Вы можете воспользоваться калькулятором расчета стоимости визы.
              Стоимость рассчитывается на одного заявителя.
            </p>
          </div>
        </div>
        <div className="collapse-content">
          <div className="p-4 md:p-8 border border-neutral-200 rounded-2xl">
            <div className="grid md:grid-cols-3 md:gap-3">
              <div>
                <p className="text-sm font-medium text-neutral-700">
                  Срок оформления
                </p>
                <select
                  className="select select-bordered w-full max-w-xs rounded-2xl my-4"
                  onChange={handleVisaTerm}
                >
                  <option
                    disabled
                    selected
                    className="h-11 block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white"
                  >
                    -Выберите срок оформления-
                  </option>
                  <option value="true">Срочная виза (1-2 рабочих дня)</option>
                  <option value="false">
                    Стандартная виза (3-4 рабочих дня)
                  </option>
                </select>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">
                  Бронирование отеля
                </p>
                <select
                  className="select select-bordered w-full max-w-xs rounded-2xl my-4"
                  onChange={handleVisaTerm}
                >
                  <option
                    disabled
                    selected
                    className="h-11 block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white"
                  >
                    -Выберите как бронируете отель-
                  </option>
                  <option value="true">Через нашу компанию</option>
                  <option value="false">Самостоятельно</option>
                </select>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">Тип визы</p>
                <select
                  className="select select-bordered w-full max-w-xs rounded-2xl my-4"
                  onChange={handleVisaTerm}
                >
                  <option
                    disabled
                    selected
                    className="h-11 block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white"
                  >
                    -Выберите тип визы-
                  </option>
                  <option value="0">Однократный въезд</option>
                  <option value="1">Двухкратный въезд</option>
                  <option value="2">Многократный въезд</option>
                </select>
              </div>
            </div>
            <div className="px-24 py-10">
              <p className="text-neutral-700 text-sm md:text-base py-5 border-y-2">
                Стоимость визы 60
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Calculator;
