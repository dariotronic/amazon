//styles
import styles from "../styles/products.module.css";

//components
import React, { useState, useEffect } from "react";
import { AiFillFire } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';



const Products = ({ cart, setCart }) => {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      }).catch((err) => console.log(err));
  }, []);

  if (loading){
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <h3>Popular Categories</h3>
          <AiFillFire color="#f90" size="1.6em" />
        </div>
        <div className={styles.navigate}>
          <div className={styles.arrow}>
            <AiOutlineLeft color="#787e89" />
          </div>
          <div className={styles.arrow}>
            <AiOutlineRight color="#787e89" />
          </div>
        </div>
      </div>
      <div className={styles.links}>
        {products.map((item, index) => {
          return (
              <div className={styles.linksContainer}>
              <div className={styles.imgContainer}>
              <a href={`/product/${item.id}`}>
                <img src={item.image} alt="" />
              </a>
                </div>
                <div key={index + 1} style={{ background: "transparent" }} className={styles.productName}>
                  <div className={styles.title}>
                    <p>{item.title}</p>
                  </div>
                  <div className={styles.starsContainer}>
                    <div className={styles.stars}>
                      <AiFillStar fill="#f90" />
                      <AiFillStar fill="#f90" />
                      <AiFillStar fill="#f90" />
                      <AiFillStar fill="#f90" />
                      <AiOutlineStar fill="#f90" />
                    </div>
                    <div className={styles.rate}>
                      <p>{item.rating.rate}</p>
                    </div>
                    <div className={styles.reviews}>
                      <p>{item.rating.count} reviews</p>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <p>€ {item.price}</p>
                  </div>
                  <div className={styles.cartButton} onClick={() => setCart(cart + 1)}>
                    <p>Aggiungi al carrello <AiOutlineShoppingCart fill="#fff" /></p>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;