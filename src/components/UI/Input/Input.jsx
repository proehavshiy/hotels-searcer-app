import React from 'react';

import InputDate from './InputDate/InputDate';
import InputDefault from './inputDefault/InputDefault';

function Input({
  type = 'text', name, id, value, onChange, onBlur, isError,
}) {
  return (
    type === 'date'
      ? (
        <InputDate
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          isError={isError}
        />
      )
      : (
        <InputDefault
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          isError={isError}
        />
      )
  );
}

export default Input;
