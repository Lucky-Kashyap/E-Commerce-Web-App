import React, { useEffect, useState } from 'react';
import {Data} from '../assets/img/data';
import ProductCard from './ProductCard';
import Product from './Product';
import { Link } from 'react-router-dom';

const Category = () => {
    const[category,setCategory] = useState([]);
    const[filterCategory,setFilterCategory] = useState([]);
    const[categoryName,setCategoryName] = useState('');
    const[all,setAll] = useState(true);

    useEffect(()=>{
        getCategory();
    },[]);

    async function getCategory(categoryName){
        try{
        const data = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
        const json = await data.json();
        // console.log(json);
        setCategory(json?.products);
        setFilterCategory(json?.products);
        }
        catch(e){
            console.log(e.message);
        }
    }
    useEffect(()=>{
        getCategory(categoryName);
    },[categoryName]);

    const getCategoryData=(item)=>{
        setAll(false);
        setCategoryName(item.category_name);
    }


  return (
    <div className='category'>
        

        {
Data.map(item=> <button key={item.id} onClick={()=>getCategoryData(item)}>{item.category_name}</button> )
        
}

{
    all?<Product/>:''
}

<div className='product'>
{
    

    filterCategory?.map(category=>(
        <Link to={'/category/' + category.id} key={category.id} className='product-style'><ProductCard {...category} key={category.id}/></Link>
    ))
}
</div>

        

    </div>
  )
}

export default Category