import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';


const ProductCard = ({products}) => {
  const [page,setPage] = useState(1);
 
  let itemPerPage = 10;
    let totalPageLength = Math.ceil(products.length/10);

    let startIndex = (page-1) * itemPerPage;
    let endIndex = startIndex + itemPerPage;
  
  return (
  <>
  
    {
      products.slice(startIndex,endIndex)?.map(prod=>(
        
        <Link to={`product/${prod.id}`}>
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
          </Link>
      )
        )
    }
    <Pagination page={page} setPage={setPage} totalPage={totalPageLength}/>
   
    </>
  )
}

export default ProductCard