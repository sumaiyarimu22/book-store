import {
  BOOK_ADD,
  BOOK_DELETE,
  EDIT_BOOK,
  LOADED,
  SEARCH,
  STATUS_BOOK,
} from "./actionTypes";
const initialState = {
  bookList: [],
  editBook: {},
  update: false,
  status: "All",
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return {
        ...state,
        bookList: [...action.payload],
        update: false,
        editBook: {},
      };

    case BOOK_ADD:
      return { ...state, bookList: [...state.bookList, action.payload] };

    case EDIT_BOOK:
      return {
        ...state,
        editBook: { ...action.payload },
        update: true,
      };

    case STATUS_BOOK:
      return {
        ...state,
        status: action.payload,
      };

    case SEARCH:
      return {
        ...state,
        bookList: [...action.payload],
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
