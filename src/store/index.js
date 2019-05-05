/**
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
import reducer from './reducers';

/**
 * code
 */

// devTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

// Middleware
//const appliedMiddleware = applyMiddleware();
//const enhancers = compose(appliedMiddleware, ...devTools);
//const store = createStore(reducer, enhancers)

// createStore
const store = createStore(reducer, ...devTools);

/**
 * Export
 */
export default store;