import React from 'react'

const ProductCard = ({products}) => {
  console.log(products);
  return (
  <>
    {
      products.map(prod=>(
        
          
              <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top" src={prod.thumbnail} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">{prod.description}</p>
              <h5 className='card-subtitle'>Price : {prod.price} Discount_price: {prod.discountPercentage}</h5>
              <h3 className='card-subtitle'>{prod.rating}</h3>
              <h4 className='card-subtitle'>stock : {prod.stock}</h4>
              <h4 className='card-subtitle'>{prod.category}</h4>
              <a href="#" className="btn btn-primary">Add To Cart</a>
            </div>
          </div>
          
      )
        )
    }
    </>
  )
}

export default ProductCard