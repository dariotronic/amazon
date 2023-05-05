//styles
import styles from "../styles/products.module.css";

//components
import React, { useState, useEffect } from "react";
import { AiFillFire } from "react-icons/ai";
import logo from "../logo.svg";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <h3>Popular Categories</h3>
          <AiFillFire color="#f90" />
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
            <a href={`/${item.id}`} key={index + 1}>
            <div  className={styles.linksContainer}>
              <div style={{ backgroundColor: "#fff" }}>
                <a href={item.link}>
                  <img src={item.image} alt="" />
                </a>
              </div>
              <div key={index + 1} style={{ background: "transparent" }}>
                <p>{item.title}</p>
              </div>
            </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Products;