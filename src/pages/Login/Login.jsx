import React from 'react';
import classNames from 'classnames/bind';

import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './Login.module.scss';

const cn = classNames.bind(styles);

function Login() {
  return (
    <main className={cn('login-page')}>
      <LoginForm />
    </main>
  );
}

export default Login;
