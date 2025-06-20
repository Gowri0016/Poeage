import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import {
  FaAndroid,
  FaApple,
  FaTabletAlt,
  FaPalette,
  FaSyncAlt,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaSearch,
  FaBug,
  FaRocket,
} from 'react-icons/fa';

export default function Appde() {
  const navigate = useNavigate();

  const services = [
    { icon: <FaAndroid className="text-3xl text-green-600" />, title: 'Android Development', desc: 'Robust, scalable, and secure apps built for the world’s most popular platform.' },
    { icon: <FaApple className="text-3xl text-gray-700" />, title: 'iOS Development', desc: 'Elegant, high-performance apps for iPhones and iPads with native Swift/Obj-C.' },
    { icon: <FaTabletAlt className="text-3xl text-purple-600" />, title: 'Cross-Platform Apps', desc: 'React Native & Flutter apps for both Android and iOS from a single codebase.' },
    { icon: <FaPalette className="text-3xl text-pink-500" />, title: 'UI/UX Design', desc: 'Intuitive user interfaces and delightful experiences crafted for engagement.' },
    { icon: <FaSyncAlt className="text-3xl text-yellow-500" />, title: 'App Maintenance', desc: 'Ongoing support, version updates, and bug fixes to keep your app fresh.' },
    { icon: <FaCloudUploadAlt className="text-3xl text-blue-500" />, title: 'Backend Integration', desc: 'APIs, databases, and cloud systems that connect your app to the real world.' },
    { icon: <FaShieldAlt className="text-3xl text-red-600" />, title: 'Security & Encryption', desc: 'Data protection, secure login systems, and GDPR-compliant development.' },
    { icon: <FaSearch className="text-3xl text-indigo-600" />, title: 'App Store Optimization', desc: 'Boost visibility and installs through performance tuning and ASO strategies.' },
    { icon: <FaBug className="text-3xl text-amber-700" />, title: 'Testing & QA', desc: 'Automated and manual testing to ensure your app works flawlessly.' },
    { icon: <FaRocket className="text-3xl text-orange-600" />, title: 'Launch & Scaling', desc: 'We handle deployment and prepare your app to handle thousands of users.' },
  ];

  return (
    <>
      <Header />
      <div className="relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Decorative Balls */}
        <div className="absolute w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse z-0 hidden md:block" />
        <div className="absolute w-72 h-72 bg-red-200 opacity-30 rounded-full blur-2xl top-[60%] left-[70%] animate-bounce z-0 hidden md:block" />
        <div className="absolute w-60 h-60 bg-cyan-300 opacity-30 rounded-full blur-2xl bottom-20 right-10 animate-ping z-0 hidden md:block" />

        {/* Content */}
        <div className="relative z-10 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-8 md:mb-10 transition-opacity duration-700 max-w-4xl mx-auto">
            Mobile App Development
          </h1>

          <p className="max-w-3xl mx-auto text-center text-gray-700 text-base sm:text-lg md:text-xl mb-10 md:mb-12 transition-opacity duration-700">
            We craft high-quality mobile applications with seamless performance, stunning design, and powerful functionality. Whether you’re a startup or enterprise, our apps scale with your vision.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => navigate(`/getquotes?topic=${encodeURIComponent(service.title)}`)}
                className="cursor-pointer bg-white border border-pink-100 rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-pink-600 mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-sm text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
