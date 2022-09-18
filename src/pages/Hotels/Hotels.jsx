/* eslint-disable no-shadow */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import { initFetchHotels, initFetchImages } from '../../store/reducers/slices/hotels';

import Card from '../../components/Card/Card';

import { getFormattedRUDate } from '../../utils/getFormattedRUDate';

import Slider from '../../components/Slider/Slider';

import HotelForm from '../../components/HotelForm/HotelForm';

import styles from './Hotels.module.scss';

const cn = classNames.bind(styles);

function Hotels() {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.searchParams);
  const { fetched, favourites } = useSelector((state) => state.hotels);

  // const { date, city, days } = searchParams;
  // console.log('date', date)
  // console.log('days', days)

  // const [cityStatic] = useState(city);
  // const [dateStatic] = useState(date);

  // начальная подгрузка отелей и картинок для слайдера
  useEffect(() => {
    dispatch(initFetchHotels(searchParams));
    dispatch(initFetchImages());
  }, [dispatch]);

  function getHotelWordDeclination(formatter) {
    if (formatter === 0 || formatter >= 5) {
      return 'отелей';
    }
    if (formatter === 1) {
      return 'отель';
    }
    return 'отеля';
  }

  return (
    <>
      <Header />
      <main className={cn('hotels-page')}>
        <div className={cn('content-wrapper')}>
          <div className={cn('aside')}>
            <div className='search-form'>
              <HotelForm />
            </div>
            <div className='favourites'>
              избранное
            </div>
          </div>
          <div className={cn('main-content')}>
            <div className={cn('heading-block')}>
              <h1 className={cn('heading')}>
                <span>Отели</span>
                {fetched.info.city}
              </h1>
              <div className={cn('date')}>
                {getFormattedRUDate(fetched.info.date)}
              </div>
            </div>
            <div className={cn('main-content__slider')}>
              <Slider />
            </div>
            <div className={cn('main-block')}>
              <h2 className={cn('main-block__heading')}>
                Добавлено в Избранное:
                {' '}
                <span>{favourites.ids.length}</span>
                {' '}
                {getHotelWordDeclination(favourites.ids.length)}
              </h2>
              <ul className={cn('hotels')}>
                {fetched.hotels.length && fetched.hotels.map((hotel) => (
                  <Card
                    type={'main'}
                    data={hotel}
                    info={fetched.info}
                    // startDate={new Date(fetched.info.date)}
                    // amountOfDays={fetched.info.days}
                    key={hotel.hotelId}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}

export default Hotels;
