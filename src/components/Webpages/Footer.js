import React from "react";
import logo from "../../assests/Poeage_Logo_1.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  
} from "lucide-react";

// Separate services data
const services = [
  { name: "AI & ML Solutions", path: "/ai" },
  { name: "Web Development", path: "/web" },
  { name: "Mobile App Development", path: "/appde" },
  { name: "Software Tools & Automation", path: "/soft" },
  { name: "Cloud & Infrastructure", path: "/cloud" },
];

const quickLinks = [
  { name: "About Us", path: "/aboutus" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Blog", path: "/blog" },
];

const supportLinks = [
  { name: "FAQ", path: "/faq" },
  { name: "Help Center", path: "/help-center" },
  { name: "Contact Us", path: "/quotes" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
];

const socialLinks = [
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/poeage",
    color: "hover:text-blue-400",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/poeage_technology",
    color: "hover:text-pink-500",
  },
  { Icon: Twitter, href: "https://x.com/PoeageCom", color: "hover:text-blue-300" },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/share/1BjULrjR2w/",
    color: "hover:text-blue-600",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Logo & Intro */}
        <div className="text-center md:text-left">
          <img
            src={logo}
            alt="Poeage Logo"
            className="w-28 mx-auto md:mx-0 mb-4"
          />
          <p className="text-sm text-gray-500">
            Poeage Technology delivers cutting-edge solutions to empower
            businesses globally.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.path}
                  className="hover:text-cyan-600 transition block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services - aligned neatly */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((service, idx) => (
              <li key={idx}>
                <a
                  href={service.path}
                  className="items-center gap-2 hover:text-cyan-600 transition block"
                >
                  <span className="text-cyan-600">{service.icon}</span>
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support & Social */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm mb-6">
            {supportLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.path}
                  className="hover:text-cyan-600 transition block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          </div>

          <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4">Support</h4>
          <a
            href="tel:+918056889616"
            className="block text-sm text-cyan-600 font-medium"
          >
            +91 805-688-9616
          </a>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {socialLinks.map(({ Icon, href, color }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition ${color}`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
