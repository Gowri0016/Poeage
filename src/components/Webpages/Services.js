import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaRobot, FaLaptopCode, FaMobileAlt, FaToolbox, FaQuoteLeft,
  FaLightbulb, FaClock, FaHandsHelping, FaUsers, FaCogs
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

// Custom animations
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

const float = {
  hidden: { y: 0 },
  show: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const services = [
  {
    title: 'AI Development',
    icon: <FaRobot />,
    path: '/ai',
    gradient: 'from-cyan-400 to-purple-500',
    color: 'bg-gradient-to-r from-cyan-400 to-purple-500',
    description: 'Building intelligent systems to automate, optimize, and enhance decision-making.',
  },
  {
    title: 'Web Development',
    icon: <FaLaptopCode />,
    path: '/web',
    gradient: 'from-green-400 to-blue-500',
    color: 'bg-gradient-to-r from-green-400 to-blue-500',
    description: 'Crafting scalable, high-performance websites with stunning UI and UX.',
  },
  {
    title: 'App Development',
    icon: <FaMobileAlt />,
    path: '/appde',
    gradient: 'from-pink-400 to-red-500',
    color: 'bg-gradient-to-r from-pink-400 to-red-500',
    description: 'Delivering fast, responsive, and user-friendly mobile applications.',
  },
  {
    title: 'Software Tool Development',
    icon: <FaToolbox />,
    path: '/soft',
    gradient: 'from-yellow-400 to-orange-500',
    color: 'bg-gradient-to-r from-yellow-400 to-orange-500',
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
    quote: 'From day one, they\'ve delivered more than expected. Truly a professional team!',
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
    text: 'I build smart, scalable digital products that align with your goals — whether it\'s an app, platform, or internal tool to boost productivity.',
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
    text: 'My support doesn\'t end at launch. I\'m here for ongoing improvements, tech advice, and scaling your project as your needs evolve.',
  },
];

export const Services = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-50 text-black overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-20"
            style={{
              width: Math.random() * 150 + 80,
              height: Math.random() * 150 + 80,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1 + Math.random() * 0.3, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore Our{' '}
            <span className="relative">
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ 
                  backgroundSize: '200% 100%' 
                }}
              >
                Futuristic
              </motion.span>{' '}
              Services
            </span>
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.p 
            className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Transforming ideas into cutting-edge solutions with precision, creativity, and long-term vision.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-28">
          {services.map((service, i) => (
            <motion.div
              key={i}
              onClick={() => navigate(service.path)}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              whileHover={{ 
                scale: 1.03, 
                y: -3,
                transition: { duration: 0.3 }
              }}
              className="group relative cursor-pointer overflow-hidden rounded-xl md:rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-100"
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 md:h-2 ${service.color}`} />
              <div className="flex flex-col items-center p-4 md:p-6">
                <motion.div 
                  variants={float}
                  animate={isVisible ? "show" : "hidden"}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${service.color} text-white text-xl md:text-2xl flex items-center justify-center shadow-lg -mt-6 md:-mt-10 border-4 border-white`}
                >
                  {React.cloneElement(service.icon, { className: 'w-5 h-5 md:w-6 md:h-6' })}
                </motion.div>
                <h3 className="mt-4 md:mt-6 text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-3 text-center">{service.description}</p>
                <motion.div 
                  className="mt-3 md:mt-4 text-blue-500 font-medium flex items-center text-xs md:text-sm"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  Learn more
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16 md:mb-20 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg border border-blue-100 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-purple-600 p-6 md:p-8 text-white flex flex-col justify-center">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-3 md:mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                About Poeage Technology
              </motion.h2>
              <motion.div 
                className="w-12 h-1 bg-white rounded-full mb-3 md:mb-4"
                initial={{ width: 0 }}
                animate={isVisible ? { width: 48 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              />
            </div>
            <div className="md:w-3/5 p-6 md:p-8">
              <motion.p
                className="text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Founded on <strong>October 31, 2023</strong>, Poeage Technology is a visionary digital company building impactful web, app, and AI solutions. We fuse innovation, design, and scalability to empower businesses through futuristic software solutions.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Unique Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16 md:mb-20 bg-white/90 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 border border-blue-100"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Driving Innovation — Always One Step Ahead
          </motion.h2>
          <motion.p 
            className="text-base text-gray-700 mb-8 md:mb-10 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            In a world where technology never stands still, neither do we. Join forces with us to unlock fresh possibilities, future-proof your digital assets, and spark transformation that lasts.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {uniquePoints.map((point, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.3 }
                }}
                className="flex gap-4 items-start rounded-lg md:rounded-xl p-4 md:p-6 bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-lg transition border border-blue-100"
              >
                <motion.div 
                  className="text-blue-600 text-2xl md:text-3xl p-1 md:p-2 bg-blue-100 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {point.icon}
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2 text-gray-900">{point.title}</h3>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{point.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-12 md:mb-16 text-center"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Client Testimonials
          </motion.h2>
          
          <div className="relative max-w-2xl md:max-w-3xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: i === index ? 1 : 0,
                  y: i === index ? 0 : 20,
                  zIndex: i === index ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
                className={`absolute top-0 left-0 w-full p-6 md:p-8 bg-white/90 backdrop-blur-md rounded-lg md:rounded-xl shadow-lg border border-blue-200 ${i === index ? 'block' : 'hidden'}`}
              >
                <FaQuoteLeft className="text-blue-500 text-xl md:text-2xl mb-3 md:mb-4 mx-auto" />
                <p className="italic text-gray-800 text-base md:text-lg">"{testimonial.quote}"</p>
                <p className="mt-3 md:mt-4 font-semibold text-gray-900">– {testimonial.name}</p>
              </motion.div>
            ))}
            
            <div className="h-32 md:h-40"></div> {/* Spacer for absolute positioned testimonials */}
            
            <div className="flex justify-center mt-6 md:mt-8 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition ${i === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-blue-300'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};