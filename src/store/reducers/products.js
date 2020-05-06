const INITIAL_STATE = {
  data: [],
};

const products = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_INITAL_PRODUCTS") {
    return { ...state, data: action.products };
  }
  return state;
};

export default products;
