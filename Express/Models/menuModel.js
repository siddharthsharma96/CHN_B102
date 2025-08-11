const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Must have a name"] },
  category: { type: String, required: [true, "Must hav e a Category"] },
  imgName: String,
  description: { type: String, required: [true, "Must hav e a Description"] },
  imageId: String,
  inStock: { type: Boolean, default: true },
  isVeg: Boolean,
  rating: String,
  ratingCount: String,
  ratingCountV2: String,
  defaultPrice: Number,
  price: Number,
});

const sectionSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Must have title"] },
  itemCards: [ItemSchema],
});

const restaurantMenus =
  mongoose.models.restaurantmenus ||
  mongoose.model("restaurantmenus", sectionSchema);

module.exports = restaurantMenus;
