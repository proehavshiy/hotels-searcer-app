import React from 'react';
import classNames from 'classnames/bind';

import styles from './Form.module.scss';

const cn = classNames.bind(styles);

function Form({
  formHeading, submitCTA, isSubmitDisabled, onSubmit, children,
}) {
  return (
    <form className={cn('form')} onSubmit={onSubmit}>
      {formHeading
        && <h1 className={cn('heading')}>{formHeading}</h1>}
      <div className={cn('fields-block')}>
        {children}
      </div>
      <button className={cn('submit')} type='submit' disabled={isSubmitDisabled}>
        {submitCTA}
      </button>
    </form>
  );
}

export default Form;
