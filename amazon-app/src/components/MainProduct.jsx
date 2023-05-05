import React from 'react'

const MainProduct = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div>{product.title}</div>
      <div><img src={product.image}/></div>
      <div>{product.price}</div>
      <div>{product.description}</div>

    </div>
  )
}

export default MainProduct