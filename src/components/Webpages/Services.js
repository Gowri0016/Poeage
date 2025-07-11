import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaRobot, FaLaptopCode, FaMobileAlt, FaToolbox, FaQuoteLeft,
} from 'react-icons/fa';

const services = [
  {
    title: 'AI Development',
    icon: <FaRobot />, 
    path: '/ai',
    gradient: 'from-cyan-400 to-purple-500',
  },
  {
    title: 'Web Development',
    icon: <FaLaptopCode />, 
    path: '/web',
    gradient: 'from-green-400 to-blue-500',
  },
  {
    title: 'App Development',
    icon: <FaMobileAlt />, 
    path: '/appde',
    gradient: 'from-pink-400 to-red-500',
  },
  {
    title: 'Software Tool Development',
    icon: <FaToolbox />, 
    path: '/soft',
    gradient: 'from-yellow-400 to-orange-500',
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
    name: 'Shreenithy M.',
    quote: 'Excellent app experience—visually appealing, fast, and perfectly tailored to our needs.',
  },
];

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 bg-transparent min-h-screen text-white overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-transparent opacity-20 blur-3xl" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-transparent rounded-full z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-transparent opacity-30 blur-[120px] rounded-full z-0" />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-20 drop-shadow-2xl">
        Explore Our Futuristic Services
      </h1>

      {/* Services Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-10 md:gap-14 px-6 mb-28">
        {services.map((service, i) => (
          <div
            key={i}
            onClick={() => navigate(service.path)}
            className="relative cursor-pointer w-[260px] md:w-[300px] rounded-3xl p-8 md:p-10 bg-white/10 border-2 border-cyan-500 shadow-[0_10px_50px_rgba(0,255,255,0.4)] backdrop-blur-xl transition-transform duration-300 hover:scale-105"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {/* Top Icon */}
            <div
              className={`absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full ${service.gradient} shadow-lg flex items-center justify-center text-white text-3xl border-4 border-white/30 backdrop-blur-md`}
              style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)', transform: 'translateZ(50px)' }}
            >
              {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
            </div>

            {/* Card Content */}
            <div className="mt-16 text-center space-y-4">
              <h3 className="text-2xl font-bold text-white drop-shadow-md">
                {service.title}
              </h3>
              <p className="text-sm text-gray-100">
                Dive into our <span className="underline">{service.title.toLowerCase()}</span> solutions.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* About Poeage */}
      <div className="max-w-6xl mx-auto px-6 mb-28 z-10">
        <div className="rounded-3xl bg-white/10 shadow-2xl p-8 md:p-14 border border-cyan-500 backdrop-blur-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            About Poeage Technology
          </h2>
          <p className="text-cyan-200 text-lg leading-relaxed text-center md:text-left">
            Founded on <strong>October 31, 2023</strong>, Poeage Technology is a visionary digital company building impactful web, app, and AI solutions. We fuse innovation, design, and scalability to empower businesses through futuristic software solutions.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-xl p-6 md:p-8 shadow-lg border border-cyan-400 transition-shadow duration-300 backdrop-blur-xl hover:shadow-cyan-500/50"
            >
              <FaQuoteLeft className="text-cyan-400 text-2xl mb-4" />
              <p className="italic text-cyan-100">"{t.quote}"</p>
              <p className="mt-4 font-semibold text-white">– {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
