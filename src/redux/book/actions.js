import { BOOK_ADD, BOOK_DELETE, EDIT_BOOK, LOADED } from "./actionTypes";

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

export const editBook = (bookinfo) => {
  return {
    type: EDIT_BOOK,
    payload: bookinfo,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: BOOK_DELETE,
    payload: bookId,
  };
};
