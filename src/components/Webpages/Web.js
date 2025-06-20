import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMobileAlt, FaLaptopCode, FaLock, FaBolt, FaCogs,
  FaPalette, FaRocket, FaSync, FaCodeBranch, FaChartLine,
} from 'react-icons/fa';
import Footer from './Footer';
import { Header } from './Header';

const features = [
  { title: 'Responsive Design', icon: <FaMobileAlt />, description: 'Adaptive to all screen sizes with pixel-perfect layout.' },
  { title: 'Custom UI/UX', icon: <FaPalette />, description: 'Tailored designs that reflect your brand’s personality.' },
  { title: 'Fast Performance', icon: <FaBolt />, description: 'Built with speed-focused frameworks and optimizations.' },
  { title: 'SEO Optimization', icon: <FaChartLine />, description: 'SEO-optimized structures that help you rank.' },
  { title: 'Secure Architecture', icon: <FaLock />, description: 'Security-first development to safeguard your data.' },
  { title: 'CMS Integration', icon: <FaCogs />, description: 'Connect your favorite CMS for dynamic content updates.' },
  { title: 'Progressive Web App (PWA)', icon: <FaRocket />, description: 'Installable, offline-ready web apps using latest tech.' },
  { title: 'Cross-browser Support', icon: <FaSync />, description: 'Reliable experiences across all major browsers.' },
  { title: 'Scalable Architecture', icon: <FaCodeBranch />, description: 'Ready to grow with modular, scalable systems.' },
  { title: 'Maintenance & Support', icon: <FaLaptopCode />, description: 'Ongoing support, bug fixes & feature expansions.' },
];

export default function Web() {
  return (
    <>
      <Header />
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-100 py-24 px-6 overflow-hidden min-h-screen text-gray-800">
        
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Decorative Blurs */}
        <div className="absolute w-[400px] h-[400px] bg-pink-300 opacity-20 rounded-full blur-3xl top-10 left-10 z-0 hidden md:block" />
        <div className="absolute w-[300px] h-[300px] bg-purple-300 opacity-30 rounded-full blur-2xl bottom-20 right-10 z-0 hidden md:block" />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 drop-shadow-md">
            Web Development Services
          </h1>
          <p className="mt-4 text-md md:text-lg text-gray-700">
            Crafting beautiful, scalable, and high-performing web platforms for your digital success.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-blue-100 shadow-xl transition hover:scale-[1.03] hover:shadow-2xl"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-4 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white text-2xl shadow-lg">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-center text-blue-900">{f.title}</h3>
              <p className="text-sm text-center text-gray-600 mt-2">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
