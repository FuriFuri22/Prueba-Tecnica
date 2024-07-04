import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css'

const Header = () => (
  <header className={styles.header}>
    <Image src="/images/profile.jpg" alt="Profile Picture" width={100} height={100} className={styles.profileImage}/>
    <h1>Franco Esequiel Canesin</h1>
  </header>
);

export default Header;