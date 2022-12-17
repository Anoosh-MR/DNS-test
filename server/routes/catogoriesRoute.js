const express = require("express");
const {
  createCat,
  getCategory,
  getFullCategory,
} = require("../controller/categoryController");

const router = express.Router();

router.route("/category").post(createCat).get(getCategory);
router.route("/category/getfull").get(getFullCategory);

module.exports = router;
