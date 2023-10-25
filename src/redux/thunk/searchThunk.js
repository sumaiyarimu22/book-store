import { search } from "../book/actions";

const serachThunk = (value) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books?q=${value}`);
    const serachValue = await response.json();
    dispatch(search(serachValue));
  };
};

export default serachThunk;
