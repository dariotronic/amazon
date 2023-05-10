//styles
import styles from '../styles/mainProduct.module.css';

//components
import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';

const MainProduct = ({product,loading}) => {
    console.log(product);

  return (
    <div className={styles.main} >
        <div className={styles.titleContainer}>
            <div className={styles.title} >
                <h1>{product.title}</h1>
            </div>
            <div className={styles.starsContainer}>
                <div className={styles.stars}>
                    <AiFillStar fill="#f90" size="1.6em" />
                    <AiFillStar fill="#f90" size="1.6em" />
                    <AiFillStar fill="#f90" size="1.6em" />
                    <AiFillStar fill="#f90" size="1.6em" />
                    <AiOutlineStar fill="#f90" size="1.6em" />
                </div>
                <div className={styles.ProductRate}>
                    <p>{product?.rating?.rate}</p>
                </div>
                <div className={styles.productReviews}>
                    <p>{product?.rating?.count} reviews</p>
                </div>
            </div>
        </div>
        <div className={styles.image} >
            <img src={product.image} />
        </div>
        <div  className={styles.description}>
            <h2>Description:</h2>
            <p>{product.description}</p>
        </div>
    </div>
  );
};

export default MainProduct