// const fs = require("fs");
// const restaurantData = JSON.parse(
//   fs.readFileSync("./utils/Restaurant.json", "utf-8")
// );

const restaurantSchema = require("./../Models/restaurantModel");

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantSchema.find();
    res.status(200).json({
      status: "success",
      timeofhit: req.requestTime,
      total: restaurants.length,
      data: {
        restaurants,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantSchema.create(req.body);
    res.status(201).json({
      status: "sucess",
      timeofhit: req.requestTime,
      data: {
        restaurant,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }

  // const newId = restaurantData[restaurantData.length - 1].id + 1;
  // const newRestaurant = Object.assign({ id: newId }, req.body);
  // restaurantData.push(newRestaurant);
  // fs.writeFile(
  //   "./utils/Restaurant.json",
  //   JSON.stringify(restaurantData),
  //   (err) => {
  //     res.status(400).json({
  //       status: "Fail",
  //       timeofhit: req.requestTime,
  //     });
  //   }
  // );
};

exports.getRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantSchema.findById(req.params.resId);
    if (!restaurant) {
      return res.status(404).json({
        status: "Fail",
        message: "no data found please check id",
      });
    }
    res.status(200).json({
      status: "sucess",
      data: {
        restaurant,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
  // const resId = req.params.resId * 1;
  // if (resId > restaurantData.length) {
  //   return res.status(404).json({
  //     status: "Fail",
  //     message: "no data found please check id",
  //   });
  // }
  // const restaurant = restaurantData.find((el) => el.id === resId);
  // res.status(200).json({
  //   status: "sucess",
  //   data: {
  //     restaurant,
  //   },
  // });
};

exports.updateRestaurant = async (req, res) => {
  try {
    const updatedRestaurant = await restaurantSchema.findByIdAndUpdate(
      req.params.resId,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRestaurant) {
      return res.status(404).json({
        status: "Fail",
        message: "no data found please check id",
      });
    }
    res.status(200).json({
      status: "Succesfully Updated",
      data: updatedRestaurant,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }

  // const resId = req.params.resId * 1;
  // if (resId > restaurantData.length) {
  //   return res.status(404).json({
  //     status: "Fail",
  //     message: "no data found please check id",
  //   });
  // }
  // res.status(200).json({
  //   status: "Updated succesfully",
  //   message: "Under process",
  // });
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const deleted = await restaurantSchema.findByIdAndDelete(req.params.resId);
    if (!deleted) {
      return res.status(404).json({
        status: "Fail",
        message: "no data found please check id",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
  // const resId = req.params.resId * 1;
  // if (resId > restaurantData.length) {
  //   return res.status(404).json({
  //     status: "Fail",
  //     message: "no data found please check id",
  //   });
  // }
  // res.status(200).json({
  //   status: "deleted succesfully",
  //   message: "Under process",
  // });
};
