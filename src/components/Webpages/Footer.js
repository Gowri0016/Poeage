import React, { useContext } from "react";
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
  const { navbar } = useContext(DContext);

  // Variants for staggered animation
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
    <footer className="bg-gray-900 text-white py-12 relative">
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
            <h6 className="uppercase font-bold text-2xl sm:text-3xl mb-4 text-gradient bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
              About Us
            </h6>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Welcome to <span className="text-sky-500 font-semibold">Poeage IT Solution</span>, your trusted partner in innovative web development and IT solutions.
              Our founder, <span className="text-sky-500 hover:text-sky-300">Mr. Gowrishankar</span>, leads us to redefine digital success.
            </p>
          </div>
        </motion.section>

        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <img src={logo} alt="Poeage Corporation" className="h-20 w-56 mb-4" />
            <h2 className="text-3xl">Poeage IT Solution.Pvt.Ltd</h2>
            <p className="text-gray-400 mt-2">Leading IT solutions for your business growth.</p>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 text-sm">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <MailIcon className="w-5 h-5 text-pink-500" />
                  <a href="mailto:info@poeage.com" className="hover:text-pink-400">info@poeage.com</a>
                </li>
                <li className="flex items-center space-x-2">
                  <PhoneIcon className="w-5 h-5 text-green-500" />
                  <a href="tel:7358039616" className="hover:text-green-400">73580-39616</a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/in/g-gowri-shankar"
                  className="hover:text-indigo-400"
                >
                  <Linkedin size={28} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.instagram.com/poeage__com?igsh=MTljMmMyanY4dDlsbw=="
                  className="hover:text-indigo-400"
                >
                  <Instagram size={28} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://x.com/PoeageCom?t=_csbreCayXikIYn-JA0hpw&s=09"
                  className="hover:text-indigo-400"
                >
                  <Twitter size={28} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.facebook.com/people/Poeage/61575953696329"
                  className="hover:text-indigo-400"
                >
                  <Facebook size={28} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-10 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Poeage IT Solution Pvt. Ltd. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
