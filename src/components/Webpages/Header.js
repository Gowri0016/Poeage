import React, { useContext, useState, useRef, useEffect } from 'react';
import { DContext } from '../Datacontext/Datacontext';
import { FaCaretDown, FaBars, FaTimes, FaBriefcase, FaMicrophone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const { navbar } = useContext(DContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const capitalizeFirst = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  return (
    <header className="fixed z-30 w-full backdrop-blur-md bg-white/10 border-b border-cyan-400/20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 h-20">
        <a href="/" className="flex items-center gap-2">
          <motion.img
            src={navbar.logo}
            alt="Logo"
            className="h-12 drop-shadow-lg"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </a>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-8 text-cyan-200 font-medium">
          <a href="/" className="hover:text-cyan-400 transition transform hover:-translate-y-1">
            {capitalizeFirst(navbar.home)}
          </a>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <FaBriefcase className="text-lg" />
              {capitalizeFirst(navbar.menu)}
              <FaCaretDown />
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 bg-white/10 backdrop-blur-md border border-cyan-300/20 shadow-xl rounded-md py-2 w-52 z-10"
                >
                  <a href="/ai" className="block px-4 py-2 hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
                    AI
                  </a>
                  <a href="/web" className="block px-4 py-2 hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
                    Web Development
                  </a>
                  <a href="/appde" className="block px-4 py-2 hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
                    App Development
                  </a>
                  <a href="/soft" className="block px-4 py-2 hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>
                    Software Development
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

       
        

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-2xl text-cyan-200 focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-cyan-400/20 text-cyan-200 px-4 py-4 space-y-2"
          >
            <a href="/" className="block py-2 hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>
              {capitalizeFirst(navbar.home)}
            </a>
            <a href="/ai" className="block py-2 hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>
              AI
            </a>
            <a href="/web" className="block py-2 hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>
              Web Development
            </a>
            <a href="/appde" className="block py-2 hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>
              App Development
            </a>
            <a href="/soft" className="block py-2 hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>
              Software Development
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
