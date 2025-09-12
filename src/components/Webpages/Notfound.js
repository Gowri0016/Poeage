import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-indigo-900 via-black to-indigo-900 flex flex-col items-center justify-center text-white relative overflow-hidden">

      {/* Background image relevant to software or tech */}
      <img 
        src="https://img.freepik.com/premium-vector/operating-system-404-error-employees-work-with-laptop-warning-symbols-wrong-web-page-website-malfunction-broken-software-confused-tiny-people-caution-digital-windows-vector-concept_533410-3373.jpg" 
        alt="Software background" 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-9xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          404
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl text-gray-200 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Ooops! The page you are looking for doesn’t exist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <Link
            to="/"
            className="relative inline-block px-8 py-3 font-semibold rounded-full border-2 border-cyan-400 hover:border-cyan-300 transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10 text-cyan-300 hover:text-white">Return Home</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 opacity-0 hover:opacity-70 rounded-full"
              whileHover={{ scale: 1.1, opacity: 0.7 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}