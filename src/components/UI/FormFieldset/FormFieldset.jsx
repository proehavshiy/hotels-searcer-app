/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React from 'react';
import classNames from 'classnames/bind';

import styles from './FormFieldset.module.scss';
import Input from '../Input/Input';

const cn = classNames.bind(styles);

function FormFieldset({
  labelPlaceholder = 'Поле', type = 'text', name, id, value, onChange, onBlur, isTouched, errorMessage,
}) {
  return (
    <fieldset className={cn('fieldset')}>
      <label htmlFor={id} className={cn('label', { label_error: isTouched && errorMessage })}>
        {labelPlaceholder}
      </label>
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isError={isTouched && errorMessage}
      />
      <span className={cn('input-error', { 'input-error_active': isTouched && errorMessage })}>
        {errorMessage}
      </span>
    </fieldset>
  );
}

export default FormFieldset;
