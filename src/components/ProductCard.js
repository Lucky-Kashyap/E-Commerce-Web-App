import React from 'react'

const ProductCard = ({title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}) => {
  return (
    <div className='product-card'>
        <img src={thumbnail} alt='product-thumbnail'/>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{price}    {discountPercentage}</span>
        <h3>{rating}</h3>
        <h4>{stock}   {brand}</h4>
        <h4>{category}</h4>
        {/* {images?.map((img,index)=>(
            <img src={img} alt='product-related-image' key={index}/>
        ))} */}

    </div>
  )
}

export default ProductCard