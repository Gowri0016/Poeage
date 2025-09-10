import React from 'react';
import { Header } from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import {
  FaMobileAlt, FaBrain, FaCloud, FaShieldAlt, FaRobot, FaChartLine,
  FaMicrochip, FaDatabase, FaLanguage, FaCogs,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function AIService() {
  const navigate = useNavigate();

  const services = [
    {
      title: "AI Development Services",
      items: [
        { icon: <FaBrain />, title: "Machine Learning Models", desc: "Custom ML models for prediction, automation, and insights." },
        { icon: <FaRobot />, title: "Intelligent Chatbots", desc: "AI-powered bots for customer support, sales, and automation." },
        { icon: <FaLanguage />, title: "Natural Language Processing", desc: "Enable systems to understand, process, and generate human language." },
        { icon: <FaCloud />, title: "AI Cloud Integration", desc: "Scalable cloud-based AI infrastructure and deployment." },
        { icon: <FaShieldAlt />, title: "AI Security Solutions", desc: "Protect AI systems with robust data security and compliance." },
        { icon: <FaDatabase />, title: "Big Data Analytics", desc: "AI-driven data analysis to uncover trends and insights." },
        { icon: <FaChartLine />, title: "Predictive Analytics", desc: "Forecast business trends and customer behavior with precision." },
        { icon: <FaMicrochip />, title: "IoT & AI Integration", desc: "Smart IoT solutions powered by AI for real-time decision-making." },
        { icon: <FaCogs />, title: "AI Consulting & Strategy", desc: "Tailored AI adoption strategies for businesses." },
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-b-3xl shadow-lg"
        >
          <FaMobileAlt className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            App Development Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empower your business with cutting-edge mobile and web applications designed to enhance user experience and drive growth.
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="mt-16 px-6 md:px-12 lg:px-24 grid gap-12">
          {services.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {section.items.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-2xl shadow-md mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 mb-4">{feature.desc}</p>
                  <button
                    onClick={() => navigate('/quotes')}
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Get Quote
                  </button>
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
          className="relative bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl p-12 mx-6 md:mx-24 mt-24 text-center text-white shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            Ready to Transform Your Business with App?
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            Let's collaborate to create innovative applications that drive success and deliver exceptional user experiences.

          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 font-semibold bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow"
          >
            Contact Us
          </button>
        </motion.div>

      </div>
      <Footer />
    </>
  );
}