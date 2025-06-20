import React, { useContext, useEffect, useState } from "react";
import { DContext } from "../Datacontext/Datacontext.js";
import logo from "../../assests/logo.png";
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

  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* About Us Section */}
        <section className="container mx-auto py-8 px-4 sm:px-6 flex justify-center relative z-10">
          <div className="bg-gray-900 text-gray-200 rounded-2xl p-6 sm:p-10 w-full max-w-3xl text-center shadow-lg transition-all duration-700">
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
        </section>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
          {/* Company Info */}
          <div className="text-center lg:text-left transition-opacity duration-700">
            <img
              src={logo}
              alt="Poeage Corporation"
              className="h-20 w-56 mb-4 mx-auto lg:mx-0"
            />
            <h2 className="text-3xl">Poeage Tech.Pvt.Ltd</h2>
            <p className="text-gray-400 mt-2">
              Leading IT solutions for your business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left transition-opacity duration-700">
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
          </div>

          {/* Contact & Social */}
          <div className="grid grid-cols-2 gap-4 text-sm transition-opacity duration-700">
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
                    color: "hover:text-cyan-500",
                  },
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/poeage__com",
                    label: "Instagram",
                    color: "hover:text-pink-500",
                  },
                  {
                    Icon: Twitter,
                    href: "https://x.com/PoeageCom",
                    label: "Twitter",
                    color: "hover:text-blue-500",
                  },
                  {
                    Icon: Facebook,
                    href: "https://www.facebook.com/share/1BjULrjR2w/",
                    label: "Facebook",
                    color: "hover:text-sky-400",
                  },
                ].map(({ Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-transform duration-300 transform hover:scale-110 ${color}`}
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm text-gray-500 relative z-10 transition-opacity duration-700">
          <p>
            &copy; {new Date().getFullYear()} Poeage IT Solution Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-lg z-50 border-2 border-white transition-transform duration-300 hover:scale-110 hover:rotate-12"
          aria-label="Back to top"
        >
          <span className="text-xl font-bold animate-bounce">↑</span>
        </button>
      )}
    </footer>
  );
};

export default Footer;
