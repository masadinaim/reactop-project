import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;

      const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
      setIsFooterVisible(scrollHeight - scrollTop === clientHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-black text-white p-4 fixed right-0 left-0 z-50 ${isNavbarVisible ? '' : 'hidden'}`}>
      <div className="container mx-auto px-4 md:px-0 flex items-center justify-between">
        <Link to="/" className="text-red-700 text-2xl font-bold md:text-4xl">
          BarvaLabs
        </Link>
        <div
          className={`cursor-pointer text-white md:hidden ${isNavbarVisible ? 'hidden' : 'block'}`}
          onClick={() => setIsNavbarVisible(!isNavbarVisible)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
        <div className={`md:flex md:items-center md:w-auto ${isNavbarVisible ? 'block' : 'hidden'}`}>
          <div className="text-lg md:flex-grow">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 font-semibold text-white mr-6 hover:text-red-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block mt-4 md:inline-block md:mt-0 font-semibold text-white mr-6 hover:text-red-700"
            >
              About
            </Link>
            <Link
              to="/service"
              className="block mt-4 md:inline-block md:mt-0 font-semibold text-white mr-6 hover:text-red-700"
            >
              Service
            </Link>
            <Link
              to="/benefit"
              className='block mt-4 md:inline-block md:mt-0 font-semibold text-white mr-6 hover:text-red-700'
            >
              Benefit
            </Link>
            <Link
              to="/login"
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-6"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;