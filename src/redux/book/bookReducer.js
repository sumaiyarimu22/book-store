import { BOOK_ADD, BOOK_DELETE, EDIT_BOOK, LOADED } from "./actionTypes";
const initialState = {
  bookList: [],
  editBook: {},
  update: false,
};

// const newId = (book) => {
//   const maxId = book.reduce((maxId, book) => Math.max(book.id, maxId), -1);
//   return maxId + 1;
// };

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return {
        ...state,
        bookList: [...action.payload],
      };

    case BOOK_ADD:
      return { ...state, bookList: [...state.bookList, action.payload] };

    case EDIT_BOOK:
      return {
        ...state,
        editBook: { ...action.payload },
        update: true,
      };

    case BOOK_DELETE:
      return {
        ...state,
        bookList: state.bookList.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
export default bookReducer;
