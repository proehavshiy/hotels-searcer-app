import React from 'react';
import classNames from 'classnames/bind';

import styles from './Modal.module.scss';

const cn = classNames.bind(styles);

function Modal({
  isOpen = false, children, type = 'default', handleClick,
}) {
  return (
    <div className={cn('popup', { popup_opened: isOpen })}>
      <div className={cn('container')}>
        {children}
        {type !== 'default' && <button className={cn('button')} type='button' onClick={handleClick}>Попробовать</button>}
      </div>
    </div>
  );
}

export default Modal;
