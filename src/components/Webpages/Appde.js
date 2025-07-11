import React from 'react';
import { Header } from './Header';
import Footer from './Footer';
import Bg from '../../assests/back.png';
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

  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-transparent min-h-screen">
        {/* Background Image */}
        <div className="fixed inset-0 z-[-20]">
          <img src={Bg} alt="Background" className="w-full h-full object-cover" />
        </div>
        {/* Dark overlay */}
        <div className="fixed inset-0 bg-black/60 -z-10" />

        <div className="relative z-10 py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8"
          >
            Advanced App Development Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-gray-300 text-lg md:text-xl mb-16"
          >
            Transform your business ideas into innovative, high-quality mobile applications built for performance and growth.
          </motion.p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.7 }}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-cyan-900/40 rounded-3xl shadow-2xl p-8 hover:scale-105 hover:rotate-[2deg] transition-transform duration-500 hover:border-indigo-400 hover:shadow-indigo-500/30"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white text-3xl shadow-lg mb-6 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-center text-cyan-300 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-center text-gray-300 mb-5">
                  {feature.desc}
                </p>
                <button
                  onClick={() => navigate('/quotes')}
                  className="block mx-auto px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md hover:scale-105 transition"
                >
                  Get Quote
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
