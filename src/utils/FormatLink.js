export const format = (nameProduct, toLink = true) => {
  if (toLink) {
    return nameProduct.toLowerCase().replace(/\s/g, "-");
  }

  return nameProduct
    .toUpperCase()
    .replace(/-/g, " ")
    .replace("T SHIRT", "T-SHIRT");
};
