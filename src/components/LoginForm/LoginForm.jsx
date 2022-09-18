import React from 'react';

import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';

import Form from '../UI/Form/Form';
import FormFieldset from '../UI/FormFieldset/FormFieldset';

import { initUserLogin } from '../../store/reducers/slices/user';

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

function LoginForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      // values - {login: Iemail; password: string}
      dispatch(initUserLogin(values));
    },
  });

  return (
    <Form
      formHeading='Simple Hotel Check'
      submitCTA='Войти'
      isSubmitDisabled={formik.errors.login || formik.errors.password}
      onSubmit={formik.handleSubmit}
    >
      <FormFieldset
        labelPlaceholder='Логин'
        type='text'
        name='login'
        id='login'
        value={formik.values.login}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        isTouched={formik.touched.login}
        errorMessage={formik.errors.login}
      />
      <FormFieldset
        labelPlaceholder='Пароль'
        type='password'
        name='password'
        id='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        isTouched={formik.touched.password}
        errorMessage={formik.errors.password}
      />
    </Form>
  );
}

export default LoginForm;
