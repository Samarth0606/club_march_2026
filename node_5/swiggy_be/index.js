const express = require("express");
const mongoose = require("mongoose");
const restaurantRoutes = require("./routes/restaurant.routes.js");
const userRoutes = require("./routes/user.routes.js");
const app = express();

const cors = require('cors')


// Adds headers: Access-Control-Allow-Origin: *
app.use(cors())

//Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/laddoo')
.then(()=>console.log("DB CONNECTED") )
.catch(()=>console.log("DB NOT CONNECTED"))

// Middleware
app.use(express.json());


// Routes
restaurantRoutes(app)
userRoutes(app)

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Restaurant API is running"
  });
});

// Connect to MongoDB and start server
const PORT = 8080;
app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
});
