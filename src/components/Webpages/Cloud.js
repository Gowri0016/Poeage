import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaRocket, FaServer, FaGlobe } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function WebServices() {
  const navigate = useNavigate();
  const [billing, setBilling] = useState("monthly");

  const services = [
    { icon: <FaLaptopCode className="text-indigo-600" />, title: "Custom Web Development", desc: "Modern responsive websites.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" },
    { icon: <FaMobileAlt className="text-green-600" />, title: "Mobile-Optimized Sites", desc: "Seamless on all devices.", img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80" },
    { icon: <FaPalette className="text-pink-600" />, title: "UI/UX Design", desc: "Engaging user interfaces.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" },
    { icon: <FaRocket className="text-red-600" />, title: "Performance Optimization", desc: "Boost site speed and SEO.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" },
  ];

 

  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <Header />

      {/* Hero */}
      <motion.div className="text-center py-24 px-6 lg:px-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-b-3xl shadow-lg"
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <FaLaptopCode className="w-20 h-20 mx-auto mb-6 animate-bounce" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Poeage Web Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">Cutting-edge web solutions for businesses, startups, and enterprises.</p>
      </motion.div>

      {/* Services */}
      <motion.div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
        {services.map((service, i) => (
          <motion.div key={i} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition transform hover:-translate-y-2 hover:scale-105" variants={cardVariants}>
            <img src={service.img} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
              <button onClick={() => navigate('/quotes')} className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 shadow-md transition">Get a Quote</button>
            </div>
          </motion.div>
        ))}
      </motion.div>

  

      <Footer />
    </>
  );
}