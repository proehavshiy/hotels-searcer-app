/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { useSelector } from 'react-redux';

import Card from '../Card/Card';

import Filter from '../UI/Filter/Filter';

import { FavouriteHotelsForRendering } from '../../utils/FavouriteHotelsForRendering';

import styles from './FavouriteHotels.module.scss';

const cn = classNames.bind(styles);
function FavouriteHotels() {
  const { items } = useSelector((state) => state.hotels.favourites);
  const [filterState, setFilterState] = useState({ name: null, filterParam: null });

  const sortedFavouriteHotels = new FavouriteHotelsForRendering(items).sortByParam(filterState).data;

  return (
    <div className={cn('favourites')}>
      <h2 className={cn('heading')}>Избранное</h2>
      <div className={cn('filer-bar')}>
        <Filter
          name='Рейтинг'
          filterStatus={filterState}
          handleFilter={setFilterState}
        />
        <Filter
          name='Цена'
          filterStatus={filterState}
          handleFilter={setFilterState}
        />
      </div>
      {
        sortedFavouriteHotels.length
          ? (
            <ul className={cn('hotels')}>
              {sortedFavouriteHotels.map((hotel) => (
                <Card
                  type='favourite'
                  data={hotel}
                  key={hotel.hotelId}
                />
              ))}
            </ul>
          )
          : <p className={cn('hotels-placeholder')}>Список избранных пуст</p>
      }
    </div>
  );
}

export default FavouriteHotels;
