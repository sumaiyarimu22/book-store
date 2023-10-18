import { useDispatch, useSelector } from "react-redux";
import AddBookForm from "./AddBookForm";
import Book from "./Book";
import { useEffect } from "react";
import fetchBookList from "../redux/thunk/fetchBookList";

const BooksContainer = () => {
  const bookState = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookList);
  }, [dispatch]);

  return (
    <main className='py-12 2xl:px-6'>
      <div className='container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8'>
        <div className='order-2 xl:-order-1'>
          <div className='flex items-center justify-between mb-12'>
            <h4 className='mt-2 text-xl font-bold'>Book List</h4>

            <div className='flex items-center space-x-4'>
              <button className='filter-btn active-filter' id='lws-filterAll'>
                All
              </button>
              <button className='filter-btn' id='lws-filterFeatured'>
                Featured
              </button>
            </div>
          </div>
          <div className='lws-bookContainer'>
            {/* single book component */}
            {bookState.map((book) => (
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
