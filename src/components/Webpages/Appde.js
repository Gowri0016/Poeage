import React from 'react';
import { Header } from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import {
  FaAndroid, FaApple, FaTabletAlt, FaPalette, FaSyncAlt,
  FaCloudUploadAlt, FaShieldAlt, FaSearch, FaBug, FaRocket,
  FaCogs, FaChartLine
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Soft() {
  const navigate = useNavigate();

  const features = [
    { icon: <FaAndroid />, title: "Android App Development", desc: "Build scalable, feature-rich apps for Android devices." },
    { icon: <FaApple />, title: "iOS App Development", desc: "Create sleek, high-performance iOS apps for Apple users." },
    { icon: <FaTabletAlt />, title: "Cross-Platform Apps", desc: "Develop apps for Android & iOS using a single codebase." },
    { icon: <FaPalette />, title: "UI/UX Design", desc: "Craft intuitive, beautiful app interfaces that engage users." },
    { icon: <FaSyncAlt />, title: "App Maintenance & Support", desc: "Keep your apps updated, secure & running smoothly." },
    { icon: <FaCloudUploadAlt />, title: "Backend & API Integration", desc: "Connect apps to cloud services & databases seamlessly." },
    { icon: <FaShieldAlt />, title: "App Security Solutions", desc: "Ensure data protection with advanced app security layers." },
    { icon: <FaSearch />, title: "App Store Optimization (ASO)", desc: "Maximize app visibility & downloads via ASO strategies." },
    { icon: <FaBug />, title: "App Testing & QA", desc: "Deliver flawless apps through rigorous testing & QA processes." },
    { icon: <FaRocket />, title: "App Launch & Scaling", desc: "Deploy apps efficiently & prepare them for rapid growth." },
    { icon: <FaCogs />, title: "Custom App Development", desc: "Tailored app solutions for unique business needs & workflows." },
    { icon: <FaChartLine />, title: "Analytics & Performance Monitoring", desc: "Track user behavior & optimize app performance continuously." },
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10% left-5% w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
          <div className="absolute top-20% right-10% w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute bottom-10% left-15% w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              Advanced App Development
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
              Transform your business ideas into innovative, high-quality mobile applications built for performance and growth.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Card accent element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                
                <div className="p-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 text-xl mb-5 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {feature.desc}
                  </p>
                  <button
                    onClick={() => navigate('/quotes')}
                    className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform group-hover:scale-105"
                  >
                    Get Quote
                  </button>
                </div>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-5">Ready to Build Your Next App?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Let's discuss your project and create a custom solution that meets your business needs and exceeds expectations.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Start Your Project
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}