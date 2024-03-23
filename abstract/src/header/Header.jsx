import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo.svg';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const searchBarRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleSearchMode = () => {
    setIsSearchMode(!isSearchMode);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setIsSearchMode(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const Dropdown = () => (
    <div
      className={`absolute top-full left-0 right-0 bg-[#191A1B] text-white py-4 flex flex-col font-lato items-center text-xl ${
        showDropdown ? 'block' : 'hidden'
      }`}
    >
      <a href="/help-center" className="block px-6 py-2 hover:bg-gray-700">
        Help Center
      </a>
      <hr className="w-40 border-t border-gray-600" />
      <a href="/nope" className="block px-6 py-2 hover:bg-gray-700">
        Make a Request
      </a>
      <hr className="w-40 border-t border-gray-600" />
      <a href="/nope" className="block px-6 py-2 hover:bg-gray-700">
        Sign in
      </a>
    </div>
  );

  const SearchBar = () => (
    <div
      className="flex items-center bg-gray-700 rounded-lg px-4 py-2"
      ref={searchBarRef}
    >
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent text-white placeholder-gray-400 outline-none flex-grow"
      />
      <button className="ml-4 hover:text-gray-300" onClick={toggleSearchMode}>
      </button>
    </div>
  );

  return (
    <nav className="bg-[#000] text-white flex justify-between items-center py-4 px-6 md:px-10 lg:px-20 font-semibold relative">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10 mr-4" />
          <span>Abstract</span>
        </a>
        {!isSearchMode && (
          <>
            <div className="border-r border-white h-6 mx-4 hidden lg:block justify-center"></div>
            <div className="hidden lg:flex space-x-4">
              <a href="/help-center" className="hover:text-gray-300">
                HELP CENTER
              </a>
            </div>
          </>
        )}
      </div>
      <div className="flex items-center">
        {isSearchMode ? (
          <SearchBar />
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: 'rgba(255, 255, 255, 1)' }}
              className="mr-4 hidden lg:block cursor-pointer"
              onClick={toggleSearchMode}
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
            <button className="hidden md:block bg-[#191A1B] text-white px-4 py-2 rounded mr-4 hover:bg-gray-700">
              Make a Request
            </button>
            <button className="hidden md:block bg-[#4C5FD5] text-white px-6 py-2 rounded hover:bg-blue-700">
              Sign In
            </button>
            <button className="md:hidden hover:text-gray-300" onClick={toggleDropdown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: 'rgba(255, 255, 255, 1)' }}
                className="mr-4"
              >
                <path d="M4 18h16v-2H4v2zM4 5v2h16V5H4zm0 7h16v-2H4v2z"></path>
              </svg>
            </button>
          </>
        )}
      </div>
      <Dropdown />
    </nav>
  );
};

export default Header;