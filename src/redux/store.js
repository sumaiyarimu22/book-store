import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "./book/bookReducer";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const store = createStore(
  bookReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
