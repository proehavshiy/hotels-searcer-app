/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { useDispatch, useSelector } from 'react-redux';

import { deleteFavouriteHotels, setFavouriteHotels } from '../../store/reducers/slices/hotels';

import getRUDeclination from '../../utils/wordDeclinations';

import format from '../../utils/formatValues';

import IconLike from '../UI/Icons/IconLike';

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
        <h3
          className={cn('card__heading')}
          title={hotelName}
        >
          {hotelName}
        </h3>
        <button className={cn('card__like', { card__like_active: isLiked })} type='button' onClick={handleLike}>
          <IconLike />
        </button>
      </div>
      <div className={cn('card__dates')}>
        <span className={cn('card__startDate')}>{format('date', date)}</span>
        <span className={cn('card__days')}>
          {`${days} ${getRUDeclination('day', days)}`}
        </span>
      </div>
      <div className={cn('card__footer')}>
        <HotelStars stars={stars} />
        <div className={cn('card__price')}>
          {'Price: '}
          <span>{format('currency', priceAvg)}</span>
        </div>
      </div>
    </li>

  );
}

export default Card;
