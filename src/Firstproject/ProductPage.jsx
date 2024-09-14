import React, { useState, useEffect } from 'react'
import Product from './product'
function ProductPage() {

  const[products,setProducts]=useState([])

  useEffect(()=>{
    console.log("use effect clled!")
    fetch('https://dummyjson.com/products')
    .then(response=>response.json())
    .then(responseJson=>{
      console.log(responseJson)
      setProducts(responseJson.products)
    })
  },[])
//runs on first render
  return (
    <div className='p-4'>

     {/* {JSON.stringify(Products)} */}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
       
       {products.map(
        (product)=>{
          return(
            <Product key={product.id} product={product}/> 
          )
        }
       )}

        <div className='w-full h-10 bg-purple-600 rounded-xl'></div>
        <div className='w-full h-10 bg-purple-600 rounded-xl'></div>
        <div className='w-full h-10 bg-purple-600 rounded-xl'></div>
      </div>
    </div>
  )
}

export default ProductPage
