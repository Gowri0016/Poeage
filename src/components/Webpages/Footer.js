import React from "react";
import logo from "../../assests/Poeage_Logo_1.png";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const services = [
  { name: "AI & ML Solutions", path: "/ai" },
  { name: "Web Development", path: "/web" },
  { name: "Mobile App Development", path: "/appde" },
  { name: "Software Tools & Automation", path: "/soft" },
  { name: "Cloud & Infrastructure", path: "/cloud" },
];

const quickLinks = [
  { name: "About Us", path: "/aboutus" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Blog", path: "/blog" },
  { name: "Services", path: "/serve" },
];

const supportLinks = [
  { name: "FAQ", path: "/faq" },
  { name: "Help Center", path: "/help-center" },
  { name: "Contact Us", path: "/quotes" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
];

const socialLinks = [
  { Icon: Linkedin, href: "https://www.linkedin.com/in/poeage" },
  { Icon: Instagram, href: "https://www.instagram.com/poeage_technology" },
  { Icon: Twitter, href: "https://x.com/PoeageCom" },
  { Icon: Facebook, href: "https://www.facebook.com/share/1BjULrjR2w/" },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-16 px-8 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <img src={logo} alt="Poeage Logo" className="w-28 mx-auto md:mx-0 mb-4" />
          <p className="text-sm text-gray-600">
            At Poeage Technology, we craft intelligent, scalable, and future-ready
            solutions that empower innovation worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">What We Do</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.path} className="text-gray-700 hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((service, i) => (
              <li key={i}>
                <a href={service.path} className="text-gray-700 hover:underline">
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            {supportLinks.map((link, i) => (
              <li key={i}>
                <a href={link.path} className="text-gray-700 hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
          <a href="tel:+918056889616" className="block text-sm font-medium text-gray-700 mb-2">
            +91 805-688-9616
          </a>
          <p className="text-sm text-gray-600">
            36A, Main Road, Ayyamplayam <br /> Kavundhapadi, Erode, Tamil Nadu
          </p>

          <div className="flex justify-center md:justify-start space-x-4 mt-5">
            {socialLinks.map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Poeage Technology Pvt. Ltd. — Empowering Digital Innovation.</p>
      </div>
    </footer>
  );
};

export default Footer;