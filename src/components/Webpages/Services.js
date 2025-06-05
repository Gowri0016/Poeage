import React, { useContext } from 'react';
import { DContext } from '../Datacontext/Datacontext';
import { motion } from 'framer-motion';
import {
  FaRobot,
  FaEye,
  FaLanguage,
  FaChartLine,
  FaThumbsUp,
} from 'react-icons/fa';

// Static AI service data
const defaultAIServices = [
  {
    icon: <FaRobot />,
    topic: 'AI Chatbots',
    content:
      'Automate customer interactions using intelligent, context-aware chatbots that improve response time and user satisfaction.',
  },
  {
    icon: <FaEye />,
    topic: 'Computer Vision',
    content:
      'Enable image and video analysis for tasks like object detection, facial recognition, and quality control.',
  },
  {
    icon: <FaLanguage />,
    topic: 'Natural Language Processing',
    content:
      'Extract insights, sentiment, and meaning from human language with our cutting-edge NLP solutions.',
  },
  {
    icon: <FaChartLine />,
    topic: 'Predictive Analytics',
    content:
      'Leverage machine learning models to forecast trends, optimize decisions, and reduce risks.',
  },
  {
    icon: <FaThumbsUp />,
    topic: 'Recommendation Engines',
    content:
      'Boost user engagement and sales with intelligent, personalized content or product recommendations.',
  },
];

export const Services = () => {
  const { service } = useContext(DContext);

  const limitedServices = service?.length > 6 ? service.slice(0, 6) : service;

  const filteredServices =
    service && service[6]?.choose?.length === 6
      ? service[6].choose.slice(0, 6)
      : service[6]?.choose;

  return (
    <>
      {/* What We Do Best */}
      <section className="relative z-10 top-20 py-20 bg-gradient-to-br from-[#e0f7fa] via-white to-[#f3e5f5]">
        {/* Roadmap Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 px-6">
          {[
            { title: 'Web Development', color: 'from-green-400 to-blue-500' },
            { title: 'Application Development', color: 'from-purple-400 to-pink-500' },
            { title: 'AI Development', color: 'from-yellow-400 to-red-500' },
            { title: 'Customized Applications', color: 'from-teal-400 to-indigo-500' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`w-[220px] sm:w-[250px] text-center p-4 rounded-xl shadow-lg bg-gradient-to-r ${item.color} text-white font-semibold text-lg tracking-wide hover:scale-105 transition-transform duration-300`}
            >
              {item.title}
            </motion.div>
          ))}
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-md mb-14"
        >
          What We Do Best
        </motion.h1>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-10 px-6">
          {limitedServices?.length > 0 ? (
            limitedServices.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
                viewport={{ once: true }}
                className="relative w-[280px] sm:w-[300px] bg-white/90 backdrop-blur-lg border border-teal-100 p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white border border-teal-200 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                  <img src={data.image} alt="service-icon" className="w-8 h-8" />
                </div>
                <div className="mt-10 text-center">
                  <h3 className="text-xl font-semibold text-cyan-600 mb-2">{data.topic}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{data.content}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center text-gray-600">Our service list is loading...</div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 top-20 py-20 bg-gradient-to-br from-[#e0f7fa] via-white to-[#f3e5f5]">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-md mb-14"
        >
          Why Choose Us
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-10 px-6">
          {filteredServices?.length > 0 ? (
            filteredServices.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
                viewport={{ once: true }}
                className="relative w-[280px] sm:w-[300px] bg-white/90 backdrop-blur-lg border border-teal-100 p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white border border-teal-200 w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                  <img src={data.image} alt="icon" className="w-8 h-8" />
                </div>
                <div className="mt-10 text-center">
                  <h3 className="text-xl font-semibold text-cyan-600 mb-2">{data.topic}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{data.content}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center text-gray-500">Loading reasons to choose us...</div>
          )}
        </div>
      </section>

      {/* AI Solutions */}
      <section className="relative z-10 top-20 py-20 bg-gradient-to-br from-[#e0f7fa] via-white to-[#f3e5f5]">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-md mb-14"
        >
          AI Solutions
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-10 px-6">
          {defaultAIServices.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
              viewport={{ once: true }}
              className="relative w-[280px] sm:w-[300px] bg-white/90 backdrop-blur-lg border border-teal-100 p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-teal-100 w-16 h-16 rounded-full flex items-center justify-center shadow-lg text-2xl text-black">
                {React.cloneElement(data.icon, { className: 'text-black w-6 h-6' })}
              </div>
              <div className="mt-10 text-center">
                <h4 className="text-xl font-semibold text-cyan-600 mb-2">{data.topic}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{data.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
