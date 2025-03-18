import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`w-full ${props.className}`}>
      {/* Top Nav */}
      <div className="w-full bg-none">
        <div className="flex justify-between items-center py-2 px-5 ">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Logo" 
            className="min-w-20 min-h-11  w-1/4 md:w-1/6 lg:w-1/8 drop-shadow-[0_0_3px_white]" 
          />

          {/* Hamburger Icon (Visible on small screens) */}
          <button 
            className="block md:hidden text-2xl text-white focus:outline-none z-50" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>

          {/* Desktop Menu */}
          {/* <ul className="hidden md:flex justify-between items-center flex-row gap-5 text-base text-beige">
            <Link to="/">
              <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm">
                Home
              </li>
            </Link>
            <Link to="/admissions">
              <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm">
                Admission
              </li>
            </Link>
            <Link to="/career">
              <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm">
                Career
              </li>
            </Link>
            <Link to="/about">
              <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm">
                About
              </li>
            </Link>
            <Link to="/disclosure">
              <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm">
                Public Disclouser
              </li>
            </Link>
          </ul> */}

          {/* Log In Button */}
          <a 
            href="login" 
            className="hidden md:block text-base px-4 py-1 text-maroon bg-beige shadow-[5px_5px_0_maroon] rounded-lg hover:shadow-[8px_8px_0_maroon] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:text-light-white transition-transform transition-shadow duration-2000 ease-in-out"
          >
            Log In
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-40 flex flex-col items-center justify-center shadow-md">
          {/* <ul className="flex flex-col items-center gap-5 py-5 text-base text-beige -mt-48 text-xl">
            <Link to="/" onClick={toggleMenu}>
              <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm">
                Home
              </li>
            </Link>
            <Link to="/admissions" onClick={toggleMenu}>
              <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm">
                Admission
              </li>
            </Link>
            <Link to="/career" onClick={toggleMenu}>
              <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm">
                Career
              </li>
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm">
                About
              </li>
            </Link>
            <Link to="/disclosure" onClick={toggleMenu}>
              <li className="px-2 py-1 hover:bg-hover hover:text-white rounded-sm">
                Public Disclosure
              </li>
            </Link>
          </ul> */}
          
          <a 
            href="login" 
            className="block w-1/2 text-center text-base px-4 py-2 text-maroon bg-beige shadow-[5px_5px_0_maroon] rounded-lg hover:shadow-[8px_8px_0_maroon] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:text-light-white transition-transform transition-shadow duration-2000 ease-in-out"
          >
            Log In
          </a>
          
        </div>
      )}
    </div>
  );
};

export default NavBar;
