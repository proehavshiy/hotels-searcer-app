import React from 'react';

import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';

import Form from '../UI/Form/Form';
import FormFieldset from '../UI/FormFieldset/FormFieldset';

import { initUserLogin } from '../../store/reducers/slices/user';
import validateLoginForm from '../../utils/validateLoginForm';

function LoginForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validate: validateLoginForm,
    // values - {login: Iemail; password: string}
    onSubmit: (values) => {
      dispatch(initUserLogin(values));
    },
  });

  return (
    <Form
      formHeading='Simple Hotel Check'
      submitCTA='Войти'
      // чтобы кнопка была disabled изначально и если невалидны поля
      isSubmitDisabled={(!formik.touched.login && !formik.touched.password) || formik.errors.login || formik.errors.password}
      onSubmit={formik.handleSubmit}
    >
      <FormFieldset
        labelPlaceholder='Логин'
        type='email'
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
