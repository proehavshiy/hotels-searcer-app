import React from 'react';
import classNames from 'classnames/bind';

import { useDispatch } from 'react-redux';

import { setIsLogined } from '../../store/reducers/slices/user';

import styles from './Header.module.scss';

const cn = classNames.bind(styles);

function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(setIsLogined(false));
  }

  return (
    <header className={cn('header')}>
      <div className={cn('logo-wrapper')}>
        Simple Hotel Check
      </div>
      <button className={cn('logout')} type='button' onClick={handleLogout}>
        Выйти
        <svg className={cn('logout-image')} width='22' height='22' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8 20H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4M15 16l5-5-5-5M20 11H8'
            stroke='#41522E'
            strokeWidth='2.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </header>
  );
}

export default Header;
