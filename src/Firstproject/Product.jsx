import React from 'react'

function Product(props) {
    const markedPrice = props.product.price;
    const discount_percent = props.product.discountPercentage;
    const discount = (markedPrice*discount_percent)/100;
    const sellingPrice = (markedPrice -discount).toFixed(2);
  return (
    <div>
        
        <div className='w-full bg-white rounded-xl shadow-md text-center p-2 hover:scale-90 scroll-smooth hover:shadow-2xl transition-all hover:bg-blue-500 hover:text-white'>
          {/* Watch Name */}
          <div className='w-full h-10 bg-purple-600 text-white flex items-center justify-center font-bold'>
            This is my watch
          </div>
          {/* Image */}
          <img
            className='w-full h-64 object-cover mt-4 rounded-xl cursor-pointer'
            src={props.product.thumbnail}
            alt='Watch'/>
          {/* Product Name */}
          <h1 className='text-purple-700 font-bold mt-2'>{props.product.title}</h1>
          <h1 className='line-through text-lg font-semibold mt-2'>${props.product.price}</h1>
          <h1 className='text-green-500 text-lg font-semibold mt-2'>${sellingPrice}</h1>
          <h1 className='text-red-700 text-lg font-semibold mt-2'>Percent Change(Discount): -{props.product.discountPercentage}%</h1>
          <h1 className='text-lg font-semibold mt-2'>⭐: {props.product.rating}</h1>
          <h1 className='text-lg font-semibold mt-2'>In Stock: {props.product.stock}</h1>

          {/* Price */}
        </div>

    </div>
  )
}

export default Product