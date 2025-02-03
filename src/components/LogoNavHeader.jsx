import React from 'react';
import LogoOverlayGrid from './LogoOverlayGrid';
import Nav from './Nav';
import styles from '../styles/LogoNavHeader.module.css';

const LogoNavHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <LogoOverlayGrid />
      </div>
      <Nav />
    </header>
  );
};

export default LogoNavHeader;