import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { useSelector } from 'react-redux';

import Card from '../Card/Card';

import Filter from '../UI/Filter/Filter';

import { FavouriteHotelsForRendering } from '../../utils/FavouriteHotelsForRendering';

import useWindowDimensions from '../../utils/hooks/useWindowDimensions';

import CollapseButton from '../UI/CollapseButton/CollapseButton';

import styles from './FavouriteHotels.module.scss';

const cn = classNames.bind(styles);
function FavouriteHotels() {
  const { items } = useSelector((state) => state.hotels.favourites);
  const [filterState, setFilterState] = useState({ name: null, filterParam: null });

  const sortedFavouriteHotels = new FavouriteHotelsForRendering(items).sortByParam(filterState).data;

  const { width } = useWindowDimensions();
  // если ширина доступного экрана менее 992, то по умолчанию блок с избранным скрыт
  const [collapsed, setCollapsed] = useState(width < 992);

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  return (
    <div className={cn('favourites')}>
      <CollapseButton
        isActive={collapsed}
        handleClick={toggleCollapse}
      />
      <h2 className={cn('heading')}>Избранное</h2>
      <div className={cn('content-wrapper', 'collapsible-wrapper', { collapsed })}>
        <div className={cn('content', 'collapsible')}>
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
      </div>
    </div>
  );
}

export default FavouriteHotels;
