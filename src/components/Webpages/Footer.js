import React from "react";
import logo from "../../assests/Poeage_Logo_1.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Brain,
  Code,
  Palette,
  Rocket,
  Globe
} from "lucide-react";

// Separate services data
const services = [
  { icon: <Brain size={20} />, name: "AI & ML Solutions", path: "/ai" },
  { icon: <Code size={20} />, name: "Web Development", path: "/web" },
  { icon: <Palette size={20} />, name: "Mobile App Development", path: "/appde" },
  { icon: <Rocket size={20} />, name: "Software Tools & Automation", path: "/soft" },
  { icon: <Globe size={20} />, name: "Cloud & Infrastructure", path: "/cloud" },
];

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Areas We Serve", path: "/areas" },
];

const supportLinks = [
  { name: "FAQ", path: "/faq" },
  { name: "Help Center", path: "/help-center" },
  { name: "Contact Us", path: "/quotes" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
];

const socialLinks = [
  { Icon: Linkedin, href: "https://www.linkedin.com/in/poeage", color: "hover:text-blue-400" },
  { Icon: Instagram, href: "https://www.instagram.com/poeage_technology", color: "hover:text-pink-500" },
  { Icon: Twitter, href: "https://x.com/PoeageCom", color: "hover:text-blue-300" },
  { Icon: Facebook, href: "https://www.facebook.com/share/1BjULrjR2w/", color: "hover:text-blue-600" },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* Logo & Intro */}
        <div className="text-center md:text-left">
          <img src={logo} alt="Poeage Logo" className="w-28 mx-auto md:mx-0 mb-4" />
          <p className="text-sm text-gray-500">
            Poeage Technology delivers cutting-edge solutions to empower businesses globally.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.path} className="hover:text-cyan-600 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div className="text-center">
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((service, idx) => (
              <li key={idx}>
                <a href={service.path} className="flex items-center gap-2 hover:text-cyan-600 transition">
                  {service.icon} {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div className="text-center">
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            {supportLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.path} className="hover:text-cyan-600 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="text-center md:text-right">
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-500 mb-2">
            Reach out to start your project or ask any questions.
          </p>
          <a href="tel:+918056889616" className="block text-sm text-cyan-600 font-medium">
            +91 805-688-9616
          </a>
          <div className="flex justify-center md:justify-end space-x-4 mt-4">
            {socialLinks.map(({ Icon, href, color }, idx) => (
              <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition ${color}`}>
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
