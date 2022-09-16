/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames/bind';

import { useDispatch, useSelector } from 'react-redux';

import manageLocalStorage from '../../utils/manageLocalStorage';

import { initFetchHotels, setFetchedHotels } from '../../store/reducers/slices/hotels';

import { toggleIsLogined } from '../../store/reducers/slices/user';

import styles from './Login.module.scss';

const cn = classNames.bind(styles);

const validate = (values) => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Поле обязательное';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
    errors.login = 'Введите емейл';
  }

  if (!values.password) {
    errors.password = 'Поле обязательное';
  } else if (/[ЁёА-я]/g.test(values.password)) {
    errors.password = 'Не должно быть кириллицы';
  } else if (values.password.length <= 8) {
    errors.password = 'Пароль - минимум 8 симв.';
  }

  return errors;
};

function Login() {
  // const isLogined = useSelector((state) => state.user.isLogined);
  const dispatch = useDispatch();
  const city = 'Москва';
  const date = new Date();
  const days = 2;

  useEffect(() => {
    dispatch(initFetchHotels({ city, date, days }));
    // dispatch({ type: 'foo' });
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      manageLocalStorage('hotels-isLogined', 'set', true);
    },
  });
  return (
    <main className={cn('login-page')}>
      <form className={cn('form')} onSubmit={formik.handleSubmit}>
        <h1 className={cn('form__heading')}>Simple Hotel Check</h1>
        <div className={cn('form__fields')}>
          <fieldset className={cn('form__input-section')}>
            <label htmlFor='login' className={cn('form__label')}>Логин</label>
            <input
              type='text'
              name='login'
              id='login'
              className={cn('form__input')}
              value={formik.values.login}
              onChange={formik.handleChange}
            />
            {formik.errors.login
              ? <span className={cn('form__input-error')}>{formik.errors.login}</span>
              : null}
          </fieldset>
          <fieldset className={cn('form__input-section')}>
            <label htmlFor='password' className={cn('form__label')}>Пароль</label>
            <input
              type='password'
              name='password'
              id='password'
              className={cn('form__input')}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password
              ? <span className={cn('form__input-error')}>{formik.errors.password}</span>
              : null}
          </fieldset>
        </div>
        <button className={cn('form__submit')} type='submit' disabled={formik.errors.login || formik.errors.password}>
          Войти
        </button>
      </form>
    </main>
  );
}

export default Login;
