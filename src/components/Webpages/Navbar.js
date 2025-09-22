import React from 'react';
import { motion } from 'framer-motion';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Groups from './Groups';

// Page transition variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Navbar = () => {
  return (
    <>
      {/* Background overlay for effects */}
      <div className="fixed w-screen h-screen overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-purple-100/40 to-pink-100/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Page content */}
      <motion.div
        className="relative z-20 w-full overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="w-full" variants={fadeInUp}>
          <Header />
        </motion.div>

        <motion.div className="w-full" variants={fadeInUp}>
          <Home />
        </motion.div>


        <motion.div className="w-full -mt-28" variants={fadeInUp}>
          <Groups />
        </motion.div>

        <motion.div className="w-full" variants={fadeInUp}>
          <Footer />
        </motion.div>
      </motion.div>
    </>
  );
};
