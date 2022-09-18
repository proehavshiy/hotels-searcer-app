import React from 'react';
import classNames from 'classnames/bind';

import { useSelector } from 'react-redux';

import Card from '../Card/Card';

import styles from './FavouriteHotels.module.scss';

const cn = classNames.bind(styles);
function FavouriteHotels() {
  const { items } = useSelector((state) => state.hotels.favourites);
  return (
    <div className={cn('favourites')}>
      <ul className={cn('hotels')}>
        {items.map((hotel) => (
          <Card
            type='favourite'
            data={hotel}
            key={hotel.hotelId}
          />
        ))}
      </ul>
    </div>
  );
}

export default FavouriteHotels;
