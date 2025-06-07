import React, { useContext } from 'react';
import { DContext } from '../Datacontext/Datacontext';
import { motion } from 'framer-motion';
import {
  FaRobot, FaEye, FaLanguage, FaChartLine, FaThumbsUp,
} from 'react-icons/fa';

const defaultAIServices = [
  {
    icon: <FaRobot />,
    topic: 'AI Chatbots',
    content:
      'Intelligent bots that interact like humans, boosting support and engagement round-the-clock.',
  },
  {
    icon: <FaEye />,
    topic: 'Computer Vision',
    content:
      'AI that sees and interprets images & videos—perfect for surveillance, automation, and smart systems.',
  },
  {
    icon: <FaLanguage />,
    topic: 'Natural Language',
    content:
      'We process language like humans do—extracting insights from text, voice, and sentiment.',
  },
  {
    icon: <FaChartLine />,
    topic: 'Predictive Analytics',
    content:
      'Data-driven foresight to anticipate customer behavior, trends, and business outcomes.',
  },
  {
    icon: <FaThumbsUp />,
    topic: 'Recommender Systems',
    content:
      'Smart suggestions for products, content, and actions that drive conversions and satisfaction.',
  },
];

const gradientBorder = "bg-gradient-to-r from-cyan-400 to-purple-500 p-[1px]";

export const Services = () => {
  const { service } = useContext(DContext);
  const limitedServices = service?.length > 6 ? service.slice(0, 6) : service;
  const filteredServices = service?.[6]?.choose?.slice(0, 6) || [];

  const cardMotion = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: (i) => ({ delay: i * 0.2, duration: 0.6, type: 'spring' }),
  };

  const renderCard = (data, index, icon) => (
    <motion.div
      key={index}
      {...cardMotion}
      transition={cardMotion.transition(index)}
      viewport={{ once: true }}
      className="relative w-[280px] sm:w-[300px] rounded-[25px] bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:scale-[1.05] hover:-rotate-1 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-100 to-blue-300 shadow-lg flex items-center justify-center text-2xl text-black">
        {icon || <img src={data.image} alt="icon" className="w-8 h-8" />}
      </div>
      <div className="mt-10 text-center">
        <h3 className="text-xl font-bold text-blue-600">{data.topic}</h3>
        <p className="text-sm text-gray-700 leading-relaxed mt-2">{data.content}</p>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Section - What We Do */}
      <section className="relative z-10 top-20 py-24 bg-gradient-to-tr from-[#ecfdf5] via-white to-[#fdf2f8]">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-fuchsia-500 drop-shadow-lg"
          >
            What We Do Best
          </motion.h1>
        </div>

        {/* Roadmap Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {[
            { title: 'Web Development', color: 'from-green-400 to-blue-500' },
            { title: 'App Development', color: 'from-purple-400 to-pink-500' },
            { title: 'AI Development', color: 'from-yellow-400 to-red-500' },
            { title: 'Custom Software', color: 'from-teal-400 to-indigo-500' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`rounded-xl px-6 py-3 text-white font-medium text-md bg-gradient-to-r ${item.color} shadow-md hover:scale-105 transition`}
            >
              {item.title}
            </motion.div>
          ))}
        </div>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-10 px-6">
          {limitedServices?.length
            ? limitedServices.map((data, i) => renderCard(data, i))
            : <div className="text-center text-gray-500">Loading services...</div>}
        </div>
      </section>

      {/* Section - Why Choose Us */}
      <section className="relative z-10 top-20 py-24 bg-gradient-to-bl from-[#fffbea] via-white to-[#f0f9ff]">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-md mb-14"
        >
          Why Choose Us
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-10 px-6">
          {filteredServices?.length
            ? filteredServices.map((data, i) => renderCard(data, i))
            : <div className="text-center text-gray-500">Loading highlights...</div>}
        </div>
      </section>

      {/* Section - AI Solutions */}
      <section className="relative z-10 top-20 py-24 bg-gradient-to-br from-[#e0f2f1] via-white to-[#ede7f6]">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 drop-shadow-md mb-14"
        >
          AI Solutions
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-10 px-6">
          {defaultAIServices.map((data, i) =>
            renderCard(data, i, React.cloneElement(data.icon, { className: 'w-6 h-6 text-black' }))
          )}
        </div>
      </section>
    </>
  );
};
