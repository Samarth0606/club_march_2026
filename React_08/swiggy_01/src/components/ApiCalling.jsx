import React, { useEffect, useState } from 'react'

function ApiCalling() {
    const [allRestaurant,setAllRestaurants] = useState([]);
    useEffect(()=>{
        const API = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1"
        axios.get(API)
    } , [])
  return allRestaurant
}

export default ApiCalling