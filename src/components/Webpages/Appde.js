import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import {
  FaAndroid, FaApple, FaTabletAlt, FaPalette, FaSyncAlt,
  FaCloudUploadAlt, FaShieldAlt, FaSearch, FaBug, FaRocket
} from 'react-icons/fa';

export default function Appde() {
  const navigate = useNavigate();

  const services = [
    { icon: <FaAndroid />, title: 'Android Development', desc: 'Robust, scalable, and secure apps built for the world’s most popular platform.', color: 'text-green-500' },
    { icon: <FaApple />, title: 'iOS Development', desc: 'Elegant, high-performance apps for iPhones and iPads with native Swift/Obj-C.', color: 'text-gray-800' },
    { icon: <FaTabletAlt />, title: 'Cross-Platform Apps', desc: 'React Native & Flutter apps for Android and iOS from a single codebase.', color: 'text-purple-600' },
    { icon: <FaPalette />, title: 'UI/UX Design', desc: 'Delightful interfaces crafted for usability and engagement.', color: 'text-pink-500' },
    { icon: <FaSyncAlt />, title: 'App Maintenance', desc: 'Ongoing support and updates to keep your app running smoothly.', color: 'text-yellow-500' },
    { icon: <FaCloudUploadAlt />, title: 'Backend Integration', desc: 'APIs and cloud integrations that connect your app to the real world.', color: 'text-blue-500' },
    { icon: <FaShieldAlt />, title: 'Security & Encryption', desc: 'GDPR-compliant development with secure authentication systems.', color: 'text-red-600' },
    { icon: <FaSearch />, title: 'App Store Optimization', desc: 'Boost app visibility and installs with expert ASO strategies.', color: 'text-indigo-600' },
    { icon: <FaBug />, title: 'Testing & QA', desc: 'Automated and manual testing for perfect performance.', color: 'text-amber-700' },
    { icon: <FaRocket />, title: 'Launch & Scaling', desc: 'Seamless deployment and growth-ready architecture.', color: 'text-orange-600' },
  ];

  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-50">

        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

        {/* Decorative Blurs */}
        <div className="absolute w-[400px] h-[400px] bg-pink-300 opacity-20 rounded-full blur-3xl top-16 left-10 z-0 hidden md:block" />
        <div className="absolute w-[300px] h-[300px] bg-indigo-200 opacity-30 rounded-full blur-2xl bottom-24 right-10 z-0 hidden md:block" />

        {/* Content Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6 drop-shadow-md">
            Mobile App Development
          </h1>
          <p className="text-center text-gray-700 max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-12">
            From ideation to launch, we create elegant, powerful mobile applications that scale with your business.
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => navigate(`/getquotes?topic=${encodeURIComponent(service.title)}`)}
                className="relative group cursor-pointer p-6 rounded-3xl border border-gray-200 bg-white/60 backdrop-blur-lg shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-pink-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-lg transition duration-300 z-0" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-2xl mb-4 ${service.color}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
