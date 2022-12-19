const express = require("express");
const { createProd, getProduct } = require("../controller/productsController");

const router = express.Router();

router.route("/products").post(createProd);
router.route("/products/getPost").post(getProduct);

module.exports = router;
