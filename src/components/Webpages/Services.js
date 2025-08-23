import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  FaRobot, FaLaptopCode, FaMobileAlt, FaToolbox,
  FaLightbulb, FaClock, FaHandsHelping, FaUsers, FaCogs, FaQuoteLeft
} from 'react-icons/fa';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
};

const float = {
  hidden: { y: 0 },
  show: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
};

const services = [
  {
    title: 'AI Development',
    icon: <FaRobot size={28} />,
    path: '/ai',
    gradient: 'from-cyan-400 to-purple-500',
    description: 'Building intelligent systems to automate, optimize, and enhance decision-making.',
  },
  {
    title: 'Web Development',
    icon: <FaLaptopCode size={28} />,
    path: '/web',
    gradient: 'from-green-400 to-blue-500',
    description: 'Crafting scalable, high-performance websites with stunning UI and UX.',
  },
  {
    title: 'App Development',
    icon: <FaMobileAlt size={28} />,
    path: '/appde',
    gradient: 'from-pink-400 to-red-500',
    description: 'Delivering fast, responsive, and user-friendly mobile applications.',
  },
  {
    title: 'Software Tools',
    icon: <FaToolbox size={28} />,
    path: '/soft',
    gradient: 'from-yellow-400 to-orange-500',
    description: 'Designing custom tools to boost productivity and streamline workflows.',
  },
];

const testimonials = [
  { name: 'Shankar K.', quote: 'Poeage turned our idea into a powerful web platform. Their tech and support are unmatched!' },
  { name: 'Preethika SV.', quote: 'From day one, they delivered more than expected. Truly a professional team!' },
  { name: 'Shreenithi KM.', quote: 'Excellent app experience—visually appealing, fast, and perfectly tailored to our needs.' },
];

const uniquePoints = [
  { icon: <FaLightbulb size={22} />, title: 'Deep Experience', text: 'Strong foundation in web technologies with real-world success.' },
  { icon: <FaCogs size={22} />, title: 'Tailored Tools', text: 'Smart, scalable digital products that align with your goals.' },
  { icon: <FaUsers size={22} />, title: 'Human-Centered', text: 'Designed with empathy to serve real users effectively.' },
  { icon: <FaClock size={22} />, title: 'Precision & Timeliness', text: 'On-time delivery without compromising quality.' },
  { icon: <FaHandsHelping size={22} />, title: 'Long-Term Support', text: 'Ongoing improvements and scaling support.' },
];

export const Services = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 overflow-hidden">
      {/* Header */}
      <motion.h1
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        variants={fadeUp}
        className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-gray-800"
      >
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Services</span>
      </motion.h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={fadeUp}
            custom={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 md:p-8 rounded-2xl shadow-lg bg-white group cursor-pointer flex flex-col items-start"
            onClick={() => navigate(service.path)}
          >
            <motion.div variants={float} animate="show" className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full text-white mb-4 bg-gradient-to-r ${service.gradient}`}>
              {service.icon}
            </motion.div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-purple-600">{service.title}</h3>
            <p className="text-sm md:text-base text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Unique Points */}
      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10 max-w-4xl mx-auto">
        {uniquePoints.map((point, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={fadeUp}
            custom={i}
            className="flex items-start gap-4 bg-white/80 backdrop-blur-md p-5 md:p-6 rounded-xl shadow"
          >
            <div className="text-purple-600 flex-shrink-0">{point.icon}</div>
            <div>
              <h4 className="font-semibold text-gray-900 text-base md:text-lg">{point.title}</h4>
              <p className="text-sm md:text-base text-gray-600">{point.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-16 md:mt-20 max-w-xl mx-auto text-center px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={fadeUp}
          key={index}
          className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 md:p-8 rounded-2xl shadow-lg"
        >
          <FaQuoteLeft className="text-2xl md:text-3xl text-purple-600 mx-auto mb-4" />
          <p className="text-base md:text-lg text-gray-700 italic">"{testimonials[index].quote}"</p>
          <h4 className="mt-4 font-bold text-purple-700 text-sm md:text-base">- {testimonials[index].name}</h4>
        </motion.div>
      </div>
    </section>
  );
};
