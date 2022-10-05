/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { useDispatch, useSelector } from 'react-redux';

import { deleteFavouriteHotels, setFavouriteHotels } from '../../store/reducers/slices/hotels';

import { getFormattedRUDate } from '../../utils/getFormattedRUDate';

import { getDayDeclination } from '../../utils/getDayDeclination';

import { getFormattedRUCurrency } from '../../utils/getFormattedRUCurrency';

import styles from './Card.module.scss';
import HotelStars from './HotelStars/HotelStars';

const cn = classNames.bind(styles);

function Card({ type, data }) {
  const dispatch = useDispatch();
  const {
    stars, hotelName, priceAvg, hotelId, info: { date, days },
  } = data;

  // стейт с айдишками избранных-лайкнутых
  const { ids } = useSelector((state) => state.hotels.favourites);
  const [isLiked, setIsLiked] = useState(ids.includes(hotelId));

  function handleLike() {
    if (isLiked) {
      dispatch(deleteFavouriteHotels(hotelId));
    } else {
      dispatch(setFavouriteHotels(hotelId));
    }
  }

  useEffect(() => {
    // Переключение лайка
    if (ids.includes(hotelId)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [ids, hotelId]);

  return (
    <li className={cn('card', `card_${type}`)}>
      <div className={cn('card__header')}>
        <h3 className={cn('card__heading')}>{hotelName}</h3>
        <button className={cn('card__like', { card__like_active: isLiked })} type='button' onClick={handleLike}>
          <svg width='23' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.38 2.591a5.533 5.533 0 0 0-1.792-1.177 5.61 5.61 0 0 0-4.23 0c-.671.273-1.28.673-1.793 1.177L11.5 3.638 10.435 2.59a5.576 5.576 0 0 0-3.908-1.59 5.576 5.576 0 0 0-3.908 1.59A5.384 5.384 0 0 0 1 6.431c0 1.441.582 2.823 1.619 3.841l1.065 1.047L11.5 19l7.816-7.681 1.065-1.047a5.423 5.423 0 0 0 1.198-1.762 5.348 5.348 0 0 0 0-4.157 5.423 5.423 0 0 0-1.198-1.762Z'
              fill='#fff'
              stroke='#C4C4C4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
      <div className={cn('card__dates')}>
        <span className={cn('card__startDate')}>{getFormattedRUDate(date)}</span>
        <span className={cn('card__days')}>
          {days}
          {getDayDeclination(days)}
        </span>
      </div>
      <div className={cn('card__footer')}>
        <HotelStars stars={stars} />
        <div className={cn('card__price')}>
          Price:
          {' '}
          <span>{getFormattedRUCurrency(priceAvg)}</span>
        </div>
      </div>
    </li>

  );
}

export default Card;
