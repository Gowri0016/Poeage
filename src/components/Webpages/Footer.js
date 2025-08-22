import React, { useContext, useEffect, useState } from "react";
import { DContext } from "../Datacontext/Datacontext.js";
import logo from "../../assests/Poeage_Logo_10.png";
import { AnimatePresence, motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MailIcon,
  PhoneIcon,
  ArrowUp,
  Brain,
  Code,
  Palette,
  Rocket
} from "lucide-react";

const Footer = () => {
  const { navbar = [] } = useContext(DContext);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { icon: <Brain size={20} />, name: "AI Development", path: "/ai" },
    { icon: <Code size={20} />, name: "Web Development", path: "/web" },
    { icon: <Palette size={20} />, name: "App Development", path: "/appde" },
    { icon: <Rocket size={20} />, name: "Software Tools", path: "/soft" },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/poeage", color: "hover:text-blue-400" },
    { Icon: Instagram, href: "https://www.instagram.com/poeage_technology?igsh=MTljMmMyanY4dDlsbw==", color: "hover:text-pink-500" },
    { Icon: Twitter, href: "https://x.com/PoeageCom", color: "hover:text-blue-300" },
    { Icon: Facebook, href: "https://www.facebook.com/share/1BjULrjR2w/", color: "hover:text-blue-600" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-24 pb-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 animate-wave -top-1/2 -left-1/4 rounded-full"></div>
        <div className="absolute w-[180%] h-[180%] bg-gradient-to-l from-pink-400/10 via-purple-500/5 to-blue-400/10 animate-wave2 -bottom-1/2 -right-1/4 rounded-full"></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500/20"
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 space-y-16">
        {/* About Section */}
        <motion.section 
          className="max-w-4xl mx-auto text-center bg-black/40 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-cyan-500/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Vision?
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let's build something extraordinary together. At{" "}
            <span className="text-cyan-400 font-semibold">Poeage Technology</span>, we turn ideas into digital reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="/Aboutus"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-cyan-500/20"
            >
              Start Your Project
            </a>
          </motion.div>
        </motion.section>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={logo}
              alt="Poeage Logo"
              className="w-40 mb-4 mx-auto lg:mx-0 drop-shadow-lg"
            />
            <h3 className="text-2xl font-bold mb-2">Poeage Technology</h3>
            <p className="text-gray-400 mb-4">
              Creating digital experiences that transform businesses and empower innovation.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map(({ Icon, href, color }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white transition-all ${color} hover:bg-cyan-900 hover:scale-110`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <motion.li 
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={service.path}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <span className="text-cyan-500">{service.icon}</span>
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3">
              {Array.isArray(navbar) && navbar.length > 0 ? (
                navbar.map(({ name, path }, idx) => (
                  <motion.li 
                    key={idx}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {name}
                    </a>
                  </motion.li>
                ))
              ) : (
                <>
                  <li><a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a></li>
                  <li><a href="/aboutus" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></li>
                </>
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Get In Touch</h4>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-center gap-2 justify-center lg:justify-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MailIcon className="w-5 h-5 text-cyan-500" />
                <a href="mailto:info@poeage.com" className="text-gray-300 hover:text-cyan-400 transition-colors">info@poeage.com</a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2 justify-center lg:justify-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <PhoneIcon className="w-5 h-5 text-cyan-500" />
                <a href="tel:7358039616" className="text-gray-300 hover:text-cyan-400 transition-colors">73580-39616</a>
              </motion.li>
            </ul>
            
            <div className="mt-6 p-4 bg-black/30 rounded-lg border border-cyan-500/20">
              <p className="text-sm text-gray-400 mb-2">Have a project in mind?</p>
              <motion.a
                href="/quotes"
                className="inline-block text-cyan-400 font-medium text-sm hover:text-cyan-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                Get a free quote →
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="text-center pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Poeage Technology Pvt. Ltd. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full shadow-lg border-2 border-white/20 hover:border-white transition-all z-50 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-6 h-6 text-white" />
            </motion.div>
            <span className="absolute -top-10 right-0 bg-gray-900 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Back to top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg) scale(1); opacity: 0.7; }
            50% { transform: rotate(180deg) scale(1.2); opacity: 0.4; }
            100% { transform: rotate(360deg) scale(1); opacity: 0.7; }
          }
          @keyframes wave2 {
            0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
            50% { transform: rotate(-180deg) scale(1.3); opacity: 0.3; }
            100% { transform: rotate(-360deg) scale(1); opacity: 0.5; }
          }
          .animate-wave { animation: wave 25s linear infinite; }
          .animate-wave2 { animation: wave2 30s linear infinite; }
        `}
      </style>
    </footer>
  );
};

export default Footer;