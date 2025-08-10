const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Restaurant name is missing"],
      unique: [true, "Already taken by someone else"],
    },
    cloudinaryImageId: { type: String },
    locality: String,
    areaName: { type: String },
    costForTwo: { type: String },
    cuisines: [String],
    avgRating: { type: Number },
    avgRatingString: { type: String },
    totalRatingsString: { type: String },
    nextCloseTime: { type: String },
    parentId: { type: String },
    opened: {
      type: Boolean,
      default: true,
      enum: {
        values: [true, false],
        message: "Only two values are allowed",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("restaurants", restaurantSchema);
