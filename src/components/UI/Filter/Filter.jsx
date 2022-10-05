import React from 'react';
import classNames from 'classnames/bind';

import styles from './Filter.module.scss';

const cn = classNames.bind(styles);

function Filter({ name, filterStatus, handleFilter }) {
  const filterStyles = cn('filter', { filter_active: filterStatus.name === name });
  const buttonMaxStyles = cn(
    'filter__button',
    'filter__button_max',
    { filter__button_active: filterStatus.name === name && filterStatus.filterParam === 'max' },
  );
  const buttonMinStyles = cn(
    'filter__button',
    'filter__button_min',
    { filter__button_active: filterStatus.name === name && filterStatus.filterParam === 'min' },
  );

  const handleMax = () => handleFilter({ name, filterParam: 'max' });
  const handleMin = () => handleFilter({ name, filterParam: 'min' });

  return (
    <div className={filterStyles}>
      <span>{name}</span>
      <div className={cn('filter__buttons-container')}>
        <button className={buttonMaxStyles} type='button' aria-label='max' onClick={handleMax}>
          <svg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z' fill='#99A0A3' />
          </svg>
        </button>
        <button className={buttonMinStyles} type='button' aria-label='min' onClick={handleMin}>
          <svg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z' fill='#99A0A3' />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Filter;
