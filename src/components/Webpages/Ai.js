import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import {
  FaBrain, FaRobot, FaCloud, FaCogs, FaLock, FaEye,
  FaChartLine, FaNetworkWired, FaSearch, FaMicrochip, FaUserSecret, FaRocket, FaLaptopCode
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Soft() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

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

        <div className="relative z-10  max-w-full mx-auto">
              {/* Hero Section */}
                 <motion.div
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1 }}
                   className="text-center py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-b-3xl shadow-lg"
                 >
                   <FaBrain className="w-20 h-20 mx-auto mb-4" />
                   <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                     AI Development Services
                   </h1>
                   <p className="text-lg md:text-xl max-w-3xl mx-auto">
                     Build fast, secure, and high-performing websites that captivate users and drive business results with cutting-edge web solutions.
                   </p>
  
            
           
            
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100 overflow-hidden"
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <motion.div 
                  className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-2xl shadow-lg mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-lg font-semibold text-center text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-center text-gray-600 mb-6">
                  {feature.desc}
                </p>
                
                <motion.button
                  onClick={() => navigate('/quotes')}
                  className="block mx-auto px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md hover:from-cyan-600 hover:to-blue-600 transition-all group-hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Quote
                </motion.button>
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-200 group-hover:opacity-50 transition-all duration-300 -z-10"></div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div 
            className="mt-20 text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-10 text-white shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="max-w-2xl mx-auto mb-6 opacity-90">
              Let's discuss how our AI solutions can drive innovation and efficiency for your organization.
            </p>
            <motion.button
              onClick={() => navigate('/quotes')}
              className="px-8 py-3 rounded-full font-semibold text-cyan-900 bg-white hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your AI Journey
            </motion.button>
          </motion.div>
        </div>

      <Footer />
    </>
  );
}