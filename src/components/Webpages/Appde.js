import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaMobileAlt, FaTabletAlt, FaRocket, FaCogs, FaCloud } from 'react-icons/fa';

export default function AppDevelopment() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaMobileAlt />,
      title: "iOS App Development",
      desc: "Design and build high-performance iOS applications for iPhone and iPad.",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaTabletAlt />,
      title: "Android App Development",
      desc: "Develop responsive and scalable Android apps for diverse devices.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaRocket />,
      title: "Cross-Platform Apps",
      desc: "Build apps that work seamlessly across iOS, Android, and web platforms.",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaCogs />,
      title: "Enterprise Applications",
      desc: "Robust enterprise apps for workflow automation and management.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqv8efftEpJecTekX0TF2RYJLpcffWTj_TFZNxCKB3WyVK4g-9Z5w1H99iX46NbHR40g&usqp=CAU"
    },
    {
      icon: <FaCloud />,
      title: "App Maintenance & Support",
      desc: "Ongoing support, updates, and performance monitoring for your apps.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-20 md:py-28 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-b-3xl shadow-lg"
      >
        <FaMobileAlt className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Application Development Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Explore our 5 unique application development services including iOS, Android, Cross-Platform, Enterprise, and App Support.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="mt-4 md:mt-6 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold text-white bg-black hover:bg-gray-800 shadow-md"
        >
          Contact Us
        </button>
      </motion.div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-500 text-2xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {service.desc}
              </p>
              <button
                onClick={() => navigate('/quotes')}
                className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 shadow-md"
              >
                Continue
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-12 md:py-16 text-center px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
          Turn Your App Idea into Reality
        </h2>
        <button
          onClick={() => navigate('/contact')}
          className="px-6 md:px-8 py-2 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-600 hover:to-green-600 shadow-lg"
        >
          Contact Us
        </button>
      </div>

      <Footer />
    </>
  );
}