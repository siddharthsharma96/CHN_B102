const fs = require("fs");
const restaurantData = JSON.parse(
  fs.readFileSync("./utils/Restaurant.json", "utf-8")
);

exports.getAllRestaurants = (req, res) => {
  res.status(200).json({
    status: "success",
    timeofhit: req.requestTime,
    total: restaurantData.length,
    data: {
      restaurants: restaurantData,
    },
  });
};

exports.createRestaurant = (req, res) => {
  const newId = restaurantData[restaurantData.length - 1].id + 1;
  const newRestaurant = Object.assign({ id: newId }, req.body);
  restaurantData.push(newRestaurant);
  fs.writeFile(
    "./utils/Restaurant.json",
    JSON.stringify(restaurantData),
    (err) => {
      res.status(400).json({
        status: "Fail",
        timeofhit: req.requestTime,
      });
    }
  );
  res.status(201).json({
    status: "sucess",
    timeofhit: req.requestTime,
    data: {
      newRestaurant,
    },
  });
};
exports.getRestaurant = (req, res) => {
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
};

exports.updateRestaurant = (req, res) => {
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
};

exports.deleteRestaurant = (req, res) => {
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
};
