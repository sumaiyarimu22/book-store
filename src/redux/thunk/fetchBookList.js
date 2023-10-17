import { loaded } from "../book/actions";

const fetchBookList = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();
  dispatch(loaded(books));
};

export default fetchBookList;
