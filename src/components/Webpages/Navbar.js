import React from 'react';
import backgroundVideo from '../../assest/7020018_Particle_Dot_3840x2160.mp4';
import { Header } from './Header';
import { Home } from './Home';
import { Services } from './Services';
import Getquotes from './Getquotes';
import Footer from './Footer';
import { motion } from 'framer-motion';

// Fade-in animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export const Navbar = () => {
  return (
    <>
      {/* Background Video Layer */}
      <div className="fixed w-screen h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-900 to-black opacity-95 z-10" />
      </div>

      {/* Main Content Sections with Animations */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
      >
        <Header />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        <Home />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={2}
      >
        <Services />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={3}
      >
        <Getquotes />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={4}
      >
        <Footer />
      </motion.div>
    </>
  );
};
