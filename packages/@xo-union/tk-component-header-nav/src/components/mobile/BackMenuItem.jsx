import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@xo-union/tk-component-icons';
import styles from '@xo-union/tk-component-header-nav/lib/css';
import { SubMenuLink } from '../SubMenu';

export default function BackMenuItem({ label, onClick }) {
  return (
    <SubMenuLink className={styles['sub-menu-back-button-item']} role="button" onClick={onClick}>
      <Icon name="caret-left" className={styles['sub-menu-back-button-caret']} />
      {label}
    </SubMenuLink>
  );
}

BackMenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
