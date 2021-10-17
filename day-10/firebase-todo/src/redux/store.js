import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

/**
 * Create Store
 * Params:
 * 1. reducers
 */
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
