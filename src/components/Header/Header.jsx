import React from 'react';
import classNames from 'classnames/bind';

import { useDispatch } from 'react-redux';

import { setIsLogined } from '../../store/reducers/slices/user';

import IconLogout from '../UI/Icons/IconLogout';

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
        <IconLogout />
      </button>
    </header>
  );
}

export default Header;
