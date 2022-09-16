/* eslint-disable no-unused-vars */
import React from 'react';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';

const cn = classNames.bind(styles);

function Login() {
  return (
    <main className={cn('login-page')}>
      <form className={cn('form')}>
        <h1 className={cn('form__heading')}>Simple Hotel Check</h1>
        <div className={cn('form__fields')}>
          <fieldset className={cn('form__input-section')}>
            <label htmlFor='login' className={cn('form__label')}>Логин</label>
            <input type='text' name='login' id='login' className={cn('form__input')} />
            <span className={cn('form__input-error')} />
          </fieldset>
          <fieldset className={cn('form__input-section')}>
            <label htmlFor='password' className={cn('form__label')}>Пароль</label>
            <input type='password' name='password' id='password' className={cn('form__input')} />
            <span className={cn('form__input-error')}>ошибка</span>
          </fieldset>
        </div>
        <button className={cn('form__submit')} type='submit'>Войти</button>
      </form>
    </main>
  );
}

export default Login;
