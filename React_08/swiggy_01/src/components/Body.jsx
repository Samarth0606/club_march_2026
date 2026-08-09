import React from 'react'
import RestaurantCard from './RestaurantCard'

function Body() {
  return (
    <div>
        <h1 className='font-bold text-xl m-8'>Restaurants with online food delivery in Chhindwara</h1>
        <button className='border rounded-2xl w-1/12 ml-20'>Rating 4.4+</button>
        <button className='border rounded-2xl w-1/12 ml-8'>Reset</button>
        <div className='flex flex-wrap m-auto w-10/12'>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    </div>
  )
}

export default Body