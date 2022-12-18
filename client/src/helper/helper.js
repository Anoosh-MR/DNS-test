export const CategorynammeCount = (name, product) => {
  const categories = product.filter((item) => item.categories.includes(name));
  const length = categories.length;
  return `${name} (${length})`;
};
export const CategoryProducts = (name, product) => {
  const categories = product?.filter((item) => item.categories.includes(name));

  return categories;
};
