import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assests/Poeage_Logo_1.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className="bg-white shadow-md sticky top-0 z-50 px-6 py-3">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
         <a href='/' ><img src={Logo} alt="Poeage Logo" className="w-36" /> </a>
          <span className="font-[cursive] text-lg text-gray-800">IT Developers</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/aboutus" className="text-gray-700 font-medium hover:text-blue-600 transition">About us</a>
          <a href="/services" className="text-gray-700 font-medium hover:text-blue-600 transition">Services</a>
          <a href="/case-studies" className="text-gray-700 font-medium hover:text-blue-600 transition">Case Studies</a>
          <a href="/blog" className="text-gray-700 font-medium hover:text-blue-600 transition">Blog</a>
          <a href="/works" className="text-gray-700 font-medium hover:text-blue-600 transition">How it Works</a>
          <a href="/hire" className="text-gray-700 font-medium hover:text-blue-600 transition">Hire</a>
          <a
            href="/contact"
            className="px-4 py-2 rounded-md font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition"
          >
            Contact us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-3 px-4 pb-4 bg-white shadow-md rounded-md">
          <a href="/aboutus" className="text-gray-700 font-medium hover:text-blue-600 transition">About us</a>
          <a href="/services" className="text-gray-700 font-medium hover:text-blue-600 transition">Services</a>
          <a href="/case-studies" className="text-gray-700 font-medium hover:text-blue-600 transition">Case Studies</a>
          <a href="/blog" className="text-gray-700 font-medium hover:text-blue-600 transition">Blog</a>
          <a href="/how-it-works" className="text-gray-700 font-medium hover:text-blue-600 transition">How it Works</a>
          <a href="/hire" className="text-gray-700 font-medium hover:text-blue-600 transition">Hire</a>
          <a
            href="/contact"
            className="px-4 py-2 rounded-md font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition text-center"
          >
            Contact us
          </a>
        </div>
      )}
    </header>
    </>
  );
}

