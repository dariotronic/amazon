import React from 'react';
import styles from '../styles/banner.module.css';

const Banner = () => {
  return (
    <div className={styles.mainContainer} >
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Free Delivery!</h3>
        </div>
        <div className={styles.text}>
          <p>Don't miss it out! Only today, get free Next Day delivery on all of your orders.</p>
        </div>
        <div className={styles.button}>
          <a href="#">Browse products</a>
        </div>
      </div>
    </div>
  )
}

export default Banner