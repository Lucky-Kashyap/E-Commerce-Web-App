import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import Category from './Category';
import Pagination from './Pagination';

const Product = () => {

    const[product,setProduct]= useState([]);
    const[filteredProduct,setFilteredProduct] = useState([]);
    const[searchProduct,setSearchProduct] = useState('');
    // const [page,setPage] = useState(1);

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
        
    }

    // let itemPerPage = 10;
    // let totalPageLength = Math.ceil(filteredProduct.length/10);

    // let startIndex = (page-1) * itemPerPage;
    // let endIndex = startIndex + itemPerPage;
    
  return (
    <div className='product-page'>
        {/* <Category/> */}
        <input type='text' value={searchProduct} onChange={(e)=>setSearchProduct(e.target.value)}/>
        <button className='btn btn-primary' onClick={()=>console.log('button clicked')}>Search Product</button>
    <div className='product'>
    {
        // console.log(product.title)
        filteredProduct?.map(prod=>(
            <ProductCard products={product} />
        ))
    }
    </div>
    {/* <Pagination page={page} setPage={setPage} totalPage={totalPageLength}/> */}
    </div>
  )
}

export default Product


{/* <Link to={'/product/' + prod.id} key={prod.id} className='product-style'> */}