import React from 'react';
import classNames from 'classnames/bind';

import { useSelector } from 'react-redux';

import Card from '../Card/Card';

import getRUDeclination from '../../utils/wordDeclinations';

import styles from './SearchedHotels.module.scss';

const cn = classNames.bind(styles);

function SearchedHotels() {
  const { fetched, favourites } = useSelector((state) => state.hotels);
  return (
    <div className={cn('searched')}>
      <h2 className={cn('searched__heading')}>
        Добавлено в Избранное:
        {' '}
        <span>{favourites.length}</span>
        {' '}
        {getRUDeclination('hotel', favourites.length)}
      </h2>
      {fetched.hotels.length
        ? (
          <ul className={cn('hotels')}>
            {fetched.hotels.map((hotel) => (
              <Card
                type='main'
                data={hotel}
                key={hotel.hotelId}
              />
            ))}
          </ul>
        )
        : <div className={cn('hotels-placeholder')}>Отели не найдены</div>}
    </div>
  );
}

export default SearchedHotels;
