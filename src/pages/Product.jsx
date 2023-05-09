//style

//components
import React, { useState, useEffect } from 'react';
import MainProduct from '../components/MainProduct';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';



const Product = () => {


  const params = useParams();
  
  const [product, setProduct] = useState({});
  useEffect(() => {
    
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
            .then( (res) => res.json())
            .then( (json) => setProduct(json))
  }, [params.productId]);

  console.log(params.productId);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="main" >
        <Menu />
        <MainProduct product={product} />
      </div>
    </div>
  );
};

export default Product;