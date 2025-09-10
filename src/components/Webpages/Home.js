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
      icon: <Target className="w-8 h-8" />,
      title: "Goal-Oriented",
      description: "Focused on delivering solutions that meet your specific business objectives"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Cutting-Edge Tech",
      description: "Utilizing the latest technologies to build fast, scalable applications"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Beautiful Design",
      description: "Creating interfaces that are both visually stunning and highly functional"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centered",
      description: "Designing with your audience in mind to ensure maximum engagement"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden  bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 text-black flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-16">

      <div className="w-full max-w-5xl mx-auto  mt-5 relative z-10">
        {/* Intro Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Sparkles className="w-12 h-12 text-cyan-500 drop-shadow-lg" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let’s Build Something <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 animate-gradient bg-[length:200%_200%] inline-block">
              Amazing Together
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <motion.div 
                className="mb-4 p-3 w-fit rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Us Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            className="inline-block p-4 bg-blue-100 rounded-full mb-4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-8 h-8 text-blue-600" />
          </motion.div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Every client has a unique vision. We specialize in transforming your ideas into
            powerful digital solutions through innovative design, clean development, and ongoing support.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          {/* Quote Button */}
          <motion.button
            onClick={() => navigate('/quotes')}
            className="relative px-8 py-4 rounded-full font-bold text-lg group overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 text-white">Get a Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ArrowRightCircle className="relative z-10 ml-2 w-6 h-6 text-white inline-block group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          {/* Projects Button */}
          <motion.a
            href="https://poeage-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 rounded-full font-bold text-lg group overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 text-white">View Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ArrowRightCircle className="relative z-10 ml-2 w-6 h-6 text-white inline-block group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
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
              className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md text-gray-700 shadow-md border border-gray-200 transition-all duration-300 ${color}`}
              title={platform}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
