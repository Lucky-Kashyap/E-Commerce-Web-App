import React from 'react'

const ProductCard = ({title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}) => {
  return (
  
    <div className="card" style={{width:'18rem'}}>
    <img className="card-img-top" src={thumbnail} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <h5 className='card-subtitle'>Price : {price} Discount_price: {discountPercentage}</h5>
      <h3 className='card-subtitle'>{rating}</h3>
      <h4 className='card-subtitle'>stock : {stock}</h4>
      <h4 className='card-subtitle'>{category}</h4>
      <a href="#" className="btn btn-primary">Add To Cart</a>
    </div>
  </div>
  )
}

export default ProductCard