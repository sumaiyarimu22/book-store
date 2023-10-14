import { BOOK_ADD, BOOK_DELETE } from "./actionTypes";

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
