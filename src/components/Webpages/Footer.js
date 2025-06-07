import React, { useContext, useEffect, useState } from "react";
import { DContext } from "../Datacontext/Datacontext";
import logo from "../../assest/logo.png";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MailIcon,
  PhoneIcon,
} from "lucide-react";

const Footer = () => {
  const { navbar = [] } = useContext(DContext);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
      {/* About Us Section */}
<motion.section
  className="container mx-auto py-8 px-4 sm:px-6 flex justify-center relative z-10"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="bg-gray-900 text-gray-200 rounded-2xl p-6 sm:p-10 w-full max-w-3xl text-center shadow-lg">
    <h6 className="uppercase font-bold text-2xl sm:text-3xl mb-4 text-gradient bg-gradient-to-r to-blue-500 from-cyan-500 bg-clip-text text-transparent">
      About Us
    </h6>
    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
      Welcome to{" "}
      <span className="text-cyan-500 font-semibold hover:text-cyan-300">
        Poeage IT Solution
      </span>
      , your trusted partner in innovative web development and IT solutions.
    </p>
    <a
      href="/Aboutus"
      className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
    >
      Explore More
    </a>
  </div>
</motion.section>


        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <img
              src={logo}
              alt="Poeage Corporation"
              className="h-20 w-56 mb-4 mx-auto lg:mx-0"
            />
            <h2 className="text-3xl">Poeage IT Solution.Pvt.Ltd</h2>
            <p className="text-gray-400 mt-2">
              Leading IT solutions for your business growth.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {Array.isArray(navbar) &&
                navbar.map(({ name, path }) => (
                  <li key={name}>
                    <a href={path} className="hover:text-cyan-400 transition">
                      {name}
                    </a>
                  </li>
                ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 text-sm"
          >
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <MailIcon className="w-5 h-5 text-pink-500" />
                  <a
                    href="mailto:info@poeage.com"
                    className="hover:text-pink-400"
                  >
                    info@poeage.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <PhoneIcon className="w-5 h-5 text-green-500" />
                  <a href="tel:7358039616" className="hover:text-green-400">
                    73580-39616
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/poeage",
                    label: "LinkedIn",
                    hoverColor: "cyan-500",
                  },
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/poeage__com",
                    label: "Instagram",
                    hoverColor: "pink-500",
                  },
                  {
                    Icon: Twitter,
                    href: "https://x.com/PoeageCom",
                    label: "Twitter",
                    hoverColor: "blue-500",
                  },
                  {
                    Icon: Facebook,
                    href: "https://www.facebook.com/share/1BjULrjR2w/",
                    label: "Facebook",
                    hoverColor: "sky-400",
                  },
                ].map(({ Icon, href, label, hoverColor }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`hover:text-${hoverColor}`}
                  >
                    <Icon size={28} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-10 text-center text-sm text-gray-500 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {new Date().getFullYear()} Poeage IT Solution Pvt. Ltd. All
            rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-lg z-50 border-2 border-white"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-label="Back to top"
        >
          <motion.span
            className="text-xl font-bold"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
          >
            ↑
          </motion.span>
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
