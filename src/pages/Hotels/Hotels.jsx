/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import Header from '../../components/Header/Header';

function Hotels() {
  return (
    <>
      <Header />
      <main className='hotels-page'>
        <aside className='aside'>
          <div className='search-form'>
            поисковая форма
          </div>
          <div className='favourites'>
            избранное
          </div>
        </aside>
        <div className='main-content'>
          <div className='heading-block'>
            <h1 className='heading'>
              <span>Отели</span>
              Москва
            </h1>
            <div className='date'>
              07 июля 2020
            </div>
          </div>
          <div className='carusel'>карусель</div>
          <div className='main-block'>
            <h2 className='main-block__heading'>
              Добавлено в Избранное: 3 отеля
            </h2>
            <ul className='hotels'>
              <li className='card'>
                <div className='card__header'>
                  <h3 className='card__heading'>Moscow Marriott Grand Hotel</h3>
                  <button className='card__like' type='button' />
                </div>
                <div className='card__dates'>
                  <span className='card__startDate'>7 июля 2020</span>
                  {' '}
                  -
                  {' '}
                  <span className='card__days'>1 день</span>
                </div>
                <div className='card__footer'>
                  <div className='card__stars'>5</div>
                  <div className='card__price'>
                    Price:
                    {' '}
                    <span>23 924 ₽</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hotels;
