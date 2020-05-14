const INITIAL_STATE = {
  visible: false,
  productsFound: [],
};

const search = (state = INITIAL_STATE, action) => {
  if (action.type === "TOGGLE_SEARCH_VISIBLE") {
    return {
      ...state,
      visible: !state.visible,
    };
  }

  if (action.type === "SET_PRODUCTS_FOUND") {
    return {
      ...state,
      productsFound: action.products,
    };
  }

  return state;
};

export default search;
