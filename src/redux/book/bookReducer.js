import { BOOK_ADD, BOOK_DELETE, LOADED } from "./actionTypes";
const initialState = [];

const newId = (book) => {
  const maxId = book.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case BOOK_ADD:
      return [...state, { ...action.payload, id: newId(state) }];

    case BOOK_DELETE:
      return [...state.filter((item) => item.id !== action.payload)];

    default:
      return state;
  }
};
export default bookReducer;
