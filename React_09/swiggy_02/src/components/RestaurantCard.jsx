import React from 'react'

function RestaurantCard({restArr}) {
  return (
    restArr.map((item)=>{
      // console.log(item);
      
      return(
        <div className='m-8 w-58'>
          <img className='w-58 h-42 rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} alt="" />
          <h1 className='mx-3 font-bold'>{item.info.name}</h1>
          <span className='text-bold mx-3'>{item.info.avgRating}</span>
          <span className='mx-3'>{item.info.sla.slaString}</span>
          <p className='mx-3'>{item.info.cuisines[0]}</p>
          <p className='mx-3'>{item.info.locality}</p>
      </div>
      )
    })
  )
}

export default RestaurantCard