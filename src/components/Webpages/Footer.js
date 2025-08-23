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
  Rocket,
  Globe,
  Sparkles
} from "lucide-react";

const Footer = () => {
  const { navbar = [] } = useContext(DContext);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { icon: <Brain size={20} />, name: "AI Development", path: "/ai" },
    { icon: <Code size={20} />, name: "Web Development", path: "/web" },
    { icon: <Palette size={20} />, name: "App Development", path: "/appde" },
    { icon: <Rocket size={20} />, name: "Software Tools", path: "/soft" },
    { icon: <Globe size={20} />, name: "Cloud Solutions", path: "/cloud" },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: "https://www.linkedin.com/in/poeage", color: "hover:text-blue-400" },
    { Icon: Instagram, href: "https://www.instagram.com/poeage_technology", color: "hover:text-pink-500" },
    { Icon: Twitter, href: "https://x.com/PoeageCom", color: "hover:text-blue-300" },
    { Icon: Facebook, href: "https://www.facebook.com/share/1BjULrjR2w/", color: "hover:text-blue-600" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white pt-28 pb-16 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-cyan-700/20 blur-3xl rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 space-y-24">
        {/* Call to Action */}
        <motion.section
          className="max-w-5xl mx-auto text-center bg-gradient-to-br from-cyan-900/30 via-black/40 to-purple-900/30 backdrop-blur-xl rounded-[2rem] p-12 shadow-2xl border border-cyan-500/20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 tracking-tight">
            Transforming Vision into Reality
          </motion.h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Poeage Technology blends innovation, design, and intelligence to craft futuristic solutions that empower businesses globally.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-purple-500/30"
          >
            <Sparkles className="w-5 h-5" /> Let's Build Together
          </a>
        </motion.section>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Intro */}
          <div className="text-center lg:text-left">
            <img src={logo} alt="Poeage Logo" className="w-36 mb-4 mx-auto lg:mx-0 drop-shadow-lg" />
            <h3 className="text-xl font-bold mb-2">Poeage Technology</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Innovating with passion to design powerful digital ecosystems that shape the future.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">About Us</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Founded on <span className="text-cyan-300 font-medium">October 31, 2023</span>, Poeage Technology has been committed to bridging creativity and intelligence to deliver cutting-edge solutions for a global audience.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Services</h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a href={service.path} className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition">
                    {service.icon}
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Connect With Us</h4>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map(({ Icon, href, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-white transition-all ${color} hover:bg-cyan-900 hover:scale-110 shadow-lg`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-cyan-500" />
                <a href="mailto:info@poeage.com" className="hover:text-cyan-400 transition">info@poeage.com</a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-cyan-500" />
                <a href="tel:8056889616" className="hover:text-cyan-400 transition">+91 805-688-9616</a>
              </li>
              <li className="pt-4">
                <p className="font-semibold text-gray-200">Have a project in mind?</p>
                <a href="/quotes" className="text-cyan-400 hover:underline">Get a Quote →</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-10 border-t border-gray-800 text-gray-500 text-sm">
          © {new Date().getFullYear()} Poeage Technology Pvt. Ltd. | Designed with ❤️ in Tamil Nadu
        </div>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-2xl shadow-lg hover:scale-125 transition z-50"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
