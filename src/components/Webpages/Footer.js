import React, { useContext, useEffect, useState } from "react";
import { DContext } from "../Datacontext/Datacontext.js";
import logo from "../../assests/Poeage_Logo_10.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MailIcon,
  PhoneIcon,
  MessageCircle,
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

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white pt-24 pb-12 overflow-hidden">
      {/* Floating Gradient Waves */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 animate-wave -top-1/2 -left-1/4 rounded-full blur-3xl"></div>
        <div className="absolute w-[120%] h-[120%] bg-gradient-to-l from-pink-400/30 via-purple-500/20 to-blue-400/30 animate-wave2 -bottom-1/2 -right-1/4 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 space-y-16">
        {/* About Section */}
        <section className="max-w-4xl mx-auto text-center bg-black/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl animate-fadeIn">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-blue-400 mb-4">
            About Us
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Welcome to{" "}
            <span className="text-blue-400 font-semibold">
              Poeage Technology
            </span>
            , your trusted partner in futuristic IT and web development.
          </p>
          <a
            href="/Aboutus"
            className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Explore More
          </a>
        </section>

        {/* Info Blocks */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 animate-fadeIn delay-200">
          {/* Logo & Description */}
          <div className="text-center lg:text-left">
            <img
              src={logo}
              alt="Poeage Logo"
              className="h-32 w-auto mb-4 mx-auto lg:mx-0 drop-shadow-lg"
            />
            <h3 className="text-2xl font-bold">Poeage Technology Pvt. Ltd</h3>
            <p className="text-gray-400 mt-2">
              Powering innovation for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {Array.isArray(navbar) && navbar.length > 0 ? (
                navbar.map(({ name, path }) => (
                  <li key={name}>
                    <a
                      href={path}
                      className="hover:text-cyan-400 hover:underline transition-all"
                    >
                      {name}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No links available</li>
              )}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <MailIcon className="w-5 h-5 text-pink-400" />
                  <a href="mailto:info@poeage.com">info@poeage.com</a>
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <PhoneIcon className="w-5 h-5 text-green-400" />
                  <a href="tel:7358039616">73580-39616</a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/poeage" },
                  { Icon: Instagram, href: "https://www.instagram.com/poeage_technology?igsh=MTljMmMyanY4dDlsbw==" },
                  { Icon: Twitter, href: "https://x.com/PoeageCom" },
                  { Icon: Facebook, href: "https://www.facebook.com/share/1BjULrjR2w/" },
                ].map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-transform hover:scale-110"
                  >
                    <Icon size={26} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm animate-fadeIn delay-400">
          &copy; {new Date().getFullYear()} Poeage Technology Pvt. Ltd. All rights reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-full shadow-lg border-2 border-white hover:scale-110 hover:rotate-12 transition-all z-50"
          aria-label="Back to top"
        >
          <span className="text-xl font-bold animate-bounce">↑</span>
        </button>
      )}

      {/* Animation Styles */}
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
          }
          @keyframes wave2 {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(-180deg) scale(1.1); }
            100% { transform: rotate(-360deg) scale(1); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes glow {
            0% { box-shadow: 0 0 10px cyan; }
            50% { box-shadow: 0 0 25px cyan, 0 0 50px blue; }
            100% { box-shadow: 0 0 10px cyan; }
          }
          .animate-wave { animation: wave 20s linear infinite; }
          .animate-wave2 { animation: wave2 25s linear infinite; }
          .animate-fadeIn { animation: fadeIn 1s ease both; }
          .animate-glow { animation: glow 2s ease-in-out infinite alternate; }
        `}
      </style>
    </footer>
  );
};

export default Footer;
