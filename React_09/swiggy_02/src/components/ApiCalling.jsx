import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ApiCalling() {
    const [allRestaurant,setAllRestaurants] = useState([]);
    useEffect(()=>{
      async function calling(){
        const API = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1"
        let resp = await axios.get(API)
        setAllRestaurants(resp.data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      }
      calling()
    } , [])
  return allRestaurant
}

export default ApiCalling