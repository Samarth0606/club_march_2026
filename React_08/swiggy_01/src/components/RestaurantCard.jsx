import React from 'react'

function RestaurantCard() {
  return (
    <div className='m-8'>
        <img className='w-58 h-42 rounded-2xl' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/65fba3aa-5620-4e05-afdc-50bf11ef7f0f_1003414.JPG" alt="" />
        <h1 className='mx-3 font-bold'>Pizza hut</h1>
        <span className='text-bold mx-3'>4.4</span>
        <span className='mx-3'>50-60 mins</span>
        <p className='mx-3'>Pizzas</p>
        <p className='mx-3'>New Delhi</p>
    </div>
  )
}

export default RestaurantCard