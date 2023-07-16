import React, { useState } from "react";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="rounded-md bg-[#329c8f] hover:bg-[#298075] duration-300 p-6 mb-4 order-2 border-x-stone-200">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center w-full justify-between">
          <div>
            <a className="text-white text-2xl lg:text-3xl font-bold" href="#/">
              React App
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-8 ml-10">
            <a className="text-white" href="#/">
              Home
            </a>
            <a className="text-white" href="#/about">
              About
            </a>
            <a className="text-white" href="#/services">
              Services
            </a>
            <a className="text-white" href="#/contact">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" width="28" height="28">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h10a1 1 0 100-2H5z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-3">
            <a
              className="block py-1 text-white font-semibold rounded hover:bg-blue-400"
              href="#/"
            >
              Home
            </a>
            <a
              className="block py-1 mt-2 text-white font-semibold rounded hover:bg-blue-400"
              href="#/about"
            >
              About
            </a>
            <a
              className="block py-1 mt-2 text-white font-semibold rounded hover:bg-blue-400"
              href="#/services"
            >
              Services
            </a>
            <a
              className="block py-1 mt-2 text-white font-semibold rounded hover:bg-blue-400"
              href="#/contact"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default navbar;
