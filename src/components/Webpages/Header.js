import React, { useState, useRef, useEffect } from 'react';
import { FaCaretDown, FaBars, FaTimes, FaBriefcase } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assests/Poeage_Logo_10.png';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const capitalizeFirst = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className="fixed z-30 w-full backdrop-blur-md bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 15, stiffness: 100 }}
    >
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 transition-all duration-300 ${
          scrolled ? 'h-12' : 'h-16'
        }`}
      >
        <motion.a
          href="/"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={Logo}
            alt="Logo"
            className="w-40 drop-shadow-md"
            whileHover={{ rotate: [0, -5, 0] }}
            transition={{ duration: 0.5 }}
          />
        </motion.a>

        {/* Desktop Nav (md and up) */}
        <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
          <motion.a
            href="/"
            className="nav-item"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {capitalizeFirst('home')}
          </motion.a>

          <div className="relative" ref={menuRef}>
            <motion.button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 nav-item"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaBriefcase className="text-base" />
              </motion.div>
              {capitalizeFirst('services')}
              <motion.div
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaCaretDown />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute top-full left-0 mt-3 bg-black/90 backdrop-blur-lg border border-cyan-300/30 shadow-xl rounded-md py-2 w-56 z-20"
                >
                  {[
                    { label: 'AI Development', path: '/ai' },
                    { label: 'Web Development', path: '/web' },
                    { label: 'App Development', path: '/appde' },
                    { label: 'Software Development', path: '/soft' },
                  ].map((item, index) => (
                    <motion.a
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2 text-sm hover:text-cyan-400 transition"
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.a
            href="/quotes"
            className="px-4 py-2 text-sm font-bold bg-none text-black rounded-full shadow hover:bg-white transition"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.a>
        </nav>

        {/* Mobile Menu Button (below md) */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-2xl text-cyan-200 focus:outline-none p-1 rounded-full bg-black/20"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-cyan-400/20 text-cyan-200 overflow-hidden"
          >
            <motion.div
              className="px-6 py-5 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[
                { label: 'Home', path: '/' },
                { label: 'AI Development', path: '/ai' },
                { label: 'Web Development', path: '/web' },
                { label: 'App Development', path: '/appde' },
                { label: 'Software Development', path: '/soft' },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.path}
                  className="block py-2 hover:text-cyan-400 transition"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="/quotes"
                className="block mt-4 text-center text-sm font-bold bg-cyan-400 text-black py-2 rounded-full shadow hover:bg-white transition"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)',
                }}
              >
                Get a Quote
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS */}
      <style>{`
        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, cyan, transparent);
          transition: width 0.3s ease;
        }
        .nav-item:hover::after {
          width: 100%;
        }
      `}</style>
    </motion.header>
  );
};