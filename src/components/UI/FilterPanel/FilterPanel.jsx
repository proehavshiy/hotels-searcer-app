import React from 'react';
import classNames from 'classnames/bind';

import IconMax from '../Icons/IconMax';
import IconMin from '../Icons/IconMin';

import styles from './FilterPanel.module.scss';

const cn = classNames.bind(styles);

function FilterPanel({ name, filterStatus, handleFilter }) {
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

  const handleFilterPanel = () => {
    if (filterStatus.filterParam === 'min') {
      handleFilter({ name, filterParam: 'max' });
    } else {
      handleFilter({ name, filterParam: 'min' });
    }
  };

  const handleKeyDown = (evt) => {
    if (evt.code === 'Enter') handleFilterPanel();
  };

  return (
    <div className={filterStyles} onClick={handleFilterPanel} onKeyDown={handleKeyDown} role='button' tabIndex={0}>
      <span>{name}</span>
      <div className={cn('filter__buttons-container')}>
        <span className={buttonMaxStyles}>
          <IconMax />
        </span>
        <span className={buttonMinStyles}>
          <IconMin />
        </span>
      </div>
    </div>
  );
}

export default FilterPanel;
