const INITIAL_STATE = {
  items: [],
  count: 0,
  visible: false,
};

const cart = (state = INITIAL_STATE, action) => {
  if (action.type === "ADD_PRODUCT_TO_CART") {
    const newItems = [...state.items, action.product];
    return {
      ...state,
      items: newItems,
      count: newItems.length,
    };
  }

  if (action.type === "TOGGLE_CART_VISIBLE") {
    return {
      ...state,
      visible: !state.visible,
    };
  }

  if (action.type === "REMOVE_PRODUCT_FROM_CART") {
    const newItems = [...action.products];
    return {
      ...state,
      items: newItems,
      count: newItems.length,
    };
  }

  return state;
};

export default cart;
