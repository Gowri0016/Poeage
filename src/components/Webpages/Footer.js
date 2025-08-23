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
  Users,
  ShieldCheck
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
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] bg-cyan-700/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-purple-600/10 blur-2xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 space-y-20">
        {/* Call to Action */}
        <motion.section
          className="max-w-5xl mx-auto text-center bg-gradient-to-br from-cyan-900/30 via-black/40 to-blue-900/30 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-cyan-500/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
            Powering Ideas into Innovation
          </motion.h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Poeage Technology brings together creativity, strategy, and technology to create impactful digital solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-cyan-500/30"
          >
            Let's Collaborate
          </a>
        </motion.section>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Intro */}
          <div className="text-center lg:text-left">
            <img src={logo} alt="Poeage Logo" className="w-36 mb-4 mx-auto lg:mx-0" />
            <h3 className="text-xl font-bold mb-2">Poeage Technology</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Building smarter solutions with passion and innovation to empower businesses worldwide.
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

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map(({ Icon, href, color }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white transition-all ${color} hover:bg-cyan-900 hover:scale-110`}
                >
                  <Icon size={18} />
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
                <a href="tel:7358039616" className="hover:text-cyan-400 transition">+91 805-688-9616</a>
              </li>
             <h3>Have a mind projects ?</h3>
             <a href="/quotes">Getquotes</a>
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
            className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition z-50"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
