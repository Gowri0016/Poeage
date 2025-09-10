import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  FaLightbulb, FaClock, FaHandsHelping, FaUsers, FaCogs,
  FaGlobe, FaBuilding, FaChartLine, FaShieldAlt,
  FaShoppingCart, FaLock, FaRocket
} from 'react-icons/fa';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' }
  })
};

const services = [
  {
    title: 'E-Commerce Solutions',
    icon: <FaShoppingCart size={28} />, 
    path: '/ecommerce',
    gradient: 'from-orange-400 via-red-500 to-pink-600',
    description: 'Full-stack platforms to power online sales with secure payments and modern UX.',
  },
  {
    title: 'Cybersecurity',
    icon: <FaLock size={28} />, 
    path: '/security',
    gradient: 'from-gray-700 via-gray-800 to-black',
    description: 'Protecting digital assets with cutting-edge security protocols and monitoring.',
  },
  {
    title: 'Startup Launchpad',
    icon: <FaRocket size={28} />, 
    path: '/startup',
    gradient: 'from-pink-500 via-purple-600 to-indigo-700',
    description: 'Helping startups from idea to launch with technology, branding, and strategy.',
  },
];

const uniquePoints = [
  { icon: <FaLightbulb size={22} />, title: 'Deep Experience', text: 'Strong foundation in web technologies with real-world success.' },
  { icon: <FaCogs size={22} />, title: 'Tailored Tools', text: 'Smart, scalable digital products that align with your goals.' },
  { icon: <FaUsers size={22} />, title: 'Human-Centered', text: 'Designed with empathy to serve real users effectively.' },
  { icon: <FaClock size={22} />, title: 'Precision & Timeliness', text: 'On-time delivery without compromising quality.' },
  { icon: <FaHandsHelping size={22} />, title: 'Long-Term Support', text: 'Ongoing improvements and scaling support.' },
];

const companyHighlights = [
  { icon: <FaBuilding size={28} />, title: 'Our Foundation', text: 'Poeage Technology was founded to redefine IT solutions in Tamil Nadu with a vision for global innovation.' },
  { icon: <FaGlobe size={28} />, title: 'Global Reach', text: 'Serving businesses across India and expanding globally with cutting-edge digital services.' },
  { icon: <FaChartLine size={28} />, title: 'Growth & Projects', text: 'Successfully delivered 50+ projects across industries, empowering startups and enterprises.' },
  { icon: <FaShieldAlt size={28} />, title: 'Trusted & Secure', text: 'Commitment to security, transparency, and building long-term trust with our clients.' },
];

export const Services = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 overflow-hidden">

      {/* Header */}
      <motion.h1
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
        variants={fadeUp}
        className="text-3xl md:text-5xl font-extrabold text-center mb-12 md:mb-20 text-gray-900"
      >
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 animate-gradient">Premium Services</span>
      </motion.h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="relative p-6 md:p-8 rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg group cursor-pointer overflow-hidden border border-gray-100 hover:border-blue-400/50 hover:shadow-sky-300/40 transition-all"
            onClick={() => navigate(service.path)}
          >
            <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl text-white mb-5 md:mb-6 bg-gradient-to-r ${service.gradient} shadow-lg group-hover:scale-110 transform transition-transform`}>{service.icon}</div>
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
            <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-3 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Unique Points */}
      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-6 md:px-12 max-w-5xl mx-auto">
        {uniquePoints.map((point, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-purple-200 transition-shadow border border-gray-100"
          >
            <div className="text-purple-600 flex-shrink-0">{point.icon}</div>
            <div>
              <h4 className="font-semibold text-gray-900 text-base md:text-xl">{point.title}</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{point.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Company Highlights */}
      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 px-6 md:px-12 max-w-6xl mx-auto">
        {companyHighlights.map((highlight, i) => (
          <motion.div
            key={i}
            className="p-6 md:p-8 rounded-2xl shadow-xl bg-gradient-to-r from-white/90 to-purple-50 backdrop-blur-md flex items-start gap-4 md:gap-6 border border-gray-100 hover:shadow-blue-200"
          >
            <div className="text-sky-600 flex-shrink-0">{highlight.icon}</div>
            <div>
              <h4 className="text-lg md:text-2xl font-semibold text-gray-900">{highlight.title}</h4>
              <p className="text-sm md:text-base text-gray-700 mt-2 leading-relaxed">{highlight.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
