import { deleteBook } from "../book/actions";

const bookDeleteToServer = (bookId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    dispatch(deleteBook(bookId));
  };
};

export default bookDeleteToServer;
