import { BOOK_ADD } from "./actionTypes";
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ADD:
      return [...state.action.payload];

    default:
      return state;
  }
};
export default bookReducer;
