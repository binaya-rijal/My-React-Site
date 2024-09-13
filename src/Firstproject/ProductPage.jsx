import React from 'react'

function ProductPage() {
  return (
    <div className='p-4'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='w-full bg-white rounded-xl shadow-md text-center'>
          {/* Watch Name */}
          <div className='w-full h-10 bg-purple-600 text-white flex items-center justify-center font-bold'>
            This is my watch
          </div>
          {/* Image */}
          <img
            className='w-full h-64 object-cover mt-4 rounded-xl cursor-pointer'
            src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Watch'/>
          {/* Product Name */}
          <h1 className='text-lg font-semibold mt-2'>Cute Watch (OFFER!)</h1>
          {/* Price */}
          <p className='text-red-700 line-through mt-1 mb-4'>Rs 500</p>
          <p className='text-green-700 mt-1 mb-4'>Rs 400</p>
        </div>

        <div className='w-full h-10 bg-purple-600 rounded-xl'></div>
      </div>
    </div>
  )
}

export default ProductPage
