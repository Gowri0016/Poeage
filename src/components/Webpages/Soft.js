import React from 'react';
import { Header } from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import {
  FaCode, FaMobileAlt, FaCloud, FaCogs, FaLock,
  FaRobot, FaDatabase, FaTools, FaChartLine, FaRocket,
} from 'react-icons/fa';

export default function Soft() {
  const features = [
    {
      icon: <FaCode className="text-3xl text-blue-500" />,
      title: "Custom Software",
      desc: "Tailored applications to match your unique business processes and goals.",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-cyan-500" />,
      title: "Mobile Development",
      desc: "Native and hybrid mobile apps with responsive, modern user experiences.",
    },
    {
      icon: <FaCloud className="text-3xl text-pink-500" />,
      title: "Cloud Integration",
      desc: "Scalable cloud solutions for flexibility, cost-efficiency, and performance.",
    },
    {
      icon: <FaCogs className="text-3xl text-purple-500" />,
      title: "Automation Tools",
      desc: "Accelerate workflows and reduce manual tasks through smart automation.",
    },
    {
      icon: <FaLock className="text-3xl text-red-500" />,
      title: "Cybersecurity Solutions",
      desc: "Robust security systems and audits to protect your digital infrastructure.",
    },
    {
      icon: <FaRobot className="text-3xl text-yellow-500" />,
      title: "AI & ML Integration",
      desc: "Intelligent software that learns, adapts, and evolves with your data.",
    },
    {
      icon: <FaDatabase className="text-3xl text-indigo-500" />,
      title: "Database Management",
      desc: "Secure, optimized, and scalable database solutions for structured data.",
    },
    {
      icon: <FaTools className="text-3xl text-emerald-500" />,
      title: "DevOps & CI/CD",
      desc: "Continuous integration and deployment pipelines for faster delivery.",
    },
    {
      icon: <FaChartLine className="text-3xl text-sky-600" />,
      title: "Data Analytics",
      desc: "Actionable insights from data using visualization, mining, and BI tools.",
    },
    {
      icon: <FaRocket className="text-3xl text-orange-500" />,
      title: "Startup MVP Development",
      desc: "Rapid prototyping and lean MVP builds to validate your business idea.",
    },
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

        {/* Content Section */}
        <div className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-10"
          >
            Software Development Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-gray-700 text-lg md:text-xl mb-12"
          >
            From intelligent automation to enterprise-grade security, our software services are built to scale with your vision. We empower businesses with innovative, future-proof digital solutions.
          </motion.p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="bg-white border border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
