import React from 'react';
import classNames from 'classnames/bind';

import IconMax from '../Icons/IconMax';
import IconMin from '../Icons/IconMin';

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
          <IconMax />
        </button>
        <button className={buttonMinStyles} type='button' aria-label='min' onClick={handleMin}>
          <IconMin />
        </button>
      </div>
    </div>
  );
}

export default Filter;
