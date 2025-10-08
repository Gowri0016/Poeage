import React from 'react';
import { motion } from 'framer-motion';
import Builders from '../../assests/5.png';
import Hub from '../../assests/1.png';
import Web from '../../assests/3.png';
import Header from './Header';
import Footer from './Footer';

export default function OurCompany() {
  const companies = [
    {
      name: 'Poeage Builders',
      img: Builders,
      link: 'https://poeagebuilders.in',
      desc: 'Expert construction and architecture solutions blending innovation, quality, and reliability.',
      gradient: 'from-amber-400 via-orange-500 to-red-500',
    },
    {
      name: 'Poeage Hub',
      img: Hub,
      link: 'https://poeage-hub.vercel.app/',
      desc: 'A futuristic digital commerce platform built with precision and elegant animation — connecting ideas, services, and businesses seamlessly.',
      gradient: 'from-blue-500 via-cyan-400 to-sky-400',
    },
    {
      name: 'Poeage Web Solutions',
      img: Web,
      link: 'https://pws-rouge-five.vercel.app/',
      desc: 'Empowering global brands through cutting-edge web design, scalable digital products, and smart technology experiences.',
      gradient: 'from-fuchsia-500 via-purple-500 to-indigo-500',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.25, duration: 0.8, ease: 'easeOut' } }),
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-900 flex flex-col items-center px-4 md:px-8 py-10 md:py-16 overflow-hidden relative">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-10 md:mb-16 text-center bg-cyan-600 bg-clip-text text-transparent drop-shadow-sm"
        >
          Our Companies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl">
          {companies.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.04, y: -5 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl p-6 md:p-8 flex flex-col items-center text-center border border-gray-100 hover:border-transparent hover:ring-4 hover:ring-blue-100 transition-all duration-500 overflow-hidden group"
            >
              <motion.img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 md:w-28 md:h-28 object-contain mb-5 drop-shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              />

              <h3 className="text-xl md:text-2xl font-semibold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {item.name}
              </h3>

              <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed max-w-xs">
                {item.desc}
              </p>

              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white px-4 md:px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Visit Website
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full"
              animate={{ y: [0, -80, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 4 + Math.random() * 3, delay: i * 0.2 }}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}