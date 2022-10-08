import React from 'react';
import classNames from 'classnames/bind';

import styles from './CollapseButton.module.scss';

const cn = classNames.bind(styles);

function CollapseButton({ isActive, handleClick }) {
  return (
    <button
      className={cn('collapse-button', { 'collapse-button_collapsed': isActive })}
      type='button'
      aria-label='collapse'
      onClick={handleClick}
    />
  );
}

export default CollapseButton;
