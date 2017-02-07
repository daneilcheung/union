import React from 'react';
import Header from '#docs/components/Header';
import SideNav from '#docs/components/SideNav';

import styles from './styles.css';
import bsGrid from '@xo-union/bootstrap/grid';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={bsGrid.containerFluid}>
        <div className={bsGrid.row}>
          <SideNav className={styles.sidenav} />

          <div className={styles.article}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
