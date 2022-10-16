import React from 'react';
import classNames from 'classnames/bind';

import styles from './DataPlaceholder.module.scss';

const cn = classNames.bind(styles);

function DataPlaceholder({ children }) {
  return (
    <p className={cn('data-placeholder')}>{children}</p>
  );
}

export default DataPlaceholder;
