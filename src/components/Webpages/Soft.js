import React from 'react';
import { Header } from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import {
  FaCube, FaBrain, FaCloudSun, FaShieldAlt, FaMicrochip, FaWrench,
  FaGlobe, FaRobot, FaSitemap, FaRocket,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Soft() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Professional Software Services",
      items: [
        { icon: <FaBrain />, title: "AI & Machine Learning", desc: "Intelligent automation, predictive analytics, and smart solutions." },
        { icon: <FaCloudSun />, title: "Cloud Solutions", desc: "Scalable cloud-native platforms and infrastructure management." },
        { icon: <FaShieldAlt />, title: "Cybersecurity Services", desc: "Advanced security protocols and threat prevention." },
        { icon: <FaMicrochip />, title: "IoT Integration", desc: "Seamless device connectivity and real-time monitoring." },
        { icon: <FaWrench />, title: "Low-Code Development", desc: "Rapid application development with minimal coding." },
      ]
    }
  ];

  const windowsSoftware = [
    {
      title: "Popular Windows Software & Tools",
      items: [
        { icon: <FaSitemap />, title: "Microsoft Office", desc: "Word, Excel, PowerPoint, Outlook for productivity." },
        { icon: <FaGlobe />, title: "Web Browsers", desc: "Edge, Chrome, Firefox for internet navigation." },
        { icon: <FaRobot />, title: "Development Tools", desc: "Visual Studio, SQL Server Management Studio for software development." },
        { icon: <FaRocket />, title: "Media Tools", desc: "VLC, Spotify, Adobe Photoshop for media and design." },
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
          <FaCube className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Professional Software & Tools
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Discover our range of professional services and essential software tools that drive innovation and productivity for businesses of all sizes.
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
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-2xl shadow-md mb-4">
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

        {/* Windows Software Section */}
        <div className="mt-24 px-6 md:px-12 lg:px-24 grid gap-12">
          {windowsSoftware.map((section, idx) => (
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
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl shadow mb-3">
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
          className="relative bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 mx-6 md:mx-24 mt-24 text-center text-white shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            Ready to Build the Future?
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            Collaborate with us to create interactive, innovative, and scalable software solutions tailored to your business growth.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 font-semibold bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow"
          >
            Start Your Project
          </button>
        </motion.div>

      </div>
      <Footer />
    </>
  );
}