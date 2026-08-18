import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ApiCalling() {
    const [allRestaurant,setAllRestaurants] = useState([]);
    useEffect(()=>{
      async function calling(){
        const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        let resp = await axios.get(API)
        setAllRestaurants(resp.data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      }
      calling()
    } , [])
  return allRestaurant
}

export default ApiCalling