import { useState } from "react";
import { useDispatch } from "react-redux";
import serachThunk from "../redux/thunk/searchThunk";

const logo = "https://cdn-icons-png.flaticon.com/512/6595/6595705.png";

const Navication = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(serachThunk(search));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <nav className='py-4 2xl:px-6'>
      <div className='container flex items-center justify-between '>
        <img
          src={logo}
          width='100px'
          height='200px'
          className='object-contain h-14'
        />

        <ul className='hidden md:flex items-center space-x-6'>
          <li className='font-semibold cursor-pointer text-3xl'>Book Store</li>
          {/* <li className='cursor-pointer'>Wishlist</li> */}
          {/* <li className='cursor-pointer'>My Collection</li> */}
        </ul>

        <form className='flex items-center' onSubmit={handleSubmit}>
          <div className='group relative rounded-md bg-white'>
            <svg
              width='20'
              height='20'
              fill='currentColor'
              className='absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              ></path>
            </svg>
            <input
              type='text'
              placeholder='Filter books...'
              className='search'
              id='lws-searchBook'
              value={search}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navication;
