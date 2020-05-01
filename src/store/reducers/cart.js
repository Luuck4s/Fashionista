const INITIAL_STATE = {
  items: [],
  count: 0,
};

const cart = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_PRODUCT_CART") {
    const newItems = [...state.items, action.product];
    return {
      ...state,
      items: newItems,
      count: newItems.length,
    };
  }
  return state;
};

export default cart;
