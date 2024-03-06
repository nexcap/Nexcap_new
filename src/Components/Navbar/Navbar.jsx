

import React, { useState } from 'react';
import navlogo from './Logo-Nexcap.png';



const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div className={`sticky top-10 z-50 ${menuVisible ? 'md:hidden' : ''}`}>
    <header className="bg-[#696666] lg:mx-48 md:mx-16 mx-4 px-4 rounded-2xl py-2 md:my-10 md:rounded-full backdrop-filter backdrop-blur-lg bg-opacity-30">
      <nav className="items-center mx-auto max-w-screen-xl sm:px-1 md:flex md:space-x-6">
        <div className="flex justify-between">
          <a href="/">
            <img src={navlogo} width="35" height="35" alt="Nexcap Logo" />
          </a>
          <div className="flex items-center md:hidden">
            <button className="text-gray-500 outline-none" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center">
            <button
              className="text-gray-500 outline-none md:hidden"
              onClick={toggleMenu}
            >
              Close
            </button>
          </div>
        </div>
        <ul className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${menuVisible ? 'block' : 'hidden'}`}>
       
          <li className="order-2 pb-5 md:pb-0">
            <a
              href="#contact"
              className=" justify-center items-center gap-x-3 text-center text-yellow-500 transition-all transform border border-yellow-500  hover:text-gray-100 text-sm font-medium rounded-full  py-2 px-4 block md:inline"
            >
              Contact Us
            </a>
          </li>
          <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-10 md:space-y-0">
            <li className="text-white  font-medium text-sm text-center transition duration-500 delay-200 hover:text-[#efb919]">
            
              <a href='/#hero'> Home</a>
            </li>
            <li className="text-white font-medium text-sm text-center transition duration-500 delay-200 hover:text-[#efb919]">
              <a href="/#about">About Us</a>
            </li>
            <li className="text-white font-medium text-sm text-center transition duration-500 delay-200 hover:text-[#efb919]">
              <a href="/#features">Features</a>
            </li>
            <li className="text-white font-medium text-sm text-center transition duration-500 delay-200 hover:text-[#efb919]">
              <a href="/#services">Services</a>
            </li>
          
            <li className="text-white font-medium text-sm text-center transition duration-500 delay-200 hover:text-[#efb919]">
              <a href="/#blogs">Blogs</a>

          
            </li>
          </div>
      
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;





