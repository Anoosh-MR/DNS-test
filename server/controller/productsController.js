const Products = require("../model/product");

const createProd = async (req, res) => {
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
    res.status(500).json({ error: err });
  }
};

// two way 1,get product  from search params 2, get all products
const getProduct = async (req, res) => {
  try {
    if (req.body.catId == undefined) {
      const products = await Products.find({});
      res.status(200).json(products);
      return;
    }
    const products = await Products.find({ catId: req.body.catId });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProd,
  getProduct,
};
