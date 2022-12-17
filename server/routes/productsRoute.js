const express = require("express");
const { createProd } = require("../controller/productsController");

const router = express.Router();

router.route("/products").post(createProd);

module.exports = router;
