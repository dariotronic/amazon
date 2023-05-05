//styles
import styles from "../styles/products.module.css";

//components
import React from "react";
import { AiFillFire } from "react-icons/ai";
import logo from "../logo.svg";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Products = () => {
  const links = [
    {
      name: "Lorem Ipsum",
      link: "#",
      price: "10 €",
    },
    {
      name: "Lorem Ipsum",
      link: "#",
      price: "10 €",
    },
    {
      name: "Lorem Ipsum",
      link: "#",
      price: "10 €",
    },
    {
      name: "Lorem Ipsum",
      link: "#",
      price: "10 €",
    },
    {
      name: "Lorem Ipsum",
      link: "#",
      price: "10 €",
    },
    {
      name: "Lorem Ipsum",
      link: "#",
      price: "10 €",
    },
    {
      name: "Lorem Ipsum",
      link: "#",
      price: "10 €",
    },
    {
      name: "Lorem Ipsum",
      link: "#",
      price: "10 €",
    },
    {
      name: "Lorem Ipsum",
      link: "#",
      price: "10 €",
    },
    {
      name: "Lorem Ipsum",
      link: "#",
      price: "10 €",
    },
    {
      name: "Lorem Ipsum",
      link: "#",
      price: "10 €",
    },
  ];

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
        {links.map((item, index) => {
          return (
            <div key={index + 1} className={styles.linksContainer}>
              <div style={{ backgroundColor: "#fff" }}>
                <a href={item.link}>
                  <img src={logo} alt="" />
                </a>
              </div>
              <div key={index + 1} style={{ background: "transparent" }}>
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
