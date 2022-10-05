/* eslint-disable no-unused-vars */
import React from 'react';
import classNames from 'classnames/bind';

import styles from './FormFieldset.module.scss';

const cn = classNames.bind(styles);

function FormFieldset({
  labelPlaceholder = 'Поле', type = 'text', name, id, value, onChange, onBlur, isTouched, errorMessage,
}) {
  return (
    <fieldset className={cn('fieldset')}>
      <label htmlFor={id} className={cn('label', { label_error: errorMessage })}>
        {labelPlaceholder}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={cn('input', { input_error: errorMessage })}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className={cn('input-error', { 'input-error_active': isTouched && errorMessage })}>
        {errorMessage}
      </span>
    </fieldset>
  );
}

export default FormFieldset;
