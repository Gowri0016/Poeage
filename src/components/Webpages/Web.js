import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMobileAlt, FaLaptopCode, FaLock, FaBolt, FaCogs,
  FaPalette, FaRocket, FaSync, FaCodeBranch, FaChartLine,
} from 'react-icons/fa';
import Footer from './Footer';
import { Header } from './Header';

const features = [
  {
    title: 'Responsive Design',
    icon: <FaMobileAlt />,
    description: 'Our websites automatically adapt to mobile, tablet, and desktop devices for the best user experience on any screen.',
  },
  {
    title: 'Custom UI/UX',
    icon: <FaPalette />,
    description: 'We create engaging, intuitive user interfaces tailored to your brand identity and customer needs.',
  },
  {
    title: 'Fast Performance',
    icon: <FaBolt />,
    description: 'Optimized code and images ensure quick load times and seamless interaction for users worldwide.',
  },
  {
    title: 'SEO Optimization',
    icon: <FaChartLine />,
    description: 'Built with SEO best practices to help your site rank higher and drive more organic traffic.',
  },
  {
    title: 'Secure Architecture',
    icon: <FaLock />,
    description: 'We follow industry-standard security practices to safeguard your site and protect user data.',
  },
  {
    title: 'CMS Integration',
    icon: <FaCogs />,
    description: 'We integrate with WordPress, Strapi, Sanity, or custom CMS so you can easily manage your content.',
  },
  {
    title: 'Progressive Web App (PWA)',
    icon: <FaRocket />,
    description: 'Enable offline access, native-like experience, and installable apps using modern PWA technology.',
  },
  {
    title: 'Cross-browser Support',
    icon: <FaSync />,
    description: 'We test across Chrome, Firefox, Safari, Edge, and more to ensure consistent performance everywhere.',
  },
  {
    title: 'Scalable Architecture',
    icon: <FaCodeBranch />,
    description: 'Designed to grow with your business, supporting future enhancements and new features easily.',
  },
  {
    title: 'Maintenance & Support',
    icon: <FaLaptopCode />,
    description: 'We provide post-launch support and continuous maintenance to keep your site running smoothly.',
  },
];

export default function Web() {
  return (
    <>
      <Header />

      <section className="relative bg-gradient-to-br from-white to-blue-50 py-20 px-6 min-h-screen text-gray-800 overflow-hidden">

        {/* Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Decorative Balls - Hidden on small screens */}
        <div className="absolute w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse z-0 hidden md:block" />
        <div className="absolute w-72 h-72 bg-red-200 opacity-30 rounded-full blur-2xl top-[60%] left-[70%] animate-bounce z-0 hidden md:block" />
        <div className="absolute w-60 h-60 bg-cyan-300 opacity-30 rounded-full blur-2xl bottom-20 right-10 animate-ping z-0 hidden md:block" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Web Development Services
          </h2>
          <p className="text-md md:text-lg text-gray-600">
            At Poeage IT Solution, we build modern, powerful, and scalable websites tailored to your business vision.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-3xl mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
