import { createStore } from "redux";
import rootReducer from "./reducers/index";

import { getState, setState } from "../utils/localStorage";

const persistedState = getState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  setState({
    cart: store.getState().cart,
  });
});

export default store;
