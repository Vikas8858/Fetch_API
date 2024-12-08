import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function Show() {
     
  const[products, setProducts] = useState([]);

  const getProducts=() =>{
    
  const api = "https://fakestoreapi.com/products";
  axios
  .get(api)
  .then(products =>{
    console.log(products);
    setProducts(products.data);
  })
  .catch(err =>
    console.log(err));
};

   useEffect(()=>{
    getProducts()
   },[])

  return (
    <>
   
 <ul className='pt-5'>
      {products.length> 0 ? (
        
      products.map((p)=> (
      <li className='rounded m-3 p-5 bg-red-200'>
      {p.title}
      </li>
      ) )
    ): (
    <h1>Loading...</h1>
  )}
     
      
    </ul>

    </>
  )
}
