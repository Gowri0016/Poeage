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

const defaultAIServices = [
  {
    icon: <FaRobot className="text-cyan-500 text-4xl mb-4 mx-auto" />,
    topic: 'AI Chatbots',
    content:
      'Automate customer interactions using intelligent, context-aware chatbots that improve response time and user satisfaction.',
  },
  {
    icon: <FaEye className="text-cyan-500 text-4xl mb-4 mx-auto" />,
    topic: 'Computer Vision',
    content:
      'Enable image and video analysis for tasks like object detection, facial recognition, and quality control.',
  },
  {
    icon: <FaLanguage className="text-cyan-500 text-4xl mb-4 mx-auto" />,
    topic: 'Natural Language Processing',
    content:
      'Extract insights, sentiment, and meaning from human language with our cutting-edge NLP solutions.',
  },
  {
    icon: <FaChartLine className="text-cyan-500 text-4xl mb-4 mx-auto" />,
    topic: 'Predictive Analytics',
    content:
      'Leverage machine learning models to forecast trends, optimize decisions, and reduce risks.',
  },
  {
    icon: <FaThumbsUp className="text-cyan-500 text-4xl mb-4 mx-auto" />,
    topic: 'Recommendation Engines',
    content:
      'Boost user engagement and sales with intelligent, personalized content or product recommendations.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

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
      <section className="relative z-10 top-20 py-14 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-500 text-center mb-10"
        >
          What We Do Best
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4">
          {limitedServices?.length > 0 ? (
            limitedServices.map((data, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-[300px] max-w-sm bg-white text-center p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <img
                  src={data.image}
                  alt="service-icon"
                  className="w-14 h-14 mx-auto mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-500 mb-2">
                  {data.topic}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{data.content}</p>
              </motion.div>
            ))
          ) : (
            <div className="text-center text-gray-600">Our service list is loading...</div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 top-20 py-14 bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-500 text-center mb-10"
        >
          Why Choose Us
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4">
          {filteredServices?.length > 0 ? (
            filteredServices.map((data, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-[300px] max-w-sm bg-white text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <img
                  src={data.image}
                  alt="choose-icon"
                  className="w-14 h-14 mx-auto mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-500 mb-2">
                  {data.topic}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{data.content}</p>
              </motion.div>
            ))
          ) : (
            <div className="text-center text-gray-500">Loading reasons to choose us...</div>
          )}
        </div>
      </section>

      {/* AI Solutions */}
      <section className="relative z-10 top-20 py-14 bg-white">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-500 text-center mb-10">
          AI Solutions
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4">
          {defaultAIServices.map((data, index) => (
            <motion.div key={index} className="w-full sm:w-[300px] max-w-sm bg-white text-center p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1" custom={index} initial="hidden" animate="visible" variants={cardVariants} >
              {data.icon}
              <h4 className="text-lg sm:text-xl font-semibold text-cyan-500 mb-2">
                {data.topic}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{data.content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
