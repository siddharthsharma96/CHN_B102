const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
// CRUD : c create post ,r read get ,u update patch,d delete
const restaurantData = JSON.parse(
  fs.readFileSync("./utils/Restaurant.json", "utf-8")
);

app.get("/api/v1/restaurant", (req, res) => {
  res.status(200).json({
    status: "success",
    total: restaurantData.length,
    data: {
      restaurants: restaurantData,
    },
  });
});

app.post("/api/v1/restaurant", (req, res) => {
  const newId = restaurantData[restaurantData.length - 1].id + 1;
  const newRestaurant = Object.assign({ id: newId }, req.body);
  restaurantData.push(newRestaurant);
  fs.writeFile(
    "./utils/Restaurant.json",
    JSON.stringify(restaurantData),
    (err) => {
      res.status(400).json({
        status: "Fail",
      });
    }
  );
  res.status(201).json({
    status: "sucess",
    data: {
      newRestaurant,
    },
  });
});

app.get("/api/v1/restaurant/:resId", (req, res) => {
  const resId = req.params.resId * 1;
  if (resId > restaurantData.length) {
    return res.status(404).json({
      status: "Fail",
      message: "no data found please check id",
    });
  }
  const restaurant = restaurantData.find((el) => el.id === resId);
  res.status(200).json({
    status: "sucess",
    data: {
      restaurant,
    },
  });
});

app.patch("/api/v1/restaurant/:resId", (req, res) => {
  const resId = req.params.resId * 1;
  if (resId > restaurantData.length) {
    return res.status(404).json({
      status: "Fail",
      message: "no data found please check id",
    });
  }
  res.status(200).json({
    status: "Updated succesfully",
    message: "Under process",
  });
});

app.delete("/api/v1/restaurant/:resId", (req, res) => {
  const resId = req.params.resId * 1;
  if (resId > restaurantData.length) {
    return res.status(404).json({
      status: "Fail",
      message: "no data found please check id",
    });
  }
  res.status(200).json({
    status: "deleted succesfully",
    message: "Under process",
  });
});

PORT_NO = 8000;
app.listen(PORT_NO, () => {
  console.log("Server Started", PORT_NO);
});
