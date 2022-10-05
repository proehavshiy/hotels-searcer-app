import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import { initFetchHotels, initFetchImages } from '../../store/reducers/slices/hotels';

import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import HotelForm from '../../components/HotelForm/HotelForm';
import FavouriteHotels from '../../components/FavouriteHotels/FavouriteHotels';
import SearchedHotels from '../../components/SearchedHotels/SearchedHotels';

import format from '../../utils/formatValues';

import styles from './Hotels.module.scss';

const cn = classNames.bind(styles);

function Hotels() {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.searchParams);
  const { fetched } = useSelector((state) => state.hotels);

  // начальная подгрузка отелей и картинок для слайдера
  useEffect(() => {
    dispatch(initFetchHotels(searchParams));
    dispatch(initFetchImages());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={cn('hotels-page')}>
        <div className={cn('content-wrapper')}>
          <div className={cn('aside')}>
            <div className={cn('search-form')}>
              <HotelForm />
            </div>
            <FavouriteHotels />
          </div>
          <div className={cn('main-content')}>
            <div className={cn('heading-block')}>
              <h1 className={cn('heading')}>
                <span>Отели</span>
                {fetched.info.city}
              </h1>
              <div className={cn('date')}>
                {fetched.info.date && format('date', fetched.info.date)}
              </div>
            </div>
            <div className={cn('main-content__slider')}>
              <Slider />
            </div>
            <SearchedHotels />
          </div>
        </div>

      </main>
    </>
  );
}

export default Hotels;
