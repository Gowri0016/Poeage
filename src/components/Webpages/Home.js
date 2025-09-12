import React, { useEffect, useState } from 'react';
import HeroImg from '../../assests/hero.png'; // replace with your illustration image
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Great <span className="text-cyan-600">Product</span> is <br />
            <span className="font-extrabold">built by great <span className="text-cyan-600">teams</span></span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            We help build and manage a team of world-class developers
            to bring your vision to life.
          </p>
          <motion.button
            onClick={() => navigate('/quotes')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md font-medium shadow-md hover:opacity-90 transition"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s get started!
          </motion.button>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={HeroImg} alt="Team working illustration" className="w-full max-w-md md:max-w-xl" />
        </motion.div>
      </div>
    </section>
  );
}
