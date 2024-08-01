const express = require("express");
const router = express.Router();
const { createUser, login, addProduct } = require("../controllers/post");
// const { getAllItems, GetSingleItem } = require("../controllers/get");
// const {
//   deleteAllItems,
//   deleteSingleItem,
//   deleteSingleCart,
//   deleteAllCart,
// } = require("../controllers/delete");

router.post("/createUser", createUser);
router.post("/login", login);
router.post("/addProduct", addProduct);

module.exports = router;
