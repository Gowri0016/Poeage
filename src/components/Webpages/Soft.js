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
      icon: <FaCode />,
      title: "Custom Software",
      desc: "Tailored applications to match your unique business processes and goals.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      desc: "Native and hybrid mobile apps with responsive, modern user experiences.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      desc: "Scalable cloud solutions for flexibility, cost-efficiency, and performance.",
    },
    {
      icon: <FaCogs />,
      title: "Automation Tools",
      desc: "Accelerate workflows and reduce manual tasks through smart automation.",
    },
    {
      icon: <FaLock />,
      title: "Cybersecurity Solutions",
      desc: "Robust security systems and audits to protect your digital infrastructure.",
    },
    {
      icon: <FaRobot />,
      title: "AI & ML Integration",
      desc: "Intelligent software that learns, adapts, and evolves with your data.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      desc: "Secure, optimized, and scalable database solutions for structured data.",
    },
    {
      icon: <FaTools />,
      title: "DevOps & CI/CD",
      desc: "Continuous integration and deployment pipelines for faster delivery.",
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      desc: "Actionable insights from data using visualization, mining, and BI tools.",
    },
    {
      icon: <FaRocket />,
      title: "Startup MVP Development",
      desc: "Rapid prototyping and lean MVP builds to validate your business idea.",
    },
  ];

  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-100 min-h-screen">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Decorative Blurs */}
        <div className="absolute w-[350px] h-[350px] bg-pink-300 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse z-0 hidden md:block" />
        <div className="absolute w-[280px] h-[280px] bg-purple-300 opacity-30 rounded-full blur-2xl top-[65%] left-[70%] animate-bounce z-0 hidden md:block" />
        <div className="absolute w-[240px] h-[240px] bg-cyan-300 opacity-30 rounded-full blur-2xl bottom-10 right-10 animate-ping z-0 hidden md:block" />

        {/* Content */}
        <div className="relative z-10 py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6"
          >
            Software Development Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-gray-700 text-lg md:text-xl mb-12"
          >
            From intelligent automation to enterprise-grade security, our software services are built to scale with your vision.
          </motion.p>

          {/* Feature Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="bg-white/60 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-6 hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 text-white text-2xl shadow-md mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-center text-blue-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
