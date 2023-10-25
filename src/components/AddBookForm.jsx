import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bookAddToServer from "../redux/thunk/addBook";
import { updatedtoServer } from "../redux/thunk/updateBook";

const AddBookForm = () => {
  const [bookData, setBookData] = useState({});
  const [editedData, setEditedData] = useState({});
  const editBook = useSelector((state) => state.editBook);
  const update = useSelector((state) => state.update);

  const dispatch = useDispatch();

  useEffect(() => {
    setEditedData(editBook);
  }, [editBook, update]);

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  const handleEditChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const hnadleSubmit = (e) => {
    e.preventDefault();
    if (update) {
      dispatch(updatedtoServer(editedData));
    } else {
      dispatch(bookAddToServer(bookData));
      setBookData({
        name: "",
        author: "",
        thumbnail: "",
        price: "",
        rating: "",
        featured: false,
      });
    }
  };

  return (
    <div className='p-4 overflow-hidden bg-white shadow-cardShadow rounded-md'>
      <h4 className='mb-8 text-xl font-bold text-center'>
        {update ? "edit book" : "Add New Book"}
      </h4>
      <form className='book-form' onSubmit={hnadleSubmit}>
        <div className='space-y-2'>
          <label htmlFor='name'>Book Name</label>
          <input
            required
            className='text-input'
            type='text'
            id='input-Bookname'
            name='name'
            value={update ? editedData.name : bookData.name}
            onChange={update ? handleEditChange : handleChange}
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
            value={update ? editedData.author : bookData.author}
            onChange={update ? handleEditChange : handleChange}
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
            value={update ? editedData.thumbnail : bookData.thumbnail}
            onChange={update ? handleEditChange : handleChange}
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
              value={update ? editedData.price : bookData.price}
              onChange={update ? handleEditChange : handleChange}
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
              value={update ? editedData.rating : bookData.rating}
              onChange={update ? handleEditChange : handleChange}
            />
          </div>
        </div>

        <div className='flex items-center'>
          <input
            id='input-Bookfeatured'
            type='checkbox'
            name='featured'
            className='w-4 h-4'
            checked={update ? editedData.featured : bookData.featured}
            onChange={update ? handleEditChange : handleChange}
          />
          <label htmlFor='featured' className='ml-2 text-sm'>
            This is a featured book
          </label>
        </div>

        <button type='submit' className='submit' id='submit'>
          {update ? "update" : " Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
