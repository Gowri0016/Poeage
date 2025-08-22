import React, { useEffect, useState } from 'react';
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  ArrowRightCircle,
  Sparkles,
  Zap,
  Target,
  Users,
  Code,
  Palette
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const socialLinks = [
    {
      platform: 'Twitter',
      url: 'https://x.com/PoeageCom',
      Icon: TwitterIcon,
      color: 'hover:text-blue-400',
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/share/1Gcq6JPLpL/',
      Icon: FacebookIcon,
      color: 'hover:text-blue-500',
    },
    {
      platform: 'Linkedin',
      url: 'https://www.linkedin.com/in/poeage',
      Icon: LinkedinIcon,
      color: 'hover:text-blue-600',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/poeage_technology?igsh=MTljMmMyanY4dDlsbw==',
      Icon: InstagramIcon,
      color: 'hover:text-pink-500',
    },
  ];

  const features = [
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Goal-Oriented",
      description: "Focused on delivering solutions that meet your specific business objectives"
    },
    {
      icon: <Code className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Cutting-Edge Tech",
      description: "Utilizing the latest technologies to build fast, scalable applications"
    },
    {
      icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Beautiful Design",
      description: "Creating interfaces that are both visually stunning and highly functional"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "User-Centered",
      description: "Designing with your audience in mind to ensure maximum engagement"
    }
  ];

  return (
    <div className="min-h-screen mt-5 bg-gradient-to-br from-blue-50 to-cyan-50 text-black flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-16">
      {/* Main content */}
      <div className="w-full max-w-4xl mx-auto">
        {/* Intro Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-4 md:mb-6"
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-cyan-500" />
          </motion.div>
          
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Build Something{' '}
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
                Amazing
              </motion.span>
              <motion.div 
                className="absolute -bottom-1 md:-bottom-2 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-600"
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>{' '}
            Together
          </motion.h1>
          
          <motion.p
            className="mt-4 md:mt-6 text-base md:text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Welcome to <span className="font-semibold text-blue-600">Poeage Technology</span> — 
            your partner in creating exceptional digital experiences that drive results.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -3, scale: 1.01 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <motion.div 
                className="text-blue-500 mb-3 md:mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Me Section */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-8 md:mb-12 bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div 
            className="inline-block p-2 md:p-3 bg-blue-100 rounded-full mb-3 md:mb-4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
          </motion.div>
          
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Every client has a unique vision. We specialize in transforming your ideas into 
            powerful digital solutions through innovative design, clean development, and ongoing support.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          {/* Quote Button */}
          <motion.button
            onClick={() => navigate('/quotes')}
            className="relative px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg group overflow-hidden shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative z-10 text-white">Get a Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ArrowRightCircle className="relative z-10 ml-2 w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          {/* Projects Button */}
          <motion.a
            href="https://poeage-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg group overflow-hidden shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative z-10 text-white">View Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ArrowRightCircle className="relative z-10 ml-2 w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-4 md:gap-6 mt-4"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          {socialLinks.map(({ platform, url, Icon, color }) => (
            <motion.a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white text-gray-700 shadow-lg transition-all duration-300 ${color} border border-gray-200`}
              title={platform}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};