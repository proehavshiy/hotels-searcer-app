import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { useDispatch, useSelector } from 'react-redux';

import IconLike from '../../UI/Icons/IconLike';

import { deleteFavouriteHotels, setFavouriteHotels } from '../../../store/reducers/slices/hotels';

import styles from './Like.module.scss';

const cn = classNames.bind(styles);

function Like({ currentId }) {
  const dispatch = useDispatch();

  // стейт с айдишками избранных-лайкнутых
  const { favourites } = useSelector((state) => state.hotels);
  const [isLiked, setIsLiked] = useState(favourites.includes(currentId));

  function handleLike() {
    if (isLiked) {
      dispatch(deleteFavouriteHotels(currentId));
    } else {
      dispatch(setFavouriteHotels(currentId));
    }
  }

  // Переключение лайка
  useEffect(() => {
    if (favourites.includes(currentId)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [favourites, currentId]);

  return (
    <button className={cn('like', { like_active: isLiked })} type='button' onClick={handleLike}>
      <IconLike />
    </button>
  );
}

export default Like;
