import React from 'react';
import classNames from 'classnames/bind';

import getRUDeclination from '../../utils/wordDeclinations';

import format from '../../utils/formatValues';

import styles from './Card.module.scss';
import HotelStars from './HotelStars/HotelStars';
import Like from './Like/Like';

const cn = classNames.bind(styles);

function Card({ type, data }) {
  const {
    stars, hotelName, priceAvg, hotelId, info: { date, days },
  } = data;

  return (
    <li className={cn('card', `card_${type}`)}>
      <div className={cn('card__header')}>
        <h3
          className={cn('card__heading')}
          title={hotelName}
        >
          {hotelName}
        </h3>
        <Like currentId={hotelId} />
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
          Price:
          <span>{format('currency', priceAvg)}</span>
        </div>
      </div>
    </li>

  );
}

export default Card;
