/* eslint-disable no-shadow */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import { initFetchHotels, initFetchImages } from '../../store/reducers/slices/hotels';

import Card from '../../components/Card/Card';

import { getFormattedRUDate } from '../../utils/getFormattedRUDate';

import Slider from '../../components/Slider/Slider';

import styles from './Hotels.module.scss';

const cn = classNames.bind(styles);

function Hotels() {
  const dispatch = useDispatch();
  const searchParams = useSelector((state) => state.searchParams);
  const { fetched, favourites, images } = useSelector((state) => state.hotels);

  const { date, city } = searchParams;

  // const date111 = new Date().toLocaleDateString('ru-RU', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });

  // console.log(date111);

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
          <div className='aside'>
            <div className='search-form'>
              <form className={cn('form')}>
                <h1 className={cn('form__heading')}>Simple Hotel Check</h1>
                <div className={cn('form__fields')}>
                  <fieldset className={cn('form__input-section')}>
                    <label htmlFor='login' className={cn('form__label')}>Локация</label>
                    <input
                      type='text'
                      name='location'
                      id='location'
                      className={cn('form__input')}
                    // value={formik.values.login}
                    // onChange={formik.handleChange}
                    />
                    {/* {formik.errors.login
                      ? <span className={cn('form__input-error')}>{formik.errors.login}</span>
                      : null} */}
                  </fieldset>
                  <fieldset className={cn('form__input-section')}>
                    <label htmlFor='password' className={cn('form__label')}>Дата заселения</label>
                    <input
                      type='date'
                      name='date'
                      id='date'
                      className={cn('form__input')}
                    // value={formik.values.password}
                    // onChange={formik.handleChange}
                    />
                    {/* {formik.errors.password
                      ? <span className={cn('form__input-error')}>{formik.errors.password}</span>
                      : null} */}
                  </fieldset>
                  <fieldset className={cn('form__input-section')}>
                    <label htmlFor='password' className={cn('form__label')}>Количество дней</label>
                    <input
                      type='number'
                      name='days'
                      id='days'
                      className={cn('form__input')}
                    // value={formik.values.password}
                    // onChange={formik.handleChange}
                    />
                    {/* {formik.errors.password
                      ? <span className={cn('form__input-error')}>{formik.errors.password}</span>
                      : null} */}
                  </fieldset>
                </div>
                <button className={cn('form__submit')} type='submit'>
                  Найти
                </button>
              </form>
            </div>
            <div className='favourites'>
              избранное
            </div>
          </div>
          <div className={cn('main-content')}>
            <div className={cn('heading-block')}>
              <h1 className={cn('heading')}>
                <span>Отели</span>
                {city}
              </h1>
              <div className={cn('date')}>
                {getFormattedRUDate(date)}
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
