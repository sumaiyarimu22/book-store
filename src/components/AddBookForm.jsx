import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/book/actions";

const AddBookForm = () => {
  const [bookData, setBookData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const hnadleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(bookData));
  };

  return (
    <div className='p-4 overflow-hidden bg-white shadow-cardShadow rounded-md'>
      <h4 className='mb-8 text-xl font-bold text-center'>Add New Book</h4>
      <form className='book-form' onSubmit={hnadleSubmit}>
        <div className='space-y-2'>
          <label htmlFor='name'>Book Name</label>
          <input
            required
            className='text-input'
            type='text'
            id='input-Bookname'
            name='name'
            onChange={handleChange}
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='category'>Author</label>
          <input
            required
            className='text-input'
            type='text'
            id='input-Bookauthor'
            name='author'
            onChange={handleChange}
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='image'>Image Url</label>
          <input
            required
            className='text-input'
            type='text'
            id='input-Bookthumbnail'
            name='thumbnail'
            onChange={handleChange}
          />
        </div>

        <div className='grid grid-cols-2 gap-8 pb-4'>
          <div className='space-y-2'>
            <label htmlFor='price'>Price</label>
            <input
              required
              className='text-input'
              type='number'
              id='input-Bookprice'
              name='price'
              onChange={handleChange}
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='quantity'>Rating</label>
            <input
              required
              className='text-input'
              type='number'
              id='input-Bookrating'
              name='rating'
              min='1'
              max='5'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='flex items-center'>
          <input
            id='input-Bookfeatured'
            type='checkbox'
            name='featured'
            className='w-4 h-4'
            onChange={handleChange}
          />
          <label htmlFor='featured' className='ml-2 text-sm'>
            This is a featured book
          </label>
        </div>

        <button type='submit' className='submit' id='submit'>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
