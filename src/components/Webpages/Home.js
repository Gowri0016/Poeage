import React from 'react';
import Bg from '../../assests/back.png';
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
      url: 'https://www.instagram.com/poeage__com?igsh=MTljMmMyanY4dDlsbw==',
      Icon: InstagramIcon,
      color: 'hover:text-pink-500',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden z-0 text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-[-20]">
        <img src={Bg} alt="Background" className="w-full h-full object-cover" />
      </div>
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 px-8 py-32 md:px-16 lg:px-32 flex flex-col items-center text-center space-y-16">
        {/* Glassmorphism Card */}
        <div className="relative w-full max-w-4xl rounded-2xl border border-cyan-500/30 bg-white/10 backdrop-blur-xl shadow-xl p-12 md:p-16 space-y-10">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white animate-fade-slide">
            Ignite Your Digital Future
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl font-extrabold text-white leading-relaxed">
            Crafting digital excellence for every business.
          </p>

          {/* Description */}
          <h2 className="text-base md:text-lg text-white/90 leading-relaxed">
            At <span className="text-gray-100 font-semibold underline underline-offset-2">Poeage Technology</span>, we merge <span className="italic">innovation</span> with <span className="italic">design</span> — building scalable software, interactive websites, and seamless digital experiences.
          </h2>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/quotes')}
            className="relative px-10 py-3 rounded-full font-semibold text-lg border-2 border-cyan-400 group overflow-hidden shadow-lg"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Get a Quote
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            <ArrowRightCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-10 relative z-20">
        {socialLinks.map(({ platform, url, Icon, color }) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md text-white border border-white/30 shadow-lg transition-transform duration-300 ${color} hover:-translate-y-1 hover:scale-110`}
            title={platform}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-slide {
          animation: fadeSlide 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
