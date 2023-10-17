import { BOOK_ADD, BOOK_DELETE, LOADED } from "./actionTypes";

export const loaded = (bookList) => {
  return {
    type: LOADED,
    payload: bookList,
  };
};

export const addBook = (book) => {
  return {
    type: BOOK_ADD,
    payload: book,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: BOOK_DELETE,
    payload: bookId,
  };
};
