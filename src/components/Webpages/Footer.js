import React, { useContext } from "react";
import { DContext } from "../Datacontext/Datacontext";
import { motion } from "framer-motion";
import {
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
} from "lucide-react";

const Footer = () => {
  const { navbar } = useContext(DContext);

  return (
    <footer className="bg-white text-white text-center lg:text-left relative p-6 sm:p-10 overflow-hidden">
      {/* Floating Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"
          animate={{ x: [0, 250, -250, 0], y: [0, -150, 150, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
        <motion.div
          className="w-48 h-48 bg-gradient-to-t from-yellow-500 to-green-500 rounded-full blur-3xl opacity-20 animate-pulse"
          animate={{ x: [-200, 200, -200], y: [-100, 100, -100] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
      </div>

      {/* What We Do & Contact Sections */}
      <section className="container mx-auto py-10 px-4 flex flex-col items-center relative z-10">
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-gray-900 text-gray-200 rounded-2xl p-6 shadow-md w-full max-w-md text-center"
  >
    <h6 className="uppercase font-bold text-2xl sm:text-3xl mb-4 text-gradient bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
      Contact Us
    </h6>
    <ul className="space-y-4 text-sm sm:text-base text-left">
      <li className="flex items-center space-x-2">
        <MailIcon className="w-5 h-5 text-pink-500" />
        <a href="mailto:info@poeage.com" className="hover:text-pink-400">info@poeage.com</a>
      </li>
      <li className="flex items-center space-x-2 flex-wrap">
        <PhoneIcon className="w-5 h-5 text-green-500" />
        <a href="tel:7358039616" className="hover:text-green-400">73580-39616</a>
        <span>/</span>
        <a href="tel:8056889616" className="hover:text-green-400">80568-89616</a>
      </li>
      <li className="flex items-center space-x-2">
        <MessageCircleIcon className="w-5 h-5 text-green-600" />
        <a href="https://wa.me/917358039616" className="hover:text-green-500">WhatsApp</a>
      </li>
      <li className="flex items-center space-x-2">
        <InstagramIcon className="w-5 h-5 text-pink-500" />
        <a href="https://www.instagram.com/poeage_com" className="hover:text-pink-400">Instagram</a>
      </li>
      <li className="flex items-center space-x-2">
        <LinkedinIcon className="w-5 h-5 text-blue-700" />
        <a href="https://www.linkedin.com/in/poeage/" className="hover:text-blue-600">LinkedIn</a>
      </li>
      <li className="flex items-center space-x-2">
        <TwitterIcon className="w-5 h-5 text-sky-500" />
        <a href="https://x.com/PoeageCom" className="hover:text-sky-400">Twitter</a>
      </li>
      <li className="flex items-center space-x-2">
        <FacebookIcon className="w-5 h-5 text-blue-600" />
        <a href="https://www.facebook.com/profile.php?id=61575707375728" className="hover:text-blue-500">Facebook</a>
      </li>
    </ul>
  </motion.div>



      </section>

      {/* Live Location */}
      <motion.div
        className="container mx-auto px-4 py-10 bg-gray-900 text-gray-200 rounded-2xl shadow-md relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h6 className="uppercase font-bold text-2xl sm:text-3xl mb-4 text-left text-gradient bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
          Live Location
        </h6>
        <div className="w-full h-72 overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9300.905047505299!2d77.54026110259773!3d11.440255099117984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93fe013ef4605%3A0xba11f0c512bc0213!2sAyyampalayam%2C%20Tamil%20Nadu%20638455!5e0!3m2!1sen!2sin!4v1736442655282!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        className="text-center py-4 text-gray-500 text-sm relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>© 2025 Poeage.com — All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
