import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { useSelector } from 'react-redux';

import Card from '../Card/Card';

import FilterPanel from '../UI/FilterPanel/FilterPanel';

import { FavouriteHotelsForRendering } from '../../utils/FavouriteHotelsForRendering';

import useWindowDimensions from '../../utils/hooks/useWindowDimensions';

import CollapseButton from '../UI/CollapseButton/CollapseButton';

import DataPlaceholder from '../UI/DataPlaceholder/DataPlaceholder';

import styles from './FavouriteHotels.module.scss';

const cn = classNames.bind(styles);
function FavouriteHotels() {
  const { favourites } = useSelector((state) => state.hotels);
  const { hotels } = useSelector((state) => state.hotels.fetched);
  const [filterState, setFilterState] = useState({ name: null, filterParam: null });

  const favouriteHotels = hotels.filter((hotel) => favourites.includes(hotel.hotelId));
  const sortedFavouriteHotels = new FavouriteHotelsForRendering(favouriteHotels).sortByParam(filterState).data;

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
            <FilterPanel
              name='Рейтинг'
              filterStatus={filterState}
              handleFilter={setFilterState}
            />
            <FilterPanel
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
              // : <p className={cn('hotels-placeholder')}>Список избранных пуст</p>
              : <DataPlaceholder>Список избранных пуст</DataPlaceholder>
          }
        </div>
      </div>
    </div>
  );
}

export default FavouriteHotels;
