import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Notfound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">

      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent opacity-10 blur-3xl z-0 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* 404 Header */}
      <motion.h1 
        className="text-7xl sm:text-8xl font-black mb-4 z-10 drop-shadow-lg text-blue-400"
        initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
        animate={{ scale: 1.1, rotate: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 8 }}
      >
        404
      </motion.h1>

      {/* Subheading */}
      <motion.h2 
        className="text-xl sm:text-2xl mb-4 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p 
        className="mb-8 text-gray-400 max-w-md text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        The page you're looking for doesn't exist, or it has been moved.
      </motion.p>

      {/* Button Group with Staggered Animations */}
      <motion.div
        className="z-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Button 1 */}
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            to="/" 
            className="relative px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg overflow-hidden"
          >
            <span className="relative z-10">Go Back Home</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-400 opacity-40 blur-xl scale-110"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </Link>
        </motion.div>

        {/* Button 2 */}
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            to="/" 
            className="relative px-6 py-3 bg-transparent border-2 border-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-500 transition-all"
          >
            <span className="relative z-10">Take Me Home</span>
            <motion.span
              className="absolute inset-0 bg-blue-600 opacity-20 blur-xl scale-110"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </Link>
        </motion.div>

        {/* Button 3 */}
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            to="/" 
            className="relative px-6 py-3 bg-transparent border-2 border-pink-600 text-pink-600 font-semibold rounded-full shadow-md hover:bg-pink-500 hover:text-white transition-all"
          >
            <span className="relative z-10">Return to Safety</span>
            <motion.span
              className="absolute inset-0 bg-pink-400 opacity-30 blur-xl scale-110"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Notfound;
