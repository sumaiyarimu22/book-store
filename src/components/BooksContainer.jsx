import { useDispatch, useSelector } from "react-redux";
import AddBookForm from "./AddBookForm";
import Book from "./Book";
import { useEffect } from "react";
import fetchBookList from "../redux/thunk/fetchBookList";
import { changeStatus } from "../redux/book/actions";

const BooksContainer = () => {
  const bookState = useSelector((state) => state.bookList);
  const bookStatus = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookList);
  }, [dispatch]);

  const statusChange = (statusType) => {
    dispatch(changeStatus(statusType));
  };

  return (
    <main className='py-12 2xl:px-6'>
      <div className='container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8'>
        <div className='order-2 xl:-order-1'>
          <div className='flex items-center justify-between mb-12'>
            <h4 className='mt-2 text-xl font-bold'>Book List</h4>

            <div className='flex items-center space-x-4'>
              <button
                className='filter-btn active-filter'
                id='lws-filterAll'
                onClick={() => statusChange("All")}
              >
                All
              </button>
              <button
                className='filter-btn'
                id='lws-filterFeatured'
                onClick={() => statusChange("Featured")}
              >
                Featured
              </button>
            </div>
          </div>
          <div className='lws-bookContainer'>
            {/* single book component */}
            {bookState
              .filter((book) => {
                switch (bookStatus) {
                  case "All":
                    return true;
                  case "Featured":
                    return book.featured;
                }
              })
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
        <div>
          {/* book form */}
          <AddBookForm />
        </div>
      </div>
    </main>
  );
};

export default BooksContainer;
