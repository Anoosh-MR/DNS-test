const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    picture: { type: String },
    categories: { type: Array, required: true },
  },
  { timestamps: true }
);

const products = mongoose.model("Product", productSchema);

module.exports = products;
