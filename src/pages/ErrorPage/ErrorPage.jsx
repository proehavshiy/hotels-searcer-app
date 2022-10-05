import React from 'react';

import classNames from 'classnames/bind';

import styles from './ErrorPage.module.scss';

const cn = classNames.bind(styles);

export default function ErrorPage() {
  return (
    <div className={cn('error-page')}>
      <p>Такой страницы не существует</p>
    </div>
  );
}
