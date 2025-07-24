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

  return (
    <div className="relative min-h-screen bg-white overflow-hidden text-black flex flex-col items-center justify-center px-6 py-16">
      {/* Intro Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl mt-5 font-light text-gray-900 hover:text-blue-700 transition duration-300">
          Let's Build Something Great Together
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="text-blue-600 font-semibold">Poeage Technology</span> — your launchpad for digital innovation.
        </p>
      </motion.div>

      {/* Why Me Section */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 hover:text-blue-700 transition duration-300">
          What Sets Me Apart
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-600">
          Every client has a unique vision. My role is to bring it to life — through thoughtful design, clean development, and unwavering support.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {/* Quote Button */}
        <motion.button
          onClick={() => navigate('/quotes')}
          className="relative px-8 py-3 rounded-full font-semibold text-lg border-2 border-cyan-400 group overflow-hidden shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Get a Quote
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
          <ArrowRightCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
        </motion.button>

        {/* Projects Button */}
        <motion.a
          href="https://poeage-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-8 py-3 rounded-full font-semibold text-lg border-2 border-purple-400 group overflow-hidden shadow-lg inline-flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Our Projects
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
          <ArrowRightCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
        </motion.a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4 relative z-20">
        {socialLinks.map(({ platform, url, Icon, color }) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full flex items-center justify-center bg-black backdrop-blur-md text-white border border-white/30 shadow-lg transition-transform duration-300 ${color} hover:-translate-y-1 hover:scale-110`}
            title={platform}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
};
