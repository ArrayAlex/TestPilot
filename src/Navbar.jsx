// Navbar.jsx
import React from 'react';
import Logo from './Logo.jsx';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 w-full fixed top-0 left-0 z-50 flex items-center justify-between">
      <Logo />
      <div className="space-x-4">
        <a href="#" className="text-white hover:text-gray-400">Home</a>
        <a href="#" className="text-white hover:text-gray-400">About</a>
        <a href="#" className="text-white hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
