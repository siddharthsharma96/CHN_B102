const menuSchema = require("./../Models/menuModel");

exports.createMenu = async (req, res) => {
  try {
    const menu = await menuSchema.create(req.body);
    res.status(201).json({
      status: "Created",
      data: menu,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllMenus = async (req, res) => {
  try {
    const menus = await menuSchema.find();
    res.status(200).json({
      status: "success",
      data: menus,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
