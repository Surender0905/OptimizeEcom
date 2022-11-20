import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to={'/'}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Ecommerce</span>
        </NavLink>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to={'/'} className="mr-5 hover:text-blue-500">
            Products
          </NavLink>
          <NavLink to={'/cart'} className="mr-5  hover:text-blue-500">
            Cart {0}
          </NavLink>
        </nav>
        <div className=" flex gap-6">
          <Link to={'/login'} className="mr-5 hover:text-blue-500">
            Login
          </Link>
          <Link to={'/register'} className="mr-5 hover:text-blue-500">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
