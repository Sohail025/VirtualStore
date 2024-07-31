const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/post");
// const { getAllItems, GetSingleItem } = require("../controllers/get");
// const {
//   deleteAllItems,
//   deleteSingleItem,
//   deleteSingleCart,
//   deleteAllCart,
// } = require("../controllers/delete");

// router.post("/add", addItems);
// router.post("/form", contact_us);
// router.post("/check/user", CheckUser);
// router.post("/add/in/cart", addItemsInCart);
router.post("/createUser", createUser);
// router.post("/add/in/purchase", addItemsInPurchase);
// router.post("/get/all/cart", getAllCartItems);
// router.get("/get/all", getAllItems);
// router.post("/get/all/purchase", getAllPurchaseItems);
// router.get("/get/single/:id", GetSingleItem);
// router.delete("/delete/all", deleteAllItems);
// router.delete("/delete/single", deleteSingleItem);
// router.delete("/delete/single/cart", deleteSingleCart);
// router.delete("/delete/all/cart", deleteAllCart);
module.exports = router;
