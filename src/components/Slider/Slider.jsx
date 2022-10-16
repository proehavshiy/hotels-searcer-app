import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import classNames from 'classnames/bind';

import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';

import DataPlaceholder from '../UI/DataPlaceholder/DataPlaceholder';

import styles from './Slider.module.scss';

const cn = classNames.bind(styles);

function Slider() {
  const images = useSelector((state) => state.hotels.images);

  const { isLoading, error } = useSelector((state) => state.duty.images);

  function renderSwiper(data, err) {
    if (data) {
      return (
        <Swiper
          className={cn('slider')}
          spaceBetween={12}
          slidesPerView='auto'
          loop
          scrollbar={{ draggable: true }}
        >
          {images.map((image) => (
            <SwiperSlide className={cn('slide')} key={image.id}>
              <img className={cn('image')} src={image.link} alt='a hotel' />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
    if (err) {
      return <DataPlaceholder>{err}</DataPlaceholder>;
    }
    return <DataPlaceholder>Изображений нет</DataPlaceholder>;
  }

  return (
    <div className={cn('slider-wrapper')}>
      {isLoading
        ? <LoadingSpinner />
        : renderSwiper(images.length, error)}
    </div>

  );
}

export default Slider;
