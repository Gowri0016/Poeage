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
    <div
      className="min-h-screen w-full bg-white"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="relative top-24 z-10 flex flex-col justify-center items-center w-full px-4 text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-inter bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
          Business software is our craft
        </h1>

        <h2 className="text-xl md:text-2xl font-bold bg-black bg-clip-text text-transparent animate-bounce">
          Design. Develop. Deliver.
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium bg-gradient-to-r from-orange-500 via-blue-500 to-teal-500 text-transparent bg-clip-text">
          At <span className="font-bold text-cyan-500">Poeage</span>, we blend clean code with captivating design to build memorable digital products. From intuitive interfaces to sleek animations, every pixel is crafted with purpose.
        </p>

        <button
          onClick={handleClick}
          className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Get a Quote
          <ArrowRightCircle className="w-5 h-5" />
        </button>

        <div className="flex justify-center gap-6 mt-8">
          {socialLinks.map(({ platform, url, Icon, color }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center text-gray-700 bg-white shadow hover:scale-110 transition-all duration-300 ${color}`}
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
