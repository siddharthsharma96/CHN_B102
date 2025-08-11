const express = require("express");
const router = express.Router();
const menuController = require("./../Controllers/menuController");

router
  .route("/")
  .get(menuController.getAllMenus)
  .post(menuController.createMenu);

module.exports = router;
