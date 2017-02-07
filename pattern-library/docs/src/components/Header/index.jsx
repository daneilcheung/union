import React from 'react';
import logo from '#docs/images/tk-logo.svg';
import styles from './styles.css';
import bsUtils from '@xo-union/bootstrap/utilities';

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.link} href="/">
        <img src={logo} height="40" className={bsUtils.alignBaseline} />
        <span>Union</span>
      </a>
    </header>
  );
}
