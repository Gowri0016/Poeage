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

  function handleClick() {
    navigate('/quotes');
  }

  return (
    <div className="relative top-24 z-10 flex flex-col justify-center items-center w-full min-h-screen text-white px-4 text-center space-y-6 md:space-y-10 max-w-screen-md mx-auto">
      
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold animate__animated animate__fadeIn">
        Crafting Digital Experiences with Impact
      </h1>
      <h2 className="text-blue-500 font-bold text-xl md:text-2xl animate__animated animate__fadeIn animate__delay-1s">
        Design. Develop. Deliver.
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-lg sm:text-xl font-medium leading-relaxed md:text-2xl animate__animated animate__fadeIn animate__delay-2s">
        At <span className="font-bold text-blue-400">Poeage</span>, we blend clean code with captivating design to build 
        memorable digital products. From intuitive interfaces to sleek animations, every pixel is crafted with purpose.
      </p>

      {/* Social Media Icons with 3D Hover Effect */}
      <div className="flex gap-6 justify-center mt-4">
        {['Twitter', 'Facebook', 'Linkedin', 'Instagram'].map((platform, index) => {
          const Icon = platform === 'Twitter' ? TwitterIcon :
            platform === 'Facebook' ? FacebookIcon :
            platform === 'Linkedin' ? LinkedinIcon : InstagramIcon;
          const color = platform === 'Twitter' ? 'blue-400' :
            platform === 'Facebook' ? 'blue-500' :
            platform === 'Linkedin' ? 'blue-600' : 'pink-500';
          const url = platform === 'Twitter' ? 'https://x.com/PoeageCom' :
            platform === 'Facebook' ? 'https://www.facebook.com/profile.php?id=61575707375728' :
            platform === 'Linkedin' ? 'https://www.linkedin.com/in/poeage/' : 
            'https://www.instagram.com/poeage_com?igsh=ZG02cDRyMDluNHFk';

          return (
            <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
              className={`group p-3 md:p-4 bg-gray-800 rounded-full hover:ring-2 hover:ring-${color} transition transform hover:scale-110 hover:rotate-3d`}>
              <Icon className={`w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-${color} transition`} />
            </a>
          );
        })}
      </div>

      {/* Call-to-Action Button with 3D Hover Effect */}
      <div className="mt-6">
        <button
          onClick={handleClick}
          className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 text-lg md:text-xl font-semibold bg-blue-800 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 shadow-lg transform hover:scale-110 hover:rotate-3d"
        >
          Request a Design Quote <ArrowRightCircle className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* About Us Section */}
      <section className="container mx-auto py-8 px-4 sm:px-6 flex justify-center relative z-10">
        <div className="bg-gray-900 text-gray-200 rounded-2xl p-6 sm:p-10 w-full max-w-3xl text-center shadow-lg">
          <h6 className="uppercase font-bold text-2xl sm:text-3xl mb-4 text-gradient bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
            About Us
          </h6>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Welcome to <span className="text-sky-500 font-semibold">Poeage</span>, your trusted partner in innovative web development and IT solutions.
            Our founder, <span className="text-sky-500 hover:text-sky-300">Mr. Gowrishankar</span>, leads us to redefine digital success.
          </p>
        </div>
      </section>
    </div>
  );
};
