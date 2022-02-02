import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer/rootReducer";
const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, loggerMiddleware))
);
