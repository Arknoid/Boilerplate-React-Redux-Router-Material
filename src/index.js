/**
 * NPM import
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

/**
 * Local import
 */
import App from "./App";
import store from "./store";

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById('root'));
