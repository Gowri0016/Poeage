import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaRobot, FaLaptopCode, FaMobileAlt, FaToolbox, FaQuoteLeft,
} from 'react-icons/fa';

const services = [
  {
    title: 'AI Development',
    icon: <FaRobot />,
    path: '/ai',
    gradient: 'from-cyan-400 to-purple-500',
  },
  {
    title: 'Web Development',
    icon: <FaLaptopCode />,
    path: '/web',
    gradient: 'from-green-400 to-blue-500',
  },
  {
    title: 'App Development',
    icon: <FaMobileAlt />,
    path: '/appde',
    gradient: 'from-pink-400 to-red-500',
  },
  {
    title: 'Software Tool Development',
    icon: <FaToolbox />,
    path: '/soft',
    gradient: 'from-yellow-400 to-orange-500',
  },
];

const testimonials = [
  {
    name: 'Shankar K.',
    quote: 'Poeage turned our idea into a powerful web platform. Their tech and support are unmatched!',
  },
  {
    name: 'Preethika SV.',
    quote: 'From day one, they’ve delivered more than expected. Truly a professional team!',
  },
  {
    name: 'Shreenithy M.',
    quote: 'Excellent app experience—visually appealing, fast, and perfectly tailored to our needs.',
  },
];

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-sky-50 to-blue-100 min-h-screen text-gray-800 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.03)_1px,_transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-pink-300 opacity-30 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-200 opacity-30 blur-[100px] rounded-full z-0" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-20 drop-shadow-md"
      >
        Explore Our Core Services
      </motion.h1>

      {/* Services Grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-12 px-6 mb-24">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            onClick={() => navigate(service.path)}
            className="cursor-pointer relative group w-[280px] sm:w-[300px] rounded-[30px] p-6 bg-white border border-gray-200 shadow-xl backdrop-blur-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} shadow-md flex items-center justify-center text-white text-2xl`}>
              {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Click to explore our {service.title.toLowerCase()} solutions.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* About Poeage Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 mb-24 z-10"
      >
        <div className="rounded-3xl bg-white/70 shadow-xl p-8 md:p-12 border border-gray-100 backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
            About <span className="text-sky-600">Poeage Tech</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
            Founded on <strong>October 31, 2023</strong>, Poeage IT Solution is a passionate digital company building impactful web, app, and AI solutions. We combine innovation with industry experience to help your business succeed through scalable, high-quality software products.
          </p>
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <FaQuoteLeft className="text-sky-500 text-2xl mb-3" />
              <p className="italic text-gray-700">"{t.quote}"</p>
              <p className="mt-4 font-semibold text-gray-900">– {t.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};