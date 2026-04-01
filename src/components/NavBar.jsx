import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const NavBar = ({count, setShowCart}) => {
    return (
        <div>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className=" text-2xl md:text-4xl font-bold  bg-linear-to-r from-blue-600  to-purple-400 bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <button className='flex items-center gap-2 cursor-pointer'onClick={() => setShowCart(true)}><FaCartShopping/>{count}</button>
    <a href="">Login</a>
    <a className="btn btn-primary font-bold rounded-full">Get Started</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;