import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Pro from '../../assets/logo.png';
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

  const cardMotion = {
    initial: { opacity: 0, y: 60, rotate: -2 },
    whileInView: { opacity: 1, y: 0, rotate: 0 },
    transition: (i) => ({ delay: i * 0.15, duration: 0.7, type: 'spring' }),
  };

  return (
    <section className="relative top-20 py-24 min-h-screen bg-white text-gray-800 overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Decorative Balls */}
      <div className="absolute w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse z-0" />
      <div className="absolute w-72 h-72 bg-red-200 opacity-30 rounded-full blur-2xl top-[60%] left-[70%] animate-bounce z-0" />
      <div className="absolute w-60 h-60 bg-cyan-300 opacity-30 rounded-full blur-2xl bottom-20 right-10 animate-ping z-0" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-20"
      >
        Explore Our Development Services
      </motion.h1>

      {/* Service Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-12 px-6 mb-24">
        {services.map((service, i) => (
        <motion.div
  key={i}
  initial={{ x: -100, opacity: 0, skew: 8 }}
  whileInView={{ x: 0, opacity: 1, skew: 0 }}
  transition={{ type: 'spring', stiffness: 100, delay: i * 0.2  }}
  viewport={{ once: true }}
  onClick={() => navigate(service.path)}
  whileHover={{ scale: 1.1, rotate: 0.5 }}
  className="cursor-pointer w-[270px] sm:w-[300px] rounded-[30px] p-6 backdrop-blur-xl border border-gray-200 bg-white shadow-lg transition-all duration-500"
>
  
            <div
              className={`absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} shadow-md flex items-center justify-center text-white text-2xl`}
            >
              {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Click to explore our {service.title.toLowerCase()} solutions.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-24 px-6"
      >
        <div className="bg-gradient-to-r from-white to-cyan-50 shadow-xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              About <span className="text-cyan-600">Poeage IT Solution</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Founded on <strong>October 31, 2023</strong>, Poeage IT Solution is dedicated to delivering cutting-edge web, app, and AI solutions with creativity and precision.
              <br className="hidden sm:block" />
              Our mission is to empower businesses through smart, scalable digital transformation.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 shadow-xl rounded-xl border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-cyan-500 text-2xl mb-3" />
              <p className="text-gray-700 italic">"{t.quote}"</p>
              <p className="mt-4 font-semibold text-gray-900">– {t.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
