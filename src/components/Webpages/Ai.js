import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBrain, FaComments, FaSearch, FaRobot, FaLock,
  FaChartLine, FaCogs, FaCamera, FaLanguage, FaUserCheck
} from 'react-icons/fa';
import { Header } from './Header';
import Footer from './Footer';

const features = [
  { icon: <FaBrain />, title: 'Machine Learning Integration', description: 'Adaptive systems that learn from data, enabling predictive analytics and smarter processes.' },
  { icon: <FaComments />, title: 'Conversational AI', description: 'Intelligent chatbots and assistants for human-like, 24/7 engagement.' },
  { icon: <FaSearch />, title: 'Natural Language Processing (NLP)', description: 'Contextual understanding and interpretation of human language.' },
  { icon: <FaRobot />, title: 'Automation with AI', description: 'Streamlining repetitive tasks using smart algorithms and AI agents.' },
  { icon: <FaLock />, title: 'AI in Cybersecurity', description: 'Real-time threat detection and proactive risk mitigation using AI.' },
  { icon: <FaChartLine />, title: 'Predictive Analytics', description: 'Forecasting trends and behaviors using historical and real-time data.' },
  { icon: <FaCogs />, title: 'Recommendation Systems', description: 'Hyper-personalized experiences via intelligent product/content suggestions.' },
  { icon: <FaCamera />, title: 'Computer Vision', description: 'AI-powered image and video recognition for diverse industry use cases.' },
  { icon: <FaLanguage />, title: 'Multilingual AI', description: 'Seamless global communication with multi-language understanding.' },
  { icon: <FaUserCheck />, title: 'AI for Recruitment', description: 'AI-driven resume screening and bias-free candidate evaluations.' },
];

export default function Ai() {
  return (
    <>
      <Header />
      <div className="pt-28 md:pt-32 pb-20 px-6 sm:px-10 md:px-20 min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">

        {/* Animated Blurs */}
        <div className="absolute w-[450px] h-[450px] bg-cyan-300 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse z-0" />
        <div className="absolute w-[300px] h-[300px] bg-pink-200 opacity-30 rounded-full blur-2xl top-[60%] left-[70%] animate-bounce z-0" />
        <div className="absolute w-[250px] h-[250px] bg-indigo-200 opacity-30 rounded-full blur-2xl bottom-20 right-10 animate-ping z-0" />

        {/* Title Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4 drop-shadow-sm">
            AI Development at Poeage
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Crafting smart, scalable, and secure AI solutions that revolutionize the way businesses think and operate.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {features.map((feature, i) => (
            <Link to={`/enquiry?topic=${encodeURIComponent(feature.title)}`} key={i}>
              <div className="group relative bg-white/60 border border-blue-100 backdrop-blur-xl rounded-3xl p-6 shadow-xl overflow-hidden hover:scale-[1.03] transition-all duration-500 cursor-pointer">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-3xl blur-lg transition duration-500 z-0" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-cyan-600 text-2xl flex items-center justify-center shadow-md mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
