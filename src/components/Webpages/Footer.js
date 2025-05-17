import React, { useContext } from "react";
import { DContext } from "../Datacontext/Datacontext";
import logo from '../../assest/logo.png'
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, MailIcon, PhoneIcon, MessageCircleIcon, InstagramIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "lucide-react";

const Footer = () => {
  const { navbar } = useContext(DContext);

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <img src={logo} alt="Poeage Corporation" className="h-20 w-56 mb-4" />
            <h2 className="text-3xl font-bold">Poeage Corporation Pvt. Ltd.</h2>
            <p className="text-gray-400 mt-2">Leading IT solutions for your business growth.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2"><MailIcon className="w-5 h-5 text-pink-500" /><a href="mailto:info@poeage.com" className="hover:text-pink-400">info@poeage.com</a></li>
                <li className="flex items-center space-x-2"><PhoneIcon className="w-5 h-5 text-green-500" /><a href="tel:7358039616" className="hover:text-green-400">73580-39616</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/g-gowri-shankar " className="hover:text-indigo-400"><Linkedin size={28} /></a>
                <a href="https://www.instagram.com/poeage__com?igsh=MTljMmMyanY4dDlsbw==" className="hover:text-indigo-400"><Instagram size={28} /></a>
                <a href="https://x.com/PoeageCom?t=_csbreCayXikIYn-JA0hpw&s=09" className="hover:text-indigo-400"><Twitter size={28} /></a>
                <a href="https://www.facebook.com/people/Poeage/61575953696329/?rdid=X9UYi7Nkcj7AV5ME&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Gcq6JPLpL%2F" className="hover:text-indigo-400"><Facebook size={28} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Poeage Corporation Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
