import React from 'react';
import { Header } from './Header';
import Footer from './Footer';
import Bg from '../../assests/back.png';
import { motion } from 'framer-motion';
import {
  FaBrain, FaRobot, FaCloud, FaCogs, FaLock, FaEye,
  FaChartLine, FaNetworkWired, FaSearch, FaMicrochip, FaUserSecret, FaRocket
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Soft() {
  const navigate = useNavigate();

  const features = [
    { icon: <FaBrain />, title: "AI Model Development", desc: "Custom machine learning models tailored to your business challenges." },
    { icon: <FaRobot />, title: "Robotic Process Automation (RPA)", desc: "Automate repetitive tasks with cutting-edge AI-driven bots." },
    { icon: <FaCloud />, title: "AI Cloud Integration", desc: "Deploy AI models at scale with secure cloud environments." },
    { icon: <FaCogs />, title: "AI-Driven Automation", desc: "Streamline operations using intelligent automation solutions." },
    { icon: <FaLock />, title: "AI Security Systems", desc: "Advanced threat detection & cybersecurity powered by AI." },
    { icon: <FaEye />, title: "Computer Vision Solutions", desc: "Transform visual data into actionable insights with AI vision tech." },
    { icon: <FaChartLine />, title: "Predictive Analytics", desc: "Anticipate trends and make smarter decisions with predictive AI." },
    { icon: <FaNetworkWired />, title: "Natural Language Processing (NLP)", desc: "Powerful language models for chatbots, analysis & automation." },
    { icon: <FaSearch />, title: "AI-Powered Search Engines", desc: "Deliver faster, smarter, and more relevant search experiences." },
    { icon: <FaMicrochip />, title: "Edge AI Solutions", desc: "Deploy AI models on devices for real-time, on-the-edge processing." },
    { icon: <FaUserSecret />, title: "AI Ethics & Governance", desc: "Responsible AI frameworks for fairness, transparency & compliance." },
    { icon: <FaRocket />, title: "AI Innovation Labs", desc: "R&D partnerships for pioneering AI prototypes & emerging technologies." },
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
            Futuristic AI Development Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-gray-300 text-lg md:text-xl mb-16"
          >
            Unlock the potential of artificial intelligence with cutting-edge solutions designed to propel your business into the future.
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
