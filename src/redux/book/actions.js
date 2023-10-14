import { BOOK_ADD, BOOK_DELETE } from "./actionTypes";

export const addBook = (product) => {
  return {
    type: BOOK_ADD,
    payload: product,
  };
};

export const deleteBook = (productId) => {
  return {
    type: BOOK_DELETE,
    payload: productId,
  };
};
