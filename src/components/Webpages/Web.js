import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaCogs, FaRocket } from 'react-icons/fa';

export default function Soft() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "E-Commerce Development",
      desc: "Build secure and scalable online stores with seamless checkout experience.",
      img: "https://admin.wac.co/uploads/What_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg"
    },
    {
      icon: <FaMobileAlt />,
      title: "Dynamic Websites",
      desc: "Interactive websites with dynamic content management and real-time updates.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaPalette />,
      title: "Dashboard & Admin Panels",
      desc: "Powerful dashboards for analytics, reporting and admin management.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaCogs />,
      title: "Portfolio Websites",
      desc: "Creative portfolio websites showcasing projects, services and brand identity.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaRocket />,
      title: "Corporate & Business Sites",
      desc: "Professional business websites with modern designs and high performance.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-20 md:py-28 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-b-3xl shadow-lg"
      >
        <FaLaptopCode className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Web Development Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Explore our 5 unique web development services including e-commerce, dynamic websites, dashboards, portfolios, and corporate sites.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="mt-4 md:mt-6 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold text-white bg-black hover:bg-gray-800 shadow-md"
        >
          Contact Us
        </button>
      </motion.div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-500 text-2xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {service.desc}
              </p>
              <button
                onClick={() => navigate('/quotes')}
                className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-md"
              >
                Continue
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-12 md:py-16 text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          Make Your Solution Real
        </h2>
        <button
          onClick={() => navigate('/contact')}
          className="px-6 md:px-8 py-2 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg"
        >
          Contact Us
        </button>
      </div>

      <Footer />
    </>
  );
}