import React from 'react';
import styles from '../styles/navbar.module.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineBell} from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <img src="/Amazon_logo.png" alt="amazon_logo" />
      </div>
      <div className={styles.searchbar}>
        <input type="text" placeholder="Search..." />
        <div className={styles.dropDown}>
          <div>
            All categories
          </div>
          <div className={styles.arrowDownSearch}>
            <AiOutlineDown color="#000" />
          </div>
        </div>
        <div className={styles.searchIcon}>
          <AiOutlineSearch color="#fff" />
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <AiOutlineHeart color="#000" className={styles.navbarHover} />
        </div>
        <div className={styles.icon}>
          <AiOutlineShoppingCart color="#000" className={styles.navbarHover} />
        </div>
        <div className={styles.icon}>
          <AiOutlineBell color="#000" className={styles.navbarHover} />
        </div>
        <div className={styles.profile}>
          <div className={styles.userIcon} />
          <AiOutlineDown color="#000" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar