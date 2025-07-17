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

  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-transparent min-h-screen">
      
        <div className="relative z-10 py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-center text-black bg-clip-text  mb-8"
          >
            3D-inspired Software Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-gray-600 text-lg md:text-xl mb-16"
          >
            Experience futuristic, immersive software solutions designed to accelerate innovation and elevate your digital presence.
          </motion.p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.7 }}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-cyan-500/40 rounded-3xl shadow-2xl p-8 hover:scale-105 hover:rotate-[2deg] transition-transform duration-500 hover:border-cyan-400 hover:shadow-cyan-500/30"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full text-blue-500 border-4 border-blue-500 text-3xl shadow-lg mb-6 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-center text-black mb-3">
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
        </div>
      </div>
      <Footer />
    </>
  );
}
 