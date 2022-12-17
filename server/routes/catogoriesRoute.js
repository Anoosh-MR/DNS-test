const express = require("express");
const { createCat, getCategory } = require("../controller/categoryController");

const router = express.Router();

router.route("/category").post(createCat).get(getCategory);

module.exports = router;
