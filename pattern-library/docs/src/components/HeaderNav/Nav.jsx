import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import bsNav from '@xo-union/bootstrap/nav';
import { inject, observer } from 'mobx-react';

import styles from './styles.css';

@inject('router')
@observer
export class NavItem extends Component {
  static propTypes = {
    router: PropTypes.shape({ currentPath: PropTypes.string }),
    to: PropTypes.string,
    children: PropTypes.node
  };

  get cssClass() {
    const { router, to } = this.props;

    if (router.currentPath === to) {
      return styles.activeItem;
    }

    return styles.navItem;
  }

  render() {
    const { to, children } = this.props;

    return (
      <Link to={to} className={this.cssClass}>{children}</Link>
    );
  }
}

export function Nav({ children }) {
  return (
    <nav className={bsNav.nav}>
      {children}
    </nav>
  );
}

Nav.propTypes = {
  children: PropTypes.node
};
