import React from 'react';
import { useState } from 'react';

const ProductCard = ({products}) => {
  // const [currentPage, setCurrentPage] = useState(1);
  console.log(products);
  
  // console.log(products);
  // const [productPerPage] = useState(10);


  // const indexOfLastProduct = currentPage * productPerPage; //10
  // const indexOfFirstProduct = indexOfLastProduct - productPerPage; //0
  // const currentProductPage = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // console.log(currentProductPage);
  
  return (
  <>
    {
      products?.map(prod=>(
        
          
              <div className="card"  key={prod.id}style={{width:'18rem'}}>
            <img className="card-img-top" src={prod.thumbnail} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">{prod.description}</p>
              <h5 className='card-subtitle'>Price : {prod.price} Discount_price: {prod.discountPercentage}</h5>
              <h3 className='card-subtitle'>{prod.rating}</h3>
              <h4 className='card-subtitle'>stock : {prod.stock}</h4>
              <h4 className='card-subtitle'>{prod.category}</h4>
              <button  className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
          
      )
        )
    }
    </>
  )
}

export default ProductCard