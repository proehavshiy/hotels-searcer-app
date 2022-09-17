/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import { initFetchHotels } from '../../store/reducers/slices/hotels';

import Card from '../../components/Card/Card';

import styles from './Hotels.module.scss';

const cn = classNames.bind(styles);

function Hotels() {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.searchParams);
  const { fetched, favourites } = useSelector((state) => state.hotels);

  // начальная подгрузка отелей
  useEffect(() => {
    dispatch(initFetchHotels(searchParams));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={cn('hotels-page')}>
        <div className={cn('content-wrapper')}>
          <aside className='aside'>
            <div className='search-form'>
              поисковая форма
            </div>
            <div className='favourites'>
              избранное
            </div>
          </aside>
          <div className='main-content'>
            <div className='heading-block'>
              <h1 className='heading'>
                <span>Отели</span>
                Москва
              </h1>
              <div className='date'>
                07 июля 2020
              </div>
            </div>
            <div className='carusel'>карусель</div>
            <div className='main-block'>
              <h2 className='main-block__heading'>
                Добавлено в Избранное: 3 отеля
              </h2>
              <ul className='hotels'>
                {fetched.map((hotel) => (
                  <Card
                    type={'main'}
                    data={hotel}
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
