import React from "react";

const MainProduct = ({ product }) => {
  console.log(product);
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="" width="400px" height="400px" />
      <h2>{product.price}</h2>
      <div>{product.description}</div>
    </div>
  );
};

export default MainProduct;
