import React, { useState, useEffect } from 'react';
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
    name: 'Shreenithi KM.',
    quote: 'Excellent app experience—visually appealing, fast, and perfectly tailored to our needs.',
  },
];

export const Services = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 bg-transparent min-h-screen text-black overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-transparent opacity-20 blur-3xl" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-transparent rounded-full z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-transparent opacity-30 blur-[120px] rounded-full z-0" />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-light text-center text-black mb-20 drop-shadow-2xl">
        Explore Our Futuristic Services
      </h1>

      {/* Services Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-10 md:gap-14 px-6 mb-28">
        {services.map((service, i) => (
          <div
            key={i}
            onClick={() => navigate(service.path)}
            className="relative cursor-pointer w-[260px] md:w-[300px] rounded-3xl p-8 md:p-10 border-[1.5px] border-blue-600 bg-white shadow-[0_20px_60px_rgba(0,255,255,0.3)] backdrop-blur-2xl"
          >
            <div
              className={`absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full ${service.gradient} text-blue-500 bg-white text-3xl border-4 border-blue-500 flex items-center justify-center shadow-lg`}
            >
              {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
            </div>

            <div className="mt-16 text-center space-y-4">
              <h3 className="text-2xl font-medium text-gray-900 drop-shadow">
                {service.title}
              </h3>
              <p className="text-sm text-gray-700">
                Explore our <span className="underline decoration-blue-500">{service.title.toLowerCase()}</span> solutions.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 mb-28 z-10">
        <div className="rounded-3xl bg-white/10 shadow-2xl p-8 md:p-14 border border-blue-500 backdrop-blur-2xl">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-center md:text-left">
            About Poeage Technology
          </h2>
          <p className="text-black text-lg leading-relaxed text-center md:text-left">
            Founded on <strong>October 31, 2023</strong>, Poeage Technology is a visionary digital company building impactful web, app, and AI solutions. We fuse innovation, design, and scalability to empower businesses through futuristic software solutions.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto px-6 mb-32 text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-14">Client Testimonials</h2>

        <div className="relative bg-white/10 rounded-xl p-6 md:p-10 shadow-lg border border-blue-400 transition duration-500 backdrop-blur-xl hover:shadow-cyan-500/50">
          <FaQuoteLeft className="text-blue-500 text-2xl mb-4 mx-auto" />
          <p className="italic text-black">"{testimonials[index].quote}"</p>
          <p className="mt-4 font-semibold text-black">– {testimonials[index].name}</p>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-300'} transition duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
