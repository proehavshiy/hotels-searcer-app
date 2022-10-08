import React from 'react';
import classNames from 'classnames/bind';
import { ru } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';

import styles from './Input.module.scss';
import './datepicker.css';

const cn = classNames.bind(styles);

function Input({
  type = 'text', name, id, value, onChange, onBlur, isError,
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
    <>
      <input
        type={type}
        name={name}
        id={id}
        className={cn('input', { input_error: isError })}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        min={name === 'days' ? 1 : null}
      />
      {type === 'date'
        ? (
          <DatePicker
            customInput={<button className={cn('datepicker-icon')} type='button' aria-label='pick-date' />}
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
    </>
  );
}

export default Input;
