import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "./book/bookReducer";
import { createStore } from "redux";

const store = createStore(bookReducer, composeWithDevTools());

export default store;
