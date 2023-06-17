'use client';

import Section from '@/src/app/components/shared/Section';
import Image from 'next/image';
import React, { useReducer, useState } from 'react';
import calculatorGif from '../../../../../public/assets/images/calculator-anim.gif';
import calculator from '../../../../../public/assets/images/calculator.png';

const initialValue = {
  total: 60,
  term: 'default',
  hotel: 'default',
  visitType: 'default',
};

type State = typeof initialValue;

type Action =
  | { type: 'termUrgent' }
  | { type: 'termStandard' }
  | { type: 'hotelCompany' }
  | { type: 'hotelOwn' }
  | { type: 'oneVisit' }
  | { type: 'twoVisits' }
  | { type: 'manyVisits' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'termUrgent':
      if (state.term !== 'termUrgent') {
        return { ...state, total: (state.total += 40), term: 'termUrgent' };
      }
    case 'termStandard':
      return state.term === 'termUrgent'
        ? {
            ...state,
            total: (state.total -= 40),
            term: 'termStandard',
          }
        : state;
    case 'hotelCompany':
      return state.term === 'hotelOwn' || state.term === 'default'
        ? {
            ...state,
            total: (state.total -= 20),
            hotel: 'hotelCompany',
          }
        : state;
    case 'hotelOwn':
      return state.term === 'hotelCompany' || state.term === 'default'
        ? {
            ...state,
            total: (state.total += 20),
            hotel: 'hotelOwn',
          }
        : state;
    case 'oneVisit':
      if (state.visitType === 'default') {
        return { ...state, total: (state.total += 20), visitType: 'oneVisit' };
      } else if (state.visitType === 'twoVisits') {
        return { ...state, total: (state.total -= 20), visitType: 'oneVisit' };
      } else if (state.visitType === 'manyVisits') {
        return { ...state, total: (state.total -= 40), visitType: 'oneVisit' };
      } else return state;
    case 'twoVisits':
      if (state.visitType === 'default') {
        return { ...state, total: (state.total += 40), visitType: 'twoVisits' };
      } else if (state.visitType === 'oneVisit') {
        return { ...state, total: (state.total += 20), visitType: 'twoVisits' };
      } else if (state.visitType === 'manyVisits') {
        return { ...state, total: (state.total -= 20), visitType: 'twoVisits' };
      } else return state;
    case 'manyVisits':
      if (state.visitType === 'default') {
        return {
          ...state,
          total: (state.total += 60),
          visitType: 'manyVisits',
        };
      } else if (state.visitType === 'oneVisit') {
        return {
          ...state,
          total: (state.total += 40),
          visitType: 'manyVisits',
        };
      } else if (state.visitType === 'twoVisits') {
        return {
          ...state,
          total: (state.total += 20),
          visitType: 'manyVisits',
        };
      } else return state;
    default:
      return state;
  }
};

const Calculator = () => {
  const handleVisaCalculation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.target.value === 'termUrgent' && dispatch({ type: e.target.value });
    e.target.value === 'termStandard' && dispatch({ type: e.target.value });
    e.target.value === 'hotelCompany' && dispatch({ type: e.target.value });
    e.target.value === 'hotelOwn' && dispatch({ type: e.target.value });
    e.target.value === 'oneVisit' && dispatch({ type: e.target.value });
    e.target.value === 'twoVisits' && dispatch({ type: e.target.value });
    e.target.value === 'manyVisits' && dispatch({ type: e.target.value });
    console.log(e.target.value);
  };

  const [visaTotalPrice, dispatch] = useReducer(reducer, initialValue);

  return (
    <Section>
      <div className="collapse collapse-arrow p-4 sm:p-6 bg-white border border-neutral-100 rounded-2xl hover:shadow-lg transition-shadow group lg:bg-neutral-50">
        <input type="checkbox" className="peer" />
        <div className="collapse-title items-start sm:gap-10 flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0">
          <div className="w-16 h-12 flex justify-center items-center">
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
              // className="group-hover:block"
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
          <div className="p-4 md:p-8 border border-neutral-200 rounded-2xl bg-white">
            <div className="grid md:grid-cols-3 md:gap-3">
              <div>
                <p className="text-sm font-medium text-neutral-700">
                  Срок оформления
                </p>
                <select
                  className="select select-bordered w-full max-w-xs rounded-2xl my-4 bg-white font-normal"
                  onChange={handleVisaCalculation}
                  value={visaTotalPrice.term}
                >
                  <option
                    value="default"
                    disabled
                    className="h-11 block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white"
                  >
                    -Выберите срок оформления-
                  </option>
                  <option value="termUrgent">
                    Срочная виза (1-2 рабочих дня)
                  </option>
                  <option value="termStandard">
                    Стандартная виза (3-4 рабочих дня)
                  </option>
                </select>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">
                  Бронирование отеля
                </p>
                <select
                  className="select select-bordered w-full max-w-xs rounded-2xl my-4 bg-white font-normal"
                  onChange={handleVisaCalculation}
                  value={visaTotalPrice.hotel}
                >
                  <option
                    disabled
                    value="default"
                    className="h-11 block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white"
                  >
                    -Выберите как бронируете отель-
                  </option>
                  <option value="hotelCompany">Через нашу компанию</option>
                  <option value="hotelOwn">Самостоятельно</option>
                </select>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">Тип визы</p>
                <select
                  className="select select-bordered w-full max-w-xs rounded-2xl my-4 bg-white font-normal"
                  onChange={handleVisaCalculation}
                  value={visaTotalPrice.visitType}
                >
                  <option
                    disabled
                    value="default"
                    className="h-11 block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white"
                  >
                    -Выберите тип визы-
                  </option>
                  <option value="oneVisit">Однократный въезд</option>
                  <option value="twoVisits">Двухкратный въезд</option>
                  <option value="manyVisits">Многократный въезд</option>
                </select>
              </div>
            </div>
            <div className="py-10 flex justify-center">
              <p className="text-neutral-700 text-sm md:text-base p-5 border-y-2">
                Стоимость визы <b>{visaTotalPrice.total}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Calculator;
