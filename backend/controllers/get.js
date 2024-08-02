const Products = require("../model/Schema");
const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    if (products.length == 0) {
      res.json({ success: false, message: "Products not found" }).status(404);
      return;
    }
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error }).status(404);
  }
};
module.exports = { getAllProducts };
