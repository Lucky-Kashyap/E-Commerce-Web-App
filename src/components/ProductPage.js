import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductDetail();
  }, []);

  async function getProductDetail() {
    try{
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const json = await data.json();

    const ProductArray = Object.values(json);

    setProduct(ProductArray);
    }
    catch(e){
      console.log(e.message);
    }
  }
  return (
    <div className="product-page-details">
        <h1>Product Page</h1>
      <div className="product-details">
        <img src={product[9]} alt="product-thumbnail" />
        <div className="product-side">
        <h2>Product Name : {product[1]}</h2>
        <p>Description : {product[2]}</p>
        <span>
          Price : {product[3]} Discount Price : {product[4]}
        </span>
        <h3>Rating : {product[5]}</h3>
        <h4>
          Stock : {product[6]} Brand : {product[7]}
        </h4>
        <h4>Category : {product[8]}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
