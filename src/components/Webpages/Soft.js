import React from 'react';
import { Header } from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import {
  FaBrain, FaCloudSun, FaShieldAlt, FaMicrochip, FaHandshake,
  FaGlobe, FaRobot, FaChartPie, FaWrench, FaSitemap, FaBug, FaRocket,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Soft() {
  const navigate = useNavigate();

  const features = [
    { icon: <FaBrain />, title: "AI-powered Solutions", desc: "Integrate artificial intelligence for smarter, automated systems." },
    { icon: <FaCloudSun />, title: "Cloud-native Platforms", desc: "Fully scalable applications built natively for the cloud." },
    { icon: <FaShieldAlt />, title: "Advanced Security Layers", desc: "Enhanced protection protocols and threat detection systems." },
    { icon: <FaMicrochip />, title: "IoT Integrations", desc: "Seamlessly connect devices and sensors for real-time monitoring." },
    { icon: <FaHandshake />, title: "B2B Automation Tools", desc: "Optimize and automate B2B transactions and processes." },
    { icon: <FaGlobe />, title: "Global SaaS Solutions", desc: "Launch SaaS products with multi-region support & compliance." },
    { icon: <FaRobot />, title: "RPA Implementations", desc: "Deploy robotic process automation for repetitive workflows." },
    { icon: <FaChartPie />, title: "AI-powered Analytics", desc: "Gain deep business insights via AI-based data analytics." },
    { icon: <FaWrench />, title: "Low-code Development", desc: "Empower rapid development through low-code/no-code platforms." },
    { icon: <FaSitemap />, title: "API-first Architecture", desc: "Future-proof your apps with robust, API-centric design." },
    { icon: <FaBug />, title: "Testing & QA Automation", desc: "Ensure flawless software through automated QA pipelines." },
    { icon: <FaRocket />, title: "Startup Tech Accelerators", desc: "Launch your startup faster with MVPs & growth-ready tech stacks." },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateY: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10% left-5% w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10% right-5% w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute top-50% left-50% transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        {/* Floating 3D shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ y: -100, rotate: 0 }}
            animate={{ y: 40, rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-10% w-20 h-20 border-4 border-cyan-400 border-opacity-30 rounded-lg"
          ></motion.div>
          <motion.div 
            initial={{ y: -150, rotate: 45 }}
            animate={{ y: 80, rotate: 405 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-15% w-16 h-16 border-4 border-purple-400 border-opacity-30 rounded-full"
          ></motion.div>
          <motion.div 
            initial={{ y: -200, rotate: -45 }}
            animate={{ y: 100, rotate: 315 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-30% w-12 h-12 border-4 border-blue-400 border-opacity-30 rotate-45"
          ></motion.div>
        </div>

        <div className="relative z-10 py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              3D-Inspired Software Solutions
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
              Experience futuristic, immersive software solutions designed to accelerate innovation and elevate your digital presence.
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
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gray-800 bg-opacity-40 rounded-2xl overflow-hidden p-8 border border-cyan-500 border-opacity-20 hover:border-cyan-400 hover:border-opacity-50 transition-all duration-500 shadow-lg hover:shadow-2xl"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* 3D effect edge highlights */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-80"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-2xl shadow-lg mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-6">
                    {feature.desc}
                  </p>
                  <button
                    onClick={() => navigate('/quotes')}
                    className="block mx-auto px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Get Quote
                  </button>
                </div>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 to-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* 3D Call to Action Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-20 text-center bg-gray-800 bg-opacity-40 rounded-2xl p-10 border border-cyan-500 border-opacity-30 shadow-xl relative overflow-hidden"
            style={{ 
              transformStyle: 'preserve-3d',
            }}
          >
            {/* 3D effect for CTA */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-30 blur-lg"></div>
            <div className="absolute inset-0 rounded-2xl border border-cyan-400 border-opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-5">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Let's create cutting-edge software solutions that propel your business into the future with our 3D-inspired development approach.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3.5 font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Start Your Project
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}