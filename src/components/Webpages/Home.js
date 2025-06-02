import React from 'react';
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  ArrowRightCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/quotes');
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div className="relative top-24 z-10 flex flex-col justify-center items-center w-full min-h-screen text-white px-4 text-center space-y-6 md:space-y-10 max-w-screen-md mx-auto">
      
      {/* Header */}
      <motion.h1
        className="text-3xl text-gradient bg-gradient-to-r to-blue-500 from-cyan-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl font-semibold"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Crafting Digital Experiences with Impact
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        className="text-gradient bg-gradient-to-r to-blue-500 from-cyan-500 bg-clip-text text-transparent font-bold text-xl md:text-2xl hover:text-cyan-400"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Design. Develop. Deliver.
      </motion.h2>

      {/* Description */}
      <motion.p
        className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed md:text-2xl"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        At <span className="font-bold text-cyan-500">Poeage</span>, we blend clean code with captivating design to build 
        memorable digital products. From intuitive interfaces to sleek animations, every pixel is crafted with purpose.
      </motion.p>

      {/* Social Media Icons with Hover Animation */}
      <motion.div
        className="flex gap-6 justify-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {['Twitter', 'Facebook', 'Linkedin', 'Instagram'].map((platform, index) => {
          const Icon = platform === 'Twitter' ? TwitterIcon :
            platform === 'Facebook' ? FacebookIcon :
            platform === 'Linkedin' ? LinkedinIcon : InstagramIcon;
          const color = platform === 'Twitter' ? 'text-blue-400' :
            platform === 'Facebook' ? 'text-blue-500' :
            platform === 'Linkedin' ? 'text-blue-600' : 'text-pink-500';
          const url = platform === 'Twitter' ? 'https://x.com/PoeageCom' :
            platform === 'Facebook' ? 'https://www.facebook.com/share/1Gcq6JPLpL/' :
            platform === 'Linkedin' ? 'https://www.linkedin.com/in/g-gowri-shankar' : 
            'https://www.instagram.com/poeage__com?igsh=MTljMmMyanY4dDlsbw==';

          return (
            <motion.a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group p-3 md:p-4 bg-gray-800 rounded-full transition"
            >
              <Icon className={`w-6 h-6 md:w-7 md:h-7 text-white group-hover:${color} transition`} />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Call-to-Action Buttons */}
      <motion.div
        className="mt-6 flex flex-col md:flex-row items-center gap-4"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-800 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 shadow-lg"
        >
          Request a Design Quote <ArrowRightCircle className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
        
        <motion.a
          href="https://poeage-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-800 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 shadow-lg"
        >
          Our Creative Portfolio <ArrowRightCircle className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>
      </motion.div>
    </div>
  );
};
