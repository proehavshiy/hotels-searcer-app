import React from 'react';
import classNames from 'classnames/bind';

import styles from './InputDefault.module.scss';

const cn = classNames.bind(styles);

function InputDefault({
  type = 'text', name, id, value, onChange, onBlur, isError,
}) {
  return (
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
  );
}

export default InputDefault;
