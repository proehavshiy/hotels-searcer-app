import React from 'react';
import classNames from 'classnames/bind';
import { ru } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';

import InputDefault from '../inputDefault/InputDefault';

import styles from './InputDate.module.scss';
import './datepicker.css';

const cn = classNames.bind(styles);

function InputDate({
  name, id, value, onChange, onBlur, isError,
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
      <InputDefault
        type='date'
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isError={isError}
      />
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
    </>
  );
}

export default InputDate;
