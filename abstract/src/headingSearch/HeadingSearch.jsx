import React from 'react';

const HeadingSearch = () => {
  return (
    <div className="bg-[#DADBF1] py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8 font-lato">
          How can we help?
        </h1>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <div className="flex items-center bg-white rounded-sm px-4 py-2 border border-black"> {/* Added border utility class */}
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none flex-grow placeholder-gray-400 text-lg"
              />
              <div className="ml-4 p-2 rounded-full text-black hover:text-blue-600 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingSearch;
