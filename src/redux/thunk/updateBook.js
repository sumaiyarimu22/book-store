import { loaded } from "../book/actions";

export const updatedtoServer = (bookinfo) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookinfo.id}`, {
      method: "PATCH",
      body: JSON.stringify({ ...bookinfo }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const allData = await fetch(`http://localhost:9000/books`);
    const updatedData = await allData.json();
    dispatch(loaded(updatedData));
  };
};
