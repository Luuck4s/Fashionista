export const setInitialStore = (products) => {
  return {
    type: "SET_INITAL_STORE",
    products,
  };
};