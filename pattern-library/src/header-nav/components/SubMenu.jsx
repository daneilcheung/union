import React from 'react';
import PropTypes from 'prop-types';
import styles from '@xo-union/header-nav/css';

export default function SubMenu({ children, className = styles.menu, ...props }) {
  return (
    <nav className={styles['dropdown-container']} {...props}>
      <ul className={className}>
        {children}
      </ul>
    </nav>
  );
}

SubMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export function SubMenuLink({ className = styles['sub-menu-item'], ...props }) {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <li className={className}>
      <a className={styles['sub-menu-item-link']} {...props} />
    </li>
  );
}

SubMenuLink.propTypes = {
  className: PropTypes.string
};
