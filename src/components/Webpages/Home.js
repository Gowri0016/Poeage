import React from 'react';
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  ArrowRightCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quotes');
  };

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
      url: 'https://www.linkedin.com/in/g-gowri-shankar',
      Icon: LinkedinIcon,
      color: 'hover:text-blue-600',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/poeage__com?igsh=MTljMmMyanY4dDlsbw==',
      Icon: InstagramIcon,
      color: 'hover:text-pink-500',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-100 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 opacity-30 rounded-full blur-2xl animate-ping" />
      <div className="absolute top-[50%] left-[70%] w-64 h-64 bg-indigo-200 opacity-30 rounded-full blur-2xl animate-bounce" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32 sm:px-10 lg:px-20 max-w-5xl mx-auto space-y-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 drop-shadow-md">
          Where Code Meets Creativity
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold bg-black bg-clip-text text-transparent tracking-wide animate-fade-in-up">
          Crafting digital excellence for every business
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-gray-700 max-w-3xl">
          At <span className="text-cyan-500 font-bold">Poeage</span>, we merge innovation with design — building scalable software, interactive websites, and seamless digital experiences.
        </p>

        <button
          onClick={handleClick}
          className="px-8 py-3 rounded-full bg-white/30 backdrop-blur-md text-blue-800 font-semibold text-lg flex items-center gap-2 border border-blue-200 hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Get a Quote
          <ArrowRightCircle className="w-5 h-5" />
        </button>

        <div className="flex justify-center gap-5 mt-6">
          {socialLinks.map(({ platform, url, Icon, color }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-11 h-11 rounded-full flex items-center justify-center text-gray-700 bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 ${color}`}
              title={platform}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
