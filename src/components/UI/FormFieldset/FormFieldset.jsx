import React from 'react';
import classNames from 'classnames/bind';

import styles from './FormFieldset.module.scss';

const cn = classNames.bind(styles);

function FormFieldset({
  labelPlaceholder = 'Поле', type = 'text', name, id, value, onChange, onBlur, isTouched, errorMessage,
}) {
  return (
    <fieldset className={cn('fieldset')}>
      <label htmlFor={id} className={cn('label')}>{labelPlaceholder}</label>
      <input
        type={type}
        name={name}
        id={id}
        className={cn('input')}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isTouched && errorMessage
        ? <span className={cn('input-error')}>{errorMessage}</span>
        : null}
    </fieldset>
  );
}

export default FormFieldset;
