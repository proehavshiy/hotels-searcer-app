import React from 'react';
import classNames from 'classnames/bind';
import { ru } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';

import styles from './FormFieldset.module.scss';
import './datepicker.css';

const cn = classNames.bind(styles);

function FormFieldset({
  labelPlaceholder = 'Поле', type = 'text', name, id, value, onChange, onBlur, isTouched, errorMessage,
}) {
  function handleChangeDatePicker(pickedDate) {
    const e = {
      target: {
        value: new Date(pickedDate).getTime(),
      },
    };
    onChange(e);
  }

  return (
    <fieldset className={cn('fieldset')}>
      <label htmlFor={id} className={cn('label', { label_error: isTouched && errorMessage })}>
        {labelPlaceholder}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={cn('input', { input_error: isTouched && errorMessage })}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {type === 'date'
        ? (
          <DatePicker
            customInput={<button className={cn('datepicker')} type='button' aria-label='pick-date' />}
            selected={new Date(value)}
            onChange={handleChangeDatePicker}
            locale={ru}
            minDate={Date.now()}
            todayButton='Сегодня'
            closeOnScroll
            popperPlacement='top-end'
          />
        )
        : null}
      <span className={cn('input-error', { 'input-error_active': isTouched && errorMessage })}>
        {errorMessage}
      </span>
    </fieldset>
  );
}

export default FormFieldset;
