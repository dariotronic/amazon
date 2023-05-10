//styles
import styles from '../styles/main.module.css';

//components
import React from 'react';
import Banner from './Banner';
import Products from './Products';
import ProductsSection from './ProductsSection';

const Main = ({ cart, setCart }) => {
  return (
    <div className={styles.container}>
      <Banner />
      <ProductsSection />
      <Products setCart={setCart} cart={cart} />
    </div>
  )
}

export default Main