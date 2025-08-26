import React from 'react';
import { motion } from 'framer-motion';
import hubImage from '../../assests/1.png';
import webImage from '../../assests/3.png';
import buildersImage from '../../assests/5.png';
import itImage from '../../assests/6.png';

export default function Groups() {
  const companies = [
    {
      title: 'Poeage IT Solution',
      desc: 'Innovative IT solutions that transform businesses through technology-driven strategies.',
      img: itImage,
      link: 'https://poeage-it-solution.vercel.app/',
      theme: 'from-blue-400 to-indigo-500'
    },
    {
      title: "Poeage Builder's",
      desc: 'Building the future with modern, sustainable, and innovative construction projects.',
      img: buildersImage,
      link: 'https://poeageitsolution.vercel.app/',
      theme: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Poeage Hub',
      desc: 'A central hub fostering collaboration, creativity, and innovation across industries.',
      img: hubImage,
      link: 'https://poeage-hub.vercel.app/',
      theme: 'from-pink-400 to-rose-500'
    },
    {
      title: 'Poeage Web Services',
      desc: 'Delivering cutting-edge web development, cloud integration, and scalable digital solutions.',
      img: webImage,
      link: 'https://pws-rouge-five.vercel.app/',
      theme: 'from-yellow-400 to-orange-500'
    },
  ];

  return (
    <div className="mt-20 bg-gradient-to-br from-gray-50 to-gray-200 py-14 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-4xl lg:text-5xl font-light text-center mb-12 md:mb-16 text-slate-900"
      >
        Our Group of Companies
      </motion.h2>

      {/* Company Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {companies.map((branch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, type: 'spring', stiffness: 80 }}
            viewport={{ once: true }}
            className="relative group p-6 md:p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center gap-4 hover:shadow-2xl"
          >
            {/* Background animation */}
            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${branch.theme} opacity-0 group-hover:opacity-20 blur-2xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            />

            {/* Company Image */}
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1 }} className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md relative z-10">
              <img src={branch.img} alt={branch.title} className="w-full h-full object-cover" />
            </motion.div>

            {/* Title */}
            <h3 className="text-base md:text-lg lg:text-xl font-bold tracking-wide text-slate-800 relative z-10">
              {branch.title}
            </h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-sm md:text-base leading-relaxed relative z-10"
            >
              {branch.desc}
            </motion.p>

            {/* Button */}
            <motion.a
              href={branch.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 md:mt-4 cursor-pointer px-3 py-2 md:px-4 md:py-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition relative z-10 text-sm md:text-base"
            >
              Visit Website
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
