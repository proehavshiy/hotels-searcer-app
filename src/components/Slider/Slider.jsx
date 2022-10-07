/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import classNames from 'classnames/bind';

import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';

import styles from './Slider.module.scss';

const cn = classNames.bind(styles);

function Slider() {
  const images = useSelector((state) => state.hotels.images);

  return (
    <div className={cn('slider-wrapper')}>
      {images.length
        ? (
          <Swiper
            className={cn('slider')}
            spaceBetween={12}
            slidesPerView='auto'
            loop
          >
            {images.map((image) => (
              <SwiperSlide className={cn('slide')} key={image.id}>
                <img className={cn('image')} src={image.link} alt='a hotel' />
              </SwiperSlide>
            ))}
          </Swiper>
        )
        : (
          <LoadingSpinner />
        )}
    </div>

  );
}

export default Slider;
