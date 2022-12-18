const category = require("../model/category");
const slugify = require("slugify");

//*create a controller for saving category

const createCat = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      slug: slugify(req.body.name),
    };
    if (req.body.parentId) {
      data.parentId = req.body.parentId;
    }
    const cat = new category(data);
    const AddedCat = await cat.save();
    res.status(200).json(AddedCat);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// category logic to check if the parent id provided is undefined ?the list which has no parent id :the list which has parent id =

const createCategories = (categories, parentId = null) => {
  const categoryList = [];
  let category;
  if (parentId === null) {
    category = categories.filter((cat) => cat.parentId === undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }
  for (let cat of category) {
    categoryList.push({
      _id: cat._id,
      name: cat.name,
      slug: cat.slug,
      children: createCategories(categories, cat._id),
    });
  }
  return categoryList;
};

const getCategory = async (req, res) => {
  try {
    category.find({}).exec((err, category) => {
      if (category) {
        const categoriesList = createCategories(category);
        res.status(200).json(categoriesList);
      }
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// to get full category
const getFullCategory = async (req, res) => {
  try {
    category.find({}).exec((err, category) => {
      if (category) {
        res.status(200).json({ category });
      }
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  createCat,
  getCategory,
  getFullCategory,
};
