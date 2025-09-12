import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { FaCube, FaBrain, FaCloudSun, FaShieldAlt, FaMicrochip, FaWrench, FaGlobe, FaRobot, FaSitemap, FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Soft() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Next-Gen Software Services",
      items: [
        { icon: <FaBrain />, title: "AI & ML Innovation", desc: "Cutting-edge AI and ML solutions for smart automation and predictive insights." },
        { icon: <FaCloudSun />, title: "Cloud-Native Platforms", desc: "Highly scalable and secure cloud applications and infrastructure." },
        { icon: <FaShieldAlt />, title: "Cybersecurity & Compliance", desc: "Advanced security solutions ensuring protection and compliance." },
        { icon: <FaMicrochip />, title: "IoT & Smart Devices", desc: "Connected device solutions enabling real-time monitoring and control." },
        { icon: <FaWrench />, title: "Rapid Low-Code Development", desc: "Quickly deploy enterprise-grade apps with minimal coding." },
      ]
    }
  ];

  const tools = [
    {
      title: "Essential Software & Tools",
      items: [
        { icon: <FaSitemap />, title: "Collaboration Suites", desc: "Tools like Office 365, Teams for productivity and teamwork." },
        { icon: <FaGlobe />, title: "Web Navigation Tools", desc: "Browsers and internet tools optimized for speed and security." },
        { icon: <FaRobot />, title: "Development & Analytics", desc: "IDE, DB management and analytics tools for software creation." },
        { icon: <FaRocket />, title: "Creative & Media", desc: "High-performance media software for design, video, and music production." },
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -10 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7 } }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-b-3xl shadow-lg"
        >
          <FaCube className="w-20 h-20 mx-auto mb-6 animate-spin-slow" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Next-Generation Software & Tools
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Explore innovative, secure, and scalable software solutions designed for the future of business.
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, idx) => (
            service.items.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="p-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-3xl mb-4 shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.desc}
                  </p>
                  <button
                    onClick={() => navigate('/quotes')}
                    className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 shadow-md transition"
                  >
                    Get a Quote
                  </button>
                </div>
              </motion.div>
            ))
          ))}
        </motion.div>

        {/* Tools Section */}
        <div className="mt-24 px-6 md:px-12 lg:px-24 grid gap-12">
          {tools.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {section.items.map((tool, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-105">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-2xl shadow mb-3">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{tool.title}</h3>
                  <p className="text-gray-500 text-sm">{tool.desc}</p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 mx-6 md:mx-24 mt-24 text-center text-white shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            Build Innovative Solutions Today
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            Partner with us to create intelligent, scalable, and interactive software and tools for the modern business landscape.
          </p>
          <button
            onClick={() => navigate('/quotes')}
            className="px-8 py-3 font-semibold bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow"
          >
            Get Started
          </button>
        </motion.div>

      </div>
      <Footer />
    </>
  );
}