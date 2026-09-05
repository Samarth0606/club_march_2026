
const {
  createRestaurant,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant
} = require("../controller/restuarant.controller");
const verifyToken = require("../middleware/verify");

function restaurantRoutes(app){
    // Create restaurant
    app.post("/api/restaurant",verifyToken, createRestaurant);
    
    // Get all restaurants
    app.get("/api/restaurant", getRestaurants);
    
    // Update restaurant
    app.patch("/api/restaurant/:id", updateRestaurant);
    
    // Delete restaurant
    app.delete("/api/restaurant/:id", deleteRestaurant);

}


module.exports = restaurantRoutes;
