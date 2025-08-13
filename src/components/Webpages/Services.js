import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaRobot, FaLaptopCode, FaMobileAlt, FaToolbox, FaQuoteLeft,
  FaLightbulb, FaClock, FaHandsHelping, FaUsers, FaCogs
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const services = [
  {
    title: 'AI Development',
    icon: <FaRobot />,
    path: '/ai',
    gradient: 'from-cyan-400 to-purple-500',
    description: 'Building intelligent systems to automate, optimize, and enhance decision-making.',
  },
  {
    title: 'Web Development',
    icon: <FaLaptopCode />,
    path: '/web',
    gradient: 'from-green-400 to-blue-500',
    description: 'Crafting scalable, high-performance websites with stunning UI and UX.',
  },
  {
    title: 'App Development',
    icon: <FaMobileAlt />,
    path: '/appde',
    gradient: 'from-pink-400 to-red-500',
    description: 'Delivering fast, responsive, and user-friendly mobile applications.',
  },
  {
    title: 'Software Tool Development',
    icon: <FaToolbox />,
    path: '/soft',
    gradient: 'from-yellow-400 to-orange-500',
    description: 'Designing custom tools to boost productivity and streamline workflows.',
  },
];

const testimonials = [
  {
    name: 'Shankar K.',
    quote: 'Poeage turned our idea into a powerful web platform. Their tech and support are unmatched!',
  },
  {
    name: 'Preethika SV.',
    quote: 'From day one, they’ve delivered more than expected. Truly a professional team!',
  },
  {
    name: 'Shreenithi KM.',
    quote: 'Excellent app experience—visually appealing, fast, and perfectly tailored to our needs.',
  },
];

const uniquePoints = [
  {
    icon: <FaLightbulb />,
    title: 'Deep Experience',
    text: 'With a strong foundation in web technologies and real-world project success, I bring technical expertise and practical insight to every collaboration.',
  },
  {
    icon: <FaCogs />,
    title: 'Tailored Digital Tools',
    text: 'I build smart, scalable digital products that align with your goals — whether it’s an app, platform, or internal tool to boost productivity.',
  },
  {
    icon: <FaUsers />,
    title: 'Human-Centered Approach',
    text: 'Every project starts with listening. I design and develop with empathy, ensuring the final product serves real users effectively.',
  },
  {
    icon: <FaClock />,
    title: 'Precision & Timeliness',
    text: 'Time is valuable. I follow a structured workflow that ensures on-time delivery without compromising detail or performance.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'Long-Term Partnership',
    text: 'My support doesn’t end at launch. I’m here for ongoing improvements, tech advice, and scaling your project as your needs evolve.',
  },
];

export const Services = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 bg-white text-black overflow-hidden">
     
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-4xl md:text-5xl font-light text-center mb-6 drop-shadow-2xl relative"
      >
        Explore Our Futuristic Services
        <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full" />
      </motion.h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20">
        Transforming ideas into cutting-edge solutions with precision, creativity, and long-term vision.
      </p>

      {/* Services Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 mb-28">
        {services.map((service, i) => (
          <motion.div
            key={i}
            onClick={() => navigate(service.path)}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl border border-gray-200 hover:border-blue-500 transition"
          >
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.gradient}`} />
            <div className="flex flex-col items-center p-8 md:p-10">
              <motion.div whileHover={{ rotate: 10 }} className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} text-white text-3xl flex items-center justify-center shadow-lg -mt-16 border-4 border-white`}>
                {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
              </motion.div>
              <h3 className="mt-8 text-2xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600 mt-3 text-center">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* About Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mb-28 z-10 relative flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/90 shadow-xl rounded-3xl border border-blue-200 p-8 md:p-14"
      >
        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-l-3xl" />
        <div>
          <h2 className="text-3xl md:text-4xl font-light mb-4">About Poeage Technology</h2>
          <p className="text-black text-lg leading-relaxed">
            Founded on <strong>October 31, 2023</strong>, Poeage Technology is a visionary digital company building impactful web, app, and AI solutions. We fuse innovation, design, and scalability to empower businesses through futuristic software solutions.
          </p>
        </div>
      </motion.div>

      {/* Unique Points */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mb-28 rounded-3xl bg-white shadow-xl p-10 border border-blue-300"
      >
        <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">
          Driving Innovation — Always One Step Ahead
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          In a world where technology never stands still, neither do we. Join forces with us to unlock fresh possibilities, future-proof your digital assets, and spark transformation that lasts.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {uniquePoints.map((point, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`flex gap-5 items-start rounded-xl p-6 shadow-md hover:shadow-lg transition bg-white/80 border-l-4 ${i % 2 === 0 ? 'border-blue-500' : 'border-purple-500'}`}
            >
              <div className="text-blue-600 text-3xl">{point.icon}</div>
              <div>
                <h3 className="font-semibold text-xl mb-2">{point.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mb-32 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-light mb-14">Client Testimonials</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white/90 rounded-xl p-8 md:p-10 shadow-lg border border-blue-300 backdrop-blur-xl"
        >
          <FaQuoteLeft className="text-blue-500 text-2xl mb-4 mx-auto" />
          <p className="italic text-black">"{testimonials[index].quote}"</p>
          <p className="mt-4 font-semibold text-black">– {testimonials[index].name}</p>
        </motion.div>
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-300'} transition`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
