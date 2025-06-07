import React, { useContext, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaBullseye,
  FaLightbulb,
  FaSmile,
  FaCubes,
  FaStarHalfAlt,
  FaHandsHelping,
  FaCaretDown,
  FaBars,
  FaTimes,
  FaBriefcase,
} from "react-icons/fa";
import { DContext } from "../Datacontext/Datacontext";
import logo from "../../assest/logo.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MailIcon,
  PhoneIcon,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Header() {
  const { navbar } = useContext(DContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 z-40 w-full bg-gradient-to-r from-cyan-400  to-blue-600 shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 h-16">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src={navbar.logo || logo}
            alt="Poeage Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-10 text-lg font-medium">
          <a
            href="/"
            className=""
            aria-label="Home"
          >
            {capitalize(navbar.home)}
          </a>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-1 0"
              aria-haspopup="true"
              aria-expanded={menuOpen}
            >
              <FaBriefcase className="text-xl" />
              {capitalize(navbar.menu)}
              <FaCaretDown className="ml-1" />
            </button>
            {menuOpen && (
              <div className="absolute left-0 mt-2 w-44 rounded-md bg-white text-gray-900 shadow-lg ring-1 ring-black ring-opacity-5">
                <a
                  href="/internship"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition"
                >
                  Internship
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-pink-600 via-purple-700 to-indigo-600 text-white px-6 py-4 space-y-4 shadow-inner">
          <a
            href="/"
            className="block text-lg font-semibold hover:text-pink-300 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            {capitalize(navbar.home)}
          </a>
          <a
            href="/internship"
            className="block text-lg font-semibold hover:text-pink-300 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Internship
          </a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { navbar = [] } = useContext(DContext);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 120);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8 relative overflow-hidden">
      <Header />
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-24">


        <motion.div
          className="grid lg:grid-cols-3 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <img
              src={logo}
              alt="Poeage Logo"
              className="mx-auto lg:mx-0 h-20 w-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">
              Poeage IT Solution Pvt. Ltd.
            </h2>
            <p className="text-gray-400">
              Innovating the future with efficient web and mobile solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {Array.isArray(navbar) &&
                navbar.map(({ name, path }) => (
                  <li key={name}>
                    <a href={path} className="hover:text-pink-500 transition">
                      {name}
                    </a>
                  </li>
                ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <MailIcon className="w-5 h-5 text-pink-500" />
                <a
                  href="mailto:info@poeage.com"
                  className="hover:text-cyan-400 transition"
                >
                  info@poeage.com
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <PhoneIcon className="w-5 h-5 text-green-500" />
                <a href="tel:7358039616" className="hover:text-green-400 transition">
                  +91 73580 39616
                </a>
              </li>
            </ul>

            <div className="flex justify-center lg:justify-start space-x-5 mt-5 text-blue-500">
              {[
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/poeage",
                  label: "LinkedIn",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/poeage__com",
                  label: "Instagram",
                },
                {
                  Icon: Twitter,
                  href: "https://x.com/PoeageCom",
                  label: "Twitter",
                },
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/share/1BjULrjR2w/",
                  label: "Facebook",
                },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.3, color: "#F472B6" }}
                  className="transition-colors duration-200"
                >
                  <Icon size={26} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Poeage IT Solution Pvt. Ltd. All rights
          reserved.
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-10 right-10 bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-4 rounded-full shadow-lg  border-2 border-white z-50"
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 25 }}
        >
          ↑
        </motion.button>
      )}
    </footer>
  );
}

export default function Aboutus() {
  return (
    <>
      <Header />
      <motion.main
        className="min-h-screen bg-gradient-to-r from-cyan-400 to-blue-500 text-white pt-24 px-6 lg:px-20 pb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="text-center max-w-4xl mx-auto mb-24">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-white mb-4">
            Step Into Tomorrow with <span className="text-black">Poeage</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Harnessing cutting-edge tech and visionary design to empower businesses
            for a smarter, sustainable future.
          </p>
        </motion.section>

        {/* Core Principles */}
        <motion.section
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20"
        >
          {[
            {
              icon: <FaRocket className=" text-4xl mx-auto mb-3" />,
              title: "Mission Driven",
              desc: "Creating dynamic digital ecosystems that boost efficiency and growth through innovation.",
            },
            {
              icon: <FaBullseye className=" text-4xl mx-auto mb-3" />,
              title: "Leading Vision",
              desc: "Pioneering technologies to shape a future where every brand thrives on smart solutions.",
            },
            {
              icon: <FaLightbulb className=" text-4xl mx-auto mb-3" />,
              title: "Innovative Spirit",
              desc: "Challenging conventions to deliver creative and impactful digital experiences.",
            },
          ].map((val, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/10 rounded-3xl p-8 shadow-lg backdrop-blur-sm text-center"
            >
              {val.icon}
              <h3 className="text-2xl font-semibold mb-2">{val.title}</h3>
              <p className="text-white text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Metrics */}
        <motion.section
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center text-white mb-20"
        >
          {[
            { icon: <FaSmile className="mx-auto  text-4xl" />, label: "Satisfied Clients", value: "10+" },
            { icon: <FaCubes className="mx-auto  text-4xl" />, label: "Projects Delivered", value: "20+" },
            { icon: <FaStarHalfAlt className="mx-auto  text-4xl" />, label: "Average Rating", value: "4.8★" },
            { icon: <FaHandsHelping className="mx-auto  text-4xl" />, label: "Support Availability", value: "24/7" },
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              {item.icon}
              <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
              <p className="text-sm text-white">{item.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Call to Action */}
        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 rounded-3xl shadow-xl p-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">
              🚀 Ready to Amplify Your Digital Presence?
            </h2>
            <p className="text-gray-200 opacity-90 max-w-lg">
              Explore AI-powered platforms and smart solutions designed to
              personalize and elevate your brand’s impact.
            </p>
          </div>
          <a
            href="/quotes"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Get Quotes
          </a>
        </motion.section>
      </motion.main>
      <Footer />
    </>
  );
}
