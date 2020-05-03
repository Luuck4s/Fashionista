export const format = (nameProduct, toLink = true) => {
  if (toLink) {
    return nameProduct.replace(/\s/g, "_");
  }

  return nameProduct.replace(/_/g, " ");
};
