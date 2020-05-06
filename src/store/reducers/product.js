const INITIAL_STATE = {
  product: {},
  selectedSize: null,
  errorSelectedSize: false,
};

const product = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_PRODUCT_ACTIVED") {
    return { ...state, product: action.product };
  }

  if (action.type === "SET_SELECTED_SIZE") {
    return { ...state, selectedSize: action.size };
  }

  if (action.type === "TOGGLE_ERROR_SELECTED_SIZE") {
    return { ...state, errorSelectedSize: action.hasError };
  }

  if (action.type === "CLEAR_PRODUCT_STORE") {
    return { ...state, ...INITIAL_STATE };
  }
  return state;
};

export default product;
