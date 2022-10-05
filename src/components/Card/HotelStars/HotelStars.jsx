import React from 'react';
import classNames from 'classnames/bind';

import uniqid from 'uniqid';

import styles from './HotelStars.module.scss';

const cn = classNames.bind(styles);

function HotelStars({ stars }) {
  function renderStars(numOfStars) {
    const markupContainer = [];
    for (let index = 0; index < 5; index += 1) {
      if (index < numOfStars) {
        markupContainer.push(<span className={cn('star', 'star_active')} key={uniqid()} />);
      } else {
        markupContainer.push(<span className={cn('star', 'star_default')} key={uniqid()} />);
      }
    }
    return markupContainer;
  }

  return (
    <div className={cn('stars')}>
      {renderStars(stars).map((star) => star)}
    </div>
  );
}

export default HotelStars;
