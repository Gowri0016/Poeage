import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBrain, FaComments, FaSearch, FaRobot, FaLock,
  FaChartLine, FaCogs, FaCamera, FaLanguage, FaUserCheck
} from 'react-icons/fa';
import { Header } from './Header';
import Footer from './Footer';

const features = [
  { icon: <FaBrain />, title: 'Machine Learning Integration', description: 'Our AI systems adapt over time through machine learning algorithms, enabling predictive insights and smarter decision-making.' },
  { icon: <FaComments />, title: 'Conversational AI', description: 'We develop intelligent chatbots and virtual assistants that provide human-like customer interactions 24/7.' },
  { icon: <FaSearch />, title: 'Natural Language Processing (NLP)', description: 'We implement NLP to enable systems to read, interpret, and understand human language contextually and accurately.' },
  { icon: <FaRobot />, title: 'Automation with AI', description: 'From customer support to task scheduling, our AI automates repetitive tasks to increase efficiency and productivity.' },
  { icon: <FaLock />, title: 'AI in Cybersecurity', description: 'Using AI, we predict, detect, and prevent threats in real-time to secure your digital environment.' },
  { icon: <FaChartLine />, title: 'Predictive Analytics', description: 'Our AI solutions forecast trends, customer behaviors, and market changes using real-time and historical data.' },
  { icon: <FaCogs />, title: 'AI-Powered Recommendation Systems', description: 'From eCommerce to entertainment, we personalize user experience using intelligent product or content suggestions.' },
  { icon: <FaCamera />, title: 'Computer Vision', description: 'We enable machines to interpret and process visual data—ideal for quality inspection, surveillance, and AR.' },
  { icon: <FaLanguage />, title: 'Multilingual Support', description: 'Our AI models understand and respond in multiple languages, breaking communication barriers across the globe.' },
  { icon: <FaUserCheck />, title: 'AI for HR & Recruitment', description: 'Screen resumes, assess candidates, and reduce bias using AI-driven recruitment and talent management solutions.' },
];

export default function Ai() {
  return (
    <>
      <Header />
      <div className="pt-24 pb-20 px-6 min-h-screen bg-gradient-to-br from-sky-50 via-cyan-100 to-white relative">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* COLOR BALLS */}
        <div className="absolute w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse z-0" />
        <div className="absolute w-72 h-72 bg-red-200 opacity-30 rounded-full blur-2xl top-[60%] left-[70%] animate-bounce z-0" />
        <div className="absolute w-60 h-60 bg-cyan-300 opacity-30 rounded-full blur-2xl bottom-20 right-10 animate-ping z-0" />

        <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-4">
            AI Development at Poeage
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building intelligent solutions that automate, optimize, and elevate businesses with future-ready Artificial Intelligence.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 relative z-10">
          {features.map((feature, index) => (
            <Link
              to={`/enquiry?topic=${encodeURIComponent(feature.title)}`}
              key={index}
            >
              <div
                className="relative group rounded-3xl border border-gray-200 bg-white/60 backdrop-blur-xl p-6 transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] cursor-pointer"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-lg transition duration-500 z-0"></div>
                <div className="relative z-10 text-center">
                  <div className="text-cyan-600 text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
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
