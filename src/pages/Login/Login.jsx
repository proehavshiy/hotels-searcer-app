import React from 'react';
import classNames from 'classnames/bind';

import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './Login.module.scss';

const cn = classNames.bind(styles);

function Login() {
  return (
    <main className={cn('login-page')}>
      <div className={cn('form-wrapper')}>
        <LoginForm />
      </div>
    </main>
  );
}

export default Login;
