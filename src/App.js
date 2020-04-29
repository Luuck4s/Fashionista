import React from "react";

import { Provider } from "react-redux";

import store from "./store";

import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
