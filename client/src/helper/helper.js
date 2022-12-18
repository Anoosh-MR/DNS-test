export const CategorynammeCount = (name, product) => {
  const categories = product.filter((item) => item.categories.includes(name));
  const length = categories.length;
  return `${name} (${length})`;
};
export const CategoryProducts = (name, product) => {
  const categories = product?.filter((item) => item.categories.includes(name));

  return categories;
};

export const styled = (name, product) => {
  const data = CategorynammeCount(name, product);
  console.log(data);
  if (data == `${name} (${0})`) {
    return "none";
  } else {
    return "flex";
  }
};
