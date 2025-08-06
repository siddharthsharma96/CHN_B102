const express = require("express");
const RestaurantRoute = require("./Routes/restaurantRoutes");
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  const now = new Date();
  req.requestTime = now.toLocaleString();
  next();
});

app.use("/api/v1/restaurant", RestaurantRoute);

module.exports = app;
