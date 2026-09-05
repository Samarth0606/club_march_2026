const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5
    },

    imageUrl: {
      type: String,
      required: true,
      trim: true
    },

    cuisines: {
      type: String,
      required: true
    },

    deliveryTime: {
      type: String,
      required: true
    }
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
