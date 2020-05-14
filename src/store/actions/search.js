export const toggleSearchVisible = () => {
  return {
    type: "TOGGLE_SEARCH_VISIBLE",
  };
};


export const setProductsFound = (products) => {
  return {
    type: "SET_PRODUCTS_FOUND",
    products
  };
};

