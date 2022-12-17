const Products = require("../model/product");

const createProd = async (req, res) => {
  //    const {name,desc,price,picture}=req.body
  try {
    const exist = await Products.find(req.body);
    if (exist.length) {
      res
        .status(400)
        .json({ message: "This product has already been created" });
    }
    const newProduct = new Products(req.body);
    const data = await newProduct.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createProd,
};
