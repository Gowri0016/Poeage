import React from 'react';
import { Header } from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import {
  FaLaptopCode, FaMobileAlt, FaPalette, FaCogs, FaCloudUploadAlt,
  FaShieldAlt, FaSearch, FaBug, FaRocket, FaChartLine, FaCodeBranch, FaGlobe
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Soft() {
  const navigate = useNavigate();

  const features = [
    { icon: <FaLaptopCode />, title: "Custom Web Development", desc: "Tailored websites & apps for unique business goals." },
    { icon: <FaMobileAlt />, title: "Responsive Web Design", desc: "Seamless experiences across desktop, tablet & mobile." },
    { icon: <FaPalette />, title: "UI/UX Design", desc: "Visually stunning & user-centric web interfaces." },
    { icon: <FaCogs />, title: "CMS Development", desc: "Flexible content management systems like WordPress & Headless CMS." },
    { icon: <FaCloudUploadAlt />, title: "Web Hosting & Deployment", desc: "Fast & reliable hosting with cloud integrations." },
    { icon: <FaShieldAlt />, title: "Web Security & Compliance", desc: "Robust security protocols & GDPR compliance." },
    { icon: <FaSearch />, title: "SEO Optimization", desc: "Boost visibility & search rankings with expert SEO strategies." },
    { icon: <FaBug />, title: "Web Testing & QA", desc: "Thorough testing for performance, compatibility & security." },
    { icon: <FaRocket />, title: "Performance Optimization", desc: "Lightning-fast websites optimized for speed & efficiency." },
    { icon: <FaChartLine />, title: "Analytics & Reporting", desc: "Track user behavior & site metrics with advanced tools." },
    { icon: <FaCodeBranch />, title: "API Integration", desc: "Connect with third-party services & automate workflows." },
    { icon: <FaGlobe />, title: "E-Commerce Solutions", desc: "Powerful online stores with secure payment systems." },
  ];

  return (
    <>
      <Header />
           {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-b-3xl shadow-lg"
        >
          <FaLaptopCode className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Professional Web Development Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Build fast, secure, and high-performing websites that captivate users and drive business results with cutting-edge web solutions.
          </p>
        
</motion.div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.7 }}
                className="group bg-gradient-to-br from-white to-white backdrop-blur-md border border-cyan-900/40 rounded-3xl shadow-2xl p-8 hover:scale-105 hover:rotate-[2deg] transition-transform duration-500 hover:border-indigo-400 hover:shadow-indigo-500/30"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full text-blue-500 border-4 border-blue-500 text-3xl shadow-lg mb-6 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-center text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-center text-gray-600 mb-5">
                  {feature.desc}
                </p>
                <button
                  onClick={() => navigate('/quotes')}
                  className="block mx-auto px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-500 hover:from-blue-500 hover:to-sky-500"
                >
                  Get Quote
                </button>
              </motion.div>
            ))}
          </div>
      <Footer />
    </>
  );
}