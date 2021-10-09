import { createStore } from "redux";
import reducers from "./reducers";

/**
 * Create Store
 * Params:
 * 1. reducers
 */
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
