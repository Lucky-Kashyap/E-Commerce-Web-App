import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import Category from './Category';

const Product = () => {

    const[product,setProduct]= useState([]);
    const[filteredProduct,setFilteredProduct] = useState([]);
    const[searchProduct,setSearchProduct] = useState('');

    useEffect(()=>{
        getProductData();
    },[]);

    useEffect(()=>{
        filterProductData(searchProduct,product);
    },[searchProduct]);

    const filterProductData=(searchProduct,product)=>{

        const data = product.filter(prod=>prod.title.toLowerCase().includes(searchProduct.toLowerCase()));

        setFilteredProduct(data);
    }

    async function getProductData(){

        try{
        const data = await fetch('https://dummyjson.com/products');
        const json = await data.json();

        setProduct(json.products);
        setFilteredProduct(json.products);
        }
        catch(e){
            console.log(e.message);
        }
        // console.log(json);

        // console.log(json[0].title);
        // console.log(product);
    }
  return (
    <div className='product-page'>
        {/* <Category/> */}
        <input type='text' value={searchProduct} onChange={(e)=>setSearchProduct(e.target.value)}/>
        <button onClick={()=>console.log('button clicked')}>Search Product</button>
    <div className='product'>
    {
        // console.log(product.title)
        filteredProduct?.map(prod=>(
            <Link to={'/product/' + prod.id} key={prod.id} className='product-style'><ProductCard {...prod} /></Link>
        ))
    }
    </div>
    </div>
  )
}

export default Product